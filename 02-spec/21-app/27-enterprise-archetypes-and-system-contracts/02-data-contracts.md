# 02-Slide Archetypes & Data Contracts: The 15 New Enterprise Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/26-new-design-and-slide-archetypes/02-data-contracts`  
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
5. **Leaf-Type Segregation:** Contracts are declared in leaf modules (`src/types/archetypes.ts`) and re-exported by `src/types/presentation.ts` to enforce modularity and maintain file size ceilings.

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
  maxSteps?: number;
}
```

---

## 2. Master Catalog of the 15 New Slide Archetypes

```
+---------------------------------------------------------------------------------------------------+
|                        MASTER CATALOG: 15 NEW ENTERPRISE SLIDE ARCHETYPES                         |
+---------------------------------------------------------------------------------------------------+
|  [01] executive-summary           --> 3 core strategic pillars + high-impact executive takeaway   |
|  [02] system-architecture-flow    --> Multi-tier cloud topology + live animated packet rails       |
|  [03] roi-metric-calculator       --> Financial model, baseline vs yield + dynamic payback gauge  |
|  [04] customer-journey-map        --> 5-stage lifecycle rail + sentiment curve & friction points   |
|  [05] matrix-comparison-grid      --> Multi-axis feature comparison with sovereign highlighted col|
|  [06] tech-stack-grid             --> Layered architecture tiers + technology status chips         |
|  [07] team-hierarchy-org          --> Multi-tier executive org tree with dynamic SVG connectors   |
|  [08] security-compliance-matrix  --> Regulatory frameworks (SOC2, ISO, HIPAA) + audit evidence   |
|  [09] product-roadmap-timeline    --> Multi-quarter parallel swimlanes + milestone release gates  |
|  [10] interactive-faq-flow        --> Categorized Q&A hub with step-based accordion reveals        |
|  [11] key-metric-scorecard        --> 4-quadrant executive KPI cards + trend pills & sparklines   |
|  [12] case-study-impact           --> Enterprise customer journey: Challenge, Architecture, ROI    |
|  [13] dual-column-pros-cons       --> Bilateral trade-off analysis with weighted impact indicators |
|  [14] interactive-code-playground --> Split-pane code editor, step execution + live console drawer|
|  [15] closing-cta-showcase        --> High-authority finale, dual action buttons, QR verification  |
+---------------------------------------------------------------------------------------------------+
```

---

### Archetype 01: `executive-summary` (ExecutiveSummarySlide)

#### Semantic Role & Purpose
Provides an executive briefing slide designed for board meetings, steering committees, and investor updates. Synthesizes broad corporate strategy into three distinct operational pillars, anchored by a prominent callout summarizing the core strategic takeaway.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  EXECUTIVE BRIEFING                                         |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Strategic Transformation & Enterprise Yield    |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  FY2026 Core Growth Priorities & Capital Allocation      |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | STRATEGIC TAKEAWAY HERO BANNER (Top: 260px, Left: 140px, Width: 1640px, Height: 130px)       |  |
|  | "Transitioning from legacy infrastructure to sovereign event fabric delivers 4.8x velocity"|  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +-----------------------+     +-----------------------+     +-----------------------+            |
|  | PILLAR 01: SCALE      |     | PILLAR 02: RESILIENCE |     | PILLAR 03: EFFICIENCY |            |
|  | Top: 430px, W: 520px  |     | Top: 430px, W: 520px  |     | Top: 430px, W: 520px  |            |
|  | Height: 520px         |     | Height: 520px         |     | Height: 520px         |            |
|  | Left: 140px           |     | Left: 700px           |     | Left: 1260px          |            |
|  |                       |     |                       |     |                       |            |
|  | [Icon: Zap]           |     | [Icon: Shield]        |     | [Icon: TrendingUp]    |            |
|  | Multi-Region Sync     |     | Zero Trust Security   |     | Automated Operations  |            |
|  | Target: 99.999% SLA   |     | SOC2 Type II Certified|     | 38% OPEX Reduction    |            |
|  | Metrics: +140Gbps     |     | MTTR: < 45 seconds    |     | ROI: 312% in Year 1   |            |
|  +-----------------------+     +-----------------------+     +-----------------------+            |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Enterprise Architecture Steering Committee              |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- Takeaway Hero Banner: `x: 140px`, `y: 260px`, `w: 1640px`, `h: 130px`.
- 3 Pillar Cards:
  - Pillar 1: `x: 140px`, `y: 430px`, `w: 520px`, `h: 520px`.
  - Pillar 2: `x: 700px`, `y: 430px`, `w: 520px`, `h: 520px`.
  - Pillar 3: `x: 1260px`, `y: 430px`, `w: 520px`, `h: 520px`.

#### TypeScript Contract
```typescript
export interface StrategicPillar {
  id: string;
  stepNumber: number;
  iconName: string;
  title: string;
  category: string;
  description: string;
  targetKpi: string;
  kpiLabel: string;
  hasHighlight: boolean;
  isActivePillar: boolean;
  isVerified: boolean;
}

export interface ExecutiveSummarySlide extends BaseSlide {
  type: "executive-summary";
  takeawayText: string;
  takeawayAuthor?: string;
  pillars: StrategicPillar[];
  hasStatusBadge: boolean;
  statusBadgeText?: string;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-exec-01",
  "type": "executive-summary",
  "title": "Strategic Transformation & Enterprise Yield",
  "subtitle": "FY2026 Core Growth Priorities & Capital Allocation",
  "kicker": "EXECUTIVE BRIEFING",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 3,
  "hasStatusBadge": true,
  "statusBadgeText": "BOARD APPROVED",
  "takeawayText": "Transitioning from legacy infrastructure to sovereign event fabric delivers 4.8x velocity and $12.4M annualized efficiency.",
  "takeawayAuthor": "Office of the CTO",
  "pillars": [
    {
      "id": "p-1",
      "stepNumber": 1,
      "iconName": "Zap",
      "title": "Autonomous Scale",
      "category": "INFRASTRUCTURE",
      "description": "Distributed multi-region active-active clusters eliminating single points of failure.",
      "targetKpi": "99.999%",
      "kpiLabel": "Availability SLA",
      "hasHighlight": true,
      "isActivePillar": true,
      "isVerified": true
    },
    {
      "id": "p-2",
      "stepNumber": 2,
      "iconName": "Shield",
      "title": "Sovereign Security",
      "category": "COMPLIANCE",
      "description": "Zero trust identity fabric with end-to-end cryptographic telemetry.",
      "targetKpi": "< 45s",
      "kpiLabel": "Mean Recovery Time",
      "hasHighlight": false,
      "isActivePillar": false,
      "isVerified": true
    },
    {
      "id": "p-3",
      "stepNumber": 3,
      "iconName": "TrendingUp",
      "title": "Operational Yield",
      "category": "FINANCE",
      "description": "Automated workflow synthesis reducing repetitive engineering overhead.",
      "targetKpi": "+312%",
      "kpiLabel": "Year-1 Net ROI",
      "hasHighlight": false,
      "isActivePillar": false,
      "isVerified": true
    }
  ]
}
```

---

### Archetype 02: `system-architecture-flow` (SystemArchitectureFlowSlide)

#### Semantic Role & Purpose
Displays distributed microservices, streaming topologies, and cloud infrastructure pipelines. Illustrates data flow from client devices through gateways to core services and persistent storage tiers, accompanied by animated packet connectors.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  INFRASTRUCTURE TOPOLOGY                                    |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Global Event-Driven Streaming Fabric             |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Sub-5ms End-to-End Latency Across Distributed Edges     |
|                                                                                                   |
|  +--------------------+   SVG Connectors   +--------------------+   SVG   +--------------------+  |
|  | TIER 1: INGESTION  |  ===============>  | TIER 2: PROCESSING | ======> | TIER 3: DATA STORE |  |
|  | Top: 270px         |    Live Packets    | Top: 270px         | Packets | Top: 270px         |  |
|  | Left: 140px        |                    | Left: 700px        |         | Left: 1260px       |  |
|  | Width: 520px       |                    | Width: 520px       |         | Width: 520px       |  |
|  | Height: 680px      |                    | Height: 680px      |         | Height: 680px      |  |
|  |                    |                    |                    |         |                    |  |
|  | [Node: Edge CDN]   |                    | [Node: Stream Bus] |         | [Node: Distributed]|  |
|  | Anycast 320 PoPs   |                    | Apache Kafka / NATS|         | Multi-Master DB    |  |
|  |                    |                    |                    |         |                    |  |
|  | [Node: API Gateway]|                    | [Node: Worker Pool]|         | [Node: Cold Lake]  |  |
|  | Envoy Proxy Envoy  |                    | Rust Microservices |         | Parquet Blob Store |  |
|  | Rate Limit: 100k/s |                    | Concurrency: 64k   |         | ACID Replication   |  |
|  +--------------------+                    +--------------------+         +--------------------+  |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Architecture Review Board: Production Certified         |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- 3 Tier Columns (Width 520px each, Height 680px, Spacing 40px):
  - Ingestion: `x: 140px`, `y: 270px`, `w: 520px`, `h: 680px`.
  - Processing: `x: 700px`, `y: 270px`, `w: 520px`, `h: 680px`.
  - Storage: `x: 1260px`, `y: 270px`, `w: 520px`, `h: 680px`.

#### TypeScript Contract
```typescript
export interface ArchitectureNode {
  id: string;
  stepNumber: number;
  label: string;
  role: string;
  technology: string;
  latencySpec: string;
  hasPulse: boolean;
  isActiveNode: boolean;
  isEncrypted: boolean;
}

export interface ArchitectureTier {
  id: string;
  tierNumber: number;
  tierName: string;
  description: string;
  nodes: ArchitectureNode[];
  hasActiveTraffic: boolean;
}

export interface SystemArchitectureFlowSlide extends BaseSlide {
  type: "system-architecture-flow";
  tiers: ArchitectureTier[];
  overallThroughput: string;
  hasLiveTelemetry: boolean;
  packetSpeedMs: number;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-arch-01",
  "type": "system-architecture-flow",
  "title": "Global Event-Driven Streaming Fabric",
  "subtitle": "Sub-5ms End-to-End Latency Across Distributed Edges",
  "kicker": "INFRASTRUCTURE TOPOLOGY",
  "themeId": "cyber-neon",
  "activeStep": 2,
  "maxSteps": 3,
  "overallThroughput": "1.4M Events/sec",
  "hasLiveTelemetry": true,
  "packetSpeedMs": 1200,
  "tiers": [
    {
      "id": "tier-1",
      "tierNumber": 1,
      "tierName": "Ingestion Tier",
      "description": "Global edge proxy and token validation",
      "hasActiveTraffic": true,
      "nodes": [
        {
          "id": "node-1a",
          "stepNumber": 1,
          "label": "Anycast CDN Gateway",
          "role": "Edge Termination",
          "technology": "Cloudflare Workers",
          "latencySpec": "1.2ms",
          "hasPulse": true,
          "isActiveNode": false,
          "isEncrypted": true
        },
        {
          "id": "node-1b",
          "stepNumber": 1,
          "label": "API Gateway Mesh",
          "role": "Reverse Proxy",
          "technology": "Envoy / Rust",
          "latencySpec": "0.8ms",
          "hasPulse": false,
          "isActiveNode": false,
          "isEncrypted": true
        }
      ]
    },
    {
      "id": "tier-2",
      "tierNumber": 2,
      "tierName": "Event Processing",
      "description": "Distributed log streaming & consumer workers",
      "hasActiveTraffic": true,
      "nodes": [
        {
          "id": "node-2a",
          "stepNumber": 2,
          "label": "Event Stream Bus",
          "role": "Distributed Commit Log",
          "technology": "Apache Kafka",
          "latencySpec": "2.1ms",
          "hasPulse": true,
          "isActiveNode": true,
          "isEncrypted": true
        },
        {
          "id": "node-2b",
          "stepNumber": 2,
          "label": "Stateful Processor Pool",
          "role": "Complex Event Processing",
          "technology": "Apache Flink",
          "latencySpec": "1.5ms",
          "hasPulse": true,
          "isActiveNode": true,
          "isEncrypted": true
        }
      ]
    },
    {
      "id": "tier-3",
      "tierNumber": 3,
      "tierName": "Persistence & Lake",
      "description": "Multi-region partitioned datastore",
      "hasActiveTraffic": true,
      "nodes": [
        {
          "id": "node-3a",
          "stepNumber": 3,
          "label": "Multi-Master Sharded DB",
          "role": "Hot Storage",
          "technology": "Spanner / Postgres",
          "latencySpec": "3.4ms",
          "hasPulse": false,
          "isActiveNode": false,
          "isEncrypted": true
        }
      ]
    }
  ]
}
```

---

### Archetype 03: `roi-metric-calculator` (RoiMetricCalculatorSlide)

#### Semantic Role & Purpose
Models quantitative financial arguments for executive procurement officers and CFOs. Compares baseline legacy costs against modernized platform yield, displaying payback periods, net savings, and an interactive investment slider.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  FINANCIAL VALUATION                                        |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Capital Efficiency & Modernization Payback       |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Projected 3-Year Operational Cost Reduction Model       |
|                                                                                                   |
|  +--------------------------------------------+  +---------------------------------------------+  |
|  | LEFT: FINANCIAL PARAMETERS (W: 780px)      |  | RIGHT: PROJECTION SCORECARD (W: 820px)      |  |
|  | Top: 270px, Left: 140px, Height: 680px     |  | Top: 270px, Left: 960px, Height: 680px      |  |
|  |                                            |  |                                             |  |
|  | [Metric: Annual Run Cost (Baseline)]       |  | [HERO KPI: $14.2M SAVINGS (Ubuntu 72px)]    |  |
|  | Current Spent: $18,400,000 / year          |  | Net 3-Year Cumulative Yield                 |  |
|  |                                            |  |                                             |  |
|  | [Metric: Modernized Platform Cost]         |  | +-----------------------------------------+ |  |
|  | Target Spent: $4,200,000 / year            |  | | PAYBACK TIMELINE GAUGE                  | |  |
|  |                                            |  | | Breakeven Point: 4.2 Months             | |  |
|  | [Interactive Parameter Slider]             |  | | [========>----------------------------] | |  |
|  | Engineering Headcount: 240 Developers      |  | +-----------------------------------------+ |  |
|  | Efficiency Multiplier: 3.4x                |  |                                             |  |
|  |                                            |  | [BENCHMARK TABLE]                           |  |
|  | [Formula Box: Net Savings = Cost - Yield]  |  | Year 1: $3.8M | Year 2: $4.9M | Year 3: $5.5M| |
|  +--------------------------------------------+  +---------------------------------------------+  |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Financial Model: Discount Rate 8.0%, Amortized 36 Mo   |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- Left Parameter Card: `x: 140px`, `y: 270px`, `w: 780px`, `h: 680px`.
- Right Scorecard Stage: `x: 960px`, `y: 270px`, `w: 820px`, `h: 680px`.

#### TypeScript Contract
```typescript
export interface YearlyBreakdown {
  yearLabel: string;
  projectedSavings: string;
  operationalCost: string;
  isTargetMet: boolean;
}

export interface RoiMetricCalculatorSlide extends BaseSlide {
  type: "roi-metric-calculator";
  baselineAnnualCost: string;
  projectedAnnualCost: string;
  totalCumulativeSavings: string;
  paybackPeriodMonths: number;
  breakevenProgressPercent: number;
  yearlyBreakdowns: YearlyBreakdown[];
  hasInteractiveSlider: boolean;
  isPositiveDelta: boolean;
  hasConfidenceBand: boolean;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-roi-01",
  "type": "roi-metric-calculator",
  "title": "Capital Efficiency & Modernization Payback",
  "subtitle": "Projected 3-Year Operational Cost Reduction Model",
  "kicker": "FINANCIAL VALUATION",
  "themeId": "emerald-growth",
  "activeStep": 1,
  "maxSteps": 3,
  "baselineAnnualCost": "$18,400,000",
  "projectedAnnualCost": "$4,200,000",
  "totalCumulativeSavings": "$14,200,000",
  "paybackPeriodMonths": 4.2,
  "breakevenProgressPercent": 88,
  "hasInteractiveSlider": true,
  "isPositiveDelta": true,
  "hasConfidenceBand": true,
  "yearlyBreakdowns": [
    {
      "yearLabel": "Year 1",
      "projectedSavings": "$3,800,000",
      "operationalCost": "$5,100,000",
      "isTargetMet": true
    },
    {
      "yearLabel": "Year 2",
      "projectedSavings": "$4,900,000",
      "operationalCost": "$4,300,000",
      "isTargetMet": true
    },
    {
      "yearLabel": "Year 3",
      "projectedSavings": "$5,500,000",
      "operationalCost": "$3,200,000",
      "isTargetMet": true
    }
  ]
}
```

---

### Archetype 04: `customer-journey-map` (CustomerJourneyMapSlide)

#### Semantic Role & Purpose
Visualizes the end-to-end customer experience across five canonical lifecycle phases. Connects qualitative emotional sentiment with quantitative conversion metrics and specific friction alerts.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  CUSTOMER EXPERIENCE ARCHITECTURE                           |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Enterprise Buyer Journey & Conversion Funnel     |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Touchpoint Friction Points & Delight Opportunities       |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | SENTIMENT CURVE CANVAS (Top: 260px, Left: 140px, Width: 1640px, Height: 180px)               |  |
|  | [Positive Satisfaction Line:  ~ ~ ~ ^ ~ ~ ~ ^ ~ ~ ~ ^ ~ ~ ~]                                |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +--------+       +--------+       +--------+       +--------+       +--------+                   |
|  | 01.    |       | 02.    |       | 03.    |       | 04.    |       | 05.    |                   |
|  | DISCOVER       | EVAL   |       | ONBOARD|       | ADOPT  |       | ADVOC  |                   |
|  | W: 304 |       | W: 304 |       | W: 304 |       | W: 304 |       | W: 304 |                   |
|  | H: 480 |       | H: 480 |       | H: 480 |       | H: 480 |       | H: 480 |                   |
|  | L: 140 |       | L: 474 |       | L: 808 |       | L: 1142|       | L: 1476|                   |
|  |        |       |        |       |        |       |        |       |        |                   |
|  | Channel|       | Channel|       | Channel|       | Channel|       | Channel|                   |
|  | Search |       | Sandbox|       | SSO API|       | Workflw|       | Exec Q |                   |
|  | [Pill] |       | [Alert]|       | [Pill] |       | [Pill] |       | [Pill] |                   |
|  | +72 NPS|       | Friction       | 1-Click|       | 94% Use|       | 140% Net                   |
|  +--------+       +--------+       +--------+       +--------+       +--------+                   |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Customer Success Analytics: 12,400 Cohorts Tracked      |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- Sentiment Curve Canvas: `x: 140px`, `y: 260px`, `w: 1640px`, `h: 180px`.
- 5 Stage Cards (Width 304px each, Height 480px, Spacing 30px, `y: 470px`):
  - Stage 1: `x: 140px`, `y: 470px`, `w: 304px`, `h: 480px`.
  - Stage 2: `x: 474px`, `y: 470px`, `w: 304px`, `h: 480px`.
  - Stage 3: `x: 808px`, `y: 470px`, `w: 304px`, `h: 480px`.
  - Stage 4: `x: 1142px`, `y: 470px`, `w: 304px`, `h: 480px`.
  - Stage 5: `x: 1476px`, `y: 470px`, `w: 304px`, `h: 480px`.

#### TypeScript Contract
```typescript
export interface JourneyStage {
  id: string;
  stepNumber: number;
  stageName: string;
  channel: string;
  keyAction: string;
  sentimentScore: number;
  metricLabel: string;
  metricValue: string;
  hasFrictionAlert: boolean;
  isActiveStage: boolean;
  isDelightMoment: boolean;
}

export interface CustomerJourneyMapSlide extends BaseSlide {
  type: "customer-journey-map";
  stages: JourneyStage[];
  hasSentimentGraph: boolean;
  primaryPersonaName: string;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-cjm-01",
  "type": "customer-journey-map",
  "title": "Enterprise Buyer Journey & Conversion Funnel",
  "subtitle": "Touchpoint Friction Points & Delight Opportunities",
  "kicker": "CUSTOMER EXPERIENCE ARCHITECTURE",
  "themeId": "sunset-horizon",
  "activeStep": 3,
  "maxSteps": 5,
  "primaryPersonaName": "Enterprise VP of Engineering",
  "hasSentimentGraph": true,
  "stages": [
    {
      "id": "s-1",
      "stepNumber": 1,
      "stageName": "01. Discovery",
      "channel": "Technical Whitepaper",
      "keyAction": "Audits reference architecture docs",
      "sentimentScore": 75,
      "metricLabel": "CTR to Sandbox",
      "metricValue": "18.4%",
      "hasFrictionAlert": false,
      "isActiveStage": false,
      "isDelightMoment": true
    },
    {
      "id": "s-2",
      "stepNumber": 2,
      "stageName": "02. Evaluation",
      "channel": "Self-Serve Sandbox",
      "keyAction": "Tests CLI cloner and local pipeline",
      "sentimentScore": 60,
      "metricLabel": "Time to First Hello",
      "metricValue": "4.2 min",
      "hasFrictionAlert": true,
      "isActiveStage": false,
      "isDelightMoment": false
    },
    {
      "id": "s-3",
      "stepNumber": 3,
      "stageName": "03. Onboarding",
      "channel": "SSO & IAM Gateway",
      "keyAction": "Deploys cluster credentials across org",
      "sentimentScore": 88,
      "metricLabel": "Cluster Join Time",
      "metricValue": "12 sec",
      "hasFrictionAlert": false,
      "isActiveStage": true,
      "isDelightMoment": true
    },
    {
      "id": "s-4",
      "stepNumber": 4,
      "stageName": "04. Adoption",
      "channel": "Core Workflow",
      "keyAction": "Active daily developer builds",
      "sentimentScore": 92,
      "metricLabel": "Daily Active Devs",
      "metricValue": "94.6%",
      "hasFrictionAlert": false,
      "isActiveStage": false,
      "isDelightMoment": true
    },
    {
      "id": "s-5",
      "stepNumber": 5,
      "stageName": "05. Advocacy",
      "channel": "Executive Review",
      "keyAction": "Presents case study to board",
      "sentimentScore": 96,
      "metricLabel": "Net Retention",
      "metricValue": "142%",
      "hasFrictionAlert": false,
      "isActiveStage": false,
      "isDelightMoment": true
    }
  ]
}
```

---

### Archetype 05: `matrix-comparison-grid` (MatrixComparisonGridSlide)

#### Semantic Role & Purpose
Delivers a high-contrast tabular comparison evaluating the sovereign enterprise platform against legacy or commodity alternatives across core capability dimensions.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  CAPABILITY BENCHMARK                                       |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Enterprise Architecture Feature Matrix          |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Comprehensive Evaluation Across Core Infrastructure      |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | TABLE HEADER (Top: 270px, Height: 70px, Left: 140px, Width: 1640px)                         |  |
|  | Capability Dimension (500px) | Legacy Stack (380px) | Cloud Native (380px) | Sovereign (380px)|  |
|  +---------------------------------------------------------------------------------------------+  |
|  | ROW 1: Active-Active Multi-Master | Partial / Batch     | Add-on License      | [YES] Native    |  |
|  | ROW 2: Sub-5ms Global Replication | Failover > 30s      | 45ms P99 Latency    | [YES] 3.2ms P99 |  |
|  | ROW 3: Air-Gapped Sovereign Clust | Unsupported         | Complex Gateway     | [YES] 100% Zero |  |
|  | ROW 4: Live AST Code Playground   | Static Docs         | Read-Only Iframe    | [YES] Pure DOM  |  |
|  | ROW 5: Automated Linter Auto-Fix  | Manual PR Reviews   | Scripted Hooks      | [YES] Self-Heal |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Independent Audit Conducted by Enterprise Evaluators     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- Comparison Table: `x: 140px`, `y: 270px`, `w: 1640px`, `h: 680px`.
- Highlighted Column: Sovereign Platform (Column 4, Left: 1400px, Width: 380px, Full Table Height).

#### TypeScript Contract
```typescript
export interface MatrixRow {
  id: string;
  stepNumber: number;
  featureName: string;
  category: string;
  competitorValues: Record<string, string>;
  sovereignValue: string;
  isSupported: boolean;
  isExclusive: boolean;
  hasEnterpriseTier: boolean;
}

export interface MatrixComparisonGridSlide extends BaseSlide {
  type: "matrix-comparison-grid";
  competitorNames: string[];
  sovereignPlatformName: string;
  rows: MatrixRow[];
  hasHighlightColumn: boolean;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-mat-01",
  "type": "matrix-comparison-grid",
  "title": "Enterprise Architecture Feature Matrix",
  "subtitle": "Comprehensive Evaluation Across Core Infrastructure",
  "kicker": "CAPABILITY BENCHMARK",
  "themeId": "midnight-luxe",
  "activeStep": 2,
  "maxSteps": 5,
  "competitorNames": ["Legacy Monolith", "Generic Cloud SaaS"],
  "sovereignPlatformName": "White Presentation Engine",
  "hasHighlightColumn": true,
  "rows": [
    {
      "id": "r-1",
      "stepNumber": 1,
      "featureName": "Active-Active Multi-Master",
      "category": "High Availability",
      "competitorValues": {
        "Legacy Monolith": "Active-Passive Manual",
        "Generic Cloud SaaS": "Single-Region Default"
      },
      "sovereignValue": "Native Global Mesh",
      "isSupported": true,
      "isExclusive": true,
      "hasEnterpriseTier": true
    },
    {
      "id": "r-2",
      "stepNumber": 2,
      "featureName": "Sub-5ms Global Replication",
      "category": "Performance",
      "competitorValues": {
        "Legacy Monolith": "Batch (30s+ Delay)",
        "Generic Cloud SaaS": "48ms P99 Latency"
      },
      "sovereignValue": "3.2ms P99 Deterministic",
      "isSupported": true,
      "isExclusive": true,
      "hasEnterpriseTier": true
    },
    {
      "id": "r-3",
      "stepNumber": 3,
      "featureName": "Air-Gapped Sovereign Deployment",
      "category": "Compliance",
      "competitorValues": {
        "Legacy Monolith": "Supported with Bloat",
        "Generic Cloud SaaS": "Strictly Impossible"
      },
      "sovereignValue": "Zero External Callout",
      "isSupported": true,
      "isExclusive": true,
      "hasEnterpriseTier": true
    }
  ]
}
```

---

### Archetype 06: `tech-stack-grid` (TechStackGridSlide)

#### Semantic Role & Purpose
Organizes complex polyglot software environments into discrete architectural strata (Presentation, API Gateway, Event Bus, Microservices, Data Storage, Infrastructure).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  TECHNOLOGY RUNTIME                                         |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Enterprise Polyglot Technology Stack             |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Hardened Systems Architecture Across 5 Core Strata       |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | LAYER 1: CLIENT RUNTIME (Top: 260px, H: 110px)  --  React 18 | Tailwind CSS | Less | Vite   |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | LAYER 2: GATEWAY & ROUTING (Top: 390px, H: 110px) -- Envoy Proxy | gRPC Web | OAuth2 / OIDC|  |
|  +---------------------------------------------------------------------------------------------+  |
|  | LAYER 3: SERVICE CORE (Top: 520px, H: 110px)   -- Go 1.24 | Rust 2024 | Monadic Results   |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | LAYER 4: EVENT & DATA (Top: 650px, H: 110px)   -- Apache Kafka | SQLite Split-DB | Postgres|  |
|  +---------------------------------------------------------------------------------------------+  |
|  | LAYER 5: CLUSTER INFRA (Top: 780px, H: 110px)  -- Kubernetes | Podman | eBPF Telemetry     |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  All Components Open-Standard & Verified Zero-Vulnerability |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- 5 Stack Layers (Width 1640px, Height 110px, Vertical Spacing 20px, starting `y: 260px`).

#### TypeScript Contract
```typescript
export interface TechItem {
  id: string;
  name: string;
  version: string;
  iconName: string;
  hasActiveInspection: boolean;
  isProductionGrade: boolean;
}

export interface StackLayer {
  id: string;
  stepNumber: number;
  layerTitle: string;
  stratumNumber: number;
  description: string;
  technologies: TechItem[];
  hasTelemetry: boolean;
}

export interface TechStackGridSlide extends BaseSlide {
  type: "tech-stack-grid";
  layers: StackLayer[];
  totalComponentCount: number;
  hasSecurityStamp: boolean;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-stack-01",
  "type": "tech-stack-grid",
  "title": "Enterprise Polyglot Technology Stack",
  "subtitle": "Hardened Systems Architecture Across 5 Core Strata",
  "kicker": "TECHNOLOGY RUNTIME",
  "themeId": "true-dark",
  "activeStep": 3,
  "maxSteps": 5,
  "totalComponentCount": 18,
  "hasSecurityStamp": true,
  "layers": [
    {
      "id": "layer-1",
      "stepNumber": 1,
      "layerTitle": "Presentation & Interaction",
      "stratumNumber": 1,
      "description": "Pure live DOM rendering with hardware-accelerated transforms",
      "hasTelemetry": true,
      "technologies": [
        { "id": "t-1", "name": "React 18", "version": "18.3.1", "iconName": "Atom", "hasActiveInspection": false, "isProductionGrade": true },
        { "id": "t-2", "name": "Tailwind CSS", "version": "3.4.1", "iconName": "Wind", "hasActiveInspection": false, "isProductionGrade": true },
        { "id": "t-3", "name": "Less CSS", "version": "4.2.0", "iconName": "Code", "hasActiveInspection": false, "isProductionGrade": true }
      ]
    },
    {
      "id": "layer-2",
      "stepNumber": 2,
      "layerTitle": "Ingress & API Gateway",
      "stratumNumber": 2,
      "description": "High-throughput reverse proxy with mutual TLS",
      "hasTelemetry": true,
      "technologies": [
        { "id": "t-4", "name": "Envoy", "version": "1.30.0", "iconName": "Shield", "hasActiveInspection": false, "isProductionGrade": true },
        { "id": "t-5", "name": "gRPC Web", "version": "1.5.0", "iconName": "Network", "hasActiveInspection": false, "isProductionGrade": true }
      ]
    },
    {
      "id": "layer-3",
      "stepNumber": 3,
      "layerTitle": "High-Performance Core Services",
      "stratumNumber": 3,
      "description": "Microsecond dispatchers and memory-efficient concurrency",
      "hasTelemetry": true,
      "technologies": [
        { "id": "t-6", "name": "Go", "version": "1.24.0", "iconName": "Cpu", "hasActiveInspection": true, "isProductionGrade": true },
        { "id": "t-7", "name": "Rust", "version": "1.85.0", "iconName": "Layers", "hasActiveInspection": true, "isProductionGrade": true }
      ]
    }
  ]
}
```

---

### Archetype 07: `team-hierarchy-org` (TeamHierarchyOrgSlide)

#### Semantic Role & Purpose
Renders executive organizational charts and cross-functional engineering squads with clear reporting lines, leadership portraits, and domain badges.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  LEADERSHIP & TALENT                                        |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Organizational Governance & Squad Matrix         |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Executive Steering and Dedicated Engineering Leads       |
|                                                                                                   |
|                                  +-----------------------+                                        |
|                                  | CHIEF TECHNOLOGY OFF  |                                        |
|                                  | Top: 260px, W: 360px  |                                        |
|                                  | Height: 160px         |                                        |
|                                  | Left: 780px           |                                        |
|                                  +-----------------------+                                        |
|                                              |                                                    |
|                   +--------------------------+--------------------------+                         |
|                   |                                                     |                         |
|        +---------------------+                               +---------------------+              |
|        | VP OF PLATFORM      |                               | VP OF DATA & AI     |              |
|        | Top: 470px, W: 340px|                               | Top: 470px, W: 340px|              |
|        | Left: 430px         |                               | Left: 1150px        |              |
|        +---------------------+                               +---------------------+              |
|                   |                                                     |                         |
|         +---------+---------+                                 +---------+---------+               |
|         |                   |                                 |                   |               |
|  +-------------+     +-------------+                   +-------------+     +-------------+        |
|  | CORE ENGINE |     | DEV PLATFORM|                   | STREAM PIPE |     | INFERENCE AI|        |
|  | Top: 680px  |     | Top: 680px  |                   | Top: 680px  |     | Top: 680px  |        |
|  | Left: 240px |     | Left: 600px |                   | Left: 980px |     | Left: 1340px|        |
|  +-------------+     +-------------+                   +-------------+     +-------------+        |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Total Engineering Organization: 142 Staff Members        |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- Executive Node (Level 1): `x: 780px`, `y: 260px`, `w: 360px`, `h: 160px`.
- VP Nodes (Level 2): `x: 430px` and `1150px`, `y: 470px`, `w: 340px`, `h: 150px`.
- Squad Nodes (Level 3): `x: 240px`, `600px`, `980px`, `1340px`, `y: 680px`, `w: 320px`, `h: 180px`.

#### TypeScript Contract
```typescript
export interface OrgMember {
  id: string;
  stepNumber: number;
  name: string;
  roleTitle: string;
  department: string;
  level: number;
  avatarUrl?: string;
  hasDirectReports: boolean;
  isActiveLeader: boolean;
  hasBadge: boolean;
  badgeLabel?: string;
}

export interface TeamHierarchyOrgSlide extends BaseSlide {
  type: "team-hierarchy-org";
  members: OrgMember[];
  hasReportingConnectors: boolean;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-org-01",
  "type": "team-hierarchy-org",
  "title": "Organizational Governance & Squad Matrix",
  "subtitle": "Executive Steering and Dedicated Engineering Leads",
  "kicker": "LEADERSHIP & TALENT",
  "themeId": "white-brand",
  "activeStep": 1,
  "maxSteps": 3,
  "hasReportingConnectors": true,
  "members": [
    {
      "id": "m-1",
      "stepNumber": 1,
      "name": "Dr. Sarah Chen",
      "roleTitle": "Chief Technology Officer",
      "department": "Executive Office",
      "level": 1,
      "hasDirectReports": true,
      "isActiveLeader": true,
      "hasBadge": true,
      "badgeLabel": "CTO"
    },
    {
      "id": "m-2",
      "stepNumber": 2,
      "name": "Marcus Vance",
      "roleTitle": "VP of Core Platform",
      "department": "Platform Engineering",
      "level": 2,
      "hasDirectReports": true,
      "isActiveLeader": false,
      "hasBadge": true,
      "badgeLabel": "VP"
    },
    {
      "id": "m-3",
      "stepNumber": 2,
      "name": "Elena Rostova",
      "roleTitle": "VP of Data Infrastructure",
      "department": "Data Engineering",
      "level": 2,
      "hasDirectReports": true,
      "isActiveLeader": false,
      "hasBadge": true,
      "badgeLabel": "VP"
    }
  ]
}
```

---

### Archetype 08: `security-compliance-matrix` (SecurityComplianceMatrixSlide)

#### Semantic Role & Purpose
Displays enterprise certification posture, regulatory compliance standards, and continuous cryptographic audit controls for enterprise risk assessments.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  ENTERPRISE GOVERNANCE                                      |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Security & Regulatory Compliance Posture         |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Independent Audits, Zero-Trust Controls & Verification    |
|                                                                                                   |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+   |
|  | SOC 2 TYPE II      |  | ISO 27001:2022     |  | HIPAA COMPLIANT    |  | GDPR / CCPA SECURE |   |
|  | Top: 270px, W: 385 |  | Top: 270px, W: 385 |  | Top: 270px, W: 385 |  | Top: 270px, W: 385 |   |
|  | Height: 440px      |  | Height: 440px      |  | Height: 440px      |  | Height: 440px      |   |
|  | Left: 140px        |  | Left: 558px        |  | Left: 976px        |  | Left: 1395px       |   |
|  |                    |  |                    |  |                    |  |                    |   |
|  | [Badge: VERIFIED]  |  | [Badge: VERIFIED]  |  | [Badge: VERIFIED]  |  | [Badge: VERIFIED]  |   |
|  | Scope: Security,   |  | Scope: Information |  | Scope: Encrypted   |  | Scope: Data Privacy|   |
|  | Availability, Conf |  | Security Mgmt Sys  |  | Health Information |  | Right to Erasure   |   |
|  | Auditor: Big 4 Firm|  | Auditor: BSI Group |  | Auditor: Coalfire  |  | Auditor: Fieldfisher|  |
|  | Zero Deficiencies  |  | Renewal: Oct 2026  |  | Zero Findings Audit|  | DPO Direct Line    |   |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+   |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | AUDIT EVIDENCE SUMMARY (Top: 740px, Left: 140px, Width: 1640px, Height: 210px)              |  |
|  | 256-bit AES at rest | TLS 1.3 in transit | Hardware Security Modules (FIPS 140-3 Level 4)  |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Chief Information Security Officer Annual Sign-off       |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- 4 Compliance Cards: Width 385px each, Height 440px, Spacing 33px, `y: 270px`.
- Audit Evidence Drawer: `x: 140px`, `y: 740px`, `w: 1640px`, `h: 210px`.

#### TypeScript Contract
```typescript
export interface ComplianceItem {
  id: string;
  stepNumber: number;
  frameworkCode: string;
  frameworkName: string;
  certifyingBody: string;
  verificationDate: string;
  auditScope: string;
  isCompliant: boolean;
  hasAuditPass: boolean;
  hasZeroFindings: boolean;
}

export interface SecurityComplianceMatrixSlide extends BaseSlide {
  type: "security-compliance-matrix";
  complianceItems: ComplianceItem[];
  encryptionStandardText: string;
  hasContinuousAuditBadge: boolean;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-sec-01",
  "type": "security-compliance-matrix",
  "title": "Security & Regulatory Compliance Posture",
  "subtitle": "Independent Audits, Zero-Trust Controls & Verification",
  "kicker": "ENTERPRISE GOVERNANCE",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 4,
  "encryptionStandardText": "FIPS 140-3 Level 4 HSM & TLS 1.3 End-to-End Cryptography",
  "hasContinuousAuditBadge": true,
  "complianceItems": [
    {
      "id": "comp-1",
      "stepNumber": 1,
      "frameworkCode": "SOC2-T2",
      "frameworkName": "SOC 2 Type II",
      "certifyingBody": "Ernst & Young LLP",
      "verificationDate": "Q3 2026",
      "auditScope": "Security, Confidentiality & Availability",
      "isCompliant": true,
      "hasAuditPass": true,
      "hasZeroFindings": true
    },
    {
      "id": "comp-2",
      "stepNumber": 2,
      "frameworkCode": "ISO-27001",
      "frameworkName": "ISO/IEC 27001:2022",
      "certifyingBody": "BSI Global",
      "verificationDate": "Q2 2026",
      "auditScope": "Global Information Security Management",
      "isCompliant": true,
      "hasAuditPass": true,
      "hasZeroFindings": true
    },
    {
      "id": "comp-3",
      "stepNumber": 3,
      "frameworkCode": "HIPAA",
      "frameworkName": "HIPAA HITECH",
      "certifyingBody": "Coalfire Systems",
      "verificationDate": "Q1 2026",
      "auditScope": "Protected Health Information (PHI) Isolation",
      "isCompliant": true,
      "hasAuditPass": true,
      "hasZeroFindings": true
    },
    {
      "id": "comp-4",
      "stepNumber": 4,
      "frameworkCode": "GDPR",
      "frameworkName": "GDPR & CCPA",
      "certifyingBody": "Fieldfisher Legal",
      "verificationDate": "Continuous",
      "auditScope": "EU Data Sovereignty & Automated Erasure",
      "isCompliant": true,
      "hasAuditPass": true,
      "hasZeroFindings": true
    }
  ]
}
```

---

### Archetype 09: `product-roadmap-timeline` (ProductRoadmapTimelineSlide)

#### Semantic Role & Purpose
Communicates forward-looking engineering milestones and product roadmaps across multi-quarter release horizons and parallel execution swimlanes.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  PRODUCT STRATEGY                                           |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Strategic Engineering Roadmap & Horizons        |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Execution Milestones Across Q1 - Q4 Delivery Tracks       |
|                                                                                                   |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+   |
|  | Q1 HORIZON         |  | Q2 HORIZON         |  | Q3 HORIZON         |  | Q4 HORIZON         |   |
|  | Top: 260px, W: 385 |  | Top: 260px, W: 385 |  | Top: 260px, W: 385 |  | Top: 260px, W: 385 |   |
|  | Height: 690px      |  | Height: 690px      |  | Height: 690px      |  | Height: 690px      |   |
|  | Left: 140px        |  | Left: 558px        |  | Left: 976px        |  | Left: 1395px       |   |
|  |                    |  |                    |  |                    |  |                    |   |
|  | [SWIMLANE: ENGINE] |  | [SWIMLANE: ENGINE] |  | [SWIMLANE: ENGINE] |  | [SWIMLANE: ENGINE] |   |
|  | Zero-Copy Parser   |  | Multi-Node Cluster |  | Sharded Storage    |  | Autonomous Healing |   |
|  | [Badge: COMPLETE]  |  | [Badge: IN SPRINT] |  | [Badge: PLANNED]   |  | [Badge: BACKLOG]   |   |
|  |                    |  |                    |  |                    |  |                    |   |
|  | [SWIMLANE: UI/UX]  |  | [SWIMLANE: UI/UX]  |  | [SWIMLANE: UI/UX]  |  | [SWIMLANE: UI/UX]  |   |
|  | Live DOM Typography|  | 15 Archetype Decks |  | Visual Editor HUD  |  | AI Voice Narrator  |   |
|  | [Badge: COMPLETE]  |  | [Badge: IN SPRINT] |  | [Badge: PLANNED]   |  | [Badge: BACKLOG]   |   |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+   |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Sprint Velocity: 94.2 Story Points / Fortnight          |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- 4 Quarter Columns: Width 385px each, Height 690px, Spacing 33px, `y: 260px`.

#### TypeScript Contract
```typescript
export interface RoadmapMilestone {
  id: string;
  stepNumber: number;
  swimlane: string;
  milestoneTitle: string;
  deliverableSummary: string;
  isMilestoneComplete: boolean;
  isActiveSprint: boolean;
  hasReleaseGate: boolean;
}

export interface RoadmapQuarter {
  id: string;
  quarterLabel: string;
  themeFocus: string;
  milestones: RoadmapMilestone[];
  isCurrentQuarter: boolean;
}

export interface ProductRoadmapTimelineSlide extends BaseSlide {
  type: "product-roadmap-timeline";
  quarters: RoadmapQuarter[];
  hasCurrentMarker: boolean;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-road-01",
  "type": "product-roadmap-timeline",
  "title": "Strategic Engineering Roadmap & Horizons",
  "subtitle": "Execution Milestones Across Q1 - Q4 Delivery Tracks",
  "kicker": "PRODUCT STRATEGY",
  "themeId": "wp-exam-purple",
  "activeStep": 2,
  "maxSteps": 4,
  "hasCurrentMarker": true,
  "quarters": [
    {
      "id": "q-1",
      "quarterLabel": "Q1 Horizon",
      "themeFocus": "Core Engine Foundation",
      "isCurrentQuarter": false,
      "milestones": [
        {
          "id": "m-1a",
          "stepNumber": 1,
          "swimlane": "Engine Core",
          "milestoneTitle": "Zero-Allocation Parsing",
          "deliverableSummary": "High-throughput JSON AST pipeline in Go/Rust",
          "isMilestoneComplete": true,
          "isActiveSprint": false,
          "hasReleaseGate": true
        },
        {
          "id": "m-1b",
          "stepNumber": 1,
          "swimlane": "UI Presentation",
          "milestoneTitle": "Pure DOM Typography",
          "deliverableSummary": "Eliminated all rasterized canvas text artifacts",
          "isMilestoneComplete": true,
          "isActiveSprint": false,
          "hasReleaseGate": true
        }
      ]
    },
    {
      "id": "q-2",
      "quarterLabel": "Q2 Horizon",
      "themeFocus": "Enterprise Expansion",
      "isCurrentQuarter": true,
      "milestones": [
        {
          "id": "m-2a",
          "stepNumber": 2,
          "swimlane": "Engine Core",
          "milestoneTitle": "Split-DB Multi-Master",
          "deliverableSummary": "SQLite multi-tenant isolation and replication",
          "isMilestoneComplete": false,
          "isActiveSprint": true,
          "hasReleaseGate": true
        },
        {
          "id": "m-2b",
          "stepNumber": 2,
          "swimlane": "UI Presentation",
          "milestoneTitle": "15 Slide Archetypes",
          "deliverableSummary": "Full canonical catalog implementation",
          "isMilestoneComplete": false,
          "isActiveSprint": true,
          "hasReleaseGate": true
        }
      ]
    }
  ]
}
```

---

### Archetype 10: `interactive-faq-flow` (InteractiveFaqFlowSlide)

#### Semantic Role & Purpose
Organizes technical, architectural, and commercial questions into an accordion flow. Enables presenters to address executive objections cleanly without overcrowding the slide canvas.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  EXECUTIVE CLARITY                                          |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Frequently Addressed Architecture Inquiries     |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Direct Answers to Technical & Governance Questions       |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | FAQ ITEM 01: [EXPANDED ACTIVE] (Top: 270px, Height: 180px, Left: 140px, Width: 1640px)      |  |
|  | Question: How does White Presentation guarantee zero font rasterization during scaling?     |  |
|  | Answer: Every headline and body text is rendered as live DOM semantic nodes styled via CSS |  |
|  | transforms. Canvas and WebGL buffers are strictly reserved for background particles.        |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | FAQ ITEM 02: [COLLAPSED] (Top: 470px, Height: 90px, Left: 140px, Width: 1640px)             |  |
|  | Question: What is the failover latency if a primary node suffers network partitioning?      |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | FAQ ITEM 03: [COLLAPSED] (Top: 580px, Height: 90px, Left: 140px, Width: 1640px)             |  |
|  | Question: Can presentations be compiled into standalone air-gapped web applications?        |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | FAQ ITEM 04: [COLLAPSED] (Top: 690px, Height: 90px, Left: 140px, Width: 1640px)             |  |
|  | Question: How are negative boolean traps prevented across large multi-agent teams?         |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Click Any Question or Use Step Keys (1-4) to Expand     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- FAQ Container: `x: 140px`, `y: 270px`, `w: 1640px`, `h: 680px`.
- Expanded Item: Height 180px. Collapsed Item: Height 90px.

#### TypeScript Contract
```typescript
export interface FaqItem {
  id: string;
  stepNumber: number;
  category: string;
  question: string;
  answerSummary: string;
  technicalDetails?: string;
  hasExpandedAnswer: boolean;
  isFeaturedFaq: boolean;
  hasVerifiedAnswer: boolean;
}

export interface InteractiveFaqFlowSlide extends BaseSlide {
  type: "interactive-faq-flow";
  faqItems: FaqItem[];
  supportContactEmail?: string;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-faq-01",
  "type": "interactive-faq-flow",
  "title": "Frequently Addressed Architecture Inquiries",
  "subtitle": "Direct Answers to Technical & Governance Questions",
  "kicker": "EXECUTIVE CLARITY",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 4,
  "supportContactEmail": "architecture@white-pres.dev",
  "faqItems": [
    {
      "id": "faq-1",
      "stepNumber": 1,
      "category": "ACCESSIBILITY",
      "question": "How does White Presentation guarantee zero font rasterization during scaling?",
      "answerSummary": "Every headline, kicker, and body paragraph renders as live DOM HTML nodes. Viewport scaling uses CSS transforms, preserving sharp vector glyphs at any screen resolution.",
      "technicalDetails": "We mandate pure DOM rendering across Gate 1 of the verification suite.",
      "hasExpandedAnswer": true,
      "isFeaturedFaq": true,
      "hasVerifiedAnswer": true
    },
    {
      "id": "faq-2",
      "stepNumber": 2,
      "category": "AVAILABILITY",
      "question": "What is the failover latency if a cluster node suffers network partitioning?",
      "answerSummary": "Sub-50ms automated leadership re-election via Raft consensus protocol.",
      "technicalDetails": "Heartbeat interval is tuned to 15ms with eBPF link-layer health monitoring.",
      "hasExpandedAnswer": false,
      "isFeaturedFaq": false,
      "hasVerifiedAnswer": true
    }
  ]
}
```

---

### Archetype 11: `key-metric-scorecard` (KeyMetricScorecardSlide)

#### Semantic Role & Purpose
Provides an executive dashboard layout presenting four high-visibility strategic metrics, supported by historical trend indicators, target delta badges, and mini sparkline graphs.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  EXECUTIVE DASHBOARD                                        |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Operational Key Performance Indicators           |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Audited Metric Trajectory Across Global Production Stacks|
|                                                                                                   |
|  +---------------------------------------+   +---------------------------------------+            |
|  | METRIC 01: THROUGHPUT                 |   | METRIC 02: P99 LATENCY                |            |
|  | Top: 270px, Left: 140px, W: 800px     |   | Top: 270px, Left: 980px, W: 800px     |            |
|  | Height: 320px                         |   | Height: 320px                         |            |
|  |                                       |   |                                       |            |
|  | DIGIT: 1.48M (Ubuntu 72px Bold)       |   | DIGIT: 3.2ms (Ubuntu 72px Bold)       |            |
|  | [Badge: +42.8% YoY] [Sparkline: ~~~^] |   | [Badge: -68.4% YoY] [Sparkline: \___] |            |
|  | Events dispatched per second          |   | End-to-end edge traversal             |            |
|  +---------------------------------------+   +---------------------------------------+            |
|                                                                                                   |
|  +---------------------------------------+   +---------------------------------------+            |
|  | METRIC 03: CLUSTER AVAILABILITY       |   | METRIC 04: COST SAVINGS               |            |
|  | Top: 630px, Left: 140px, W: 800px     |   | Top: 630px, Left: 980px, W: 800px     |            |
|  | Height: 320px                         |   | Height: 320px                         |            |
|  |                                       |   |                                       |            |
|  | DIGIT: 99.999% (Ubuntu 72px Bold)     |   | DIGIT: $14.2M (Ubuntu 72px Bold)      |            |
|  | [Badge: Zero Outages] [Sparkline: ---]|   | [Badge: 3.8x ROI] [Sparkline: __/^^]  |            |
|  | Multi-region active-active SLA        |   | Annualized operational efficiency     |            |
|  +---------------------------------------+   +---------------------------------------+            |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Data Audited & Verified by Independent Telemetry Engine  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- 4 Scorecard Cards (Width 800px each, Height 320px, Gap 40px):
  - Card 1: `x: 140px`, `y: 270px`, `w: 800px`, `h: 320px`.
  - Card 2: `x: 980px`, `y: 270px`, `w: 800px`, `h: 320px`.
  - Card 3: `x: 140px`, `y: 630px`, `w: 800px`, `h: 320px`.
  - Card 4: `x: 980px`, `y: 630px`, `w: 800px`, `h: 320px`.

#### TypeScript Contract
```typescript
export interface ScorecardMetric {
  id: string;
  stepNumber: number;
  metricLabel: string;
  primaryValue: string;
  deltaBadgeText: string;
  description: string;
  sparklineValues: number[];
  isTargetMet: boolean;
  hasPositiveTrend: boolean;
  isAuditedMetric: boolean;
}

export interface KeyMetricScorecardSlide extends BaseSlide {
  type: "key-metric-scorecard";
  metrics: ScorecardMetric[];
  benchmarkPeriod: string;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-kpi-01",
  "type": "key-metric-scorecard",
  "title": "Operational Key Performance Indicators",
  "subtitle": "Audited Metric Trajectory Across Global Production Stacks",
  "kicker": "EXECUTIVE DASHBOARD",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 4,
  "benchmarkPeriod": "FY2026 Trailing Twelve Months",
  "metrics": [
    {
      "id": "m-1",
      "stepNumber": 1,
      "metricLabel": "Global Event Ingestion",
      "primaryValue": "1.48M/s",
      "deltaBadgeText": "+42.8% YoY",
      "description": "Peak ingress throughput without queue backpressure",
      "sparklineValues": [45, 52, 68, 74, 88, 92, 100],
      "isTargetMet": true,
      "hasPositiveTrend": true,
      "isAuditedMetric": true
    },
    {
      "id": "m-2",
      "stepNumber": 2,
      "metricLabel": "P99 Edge Latency",
      "primaryValue": "3.2ms",
      "deltaBadgeText": "-68.4% YoY",
      "description": "Global round-trip delivery time to client edge",
      "sparklineValues": [12, 10, 8, 6, 5, 4, 3],
      "isTargetMet": true,
      "hasPositiveTrend": true,
      "isAuditedMetric": true
    },
    {
      "id": "m-3",
      "stepNumber": 3,
      "metricLabel": "Cluster Availability",
      "primaryValue": "99.999%",
      "deltaBadgeText": "Zero Outages",
      "description": "Continuous multi-region active-active SLA",
      "sparklineValues": [99.9, 99.95, 99.99, 99.999],
      "isTargetMet": true,
      "hasPositiveTrend": true,
      "isAuditedMetric": true
    },
    {
      "id": "m-4",
      "stepNumber": 4,
      "metricLabel": "Net Cost Optimization",
      "primaryValue": "$14.2M",
      "deltaBadgeText": "3.8x ROI",
      "description": "Annualized operational efficiency and cloud consolidation",
      "sparklineValues": [2, 4, 7, 9, 11, 14],
      "isTargetMet": true,
      "hasPositiveTrend": true,
      "isAuditedMetric": true
    }
  ]
}
```

---

### Archetype 12: `case-study-impact` (CaseStudyImpactSlide)

#### Semantic Role & Purpose
Structures customer transformation stories into a three-act narrative: the client's initial bottleneck (Challenge), the architectural intervention (Solution), and the quantified business outcomes (Impact).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  CUSTOMER SUCCESS STORY                                     |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Fortune 50 Financial Modernization Journey       |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Eliminating 18-Hour Batch Cycles with Streaming Fabric   |
|                                                                                                   |
|  +--------------------------------------------+  +---------------------------------------------+  |
|  | LEFT: TRANSFORMATION NARRATIVE (W: 800px)  |  | RIGHT: QUANTITATIVE IMPACT STACK (W: 800px) |  |
|  | Top: 270px, Left: 140px, Height: 680px     |  | Top: 270px, Left: 980px, Height: 680px      |  |
|  |                                            |  |                                             |  |
|  | [PHASE 1: THE BOTTLENECK]                  |  | +-----------------------------------------+ |  |
|  | 18-hour overnight reconciliation windows   |  | | HERO RESULT: 98% LATENCY REDUCTION      | |  |
|  | caused settlement delays and compliance    |  | | 18 Hours down to 4.2 Minutes Real-Time  | |  |
|  | breach penalties.                          |  | +-----------------------------------------+ |  |
|  |                                            |  |                                             |  |
|  | [PHASE 2: SOVEREIGN ARCHITECTURE]          |  | +-----------------------------------------+ |  |
|  | Deployed event streaming fabric with       |  | | HERO RESULT: $8.4M ANNUAL RECOVERY      | |  |
|  | active-active database replication.        |  | | Eliminated infrastructure licensing fees| |  |
|  |                                            |  | +-----------------------------------------+ |  |
|  | [EXECUTIVE QUOTE]                          |  |                                             |  |
|  | "White Presentation Engine transformed     |  | +-----------------------------------------+ |  |
|  | our settlement pipeline overnight."        |  | | ZERO DATA LOSS AUDIT                    | |  |
|  | -- Senior Vice President, FinTech Core     |  | | 100% Reconciliation Accuracy Verified   | |  |
|  +--------------------------------------------+  +---------------------------------------------+  |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Verified Production Case Study: Global Banking Group     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- Left Narrative Container: `x: 140px`, `y: 270px`, `w: 800px`, `h: 680px`.
- Right Impact Stack: `x: 980px`, `y: 270px`, `w: 800px`, `h: 680px`.

#### TypeScript Contract
```typescript
export interface CaseStudyMetric {
  id: string;
  metricLabel: string;
  metricValue: string;
  deltaText: string;
  hasVerifiedOutcome: boolean;
}

export interface CaseStudyImpactSlide extends BaseSlide {
  type: "case-study-impact";
  clientName: string;
  clientIndustry: string;
  challengeNarrative: string;
  solutionNarrative: string;
  quoteText: string;
  quoteAuthor: string;
  quoteAuthorRole: string;
  impactMetrics: CaseStudyMetric[];
  isFlagshipCustomer: boolean;
  hasQuoteAttribution: boolean;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-cs-01",
  "type": "case-study-impact",
  "title": "Fortune 50 Financial Modernization Journey",
  "subtitle": "Eliminating 18-Hour Batch Cycles with Streaming Fabric",
  "kicker": "CUSTOMER SUCCESS STORY",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 3,
  "clientName": "Global Tier-1 Investment Bank",
  "clientIndustry": "Financial Services & Asset Management",
  "isFlagshipCustomer": true,
  "hasQuoteAttribution": true,
  "challengeNarrative": "Legacy mainframes relied on overnight batch processing, creating 18-hour trade settlement windows and regulatory compliance exposure.",
  "solutionNarrative": "Transitioned to an autonomous Go/Rust microservices architecture with active-active SQLite split-database nodes and sub-5ms replication.",
  "quoteText": "White Presentation Engine's architecture allowed us to process real-time transactions at a fraction of our legacy licensing costs.",
  "quoteAuthor": "David Sterling",
  "quoteAuthorRole": "Head of Global Trading Infrastructure",
  "impactMetrics": [
    {
      "id": "csm-1",
      "metricLabel": "Settlement Window",
      "metricValue": "4.2 min",
      "deltaText": "98% Faster Execution",
      "hasVerifiedOutcome": true
    },
    {
      "id": "csm-2",
      "metricLabel": "Annualized Savings",
      "metricValue": "$8.4M",
      "deltaText": "Licensing & Infra Recovery",
      "hasVerifiedOutcome": true
    }
  ]
}
```

---

### Archetype 13: `dual-column-pros-cons` (DualColumnProsConsSlide)

#### Semantic Role & Purpose
Provides an executive decision framework comparing two opposing strategic pathways (e.g., In-House Build vs Commercial Sovereign Platform; Monolithic Migration vs Event Fabric) across weighted operational criteria.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  TRADE-OFF ANALYSIS                                         |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Sovereign Platform vs In-House Custom Build     |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Strategic Decision Matrix Across TCO, Risk & Velocity    |
|                                                                                                   |
|  +---------------------------------------+   +---------------------------------------+            |
|  | LEFT: SOVEREIGN PLATFORM (ADVANTAGES) |   | RIGHT: IN-HOUSE BUILD (RISKS & DEBT)  |            |
|  | Top: 270px, Left: 140px, W: 800px     |   | Top: 270px, Left: 980px, W: 800px     |            |
|  | Height: 680px                         |   | Height: 680px                         |            |
|  |                                       |   |                                       |            |
|  | [ADVANTAGE 01: IMMEDIATE TIME TO MKT] |   | [RISK 01: EXPONENTIAL TALENT SINK]    |            |
|  | Pre-built hardened 15 archetypes and  |   | 14 engineers required for maintenance;|            |
|  | spring physics engine deployed day 1. |   | diverting resources from core IP.     |            |
|  |                                       |   |                                       |            |
|  | [ADVANTAGE 02: ZERO VULNERABILITY AUD]|   | [RISK 02: BRITTLE GLUE CODE DEBT]     |            |
|  | Continuous automated linter gates and |   | 6.4x multiplication in regression bugs|            |
|  | strict positive boolean rules.        |   | over an 18-month product lifespan.    |            |
|  |                                       |   |                                       |            |
|  | [ADVANTAGE 03: PREDICTABLE OPEX]      |   | [RISK 03: UNBOUNDED BUDGET CREEP]     |            |
|  | Fixed licensing amortized over 36 mo. |   | 240% cost overrun standard benchmark. |            |
|  +---------------------------------------+   +---------------------------------------+            |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Recommendation: Adopt Sovereign Platform for 4.8x ROI   |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- Left Column (Advantages): `x: 140px`, `y: 270px`, `w: 800px`, `h: 680px`.
- Right Column (Risks / Inaction): `x: 980px`, `y: 270px`, `w: 800px`, `h: 680px`.

#### TypeScript Contract
```typescript
export interface TradeoffFactor {
  id: string;
  stepNumber: number;
  factorTitle: string;
  description: string;
  impactScore: number;
  isAdvantage: boolean;
  hasRiskMitigation: boolean;
  isDecisiveFactor: boolean;
}

export interface DualColumnProsConsSlide extends BaseSlide {
  type: "dual-column-pros-cons";
  leftColumnTitle: string;
  rightColumnTitle: string;
  leftFactors: TradeoffFactor[];
  rightFactors: TradeoffFactor[];
  summaryRecommendation: string;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-dc-01",
  "type": "dual-column-pros-cons",
  "title": "Sovereign Platform vs In-House Custom Build",
  "subtitle": "Strategic Decision Matrix Across TCO, Risk & Velocity",
  "kicker": "TRADE-OFF ANALYSIS",
  "themeId": "crimson-executive",
  "activeStep": 1,
  "maxSteps": 3,
  "leftColumnTitle": "Sovereign Enterprise Engine",
  "rightColumnTitle": "Internal Custom Scaffolding",
  "summaryRecommendation": "Adopt Sovereign Platform: Yields 4.8x delivery acceleration and saves $2.4M upfront development cost.",
  "leftFactors": [
    {
      "id": "lf-1",
      "stepNumber": 1,
      "factorTitle": "Immediate Time to Market",
      "description": "Production-ready 15 archetypes and pure DOM engine live on day 1.",
      "impactScore": 95,
      "isAdvantage": true,
      "hasRiskMitigation": true,
      "isDecisiveFactor": true
    },
    {
      "id": "lf-2",
      "stepNumber": 2,
      "factorTitle": "Zero Defect Governance",
      "description": "12 automated quality verification gates prevent regressions.",
      "impactScore": 90,
      "isAdvantage": true,
      "hasRiskMitigation": true,
      "isDecisiveFactor": false
    }
  ],
  "rightFactors": [
    {
      "id": "rf-1",
      "stepNumber": 1,
      "factorTitle": "Opportunity Cost Drain",
      "description": "Consumes 14 senior engineers for 9 months away from customer product.",
      "impactScore": 85,
      "isAdvantage": false,
      "hasRiskMitigation": false,
      "isDecisiveFactor": true
    }
  ]
}
```

---

### Archetype 14: `interactive-code-playground` (InteractiveCodePlaygroundSlide)

#### Semantic Role & Purpose
Designed for deep technical architecture reviews, API launches, and developer keynotes. Presents a split-pane interface with a syntax-highlighted code editor on the left and live execution output and step logs on the right.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  TECHNICAL DEMONSTRATION                                    |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Zero-Allocation Stream Processing Pipeline        |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Live Execution & Memory Profiler in Monadic TypeScript   |
|                                                                                                   |
|  +--------------------------------------------+  +---------------------------------------------+  |
|  | LEFT: SYNTAX HIGHLIGHTED CODE (W: 840px)   |  | RIGHT: EXECUTION CONSOLE & AST (W: 760px)   |  |
|  | Top: 270px, Left: 140px, Height: 680px     |  | Top: 270px, Left: 1020px, Height: 680px     |  |
|  |                                            |  |                                             |  |
|  | 01 import { Result, AppError } from 'core';|  | [TERMINAL HEADER: Live Process Sandbox]     |  |
|  | 02 export async function processTelemetry( |  | $ pnpm run stream:benchmark                 |  |
|  | 03   stream: AsyncIterable<Buffer>         |  |                                             |  |
|  | 04 ): Promise<Result<ProcessedEvent>> {    |  | [OK] Connected to multi-master cluster      |  |
|  | 05   for await (const chunk of stream) {   |  | [INFO] Dispatching 50,000 synthetic events  |  |
|  | 06     const res = parseEventAST(chunk);   |  | [BENCHMARK] P99 Latency: 1.84ms             |  |
|  | 07     if (!res.isSuccess) return res;     |  | [BENCHMARK] Heap Allocation: 0.00 MB        |  |
|  | 08   }                                     |  | [STATUS] Verified 100% Pass                 |  |
|  | 09   return Result.ok(event);              |  |                                             |  |
|  | 10 }                                       |  | [AST VISUALIZER DRAWER]                     |  |
|  +--------------------------------------------+  +---------------------------------------------+  |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  Interactive Execution: Monadic TypeScript Runtime        |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- Left Code Editor Container: `x: 140px`, `y: 270px`, `w: 840px`, `h: 680px`.
- Right Console Output Drawer: `x: 1020px`, `y: 270px`, `w: 760px`, `h: 680px`.

#### TypeScript Contract
```typescript
export interface CodeSnippetLine {
  lineNumber: number;
  codeText: string;
  isHighlighted: boolean;
  hasBreakpoint: boolean;
}

export interface InteractiveCodePlaygroundSlide extends BaseSlide {
  type: "interactive-code-playground";
  codeLanguage: string;
  sourceFilename: string;
  codeLines: CodeSnippetLine[];
  consoleOutputLines: string[];
  isCodeValid: boolean;
  hasActiveCursor: boolean;
  hasConsoleOutput: boolean;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-code-01",
  "type": "interactive-code-playground",
  "title": "Zero-Allocation Stream Processing Pipeline",
  "subtitle": "Live Execution & Memory Profiler in Monadic TypeScript",
  "kicker": "TECHNICAL DEMONSTRATION",
  "themeId": "cyber-neon",
  "activeStep": 1,
  "maxSteps": 3,
  "codeLanguage": "typescript",
  "sourceFilename": "streamProcessor.ts",
  "isCodeValid": true,
  "hasActiveCursor": true,
  "hasConsoleOutput": true,
  "codeLines": [
    { "lineNumber": 1, "codeText": "import { Result, AppError } from './result';", "isHighlighted": false, "hasBreakpoint": false },
    { "lineNumber": 2, "codeText": "export async function dispatchEvent(payload: EventData): Promise<Result<boolean>> {", "isHighlighted": true, "hasBreakpoint": false },
    { "lineNumber": 3, "codeText": "  const validation = validateSchema(payload);", "isHighlighted": true, "hasBreakpoint": false },
    { "lineNumber": 4, "codeText": "  if (validation.hasErrors) return Result.fail(validation.error);", "isHighlighted": false, "hasBreakpoint": false },
    { "lineNumber": 5, "codeText": "  return Result.ok(true);", "isHighlighted": false, "hasBreakpoint": false },
    { "lineNumber": 6, "codeText": "}", "isHighlighted": false, "hasBreakpoint": false }
  ],
  "consoleOutputLines": [
    "$ pnpm run stream:benchmark",
    "[OK]   Compiled with zero warnings in 12ms",
    "[PASS] 50,000 iterations completed: P99 = 1.42ms",
    "[PASS] Zero heap allocation detected"
  ]
}
```

---

### Archetype 15: `closing-cta-showcase` (ClosingCtaShowcaseSlide)

#### Semantic Role & Purpose
Closes the presentation with clear executive next steps, dual interactive call-to-action buttons, direct calendar booking integration, presenter bio credentials, and a verified QR stamp.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  EXECUTIVE NEXT STEPS                                       |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Accelerate Your Enterprise Transformation       |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Schedule a Dedicated Technical Workshop & Proof-of-Yield  |
|                                                                                                   |
|  +--------------------------------------------+  +---------------------------------------------+  |
|  | LEFT: ACTION HERO PANE (W: 840px)          |  | RIGHT: EXECUTIVE CONTACT & QR (W: 760px)    |  |
|  | Top: 270px, Left: 140px, Height: 680px     |  | Top: 270px, Left: 1020px, Height: 680px     |  |
|  |                                            |  |                                             |  |
|  | DISPLAY HEADLINE (Ubuntu Bold 44px)        |  | +-----------------------------------------+ |  |
|  | "Ready to deploy sovereign presentation    |  | | PRESENTER BIO BADGE                     | |  |
|  | architecture across your organization?"    |  | | Alim Ul Karim, Principal Architect      | |  |
|  |                                            |  | | Riseup Asia Enterprise Modernization    | |  |
|  | +----------------------------------------+ |  | +-----------------------------------------+ |  |
|  | | [PRIMARY BUTTON: Book Steering Session] | |  |                                             |  |
|  | +----------------------------------------+ |  | +-----------------------------------------+ |  |
|  |                                            |  | | VERIFIED SECURE QR CODE                 | |  |
|  | +----------------------------------------+ |  | | [  # # # # # # #  ]                     | |  |
|  | | [SECONDARY BUTTON: Download Spec Suite]| |  | | [  # #   #   # #  ] Scan to Schedule Call | |  |
|  | +----------------------------------------+ |  | | [  # # # # # # #  ] Directly on Mobile  | |  |
|  |                                            |  | +-----------------------------------------+ |  |
|  +--------------------------------------------+  +---------------------------------------------+  |
|                                                                                                   |
|  [FOOTER: Left: 140px, Bottom: 44px]  --  White Presentation Engine: Institutional Grade Delivery  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Outer margins: Top 90px, Left 140px, Right 140px, Bottom 60px.
- Left Action Hero Pane: `x: 140px`, `y: 270px`, `w: 840px`, `h: 680px`.
- Right Contact & QR Stage: `x: 1020px`, `y: 270px`, `w: 760px`, `h: 680px`.

#### TypeScript Contract
```typescript
export interface ClosingCtaShowcaseSlide extends BaseSlide {
  type: "closing-cta-showcase";
  heroHeadline: string;
  supportingText: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  presenterName: string;
  presenterTitle: string;
  presenterOrg: string;
  qrCodeUrl?: string;
  hasPrimaryAction: boolean;
  isQrActive: boolean;
  hasCalendarLink: boolean;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-cta-01",
  "type": "closing-cta-showcase",
  "title": "Accelerate Your Enterprise Transformation",
  "subtitle": "Schedule a Dedicated Technical Workshop & Proof-of-Yield",
  "kicker": "EXECUTIVE NEXT STEPS",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 2,
  "heroHeadline": "Ready to deploy sovereign presentation architecture across your global organization?",
  "supportingText": "Our technical architecture team will conduct a bespoke 2-day proof-of-concept audit with guaranteed performance benchmarks.",
  "primaryCtaLabel": "Schedule Architecture Session",
  "primaryCtaUrl": "https://calendar.white-pres.dev/alim-ul-karim",
  "secondaryCtaLabel": "Download Full Spec Suite",
  "secondaryCtaUrl": "https://white-pres.dev/specs",
  "presenterName": "Alim Ul Karim",
  "presenterTitle": "Lead System Architect & Founder",
  "presenterOrg": "Riseup Asia Enterprise Solutions",
  "qrCodeUrl": "assets/qrcodes/consultation-booking.png",
  "hasPrimaryAction": true,
  "isQrActive": true,
  "hasCalendarLink": true
}
```

---

## 3. Discriminated Union & Slide Registry Aggregation

All 15 archetypes are unified into standard TypeScript unions in `src/types/archetypes.ts`:

```typescript
export type EnterpriseArchetypeSlide =
  | ExecutiveSummarySlide
  | SystemArchitectureFlowSlide
  | RoiMetricCalculatorSlide
  | CustomerJourneyMapSlide
  | MatrixComparisonGridSlide
  | TechStackGridSlide
  | TeamHierarchyOrgSlide
  | SecurityComplianceMatrixSlide
  | ProductRoadmapTimelineSlide
  | InteractiveFaqFlowSlide
  | KeyMetricScorecardSlide
  | CaseStudyImpactSlide
  | DualColumnProsConsSlide
  | InteractiveCodePlaygroundSlide
  | ClosingCtaShowcaseSlide;
```
