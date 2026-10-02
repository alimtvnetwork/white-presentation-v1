# 02-Slide Archetypes & Data Contracts: The 15 Grounded Slide Archetypes

> **Specification Identifier:** `25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts`  
> **Status:** `APPROVED SPECIFICATION`  
> **Target Release:** `v1.2.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Slide Data Schemas, TypeScript Interfaces, ASCII Geometries & Kinetic Choreography  

---

## 1. Architectural Foundation & Base Contract

Every slide archetype in the White Presentation engine extends the foundational `BaseSlide` contract. Every archetype adheres strictly to:
1. **Canonical 16:9 1920x1080 Viewport Geometry:** All bounding containers and coordinate calculations are fixed to exactly 1920px width by 1080px height. Fractional layout drift across disparate screen resolutions is eliminated via GPU-accelerated scaling (`transform: scale(...)`).
2. **Pure Live DOM Typography Mandate:** Textual elements—including large KPI figures, terminal lines, badges, and footnotes—render as native editable DOM elements. Baking typography into raster graphics is strictly prohibited.
3. **Stepwise Intra-Slide Progression:** Slides support interactive sub-steps (`activeStep: number`, `maxSteps: number`). Components determine item rendering phase (`"past" | "active" | "future"`) to drive spring transitions, SVG connector animations, and active halo tracking.
4. **Positive Boolean Polarity Only:** All boolean fields use positive naming conventions (`is*`, `has*`) such as `isHighlighted`, `isCompleted`, `isActive`, `isPositiveDelta`, `isVerified`, `hasGlow`, `hasBadge`, `hasBorder`. Inverted or negative booleans (`disable*`, `un*`, `isNot*`, `hidden`) are strictly forbidden.
5. **Discriminated Union:** Each slide defines a literal `type` discriminant property matching its archetype identifier.

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

---

## 2. Catalog of the 15 Grounded Slide Archetypes

```
+---------------------------------------------------------------------------------------------------+
|                                THE 15 SLIDE ARCHETYPES CATALOG                                    |
+---------------------------------------------------------------------------------------------------+
|  [01] steps             --> Interactive split sidebar & StepDetailPane spring transition          |
|  [02] timeline          --> Fluid progress rail (240px to 1680px) & springing active halo [320, 30] |
|  [03] process           --> Connected circle roadmap with SVG jumping arrows & traveling pulses   |
|  [04] depth-stack       --> 3D depth-stacked perspective cards with peel-away reveal              |
|  [05] reveal-grid       --> Bento feature matrix with staggered spring cell entrance              |
|  [06] growth-engine     --> 4 growth channels (SEO, Ads, Social/Content, AI Video) adapted from PPT|
|  [07] talent-pyramid    --> Multi-tier organizational & engineering capability pyramid            |
|  [08] cost-comparison   --> 3-column financial comparison with ROI metrics & savings calculation  |
|  [09] tech-stack        --> Layered technology ecosystem with category badges                     |
|  [10] problem-solution  --> Bilateral challenge vs sovereign solution breakdown                  |
|  [11] metric-grid       --> KPI performance dashboard with delta pills and timeframe tags         |
|  [12] before-after      --> Transformation split comparing legacy vs modernized states            |
|  [13] testimonials      --> High-authority executive quote cards with verification credentials    |
|  [14] code-terminal     --> macOS terminal window chrome with syntax-colored execution steps      |
|  [15] call-to-action    --> Closing executive decision frame with dual CTAs and contact details   |
+---------------------------------------------------------------------------------------------------+
```

---

### Archetype 01: `steps` (StepsSlide)

#### Semantic Role & Purpose
Designed for sequential onboarding, methodology walkthroughs, or implementation workflows. Displays an interactive vertical step list on the left (620px) and a dynamic detail pane on the right (min-width 820px). As the presenter steps through, the active item expands with spring physics (`stiffness: 420, damping: 17, mass: 0.8`), while past items display completed status and future items remain subdued.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADER ZONE: Top: 110px, Left: 140px, Right: 120px]                                             |
|                                                                                                   |
|  +---------------------------+   +-------------------------------------------------------------+  |
|  | LEFT STEP LIST: 620px     |   | RIGHT STEP DETAIL PANE: min-width 820px (Centered Vertically)| |
|  |                           |   |                                                             |  |
|  | [01] Discovery & Audit    |   | +---------------------------------------------------------+ |  |
|  |      Phase: "past"        |   | | ACTIVE STEP TITLE: Architectural Decomposition          | |  |
|  |                           |   | |                                                         | |  |
|  | [02] Architectural Decomp  |   | | Detail paragraph with highlighted key terms, metrics,   | |  |
|  |      Phase: "active" (★)  |-->| | and execution directives. Rendered via spring transition| |  |
|  |      Halo: [-6px, -14px]  |   | | [stiffness: 420, damping: 17, mass: 0.8].               | |  |
|  |                           |   | |                                                         | |  |
|  | [03] Deterministic Engine |   | | Optional Step Media Preview:                            | |  |
|  |      Phase: "future"      |   | | [Architecture Diagram / Code Spec / Metric Callout]     | |  |
|  |                           |   | +---------------------------------------------------------+ |  |
|  | [04] Quality Verification |   |                                                             |  |
|  |      Phase: "future"      |   |                                                             |  |
|  +---------------------------+   +-------------------------------------------------------------+  |
|                                                                                                   |
|  [FOOTER CHROME: Step 2 / 4 - Left: 140px, Bottom: 44px]                                          |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export type StepPhase = 'past' | 'active' | 'future';

export interface StepMedia {
  src: string;
  alt?: string;
  caption?: string;
  fit?: 'cover' | 'contain';
}

export interface StepItem {
  id: string;
  label: string;
  title?: string;
  detail: string;
  media?: StepMedia;
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

#### Layout Metrics & Field Constraints
- Canvas bounds: 1920px × 1080px.
- Left column width: 620px; Right detail pane: 820px max width; Column gap: 72px.
- Padding: Left 140px, Right 120px, Top 110px, Bottom 120px.
- `steps`: Minimum 2 items, maximum 8 items. If `steps.length > 6`, compact typography mode activates (fontSize 28px, item gap 10px).
- Spring config for `StepDetailPane`: `{ type: 'spring', stiffness: 420, damping: 17, mass: 0.8 }`.
- Active number pill inset: `-6px -14px` with spring `{ stiffness: 480, damping: 38, mass: 0.7 }`.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-steps-01",
  "type": "steps",
  "kicker": "EXECUTION METHODOLOGY",
  "title": "Four-Phase Sovereign Delivery Cycle",
  "heading": "Deterministic Engineering Lifecycle",
  "activeStep": 1,
  "steps": [
    {
      "id": "s1",
      "label": "Phase 01: Discovery",
      "title": "Codebase Topology & Spec Ingestion",
      "detail": "Automated scanning of repository topology, legacy dependency mapping, and reverse engineering of system invariants before modifying source code.",
      "duration": "Days 1–5",
      "isCompleted": true
    },
    {
      "id": "s2",
      "label": "Phase 02: Architecture",
      "title": "Modular Decomposition & Data Contracts",
      "detail": "Establishing leaf-type isolation, strict 100-line file boundaries, and positive boolean state machines across all system layers.",
      "duration": "Days 6–12",
      "isCompleted": false
    },
    {
      "id": "s3",
      "label": "Phase 03: Implementation",
      "title": "Subagent-Driven Parallel Refactoring",
      "detail": "Dispatching bounded subagents to execute micro-batched refactoring with atomic GitMap commits and real-time state verification.",
      "duration": "Days 13–24",
      "isCompleted": false
    },
    {
      "id": "s4",
      "label": "Phase 04: Verification",
      "title": "Continuous RCA & Release Governance",
      "detail": "Executing 4-part root cause analysis loops, headless visual regression tests, and zero-defect SemVer release tagging.",
      "duration": "Days 25–30",
      "isCompleted": false
    }
  ]
}
```

---

### Archetype 02: `timeline` (TimelineRoadmapSlide)

#### Semantic Role & Purpose
Communicates strategic roadmaps, release milestones, or corporate evolution across a horizontal progress axis. Features a continuous progress rail spanning from `railLeft = 240px` to `railRight = 1680px` (total rail width 1440px) at vertical coordinate `railY = 780px`. As steps advance, a fluid spring progress bar fills, a glowing active halo springs along the rail, and the active milestone's headline and narrative fade in at the center stage.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADING: Left: 120px, Top: 100px]                                                               |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | CENTER STAGE DETAIL: Width: 1320px, Height: 460px, Centered Horizontally, Top: 205px       |  |
|  |                                                                                             |  |
|  |              [ACTIVE MILESTONE TAG: Q2 2026 - ARCHITECTURE FREEZE]                          |  |
|  |                                                                                             |  |
|  |     MONUMENTAL TITLE: Sovereign Kernel Core Compilation                                    |  |
|  |                                                                                             |  |
|  |     Comprehensive delivery narrative explaining architectural breakthroughs, zero-drift     |  |
|  |     guarantees, and platform scale milestones achieved during this execution window.         |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  PROGRESS RAIL: Top: 778px, Height: 4px, Left: 240px, Right: 1680px (Width: 1440px)              |
|  ===================================[HALO (56x56)]---------------------------------------------    |
|       (1)                   (2) [ACTIVE]              (3)                   (4)                   |
|     Q1 2026               Q2 2026                   Q3 2026               Q4 2026                 |
|    Discovery             Core Freeze               Federation            Enterprise GA            |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface TimelineMilestone {
  id: string;
  label: string; // e.g. "Q1 2026"
  title: string; // e.g. "Sovereign Kernel Core"
  detail: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  deliverables?: string[];
  owner?: string;
  isCompleted?: boolean;
}

export interface TimelineSlideData extends BaseSlide {
  type: 'timeline';
  heading?: string;
  milestones: TimelineMilestone[];
  activeStep?: number;
}
```

#### Layout Metrics & Field Constraints
- Horizontal rail metrics: `railLeft = 240`, `railRight = 1680`, `railY = 780`, `railTop = 778`, `railWidth = 1440`.
- Node positioning: `xFor(i) = railLeft + (railWidth * i) / (milestones.length - 1)`.
- Progress width: `progressWidth = (railWidth * activeStep) / (milestones.length - 1)`.
- Active halo dimension: 56px × 56px, centered on `(xFor(activeStep), railY)`.
- Halo spring config: `{ type: 'spring', stiffness: 320, damping: 30 }`.
- Progress rail spring config: `{ type: 'spring', stiffness: 220, damping: 32 }`.
- Milestone node sizes: Active node = 34px diameter with number text; Inactive node = 20px diameter.
- `milestones`: 3 to 6 items.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-timeline-01",
  "type": "timeline",
  "kicker": "STRATEGIC ROADMAP",
  "title": "2026 Sovereign Delivery Milestones",
  "heading": "Platform Engineering Horizons",
  "activeStep": 1,
  "milestones": [
    {
      "id": "m1",
      "label": "Q1 2026",
      "title": "Autonomous Agent SDK V1",
      "detail": "Ingestion of multi-repository patterns, subagent task allocation, and deterministic 300-step execution loops.",
      "status": "completed",
      "isCompleted": true
    },
    {
      "id": "m2",
      "label": "Q2 2026",
      "title": "Declarative Presentation Engine",
      "detail": "Synthesis of Global PPT visual authority with Flat Slide Show step choreography and 10 calibrated color ramps.",
      "status": "in-progress",
      "isCompleted": false
    },
    {
      "id": "m3",
      "label": "Q3 2026",
      "title": "Distributed Multi-Node Federation",
      "detail": "Zero-latency state replication across cloud edge nodes with cryptographic audit logs and continuous verification.",
      "status": "upcoming",
      "isCompleted": false
    },
    {
      "id": "m4",
      "label": "Q4 2026",
      "title": "Enterprise Sovereign General Availability",
      "detail": "Hardened air-gapped deployments, Casbin RBAC schema enforcement, and split SQLite persistence architecture.",
      "status": "upcoming",
      "isCompleted": false
    }
  ]
}
```

---

### Archetype 03: `process` (ProcessCycleSlide)

#### Semantic Role & Purpose
Illustrates continuous compounding flywheels, agile sprints, or recurring lifecycle stages. Renders 3 to 5 circular stage nodes evenly spaced across the canvas at vertical center `cy = 620px`. Between each stage, animated SVG curved connector arrows (`M sx sy Q cx cy ex sy`) draw themselves with traveling glow pulses jumping across the gaps as the active step advances.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADING: Left: 70px, Top: 120px, Right: 70px]                                                   |
|  HEADLINE: Continuous Quality & Remediation Flywheel                                              |
|  SUBTITLE: How closed-loop root cause analysis creates compounding platform reliability           |
|                                                                                                   |
|            SVG JUMPING ARROW                     SVG JUMPING ARROW                                |
|          +--- traveling pulse ---+             +--- traveling pulse ---+                          |
|         /                         \           /                         \                         |
|        v                           v         v                           v                        |
|   +-----------+               +-----------+               +-----------+               +-----------+
|   | STAGE 01  |               | STAGE 02  |               | STAGE 03  |               | STAGE 04  |
|   | Discover  |==============>| Diagnose  |==============>| Remediate |==============>| Verify    |
|   | [Icon]    |  SVG Curve    | [Icon]    |  SVG Curve    | [Icon]    |  SVG Curve    | [Icon]    |
|   | 3 Bullets |  cy = 620     | 3 Bullets |  cy = 620     | 3 Bullets |  cy = 620     | 3 Bullets |
|   +-----------+               +-----------+               +-----------+               +-----------+
|     Node 1                      Node 2 (Active ★)           Node 3                      Node 4     |
|                                                                                                   |
|  [FLYWHEEL COMPOUNDING OUTCOME CALLOUT: Centered Bottom, Height: 70px]                            |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface ProcessStage {
  id: string;
  stepNumber: number;
  label?: string; // e.g. "Stage 01"
  title: string;  // e.g. "Automated Discovery"
  bullets: string[];
  icon?: string;
  metricBadge?: string;
  isCompleted?: boolean;
}

export interface ProcessSlideData extends BaseSlide {
  type: 'process';
  heading?: string;
  subhead?: string;
  stages: ProcessStage[];
  flywheelOutcome?: string;
  activeStep?: number;
}
```

#### Layout Metrics & Field Constraints
- Canvas bounds: 1920px × 1080px.
- Horizontal layout: `marginX = 70`, `availWidth = 1920 - (marginX * 2) = 1780`.
- Stage spacing: `stepX = availWidth / stages.length`.
- Circle diameter: `diameter = Math.min(360, stepX * 0.72)`. Radius `r = diameter / 2`.
- Center coordinates: `cy = 620`, `cx(i) = marginX + stepX * (i + 0.5)`.
- SVG connector Bézier curve: `sx = cx(i) + r * 0.72`, `ex = cx(i + 1) - r * 0.72`, `sy = cy - r * 0.62`, `cyc = cy - r * 1.32`. Path: `M ${sx} ${sy} Q ${(sx + ex) / 2} ${cyc} ${ex} ${sy}`.
- Arrow animation parameters: `arrowSpeed = 1`, `arrowDur = 0.5s`, `headDur = 0.24s`, `pulseDur = 0.6s`.
- `stages`: 3 to 5 items.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-process-01",
  "type": "process",
  "kicker": "OPERATIONAL EXCELLENCE",
  "title": "Closed-Loop Self-Healing Pipeline",
  "heading": "The Continuous Reliability Flywheel",
  "subhead": "Compounding operational integrity through automated diagnostics and atomic remediation",
  "activeStep": 1,
  "flywheelOutcome": "Zero runtime regressions and 99.999% deterministic execution across every release.",
  "stages": [
    {
      "id": "st1",
      "stepNumber": 1,
      "label": "Stage 01",
      "title": "Discover & Isolate",
      "bullets": [
        "Repository-wide AST linting",
        "Stack trace bounding",
        "Memory leakage identification"
      ],
      "icon": "Search",
      "metricBadge": "< 2s Detection",
      "isCompleted": true
    },
    {
      "id": "st2",
      "stepNumber": 2,
      "label": "Stage 02",
      "title": "4-Part RCA Analysis",
      "bullets": [
        "Root cause determination",
        "Evidence chain logging",
        "Architectural gap audit"
      ],
      "icon": "FileText",
      "metricBadge": "100% Grounded",
      "isCompleted": false
    },
    {
      "id": "st3",
      "stepNumber": 3,
      "label": "Stage 03",
      "title": "Surgical Remediation",
      "bullets": [
        "Micro-batch code refactoring",
        "Leaf-type boundary enforcement",
        "Strict 100-line compliance"
      ],
      "icon": "Wrench",
      "metricBadge": "0 Regressions",
      "isCompleted": false
    },
    {
      "id": "st4",
      "stepNumber": 4,
      "label": "Stage 04",
      "title": "Automated Release",
      "bullets": [
        "Zero-storage action cleanup",
        "SemVer tag generation",
        "Synchronized changelog publishing"
      ],
      "icon": "CheckCircle2",
      "metricBadge": "Deterministic",
      "isCompleted": false
    }
  ]
}
```

---

### Archetype 04: `depth-stack` (DepthStackSlide)

#### Semantic Role & Purpose
Creates an immersive 3D perspective depth stack of thesis cards. As the presenter advances through the sequence, the foreground card pops forward with dynamic elevation, while background cards recede with calculated z-translation, scale reduction, and opacity decay (`perspective: 1200px`). Ideal for executive thesis statements or layered principles.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [HEADING: Centered Eyebrow, Top: 120px]                                                          |
|  HEADLINE: Core Principles of Autonomous Software Engineering                                     |
|                                                                                                   |
|  PERSPECTIVE STAGE: perspective: 1200px, min-height: 440px, Centered (X, Y)                       |
|                                                                                                   |
|             +---------------------------------------------------------+                           |
|            /  BACKGROUND CARD 3 (z: -120px, scale: 0.88, opacity: 0.4) \                          |
|           +-------------------------------------------------------------+                         |
|          /  BACKGROUND CARD 2 (z: -60px, scale: 0.94, opacity: 0.7)   /                          |
|         +-------------------------------------------------------------+                           |
|         |                                                             |                           |
|         |  FOREGROUND ACTIVE CARD (z: 0px, scale: 1.0, opacity: 1.0)  |  Card Width: 1040px       |
|         |                                                             |  Card Height: 280px      |
|         |  "Deterministic Architecture Trumps Heuristic Hope"         |                           |
|         |                                                             |                           |
|         |  Every state transition must be mathematically bounded and  |                           |
|         |  reproducible without reliance on probabilistic luck.        |                           |
|         |                                                             |                           |
|         |  [Highlight Pill: Rule 01]         [Status: Enforced]       |                           |
|         +-------------------------------------------------------------+                           |
|                                                                                                   |
|  [STEP CONTROLLER: Step 1 / 3 - Centered Bottom: 80px]                                            |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface DepthStackCard {
  id: string;
  order: number;
  pill?: string;
  headline: string;
  body: string;
  accentTag?: string;
  isRevealed?: boolean;
}

export interface DepthStackSlideData extends BaseSlide {
  type: 'depth-stack';
  heading?: string;
  perspective?: number; // default 1200
  cards: DepthStackCard[];
  activeStep?: number;
}
```

#### Layout Metrics & Field Constraints
- Perspective container: `perspective: 1200px`, width: 1040px, height: 320px.
- Layer offset formulas for card at index $i$ relative to `activeStep`:
  - $\Delta = i - \text{activeStep}$.
  - If $\Delta == 0$ (active card): `translateZ: 0px`, `scale: 1.0`, `opacity: 1.0`, `zIndex: 30`.
  - If $\Delta > 0$ (future card): `translateY: Δ * 24px`, `translateZ: -Δ * 60px`, `scale: 1 - Δ * 0.06`, `opacity: Math.max(0.2, 1 - Δ * 0.3)`, `zIndex: 30 - Δ`.
  - If $\Delta < 0$ (peeled card): `translateY: -140px`, `translateZ: 80px`, `opacity: 0`, `rotateX: 12deg`.
- `cards`: 3 to 6 items.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-depth-stack-01",
  "type": "depth-stack",
  "kicker": "CORE INVARIANTS",
  "title": "Architectural Invariants & Governance",
  "heading": "The Three Sovereign Tenets",
  "perspective": 1200,
  "activeStep": 0,
  "cards": [
    {
      "id": "c1",
      "order": 1,
      "pill": "Tenet 01",
      "headline": "Deterministic Architecture Trumps Heuristic Hope",
      "body": "Every state transition, type transformation, and database write must be strictly typed, deterministic, and verifiable through automated linters.",
      "accentTag": "Strict Determinism",
      "isRevealed": true
    },
    {
      "id": "c2",
      "order": 2,
      "pill": "Tenet 02",
      "headline": "Zero-Storage Pipeline Sanitization",
      "body": "Persistent CI/CD clutter and artifact accumulation represent technical debt. All pipelines must maintain 0.0 GB storage via automated purge triggers.",
      "accentTag": "Storage Hygiene",
      "isRevealed": false
    },
    {
      "id": "c3",
      "order": 3,
      "pill": "Tenet 03",
      "headline": "Leaf-Type Isolation & 100-Line Component Boundaries",
      "body": "Monolithic files breed fragility. By enforcing 100-line component caps and leaf-type separation, systems remain modular and human-comprehensible.",
      "accentTag": "Modular Precision",
      "isRevealed": false
    }
  ]
}
```

---

### Archetype 05: `reveal-grid` (RevealGridSlide)

#### Semantic Role & Purpose
Provides an asymmetric Bento feature matrix where individual capability cards reveal themselves sequentially with spring elevation (`translateY: 28px -> 0px`) as the presenter advances sub-steps.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: SYSTEM CAPABILITIES]                                              Top Padding: 80px     |
|  HEADLINE: Modular Architecture Built for Sovereign Scale                                        |
|                                                                                                   |
|  +---------------------------+  +---------------------------+  +-------------------------------+  |
|  | [CELL 1] (Active / Rev.)  |  | [CELL 2] (Revealed)       |  | [CELL 3] (Revealed)           |  |
|  | [Icon] Split SQLite DB    |  | [Icon] Live DOM Typo      |  | [Icon] Spring Physics Engine  |  |
|  | Multi-tier schema with    |  | 100% accessible live text |  | Organic fluid choreography    |  |
|  | Casbin RBAC security      |  | with dynamic shading      |  | with calibrated stiffness     |  |
|  | [Tag: Persistence]       |  | [Tag: Accessibility]      |  | [Tag: Animation]              |  |
|  +---------------------------+  +---------------------------+  +-------------------------------+  |
|                                                                                                   |
|  +---------------------------+  +---------------------------+  +-------------------------------+  |
|  | [CELL 4] (Revealed)       |  | [CELL 5] (Revealed)       |  | [CELL 6] (Upcoming)           |  |
|  | [Icon] 100-Line Cap       |  | [Icon] 10 Theme Palettes  |  | [Icon] Zero Storage Purge     |  |
|  | Modular components        |  | Calibrated 10-step ramps  |  | Automated GitHub actions      |  |
|  | strictly <= 100 lines     |  | light/dark contrast       |  | storage governance            |  |
|  | [Tag: Code Hygiene]       |  | [Tag: Design System]      |  | [Tag: Infrastructure]         |  |
|  +---------------------------+  +---------------------------+  +-------------------------------+  |
|                                                                              Bottom Padding: 80px |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface RevealGridItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
  tag?: string;
  isHighlighted?: boolean;
}

export interface RevealGridSlideData extends BaseSlide {
  type: 'reveal-grid';
  columns?: 2 | 3;
  items: RevealGridItem[];
  activeStep?: number;
}
```

#### Layout Metrics & Field Constraints
- Outer padding: 80px horizontal, 80px vertical.
- Grid layout: 2 or 3 columns (`repeat(3, minmax(0, 1fr))`), row gap 32px, column gap 32px.
- Cell dimensions: 540px width × 260px height.
- Reveal animation: `opacity: isRevealed ? 1 : 0`, `transform: translateY(isRevealed ? 0 : 28px)`, transition: 320ms ease.
- `items`: 4 to 6 items.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-reveal-grid-01",
  "type": "reveal-grid",
  "kicker": "PLATFORM PILLARS",
  "title": "Six Pillars of Sovereign Slide Architecture",
  "columns": 3,
  "activeStep": 5,
  "items": [
    {
      "id": "rg1",
      "icon": "Database",
      "title": "Split SQLite Architecture",
      "description": "Deterministic three-tier persistence separating runtime metadata, installation configuration, and pipeline logs.",
      "tag": "Persistence",
      "isHighlighted": false
    },
    {
      "id": "rg2",
      "icon": "Type",
      "title": "Live DOM Typography",
      "description": "100% accessible live HTML text rendering with zero rasterized graphic dependencies and instant in-place editing.",
      "tag": "Typography",
      "isHighlighted": true
    },
    {
      "id": "rg3",
      "icon": "Zap",
      "title": "Spring Physics Motion",
      "description": "Snappy, organic spring transitions [420, 17, 0.8] calibrated for executive pacing without visual fatigue.",
      "tag": "Motion",
      "isHighlighted": false
    },
    {
      "id": "rg4",
      "icon": "Code2",
      "title": "Strict 100-Line Ceiling",
      "description": "Every UI presentation component is strictly constrained to 100 lines or less, enforcing clean modularity.",
      "tag": "Hygiene",
      "isHighlighted": false
    },
    {
      "id": "rg5",
      "icon": "Palette",
      "title": "10 Corporate Palettes",
      "description": "Calibrated 10-step gradient ramps delivering guaranteed WCAG AA/AAA contrast across dark and light surfaces.",
      "tag": "Design Tokens",
      "isHighlighted": false
    },
    {
      "id": "rg6",
      "icon": "Trash2",
      "title": "Zero-Storage Governance",
      "description": "Continuous automated purging of build caches, OS temp directories, and GitHub Action runners at 0.0 GB.",
      "tag": "CI/CD",
      "isHighlighted": false
    }
  ]
}
```

---

### Archetype 06: `growth-engine` (GrowthEngineSlide)

#### Semantic Role & Purpose
Adapted from production implementations in Global PPT (`SEOGrowthSlide`, `DigitalMarketing360Slide`). Visualizes 4 synchronized revenue and distribution channels: SEO Authority, Paid Acquisition, Content & Social Flywheels, and AI Video Automation. Each channel displays volume metrics, growth velocity pills, and tactical initiatives.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: ENTERPRISE DISTRIBUTION]                                          Top Padding: 80px     |
|  HEADLINE: Multi-Channel Autonomous Growth Engine                                                 |
|  SUBTITLE: Four synchronized acquisition vectors compounding organic and paid platform authority  |
|                                                                                                   |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+   |
|  | CHANNEL 1: SEO     |  | CHANNEL 2: ADS     |  | CHANNEL 3: CONTENT |  | CHANNEL 4: AI VIDEO|   |
|  |                    |  |                    |  |                    |  |                    |   |
|  | +380% Organic MoM  |  | 3.8x Blended ROAS  |  | 14.2M Monthly Imp  |  | 120+ Assets / Wk  |   |
|  |                    |  |                    |  |                    |  |                    |   |
|  | * 1st Page Dom.    |  | * Predictive Bid   |  | * Thought Leadersh.|  | * Auto Scripting   |   |
|  | * Technical Vitals |  | * Creative Sprint  |  | * Multi-Platform   |  | * Neural Synthesis |   |
|  | * Semantic Clusters|  | * CAC Compression  |  | * Executive Clips  |  | * Dynamic Avatars  |   |
|  |                    |  |                    |  |                    |  |                    |   |
|  | [Tag: Organic Fly] |  | [Tag: Paid Scale]  |  | [Tag: Brand Equity]|  | [Tag: Generative]  |   |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+   |
|                                                                                                   |
|  [FOOTER METRIC SUMMARY: 10.4x Aggregated Pipeline Growth - Bottom: 80px]                         |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface GrowthChannel {
  id: string;
  name: string;
  headlineMetric: string;
  metricLabel: string;
  growthDelta: string;
  isPositiveGrowth: boolean;
  tactics: string[];
  tag: string;
  icon: string;
}

export interface GrowthEngineSlideData extends BaseSlide {
  type: 'growth-engine';
  channels: GrowthChannel[];
  summaryNote?: string;
}
```

#### Layout Metrics & Field Constraints
- 4 equal columns: Width 395px each, gap 30px, height 520px.
- Padding: 80px horizontal, 80px vertical.
- `channels`: Exactly 4 items (SEO, Ads, Social/Content, AI Video).
- `tactics`: 3 to 4 bullet points per channel.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-growth-engine-01",
  "type": "growth-engine",
  "kicker": "ENTERPRISE DISTRIBUTION",
  "title": "Multi-Channel Autonomous Growth Engine",
  "subtitle": "Four synchronized acquisition vectors compounding organic and paid platform authority",
  "summaryNote": "Aggregated 10.4x top-of-funnel expansion with 42% lower customer acquisition cost.",
  "channels": [
    {
      "id": "ch1",
      "name": "Organic SEO Authority",
      "headlineMetric": "1.4M+",
      "metricLabel": "Monthly Search Visits",
      "growthDelta": "+380% YoY",
      "isPositiveGrowth": true,
      "tag": "Organic Velocity",
      "icon": "Search",
      "tactics": [
        "First-page domination across high-intent queries",
        "Sub-100ms Core Web Vitals optimization",
        "Programmatic topic cluster generation"
      ]
    },
    {
      "id": "ch2",
      "name": "High-Efficiency Paid Ads",
      "headlineMetric": "4.2x",
      "metricLabel": "Verified ROAS",
      "growthDelta": "-38% CAC",
      "isPositiveGrowth": true,
      "tag": "Capital Efficiency",
      "icon": "TrendingUp",
      "tactics": [
        "AI-orchestrated programmatic bidding",
        "Weekly dynamic creative sprint iterations",
        "Audience exclusion & LTV retargeting"
      ]
    },
    {
      "id": "ch3",
      "name": "Executive Content Flywheel",
      "headlineMetric": "8.6M",
      "metricLabel": "Content Impressions",
      "growthDelta": "+240% QoQ",
      "isPositiveGrowth": true,
      "tag": "Brand Gravitas",
      "icon": "Share2",
      "tactics": [
        "Bespoke technical breakdowns & case studies",
        "Omni-channel video clip syndication",
        "Executive ghostwriting & authority positioning"
      ]
    },
    {
      "id": "ch4",
      "name": "AI Video Generation",
      "headlineMetric": "180+",
      "metricLabel": "Production Assets / Mo",
      "growthDelta": "+650% Scale",
      "isPositiveGrowth": true,
      "tag": "Synthetic Media",
      "icon": "Video",
      "tactics": [
        "Script-to-render automated video pipelines",
        "Localized multi-language audio dubbing",
        "Dynamic personalized video outreach"
      ]
    }
  ]
}
```

---

### Archetype 07: `talent-pyramid` (TalentPyramidSlide)

#### Semantic Role & Purpose
Derived directly from Global PPT (`TalentPyramidSlide.tsx`). Represents an elite talent screening and organizational engineering capability hierarchy. Each layer shows candidate volume ratios (e.g. 20/1,000 sign-ups, 20-25 hr builds, Top 5% proctored hire), module descriptions, and skill verification criteria.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: HUMAN CAPITAL & ENGINEERING RIGOR]                                Top Padding: 80px     |
|  HEADLINE: The Sovereign Talent Vetting Architecture                                              |
|  SUBTITLE: Multi-tier screening funnel admitting only the top 1% of elite global software engineers|
|                                                                                                   |
|                                     / \                                                           |
|                                    /   \   TIER 5: Live Proctored Test (Top 1%)                  |
|                                   / T5  \  1-hour live coding without AI assistance.              |
|                                  +-------+                                                        |
|                                 /  TIER 4 \ TIER 4: Client Simulation (Top 3%)                    |
|                                /    T4     \ Real codebase PR simulation & architectural audit.   |
|                               +-------------+                                                     |
|                              /    TIER 3     \ TIER 3: Practical 25-Hr Build (Top 8%)             |
|                             /       T3        \ Complex full-stack distributed system build.       |
|                            +-------------------+                                                  |
|                           /       TIER 2        \ TIER 2: Layered Assessments (Top 25%)           |
|                          /          T2           \ Graded problem-solving & systems knowledge.     |
|                         +-------------------------+                                               |
|                        /          TIER 1           \ TIER 1: Initial Ingestion (20 / 1,000)       |
|                       /             T1              \ Algorithmic screening & baseline verification|
|                      +-------------------------------+                                            |
|                                                                                                   |
|  [FOOTER: 99.2% Candidate Attrition Guarantee - Bottom: 80px]                                     |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface PyramidTier {
  id: string;
  tierNumber: number; // 1 (base) to 5 (apex)
  label: string;
  filterRatio: string; // e.g. "Top 1%", "20 / 1,000"
  subtitle: string;
  description: string;
  color: string;
  icon: string;
  isApex?: boolean;
}

export interface TalentPyramidSlideData extends BaseSlide {
  type: 'talent-pyramid';
  tiers: PyramidTier[];
  attritionRate?: string;
}
```

#### Layout Metrics & Field Constraints
- Canvas bounds: 1920px × 1080px.
- Bilateral split or centered pyramid: Pyramid occupies left 800px; Detailed tier breakdown occupies right 880px, gap 60px.
- `tiers`: Exactly 4 to 5 tiers, ordered from Tier 1 (base) to Tier 5 (apex).
- `isApex`: Set to `true` on the top tier.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-talent-pyramid-01",
  "type": "talent-pyramid",
  "kicker": "ENGINEERING EXCELLENCE",
  "title": "The Sovereign Talent Vetting Architecture",
  "subtitle": "Multi-tier screening funnel admitting only the top 1% of elite global software engineers",
  "attritionRate": "99.2% Candidate Attrition Rate",
  "tiers": [
    {
      "id": "t5",
      "tierNumber": 5,
      "label": "Live Proctored Evaluation",
      "filterRatio": "Top 1%",
      "subtitle": "1-Hour Live Code (Zero AI)",
      "description": "Proctored whiteboard and live coding test under extreme time constraints without AI assistance, testing fundamental computer science grasp.",
      "color": "#EF4444",
      "icon": "ShieldAlert",
      "isApex": true
    },
    {
      "id": "t4",
      "tierNumber": 4,
      "label": "Client-Specific Simulation",
      "filterRatio": "Top 3%",
      "subtitle": "Production Environment PR",
      "description": "Tasks modeled directly on production distributed architectures, testing debugging speed, git discipline, and code hygiene.",
      "color": "#F59E0B",
      "icon": "Target",
      "isApex": false
    },
    {
      "id": "t3",
      "tierNumber": 3,
      "label": "Practical 25-Hour Build",
      "filterRatio": "Top 8%",
      "subtitle": "Expert-Designed Challenge",
      "description": "A complex 2-month system build compressed into a 25-hour deliverable, solvable only by senior engineers with genuine systems expertise.",
      "color": "#10B981",
      "icon": "Cpu",
      "isApex": false
    },
    {
      "id": "t2",
      "tierNumber": 2,
      "label": "Structured Assessments",
      "filterRatio": "Top 25%",
      "subtitle": "Foundational Modules",
      "description": "Layered training modules covering architectural decomposition, Casbin RBAC security, and deterministic state management.",
      "color": "#3B82F6",
      "icon": "BookOpen",
      "isApex": false
    },
    {
      "id": "t1",
      "tierNumber": 1,
      "label": "Initial Candidate Ingestion",
      "filterRatio": "20 / 1,000",
      "subtitle": "Aptitude Screening",
      "description": "Targeted outreach across premier engineering hubs. Rigorous alertness and reasoning filters qualify only 20 of every 1,000 applicants.",
      "color": "#6366F1",
      "icon": "Users",
      "isApex": false
    }
  ]
}
```

---

### Archetype 08: `cost-comparison` (CostComparisonSlide)

#### Semantic Role & Purpose
Derived from Global PPT (`LoseVsInvestSlide`, `PricingSlide`). Constructs a high-stakes 3-column financial model comparing In-House Hiring, Legacy Outsourcing, and Sovereign Platform Partnership. Highlights massive cost savings, opportunity loss ("How much will you lose if you don't?"), and verified ROI multiples.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: CAPITAL ALLOCATION & ROI]                                         Top Padding: 80px     |
|  HEADLINE: How Much Will You Lose If You Don't Modernize?                                         |
|  SUBTITLE: Comparative annual total cost of ownership across engineering delivery models         |
|                                                                                                   |
|  +---------------------------+  +---------------------------+  +-------------------------------+  |
|  | MODEL A: IN-HOUSE TEAM    |  | MODEL B: LEGACY AGENCY    |  | MODEL C: SOVEREIGN ENGINE (★) |  |
|  |                           |  |                           |  |                               |  |
|  | $780,000 / yr             |  | $450,000 / yr             |  | $168,000 / yr                 |  |
|  | Base + Benefits + Recr.   |  | Opaque Hourly Billing     |  | Flat Predictable Subscription |  |
|  |                           |  |                           |  |                               |  |
|  | * 4-6 Month Hiring Lag    |  | * Unpredictable Overage   |  | * Instant 24-Hr Onboarding    |  |
|  | * 35% Overhead & Taxes    |  | * Junior Developer Bait   |  | * Top 1% Dedicated Engineers  |  |
|  | * Severe Key-Person Risk  |  | * High Churn & Drift      |  | * 100% Zero-Defect Guarantee  |  |
|  |                           |  |                           |  |                               |  |
|  | Verdict: Slow & Bloated   |  | Verdict: Low Quality      |  | Verdict: 4.6x ROI & $612k Sav.|  |
|  +---------------------------+  +---------------------------+  +-------------------------------+  |
|                                                                                                   |
|  [ROI STAT: "$612,000 Annual Savings with 10x Velocity" - Bottom Padding: 80px]                   |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface ComparisonAttribute {
  label: string;
  value: string;
  isAdvantage?: boolean;
}

export interface CostModelColumn {
  id: string;
  name: string;
  annualCost: string;
  billingCadence: string;
  badge?: string;
  isFeatured?: boolean;
  bulletPoints: string[];
  attributes: ComparisonAttribute[];
  verdict: string;
}

export interface CostComparisonSlideData extends BaseSlide {
  type: 'cost-comparison';
  headlineInvert?: string; // e.g. "How much will you lose if you don't?"
  columns: CostModelColumn[];
  annualSavingsSummary?: string;
}
```

#### Layout Metrics & Field Constraints
- 3 columns: Width 520px each, gap 40px, height 560px.
- `isFeatured`: Set to `true` on the Sovereign Engine column, rendering prominent accent border, glow, and badge.
- `columns`: Exactly 3 items.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-cost-comparison-01",
  "type": "cost-comparison",
  "kicker": "CAPITAL EFFICIENCY",
  "title": "Engineering Investment vs Opportunity Loss",
  "headlineInvert": "How much will you lose if you don't?",
  "annualSavingsSummary": "$612,000 Net Annual Savings with 4.6x Faster Velocity",
  "columns": [
    {
      "id": "col1",
      "name": "Traditional In-House Hiring",
      "annualCost": "$780,000",
      "billingCadence": "per year (4 Senior Engineers)",
      "isFeatured": false,
      "bulletPoints": [
        "4 to 6 months recruitment pipeline lag",
        "30–40% benefits, payroll tax, and workstation overhead",
        "Catastrophic knowledge loss during employee turnover"
      ],
      "attributes": [
        { "label": "Time to Start", "value": "120 Days", "isAdvantage": false },
        { "label": "Code Guarantee", "value": "None", "isAdvantage": false },
        { "label": "Elasticity", "value": "Inflexible", "isAdvantage": false }
      ],
      "verdict": "Capital intensive with sluggish operational velocity"
    },
    {
      "id": "col2",
      "name": "Legacy Staff Augmentation",
      "annualCost": "$450,000",
      "billingCadence": "per year (Opaque Hourly T&M)",
      "isFeatured": false,
      "bulletPoints": [
        "Junior bait-and-switch engineering talent",
        "Runaway billable hours without verified deliverables",
        "Constant coordination overhead and architectural drift"
      ],
      "attributes": [
        { "label": "Time to Start", "value": "30 Days", "isAdvantage": false },
        { "label": "Code Guarantee", "value": "Limited SLA", "isAdvantage": false },
        { "label": "Elasticity", "value": "Moderate", "isAdvantage": false }
      ],
      "verdict": "Unpredictable costs with compromised technical quality"
    },
    {
      "id": "col3",
      "name": "Sovereign Engineering Engine",
      "annualCost": "$168,000",
      "billingCadence": "per year (Flat Retainer)",
      "badge": "RECOMMENDED PARTNERSHIP",
      "isFeatured": true,
      "bulletPoints": [
        "Immediate day-one execution with zero hiring lag",
        "Top 1% elite software engineering talent vetted by proctors",
        "Zero-defect guarantee with 4-part automated RCA"
      ],
      "attributes": [
        { "label": "Time to Start", "value": "24 Hours", "isAdvantage": true },
        { "label": "Code Guarantee", "value": "100% Zero-Defect", "isAdvantage": true },
        { "label": "Elasticity", "value": "Instantly Scalable", "isAdvantage": true }
      ],
      "verdict": "Sovereign performance: $612k saved with 10x delivery speed"
    }
  ]
}
```

---

### Archetype 09: `tech-stack` (TechStackSlide)

#### Semantic Role & Purpose
Adapted from Global PPT (`TechStackSlide.tsx`). Showcases the complete technology ecosystem categorized into clean horizontal or vertical tiers (Core Languages, Distributed Persistence, AI / Orchestration, CI/CD & Infrastructure). Each item features technology name, proficiency tier, and category badges.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: TECHNICAL INFRASTRUCTURE]                                         Top Padding: 80px     |
|  HEADLINE: Sovereign Technology Stack & Execution Ecosystem                                       |
|  SUBTITLE: Battle-tested tools and distributed systems powering deterministic enterprise platforms|
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | CATEGORY 1: SYSTEMS & RUNTIMES (Go, TypeScript, Rust, Python 3.12)                         |  |
|  | [Go: Master] [TypeScript: Master] [Rust: Systems Core] [Python: Automation Engine]         |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | CATEGORY 2: PERSISTENCE & DATA (Split SQLite, Redis, PostgreSQL, Casbin RBAC)               |  |
|  | [Split SQLite: Split DB] [PostgreSQL: Relational] [Redis: Low Latency] [Casbin: RBAC Security]|
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | CATEGORY 3: AI ORCHESTRATION & AGENTS (Google AGY SDK, LangGraph, OpenAI, Local LLMs)       |  |
|  | [AGY SDK: Primary] [OpenAI: High Reasoning] [Anthropic: Coding] [Local: Offline Sovereign] |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | CATEGORY 4: INFRASTRUCTURE & AUTOMATION (Docker, Kubernetes, GitHub Actions, GitMap CLI)    |  |
|  | [GitMap CLI: AUM Automation] [Docker: Containers] [K8s: Cluster Fleet] [Actions: 0.0 GB]   |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                              Bottom Padding: 80px |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface TechnologyItem {
  name: string;
  level: string; // e.g. "Production Core", "Mastery"
  badgeColor?: string;
  isCore?: boolean;
}

export interface TechStackCategory {
  name: string;
  icon: string;
  description?: string;
  technologies: TechnologyItem[];
}

export interface TechStackSlideData extends BaseSlide {
  type: 'tech-stack';
  categories: TechStackCategory[];
}
```

#### Layout Metrics & Field Constraints
- 4 horizontal category bands: Height 120px each, gap 20px, total container height 540px.
- Technologies rendered as rounded chips (height 44px, horizontal padding 20px).
- `categories`: 3 to 4 categories, each containing 3 to 6 technologies.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-tech-stack-01",
  "type": "tech-stack",
  "kicker": "ENGINEERING ECOSYSTEM",
  "title": "Sovereign Technology Architecture",
  "subtitle": "High-performance polyglot stack optimized for determinism, speed, and zero cloud lock-in",
  "categories": [
    {
      "name": "Core Languages & Runtimes",
      "icon": "Code",
      "description": "Deterministic compiled backends and reactive client runtimes",
      "technologies": [
        { "name": "Go 1.24", "level": "Core Backend", "isCore": true },
        { "name": "TypeScript 5.8", "level": "Type Safety", "isCore": true },
        { "name": "Rust", "level": "Systems Core", "isCore": false },
        { "name": "Python 3.12", "level": "Automation Scripting", "isCore": false }
      ]
    },
    {
      "name": "Persistence & Security",
      "icon": "Database",
      "description": "Split SQLite database architecture and Casbin RBAC schema",
      "technologies": [
        { "name": "Split SQLite", "level": "Three-Tier DB", "isCore": true },
        { "name": "Casbin RBAC", "level": "Authorization", "isCore": true },
        { "name": "Redis", "level": "In-Memory Caching", "isCore": false },
        { "name": "PostgreSQL", "level": "Enterprise Federation", "isCore": false }
      ]
    },
    {
      "name": "Autonomous Agent Tooling",
      "icon": "Bot",
      "description": "Subagent orchestration, multi-agent loops, and continuous testing",
      "technologies": [
        { "name": "Google AGY SDK", "level": "Agent Core", "isCore": true },
        { "name": "GitMap CLI", "level": "Repo Automation", "isCore": true },
        { "name": "Playwright", "level": "Headless E2E", "isCore": false },
        { "name": "Vitest", "level": "Fast Unit Testing", "isCore": false }
      ]
    },
    {
      "name": "Cloud & CI/CD Infrastructure",
      "icon": "Cloud",
      "description": "Zero-storage workflows, Docker containers, and edge distribution",
      "technologies": [
        { "name": "GitHub Actions", "level": "0.0 GB Storage", "isCore": true },
        { "name": "Docker", "level": "Immutable Builds", "isCore": true },
        { "name": "Cloudflare Workers", "level": "Edge Serving", "isCore": false },
        { "name": "Linux Bare Metal", "level": "Sovereign Host", "isCore": false }
      ]
    }
  ]
}
```

---

### Archetype 10: `problem-solution` (ProblemSolutionSlide)

#### Semantic Role & Purpose
Contrasts market friction and legacy fragility on the left against the sovereign breakthrough on the right. Emphasizes bilateral clarity, with red crossmarks on legacy problems and emerald checkmarks on sovereign solutions.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: MARKET FRICTION VS BREAKTHROUGH]                                  Top Padding: 80px     |
|  HEADLINE: Escaping The Fragile Status Quo                                                        |
|  SUBTITLE: Why enterprise software projects fail, and how sovereign engineering solves them       |
|                                                                                                   |
|  +---------------------------------------+   +---------------------------------------+            |
|  | LEFT: STATUS QUO FRAGILITY            |   | RIGHT: SOVEREIGN BREAKTHROUGH (★)     |            |
|  |                                       |   |                                       |            |
|  | [X] Monolithic, unmaintainable code   |   | [✓] Strict 100-line modular components|            |
|  | [X] Runtime exceptions in production  |   | [✓] Compile-time types & zero defects | Width: 840 |
|  | [X] Runaway cloud compute expenditure |   | [✓] Deterministic local execution     | Gap: 60px  |
|  | [X] Opaque black-box AI hallucinations|   | [✓] Grounded 4-part root cause logs   |            |
|  |                                       |   |                                       |            |
|  | Metric: 78% Enterprise Failure Rate   |   | Metric: 100% Deterministic Precision  |            |
|  +---------------------------------------+   +---------------------------------------+            |
|                                                                              Bottom Padding: 80px |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface ProblemSolutionSide {
  tag: string;
  headline: string;
  items: Array<{ title: string; description: string; icon?: string }>;
  calloutMetric?: string;
  isHighlighted?: boolean;
}

export interface ProblemSolutionSlideData extends BaseSlide {
  type: 'problem-solution';
  problem: ProblemSolutionSide;
  solution: ProblemSolutionSide;
  verdict?: string;
}
```

#### Layout Metrics & Field Constraints
- 2 equal columns: Width 840px each, gap 60px, height 540px.
- `items`: 3 to 5 items per column.
- `solution.isHighlighted`: Defaults to `true`.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-problem-solution-01",
  "type": "problem-solution",
  "kicker": "MARKET FRICTION VS BREAKTHROUGH",
  "title": "Escaping The Fragile Status Quo",
  "subtitle": "Why enterprise software projects fail, and how sovereign engineering guarantees success",
  "verdict": "Sovereign determinism completely replaces fragile heuristic development.",
  "problem": {
    "tag": "LEGACY STATUS QUO",
    "headline": "Monolithic Drift & Fragile Deployments",
    "calloutMetric": "78% Project Failure Rate",
    "isHighlighted": false,
    "items": [
      {
        "title": "Spaghetti Codebases",
        "description": "Files exceeding 1,000 lines with circular dependencies and uncontained side-effects."
      },
      {
        "title": "Runtime Production Crashing",
        "description": "Silent null pointers, unexpected typing drifts, and unhandled asynchronous rejections."
      },
      {
        "title": "Vendor Lock-In & Cloud Sprawl",
        "description": "Runaway monthly cloud invoices without ownership of infrastructure or execution logic."
      }
    ]
  },
  "solution": {
    "tag": "SOVEREIGN BREAKTHROUGH",
    "headline": "Deterministic Modular Engineering",
    "calloutMetric": "100% Zero-Defect Delivery",
    "isHighlighted": true,
    "items": [
      {
        "title": "Strict 100-Line Ceiling",
        "description": "Every presentation and service component is encapsulated under 100 lines of verified code."
      },
      {
        "title": "Compile-Time Type Safety",
        "description": "TypeScript strict mode and Go value semantics eliminate 100% of runtime nil panics."
      },
      {
        "title": "Air-Gapped Sovereign Portability",
        "description": "Deterministic SQLite split databases running locally or in any cloud with zero recurring fees."
      }
    ]
  }
}
```

---

### Archetype 11: `metric-grid` (MetricGridSlide)

#### Semantic Role & Purpose
Monumental KPI performance dashboard. Displays 4 to 6 large quantitative metrics with delta pills (+/- percentage), trend indicators, and measurement timeframes.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: PERFORMANCE METRICS]                                              Top Padding: 80px     |
|  HEADLINE: Verified Operational Scale & Growth Velocity                                           |
|  SUBTITLE: Comprehensive platform milestones demonstrating exponential infrastructure performance |
|                                                                                                   |
|  +--------------------+  +--------------------+  +--------------------+                           |
|  | $48.2M             |  | 99.999%            |  | 4.2x               |   Card Height: 240px     |
|  | Annual Run Rate    |  | Verified Uptime    |  | Compute Throughput |   Card Width: 540px      |
|  | [+324% YoY] [Q4]   |  | [+0.05% SLA][L12M] |  | [+420% YoY] [2026] |   Gap: 30px              |
|  +--------------------+  +--------------------+  +--------------------+                           |
|                                                                                                   |
|  +--------------------+  +--------------------+  +--------------------+                           |
|  | 14.8M              |  | < 12ms             |  | 98.4%              |                           |
|  | Active API Nodes   |  | P99 Edge Latency   |  | Net Retention      |                           |
|  | [+180% MoM] [Live] |  | [-45% vs Cloud]    |  | [+14% vs Index]    |                           |
|  +--------------------+  +--------------------+  +--------------------+                           |
|                                                                              Bottom Padding: 80px |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface MetricGridItem {
  id: string;
  value: string;
  label: string;
  delta: string;
  timeframe?: string;
  trend?: 'up' | 'down' | 'neutral';
  isPositiveDelta: boolean;
  icon?: string;
}

export interface MetricGridSlideData extends BaseSlide {
  type: 'metric-grid';
  columns?: 2 | 3 | 4;
  metrics: MetricGridItem[];
  footerNote?: string;
}
```

#### Layout Metrics & Field Constraints
- Grid: 2 rows of 3 columns (or 2 columns for 4 items), width 540px, height 240px, gap 30px.
- Numbers: Rendered in Ubuntu/Font-Sans bold, fontSize 56px.
- `metrics`: 4 to 6 items.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-metric-grid-01",
  "type": "metric-grid",
  "kicker": "PERFORMANCE METRICS",
  "title": "Verified Operational Scale & Growth Velocity",
  "subtitle": "Comprehensive platform milestones demonstrating exponential infrastructure performance",
  "footerNote": "Metrics independently audited and verified across 14 enterprise production deployments.",
  "columns": 3,
  "metrics": [
    { "id": "m1", "value": "$48.2M", "label": "Annual Run Rate", "delta": "+324% YoY", "timeframe": "Q4 FY26", "trend": "up", "isPositiveDelta": true },
    { "id": "m2", "value": "99.999%", "label": "Verified Uptime", "delta": "+0.05% vs SLA", "timeframe": "L12M", "trend": "up", "isPositiveDelta": true },
    { "id": "m3", "value": "4.2x", "label": "Compute Throughput", "delta": "+420% YoY", "timeframe": "2026", "trend": "up", "isPositiveDelta": true },
    { "id": "m4", "value": "14.8M", "label": "Active API Nodes", "delta": "+180% MoM", "timeframe": "Live", "trend": "up", "isPositiveDelta": true },
    { "id": "m5", "value": "< 12ms", "label": "P99 Edge Latency", "delta": "-45% vs Cloud", "timeframe": "Global", "trend": "down", "isPositiveDelta": true },
    { "id": "m6", "value": "98.4%", "label": "Net Dollar Retention", "delta": "+14% vs Benchmark", "timeframe": "Annual", "trend": "up", "isPositiveDelta": true }
  ]
}
```

---

### Archetype 12: `before-after` (BeforeAfterShowcaseSlide)

#### Semantic Role & Purpose
Demonstrates tangible customer transformation, comparing the baseline legacy state before sovereign intervention against the modernized outcome after deployment.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: ENTERPRISE TRANSFORMATION]                                        Top Padding: 80px     |
|  HEADLINE: Modernizing Enterprise Mission-Critical Systems                                        |
|  SUBTITLE: Real-world operational transformation achieved in 30 days of sovereign deployment      |
|                                                                                                   |
|  +---------------------------------------+   +---------------------------------------+            |
|  | BEFORE: LEGACY STATUS                 |   | AFTER: MODERNIZED SOVEREIGN STATE     |            |
|  |                                       |   |                                       |            |
|  | * 4-Hour Deployment Pipeline          |   | * 3-Minute Instant Deployment Loop    | Width: 840 |
|  | * 42 Production Outages Per Year      |   | * 0 Production Outages (99.999% SLA)  | Gap: 60px  |
|  | * $1.2M Annual Cloud Compute Cost     |   | * $240k Flat Fixed Annual Retainer    |            |
|  | * 14-Day Bug Resolution Turnaround    |   | * Sub-Hour Automated RCA Fix Loop     |            |
|  |                                       |   |                                       |            |
|  | [Tag: Fragile, Slow, Expensive]      |   | [Tag: Deterministic, Fast, Sovereign] |            |
|  +---------------------------------------+   +---------------------------------------+            |
|                                                                              Bottom Padding: 80px |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface BeforeAfterSide {
  title: string;
  tag?: string;
  points: string[];
  metricHighlight?: string;
  isPositive?: boolean;
}

export interface BeforeAfterSlideData extends BaseSlide {
  type: 'before-after';
  before: BeforeAfterSide;
  after: BeforeAfterSide;
}
```

#### Layout Metrics & Field Constraints
- 2 columns: Width 840px each, gap 60px, height 520px.
- `after.isPositive`: Defaults to `true`.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-before-after-01",
  "type": "before-after",
  "kicker": "ENTERPRISE TRANSFORMATION",
  "title": "Modernizing Enterprise Mission-Critical Systems",
  "subtitle": "Real-world operational transformation achieved in 30 days of sovereign deployment",
  "before": {
    "title": "Legacy Enterprise Monolith",
    "tag": "BEFORE MODERNIZATION",
    "isPositive": false,
    "metricHighlight": "4-Hour Deployments & 42 Outages/Yr",
    "points": [
      "Fragile manual release process taking over 4 hours per deployment",
      "Frequent production downtime averaging 42 outages per year",
      "Runaway cloud infrastructure bills topping $1.2M annually",
      "Two-week average resolution time for critical software bugs"
    ]
  },
  "after": {
    "title": "Sovereign Autonomous Architecture",
    "tag": "AFTER SOVEREIGN DEPLOYMENT",
    "isPositive": true,
    "metricHighlight": "3-Minute Deploys & Zero Outages",
    "points": [
      "Fully automated CI/CD pipeline completing in under 3 minutes",
      "Zero unplanned outages with mathematically verified determinism",
      "Fixed predictable retainer cutting operational spend by 80%",
      "Sub-hour automated 4-part root cause analysis and hotfix delivery"
    ]
  }
}
```

---

### Archetype 13: `testimonials` (TestimonialsSlide)

#### Semantic Role & Purpose
Derived from Global PPT (`TestimonialsSlideGorgeous.tsx`). Delivers executive social proof via high-authority quote cards featuring customer portraits, executive corporate titles, company logos, and verified partnership credentials.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: EXECUTIVE TESTIMONIALS]                                           Top Padding: 80px     |
|  HEADLINE: Trusted by Industry Engineering Leaders                                                |
|  SUBTITLE: How sovereign software engineering powers the world's most demanding enterprises       |
|                                                                                                   |
|  +---------------------------+  +---------------------------+  +-------------------------------+  |
|  | TESTIMONIAL CARD 1        |  | TESTIMONIAL CARD 2        |  | TESTIMONIAL CARD 3            |  |
|  |                           |  |                           |  |                               |  |
|  | "Riseup Asia transformed  |  | "The level of engineering |  | "Deterministic code quality   |  |
|  | our entire platform       |  | rigor and zero-defect     |  | and subagent execution saved  |  |
|  | architecture in 30 days." |  | delivery is unmatched."   |  | our team 9 months of R&D."    |  |
|  |                           |  |                           |  |                               |  |
|  | [Avatar] Marek W.         |  | [Avatar] Arefin R.        |  | [Avatar] Kishwar K.           |  |
|  | VP of Engineering         |  | Chief Architect           |  | Head of Digital               |  |
|  | Veradigm Healthcare       |  | Validata Cloud            |  | Jaxara Technologies           |  |
|  | [Badge: Verified Partner] |  | [Badge: Enterprise Elite] |  | [Badge: Strategic Alliance]   |  |
|  +---------------------------+  +---------------------------+  +-------------------------------+  |
|                                                                                                   |
|  [PARTNER LOGO STRIP: Veradigm | Validata | Jaxara | Scrum Alliance - Bottom: 80px]               |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatarUrl?: string;
  badge?: string;
  isVerified: boolean;
}

export interface TestimonialsSlideData extends BaseSlide {
  type: 'testimonials';
  testimonials: TestimonialItem[];
  partnerLogos?: string[];
}
```

#### Layout Metrics & Field Constraints
- 3 cards: Width 520px each, gap 40px, height 480px.
- Quote font: Editorial serif/sans, italicized, fontSize 22px, lineHeight 1.5.
- `testimonials`: Exactly 3 items.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-testimonials-01",
  "type": "testimonials",
  "kicker": "EXECUTIVE SOCIAL PROOF",
  "title": "Trusted by Industry Engineering Leaders",
  "subtitle": "How sovereign software engineering powers the world's most demanding enterprises",
  "partnerLogos": [
    "/assets/logos/veradigm.png",
    "/assets/logos/validata.png",
    "/assets/logos/jaxara.png"
  ],
  "testimonials": [
    {
      "id": "test1",
      "author": "Marek Wilk",
      "title": "VP of Global Engineering",
      "company": "Veradigm Healthcare",
      "quote": "Riseup Asia re-architected our legacy microservices into a deterministic, zero-defect pipeline in 30 days. Their Chief Software Engineer and team deliver unprecedented engineering rigor.",
      "avatarUrl": "/assets/marek-updated.png",
      "badge": "Verified Enterprise Client",
      "isVerified": true
    },
    {
      "id": "test2",
      "author": "Arefin Rahman",
      "title": "Chief Technology Architect",
      "company": "Validata Cloud",
      "quote": "The transition from fragile cloud orchestration to self-healing subagent loops cut our operational incidents to absolute zero. They are in a league of their own.",
      "avatarUrl": "/assets/arefin-ad1-views.png",
      "badge": "Strategic Cloud Partner",
      "isVerified": true
    },
    {
      "id": "test3",
      "author": "Kishwar Kamal",
      "title": "Head of Digital Platforms",
      "company": "Jaxara Enterprise",
      "quote": "Pure live DOM typography, 100-line modular design, and split SQLite databases gave our executive presentations the authority needed to close 8-figure partnerships.",
      "avatarUrl": "/assets/kishwar.png",
      "badge": "Executive Customer",
      "isVerified": true
    }
  ]
}
```

---

### Archetype 14: `code-terminal` (CodeTerminalSlide)

#### Semantic Role & Purpose
Developer console and syntax-colored terminal walkthrough. Emulates an authentic macOS terminal window chrome (with close/minimize/maximize buttons) displaying command lines, logs, and success outputs. Supports active step execution highlighting.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: DEVELOPER EXPERIENCE]                                             Top Padding: 80px     |
|  HEADLINE: CLI & Autonomous Agent Execution Loop                                                  |
|  SUBTITLE: Real-time subagent task dispatching and deterministic GitMap commit logging            |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | macOS TITLE BAR: (●) (●) (●)   bash — ~/workspace/sovereign-kernel (1920x620)               |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | $ gitmap run-macro --task=25-grounded-synthesis --workers=2 --step-ceiling=300              |  |
|  | [INFO] Ingesting specification 02-spec/21-app/25-grounded-global-ppt-and-flat-slide...      |  |
|  | [OK]   Discovered 15 slide archetypes with verified TypeScript leaf contracts               |  |
|  | [OK]   Spring physics initialized: StepDetailPane [420, 17, 0.8], Halo [320, 30]           |  |
|  | [STEP] Subagent 01: Refactoring StepsSlide.tsx -> 84 lines (Passes <= 100 limit)            |  |
|  | [STEP] Subagent 02: Refactoring TimelineSlide.tsx -> 92 lines (Passes <= 100 limit)         |  |
|  | [SUCCESS] All 15 slide archetypes compiled cleanly: TSC 0 errors, ESLint 0 warnings        |  |
|  | $ █                                                                                         |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                              Bottom Padding: 80px |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface TerminalLine {
  id: string;
  lineNumber?: number;
  type: 'command' | 'output' | 'success' | 'warning' | 'error' | 'comment';
  text: string;
  isExecuted?: boolean;
}

export interface CodeTerminalSlideData extends BaseSlide {
  type: 'code-terminal';
  terminalTitle?: string;
  tabs?: string[];
  activeTab?: string;
  lines: TerminalLine[];
  footnoteNote?: string;
  activeStep?: number;
}
```

#### Layout Metrics & Field Constraints
- Terminal window bounds: Width 1640px, height 620px, centered horizontally.
- macOS window chrome: Header height 44px with traffic light dots (red `#FF5F56`, yellow `#FFBD2E`, green `#27C93F`).
- Monospace font: JetBrains Mono / Fira Code, fontSize 18px, lineHeight 1.6.
- `lines`: 6 to 14 lines.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-code-terminal-01",
  "type": "code-terminal",
  "kicker": "DEVELOPER EXPERIENCE",
  "title": "Deterministic Subagent Orchestration Console",
  "subtitle": "Real-time task dispatching, atomic refactoring, and zero-defect quality gate verification",
  "terminalTitle": "zsh — antigravity-runner@sovereign-node: ~",
  "activeTab": "orchestrator.ts",
  "footnoteNote": "Execution logs generated live from 300-step continuous self-loop.",
  "activeStep": 6,
  "lines": [
    { "id": "l1", "type": "command", "text": "$ gitmap pipeline --task=25-synthesis --strict-line-cap=100", "isExecuted": true },
    { "id": "l2", "type": "comment", "text": "# Initializing subagent worker pool (A=2, H=2)", "isExecuted": true },
    { "id": "l3", "type": "output", "text": "[INIT] Loading 10-step gradient tokens and spring motion physics [420, 17, 0.8]", "isExecuted": true },
    { "id": "l4", "type": "output", "text": "[SCAN] Auditing src/components/slides/ for 15 slide archetypes...", "isExecuted": true },
    { "id": "l5", "type": "success", "text": "[PASS] StepsSlide.tsx: 88 lines (within <= 100 cap)", "isExecuted": true },
    { "id": "l6", "type": "success", "text": "[PASS] TimelineRoadmapSlide.tsx: 94 lines (within <= 100 cap)", "isExecuted": true },
    { "id": "l7", "type": "success", "text": "[PASS] ProcessCycleSlide.tsx: 91 lines (within <= 100 cap)", "isExecuted": true },
    { "id": "l8", "type": "output", "text": "[GATE] Running strict TypeScript check: tsc --noEmit", "isExecuted": true },
    { "id": "l9", "type": "success", "text": "[PASS] 0 errors, 0 warnings. Compilation succeeded in 1.42s", "isExecuted": true },
    { "id": "l10", "type": "command", "text": "$ gitmap release-tag v1.2.0 --verify-gates=all", "isExecuted": true }
  ]
}
```

---

### Archetype 15: `call-to-action` (CallToActionSlide)

#### Semantic Role & Purpose
Executive concluding decision frame. Formatted to drive immediate commercial engagement, featuring monumental closing headlines, primary/secondary action buttons, direct contact details, and QR verification.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: STRATEGIC PARTNERSHIP]                                            Top Padding: 100px    |
|                                                                                                   |
|  MONUMENTAL HEADLINE: Ready to Deploy Sovereign Engineering?                                      |
|  SUBTITLE: Schedule a confidential architecture review with our Chief Software Engineer           |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | DUAL ACTION BUTTONS:                                                                        |  |
|  | [ PRIMARY BUTTON: Schedule Executive Architecture Review ]    [ SECONDARY: Download Spec ]  |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | CONTACT & CREDENTIAL FOOTER BAR:                                                            |  |
|  | Direct Email: executive@riseup.asia           Website: https://riseup.asia                  |  |
|  | Executive Office: Singapore & Kuala Lumpur    Persona: Alim Ul Karim, Chief Software Eng.   |  |
|  | [Guarantee Pill: 100% Zero-Defect SLA]        [QR Code: Scan to Access Live Architecture]   |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                             Bottom Padding: 100px |
+---------------------------------------------------------------------------------------------------+
```

#### TypeScript Contract
```typescript
export interface ActionButton {
  label: string;
  href?: string;
  isPrimary?: boolean;
}

export interface ContactInfo {
  email: string;
  website: string;
  location?: string;
  executiveTitle: string;
}

export interface CallToActionSlideData extends BaseSlide {
  type: 'call-to-action';
  headline: string;
  body: string;
  primaryAction: ActionButton;
  secondaryAction?: ActionButton;
  contactInfo: ContactInfo;
  guaranteePill?: string;
  qrCodeUrl?: string;
}
```

#### Layout Metrics & Field Constraints
- Outer padding: 100px vertical, 120px horizontal.
- Primary CTA: Height 64px, horizontal padding 36px, font-bold, accent background.
- Executive identity constraint: `contactInfo.executiveTitle` MUST read `"Chief Software Engineer"` (never "Founder" or "CEO").

#### Canonical JSON Payload Example
```json
{
  "id": "slide-cta-01",
  "type": "call-to-action",
  "kicker": "STRATEGIC PARTNERSHIP",
  "title": "Initiate Sovereign Modernization",
  "headline": "Ready to Deploy Sovereign Engineering?",
  "body": "Schedule a private, proctored architecture review to evaluate your enterprise codebase and discover our deterministic zero-defect delivery model.",
  "guaranteePill": "100% Zero-Defect Codebase Guarantee",
  "primaryAction": {
    "label": "Schedule Executive Architecture Review",
    "href": "https://riseup.asia/consultation",
    "isPrimary": true
  },
  "secondaryAction": {
    "label": "Download Platform Engineering Spec",
    "href": "https://riseup.asia/spec",
    "isPrimary": false
  },
  "contactInfo": {
    "email": "executive@riseup.asia",
    "website": "https://riseup.asia",
    "location": "Singapore · Kuala Lumpur · Global",
    "executiveTitle": "Alim Ul Karim — Chief Software Engineer"
  },
  "qrCodeUrl": "/assets/meeting-transcript-qr.png"
}
```

---

## 3. Discriminated Union & Type Aggregation

The complete set of 15 slide archetypes is aggregated into standard TypeScript unions in `src/types/archetypes.ts`:

```typescript
export type NewSlideType =
  | 'steps'
  | 'timeline'
  | 'process'
  | 'depth-stack'
  | 'reveal-grid'
  | 'growth-engine'
  | 'talent-pyramid'
  | 'cost-comparison'
  | 'tech-stack'
  | 'problem-solution'
  | 'metric-grid'
  | 'before-after'
  | 'testimonials'
  | 'code-terminal'
  | 'call-to-action';

export type NewSlideData =
  | StepsSlideData
  | TimelineSlideData
  | ProcessSlideData
  | DepthStackSlideData
  | RevealGridSlideData
  | GrowthEngineSlideData
  | TalentPyramidSlideData
  | CostComparisonSlideData
  | TechStackSlideData
  | ProblemSolutionSlideData
  | MetricGridSlideData
  | BeforeAfterSlideData
  | TestimonialsSlideData
  | CodeTerminalSlideData
  | CallToActionSlideData;
```

---

## 4. Cross-References

| Document | Target Location | Context |
|:---|:---|:---|
| Overview Specification | [01-overview.md](01-overview.md) | Vision, 5 Pillars, Persona standardization |
| Color & Motion Design System | [03-color-and-motion-design-system.md](03-color-and-motion-design-system.md) | 10 Palettes, Less keyframes, Spring constants |
| Verification Gates | [04-verification-gates.md](04-verification-gates.md) | Quality thresholds, TSC & ESLint test suites |
| Subtask 01: Spec & Themes Plan | [.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/01-spec-and-themes.md](../../../.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/01-spec-and-themes.md) | Implementation plan for Subtask-01: Spec Foundations & Themes |
| Subtask 02: Motion & Theming Plan | [.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/02-motion-and-theming.md](../../../.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/02-motion-and-theming.md) | Implementation plan for Subtask-02: Palettes, Less animations, and sound |
| Subtask 04: Batch 2 Slides Plan | [.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/04-batch-2-slides.md](../../../.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/04-batch-2-slides.md) | Implementation plan for Subtask-04: Slides 9 to 15 |
