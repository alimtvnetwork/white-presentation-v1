# 28-New Design & Slide Archetypes Specification Suite

> **Specification Identifier:** `02-spec/21-app/28-new-design-and-slide-archetypes`  
> **Status:** `APPROVED CANONICAL ARCHITECTURE`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Architecture Team (Spec Author 01 & Spec Author 02)  
> **Domain:** Global PPT & Flat Slide Synthesis, 15+ Enterprise Slide Archetypes, Color/Motion Design System, Quality Verification Gates  

---

## 1. Suite Overview & Architectural Scope

This specification suite governs the deep architectural synthesis of **Global PPT** (`global-ppt-v1`) and **Flat Slide Show** (`flat-slide-show`) within the **White Presentation System**. It bridges corporate institutional authority and executive presentation rigor with web-native reactive motion, fluid typography, and step-by-step kinetic progression.

The system introduces:
- **15+ Grounded Enterprise Slide Archetypes** engineered for executive briefings, architectural reviews, technical keynotes, and product demonstrations.
- **Master 10-Theme Palette System** with calibrated 10-step gradient precision ramps ($S_0$ through $S_9$) and WCAG 2.1 AAA contrast compliance.
- **Dynamic Text Micro-Shadows** carving sharp ink-stamp letterforms across dark obsidian and light paper canvases.
- **Atmospheric Background Layers** combining radial spotlight glow, 48px coordinate engineering grids, floating vector icons, and analog halftone textures.
- **Kinetic Motion System** powered by damped harmonic spring oscillators ($k=420$, $\zeta=0.85$, $m=0.8$), quintic deceleration curves, and directional slide translations.
- **Acoustic Synchronization Engine** providing tactile audio cues (whoosh, click, pop) with dynamic narration ducking ($-14\text{ dB}$) and HTMLAudio fallback pools.
- **12-Dimensional Automated Quality Matrix** governing DOM typography, component line ceilings ($\le 100$ lines), positive boolean invariants, and concurrency safety.

---

## 2. Specification Document Index

| Document | File Path | Focus & Architectural Content |
|:---|:---|:---|
| **01-Overview** | [01-overview.md](01-overview.md) | Executive synthesis vision, 5 core pillars, verbatim user request, executive persona governance (Alim Ul Karim as "Chief Software Engineer"), 6-phase executive storytelling arc, and fluid mathematical typography scale. |
| **02-Data Contracts** | [02-data-contracts.md](02-data-contracts.md) | Exhaustive TypeScript interfaces, JSON schemas, 1920x1080 virtual coordinate ASCII wireframes, bounding boxes, and mock data fixtures for all 15+ enterprise slide archetypes. |
| **03-Visual & Motion** | [03-visual-and-motion.md](03-visual-and-motion.md) | 10-theme master matrix, 10-step gradient ramps ($S_0$ to $S_9$), dynamic text micro-shadows, atmospheric background treatments, harmonic spring physics ($k=420, c=17, m=0.8$), deceleration easing, and acoustic sound cues. |
| **04-Verification Gates** | [04-verification-gates.md](04-verification-gates.md) | 12-dimensional automated quality verification matrix (Pure DOM text, $\le 100$-line component ceiling, leaf-type segregation, positive booleans, store limits, WCAG AAA contrast, zero worker git calls). |

---

## 3. Master Catalog: 15+ Production Slide Archetypes

| # | Archetype Identifier | React Component | Primary Business Function | Kinetic Step Progression Element |
|:---:|:---|:---|:---|:---|
| **01** | `executive-summary` | `ExecutiveSummarySlide` | Board briefing & executive strategic takeaways | 3-pillar card focus & takeaway glow |
| **02** | `system-architecture-flow` | `SystemArchitectureFlowSlide` | Multi-tier cloud / microservice system topology | Animated SVG packet traversal along rails |
| **03** | `roi-metric-calculator` | `RoiMetricCalculatorSlide` | Financial return model, OPEX reduction, payback curve | Interactive payback timeline & investment slider |
| **04** | `customer-journey-map` | `CustomerJourneyMapSlide` | 5-stage CX lifecycle, sentiment & friction points | Step-by-step touchpoint reveal along rail |
| **05** | `matrix-comparison-grid` | `MatrixComparisonGridSlide` | Multi-vendor feature matrix with highlighted sovereign col | Feature row highlight & check verification |
| **06** | `tech-stack-grid` | `TechStackGridSlide` | 5-tier architecture stack (Client, Gateway, App, DB, Infra) | Interactive tier expansion & tech chips |
| **07** | `team-hierarchy-org` | `TeamHierarchyOrgSlide` | Multi-tier leadership & cross-functional squads | Reporting line traversal & squad node reveal |
| **08** | `security-compliance-matrix`| `SecurityComplianceMatrixSlide` | SOC2, ISO, HIPAA, GDPR regulatory postures | Compliance audit badge checkmarks & evidence |
| **09** | `product-roadmap-timeline` | `ProductRoadmapTimelineSlide` | Multi-quarter strategic roadmap across parallel swimlanes | Sprint milestones & delivery completion pins |
| **10** | `interactive-faq-flow` | `InteractiveFaqFlowSlide` | Executive FAQ hub with category filter tabs | Accordion item reveal & answer expander |
| **11** | `key-metric-scorecard` | `KeyMetricScorecardSlide` | 4-quadrant executive KPI cards with mini-sparklines | Metric pulse & target benchmark progress bar |
| **12** | `case-study-impact` | `CaseStudyImpactSlide` | Client transformation story (Challenge, Solution, ROI) | 3-phase progression & quantitative metrics |
| **13** | `dual-column-pros-cons` | `DualColumnProsConsSlide` | Bilateral trade-off analysis (Build vs Buy) | Stepwise comparison of opposing factors |
| **14** | `interactive-code-playground`| `InteractiveCodePlaygroundSlide`| Split-pane syntax code editor with live execution console | Line highlight & live console log streaming |
| **15** | `closing-cta-showcase` | `ClosingCtaShowcaseSlide` | High-authority conclusion, dual CTAs, verified QR stamp | Primary CTA halo & presenter bio card |
| **16** | `steps-chain` | `StepsChainSlide` | 4-node connected horizontal delivery process | Step number highlight & connecting bar fill |
| **17** | `timeline-rail` | `TimelineRailSlide` | Continuous horizontal milestone rail with active node halo | Milestone halo spring & milestone card |

---

## 4. Non-Negotiable Architectural Rules

Every downstream agent, implementation subtask, and verification protocol must strictly comply with the following architectural rules:

1. **Pure Live DOM Typography (Gate 02):** Zero rasterized text images, zero canvas typography. 100% of text rendered via semantic HTML tags (`<h1>`, `<h2>`, `<p>`, `<span>`, `<div>`, `<code>`).
2. **Canonical 1920x1080 Virtual Canvas (Gate 04):** Fixed 16:9 coordinate budget with uniform GPU scale transforms.
3. **Hard Rule #6 Component Sizing (Gate 03):** Every slide component (`src/components/slides/*.tsx`) must strictly remain under **100 physical lines of code**. Modular subcomponents strictly $\le 80$ lines.
4. **Leaf Type Segregation (Gate 04):** Core `presentation.ts` $\le 300$ physical lines; all archetype interfaces partitioned into leaf type files.
5. **Positive Booleans Only (Gate 07):** Strictly use `is*` and `has*` positive prefixes. Negative booleans (`isNot*`, `disabled`) and explicit comparisons (`== true`) are strictly forbidden.
6. **Executive Persona Standardization (Gate 08):** Executive Alim Ul Karim is strictly titled **"Chief Software Engineer"** (never "Founder" or "CEO").
7. **Zero Routine Builds or Tests (Gate 11):** Subagents must never run `npm run build` or `npm test` during routine editing turns.
8. **Zero Worker Git Commands (Gate 12):** Subagents must never execute git commands (`git add`, `git commit`). Git commits are reserved solely for the lead orchestrator using GitMap hyphen conventions.
