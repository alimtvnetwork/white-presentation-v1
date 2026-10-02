# 02-Component Spec: 15 Enterprise Slide Archetypes, Contracts & Step Progression

> **Module:** `02-spec/21-app/28-global-ppt-and-15-slide-types`
> **Status:** Canonical Component Specification
> **Target Release:** `v1.2.0`
> **Author:** Component Author 01
> **Updated:** 2026-10-02
> **Domain:** Slide Components, TypeScript Contracts, Positive Booleans, Step Hooks & Live DOM Inline Editing

---

## 1. Architectural Foundation & Base Contract

Every slide component in the White Presentation engine renders inside a deterministic $1920 \times 1080$ virtual canvas (16:9 aspect ratio) and implements pure live DOM typography. Rasterized typography is strictly prohibited.

### 1.1 Base Slide Data Contract
All 15 slide archetype contracts extend the foundational `BaseSlide` interface.

```typescript
export interface BaseSlide {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  themeId?: string;
  notes?: string;
  activeStep?: number;
}
```

### 1.2 Positive Boolean Standard
All component props, data models, and hook state variables strictly employ positive boolean prefixes (`is*`, `has*`). Inverted or negative boolean identifiers (`disable*`, `un*`, `isNot*`, `hidden`) are forbidden.

| Positive Standard | Prohibited Anti-Pattern | Description |
|:---|:---|:---|
| `isActive: boolean` | `isInactive` / `disabled` | Indicates active step or focused tab |
| `isCompleted: boolean` | `isNotDone` / `pending` | Indicates finished workflow stage |
| `isHighlighted: boolean` | `isDimmed` / `unhighlighted` | Primary focus visual callout |
| `isPositiveDelta: boolean` | `isNegative` | KPI growth direction (+ vs -) |
| `isEditMode: boolean` | `isReadOnly` / `viewOnly` | Presenter inline text editing active |
| `hasGlow: boolean` | `hasNoGlow` | Volumetric accent glow aura enabled |
| `hasBadge: boolean` | `hasNoBadge` | Optional categorization badge present |
| `hasBorder: boolean` | `borderless` | Structural hairline card border present |

### 1.3 Step Progression Hook Contract
Multi-step slide archetypes connect directly to `useDeckStore` to drive interactive sub-step progression:

```typescript
export interface StepProgressionHook {
  activeStep: number;
  maxSteps: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  stepAdvance: () => void;
  stepRewind: () => void;
  jumpToStep: (stepIndex: number) => void;
}
```

For any index $i$ in a multi-step sequence, its phase is deterministically resolved:
- $i < \text{activeStep} \implies \text{"past"}$ (completed state, subtle contrast, checkmark).
- $i = \text{activeStep} \implies \text{"active"}$ (active focus, vibrant accent border, springing halo `[320, 30]`).
- $i > \text{activeStep} \implies \text{"future"}$ (upcoming state, placeholder opacity $0.40$).

### 1.4 Live DOM Inline Editing Contract
Every text element across all 15 archetypes supports real-time editing:
- `contentEditable={isEditMode}`
- `suppressContentEditableWarning={true}`
- `onBlur={(e) => updateSlideField(fieldKey, e.currentTarget.textContent || '')}`
- Visual cue: when `isEditMode` is active, editable fields display a subtle dashed outline on hover: `hover:outline hover:outline-1 hover:outline-dashed hover:outline-current/30`.

### 1.5 Executive Persona Standardization
Across all slide models, defaults, and fixtures:
- Persona Name: **Alim Ul Karim**
- Standardized Title: **"Chief Software Engineer"**
- The titles **"Founder"** or **"CEO"** are strictly forbidden.

---

## 2. Catalog of the 15 Enterprise Slide Archetypes

```
Archetype Index:
├── Sequential & Process Flows
│   ├── 01. steps (Interactive Split Sidebar & Detail Pane)
│   ├── 02. timeline (Continuous Progress Rail & Active Halo)
│   ├── 03. process (Connected Circles & SVG Quadratic Béziers)
│   └── 04. depth-stack (3D Layered Cards with Z-Peel Reveal)
├── Architectural & Feature Matrices
│   ├── 05. reveal-grid (Bento Feature Matrix with Staggered Cells)
│   ├── 06. growth-engine (4 Growth Channels with Metric Deltas)
│   ├── 07. talent-pyramid (Multi-Tier Capability & Filter Pyramid)
│   └── 09. tech-stack (Layered Technology Stack & Mastery Badges)
├── Financial & Strategic Analysis
│   ├── 08. cost-comparison (3-Column Financial Matrix & ROI Calculation)
│   ├── 10. problem-solution (Bilateral Challenge vs Sovereign Solution)
│   ├── 11. metric-grid (KPI Performance Dashboard & Trend Directions)
│   └── 12. before-after (Bilateral Transformation Split & Contrast Wipe)
└── Executive Engagement & Technical Workflows
    ├── 13. testimonials (Executive Quotes & Verified Credentials)
    ├── 14. code-terminal (macOS Window Chrome & Syntax Execution)
    └── 15. call-to-action (Executive Closing Frame & Dual Decision CTAs)
```

---

### Archetype 01: `steps` (StepsSlide)

#### Semantic Role & Purpose
Designed for implementation phases, engineering migrations, or executive onboarding. Presents an interactive step sidebar on the left and a spring-animated detail pane on the right.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px, Right: 120px]                                             |
|  Kicker / Title / Subtitle                                                                        |
|                                                                                                   |
|  +---------------------------+   +-------------------------------------------------------------+  |
|  | LEFT STEP LIST: 620px     |   | RIGHT STEP DETAIL PANE: min-width 820px                     |  |
|  |                           |   |                                                             |  |
|  | [01] Phase 1: Ingestion   |   | +---------------------------------------------------------+ |  |
|  |      Phase: "past"        |   | | ACTIVE STEP TITLE: Architecture Decomposition           | |  |
|  |                           |   | |                                                         | |  |
|  | [02] Phase 2: Refactor    |   | | Detail narrative paragraph with key terms and execution | |  |
|  |      Phase: "active" (★)  |-->| | directives. Spring physics [420, 17, 0.8].               | |  |
|  |      Halo: [-6px, -14px]  |   | |                                                         | |  |
|  |                           |   | | Deliverables & Milestones:                              | |  |
|  | [03] Phase 3: Verify      |   | | - [x] Zero-build linting gate                           | |  |
|  |      Phase: "future"      |   | | - [x] Split SQLite memory isolation                     | |  |
|  |                           |   | +---------------------------------------------------------+ |  |
|  +---------------------------+   +-------------------------------------------------------------+  |
|                                                                                                   |
|  [FOOTER CHROME: Left: 140px, Bottom: 44px]                                                      |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export type StepPhase = 'past' | 'active' | 'future';

export interface StepItem {
  id: string;
  label: string;
  title?: string;
  detail: string;
  duration?: string;
  deliverables?: string[];
  isCompleted?: boolean;
}

export interface StepsSlideData extends BaseSlide {
  type: 'steps';
  heading: string;
  steps: StepItem[];
  activeStep?: number;
}
```

#### Interaction & Kinetic Physics
- Step Detail Pane expands with spring: `{ stiffness: 420, damping: 17, mass: 0.8 }`.
- Active step number pill translates with spring: `{ stiffness: 480, damping: 38, mass: 0.7 }`.
- Clicking any step calls `jumpToStep(index)` and triggers acoustic `playStepClick()`.

---

### Archetype 02: `timeline` (TimelineRoadmapSlide)

#### Semantic Role & Purpose
Long-range corporate roadmaps and milestone release schedules. Features a continuous horizontal progress rail across the canvas with milestone pins and date badges.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Title & Strategic Milestone Horizon                                                              |
|                                                                                                   |
|  ============================== CONTINUOUS PROGRESS RAIL ======================================  |
|  (railLeft: 240px, railRight: 1680px, railY: 480px, thickness: 4px)                               |
|                                                                                                   |
|       ( M1 )                     ( M2: ACTIVE ★ )                   ( M3 )                        |
|       Q1 2026                        Q2 2026                        Q3 2026                       |
|   Discovery Gate                Core Engine Release             Global Rollout                    |
|   Phase: "past"                 Halo: [320, 30]                 Phase: "future"                   |
|   +-------------------+         +-------------------+           +-------------------+             |
|   | 100% Spec Ingest  |         | 10 Palettes Live  |           | Enterprise Cloud  |             |
|   | SQLite Ledger     |         | Spring Physics    |           | SLA 99.99%        |             |
|   +-------------------+         +-------------------+           +-------------------+             |
|                                                                                                   |
|  [FOOTER: Active Horizon Indicator]                                                               |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface TimelineMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
  badge?: string;
  isCompleted?: boolean;
  isKeyMilestone?: boolean;
}

export interface TimelineRoadmapSlideData extends BaseSlide {
  type: 'timeline';
  heading: string;
  milestones: TimelineMilestone[];
  activeStep?: number;
}
```

#### Interaction & Kinetic Physics
- Active pin halo spring configuration: `{ stiffness: 320, damping: 30 }`.
- Progress rail fill smoothly interpolates width: `width: ${(activeStep / (milestones.length - 1)) * 100}%`.

---

### Archetype 03: `process` (ProcessCycleSlide)

#### Semantic Role & Purpose
Cyclical methodologies, continuous feedback loops, and sovereign CI/CD pipelines. Circular stage nodes connected by animated SVG quadratic Bézier curves with traveling glow pulses.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Continuous Engineering Feedback Loop                                                             |
|                                                                                                   |
|         +--------------+       SVG Quadratic Bézier       +--------------+                        |
|         | [01] Ingest  | -------------------------------> | [02] Decompose|                        |
|         +--------------+   pulse: 1.2s ease-in-out        +--------------+                        |
|                 ^                                                 |                               |
|                 | SVG Loop Arc                      SVG Down Arc  |                               |
|                 |                                                 v                               |
|         +--------------+       SVG Quadratic Bézier       +--------------+                        |
|         | [04] Release | <------------------------------- | [03] Verify  |                        |
|         +--------------+                                  +--------------+                        |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface ProcessStage {
  id: string;
  stepNumber: number;
  name: string;
  description: string;
  iconName?: string;
  isActive?: boolean;
}

export interface ProcessCycleSlideData extends BaseSlide {
  type: 'process';
  heading: string;
  cycleName: string;
  stages: ProcessStage[];
  activeStep?: number;
}
```

#### Interaction & Kinetic Physics
- Connector path: `M sx sy Q cx cy ex ey` with stroke dashoffset animation simulating traveling current.
- Active stage triggers `reveal-pulse` animation expanding outward by 14px.

---

### Archetype 04: `depth-stack` (DepthStackSlide)

#### Semantic Role & Purpose
Architectural layer abstraction and security tier breakdowns. Rendered as 3D perspective depth cards with peel-away reveal transitions.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Architectural Layer Abstraction (Perspective 1200px)                                             |
|                                                                                                   |
|           +---------------------------------------+                                               |
|          / [Tier 3: UI & Presentation Engine]    /|  z-offset: 40px, scale: 0.92                  |
|         +---------------------------------------+ |                                               |
|         |                                       | +                                               |
|        +---------------------------------------+ /                                                |
|       / [Tier 2: Business Logic & State Bus]  /|    z-offset: 20px, scale: 0.96                  |
|      +---------------------------------------+ |                                                  |
|      |                                       | +                                                  |
|     +---------------------------------------+ /                                                   |
|     | [Tier 1: Sovereign Data & SQLite] (★) |/     z-offset: 0px, scale: 1.00 (Active)           |
|     | Isolated split databases & zero lock  |                                                     |
|     +---------------------------------------+                                                     |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface DepthLayer {
  id: string;
  layerNumber: number;
  name: string;
  badge: string;
  description: string;
  components: string[];
  isActive?: boolean;
}

export interface DepthStackSlideData extends BaseSlide {
  type: 'depth-stack';
  heading: string;
  layers: DepthLayer[];
  activeStep?: number;
}
```

#### Interaction & Kinetic Physics
- CSS perspective container: `perspective: 1200px`.
- Peeling transition: `transform: translate3d(0, -20px, 60px) rotateX(4deg)` on active step focus.

---

### Archetype 05: `reveal-grid` (RevealGridSlide)

#### Semantic Role & Purpose
Bento-style feature matrices, platform capabilities, and competitive differentiators. Staggered card entrance with independent cell reveal animations.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Core Platform Capabilities (Bento Matrix)                                                        |
|                                                                                                   |
|  +-----------------------------+ +-----------------------------+ +-----------------------------+  |
|  | Cell 1: Col-Span 2          | | Cell 2: Col-Span 1          | | Cell 3: Col-Span 1          |  |
|  | Live DOM Typography         | | 10 Corporate Palettes       | | Pure Positive Booleans      |  |
|  | Zero rasterized text        | | WCAG 2.1 AAA Compliance     | | Deterministic is*/has*      |  |
|  +-----------------------------+ +-----------------------------+ +-----------------------------+  |
|  +-----------------------------+ +-------------------------------------------------------------+  |
|  | Cell 4: Col-Span 1          | | Cell 5: Col-Span 2                                          |  |
|  | Kinetic Spring Physics      | | 15 Enterprise Slide Archetypes                              |  |
|  | 420 stiffness, 17 damping   | | Complete pitch-to-product presentation taxonomic framework  |  |
|  +-----------------------------+ +-------------------------------------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface BentoCell {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  colSpan?: 1 | 2 | 3;
  tag?: string;
  isRevealed?: boolean;
}

export interface RevealGridSlideData extends BaseSlide {
  type: 'reveal-grid';
  heading: string;
  cells: BentoCell[];
  activeStep?: number;
}
```

---

### Archetype 06: `growth-engine` (GrowthEngineSlide)

#### Semantic Role & Purpose
Marketing acquisition channels and revenue flywheels adapted directly from Global PPT. Highlights four pillars (SEO, Paid Ads, Social/Content, AI Video) with quarterly growth metrics and conversion deltas.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Multi-Channel Growth Engine & Distribution Flywheel                                              |
|                                                                                                   |
|  +----------------------+ +----------------------+ +----------------------+ +----------------------+ |
|  | [01] SEO ENGINE      | | [02] PAID ADS        | | [03] SOCIAL/CONTENT  | | [04] AI VIDEO        | |
|  | Organic Authority    | | High-Intent Capture  | | Executive Thought    | | Autonomous Media     | |
|  | +340% YoY Traffic    | | 4.8x ROAS Efficiency | | 2.4M Impressions     | | 18.5k Shares         | |
|  | [Badge: Low CAC]     | | [Badge: Scale Ready] | | [Badge: High Trust]  | | [Badge: Viral Lift]  | |
|  +----------------------+ +----------------------+ +----------------------+ +----------------------+ |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | FLYWHEEL SUMMARY: Cumulative ARR Acceleration +280% ($1.2M -> $4.5M)                        |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface GrowthChannel {
  id: string;
  title: string;
  subtitle: string;
  metricValue: string;
  metricLabel: string;
  growthDelta: string;
  badge: string;
  tactics: string[];
  isPositiveDelta?: boolean;
  isActive?: boolean;
}

export interface GrowthEngineSlideData extends BaseSlide {
  type: 'growth-engine';
  heading: string;
  summaryStat: string;
  summaryLabel: string;
  channels: GrowthChannel[];
  activeStep?: number;
}
```

---

### Archetype 07: `talent-pyramid` (TalentPyramidSlide)

#### Semantic Role & Purpose
Organizational capability modeling, hiring selectivity funnels, and engineering excellence tiers. Displays a trapezoidal hierarchy with selective qualification ratios.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Global Engineering Talent Selectivity Pyramid                                                    |
|                                                                                                   |
|                     /=========================\                                                   |
|                    /  TIER 1: PRINCIPAL & STAFF \          Top 1% Selectivity, 5 Engineers        |
|                   /=============================\                                                 |
|                  /   TIER 2: SENIOR ARCHITECTS   \         Top 5% Selectivity, 24 Engineers       |
|                 /=================================\                                               |
|                /   TIER 3: CORE PRODUCT ENGINEERS  \       Top 15% Selectivity, 80 Engineers      |
|               /=====================================\                                             |
|              / TIER 4: GLOBAL TALENT APPLICANT POOL  \     12,000+ Ingested & Evaluated Candidates|
|             /=========================================\                                           |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface PyramidTier {
  id: string;
  level: number;
  title: string;
  headcount: string;
  percentageRatio: string;
  description: string;
  isHighlighted?: boolean;
}

export interface TalentPyramidSlideData extends BaseSlide {
  type: 'talent-pyramid';
  heading: string;
  pyramidTiers: PyramidTier[];
  activeStep?: number;
}
```

---

### Archetype 08: `cost-comparison` (CostComparisonSlide)

#### Semantic Role & Purpose
Financial return on investment (ROI) and cost-benefit breakdowns. Compares in-house manual building against legacy software vendors and the sovereign White Presentation engine.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Total Cost of Ownership & ROI Comparison                                                         |
|                                                                                                   |
|  +-------------------------+   +-------------------------+   +---------------------------------+  |
|  | [In-House Manual Build] |   | [Legacy Vendor Suite]   |   | [White Presentation Engine] (★) |  |
|  | $340,000 / Year         |   | $180,000 / Year         |   | $45,000 / Year                  |  |
|  | - 6 Engineers Dedicated |   | - High per-seat tax     |   | + Sovereign code ownership      |  |
|  | - 8 Months to Ship      |   | - Rasterized image lock |   | + Live DOM dynamic typography   |  |
|  | - High Maintenance      |   | - Rigid styling lock-in |   | + Zero vendor runtime lock-in   |  |
|  | [Consequence: Deficit]  |   | [Consequence: Bloat]    |   | [NET SAVINGS: $295,000 / YEAR]  |  |
|  +-------------------------+   +-------------------------+   +---------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface ComparisonColumn {
  id: string;
  planName: string;
  annualCost: string;
  badge?: string;
  isRecommended?: boolean;
  featureList: Array<{ text: string; isIncluded: boolean }>;
}

export interface CostComparisonSlideData extends BaseSlide {
  type: 'cost-comparison';
  heading: string;
  columns: ComparisonColumn[];
  savingsCallout?: string;
}
```

---

### Archetype 09: `tech-stack` (TechStackSlide)

#### Semantic Role & Purpose
System technology ecosystem, cloud infrastructure, and toolchains categorized into horizontal infrastructure layers.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  End-to-End Technology & Runtime Architecture                                                     |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | PRESENTATION LAYER: React 18 / Vite / Tailwind CSS / Lucide Icons                           |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | STATE & AUDIO BUS: Zustand / Web Audio API / BroadcastChannel / Spring Orchestrator         |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | DATA PERSISTENCE: Split SQLite / Casbin RBAC / LocalStorage Mirror                          |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | AUTOMATION & CI: Python 3.13 / Subagent Orchestrator / GitMap / Pre-Release Verification    |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface TechLayer {
  id: string;
  category: string;
  technologies: Array<{ name: string; icon?: string; badge?: string }>;
  description: string;
}

export interface TechStackSlideData extends BaseSlide {
  type: 'tech-stack';
  heading: string;
  layers: TechLayer[];
}
```

---

### Archetype 10: `problem-solution` (ProblemSolutionSlide)

#### Semantic Role & Purpose
Executive problem-vs-solution pitch narrative. Left panel articulates the systemic business pain; right panel delivers the sovereign technological antidote.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Systemic Presentation Fragility vs Deterministic Sovereign Runtime                               |
|                                                                                                   |
|  +-----------------------------------------+   +-----------------------------------------------+  |
|  | THE SYSTEMIC PROBLEM                    |   | THE SOVEREIGN ANTIDOTE                        |  |
|  | - Rasterized typography lock-in         |   | + Pure live DOM editable typography           |  |
|  | - Fractional viewport coordinate drift   |   | + 1920x1080 strict 16:9 canvas scaling        |  |
|  | - Cluttered, ungrounded color palettes  |   | + 10-step WCAG AAA corporate palettes         |  |
|  | - Robotic linear slide transitions      |   | + Kinetic spring physics [420, 17, 0.8]       |  |
|  | - Silent, disconnected feedback loops   |   | + Acoustic cue synchronization (stepVolume)   |  |
|  +-----------------------------------------+   +-----------------------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface ProblemSolutionSlideData extends BaseSlide {
  type: 'problem-solution';
  heading: string;
  problemTitle: string;
  problemDescription: string;
  problemPoints: string[];
  solutionTitle: string;
  solutionDescription: string;
  solutionPoints: string[];
}
```

---

### Archetype 11: `metric-grid` (MetricGridSlide)

#### Semantic Role & Purpose
High-impact KPI dashboard showcasing 3 to 6 key performance metrics with trend arrows, delta percentages, and contextual timeframes.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Key Financial & Operational Metrics (Q3 2026)                                                    |
|                                                                                                   |
|  +-----------------------+ +-----------------------+ +-----------------------+                    |
|  | $4.8M                 | | +284%                 | | 99.99%                |                    |
|  | Annual Recurring Rev  | | YoY Traffic Growth    | | Platform Availability |                    |
|  | [▲ +18% vs Target]    | | [▲ +42% Organic]      | | [Verified SLA]        |                    |
|  +-----------------------+ +-----------------------+ +-----------------------+                    |
|  +-----------------------+ +-----------------------+ +-----------------------+                    |
|  | 14.2k                 | | < 45ms                | | 0.0 GB                |                    |
|  | Active Subscriptions  | | Sub-Step Audio Latency| | GitHub Actions Storage|                    |
|  | [▲ +22% MoM]          | | [Calibrated Debounce] | | [Zero-Storage Purge]  |                    |
|  +-----------------------+ +-----------------------+ +-----------------------+                    |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface MetricCard {
  id: string;
  value: string;
  label: string;
  changeDelta?: string;
  timeframe?: string;
  isPositiveDelta?: boolean;
}

export interface MetricGridSlideData extends BaseSlide {
  type: 'metric-grid';
  heading: string;
  metrics: MetricCard[];
}
```

---

### Archetype 12: `before-after` (BeforeAfterShowcaseSlide)

#### Semantic Role & Purpose
Visual transformation comparison demonstrating legacy baseline state versus modernized high-authority outcome with interactive divider sweep.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Architecture Transformation: Legacy Fragmentation -> Sovereign Precision                         |
|                                                                                                   |
|  +------------------------------------+ | +---------------------------------------------------+   |
|  | BEFORE: Legacy Architecture        | | | AFTER: Sovereign Precision                        |   |
|  | - Monolithic 4,000-line files      | | | + Modular acyclic packages (<100 lines)           |   |
|  | - Hardcoded hex colors in JSX      | | | + Unified --pres-* CSS variable runtime           |   |
|  | - Flaky subprocess unit tests      | | | + Isolated OS mocks & instant execution           |   |
|  | - Negative boolean soup            | | | + 100% positive is*/has* boolean cleanliness      |   |
|  +------------------------------------+ | +---------------------------------------------------+   |
|                                         ^                                                         |
|                             Comparative Divider Wipe                                              |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface BeforeAfterShowcaseSlideData extends BaseSlide {
  type: 'before-after';
  heading: string;
  beforeTitle: string;
  beforePoints: string[];
  beforeImage?: string;
  afterTitle: string;
  afterPoints: string[];
  afterImage?: string;
}
```

---

### Archetype 13: `testimonials` (TestimonialsSlide)

#### Semantic Role & Purpose
Executive social proof, customer quotes, and partner endorsements with verification badges and author credentials.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Enterprise Executive Endorsements                                                                |
|                                                                                                   |
|  +----------------------------------------+   +-----------------------------------------------+   |
|  | "White Presentation transformed our     |   | "The live DOM typography mandate eliminated   |   |
|  | board decks into living, deterministic  |   | our localization headaches across 14 markets. |   |
|  | software systems."                      |   | Uncompromising engineering precision."        |   |
|  |                                        |   |                                               |   |
|  | Alim Ul Karim                          |   | Sarah Jenkins                                 |   |
|  | Chief Software Engineer                |   | VP Enterprise Architecture                    |   |
|  | [Badge: Verified Sovereign Deck]       |   | [Badge: Fortune 100 Global Leader]            |   |
|  +----------------------------------------+   +-----------------------------------------------+   |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface TestimonialCard {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  companyName?: string;
  avatarUrl?: string;
  isVerified?: boolean;
}

export interface TestimonialsSlideData extends BaseSlide {
  type: 'testimonials';
  heading: string;
  testimonials: TestimonialCard[];
}
```

---

### Archetype 14: `code-terminal` (CodeTerminalSlide)

#### Semantic Role & Purpose
Technical developer walkthroughs, CLI execution logs, and architecture syntax demonstrations with macOS terminal chrome and character-by-character typing audio.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 100px, Left: 140px]                                                           |
|  Automated Zero-Storage CI/CD Execution Pipeline                                                  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | (●) (●) (●)  bash - white-presentation-runtime: 1920x1080                                  |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | $ python 03-ai-scripts/46-agent-sqlite-task-manager.py claim --agent "Worker 01"            |  |
|  | {"status": "CLAIMED", "subtaskId": 1, "taskCode": "Task-01"}                                |  |
|  |                                                                                             |  |
|  | $ python 03-ai-scripts/05-guideline-autofixer.py src/themes --check-only --ext .ts           |  |
|  | [PASS] All 2 files in 'src/themes' conform to implicit boolean rules (15.2ms)               |  |
|  |                                                                                             |  |
|  | $ python 03-ai-scripts/46-agent-sqlite-task-manager.py complete --subtask-id 1              |  |
|  | {"status": "COMPLETED", "evidence": "PASS exit 0"}                                          |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface TerminalLine {
  id: string;
  command: string;
  output?: string;
  isExecuted?: boolean;
}

export interface CodeTerminalSlideData extends BaseSlide {
  type: 'code-terminal';
  heading: string;
  terminalTitle?: string;
  lines: TerminalLine[];
  activeStep?: number;
}
```

---

### Archetype 15: `call-to-action` (CallToActionSlide)

#### Semantic Role & Purpose
Keynote decision frame, closing investor commitment, or partnership activation with dual decision CTAs and QR verification codes.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [CENTERED HERO ZONE: Top: 220px, Width: 1200px]                                                  |
|                                                                                                   |
|                                 ACCELERATE YOUR SOVEREIGN ROADMAP                                 |
|                            Building Tomorrow's Engineering Systems Today                          |
|                                                                                                   |
|                   [ Primary CTA: Deploy Sovereign Engine ]     [ Secondary: Read Architecture ]   |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | CONTACT: Alim Ul Karim, Chief Software Engineer | contact@white-presentation.org            |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface CallToActionSlideData extends BaseSlide {
  type: 'call-to-action';
  heading: string;
  leadParagraph: string;
  primaryCtaLabel: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  contactEmail?: string;
  qrCodeUrl?: string;
}
```

---

## 3. Cross-Reference Index

- Master Architecture Spec: [./01-architecture-spec.md](./01-architecture-spec.md)
- UI Design Principles: [../../02-coding-guidelines/24-app-ui-design-system/01-design-principles.md](../../02-coding-guidelines/24-app-ui-design-system/01-design-principles.md)
- Color & Motion Design System: [../25-grounded-global-ppt-and-flat-slide-synthesis/03-color-and-motion-design-system.md](../25-grounded-global-ppt-and-flat-slide-synthesis/03-color-and-motion-design-system.md)
- Slide Archetype Data Contracts: [../25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md](../25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md)
- Theme Tokens Source: [../../../src/themes/gradientTokens.ts](../../../src/themes/gradientTokens.ts)
- Sound Engine Source: [../../../src/audio/soundEngine.ts](../../../src/audio/soundEngine.ts)
