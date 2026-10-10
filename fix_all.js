const fs = require('fs');
const path = require('path');

// ============================================================
// FIX 1: server.js — add decodeURIComponent so space-paths work
// ============================================================
let server = fs.readFileSync('server.js', 'utf8');
if (!server.includes('decodeURIComponent')) {
  server = server.replace(
    "  let reqUrl = req.url.split('?')[0];",
    "  let reqUrl = decodeURIComponent(req.url.split('?')[0]);"
  );
  fs.writeFileSync('server.js', server);
  console.log('✓ Fixed server.js: added decodeURIComponent');
} else {
  console.log('✓ server.js already has decodeURIComponent');
}

// ============================================================
// FIX 2: app.js — restore loadQuestions after STONES_DATA block
// ============================================================
let app = fs.readFileSync('app.js', 'utf8');

// Check if loadQuestions is already there
if (app.includes('async function loadQuestions') || app.includes('function loadQuestions')) {
  console.log('✓ loadQuestions already exists in app.js');
} else {
  // Insert loadQuestions right before the INITIAL_LEADERBOARD definition
  const insertAfter = "  const INITIAL_LEADERBOARD = [";
  const loadQFn = `
  async function loadQuestions() {
    try {
      const res = await fetch('questions.json?t=' + Date.now());
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          STONES_DATA.length = 0;
          data.forEach(q => {
            const fallback = { color: '#EAB308', colorRing: 'ring-[#EAB308]/20', textColor: 'text-[#EAB308]' };
            STONES_DATA.push({
              ...fallback,
              ...q,
              pngPath: q.pngPath || \`uiux/logostones/\${q.id}.png\`,
              svgPath: q.pngPath || \`uiux/logostones/\${q.id}.png\`
            });
          });
          console.log('[Kiosk] Loaded questions.json (' + data.length + ' challenges)');
        }
      }
    } catch (err) {
      console.warn('[Kiosk] Using fallback stones data:', err);
    }
  }

  `;

  const idx = app.indexOf(insertAfter);
  if (idx !== -1) {
    app = app.substring(0, idx) + loadQFn + app.substring(idx);
    fs.writeFileSync('app.js', app);
    console.log('✓ Restored loadQuestions() in app.js');
  } else {
    console.log('✗ Could not find insertion point for loadQuestions in app.js');
  }
}

console.log('\nAll fixes applied! Restart server.js to apply server fix.');
