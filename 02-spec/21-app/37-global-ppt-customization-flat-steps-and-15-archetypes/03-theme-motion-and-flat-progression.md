# 03-Theme Motion & Flat Progression: Kinetic Physics, Spring Dynamics & Global PPT Customization

> **Specification Identifier:** `02-spec/21-app/37-global-ppt-customization-flat-steps-and-15-archetypes/03-theme-motion-and-flat-progression`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.9.0`  
> **Author:** Spec Author 01  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-03  
> **Domain:** Space-Separated HSL Tokens, 13 Master Themes, Slide-Level Theme Overrides, 4 Inter-Slide Transition Modes, 10-Step Gradient Ramps, 3-Phase Kinetic Step Progression, Harmonic Spring Physics, Tactile Hover Preview Mechanics, Navigation Control Bounds, Hardware-Accelerated CSS Keyframes, Subpixel Ink-Stamp Micro-Shadows  

---

## 1. System Vision & Architectural Motion Philosophy

The motion design and customization system for `37-global-ppt-customization-flat-steps-and-15-archetypes` establishes a tactile, physical presentation canvas that unifies **Global PPT Corporate Authority** with **Declarative Customization & Kinetic Step Progression**.

Traditional enterprise slide decks disorient audiences through abrupt, full-canvas slide transitions that reset visual context and force executive viewers to re-orient themselves. In contrast, this motion architecture treats every slide as a living, physical workspace governed by six mathematical principles:

1. **Deterministic Pacing via 3-Phase Progression:** Intra-slide steps advance narrative focal points smoothly across three discrete visual phases (`completed`, `active`, `future`), maintaining full context without visual competition.
2. **Harmonic Spring Physics:** All transitions, expansions, and reveals are calculated via underdamped harmonic oscillator differential equations ($k=420\text{ N/m}$, $c=17\text{ N}\cdot\text{s/m}$, $m=0.8\text{ kg}$, $\zeta=0.85$) rather than arbitrary linear or cubic CSS curves.
3. **Tactile Hover Previews:** Presenters and reviewers can freely inspect upcoming or past steps via non-destructive hover previews (`effectiveStep = hoveredStep ?? activeStep`) without desynchronizing the persistent presentation state.
4. **4 Selectable Inter-Slide Transitions:** Inter-slide transitions offer presenter-selectable modes (`slide` $\pm 80\text{px}$ horizontal displacement, `fade` crossfade, `zoom` scale shift, `rise` $\pm 60\text{px}$ vertical rise) governed by cubic-bezier physics.
5. **Slide-Level Theme Overrides (`slide.themeId`):** Individual slides can declare their own localized theme identity, enabling intentional mixed light/dark decks without global state clobbering.
6. **Hardware-Accelerated CSS Keyframes & Living Canvas Atmosphere:** GPU-composited animations (@keyframes `haloExpandPulse`, `kineticPhaseReveal`, `gridCoordinatePulse`, `spotlightSweep`, `pulseAccent`) provide ambient depth without degrading 60fps frame rates.

```
+---------------------------------------------------------------------------------------------------+
|                        KINETIC MOTION & PROGRESSION ARCHITECTURE                                  |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [PERSISTED STATE]                  [EPHEMERAL PREVIEW]               [CANVAS ATMOSPHERE]         |
|  useDeckStore.activeStep            hoveredStep (null | number)        @keyframes spotlightSweep  |
|  Controlled via Space/Arrows        Controlled via MouseEnter/Leave    @keyframes haloExpandPulse |
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
|  - Phase 2: Active (1.00 Opacity, scale-102, Halo Ring)  - Key Metric Badge (clamp 2.5rem-4.5rem) |
|  - Phase 3: Future (0.40 Opacity, 1.25px Optical Blur)   - STEP_DETAIL_PANE_SPRING (k=420, c=17)  |
|  - PROGRESS_RAIL_SPRING (k=220, c=32)                    - Single-Item Cognitive Focus            |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Space-Separated HSL Triplet Tokens & 13 Master Themes

### 2.1 Space-Separated HSL Triplet Architecture

The presentation engine standardizes all color tokens as unadorned, space-separated **HSL triplets** (`H S% L%` without the outer `hsl(...)` wrapper). This token structure unlocks direct CSS and Tailwind slash-alpha compositing at arbitrary opacity levels without calculating RGB equivalents:

$$\text{CSS Usage: } \text{hsl}(\text{var}(--\text{pres-accent}) \ /\ <\text{alpha}>)$$

```less
// CSS Custom Properties Architecture
:root {
  --pres-accent: 262 83% 58%;
  --pres-accent-text: #A78BFA;
  --pres-bg: 222 47% 7%;
  --pres-text: 45 90% 96%;
  --pres-subtext: 215 20% 65%;
  --pres-card-bg: 222 45% 12%;
  --pres-card-border: 45 80% 40%;
}

// Alpha-composited usage across stylesheets
.step-halo-active {
  background: hsl(var(--pres-accent) / 0.12);
  border: 1px solid hsl(var(--pres-accent) / 0.60);
  box-shadow: 0 0 24px -2px hsl(var(--pres-accent) / 0.50);
}
```

### 2.2 The 13 Canonical Corporate Master Themes

The engine provides 13 boardroom-calibrated master themes spanning pristine editorial light modes, archival research papers, deep obsidian voids, and high-contrast terminal themes:

| # | Theme Identifier | Name | Canvas Bg HSL | Accent HSL | Mode | Corporate Persona & Boardroom Intent |
|:---:|:---|:---|:---:|:---:|:---:|:---|
| **01** | `white-brand` | Pure White Editorial | `0 0% 100%` | `262 83% 58%` | Light | Crisp white paper, royal violet brand authority, high print fidelity. |
| **02** | `paper-editorial` | Archival Cream | `40 33% 93%` | `224 76% 48%` | Light | Classical warm parchment, navy ink typography, institutional research. |
| **03** | `true-dark` | Obsidian Abyss | `222 78% 3%` | `239 84% 67%` | Dark | Ultra-deep carbon obsidian, luminescent indigo, mission-critical keynotes. |
| **04** | `emerald-growth` | Forest Capital | `168 84% 9%` | `160 84% 39%` | Dark | Deep botanical emerald, vivid mint highlights, ESG & sustainability summits. |
| **05** | `wp-exam-purple` | Sovereign Violet | `255 70% 9%` | `271 91% 65%` | Dark | Deep cosmic purple, sovereign neon violet, premium product unveilings. |
| **06** | `midnight-luxe` | Executive Slate | `214 60% 11%` | `201 100% 43%` | Dark | Deep maritime navy slate, cyan accent beams, enterprise IT infrastructure. |
| **07** | `sunset-horizon` | Warm Ember | `0 41% 7%` | `25 95% 53%` | Dark | Smoked obsidian, radiant amber & coral embers, venture capital pitches. |
| **08** | `cyber-neon` | Matrix Terminal | `0 0% 2%` | `189 94% 43%` | Dark | Pure OLED black, radioactive cyan & lime accents, cybersecurity briefings. |
| **09** | `crimson-executive`| Ruby Authority | `344 50% 6%` | `347 77% 50%` | Dark | Deep wine obsidian, vivid ruby red, crisis management & board governance. |
| **10** | `nord-frost` | Arctic Precision | `218 45% 10%` | `199 89% 48%` | Dark | Glacial navy slate, arctic sky blue, developer platforms & cloud tools. |
| **11** | `bright-gold` | Prestige Executive Keynote | `222 47% 7%` | `45 96% 56%` | Dark | Obsidian midnight canvas, 24k luminous gold typography, executive boardrooms. |
| **12** | `noir-gold` | Minimalist Matte & Gold | `0 0% 3%` | `43 65% 52%` | Dark | Matte black carbon, brushed champagne gold rules, luxury boutique pitches. |
| **13** | `monokai` | Pro Code High-Contrast | `70 8% 15%` | `80 76% 53%` | Dark | Charcoal graphite canvas with vibrant lime & electric amber syntax. |

### 2.3 Legacy Alias Resolution
To maintain backward compatibility with legacy decks, 7 legacy theme IDs are deterministically aliased to their canonical counterparts:

```typescript
export const LEGACY_ALIASES: Record<string, string> = {
  'navy-blue': 'midnight-luxe',
  'vscode-dark': 'midnight-luxe',
  'dracula': 'wp-exam-purple',
  'github-light': 'white-brand',
  'paper-ink': 'paper-editorial',
  'macos-sonoma': 'nord-frost',
  'windows-11': 'cyber-neon',
};
```

Theme pickers (`ThemePopover.tsx`) filter out aliases and display only the 13 canonical corporate themes, preventing duplicate buttons in the UI.

---

## 3. Slide-Level Theme Overrides (`slide.themeId`)

Decks frequently require intentional variations in presentation mood (e.g. an architectural flow rendered in light paper mode within an otherwise dark obsidian presentation). The presentation engine resolves themes via a deterministic priority chain:

$$\text{Resolved Theme} = \text{activeSlide.themeId} \ \parallel \ \text{deck.themeId} \ \parallel \ \text{activeThemeId} \ \parallel \ \text{"white-brand"}$$

```typescript
// Resolution in src/components/canvas/PresentationCanvas.tsx
const effectiveThemeId = activeSlide?.themeId || activeThemeId;

useEffect(() => {
  if (effectiveThemeId) {
    applyTheme(effectiveThemeId);
  }
}, [effectiveThemeId]);
```

When navigating between slides, `PresentationCanvas.tsx` dynamically detects changes in `effectiveThemeId` and invokes `applyTheme()` with a smooth $0.4\text{s}$ CSS variable transition, allowing flawless per-slide customization.

---

## 4. 4 Selectable Inter-Slide Transition Modes

The engine provides 4 distinct slide transition modes, selectable via presentation controls and stored in `deckStore`:

| Transition Mode | Direction Multiplier | Motion / GPU Transform Curve | Strategic Context & Visual Persona |
|:---|:---:|:---|:---|
| **`slide`** (Default) | $x = \pm 80\text{px}$ | `enter: { x: direction * 80, opacity: 0 }, exit: { x: direction * -80, opacity: 0 }` | Canonical horizontal pagination. Conveys forward momentum and chronological sequence. |
| **`fade`** | N/A | `enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 }` | Classical crossfade. Ideal for solemn executive keynotes and boardroom financial summaries. |
| **`zoom`** | Scale shift | `enter: { scale: 0.94, opacity: 0 }, center: { scale: 1 }, exit: { scale: 1.04, opacity: 0 }` | Cinematic zoom. Conveys deep-dive macro-to-micro focus shifts into complex architectures. |
| **`rise`** | $y = \pm 60\text{px}$ | `enter: { y: direction * 60, opacity: 0 }, exit: { y: direction * -60, opacity: 0 }` | Vertical elevator reveal. Ideal for tiered hierarchical frameworks and talent pyramids. |

All transitions are governed by the canonical presentation easing curve and duration:

```typescript
export const PRESENTATION_EASE = [0.22, 1, 0.36, 1] as const;
export const TRANSITION_DURATION = 0.42; // seconds
```

---

## 5. Intra-Slide Kinetic Step Progression & Navigation Bounds

### 5.1 The 3-Phase Step Lifecycle

In multi-step operational workflows (Archetypes 46 through 53), intra-slide progression isolates executive attention on a single active item while keeping the surrounding workflow visible:

```
[Phase 1: Completed]  --> Opacity 0.75, scale-100, CheckCircle2 badge, neutral border
[Phase 2: Active]     --> Opacity 1.00, scale-102, z-20, luminescent halo ring, detail card reveal
[Phase 3: Future]     --> Opacity 0.40, scale-98, pointer-events-none, 1.25px optical blur
```

```typescript
export function getStepStyle(phase: StepPhase, accentHalo?: string): CSSProperties {
  if (phase === 'completed' || phase === 'past') {
    return {
      opacity: 0.75,
      transform: 'translateZ(8px) scale(1.00)',
      filter: 'none',
      boxShadow: 'none',
      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    };
  }
  if (phase === 'active') {
    return {
      opacity: 1.0,
      transform: 'translateZ(24px) scale(1.02)',
      filter: 'none',
      boxShadow: accentHalo || '0 0 24px -2px hsl(var(--pres-accent) / 0.50)',
      zIndex: 20,
      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    };
  }
  return {
    opacity: 0.4,
    transform: 'translateZ(8px) scale(0.98)',
    filter: 'blur(1.25px)',
    boxShadow: 'none',
    pointerEvents: 'none',
    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
  };
}
```

### 5.2 Ephemeral Hover Preview Mechanics
The presenter or audience member can hover over any process step to inspect its details without mutating the persistent step state:

```typescript
const effectiveStep = hoveredStep !== null ? hoveredStep : activeStep;
```

When the mouse leaves the rail (`onMouseLeave`), the view snaps effortlessly back to `activeStep` via harmonic springs.

### 5.3 Navigation Controls Boundary Repair

In previous builds, `NavigationControls.tsx` incorrectly disabled navigation buttons strictly based on `activeSlideIndex`:
- **Problem 1 (First Slide Multi-Step Lock):** If `activeSlideIndex === 0` but `activeStep > 0`, the Rewind button was disabled (`disabled={activeSlideIndex === 0}`), preventing rewinding intra-slide steps!
- **Problem 2 (Last Slide Multi-Step Lock):** If `activeSlideIndex === deck.slides.length - 1` but `activeStep < maxSteps - 1`, the Advance button was disabled, preventing advancing through the remaining steps of the final slide!

**The Canonical Fix:**
`NavigationControls.tsx` derives affirmative booleans factoring in both slide index and intra-slide step boundaries:

```typescript
const currentSlide = deck.slides[activeSlideIndex];
const maxSteps = computeSlideMaxSteps(currentSlide);

const canRewindStep = activeStep > 0;
const canAdvanceStep = activeStep < maxSteps - 1;

const isRewindDisabled = activeSlideIndex === 0 && !canRewindStep;
const isAdvanceDisabled = activeSlideIndex === deck.slides.length - 1 && !canAdvanceStep;
```

This ensures complete intra-slide and inter-slide keyboard and click traversals without premature button lockouts.

---

## 6. Harmonic Spring Physics Constants

Transitions between progression steps are calculated via underdamped harmonic oscillator equations:

$$m \frac{d^2x}{dt^2} + c \frac{dx}{dt} + k x = 0$$

Where:
- Mass $m = 0.8\text{ kg}$
- Spring stiffness $k = 420\text{ N/m}$
- Damping coefficient $c = 17\text{ N}\cdot\text{s/m}$
- Damping ratio $\zeta = \frac{c}{2\sqrt{km}} \approx 0.85$ (slightly underdamped, delivering an imperceptible, organic snap without cartoonish wobble).

```typescript
export const PROGRESS_RAIL_SPRING = {
  type: 'spring',
  stiffness: 220,
  damping: 32,
  mass: 1.0,
} as const;

export const STEP_DETAIL_PANE_SPRING = {
  type: 'spring',
  stiffness: 420,
  damping: 17,
  mass: 0.8,
} as const;

export const HALO_SPRING = {
  type: 'spring',
  stiffness: 320,
  damping: 30,
  mass: 0.9,
} as const;
```

---

## 7. Hardware-Accelerated CSS Keyframes & Visual Polish

To maintain 60fps frame rates across all 15 new slide archetypes, all continuous animations utilize hardware-accelerated CSS properties (`transform`, `opacity`) without triggering layout reflows:

```css
@keyframes haloExpandPulse {
  0% {
    box-shadow: 0 0 0 0 hsl(var(--pres-accent) / 0.50);
  }
  70% {
    box-shadow: 0 0 0 12px hsl(var(--pres-accent) / 0);
  }
  100% {
    box-shadow: 0 0 0 0 hsl(var(--pres-accent) / 0);
  }
}

@keyframes kineticPhaseReveal {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes gridCoordinatePulse {
  0%, 100% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.35;
  }
}

@keyframes spotlightSweep {
  0% {
    transform: translateX(-100%) rotate(25deg);
  }
  100% {
    transform: translateX(200%) rotate(25deg);
  }
}

@keyframes pulseAccent {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.04);
    opacity: 0.85;
  }
}
```

These keyframe animations provide living depth and visual magnetism while preserving sub-millisecond rendering budgets on standard client hardware.
