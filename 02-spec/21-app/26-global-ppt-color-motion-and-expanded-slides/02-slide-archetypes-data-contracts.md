# 02-Slide Archetypes & Data Contracts: The 15 New Enterprise Slide Archetypes

> **Specification Identifier:** `26-global-ppt-color-motion-and-expanded-slides/02-slide-archetypes-data-contracts`  
> **Status:** `APPROVED ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Slide Data Schemas, TypeScript Interfaces, ASCII Geometries & Kinetic Choreography  

---

## 1. Architectural Foundations & BaseSlide Contract

Every one of the 15 enterprise slide archetypes defined in this specification extends the foundational `BaseSlide` contract. Every archetype strictly satisfies the following core architectural requirements:

1. **Canonical 16:9 1920x1080 Viewport Geometry:** All bounding containers and coordinate calculations are anchored to a $1920 \times 1080$ virtual coordinate space.
2. **Pure Live DOM Typography Mandate:** Every text node (titles, subtitles, kicker bars, narrative bodies, table cells, metric digits, and footnotes) is rendered as accessible, selectable HTML elements. Under no circumstance may typography be rasterized into background images.
3. **Stepwise Intra-Slide Progression:** Slides support internal sub-step choreography (`activeStep: number`, `maxSteps: number`), resolving items into `"past" | "active" | "future"` to drive spring transitions and visual focus.
4. **Positive Boolean Polarity Only:** All boolean fields use positive naming conventions (`is*`, `has*`, `can*`, `should*`). Negative polarity fields (`isNot*`, `isDisabled`, `hidden`) and explicit comparisons (`== true`) are strictly prohibited.
5. **Leaf-Type Segregation:** Contracts are declared in leaf modules (`src/types/archetypes.ts`) and re-exported by `src/types/presentation.ts` to enforce modularity.

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

## 2. Master Catalog of the 15 New Slide Archetypes

```
+---------------------------------------------------------------------------------------------------+
|                        MASTER CATALOG: 15 NEW ENTERPRISE SLIDE ARCHETYPES                         |
+---------------------------------------------------------------------------------------------------+
|  [01] authenticity-hook  --> Narrative tension: industry myth vs ground truth with quantified stat |
|  [02] avoid-commodity    --> Bilateral contrast: commodity trap vs sovereign enterprise build     |
|  [03] chapter-divider    --> Monumental act transition with watermark numeral and topic preview    |
|  [04] lose-vs-invest     --> High-contrast commercial matrix: cost of inaction vs investment ROI  |
|  [05] next-steps-sprint  --> 30/60/90-day onboarding sprint roadmap with milestone exit criteria   |
|  [06] executive-contact  --> Alim Ul Karim executive profile, calendar booking, QR verification    |
|  [07] usp-strikethrough  --> Massive typographical differentiator with editorial strikethrough    |
|  [08] saas-pricing-tiers --> 3-tier subscription matrix with elevated recommended tier & features|
|  [09] faq-accordion      --> Technical and executive FAQ grid with interactive expand/reveal       |
|  [10] client-logo-wall   --> Symmetrical enterprise trust grid with category filters & social proof|
|  [11] swot-analysis      --> 2x2 executive strategic quadrant (Strengths, Weaknesses, Opps, Threats)|
|  [12] interactive-quiz   --> Engaging knowledge check with option cards, instant reveal, and meter |
|  [13] hardware-showcase  --> Physical device/schematic frame with interactive pulsing callout pins |
|  [14] competitor-matrix  --> Detailed capability comparison matrix with highlighted platform column|
|  [15] value-pyramid      --> Multi-tier value ladder mapping foundation to autonomous business ROI |
+---------------------------------------------------------------------------------------------------+
```

---

### Archetype 01: `authenticity-hook` (AuthenticityHookSlide)

#### Semantic Role & Purpose
Opens corporate pitches and technical keynotes by establishing the reality gap between industry hype and ground-truth failure modes. Contrasts common industry myths with hard operational realities and displays an authoritative quantified impact figure.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  INDUSTRY REALITY GAP                                        |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  The Velocity Illusion vs Sovereign Execution    |
|                                                                                                   |
|  +--------------------------------------------+  +---------------------------------------------+  |
|  | LEFT HOOK STAGE (Width: 840px, Left: 140px) |  | RIGHT REALITY STACK (Width: 760px, Left: 1020)|  |
|  | Top: 250px, Height: 660px                  |  | Top: 250px, Height: 660px                  |  |
|  |                                            |  |                                             |  |
|  | DISPLAY HERO STATEMENT (Ubuntu Bold 52px)  |  | +-----------------------------------------+ |  |
|  | "Why 84% of Enterprise Modernization       |  | | [CARD 1: THE MYTH VS GROUND TRUTH]      | |  |
|  | Initiatives Collapse Under Hidden Debt"    |  | | Myth: Low-code tools accelerate delivery| |  |
|  |                                            |  | | Truth: Brittle glue scripts multiply    | |  |
|  | Executive narrative detailing how shallow  |  | | maintenance costs by 6.4x within 18 mo  | |  |
|  | abstractions create exponential maintenance|  | +-----------------------------------------+ |  |
|  | burdens and operational stagnation.        |  |                                             |  |
|  |                                            |  | +-----------------------------------------+ |  |
|  | +----------------------------------------+ |  | | [CARD 2: THE COMPLIANCE BOTTLENECK]   | |  |
|  | | STAT CALLOUT CARD (Width: 800px)       | |  | | Myth: Cloud abstraction is secure      | |  |
|  | | Figure: $4.2 TRILLION                  | |  | | Truth: Shared tenancy leaks control    | |  |
|  | | Label: Global Annual Waste in Brittle  | |  | +-----------------------------------------+ |  |
|  | | Cloud Restructuring (Gartner Source)   | |  |                                             |  |
|  | +----------------------------------------+ |  |                                             |  |
|  +--------------------------------------------+  +---------------------------------------------+  |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Act I: The Hook & Reality Gap                           |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer padding: Top 90px, Left 140px, Right 140px, Bottom 60px.
- Left Hook Stage: `x: 140px`, `y: 250px`, `w: 840px`, `h: 660px`.
- Right Reality Stack: `x: 1020px`, `y: 250px`, `w: 760px`, `h: 660px`.
- `realityPoints`: 2 to 4 items.

#### TypeScript Contract
```typescript
export interface RealityGapPoint {
  id: string;
  myth: string;
  truth: string;
  impact: string;
  isHighlighted?: boolean;
}

export interface AuthenticityHookSlideData extends BaseSlide {
  type: 'authenticity-hook';
  hookHeadline: string;
  tensionNarrative: string;
  statFigure: string;
  statLabel: string;
  statSource?: string;
  realityPoints: RealityGapPoint[];
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-hook-01",
  "type": "authenticity-hook",
  "kicker": "INDUSTRY REALITY GAP",
  "title": "The Velocity Illusion vs Sovereign Execution",
  "hookHeadline": "Why 84% of Modernization Initiatives Collapse Under Hidden Technical Debt",
  "tensionNarrative": "Modern engineering teams are promised lightning-fast speed by third-party abstractions, only to find themselves ensnared in rigid vendor lock-in, ballooning licensing fees, and fragile dependency trees.",
  "statFigure": "$4.2 Trillion",
  "statLabel": "Annual global enterprise expenditure lost to architectural rework and cloud lock-in friction",
  "statSource": "Global Enterprise Engineering Benchmark, 2026",
  "realityPoints": [
    {
      "id": "rg-1",
      "myth": "Commercial low-code platforms reduce engineering costs long-term.",
      "truth": "Proprietary runtimes create brittle abstraction layers that require 6.4x more manual patch effort within 18 months.",
      "impact": "6.4x Maintenance Multiplier",
      "isHighlighted": true
    },
    {
      "id": "rg-2",
      "myth": "Standardizing on monolithic cloud services guarantees compliance.",
      "truth": "Hidden cross-tenant telemetry and automated updates trigger unannounced compliance drift and audit failures.",
      "impact": "99.8% Zero-Drift Mandate",
      "isHighlighted": false
    }
  ]
}
```

---

### Archetype 02: `avoid-commodity` (AvoidCommoditySlide)

#### Semantic Role & Purpose
Drives strategic differentiation by directly comparing "The Commodity Trap" (off-the-shelf templates, unowned IP, vendor fees) against "Sovereign Enterprise Architecture" (custom algorithms, deterministic reproducibility, 100% owned source assets).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  STRATEGIC DIFFERENTIATION                                  |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  The Commodity Trap vs Sovereign Architecture    |
|                                                                                                   |
|  +--------------------------------------------+  +---------------------------------------------+  |
|  | LEFT COLUMN: THE COMMODITY TRAP            |  | RIGHT COLUMN: SOVEREIGN ARCHITECTURE        |  |
|  | Top: 230px, Left: 140px, Width: 790px      |  | Top: 230px, Left: 990px, Width: 790px       |  |
|  | Card Background: Subtle Slate Wash         |  | Card Background: Translucent Accent Tint    |  |
|  | Border: 1px solid var(--pres-card-border)  |  | Border: 1.5px solid var(--pres-accent)      |  |
|  |                                            |  |                                             |  |
|  | [X] Brittle Cloud Runtime Lock-In          |  | [★] 100% Owned Source & Clean IP Rights     |  |
|  |     Tied to third-party proprietary infra  |  |     Zero third-party runtime licensing tax  |  |
|  |                                            |  |                                             |  |
|  | [X] Opaque Multi-Tenant Telemetry          |  | [★] Deterministic Zero-Drift Execution      |  |
|  |     Unpredictable performance throttles    |  |     Sub-10ms response loops across clusters |  |
|  |                                            |  |                                             |  |
|  | [X] Recurring License Escalation           |  | [★] Autonomous Subagent Fleet Scale         |  |
|  |     Per-seat penalties on team expansion   |  |     Infinite local scaling with 0 marginal fee|
|  +--------------------------------------------+  +---------------------------------------------+  |
|                                                                                                   |
|  [RESOLUTION BAR: Top: 920px, Left: 140px, Width: 1640px, Height: 72px]                           |
|  "Sovereign systems guarantee perpetual operational independence and zero third-party licensing." |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Left Column: `x: 140px`, `y: 230px`, `w: 790px`, `h: 650px`.
- Right Column: `x: 990px`, `y: 230px`, `w: 790px`, `h: 650px`.
- Resolution Bar: `x: 140px`, `y: 910px`, `w: 1640px`, `h: 74px`.
- `comparisons`: 3 to 5 comparison dimensions.

#### TypeScript Contract
```typescript
export interface CommodityComparisonItem {
  id: string;
  dimension: string;
  commodityPitfall: string;
  sovereignAdvantage: string;
  isKeyDifferentiator?: boolean;
}

export interface AvoidCommoditySlideData extends BaseSlide {
  type: 'avoid-commodity';
  commodityTitle: string;
  commoditySubtitle: string;
  sovereignTitle: string;
  sovereignSubtitle: string;
  comparisons: CommodityComparisonItem[];
  sovereignBadgeText?: string;
  summaryNote?: string;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-avoid-commodity-01",
  "type": "avoid-commodity",
  "kicker": "STRATEGIC DIFFERENTIATION",
  "title": "The Commodity Trap vs Sovereign Architecture",
  "commodityTitle": "The Commodity Trap",
  "commoditySubtitle": "Brittle, off-the-shelf third-party abstractions that decay over time",
  "sovereignTitle": "Sovereign Architecture",
  "sovereignSubtitle": "Deterministic, enterprise-owned engineering designed for perpetual autonomy",
  "sovereignBadgeText": "RECOMMENDED ENTERPRISE STANDARD",
  "summaryNote": "Sovereign infrastructure guarantees perpetual control of your enterprise roadmap without recurring third-party licensing penalties.",
  "comparisons": [
    {
      "id": "c-1",
      "dimension": "IP Ownership",
      "commodityPitfall": "Vendor-controlled proprietary formats and lock-in dependencies.",
      "sovereignAdvantage": "100% clean-room source code ownership with zero external license claims.",
      "isKeyDifferentiator": true
    },
    {
      "id": "c-2",
      "dimension": "Execution Speed",
      "commodityPitfall": "Opaque shared-cloud cold starts and unpredictable throttling.",
      "sovereignAdvantage": "Deterministic local execution with sub-10ms response loops.",
      "isKeyDifferentiator": false
    },
    {
      "id": "c-3",
      "dimension": "Cost Escalation",
      "commodityPitfall": "Per-seat tax that penalizes headcount growth and multi-tenant scaling.",
      "sovereignAdvantage": "Flat architecture cost with zero marginal licensing fees at scale.",
      "isKeyDifferentiator": true
    }
  ]
}
```

---

### Archetype 03: `chapter-divider` (ChapterDividerSlide)

#### Semantic Role & Purpose
Provides a rhythmic cognitive pause and marks major structural transitions between narrative acts (e.g. transitioning from problem definition to platform architecture). Employs an oversized ambient numeral watermark and topic preview cards.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [AMBIENT WATERMARK: Number "03", Font: 380px, Opacity: 0.04, Top: 160px, Right: 120px]           |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | CENTER STAGE ACT BLOCK (Left: 160px, Top: 240px, Width: 1600px)                             |  |
|  |                                                                                             |  |
|  | [ACT PILL BADGE: "ACT 03 / THE CAPABILITY ENGINE", Height: 36px, Accent Border]            |  |
|  |                                                                                             |  |
|  | MONUMENTAL ACT TITLE (Ubuntu Bold Italic 76px)                                              |  |
|  | High-Concurrency Mesh & Sovereign Kernel Core                                              |  |
|  |                                                                                             |  |
|  | [HORIZONTAL ACCENT RAIL: Width: 180px, Height: 4px, Rounded-Full, Accent Gradient]           |  |
|  |                                                                                             |  |
|  | EXECUTIVE PREAMBLE (Poppins Regular 24px, Leading: 1.5)                                     |  |
|  | An exhaustive technical exploration into modular decoupled services, deterministic state    |  |
|  | machines, and zero-defect release pipelines designed for high-scale operations.             |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | PREVIEW TOPICS ROW: Top: 690px, Left: 160px, Width: 1600px, 3 Cards (Width: 480px, Gap: 40px) |  |
|  | [Topic 3.1: Leaf-Type Isolation]  [Topic 3.2: 4-Plane Depth]  [Topic 3.3: Spring Physics]   |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Watermark: `x: 1300px`, `y: 120px`, `fontSize: 380px`.
- Center Act Block: `x: 160px`, `y: 220px`, `w: 1600px`.
- Preview Topics Row: `x: 160px`, `y: 690px`, `w: 1600px`, `h: 220px`.
- `topics`: 2 to 4 preview items.

#### TypeScript Contract
```typescript
export interface ChapterTopic {
  id: string;
  indexStr: string;
  title: string;
  summary: string;
  isPrimaryFocus?: boolean;
}

export interface ChapterDividerSlideData extends BaseSlide {
  type: 'chapter-divider';
  actNumber: string;
  actLabel: string;
  topicKicker?: string;
  preamble: string;
  topics: ChapterTopic[];
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-chapter-03",
  "type": "chapter-divider",
  "kicker": "ACT 03 / SYSTEM ARCHITECTURE",
  "title": "The Sovereign Capability Engine",
  "actNumber": "03",
  "actLabel": "ACT 03",
  "topicKicker": "TECHNICAL BREAKTHROUGHS",
  "preamble": "Moving beyond legacy monolithic frameworks: an exhaustive blueprint of deterministic runtime engines, pure live DOM rendering, and autonomous subagent execution loops.",
  "topics": [
    {
      "id": "ct-1",
      "indexStr": "3.1",
      "title": "Decoupled Data Contracts",
      "summary": "Strict segregation of leaf types, runtime stores, and 100-line React components.",
      "isPrimaryFocus": true
    },
    {
      "id": "ct-2",
      "indexStr": "3.2",
      "title": "4-Plane Depth Hierarchy",
      "summary": "Multi-layer spatial depth balancing canvas ground, cards, focus panes, and overlays.",
      "isPrimaryFocus": false
    },
    {
      "id": "ct-3",
      "indexStr": "3.3",
      "title": "Subagent Parallel Orchestration",
      "summary": "Micro-batched worker threads executing continuous test-free refactoring cycles.",
      "isPrimaryFocus": false
    }
  ]
}
```

---

### Archetype 04: `lose-vs-invest` (LoseVsInvestSlide)

#### Semantic Role & Purpose
Commercial decision frame designed for financial stakeholders and board members. Juxtaposes the compounding losses and operational risks of inaction against the quantified return on investment of deploying sovereign architecture.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  FINANCIAL DECISION MATRIX                                  |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  The Cost of Inaction vs Investment ROI           |
|                                                                                                   |
|  +--------------------------------------------+  +---------------------------------------------+  |
|  | LEFT COLUMN: WHAT YOU LOSE (INACTION)      |  | RIGHT COLUMN: WHAT YOU GAIN (SOVEREIGN ROI) |  |
|  | Width: 790px, Left: 140px, Top: 230px       |  | Width: 790px, Left: 990px, Top: 230px       |  |
|  | Crimson/Charcoal border tint               |  | Emerald/Violet accent border & halo glow    |  |
|  |                                            |  |                                             |  |
|  | [-] -$240,000 / Quarter in Rework          |  | [+] +3.8x Engineering Velocity              |  |
|  |     Engineering hours lost to brittle APIs |  |     Deterministic pipelines without drift   |  |
|  |                                            |  |                                             |  |
|  | [-] 3.5-Month Average Delivery Lag         |  | [+] $920,000 Annual Cloud Run Savings       |  |
|  |     Slow release cycles and blocker queues |  |     Eliminating runtime per-seat licensing  |  |
|  |                                            |  |                                             |  |
|  | [-] High CVE Security Exposure             |  | [+] 100% Deterministic Reproducibility      |  |
|  |     Third-party dependencies with exploits |  |     Clean-room audits and zero audit drift  |  |
|  +--------------------------------------------+  +---------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | BOTTOM PAYOFF BAR: Top: 890px, Left: 140px, Width: 1640px, Height: 90px                    |  |
|  | Net Payback Window: 47 Days  |  Estimated 3-Year IRR: 420%  |  Break-Even: Month 2          |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Inaction Column: `x: 140px`, `y: 230px`, `w: 790px`, `h: 630px`.
- Investment Column: `x: 990px`, `y: 230px`, `w: 790px`, `h: 630px`.
- Bottom Payoff Bar: `x: 140px`, `y: 885px`, `w: 1640px`, `h: 95px`.
- `inactionConsequences`: 3 to 4 items. `investmentReturns`: 3 to 4 items.

#### TypeScript Contract
```typescript
export interface ConsequenceItem {
  id: string;
  title: string;
  metric: string;
  description: string;
  hasCriticalImpact?: boolean;
}

export interface PayoffItem {
  id: string;
  title: string;
  metric: string;
  description: string;
  isFeaturedMetric?: boolean;
}

export interface LoseVsInvestSlideData extends BaseSlide {
  type: 'lose-vs-invest';
  inactionTitle: string;
  inactionConsequences: ConsequenceItem[];
  investmentTitle: string;
  investmentReturns: PayoffItem[];
  summaryPaybackPeriod?: string;
  summaryIrr?: string;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-lose-vs-invest-01",
  "type": "lose-vs-invest",
  "kicker": "FINANCIAL DECISION MATRIX",
  "title": "The Cost of Inaction vs Investment ROI",
  "inactionTitle": "The Cost of Inaction (Compounded Losses)",
  "investmentTitle": "Sovereign Engineering Returns (Measurable ROI)",
  "summaryPaybackPeriod": "47 Days to Full Capital Recovery",
  "summaryIrr": "420% Projected 3-Year IRR",
  "inactionConsequences": [
    {
      "id": "loss-1",
      "metric": "-$240K / Qtr",
      "title": "Unrecoverable Engineering Friction",
      "description": "Developer cycles wasted resolving brittle third-party dependency clashes.",
      "hasCriticalImpact": true
    },
    {
      "id": "loss-2",
      "metric": "3.5 Months",
      "title": "Delivery Velocity Lag",
      "description": "Competitors capitalize on market windows while releases stall in manual QA queues.",
      "hasCriticalImpact": false
    },
    {
      "id": "loss-3",
      "metric": "42 High CVEs",
      "title": "External Surface Vulnerabilities",
      "description": "Uncontrolled upstream package vulnerabilities compromising customer trust.",
      "hasCriticalImpact": true
    }
  ],
  "investmentReturns": [
    {
      "id": "gain-1",
      "metric": "+3.8x Speed",
      "title": "Subagent Pipeline Acceleration",
      "description": "Continuous automated refactoring yielding daily production-grade releases.",
      "isFeaturedMetric": true
    },
    {
      "id": "gain-2",
      "metric": "$920K Saved",
      "title": "Per-Seat License Elimination",
      "description": "Immediate cancellation of proprietary middleware subscriptions across all teams.",
      "isFeaturedMetric": true
    },
    {
      "id": "gain-3",
      "metric": "0.0% Drift",
      "title": "100% Deterministic Reproducibility",
      "description": "Bit-identical binary outputs on every commit with zero production surprises.",
      "isFeaturedMetric": false
    }
  ]
}
```

---

### Archetype 05: `next-steps-sprint` (NextStepsSprintSlide)

#### Semantic Role & Purpose
Actionable closing roadmap establishing the first 30 to 60 days of onboarding. Demonstrates operational readiness by presenting structured sprint phases with clear ownership, deliverables, and exit criteria.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  ACTIONABLE ONBOARDING PLAN                                 |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  30-Day Sovereign Implementation Sprint          |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | 4 SPRINT CARDS CONTAINER: Top: 230px, Left: 140px, Width: 1640px, Height: 740px              |  |
|  | Card Width: 380px each, Gap: 40px, Staggered Spring Entrance                               |  |
|  |                                                                                             |  |
|  | +-----------------+  +-----------------+  +-----------------+  +-----------------+          |  |
|  | | SPRINT 01       |  | SPRINT 02       |  | SPRINT 03       |  | SPRINT 04       |          |  |
|  | | Days 1–7        |  | Days 8–14       |  | Days 15–24      |  | Days 25–30      |          |  |
|  | | Discovery & Topo|  | Modular Contracts|  | Subagent Refactor|  | QA & Production |          |  |
|  | |                 |  |                 |  |                 |  |                 |          |  |
|  | | Lead: Arch Lead |  | Lead: Core Eng  |  | Lead: Fleet Ops |  | Lead: QA Spec   |          |  |
|  | |                 |  |                 |  |                 |  |                 |          |  |
|  | | Deliverables:   |  | Deliverables:   |  | Deliverables:   |  | Deliverables:   |          |  |
|  | | • Repo scanning |  | • Leaf types    |  | • 5-8 batch runs|  | • 36 CI gates   |          |  |
|  | | • Debt inventory|  | • Base contracts|  | • GitMap sync   |  | • SemVer release|          |  |
|  | | • Security gate |  | • Schema lock   |  | • Zero-build QA |  | • Production GA |          |  |
|  | |                 |  |                 |  |                 |  |                 |          |  |
|  | | Exit Gate:      |  | Exit Gate:      |  | Exit Gate:      |  | Exit Gate:      |          |  |
|  | | Sign-off spec   |  | Types compile   |  | All tasks pass |  | Tagged v1.3.0   |          |  |
|  | +-----------------+  +-----------------+  +-----------------+  +-----------------+          |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Sprints Container: `x: 140px`, `y: 230px`, `w: 1640px`, `h: 740px`.
- Card Metrics: 4 cards at `w: 380px`, `h: 700px`, `gap: 40px`.
- `sprints`: 3 to 4 sprint items.

#### TypeScript Contract
```typescript
export interface SprintPhase {
  id: string;
  phaseNumber: string;
  timeframe: string;
  title: string;
  objective: string;
  leadOwner: string;
  deliverables: string[];
  exitCriteria: string;
  isCurrentSprint?: boolean;
}

export interface NextStepsSprintSlideData extends BaseSlide {
  type: 'next-steps-sprint';
  sprintTimelineTitle: string;
  sprints: SprintPhase[];
  activeStep?: number;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-sprint-01",
  "type": "next-steps-sprint",
  "kicker": "ACTIONABLE ONBOARDING PLAN",
  "title": "30-Day Sovereign Implementation Sprint",
  "sprintTimelineTitle": "Fast-Track Enterprise Production Roadmap",
  "activeStep": 0,
  "sprints": [
    {
      "id": "sp-1",
      "phaseNumber": "01",
      "timeframe": "Days 1–7",
      "title": "Topology Discovery & Spec Ingestion",
      "objective": "Map legacy dependency trees, isolate technical debt, and establish architectural ground truth.",
      "leadOwner": "Chief Software Engineer",
      "deliverables": [
        "Repository topology and dependency graph",
        "Technical debt inventory matrix",
        "Security baseline verification"
      ],
      "exitCriteria": "Audited specification signed off with zero open ambiguities",
      "isCurrentSprint": true
    },
    {
      "id": "sp-2",
      "phaseNumber": "02",
      "timeframe": "Days 8–14",
      "title": "Modular Contracts & Leaf Types",
      "objective": "Scaffold decoupled leaf types, database schemas, and strictly bounded component interfaces.",
      "leadOwner": "Systems Architect",
      "deliverables": [
        "Leaf types declared in dedicated modules",
        "BaseSlide discriminated union extension",
        "Runtime CSS variable mappings"
      ],
      "exitCriteria": "TypeScript compiler passes with zero errors on all contracts",
      "isCurrentSprint": false
    },
    {
      "id": "sp-3",
      "phaseNumber": "03",
      "timeframe": "Days 15–24",
      "title": "Subagent Parallel Refactoring",
      "objective": "Execute micro-batched refactoring routines via concurrent subagent worker pools.",
      "leadOwner": "Platform Engineer",
      "deliverables": [
        "Micro-batched component decomposition",
        "Atomic GitMap commits",
        "Zero-build intermediate code edits"
      ],
      "exitCriteria": "All 15 archetype components implemented under 100 lines each",
      "isCurrentSprint": false
    },
    {
      "id": "sp-4",
      "phaseNumber": "04",
      "timeframe": "Days 25–30",
      "title": "QA Verification & Release Ceremony",
      "objective": "Complete 36-gate automated verification, regression audits, and tag production release.",
      "leadOwner": "Release Lead",
      "deliverables": [
        "Headless visual regression proofs",
        "All 36 CI quality checks passing exit 0",
        "Production SemVer tag and changelog"
      ],
      "exitCriteria": "Production release v1.3.0 deployed and verified",
      "isCurrentSprint": false
    }
  ]
}
```

---

### Archetype 06: `executive-contact` (ExecutiveContactSlide)

#### Semantic Role & Purpose
Final presentation close featuring the standardized executive profile of **Alim Ul Karim** as **Chief Software Engineer**, a personal delivery guarantee, direct calendar booking link (`cal.com/riseup-asia`), and mobile camera-scannable QR code.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  EXECUTIVE ACCESS & CLOSE                                    |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Direct Executive Partnership & Next Steps       |
|                                                                                                   |
|  +--------------------------------------------+  +---------------------------------------------+  |
|  | LEFT COLUMN: EXECUTIVE PERSONA (Width: 800)|  | RIGHT COLUMN: BOOKING & QR CARD (Width: 780)|  |
|  | Top: 230px, Left: 140px, Height: 740px     |  | Top: 230px, Left: 1000px, Height: 740px    |  |
|  |                                            |  |                                             |  |
|  | [AVATAR BADGE: 88x88 Rounded-Full]         |  | CALENDAR BOOKING PORTAL                     |  |
|  | ALIM UL KARIM                              |  | "Reserve a 30-Minute Architecture Briefing" |  |
|  | Chief Software Engineer                    |  |                                             |  |
|  | Verified Sovereign Lead (Badge)            |  | Direct Calendar Link: cal.com/riseup-asia   |  |
|  |                                            |  | [ACTION CTA BUTTON: "Book Strategic Call"]  |  |
|  | "Building sovereign, deterministic         |  |                                             |  |
|  | engineering systems through rigorous       |  | +-----------------------------------------+ |  |
|  | architecture and modular precision."       |  | | PURE DOM LIVE SVG QR CODE (220x220)     | |  |
|  |                                            |  | | [Reticle Corners, High-Contrast Pattern]| |  |
|  | Credentials:                               |  | | "Scan with smartphone camera to open"   | |  |
|  | • 15+ years enterprise systems architecture|  | +-----------------------------------------+ |  |
|  | • Creator of declarative presentation engine| |                                             |  |
|  | • Specialist in low-latency infrastructures|  | Direct Channels:                            |  |
|  |                                            |  | Email: alim@riseup.asia                     |  |
|  | PERSONAL GUARANTEE:                        |  | Hub: Singapore & Distributed Enterprise     |  |
|  | "Direct architectural oversight on every   |  |                                             |  |
|  | production milestone with zero delegation."|  |                                             |  |
|  +--------------------------------------------+  +---------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Left Column: `x: 140px`, `y: 230px`, `w: 800px`, `h: 740px`.
- Right Column: `x: 1000px`, `y: 230px`, `w: 780px`, `h: 740px`.
- QR Container: `w: 260px`, `h: 260px`, centered in right booking card.
- Executive persona title is strictly locked to `"Chief Software Engineer"`.

#### TypeScript Contract
```typescript
export interface ExecutivePersona {
  name: string;
  role: string; // Strictly "Chief Software Engineer"
  quote: string;
  bioBullets: string[];
  avatarUrl?: string;
  isVerified?: boolean;
  location?: string;
}

export interface ExecutiveContactSlideData extends BaseSlide {
  type: 'executive-contact';
  persona: ExecutivePersona;
  bookingUrl: string;
  email: string;
  phone?: string;
  qrCodeValue: string;
  ctaButtonText: string;
  guaranteeNote: string;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-contact-01",
  "type": "executive-contact",
  "kicker": "EXECUTIVE ACCESS & CLOSE",
  "title": "Direct Executive Partnership & Next Steps",
  "persona": {
    "name": "Alim Ul Karim",
    "role": "Chief Software Engineer",
    "quote": "Building sovereign, deterministic engineering systems through rigorous architecture and modular precision.",
    "bioBullets": [
      "Chief Software Engineer architecting high-scale enterprise platforms and distributed systems",
      "Pioneer of declarative presentation engines and AI-orchestrated workflows",
      "Specialist in low-latency infrastructure and zero-defect delivery pipelines"
    ],
    "avatarUrl": "/assets/alim-profile.png",
    "isVerified": true,
    "location": "Singapore & Global Remote"
  },
  "bookingUrl": "https://cal.com/riseup-asia",
  "email": "alim@riseup.asia",
  "phone": "+65 8000 1234",
  "qrCodeValue": "https://cal.com/riseup-asia",
  "ctaButtonText": "Schedule Architectural Briefing",
  "guaranteeNote": "Every enterprise deployment receives direct personal code review and architecture sign-off from Chief Software Engineer Alim Ul Karim."
}
```

---

### Archetype 07: `usp-strikethrough` (UspStrikethroughSlide)

#### Semantic Role & Purpose
Delivers a high-impact typographical USP hook by visually contrasting an affirmative brand promise with an explicit visual rejection of industry malpractice via an editorial strikethrough, backed by a horizontal cluster of 3 verifiable commitment cards.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  THE SOVEREIGN ADVANTAGE                                    |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | HERO STRIKETHROUGH STATEMENT: Top: 160px, Left: 140px, Width: 1640px, Height: 380px        |  |
|  | Ubuntu Bold Italic (Font-size: 104px, Line-Height: 1.02)                                    |  |
|  |                                                                                             |  |
|  | Software engineered for                                                                     |  |
|  | <span style="color: var(--pres-accent)">perpetual autonomy</span>,                          |  |
|  | not <span style="text-decoration: line-through; color: var(--pres-text-muted)">vendor lock-in</span>.|
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | 3-POINT PROOF CARDS CLUSTER: Top: 600px, Left: 140px, Width: 1640px, Height: 360px         |  |
|  | 3 Cards (Width: 510px each, Gap: 55px, Frosted Glass, Border: 1px solid var(--pres-card-border)|
|  |                                                                                             |  |
|  | [CARD 1: OWNED SOURCE]       [CARD 2: ZERO RUNTIME TAX]     [CARD 3: SUB-10MS LATENCY]      |  |
|  | Icon: ShieldCheck            Icon: Cpu                      Icon: Zap                       |  |
|  | 100% IP Autonomy             Zero Per-Seat Licensing        Sub-10ms Pipeline Execution     |  |
|  | Complete source ownership    No monthly runtime fee         Deterministic local execution   |  |
|  | with clean-room audit trail. penalties as team scales.       with zero cold-start latency.   |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Hero Strike Block: `x: 140px`, `y: 160px`, `w: 1640px`, `h: 380px`.
- 3 Proof Cards: `x: 140px`, `y: 590px`, `w: 1640px`, `h: 370px`. Each card `w: 510px`, `gap: 55px`.
- `proofCards`: Exactly 3 proof items.

#### TypeScript Contract
```typescript
export interface ProofCard {
  id: string;
  icon: string;
  badgeText: string;
  headline: string;
  description: string;
  hasVerificationBadge?: boolean;
}

export interface UspStrikethroughSlideData extends BaseSlide {
  type: 'usp-strikethrough';
  prefixText: string;
  affirmationText: string;
  rejectionPrefixText: string;
  strikethroughText: string;
  suffixText?: string;
  proofCards: ProofCard[];
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-usp-01",
  "type": "usp-strikethrough",
  "kicker": "THE SOVEREIGN ADVANTAGE",
  "title": "Autonomy Over Proprietary Lock-In",
  "prefixText": "Software engineered for ",
  "affirmationText": "perpetual autonomy",
  "rejectionPrefixText": ", not ",
  "strikethroughText": "vendor lock-in",
  "suffixText": ".",
  "proofCards": [
    {
      "id": "pc-1",
      "icon": "ShieldCheck",
      "badgeText": "IP SOVEREIGNTY",
      "headline": "100% Clean Source Ownership",
      "description": "You own and operate the complete codebase with zero external runtime licensing claims.",
      "hasVerificationBadge": true
    },
    {
      "id": "pc-2",
      "icon": "Cpu",
      "badgeText": "FLAT ECONOMICS",
      "headline": "Zero Per-Seat Runtime Penalties",
      "description": "Scale from 10 to 10,000 developers without paying a single dollar in marginal seat licenses.",
      "hasVerificationBadge": true
    },
    {
      "id": "pc-3",
      "icon": "Zap",
      "badgeText": "DETERMINISM",
      "headline": "Sub-10ms Pipeline Loops",
      "description": "Ultra-fast local builds and automated verification loops eliminating developer wait fatigue.",
      "hasVerificationBadge": true
    }
  ]
}
```

---

### Archetype 08: `saas-pricing-tiers` (SaaSPricingTiersSlide)

#### Semantic Role & Purpose
Commercial subscription slide laying out 3 structured pricing tiers (Starter, Professional, Enterprise Sovereign), with the center Professional tier prominently elevated ($1.04\times$ scale) with glowing accent borders and a structured feature checklist.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 80px, Left: 140px]  --  TRANSPARENT LICENSING                                       |
|  [SLIDE TITLE (H1): Top: 115px, Left: 140px]  --  Predictable Enterprise Tiering                   |
|  [CADENCE PILL: Top: 125px, Right: 140px]  --  "Annual Billing (20% Savings Applied)"            |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | 3-TIER PRICING GRID: Top: 200px, Left: 140px, Width: 1640px, Height: 780px                  |  |
|  |                                                                                             |  |
|  | +--------------------+  +----------------------------+  +--------------------+              |  |
|  | | TIER 1: STARTER    |  | TIER 2: PROFESSIONAL       |  | TIER 3: SOVEREIGN  |              |  |
|  | | Width: 490px       |  | Width: 540px [ELEVATED 1.04|  | Width: 490px       |              |  |
|  | | $1,200 / month     |  | $3,800 / month             |  | Custom Enterprise  |              |  |
|  | |                    |  | [RECOMMENDED ACCENT BADGE] |  |                    |              |  |
|  | | Core team package  |  | Enterprise scale tier      |  | Full custom engine |              |  |
|  | |                    |  |                            |  |                    |              |  |
|  | | [✓] Up to 10 seats |  | [✓] Up to 50 seats         |  | [✓] Unlimited seats|              |  |
|  | | [✓] Standard engine|  | [✓] High-concurrency mesh  |  | [✓] Custom kernels |              |  |
|  | | [✓] 50 runs / day  |  | [✓] Unlimited worker runs  |  | [✓] Dedicated pool |              |  |
|  | | [ ] Subagent fleet |  | [✓] 2 Subagent worker fleet|  | [✓] Infinite fleet |              |  |
|  | | [ ] Air-gap deploy |  | [ ] Air-gap deploy         |  | [✓] 100% Air-gapped|              |  |
|  | |                    |  |                            |  |                    |              |  |
|  | | [Choose Starter]   |  | [Deploy Professional ★]   |  | [Contact Partner]  |              |  |
|  +--------------------+  +----------------------------+  +--------------------+              |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. 3-Tier Grid: `x: 140px`, `y: 200px`, `w: 1640px`, `h: 780px`.
- Starter Tier: `w: 490px`, `h: 740px`.
- Professional Tier: `w: 540px`, `h: 770px`, scale `1.04`, centered at `x: 690px`.
- Enterprise Tier: `w: 490px`, `h: 740px`, `x: 1290px`.
- `tiers`: Exactly 3 pricing tiers.

#### TypeScript Contract
```typescript
export interface PricingFeatureItem {
  id: string;
  featureName: string;
  isIncluded: boolean;
  tooltipNote?: string;
}

export interface PricingTier {
  id: string;
  tierName: string;
  price: string;
  billingPeriod: string;
  badgeText?: string;
  description: string;
  features: PricingFeatureItem[];
  ctaText: string;
  isRecommended?: boolean;
}

export interface SaaSPricingTiersSlideData extends BaseSlide {
  type: 'saas-pricing-tiers';
  billingCadence: string;
  tiers: PricingTier[];
  disclaimerNote?: string;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-pricing-01",
  "type": "saas-pricing-tiers",
  "kicker": "TRANSPARENT LICENSING",
  "title": "Predictable Enterprise Tiering",
  "billingCadence": "Annual Billing (20% Savings Applied)",
  "disclaimerNote": "All tiers include full code ownership rights and zero per-seat marginal fees.",
  "tiers": [
    {
      "id": "pt-1",
      "tierName": "Starter Core",
      "price": "$1,200",
      "billingPeriod": "/month",
      "description": "Ideal for fast-moving engineering teams standardizing on declarative presentation architecture.",
      "ctaText": "Select Starter",
      "isRecommended": false,
      "features": [
        { "id": "f1", "featureName": "Up to 10 Engineer Seats", "isIncluded": true },
        { "id": "f2", "featureName": "15 Standard Slide Archetypes", "isIncluded": true },
        { "id": "f3", "featureName": "50 Automated CI Runs / Day", "isIncluded": true },
        { "id": "f4", "featureName": "Autonomous Subagent Fleet", "isIncluded": false },
        { "id": "f5", "featureName": "Air-Gapped Cluster Deployment", "isIncluded": false }
      ]
    },
    {
      "id": "pt-2",
      "tierName": "Professional Mesh",
      "price": "$3,800",
      "billingPeriod": "/month",
      "badgeText": "RECOMMENDED FOR ENTERPRISE",
      "description": "High-scale engineering departments requiring continuous subagent orchestration and zero-defect QA.",
      "ctaText": "Deploy Professional Mesh",
      "isRecommended": true,
      "features": [
        { "id": "f1", "featureName": "Up to 50 Engineer Seats", "isIncluded": true },
        { "id": "f2", "featureName": "All 30+ Enterprise Archetypes", "isIncluded": true },
        { "id": "f3", "featureName": "Unlimited Automated CI Runs", "isIncluded": true },
        { "id": "f4", "featureName": "Autonomous Subagent Fleet (A=2)", "isIncluded": true },
        { "id": "f5", "featureName": "Air-Gapped Cluster Deployment", "isIncluded": false }
      ]
    },
    {
      "id": "pt-3",
      "tierName": "Sovereign Enterprise",
      "price": "$12,000",
      "billingPeriod": "/month",
      "description": "Full custom runtime architecture for defense, banking, and clinical enterprise infrastructures.",
      "ctaText": "Consult Lead Engineer",
      "isRecommended": false,
      "features": [
        { "id": "f1", "featureName": "Unlimited Global Seats", "isIncluded": true },
        { "id": "f2", "featureName": "Custom Archetype Authoring", "isIncluded": true },
        { "id": "f3", "featureName": "Unlimited Worker Pools", "isIncluded": true },
        { "id": "f4", "featureName": "Autonomous Subagent Fleet (A=8)", "isIncluded": true },
        { "id": "f5", "featureName": "Air-Gapped Cluster Deployment", "isIncluded": true }
      ]
    }
  ]
}
```

---

### Archetype 09: `faq-accordion` (FaqAccordionSlide)

#### Semantic Role & Purpose
De-risks enterprise transactions by systematically resolving technical, architectural, and procurement objections in a clean 2-column bento accordion matrix.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  EXECUTIVE FREQUENTLY ASKED QUESTIONS                       |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  De-risking Enterprise Deployment                |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | 2-COLUMN FAQ MATRIX: Top: 230px, Left: 140px, Width: 1640px, Height: 750px                  |  |
|  | Column Width: 790px each, Gap: 60px                                                         |  |
|  |                                                                                             |  |
|  | [LEFT COLUMN: 3 FAQ ITEMS]                    [RIGHT COLUMN: 3 FAQ ITEMS]                   |  |
|  | +-----------------------------------------+   +-----------------------------------------+   |  |
|  | | FAQ 01: IP OWNERSHIP & LICENSING        |   | FAQ 04: AUTOMATED SUBAGENT SAFETY       |   |  |
|  | | Category: Security & IP [HIGHLIGHTED]   |   | Category: Code Quality                  |   |  |
|  | | Q: How do we retain source rights?      |   | Q: How do subagents prevent regression? |   |  |
|  | | A: 100% clean-room source is transferred|   | A: Micro-batched 5-8 file edits with    |   |  |
|  | | to your repo with zero claim from us.   |   | strict 36-gate automated verification.  |   |  |
|  | +-----------------------------------------+   +-----------------------------------------+   |  |
|  | +-----------------------------------------+   +-----------------------------------------+   |  |
|  | | FAQ 02: AIR-GAPPED ON-PREMISE DEPLOY    |   | FAQ 05: ONBOARDING & TEAM TRAINING      |   |  |
|  | | Category: Infrastructure                |   | Category: Enablement                    |   |  |
|  | | Q: Can it run with zero internet access?|   | Q: What training is provided?           |   |  |
|  | | A: Yes, SQLite split-DB runs local.     |   | A: Complete architectural onboarding.   |   |  |
|  | +-----------------------------------------+   +-----------------------------------------+   |  |
|  | +-----------------------------------------+   +-----------------------------------------+   |  |
|  | | FAQ 03: CLOUD MIGRATION TIMELINE        |   | FAQ 06: SLA & DEDICATED SUPPORT         |   |  |
|  | | Category: Operations                    |   | Category: Governance                    |   |  |
|  | | Q: How long does migration take?        |   | Q: What SLA guarantees are in place?    |   |  |
|  | | A: 30-day structured sprint plan.       |   | A: 99.99% uptime with 1-hr response.    |   |  |
|  | +-----------------------------------------+   +-----------------------------------------+   |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Left Column: `x: 140px`, `y: 230px`, `w: 790px`, `h: 750px`.
- Right Column: `x: 990px`, `y: 230px`, `w: 790px`, `h: 750px`.
- `faqs`: 4 to 6 items.

#### TypeScript Contract
```typescript
export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  isHighlighted?: boolean;
  isExpanded?: boolean;
}

export interface FaqAccordionSlideData extends BaseSlide {
  type: 'faq-accordion';
  introSummary?: string;
  faqs: FaqItem[];
  activeStep?: number;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-faq-01",
  "type": "faq-accordion",
  "kicker": "EXECUTIVE FREQUENTLY ASKED QUESTIONS",
  "title": "De-risking Enterprise Deployment",
  "introSummary": "Clear, binding answers to the most common architectural and procurement questions.",
  "activeStep": 0,
  "faqs": [
    {
      "id": "faq-1",
      "category": "IP & Licensing",
      "question": "Does our enterprise retain complete ownership of all created presentation decks and custom components?",
      "answer": "Yes. 100% of all authored data contracts, schemas, components, and exported assets belong exclusively to your organization under standard enterprise IP assignment.",
      "isHighlighted": true,
      "isExpanded": true
    },
    {
      "id": "faq-2",
      "category": "Security & Air-Gap",
      "question": "Can this presentation system operate in completely air-gapped environments without external internet connectivity?",
      "answer": "Yes. The presentation runtime is entirely self-contained with zero third-party CDN dependencies, utilizing local Web Audio synthesizers and bundled webfonts.",
      "isHighlighted": false,
      "isExpanded": false
    },
    {
      "id": "faq-3",
      "category": "Code Quality",
      "question": "How does the system guarantee zero regressions during automated subagent refactoring?",
      "answer": "Every modification is bounded to 5–8 file micro-batches backed by automated AST linters and 36 parallel CI quality gates running locally before merge.",
      "isHighlighted": false,
      "isExpanded": false
    },
    {
      "id": "faq-4",
      "category": "Migration Speed",
      "question": "What is the typical time required to migrate our legacy PowerPoint or Keynote decks?",
      "answer": "Our automated schema ingesters convert standard decks into declarative JSON slides in hours, followed by a 7-day visual polish sprint.",
      "isHighlighted": false,
      "isExpanded": false
    }
  ]
}
```

---

### Archetype 10: `client-logo-wall` (ClientLogoWallSlide)

#### Semantic Role & Purpose
Establishes undeniable market credibility through a symmetrical grid of enterprise client logos, industry certifications, and social proof trust metrics.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  PROVEN ENTERPRISE TRUST                                     |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Trusted by Industry Leaders Worldwide            |
|  [CATEGORY PILLS: Top: 140px, Right: 140px]  --  [All]  [Global 2000]  [Fintech]  [Healthcare]   |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | LOGO GRID (2 ROWS x 5 COLUMNS): Top: 230px, Left: 140px, Width: 1640px, Height: 440px       |  |
|  | 10 Logo Tiles (Width: 300px each, Height: 190px, Gap: 35px)                                 |  |
|  | Frosted Glass Surface, Subtle Border, Live DOM Vector Typography / SVG Brand Emblem         |  |
|  |                                                                                             |  |
|  | [TILE 01: ACME CORP]  [TILE 02: HELIX BIO]   [TILE 03: NEXUS PAY]  [TILE 04: AETHER CLOUD]   |  |
|  | [TILE 05: VERTEX AI]  [TILE 06: CORE LOGIC]  [TILE 07: STRATA SEC] [TILE 08: PULSE HEALTH]  |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | TRUST METRICS FOOTER BAR: Top: 730px, Left: 140px, Width: 1640px, Height: 230px              |  |
|  | 4 Highlighted Proof Badges:                                                                 |  |
|  | • 45+ Global Enterprise Deployments Across 14 Sovereign Jurisdictions                       |  |
|  | • 99.999% Service Uptime Across All Production Infrastructure Clusters                       |  |
|  | • Zero Security Vulnerabilities Reported Across 4 Years of Operation                        |  |
|  | • ISO/IEC 27001 & SOC 2 Type II Certified Compliance Infrastructure                          |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Logo Grid: `x: 140px`, `y: 230px`, `w: 1640px`, `h: 460px`.
- Tile dimensions: `w: 300px`, `h: 200px`, `gap: 35px`.
- Trust Badges Bar: `x: 140px`, `y: 740px`, `w: 1640px`, `h: 220px`.
- `logos`: 8 to 12 logos. `trustBadges`: 3 to 4 badges.

#### TypeScript Contract
```typescript
export interface ClientLogo {
  id: string;
  clientName: string;
  industry: string;
  logoUrl?: string;
  proofMetric?: string;
  isKeyPartner?: boolean;
}

export interface TrustBadge {
  id: string;
  label: string;
  value: string;
  isVerified?: boolean;
}

export interface ClientLogoWallSlideData extends BaseSlide {
  type: 'client-logo-wall';
  clientSubtitle?: string;
  activeCategory?: string;
  logos: ClientLogo[];
  trustBadges: TrustBadge[];
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-logos-01",
  "type": "client-logo-wall",
  "kicker": "PROVEN ENTERPRISE TRUST",
  "title": "Trusted by Industry Leaders Worldwide",
  "clientSubtitle": "Over 45 enterprise engineering organizations depend on our sovereign presentation engine.",
  "activeCategory": "All",
  "logos": [
    { "id": "cl-1", "clientName": "Apex Global Bank", "industry": "Financial Services", "proofMetric": "3.8x Speed", "isKeyPartner": true },
    { "id": "cl-2", "clientName": "BioGen Technologies", "industry": "Clinical Healthcare", "proofMetric": "Zero Defect", "isKeyPartner": true },
    { "id": "cl-3", "clientName": "Aether Cloud Infrastructure", "industry": "Cloud Computing", "proofMetric": "99.999% SLA", "isKeyPartner": false },
    { "id": "cl-4", "clientName": "Strata Defense Systems", "industry": "Aerospace & Defense", "proofMetric": "Air-Gapped", "isKeyPartner": true },
    { "id": "cl-5", "clientName": "Pulse Health Networks", "industry": "HealthTech", "proofMetric": "24h SLA", "isKeyPartner": false },
    { "id": "cl-6", "clientName": "Vortex Autonomous AI", "industry": "Artificial Intelligence", "proofMetric": "Subagent Mesh", "isKeyPartner": false },
    { "id": "cl-7", "clientName": "Omni Retail Logistics", "industry": "Global Logistics", "proofMetric": "100% Owned", "isKeyPartner": false },
    { "id": "cl-8", "clientName": "Quantum Capital Partners", "industry": "Venture & Private Equity", "proofMetric": "420% IRR", "isKeyPartner": false }
  ],
  "trustBadges": [
    { "id": "tb-1", "label": "Enterprise Deployments", "value": "45+ Global Clients", "isVerified": true },
    { "id": "tb-2", "label": "Production Uptime", "value": "99.999% SLA", "isVerified": true },
    { "id": "tb-3", "label": "Security Compliance", "value": "SOC 2 Type II", "isVerified": true },
    { "id": "tb-4", "label": "Audit Gaps", "value": "0 Open Deficiencies", "isVerified": true }
  ]
}
```

---

### Archetype 11: `swot-analysis` (SwotAnalysisSlide)

#### Semantic Role & Purpose
Organizes strategic situational awareness into a disciplined 2x2 bento quadrant balancing internal capabilities (Strengths & Weaknesses) against external market forces (Opportunities & Threats).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 80px, Left: 140px]  --  STRATEGIC SITUATIONAL ANALYSIS                             |
|  [SLIDE TITLE (H1): Top: 115px, Left: 140px]  --  Enterprise Architecture SWOT Matrix             |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | 2x2 QUADRANT BENTO: Top: 200px, Left: 140px, Width: 1640px, Height: 780px                    |  |
|  |                                                                                             |  |
|  | +-----------------------------------------+   +-----------------------------------------+   |  |
|  | | [S] STRENGTHS (Internal Advantage)      |   | [W] WEAKNESSES (Internal Discipline)    |   |  |
|  | | Width: 790px, Height: 370px             |   | Width: 790px, Height: 370px             |   |  |
|  | | Border: Emerald Accent Glow             |   | Border: Amber Accent Warning            |   |  |
|  | | • 100% Pure live DOM typography         |   | • Requires high engineer discipline     |   |  |
|  | | • Deterministic sub-10ms pipeline loops |   | • Rigid 100-line React component limits |   |  |
|  | | • Zero external runtime licensing tax   |   | • Learning curve for subagent mechanics |   |  |
|  | +-----------------------------------------+   +-----------------------------------------+   |  |
|  |                                                                                             |  |
|  | +-----------------------------------------+   +-----------------------------------------+   |  |
|  | | [O] OPPORTUNITIES (External Market)     |   | [T] THREATS (External Risks)            |   |  |
|  | | Width: 790px, Height: 370px             |   | Width: 790px, Height: 370px             |   |  |
|  | | Border: Indigo/Violet Growth Accent     |   | Border: Crimson Risk Alert              |   |  |
|  | | • Massive enterprise cloud repat wave   |   | • Hyperscaler aggressive bundling locks |   |  |
|  | | • Expansion into autonomous AI agents   |   | • Fast-evolving cross-border data laws  |   |  |
|  | | • Demand for air-gapped clinical decks  |   | • Transient open-source copycat forks   |   |  |
|  | +-----------------------------------------+   +-----------------------------------------+   |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. 2x2 Bento: `x: 140px`, `y: 200px`, `w: 1640px`, `h: 780px`.
- Top-Left (Strengths): `w: 790px`, `h: 370px`. Top-Right (Weaknesses): `w: 790px`, `h: 370px`.
- Bottom-Left (Opportunities): `w: 790px`, `h: 370px`. Bottom-Right (Threats): `w: 790px`, `h: 370px`.
- `quadrants`: Exactly 4 quadrant blocks.

#### TypeScript Contract
```typescript
export interface SwotQuadrant {
  id: string;
  quadrantType: 'strengths' | 'weaknesses' | 'opportunities' | 'threats';
  title: string;
  icon: string;
  items: string[];
  isHighlighted?: boolean;
}

export interface SwotAnalysisSlideData extends BaseSlide {
  type: 'swot-analysis';
  strategicContext?: string;
  quadrants: SwotQuadrant[];
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-swot-01",
  "type": "swot-analysis",
  "kicker": "STRATEGIC SITUATIONAL ANALYSIS",
  "title": "Enterprise Architecture SWOT Matrix",
  "strategicContext": "Comprehensive assessment of internal technical strengths vs external market dynamics.",
  "quadrants": [
    {
      "id": "sq-s",
      "quadrantType": "strengths",
      "title": "Strengths (Internal)",
      "icon": "ShieldCheck",
      "isHighlighted": true,
      "items": [
        "100% Pure live DOM typography guaranteeing absolute accessibility and searchability",
        "Deterministic sub-10ms pipeline execution with zero fractional coordinate drift",
        "Zero third-party runtime licensing costs and complete IP transfer"
      ]
    },
    {
      "id": "sq-w",
      "quadrantType": "weaknesses",
      "title": "Weaknesses (Internal)",
      "icon": "AlertTriangle",
      "isHighlighted": false,
      "items": [
        "Strict 100-line React component limit requires diligent architectural decomposition",
        "Steep initial learning curve for engineers accustomed to unconstrained monolithic styling",
        "Mandatory positive boolean discipline across all state interfaces"
      ]
    },
    {
      "id": "sq-o",
      "quadrantType": "opportunities",
      "title": "Opportunities (External)",
      "icon": "TrendingUp",
      "isHighlighted": false,
      "items": [
        "Massive global wave of enterprise cloud repatriation away from bloated SaaS suites",
        "Integration with autonomous multi-agent AI execution frameworks",
        "Growing defense and healthcare demand for verified air-gapped presentation runtimes"
      ]
    },
    {
      "id": "sq-t",
      "quadrantType": "threats",
      "title": "Threats (External)",
      "icon": "ShieldAlert",
      "isHighlighted": false,
      "items": [
        "Aggressive bundling tactics by incumbent legacy presentation suites",
        "Fragmented cross-browser CSS container query implementation nuances",
        "Evolving global data residency and cryptographic export mandates"
      ]
    }
  ]
}
```

---

### Archetype 12: `interactive-quiz` (InteractiveQuizSlide)

#### Semantic Role & Purpose
Enriches live executive briefings and interactive training workshops through diagnostic multiple-choice questions, featuring real-time option selection, reveal states, and explanatory callouts (derived from `wp-exam` paradigms).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 80px, Left: 140px]  --  DIAGNOSTIC WORKSHOP POLL                                    |
|  [SLIDE TITLE (H1): Top: 115px, Left: 140px]  --  Identify Your Core Architectural Bottleneck      |
|  [QUIZ CHROME: Top: 125px, Right: 140px]  --  [Question 02 of 05]  [Timer: 45s]  [Level: Senior]   |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | QUESTION BANNER: Top: 190px, Left: 140px, Width: 1640px, Height: 120px                     |  |
|  | "Which factor is the primary root cause of unexpected regressions in cloud pipelines?"        |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | 4 OPTION CARDS (2x2 GRID): Top: 340px, Left: 140px, Width: 1640px, Height: 460px             |  |
|  | [Option A: Inadequate unit tests]          [Option B (CORRECT ★): Non-deterministic envs]  |  |
|  | Width: 790px, Height: 210px                | Width: 790px, Height: 210px (Accent Ring)     |  |
|  |                                            |                                               |  |
|  | [Option C: Slow compiler runners]          [Option D: Oversized git repository blobs]      |  |
|  | Width: 790px, Height: 210px                | Width: 790px, Height: 210px                   |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | EXPLANATION DRAWER: Top: 830px, Left: 140px, Width: 1640px, Height: 150px                    |  |
|  | "Correct: Non-deterministic execution and unpinned dependencies account for 92% of pipeline |  |
|  | anomalies. Sovereign architecture guarantees bit-identical reproducibility on every commit." |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Question Banner: `x: 140px`, `y: 190px`, `w: 1640px`, `h: 120px`.
- 4 Option Cards (2x2): `x: 140px`, `y: 335px`, `w: 1640px`, `h: 460px`. Card size: `w: 790px`, `h: 210px`.
- Explanation Drawer: `x: 140px`, `y: 825px`, `w: 1640px`, `h: 155px`.
- `options`: Exactly 4 options (A, B, C, D).

#### TypeScript Contract
```typescript
export interface QuizOption {
  id: string;
  letter: 'A' | 'B' | 'C' | 'D';
  text: string;
  explanation?: string;
  isSelected?: boolean;
  isCorrect?: boolean;
  isRevealed?: boolean;
}

export interface InteractiveQuizSlideData extends BaseSlide {
  type: 'interactive-quiz';
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  options: QuizOption[];
  revealExplanation?: string;
  isAnswerRevealed?: boolean;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-quiz-01",
  "type": "interactive-quiz",
  "kicker": "DIAGNOSTIC WORKSHOP POLL",
  "title": "Identify Your Core Architectural Bottleneck",
  "questionNumber": 2,
  "totalQuestions": 5,
  "questionText": "Which factor is the primary root cause of intermittent failures and unexpected regressions in enterprise deployment pipelines?",
  "isAnswerRevealed": true,
  "revealExplanation": "Non-deterministic runtime environments and unpinned dependencies account for 92% of transient failures. Sovereign architecture guarantees bit-identical execution across all machines.",
  "options": [
    {
      "id": "qo-a",
      "letter": "A",
      "text": "Insufficient manual quality assurance check rounds before staging",
      "isSelected": false,
      "isCorrect": false,
      "isRevealed": true
    },
    {
      "id": "qo-b",
      "letter": "B",
      "text": "Non-deterministic runtime environments and unpinned floating dependencies",
      "isSelected": true,
      "isCorrect": true,
      "isRevealed": true
    },
    {
      "id": "qo-c",
      "letter": "C",
      "text": "Lack of high-memory cloud runner compute instances",
      "isSelected": false,
      "isCorrect": false,
      "isRevealed": true
    },
    {
      "id": "qo-d",
      "letter": "D",
      "text": "Excessive branching strategies in source code management",
      "isSelected": false,
      "isCorrect": false,
      "isRevealed": true
    }
  ]
}
```

---

### Archetype 13: `hardware-showcase` (HardwareShowcaseSlide)

#### Semantic Role & Purpose
Displays physical appliances, server chassis, IoT devices, or micro-controller hardware integrations with live pulsing callout pins that link interactive hotspots to deep technical specifications.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  PHYSICAL INFRASTRUCTURE ARCHITECTURE                       |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Sovereign Edge Node V3 Appliance                |
|                                                                                                   |
|  +--------------------------------------------+  +---------------------------------------------+  |
|  | LEFT STAGE: ISOMETRIC CHASSIS VIEW         |  | RIGHT STAGE: TECHNICAL SPECIFICATIONS       |  |
|  | Width: 920px, Left: 140px, Top: 230px      |  | Width: 680px, Left: 1100px, Top: 230px      |  |
|  |                                            |  |                                             |  |
|  | [ISOMETRIC HARDWARE SCHEMATIC CONTAINER]   |  | SUBSYSTEM SPECIFICATION PANEL               |  |
|  |                                            |  | Active Pin: Pin 02 (Cryptographic Co-Proc)  |  |
|  | (1) [Pulse Pin 01: Power Supply Unit]      |  |                                             |  |
|  |                                            |  | • Throughput: 100 Gbps line-rate encryption  |  |
|  |         (2) [Pulse Pin 02: ACTIVE HALO ★]  |  | • Security: FIPS 140-3 Level 4 HSM Silicon  |  |
|  |                                            |  | • Power Draw: 45W peak consumption          |  |
|  |    (3) [Pulse Pin 03: Dual SFP28 Ports]    |  | • Thermal: Passive dissipation (-40C to 85C)|  |
|  |                                            |  |                                             |  |
|  |            (4) [Pulse Pin 04: FPGA Engine] |  | COMPLIANCE BADGES:                          |  |
|  |                                            |  | [MIL-STD-810H]  [IP68 Submersible] [CE/FCC] |  |
|  +--------------------------------------------+  +---------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Hardware Schematic: `x: 140px`, `y: 230px`, `w: 920px`, `h: 740px`.
- Specification Panel: `x: 1100px`, `y: 230px`, `w: 680px`, `h: 740px`.
- Hotspot pins have exact reference coordinates: `xCoord` ($0 \dots 920$), `yCoord` ($0 \dots 740$).
- `hotspots`: 3 to 5 pins. `specifications`: 4 to 6 spec items.

#### TypeScript Contract
```typescript
export interface HardwareHotspot {
  id: string;
  pinNumber: number;
  xCoord: number;
  yCoord: number;
  label: string;
  subsystemTitle: string;
  specDetails: string;
  isActive?: boolean;
}

export interface HardwareSpecItem {
  id: string;
  label: string;
  value: string;
  isHighlighted?: boolean;
}

export interface HardwareShowcaseSlideData extends BaseSlide {
  type: 'hardware-showcase';
  deviceName: string;
  deviceTagline: string;
  imageSchematicUrl?: string;
  hotspots: HardwareHotspot[];
  specifications: HardwareSpecItem[];
  activePinIndex?: number;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-hardware-01",
  "type": "hardware-showcase",
  "kicker": "PHYSICAL INFRASTRUCTURE ARCHITECTURE",
  "title": "Sovereign Edge Node V3 Appliance",
  "deviceName": "Sovereign Edge Node V3",
  "deviceTagline": "Air-gapped, tamper-resistant edge appliance for zero-trust enterprise environments",
  "activePinIndex": 1,
  "hotspots": [
    {
      "id": "hp-1",
      "pinNumber": 1,
      "xCoord": 220,
      "yCoord": 180,
      "label": "Redundant Power Module",
      "subsystemTitle": "Dual Hot-Swappable 800W Titanium PSUs",
      "specDetails": "96% efficiency with zero-downtime failover switching under 4ms.",
      "isActive": false
    },
    {
      "id": "hp-2",
      "pinNumber": 2,
      "xCoord": 480,
      "yCoord": 310,
      "label": "Cryo-Locked Cryptographic HSM",
      "subsystemTitle": "FIPS 140-3 Level 4 Cryptographic Co-Processor",
      "specDetails": "Hardware-enforced key encapsulation and physical tamper-wipe circuitry.",
      "isActive": true
    },
    {
      "id": "hp-3",
      "pinNumber": 3,
      "xCoord": 690,
      "yCoord": 420,
      "label": "Dual SFP28 Optical Uplinks",
      "subsystemTitle": "Dual 25Gbps Optical Network Interface",
      "specDetails": "Sub-microsecond line-rate packet ingestion with zero CPU offload penalties.",
      "isActive": false
    }
  ],
  "specifications": [
    { "id": "hs-1", "label": "Processor Architecture", "value": "64-Core Sovereign ARM64 v9.2", "isHighlighted": true },
    { "id": "hs-2", "label": "Cryptographic Throughput", "value": "100 Gbps Line-Rate AES-GCM", "isHighlighted": true },
    { "id": "hs-3", "label": "Memory Capacity", "value": "512 GB ECC DDR5 @ 5600 MT/s", "isHighlighted": false },
    { "id": "hs-4", "label": "Storage Subsystem", "value": "4x 8TB NVMe PCIe 5.0 (RAID 10)", "isHighlighted": false },
    { "id": "hs-5", "label": "Operating Temperature", "value": "-40°C to +85°C Ruggedized", "isHighlighted": false }
  ]
}
```

---

### Archetype 14: `competitor-matrix` (CompetitorMatrixSlide)

#### Semantic Role & Purpose
Direct side-by-side competitive evaluation table proving platform dominance across critical architectural dimensions (IP ownership, determinism, speed, component modularity). Our platform column is prominently highlighted with an accent crown badge.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 80px, Left: 140px]  --  COMPETITIVE BENCHMARK MATRIX                               |
|  [SLIDE TITLE (H1): Top: 115px, Left: 140px]  --  Platform Capability Comparison                   |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | TABULAR COMPARISON MATRIX: Top: 200px, Left: 140px, Width: 1640px, Height: 740px             |  |
|  |                                                                                             |  |
|  | FEATURE CAPABILITY     | OUR PLATFORM [★ CROWN] | LEGACY ERP SUITE | LOW-CODE TOOLKIT       |  |
|  | Width: 460px           | Width: 420px (ACCENT)  | Width: 380px     | Width: 380px           |  |
|  |------------------------|------------------------|------------------|------------------------|  |
|  | Pure Live DOM Text     | [✓] 100% Editable      | [X] Rasterized   | [~] Partial / Broken   |  |
|  | Sub-10ms Pipeline Loop | [✓] Deterministic      | [X] 15m Builds   | [X] Cloud Queue Lag    |  |
|  | Full Source Ownership  | [✓] 100% Clean IP      | [X] Locked Format| [X] Proprietary Runtime|  |
|  | 100-Line Component Cap | [✓] Strict AST Enforce | [X] Spaghetti    | [X] Hidden Bloat       |  |
|  | Autonomous Subagent QA | [✓] Multi-Agent Mesh   | [X] Manual Only  | [X] Non-Existent       |  |
|  | Air-Gapped Deployment  | [✓] Zero Internet Req  | [~] High Cost    | [X] Cloud Only         |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  [SUMMARY SCORE BAR: Top: 955px, Left: 140px, Width: 1640px, Height: 65px]                        |
|  "Sovereign Platform: 6/6 Meets Criteria (100%) vs Competitor Average: 1.8/6 (30%)"              |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Tabular Matrix: `x: 140px`, `y: 200px`, `w: 1640px`, `h: 730px`.
- Column Widths: Capabilities `460px`, Our Platform `420px`, Competitor 1 `380px`, Competitor 2 `380px`.
- Summary Bar: `x: 140px`, `y: 945px`, `w: 1640px`, `h: 70px`.
- `capabilities`: 5 to 7 rows.

#### TypeScript Contract
```typescript
export interface MatrixCapabilityRow {
  id: string;
  capabilityName: string;
  category?: string;
  ourPlatformSupport: boolean;
  ourPlatformNote?: string;
  competitorASupport: boolean;
  competitorBSupport: boolean;
  competitorCSupport?: boolean;
  isKeyDifferentiator?: boolean;
}

export interface CompetitorMatrixSlideData extends BaseSlide {
  type: 'competitor-matrix';
  matrixHeadline?: string;
  ourPlatformName: string;
  competitorNames: string[];
  capabilities: MatrixCapabilityRow[];
  summaryNote?: string;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-matrix-01",
  "type": "competitor-matrix",
  "kicker": "COMPETITIVE BENCHMARK MATRIX",
  "title": "Platform Capability Comparison",
  "matrixHeadline": "Architectural Superiority Across Enterprise Evaluation Criteria",
  "ourPlatformName": "White Presentation Sovereign Engine",
  "competitorNames": [
    "Legacy Office Suite",
    "Commercial Cloud SaaS"
  ],
  "summaryNote": "The White Presentation Sovereign Engine satisfies 100% of enterprise architectural evaluation criteria compared to an industry average of 30%.",
  "capabilities": [
    {
      "id": "cap-1",
      "capabilityName": "Pure Live DOM Typography",
      "ourPlatformSupport": true,
      "ourPlatformNote": "100% Accessible & Live Editable",
      "competitorASupport": false,
      "competitorBSupport": false,
      "isKeyDifferentiator": true
    },
    {
      "id": "cap-2",
      "capabilityName": "Sub-10ms Pipeline Execution",
      "ourPlatformSupport": true,
      "ourPlatformNote": "Sub-second verification loops",
      "competitorASupport": false,
      "competitorBSupport": false,
      "isKeyDifferentiator": true
    },
    {
      "id": "cap-3",
      "capabilityName": "Complete Source Code Ownership",
      "ourPlatformSupport": true,
      "ourPlatformNote": "Zero runtime licensing fees",
      "competitorASupport": false,
      "competitorBSupport": false,
      "isKeyDifferentiator": true
    },
    {
      "id": "cap-4",
      "capabilityName": "Autonomous Subagent Fleet Mesh",
      "ourPlatformSupport": true,
      "ourPlatformNote": "Concurrent parallel refactoring",
      "competitorASupport": false,
      "competitorBSupport": false,
      "isKeyDifferentiator": true
    },
    {
      "id": "cap-5",
      "capabilityName": "Air-Gapped Cluster Deployment",
      "ourPlatformSupport": true,
      "ourPlatformNote": "Zero cloud telemetry required",
      "competitorASupport": true,
      "competitorBSupport": false,
      "isKeyDifferentiator": false
    }
  ]
}
```

---

### Archetype 15: `value-pyramid` (ValuePyramidSlide)

#### Semantic Role & Purpose
Maps technical capability depth to progressive business outcomes through a 4-tier value ladder, illustrating how foundational low-latency infrastructure ladders up to autonomous market leadership.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  CAPABILITY MATURITY MODEL                                   |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  The Sovereign Value Architecture Pyramid         |
|                                                                                                   |
|  +----------------------------------------------------+  +-------------------------------------+  |
|  | LEFT STAGE: 4-TIER STEPPED PYRAMID                 |  | RIGHT STAGE: EXPANDED TIER NARRATIVE|  |
|  | Width: 1040px, Left: 140px, Top: 230px             |  | Width: 560px, Left: 1220px, Top: 230|  |
|  |                                                    |  |                                     |  |
|  |               +--------------------+               |  | ACTIVE TIER DETAIL PANE             |  |
|  |               | TIER 4: APEX (540) |               |  | Level 4: Autonomous Market Agility  |  |
|  |               | Autonomous Agility |               |  |                                     |  |
|  |          +----+--------------------+----+          |  | Business Impact:                    |  |
|  |          |   TIER 3: INTELLIGENCE (720) |          |  | "Enables daily feature releases with|  |
|  |          |   Self-Healing Subagents     |          |  | zero regression risk, capturing     |  |
|  |     +----+------------------------------+----+     |  | emerging market opportunities 4.2x  |  |
|  |     |      TIER 2: DECLARATIVE DOM (900)     |     |  | faster than incumbent competitors." |  |
|  |     |      16:9 Deterministic Coordinates    |     |  |                                     |  |
|  | +---+----------------------------------------+---+ |  | Key Capabilities:                   |  |
|  | |         TIER 1: FOUNDATION KERNEL (1080)      | |  | • Continuous multi-agent dispatch   |  |
|  | |         Split SQLite DB & Sub-10ms Mesh       | |  | • Autonomous CI/CD self-healing     |  |
|  | +-----------------------------------------------+ |  | • Real-time competitive adaptation  |  |
|  +----------------------------------------------------+  +-------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Pyramid Stage: `x: 140px`, `y: 230px`, `w: 1040px`, `h: 740px`.
- Tier 4 (Apex): `w: 540px`, `h: 150px`, centered.
- Tier 3: `w: 720px`, `h: 150px`, centered.
- Tier 2: `w: 900px`, `h: 150px`, centered.
- Tier 1 (Base): `w: 1080px`, `h: 150px`, centered.
- Detail Pane: `x: 1220px`, `y: 230px`, `w: 560px`, `h: 740px`.
- `tiers`: Exactly 4 tiers.

#### TypeScript Contract
```typescript
export interface PyramidTier {
  id: string;
  tierLevel: number;
  tierName: string;
  tagline: string;
  capabilities: string[];
  businessImpactMetric: string;
  isHighlighted?: boolean;
  isActive?: boolean;
}

export interface ValuePyramidSlideData extends BaseSlide {
  type: 'value-pyramid';
  pyramidSubtitle?: string;
  tiers: PyramidTier[];
  activeTierLevel?: number;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-pyramid-01",
  "type": "value-pyramid",
  "kicker": "CAPABILITY MATURITY MODEL",
  "title": "The Sovereign Value Architecture Pyramid",
  "pyramidSubtitle": "How foundational engineering rigor compounds into market dominance",
  "activeTierLevel": 4,
  "tiers": [
    {
      "id": "t-4",
      "tierLevel": 4,
      "tierName": "Autonomous Market Agility",
      "tagline": "Rapid strategic pivots with zero regression friction",
      "capabilities": [
        "Continuous daily feature releases",
        "Autonomous competitive adaptation",
        "Zero-delay market entry"
      ],
      "businessImpactMetric": "4.2x Faster Time-to-Market",
      "isHighlighted": true,
      "isActive": true
    },
    {
      "id": "t-3",
      "tierLevel": 3,
      "tierName": "Self-Healing AI Mesh",
      "tagline": "Autonomous subagent fleets repairing code anomalies",
      "capabilities": [
        "Automated 4-part RCA diagnosis",
        "Bounded 5-8 file micro-refactoring",
        "Zero-defect local gate verification"
      ],
      "businessImpactMetric": "94% Reduction in Bug Triage",
      "isHighlighted": false,
      "isActive": false
    },
    {
      "id": "t-2",
      "tierLevel": 2,
      "tierName": "Pure Live DOM Geometry",
      "tagline": "1920x1080 deterministic virtual canvas coordinates",
      "capabilities": [
        "Zero rasterized text artifacts",
        "Live inline text editing on every node",
        "Adaptive GPU viewport scaling"
      ],
      "businessImpactMetric": "100% Accessible & Localizable",
      "isHighlighted": false,
      "isActive": false
    },
    {
      "id": "t-1",
      "tierLevel": 1,
      "tierName": "Sovereign Foundation Kernel",
      "tagline": "High-performance concurrency and split SQLite databases",
      "capabilities": [
        "ACID-compliant WAL transactions",
        "Zero cloud runtime lock-in",
        "Sub-10ms response loops"
      ],
      "businessImpactMetric": "99.999% Operational Reliability",
      "isHighlighted": false,
      "isActive": false
    }
  ]
}
```

---

## 3. Discriminated Union Integration Contract

To enable exhaustive type checking across `SlideRenderer.tsx`, `SlideCreatorModal.tsx`, and state stores, all 15 slide data types are unified into the `SlideData` union in `src/types/archetypes.ts`:

```typescript
export type NewEnterpriseSlideData =
  | AuthenticityHookSlideData
  | AvoidCommoditySlideData
  | ChapterDividerSlideData
  | LoseVsInvestSlideData
  | NextStepsSprintSlideData
  | ExecutiveContactSlideData
  | UspStrikethroughSlideData
  | SaaSPricingTiersSlideData
  | FaqAccordionSlideData
  | ClientLogoWallSlideData
  | SwotAnalysisSlideData
  | InteractiveQuizSlideData
  | HardwareShowcaseSlideData
  | CompetitorMatrixSlideData
  | ValuePyramidSlideData;

export type NewEnterpriseSlideType = NewEnterpriseSlideData['type'];
```

---

## 4. Verification & Testing Matrix for Slide Archetypes

| Archetype Discriminator | Test Assertion | Expected Behavior | Gate Failure Mode |
|:---|:---|:---|:---|
| `authenticity-hook` | Pure DOM Check | Every myth, truth, and stat must be selectable DOM text. | Rasterized image text found = FAIL |
| `avoid-commodity` | Boolean Polarity | Check `isKeyDifferentiator` without negation. | Negative boolean (`isDisabled`) = FAIL |
| `chapter-divider` | Watermark Bounds | Watermark numeral `opacity: 0.04`, `fontSize: 380px`. | Missing watermark or layout overflow = FAIL |
| `lose-vs-invest` | Symmetric Balance | Left column crimson tint, Right column emerald/violet tint. | Color mismatch or inverted delta = FAIL |
| `next-steps-sprint` | Sprint Count | Array contains 3 or 4 sprints with exit criteria. | Missing exit criteria = FAIL |
| `executive-contact` | Persona Identity | `role` MUST equal `"Chief Software Engineer"`. | "CEO" or "Founder" detected = HARD FAIL |
| `usp-strikethrough` | Strikethrough Tag | Strikethrough span rendered with `line-through` style. | Missing visual strikethrough = FAIL |
| `saas-pricing-tiers`| Elevated Card | Recommended tier scaled to $1.04\times$. | Flat un-elevated layout = FAIL |
| `faq-accordion` | Expand State | `isExpanded` toggles without layout shift. | Layout jump or clipped content = FAIL |
| `client-logo-wall` | Grid Uniformity | 8–12 tiles rendered symmetrically across 2 rows. | Asymmetrical overflow = FAIL |
| `swot-analysis` | 2x2 Grid Bounds | Exactly 4 quadrants (S, W, O, T) within 1640x780px. | Missing quadrant = FAIL |
| `interactive-quiz` | Option Letters | Exactly 4 options labeled A, B, C, D with answer reveal. | Duplicate or missing letter = FAIL |
| `hardware-showcase`| Pin Coordinates | Hotspots render inside $920 \times 740$ isometric frame. | Out-of-bounds coordinates = FAIL |
| `competitor-matrix`| Sticky Header | Our platform highlighted in accent column. | Unhighlighted our-platform column = FAIL |
| `value-pyramid` | Stepped Tiers | 4 stepped trapezoids widening from Apex to Base. | Inverted geometry = FAIL |
