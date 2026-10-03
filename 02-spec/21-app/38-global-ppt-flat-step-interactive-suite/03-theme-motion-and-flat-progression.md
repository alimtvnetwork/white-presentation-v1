# 03-Theme Motion & Flat Progression: 6-Tier Token Contracts, 3D Flip Physics & Kinetic Step Engine

> **Specification Identifier:** `02-spec/21-app/38-global-ppt-flat-step-interactive-suite/03-theme-motion-and-flat-progression.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.9.0`  
> **Author:** Spec Subagent 02 (Motion, Flat Progression & Verification)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** 6-Tier HSL Triplet Tokens, Dynamic Variable Clean-Pass, Dark HUD Chrome Isolation, 3D Perspective Flip (`rotateY: ±45deg, scale: 0.92, perspective: 1200px`), Cancelable `deck:nav` Event Interception, Tri-State Step Progression Lifecycle (`completed`, `active`, `future`), Tactile Audio Step Cues, and Formal Data Contracts & JSON Schemas for Archetypes 09 to 15  

---

## 1. System Vision & Architectural Motion Philosophy

The motion, theming, and step progression architecture for `38-global-ppt-flat-step-interactive-suite` synthesizes the authoritative executive finish of **Global PPT Corporate Decks** with the razor-sharp tactile control of the **Flat Slide Kinetic Step Engine**.

Standard presentation software treats slides as rigid static frames separated by disorienting full-viewport slide transitions that dump executive audience context. This architecture replaces that model with a physical, hardware-accelerated workspace governed by five non-negotiable principles:

1. **6-Tier Space-Separated HSL Token Architecture:** Every color variable across all 20 themes (13 master corporate themes + 7 newly adapted high-contrast themes) is declared as unadorned space-separated `H S% L%` triplets, enabling arbitrary alpha compositing (`hsl(var(--token) / <alpha>)`) without intermediate color format conversions.
2. **Dynamic Variable Clean-Pass:** Switching themes initiates an atomic purge pass that scrubs existing CSS variables from the `:root` and canvas elements prior to applying the new token dictionary, preventing legacy CSS variable ghosting or cross-palette contamination.
3. **Dedicated Dark HUD Chrome Isolation:** Floating presenter controls, timeline scrubber tracks, theme popovers, and slide counters are permanently bound to dedicated `--chrome-*` tokens with high-contrast obsidian backdrops, preventing unreadable light-on-light buttons when presenting archival cream or pure white decks.
4. **3D Perspective Flip Slide Transition:** Inter-slide navigation introduces a physical card-flip transition using spatial 3D perspective ($1200\text{px}$ focal distance, $\pm 45^\circ$ Y-axis rotation, and $0.92$ depth scaling) powered by GPU hardware transforms.
5. **Cancelable `deck:nav` Event Interception & Tri-State Step Lifecycle:** Intra-slide steps are fully decoupled from global slide pagination through a cancelable `deck:nav` event bus. Active slides consume navigation events to cycle through multi-phase workflow steps (`completed` $\to$ `active` $\to$ `future`) accompanied by subtle tactile step tick audio cues (`playStepTick`).

```
+---------------------------------------------------------------------------------------------------+
|                   GLOBAL PPT & FLAT STEP MOTION ARCHITECTURE                                      |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [THEME RUNTIME]                     [EVENT INTERCEPTION]             [3D FLIP TRANSITION]        |
|  6-Tier HSL Triplets                 cancelable `deck:nav`            perspective: 1200px         |
|  Atomic Variable Clean-Pass          slide.onStepNavigate()           rotateY: +/- 45deg          |
|  Dark HUD Chrome Isolation           event.preventDefault()           scale: 0.92, duration: 420ms|
|          │                                   │                                 │                  |
|          ▼                                   ▼                                 ▼                  |
|  ┌─────────────────────────────────────────────────────────────────────────────────────────────┐  |
|  │ VIRTUAL PRESENTATION CANVAS (1920x1080 Viewport Geometry, Top-Left Scaled)                  │  |
|  └───────────────────────────────────────────────┬─────────────────────────────────────────────┘  |
|                                                  │                                                |
|          ┌───────────────────────────────────────┴───────────────────────────────────────┐         |
|          ▼                                                                               ▼         |
|  [TRI-STATE STEP PROGRESSION LIFECYCLE]                                  [AUDIO STEP FEEDBACK]    |
|  - Phase 1: Completed (0.75 Opacity, scale-100, CheckCircle2)            - playStepTick() sound   |
|  - Phase 2: Active (1.00 Opacity, scale-102, Halo Glow Ring)              - Synthesized 1800Hz /  |
|  - Phase 3: Future (0.40 Opacity, scale-98, 1.25px Optical Blur)           12ms acoustic click   |
|  - Ephemeral Hover Preview: effectiveStep = hoveredStep ?? activeStep     - Non-blocking WebAudio |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. 6-Tier Space-Separated HSL Token Architecture

### 2.1 The 6 Functional Token Tiers

Every theme is mathematically decomposed into 6 functional tiers of space-separated HSL triplets (`H S% L%`):

```less
// 6-Tier Architecture in src/themes/themeTokens.less and gradientTokens.ts
:root {
  /* Tier 1: Background & Canvas Surface */
  --pres-bg: 222 47% 7%;                    /* Master viewport backdrop */
  --pres-surface: 222 45% 11%;               /* Primary card surface */
  --pres-surface-elevated: 222 42% 16%;      /* Popovers, modals, raised panels */

  /* Tier 2: Primary & Secondary Text Typography */
  --pres-text: 210 40% 98%;                  /* High-contrast headlines & hero body */
  --pres-subtext: 215 20% 70%;               /* Secondary labels, kickers, captions */
  --pres-muted: 215 16% 47%;                 /* Inactive steps, footnotes, disabled hints */

  /* Tier 3: Brand & Primary Accent Triplets */
  --pres-accent: 217 91% 60%;                /* Corporate brand accent */
  --pres-accent-glow: 217 91% 60%;           /* Glow halos, focus rings, pulse effects */
  --pres-accent-contrast: 0 0% 100%;         /* Text rendered directly over accent fill */

  /* Tier 4: Kinetic Status & Semantic Indicators */
  --pres-success: 142 71% 45%;               /* Completed steps, online health, SLA met */
  --pres-warning: 38 92% 50%;                /* In-progress stages, degraded states */
  --pres-danger: 0 84% 60%;                  /* Attack vectors, SLA breach, error states */
  --pres-info: 199 89% 48%;                  /* Telemetry metrics, informational badges */

  /* Tier 5: Borders, Grids & Spatial Rules */
  --pres-border: 217 33% 20%;                /* Structural container borders */
  --pres-border-subtle: 217 33% 14%;         /* Card dividers, sub-grid rules */
  --pres-grid-line: 217 33% 10%;             /* Canvas background grid patterns */

  /* Tier 6: Dark HUD Chrome Isolation (Invariant across light/dark decks) */
  --chrome-bg: 222 47% 7%;                   /* Floating presenter bar backdrop (always dark) */
  --chrome-text: 210 40% 98%;                /* Floating presenter button labels */
  --chrome-border: 217 33% 22%;              /* Floating presenter container border */
  --chrome-hover: 222 42% 16%;               /* Floating presenter button hover state */
  --chrome-active: 217 91% 60%;              /* Active tool indicator / current step dot */
}
```

### 2.2 Dynamic Variable Clean-Pass Mechanism

When switching themes, browsers often preserve existing CSS custom properties if the incoming theme does not explicitly redefine every property, leading to cross-theme style corruption. The runtime implements a synchronous, comprehensive variable clean-pass:

```typescript
// src/themes/themeRuntime.ts
const ALL_MANAGED_CSS_VARS = [
  '--pres-bg', '--pres-surface', '--pres-surface-elevated',
  '--pres-text', '--pres-subtext', '--pres-muted',
  '--pres-accent', '--pres-accent-glow', '--pres-accent-contrast',
  '--pres-success', '--pres-warning', '--pres-danger', '--pres-info',
  '--pres-border', '--pres-border-subtle', '--pres-grid-line',
  '--chrome-bg', '--chrome-text', '--chrome-border', '--chrome-hover', '--chrome-active',
] as const;

export function applyThemeWithCleanPass(themeId: string, rootElement: HTMLElement = document.documentElement): void {
  // Phase 1: Purge existing variables to prevent legacy style bleed
  ALL_MANAGED_CSS_VARS.forEach((varName) => {
    rootElement.style.removeProperty(varName);
  });

  // Phase 2: Retrieve target theme palette
  const theme = resolveThemePalette(themeId);

  // Phase 3: Synchronously inject new 6-tier tokens
  Object.entries(theme.tokens).forEach(([token, value]) => {
    rootElement.style.setProperty(token, value);
  });

  // Phase 4: Set data attribute for theme-scoped selectors
  rootElement.setAttribute('data-theme', themeId);
}
```

### 2.3 The 7 Newly Adapted Themes & Their 6-Tier Characteristics

Module 38 expands the 13 canonical themes with 7 newly adapted, boardroom-tested themes from `global-ppt-v1`:

| # | Theme Identifier | Name | Canvas Bg HSL | Accent HSL | Mode | Persona & Contrast Rationale |
|:---:|:---|:---|:---:|:---:|:---:|:---|
| **14** | `vscode-dark` | Azure Studio | `0 0% 12%` | `211 100% 52%` | Dark | Classic IDE charcoal, Microsoft Azure electric blue highlights, developer presentations. |
| **15** | `dracula` | Vampire Sovereign | `231 15% 18%` | `265 89% 78%` | Dark | Cult developer dark mode, soft lavender and hot pink indicators, engineering keynotes. |
| **16** | `github-light` | Daylight Repository | `0 0% 100%` | `212 92% 45%` | Light | Crisp white canvas, GitHub royal blue ink, high-luminance executive print decks. |
| **17** | `paper-ink` | Vintage Parchment | `43 50% 95%` | `30 20% 10%` | Light | Archival ivory parchment, warm espresso typography, institutional policy briefings. |
| **18** | `macos-sonoma` | Cupertino Graphite | `240 4% 12%` | `211 100% 52%` | Dark | Refined macOS dark mode, deep space gray with frosted glass acrylic highlights. |
| **19** | `windows-11` | Fluent Obsidian | `0 0% 13%` | `198 100% 69%` | Dark | Microsoft Fluent mica surface, cyan glow accents, cloud architecture presentations. |
| **20** | `navy-blue` | Maritime Admiral | `217 42% 18%` | `187 92% 43%` | Dark | Formal naval officer navy, turquoise laser telemetry, defense and enterprise security summits. |

---

## 3. 3D Perspective Flip Slide Transition

### 3.1 Spatial 3D Perspective Physics

The `flip` transition treats slides as physical, two-sided cards turning in a 3D coordinate space. Unlike standard 2D flat slides, the flip transition applies real mathematical perspective:

$$\text{Focal Distance } d = 1200\text{px}$$
$$\text{Rotation } \theta_y = \begin{cases} +45^\circ & \text{if advancing forward} \\ -45^\circ & \text{if rewinding backward} \end{cases}$$
$$\text{Depth Scale } S = 0.92$$

```typescript
// src/components/canvas/SlideTransition.tsx
export const FLIP_TRANSITION_VARIANTS = {
  enter: (isForward: boolean) => ({
    rotateY: isForward ? 45 : -45,
    scale: 0.92,
    opacity: 0,
    transformPerspective: 1200,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  center: {
    rotateY: 0,
    scale: 1.0,
    opacity: 1,
    transformPerspective: 1200,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (isForward: boolean) => ({
    rotateY: isForward ? -45 : 45,
    scale: 0.92,
    opacity: 0,
    transformPerspective: 1200,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
```

### 3.2 Visual Atmosphere & Lighting Shading

During the $420\text{ms}$ flip window, an dynamic lighting overlay (`linear-gradient(to right, transparent, hsl(0 0% 0% / 0.15))`) sweeps across the face of the exiting slide to simulate specular occlusion from physical room lighting.

---

## 4. Cancelable `deck:nav` Event Interception & Keyboard Branching

### 4.1 Navigation Event Bus Contract

To prevent premature slide changes when an active slide has remaining uncompleted sub-steps, all navigation inputs (keyboard Space/Arrows, floating HUD buttons, remote presenter clicks) dispatch a cancelable custom event before triggering global slide indices:

```typescript
// src/types/navigationEvents.ts
export interface DeckNavEventDetail {
  action: 'advance' | 'rewind' | 'branch';
  direction: 'next' | 'prev';
  source: 'keyboard' | 'hud' | 'click' | 'branch_key';
  branchKey?: 'Y' | 'N';
}

export type DeckNavCustomEvent = CustomEvent<DeckNavEventDetail>;
```

### 4.2 Slide Interception Pattern

Slide components with multi-step progression mount an event listener on `window` to intercept the navigation event:

```typescript
// Pattern in multi-step slide components
useEffect(() => {
  const handleDeckNav = (event: Event) => {
    const navEvent = event as DeckNavCustomEvent;
    if (navEvent.detail.action === 'advance') {
      if (activeStep < maxSteps - 1) {
        navEvent.preventDefault(); // HALT parent slide transition
        stepAdvance();             // Advance internal sub-step
        playStepTick();            // Trigger subtle tactile tick audio
      }
    } else if (navEvent.detail.action === 'rewind') {
      if (activeStep > 0) {
        navEvent.preventDefault(); // HALT parent slide transition
        stepRewind();              // Rewind internal sub-step
        playStepTick();
      }
    }
  };

  window.addEventListener('deck:nav', handleDeckNav);
  return () => window.removeEventListener('deck:nav', handleDeckNav);
}, [activeStep, maxSteps, stepAdvance, stepRewind]);
```

### 4.3 Interactive Branching Shortcuts (`Y` / `N`)

Archetype 01 (`interactive-branching-close`) introduces non-linear decision branching. Presenters or attendees press `Y` (Accept / Next Steps) or `N` (Object / Scarcity Rebuttal) to navigate directly to targeted decks or resolution paths:

```typescript
// src/hooks/useDeckShortcuts.ts
export function useBranchingShortcuts(isBranchingSlideActive: boolean, onBranchSelect: (key: 'Y' | 'N') => void): void {
  useEffect(() => {
    if (!isBranchingSlideActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key === 'Y' || key === 'N') {
        e.preventDefault();
        onBranchSelect(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBranchingSlideActive, onBranchSelect]);
}
```

---

## 5. Tri-State Kinetic Step Progression Lifecycle & Tactile Audio

### 5.1 The 3-Phase Step Lifecycle

```
[Phase 1: Completed]  --> Opacity 0.75, scale-100, CheckCircle2 badge, neutral border, Z=8px
[Phase 2: Active]     --> Opacity 1.00, scale-102, z-20, luminescent halo glow ring, detail pane expansion, Z=24px
[Phase 3: Future]     --> Opacity 0.40, scale-98, pointer-events-none, 1.25px optical blur, Z=4px
```

```typescript
export type StepPhase = 'completed' | 'active' | 'future';

export function determineStepPhase(stepIndex: number, effectiveStep: number): StepPhase {
  if (stepIndex < effectiveStep) return 'completed';
  if (stepIndex === effectiveStep) return 'active';
  return 'future';
}

export function getStepPhaseStyle(phase: StepPhase): CSSProperties {
  if (phase === 'completed') {
    return {
      opacity: 0.75,
      transform: 'translateZ(8px) scale(1.00)',
      filter: 'none',
      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    };
  }
  if (phase === 'active') {
    return {
      opacity: 1.00,
      transform: 'translateZ(24px) scale(1.02)',
      filter: 'none',
      boxShadow: '0 0 28px -4px hsl(var(--pres-accent) / 0.55)',
      zIndex: 20,
      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    };
  }
  return {
    opacity: 0.40,
    transform: 'translateZ(4px) scale(0.98)',
    filter: 'blur(1.25px)',
    pointerEvents: 'none',
    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
  };
}
```

### 5.2 Ephemeral Hover Preview Mechanics

Reviewers and presenters can inspect past or future steps by hovering over timeline rails or cards without modifying the canonical presentation state:

```typescript
const [hoveredStep, setHoveredStep] = useState<number | null>(null);
const effectiveStep = hoveredStep !== null ? hoveredStep : activeStep;
```

Leaving the rail (`onMouseLeave`) smoothly snaps the visual focus back to `activeStep` via harmonic spring damping.

### 5.3 Tactile Step Audio Cue (`playStepTick`)

To provide auditory confirmation during intra-slide stepping without distracting the audience with heavy sound effects, the audio engine generates an ultra-short, synthesized acoustic tick ($1800\text{Hz}$ sine oscillator with exponential $12\text{ms}$ gain decay):

```typescript
// src/utils/soundEffects.ts
export function playStepTick(): void {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.012);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.012);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.012);
  } catch {
    // AudioContext blocked by browser policy prior to user interaction; fail gracefully
  }
}
```

---

## 6. Full Data Contracts & JSON Schemas for Archetypes 09 to 15

### Archetype 09: `executive-roster-keypad`

Executive leadership keypad showcasing executive profiles with instant key-press role switching, verified credential tags, real-time KPI chips, and standardized persona titles.

#### TypeScript Interface
```typescript
export interface ExecutiveProfile {
  id: string;
  name: string;
  roleTitle: string; // Strictly standardized; e.g. "Chief Software Engineer" for Alim Ul Karim
  department: string;
  keypadNumber: number; // 1 to 9
  avatarUrl: string;
  primaryKpiLabel: string;
  primaryKpiValue: string;
  bioSummary: string;
  isVerified: boolean;
  contactEmail: string;
}

export interface ExecutiveRosterKeypadSlideData {
  id: string;
  type: 'executive-roster-keypad';
  title: string;
  kicker: string;
  boardroomSubtitle: string;
  executives: ExecutiveProfile[];
  activeExecutiveId?: string;
  themeId?: string;
}
```

#### JSON Schema
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "ExecutiveRosterKeypadSlideData",
  "type": "object",
  "required": ["id", "type", "title", "kicker", "boardroomSubtitle", "executives"],
  "properties": {
    "id": { "type": "string" },
    "type": { "const": "executive-roster-keypad" },
    "title": { "type": "string" },
    "kicker": { "type": "string" },
    "boardroomSubtitle": { "type": "string" },
    "executives": {
      "type": "array",
      "minItems": 3,
      "maxItems": 9,
      "items": {
        "type": "object",
        "required": ["id", "name", "roleTitle", "department", "keypadNumber", "avatarUrl", "primaryKpiLabel", "primaryKpiValue", "bioSummary", "isVerified", "contactEmail"],
        "properties": {
          "id": { "type": "string" },
          "name": { "type": "string" },
          "roleTitle": { "type": "string" },
          "department": { "type": "string" },
          "keypadNumber": { "type": "integer", "minimum": 1, "maximum": 9 },
          "avatarUrl": { "type": "string" },
          "primaryKpiLabel": { "type": "string" },
          "primaryKpiValue": { "type": "string" },
          "bioSummary": { "type": "string" },
          "isVerified": { "type": "boolean" },
          "contactEmail": { "type": "string" }
        }
      }
    },
    "activeExecutiveId": { "type": "string" },
    "themeId": { "type": "string" }
  }
}
```

---

### Archetype 10: `flat-step-process-flow`

Multi-phase operational process flow with continuous SVG cubic Bezier connection lines, phase duration badges, deliverable tags, and tri-state progression.

#### TypeScript Interface
```typescript
export interface ProcessFlowStage {
  stepIndex: number;
  stageName: string;
  stageCategory: string;
  estimatedDuration: string;
  deliverableLabel: string;
  technicalDescription: string;
  isMilestoneGate: boolean;
  statusBadge: string;
}

export interface FlatStepProcessFlowSlideData {
  id: string;
  type: 'flat-step-process-flow';
  title: string;
  kicker: string;
  methodologyOverview: string;
  stages: ProcessFlowStage[];
  themeId?: string;
}
```

#### JSON Schema
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "FlatStepProcessFlowSlideData",
  "type": "object",
  "required": ["id", "type", "title", "kicker", "methodologyOverview", "stages"],
  "properties": {
    "id": { "type": "string" },
    "type": { "const": "flat-step-process-flow" },
    "title": { "type": "string" },
    "kicker": { "type": "string" },
    "methodologyOverview": { "type": "string" },
    "stages": {
      "type": "array",
      "minItems": 3,
      "maxItems": 6,
      "items": {
        "type": "object",
        "required": ["stepIndex", "stageName", "stageCategory", "estimatedDuration", "deliverableLabel", "technicalDescription", "isMilestoneGate", "statusBadge"],
        "properties": {
          "stepIndex": { "type": "integer", "minimum": 0 },
          "stageName": { "type": "string" },
          "stageCategory": { "type": "string" },
          "estimatedDuration": { "type": "string" },
          "deliverableLabel": { "type": "string" },
          "technicalDescription": { "type": "string" },
          "isMilestoneGate": { "type": "boolean" },
          "statusBadge": { "type": "string" }
        }
      }
    },
    "themeId": { "type": "string" }
  }
}
```

---

### Archetype 11: `flat-split-narrative-stepper`

50/50 dual-pane architecture pairing a vertical progression stepper on the left with an expanding hero detail and telemetry canvas on the right.

#### TypeScript Interface
```typescript
export interface NarrativeStep {
  stepIndex: number;
  stepTitle: string;
  stepSubtitle: string;
  heroHeadline: string;
  deepDiveAnalysis: string;
  metricValue: string;
  metricLabel: string;
  codeSnippetSnippet?: string;
  isCriticalPath: boolean;
}

export interface FlatSplitNarrativeStepperSlideData {
  id: string;
  type: 'flat-split-narrative-stepper';
  title: string;
  kicker: string;
  narrativeLead: string;
  steps: NarrativeStep[];
  themeId?: string;
}
```

#### JSON Schema
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "FlatSplitNarrativeStepperSlideData",
  "type": "object",
  "required": ["id", "type", "title", "kicker", "narrativeLead", "steps"],
  "properties": {
    "id": { "type": "string" },
    "type": { "const": "flat-split-narrative-stepper" },
    "title": { "type": "string" },
    "kicker": { "type": "string" },
    "narrativeLead": { "type": "string" },
    "steps": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "required": ["stepIndex", "stepTitle", "stepSubtitle", "heroHeadline", "deepDiveAnalysis", "metricValue", "metricLabel", "isCriticalPath"],
        "properties": {
          "stepIndex": { "type": "integer", "minimum": 0 },
          "stepTitle": { "type": "string" },
          "stepSubtitle": { "type": "string" },
          "heroHeadline": { "type": "string" },
          "deepDiveAnalysis": { "type": "string" },
          "metricValue": { "type": "string" },
          "metricLabel": { "type": "string" },
          "codeSnippetSnippet": { "type": "string" },
          "isCriticalPath": { "type": "boolean" }
        }
      }
    },
    "themeId": { "type": "string" }
  }
}
```

---

### Archetype 12: `flat-timeline-milestone-rail`

Horizontal timeline rail with date pill anchors, completion status rings, deliverable summaries, and expandable deep-dive milestone cards.

#### TypeScript Interface
```typescript
export interface TimelineMilestone {
  stepIndex: number;
  calendarDate: string;
  milestoneTitle: string;
  ownerPersona: string;
  primaryMetric: string;
  completionPercentage: number;
  isSignedOff: boolean;
  blockerCount: number;
}

export interface FlatTimelineMilestoneRailSlideData {
  id: string;
  type: 'flat-timeline-milestone-rail';
  title: string;
  kicker: string;
  roadmapHorizon: string;
  milestones: TimelineMilestone[];
  themeId?: string;
}
```

#### JSON Schema
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "FlatTimelineMilestoneRailSlideData",
  "type": "object",
  "required": ["id", "type", "title", "kicker", "roadmapHorizon", "milestones"],
  "properties": {
    "id": { "type": "string" },
    "type": { "const": "flat-timeline-milestone-rail" },
    "title": { "type": "string" },
    "kicker": { "type": "string" },
    "roadmapHorizon": { "type": "string" },
    "milestones": {
      "type": "array",
      "minItems": 3,
      "maxItems": 6,
      "items": {
        "type": "object",
        "required": ["stepIndex", "calendarDate", "milestoneTitle", "ownerPersona", "primaryMetric", "completionPercentage", "isSignedOff", "blockerCount"],
        "properties": {
          "stepIndex": { "type": "integer", "minimum": 0 },
          "calendarDate": { "type": "string" },
          "milestoneTitle": { "type": "string" },
          "ownerPersona": { "type": "string" },
          "primaryMetric": { "type": "string" },
          "completionPercentage": { "type": "number", "minimum": 0, "maximum": 100 },
          "isSignedOff": { "type": "boolean" },
          "blockerCount": { "type": "integer", "minimum": 0 }
        }
      }
    },
    "themeId": { "type": "string" }
  }
}
```

---

### Archetype 13: `flat-reveal-bento-grid`

Asymmetrical CSS Bento Grid layout with stepwise cell illumination, KPI metric callouts, and tag matrices.

#### TypeScript Interface
```typescript
export interface BentoGridCell {
  stepIndex: number;
  cellTitle: string;
  gridSpan: 'span-1' | 'span-2' | 'span-3' | 'row-span-2';
  kpiFigure: string;
  kpiUnit: string;
  qualitativeSummary: string;
  categoryTag: string;
  isPrimaryHighlight: boolean;
}

export interface FlatRevealBentoGridSlideData {
  id: string;
  type: 'flat-reveal-bento-grid';
  title: string;
  kicker: string;
  portfolioSummary: string;
  cells: BentoGridCell[];
  themeId?: string;
}
```

#### JSON Schema
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "FlatRevealBentoGridSlideData",
  "type": "object",
  "required": ["id", "type", "title", "kicker", "portfolioSummary", "cells"],
  "properties": {
    "id": { "type": "string" },
    "type": { "const": "flat-reveal-bento-grid" },
    "title": { "type": "string" },
    "kicker": { "type": "string" },
    "portfolioSummary": { "type": "string" },
    "cells": {
      "type": "array",
      "minItems": 4,
      "maxItems": 6,
      "items": {
        "type": "object",
        "required": ["stepIndex", "cellTitle", "gridSpan", "kpiFigure", "kpiUnit", "qualitativeSummary", "categoryTag", "isPrimaryHighlight"],
        "properties": {
          "stepIndex": { "type": "integer", "minimum": 0 },
          "cellTitle": { "type": "string" },
          "gridSpan": { "type": "string", "enum": ["span-1", "span-2", "span-3", "row-span-2"] },
          "kpiFigure": { "type": "string" },
          "kpiUnit": { "type": "string" },
          "qualitativeSummary": { "type": "string" },
          "categoryTag": { "type": "string" },
          "isPrimaryHighlight": { "type": "boolean" }
        }
      }
    },
    "themeId": { "type": "string" }
  }
}
```

---

### Archetype 14: `flat-depth-sentence-stack`

Layered typographic sentence stack with staggered 3D depth displacements (`translateZ`, `translateY`), typographic weight emphasis, and focal point reveal.

#### TypeScript Interface
```typescript
export interface DepthSentence {
  stepIndex: number;
  highlightKeyword: string;
  fullSentence: string;
  supportingArgument: string;
  authorityProofTag: string;
  isTakeawayStatement: boolean;
}

export interface FlatDepthSentenceStackSlideData {
  id: string;
  type: 'flat-depth-sentence-stack';
  title: string;
  kicker: string;
  thematicThesis: string;
  sentences: DepthSentence[];
  themeId?: string;
}
```

#### JSON Schema
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "FlatDepthSentenceStackSlideData",
  "type": "object",
  "required": ["id", "type", "title", "kicker", "thematicThesis", "sentences"],
  "properties": {
    "id": { "type": "string" },
    "type": { "const": "flat-depth-sentence-stack" },
    "title": { "type": "string" },
    "kicker": { "type": "string" },
    "thematicThesis": { "type": "string" },
    "sentences": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "required": ["stepIndex", "highlightKeyword", "fullSentence", "supportingArgument", "authorityProofTag", "isTakeawayStatement"],
        "properties": {
          "stepIndex": { "type": "integer", "minimum": 0 },
          "highlightKeyword": { "type": "string" },
          "fullSentence": { "type": "string" },
          "supportingArgument": { "type": "string" },
          "authorityProofTag": { "type": "string" },
          "isTakeawayStatement": { "type": "boolean" }
        }
      }
    },
    "themeId": { "type": "string" }
  }
}
```

---

### Archetype 15: `flat-typewriter-code-walkthrough`

Interactive terminal code walkthrough with live typewriter character streaming, syntax highlighting tokens, blinking terminal cursor, and line-by-line annotation callouts.

#### TypeScript Interface
```typescript
export interface CodeStanza {
  stepIndex: number;
  stanzaTitle: string;
  activeLinesRange: [number, number]; // [startLine, endLine]
  terminalCode: string;
  annotationCallout: string;
  language: 'typescript' | 'python' | 'go' | 'rust' | 'json';
  hasPerformanceNote: boolean;
}

export interface FlatTypewriterCodeWalkthroughSlideData {
  id: string;
  type: 'flat-typewriter-code-walkthrough';
  title: string;
  kicker: string;
  fileNameHeader: string;
  stanzas: CodeStanza[];
  themeId?: string;
}
```

#### JSON Schema
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "FlatTypewriterCodeWalkthroughSlideData",
  "type": "object",
  "required": ["id", "type", "title", "kicker", "fileNameHeader", "stanzas"],
  "properties": {
    "id": { "type": "string" },
    "type": { "const": "flat-typewriter-code-walkthrough" },
    "title": { "type": "string" },
    "kicker": { "type": "string" },
    "fileNameHeader": { "type": "string" },
    "stanzas": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "required": ["stepIndex", "stanzaTitle", "activeLinesRange", "terminalCode", "annotationCallout", "language", "hasPerformanceNote"],
        "properties": {
          "stepIndex": { "type": "integer", "minimum": 0 },
          "stanzaTitle": { "type": "string" },
          "activeLinesRange": {
            "type": "array",
            "items": { "type": "integer" },
            "minItems": 2,
            "maxItems": 2
          },
          "terminalCode": { "type": "string" },
          "annotationCallout": { "type": "string" },
          "language": { "type": "string", "enum": ["typescript", "python", "go", "rust", "json"] },
          "hasPerformanceNote": { "type": "boolean" }
        }
      }
    },
    "themeId": { "type": "string" }
  }
}
```
