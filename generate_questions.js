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
// Filter out Mind Q3, Reality Q3, Space Q2, Soul Q2
const filtered = questions.filter(q => {
  if (q.id === 'mind' && q.question.includes('The Sequence')) return false;
  if (q.id === 'reality' && q.question.includes('Group Work Crisis')) return false;
  if (q.id === 'space' && q.question.includes('Emergency Exit')) return false;
  if (q.id === 'soul' && q.question.includes('The Exam Crunch')) return false;
  return true;
});

// Build proper hero carousel HTML for Time Stone Q1 with ENLARGED images
const heroCarouselSlide1 = `<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 max-w-3xl mx-auto">
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/spiderman.png" alt="Spider-Man" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/ironman.png" alt="Iron Man" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/cyclops.png" alt="Cyclops" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/ironman.png" alt="Iron Man" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/dr_doom.png" alt="Dr Doom" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/dr_strange.png" alt="Dr Strange" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/luki.png" alt="Loki" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/vision.png" alt="Vision" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
</div>`;

const heroCarouselSlide2 = `<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 max-w-3xl mx-auto">
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/ironman.png" alt="Iron Man" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/cyclops.png" alt="Cyclops" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/ironman.png" alt="Iron Man" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/dr_doom.png" alt="Dr Doom" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/dr_strange.png" alt="Dr Strange" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1.5"><img src="uiux/heros/vision.png" alt="Vision" class="w-28 h-36 md:w-32 md:h-40 object-cover rounded-lg border border-outline-variant/40 shadow-lg transition-transform duration-200 hover:scale-105"/></div>
</div>`;

// Artifact carousel for Time Q2 with ENLARGED images
const artifactSlide1 = `<div class="flex flex-wrap justify-center items-center gap-6 md:gap-8 p-4">
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/shield.com.png" alt="Captain America Shield" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/hammer.com.png" alt="Thor Hammer" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/tesseract.com.png" alt="Tesseract" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/arcreactor.com.png" alt="Arc Reactor" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/gauntlet.com.png" alt="Infinity Gauntlet" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
</div>`;

const artifactSlide2 = `<div class="flex flex-wrap justify-center items-center gap-6 md:gap-8 p-4">
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/shield.com.png" alt="Captain America Shield" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/hammer.com.png" alt="Thor Hammer" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/tesseract.com.png" alt="Tesseract" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/more_assets/arcreactor.com.png" alt="Arc Reactor" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logo_soai.png" alt="School of AI Logo" class="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
</div>`;

// Stone colors for Time Q3 with ENLARGED images
const stonesSlide1 = `<div class="flex flex-wrap justify-center items-center gap-6 md:gap-8 p-4">
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/mind.png" alt="Mind Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/time.png" alt="Time Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/reality.png" alt="Reality Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/space.png" alt="Space Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/power.png" alt="Power Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/soul.png" alt="Soul Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
</div>`;

const stonesSlide2 = `<div class="flex flex-wrap justify-center items-center gap-6 md:gap-8 p-4">
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/mind.png" alt="Mind Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/power.png" alt="Power Stone (Glitch)" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/reality.png" alt="Reality Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/space.png" alt="Space Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/power.png" alt="Power Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
  <div class="flex flex-col items-center gap-1"><img src="uiux/logostones/soul.png" alt="Soul Stone" class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl transition-transform duration-200 hover:scale-105"/></div>
</div>`;

function makeCarousel(slide1Content, slide2Content) {
  return `<div class="w-full rounded-lg overflow-hidden border border-outline-variant/30 mt-2">
  <div id="slide-tabs" class="flex border-b border-outline-variant/30">
    <button type="button" onclick="window.__switchQuizSlide ? window.__switchQuizSlide(1) : (this.parentElement.querySelector('.active-tab').classList.remove('active-tab','text-on-surface','border-b-2','border-[#10B981]'), this.classList.add('active-tab','text-on-surface','border-b-2','border-[#10B981]'), this.closest('.w-full').querySelector('.slide-1').classList.remove('hidden'), this.closest('.w-full').querySelector('.slide-2').classList.add('hidden'))" class="slide-tab-btn active-tab flex-1 py-2.5 font-meta-mono text-xs text-on-surface border-b-2 border-[#10B981] bg-surface-container-high transition-colors">SLIDE 1</button>
    <button type="button" onclick="window.__switchQuizSlide ? window.__switchQuizSlide(2) : (this.parentElement.querySelector('.active-tab').classList.remove('active-tab','text-on-surface','border-b-2','border-[#10B981]'), this.classList.add('active-tab','text-on-surface','border-b-2','border-[#10B981]'), this.closest('.w-full').querySelector('.slide-1').classList.add('hidden'), this.closest('.w-full').querySelector('.slide-2').classList.remove('hidden'))" class="slide-tab-btn flex-1 py-2.5 font-meta-mono text-xs text-secondary bg-surface-container hover:text-on-surface transition-colors">SLIDE 2</button>
  </div>
  <div class="slide-1 bg-surface-container py-2">${slide1Content}</div>
  <div class="slide-2 bg-surface-container hidden py-2">${slide2Content}</div>
</div>`;
}

const stoneCounters = {};

const fixedQuestions = filtered.map((q, i) => {
  stoneCounters[q.id] = (stoneCounters[q.id] || 0) + 1;
  const questionNumInStone = stoneCounters[q.id];
  const sequentialNumber = String(i + 1).padStart(2, '0');

  let snippetHtml = '';
  let hasSlideTimer = undefined;
  let timeLimitMs = undefined;

  // Time stone questions have enlarged carousel & 10s countdown timer
  if (q.id === 'time') {
    hasSlideTimer = true;
    timeLimitMs = 10000;
    if (q.question && q.question.includes('Mysterious Disappearance')) {
      snippetHtml = makeCarousel(heroCarouselSlide1, heroCarouselSlide2);
    } else if (q.question && q.question.includes('Artifact')) {
      snippetHtml = makeCarousel(artifactSlide1, artifactSlide2);
    } else if (q.question && q.question.includes('Color Glitch')) {
      snippetHtml = makeCarousel(stonesSlide1, stonesSlide2);
    }
  }

  const updated = {
    ...q,
    number: sequentialNumber,
    directive: `QUESTION ${questionNumInStone}`,
    snippetHtml,
    pngPath: `uiux/logostones/${q.id}.png`,
    svgPath: `uiux/logostones/${q.id}.png`
  };

  // Clean timer properties: Power has NO timers, Time has slide timer
  if (hasSlideTimer) {
    updated.hasSlideTimer = true;
    updated.timeLimitMs = timeLimitMs;
  } else {
    delete updated.hasSlideTimer;
    delete updated.isSpeedChallenge;
    delete updated.timeLimitMs;
  }

  return updated;
});

fs.writeFileSync('questions.json', JSON.stringify(fixedQuestions, null, 2));
console.log('Fixed questions.json — 14 challenges with enlarged slide carousels and timer configuration');
