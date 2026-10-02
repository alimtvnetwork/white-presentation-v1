# 01-Overview: Deep Global PPT & Flat Slide Synthesis, Design Systems & 15+ Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/28-new-design-and-slide-archetypes/01-overview`  
> **Status:** `APPROVED ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Presentation Engine Architecture, Global PPT & Flat Slide Progression Synthesis, Enterprise Design Systems  

---

## 1. Executive Summary & Vision

The **White Presentation Engine** defines a sovereign benchmark for web-native presentation architectures through the synthesis of **Global PPT** (`global-ppt-v1`) and **Flat Slide Show** (`flat-slide-show`). This specification unifies:
- The corporate institutional authority, bilateral comparative structures, and executive presence of **Global PPT**.
- The declarative reactivity, continuous intra-slide step progression, and spring physics micro-interactions of **Flat Slide Show**.
- Advanced **Storytelling Design Systems** structured around narrative arcs, tension-and-resolution pacing, and cognitive clarity.

Legacy presentation software forces presenters into a false dichotomy: either static, non-interactive corporate decks that bake text into flattened raster images, or brittle web experiments lacking enterprise visual discipline. When typography is rasterized, text ceases to be accessible (violating WCAG standards), cannot be localized on the fly, cannot be selected or copied by viewers, and prevents programmatic manipulation by autonomous AI agents.

This specification establishes a modern presentation engine running natively in modern browsers with:
1. **Pure Live DOM Typography Mandate:** 100% of text nodes (headlines, kicker pills, narrative paragraphs, KPI digits, table cells, and footnotes) render directly as selectable, accessible HTML elements.
2. **Canonical 16:9 1920x1080 Viewport Coordinate Geometry:** A fixed virtual coordinate budget of $1920 \times 1080$ pixels with uniform viewport scaling, eliminating fractional coordinate rounding errors across display sizes.
3. **Step-by-Step Active Progression Engine:** Dynamic stage progression (`activeStep`, `phase`, spring physics) driving focus, active halos, and animated SVG connectors.
4. **Grounded Corporate & Storytelling Palettes:** Calibrated color token matrices featuring dark/light dynamic contrast micro-shadows, 10-step gradient ramps ($S_0$ through $S_9$), and character-level shading.
5. **Master Catalog of 15+ High-Authority Slide Archetypes:** A comprehensive suite of 17 production archetypes (15 enterprise archetypes plus `steps-chain` and `timeline-rail`) derived from real production implementations.
6. **Strict Persona Normalization:** Executive Alim Ul Karim is strictly titled **"Chief Software Engineer"** (never "Founder" or "CEO").

---

## 2. User Request (Verbatim)

The authoritative user instruction governing this specification is transcribed verbatim from [.ai-memory/plans/pending/28-deep-global-ppt-and-flat-slide-synthesis.md](../../../.ai-memory/plans/pending/28-deep-global-ppt-and-flat-slide-synthesis.md):

```text
is it really?

is it done properly tested and released?


# High Priority Instruction

Okay. So in the work presentation, you have a lot of things, a lot of customization, a lot of factors are missing from, let's say, global PPT, how the color themes, animation goes. You didn't, let's say, adapt much. Also, you can look into the coding guideline properly. There is a new design systems, those are added. I request you to understand those, try to update your spec regarding the new design concepts and see how you can improve and add more slides. I've been asking. So you should look into the flat slide, global PPT, step-by-step slide. You should do all these things, and probably you should try to improve at least, let's say, 15 slides, new 15 types of slides, try to improve in your system. Okay? That's the first thing you should work on. Go deep, point deep, and then

# Actionable Items Must Follow Non-Negotiable

1. Review and adapt the global PPT color themes and animations.
2. Examine and adhere to the new coding guidelines and design systems.
3. Update your specifications with the new design concepts.
4. Improve and add at least 15 new types of slides.
5. Analyze flat slides and step-by-step slides for improvements.

Must follow and spawn agent using 

@[.agents/skills/execute-parent-task-with-n-steps-v6]

## Additional Instructions

learn /learn if you have to learn something and /plan stuff before working please.
```

---

## 3. The 5 Non-Negotiable Architectural Pillars

```
+---------------------------------------------------------------------------------------------------+
|                         THE 5 NON-NEGOTIABLE ARCHITECTURAL PILLARS                                |
+---------------------------------------------------------------------------------------------------+
|  [Pillar 1: Pure Live DOM Typography]     --> 0% rasterized text; 100% semantic HTML DOM elements |
|  [Pillar 2: 1920x1080 Viewport Geometry]  --> Fixed 16:9 canvas with uniform GPU transform scale  |
|  [Pillar 3: Active Step Progression]       --> activeStep, phase, harmonic spring physics engine   |
|  [Pillar 4: Corporate & Storytelling]     --> Dark/light dynamic micro-shadows, 10-step gradients  |
|  [Pillar 5: 15+ Slide Archetypes]         --> Modular, single-responsibility, <=100-line React   |
+---------------------------------------------------------------------------------------------------+
```

### Pillar 1: Pure Live DOM Typography Mandate
- Every text element across every slide archetype—headlines, subheads, kicker pill badges, body narrative, table rows, metric digits, code syntax, and citations—must render as pure, selectable, live HTML DOM text nodes (`<h1>`, `<h2>`, `<p>`, `<span>`, `<div>`, `<code>`).
- Zero text may be baked into PNG/JPEG/WebP images, SVG `<text>` fallbacks, or rendered onto opaque HTML5 `<canvas>` bitmaps.
- Guarantees:
  - Full WCAG 2.1 AAA accessibility and screen-reader tree navigability.
  - Zero loss of fidelity on 4K, 8K, and retina displays.
  - Live in-place text editing inside the interactive slide builder without asset re-export.
  - Dynamic multilingual localization and automated AI synthesis.

### Pillar 2: 1920x1080 Responsive Viewport Coordinate Geometry
- All layout dimensions, padding, margins, card placements, and typography tokens are engineered against a canonical $1920 \times 1080$ virtual coordinate canvas (16:9 aspect ratio).
- Uniform viewport scaling is achieved via dynamic GPU matrix scaling calculated on `#presentation-root`:
  $$s = \min\left(\frac{W_{\text{viewport}}}{1920}, \frac{H_{\text{viewport}}}{1080}\right)$$
- The stage container enforces `width: 1920px; height: 1080px; transform: scale(s); transform-origin: center center;` ensuring identical pixel placement, line breaks, and typographic alignment regardless of physical display resolution.

### Pillar 3: Step-by-Step Active Progression Engine
- Slides are dynamic, stateful micro-stages rather than passive static frames.
- Each archetype consumes `activeStep: number` and `maxSteps: number` (1-indexed).
- Visual elements compute their step phase:
  - **Past (`itemStep < activeStep`):** Opacity $0.45$, scale $0.98$, desaturated border, verified checkmark.
  - **Active (`itemStep === activeStep`):** Opacity $1.00$, scale $1.02$, glowing accent border, active pulsing halo.
  - **Future (`itemStep > activeStep`):** Opacity $0.18$, scale $0.96$, ghosted stroke, subdued typography.
- Physics transition parameters are grounded in harmonic spring dynamics:
  - Stiffness $k = 420\text{ N/m}$, Damping Ratio $\zeta = 0.85$, Mass $m = 0.8\text{ kg}$, Damping $c = 31.17\text{ N}\cdot\text{s/m}$.

### Pillar 4: Grounded Corporate & Storytelling Palettes with Dynamic Micro-Shadows
- Complete adaptation of Global PPT corporate palettes with deep contrast ratios:
  - **Corporate True Dark:** Deep Obsidian (`#0B0B0E`), Slate Midnight (`#020617`), Midnight Navy (`#0B192C`).
  - **Archival Pure Light:** Pure White (`#FFFFFF`), Warm Parchment (`#F5F0E6`), Technical Ghost (`#F8FAFC`).
- 10-step calibrated gradient ramps ($S_0$ through $S_9$) for character-level heading highlights and metric emphasis.
- **Dynamic Contrast Micro-Shadows:**
  - Dark Theme: `box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08);`
  - Light Theme: `box-shadow: 0 16px 32px -6px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06);`

### Pillar 5: Master Catalog of 15+ Production Slide Archetypes
- Delivers 17 distinct, production-grade slide archetypes (15 enterprise archetypes + `steps-chain` + `timeline-rail`).
- Every component strictly obeys the **$\le 100$ lines of code ceiling** per `.tsx` file, splitting complex animations into modular subcomponents ($\le 80$ lines).
- Positive boolean conventions only (`is*`, `has*`, `can*`, `should*`).

---

## 4. Executive Persona Governance: Alim Ul Karim

Across all slide archetypes, fixtures, biographical slides, quote callouts, and documentation, the identity and credentials of Alim Ul Karim are governed by strict institutional rules:

```
+---------------------------------------------------------------------------------------------------+
|                        EXECUTIVE PERSONA GOVERNANCE: ALIM UL KARIM                                |
+---------------------------------------------------------------------------------------------------+
|  MANDATORY TITLE:       Chief Software Engineer                                                   |
|  PROHIBITED TITLES:     Founder, Co-Founder, CEO, Chief Executive Officer, Managing Director      |
|  DOMAIN CREDENTIALS:    15+ Years Enterprise Distributed Systems & AI Systems Architecture        |
|  CHARACTER SHADING:     Ubuntu Extrabold 64px shaded across 10-step gradient ramp (S0 -> S9)      |
|  PORTRAIT TREATMENT:    Right 40% width (x: 1160px), feathered gradient edge mask                 |
+---------------------------------------------------------------------------------------------------+
```

- **Mandatory Canonical Title:** **Chief Software Engineer**
- **Strictly Prohibited Titles:** "Founder", "Co-Founder", "CEO", "Chief Executive Officer", "Managing Partner".
- **Biographical Pillars:**
  1. Distributed Systems Architecture & High-Concurrency Telemetry.
  2. Autonomous Agentic AI Pipelines & Declarative Visual Engines.
  3. Cloud Infrastructure Optimization & Zero-Trust Security Fabrics.

---

## 5. Storytelling Design Systems & Narrative Pacing

The architecture incorporates high-authority storytelling frameworks adapted from executive board presentations, venture capital pitch narratives, and technical keynote design:

```
+---------------------------------------------------------------------------------------------------+
|                            THE 6-PHASE EXECUTIVE STORYTELLING ARC                                 |
+---------------------------------------------------------------------------------------------------+
|  [1. The Strategic Hook]       --> High-impact takeaway, market inflection point, or dilemma      |
|  [2. Exposition & Baseline]     --> As-Is operational state, quantified baseline friction         |
|  [3. The Tension / Crisis]     --> Cost of inaction, technical debt ceiling, legacy bottleneck    |
|  [4. Sovereign Architecture]   --> Paradigm shift, system topology, multi-tier solution fabric    |
|  [5. Quantified Yield & Proof] --> Proven financial ROI, MTTR reduction, enterprise case study   |
|  [6. Unified Call to Action]   --> Clear decision framework, milestone timeline, executive commit |
+---------------------------------------------------------------------------------------------------+
```

### Visual Pacing Rules:
1. **The 60/30/10 Visual Balance Rule:**
   - **60% Dominant Base Ground:** Negative space and canvas background (`--pres-canvas-bg`) provide cognitive focus.
   - **30% Structural Hierarchy:** Cards, bento grids, reading rails, and secondary typography (`--pres-card-bg`, `--pres-card-border`).
   - **10% High-Energy Accent:** Reserved strictly for active steps, primary KPIs, and status badges (`--pres-accent`), enforcing the **Von Restorff Isolation Effect**.
2. **The 4-Plane Spatial Depth Hierarchy:**
   - **Plane 0 (Canvas Base, `z-0`):** Solid canvas surface, ambient radial spotlight (`circle at 50% 0%`), dot-matrix alignment grid (`opacity: 0.04`).
   - **Plane 1 (Structural Grid, `z-10`):** Inactive stage cards, data tables, subtle borders, frosted glass blur (`backdrop-filter: blur(16px)`).
   - **Plane 2 (Elevated Focus, `z-20`):** Active step cards, expanded accordions, selected comparison columns with dynamic micro-shadows.
   - **Plane 3 (Ambient Overlays, `z-30`):** Glowing halo pulses, traveling SVG connector packets, presenter HUD chrome, audio badges.

---

## 6. Fluid Mathematical Typography Scale

Typography pairs **Ubuntu** for high-impact executive presence with **Poppins** for scannable modern body text:

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

## 7. Master Catalog: 15+ Grounded Slide Archetypes

| # | Archetype Identifier | React Component | Semantic Role & Business Context | Primary Step Progression Element |
|:---:|:---|:---|:---|:---|
| **01** | `executive-summary` | `ExecutiveSummarySlide` | Board briefing, 3 core pillars, executive takeaway banner | Active pillar card focus & takeaway glow |
| **02** | `system-architecture-flow` | `SystemArchitectureFlowSlide` | Distributed cloud topology, microservice tiers, API gateway | Animated SVG data packets traversing rails |
| **03** | `roi-metric-calculator` | `RoiMetricCalculatorSlide` | Financial return model, OPEX reduction, payback curve | Dynamic investment slider & payback gauge |
| **04** | `customer-journey-map` | `CustomerJourneyMapSlide` | 5-stage customer experience lifecycle, sentiment curve | Step-by-step touchpoint reveal along rail |
| **05** | `matrix-comparison-grid` | `MatrixComparisonGridSlide` | Multi-vendor feature matrix with highlighted sovereign col | Feature row highlight & check verification |
| **06** | `tech-stack-grid` | `TechStackGridSlide` | 5-tier technology stack (Client, Gateway, App, DB, Infra) | Interactive tier expansion & tech chips |
| **07** | `team-hierarchy-org` | `TeamHierarchyOrgSlide` | Multi-tier reporting structure with SVG branch connectors | Node reveal and reporting line traversal |
| **08** | `security-compliance-matrix`| `SecurityComplianceMatrixSlide` | SOC2, ISO, HIPAA, GDPR regulatory posture & audit evidence | Compliance certification audit checkmarks |
| **09** | `product-roadmap-timeline` | `ProductRoadmapTimelineSlide` | Multi-quarter strategic roadmap across parallel swimlanes | Sprint milestones & delivery completion |
| **10** | `interactive-faq-flow` | `InteractiveFaqFlowSlide` | Executive FAQ hub with categorized questions & expanders | Accordion item reveal & answer expander |
| **11** | `key-metric-scorecard` | `KeyMetricScorecardSlide` | 4-quadrant executive KPI cards with sparklines & trends | Metric pulse, benchmark progress bar |
| **12** | `case-study-impact` | `CaseStudyImpactSlide` | Enterprise client transformation (Challenge, Solution, ROI) | Phase progression & quantitative metrics |
| **13** | `dual-column-pros-cons` | `DualColumnProsConsSlide` | Bilateral trade-off analysis (Build vs Buy, Inaction Cost) | Stepwise comparison of opposing factors |
| **14** | `interactive-code-playground`| `InteractiveCodePlaygroundSlide`| Split-pane syntax code editor with live execution console | Step-based code line highlighting & logs |
| **15** | `closing-cta-showcase` | `ClosingCtaShowcaseSlide` | High-authority finale, dual CTAs, QR verification badge | Primary CTA halo & QR scan verification |
| **16** | `steps-chain` | `StepsChainSlide` | 4-node connected horizontal delivery process with badges | Step number highlight & horizon fill |
| **17** | `timeline-rail` | `TimelineRailSlide` | Continuous horizontal milestone rail with active node halo | Milestone halo spring & milestone card |

---

## 8. Specification Directory Architecture

```
02-spec/21-app/28-new-design-and-slide-archetypes/
├── 01-overview.md              <-- This document: Synthesis vision, pillars, persona, storytelling
├── 02-data-contracts.md        <-- Exhaustive TypeScript contracts, JSON schemas, 1920x1080 wireframes
├── 03-visual-and-motion.md     <-- Dynamic micro-shadows, 10-theme ramps, spring motion keyframes
├── 04-verification-gates.md    <-- Automated verification checklist, WCAG gates, size ceilings
└── readme.md                   <-- Spec navigation index and module summary
```

---

## 9. Non-Negotiable Coding Guidelines Compliance

All downstream implementations must strictly adhere to the repository standards:
- **Positive Booleans Only (R1):** All boolean flags and properties must strictly use positive prefixes (`is*`, `has*`, `can*`, `should*`). Negative booleans (`isNot*`, `isDisabled`, `hidden`) and explicit comparisons (`== true`) are strictly forbidden.
- **Strict Relative Git Paths (R2):** All path references must be relative to the repository root. Strictly lowercase filenames and paths.
- **Strict $\le 100$ Lines per TSX File (R6):** All component files must remain under 100 lines of code, delegating to helper subcomponents ($\le 80$ lines).
- **Zero Git Commands & Zero Intermediate Builds (R11):** Subagents must never invoke `git` commands, `npm run build`, or `npm test` during standard editing turns.
