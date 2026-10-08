---
name: The Six Stones
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#e4bdba'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#ab8885'
  outline-variant: '#5b403d'
  surface-tint: '#ffb3ad'
  primary: '#ffb3ad'
  on-primary: '#680008'
  primary-container: '#ff544e'
  on-primary-container: '#5c0006'
  inverse-primary: '#bb161f'
  secondary: '#c6c6cb'
  on-secondary: '#2f3034'
  secondary-container: '#46464b'
  on-secondary-container: '#b5b4ba'
  tertiary: '#c8c6c8'
  on-tertiary: '#303032'
  tertiary-container: '#929092'
  on-tertiary-container: '#2a292b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#930010'
  secondary-fixed: '#e3e2e7'
  secondary-fixed-dim: '#c6c6cb'
  on-secondary-fixed: '#1a1b1f'
  on-secondary-fixed-variant: '#46464b'
  tertiary-fixed: '#e4e2e4'
  tertiary-fixed-dim: '#c8c6c8'
  on-tertiary-fixed: '#1b1b1d'
  on-tertiary-fixed-variant: '#474649'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 4.5rem
    fontWeight: '800'
    lineHeight: '1.05'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.015em
  title-sm:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.45'
    letterSpacing: 0.005em
  meta-mono:
    fontFamily: Space Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.15em
  timer-display:
    fontFamily: Space Mono
    fontSize: 5rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-stakes, cinematic, and institutional aesthetic engineered specifically for high-intensity live academic competitions. Stripping away conventional hackathon tropes—such as neon glows, aggressive glassmorphism, and skeuomorphic gaming visuals—it leans into a disciplined, Swiss-inspired editorial minimalism infused with cinematic tension. 

The emotional target is solemn, competitive gravitas: the precision of an aerospace control telemetry dashboard married to the dramatic focus of an auteur film title sequence. The user interface prioritizes clarity, extreme information legibility from stage distances, and absolute visual composure. Structural framing, deliberate tracking, and authoritative typographic hierarchy guide competitors and audiences through rapid rounds of intellectual combat without cognitive friction.

## Colors

The system uses a strictly controlled dark architecture. Deep, unpolluted black surfaces establish an unyielding foundation, punctuated by surgical accents of crimson and six functional stone signatures.

### Surface Palette
- **Canvas Base (`#0B0B0C`)**: Deep stage canvas. Used exclusively for overall viewport grounding and global stage layout framing.
- **Surface Elevation 1 (`#121214`)**: Default component container fill, question board modules, and structural cards.
- **Surface Elevation 2 (`#1A1A1D`)**: Selected states, interactive hovers, active quiz options, and floating utility modules.
- **Structural Border (`#242426`)**: Monolithic 1px boundary lines dividing information panes.

### Typographic Palette
- **Text Primary (`#FFFFFF`)**: Pure optic white reserved for primary headlines, active questions, score figures, and dominant state indicators.
- **Text Secondary (`#8E8E93`)**: Neutral grey for subtitles, section descriptors, meta keys, and auxiliary labels.
- **Text Tertiary (`#636366`)**: Muted baseline grey for deactivated states, question tracking numbers, and peripheral metadata.

### Accent & Semantics
- **Crimson Prime (`#E23636`)**: The cinematic pulse of the event. Deployed sparingly for countdown warnings, primary battle triggers, high-value multipliers, and primary CTA actions.
- **The Stone Accents**: Used strictly as solid status tokens, micro-badges, or pill metadata indicators—never as broad background washes or gradients:
  - **Mind**: `#F59E0B` (Calculated Amber-Yellow)
  - **Time**: `#10B981` (Emerald Green)
  - **Reality**: `#EF4444` (Ruby Crimson)
  - **Space**: `#3B82F6` (Cobalt Blue)
  - **Power**: `#8B5CF6` (Amethyst Purple)
  - **Soul**: `#F97316` (Radiant Orange)

## Typography

Typographic scale is structured for absolute hierarchy and effortless long-distance projection visibility. The pairing balances the architectural Swiss precision of **Inter** for questions and structural headlines with the industrial telemetry cadence of **Space Mono** for timestamps, scores, and technical telemetry.

- **Uppercase Tracking**: All category designations, stone markers, and module descriptors utilize `label-caps` styled in full uppercase with `+0.15em` tracking. This creates distinct editorial section breaks without relying on heavy borders or solid banner fills.
- **Numeric Clarity**: Numerical metrics, scores, ranking arrays, and timers must employ tabular figures (`font-variant-numeric: tabular-nums`) to prevent horizontal jitter during live counting sequences.
- **Editorial Contrast**: Pair large, tightly tracked headlines (`display-xl` or `headline-xl`) directly with small, monospace metadata tags (`meta-mono`) placed immediately above or below to evoke cinematic title cards.

## Layout & Spacing

Designed specifically for 16:9 and 16:10 desktop presentation kiosk environments (primary display: 1920×1080 and above). The layout relies on an unyielding 12-column rigid frame with strict mathematical rhythm.

### Grid & Composition
- **Outer Margins**: Fixed at `3rem` (`48px`) across all sides to form a deliberate cinematic border that frames the event view away from physical display edges.
- **Column Architecture**: 12 columns with standard `1.5rem` (`24px`) gutters. Structural panels snap strictly to 3, 4, 6, 8, or 12-column spans.
- **Kiosk Split-Pane Pattern**:
  - **Header Rail**: Fixed 64px height carrying competition status, stone progress matrix, and stage telemetry.
  - **Primary Combat Zone (8 cols)**: Houses the current question module, code snippets, and active multiple-choice matrices.
  - **Live Leaderboard / Telemetry Rail (4 cols)**: Real-time point standings, active team response indicators, and round logs.

### Rhythm Principles
Whitespace is deliberate and generous. Elements do not float loosely; they are locked within structural cells where inner margins are uniform. Use `space-lg` to separate distinct logical groups within cards, and `space-sm` for immediate metadata pairings.

## Elevation & Depth

This design system avoids simulated physical light sources, drop shadows, and diffuse atmospheric blurs. Depth is achieved purely through **tonal planar stratification** and **razor-thin linear boundaries**.

- **Surface Tiers**:
  - Ground Floor: `#0B0B0C` (Global background canvas).
  - First Tier: `#121214` (Panels, telemetry zones, inactive prompt boxes).
  - Interactive / Focus Tier: `#1A1A1D` (Hovered inputs, selected answers, current team indicator).
- **Outlines over Shadows**: No blur-based drop shadows exist anywhere in the interface. Structural separation is maintained by 1px borders colored in `#242426`.
- **Active State Highlights**: Selected or high-priority elements use a 1px border colored in `#E23636` (Crimson) or the relevant Stone accent, paired with a subtle step-up in background brightness to `#1A1A1D`.

## Shapes

The interface embraces a tailored, architectural geometry. High-radius corners and organic fluid curves are discarded in favor of sharp, measured precision.

- **Base Radius (`0.25rem` / `4px`)**: Applied consistently across option cards, action buttons, input panels, and status chips.
- **Technical Pill Exceptions**: Only micro-indicator tags (such as Stone status dots and pill indicators) can use rounded-full geometry, serving as miniature, self-contained instrument indicators against the angular structural containers.

## Components

### 1. Buttons
- **Primary Action (Battle Trigger / Submit)**: Solid Crimson (`#E23636`) background with white (`#FFFFFF`) bold text (`title-sm`), 1px border in `#E23636`, corner radius `0.25rem`. Hover state: `#C52828`. Active press: `#A71D1D`.
- **Secondary / Neutral**: Background `#121214`, border 1px `#242426`, text `#FFFFFF`. Hover state: background `#1A1A1D`, border `#636366`.
- **Monospace Action**: Background transparent, border 1px `#242426`, text `#8E8E93`, uppercase `meta-mono` typography.

### 2. Stone Indicator Matrix
- Horizontal telemetry strip mounted in the global header or team banner displaying all six stones: Mind, Time, Reality, Space, Power, Soul.
- **Structure**: Each stone is represented by a 6px circular pip adjacent to an uppercase 10px label.
- **States**:
  - *Unclaimed*: Pip fill `#242426`, text `#636366`.
  - *Claimed*: Pip fill colored with the exact Stone hex token, text `#FFFFFF`, surrounded by a crisp 1px border matching the stone hue.

### 3. Quiz Question & Option Cards
- **Question Board**: Container with background `#121214`, 1px border `#242426`, padding `2.5rem`. Question title set in `headline-lg`.
- **Multiple Choice Option Items**: 
  - Structural rows with background `#121214`, 1px border `#242426`, padding `1rem 1.5rem`, displaying a fixed-width key block (`[ A ]` in `meta-mono`) followed by option copy in `body-lg`.
  - *Hover*: Border color shifts to `#636366`, background shifts to `#161619`.
  - *Selected*: 1px border `#E23636`, background `#1A1A1D`, key indicator flips to solid crimson.
  - *Correct / Revealed*: 1px border `#10B981` (Time Green), background `#10B981` at 8% opacity.

### 4. Countdown Timer Engine
- Center-aligned display block running `timer-display` in Space Mono.
- Enclosed in an understated structural box with 1px border `#242426`.
- Shifts typography color from `#FFFFFF` to `#E23636` strictly during the final critical threshold (e.g., last 10 seconds).

### 5. Leaderboard Rows
- Condensed table format without zebra striping.
- Horizontal dividers: 1px border `#242426`.
- Ranking numbers displayed in `meta-mono` (`01`, `02`, `03`).
- Score tallies set in tabular bold Inter (`title-sm`), aligned flush-right.
- Current active respondent highlighted with a 2px Crimson vertical bar running down the left border of the row.

### 6. Inputs & Terminal Prompts
- Kiosk text fields use background `#0B0B0C`, 1px border `#242426`, text `#FFFFFF`, padding `1rem`.
- Focus state: Border transitions to `#FFFFFF` with zero outer glow or outline ring.