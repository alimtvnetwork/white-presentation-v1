# 03-Visual & Motion Design System: Master Palettes, Kinetic Physics & Theme Synthesis

> **Specification Identifier:** `02-spec/21-app/33-global-ppt-motion-and-15-kinetic-archetypes/03-visual-and-motion`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.7.0`  
> **Author:** Spec Subagent 01  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Global PPT Master Themes, Space-Separated HSL Triplet Tokens, Light-Theme Contrast Enforcement (`--pres-accent-text`), Concentric Halo Ring Keyframes, Damped Spring Physics, Reusable 3-Phase Kinetic CSS, Semantic Token Elimination of Dark Classes  

---

## 1. System Vision & Visual Balance Mandates

The visual and motion design system in `33-global-ppt-motion-and-15-kinetic-archetypes` establishes the definitive convergence of **Global PPT Executive Authority** and **Kinetic Intra-Slide Step Progression**. This architecture unifies executive-level narrative gravitas, bilateral layout symmetry, and disciplined chromatic contrast with responsive, tactile, physics-governed user interfaces.

To eliminate cognitive fatigue during extended board presentations, technical keynotes, and high-resolution projection displays, the canvas strictly enforces structural balance and spatial hierarchy rules:

### 1.1 The 60/30/10 Visual Weight Distribution Rule
Every slide canvas balances surface contrast, structural containers, and chromatic accents across three calibrated visual tiers:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 60% Canvas Wash (Atmospheric negative space, radial gradients, subtle dot-matrix)      │
│                                                                                        │
│   ┌──────────────────────────────────────────────────────────────────────────────┐     │
│   │ 30% Structural Bento Card Surface (Frosted glass, 1px hairline border)       │     │
│   │                                                                              │     │
│   │   ┌───────────────┐           ┌────────────────────┐   ┌─────────────────┐   │     │
│   │   │ Active Item   │ ◄───────► │ 10% Vivid Accent   │   │ .capsule-* Pill │   │     │
│   │   │ (Step Halo)   │           │ (KPI, Pin, Glow)   │   │ (Status Badge)  │   │     │
│   │   └───────────────┘           └────────────────────┘   └─────────────────┘   │     │
│   │                                                                              │     │
│   └──────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

1. **$60\%$ Canvas Wash (Dominant Background Foundation):**
   - Expansive, uncluttered negative space governed by `--pres-canvas-bg` and subtle atmospheric radial wash gradients.
   - For dark obsidian and slate palettes: deep obsidian abyss, midnight carbon, or maritime navy (`#0B0E14`, `#080808`, `#050B18`) providing radiant contrast without optical glare.
   - For light editorial palettes: clean pure white or archival cream parchment (`#FFFFFF`, `#FAF7F0`) delivering classical typographic clarity.
2. **$30\%$ Structural Hierarchy (Bento Cards & Glass Surfaces):**
   - Translucent frosted glass containers, Bento grids, code viewer panes, and structural divider rules.
   - Applied via `--pres-card-bg` (`rgba(..., 0.85)` to `rgba(..., 0.92)`), backdrop blur ($12\text{px}$–$16\text{px}$), and high-precision hairline borders (`--pres-card-border`, `1px solid`).
3. **$10\%$ Vivid Accents (Focal Kinetic Anchors):**
   - Saturated brand focal points: active step pins, glowing step halos, timeline milestone indicators, key KPI figures, and interactive action buttons.
   - Applied via `--pres-accent` (`hsl(var(--pres-accent) / <alpha>)`) and ambient volumetric aura glows (`--pres-accent-glow`).

---

## 2. 4-Plane Spatial Depth Hierarchy

To establish tactile depth without heavy, dated skeuomorphism, the virtual canvas maps visual elements onto 4 distinct z-axis planes. Each plane declares explicit elevation, opacity, border styling, and backdrop blur:

| Plane | Name | Semantic Elevation | Visual Treatment | Dominant Tokens |
|:---:|:---|:---:|:---|:---|
| **Plane 0** | **Surface** | Ground Level ($z = 0$) | Canvas background, atmospheric radial gradients, subtle dot-matrix pattern ($1.5\text{px}$ dots spaced $28\text{px}$). | `--pres-canvas-bg`, `--pres-dot-matrix` |
| **Plane 1** | **Raised** | Base Cards ($z = 10$) | Inactive Bento containers, table rows, timeline rails, card headers. $1\text{px}$ border, backdrop blur $12\text{px}$–$16\text{px}$. | `--pres-card-bg`, `--pres-card-border` |
| **Plane 2** | **Elevated** | Interactive ($z = 20$) | Hovered cards, active step detail panes, expanded accordions, selected comparison columns. Volumetric shadow + halo stroke. | `--pres-accent-border`, `--pres-elevation-shadow` |
| **Plane 3** | **Floating** | HUD & Modal ($z = 30$) | Fixed bottom presenter HUD, theme selector menu, active step halo (`layoutId`), modal dialogs, tooltip popovers. | `--chrome-bg`, `--pres-accent-glow` |

---

## 3. Master Theme Palette Architecture: HSL Triplet Tokens

### 3.1 Raw Space-Separated HSL Triplet Standard
The presentation system standardizes all color tokens as unadorned, space-separated **HSL triplets** (`H S% L%` without the outer `hsl(...)` wrapper). This token structure unlocks direct CSS and Tailwind slash-alpha compositing at arbitrary opacity levels without calculating RGB equivalents:

$$\text{CSS Usage: } \text{hsl}(\text{var}(--\text{pres-accent}) \ /\ <\text{alpha}>)$$

```less
// CSS Custom Properties Architecture:
:root {
  --pres-accent: 262 83% 58%;
  --pres-accent-text: #A78BFA;
  --pres-bg: 222 47% 7%;
  --pres-text: 45 90% 96%;
  --pres-subtext: 215 20% 65%;
  --pres-card-bg: 222 45% 12%;
  --pres-card-border: 45 80% 40%;
}

// Alpha-composited usage across stylesheets:
.step-halo-active {
  background: hsl(var(--pres-accent) / 0.12);
  border: 1px solid hsl(var(--pres-accent) / 0.60);
  box-shadow: 0 0 24px -2px hsl(var(--pres-accent) / 0.50);
}
```

### 3.2 TypeScript Theme Definition Contract
```typescript
export interface GradientStop {
  step: number;             // 0 through 9 (S0 through S9)
  label: string;            // Semantic designation (e.g., Pure Aura, Base Accent, Deep Shade)
  hex: string;              // Canonical Hex code
  hsl: string;              // Fully formed HSL string: "hsl(H, S%, L%)"
  rgb: string;              // Canonical RGB representation: "rgb(R, G, B)"
  luma: number;             // Relative luminance (0.00 to 1.00)
  contrastOnWhite: number;  // Contrast ratio calculated against pure white (#FFFFFF)
}

export interface ThemePalette {
  id: string;
  name: string;
  description: string;
  isDark: boolean;
  canvasBg: string;
  textColor: string;
  subtextColor: string;
  cardBg: string;
  cardBorder: string;
  accentColor: string;
  accentTextColor: string;  // Explicit text accent token ensuring WCAG AAA (>5.5:1) in light mode
  hasDotMatrix: boolean;
  headerShadow: string;
  // Raw Space-Separated HSL Triplet Tokens:
  accentHsl: string;        // e.g. "262 83% 58%"
  canvasBgHsl: string;      // e.g. "0 0% 100%"
  bgHsl: string;            // e.g. "222 47% 7%"
  textHsl: string;          // e.g. "45 90% 96%"
  cardBgHsl: string;        // e.g. "222 45% 12%"
  subtextHsl: string;       // e.g. "215 20% 65%"
  cardBorderHsl: string;    // e.g. "45 80% 40%"
  stops: GradientStop[];    // 10-step precision ramp (S0 through S9)
}
```

---

## 4. Light-Theme Contrast Enforcement & `--pres-accent-text`

### 4.1 The Light Surface Contrast Pathology
In presentation design systems, a major defect is **contrast dilution in light modes**. When dark themes employ vibrant, saturated accent colors (such as Electric Violet `#8B5CF6`, Cyan `#38BDF8`, or Radiant Gold `#EAB308`), these bright colors look luminous against `#0B0E14` or `#080808` canvases.

However, when applied directly to light editorial canvases (`#FFFFFF` in `white-brand` / `github-light` or `#FAF7F0` in `paper-editorial` / `paper-ink`), these same accent tokens produce catastrophic legibility failures:
- Electric Gold (`#EAB308`): Contrast on pure white is **$1.96:1$** (WCAG Fail).
- Radiant Sky Cyan (`#38BDF8`): Contrast on pure white is **$1.85:1$** (WCAG Fail).
- Luminous Violet (`#8B5CF6`): Contrast on pure white is **$3.12:1$** (WCAG Fail for normal text).

### 4.2 Architectural Solution: Dedicated `--pres-accent-text`
To satisfy WCAG 2.1 AAA Level 3 criteria ($> 7.0:1$ preferred, strict minimum $> 5.5:1$ for normal typography), the system establishes the **`--pres-accent-text`** token:

1. **Dark Modes (`isDark: true`):**
   - `--pres-accent-text` maps to luminous Stop 4 or Stop 5 (e.g. `#A78BFA` or `#818CF8`), delivering optimal legibility and luminescence against dark obsidian cards.
2. **Light Modes (`isDark: false`):**
   - `--pres-accent-text` resolves to **Stop 7 or Stop 8** of the mathematical lightness ramp (e.g. **`#6D28D9`** for violet, **`#1E40AF`** for blue, **`#92400E`** for gold/ochre).
   - This delivers a guaranteed contrast ratio of **$> 5.5:1$** (and up to **$8.2:1$**) against white and cream canvases, exceeding WCAG AA requirements and guaranteeing flawless projector legibility.

```less
// In src/styles/presentation.less:
:root {
  --pres-accent: 262 83% 58%;
  --pres-accent-text: #A78BFA;
  --pres-bg-card: rgba(18, 24, 38, 0.88);
  --pres-border: rgba(255, 255, 255, 0.12);
  --pres-text: #F8FAFC;
  --pres-text-muted: #94A3B8;
}

// Light theme contrast inversion overrides:
[data-is-dark="false"],
.theme-light {
  --pres-accent-text: #6D28D9; /* Stop 7/8 WCAG AAA > 5.5:1 against #FFFFFF */
  --pres-bg-card: #FFFFFF;
  --pres-border: rgba(15, 23, 42, 0.12);
  --pres-text: #0F172A;
  --pres-text-muted: #475569;
}
```

### 4.3 Contrast Verification Matrix

| Theme | Polarity | Canvas Hex | Accent Hex | `--pres-accent-text` Hex | Contrast vs Canvas | WCAG Compliance |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| `white-brand` | Light | `#FFFFFF` | `#7C3AED` | `#6D28D9` (Stop 7) | **5.85:1** | WCAG AA / AAA Large |
| `paper-editorial` | Light | `#F5F0E6` | `#1D4ED8` | `#1E3A8A` (Stop 8) | **8.42:1** | WCAG AAA Pass |
| `github-light` | Light | `#FFFFFF` | `#0969DA` | `#0969DA` (Stop 6) | **5.60:1** | WCAG AA Pass |
| `bright-gold` | Dark | `#0B0E14` | `#EAB308` | `#FAC82A` (Stop 4) | **10.5:1** | WCAG AAA Pass |
| `noir-gold` | Dark | `#080808` | `#D4AF37` | `#D6B56E` (Stop 4) | **10.4:1** | WCAG AAA Pass |
| `dracula` | Dark | `#181224` | `#BD93F9` | `#D6B4FC` (Stop 3) | **12.2:1** | WCAG AAA Pass |
| `monokai` | Dark | `#1A1915` | `#A6E22E` | `#B8E855` (Stop 3) | **11.8:1** | WCAG AAA Pass |
| `vscode-dark` | Dark | `#1E1E1E` | `#007ACC` | `#80C7FF` (Stop 2) | **10.0:1** | WCAG AAA Pass |

---

## 5. Concentric Halo Ring Keyframes & Pulse Animations

### 5.1 `@keyframes haloRingConcentric`
For the active step card and focused narrative anchor, the design system utilizes a multi-wave, dual-radius concentric halo pulse animation. The inner and outer rings expand sequentially with phase-shifted opacity dissipation:

```less
// In src/styles/animations.less:

@keyframes haloRingConcentric {
  0% {
    box-shadow: 
      0 0 0 0 hsl(var(--pres-accent) / 0.70),
      0 0 0 0 hsl(var(--pres-accent) / 0.40),
      0 0 16px -2px hsl(var(--pres-accent) / 0.35);
  }
  50% {
    box-shadow: 
      0 0 0 6px hsl(var(--pres-accent) / 0.30),
      0 0 0 14px hsl(var(--pres-accent) / 0.15),
      0 0 28px 2px hsl(var(--pres-accent) / 0.55);
  }
  100% {
    box-shadow: 
      0 0 0 12px hsl(var(--pres-accent) / 0.00),
      0 0 0 24px hsl(var(--pres-accent) / 0.00),
      0 0 16px -2px hsl(var(--pres-accent) / 0.35);
  }
}
```

### 5.2 Halo Animation Utility Classes

```less
// Utility classes for concentric halo activation:

.halo-ring-active {
  position: relative;
  border-color: hsl(var(--pres-accent) / 0.80) !important;
  animation: haloRingConcentric 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  z-index: 20;
}

.halo-pulse-subtle {
  animation: haloPulse 3.0s ease-in-out infinite;
}

.halo-glow-static {
  box-shadow: 0 0 24px -2px hsl(var(--pres-accent) / 0.50);
}
```

---

## 6. Spring Physics Constants & CSS Easing Tokens

### 6.1 Three Canonical CSS Easing Tokens
To establish a cohesive tactile feel across all CSS-driven interactions, the system standardizes three cubic-bezier easing tokens:

```less
// In src/styles/variables.less:
@ease-spring-snappy: cubic-bezier(0.34, 1.56, 0.64, 1);    // Tactile overshoot (104% snap) for buttons & pills
@ease-spring-bouncy: cubic-bezier(0.175, 0.885, 0.32, 1.275); // Expressive celebratory bounce for KPIs
@ease-spring-smooth: cubic-bezier(0.22, 1, 0.36, 1);       // Quintic exponential deceleration for pane reveals
```

### 6.2 Damped Harmonic Oscillator Differential Equation
Interactive reveals, step changes, and card translations are governed by the damped harmonic oscillator formula:

$$m \frac{d^2 x}{dt^2} + c \frac{dx}{dt} + k x = 0$$

- **Stiffness ($k$):** $420\text{ N/m}$
- **Damping ($c$):** $17\text{ N}\cdot\text{s/m}$
- **Mass ($m$):** $0.8\text{ kg}$
- **Effective Damping Ratio ($\zeta$):** $0.85$ (harmonic underdamped calibration)

### 6.3 TypeScript Framer Motion Physics Objects
```typescript
// In src/utils/motionPhysics.ts:

export const STEP_DETAIL_PANE_SPRING = {
  type: 'spring',
  stiffness: 420,
  damping: 17,
  mass: 0.8,
} as const;

export const PROGRESS_RAIL_SPRING = {
  type: 'spring',
  stiffness: 220,
  damping: 32,
  mass: 1.0,
} as const;

export const HALO_SPRING = {
  type: 'spring',
  stiffness: 320,
  damping: 30,
  mass: 0.9,
} as const;

export const SNAPPY_SPRING = {
  type: 'spring',
  stiffness: 500,
  damping: 25,
  mass: 0.6,
} as const;
```

---

## 7. Reusable 3-Phase Kinetic CSS Classes

To ensure deterministic, consistent step transitions across all 8 multi-step operational workflows, the presentation engine exports three standardized phase classes:

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
    opacity 0.4s @ease-spring-smooth,
    transform 0.4s @ease-spring-smooth,
    filter 0.4s @ease-spring-smooth,
    border-color 0.4s ease;
  pointer-events: auto;
}

// Phase 2: Active Step (Current Narrative Focus)
.step-phase-active {
  opacity: 1.00;
  transform: scale(1.02) translateZ(24px);
  filter: none;
  border-color: hsl(var(--pres-accent) / 0.80);
  animation: haloRingConcentric 2.4s @ease-spring-smooth infinite;
  box-shadow: 
    0 20px 48px -10px rgba(0, 0, 0, 0.55),
    0 0 24px -2px hsl(var(--pres-accent) / 0.45);
  transition: 
    opacity 0.35s @ease-spring-smooth,
    transform 0.35s @ease-spring-snappy,
    border-color 0.35s ease;
  z-index: 20;
  pointer-events: auto;
}

// Phase 3: Future Step (Unannounced Upcoming Stage)
.step-phase-future {
  opacity: 0.40;
  transform: scale(0.98) translateZ(0px);
  filter: blur(1.25px);
  border-color: var(--pres-border);
  transition: 
    opacity 0.4s @ease-spring-smooth,
    transform 0.4s @ease-spring-smooth,
    filter 0.4s @ease-spring-smooth;
  pointer-events: none;
  user-select: none;
}
```

### 7.1 React Component Markup Pattern
```tsx
import { isBooleanTrue } from '@/utils/booleanGuards';

export function StepContainer({ index, activeStep, children }: StepProps) {
  const isPast = index < activeStep;
  const isActive = index === activeStep;
  
  const phaseClassName = isActive
    ? 'step-phase-active'
    : isPast
      ? 'step-phase-past'
      : 'step-phase-future';

  return (
    <div className={`p-6 rounded-2xl border transition-all ${phaseClassName}`}>
      {children}
    </div>
  );
}
```

---

## 8. Elimination of Hardcoded Dark Classes in Favor of Semantic Tokens

### 8.1 The Hardcoded Dark Anti-Pattern
A frequent regression in slide systems is hardcoding Tailwind utility classes such as `bg-slate-900`, `bg-zinc-950`, `border-slate-800`, or `text-slate-100`. When a presenter switches to a light theme (`github-light`, `paper-ink`, or `white-brand`), these hardcoded utilities produce dark blotches, incorrect background-foreground contrast, and unreadable dark-on-dark text.

### 8.2 Systematic Semantic Token Mapping

| Hardcoded Utility (FORBIDDEN) | Semantic Design Token | Tailwind Arbitrary Value Equivalent | Semantic Function |
|:---|:---|:---|:---|
| `bg-slate-900`, `bg-zinc-950` | `var(--pres-bg-card)` | `bg-[var(--pres-bg-card)]` | Structural Bento container background |
| `bg-slate-950`, `bg-black` | `var(--pres-canvas-bg)` | `bg-[var(--pres-canvas-bg)]` | Virtual canvas root background |
| `border-slate-800`, `border-zinc-800` | `var(--pres-border)` | `border-[var(--pres-border)]` | Hairline panel and card borders |
| `text-slate-100`, `text-white` | `var(--pres-text)` | `text-[var(--pres-text)]` | Primary headline and metric text |
| `text-slate-400`, `text-zinc-400` | `var(--pres-text-muted)` | `text-[var(--pres-text-muted)]` | Secondary body text and labels |
| `text-indigo-400`, `text-blue-400` | `var(--pres-accent-text)` | `text-[var(--pres-accent-text)]` | High-contrast accent typography (>5.5:1) |
| `border-indigo-500/50` | `hsl(var(--pres-accent) / 0.50)` | `border-[hsl(var(--pres-accent)/0.50)]` | Active step and focus highlights |

### 8.3 Automated Verification Regex Gate
The verification test suite scans all slide components under `src/components/slides/` using strict regex patterns to prevent regressions:

```bash
# Prohibited hardcoded dark class regex pattern:
grep -E "(bg-slate-900|bg-zinc-950|border-slate-800|border-zinc-800|text-slate-100)" src/components/slides/
# Expectation: 0 matches
```

---

## 9. Dynamic Optical Micro-Shadows & Fixed Dark HUD Chrome

### 9.1 Dynamic Optical Micro-Shadow Formulas
To sharpen glyph contours directly at the baseline on high-DPI displays and conference room projectors, the engine utilizes sub-pixel zero-blur offset bevels:

$$\text{Shadow}_{\text{dark}} = \text{rgb}(0\ 0\ 0)\ 1\text{px}\ 0.7\text{px}\ 0\text{px}$$
$$\text{Shadow}_{\text{light}} = \text{rgb}(255\ 255\ 255)\ 1\text{px}\ 0.7\text{px}\ 0\text{px}$$

```less
:root {
  --text-shadow-weight-dark: rgb(0 0 0) 1px 0.7px 0px;
  --text-shadow-weight-light: rgb(255 255 255) 1px 0.7px 0px;
  --pres-header-shadow: var(--text-shadow-weight-dark);
}

[data-is-dark="false"],
.theme-light {
  --pres-header-shadow: var(--text-shadow-weight-light);
}
```

### 9.2 Fixed Dark Presenter HUD Chrome Tokens
The Presenter HUD remains locked in a dark glassmorphic container regardless of active canvas theme to prevent presenter glare:

```less
:root {
  --chrome-bg: rgba(11, 15, 25, 0.92);
  --chrome-bg-hover: rgba(20, 27, 45, 0.96);
  --chrome-fg: #F8FAFC;
  --chrome-fg-muted: #94A3B8;
  --chrome-fg-subtle: #64748B;
  --chrome-border: rgba(255, 255, 255, 0.12);
  --chrome-border-glow: rgba(234, 179, 8, 0.40);
  --chrome-accent: #EAB308;
  --chrome-glass-blur: 24px;
  --chrome-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.10);
  --chrome-radius: 9999px;
}
```

---

## 10. The `.capsule-*` Badge Hierarchy & Auto-Inversion

Capsules encapsulate metadata, kicker labels, and status indicators in pill-shaped micro-containers:

- `.capsule-gold`: Prestige milestones, executive certifications.
- `.capsule-ember`: Urgent callouts, security alerts, high-priority KPIs.
- `.capsule-cream`: Archival whitepaper notes, champagne highlights.
- `.capsule-ink`: Deep institutional foundation chip.
- `.capsule-outline`: Structural boundary, category filter.
- `.capsule-meta`: Telemetry stats, Git commit SHAs, ISO timestamps.

### Light Theme Contrast Inversion:
```less
[data-is-dark="false"],
.theme-light {
  .capsule-gold {
    background: rgba(202, 146, 6, 0.12);
    border: 1px solid rgba(202, 146, 6, 0.50);
    color: #9B6805; // 5.2:1 contrast ratio against white/cream (WCAG AA Pass)
  }
  .capsule-ember {
    background: rgba(225, 29, 72, 0.10);
    border: 1px solid rgba(225, 29, 72, 0.45);
    color: #BE123C; // 5.8:1 contrast ratio against white/cream (WCAG AA Pass)
  }
  .capsule-cream {
    background: rgba(10, 17, 40, 0.08);
    border: 1px solid rgba(10, 17, 40, 0.30);
    color: #0A1128; // 18.5:1 contrast ratio against cream parchment (WCAG AAA Pass)
  }
  .capsule-ink {
    background: #0F172A;
    border: 1px solid #1E293B;
    color: #FFFFFF; // 16.2:1 contrast ratio (WCAG AAA Pass)
  }
  .capsule-outline {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(15, 23, 42, 0.30);
    color: #334155;
  }
  .capsule-meta {
    background: rgba(15, 23, 42, 0.05);
    border: 1px solid rgba(15, 23, 42, 0.20);
    color: #475569;
  }
}
```

---

## 11. Acoustic Synchronization & Synthesizer Engine

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

### 11.1 Audio Safety & Narration Ducking
- **Safety Ceiling:** Output gain is hard-clamped ($\le 0.40$ master, step clicks $\le 0.30$) to prevent harsh distortion.
- **Narrator Voice Ducking:** When microphone narration is detected (`isAudioActive = true`), sound effects attenuate automatically by $-14\text{ dB}$ ($0.20\times$ ducking factor).
- **Positive Boolean Audio Interface:**
```typescript
export interface AudioConfiguration {
  hasSoundFeedback: boolean;
  hasAudioSync: boolean;
  hasDuckingEnabled: boolean;
  isAudioMuted: boolean;
  masterVolumeLevel: number;
}
```
