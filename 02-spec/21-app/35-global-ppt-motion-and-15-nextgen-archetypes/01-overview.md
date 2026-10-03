# 01-Overview: Global PPT Motion, Northern UI/UX & 15 Next-Gen Archetypes

> **Specification Identifier:** `02-spec/21-app/35-global-ppt-motion-and-15-nextgen-archetypes/01-overview`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.7.0`  
> **Author:** Spec Author 01  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-03  
> **Domain:** Global PPT Corporate Theme Adaptation, 10-Step Gradient Ramps, 60/30/10 Visual Balance, 4-Plane Depth Hierarchy, Northern UI/UX Typography Standard, Zero Yellow-on-Light Contrast Rule, 15 Next-Gen Enterprise & AI Architecture Archetypes  

---

## 1. Executive Summary & Problem Space

Enterprise slide presentations in high-stakes boardroom, technical keynotes, and executive steering sessions frequently suffer from five critical architectural failures:

1. **Visual Clutter & Cognitive Overload:** Slides overwhelm executive audiences with dense, uncalibrated visual weight, failing the foundational **60/30/10 Visual Balance Rule**. When cards, metrics, and accent colors compete for visual prominence, decision-makers cannot discern primary narrative takeaways.
2. **Flat Unanchored Spatial Layouts:** Content exists on an undifferentiated single z-plane without optical hierarchy, causing visual fatigue, breaking narrative focus, and destroying spatial continuity during complex architectural walkthroughs.
3. **Micro-Typography & Unreadable Headers:** Small, unreadable header fonts ($\le 12\text{px}$) and micro-kickers force viewers to squint, creating cognitive friction and failing modern enterprise presentation standards.
4. **Contrast Dilution & The Yellow-on-Light Pathology:** Vibrant accent colors (yellows, ambers, golds) that look luminous on dark canvases become completely unreadable when switched to light editorial canvases, dropping below acceptable WCAG contrast thresholds ($< 2.0:1$) and producing embarrassing illegibility.
5. **Disorienting Jumps Between Multi-Stage Slides:** Abrupt slide transitions without intra-slide kinetic stepping and tactile hover exploration overwhelm executive audiences before the narrative can be absorbed.

The **Global PPT Motion, Northern UI/UX & 15 Next-Gen Archetypes Architecture** resolves these challenges through a unified presentation framework:

- **Mathematical 60/30/10 Visual Distribution:** 60% ambient negative space wash, 30% structural glassmorphic surfaces, and 10% high-energy focal accents.
- **4-Plane Depth Hierarchy:** Strict z-index elevation planes (Planes 0 to 3) utilizing GPU-accelerated sub-pixel depth transforms, harmonic spring physics, and backdrop blur filters ($z=0, 10, 20, 50+$).
- **Northern UI/UX Typography Standard (v1.3.3):** Elimination of micro-text; mandatory $\ge 14\text{px}-16\text{px}$ uppercase kickers, $44\text{px}-56\text{px}$ slide headings, $40\text{px}-46\text{px}$ detail headings, and single-item cognitive focus.
- **Zero Yellow-on-Light Contrast Invariant:** Strict prohibition of unqualified yellow/amber on light canvases, with automatic inversion to high-contrast rich violet, deep ochre, or crimson delivering guaranteed WCAG AAA contrast ($C_R \ge 8.6:1$).
- **Fluid Typography Scale:** Responsive `clamp()` typography curves anchored strictly to the canonical $1920 \times 1080$ virtual canvas.
- **Pure Live DOM Typography Mandate:** 100% accessible, selectable HTML typography, eliminating rasterized text graphics entirely.
- **10 Authentic Master Themes:** Unadorned HSL triplet tokens (`accentHsl`, `canvasBgHsl`) enabling slash-alpha opacity syntax, 10-step mathematical gradient ramps ($S_0$–$S_9$), and permanent dark presenter HUD chrome.
- **Strict Persona Governance:** Universal standardization of **Alim Ul Karim** as **"Chief Software Engineer"** with zero permitted role deviations.
- **15 Next-Gen Enterprise & AI Architecture Archetypes:** 8 multi-step interactive operational workflows and 7 flat sovereign telemetry overviews.

```
+---------------------------------------------------------------------------------------------------+
|                        GLOBAL PPT NEXT-GEN SYNTHESIS ARCHITECTURE                                 |
+---------------------------------------------------------------------------------------------------+
|  [Global PPT Authority]        --> 10 HSL Master Palettes, Fixed Dark HUD, Micro-Shadows, Capsules|
|  [Northern UI/UX Typography]   --> >=14px Kickers, 44px-56px Headings, Single-Item Cognitive Focus|
|  [Zero Yellow-on-Light Rule]   --> Strict AAA Inversion (Amber-900 / Violet-900 on Light Surfaces)|
|  [Kinetic Motion Engine]       --> 3-Phase Step Lifecycle (Completed 0.75, Active 1.00, Future 0.40)|
|  [15 Next-Gen Archetypes]      --> 8 Multi-Step Operational Workflows + 7 Flat Sovereign Overviews|
|  [Atmospheric Physics]         --> Damped Harmonic Springs (k=420 N/m, c=17 N*s/m, zeta=0.85)     |
|  [4-Plane Spatial Depth]       --> Surface (P0: z=0), Raised (P1: z=10), Elevated (P2: z=20),     |
|                                    Floating (P3: z=50+)                                           |
|  [Strict Persona Governance]   --> Canonical "Chief Software Engineer" Executive Identity         |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Global PPT Corporate Theme Adaptation & 10-Step Gradient Ramps

### 2.1 Raw Space-Separated HSL Triplet Standard

The presentation system standardizes all color tokens as unadorned, space-separated **HSL triplets** (`H S% L%` without the outer `hsl(...)` wrapper). This token structure unlocks direct CSS and Tailwind slash-alpha compositing at arbitrary opacity levels without calculating RGB equivalents:

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

### 2.2 10 Authentic Master Themes

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

### 2.3 10-Step Precision Gradient Ramps ($S_0$ through $S_9$)

Each theme defines a 10-step mathematical gradient ramp ($S_0$ to $S_9$) spanning from maximum lightness and pure luminescent aura ($S_0$) down to deepest tonal shadow ($S_9$):

```
[S0] Pure Aura   --> [S1] Soft Tint   --> [S2] Ambient Glow --> [S3] Bright Core  --> [S4] Base Accent
[S5] Rich Tone   --> [S6] Deep Vibrant--> [S7] Dark Shade   --> [S8] Ultra Dark   --> [S9] Midnight Root
```

#### Relative Luminance & Contrast Calculation Formulas

Relative luminance $L$ of each stop is calculated according to the sRGB formula:

$$L = 0.2126 \cdot R_{\text{linear}} + 0.7152 \cdot G_{\text{linear}} + 0.0722 \cdot B_{\text{linear}}$$

Where each channel $C \in \{R, G, B\}$ is converted from sRGB ($0.0$ to $1.0$):

$$C_{\text{linear}} = \begin{cases} \frac{C}{12.92} & \text{if } C \le 0.04045 \\ \left(\frac{C + 0.055}{1.055}\right)^{2.4} & \text{if } C > 0.04045 \end{cases}$$

The contrast ratio $C_R$ between two luminance values $L_1$ (lighter) and $L_2$ (darker) is defined as:

$$C_R = \frac{L_1 + 0.05}{L_2 + 0.05}$$

- **WCAG AA Compliance Threshold:** $C_R \ge 4.5:1$ (normal text) and $C_R \ge 3.0:1$ (large text $\ge 18\text{pt}$ or bold $\ge 14\text{pt}$).
- **WCAG AAA Compliance Threshold:** $C_R \ge 7.0:1$ (normal text) and $C_R \ge 4.5:1$ (large text).
- **Northern Light-Surface Guarantee:** $C_R \ge 8.6:1$ against white (`#FFFFFF`) and cream (`#FAF7F0`).

---

## 3. The 60/30/10 Visual Balance System

The presentation canvas strictly enforces the **60/30/10 Visual Balance Rule** across the canonical $1920 \times 1080$ virtual canvas ($2,073,600\text{ px}^2$). This mathematical distribution guarantees corporate legibility, prevents cognitive fatigue during multi-hour executive reviews, and directs executive attention with surgical precision.

```
+---------------------------------------------------------------------------------------------------+
|                          60/30/10 VISUAL BALANCE DISTRIBUTION MATRIX                              |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ 60% DOMINANT CANVAS BACKGROUND WASH ]                                                          |
|  Tokens: --pres-canvas-bg, --pres-canvas-gradient, --pres-dot-matrix                              |
|  Function: Negative space, breathing room, background atmospheric depth                           |
|  Pixel Budget: ~1,244,160 px^2 (60% of the 1920x1080 canvas)                                      |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | [ 30% STRUCTURAL SURFACE & CONTAINER PANELS ]                                               |  |
|  | Tokens: --pres-card-bg, --pres-card-border, --pres-text-primary, --pres-text-secondary        |  |
|  | Function: Bento containers, glassmorphic panels, data grids, tabular borders, body copy    |  |
|  | Pixel Budget: ~622,080 px^2 (30% of the 1920x1080 canvas)                                  |  |
|  |                                                                                             |  |
|  |  +-----------------------+     +-----------------------+     +---------------------------+  |  |
|  |  | [ 10% VIVID FOCAL     |     | [ 10% VIVID FOCAL     |     | [ 10% VIVID FOCAL         |  |  |
|  |  |   ACCENTS ]           |     |   ACCENTS ]           |     |   ACCENTS ]               |  |  |
|  |  | Tokens: --pres-accent |     | Tokens: --pres-accent |     | Tokens: --pres-accent     |  |  |
|  |  | Active step halo ring |     | Key KPI digits, status|     | Capsule badge, primary CTA|  |  |
|  |  +-----------------------+     +-----------------------+     +---------------------------+  |  |
|  |  Pixel Budget: ~207,360 px^2 (10% of the 1920x1080 canvas)                                  |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### Exact Token Assignments & Area Budgets

| Ratio | Semantic Role | Design Token | Dark Mode Mapping (`isDark: true`) | Light Mode Mapping (`isDark: false`) | Area Budget on 1920x1080 |
|:---:|:---|:---|:---|:---|:---:|
| **60%** | **Dominant Background Wash** | `--pres-canvas-bg`<br>`--pres-canvas-gradient`<br>`--pres-dot-matrix` | Deep obsidian, navy slate, or dark emerald base (`#020617`, `#0B192C`, `#022C22`) with radial light wash | Archival cream or crisp editorial white (`#FFFFFF`, `#F5F0E6`, `#F8FAFC`) with subtle vignette | $\approx 1,244,160\text{ px}^2$ |
| **30%** | **Structural Panels & Surfaces** | `--pres-card-bg`<br>`--pres-card-border`<br>`--pres-text-primary`<br>`--pres-text-secondary` | Frosted glass containers (`rgba(255,255,255,0.04)`), borders (`rgba(255,255,255,0.12)`), text (`#F8FAFC`, `#94A3B8`) | Elevated cards (`#FFFFFF`, `rgba(15,23,42,0.03)`), crisp borders (`rgba(15,23,42,0.10)`), text (`#0F172A`, `#475569`) | $\approx 622,080\text{ px}^2$ |
| **10%** | **Vivid Focal Accents** | `--pres-accent`<br>`--pres-accent-glow`<br>`--capsule-*`<br>`--pres-kpi-highlight`<br>`--pres-accent-text` | Luminescent brand hue (Electric Indigo `#6366F1`, Mint `#10B981`, Coral `#F97316`, Cyan `#06B6D4`) | Deep sovereign brand hue (Rich Violet `#7C3AED` or `#6D28D9`, Royal Blue `#1D4ED8`, Forest `#047857`) | $\approx 207,360\text{ px}^2$ |

### Mathematical Rules for the 10% Accent Token

1. **Von Restorff Isolation Constraint:** The high-energy accent token must never be applied to large card backgrounds, body paragraphs, or broad structural boundaries. It is reserved exclusively for:
   - The active step halo ring (`box-shadow: 0 0 24px -2px hsl(var(--pres-accent) / 0.50)`).
   - Boardroom quantitative KPI numbers (`font-size: clamp(2.5rem, 4vw, 4.5rem)`).
   - High-priority status pills, active DAG nodes, and `.capsule-*` kicker pills.
   - Primary interactive controls and focal execution indicators.
2. **Contrast Enforcement:** The accent token against its immediate background must meet or exceed WCAG 2.1 AA standards ($4.5:1$ for normal text, $3.0:1$ for large text and graphical components). In light mode, typography relies on `--pres-accent-text` ($> 5.5:1$) or inverted ochre/violet tokens.

---

## 4. The 4-Plane Depth Hierarchy

Spatial depth on the sovereign 2D canvas is structured through an uncompromising **4-Plane Depth Hierarchy**. This multi-layered elevation model organizes visual density, establishes unambiguous visual hierarchy, and enables GPU-accelerated spring animations without layout recalculations.

```
=====================================================================================================
 PLANE 3: FLOATING PLANE (z-index: 50+) - Presenter HUD, Halos, Modal Overlays, Evidence Toast
   Transform: translateZ(48px) | Elevation: --elevation-3 | Blur: backdrop-blur(24px)
-----------------------------------------------------------------------------------------------------
 PLANE 2: ELEVATED PLANE (z-index: 20) - Active Step Cards, Dynamic Hero Detail Pane, Focused DAG Nodes
   Transform: translateZ(24px) scale(1.02) | Elevation: --elevation-2 | Blur: backdrop-blur(16px)
-----------------------------------------------------------------------------------------------------
 PLANE 1: RAISED PLANE (z-index: 10) - Baseline Bento Containers, Inactive Cards, Grid Structures
   Transform: translateZ(8px) | Elevation: --elevation-1 | Blur: backdrop-blur(8px)
-----------------------------------------------------------------------------------------------------
 PLANE 0: SURFACE PLANE (z-index: 0) - Canvas Base, Atmospheric Gradients, Dot Matrix, Mesh Tracks
   Transform: translateZ(0px) | Elevation: --elevation-0 | Texture: SVG Grid / Canvas Mesh
=====================================================================================================
```

### Depth Plane Specifications & Tokens

```less
// CSS Custom Properties for 4-Plane Elevation Model
:root {
  // Surface Plane 0 (z = 0)
  --elevation-0-z: 0;
  --elevation-0-transform: translateZ(0px);

  // Raised Plane 1 (z = 10)
  --elevation-1-z: 10;
  --elevation-1-shadow-dark: 0 12px 32px -6px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08);
  --elevation-1-shadow-light: 0 8px 24px -4px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(15, 23, 42, 0.08);
  --elevation-1-transform: translateZ(8px);
  --elevation-1-backdrop: blur(12px);

  // Elevated Plane 2 (z = 20)
  --elevation-2-z: 20;
  --elevation-2-shadow-dark: 0 20px 48px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px hsl(var(--pres-accent) / 0.35);
  --elevation-2-shadow-light: 0 16px 36px -8px rgba(15, 23, 42, 0.12), 0 0 0 1px hsl(var(--pres-accent) / 0.40);
  --elevation-2-transform: translateZ(24px) scale(1.02);
  --elevation-2-backdrop: blur(16px);

  // Floating Plane 3 (z = 50+)
  --elevation-3-z: 50;
  --elevation-3-shadow-dark: 0 32px 64px -16px rgba(0, 0, 0, 0.80), 0 0 32px -4px hsl(var(--pres-accent) / 0.40);
  --elevation-3-shadow-light: 0 24px 52px -12px rgba(15, 23, 42, 0.18), 0 0 24px -4px hsl(var(--pres-accent) / 0.30);
  --elevation-3-transform: translateZ(48px);
  --elevation-3-backdrop: blur(24px);
}
```

### Plane Behavior Matrix

| Plane | Name | `z-index` | CSS Transform | Default Elements | Transition Dynamic |
|:---:|:---|:---:|:---|:---|:---|
| **0** | **Surface** | `0` | `translateZ(0px)` | Canvas background, dot-matrix mesh (`opacity: 0.05`), radial glow centers, static SVG orbital guide rails. | Invariant static base. |
| **1** | **Raised** | `10` | `translateZ(8px)` | Inactive bento grid cards, stage containers, ERD tables, code diff panes, inactive DAG task nodes. | Smooth transition to Plane 2 upon step focus ($400\text{ms}$ spring). |
| **2** | **Elevated** | `20` | `translateZ(24px) scale(1.02)` | Current active step card, dynamic right-hand hero detail pane, executing DAG node, focused canary rollout tier. | Harmonic spring entry ($k=420$, $c=17$, $m=0.8$), active halo ring illumination. |
| **3** | **Floating** | `50+` | `translateZ(48px)` | Permanent Dark Presenter HUD, interactive modal overlays, payload inspector drawers, cryptographic evidence toast. | Dynamic float with gentle spring dampening; immune to canvas theme shifts. |

---

## 5. Northern UI/UX Typography Standard (v1.3.3)

Enterprise executive presentations require immediate typographic legibility from across a boardroom table or conference hall. The **Northern UI/UX Typography Standard** establishes strict baseline font sizing rules, eliminates micro-text clutter, and enforces single-item cognitive focus.

### 5.1 Elimination of Micro-Typography
- **Strict Prohibition:** Under no circumstances may headers, kickers, navigation badges, or slide titles use micro-text ($\le 12\text{px}$).
- **Kicker Badges:** Strictly $\ge 14\text{px}-16\text{px}$ (`text-base font-mono font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full`).
- **Category Text Beside Kicker:** Strictly $\ge 16\text{px}$ (`text-base font-mono font-semibold` in high-contrast slate).
- **Slide Headings:** Strictly $44\text{px}-56\text{px}$ (font-black `font-ubuntu leading-none tracking-tight`).
- **Detail Headings (Right Pane Hero):** Strictly $40\text{px}-46\text{px}$ font-black.

### 5.2 Single-Item Cognitive Focus
High-density multi-card layouts (e.g. 4 to 6 small competing cards crammed onto a slide) create severe visual noise and cognitive competition. The Northern UI/UX standard enforces **Single-Item Cognitive Focus**:

```
+---------------------------------------------------------------------------------------------------+
|                        SINGLE-ITEM COGNITIVE FOCUS LAYOUT PATTERN                                 |
+---------------------------------------------------------------------------------------------------+
|  [Header Zone] Kicker Pill (>=14px) | Category Tag (>=16px) | Slide Heading (44px-56px)           |
+---------------------------------------------------------------------------------------------------+
|                                                 |                                                 |
|  [LEFT RAIL: PROGRESSION / SELECTOR]            |  [RIGHT PANE: SINGLE HERO DETAIL PANE]          |
|  - Vertical sequential step chain (3-6 items)   |  - 1 Large, authoritative hero focus card       |
|  - Interactive hover preview:                   |  - Detail Heading: 40px-46px font-black         |
|      onMouseEnter -> setHoveredIdx(idx)         |  - Key Metric Badge: clamp(2.5rem, 4vw, 4.5rem) |
|      onClick      -> jumpToStep(idx)            |  - Comprehensive operational description        |
|  - Scale-up (scale-105) + Active Halo Ring      |  - Cryptographic verification / audit payload   |
|  - Completed items: Positive checkmark badge    |  - Smooth entrance fade on key={activeIdx}      |
|                                                 |                                                 |
+---------------------------------------------------------------------------------------------------+
```

### 5.3 Fluid Typography Scale (1920x1080 Canonical Canvas)

```css
/* Northern UI/UX Fluid Typography Tokens for 1920x1080 Virtual Canvas */
:root {
  /* Hero Display (Cover titles, single-figure impact statements) */
  --font-hero: clamp(3.00rem, 5.20vw, 5.50rem); /* 88px @ 1920x1080 */
  --line-height-hero: 1.05;
  --letter-spacing-hero: -0.035em;

  /* H1 Slide Title (Standard slide header: 44px-56px) */
  --font-h1: clamp(2.75rem, 3.10vw, 3.50rem); /* 44px-56px @ 1920x1080 */
  --line-height-h1: 1.10;
  --letter-spacing-h1: -0.025em;

  /* H2 Card/Detail Hero Header (Dynamic right-hand detail pane) */
  --font-h2: clamp(2.25rem, 2.50vw, 2.875rem); /* 40px-46px @ 1920x1080 */
  --line-height-h2: 1.20;
  --letter-spacing-h2: -0.015em;

  /* H3 Sub-group Header (Pillar titles, item headings, card headers) */
  --font-h3: clamp(1.25rem, 1.60vw, 1.75rem); /* 26px @ 1920x1080 */
  --line-height-h3: 1.35;
  --letter-spacing-h3: -0.010em;

  /* Body Large (Executive takeaway sentences, hero callouts) */
  --font-body-large: clamp(1.10rem, 1.25vw, 1.35rem); /* 20px @ 1920x1080 */
  --line-height-body-large: 1.50;
  --letter-spacing-body-large: 0.000em;

  /* Body Base (Card descriptions, bullet points, narrative flow) */
  --font-body-base: clamp(0.95rem, 1.05vw, 1.15rem); /* 16px @ 1920x1080 */
  --line-height-body-base: 1.60;
  --letter-spacing-body-base: 0.005em;

  /* Kicker / Capsule Pill (Strict Northern Standard >=14px-16px) */
  --font-kicker: clamp(0.875rem, 1.00vw, 1.125rem); /* 14px-18px @ 1920x1080 */
  --line-height-kicker: 1.25;
  --letter-spacing-kicker: 0.200em;

  /* Code Monospace (Terminal logs, telemetry values, parameters) */
  --font-code: clamp(0.85rem, 0.95vw, 1.05rem); /* 15px @ 1920x1080 */
  --line-height-code: 1.55;
  --letter-spacing-code: 0.000em;
}
```

### 5.4 Pure Live DOM Typography Mandate
1. **Zero Rasterized Text:** Under no condition may titles, subtitles, kickers, narrative paragraphs, KPI metrics, table cells, or code listings be rendered as raster images (PNG, JPEG, WebP, AVIF) or flattened into HTML5 `<canvas>` 2D bitmap contexts.
2. **100% Semantic HTML Elements:** Every textual node must render as an accessible HTML element (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<kbd>`, `<data>`, `<time>`).
3. **Screen-Reader & Assistive Technology Compliance:** All typography must exist within the live browser DOM accessibility tree, ensuring instant compatibility with screen readers (NVDA, VoiceOver, JAWS) satisfying WCAG 2.1 AAA Level 3 criteria.
4. **Copy-Paste & Text Selectability:** Presenters, executive attendees, and AI agents must be able to highlight, select, and copy any headline, code snippet, or metric figure in real time.

---

## 6. The Non-Negotiable Zero Yellow-on-Light Contrast Rule

### 6.1 Contrast Dilution Pathology
A severe failure in multi-theme presentation decks occurs when dark-mode accent colors—such as Electric Gold (`#EAB308`), Amber (`#F59E0B`), or Yellow (`#FACC15`)—are reused verbatim on light editorial canvases (`#FFFFFF` in `white-brand` or `#FAF7F0` in `paper-editorial`).

On pure white:
- `#EAB308` (Electric Gold): Contrast ratio is **$1.96:1$** (Catastrophic WCAG Failure).
- `#F59E0B` (Vivid Amber): Contrast ratio is **$2.34:1$** (Catastrophic WCAG Failure).
- `#FACC15` (Bright Yellow): Contrast ratio is **$1.35:1$** (Complete Illegibility).

### 6.2 The Zero Yellow-on-Light Invariant
- **Rule:** Under NO circumstances may yellow, light amber, or gold typography, status pills, or borders be displayed directly against white, cream, or light surfaces.
- **Minimum Light Contrast Threshold:** All text, badges, and focal indicators on light canvases MUST satisfy WCAG AAA standards:

$$C_R \ge 8.6:1$$

### 6.3 Automatic Inversion Dynamics
The presentation engine resolves this contrast pathology through automatic dual-mode token inversion:

1. **Light Mode (`isDark: false`):**
   - Inverts unqualified yellow/amber to high-contrast **Amber-900 / Burnt Ochre** (`#78350F` / `#92400E`), **Deep Royal Violet** (`#6D28D9`), or **Deep Crimson** (`#9F1239`).
   - Token mapping: `text-amber-900 bg-amber-100 border-amber-300` or `text-violet-900 bg-violet-100 border-violet-300`.
   - Contrast ratio on white: **$> 8.6:1$** (WCAG AAA Pass).
2. **Dark Mode (`isDark: true`):**
   - Preserves luminescent gold/amber against obsidian backgrounds:
   - Token mapping: `dark:text-amber-300 dark:bg-amber-500/15 dark:border-amber-500/30` or `hsl(var(--pres-accent))`.
   - Contrast ratio on obsidian (`#020617` / `#080808`): **$> 10.5:1$** (WCAG AAA Pass).

### Contrast Verification Matrix

| Theme | Polarity | Canvas Hex | Raw Accent | Light Render Token | Contrast vs Canvas | WCAG Status |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| `white-brand` | Light | `#FFFFFF` | `#EAB308` (Gold) | `#78350F` (Amber-900) | **9.24:1** | WCAG AAA Pass |
| `white-brand` | Light | `#FFFFFF` | `#8B5CF6` (Violet) | `#6D28D9` (Stop 7) | **5.85:1** | WCAG AA / AAA Lg |
| `paper-editorial` | Light | `#FAF7F0` | `#F59E0B` (Amber) | `#78350F` (Amber-900) | **8.84:1** | WCAG AAA Pass |
| `paper-editorial` | Light | `#FAF7F0` | `#1D4ED8` (Blue) | `#1E3A8A` (Stop 8) | **8.42:1** | WCAG AAA Pass |
| `true-dark` | Dark | `#020617` | `#6366F1` (Indigo) | `#A5B4FC` (Stop 3) | **11.2:1** | WCAG AAA Pass |
| `sunset-horizon` | Dark | `#0C0806` | `#EAB308` (Gold) | `#FDE047` (Stop 2) | **12.4:1** | WCAG AAA Pass |
| `cyber-neon` | Dark | `#000000` | `#06B6D4` (Cyan) | `#67E8F9` (Stop 2) | **14.8:1** | WCAG AAA Pass |

---

## 7. Complete Catalog of the 15 Next-Gen Archetypes

The 15 Next-Gen Archetypes address mission-critical boardroom narratives, leadership profiles, cultural frameworks, financial waterfalls, interactive simulations, and flat sovereign telemetry overviews. They are structured into **8 Multi-Step Operational Workflows** (`isMultiStep: true`) and **7 High-Density Flat Sovereign Telemetry Overviews** (`isMultiStep: false`).

```
+---------------------------------------------------------------------------------------------------+
|                        15 NEXT-GEN ENTERPRISE & OPERATIONAL ARCHETYPES (16-30)                    |
+---------------------------------------------------------------------------------------------------+
|  [ 8 MULTI-STEP OPERATIONAL WORKFLOWS ]                                                           |
|  16. executive-storytelling-hook    : Boardroom keynote tension, catalyst metrics, strategic shift|
|  17. leadership-synergy-duo         : Executive & tech leadership synergy, shared operational vision|
|  18. operational-work-culture       : Engineering values, blameless postmortems, cultural tenets  |
|  19. bento-capabilities-matrix      : Asymmetric bento grid, enterprise capabilities, key telemetry|
|  20. opportunity-cost-waterfall     : Financial friction, technical debt vs modernization waterfall|
|  21. benchmark-regional-pricing     : Multi-region cloud economics, compute tiers, SLA comparisons|
|  22. sprint-onboarding-roadmap      : Day 1-90 onboarding milestones, Golden Paths, autonomy gates|
|  23. simulated-browser-showcase     : Simulated browser window, URL bar, SSL badge, live telemetry|
|                                                                                                   |
|  [ 7 FLAT SOVEREIGN TELEMETRY OVERVIEWS ]                                                         |
|  24. client-testimonial-wall        : Enterprise testimonials, verified ROI proof, authenticity seal|
|  25. global-edge-mesh              : Anycast edge POP distribution, sub-50ms latency topology      |
|  26. ai-governance-safety-governor : Real-time LLM inference safety, prompt injection firewalls   |
|  27. developer-velocity-flywheel   : DORA acceleration, local dev loop feedback, CI/CD telemetry   |
|  28. strategic-decarbonization-esg : Science-Based Targets (SBTi), Scope 1-3 carbon reduction wedge|
|  29. market-tension-quadrant       : 2x2 strategic quadrant, execution velocity vs governance     |
|  30. executive-close-contact       : Decision requests, strategic next steps timeline, signoff    |
+---------------------------------------------------------------------------------------------------+
```

### Complete Archetype Architectural Catalog

| # | Global ID | Type Identifier | Component Name | TypeScript Interface | Business Function & Strategic Intent | Layout Category | Step Count Formula | Focus Dynamic |
|:---:|:---:|:---|:---|:---|:---|:---:|:---:|:---|
| **01** | **16** | `executive-storytelling-hook` | `ExecutiveStorytellingHookSlide` | `ExecutiveStorytellingHookSlideData` | Frames boardroom keynote tension, strategic paradoxes, and catalyst metrics to capture executive alignment in the opening 60 seconds. | Narrative Hook | $3$ Steps | Status Quo $\to$ Inevitable Inflection $\to$ Sovereign Opportunity |
| **02** | **17** | `leadership-synergy-duo` | `LeadershipSynergyDuoSlide` | `LeadershipSynergyDuoSlideData` | Profiles co-equal executive and technical leadership synergy (e.g. Chief Software Engineer & Strategic Product Director) with collaborative telemetry. | Leadership Profile | $2$ Steps | Executive 1 Focus $\to$ Executive 2 Focus (Unified Dynamic) |
| **03** | **18** | `operational-work-culture` | `OperationalWorkCultureSlide` | `OperationalWorkCultureSlideData` | Encodes engineering values, blameless rituals, and high-velocity cultural tenets into verifiable operational telemetry. | Culture Matrix | $\max(\text{tenets.length}, 1) = 4$ | Tenet 1 $\to$ Tenet 2 $\to$ Tenet 3 $\to$ Tenet 4 (Progressive Unpack) |
| **04** | **19** | `bento-capabilities-matrix` | `BentoCapabilitiesMatrixSlide` | `BentoCapabilitiesMatrixSlideData` | Organizes platform capabilities, AI engines, and enterprise integrations into an Apple/Linear-inspired asymmetric bento mosaic. | Bento Mosaic | $4$ Steps | Hero Cell $\to$ Primary Pillar $\to$ Telemetry Strip $\to$ Micro Metrics |
| **05** | **20** | `opportunity-cost-waterfall` | `OpportunityCostWaterfallSlide` | `OpportunityCostWaterfallSlideData` | Quantifies financial friction, legacy technical debt, and net ROI acceleration via an accounting-grade waterfall chart. | Financial Waterfall | $\max(\text{bars.length}, 1) = 5$ | Baseline Cost $\to$ Friction Losses $\to$ Modern Gains $\to$ Net Value |
| **06** | **21** | `benchmark-regional-pricing` | `BenchmarkRegionalPricingSlide` | `BenchmarkRegionalPricingSlideData` | Compares multi-region cloud economics, enterprise compute tiers, and SLA guarantees across global edge geographic zones. | Regional Pricing Table | $\max(\text{regions.length}, 1) = 3$ | US-East Baseline $\to$ EU-Central Expansion $\to$ APAC-South Mesh |
| **07** | **22** | `sprint-onboarding-roadmap` | `SprintOnboardingRoadmapSlide` | `SprintOnboardingRoadmapSlideData` | Directs developer/executive Day 1 to Day 90 onboarding milestones, Golden Paths, mentor pairing, and autonomy verification gates. | Onboarding Roadmap | $\max(\text{milestones.length}, 1) = 5$ | Day 1 $\to$ Day 14 $\to$ Day 30 $\to$ Day 60 $\to$ Day 90 Cutover |
| **08** | **23** | `simulated-browser-showcase` | `SimulatedBrowserShowcaseSlide` | `SimulatedBrowserShowcaseSlideData` | Renders a high-fidelity simulated browser window with macOS chrome controls, URL bar, SSL badge, and live interactive DOM application telemetry. | Browser Simulation | $3$ Steps | Window Chrome $\to$ Viewport Workspace $\to$ Interactive Telemetry Panel |
| **09** | **24** | `client-testimonial-wall` | `ClientTestimonialWallSlide` | `ClientTestimonialWallSlideData` | Displays verified enterprise customer testimonials, quantitative ROI metrics, and cryptographic customer authenticity seals. | Social Proof Masonry | $1$ Step (Flat) | High-Density Customer Quotes & Proof Points |
| **10** | **25** | `global-edge-mesh` | `GlobalEdgeMeshSlide` | `GlobalEdgeMeshSlideData` | Projects real-time Anycast edge network nodes, sub-50ms round-trip latency paths, and autonomous route failover health. | Infrastructure Topology | $1$ Step (Flat) | Global Edge POP Telemetry & Anycast Latency Map |
| **11** | **26** | `ai-governance-safety-governor` | `AiGovernanceSafetyGovernorSlide` | `AiGovernanceSafetyGovernorSlideData` | Inspects real-time LLM inference safety, prompt injection firewalls, hallucination filters, and regulatory audit logging gates. | AI Governance Pipeline | $1$ Step (Flat) | Multi-Stage AI Safety Guardrails & Audit Ledger |
| **12** | **27** | `developer-velocity-flywheel` | `DeveloperVelocityFlywheelSlide` | `DeveloperVelocityFlywheelSlideData` | Visualizes self-reinforcing developer velocity: fast local loops, instant CI/CD gates, preview environments, and live observability. | Velocity Flywheel | $1$ Step (Flat) | Continuous DORA Acceleration & Cycle Time Feedback |
| **13** | **28** | `strategic-decarbonization-esg` | `StrategicDecarbonizationEsgSlide` | `StrategicDecarbonizationEsgSlideData` | Details Science-Based Targets initiative (SBTi) Scope 1-3 greenhouse gas reductions, datacenter PUE efficiency, and carbon credit offsets. | ESG Sustainability | $1$ Step (Flat) | Net-Zero Decarbonization Wedges & SBTi Telemetry |
| **14** | **29** | `market-tension-quadrant` | `MarketTensionQuadrantSlide` | `MarketTensionQuadrantSlideData` | Positions platform capabilities on a 2x2 strategic quadrant (Execution Velocity vs. Architectural Governance) with competitor trajectories. | 2x2 Strategic Quadrant | $1$ Step (Flat) | Competitive Landscape & Sovereign Leadership Vector |
| **15** | **30** | `executive-close-contact` | `ExecutiveCloseContactSlide` | `ExecutiveCloseContactSlideData` | Boardroom closing slide delivering key decision requests, next steps timeline, QR verification badge, and executive contact credentials. | Executive Action Close | $1$ Step (Flat) | Strategic Call to Action & Executive Signoff |

---

## 8. Persona Governance & Executive Identity

Across all slide templates, personas, bios, org charts, test fixtures, and sample content, the corporate identity of **Alim Ul Karim** must be formatted with total consistency:

```
+---------------------------------------------------------------------------------------------------+
|                        CANONICAL EXECUTIVE PERSONA SPECIFICATION                                  |
+---------------------------------------------------------------------------------------------------+
|  Name: Alim Ul Karim                                                                              |
|  Strict Canonical Title: Chief Software Engineer                                                  |
|  Strictly Prohibited Titles: Founder, CEO, Co-Founder, Lead Architect, Full Stack Developer       |
|  Core Bio Statement:                                                                              |
|  "Chief Software Engineer architecting sovereign presentation engines, distributed event systems,  |
|  and high-assurance enterprise user interfaces with mathematical typography and zero layout drift."|
|  Executive Contact: alim@enterprise.internal | Keynote Bio Verified: Yes                          |
+---------------------------------------------------------------------------------------------------+
```

### Automated Linter Check
Any fixture, slide content, mock data, or markdown documentation containing forbidden titles such as `"CEO"`, `"Founder"`, or `"Alim Ul Karim, Lead Architect"` triggers a hard failure during verification gate execution.

---

## 9. Architectural Governance & Code Quality Gates

To ensure code maintainability, predictability, and safety across the presentation engine codebase, all authored components and contracts must satisfy the following non-negotiable rules:

1. **Affirmative Positive Booleans Only:**
   - Permitted prefixes: `is*`, `has*`, `can*`, `should*` (e.g. `isCompleted`, `isActive`, `hasGlow`, `isVerified`, `isMultiStep`).
   - Forbidden: Negative identifiers (`isNotActive`, `disabled`, `hidden`) and explicit boolean equality comparisons (`if (flag === true)`).
   - Inverted checks must utilize safe falsy guards or semantic positive alternatives (`isPending`, `isDraft`, `isOffline`).
2. **Component File Sizing Cap ($\le 100$ Lines per File):**
   - No single `.tsx` file may exceed 100 physical lines of code.
   - Complex slides must decompose into dedicated sub-component folders (`src/components/slides/packet/`, `src/components/slides/finops/`, etc.).
3. **Canonical Virtual Canvas (1920x1080):**
   - All coordinate layouts must align strictly to the 1920x1080 canvas budget.
4. **Zero Phantom Steps:**
   - Every single slide archetype must compute an authentic `stepCount >= 1` based on its data payload and consume `activeStep` dynamically.
5. **Zero Secrets & Pure Live Text:**
   - No private keys, real tokens, or rasterized typography bitmaps may exist in specifications or source code.
