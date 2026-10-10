const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

const ids = ['mind', 'time', 'reality', 'space', 'power', 'soul'];
const broken = "svgPath: 'uiux/logostones/.png'";
let startIdx = 0;

ids.forEach(id => {
  const fixed = "svgPath: 'uiux/logostones/" + id + ".png'";
  const idx = app.indexOf(broken, startIdx);
  if (idx !== -1) {
    app = app.substring(0, idx) + fixed + app.substring(idx + broken.length);
    startIdx = idx + fixed.length;
    console.log('Fixed ' + id + ' svgPath');
  } else {
    console.log('Not found for ' + id);
  }
});

fs.writeFileSync('app.js', app);

// Also clear old irrelevant snippetHtml from the fallback STONES_DATA in app.js
// They are template literals with number sequences and matrices
// We'll remove snippetHtml content (set to empty) for questions where it's old content
console.log('Done fixing app.js');
