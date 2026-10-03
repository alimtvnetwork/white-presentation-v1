# 01-Overview: Global PPT Motion, Flat Kinetic & 15 Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/36-global-ppt-motion-flat-kinetic-and-15-slide-archetypes/01-overview`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.8.0`  
> **Author:** Spec Author 01  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-03  
> **Domain:** Global PPT Corporate Theme Adaptation, 10-Step Gradient Ramps, 60/30/10 Visual Balance, 4-Plane Depth Hierarchy, Northern UI/UX Typography Standard (v1.3.3), Zero Yellow-on-Light Contrast Rule, 15 Modern Slide Archetypes (Archetypes 31-45)  

---

## 1. Executive Summary & Problem Space

Enterprise slide presentations delivered in executive boardrooms, global investor summits, mission-critical incident war rooms, and high-velocity engineering reviews suffer systematically from five catastrophic presentation pathologies:

1. **Visual Clutter & Cognitive Overload (Violating the 60/30/10 Visual Balance):**  
   Traditional corporate slide decks bombard executive stakeholders with chaotic, uncalibrated visual density. Slides often feature wall-to-wall saturated containers, competing neon badges, and arbitrary accent fills that exhaust visual attention. Without a mathematically governed ratio, audiences cannot isolate the primary strategic takeaway within the critical first 3 seconds of slide reveal.
2. **Flat Unanchored Spatial Layouts (Absence of 4-Plane Depth):**  
   Slide elements are commonly placed on a flat, undifferentiated single z-plane. Without optical layering, backdrop blur filters, or sub-pixel elevation shadows, complex system topologies and operational metrics appear visually dead. Audiences perceive no spatial connection between overarching context, active work-in-progress tasks, and floating telemetry HUD controls.
3. **Micro-Typography & Unreadable Header Hierarchies:**  
   Legacy decks frequently rely on timid, shrunken header typography ($\le 12\text{px}-14\text{px}$ kickers and $< 36\text{px}$ slide headings) that force board members to squint from the opposite end of a boardroom conference table. Crucial operational status kickers become unreadable noise, destroying executive authority.
4. **Contrast Dilution & The Yellow-on-Light Pathology:**  
   Vibrant yellow, amber, and gold accents—designed to glow against dark OLED canvases—suffer disastrous contrast degradation when switched to editorial white or cream paper themes. Luminance clashes drop contrast ratios below $2.0:1$, violating WCAG accessibility criteria and rendering mission-critical KPI digits and status indicators illegible.
5. **Abrupt Transitions & Disorienting Multi-Stage Leaps:**  
   When navigating multi-step operational workflows (e.g. zero-trust perimeters or incident triage flows), traditional tools replace the entire canvas instantaneously. This violent visual jump causes cognitive disorientation, resets viewer mental models, and obscures sequential progression.

The **Global PPT Motion, Flat Kinetic & 15 Slide Archetypes Architecture (v1.8.0)** solves these challenges through an uncompromising, mathematically grounded presentation framework:

- **Mathematical 60/30/10 Visual Balance:** Enforces 60% negative space background wash, 30% structural frosted container panels, and 10% vivid focal accents across the canonical $1920 \times 1080$ virtual canvas.
- **4-Plane Spatial Depth Hierarchy:** Implements strict elevation planes (Planes 0 to 3) with hardware-accelerated GPU transforms (`translateZ`), physical spring damping, and backdrop blur filters ($z=0, 10, 20, 50+$).
- **Northern UI/UX Typography Standard (v1.3.3):** Mandates $\ge 16\text{px}$ uppercase monospace kickers, $54\text{px}-62\text{px}$ slide headings, $40\text{px}-46\text{px}$ dynamic detail headings, and single-item cognitive focus.
- **Non-Negotiable Zero Yellow-on-Light Contrast Rule:** Guarantees WCAG AAA contrast ($C_R \ge 8.6:1$) by enforcing automatic dual-mode token inversion (amber-900 / violet-900 on light surfaces).
- **Pure Live DOM Typography Mandate:** 100% semantic, copy-paste selectable, accessible HTML typography with zero rasterized text graphics or flattened canvas bitmaps.
- **10 Authentic Master Themes & 10-Step Precision Gradient Ramps ($S_0$ to $S_9$):** Raw space-separated HSL triplet tokens (`H S% L%`) enabling seamless slash-alpha CSS compositing across light, dark, and OLED canvases.
- **Complete Catalog of 15 Modern Slide Archetypes (Archetypes 31-45):** 5 Operational & Architecture Step Workflows, 5 SaaS/Financial Flat Overviews, and 5 Executive Boardroom Layouts.
- **Strict Persona Governance:** Universal standardization of **Alim Ul Karim** as **"Chief Software Engineer"** with zero permitted role deviations.

```
+---------------------------------------------------------------------------------------------------+
|               GLOBAL PPT MOTION, FLAT KINETIC & 15 SLIDE ARCHETYPES ARCHITECTURE                  |
+---------------------------------------------------------------------------------------------------+
|  [Global PPT Authority]        --> 10 HSL Master Palettes, Fixed Dark HUD, Micro-Shadows, Capsules|
|  [Northern UI/UX Typography]   --> >=16px Kickers, 54px-62px Headings, Single-Item Cognitive Focus|
|  [Zero Yellow-on-Light Rule]   --> Strict AAA Inversion (Amber-900 / Violet-900 on Light Surfaces)|
|  [Kinetic Motion Engine]       --> 3-Phase Step Lifecycle (Completed 0.75, Active 1.00, Future 0.40)|
|  [15 Modern Archetypes (31-45)]--> 5 Step Workflows + 5 SaaS/Fin Overviews + 5 Boardroom Layouts  |
|  [Atmospheric Physics]         --> Damped Harmonic Springs (k=420 N/m, c=17 N*s/m, zeta=0.85)     |
|  [4-Plane Spatial Depth]       --> Surface (P0: z=0), Raised (P1: z=10), Elevated (P2: z=20),     |
|                                    Floating (P3: z=50+)                                           |
|  [Strict Persona Governance]   --> Canonical "Chief Software Engineer" Executive Identity         |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Global PPT Corporate Theme Adaptation & 10-Step Gradient Ramps

### 2.1 Raw Space-Separated HSL Triplet Standard

The presentation system enforces all color tokens as unadorned, space-separated **HSL triplets** (`H S% L%` without the outer `hsl(...)` wrapper). This token structure enables direct CSS and Tailwind slash-alpha compositing at arbitrary opacity levels without calculating RGB equivalents:

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

The engine provides 10 boardroom-calibrated master themes spanning pristine editorial light modes, archival research papers, and deep obsidian dark modes:

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

1. **Von Restorff Isolation Constraint:** The high-energy accent token must never be applied to broad card backgrounds, body paragraphs, or expansive structural borders. It is reserved strictly for:
   - The active step glowing halo ring (`box-shadow: 0 0 24px -2px hsl(var(--pres-accent) / 0.50)`).
   - Boardroom quantitative KPI numbers (`font-size: clamp(2.5rem, 4vw, 4.5rem)`).
   - High-priority status pills, active DAG nodes, and `.capsule-*` kicker pills.
   - Primary interactive controls and focal execution indicators.
2. **Contrast Enforcement:** The accent token against its immediate background must meet or exceed WCAG 2.1 AA standards ($4.5:1$ for normal text, $3.0:1$ for large text and graphical components). In light mode, typography relies on `--pres-accent-text` ($> 5.5:1$) or inverted ochre/violet tokens.

---

## 4. The 4-Plane Spatial Depth Hierarchy

Spatial depth on the sovereign 2D canvas is structured through an uncompromising **4-Plane Depth Hierarchy**. This multi-layered elevation model organizes visual density, establishes unambiguous visual hierarchy, and enables GPU-accelerated spring animations without layout recalculations:

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

Enterprise executive presentations require immediate typographic legibility from across a boardroom table or conference hall. The **Northern UI/UX Typography Standard (v1.3.3)** establishes strict baseline font sizing rules, eliminates micro-text clutter, and enforces single-item cognitive focus.

### 5.1 Elimination of Micro-Typography & Exact Thresholds

- **Strict Micro-Text Prohibition:** Under no circumstances may headers, kickers, navigation badges, or slide titles use micro-text ($\le 12\text{px}$).
- **Mandatory Kicker Badges:** Strictly $\ge 16\text{px}$ (`text-base font-mono font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full`).
- **Category Text Beside Kicker:** Strictly $\ge 16\text{px}$ (`text-base font-mono font-semibold` in high-contrast slate).
- **Slide Headings:** Strictly $54\text{px}-62\text{px}$ (font-black `font-ubuntu leading-none tracking-tight`).
- **Detail Headings (Right Pane Hero):** Strictly $40\text{px}-46\text{px}$ font-black.

### 5.2 Single-Item Cognitive Focus

High-density multi-card layouts (e.g. 4 to 6 small competing cards crammed onto a slide) create severe visual noise and cognitive competition. The Northern UI/UX standard enforces **Single-Item Cognitive Focus**:

```
+---------------------------------------------------------------------------------------------------+
|                        SINGLE-ITEM COGNITIVE FOCUS LAYOUT PATTERN                                 |
+---------------------------------------------------------------------------------------------------+
|  [Header Zone] Kicker Pill (>=16px) | Category Tag (>=16px) | Slide Heading (54px-62px)           |
+---------------------------------------------------------------------------------------------------+
|                                                 |                                                 |
|  [LEFT RAIL: PROGRESSION / SELECTOR]            |  [RIGHT PANE: SINGLE HERO DETAIL PANE]          |
|  - Vertical sequential step chain (3-5 items)   |  - 1 Large, authoritative hero focus card       |
|  - Interactive hover preview:                   |  - Detail Heading: 40px-46px font-black         |
|      onMouseEnter -> setHoveredIdx(idx)         |  - Key Metric Badge: clamp(2.5rem, 4vw, 4.5rem) |
|      onClick      -> jumpToStep(idx)            |  - Comprehensive operational description        |
|  - Scale-up (scale-105) + Glowing Halo Ring     |  - Cryptographic verification / audit payload   |
|  - Completed items: Positive checkmark badge    |  - Smooth entrance fade on key={activeIdx}      |
|                                                 |                                                 |
+---------------------------------------------------------------------------------------------------+
```

### 5.3 Fluid Typography Scale (1920x1080 Canonical Canvas)

```css
/* Northern UI/UX Fluid Typography Tokens for 1920x1080 Virtual Canvas */
:root {
  /* Hero Display (Cover titles, single-figure impact statements) */
  --font-hero: clamp(3.25rem, 5.50vw, 6.00rem); /* 96px @ 1920x1080 */
  --line-height-hero: 1.05;
  --letter-spacing-hero: -0.035em;

  /* H1 Slide Title (Standard slide header: 54px-62px) */
  --font-h1: clamp(3.375rem, 3.75vw, 3.875rem); /* 54px-62px @ 1920x1080 */
  --line-height-h1: 1.05;
  --letter-spacing-h1: -0.025em;

  /* H2 Card/Detail Hero Header (Dynamic right-hand detail pane) */
  --font-h2: clamp(2.50rem, 2.75vw, 2.875rem); /* 40px-46px @ 1920x1080 */
  --line-height-h2: 1.15;
  --letter-spacing-h2: -0.015em;

  /* H3 Sub-group Header (Pillar titles, item headings, card headers) */
  --font-h3: clamp(1.35rem, 1.70vw, 1.85rem); /* 28px @ 1920x1080 */
  --line-height-h3: 1.30;
  --letter-spacing-h3: -0.010em;

  /* Body Large (Executive takeaway sentences, hero callouts) */
  --font-body-large: clamp(1.15rem, 1.35vw, 1.45rem); /* 22px @ 1920x1080 */
  --line-height-body-large: 1.50;
  --letter-spacing-body-large: 0.000em;

  /* Body Base (Card descriptions, bullet points, narrative flow) */
  --font-body-base: clamp(1.00rem, 1.10vw, 1.20rem); /* 18px @ 1920x1080 */
  --line-height-body-base: 1.60;
  --letter-spacing-body-base: 0.005em;

  /* Kicker / Capsule Pill (Strict Northern Standard >=16px) */
  --font-kicker: clamp(1.00rem, 1.125vw, 1.25rem); /* 16px-20px @ 1920x1080 */
  --line-height-kicker: 1.25;
  --letter-spacing-kicker: 0.200em;

  /* Code Monospace (Terminal logs, telemetry values, parameters) */
  --font-code: clamp(0.90rem, 1.00vw, 1.10rem); /* 16px @ 1920x1080 */
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

## 7. Complete Catalog of 15 Modern Slide Archetypes (Archetypes 31-45)

The 15 Modern Slide Archetypes expand the presentation suite to cover advanced cloud migrations, zero-trust cybersecurity, generative AI flywheel loops, crisis incident commands, enterprise SaaS unit economics, fintech settlement ledgers, and executive boardroom mandates.

The archetypes are cleanly partitioned into three five-slide categories:
1. **5 Operational & Architecture Step Workflows (Archetypes 31-35):** Dynamic multi-step workflows featuring interactive progression rails, hover previews, and single-item cognitive focus (`isMultiStep: true`).
2. **5 SaaS/Financial Flat Overviews (Archetypes 36-40):** High-density financial, architecture, and compliance bento mosaics with instant executive overview (`isMultiStep: false`).
3. **5 Executive Boardroom Layouts (Archetypes 41-45):** High-stakes leadership, threat posture, hardware topology, and signoff action layouts (`isMultiStep: false` or multi-stage thesis).

```
+---------------------------------------------------------------------------------------------------+
|                        15 MODERN SLIDE ARCHETYPES CATALOG (ARCHETYPES 31-45)                      |
+---------------------------------------------------------------------------------------------------+
|  [ 5 OPERATIONAL & ARCHITECTURE STEP WORKFLOWS ]                                                  |
|  31. enterprise-cloud-migration-funnel : Legacy app discovery, containerization, cutover workflow |
|  32. zero-trust-identity-perimeter     : Continuous auth, posture check, microsegmentation steps  |
|  33. ai-data-flywheel-lifecycle        : Data ingestion, feature store, RLHF, inference lifecycle |
|  34. incident-command-war-room         : Incident triage, canary rollback, blameless postmortem   |
|  35. regulatory-gdpr-data-lineage      : Data subject consent, encryption vault, erasure audit    |
|                                                                                                   |
|  [ 5 SAAS/FINANCIAL FLAT OVERVIEWS ]                                                              |
|  36. saas-unit-economics-breakdown     : LTV/CAC, Magic Number, Net Revenue Retention, gross margin|
|  37. global-fintech-ledger-settlement  : Double-entry ledger, RTGS clearing, sub-second settlement|
|  38. multi-tenant-database-sharding    : Hash routing, shard rebalancing, cross-region replication|
|  39. continuous-compliance-posture     : SOC2 Type II, ISO 27001, HIPAA, PCI-DSS audit posture   |
|  40. developer-platform-catalog-mesh   : Internal developer portal, service catalog, DORA metrics |
|                                                                                                   |
|  [ 5 EXECUTIVE BOARDROOM LAYOUTS ]                                                                |
|  41. boardroom-market-inflection-thesis: Macro catalyst, inflection paradox, sovereign opportunity|
|  42. asymmetric-threat-defense-matrix  : Nation-state attack surfaces, defense-in-depth grid     |
|  43. hardware-accelerator-die-topology : Compute chiplet interconnect, HBM3e, TOPS/Watt thermal   |
|  44. customer-experience-journey-delta : Friction touchpoints vs modernized digital velocity delta|
|  45. executive-board-mandate-cta       : Capital authorization, immediate signing, key milestones|
+---------------------------------------------------------------------------------------------------+
```

### Complete Archetype Architectural Catalog

| # | Global ID | Type Identifier | Component Name | TypeScript Interface | Business Function & Strategic Intent | Layout Category | Step Count Formula | Focus Dynamic |
|:---:|:---:|:---|:---|:---|:---|:---:|:---:|:---|
| **01** | **31** | `enterprise-cloud-migration-funnel` | `EnterpriseCloudMigrationFunnelSlide` | `EnterpriseCloudMigrationFunnelSlideData` | Visualizes the end-to-end multi-phase migration of monolithic workloads to sovereign cloud-native microservices. | Operational Step Workflow | $4$ Steps | Discovery $\to$ Containerization $\to$ Hybrid Mesh $\to$ Autonomous Cutover |
| **02** | **32** | `zero-trust-identity-perimeter` | `ZeroTrustIdentityPerimeterSlide` | `ZeroTrustIdentityPerimeterSlideData` | Maps the continuous identity verification lifecycle, device attestation, and dynamic microsegmentation policy. | Security Architecture Workflow | $4$ Steps | Identity Assertion $\to$ Device Attestation $\to$ Contextual Policy $\to$ Microsegmentation Grant |
| **03** | **33** | `ai-data-flywheel-lifecycle` | `AiDataFlywheelLifecycleSlide` | `AiDataFlywheelLifecycleSlideData` | Illustrates self-reinforcing enterprise GenAI data collection, fine-tuning, RLHF alignment, and production telemetry. | AI Architecture Workflow | $5$ Steps | Ingestion $\to$ Feature Store $\to$ Fine-Tuning $\to$ RLHF Alignment $\to$ Production Inference Telemetry |
| **04** | **34** | `incident-command-war-room` | `IncidentCommandWarRoomSlide` | `IncidentCommandWarRoomSlideData` | Guides executive incident command through real-time anomaly detection, cross-functional triage, canary mitigation, and blameless signoff. | Operational War Room Workflow | $4$ Steps | Anomaly Detection $\to$ Swarm Triage $\to$ Canary Rollback $\to$ Postmortem Attestation |
| **05** | **35** | `regulatory-gdpr-data-lineage` | `RegulatoryGdprDataLineageSlide` | `RegulatoryGdprDataLineageSlideData` | Demonstrates end-to-end GDPR/CCPA data provenance, automated pseudonymization vaulting, and cryptographic audit proofs. | Compliance Lineage Workflow | $4$ Steps | Consent Ledger $\to$ Pseudonymization Vault $\to$ Cross-Border Sharding $\to$ Right-to-Erasure Attestation |
| **06** | **36** | `saas-unit-economics-breakdown` | `SaasUnitEconomicsBreakdownSlide` | `SaasUnitEconomicsBreakdownSlideData` | Delivers an investor-grade bento breakdown of enterprise SaaS unit economics, CAC payback, NRR, and cohort expansion. | Financial Economics Bento | $1$ Step (Flat) | High-Density Financial Bento: CAC, LTV, Magic Number, Net Retention Cohorts |
| **07** | **37** | `global-fintech-ledger-settlement` | `GlobalFintechLedgerSettlementSlide` | `GlobalFintechLedgerSettlementSlideData` | Maps global high-throughput double-entry ledger settlement, ISO 20022 messaging rails, and multi-currency liquidity pools. | Ledger Settlement Topology | $1$ Step (Flat) | Real-Time Gross Settlement (RTGS) Rails & Double-Entry Ledger Nodes |
| **08** | **38** | `multi-tenant-database-sharding` | `MultiTenantDatabaseShardingSlide` | `MultiTenantDatabaseShardingSlideData` | Explains distributed multi-tenant database partitioning, consistent hashing ring topology, and zero-downtime shard rebalancing. | Data Tier Sharding Mosaic | $1$ Step (Flat) | Consistent Hashing Ring, Tenant Partition Routers & Replica Matrix |
| **09** | **39** | `continuous-compliance-posture` | `ContinuousCompliancePostureSlide` | `ContinuousCompliancePostureSlideData` | Displays real-time automated audit posture across SOC 2 Type II, ISO 27001, HIPAA, and PCI-DSS control frameworks. | Compliance Governance Dashboard | $1$ Step (Flat) | Real-Time Automated Control Attestation Grid & Trust Score |
| **10** | **40** | `developer-platform-catalog-mesh` | `DeveloperPlatformCatalogMeshSlide` | `DeveloperPlatformCatalogMeshSlideData` | Synthesizes internal developer portal service catalogs, Golden Path template adoption, and continuous DORA velocity metrics. | Platform Engineering Mesh | $1$ Step (Flat) | Service Dependency Graph, Golden Paths & DORA Velocity Gauges |
| **11** | **41** | `boardroom-market-inflection-thesis` | `BoardroomMarketInflectionThesisSlide` | `BoardroomMarketInflectionThesisSlideData` | Establishes the strategic investment thesis by contrasting macro market inflection paradoxes against sovereign platform advantages. | Executive Strategic Thesis | $3$ Steps | Macro Paradigm Shift $\to$ Structural Industry Tension $\to$ Sovereign Strategic Moat |
| **12** | **42** | `asymmetric-threat-defense-matrix` | `AsymmetricThreatDefenseMatrixSlide` | `AsymmetricThreatDefenseMatrixSlideData` | Visualizes enterprise resilience against nation-state threat vectors, software supply-chain poisoning, and insider credential compromise. | Strategic Threat Defense Matrix | $1$ Step (Flat) | 4-Quadrant Attack Surface & Defense-in-Depth Mitigation Grid |
| **13** | **43** | `hardware-accelerator-die-topology` | `HardwareAcceleratorDieTopologySlide` | `HardwareAcceleratorDieTopologySlideData` | Details custom silicon compute chiplet topography, HBM3e high-bandwidth interconnects, and TOPS/Watt thermal dissipation curves. | Silicon Architecture Blueprint | $1$ Step (Flat) | Chiplet Interconnect Topology, Memory Bandwidth & TOPS/Watt Telemetry |
| **14** | **44** | `customer-experience-journey-delta` | `CustomerExperienceJourneyDeltaSlide` | `CustomerExperienceJourneyDeltaSlideData` | Contrasts legacy customer journey friction points against modernized AI-driven digital workflows with measurable cycle-time deltas. | CX Transformation Delta | $1$ Step (Flat) | Before/After Comparative Timeline with Quantitative Friction Reductions |
| **15** | **45** | `executive-board-mandate-cta` | `ExecutiveBoardMandateCtaSlide` | `ExecutiveBoardMandateCtaSlideData` | Secures boardroom signoff on strategic capital allocations, governance milestones, and immediate authorized project activation. | Boardroom Signoff & Action Mandate | $1$ Step (Flat) | Strategic Capital Authorization, Delivery Milestones & Signoff CTA |

---

## 8. Detailed Specifications for the 15 Archetypes

### 8.1 Operational & Architecture Step Workflows (Archetypes 31-35)

#### Archetype 31: `enterprise-cloud-migration-funnel`
- **Component:** `EnterpriseCloudMigrationFunnelSlide`
- **Identifier:** `enterprise-cloud-migration-funnel`
- **Data Contract:** `EnterpriseCloudMigrationFunnelSlideData`
- **Narrative Role:** Guides enterprise IT leadership through the migration of legacy mainframe and VM workloads to cloud-native microservices.
- **Workflow Steps ($4$ Steps):**
  1. *Legacy Estate Discovery & Dependency Mapping:* Automated agent scan of 1,200+ legacy workloads, cataloging dependencies and latency sensitivities.
  2. *Refactor & Containerization Fabric:* Packaging workloads into hardened OCI images with automated twelve-factor configuration injection.
  3. *Hybrid Service Mesh & Traffic Shadowing:* Establishing mutual TLS mesh and mirroring 10% of production traffic to validate behavioral parity.
  4. *Autonomous Cutover & Decommissioning:* Zero-downtime DNS shift, automated canary health verification, and legacy hardware spin-down.
- **Visual Mechanics:** Left-hand step progression rail with completed checkmarks; right-hand dynamic hero panel detailing migration KPIs (e.g. "99.995% Uptime During Cutover", "4.2x IOPS Throughput").

#### Archetype 32: `zero-trust-identity-perimeter`
- **Component:** `ZeroTrustIdentityPerimeterSlide`
- **Identifier:** `zero-trust-identity-perimeter`
- **Data Contract:** `ZeroTrustIdentityPerimeterSlideData`
- **Narrative Role:** Demonstrates zero-trust security architecture adhering strictly to NIST SP 800-207 principles.
- **Workflow Steps ($4$ Steps):**
  1. *Continuous Identity & MFA Assertion:* FIDO2 WebAuthn cryptographic hardware keys and biometric assertions.
  2. *Cryptographic Device Attestation:* TPM 2.0 chip integrity verification, OS patch compliance, and EDR health score.
  3. *Contextual Policy Decision Point (PDP):* Machine learning risk scoring evaluating geo-velocity, user anomaly metrics, and resource sensitivity.
  4. *Ephemeral Microsegmentation Grant:* Just-In-Time (JIT) short-lived TLS tunnel issuance with least-privilege RBAC bounds.
- **Visual Mechanics:** Glowing halo rings surrounding active security stages, dynamic cryptographic token inspection drawers.

#### Archetype 33: `ai-data-flywheel-lifecycle`
- **Component:** `AiDataFlywheelLifecycleSlide`
- **Identifier:** `ai-data-flywheel-lifecycle`
- **Data Contract:** `AiDataFlywheelLifecycleSlideData`
- **Narrative Role:** Demonstrates the compound feedback loop of proprietary enterprise data generating superior LLM/SLM models.
- **Workflow Steps ($5$ Steps):**
  1. *Multimodal Data Ingestion & Sanitization:* Ingesting unstructured documents, sanitizing PII, and vectorizing tokens.
  2. *Feature Store & Embeddings Indexing:* High-dimensional vector indexing with HNSW graphs for sub-10ms similarity retrieval.
  3. *Domain-Specific Supervised Fine-Tuning (SFT):* Parameter-Efficient Fine-Tuning (PEFT/LoRA) on enterprise knowledge corpora.
  4. *RLHF & Constitutional Safety Alignment:* Alignment against enterprise compliance rules with automated adversarial red-teaming.
  5. *Production Inference & Telemetry Feedback:* Serving models via vLLM with real-time prompt telemetry and automatic regression feedback.
- **Visual Mechanics:** Orbital vector diagram illustrating continuous flywheel acceleration; single-item cognitive focus detailing training throughput and perplexity reduction.

#### Archetype 34: `incident-command-war-room`
- **Component:** `IncidentCommandWarRoomSlide`
- **Identifier:** `incident-command-war-room`
- **Data Contract:** `IncidentCommandWarRoomSlideData`
- **Narrative Role:** Coordinates executive crisis management during high-severity platform outages or security incidents.
- **Workflow Steps ($4$ Steps):**
  1. *Automated Anomaly Detection:* P99 latency breach alert triggered across Kubernetes clusters; automated Slack war-room creation.
  2. *Cross-Functional Commander Triage:* SRE and security leads assemble; impact assessment determines blast radius of upstream DB lock.
  3. *Targeted Canary Rollback & Traffic Drain:* Execution of instant traffic drain to secondary AWS region; restoring 100% healthy requests in 140s.
  4. *Cryptographic Evidence Ledger & Postmortem:* Immutable logging of incident timeline, root cause analysis (RCA), and automated Jira remediation tasks.
- **Visual Mechanics:** Pulsing incident severity indicator (P1/CRITICAL), live timeline runner, and dynamic hero pane with MTTR metrics.

#### Archetype 35: `regulatory-gdpr-data-lineage`
- **Component:** `RegulatoryGdprDataLineageSlide`
- **Identifier:** `regulatory-gdpr-data-lineage`
- **Data Contract:** `RegulatoryGdprDataLineageSlideData`
- **Narrative Role:** Proves end-to-end data governance compliance to international privacy regulators and enterprise risk auditors.
- **Workflow Steps ($4$ Steps):**
  1. *Immutable Consent Ledger:* Recording user consent preferences with cryptographic timestamps in an append-only ledger.
  2. *Zero-Knowledge Pseudonymization Vault:* Decoupling PII from analytical data pipelines using format-preserving AES-256-GCM encryption.
  3. *Cross-Border Sharding & Data Residency:* Geo-fencing European data within Frankfurt clusters in strict adherence to EU Schrems II rules.
  4. *Automated Right-to-Erasure Attestation:* One-click orchestration of Article 17 "Right to be Forgotten" across 48 downstream databases.
- **Visual Mechanics:** Compliance seal verification badge, audit-ready data flow diagram, and cryptographic hash verification pills.

---

### 8.2 SaaS & Financial Flat Overviews (Archetypes 36-40)

#### Archetype 36: `saas-unit-economics-breakdown`
- **Component:** `SaasUnitEconomicsBreakdownSlide`
- **Identifier:** `saas-unit-economics-breakdown`
- **Data Contract:** `SaasUnitEconomicsBreakdownSlideData`
- **Narrative Role:** Comprehensive executive overview of core SaaS capital efficiency metrics for venture capitalists and board members.
- **Layout Architecture:** 4-cell Bento grid featuring:
  - Top Left: LTV/CAC Ratio ($4.8\times$) and Payback Period ($8.4\text{ months}$).
  - Top Right: Net Revenue Retention ($128\%$) with annual cohort expansion waterfalls.
  - Bottom Left: Magic Number ($1.24$) and Rule of 40 ($58\%$).
  - Bottom Right: Gross Margin breakdown ($82\%$ SaaS software margin vs $64\%$ blended services margin).

#### Archetype 37: `global-fintech-ledger-settlement`
- **Component:** `GlobalFintechLedgerSettlementSlide`
- **Identifier:** `global-fintech-ledger-settlement`
- **Data Contract:** `GlobalFintechLedgerSettlementSlideData`
- **Narrative Role:** Details real-time cross-border interbank clearing, settlement rails, and balance sheet integrity.
- **Layout Architecture:** Architectural settlement topology showing:
  - Multi-Currency Ingestion Rails (SWIFT ISO 20022, FedNow, SEPA Instant).
  - High-Throughput Double-Entry Ledger Core (100,000 tx/sec with ACID compliance).
  - Liquidity Management & Collateral Optimization nodes.
  - Sub-second Finality Settlement Status with real-time discrepancy indicators ($0.0000\%$).

#### Archetype 38: `multi-tenant-database-sharding`
- **Component:** `MultiTenantDatabaseShardingSlide`
- **Identifier:** `multi-tenant-database-sharding`
- **Data Contract:** `MultiTenantDatabaseShardingSlideData`
- **Narrative Role:** Explains horizontal database scaling, tenant isolation boundaries, and consistent hashing mechanics to engineering leadership.
- **Layout Architecture:**
  - Center: Consistent Hashing Ring with virtual node distribution.
  - Flanking Rails: Tenant Shard Routers (evaluating `tenantId` hash) and Primary/Replica cluster status across 3 cloud regions.
  - Telemetry Bar: Zero-downtime shard rebalancing status, cross-region replication lag ($< 12\text{ms}$).

#### Archetype 39: `continuous-compliance-posture`
- **Component:** `ContinuousCompliancePostureSlide`
- **Identifier:** `continuous-compliance-posture`
- **Data Contract:** `ContinuousCompliancePostureSlideData`
- **Narrative Role:** Proves continuous compliance security posture to enterprise procurement and security governance boards.
- **Layout Architecture:**
  - 4 Major Compliance Framework Cards: SOC 2 Type II ($100\%$ controls green), ISO 27001:2022 ($114/114$ controls passed), HIPAA Security Rule ($100\%$ compliant), PCI-DSS 4.0 ($100\%$ compliant).
  - Real-time Automated Evidence Collector feed showing latest cryptographic attestations.
  - Universal Trust Score badge ($99.8/100$) anchored on Plane 2.

#### Archetype 40: `developer-platform-catalog-mesh`
- **Component:** `DeveloperPlatformCatalogMeshSlide`
- **Identifier:** `developer-platform-catalog-mesh`
- **Data Contract:** `DeveloperPlatformCatalogMeshSlideData`
- **Narrative Role:** Showcases developer velocity gains driven by Internal Developer Portals (IDPs) and self-service Golden Paths.
- **Layout Architecture:**
  - Service Catalog Mesh showing 250+ microservices categorized by domain.
  - Golden Path Onboarding Velocity gauge ($14\text{ mins}$ from repo creation to staging deploy).
  - DORA 4 Metrics Panel: Deployment Frequency (On-Demand / $18\text{ deploys/day}$), Lead Time for Changes ($22\text{ mins}$), Change Failure Rate ($0.8\%$), Time to Restore Service ($11\text{ mins}$).

---

### 8.3 Executive Boardroom Layouts (Archetypes 41-45)

#### Archetype 41: `boardroom-market-inflection-thesis`
- **Component:** `BoardroomMarketInflectionThesisSlide`
- **Identifier:** `boardroom-market-inflection-thesis`
- **Data Contract:** `BoardroomMarketInflectionThesisSlideData`
- **Narrative Role:** Opens strategic executive keynotes by presenting an irresistible narrative tension between legacy stagnation and sovereign opportunity.
- **Layout Architecture:** Tri-pillar thesis structure:
  - Pillar 1: *The Macro Inflection:* Disruption vector altering market dynamics (e.g. generative AI reducing marginal cost of software to near zero).
  - Pillar 2: *The Industry Paradox:* Legacy enterprise incumbents trapped in technical debt and legacy pricing models.
  - Pillar 3: *The Sovereign Moat:* Why our platform architecture captures the resulting $100\text{B}+$ value pool.

#### Archetype 42: `asymmetric-threat-defense-matrix`
- **Component:** `AsymmetricThreatDefenseMatrixSlide`
- **Identifier:** `asymmetric-threat-defense-matrix`
- **Data Contract:** `AsymmetricThreatDefenseMatrixSlideData`
- **Narrative Role:** Assures executive board members that company digital assets are fortified against state-sponsored and sophisticated cyber adversaries.
- **Layout Architecture:** 2x2 Asymmetric Threat Matrix:
  - Threat Vectors: Nation-State APTs, Supply-Chain Poisoning, Insider Threat, Ransomware Swarms.
  - Fortification Pillars: Immutable Backups, Zero-Trust Micro-Enclaves, Ephemeral Credentials, Automated Deception Traps.
  - Executive Defense Status Seal with live vulnerability dwell time ($< 4\text{ hours}$).

#### Archetype 43: `hardware-accelerator-die-topology`
- **Component:** `HardwareAcceleratorDieTopologySlide`
- **Identifier:** `hardware-accelerator-die-topology`
- **Data Contract:** `HardwareAcceleratorDieTopologySlideData`
- **Narrative Role:** Briefs technical investors and executives on custom silicon, ASIC, and GPU chiplet interconnect architectures.
- **Layout Architecture:**
  - Micro-Architectural Silicon Layout: Compute Chiplets (NPU/GPU cores), High-Bandwidth Memory stacks (HBM3e @ 9.6 Gbps), Die-to-Die Interconnect (UCIe protocol).
  - Thermal & Power Telemetry: TOPS/Watt efficiency curve ($14.2\text{ TOPS/W}$), TDP envelope ($350\text{W}$).
  - Subpixel mathematical ink-stamp micro-shadows accentuating silicon trace vectors.

#### Archetype 44: `customer-experience-journey-delta`
- **Component:** `CustomerExperienceJourneyDeltaSlide`
- **Identifier:** `customer-experience-journey-delta`
- **Data Contract:** `CustomerExperienceJourneyDeltaSlideData`
- **Narrative Role:** Proves measurable customer satisfaction and conversion gains from digital transformation initiatives.
- **Layout Architecture:**
  - Dual Timeline Comparison:
    - *Legacy Friction Flow:* 7 manual handoffs, $14\text{ days}$ time-to-value, $42\%$ drop-off rate.
    - *Modernized Sovereign Flow:* Automated onboarding, $3\text{ minutes}$ time-to-value, $94\%$ completion rate.
  - Net Promoter Score (NPS) Delta Badge ($+46\text{ points}$) with verified customer sentiment telemetry.

#### Archetype 45: `executive-board-mandate-cta`
- **Component:** `ExecutiveBoardMandateCtaSlide`
- **Identifier:** `executive-board-mandate-cta`
- **Data Contract:** `ExecutiveBoardMandateCtaSlideData`
- **Narrative Role:** The definitive boardroom closing slide; secures formal vote, capital authorization, and sets operational milestones.
- **Layout Architecture:**
  - Capital & Resource Mandate: Explicit budget request ($12.5\text{M}$ Phase 1 authorization) with return horizons.
  - 90-Day Execution Timeline: 3 key delivery gates with executive accountability assignments.
  - Executive Authorization CTA Box: Formal signoff signature line, cryptographic voting QR verification badge, and contact credentials for **Alim Ul Karim, Chief Software Engineer**.

---

## 9. Persona Governance & Executive Identity

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

## 10. Architectural Governance & Code Quality Gates

To ensure code maintainability, predictability, and safety across the presentation engine codebase, all authored components and contracts must satisfy the following non-negotiable rules:

1. **Affirmative Positive Booleans Only:**
   - Permitted prefixes: `is*`, `has*`, `can*`, `should*` (e.g. `isCompleted`, `isActive`, `hasGlow`, `isVerified`, `isMultiStep`).
   - Forbidden: Negative identifiers (`isNotActive`, `disabled`, `hidden`) and explicit boolean equality comparisons (`if (flag === true)`).
   - Inverted checks must utilize safe falsy guards or semantic positive alternatives (`isPending`, `isDraft`, `isOffline`).
2. **Component File Sizing Cap ($\le 100$ Lines per File):**
   - No single `.tsx` file may exceed 100 physical lines of code.
   - Complex slides must decompose into dedicated sub-component folders (`src/components/slides/cloud/`, `src/components/slides/security/`, `src/components/slides/boardroom/`, etc.).
3. **Canonical Virtual Canvas (1920x1080):**
   - All coordinate layouts must align strictly to the 1920x1080 canvas budget ($2,073,600\text{ px}^2$).
4. **Zero Phantom Steps:**
   - Every single slide archetype must compute an authentic `stepCount >= 1` based on its data payload and consume `activeStep` dynamically.
5. **Zero Secrets & Pure Live Text:**
   - No private keys, real tokens, or rasterized typography bitmaps may exist in specifications or source code.
