# 03-Theme Motion & Flat Progression: Kinetic Physics, Spring Dynamics & Global PPT Synthesis

> **Specification Identifier:** `02-spec/21-app/34-global-ppt-synthesis-and-15-nextgen-archetypes/03-theme-motion-and-flat-progression`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.7.0`  
> **Author:** Spec Author 01  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-03  
> **Domain:** 3-Phase Kinetic Step Progression, Harmonic Spring Physics, Tactile Hover Preview Mechanics, 5 Global PPT Animation Choreographies, Subpixel Mathematical Ink-Stamp Micro-Shadows, Semantic Design Tokens  

---

## 1. System Vision & Architectural Motion Philosophy

The motion design system for `34-global-ppt-synthesis-and-15-nextgen-archetypes` establishes a tactile, physical presentation canvas that unifies **Global PPT Executive Authority** with **Kinetic Intra-Slide Step Progression**. 

Traditional slide decks disorient audiences through abrupt, full-canvas slide transitions that reset visual context and force executive viewers to re-orient themselves. In contrast, this motion architecture treats every slide as a living, physical workspace governed by:

1. **Deterministic Pacing via 3-Phase Progression:** Intra-slide steps advance narrative focal points smoothly across three discrete visual phases (`completed`, `active`, `future`), maintaining full context without visual competition.
2. **Harmonic Spring Physics:** All transitions, expansions, and reveals are calculated via underdamped harmonic oscillator differential equations rather than arbitrary linear or cubic CSS curves.
3. **Tactile Hover Previews:** Presenters and reviewers can freely inspect upcoming or past steps via non-destructive hover previews without desynchronizing the persistent presentation state.
4. **Subpixel Mathematical Ink-Stamp Micro-Shadows:** Zero-blur, subpixel offsets (`1px 0.7px 0px`) emulate authentic high-grade physical letterpress typography on high-DPI displays.
5. **Living Canvas Atmosphere:** Subtle background lighting choreographies (@keyframes spotlightSweep, floatSubtle, pulseAccent) provide ambient depth without distracting from technical metrics.

```
+---------------------------------------------------------------------------------------------------+
|                        KINETIC MOTION & PROGRESSION ARCHITECTURE                                  |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [PERSISTED STATE]                  [EPHEMERAL PREVIEW]               [CANVAS ATMOSPHERE]         |
|  useDeckStore.activeStep            hoveredStep (null | number)        @keyframes spotlightSweep  |
|  Controlled via Space/Arrows        Controlled via MouseEnter/Leave    @keyframes floatSubtle     |
|          │                                   │                         @keyframes pulseAccent     |
|          ▼                                   ▼                                                    |
|  ┌────────────────────────────────────────────────────────────────────────┐                       |
|  │ EFFECTIVE STEP RESOLUTION: effectiveStep = hoveredStep ?? activeStep   │                       |
|  └───────────────────────────────────┬────────────────────────────────────┘                       |
|                                      │                                                            |
|          ┌───────────────────────────┴───────────────────────────┐                                |
|          ▼                                                       ▼                                |
|  [LEFT PROGRESSION RAIL]                                 [RIGHT HERO DETAIL PANE]                 |
|  - Phase 1: Completed (0.75 Opacity, CheckCircle2)       - 40px-46px Detail Heading               |
|  - Phase 2: Active (1.00 Opacity, Concentric Halo Ring)  - Key Metric Badge (clamp 2.5rem-4.5rem) |
|  - Phase 3: Future (0.40 Opacity, 1.25px Optical Blur)   - STEP_DETAIL_PANE_SPRING (k=420, c=17)  |
|  - PROGRESS_RAIL_SPRING (k=220, c=32)                    - Single-Item Cognitive Focus            |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. The 3-Phase Kinetic Step Progression Lifecycle

To eliminate cognitive fatigue and maintain narrative context, every multi-step operational workflow structures child elements into a deterministic 3-phase state machine:

```
+---------------------------------------------------------------------------------------------------+
|                        3-PHASE STEP LIFECYCLE STATE MACHINE                                       |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ PHASE 1: COMPLETED ] (itemIndex < effectiveStep)                                               |
|  - Opacity: 0.75                                                                                  |
|  - Transform: scale(1.00) translateZ(8px) (Plane 1: Raised)                                        |
|  - Filter: grayscale(12%)                                                                         |
|  - Border: Desaturated neutral rgba(255,255,255,0.12) / rgba(15,23,42,0.10)                       |
|  - Visual Badge: Positive verification checkmark badge (CheckCircle2 in Emerald/Mint #10B981)     |
|  - Behavior: Context is retained and fully legible; subdued contrast prevents focus competition   |
|                                                                                                   |
|  [ PHASE 2: ACTIVE ] (itemIndex === effectiveStep)                                                |
|  - Opacity: 1.00                                                                                  |
|  - Transform: scale(1.02) translateZ(24px) (Plane 2: Elevated)                                    |
|  - Filter: none                                                                                   |
|  - Border: High-contrast accent stroke hsl(var(--pres-accent) / 0.80)                             |
|  - Illumination: Active Concentric Halo Ring (@keyframes haloRingConcentric)                      |
|  - Harmonic Spring: k = 420 N/m, c = 17 N*s/m, m = 0.8 kg, zeta = 0.85                           |
|  - Behavior: Laser-sharp focal point of executive narrative and audio-visual focus                 |
|                                                                                                   |
|  [ PHASE 3: FUTURE ] (itemIndex > effectiveStep)                                                  |
|  - Opacity: 0.40                                                                                  |
|  - Transform: scale(0.98) translateZ(0px) (Plane 0: Surface)                                      |
|  - Optical Depth-of-Field Blur: filter: blur(1.25px)                                              |
|  - Pointer Events: none (user-select: none)                                                       |
|  - Behavior: Optical blur prevents eye movement across unannounced content; container is stable   |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 2.1 Standardized Reusable Kinetic CSS Classes

To enforce uniform motion physics and visual semantics across all 8 multi-step operational workflows, the presentation engine provides canonical CSS classes:

```less
// In src/styles/presentation.less:

// Phase 1: Completed / Past Step
.step-phase-past,
.step-phase-completed {
  opacity: 0.75;
  transform: scale(1.00) translateZ(8px);
  filter: grayscale(12%);
  border-color: var(--pres-border);
  transition: 
    opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.4s ease;
  pointer-events: auto;
}

// Phase 2: Active Step (Narrative Focus)
.step-phase-active {
  opacity: 1.00;
  transform: scale(1.02) translateZ(24px);
  filter: none;
  border-color: hsl(var(--pres-accent) / 0.80);
  animation: haloRingConcentric 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  box-shadow: 
    0 20px 48px -10px rgba(0, 0, 0, 0.55),
    0 0 24px -2px hsl(var(--pres-accent) / 0.45);
  transition: 
    opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    border-color 0.35s ease;
  z-index: 20;
  pointer-events: auto;
}

// Phase 3: Future Step (Upcoming Stage)
.step-phase-future {
  opacity: 0.40;
  transform: scale(0.98) translateZ(0px);
  filter: blur(1.25px);
  border-color: var(--pres-border);
  transition: 
    opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  user-select: none;
}
```

### 2.2 React Implementation Pattern

```tsx
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface KineticStepProps {
  index: number;
  effectiveStep: number;
  title: string;
  subtitle?: string;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function KineticStepRailItem({
  index,
  effectiveStep,
  title,
  subtitle,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: KineticStepProps) {
  const isPast = index < effectiveStep;
  const isActive = index === effectiveStep;

  const phaseClass = isActive
    ? 'step-phase-active'
    : isPast
      ? 'step-phase-completed'
      : 'step-phase-future';

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`p-4 rounded-xl border transition-all cursor-pointer ${phaseClass}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-ubuntu font-bold text-lg">{title}</span>
        {isPast && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
      </div>
      {subtitle && <p className="text-sm text-[var(--pres-text-muted)] mt-1">{subtitle}</p>}
    </div>
  );
}
```

---

## 3. Harmonic Spring Physics & Mathematical Modeling

### 3.1 Damped Harmonic Oscillator Differential Equation

All physical transitions in the presentation engine are modeled on the classical damped harmonic oscillator equation:

$$m \frac{d^2 x}{dt^2} + c \frac{dx}{dt} + k x = 0$$

Where:
- $m$: Mass of the virtual UI element ($\text{kg}$).
- $c$: Damping coefficient ($\text{N}\cdot\text{s/m}$).
- $k$: Spring stiffness / tension ($\text{N/m}$).

The characteristic natural angular frequency $\omega_0$ and damping ratio $\zeta$ are given by:

$$\omega_0 = \sqrt{\frac{k}{m}}, \qquad \zeta = \frac{c}{2\sqrt{km}}$$

- **Underdamped ($\zeta < 1.0$):** Produces a crisp, organic settlement with calibrated micro-overshoot that feels physical and high-tech.
- **Critically Damped ($\zeta = 1.0$):** Fastest possible arrival without overshoot.
- **Overdamped ($\zeta > 1.0$):** Sluggish arrival; strictly forbidden in the presentation engine.

### 3.2 Canonical Framer Motion Spring Configurations

Defined canonically in `src/utils/motionPhysics.ts`:

```typescript
// Canonical Framer Motion Spring Physics Configurations

/**
 * Governs the right-hand hero detail pane entrance, layout transitions, and card popups.
 * Underdamped harmonic calibration: stiffness 420, damping 17, mass 0.8 -> settles in ~350ms.
 */
export const STEP_DETAIL_PANE_SPRING = {
  type: 'spring',
  stiffness: 420,
  damping: 17,
  mass: 0.8,
} as const;

/**
 * Governs progression rails, progress indicators, timeline runners, and step counters.
 * Smooth authoritative progression without oscillation: stiffness 220, damping 32, mass 1.0.
 */
export const PROGRESS_RAIL_SPRING = {
  type: 'spring',
  stiffness: 220,
  damping: 32,
  mass: 1.0,
} as const;

/**
 * Governs layoutId halos, floating badges, and glowing selection indicators.
 * Responsive aura expansion: stiffness 320, damping 30, mass 0.9.
 */
export const HALO_SPRING = {
  type: 'spring',
  stiffness: 320,
  damping: 30,
  mass: 0.9,
} as const;

/**
 * Governs high-frequency tactile button clicks, pill toggles, and modal dismissals.
 * Snappy tactile response: stiffness 500, damping 25, mass 0.6.
 */
export const SNAPPY_SPRING = {
  type: 'spring',
  stiffness: 500,
  damping: 25,
  mass: 0.6,
} as const;
```

### 3.3 CSS Easing Tokens

For CSS3-based animations and Less stylesheets where Framer Motion is not directly mounted, three cubic-bezier easing tokens provide parity with the spring physics engine:

```less
// In src/styles/variables.less:
@ease-spring-snappy: cubic-bezier(0.34, 1.56, 0.64, 1);       // 104% tactile overshoot for buttons & pills
@ease-spring-bouncy: cubic-bezier(0.175, 0.885, 0.32, 1.275); // Celebratory bounce for KPI numbers
@ease-spring-smooth: cubic-bezier(0.22, 1, 0.36, 1);          // Quintic exponential deceleration for panes
```

---

## 4. Tactile Hover Preview Mechanics vs Persisted `activeStep`

### 4.1 The Dual-State Interaction Architecture

A core innovation in the Next-Gen presentation engine is the decoupling of **persisted presentation state** from **ephemeral preview state**:

```
+---------------------------------------------------------------------------------------------------+
|                        TACTILE HOVER PREVIEW DUAL-STATE PIPELINE                                  |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [PERSISTED STORE STATE]                     [COMPONENT LOCAL PREVIEW STATE]                      |
|  useDeckStore.activeStep                     const [hoveredIdx, setHoveredIdx] = useState(null)   |
|  Mutated ONLY by:                            Mutated ONLY by:                                     |
|  - Keyboard (Space, ArrowRight, Enter)       - onMouseEnter={() => setHoveredIdx(index)}          |
|  - Explicit click: jumpToStep(index)         - onMouseLeave={() => setHoveredIdx(null)}           |
|                                                                                                   |
|                                 ┌─────────────────────────┐                                       |
|                                 │ EFFECTIVE STEP RESOLVER │                                       |
|                                 └────────────┬────────────┘                                       |
|                                              │                                                    |
|                   effectiveStep = (hoveredIdx !== null) ? hoveredIdx : activeStep                 |
|                                              │                                                    |
|                                              ▼                                                    |
|                 ┌────────────────────────────────────────────────────────┐                        |
|                 │ DYNAMIC RIGHT-HAND HERO DETAIL PANE                    │                        |
|                 │ key={effectiveStep}                                    │                        |
|                 │ Entrance Animation: STEP_DETAIL_PANE_SPRING            │                        |
|                 │ Displays hovered step details with zero store mutation │                        |
|                 └────────────────────────────────────────────────────────┘                        |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 4.2 Non-Destructive Exploration Principles

1. **Zero Presentation Pollution:** Moving the cursor over the left-hand progression rail allows a presenter or audience member to preview future architecture gates or past audit checkpoints without desynchronizing the slide's canonical `activeStep`.
2. **Instant Restoration:** When the mouse leaves the rail (`onMouseLeave`), the preview state clears (`setHoveredIdx(null)`), and the right-hand detail pane instantly snaps back to the persisted `activeStep`.
3. **Explicit Commitment:** Clicking any step rail item (`onClick={() => jumpToStep(idx)}`) updates `useDeckStore.activeStep`, synchronizing the slide state and firing the synthesized acoustic chime.
4. **Single-Item Cognitive Focus:** Instead of showing 5 small competing cards across the screen, the slide renders 1 authoritative hero card keyed to `effectiveStep`.

---

## 5. Five New Global PPT Animation Choreographies

The presentation engine introduces 5 specialized CSS and Framer Motion choreographies designed for corporate boardroom authority:

### 5.1 `@keyframes spotlightSweep` (Atmospheric Ambient Wash)

Sweeps a radial spotlight across the canvas background along a subtle sinusoidal curve, creating living atmospheric depth without visual distraction:

```less
// In src/styles/animations.less:

@keyframes spotlightSweep {
  0% {
    background-position: 45% 45%;
    opacity: 0.85;
  }
  50% {
    background-position: 55% 52%;
    opacity: 1.00;
  }
  100% {
    background-position: 45% 45%;
    opacity: 0.85;
  }
}

.ambient-spotlight-sweep {
  background: radial-gradient(
    ellipse 65% 55% at 50% 48%,
    hsl(var(--pres-accent) / 0.14) 0%,
    hsl(var(--pres-accent) / 0.04) 45%,
    transparent 75%
  );
  background-size: 140% 140%;
  animation: spotlightSweep 14s ease-in-out infinite;
}
```

### 5.2 `@keyframes floatSubtle` (Levitating Architectural Vectors)

Applies a subtle vertical float to floating architectural vector icons (`Layers`, `Cpu`, `Shield`, `Terminal`) and high-priority KPI cards:

```less
@keyframes floatSubtle {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-6px) rotate(0.4deg);
  }
}

.float-vector-subtle {
  animation: floatSubtle 5.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
  will-change: transform;
}
```

### 5.3 `@keyframes pulseAccent` (Concentric Energy Halo)

Expands concentric radial energy rings around the active step pin or focused security alert:

```less
@keyframes pulseAccent {
  0% {
    box-shadow: 
      0 0 0 0 hsl(var(--pres-accent) / 0.70),
      0 0 0 0 hsl(var(--pres-accent) / 0.35),
      0 0 16px -2px hsl(var(--pres-accent) / 0.40);
  }
  50% {
    box-shadow: 
      0 0 0 6px hsl(var(--pres-accent) / 0.30),
      0 0 0 14px hsl(var(--pres-accent) / 0.12),
      0 0 28px 2px hsl(var(--pres-accent) / 0.60);
  }
  100% {
    box-shadow: 
      0 0 0 12px hsl(var(--pres-accent) / 0.00),
      0 0 0 24px hsl(var(--pres-accent) / 0.00),
      0 0 16px -2px hsl(var(--pres-accent) / 0.40);
  }
}

.pulse-accent-ring {
  animation: pulseAccent 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}
```

### 5.4 `@keyframes kineticCardEntrance` (Subpixel Staggered Entry)

Provides an organic physical entrance for dynamic right-hand detail panes and newly revealed metric cards:

```less
@keyframes kineticCardEntrance {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.97) translateZ(0px);
  }
  70% {
    opacity: 0.95;
    transform: translateY(-2px) scale(1.005) translateZ(26px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1.000) translateZ(24px);
  }
}

.kinetic-card-entrance {
  animation: kineticCardEntrance 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  will-change: transform, opacity;
}
```

### 5.5 Bidirectional Slide Transitions

Slide transitions between different slides are directional and wrap in `<SlideTransition>`:

```typescript
// In src/components/transitions/SlideTransition.tsx:

interface SlideTransitionProps {
  transitionKey: string;
  direction: 1 | -1; // 1 = forward (Next), -1 = backward (Prev)
  children: React.ReactNode;
}

export const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: '0%',
    opacity: 1,
    scale: 1.0,
    transition: {
      x: { type: 'spring', stiffness: 350, damping: 30 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring', stiffness: 350, damping: 30 },
      opacity: { duration: 0.20 },
    },
  }),
};
```

---

## 6. Subpixel Mathematical Ink-Stamp Micro-Shadows

### 6.1 Offset Formulation & Optical Mechanics

To sharpen glyph contours directly at the baseline on high-DPI displays and conference room projectors, the engine utilizes sub-pixel zero-blur offset bevels:

$$\text{MicroShadow}_{\text{dark}} = \text{rgb}(0\ 0\ 0)\ 1\text{px}\ 0.7\text{px}\ 0\text{px}$$
$$\text{MicroShadow}_{\text{light}} = \text{rgb}(255\ 255\ 255)\ 1\text{px}\ 0.7\text{px}\ 0\text{px}$$

### 6.2 Visual Physics & Display Rationale
- **Subpixel Vertical Offset ($0.7\text{px}$):** Prevents the shadow from separating into a secondary ghost character, while delivering optical separation from the canvas surface.
- **Zero Blur Radius ($0\text{px}$):** Eliminates blurry, fuzzy raster artifacts, emulating high-precision physical letterpress printing (ink-stamp micro-shadow).
- **Dark Mode Function:** Anchors luminous text (`#F8FAFC`, `#A78BFA`) against deep obsidian backgrounds (`#020617`, `#080808`).
- **Light Mode Function:** Creates an embossed paper impression, maximizing letter crispness against white (`#FFFFFF`) or cream (`#FAF7F0`) backgrounds.

### 6.3 CSS Implementation

```less
// In src/styles/presentation.less:
:root {
  --text-shadow-weight-dark: rgb(0 0 0) 1px 0.7px 0px;
  --text-shadow-weight-light: rgb(255 255 255) 1px 0.7px 0px;
  --pres-header-shadow: var(--text-shadow-weight-dark);
}

[data-is-dark="false"],
.theme-light {
  --pres-header-shadow: var(--text-shadow-weight-light);
}

// Typography application
.pres-heading-hero,
.pres-heading-h1,
.pres-heading-h2 {
  text-shadow: var(--pres-header-shadow);
}
```

---

## 7. Ambient 8% Low-Opacity HUD & Floating Tooltip Standard

### 7.1 Idle Low-Opacity Docking
To keep presenter attention focused 100% on slide content, the floating presenter HUD and navigation slider sit at **8% opacity** (`opacity-[0.08]` or `rgba(..., 0.08)`) during normal presentation flow:

```less
.presenter-hud-container {
  opacity: 0.08;
  transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  &:hover,
  &:focus-within {
    opacity: 1.00;
  }
}
```

### 7.2 Collision-Free Docking Coordinates
- **HUD Controller Pill:** Locked to `top-right` ($x = 1860\text{px}, y = 40\text{px}$), completely clearing the left-hand slide header zone.
- **Pagination Dot Rail:** Locked to `bottom-center` ($y = 1040\text{px}$), maintaining at least $48\text{px}$ clearance above slide footers.
- **Micro-Tooltips:** Every controller action button renders a floating tooltip with corresponding `<kbd>` shortcuts (`Space`, `ArrowRight`, `G`, `F`, `B`).

---

## 8. Acoustic Synchronization & Synthesizer Engine

The presentation system synthesizes acoustic wave pulses client-side via native WebAudio `AudioContext` with zero external audio assets:

| Event Name | Frequency ($f_0 \to f_1$) | Waveform | Duration | Master Gain | Cooldown | Semantic Purpose |
|:---|:---:|:---|:---:|:---:|:---:|:---|
| `slide-change` (next whoosh) | $240\text{ Hz} \to 480\text{ Hz}$ | Sine Chirp | $220\text{ms}$ | $0.35$ | $120\text{ms}$ | Forward slide transition |
| `slide-change` (prev whoosh) | $360\text{ Hz} \to 180\text{ Hz}$ | Sine Chirp | $220\text{ms}$ | $0.35$ | $120\text{ms}$ | Backward slide transition |
| `step-click` | $750\text{ Hz} \to 320\text{ Hz}$ | Triangle | $60\text{ms}$ | Step Vol ($0.30$) | $80\text{ms}$ | Intra-slide step advance |
| `step-reveal` | $440\text{ Hz} \to 660\text{ Hz}$ | Sine Chime | $120\text{ms}$ | Step Vol ($0.28$) | $80\text{ms}$ | Detail pane reveal |
| `keystroke-tap` | $1100\text{ Hz} \to 350\text{ Hz}$ | Triangle | $35\text{ms}$ | $0.30$ | $45\text{ms}$ | Tactile HUD navigation |
| `theme-switch` | $880\text{ Hz} \to 880\text{ Hz}$ | Pure Sine Harmonic | $160\text{ms}$ | $0.35$ | $100\text{ms}$ | Theme palette changed |
| `pop` | $580\text{ Hz} \to 840\text{ Hz}$ | High Sine Blip | $50\text{ms}$ | $0.25$ | $60\text{ms}$ | Badge hover / toggle |

### 8.1 Audio Safety & Narration Ducking
- **Safety Ceiling:** Output gain is hard-clamped ($\le 0.40$ master, step clicks $\le 0.30$) to prevent harsh distortion.
- **Narrator Voice Ducking:** When microphone narration is detected (`isAudioActive = true`), sound effects attenuate automatically by $-14\text{ dB}$ ($0.20\times$ ducking factor).

---

## 9. Elimination of Hardcoded Dark Classes in Favor of Semantic Tokens

### 9.1 Systematic Semantic Token Mapping

| Hardcoded Utility (FORBIDDEN) | Semantic Design Token | Tailwind Arbitrary Value Equivalent | Semantic Function |
|:---|:---|:---|:---|
| `bg-slate-900`, `bg-zinc-950` | `var(--pres-bg-card)` | `bg-[var(--pres-bg-card)]` | Structural Bento container background |
| `bg-slate-950`, `bg-black` | `var(--pres-canvas-bg)` | `bg-[var(--pres-canvas-bg)]` | Virtual canvas root background |
| `border-slate-800`, `border-zinc-800` | `var(--pres-border)` | `border-[var(--pres-border)]` | Hairline panel and card borders |
| `text-slate-100`, `text-white` | `var(--pres-text)` | `text-[var(--pres-text)]` | Primary headline and metric text |
| `text-slate-400`, `text-zinc-400` | `var(--pres-text-muted)` | `text-[var(--pres-text-muted)]` | Secondary body text and labels |
| `text-indigo-400`, `text-blue-400` | `var(--pres-accent-text)` | `text-[var(--pres-accent-text)]` | High-contrast accent typography (>5.5:1) |
| `border-indigo-500/50` | `hsl(var(--pres-accent) / 0.50)` | `border-[hsl(var(--pres-accent)/0.50)]` | Active step and focus highlights |

### 9.2 Automated Verification Regex Gate
The verification test suite scans all slide components under `src/components/slides/` using strict regex patterns to prevent regressions:

```bash
# Prohibited hardcoded dark class regex pattern:
grep -E "(bg-slate-900|bg-zinc-950|border-slate-800|border-zinc-800|text-slate-100)" src/components/slides/
# Expectation: 0 matches
```
