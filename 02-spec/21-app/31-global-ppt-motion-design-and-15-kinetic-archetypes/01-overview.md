# 01-Overview: Global PPT Institutional Authority, Kinetic Motion Design & 15 Kinetic Archetypes

> **Specification Identifier:** `02-spec/21-app/31-global-ppt-motion-design-and-15-kinetic-archetypes/01-overview`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.5.0`  
> **Author:** Spec Author Subagent 01  
> **Created:** 2026-10-03  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Global PPT Institutional Authority, Flat Slide Show Kinetic Motion, Pure Live DOM Typography, 4-Plane Depth Hierarchy, 60/30/10 Visual Balance & Persona Governance  

---

## 1. Executive Summary & Narrative Arc Synthesis

The **White Presentation Engine** (`white-presentation-v1`) delivers an enterprise-grade presentation framework architected for sovereign web runtimes. It synthesizes two foundational presentation engineering paradigms into a unified, high-assurance presentation engine:

1. **Global PPT Institutional Authority (`global-ppt-v1`)**:
   - Boardroom-grade institutional gravitas, executive clarity, and bilateral structural comparisons.
   - Ten authentic master color themes parameterized via raw, space-separated **HSL triplet tokens** (`H S% L%`), unlocking runtime alpha-compositing without color-conversion overhead (`hsl(var(--pres-accent) / <alpha>)`).
   - Standardized capsule badges (`.capsule-gold`, `.capsule-ember`, `.capsule-cream`, `.capsule-ink`, `.capsule-outline`, `.capsule-meta`) engineered with automatic high-contrast inversions for light-canvas modes (`white-brand`, `paper-editorial`).
   - Luminance-calibrated optical micro-shadows (`--text-shadow-weight-*`) providing sub-pixel typography sharpness across both high-luminance and deep-abyss canvases.
   - Pinned dark Presenter HUD chrome (`--chrome-*`) providing invariant, high-contrast presenter telemetry independent of active slide themes.
   - Force-directed atmospheric physics simulation supporting 4 tuned presets (`servicesDefault`, `calm`, `dense`, `lively`).

2. **Kinetic Flat Slide Progression (`flat-slide-show`)**:
   - Intra-slide micro-stages driven by a deterministic **3-Phase Kinetic Lifecycle**:
     - `completed` (opacity `0.75`, scale `1.00`, verified checkmark pill badge, neutral border, Plane 1).
     - `active` (opacity `1.00`, scale `1.02`, elevated to Plane 2 with a glowing halo ring and damped harmonic spring physics).
     - `future` (opacity `0.40`, scale `0.98`, optical depth-of-field blur at `1.25px` on Plane 1).
   - Damped harmonic spring physics ($k = 420\text{ N/m}$, $c = 17\text{ N}\cdot\text{s/m}$, $m = 0.8\text{ kg}$, damping ratio $\zeta = 0.85$).
   - **Pure Live DOM Typography Mandate**: zero rasterized text graphics, 100% accessible, selectable, and screen-reader compliant.
   - **15 New Kinetic Slide Archetypes**: 8 multi-step interactive operational workflows and 7 flat sovereign telemetry overviews.

```
+---------------------------------------------------------------------------------------------------+
|                        WHITE PRESENTATION KINETIC SYNTHESIS ARCHITECTURE                          |
+---------------------------------------------------------------------------------------------------+
|  [Global PPT Authority]        --> 10 HSL Master Palettes, Fixed Dark HUD, Micro-Shadows, Capsules|
|  [Kinetic Flat Progression]    --> 3-Phase Step Lifecycle (Completed 0.75, Active 1.00, Future 0.40)|
|  [15 Kinetic Archetypes]       --> 8 Multi-Step Pipelines + 7 Flat Sovereign Telemetry Overviews  |
|  [Atmospheric Physics]         --> Deterministic Spring-Damped Pairwise Repulsion & Orbit Tuning  |
|  [Design System & Guidelines]  --> 60/30/10 Balance, 4-Plane Depth, Fluid Clamp Scale, <=100 Lines|
+---------------------------------------------------------------------------------------------------+
```

---

## 2. The 60/30/10 Visual Balance System

The visual architecture strictly enforces the **60/30/10 Visual Balance Rule** across the canonical $1920 \times 1080$ virtual canvas. This mathematical distribution guarantees corporate legibility, prevents visual fatigue during multi-hour executive sessions, and directs boardroom focus with precision.

```
+---------------------------------------------------------------------------------------------------+
|                          60/30/10 VISUAL BALANCE DISTRIBUTION MATRIX                              |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ 60% DOMINANT CANVAS BACKGROUND ]                                                               |
|  Tokens: --pres-canvas-bg, --pres-canvas-gradient, --pres-dot-matrix                              |
|  Function: Negative space, breathing room, background atmospheric depth                           |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | [ 30% STRUCTURAL SURFACE & CONTAINER FOREGROUND ]                                          |  |
|  | Tokens: --pres-card-bg, --pres-card-border, --pres-text-primary, --pres-text-secondary        |  |
|  | Function: Bento containers, glassmorphic panels, data grids, tabular borders, body copy    |  |
|  |                                                                                             |  |
|  |  +-----------------------+     +-----------------------+     +---------------------------+  |  |
|  |  | [ 10% HIGH-ENERGY     |     | [ 10% HIGH-ENERGY     |     | [ 10% HIGH-ENERGY         |  |  |
|  |  |   ACCENT TOKEN ]      |     |   ACCENT TOKEN ]      |     |   ACCENT TOKEN ]          |  |  |
|  |  | Tokens: --pres-accent |     | Tokens: --pres-accent |     | Tokens: --pres-accent     |  |  |
|  |  | Active step halo ring |     | Key KPI digits, status|     | Capsule badge, primary CTA|  |  |
|  |  +-----------------------+     +-----------------------+     +---------------------------+  |  |
|  | +-------------------------------------------------------------------------------------------+  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### Exact Token Assignments & Area Budgets

| Ratio | Semantic Role | Design Token | Dark Mode Mapping (`isDark: true`) | Light Mode Mapping (`isDark: false`) | Area Budget on 1920x1080 |
|:---:|:---|:---|:---|:---|:---:|
| **60%** | **Dominant Background** | `--pres-canvas-bg`<br>`--pres-canvas-gradient`<br>`--pres-dot-matrix` | Deep obsidian, navy slate, or dark emerald base (`#020617`, `#0B192C`, `#022C22`) with radial light wash | Archival cream or crisp editorial white (`#FFFFFF`, `#F5F0E6`, `#F8FAFC`) with subtle vignette | $\approx 1,244,160\text{ px}^2$ |
| **30%** | **Structural Foreground** | `--pres-card-bg`<br>`--pres-card-border`<br>`--pres-text-primary`<br>`--pres-text-secondary` | Frosted glass containers (`rgba(255,255,255,0.04)`), borders (`rgba(255,255,255,0.12)`), text (`#F8FAFC`, `#94A3B8`) | Elevated cards (`#FFFFFF`, `rgba(15,23,42,0.03)`), crisp borders (`rgba(15,23,42,0.10)`), text (`#0F172A`, `#475569`) | $\approx 622,080\text{ px}^2$ |
| **10%** | **High-Energy Accent** | `--pres-accent`<br>`--pres-accent-glow`<br>`--capsule-*`<br>`--pres-kpi-highlight` | Luminescent brand hue (Electric Indigo `#6366F1`, Mint `#10B981`, Coral `#F97316`, Cyan `#06B6D4`) | Deep sovereign brand hue (Rich Violet `#7C3AED`, Royal Blue `#1D4ED8`, Forest `#047857`) | $\approx 207,360\text{ px}^2$ |

### Mathematical Rules for the 10% Accent Token
1. **Von Restorff Isolation Constraint:** The accent token must never be applied to body paragraphs, large card backgrounds, or ambient borders. It is reserved exclusively for:
   - The active step halo ring (`box-shadow: 0 0 24px -2px hsl(var(--pres-accent) / 0.5)`).
   - Large quantitative KPI figures (`font-size: clamp(2.5rem, 4vw, 4.5rem)`).
   - Active status badges, focal nodes, and `.capsule-*` kicker pills.
   - Primary action buttons and focal vector paths (such as active DAG execution edges or canary shift meters).
2. **Contrast Enforcement:** The accent token against its immediate background must meet or exceed WCAG 2.1 AA standards ($4.5:1$ for normal text, $3.0:1$ for large text and graphical user interface components).

---

## 3. The 4-Plane Depth Hierarchy

Spatial depth on the sovereign 2D canvas is structured through an uncompromising **4-Plane Depth Hierarchy**. This multi-layered elevation model organizes visual density, establishes unambiguous visual hierarchy, and enables GPU-accelerated spring animations without layout recalculations.

```
=====================================================================================================
 PLANE 3: FLOATING PLANE (z-index: 30) - HUD, Active Halos, Modal Overlays, Floating Badges
   Transform: translateZ(48px) | Elevation: --elevation-3 | Blur: backdrop-blur(24px)
-----------------------------------------------------------------------------------------------------
 PLANE 2: ELEVATED PLANE (z-index: 20) - Active Step Cards, Focused DAG Nodes, Active Diff Chunks
   Transform: translateZ(24px) scale(1.02) | Elevation: --elevation-2 | Blur: backdrop-blur(16px)
-----------------------------------------------------------------------------------------------------
 PLANE 1: RAISED PLANE (z-index: 10) - Baseline Bento Containers, Inactive Cards, Grid Structures
   Transform: translateZ(8px) | Elevation: --elevation-1 | Blur: backdrop-blur(8px)
-----------------------------------------------------------------------------------------------------
 PLANE 0: SURFACE PLANE (z-index: 0) - Canvas Base, Atmospheric Gradients, Dot Matrix, Mesh Tracks
   Transform: translateZ(0px) | Elevation: --elevation-0 | Texture: SVG Grid / Canvas Canvas
=====================================================================================================
```

### Depth Plane Specifications & Tokens

```less
// CSS Custom Properties for 4-Plane Elevation Model
:root {
  // Surface Plane 0
  --elevation-0-z: 0;
  --elevation-0-shadow: none;
  --elevation-0-transform: translateZ(0px);

  // Raised Plane 1
  --elevation-1-z: 10;
  --elevation-1-shadow-dark: 0 12px 32px -6px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08);
  --elevation-1-shadow-light: 0 8px 24px -4px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(15, 23, 42, 0.08);
  --elevation-1-transform: translateZ(8px);
  --elevation-1-backdrop: blur(12px);

  // Elevated Plane 2
  --elevation-2-z: 20;
  --elevation-2-shadow-dark: 0 20px 48px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px hsl(var(--pres-accent) / 0.35);
  --elevation-2-shadow-light: 0 16px 36px -8px rgba(15, 23, 42, 0.12), 0 0 0 1px hsl(var(--pres-accent) / 0.40);
  --elevation-2-transform: translateZ(24px) scale(1.02);
  --elevation-2-backdrop: blur(16px);

  // Floating Plane 3
  --elevation-3-z: 30;
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
| **2** | **Elevated** | `20` | `translateZ(24px) scale(1.02)` | Current active step card, active diff hunk, executing DAG node, focused canary rollout tier, active RCA pillar. | Harmonic spring entry ($k=420$, $c=17$, $m=0.8$), active halo illumination. |
| **3** | **Floating** | `30` | `translateZ(48px)` | Permanent Dark Presenter HUD, interactive modal overlays, payload inspector drawers, cryptographic evidence toast. | Dynamic float with gentle spring dampening; immune to canvas theme shifts. |

---

## 4. Pure Live DOM Typography Mandate

To preserve accessibility, maintain high display fidelity, enable programmatic text inspection, and adhere strictly to enterprise software governance, the engine institutes an absolute **Pure Live DOM Typography Mandate**:

### Non-Negotiable Tenets:
1. **Zero Rasterized Text:** Under no condition may titles, subtitles, kickers, narrative paragraphs, KPI metrics, table cells, or code listings be rendered as raster images (PNG, JPEG, WebP, AVIF) or flattened into HTML5 `<canvas>` 2D bitmap contexts.
2. **100% Semantic HTML Elements:** Every textual node must render as an accessible HTML element (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<kbd>`, `<data>`, `<time>`).
3. **Screen-Reader & Assistive Technology Compliance:** All typography must exist within the live browser DOM accessibility tree, ensuring instant compatibility with screen readers (NVDA, VoiceOver, JAWS) satisfying WCAG 2.1 AAA Level 3 criteria.
4. **Copy-Paste & Text Selectability:** Presenters, executive attendees, and AI agents must be able to highlight, select, and copy any headline, code snippet, or metric figure in real time.
5. **Dynamic Font Loading & Font Display:** Primary display typography uses `Ubuntu` (Weights: 400, 500, 700, 800) for authoritative headers, `Poppins` (Weights: 300, 400, 500, 600) for body narrative, and `JetBrains Mono` / `Fira Code` for technical telemetry and code listings. All fonts are declared with `font-display: swap` to prevent layout reflows.

---

## 5. Fluid Typography Scale & Mathematical Formulas

Typography on the sovereign $1920 \times 1080$ virtual canvas scales smoothly between minimum mobile/tablet viewing bounds and maximum 4K/8K display stages using CSS `clamp()` expressions. All expressions are calibrated against the reference base resolution of $1920\text{px} \times 1080\text{px}$.

```
=====================================================================================================
                      FLUID TYPOGRAPHY HIERARCHY (1920x1080 CANONICAL CANVAS)
=====================================================================================================
 [HERO DISPLAY]   clamp(3.00rem, 5.20vw, 5.50rem)   | 88px @ 1920x1080 | Ubuntu 800 ExtraBold
 [H1 TITLE]       clamp(2.25rem, 3.20vw, 3.50rem)   | 56px @ 1920x1080 | Ubuntu 700 Bold
 [H2 SECTION]     clamp(1.75rem, 2.40vw, 2.50rem)   | 38px @ 1920x1080 | Ubuntu 700 Bold
 [H3 CARD HEAD]   clamp(1.25rem, 1.60vw, 1.75rem)   | 26px @ 1920x1080 | Poppins 600 SemiBold
 [BODY LARGE]     clamp(1.10rem, 1.25vw, 1.35rem)   | 20px @ 1920x1080 | Poppins 400 Regular
 [BODY BASE]      clamp(0.95rem, 1.05vw, 1.15rem)   | 16px @ 1920x1080 | Poppins 400 Regular
 [CAPTION / TAG]  clamp(0.75rem, 0.85vw, 0.95rem)   | 13px @ 1920x1080 | Poppins 500 Medium
 [CODE MONOSPACE] clamp(0.80rem, 0.90vw, 1.00rem)   | 14px @ 1920x1080 | JetBrains Mono 500
=====================================================================================================
```

### Canonical Mathematical Expressions

```css
/* Fluid Typography Token Definitions for 1920x1080 Virtual Canvas */
:root {
  /* Hero Display (Cover titles, single-figure impact statements) */
  --font-hero: clamp(3.00rem, 5.20vw, 5.50rem);
  --line-height-hero: 1.05;
  --letter-spacing-hero: -0.035em;

  /* H1 Slide Title (Standard slide header) */
  --font-h1: clamp(2.25rem, 3.20vw, 3.50rem);
  --line-height-h1: 1.15;
  --letter-spacing-h1: -0.025em;

  /* H2 Card/Section Header (Bento card headlines, stage headers) */
  --font-h2: clamp(1.75rem, 2.40vw, 2.50rem);
  --line-height-h2: 1.25;
  --letter-spacing-h2: -0.015em;

  /* H3 Sub-group Header (Pillar titles, item headings, card headers) */
  --font-h3: clamp(1.25rem, 1.60vw, 1.75rem);
  --line-height-h3: 1.35;
  --letter-spacing-h3: -0.010em;

  /* Body Large (Executive takeaway sentences, hero callouts) */
  --font-body-large: clamp(1.10rem, 1.25vw, 1.35rem);
  --line-height-body-large: 1.50;
  --letter-spacing-body-large: 0.000em;

  /* Body Base (Card descriptions, bullet points, narrative flow) */
  --font-body-base: clamp(0.95rem, 1.05vw, 1.15rem);
  --line-height-body-base: 1.60;
  --letter-spacing-body-base: 0.005em;

  /* Caption / Kicker / Capsule Pill (Meta tags, status pills, kickers) */
  --font-caption: clamp(0.75rem, 0.85vw, 0.95rem);
  --line-height-caption: 1.40;
  --letter-spacing-caption: 0.050em;

  /* Code Monospace (Terminal logs, telemetry values, parameters) */
  --font-code: clamp(0.80rem, 0.90vw, 1.00rem);
  --line-height-code: 1.55;
  --letter-spacing-code: 0.000em;
}
```

### Derivation & Viewport Invariant Scaling
When rendered inside `#presentation-root`, the container is scaled uniformly via CSS transform:
$$s = \min\left(\frac{W_{\text{viewport}}}{1920}, \frac{H_{\text{viewport}}}{1080}\right)$$
Because the virtual viewport width inside the container remains exactly $1920\text{px}$, $1.0\text{vw} = 19.2\text{px}$. The expressions yield exact, predictable pixel dimensions on the virtual canvas:
- `--font-hero`: $5.20 \times 19.2\text{px} = 99.84\text{px} \rightarrow \text{clamped to } 88\text{px}$ ($5.5\text{rem}$).
- `--font-h1`: $3.20 \times 19.2\text{px} = 61.44\text{px} \rightarrow \text{clamped to } 56\text{px}$ ($3.5\text{rem}$).
- `--font-h2`: $2.40 \times 19.2\text{px} = 46.08\text{px} \rightarrow \text{clamped to } 38.4\text{px}$ ($2.4\text{rem}$).
- `--font-h3`: $1.60 \times 19.2\text{px} = 30.72\text{px} \rightarrow \text{clamped to } 26\text{px}$ ($1.625\text{rem}$).
- `--font-body-large`: $1.25 \times 19.2\text{px} = 24.0\text{px} \rightarrow \text{clamped to } 20\text{px}$ ($1.25\text{rem}$).
- `--font-body-base`: $1.05 \times 19.2\text{px} = 20.16\text{px} \rightarrow \text{clamped to } 16\text{px}$ ($1.0\text{rem}$).
- `--font-caption`: $0.85 \times 19.2\text{px} = 16.32\text{px} \rightarrow \text{clamped to } 13\text{px}$ ($0.8125\text{rem}$).

---

## 6. Kinetic Step Progression & 3-Phase Item Lifecycle

To prevent visual flooding and guide boardroom focus through complex technical narratives, all slides leverage the **Flat Slide Show Kinetic Step Progression Engine**. Slides are partitioned into discrete micro-stages driven by `activeStep` (0-indexed).

```
+---------------------------------------------------------------------------------------------------+
|                        3-PHASE KINETIC STEP PROGRESSION LIFECYCLE                                 |
+---------------------------------------------------------------------------------------------------+
|  [PHASE 1: COMPLETED (itemIndex < activeStep)]                                                    |
|  - Opacity: 0.75 | Scale: 1.00 | Plane: 1 (Raised)                                                |
|  - Verified Checkmark Badge | Stable desaturated border | Readable historical context             |
|                                                                                                   |
|  [PHASE 2: ACTIVE (itemIndex === activeStep)]                                                     |
|  - Opacity: 1.00 | Scale: 1.02 | Plane: 2 (Elevated, z-index: 20)                                  |
|  - Active Halo Glow: 0 0 24px -2px hsl(var(--pres-accent) / 0.5)                                  |
|  - Damped Harmonic Spring Entry: k = 420 N/m, c = 17 N*s/m, m = 0.8 kg                            |
|                                                                                                   |
|  [PHASE 3: FUTURE (itemIndex > activeStep)]                                                       |
|  - Opacity: 0.40 | Scale: 0.98 | Plane: 1 (Raised)                                                |
|  - Optical Depth-of-Field Blur: filter: blur(1.25px)                                              |
|  - Prevents audience reading ahead; eliminates cognitive distraction                              |
+---------------------------------------------------------------------------------------------------+
```

### Phase Physics & Mathematical Properties

1. **Phase 1: `completed` (`itemIndex < activeStep`)**
   - **Opacity:** `0.75` (high enough to remain fully legible for reference, subdued enough not to compete with the focal point).
   - **Scale:** `1.00`.
   - **Visual Indicators:** Desaturated borders (`rgba(255,255,255,0.12)` or `rgba(15,23,42,0.10)`), subtle positive status badge (`CheckCircle2`), neutral text contrast.
2. **Phase 2: `active` (`itemIndex === activeStep`)**
   - **Opacity:** `1.00`.
   - **Scale:** `1.02`.
   - **Spatial Elevation:** Elevated to Plane 2 (`z-index: 20`).
   - **Illumination:** Active glowing halo ring:
     ```css
     box-shadow: 0 0 0 1px hsl(var(--pres-accent) / 0.60),
                 0 0 24px -2px hsl(var(--pres-accent) / 0.50),
                 0 16px 36px -8px rgba(0, 0, 0, 0.55);
     ```
   - **Spring Physics Dynamics:** Harmonic oscillator formula:
     $$m \frac{d^2 x}{dt^2} + c \frac{dx}{dt} + k x = 0$$
     Where $k = 420\text{ N/m}$, $c = 17\text{ N}\cdot\text{s/m}$, $m = 0.8\text{ kg}$, damping ratio $\zeta = \frac{c}{2\sqrt{km}} \approx 0.85$ (slightly underdamped for crisp arrival without jarring wobble).
3. **Phase 3: `future` (`itemIndex > activeStep`)**
   - **Opacity:** `0.40`.
   - **Scale:** `0.98`.
   - **Optical Depth-of-Field Blur:** **`filter: blur(1.25px)`**.
   - **Cognitive Purpose:** The calibrated $1.25\text{px}$ blur prevents rapid eye movement across upcoming content while keeping the visual container stable in the peripheral field.

### Progression Modality: Multi-Step vs. Flat Archetypes

The 15 archetypes are systematically segregated into two operational categories:

1. **Multi-Step Archetypes (`isMultiStep: true`)**:
   - `code-diff-comparison`: Iterates through diff chunks / AST refactoring steps.
   - `api-endpoint-inspector`: Iterates through query parameters, headers, and payload schema segments.
   - `database-schema-erd`: Highlights relational entities and foreign-key join paths stepwise.
   - `ai-agent-swarm-dag`: Steps through DAG agent nodes in topological execution order.
   - `canary-release-gauge`: Steps through canary traffic shifts (1% -> 5% -> 25% -> 100%).
   - `incident-rca-postmortem`: Steps sequentially through the 4 RCA pillars (Immediate Cause, Root Cause, Impact, Remediation).
   - `audio-waveform-studio`: Steps through multichannel audio tracks and phoneme alignments.
   - `verifiable-audit-ledger`: Steps sequentially through cryptographic evidence checks and audit gates.
   - *Step Formula:* $\text{stepCount} = \max(\text{items.length}, 1)$.

2. **Flat Sovereign Archetypes (`isMultiStep: false`)**:
   - `global-cloud-edge-mesh`: High-density live telemetry and regional mesh matrix.
   - `security-threat-model`: Zero-trust attack surface and defense perimeter.
   - `financial-burn-runway`: Venture capital runway horizon and net-burn milestone model.
   - `bento-kpi-mosaic`: Asymmetric bento grid metric mosaic with trend sparklines.
   - `slas-and-uptime-status`: 99.999% public health matrix and 90-day incident log.
   - `hardware-silicon-spec`: Silicon die block breakdown and thermal envelope spec.
   - `cohort-retention-heatmap`: Investor SaaS compound cohort triangle and NRR summary.
   - *Step Formula:* $\text{stepCount} = 1$ (invariant single-stage focal telemetry).

---

## 7. Master Color Theming & Token Architecture

### 10 Authentic Global PPT Master Palettes
Color theming is standardized through unadorned **HSL triplet tokens** (`H S% L%`) without the outer `hsl(...)` wrapper. This enables CSS slash-alpha syntax across components: `hsl(var(--pres-accent) / 0.25)`.

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

### The `.capsule-*` Badge Hierarchy & Light-Theme Contrast Inversion
Badges and kickers utilize specialized capsule classes defined in `presentation.less`:
- `.capsule-gold`: High-authority certifications, prestige milestones, enterprise badges.
- `.capsule-ember`: Critical alerts, rapid iteration sprints, urgent KPI metrics.
- `.capsule-cream`: Neutral technical metadata, architecture layers, runtime parameters.
- `.capsule-ink`: Deep contrast identifiers, terminal tags, code execution stages.
- `.capsule-outline`: Secondary category chips, protocol flags, filter indicators.
- `.capsule-meta`: Subtle timestamps, author credits, version badges.

#### Inversion Rule for Light Themes (`isDark: false`):
On light canvases (`white-brand`, `paper-editorial`), translucent white pill backgrounds become washed out and unreadable. The presentation engine automatically enforces **Light-Theme Capsule Contrast Inversions**:
```less
.theme-light {
  .capsule-gold {
    background: rgba(180, 83, 9, 0.08);
    border-color: rgba(180, 83, 9, 0.35);
    color: #92400E;
  }
  .capsule-ember {
    background: rgba(225, 29, 72, 0.08);
    border-color: rgba(225, 29, 72, 0.30);
    color: #BE123C;
  }
  .capsule-cream, .capsule-outline {
    background: rgba(15, 23, 42, 0.05);
    border-color: rgba(15, 23, 42, 0.15);
    color: #0F172A;
  }
}
```

### Permanent Dark Presenter HUD Chrome (`--chrome-*`)
To eliminate visual disorientation caused by bright flashes during rapid slide transitions, the Presenter HUD navigation bar remains permanently locked in a dark glassmorphic container:
```less
:root {
  --chrome-bg: rgba(15, 23, 42, 0.94);
  --chrome-border: rgba(255, 255, 255, 0.12);
  --chrome-text: #F8FAFC;
  --chrome-subtext: #94A3B8;
  --chrome-accent: #6366F1;
  --chrome-shadow: 0 20px 48px -12px rgba(0, 0, 0, 0.70);
  --chrome-backdrop: blur(20px);
}
```

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
   - Complex slides must decompose into dedicated sub-component folders (`src/components/slides/code-diff/`, `src/components/slides/edge-mesh/`, etc.).
3. **Canonical Virtual Canvas (1920x1080):**
   - All coordinate layouts must align strictly to the 1920x1080 canvas budget.
4. **Zero Phantom Steps:**
   - Every single slide archetype must compute an authentic `stepCount >= 1` based on its data payload and consume `activeStep` dynamically.
5. **Zero Secrets & Pure Live Text:**
   - No private keys, real tokens, or rasterized typography bitmaps may exist in specifications or source code.
