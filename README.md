# THE SIX STONES • Live Event Quiz Kiosk

> **"Which Stone matches you?"**  
> *Annual AI & Logic Challenge — School of AI @ ESI*

---

## 1. Overview

**THE SIX STONES** is a live competition quiz kiosk website designed for **one shared PC**. It runs continuously at event booths or stage terminals where contestants take turns one at a time.

- **Zero Accounts / No Login**: No registration, external database, or login credentials required.
- **Single-PC Event Kiosk**: Fast, distraction-free flow optimized for desktop display (1080p+).
- **Strict Data Reset**: When a contestant finishes or clicks **NEXT CONTESTANT**, all temporary scores, names, answers, and timers are immediately wiped from memory. The next competitor always starts with a completely clean session.

---

## 2. Project Architecture

```
marvel/
├── index.html         # Main Kiosk SPA (Single Page Application)
├── app.js             # Kiosk state engine, routing, timer, and reset logic
├── styles.css         # Typography, tabular figures, and transition animations
├── questions.json     # Configuration file for questions, options, and answers
├── server.js          # Zero-dependency Node.js HTTP server
├── package.json       # Project scripts and metadata
├── README.md          # Project documentation
└── uiux/              # Original Stitch UI/UX design specifications & references
```

---

## 3. How to Run the Website

### Prerequisites
- Node.js (v18 or higher)

### Starting the Local Server
From the project folder (`c:\Users\Ayoub\Documents\marvel`), run:

```bash
npm start
```
*Alternatively:*
```bash
node server.js
```

The terminal will confirm:
```
Kiosk Server listening on http://localhost:3000
```

Open your browser and navigate to:
**[http://localhost:3000](http://localhost:3000)**

---

## 4. How to Modify Questions and Answers (`questions.json`)

All quiz questions, answer choices, correct keys, explanations, and quotes are located in:
👉 [`questions.json`](questions.json)

Whenever you edit `questions.json`, simply save the file. The changes are automatically loaded on page refresh or each time the kiosk resets for the **NEXT CONTESTANT**.

### JSON Schema Breakdown

Each challenge object in `questions.json` contains:

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique stone identifier (`mind`, `time`, `reality`, `space`, `power`, `soul`) |
| `number` | `string` | Module sequence string (`"01"` to `"06"`) |
| `name` | `string` | Display title (e.g. `"MIND STONE"`) |
| `domain` | `string` | The cognitive domain evaluated (e.g. `"Logic & Deductive Reasoning"`) |
| `moduleTag` | `string` | Header category tag (e.g. `"MODULE 01 • LOGIC & PATTERN DECONSTRUCTION"`) |
| `difficulty` | `string` | Difficulty label (e.g. `"ALPHA-1"`, `"BETA-2"`, `"VELOCITY-MAX"`) |
| `value` | `number` | Points earned for a correct answer (e.g. `100`, `150`) |
| `color` | `string` | Hex color code for stone indicator (e.g. `"#EAB308"`) |
| `directive` | `string` | Monospace directive line above the question |
| `question` | `string` | **The question text** |
| `subtext` | `string` | (Optional) Auxiliary explanation or instructions under the question |
| `snippetHtml` | `string` | (Optional) HTML code for formulas, terminal diagrams, matrices, or code blocks |
| `options` | `array` | List of 4 multiple-choice choices (`[ { "key": "A", "text": "..." }, ... ]`) |
| `correctKey` | `string` | **The correct answer option** (`"A"`, `"B"`, `"C"`, or `"D"`) |
| `explanation` | `string` | **LOG ANALYSIS** explanation displayed on the post-answer feedback card |
| `quote` | `string` | Archetype quote shown on the Final Result screen if this Stone is chosen |
| `citation` | `string` | Evaluation citation text for the Final Result card |
| `isSpeedChallenge`| `boolean`| (Optional) `true` to enable the high-stakes live countdown timer (used on Power Stone) |
| `timeLimitMs` | `number` | (Optional) Duration in milliseconds for the speed challenge (e.g. `12000` for 12 seconds) |

### Example Challenge Object

```json
{
  "id": "mind",
  "number": "01",
  "name": "MIND STONE",
  "domain": "Logic & Deductive Reasoning",
  "moduleTag": "MODULE 01 • LOGIC & PATTERN DECONSTRUCTION",
  "difficulty": "ALPHA-1",
  "value": 100,
  "color": "#EAB308",
  "directive": "DIRECTIVE: IDENTIFY RECURSION TARGET",
  "question": "Find the next number in the sequence: 2, 4, 8, 16, ...",
  "options": [
    { "key": "A", "text": "24" },
    { "key": "B", "text": "32" },
    { "key": "C", "text": "30" },
    { "key": "D", "text": "36" }
  ],
  "correctKey": "B",
  "explanation": "Sequence adheres to exponential doubling progression f(n) = 2ⁿ. 2⁵ resolves to 32.",
  "quote": "“Your intellect deconstructs all complexity.”"
}
```

---

## 5. Contestant Flow & Kiosk Rules

```
HOME
  ↓ [ START QUIZ ]
ENTER CONTESTANT NAME (Validates that a name was entered)
  ↓ [ CONTINUE ]
STONE 01 / 06 (MIND STONE)
  ↓
STONE 02 / 06 (TIME STONE)
  ↓
STONE 03 / 06 (REALITY STONE)
  ↓
STONE 04 / 06 (SPACE STONE)
  ↓
STONE 05 / 06 (POWER STONE - Live Speed Countdown)
  ↓
STONE 06 / 06 (SOUL STONE)
  ↓
FINAL RESULT (The Stones Have Chosen)
  ↓ [ NEXT CONTESTANT ]
KIOSK RESET & PURGE (Complete clean wipe for the next participant)
```

---

## 6. Important Reset Behavior

When a contestant finishes:
1. Click **`[ NEXT CONTESTANT ]`** on the Final Result screen.
2. The kiosk displays the **STAGE TEL-04 // KIOSK ACTIVE HANDOFF** screen.
3. Clicking **`[ PREPARE KIOSK FOR NEXT CONTESTANT ]`** immediately purges:
   - Contestant name and session ID
   - All recorded answers and choices
   - All score counters and latency logs
   - Countdown timers
   - Dynamic DOM states
4. The terminal returns to the clean **HOME** screen.

### Organizer Emergency Reset
- Pressing **`ESC`** at any point on the keyboard or clicking **ESC ORGANIZER RESET** in the footer triggers the **ORGANIZER MASTER RESET** confirmation modal, allowing an organizer to wipe the kiosk instantly.

---

## 7. Keyboard Shortcuts

- **`1` / `2` / `3` / `4`** or **`A` / `B` / `C` / `D`**: Select answer choices during the quiz.
- **`Enter`**: Submit selected answer / advance to the next challenge.
- **`ESC`**: Open Organizer Master Reset dialog / Close modals.

---

© School of AI @ ESI — All Rights Reserved.
