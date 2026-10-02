# 01-Overview: Global PPT Synthesis, Flat Slide Progression & 15 Enterprise Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/26-new-design-and-slide-archetypes/01-overview`  
> **Status:** `APPROVED ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Presentation Engine Architecture, Global PPT & Flat Slide Progression Synthesis  

---

## 1. Executive Summary & Vision

The **White Presentation Engine** establishes a new benchmark for web-native presentation systems through the deep synthesis of **Global PPT** and **Flat Slide Show**. This architecture fuses the bilateral corporate layouts, executive visual authority, and institutional gravitas of **Global PPT** (`global-ppt-v1`) with the declarative reactivity, continuous intra-slide step progression, and physics-driven micro-interactions of **Flat Slide Show** (`flat-slide-show`).

Legacy presentation suites force presenters into a rigid compromise: either static, non-interactive corporate decks that bake text into flattened bitmaps, or fragile web animation experiments lacking corporate layout discipline. When slide typography is rasterized, text ceases to be accessible, cannot be localized on the fly, cannot be selected or copied by viewers, and prevents programmatic manipulation by AI agents.

This specification establishes a sovereign, web-native presentation engine running natively in modern browsers with:

1. **Pure Live DOM Typography Mandate:** Every headline, kicker pill, narrative paragraph, KPI digit, table cell, and footnote is rendered directly as selectable, accessible HTML elements. Rasterized typography is strictly prohibited.
2. **Canonical 16:9 1920x1080 Responsive Viewport Canvas:** A deterministic $1920 \times 1080$ virtual canvas layout with GPU-accelerated viewport scaling, eliminating fractional coordinate rounding errors across 1080p, 2K, 4K, and mobile screens.
3. **The 60/30/10 Visual Balance Rule & 4-Plane Depth Hierarchy:** A disciplined visual balance framework dividing the canvas into 60% dominant background, 30% structural hierarchy, and 10% high-energy accent, organized across 4 distinct spatial z-planes.
4. **Fluid Mathematical Typography Scale:** Typographic sizing anchored to the 1080p canvas using Ubuntu (bold, italic corporate authority) and Poppins (geometric clarity and readability).
5. **Intra-Slide Step Progression Engine:** Dynamic stage progression (`activeStep`, `maxSteps`) within individual slides, driving spring physics transitions (`stiffness: 420, damping: 17, mass: 0.8`), active halos, and animated SVG connectors.
6. **Master Catalog of 15 New Enterprise Slide Archetypes:** A comprehensive catalog of 15 specialized production archetypes covering strategic summaries, system architecture flows, financial calculators, journey maps, matrix comparisons, tech stacks, team hierarchies, security compliance, product roadmaps, interactive FAQs, KPI scorecards, case studies, pros/cons analyses, code playgrounds, and closing CTAs.

---

## 2. Core Architectural Pillars

```
+---------------------------------------------------------------------------------------------------+
|                        WHITE PRESENTATION ARCHITECTURAL FOUNDATION                                |
+---------------------------------------------------------------------------------------------------+
|  [Pillar 1: Pure Live DOM]      --> 0% rasterized text; 100% semantic, selectable, accessible DOM |
|  [Pillar 2: 1920x1080 Canvas]   --> Fixed 16:9 coordinate budget with viewport-preserving scale  |
|  [Pillar 3: 60/30/10 System]    --> 60% background, 30% structural cards, 10% accent highlights  |
|  [Pillar 4: 4-Plane Depth]      --> Plane 0 (Canvas) to Plane 3 (HUD/Halos) spatial z-stacking     |
|  [Pillar 5: Kinetic Motion]     --> k=420, zeta=0.85 harmonic spring physics + acoustic sync      |
|  [Pillar 6: 15 Archetypes]      --> Modular, single-responsibility, <=100-line React components   |
+---------------------------------------------------------------------------------------------------+
```

### Pillar 1: Pure Live DOM Typography Mandate
All textual elements across all slide archetypes—including display headlines, hero metrics, kicker pills, narrative paragraphs, table cells, bullet items, code blocks, and quote citations—must render as pure, selectable, live HTML DOM text nodes (`<h1>`, `<h2>`, `<p>`, `<span>`, `<div>`, `<code>`).
Under no circumstance may text be baked into raster bitmaps (PNG, JPEG, WebP) or rendered onto opaque `<canvas>` buffers. This guarantees:
- Screen-reader accessibility and semantic web compliance (WCAG 2.1 AAA).
- Frictionless internationalization and dynamic multilingual localization.
- Instant, non-destructive text edits inside the Live Slide Builder.
- Complete AI-readability and headless test automation.

### Pillar 2: Canonical 16:9 1920x1080 Responsive Viewport Canvas
All bounding boxes, coordinate grids, and layout rules are calculated strictly against a virtual coordinate space of $1920 \times 1080$ pixels (16:9 aspect ratio). Outer stage wrappers compute a dynamic CSS `transform: scale(s)` or `zoom` factor based on the container viewport:
$$s = \min\left(\frac{W_{\text{viewport}}}{1920}, \frac{H_{\text{viewport}}}{1080}\right)$$
This ensures that whether a presentation is projected in a boardroom at $3840 \times 2160$ (4K), viewed on a laptop at $1440 \times 900$, or previewed in an inline iframe, elements retain pixel-exact alignment without fractional text reflow or layout snapping.

---

## 3. The 60/30/10 Visual Balance Rule & 4-Plane Depth Hierarchy

The visual architecture adheres to strict mathematical visual distribution and multi-layer spatial depth, ensuring calm executive authority without visual clutter.

```
+---------------------------------------------------------------------------------------------------+
|                         60/30/10 VISUAL BALANCE & 4-PLANE DEPTH SYSTEM                            |
+---------------------------------------------------------------------------------------------------+
|  [60% DOMINANT CANVAS]  --> Base background fill (--pres-canvas-bg), quiet negative space         |
|  [30% STRUCTURAL LAYER] --> Cards, bento borders, typography, tables (--pres-card-bg, border)     |
|  [10% ACCENT HIGHLIGHT] --> Von Restorff accent isolation (--pres-accent, halos, pills, key digits) |
+---------------------------------------------------------------------------------------------------+
|  [Plane 0: Canvas Base]        z-index: 0   | Canvas surface, dot-matrix grid, radial wash        |
|  [Plane 1: Structural Grid]    z-index: 10  | Frosted glass cards, bento cells, background watermark|
|  [Plane 2: Elevated Focus]     z-index: 20  | Active cards, expanded panes, interactive callouts    |
|  [Plane 3: Ambient Overlays]   z-index: 30  | Springing halos, pulse indicators, HUD chrome controls |
+---------------------------------------------------------------------------------------------------+
```

### 3.1 The 60/30/10 Visual Balance Rule

1. **60% Dominant Canvas Ground (Negative Space):**
   - The presentation canvas background (`--pres-canvas-bg`) and generous negative margins occupy approximately 60% of the visual field.
   - Provides visual breathing room, allowing cognitive focus on core strategic data without sensory exhaustion.
   - Supports both dark modes (`#0B0B0E`, `#020617`, `#0B192C`) and archival light modes (`#FFFFFF`, `#F5F0E6`).

2. **30% Structural Foreground & Information Hierarchy:**
   - Card surfaces (`--pres-card-bg`), bento container borders (`--pres-card-border`), secondary descriptive typography (`--pres-text-secondary`), and tabular dividing lines occupy approximately 30% of the visual space.
   - Organizes content into scannable chunks, clear reading rails, and bilateral comparative columns.

3. **10% High-Energy Accent (Von Restorff Isolation Effect):**
   - High-contrast brand accents (`--pres-accent`), glowing pill badges, active node halos, gradient character highlights, and positive verification icons are strictly limited to roughly 10% of the canvas surface area.
   - Enforces the **Von Restorff isolation effect**: because accent color is strictly rationed, high-priority milestones, key metric figures, and active interactive steps stand out immediately to executive viewers.

### 3.2 The 4-Plane Depth Hierarchy

Each slide is engineered as a multi-planar 3D compositional stage:

| Depth Plane | Z-Index | Physical Layer | Visual Role & Rendering Properties |
|:---|:---:|:---|:---|
| **Plane 0: Canvas Base** | `z-0` | Canvas Surface | Solid canvas color (`var(--pres-canvas-bg)`), subtle ambient radial gradient spotlight (`circle at 50% 0%`), and low-contrast dot-matrix alignment grid (`opacity: 0.05`). |
| **Plane 1: Structural Grid** | `z-10` | Bento Cards & Rails | Structural content cards, background data tables, inactive stage cards, and neutral borders (`var(--pres-card-border)`). Glassmorphic backdrop blur `backdrop-filter: blur(16px)`. |
| **Plane 2: Elevated Focus** | `z-20` | Active Stage Cards | Active step cards, expanded accordions, selected comparison columns, and interactive code panes. Elevated with micro drop-shadow `box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.45)`. |
| **Plane 3: Ambient Overlays** | `z-30` | Halos, HUD & Badges | Dynamic pulsing focus rings, active step connector beams, floating presenter HUD controls, tooltips, and floating audio telemetry badges. |

---

## 4. Fluid Mathematical Typography Scale

The typographic hierarchy combines **Ubuntu** for high-impact executive headlines and **Poppins** for scannable, modern body text. Sizes are strictly calibrated for the 1080p canvas:

| Semantic Role | Font Family | Weight | Size (px) | Line Height | Letter Spacing | CSS Variable Token |
|:---|:---|:---:|:---:|:---:|:---:|:---|
| **Kicker Pill Badge** | Ubuntu | 700 | 14px | 1.2 | +0.08em (caps) | `--pres-font-kicker` |
| **Display Title (H1)** | Ubuntu | 700 | 56px | 1.1 | -0.02em | `--pres-font-h1` |
| **Slide Subtitle** | Poppins | 400 | 24px | 1.4 | -0.01em | `--pres-font-subtitle` |
| **Section Header (H2)** | Ubuntu | 600 | 32px | 1.2 | -0.01em | `--pres-font-h2` |
| **Card Header (H3)** | Ubuntu | 600 | 22px | 1.3 | 0em | `--pres-font-h3` |
| **Body Narrative** | Poppins | 400 | 18px | 1.5 | 0em | `--pres-font-body` |
| **Hero KPI Figure** | Ubuntu | 800 | 72px | 1.0 | -0.03em | `--pres-font-kpi` |
| **Code / Monospace** | JetBrains Mono | 500 | 16px | 1.6 | 0em | `--pres-font-mono` |
| **Footnote / Micro** | Poppins | 400 | 13px | 1.4 | +0.02em | `--pres-font-caption` |

---

## 5. Intra-Slide Step Progression Engine

Slides are not monolithic static slides; they function as interactive micro-stages with intra-slide step choreography.

### 5.1 Step States & Visual Semantics
Every step-enabled slide accepts an `activeStep` integer property (1-indexed). Child items dynamically evaluate their status relative to `activeStep`:

| Step State | Condition | Visual Treatment | Opacity | Scale | Transform / Shadow |
|:---|:---:|:---|:---:|:---:|:---|
| **Past** | `itemStep < activeStep` | Completed, verified history | 0.45 | 0.98 | Desaturated border, subtle checkmark |
| **Active** | `itemStep === activeStep` | Focused focal element | 1.00 | 1.02 | Accent border, glowing halo, active pulse |
| **Future** | `itemStep > activeStep` | Upcoming milestone | 0.18 | 0.96 | Ghosted outline, dimmed typography |

### 5.2 Physics Configuration
Step transitions utilize damped harmonic spring physics:
- **Stiffness ($k$):** $420\text{ N/m}$
- **Damping Ratio ($\zeta$):** $0.85$ (slightly underdamped, zero oscillating overshoot)
- **Mass ($m$):** $0.8\text{ kg}$
- **Calculated Damping ($c$):** $2\zeta\sqrt{km} \approx 31.17\text{ N}\cdot\text{s/m}$

---

## 6. Master Index of the 15 New Enterprise Slide Archetypes

The 15 archetypes provide comprehensive coverage for high-stakes enterprise presentations, technical architecture reviews, investor pitch decks, and executive briefings:

| # | Archetype Identifier | Component Name | Semantic Role & Business Context | Primary Interactive Step Element |
|:---:|:---|:---|:---|:---|
| **01** | `executive-summary` | `ExecutiveSummarySlide` | High-level corporate strategy briefing, 3 core pillars, executive takeaway | Pillar cards with step-based focus |
| **02** | `system-architecture-flow` | `SystemArchitectureFlowSlide` | Distributed system topology, microservice tiers, live data flow packets | Animated SVG packets traversing node rails |
| **03** | `roi-metric-calculator` | `RoiMetricCalculatorSlide` | Financial return on investment, operational savings, payback timeline | Dynamic investment slider & payback gauge |
| **04** | `customer-journey-map` | `CustomerJourneyMapSlide` | 5-stage customer experience lifecycle with sentiment curve and friction alerts | Step-by-step touchpoint reveal along rail |
| **05** | `matrix-comparison-grid` | `MatrixComparisonGridSlide` | Feature comparison across vendors with sovereign highlighted column | Feature row highlighting and check status |
| **06** | `tech-stack-grid` | `TechStackGridSlide` | Tiered technology stack layers (Client, Gateway, Services, DB, Infra) | Interactive layer expansion and tech pills |
| **07** | `team-hierarchy-org` | `TeamHierarchyOrgSlide` | Executive and departmental reporting structure with SVG connectors | Node expansion and team reporting lines |
| **08** | `security-compliance-matrix` | `SecurityComplianceMatrixSlide` | Regulatory posture (SOC2, ISO, HIPAA, GDPR, FedRAMP) with audit controls | Compliance certification card verification |
| **09** | `product-roadmap-timeline` | `ProductRoadmapTimelineSlide` | Multi-quarter strategic roadmap across parallel execution swimlanes | Sprint milestones and completion badges |
| **10** | `interactive-faq-flow` | `InteractiveFaqFlowSlide` | Executive FAQ hub with categorized questions and technical expanders | Accordion item expansion and answer reveal |
| **11** | `key-metric-scorecard` | `KeyMetricScorecardSlide` | 4-quadrant executive KPI scorecard with trend badges and mini-sparklines | Metric card pulse and benchmark progress |
| **12** | `case-study-impact` | `CaseStudyImpactSlide` | Enterprise client transformation narrative (Challenge, Solution, Yield) | Phase progression and quantitative metrics |
| **13** | `dual-column-pros-cons` | `DualColumnProsConsSlide` | Bilateral trade-off analysis (Build vs Buy, Modernization vs Inaction) | Stepwise comparison of opposing factors |
| **14** | `interactive-code-playground` | `InteractiveCodePlaygroundSlide` | Split-pane syntax-highlighted code editor with live execution console | Step-based code line highlighting & logs |
| **15** | `closing-cta-showcase` | `ClosingCtaShowcaseSlide` | High-authority conclusion, dual CTAs, executive booking, QR verification | Primary CTA halo and QR validation stamp |

---

## 7. Specification Module Directory Structure

The specifications for the new design system and slide archetypes are structured into modular specifications:

```
02-spec/21-app/26-new-design-and-slide-archetypes/
├── 01-overview.md              <-- This document: Architectural vision, balance rule, 4-plane depth
├── 02-data-contracts.md        <-- Complete TypeScript contracts, 1920x1080 ASCII layouts, and fixtures
├── 03-visual-and-motion.md     <-- 10-theme matrix, 10-step gradient ramps, spring physics, acoustic sync
├── 04-verification-gates.md    <-- 12 automated quality verification gates and audit checklists
└── readme.md                   <-- Module index and architectural navigation
```

---

## 8. Non-Negotiable Coding Guidelines Compliance

All specifications and downstream implementations strictly enforce the repository guidelines:
- **Positive Booleans Only (R1):** All boolean variables and schema properties must strictly utilize positive prefixes (`is*`, `has*`, `can*`, `should*`). Negative polarity indicators (`isNot*`, `disabled`, `hidden`) and explicit comparisons (`== true`) are strictly forbidden.
- **Strict Relative Git Paths (R2):** All path references within documentation and code must be relative to the repository root. Absolute filesystem paths are prohibited. All newly created files and directories must be strictly lowercase.
- **Zero Builds or Tests During Turns (R11):** Subagents and automated workers must not invoke compilation commands (`npm run build`), test suites (`npm test`), or external runners during standard turns.
