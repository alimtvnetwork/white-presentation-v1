# 01-Architecture Spec: Presentation Themes, Contrast Engine, Kinetic Transitions & 3-Phase Motion

> **Module:** `02-spec/21-app/26-presentation-themes-animations-and-15-slide`  
> **Status:** Canonical Architecture Specification  
> **Target Release:** `v2.2.0`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Reference Systems:** Global PPT Theme Runtime, 10-Step Luminance Engine, Tactile Motion Physics & Virtual 1920x1080 Stage

---

## 1. Executive Summary & Architectural Mandate

This specification codifies the presentation theme engine, contrast enforcement rules, kinetic motion physics, and spatial design system for the White Presentation platform. Designed for high-stakes executive keynotes, corporate boardrooms, technical deep dives, and research symposiums, the presentation runtime must deliver instant visual authority, zero cognitive fatigue, and deterministic cross-platform legibility.

### 1.1 Non-Negotiable Core Principles
1. **Global PPT 25-Theme Architecture:** 25 mathematically balanced themes arranged across 5 distinct aesthetic families (`CorporateClean`, `TechModern`, `EditorialArchival`, `ExecutivePrestige`, `BioGrowth`) backed by discrete 10-step perceptual gradient ramps ($S_0$ to $S_9$) and unadorned space-separated HSL triplet tokens.
2. **WCAG 2.1 AA Contrast & Zero Yellow-on-Light Enforcement:** Strict runtime verification ensuring headline and body text-to-canvas contrast ratio $C_R \ge 4.5:1$, with mandatory automatic contrast inversion (`--pres-accent-text`) eliminating low-contrast yellow, amber, or gold glyphs on light or white surfaces.
3. **Clean-Pass Variable Purge (`purgePresentationVariables`):** Deterministic style property teardown executing prior to every theme transition, guaranteeing zero CSS custom property bleed or stale variable retention across rapid theme switching.
4. **Natural Kinetic Physics & Hardware Acceleration:** Standardized spring dynamics (stiffness $420$, damping $28$, mass $1.0$) driving 6 transition archetypes (`kinetic-morph`, `slide`, `fade`, `zoom`, `rise`, `flip`) with mandatory GPU composite layer isolation (`will-change: transform, opacity; transform: translateZ(0)`).
5. **3-Phase Step Lifecycle Engine:** State-driven progression (`completed` at $0.75$ opacity, `active` at $1.00$ opacity with halo glow and $1.02$ scale, `future` at $0.40$ opacity with $1.25\text{px}$ blur) paired with direct click-to-jump affordance and synthesized acoustic feedback.
6. **60/30/10 Spatial Balance & 4-Plane Depth Hierarchy:** Harmonious spatial distribution spanning foundational surface plane ($z=0$), raised structural bento panels ($z=10$), elevated active focal points ($z=20$), and floating presenter HUD overlays ($z=50+$).
7. **Northern UI/UX Fluid Typography Floor:** Dynamic viewport scaling anchored to the $1920 \times 1080$ virtual canvas with a non-negotiable floor of $\ge 14\text{px}$ for all microcopy, badges, kickers, and metadata labels.
8. **Positive Boolean Semantics:** All state flags, options, and component props strictly implement positive booleans (`is*`, `has*`) to eliminate double negatives and inverted conditionals.

---

## 2. Global PPT 25-Theme Architecture & Family Taxonomy

The presentation runtime defines 25 canonical themes partitioned across 5 semantic families. Each theme provides a full 10-step luminance ramp ($S_0$ through $S_9$), dark/light mode designation, primary brand accent, surface fills, and border highlights.

```
Theme Family Taxonomy (25 Canonical Themes):
├── CorporateClean (5 Themes)     -> Trust, institutional finance, corporate authority
├── TechModern (5 Themes)         -> Developer tools, cybersecurity, high-contrast dark terminals
├── EditorialArchival (4 Themes)  -> Research monographs, typography-first publishing, warm parchment
├── ExecutivePrestige (5 Themes)  -> Boardroom governance, luxury boutique, 24k gold keynotes
└── BioGrowth (6 Themes)          -> ESG sustainability, life sciences, healthcare innovation
```

### 2.1 Theme Family Catalog

```typescript
export const ThemeFamilyType = {
  CorporateClean: 'CorporateClean',
  TechModern: 'TechModern',
  EditorialArchival: 'EditorialArchival',
  ExecutivePrestige: 'ExecutivePrestige',
  BioGrowth: 'BioGrowth',
} as const;

export type ThemeFamilyType = (typeof ThemeFamilyType)[keyof typeof ThemeFamilyType];
```

#### Family 1: CorporateClean (5 Themes)
| Theme ID | Display Name | Appearance | Canvas Hex | Brand Accent Hex | Semantic Description |
|:---|:---|:---:|:---:|:---:|:---|
| `corporate-clean` | Corporate Clean | Light | `#FFFFFF` | `#4F46E5` | Crisp white ground, sharp sovereign indigo, high-authority boardroom clarity. |
| `paper-editorial` | Archival Cream | Light | `#F5F0E6` | `#1D4ED8` | Classical warm parchment, navy ink typography, institutional research. |
| `sapphire-executive-light` | Sapphire Executive Light | Light | `#F4F7FC` | `#1447E6` | Sovereign finance, banking symposiums, defense briefings, crisp icy blue base. |
| `windows-11` | Windows 11 Fluent | Dark | `#202020` | `#60CDFF` | Fluent design system, vibrant cyan-blue accent, dark mica surfaces. |
| `github-light` | GitHub Light | Light | `#FFFFFF` | `#0969DA` | Daytime developer console, high-contrast royal blue accent on pure white. |

#### Family 2: TechModern (5 Themes)
| Theme ID | Display Name | Appearance | Canvas Hex | Brand Accent Hex | Semantic Description |
|:---|:---|:---:|:---:|:---:|:---|
| `true-dark` | Obsidian Abyss | Dark | `#020408` | `#6366F1` | Ultra-deep carbon obsidian, luminescent indigo, mission-critical keynotes. |
| `vscode-dark` | VS Code Dark+ | Dark | `#1E1E1E` | `#0A84FF` | Editor-classic interface, luminous azure accent on charcoal slate. |
| `monokai` | Pro Code High-Contrast | Dark | `#272822` | `#A6E22E` | Charcoal graphite canvas, vibrant lime & electric amber code syntax. |
| `dracula` | Dracula Vampire | Dark | `#282A36` | `#BD93F9` | Dark vampire purple canvas, neon pink ember, mint cream highlights. |
| `cyber-neon` | Matrix Terminal | Dark | `#050505` | `#06B6D4` | Pure OLED black, radioactive cyan & teal beams, cybersecurity briefings. |

#### Family 3: EditorialArchival (4 Themes)
| Theme ID | Display Name | Appearance | Canvas Hex | Brand Accent Hex | Semantic Description |
|:---|:---|:---:|:---:|:---:|:---|
| `white-brand` | Pure White Editorial | Light | `#FFFFFF` | `#7C3AED` | Crisp white paper, royal violet brand authority, high print fidelity. |
| `paper-ink` | Paper & Ink | Light | `#FAF6EC` | `#8A5A0E` | Warm archival parchment, espresso ink, print-grade editorial clarity. |
| `warm-editorial-terracotta` | Warm Editorial Terracotta | Light | `#FAF7F2` | `#B43410` | Architecture monographs, high-end design reviews, rich burnt terracotta. |
| `nord-frost` | Arctic Precision | Dark | `#0E1726` | `#0EA5E9` | Glacial navy slate, arctic sky blue, developer platforms & cloud tools. |

#### Family 4: ExecutivePrestige (5 Themes)
| Theme ID | Display Name | Appearance | Canvas Hex | Brand Accent Hex | Semantic Description |
|:---|:---|:---:|:---:|:---:|:---|
| `ivory-gold` | Ivory Prestige Gold | Light | `#FAF8F2` | `#B45309` | Warm parchment ground, charcoal text, prestige amber-gold keynote authority. |
| `bright-gold` | Prestige Executive Keynote | Dark | `#0B0E14` | `#EAB308` | Obsidian midnight canvas, 24k luminous gold typography, executive boardrooms. |
| `noir-gold` | Minimalist Matte & Gold | Dark | `#080808` | `#D4AF37` | Matte black carbon, brushed champagne gold rules, luxury boutique pitches. |
| `midnight-luxe` | Executive Slate | Dark | `#0B162C` | `#0091FF` | Deep maritime navy slate, cyan accent beams, enterprise IT infrastructure. |
| `crimson-executive` | Ruby Authority | Dark | `#17080C` | `#F43F5E` | Deep wine obsidian, vivid ruby red, crisis management & board governance. |

#### Family 5: BioGrowth (6 Themes)
| Theme ID | Display Name | Appearance | Canvas Hex | Brand Accent Hex | Semantic Description |
|:---|:---|:---:|:---:|:---:|:---|
| `clinical-emerald-light` | Clinical Emerald Light | Light | `#F5FEFA` | `#059669` | Crisp mint-ivory canvas, deep forest ink, clinical emerald accent. |
| `emerald-growth` | Forest Capital | Dark | `#04271F` | `#10B981` | Deep botanical emerald, vivid mint highlights, ESG & sustainability summits. |
| `sunset-horizon` | Warm Ember | Dark | `#190B0B` | `#F97316` | Smoked obsidian, radiant amber & coral embers, venture capital pitches. |
| `navy-blue` | Navy Blue | Dark | `#1A2840` | `#06B6D4` | Deep oceanic navy, high-contrast cyan & amber data visualization beams. |
| `macos-sonoma` | macOS Sonoma | Dark | `#1D1D1F` | `#0A84FF` | Apple graphite obsidian, system blue, sunset ember highlights. |
| `wp-exam-purple` | Sovereign Violet | Dark | `#0D0727` | `#A855F7` | Deep cosmic purple, sovereign neon violet, premium product unveilings. |

### 2.2 Discrete 10-Step Luminance Gradient Architecture ($S_0 \dots S_9$)

Every theme defines a deterministic 10-step luminance ramp:
- $S_0$: Canvas Background / Extreme Surface (Lightest in Light Themes, Darkest in Dark Themes)
- $S_1$: Ambient Stage Wash / Surface Tint
- $S_2$: Structural Card Surface Fill
- $S_3$: Subdued Card Border / Divider Hairline
- $S_4$: Secondary Accent / Inactive Highlight
- $S_5$: Primary Brand Accent Anchor
- $S_6$: Deep Accent / Active Border Halo
- $S_7$: Muted Secondary Text / Caption Glyph
- $S_8$: High-Contrast Sub-Surface Ink / Body Text
- $S_9$: Extreme Contrast Headline Ink / Obsidian Abyss

```typescript
export interface GradientStop {
  step: number;
  label: string;
  hex: string;
  hsl: string;
  rgb: string;
  luma: number;
  contrastOnWhite: number;
  hslRaw?: string; // Space-separated unadorned triplet: "262 83% 58%"
}
```

### 2.3 Unadorned Space-Separated HSL Triplet Tokens

To enable dynamic alpha blending without CSS function string wrapping, all color tokens are exposed in both hex and raw space-separated HSL triplet format:

```css
/* CSS Token Injection Standard */
:root {
  /* Hex Color Properties */
  --pres-bg: #FFFFFF;
  --pres-card-bg: rgba(248, 250, 252, 0.92);
  --pres-accent: #7C3AED;
  --pres-text: #0F172A;

  /* Space-Separated HSL Triplets for Dynamic Alpha Composition */
  --pres-bg-hsl: 0 0% 100%;
  --pres-canvas-bg-hsl: 0 0% 100%;
  --pres-card-bg-hsl: 210 40% 98%;
  --pres-card-border-hsl: 262 83% 58%;
  --pres-accent-hsl: 262 83% 58%;
  --pres-text-hsl: 222 47% 11%;
  --pres-subtext-hsl: 215 16% 47%;
}

/* Alpha Composition Usage in Slide Archetypes */
.bento-card-highlight {
  background: hsl(var(--pres-card-bg-hsl) / 0.92);
  border: 1px solid hsl(var(--pres-card-border-hsl) / 0.25);
  box-shadow: 0 12px 32px hsl(var(--pres-accent-hsl) / 0.12);
}
```

---

## 3. Contrast Engine & Zero Yellow-on-Light Inversion Standard

The White Presentation contrast engine computes real-time relative luminance and enforces strict WCAG 2.1 AA / AAA standards during theme initialization and dynamic runtime switching.

### 3.1 Relative Luminance & Contrast Formula

Relative luminance $L$ is computed in accordance with IEC 61966-2-1 and WCAG 2.1:

$$R_{\text{linear}} = \begin{cases} \frac{R}{255 \times 12.92} & \text{if } \frac{R}{255} \le 0.04045 \\ \left(\frac{\frac{R}{255} + 0.055}{1.055}\right)^{2.4} & \text{if } \frac{R}{255} > 0.04045 \end{cases}$$

$$L = 0.2126 \cdot R_{\text{linear}} + 0.7152 \cdot G_{\text{linear}} + 0.0722 \cdot B_{\text{linear}}$$

The contrast ratio $C_R$ between text luminance $L_1$ and canvas surface luminance $L_2$ ($L_1 \ge L_2$) is:

$$C_R = \frac{L_1 + 0.05}{L_2 + 0.05}$$

- **WCAG AA Body Text ($\le 20\text{px}$):** $C_R \ge 4.5:1$
- **WCAG AA Large Text ($\ge 24\text{px}$ or $\ge 19\text{px}$ bold):** $C_R \ge 3.0:1$
- **WCAG AAA Compliance:** $C_R \ge 7.0:1$ (body text) / $C_R \ge 4.5:1$ (large headlines)

### 3.2 The Zero Yellow-on-Light Contrast Rule (Mandatory)

Light yellow, amber, or gold glyphs placed on white or light-cream surfaces suffer from catastrophic contrast collapse ($C_R \approx 1.2:1 - 1.8:1$), causing complete illegibility on auditorium projectors and mobile screens.

```
Contrast Degradation Failure Example:
┌────────────────────────────────────────────────────────┐
│ Light Canvas: #FFFFFF (Luma: 1.00)                     │
│ Yellow Accent: #EAB308 (Luma: 0.51)                    │
│ Contrast Ratio: (1.00 + 0.05) / (0.51 + 0.05) = 1.87:1 │
│ Result: ❌ FAILS WCAG AA (Minimum 4.5:1 required)      │
└────────────────────────────────────────────────────────┘
```

#### Detection & Inversion Protocol
The contrast engine employs the `isYellowish` chromatic filter:
```typescript
export function isYellowish(color: string): boolean {
  const [r, g, b] = parseColorToRgb(color);
  return r >= 180 && g >= 140 && b <= 110;
}
```

When evaluating themes where `isDark === false`:
1. If the theme's default brand accent is yellowish (e.g. `ivory-gold`, `paper-ink`, `bright-gold`), `--pres-accent-text` is automatically inverted to an ultra-deep, authoritative ink tone.
2. Inverted tones preserve color warmth while achieving $C_R \ge 5.5:1$:
   - `ivory-gold`: Inverts text accent to `#B45309` (Amber Umber Authority, $C_R = 5.8:1$).
   - `warm-editorial-terracotta`: Inverts text accent to `#9A3412` (Deep Mahogany Terracotta, $C_R = 6.4:1$).
   - `clinical-emerald-light`: Inverts text accent to `#047857` (Deep Pine Evergreen, $C_R = 6.8:1$).
   - `white-brand`: Resolves to `#6D28D9` (Sovereign Indigo, $C_R = 6.2:1$).
   - `corporate-clean`: Resolves to `#4338CA` (Boardroom Indigo, $C_R = 6.5:1$).
   - `sapphire-executive-light`: Resolves to `#1E40AF` (Deep Sovereign Navy, $C_R = 7.1:1$).
   - `github-light`: Resolves to `#0969DA` (High-Contrast GitHub Blue, $C_R = 5.2:1$).
3. Slide archetypes and badge components MUST bind text glyphs to `var(--pres-accent-text)` rather than raw `var(--pres-accent)`.

```typescript
export function resolveAccentTextColor(theme: ThemePalette, isDark: boolean): string {
  if (isDark) return theme.accentColor;
  const knownAccent = getKnownLightAccent(theme.id);
  if (knownAccent) return knownAccent;
  const canvasLuma = hexToLuminance(theme.canvasBg || '#FFFFFF');
  const candidate = theme.stops?.[7]?.hex || theme.stops?.[8]?.hex || '#6D28D9';
  const isCandidateValid = contrastRatio(hexToLuminance(candidate), canvasLuma) >= 5.5 && !isYellowish(candidate);
  if (isCandidateValid) return candidate;
  return '#6D28D9';
}
```

### 3.3 Clean-Pass Variable Purge (`purgePresentationVariables`)

To prevent dirty variable persistence, CSS inheritance leakage, and cross-theme style corruption, the theme engine executes `cleanPreviousThemeVariables` (aliased as `purgePresentationVariables`) on both `document.documentElement` and `#presentation-root` prior to writing new tokens:

```typescript
const MANAGED_PRES_VARIABLE_PREFIXES = [
  '--pres-',
  '--preset-',
  '--gradient-',
  '--gold',
  '--cream',
  '--ember',
  '--ink',
  '--accent-',
  '--step-',
  '--text-shadow-',
];

export function cleanPreviousThemeVariables(rootEl?: HTMLElement | null): void {
  const target = rootEl || (typeof document !== 'undefined' ? document.documentElement : null);
  if (!target) return;
  const inlineStyle = target.style;
  const propertiesToRemove: string[] = [];

  for (let i = 0; i < inlineStyle.length; i++) {
    const propName = inlineStyle[i];
    const isManaged = MANAGED_PRES_VARIABLE_PREFIXES.some((prefix) => propName.startsWith(prefix));
    if (isManaged) {
      propertiesToRemove.push(propName);
    }
  }

  propertiesToRemove.forEach((prop) => inlineStyle.removeProperty(prop));
  getAllThemeVarKeys().forEach((key) => inlineStyle.removeProperty(key));
}

export const purgePresentationVariables = cleanPreviousThemeVariables;
```

---

## 4. Kinetic Motion Physics, Hardware Acceleration & Transitions

Motion in the White Presentation System is modeled after real-world physical dynamics rather than linear mechanical tweens. Every visual state change utilizes spring physics and dedicated GPU composite layers.

### 4.1 Spring Physics Dynamic Standard

The kinetic physics engine utilizes damped harmonic oscillator dynamics:

$$F_{\text{spring}} = -k \cdot (x - x_{\text{target}}) - c \cdot v$$

$$\ddot{x} + 2\zeta\omega_n \dot{x} + \omega_n^2 (x - x_{\text{target}}) = 0$$

Where:
- **Stiffness ($k$ / $\omega_n^2$):** $420$
- **Damping ($c$ / $2\zeta\omega_n$):** $28$
- **Mass ($m$):** $1.0$
- **Damping Ratio ($\zeta$):** $\frac{c}{2\sqrt{km}} = \frac{28}{2\sqrt{420 \times 1.0}} \approx 0.683$ (sub-critically damped, producing crisp responsive settling with microscopic organic rebound).
- **CSS Easing Cubic-Bezier Approximation:** `cubic-bezier(0.22, 1, 0.36, 1)` (Quintic deceleration curve).

### 4.2 Hardware Acceleration Mandate

To guarantee consistent 60fps / 120fps fluid execution without dropped frames during rapid keynote navigation:
1. Animated containers must declare explicit GPU compositing hints:
   ```css
   .kinetic-surface,
   .slide-transition-container,
   .step-phase-container {
     will-change: transform, opacity;
     transform: translateZ(0);
     backface-visibility: hidden;
     perspective: 1000px;
   }
   ```
2. Animating expensive layout properties (`width`, `height`, `margin`, `padding`, `top`, `left`) is strictly prohibited. Only `transform`, `opacity`, and `filter` may vary across transition lifecycles.

### 4.3 Six Signature Slide Transition Archetypes

```
Slide Transition Archetypes:
├── kinetic-morph : Shared element spatial interpolation with border-radius smoothing
├── slide         : Directional translation along X/Y coordinate axes
├── fade          : Cross-dissolve with luminance wash attenuation
├── zoom          : Scale-based focal reveal (0.96 -> 1.00 on enter)
├── rise          : Parallax vertical ascent with 16px lift and staggered card cascade
└── flip          : 3D perspective rotational flip (perspective: 1200px, tilt: ±4deg)
```

```css
/* Transition 1: kinetic-morph */
.transition-kinetic-morph-enter {
  opacity: 0.01;
  transform: scale(0.96) translateY(12px);
  filter: blur(4px);
}
.transition-kinetic-morph-enter-active {
  opacity: 1;
  transform: scale(1) translateY(0);
  filter: blur(0px);
  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
              filter 0.35s ease-out;
}

/* Transition 2: slide */
.transition-slide-enter {
  opacity: 0;
  transform: translateX(48px);
}
.transition-slide-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.35s ease-out, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Transition 3: fade */
.transition-fade-enter {
  opacity: 0;
}
.transition-fade-enter-active {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

/* Transition 4: zoom */
.transition-zoom-enter {
  opacity: 0;
  transform: scale(0.92);
}
.transition-zoom-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.35s ease-out, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Transition 5: rise */
.transition-rise-enter {
  opacity: 0;
  transform: translateY(24px);
}
.transition-rise-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.35s ease-out, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Transition 6: flip */
.transition-flip-enter {
  opacity: 0;
  transform: perspective(1200px) rotateY(-8deg) scale(0.95);
}
.transition-flip-enter-active {
  opacity: 1;
  transform: perspective(1200px) rotateY(0deg) scale(1);
  transition: opacity 0.4s ease-out, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## 5. Deterministic 3-Phase Kinetic Step Lifecycle Engine

Multi-step slides (e.g. `StepsSlide`, `TimelineSlide`, `ComparisonSlide`) divide progression into a deterministic 3-phase lifecycle. This eliminates visual distraction and focuses the audience's attention squarely on the speaker's active point.

```
3-Phase Kinetic Step Engine:
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│ Phase 1: Completed      │ Phase 2: Active         │ Phase 3: Future         │
│ .step-phase-completed   │ .step-phase-active      │ .step-phase-future      │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Opacity: 0.75           │ Opacity: 1.00           │ Opacity: 0.40           │
│ Scale: 1.00             │ Scale: 1.02             │ Scale: 0.98             │
│ Blur: None              │ Blur: None              │ Blur: 1.25px            │
│ Border: Hairline Slate  │ Border: Radiant Accent  │ Border: Hairline Muted  │
│ Shadow: Subdued Panel   │ Shadow: Volumetric Halo │ Shadow: None            │
│ Plane: Plane 1 (z=10)   │ Plane: Plane 2 (z=20)   │ Plane: Plane 1 (z=10)   │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

### 5.1 Step Phase CSS Specifications

```css
/* Phase 1: Completed Step */
.step-phase-completed {
  opacity: var(--step-phase-past-opacity, 0.75);
  transform: scale(1) translateZ(0);
  filter: blur(0px);
  background: var(--pres-bg-card);
  border: 1px solid var(--pres-border);
  transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              border-color 0.35s ease,
              filter 0.3s ease;
  z-index: 10;
}

/* Phase 2: Active Focal Step */
.step-phase-active {
  opacity: var(--step-phase-active-opacity, 1.00);
  transform: translateY(-3px) scale(1.02) translateZ(0);
  filter: blur(0px);
  background: var(--pres-bg-card-hover);
  border: 1.5px solid var(--pres-accent);
  box-shadow: 0 16px 36px -8px hsl(var(--pres-accent-hsl, 262 83% 58%) / 0.28),
              0 0 20px -2px hsl(var(--pres-accent-hsl, 262 83% 58%) / 0.20);
  transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              border-color 0.35s ease;
  z-index: 20;
}

/* Phase 3: Future Inactive Step */
.step-phase-future {
  opacity: var(--step-phase-future-opacity, 0.40);
  transform: scale(0.98) translateZ(0);
  filter: blur(1.25px);
  background: var(--pres-bg-card);
  border: 1px solid var(--pres-border);
  transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              filter 0.3s ease;
  z-index: 10;
}
```

### 5.2 Direct Click-to-Jump & Acoustic Synchronization

1. **Direct Navigation Affordance:** Every step node, timeline pin, and card header provides direct click handlers:
   ```typescript
   onClick={() => onStepJump(stepIndex)}
   role="button"
   tabIndex={0}
   aria-pressed={isActive}
   aria-label={`Step ${stepIndex + 1}: ${stepTitle}`}
   ```
2. **Ephemeral Hover Inspection:** Hovering over a future or past step activates an ephemeral preview state (`effectiveStep = hoveredStep ?? activeStep`) without permanently modifying the presenter's active slide progression.
3. **Synthesized Acoustic Step Tick:** Advancing or jumping steps triggers an instantaneous 1800Hz / 12ms non-blocking WebAudio oscillator tick:
   ```typescript
   export function playStepTick(hasAudio = true): void {
     if (!hasAudio || typeof window === 'undefined') return;
     try {
       const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
       const osc = ctx.createOscillator();
       const gain = ctx.createGain();
       osc.type = 'sine';
       osc.frequency.setValueAtTime(1800, ctx.currentTime);
       osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.012);
       gain.gain.setValueAtTime(0.08, ctx.currentTime);
       gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.012);
       osc.connect(gain);
       gain.connect(ctx.destination);
       osc.start();
       osc.stop(ctx.currentTime + 0.012);
     } catch {
       // Graceful degradation when audio context is blocked
     }
   }
   ```

---

## 6. Spatial Design System: 60/30/10 Balance & 4-Plane Depth Hierarchy

The visual composition is grounded in mathematical proportion and structured depth layering.

### 6.1 The 60/30/10 Visual Spatial Balance Rule

To avoid cognitive fatigue during multi-hour technical reviews or high-pressure executive keynotes, all slides follow the 60/30/10 visual area allocation:

```
60/30/10 Visual Area Allocation:
┌────────────────────────────────────────────────────────────────────────┐
│ 60% Dominant Canvas Surface Wash & Negative Space                      │
│ Tokens: --pres-bg, --pres-canvas-bg-hsl, --pres-dot-matrix             │
│ Role: Grounding field, ambient lighting, calm breathing room           │
├────────────────────────────────────────────────────────────────────────┤
│ 30% Structural Bento Cards, Dividers & Content Panels                  │
│ Tokens: --pres-bg-card, --pres-border, --pres-text-muted               │
│ Role: Information boundaries, scannable cards, comparison tracks       │
├────────────────────────────────────────────────────────────────────────┤
│ 10% High-Contrast Focal Accents & KPI Highlights                       │
│ Tokens: --pres-accent, --pres-accent-glow, --pres-accent-text          │
│ Role: Active step badges, primary CTA buttons, monumental ROI metrics  │
└────────────────────────────────────────────────────────────────────────┘
```

- **60% Dominant Field:** No slide may cover more than 40% of its total canvas area with dense opaque foreground blocks.
- **30% Structural Panels:** Card surfaces must use translucent glassmorphic fills with subtle hairline borders ($C_R \le 2.0:1$ against the canvas background) framing content without shouting.
- **10% Focal Accents:** Vibrant brand colors must never occupy more than 10% of slide pixels. Over-saturation is strictly prohibited.

### 6.2 The 4-Plane Depth Hierarchy

Depth in the virtual presentation container is stratified across four non-colliding elevation planes:

```
4-Plane Elevation Hierarchy:
▲ [Plane 3: Floating Plane]  z-index: 50+  translateZ: 48px  (Presenter HUD, Modals, Audio Sliders)
│ [Plane 2: Elevated Plane]  z-index: 20   translateZ: 24px  (Active Steps, Hovered Bento Cards, Popovers)
│ [Plane 1: Raised Plane]    z-index: 10   translateZ: 8px   (Bento Cards, Inactive Steps, Data Tables)
▼ [Plane 0: Surface Plane]   z-index: 0    translateZ: 0px   (Canvas Base, Radial Glows, Dot Matrix)
```

```css
/* Plane 0: Surface Plane */
.plane-0-surface {
  z-index: 0;
  transform: translateZ(0px);
  background: var(--pres-bg);
}

/* Plane 1: Raised Plane */
.plane-1-raised {
  z-index: 10;
  transform: translateZ(8px);
  background: var(--pres-bg-card);
  border: 1px solid var(--pres-border);
  box-shadow: var(--pres-card-shadow, 0 8px 30px rgba(0, 0, 0, 0.05));
  backdrop-filter: blur(12px);
  border-radius: 12px;
}

/* Plane 2: Elevated Plane */
.plane-2-elevated {
  z-index: 20;
  transform: translateY(-4px) translateZ(24px) scale(1.01);
  background: var(--pres-bg-card-hover);
  border: 1.5px solid var(--pres-border-hover);
  box-shadow: 0 20px 35px -10px var(--pres-accent-glow), 0 10px 10px -5px rgba(0, 0, 0, 0.08);
}

/* Plane 3: Floating Plane */
.plane-3-floating {
  z-index: 50;
  transform: translateZ(48px);
  background: hsl(var(--chrome-bg, 0 0% 7%) / 0.95);
  border: 1px solid hsl(var(--chrome-border, 0 0% 100% / 0.12));
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(16px);
}
```

---

## 7. Fluid Typography & Micro-Text Constraints ($\ge 14\text{px}$)

Typography scales smoothly according to the $1920 \times 1080$ virtual canvas using mathematical CSS `clamp()` expressions.

### 7.1 Mathematical Fluid Type Scale

$$\text{Font Size} = \text{clamp}(V_{\text{min}}, V_{\text{preferred}}, V_{\text{max}})$$

Where $V_{\text{preferred}}$ is scaled to the viewport width percentage (`vw`).

| Typographic Hierarchy | Token Name | Fluid CSS Expression | Line Height | Letter Spacing | Font Family |
|:---|:---|:---|:---:|:---:|:---|
| **Display Hero** | `--font-display-hero` | `clamp(56px, 5.5vw, 112px)` | 1.05 | `-0.03em` | Display (`Ubuntu`, Bold Italic) |
| **Slide Title (H1)** | `--font-slide-title` | `clamp(36px, 3.6vw, 68px)` | 1.10 | `-0.02em` | Display (`Ubuntu`, Bold) |
| **Section Header (H2)** | `--font-section-head` | `clamp(24px, 2.2vw, 40px)` | 1.20 | `-0.01em` | Display (`Ubuntu`, SemiBold) |
| **Card Headline (H3)** | `--font-card-head` | `clamp(18px, 1.6vw, 26px)` | 1.30 | `0.00em` | Body (`Poppins`, SemiBold) |
| **Subtitle / Lead** | `--font-lead-body` | `clamp(16px, 1.4vw, 22px)` | 1.55 | `0.00em` | Body (`Poppins`, Regular) |
| **Standard Body** | `--font-standard-body` | `clamp(14px, 1.0vw, 17px)` | 1.60 | `0.01em` | Body (`Poppins`, Regular) |
| **Kickers / Badges** | `--font-kicker-badge` | `clamp(14px, 0.9vw, 16px)` | 1.40 | `0.15em` | Code (`JetBrains Mono`, Bold Uppercase) |
| **Code / Micro-Text** | `--font-caption-mono` | `clamp(14px, 0.85vw, 15px)` | 1.40 | `0.04em` | Code (`JetBrains Mono`, Medium) |

### 7.2 Non-Negotiable Micro-Text Floor ($\ge 14\text{px}$)

Microscopic text ($9\text{px} - 12\text{px}$) is completely banned across all slide archetypes. Kicker badges, tags, version indicators, timestamps, and chart captions must strictly obey the $14\text{px}$ floor:
- ❌ **Prohibited:** `text-[10px]`, `text-[11px]`, `text-[12px]`, `text-xs font-normal`.
- ✅ **Required:** `text-sm font-bold uppercase tracking-wider` or `clamp(14px, 0.9vw, 16px)`.

---

## 8. Positive Boolean Coding Standard

All state interfaces, runtime properties, and component configurations must strictly enforce positive boolean naming semantics. Prohibited negative patterns, prefixes, and double negatives are eliminated.

| Domain | Prohibited Anti-Pattern | Required Positive Standard |
|:---|:---|:---|
| Theme Appearance | `isNotDark: boolean` | `isDark: boolean` |
| Variable State | `hasNoGlow: boolean` | `hasGlow: boolean` |
| Dot Grid Matrix | `isGridDisabled: boolean` | `hasDotMatrix: boolean` |
| Motion Acceleration | `disableHardwareAccel: boolean` | `hasHardwareAcceleration: boolean` |
| Audio Cues | `hasNoAudio: boolean` | `hasAudioEnabled: boolean` |
| Step Progression | `isNotActive: boolean` | `isActive: boolean` |
| Step Completion | `isUncompleted: boolean` | `hasCompletedPhase: boolean` |
| Transition Readiness | `isNotMounted: boolean` | `isMounted: boolean` |

### 8.1 Conditional Evaluation Standard
Conditionals must inspect positive booleans directly without explicit comparisons against boolean literals:
```typescript
// ❌ PROHIBITED
if (theme.isDark === true) { ... }
if (step.hasCompletedPhase != false) { ... }

// ✅ REQUIRED
if (theme.isDark) { ... }
if (step.hasCompletedPhase) { ... }
```

---

## 9. Architectural Verification & Quality Gates

| Verification Gate | Validation Criteria | Automated Target |
|:---|:---|:---:|
| **25-Theme Integrity** | All 25 themes load deterministically with discrete stops $S_0 \dots S_9$ and valid HSL triplets. | `PASS (25/25)` |
| **WCAG AA Compliance** | Headline and body text contrast ratio $C_R \ge 4.5:1$ against canvas background. | `PASS (100%)` |
| **Zero Yellow Inversion** | Zero yellowish text on light surfaces; `--pres-accent-text` properly inverted to $C_R \ge 5.5:1$. | `PASS (Zero Violations)` |
| **Variable Purge** | `cleanPreviousThemeVariables` sweeps all managed variable prefixes prior to new theme injection. | `PASS` |
| **Transition Physics** | All 6 transition archetypes execute with GPU isolation (`translateZ(0)`, `will-change`). | `PASS` |
| **3-Phase Step Engine** | Completed ($0.75$), Active ($1.00$, glow, $1.02$), Future ($0.40$, $1.25\text{px}$ blur) states verified. | `PASS` |
| **Micro-Text Floor** | All kickers, badges, and captions verified $\ge 14\text{px}$. | `PASS` |
| **Positive Booleans** | 100% of boolean props and state fields use `is*` or `has*` positive prefixes. | `PASS` |
