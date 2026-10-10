/**
 * THE SIX STONES • School of AI @ ESI
 * Single-PC Live Event Kiosk Engine
 * Strictly follows the generated Stitch UI/UX design specifications.
 */

(function () {
  'use strict';

  // ========================================================
  // 1. DATA DEFINITIONS & QUIZ CONTENT
  // ========================================================

  let STONES_DATA = [
    {
      id: 'mind', number: '01', name: 'MIND STONE',
      domain: 'Logic & Deductive Reasoning', difficulty: 'EASY', value: 100,
      color: '#EAB308', colorRing: 'ring-[#EAB308]/20', textColor: 'text-[#EAB308]',
      svgPath: 'uiux/logostones/mind.png', pngPath: 'uiux/logostones/mind.png',
      directive: 'MIND STONE — Tests Intelligence & Logic',
      question: 'Guess Who? I can fly, but I have no wings. I have a glowing heart, but it is made of metal. I\'m a genius who built a powerful suit to save the world. Who am I?',
      snippetHtml: '',
      options: [
        { key: 'A', text: 'Thor — unemployed without his hammer.' },
        { key: 'B', text: 'Spider-Man / Peter Parker — saving the world while failing to save his sleep schedule.' },
        { key: 'C', text: 'Batman — wrong universe, bro.' },
        { key: 'D', text: 'Iron Man / Tony Stark — the billionaire who made therapy everyone else\'s problem.' }
      ],
      correctKey: 'D',
      explanation: 'It\'s Tony Stark — the genius billionaire with the glowing arc reactor heart and the iconic Iron Man suit.',
      nextLabel: 'NEXT CHALLENGE: TIME STONE',
      quote: '"Your intellect deconstructs all complexity."',
      citation: 'Analytical throughput reached peak structural integrity.'
    },
    {
      id: 'time', number: '02', name: 'TIME STONE',
      domain: 'Pattern Recognition & Memory', difficulty: 'MEDIUM', value: 100,
      color: '#10B981', colorRing: 'ring-[#10B981]/20', textColor: 'text-[#10B981]',
      svgPath: 'uiux/logostones/time.png', pngPath: 'uiux/logostones/time.png',
      hasSlideTimer: true, timeLimitMs: 10000,
      directive: 'TIME STONE — Tests Memory & Observation',
      question: 'The Mysterious Disappearance: Which two characters disappeared in Slide 2?',
      snippetHtml: '',
      options: [
        { key: 'A', text: 'Spider-Man and Loki — two legends vanished without saying goodbye.' },
        { key: 'B', text: 'Iron Man and Cyclops — the genius and the team leader are missing.' },
        { key: 'C', text: 'Doctor Doom and Vision — one planned the chaos, the other saw it coming.' },
        { key: 'D', text: 'Doctor Strange and Vision — one opened a portal, the other disappeared into it.' }
      ],
      correctKey: 'A',
      explanation: 'Spider-Man and Loki disappeared in Slide 2.',
      nextLabel: 'NEXT CHALLENGE: REALITY STONE',
      quote: '"You see what others forget."',
      citation: 'Cognitive latency indices placed respondent in the 99th percentile.'
    },
    {
      id: 'reality', number: '03', name: 'REALITY STONE',
      domain: 'Lateral Thinking & Creativity', difficulty: 'MEDIUM', value: 100,
      color: '#EF4444', colorRing: 'ring-[#EF4444]/20', textColor: 'text-[#EF4444]',
      svgPath: 'uiux/logostones/reality.png', pngPath: 'uiux/logostones/reality.png',
      directive: 'REALITY STONE — Real-life problems. Unrealistic solutions.',
      question: 'Thanos works in customer service. An angry customer calls because their order never arrived. What is the most appropriate response?',
      snippetHtml: '',
      options: [
        { key: 'A', text: '"I\'m sorry for the inconvenience. Let me check your order and help resolve this."' },
        { key: 'B', text: '"Sir, please calm down before I remove half of your family."' },
        { key: 'C', text: '"Have you tried turning the universe off and on again?"' },
        { key: 'D', text: '"Your complaint has been received. Half of our team is now unavailable."' }
      ],
      correctKey: 'A',
      explanation: 'A is the most appropriate customer service response.',
      nextLabel: 'NEXT CHALLENGE: SPACE STONE',
      quote: '"You bend impossible constraints to your will."',
      citation: 'Divergent cognition heuristics demonstrated superior stochastic flexibility.'
    },
    {
      id: 'space', number: '04', name: 'SPACE STONE',
      domain: 'Strategy & Decisions', difficulty: 'MEDIUM', value: 100,
      color: '#3B82F6', colorRing: 'ring-[#3B82F6]/20', textColor: 'text-[#3B82F6]',
      svgPath: 'uiux/logostones/space.png', pngPath: 'uiux/logostones/space.png',
      directive: 'SPACE STONE — Strategy & Decisions',
      question: 'Thanos\'s army is approaching, and your team is outnumbered. You have 500 soldiers and a powerful armored hero. What\'s the smartest strategy?',
      snippetHtml: '',
      options: [
        { key: 'A', text: 'Send everyone in the same direction without a plan. Teamwork makes the dream work, right?' },
        { key: 'B', text: 'Use a narrow passage to funnel the enemies into a smaller group, making them easier to defend against.' },
        { key: 'C', text: 'Send one soldier to fight the entire army. He looks confident.' },
        { key: 'D', text: 'Ask the enemy to reschedule because you have an interrogation on Moodle at 7 AM.' }
      ],
      correctKey: 'B',
      explanation: 'Funneling enemies through a narrow passage reduces their numerical advantage.',
      nextLabel: 'NEXT CHALLENGE: POWER STONE',
      quote: '"You navigate multidimensional topology effortlessly."',
      citation: 'Topological mapping benchmarks established flawless shortest-path graph optimization.'
    },
    {
      id: 'power', number: '05', name: 'POWER STONE',
      domain: 'Cognitive Speed & Quick Thinking', difficulty: 'VELOCITY-MAX', value: 150,
      color: '#A855F7', colorRing: 'ring-[#A855F7]/20', textColor: 'text-[#A855F7]',
      svgPath: 'uiux/logostones/power.png', pngPath: 'uiux/logostones/power.png',
      directive: 'POWER STONE — Quick Thinking, Short answers.',
      question: 'Doctor Strange examines 14,000,605 possible futures and discovers that only one leads to victory. What can we conclude?',
      snippetHtml: '',
      options: [
        { key: 'A', text: 'Every future leads to victory.' },
        { key: 'B', text: 'Exactly one of the futures he examined leads to victory.' },
        { key: 'C', text: 'There are no possible winning futures. He checked the Analyse correction.' },
        { key: 'D', text: 'He forgot to check Moodle for the answer key.' }
      ],
      correctKey: 'B',
      explanation: 'Exactly one of the 14,000,605 futures leads to victory.',
      nextLabel: 'NEXT CHALLENGE: SOUL STONE',
      quote: '"Raw velocity channeled with unerring precision."',
      citation: 'Ultra-low cognitive latency under acute temporal countdown.'
    },
    {
      id: 'soul', number: '06', name: 'SOUL STONE',
      domain: 'Choices & Consequences', difficulty: 'OMEGA-1', value: 100,
      color: '#F97316', colorRing: 'ring-[#F97316]/20', textColor: 'text-[#F97316]',
      svgPath: 'uiux/logostones/soul.png', pngPath: 'uiux/logostones/soul.png',
      directive: 'SOUL STONE — Every decision has consequences.',
      question: 'An asteroid is heading toward a planet. You have one chance to use a powerful device to save as many people as possible. Which plan makes the most sense?',
      snippetHtml: '',
      options: [
        { key: 'A', text: 'Use the device to redirect the asteroid away from the planet.' },
        { key: 'B', text: 'Use it to build a giant statue commemorating the asteroid.' },
        { key: 'C', text: 'Wait until the asteroid arrives before deciding what to do.' },
        { key: 'D', text: 'Ask the asteroid to respect everyone\'s personal space.' }
      ],
      correctKey: 'A',
      explanation: 'Redirecting the asteroid is the only logical plan that saves the most lives.',
      nextLabel: 'FINALIZE EVALUATION & REVEAL STONE',
      quote: '"You carry the intuitive gravity of true leadership."',
      citation: 'Ethical heuristic weights resolved complex systemic equilibrium dilemmas.'
    }
  ];

  // Default initial leaderboard cache

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
              pngPath: q.pngPath || `uiux/logostones/${q.id}.png`,
              svgPath: q.pngPath || `uiux/logostones/${q.id}.png`
            });
          });
          console.log('[Kiosk] Loaded questions.json (' + data.length + ' challenges)');
          scheduleInitialAssetWarmup();
        }
      }
    } catch (err) {
      console.warn('[Kiosk] Using fallback stones data:', err);
    }
  }

  // ========================================================
  // IMAGE ASSET PRELOADING & CACHE SUBSYSTEM
  // ========================================================
  const imagePreloadCache = new Map();

  function preloadSingleImage(url) {
    if (!url || imagePreloadCache.has(url)) return Promise.resolve(imagePreloadCache.get(url));

    const p = new Promise(resolve => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        imagePreloadCache.set(url, img);
        resolve(img);
      };
      img.onerror = () => {
        if (url.endsWith('.webp')) {
          const fallbackSrc = url.replace(/\.webp$/, '.png');
          const fb = new Image();
          fb.onload = () => {
            imagePreloadCache.set(url, fb);
            resolve(fb);
          };
          fb.onerror = () => resolve(null);
          fb.src = fallbackSrc;
        } else {
          resolve(null);
        }
      };
      img.src = url;
    });

    imagePreloadCache.set(url, p);
    return p;
  }

  function extractImageUrlsFromHtml(html) {
    if (!html) return [];
    const urls = [];
    const regex = /src=["']([^"']+)["']/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      if (!urls.includes(match[1])) {
        urls.push(match[1]);
      }
    }
    return urls;
  }

  function preloadQuestionImages(questionIndex) {
    if (questionIndex < 0 || questionIndex >= STONES_DATA.length) return;
    const q = STONES_DATA[questionIndex];
    if (!q || !q.snippetHtml) return;
    const urls = extractImageUrlsFromHtml(q.snippetHtml);
    urls.forEach(url => preloadSingleImage(url));
  }

  function scheduleInitialAssetWarmup() {
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 150));
    idle(() => {
      // Challenge 3 (index 2) is Time Q1 (heroes) - the first challenge with slide imagery
      preloadQuestionImages(2);
      setTimeout(() => {
        preloadQuestionImages(3);
      }, 500);
      setTimeout(() => {
        preloadQuestionImages(4);
      }, 1000);
    });
  }

  function queueUpcomingAssetsPreload(currentIndex) {
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 80));
    idle(() => {
      preloadQuestionImages(currentIndex + 1);
      setTimeout(() => {
        preloadQuestionImages(currentIndex + 2);
      }, 250);
    });
  }

    const INITIAL_LEADERBOARD = [
    { rank: '01', name: 'Dr. Sarah Chen', stone: 'Mind', affinity: 96, score: 980, color: '#EAB308', svgPath: 'uiux/logostones/mind.png', pngPath: 'uiux/logostones/mind.png' },
    { rank: '02', name: 'Alex Mercer', stone: 'Time', affinity: 94, score: 940, color: '#10B981', svgPath: 'uiux/logostones/time.png', pngPath: 'uiux/logostones/time.png' },
    { rank: '03', name: 'Kaelen Voss', stone: 'Power', affinity: 91, score: 910, color: '#A855F7', svgPath: 'uiux/logostones/power.png', pngPath: 'uiux/logostones/power.png' },
    { rank: '04', name: 'Elena Rostova', stone: 'Space', affinity: 87, score: 870, color: '#3B82F6', svgPath: 'uiux/logostones/space.png', pngPath: 'uiux/logostones/space.png' },
    { rank: '05', name: 'Tarek Benali', stone: 'Soul', affinity: 84, score: 830, color: '#F97316', svgPath: 'uiux/logostones/soul.png', pngPath: 'uiux/logostones/soul.png' },
    { rank: '06', name: 'Zoya Moreau', stone: 'Reality', affinity: 81, score: 800, color: '#EF4444', svgPath: 'uiux/logostones/reality.png', pngPath: 'uiux/logostones/reality.png' }
  ];

  // ========================================================
  // 2. RUNTIME KIOSK SESSION STATE
  // ========================================================

  let sessionState = {
    sessionId: generateSessionId(),
    contestantName: '',
    currentStoneIndex: 0,
    answers: {},       // { stoneIndex: { selectedKey, isCorrect, latencyMs, pointsEarned } }
    totalScore: 0,
    startTime: null,
    questionStartTime: null,
    isAnswerSubmitted: false,
    timerIntervalId: null,
    timeRemainingMs: 0,
    hasSlideAutoTransitioned: false
  };

  let eventLeaderboard = [...INITIAL_LEADERBOARD];

  function generateSessionId() {
    const randomHex = Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
    return `TX-${randomHex}-ESI`;
  }

  // ========================================================
  // 3. DOM ELEMENTS CACHE
  // ========================================================

  const views = {
    home: document.getElementById('view-home'),
    enterName: document.getElementById('view-enter-name'),
    quiz: document.getElementById('view-quiz'),
    result: document.getElementById('view-result'),
    kioskReset: document.getElementById('view-kiosk-reset'),
    stonesMatrix: document.getElementById('view-stones-matrix'),
    standings: document.getElementById('view-standings')
  };

  const navBrand = document.getElementById('nav-brand');
  const navArena = document.getElementById('nav-arena');
  const navMatrix = document.getElementById('nav-matrix');
  const navStandings = document.getElementById('nav-standings');
  const headerContestantTag = document.getElementById('header-contestant-tag');

  const btnStartQuiz = document.getElementById('btn-start-quiz');
  const btnHowItWorks = document.getElementById('btn-how-it-works');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalDialog = document.getElementById('modal-dialog');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnModalDismiss = document.getElementById('btn-modal-dismiss');

  const formContestantName = document.getElementById('form-contestant-name');
  const inputContestantName = document.getElementById('input-contestant-name');
  const nameValidationError = document.getElementById('name-validation-error');
  const btnBackToHome = document.getElementById('btn-back-to-home');
  const btnContinueToQuiz = document.getElementById('btn-continue-to-quiz');

  const quizDynamicRoot = document.getElementById('quiz-dynamic-root');

  const btnResultViewStandings = document.getElementById('btn-result-view-standings');
  const btnResultNextContestant = document.getElementById('btn-result-next-contestant');

  const btnExecuteKioskReset = document.getElementById('btn-execute-kiosk-reset');
  const resetPurgeToast = document.getElementById('reset-purge-toast');
  const kioskLiveClock = document.getElementById('kiosk-live-clock');

  const btnMatrixBack = document.getElementById('btn-matrix-back');
  const btnMatrixStartEval = document.getElementById('btn-matrix-start-eval');

  const btnStandingsBack = document.getElementById('btn-standings-back');
  const btnStandingsPlay = document.getElementById('btn-standings-play');
  const standingsTableBody = document.getElementById('standings-table-body');

  const organizerModalBackdrop = document.getElementById('organizer-modal-backdrop');
  const btnCancelOrganizerReset = document.getElementById('btn-cancel-organizer-reset');
  const btnConfirmOrganizerReset = document.getElementById('btn-confirm-organizer-reset');
  const footerOrganizerBtn = document.getElementById('footer-organizer-btn');

  // ========================================================
  // 4. VIEW ROUTING ENGINE
  // ========================================================

  let currentViewName = 'home';
  let previousArenaView = 'home';

  function switchView(viewName) {
    currentViewName = viewName;

    // Clean up active timer when navigating away from quiz
    if (viewName !== 'quiz' && sessionState.timerIntervalId) {
      clearInterval(sessionState.timerIntervalId);
      sessionState.timerIntervalId = null;
    }

    // Track active arena view
    if (['home', 'enterName', 'quiz', 'result', 'kioskReset'].includes(viewName)) {
      previousArenaView = viewName;
    }

    Object.keys(views).forEach(key => {
      if (views[key]) {
        if (key === viewName) {
          views[key].classList.remove('view-hidden');
          views[key].classList.add('opacity-100');
        } else {
          views[key].classList.add('view-hidden');
        }
      }
    });

    // Update Nav active indicators
    updateNavState(viewName);

    // Scroll to top of viewport
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function updateNavState(viewName) {
    const activeClasses = ['text-on-surface', 'font-bold', 'border-b-2', 'border-primary-container'];
    const inactiveClasses = ['font-meta-mono', 'text-meta-mono', 'text-secondary'];

    [navArena, navMatrix, navStandings].forEach(link => {
      if (!link) return;
      link.classList.remove(...activeClasses);
      link.classList.remove('border-b-2', 'border-primary-container');
      link.classList.add(...inactiveClasses);
      link.removeAttribute('aria-current');
    });

    if (viewName === 'stonesMatrix' && navMatrix) {
      navMatrix.classList.remove(...inactiveClasses);
      navMatrix.classList.add(...activeClasses);
      navMatrix.setAttribute('aria-current', 'page');
    } else if (viewName === 'standings' && navStandings) {
      navStandings.classList.remove(...inactiveClasses);
      navStandings.classList.add(...activeClasses);
      navStandings.setAttribute('aria-current', 'page');
    } else if (navArena) {
      navArena.classList.remove(...inactiveClasses);
      navArena.classList.add(...activeClasses);
      navArena.setAttribute('aria-current', 'page');
    }

    // Contestant badge in header
    if (sessionState.contestantName && headerContestantTag) {
      headerContestantTag.textContent = sessionState.contestantName;
      headerContestantTag.classList.remove('hidden');
    } else if (headerContestantTag) {
      headerContestantTag.textContent = '';
      headerContestantTag.classList.add('hidden');
    }
  }

  // ========================================================
  // 5. MODAL SYSTEM (HOW IT WORKS & ORGANIZER RESET)
  // ========================================================

  function openHowItWorksModal() {
    if (!modalBackdrop || !modalDialog) return;
    modalBackdrop.classList.remove('hidden', 'pointer-events-none');
    modalBackdrop.classList.add('flex');
    requestAnimationFrame(() => {
      modalBackdrop.classList.remove('opacity-0');
      modalBackdrop.classList.add('opacity-100');
      modalDialog.classList.remove('scale-95');
      modalDialog.classList.add('scale-100');
    });
  }

  function closeHowItWorksModal() {
    if (!modalBackdrop || !modalDialog) return;
    modalBackdrop.classList.remove('opacity-100');
    modalBackdrop.classList.add('opacity-0');
    modalDialog.classList.remove('scale-100');
    modalDialog.classList.add('scale-95');
    setTimeout(() => {
      modalBackdrop.classList.remove('flex');
      modalBackdrop.classList.add('hidden', 'pointer-events-none');
    }, 200);
  }

  function openOrganizerModal() {
    if (!organizerModalBackdrop) return;
    organizerModalBackdrop.classList.remove('hidden', 'pointer-events-none');
    organizerModalBackdrop.classList.add('flex');
    requestAnimationFrame(() => {
      organizerModalBackdrop.classList.remove('opacity-0');
      organizerModalBackdrop.classList.add('opacity-100');
    });
  }

  function closeOrganizerModal() {
    if (!organizerModalBackdrop) return;
    organizerModalBackdrop.classList.remove('opacity-100');
    organizerModalBackdrop.classList.add('opacity-0');
    setTimeout(() => {
      organizerModalBackdrop.classList.remove('flex');
      organizerModalBackdrop.classList.add('hidden', 'pointer-events-none');
    }, 150);
  }

  // ========================================================
  // 6. CONTESTANT REGISTRATION LOGIC
  // ========================================================

  function handleNameSubmit() {
    const rawVal = inputContestantName.value.trim();
    if (!rawVal) {
      nameValidationError.classList.remove('hidden');
      inputContestantName.classList.add('border-error', 'shake');
      setTimeout(() => inputContestantName.classList.remove('shake'), 400);
      inputContestantName.focus();
      return;
    }

    nameValidationError.classList.add('hidden');
    inputContestantName.classList.remove('border-error');

    sessionState.contestantName = rawVal;
    sessionState.startTime = Date.now();
    sessionState.currentStoneIndex = 0;
    sessionState.totalScore = 0;
    sessionState.answers = {};

    updateNavState('quiz');
    startQuizRound(0);
  }

  // ========================================================
  // 7. QUIZ ENGINE (6 STONES CHALLENGES)
  // ========================================================

  let selectedOptionKey = null;

  function startQuizRound(stoneIndex) {
    if (stoneIndex >= STONES_DATA.length) {
      showFinalResult();
      return;
    }

    // Always clear any previous timer immediately to prevent cross-question leakage
    if (sessionState.timerIntervalId) {
      clearInterval(sessionState.timerIntervalId);
      sessionState.timerIntervalId = null;
    }

    sessionState.currentStoneIndex = stoneIndex;
    sessionState.isAnswerSubmitted = false;
    sessionState.hasSlideAutoTransitioned = false;
    sessionState.isSlide1Locked = false;
    sessionState.isSlide2Locked = false;
    sessionState.isTimerExpired = false;
    window.__isSlide1Locked = false;
    window.__isSlide2Locked = false;
    sessionState.questionStartTime = Date.now();
    selectedOptionKey = null;

    const stone = STONES_DATA[stoneIndex];
    renderQuizScreen(stone, stoneIndex);
    switchView('quiz');

    // Preload upcoming challenge images in the background so slide navigation is instant
    queueUpcomingAssetsPreload(stoneIndex);

    // If Time Stone question with slide timer, start observation countdown timer
    if (stone.id === 'time' && (stone.hasSlideTimer || stone.timeLimitMs)) {
      initTimeStoneSlideTimer(stone.timeLimitMs || 10000);
    }
  }

  function renderQuizScreen(stone, index) {
    const totalStones = STONES_DATA.length;
    const progressSegmentsHtml = Array.from({ length: totalStones }, (_, i) => {
      if (i < index) {
        return `<div class="h-full bg-on-surface flex-1"></div>`;
      } else if (i === index) {
        return `<div class="h-full bg-primary-fixed flex-1"></div>`;
      } else {
        return `<div class="h-full bg-surface-container-high flex-1"></div>`;
      }
    }).join('');

    const optionsHtml = stone.options.map(opt => {
      return `
        <button
          class="option-btn w-full text-left bg-surface-container p-space-md rounded-DEFAULT flex items-center justify-between transition-colors hover:bg-surface-container-high border border-transparent"
          data-option="${opt.key}"
          type="button"
        >
          <div class="flex items-center space-x-space-md min-w-0">
            <span class="key-box font-meta-mono text-meta-mono px-space-sm py-1 rounded-DEFAULT bg-surface-container-highest text-secondary shrink-0">[ ${opt.key} ]</span>
            <span class="font-body-lg text-body-lg text-on-surface truncate">${opt.text}</span>
          </div>
          <div class="status-marker-wrap flex items-center shrink-0">
            <span class="status-marker font-meta-mono text-meta-mono text-secondary/40">STANDBY</span>
          </div>
        </button>
      `;
    }).join('');

    const timerPodHtml = (stone.id === 'time' && (stone.hasSlideTimer || stone.timeLimitMs)) ? `
      <!-- Time Stone Tactical Observation Countdown Pod -->
      <div id="quiz-timer-pod" class="w-full bg-surface-container-low rounded-lg p-space-lg flex flex-col items-center justify-center relative shadow-xl overflow-hidden mb-space-lg border border-outline-variant/30">
        <div class="w-full flex items-center justify-between font-meta-mono text-label-caps text-secondary uppercase tracking-widest mb-space-xs">
          <span class="flex items-center space-x-1.5">
            <span class="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span id="timer-pod-label">OBSERVATION WINDOW • COMPARE SLIDES</span>
          </span>
          <span class="text-on-surface-variant font-meta-mono" id="timer-pod-sublabel">TEMPORAL DRIFT: 10.0 SEC</span>
        </div>
        <!-- Monospace Digital Readout -->
        <div class="flex items-baseline justify-center my-space-xs">
          <span class="font-timer-display text-timer-display font-bold tracking-tight text-[#10B981] tabular-nums" id="countdown-timer">00:10.0</span>
          <span class="font-meta-mono text-meta-mono text-on-surface-variant ml-space-sm uppercase">SEC</span>
        </div>
        <!-- Depletion Line -->
        <div class="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mt-space-sm">
          <div class="h-full bg-[#10B981] w-[100%] transition-all duration-75 ease-linear" id="depletion-bar"></div>
        </div>
      </div>
    ` : '';

    quizDynamicRoot.innerHTML = `
      <!-- Telemetry Sub-Header & Stage Context -->
      <div class="w-full flex flex-col gap-space-sm mb-space-lg">
        <div class="w-full flex items-center justify-between">
          <div class="flex items-center space-x-space-sm">
            ${stone.svgPath ? `<img src="${stone.svgPath}" alt="${stone.name}" class="w-7 h-7 object-contain shrink-0" />` : `<span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${stone.color};"></span>`}
            <span class="font-meta-mono text-meta-mono tracking-widest text-on-surface">CHALLENGE ${index + 1} / ${totalStones}</span>
            <span class="text-tertiary-container font-meta-mono text-meta-mono">//</span>
            <span class="font-label-caps text-label-caps uppercase tracking-wider" style="color: ${stone.color};">${stone.name}</span>
          </div>
          <div class="flex items-center space-x-space-md">
            <div class="hidden sm:flex items-center space-x-space-xs bg-surface-container-high px-space-sm py-1 rounded-DEFAULT">
              <span class="material-symbols-outlined text-secondary text-[14px]">terminal</span>
              <span class="font-meta-mono text-meta-mono text-secondary">NODE::L${index + 1}-SYS</span>
            </div>
            <div class="flex items-center space-x-space-xs bg-surface-container-high px-space-sm py-1 rounded-DEFAULT">
              <span class="material-symbols-outlined text-primary text-[14px]">fingerprint</span>
              <span class="font-meta-mono text-meta-mono text-on-surface uppercase truncate max-w-[130px]">CONTESTANT: ${escapeHtml(sessionState.contestantName)}</span>
            </div>
          </div>
        </div>
        <!-- Segmented Linear Progress Tracker -->
        <div class="w-full flex gap-space-xs h-1 bg-surface-container-low rounded-DEFAULT overflow-hidden">
          ${progressSegmentsHtml}
        </div>
      </div>

      ${timerPodHtml}

      <!-- Primary Challenge Module -->
      <div class="w-full bg-surface-container-low rounded-lg p-space-xl flex flex-col gap-space-xl border border-outline-variant/30 shadow-xl" id="question-card">
        <!-- Category & Metric Band -->
        <div class="flex items-center justify-between pb-space-sm bg-surface-container-low border-b border-outline-variant/20">
          <div class="flex items-center space-x-space-sm">
            <span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest">MODULE ${stone.number}</span>
            <span class="text-surface-container-highest">•</span>
            <span class="font-label-caps text-label-caps text-on-surface tracking-widest">${stone.domain.toUpperCase()}</span>
          </div>
          <div class="flex items-center space-x-space-sm">
            <span class="font-meta-mono text-meta-mono text-secondary">DIFFICULTY:</span>
            <span class="font-meta-mono text-meta-mono text-on-surface font-bold">${stone.difficulty}</span>
            <span class="text-surface-container-highest">/</span>
            <span class="font-meta-mono text-meta-mono text-secondary">VALUE: ${stone.value} PTS</span>
          </div>
        </div>

        <!-- Main Question Block -->
        <div class="flex flex-col gap-space-md">
          <span class="font-meta-mono text-meta-mono text-secondary uppercase tracking-wider">${stone.directive}</span>
          <h1 class="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
            ${stone.question}
          </h1>
          ${stone.subtext ? `<p class="font-body-sm text-body-sm text-secondary">${stone.subtext}</p>` : ''}
          ${stone.snippetHtml || ''}
        </div>

        <!-- Answer Selection Matrix -->
        <div class="flex flex-col gap-space-sm" id="answer-grid">
          ${optionsHtml}
        </div>

        <!-- Actions & Console Telemetry Footer (Standby State) -->
        <div id="quiz-action-bar" class="flex flex-col sm:flex-row items-center justify-between pt-space-md bg-surface-container-low gap-space-md border-t border-outline-variant/20">
          <div class="flex items-center space-x-space-sm text-secondary font-meta-mono text-meta-mono text-xs">
            <span class="material-symbols-outlined text-[16px] text-tertiary">info</span>
            <span>PRESS [1-4] OR CLICK TO REASSIGN VALUE</span>
          </div>
          <div class="flex items-center space-x-space-md w-full sm:w-auto">
            <button
              class="flex-1 sm:flex-initial px-space-md py-space-sm bg-surface-container text-secondary hover:text-on-surface hover:bg-surface-container-high font-meta-mono text-meta-mono text-xs rounded-DEFAULT transition-colors"
              id="btn-clear-selection"
              type="button"
            >
              CLEAR SELECTION
            </button>
            <button
              class="flex-1 sm:flex-initial px-space-xl py-space-sm bg-primary-container text-white font-title-sm text-title-sm font-bold tracking-wider rounded-DEFAULT hover:bg-[#C52828] active:bg-[#A71D1D] transition-colors flex items-center justify-center space-x-space-sm opacity-50 pointer-events-none"
              id="btn-submit-answer"
              type="button"
            >
              <span>${stone.isSpeedChallenge ? '[ CONFIRM RAPID INPUT ]' : 'SUBMIT ANSWER'}</span>
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        <!-- Feedback Container (Rendered on Submission) -->
        <div id="quiz-feedback-box" class="hidden flex flex-col gap-space-md pt-space-md border-t border-outline-variant/20"></div>

      </div>

      <!-- Telemetry Verification Strip -->
      <div class="w-full flex items-center justify-between mt-space-md px-space-xs text-secondary font-meta-mono text-meta-mono text-xs">
        <div class="flex items-center space-x-space-sm">
          <span class="text-tertiary-container">HASH:</span>
          <span class="text-on-surface/70">${sessionState.sessionId}</span>
        </div>
        <div class="flex items-center space-x-space-md">
          <span>SERVER LATENCY: 14MS</span>
          <span class="text-surface-container-highest">•</span>
          <span class="text-primary-fixed">SYNCHRONIZED WITH NODE-MASTER</span>
        </div>
      </div>
    `;

    bindQuizOptionEvents(stone, index);
  }

  function bindQuizOptionEvents(stone, index) {
    const optionButtons = quizDynamicRoot.querySelectorAll('.option-btn');
    const btnSubmit = document.getElementById('btn-submit-answer');
    const btnClear = document.getElementById('btn-clear-selection');

    function selectOption(key) {
      if (sessionState.isAnswerSubmitted) return;

      selectedOptionKey = key;
      optionButtons.forEach(btn => {
        const opt = btn.getAttribute('data-option');
        const keyBox = btn.querySelector('.key-box');
        const label = btn.querySelector('.font-body-lg');
        const markerWrap = btn.querySelector('.status-marker-wrap');

        if (opt === selectedOptionKey) {
          btn.className = 'option-btn w-full text-left bg-surface-container-high p-space-md rounded-DEFAULT flex items-center justify-between transition-colors border border-primary-container';
          keyBox.className = 'key-box font-meta-mono text-meta-mono px-space-sm py-1 rounded-DEFAULT bg-primary-container text-white font-bold shrink-0';
          label.className = 'font-body-lg text-body-lg text-on-surface font-semibold truncate';
          markerWrap.innerHTML = `
            <span class="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse mr-1.5"></span>
            <span class="status-marker font-meta-mono text-meta-mono text-primary-container font-bold">SELECTED</span>
          `;
        } else {
          btn.className = 'option-btn w-full text-left bg-surface-container p-space-md rounded-DEFAULT flex items-center justify-between transition-colors hover:bg-surface-container-high border border-transparent';
          keyBox.className = 'key-box font-meta-mono text-meta-mono px-space-sm py-1 rounded-DEFAULT bg-surface-container-highest text-secondary shrink-0';
          label.className = 'font-body-lg text-body-lg text-on-surface truncate';
          markerWrap.innerHTML = `<span class="status-marker font-meta-mono text-meta-mono text-secondary/40">STANDBY</span>`;
        }
      });

      if (btnSubmit) {
        btnSubmit.classList.remove('opacity-50', 'pointer-events-none');
      }
    }

    optionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-option');
        selectOption(key);
      });
    });

    if (btnClear) {
      btnClear.addEventListener('click', () => {
        if (sessionState.isAnswerSubmitted) return;
        selectedOptionKey = null;
        optionButtons.forEach(btn => {
          btn.className = 'option-btn w-full text-left bg-surface-container p-space-md rounded-DEFAULT flex items-center justify-between transition-colors hover:bg-surface-container-high border border-transparent';
          const keyBox = btn.querySelector('.key-box');
          const label = btn.querySelector('.font-body-lg');
          const markerWrap = btn.querySelector('.status-marker-wrap');
          if (keyBox) keyBox.className = 'key-box font-meta-mono text-meta-mono px-space-sm py-1 rounded-DEFAULT bg-surface-container-highest text-secondary shrink-0';
          if (label) label.className = 'font-body-lg text-body-lg text-on-surface truncate';
          if (markerWrap) markerWrap.innerHTML = `<span class="status-marker font-meta-mono text-meta-mono text-secondary/40">STANDBY</span>`;
        });
        if (btnSubmit) {
          btnSubmit.classList.add('opacity-50', 'pointer-events-none');
        }
      });
    }

    if (btnSubmit) {
      btnSubmit.addEventListener('click', () => {
        if (!selectedOptionKey || sessionState.isAnswerSubmitted) return;
        submitQuizAnswer(stone, index, selectedOptionKey);
      });
    }

    // Bind slide tab buttons for seamless manual navigation
    const slideTabBtns = quizDynamicRoot.querySelectorAll('#slide-tabs button, .slide-tab-btn');
    if (slideTabBtns.length >= 2) {
      slideTabBtns[0].addEventListener('click', (e) => {
        if (sessionState.isSlide1Locked || window.__isSlide1Locked) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        e.preventDefault();
        switchQuizSlide(1);
      });
      slideTabBtns[1].addEventListener('click', (e) => {
        e.preventDefault();
        switchQuizSlide(2);
      });
    }
  }

  function lockSlide1() {
    sessionState.isSlide1Locked = true;
    window.__isSlide1Locked = true;

    // Apply strict visual and interactive lock on Slide 1 tab button
    const tabsContainer = quizDynamicRoot.querySelector('#slide-tabs');
    if (tabsContainer) {
      const tabButtons = tabsContainer.querySelectorAll('.slide-tab-btn, button');
      if (tabButtons && tabButtons[0]) {
        const btn1 = tabButtons[0];
        btn1.disabled = true;
        btn1.setAttribute('aria-disabled', 'true');
        btn1.classList.remove('active-tab', 'text-on-surface', 'border-b-2', 'border-[#10B981]', 'bg-surface-container-high', 'hover:text-on-surface');
        btn1.classList.add('opacity-40', 'cursor-not-allowed', 'pointer-events-none', 'text-secondary/50', 'bg-surface-container');
        btn1.innerHTML = `<span class="flex items-center justify-center space-x-1"><span class="material-symbols-outlined text-[13px]">lock</span><span>SLIDE 1 (LOCKED)</span></span>`;
        btn1.title = 'Slide 1 is locked after switching to Slide 2.';
      }
    }

    // If observation timer was running, complete it now that Slide 1 is locked
    if (sessionState.timerIntervalId) {
      clearInterval(sessionState.timerIntervalId);
      sessionState.timerIntervalId = null;
      sessionState.isTimerExpired = true;
      sessionState.timeRemainingMs = 0;

      const timerEl = document.getElementById('countdown-timer');
      const depletionBar = document.getElementById('depletion-bar');
      const timerPodLabel = document.getElementById('timer-pod-label');
      const timerPodSublabel = document.getElementById('timer-pod-sublabel');

      if (timerEl) {
        timerEl.textContent = '00:00.0';
        timerEl.classList.remove('text-[#10B981]', 'text-primary-container');
        timerEl.classList.add('text-secondary');
      }
      if (depletionBar) depletionBar.style.width = '0%';
      if (timerPodLabel) {
        timerPodLabel.innerHTML = '<span class="flex items-center space-x-1.5"><span class="w-2 h-2 rounded-full bg-error"></span><span>OBSERVATION COMPLETE • SLIDE 1 LOCKED</span></span>';
      }
      if (timerPodSublabel) {
        timerPodSublabel.textContent = 'TRANSITIONED • LOCK ENGAGED';
      }
    }
  }

  function handleTimerExpiration() {
    // Ensure timer expiration logic executes strictly once per question
    if (sessionState.isTimerExpired) {
      return;
    }

    sessionState.isTimerExpired = true;

    // Clear timer interval safely
    if (sessionState.timerIntervalId) {
      clearInterval(sessionState.timerIntervalId);
      sessionState.timerIntervalId = null;
    }
    sessionState.timeRemainingMs = 0;

    // Transition to Slide 2 which locks Slide 1
    switchQuizSlide(2);

    // Update telemetry timer display to final lock state
    const timerEl = document.getElementById('countdown-timer');
    const depletionBar = document.getElementById('depletion-bar');
    const timerPodLabel = document.getElementById('timer-pod-label');
    const timerPodSublabel = document.getElementById('timer-pod-sublabel');

    if (timerEl) {
      timerEl.textContent = '00:00.0';
      timerEl.classList.remove('text-[#10B981]', 'text-primary-container');
      timerEl.classList.add('text-secondary');
    }
    if (depletionBar) depletionBar.style.width = '0%';
    if (timerPodLabel) {
      timerPodLabel.innerHTML = '<span class="flex items-center space-x-1.5"><span class="w-2 h-2 rounded-full bg-error"></span><span>OBSERVATION COMPLETE • SLIDE 1 LOCKED</span></span>';
    }
    if (timerPodSublabel) {
      timerPodSublabel.textContent = 'TIME EXPIRED • LOCK ENGAGED';
    }
  }

  function switchQuizSlide(slideIndex) {
    // If Slide 1 is locked, disallow navigating back to Slide 1
    if (slideIndex === 1 && (sessionState.isSlide1Locked || window.__isSlide1Locked)) {
      return;
    }

    const tabsContainer = quizDynamicRoot.querySelector('#slide-tabs');
    const slide1 = quizDynamicRoot.querySelector('.slide-1');
    const slide2 = quizDynamicRoot.querySelector('.slide-2');

    if (tabsContainer) {
      const tabButtons = tabsContainer.querySelectorAll('.slide-tab-btn, button');
      if (slideIndex === 1) {
        if (tabButtons[0]) {
          tabButtons[0].classList.add('active-tab', 'text-on-surface', 'border-b-2', 'border-[#10B981]', 'bg-surface-container-high');
          tabButtons[0].classList.remove('text-secondary', 'bg-surface-container');
        }
        if (tabButtons[1]) {
          tabButtons[1].classList.remove('active-tab', 'text-on-surface', 'border-b-2', 'border-[#10B981]', 'bg-surface-container-high');
          tabButtons[1].classList.add('text-secondary', 'bg-surface-container');
        }
        if (slide1) slide1.classList.remove('hidden');
        if (slide2) slide2.classList.add('hidden');
      } else if (slideIndex === 2) {
        if (tabButtons[0]) {
          tabButtons[0].classList.remove('active-tab', 'text-on-surface', 'border-b-2', 'border-[#10B981]', 'bg-surface-container-high');
          tabButtons[0].classList.add('text-secondary', 'bg-surface-container');
        }
        if (tabButtons[1]) {
          tabButtons[1].classList.add('active-tab', 'text-on-surface', 'border-b-2', 'border-[#10B981]', 'bg-surface-container-high');
          tabButtons[1].classList.remove('text-secondary', 'bg-surface-container');
        }
        if (slide1) slide1.classList.add('hidden');
        if (slide2) slide2.classList.remove('hidden');

        // As requested: switching to the second slide permanently locks the first slide
        lockSlide1();
      }
    }
  }
  window.__switchQuizSlide = switchQuizSlide;

  function initTimeStoneSlideTimer(timeLimitMs) {
    const timerEl = document.getElementById('countdown-timer');
    const depletionBar = document.getElementById('depletion-bar');
    sessionState.timeRemainingMs = timeLimitMs;
    sessionState.isTimerExpired = false;
    sessionState.isSlide1Locked = false;
    sessionState.isSlide2Locked = false;
    window.__isSlide1Locked = false;
    window.__isSlide2Locked = false;
    const interval = 50;

    // Both slides are accessible from the start — ensure both tabs are active and enabled
    const tabsContainer = quizDynamicRoot.querySelector('#slide-tabs');
    if (tabsContainer) {
      const tabButtons = tabsContainer.querySelectorAll('.slide-tab-btn, button');
      if (tabButtons && tabButtons.length >= 2) {
        tabButtons.forEach(btn => {
          btn.disabled = false;
          btn.removeAttribute('aria-disabled');
          btn.classList.remove('opacity-40', 'cursor-not-allowed', 'pointer-events-none');
        });
      }
    }

    if (sessionState.timerIntervalId) {
      clearInterval(sessionState.timerIntervalId);
      sessionState.timerIntervalId = null;
    }

    sessionState.timerIntervalId = setInterval(() => {
      // Guard: do not run if answer was submitted or view is not quiz
      if (sessionState.isAnswerSubmitted || currentViewName !== 'quiz') {
        clearInterval(sessionState.timerIntervalId);
        sessionState.timerIntervalId = null;
        return;
      }

      sessionState.timeRemainingMs -= interval;

      if (sessionState.timeRemainingMs <= 0) {
        sessionState.timeRemainingMs = 0;
        clearInterval(sessionState.timerIntervalId);
        sessionState.timerIntervalId = null;

        handleTimerExpiration();
        return;
      }

      const totalSecs = Math.floor(sessionState.timeRemainingMs / 1000);
      const deciseconds = Math.floor((sessionState.timeRemainingMs % 1000) / 100);
      const formatted = "00:" + (totalSecs < 10 ? "0" + totalSecs : totalSecs) + "." + deciseconds;

      if (timerEl) timerEl.textContent = formatted;
      if (depletionBar) {
        const pct = (sessionState.timeRemainingMs / timeLimitMs) * 100;
        depletionBar.style.width = Math.max(0, pct) + "%";
      }
    }, interval);
  }

  function submitQuizAnswer(stone, stoneIndex, chosenKey) {
    if (sessionState.isAnswerSubmitted) return;
    sessionState.isAnswerSubmitted = true;
    clearInterval(sessionState.timerIntervalId);

    const latencyMs = Date.now() - sessionState.questionStartTime;
    const latencySec = (latencyMs / 1000).toFixed(2);
    const isCorrect = chosenKey === stone.correctKey;
    const roundDelta = isCorrect ? stone.value : 0;

    sessionState.totalScore += roundDelta;
    sessionState.answers[stoneIndex] = {
      stoneId: stone.id,
      selectedKey: chosenKey,
      isCorrect: isCorrect,
      latencyMs: latencyMs,
      roundDelta: roundDelta
    };

    renderFeedbackState(stone, stoneIndex, chosenKey, isCorrect, latencySec, roundDelta);
  }

  function renderFeedbackState(stone, stoneIndex, chosenKey, isCorrect, latencySec, roundDelta) {
    const optionButtons = quizDynamicRoot.querySelectorAll('.option-btn');
    const actionBar = document.getElementById('quiz-action-bar');
    const feedbackBox = document.getElementById('quiz-feedback-box');

    // Update option buttons to feedback view (Matches quiz_feedback_correct_answer_the_six_stones)
    optionButtons.forEach(btn => {
      const opt = btn.getAttribute('data-option');
      const keyBox = btn.querySelector('.key-box');
      const markerWrap = btn.querySelector('.status-marker-wrap');

      btn.classList.remove('hover:bg-surface-container-high', 'border-primary-container', 'border-transparent');
      btn.style.pointerEvents = 'none';

      if (opt === stone.correctKey) {
        // Correct Option
        btn.className = 'w-full bg-surface-container-highest rounded p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm relative overflow-hidden border border-[#10b981]';
        if (keyBox) keyBox.className = 'key-box font-meta-mono text-meta-mono text-surface-container-lowest bg-[#10b981] px-2 py-1 rounded font-bold shrink-0';
        if (markerWrap) {
          markerWrap.innerHTML = `
            <span class="font-meta-mono text-meta-mono text-[#10b981] text-xs font-bold tracking-wider">[ CORRECT +${stone.value} PTS ]</span>
          `;
        }
      } else if (opt === chosenKey && !isCorrect) {
        // Chosen but incorrect
        btn.className = 'w-full bg-surface-container-low rounded p-space-md flex items-center justify-between border border-error/50 opacity-70';
        if (keyBox) keyBox.className = 'key-box font-meta-mono text-meta-mono text-surface-container-lowest bg-error px-2 py-1 rounded font-bold shrink-0';
        if (markerWrap) {
          markerWrap.innerHTML = `
            <span class="font-meta-mono text-meta-mono text-error text-xs font-bold tracking-wider">[ INCORRECT +0 PTS ]</span>
          `;
        }
      } else {
        // Other inactive options
        btn.className = 'w-full bg-surface-container-low rounded p-space-md flex items-center justify-between opacity-50';
        if (markerWrap) markerWrap.innerHTML = `<span class="font-meta-mono text-meta-mono text-secondary/40 text-xs shrink-0">—</span>`;
      }
    });

    // Hide initial submit actions
    if (actionBar) actionBar.classList.add('hidden');

    const nextBtnText = stoneIndex < STONES_DATA.length - 1
      ? `NEXT CHALLENGE: ${STONES_DATA[stoneIndex + 1].name}`
      : `[ FINALIZE EVALUATION & REVEAL STONE ]`;

    // Render Editorial Explanation & Telemetry Module
    if (feedbackBox) {
      feedbackBox.classList.remove('hidden');
      feedbackBox.innerHTML = `
        <!-- Editorial Explanation Module -->
        <div class="w-full bg-surface-container-low p-space-md rounded flex items-start space-x-space-md border border-outline-variant/20">
          <div class="w-6 h-6 rounded bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
            <span class="material-symbols-outlined text-secondary text-[16px]">info</span>
          </div>
          <div class="flex flex-col space-y-1">
            <span class="font-label-caps text-label-caps text-secondary uppercase tracking-wider">LOG ANALYSIS</span>
            <p class="font-body-sm text-body-sm text-secondary leading-relaxed">
              ${stone.explanation}
            </p>
          </div>
        </div>

        <!-- Telemetry Snapshot / Score Metric Bar -->
        <div class="grid grid-cols-3 gap-space-sm bg-surface-container-lowest p-space-md rounded border border-outline-variant/20">
          <div class="flex flex-col">
            <span class="font-label-caps text-label-caps text-secondary uppercase text-[10px]">LATENCY</span>
            <span class="font-meta-mono text-meta-mono text-on-surface">${latencySec}s</span>
          </div>
          <div class="flex flex-col">
            <span class="font-label-caps text-label-caps text-secondary uppercase text-[10px]">ROUND DELTA</span>
            <span class="font-meta-mono text-meta-mono ${isCorrect ? 'text-[#10b981]' : 'text-error'} font-bold">
              ${isCorrect ? `+${roundDelta} PTS` : '+0 PTS'}
            </span>
          </div>
          <div class="flex flex-col">
            <span class="font-label-caps text-label-caps text-secondary uppercase text-[10px]">TOTAL SCORE</span>
            <span class="font-meta-mono text-meta-mono text-on-surface font-bold tabular-nums">${sessionState.totalScore.toLocaleString()} PTS</span>
          </div>
        </div>

        <!-- Next Challenge Button Bar -->
        <div class="w-full pt-space-xs flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div class="flex items-center space-x-space-sm text-secondary font-meta-mono text-meta-mono text-xs">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
            <span>AUTOMATIC COMMITTED STATE • TELEMETRY SYNCED</span>
          </div>
          <button
            id="btn-next-quiz-step"
            type="button"
            class="w-full sm:w-auto inline-flex items-center justify-center space-x-space-sm px-space-lg py-space-md rounded bg-primary-container hover:bg-[#C52828] active:bg-[#A71D1D] text-white transition-colors cursor-pointer group shadow-lg"
          >
            <span class="font-title-sm text-title-sm text-white font-bold uppercase tracking-wider">${nextBtnText}</span>
            <span class="material-symbols-outlined text-white text-[18px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </button>
        </div>
      `;

      const btnNextStep = document.getElementById('btn-next-quiz-step');
      if (btnNextStep) {
        btnNextStep.addEventListener('click', () => {
          startQuizRound(stoneIndex + 1);
        });
      }
    }
  }

  // ========================================================
  // 8. FINAL RESULT & AFFINITY CALCULATION
  // ========================================================

  function calculateResults() {
    const stoneOrder = ['mind', 'time', 'reality', 'space', 'power', 'soul'];
    const stoneResultsMap = {};

    stoneOrder.forEach(id => {
      const match = STONES_DATA.find(s => s.id === id);
      if (match) {
        stoneResultsMap[id] = {
          ...match,
          totalScore: 0,
          questionCount: 0
        };
      }
    });

    STONES_DATA.forEach((stone, idx) => {
      const ans = sessionState.answers[idx];
      let basePercent = 70;

      if (ans && ans.isCorrect) {
        basePercent = 88;
        // Speed bonus if answered in under 4 seconds
        if (ans.latencyMs < 4000) {
          basePercent += Math.min(8, Math.floor((4000 - ans.latencyMs) / 350));
        }
      } else {
        basePercent = Math.max(55, 72 - Math.floor(Math.random() * 8));
      }

      // Add a slight deterministic variance based on stone properties
      if (stone.id === 'time' && ans && ans.isCorrect) basePercent = Math.max(basePercent, 94);
      if (stone.id === 'power' && ans && ans.isCorrect && ans.latencyMs < 5000) basePercent = Math.max(basePercent, 91);

      if (stoneResultsMap[stone.id]) {
        stoneResultsMap[stone.id].totalScore += basePercent;
        stoneResultsMap[stone.id].questionCount++;
      }
    });

    const results = Object.values(stoneResultsMap).map(stone => {
      const avg = stone.questionCount > 0 ? Math.round(stone.totalScore / stone.questionCount) : 75;
      return {
        ...stone,
        affinity: Math.min(99, Math.max(50, avg))
      };
    });

    // Sort descending by affinity
    results.sort((a, b) => b.affinity - a.affinity);
    return results;
  }

  function showFinalResult() {
    const sortedAffinities = calculateResults();
    const winningStone = sortedAffinities[0];

    // Update result UI elements
    const resultSessionId = document.getElementById('result-session-id');
    const resultWinnerCard = document.getElementById('result-winning-card');
    const resultWinnerPip = document.getElementById('result-winner-pip');
    const resultWinnerArtifactTag = document.getElementById('result-winner-artifact-tag');
    const resultWinnerAffinityBadge = document.getElementById('result-winner-affinity-badge');
    const resultWinnerTitle = document.getElementById('result-winner-title');
    const resultWinnerDomain = document.getElementById('result-winner-domain');
    const resultWinnerQuote = document.getElementById('result-winner-quote');
    const resultWinnerBar = document.getElementById('result-winner-bar');
    const resultWinnerDelta = document.getElementById('result-winner-delta');
    const resultWinnerCitation = document.getElementById('result-winner-citation');
    const resultContestantStamp = document.getElementById('result-contestant-stamp');
    const resultAffinityRows = document.getElementById('result-affinity-rows');
    const resultWinnerStoneImg = document.getElementById('result-winner-stone-img');
    const resultWinnerStoneContainer = document.getElementById('result-winner-stone-container');
    const resultWinnerStoneGlow = document.getElementById('result-winner-stone-glow');

    if (resultSessionId) resultSessionId.textContent = `SESSION #${sessionState.sessionId}`;
    if (resultContestantStamp) {
      resultContestantStamp.textContent = `Contestant Session: ${sessionState.contestantName || 'Anonymous'}`;
    }

    if (resultWinnerPip) {
      resultWinnerPip.style.backgroundColor = winningStone.color;
      resultWinnerPip.className = `w-3.5 h-3.5 rounded-full inline-block ring-4 ${winningStone.colorRing || 'ring-white/20'}`;
    }

    // Awarded Stone PNG Artwork aside its name
    if (resultWinnerStoneImg) {
      const stonePng = winningStone.pngPath || `uiux/logostones/${winningStone.id}.png`;
      resultWinnerStoneImg.src = stonePng;
      resultWinnerStoneImg.alt = winningStone.name;
      resultWinnerStoneImg.style.setProperty('--winner-glow-color', winningStone.color);
    }

    if (resultWinnerStoneContainer) {
      resultWinnerStoneContainer.style.borderColor = `${winningStone.color}44`;
      resultWinnerStoneContainer.style.boxShadow = `0 0 24px ${winningStone.color}26`;
    }

    if (resultWinnerStoneGlow) {
      resultWinnerStoneGlow.style.backgroundColor = winningStone.color;
    }

    if (resultWinnerArtifactTag) {
      resultWinnerArtifactTag.textContent = `${winningStone.name.replace(' STONE', '')} ARTIFACT // PRIMARY CONVERGENCE`;
      resultWinnerArtifactTag.style.color = winningStone.color;
    }

    if (resultWinnerAffinityBadge) {
      resultWinnerAffinityBadge.textContent = `${winningStone.affinity}% AFFINITY`;
      resultWinnerAffinityBadge.style.color = winningStone.color;
      resultWinnerAffinityBadge.style.backgroundColor = `${winningStone.color}15`;
    }

    if (resultWinnerTitle) resultWinnerTitle.textContent = winningStone.name;
    if (resultWinnerDomain) resultWinnerDomain.textContent = `DOMAIN: ${winningStone.domain.toUpperCase()}`;
    if (resultWinnerQuote) resultWinnerQuote.textContent = winningStone.quote;

    if (resultWinnerBar) {
      resultWinnerBar.style.backgroundColor = winningStone.color;
      setTimeout(() => {
        resultWinnerBar.style.width = `${winningStone.affinity}%`;
      }, 100);
    }

    if (resultWinnerDelta) {
      resultWinnerDelta.textContent = `DELTA: +${(winningStone.affinity - 77.8).toFixed(1)}% OVER FIELD AVG`;
      resultWinnerDelta.style.color = winningStone.color;
    }

    if (resultWinnerCitation) {
      resultWinnerCitation.textContent = winningStone.citation;
    }

    // Render Affinity Breakdown Rows
    if (resultAffinityRows) {
      resultAffinityRows.innerHTML = sortedAffinities.map((item, idx) => {
        const isTop = idx === 0;
        const stoneSrc = item.pngPath || item.svgPath;
        const stoneIcon = stoneSrc ? `<img src="${stoneSrc}" alt="${item.name}" class="w-7 h-7 object-contain shrink-0 ml-1 ${isTop ? 'stone-glow' : ''}" />` : `<span class="w-3 h-3 rounded-full shrink-0 ml-1" style="background-color: ${item.color};"></span>`;
        return `
          <div class="${isTop ? 'bg-surface-container-high ring-1 ring-white/5' : 'bg-surface-container'} px-space-md py-3 rounded-DEFAULT flex items-center justify-between transition-colors hover:bg-surface-container-high/80 group">
            <div class="flex items-center space-x-3 min-w-0 flex-1">
              <div class="flex flex-col min-w-0 flex-1">
                <div class="flex items-center space-x-2">
                  <span class="font-title-sm text-title-sm font-bold text-on-surface">${item.name.replace(' STONE', '')}</span>
                  ${isTop ? `<span class="font-meta-mono text-[9px] text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded-DEFAULT tracking-widest">[ HIGHEST RESONANCE ]</span>` : ''}
                </div>
                <span class="font-meta-mono text-[11px] text-on-surface-variant">${item.domain}</span>
              </div>
            </div>
            <div class="flex items-center space-x-3 shrink-0 ml-3">
              <div class="hidden sm:block w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all duration-1000 ease-out affinity-bar" style="width: ${item.affinity}%; background-color: ${item.color};"></div>
              </div>
              <span class="font-meta-mono ${isTop ? 'text-title-sm font-bold' : 'text-body-md'} tabular-nums" style="color: ${isTop ? item.color : '#e5e2e3'};">
                ${item.affinity}%
              </span>
              ${stoneIcon}
            </div>
          </div>
        `;
      }).join('');
    }

    // Record session into event leaderboard
    archiveContestantSession(winningStone);

    switchView('result');
  }

  function archiveContestantSession(winningStone) {
    if (!sessionState.contestantName) return;

    // Check if entry already recorded
    const existingIndex = eventLeaderboard.findIndex(e => e.sessionId === sessionState.sessionId);
    const newEntry = {
      sessionId: sessionState.sessionId,
      name: sessionState.contestantName,
      stone: winningStone.name.replace(' STONE', ''),
      affinity: winningStone.affinity,
      score: sessionState.totalScore || 900,
      color: winningStone.color,
      svgPath: winningStone.svgPath || '',
      pngPath: winningStone.pngPath || '',
      isCurrentContestant: true
    };

    if (existingIndex >= 0) {
      eventLeaderboard[existingIndex] = newEntry;
    } else {
      eventLeaderboard.push(newEntry);
    }

    // Sort leaderboard by score then affinity
    eventLeaderboard.sort((a, b) => b.score - a.score || b.affinity - a.affinity);
    eventLeaderboard.forEach((entry, idx) => {
      entry.rank = String(idx + 1).padStart(2, '0');
    });

    renderStandingsTable();
  }

  function renderStandingsTable() {
    if (!standingsTableBody) return;
    standingsTableBody.innerHTML = eventLeaderboard.map(item => {
      const isCurrent = item.sessionId === sessionState.sessionId;
      return `
        <tr class="border-b border-[#242426] font-meta-mono text-sm hover:bg-surface-container-high transition-colors ${isCurrent ? 'bg-surface-container-high' : ''}">
          <td class="py-3 px-4 ${isCurrent ? 'text-primary font-bold' : 'text-secondary'}">
            ${isCurrent ? '▶ ' : ''}${item.rank}
          </td>
          <td class="py-3 px-4 font-body-md text-on-surface font-semibold">
            ${escapeHtml(item.name)}
            ${isCurrent ? '<span class="ml-2 text-[10px] font-meta-mono text-primary uppercase">[CURRENT]</span>' : ''}
          </td>
          <td class="py-3 px-4">
            <div class="flex items-center space-x-2">
              ${(item.pngPath || item.svgPath) ? `<img src="${item.pngPath || item.svgPath}" alt="${item.stone}" class="w-5 h-5 object-contain shrink-0" />` : `<span class="w-2 h-2 rounded-full shrink-0" style="background-color: ${item.color || '#EAB308'};"></span>`}
              <span class="text-on-surface uppercase text-xs">${item.stone}</span>
            </div>
          </td>
          <td class="py-3 px-4 text-center tabular-nums text-secondary">
            ${item.affinity}%
          </td>
          <td class="py-3 px-4 text-right font-bold text-on-surface tabular-nums">
            ${item.score.toLocaleString()} PTS
          </td>
        </tr>
      `;
    }).join('');
  }

  // ========================================================
  // 9. KIOSK RESET BEHAVIOR (Requirement 3: CRITICAL)
  // ========================================================

  function initiateKioskHandoff() {
    // Fill the handoff screen data
    const winningAffinities = calculateResults();
    const dominant = winningAffinities[0];

    const handoffSummary = document.getElementById('handoff-summary-text');
    const handoffScoreGain = document.getElementById('handoff-score-gain');
    const handoffProgressFill = document.getElementById('handoff-progress-fill');
    const handoffHashId = document.getElementById('handoff-hash-id');

    if (handoffSummary) {
      handoffSummary.innerHTML = `
        ${escapeHtml(sessionState.contestantName)}'s evaluation (<span class="text-primary font-semibold">${dominant.name}: ${dominant.affinity}%</span>) has been archived to the live event leaderboard.
      `;
    }
    if (handoffScoreGain) {
      handoffScoreGain.textContent = `+${sessionState.totalScore.toLocaleString()} PTS`;
    }
    if (handoffProgressFill) {
      handoffProgressFill.style.width = `${dominant.affinity}%`;
    }
    if (handoffHashId) {
      handoffHashId.textContent = `HASH: ${sessionState.sessionId}`;
    }

    switchView('kioskReset');
  }

  /**
   * Complete, absolute wipe of all contestant session data.
   * Guarantees next competitor starts completely fresh with ZERO residual state.
   */
  function executeFullKioskReset() {
    if (resetPurgeToast) {
      resetPurgeToast.classList.remove('opacity-0', 'pointer-events-none');
    }
    if (btnExecuteKioskReset) {
      btnExecuteKioskReset.setAttribute('disabled', 'true');
      btnExecuteKioskReset.classList.add('opacity-50');
    }

    // 1. Clear any active countdown timer intervals
    clearInterval(sessionState.timerIntervalId);
    sessionState.timerIntervalId = null;

    // 2. Clear all contestant states
    sessionState.contestantName = '';
    sessionState.currentStoneIndex = 0;
    sessionState.answers = {};
    sessionState.totalScore = 0;
    sessionState.startTime = null;
    sessionState.questionStartTime = null;
    sessionState.isAnswerSubmitted = false;
    sessionState.timeRemainingMs = 0;
    sessionState.sessionId = generateSessionId();
    loadQuestions();

    // 3. Reset input field
    if (inputContestantName) {
      inputContestantName.value = '';
      inputContestantName.classList.remove('border-error');
    }
    if (nameValidationError) {
      nameValidationError.classList.add('hidden');
    }

    // 4. Clear header tags
    if (headerContestantTag) {
      headerContestantTag.textContent = '';
      headerContestantTag.classList.add('hidden');
    }

    // 5. Clear dynamic quiz DOM
    if (quizDynamicRoot) {
      quizDynamicRoot.innerHTML = '';
    }

    // 6. Smooth purge reload transition to Home
    setTimeout(() => {
      if (resetPurgeToast) {
        resetPurgeToast.classList.add('opacity-0', 'pointer-events-none');
      }
      if (btnExecuteKioskReset) {
        btnExecuteKioskReset.removeAttribute('disabled');
        btnExecuteKioskReset.classList.remove('opacity-50');
      }
      closeOrganizerModal();
      switchView('home');
    }, 700);
  }

  // ========================================================
  // 10. EVENT LISTENERS & LIFECYCLE
  // ========================================================

  function setupEventListeners() {
    // Top Nav clicks
    if (navBrand) navBrand.addEventListener('click', () => switchView('home'));
    if (navArena) navArena.addEventListener('click', () => switchView(previousArenaView || 'home'));
    if (navMatrix) navMatrix.addEventListener('click', () => switchView('stonesMatrix'));
    if (navStandings) navStandings.addEventListener('click', () => switchView('standings'));

    // Home view triggers
    if (btnStartQuiz) {
      btnStartQuiz.addEventListener('click', () => {
        switchView('enterName');
        setTimeout(() => inputContestantName && inputContestantName.focus(), 50);
      });
    }

    if (btnHowItWorks) btnHowItWorks.addEventListener('click', openHowItWorksModal);
    if (btnCloseModal) btnCloseModal.addEventListener('click', closeHowItWorksModal);
    if (btnModalDismiss) btnModalDismiss.addEventListener('click', closeHowItWorksModal);
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeHowItWorksModal();
      });
    }

    // Enter Name view triggers
    if (formContestantName) {
      formContestantName.addEventListener('submit', (e) => {
        e.preventDefault();
        handleNameSubmit();
      });
    }
    if (btnContinueToQuiz) {
      btnContinueToQuiz.addEventListener('click', handleNameSubmit);
    }
    if (btnBackToHome) {
      btnBackToHome.addEventListener('click', () => switchView('home'));
    }

    // Final result triggers
    if (btnResultViewStandings) {
      btnResultViewStandings.addEventListener('click', () => switchView('standings'));
    }
    if (btnResultNextContestant) {
      btnResultNextContestant.addEventListener('click', initiateKioskHandoff);
    }

    // Kiosk reset triggers
    if (btnExecuteKioskReset) {
      btnExecuteKioskReset.addEventListener('click', executeFullKioskReset);
    }

    // Stones Matrix view triggers
    if (btnMatrixBack) {
      btnMatrixBack.addEventListener('click', () => switchView(previousArenaView || 'home'));
    }
    if (btnMatrixStartEval) {
      btnMatrixStartEval.addEventListener('click', () => {
        if (!sessionState.contestantName) {
          switchView('enterName');
          setTimeout(() => inputContestantName && inputContestantName.focus(), 50);
        } else {
          startQuizRound(sessionState.currentStoneIndex);
        }
      });
    }

    // Standings view triggers
    if (btnStandingsBack) {
      btnStandingsBack.addEventListener('click', () => switchView(previousArenaView || 'home'));
    }
    if (btnStandingsPlay) {
      btnStandingsPlay.addEventListener('click', () => {
        if (!sessionState.contestantName) {
          switchView('enterName');
          setTimeout(() => inputContestantName && inputContestantName.focus(), 50);
        } else {
          startQuizRound(sessionState.currentStoneIndex);
        }
      });
    }

    // Organizer reset modal triggers
    if (footerOrganizerBtn) {
      footerOrganizerBtn.addEventListener('click', openOrganizerModal);
    }
    if (btnCancelOrganizerReset) {
      btnCancelOrganizerReset.addEventListener('click', closeOrganizerModal);
    }
    if (btnConfirmOrganizerReset) {
      btnConfirmOrganizerReset.addEventListener('click', executeFullKioskReset);
    }
    if (organizerModalBackdrop) {
      organizerModalBackdrop.addEventListener('click', (e) => {
        if (e.target === organizerModalBackdrop) closeOrganizerModal();
      });
    }

    // Live clock ticker
    function updateClock() {
      if (kioskLiveClock) {
        const now = new Date();
        kioskLiveClock.textContent = now.toTimeString().split(' ')[0] + ' UTC';
      }
    }
    updateClock();
    setInterval(updateClock, 1000);

    // Global keyboard shortcuts (ESC Organizer Reset & Quiz keys)
    window.addEventListener('keydown', (e) => {
      // ESC key handler
      if (e.key === 'Escape') {
        if (!modalBackdrop.classList.contains('hidden')) {
          closeHowItWorksModal();
          return;
        }
        if (!organizerModalBackdrop.classList.contains('hidden')) {
          closeOrganizerModal();
          return;
        }
        if (currentViewName === 'kioskReset') {
          executeFullKioskReset();
          return;
        }
        // Open organizer master reset prompt
        openOrganizerModal();
        return;
      }

      // Quiz keyboard shortcuts (1-4, A-D, Enter)
      if (currentViewName === 'quiz' && !sessionState.isAnswerSubmitted) {
        const keyMap = {
          '1': 'A', 'a': 'A',
          '2': 'B', 'b': 'B',
          '3': 'C', 'c': 'C',
          '4': 'D', 'd': 'D'
        };

        const targetOption = keyMap[e.key.toLowerCase()];
        if (targetOption) {
          const btn = quizDynamicRoot.querySelector(`.option-btn[data-option="${targetOption}"]`);
          if (btn) btn.click();
        }

        if (e.key === 'Enter' && selectedOptionKey) {
          const btnSubmit = document.getElementById('btn-submit-answer');
          if (btnSubmit && !btnSubmit.classList.contains('pointer-events-none')) {
            btnSubmit.click();
          }
        }
      } else if (currentViewName === 'quiz' && sessionState.isAnswerSubmitted && e.key === 'Enter') {
        const btnNext = document.getElementById('btn-next-quiz-step');
        if (btnNext) btnNext.click();
      } else if (currentViewName === 'result' && e.key === 'Enter') {
        initiateKioskHandoff();
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ========================================================
  // 11. BOOTSTRAP INITIALIZATION
  // ========================================================

  async function initApp() {
    // Global image error handler to seamlessly fallback to PNG if WebP fails
    window.addEventListener('error', (e) => {
      if (e.target && e.target.tagName === 'IMG' && e.target.src && e.target.src.endsWith('.webp')) {
        e.target.src = e.target.src.replace(/\.webp$/, '.png');
      }
    }, true);

    await loadQuestions();
    renderStandingsTable();
    setupEventListeners();
    switchView('home');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
