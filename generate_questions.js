const fs = require('fs');

// Fix app.js — repair corrupted svgPath and clear old snippetHtml
let app = fs.readFileSync('app.js', 'utf8');

// Fix all corrupted svgPath (the regex replaced 'logostones/mind.svg' -> 'logostones/.png' breaking them)
const stoneIds = ['mind', 'time', 'reality', 'space', 'power', 'soul'];
stoneIds.forEach(id => {
  // Replace broken svgPath: 'uiux/logostones/.png' -> correct per stone
  app = app.replace(
    new RegExp(`(id: '${id}',[\\s\\S]*?svgPath: 'uiux/logostones/)(\\.png')`, 'm'),
    `$1${id}.png'`
  );
});

fs.writeFileSync('app.js', app);
console.log('Fixed svgPath in app.js');

// Now fix questions.json — clean snippetHtml, fix paths, use only what belongs
const questions = JSON.parse(fs.readFileSync('questions.json', 'utf8'));

const stoneColors = {
  mind: '#EAB308', time: '#10B981', reality: '#EF4444',
  space: '#3B82F6', power: '#A855F7', soul: '#F97316'
};

// Build proper hero carousel HTML for Time Stone Q1
const heroCarouselSlide1 = `<div class="grid grid-cols-4 gap-3 p-3">
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/spiderman.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/ironman.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/cyclops.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/ironman.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/dr_doom.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/dr_strange.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/luki.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/vision.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
</div>`;

const heroCarouselSlide2 = `<div class="grid grid-cols-4 gap-3 p-3">
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/ironman.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/cyclops.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/ironman.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/dr_doom.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/dr_strange.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/heros/vision.png" class="w-16 h-20 object-cover rounded border border-outline-variant/40 shadow-md"/></div>
</div>`;

// Artifact carousel for Time Q2
const artifactSlide1 = `<div class="flex flex-wrap justify-center gap-6 p-3">
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/shield.png" class="w-20 h-20 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/hammer.png" class="w-20 h-20 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/tesseract.png" class="w-20 h-20 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/arcreactor.png" class="w-20 h-20 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/gauntlet.png" class="w-20 h-20 object-contain drop-shadow-lg"/></div>
</div>`;

const artifactSlide2 = `<div class="flex flex-wrap justify-center gap-6 p-3">
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/shield.png" class="w-20 h-20 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/hammer.png" class="w-20 h-20 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/tesseract.png" class="w-20 h-20 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/arcreactor.png" class="w-20 h-20 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logo_soai.png" class="w-20 h-20 object-contain drop-shadow-lg"/></div>
</div>`;

// Stone colors for Time Q3
const stonesSlide1 = `<div class="flex flex-wrap justify-center gap-6 p-3">
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/mind.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/time.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/reality.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/space.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/power.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/soul.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
</div>`;

const stonesSlide2 = `<div class="flex flex-wrap justify-center gap-6 p-3">
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/mind.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1" style="filter: hue-rotate(120deg) saturate(2);"><img src="uiux/logostones/power.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/reality.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/space.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/power.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/soul.png" class="w-14 h-14 object-contain drop-shadow-lg"/></div>
</div>`;

function makeCarousel(slide1Content, slide2Content) {
  return `<div class="w-full rounded-lg overflow-hidden border border-outline-variant/30 mt-2">
  <div id="slide-tabs" class="flex border-b border-outline-variant/30">
    <button onclick="this.parentElement.querySelector('.active-tab').classList.remove('active-tab','text-on-surface','border-b-2','border-[#10B981]'); this.classList.add('active-tab','text-on-surface','border-b-2','border-[#10B981]'); this.closest('.w-full').querySelector('.slide-1').classList.remove('hidden'); this.closest('.w-full').querySelector('.slide-2').classList.add('hidden');" class="active-tab flex-1 py-2 font-meta-mono text-xs text-on-surface border-b-2 border-[#10B981] bg-surface-container-high">SLIDE 1</button>
    <button onclick="this.parentElement.querySelector('.active-tab').classList.remove('active-tab','text-on-surface','border-b-2','border-[#10B981]'); this.classList.add('active-tab','text-on-surface','border-b-2','border-[#10B981]'); this.closest('.w-full').querySelector('.slide-1').classList.add('hidden'); this.closest('.w-full').querySelector('.slide-2').classList.remove('hidden');" class="flex-1 py-2 font-meta-mono text-xs text-secondary bg-surface-container">SLIDE 2</button>
  </div>
  <div class="slide-1 bg-surface-container">${slide1Content}</div>
  <div class="slide-2 bg-surface-container hidden">${slide2Content}</div>
</div>`;
}

// Map question ids to their correct snippetHtml
// Questions 3 (index 2) = hero disappearance, 4 (index 3) = artifacts, 5 (index 4) = stone colors
const fixedQuestions = questions.map((q, i) => {
  let snippetHtml = '';

  // Time stone hero disappearance
  if (q.id === 'time' && q.question && q.question.includes('Mysterious Disappearance')) {
    snippetHtml = makeCarousel(heroCarouselSlide1, heroCarouselSlide2);
  }
  // Time stone artifact
  else if (q.id === 'time' && q.question && q.question.includes('Artifact')) {
    snippetHtml = makeCarousel(artifactSlide1, artifactSlide2);
  }
  // Time stone color glitch
  else if (q.id === 'time' && q.question && q.question.includes('Color Glitch')) {
    snippetHtml = makeCarousel(stonesSlide1, stonesSlide2);
  }
  // All other questions — no snippet
  else {
    snippetHtml = '';
  }

  return {
    ...q,
    snippetHtml,
    pngPath: `uiux/logostones/${q.id}.png`,
    svgPath: `uiux/logostones/${q.id}.png`
  };
});

fs.writeFileSync('questions.json', JSON.stringify(fixedQuestions, null, 2));
console.log('Fixed questions.json — cleaned snippetHtml and PNG paths');
