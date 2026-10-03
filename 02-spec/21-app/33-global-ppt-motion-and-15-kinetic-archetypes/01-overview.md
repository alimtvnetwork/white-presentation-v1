# 01-Overview: Global PPT Synthesis, Kinetic Motion Architecture & 15 Sovereign Archetypes

> **Specification Identifier:** `02-spec/21-app/33-global-ppt-motion-and-15-kinetic-archetypes/01-overview`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.7.0`  
> **Author:** Spec Subagent 01  
> **Created:** 2026-10-03  
> **Domain:** Global PPT Kinetic Synthesis, Executive Visual Balance, 4-Plane Spatial Depth, 3-Phase Step Progression, Fluid Typography & Persona Governance  

---

## 1. Executive Summary & Problem Space

Enterprise slide presentations in high-stakes boardroom, technical keynotes, and investor sessions frequently suffer from five critical architectural failures:

1. **Visual Clutter & Cognitive Overload:** Slides overwhelm executive audiences with dense, uncalibrated visual weight, failing the foundational **60/30/10 Visual Balance Rule**.
2. **Flat Unanchored Spatial Layouts:** Content exists on an undifferentiated single z-plane without optical hierarchy, causing visual fatigue, breaking narrative focus, and destroying spatial continuity.
3. **Rasterized Typography & Inaccessible Graphics:** Text rendered as static images or baked into HTML5 `<canvas>` bitmaps destroys accessibility, prevents live DOM selection, and blurs on high-DPI retina displays.
4. **Disorienting Jumps Between Complex Slides:** Abrupt slide transitions without intra-slide kinetic stepping overwhelm executive audiences before the narrative can be absorbed.
5. **Inconsistent Theming & Light-Theme Contrast Drift:** Unanchored color tokens break contrast requirements in light modes, washing out critical accent colors below acceptable readability thresholds, while executive titles drift unpredictably across decks.

The **Global PPT Synthesis & Kinetic Motion Architecture** resolves these challenges through a unified presentation framework:

- **Mathematical 60/30/10 Visual Distribution:** 60% ambient negative space wash, 30% structural glassmorphic surfaces, and 10% high-energy focal accents.
- **4-Plane Depth Hierarchy:** Strict z-index elevation planes (Planes 0 to 3) utilizing GPU-accelerated sub-pixel depth transforms, harmonic spring physics, and backdrop blur filters.
- **Pure Live DOM Typography Mandate:** 100% accessible, selectable HTML typography utilizing responsive `clamp()` curves, eliminating rasterized text graphics entirely.
- **Intra-Slide Kinetic Progression Engine:** 3-phase lifecycle state machine (`completed` at 0.75 opacity with positive checkmark badge, `active` at 1.00 opacity with concentric halo rings and spring dampening, `future` at 0.40 opacity with calibrated $1.25\text{px}$ optical depth-of-field blur).
- **10 Authentic Master Themes:** Unadorned HSL triplet tokens (`accentHsl`, `canvasBgHsl`) enabling slash-alpha opacity syntax, 10-step mathematical gradient ramps ($S_0$–$S_9$), and permanent dark presenter HUD chrome.
- **Light-Theme Contrast Enforcement:** Dedicated `--pres-accent-text` token resolving to Stop 7/8 (`#6D28D9` for violet) in light mode to guarantee WCAG AAA compliance ($> 5.5:1$).
- **Strict Persona Governance:** Universal standardization of **Alim Ul Karim** as **"Chief Software Engineer"** with zero permitted role deviations.
- **15 New Sovereign Operations Slide Archetypes:** 8 multi-step interactive operational workflows and 7 flat sovereign telemetry overviews.

```
+---------------------------------------------------------------------------------------------------+
|                        GLOBAL PPT KINETIC SYNTHESIS ARCHITECTURE                                  |
+---------------------------------------------------------------------------------------------------+
|  [Global PPT Authority]        --> 10 HSL Master Palettes, Fixed Dark HUD, Micro-Shadows, Capsules|
|  [Kinetic Motion Engine]       --> 3-Phase Step Lifecycle (Completed 0.75, Active 1.00, Future 0.40)|
|  [15 Slide Archetypes]         --> 8 Multi-Step Operational Workflows + 7 Flat Sovereign Overviews|
|  [Atmospheric Physics]         --> Damped Harmonic Springs (k=420 N/m, c=17 N*s/m, zeta=0.85)     |
|  [Design System & Guidelines]  --> 60/30/10 Balance, 4-Plane Depth, Fluid Clamp Scale, <=100 Lines|
|  [Strict Persona Governance]   --> Canonical "Chief Software Engineer" Executive Identity         |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. The 60/30/10 Visual Balance System

The presentation canvas strictly enforces the **60/30/10 Visual Balance Rule** across the canonical $1920 \times 1080$ virtual canvas. This mathematical distribution guarantees corporate legibility, prevents cognitive fatigue during multi-hour executive reviews, and directs executive attention with surgical precision.

```
+---------------------------------------------------------------------------------------------------+
|                          60/30/10 VISUAL BALANCE DISTRIBUTION MATRIX                              |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ 60% DOMINANT CANVAS BACKGROUND ]                                                               |
|  Tokens: --pres-canvas-bg, --pres-canvas-gradient, --pres-dot-matrix                              |
|  Function: Negative space, breathing room, background atmospheric depth                           |
|  Pixel Budget: ~1,244,160 px^2 of the 1920x1080 canvas                                            |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | [ 30% STRUCTURAL SURFACE & CONTAINER FOREGROUND ]                                          |  |
|  | Tokens: --pres-card-bg, --pres-card-border, --pres-text-primary, --pres-text-secondary        |  |
|  | Function: Bento containers, glassmorphic panels, data grids, tabular borders, body copy    |  |
|  | Pixel Budget: ~622,080 px^2 of the 1920x1080 canvas                                         |  |
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
| **10%** | **High-Energy Accent** | `--pres-accent`<br>`--pres-accent-glow`<br>`--capsule-*`<br>`--pres-kpi-highlight`<br>`--pres-accent-text` | Luminescent brand hue (Electric Indigo `#6366F1`, Mint `#10B981`, Coral `#F97316`, Cyan `#06B6D4`) | Deep sovereign brand hue (Rich Violet `#7C3AED` or `#6D28D9`, Royal Blue `#1D4ED8`, Forest `#047857`) | $\approx 207,360\text{ px}^2$ |

### Mathematical Rules for the 10% Accent Token

1. **Von Restorff Isolation Constraint:** The high-energy accent token must never be applied to large card backgrounds, body paragraphs, or broad structural boundaries. It is reserved exclusively for:
   - The active step halo ring (`box-shadow: 0 0 24px -2px hsl(var(--pres-accent) / 0.50)`).
   - Boardroom quantitative KPI numbers (`font-size: clamp(2.5rem, 4vw, 4.5rem)`).
   - High-priority status pills, active DAG nodes, and `.capsule-*` kicker pills.
   - Primary interactive controls and focal execution indicators.
2. **Contrast Enforcement:** The accent token against its immediate background must meet or exceed WCAG 2.1 AA standards ($4.5:1$ for normal text, $3.0:1$ for large text and graphical components). In light mode, typography relies on `--pres-accent-text` ($> 5.5:1$).

---

## 3. The 4-Plane Depth Hierarchy

Spatial depth on the sovereign 2D canvas is structured through an uncompromising **4-Plane Depth Hierarchy**. This multi-layered elevation model organizes visual density, establishes unambiguous visual hierarchy, and enables GPU-accelerated spring animations without layout recalculations.

```
=====================================================================================================
 PLANE 3: FLOATING PLANE (z-index: 30) - HUD, Active Halos, Modal Overlays, Floating Badges
   Transform: translateZ(48px) | Elevation: --elevation-3 | Blur: backdrop-blur(24px)
-----------------------------------------------------------------------------------------------------
 PLANE 2: ELEVATED PLANE (z-index: 20) - Active Step Cards, Focused DAG Nodes, Active SLA Pillars
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
  // Surface Plane 0
  --elevation-0-z: 0;
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

Typography on the sovereign $1920 \times 1080$ virtual canvas scales smoothly between minimum viewing bounds and maximum display stages using CSS `clamp()` expressions. All expressions are calibrated against the reference base resolution of $1920\text{px} \times 1080\text{px}$.

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

## 6. Kinetic Step Progression Engine

The intra-slide kinetic progression engine choreographs multi-stage slides without triggering disruptive full-screen page turns. As the presenter presses `Space` or `ArrowRight`, the engine advances `activeStep` within the active slide until `activeStep === maxSteps - 1`, transitioning to the next slide only when intra-slide steps are exhausted.

```
+---------------------------------------------------------------------------------------------------+
|                        3-PHASE STEP LIFECYCLE STATE MACHINE                                       |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ PHASE 1: COMPLETED ] (itemIndex < activeStep)                                                  |
|  - Opacity: 0.75                                                                                  |
|  - Scale: 1.00 (Plane 1)                                                                          |
|  - Border: Desaturated neutral rgba(255,255,255,0.12) / rgba(15,23,42,0.10)                       |
|  - Indicator: Positive verification checkmark badge (CheckCircle2)                                |
|  - Remains legible for context retention without competing with current focus                     |
|                                                                                                   |
|  [ PHASE 2: ACTIVE ] (itemIndex === activeStep)                                                   |
|  - Opacity: 1.00                                                                                  |
|  - Scale: 1.02 elevated to Plane 2 (translateZ(24px))                                             |
|  - Illumination: Active Concentric Halo Ring (@keyframes haloRingConcentric)                      |
|  - Harmonic Spring: k = 420 N/m, c = 17 N*s/m, m = 0.8 kg, zeta = 0.85                           |
|  - Focal point of executive narrative and audio-visual focus                                      |
|                                                                                                   |
|  [ PHASE 3: FUTURE ] (itemIndex > activeStep)                                                     |
|  - Opacity: 0.40                                                                                  |
|  - Scale: 0.98 (Plane 1)                                                                          |
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
   - **Illumination:** Active glowing concentric halo ring:
     ```css
     box-shadow: 0 0 0 1px hsl(var(--pres-accent) / 0.60),
                 0 0 24px -2px hsl(var(--pres-accent) / 0.50),
                 0 16px 36px -8px rgba(0, 0, 0, 0.55);
     ```
   - **Spring Physics Dynamics:** Harmonic oscillator formula:
     $$m \frac{d^2 x}{dt^2} + c \frac{dx}{dt} + k x = 0$$
     Where $k = 420\text{ N/m}$, $c = 17\text{ N}\cdot\text{s/m}$, $m = 0.8\text{ kg}$, damping ratio $\zeta = \frac{c}{2\sqrt{km}} \approx 0.85$ (harmonic underdamped calibration for crisp arrival without jarring wobble).
3. **Phase 3: `future` (`itemIndex > activeStep`)**
   - **Opacity:** `0.40`.
   - **Scale:** `0.98`.
   - **Optical Depth-of-Field Blur:** **`filter: blur(1.25px)`**.
   - **Cognitive Purpose:** The calibrated $1.25\text{px}$ blur prevents rapid eye movement across upcoming content while keeping the visual container stable in the peripheral field.

---

## 7. Overview of the 15 Sovereign Operations Slide Archetypes

The 15 archetypes are systematically segregated into two operational categories: **8 Multi-Step Operational Workflows** (`isMultiStep: true`) and **7 Flat Sovereign Telemetry Overviews** (`isMultiStep: false`).

```
+---------------------------------------------------------------------------------------------------+
|                        15 SOVEREIGN OPERATIONS SLIDE ARCHETYPES                                   |
+---------------------------------------------------------------------------------------------------+
|  [ 8 MULTI-STEP OPERATIONAL WORKFLOWS ]                                                           |
|  1. executive-governance-matrix  : Board governance committees, charter mandates & approvals      |
|  2. okr-cascade-alignment        : Company vision down to team-level OKRs & measurable KPIs       |
|  3. competitive-battlecard       : Competitive moat pillars, objection handling & win themes      |
|  4. launch-readiness-checklist   : Stage-gate verification across InfoSec, SRE, QA & Architecture |
|  5. developer-gateway-sandbox    : API authentication, routing, schema validation & mock response |
|  6. rag-pipeline-topology        : Ingestion, chunking, vector embeddings, reranking & synthesis  |
|  7. soc-incident-war-room        : Triage, containment, eradication, telemetry & postmortem      |
|  8. merkle-tree-state-ledger     : Cryptographic proofs, leaf verification & state audit trail    |
|                                                                                                   |
|  [ 7 FLAT SOVEREIGN TELEMETRY OVERVIEWS ]                                                         |
|  1. cloud-cost-finops-optimizer  : Infrastructure unit economics, spend breakdown & cost levers   |
|  2. customer-sentiment-radar     : Multi-axis sentiment radar, NPS/CSAT cohorts & customer voice  |
|  3. investor-cap-table-waterfall : Equity classes, dilution waterfalls & liquidation preferences   |
|  4. realtime-event-stream-fabric : Streaming throughput, partition lag, DLQs & broker fabric      |
|  5. supply-chain-risk-matrix     : Multi-tier supplier exposure, lead times & resilience metrics  |
|  6. talent-competency-radar      : Engineering skill matrices across seniority tiers              |
|  7. sustainability-esg-scorecard : Scope 1/2/3 carbon footprint, offset pools & renewable PPAs    |
+---------------------------------------------------------------------------------------------------+
```

### Archetype Architectural Catalog

| # | Archetype ID | Category | Multi-Step | Step Formula | Core Narrative Function | Key Data Entities |
|:---:|:---|:---:|:---:|:---|:---|:---|
| **01** | `executive-governance-matrix` | Operational Workflow | `true` | `items.length` | Boardroom committee resolutions, voting quotas, policy sign-offs. | Committees, mandates, quorum, chairs, voting status. |
| **02** | `okr-cascade-alignment` | Operational Workflow | `true` | `tiers.length` | Strategic top-line OKRs cascading down to quarterly deliverables. | Corporate objectives, key results, owners, progress %. |
| **03** | `competitive-battlecard` | Operational Workflow | `true` | `pillars.length` | Moat comparison against Tier-1 rivals with objection playbooks. | Competitors, feature matrix, objections, win criteria. |
| **04** | `launch-readiness-checklist` | Operational Workflow | `true` | `gates.length` | Operational readiness stage-gates across InfoSec, QA, Performance. | Stage gates, signoffs, SLA tolerances, blocker status. |
| **05** | `developer-gateway-sandbox` | Operational Workflow | `true` | `stages.length` | Interactive API pipeline execution with header & payload telemetry. | Auth tokens, rate limits, request schema, response body. |
| **06** | `rag-pipeline-topology` | Operational Workflow | `true` | `stages.length` | Multi-stage AI retrieval pipeline from document to LLM response. | Ingestion, chunking, embeddings, vector index, reranker. |
| **07** | `soc-incident-war-room` | Operational Workflow | `true` | `phases.length` | High-severity incident response timeline and postmortem hardening. | Severity, timeline, impacted services, triage actions. |
| **08** | `merkle-tree-state-ledger` | Operational Workflow | `true` | `nodes.length` | Cryptographic state tree traversal, proof hashes, and audit ledger. | Leaf hashes, intermediate nodes, root hash, proofs. |
| **09** | `cloud-cost-finops-optimizer` | Flat Telemetry | `false` | `1` | Multi-cloud compute spend optimization, reserved instances & waste. | Monthly burn, unit economics, waste levers, savings %. |
| **10** | `customer-sentiment-radar` | Flat Telemetry | `false` | `1` | Multi-axis customer satisfaction radar, churn propensity, NPS. | NPS score, CSAT, sentiment axes, churn cohort risk. |
| **11** | `investor-cap-table-waterfall` | Flat Telemetry | `false` | `1` | Venture capital cap table, preferred stock tranches, dilution. | Series tiers, share counts, ownership %, payout curves. |
| **12** | `realtime-event-stream-fabric` | Flat Telemetry | `false` | `1` | Event broker partition fabric, cluster throughput, consumer lag. | Events/sec, broker nodes, consumer lag, topic health. |
| **13** | `supply-chain-risk-matrix` | Flat Telemetry | `false` | `1` | Geopolitical supplier dependencies, single points of failure, MTTR. | Tier 1/2 vendors, geo risk, critical components, buffers. |
| **14** | `talent-competency-radar` | Flat Telemetry | `false` | `1` | Full-stack engineering skill assessment across seniority bands. | Competency axes, level scores, target benchmarks. |
| **15** | `sustainability-esg-scorecard` | Flat Telemetry | `false` | `1` | Scope 1/2/3 emissions audit, green energy usage, net-zero progress. | Metric tons CO2e, renewable PPA %, waste diversion. |

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
   - Complex slides must decompose into dedicated sub-component folders (`src/components/slides/governance/`, `src/components/slides/finops/`, etc.).
3. **Canonical Virtual Canvas (1920x1080):**
   - All coordinate layouts must align strictly to the 1920x1080 canvas budget.
4. **Zero Phantom Steps:**
   - Every single slide archetype must compute an authentic `stepCount >= 1` based on its data payload and consume `activeStep` dynamically.
5. **Zero Secrets & Pure Live Text:**
   - No private keys, real tokens, or rasterized typography bitmaps may exist in specifications or source code.
