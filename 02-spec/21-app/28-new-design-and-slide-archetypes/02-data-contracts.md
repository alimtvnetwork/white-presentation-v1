# 02-Slide Archetypes & Data Contracts: Master Catalog of 17 Grounded Archetypes

> **Specification Identifier:** `02-spec/21-app/28-new-design-and-slide-archetypes/02-data-contracts`  
> **Status:** `APPROVED ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Slide Data Schemas, TypeScript Interfaces, ASCII Geometries & Kinetic Choreography  

---

## 1. Architectural Foundations & BaseSlide Contract

Every one of the 17 slide archetypes defined in this specification extends the foundational `BaseSlide` contract. Every archetype strictly satisfies the following core architectural requirements:

1. **Canonical 16:9 1920x1080 Viewport Geometry:** All bounding containers and coordinate calculations are anchored to a $1920 \times 1080$ virtual coordinate space.
2. **Pure Live DOM Typography Mandate:** Every text node (titles, subtitles, kicker bars, narrative bodies, table cells, metric digits, and footnotes) is rendered as accessible, selectable HTML elements. Under no circumstance may typography be rasterized into background images.
3. **Stepwise Intra-Slide Progression:** Slides support internal sub-step choreography (`activeStep: number`, `maxSteps: number`), resolving items into `"past" | "active" | "future"` to drive spring transitions and visual focus.
4. **Positive Boolean Polarity Only:** All boolean fields use positive naming conventions (`is*`, `has*`, `can*`, `should*`). Negative polarity fields (`isNot*`, `isDisabled`, `hidden`) and explicit comparisons (`== true`) are strictly prohibited.
5. **Leaf-Type Segregation:** Contracts are declared in leaf modules (`src/types/archetypes.ts`) and re-exported by `src/types/presentation.ts` to enforce modularity and maintain file size ceilings ($\le 100$ lines).
6. **Executive Persona Normalization:** Any reference to Alim Ul Karim is strictly titled **"Chief Software Engineer"** (never "Founder" or "CEO").

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

## 2. Master Catalog of the 17 Slide Archetypes

```
+---------------------------------------------------------------------------------------------------+
|                        MASTER CATALOG: 17 GROUNDED SLIDE ARCHETYPES                               |
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
|  [16] steps-chain                 --> 4-node connected horizontal delivery process with badges     |
|  [17] timeline-rail               --> Continuous horizontal milestone rail with active node halo   |
+---------------------------------------------------------------------------------------------------+
```

---

### Archetype 01: `executive-summary` (ExecutiveSummarySlide)

#### Semantic Role & Business Context
Provides an executive briefing slide designed for board meetings, steering committees, and investor updates. Synthesizes corporate strategy into three distinct operational pillars, anchored by a prominent callout summarizing the core strategic takeaway.

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
  "takeawayAuthor": "Chief Software Engineer",
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

#### Semantic Role & Business Context
Displays distributed microservices, streaming topologies, and cloud infrastructure pipelines. Illustrates data flow from client devices through gateways to core services and persistent storage tiers, accompanied by animated packet connectors.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  INFRASTRUCTURE TOPOLOGY                                    |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Event-Driven Distributed Microservice Fabric   |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  High-Throughput Ingestion & Zero-Loss State Replication  |
|                                                                                                   |
|  +------------------+    ==> [PACKET] ==>   +------------------+    ==>   +------------------+    |
|  | TIER 1: CLIENTS  |                       | TIER 2: GATEWAY  |          | TIER 3: SERVICES |    |
|  | Top: 300px       |   [Bézier Rail 1-2]   | Top: 300px       |  [Rail]  | Top: 300px       |    |
|  | Left: 140px      |                       | Left: 540px      |          | Left: 940px      |    |
|  | W: 340px H: 640px|                       | W: 340px H: 640px|          | W: 400px H: 640px|    |
|  |                  |                       |                  |          |                  |    |
|  | • Web Clients    |                       | • Envoy Mesh     |          | • Order Worker   |    |
|  | • Mobile Apps    |                       | • Rate Limiting  |          | • Telemetry Svc  |    |
|  | • Edge Workers   |                       | • JWT Auth Guard |          | • Ledger State   |    |
|  +------------------+                       +------------------+          +------------------+    |
|                                                                                   ||              |
|                                                                         [Bézier Connector]        |
|                                                                                   \/              |
|                                                                           +------------------+    |
|                                                                           | TIER 4: STORAGE  |    |
|                                                                           | Top: 300px       |    |
|                                                                           | Left: 1400px     |    |
|                                                                           | W: 380px H: 640px|    |
|                                                                           |                  |    |
|                                                                           | • SQLite Split-DB|    |
|                                                                           | • Kafka Stream   |    |
|                                                                           | • Redis Cache    |    |
|                                                                           +------------------+    |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Canvas: $1920 \times 1080$. Content Area: `x: 140px`, `y: 300px`, `w: 1640px`, `h: 650px`.
- Tier 1 (Edge Ingress): `x: 140px`, `w: 340px`, `h: 640px`.
- Tier 2 (Gateway/Security): `x: 540px`, `w: 340px`, `h: 640px`.
- Tier 3 (Core Services): `x: 940px`, `w: 400px`, `h: 640px`.
- Tier 4 (State & Persistence): `x: 1400px`, `w: 380px`, `h: 640px`.

#### TypeScript Contract
```typescript
export interface ArchitectureNode {
  id: string;
  name: string;
  protocol: string;
  latencyMs: number;
  hasActiveTraffic: boolean;
  statusBadge: string;
}

export interface ArchitectureTier {
  id: string;
  tierNumber: number;
  title: string;
  subtitle: string;
  nodes: ArchitectureNode[];
  isActiveTier: boolean;
  hasSlaGuarantee: boolean;
}

export interface SystemArchitectureFlowSlide extends BaseSlide {
  type: "system-architecture-flow";
  systemThroughput: string;
  meanLatency: string;
  hasLiveTelemetry: boolean;
  tiers: ArchitectureTier[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-arch-01",
  "type": "system-architecture-flow",
  "title": "Event-Driven Distributed Microservice Fabric",
  "subtitle": "High-Throughput Ingestion & Zero-Loss State Replication",
  "kicker": "INFRASTRUCTURE TOPOLOGY",
  "themeId": "midnight-blue",
  "activeStep": 2,
  "maxSteps": 4,
  "systemThroughput": "420,000 req/s",
  "meanLatency": "3.2ms p99",
  "hasLiveTelemetry": true,
  "tiers": [
    {
      "id": "tier-1",
      "tierNumber": 1,
      "title": "Edge Ingress",
      "subtitle": "Global Anycast Layer",
      "isActiveTier": true,
      "hasSlaGuarantee": true,
      "nodes": [
        { "id": "n1", "name": "Cloudflare CDN", "protocol": "HTTP/3", "latencyMs": 1.2, "hasActiveTraffic": true, "statusBadge": "HEALTHY" },
        { "id": "n2", "name": "Mobile Gateway", "protocol": "gRPC-Web", "latencyMs": 2.4, "hasActiveTraffic": true, "statusBadge": "HEALTHY" }
      ]
    },
    {
      "id": "tier-2",
      "tierNumber": 2,
      "title": "Sovereign Gateway",
      "subtitle": "Zero-Trust Perimeter",
      "isActiveTier": true,
      "hasSlaGuarantee": true,
      "nodes": [
        { "id": "n3", "name": "Envoy Service Mesh", "protocol": "mTLS", "latencyMs": 0.4, "hasActiveTraffic": true, "statusBadge": "ACTIVE" },
        { "id": "n4", "name": "Casbin RBAC Guard", "protocol": "IPC", "latencyMs": 0.2, "hasActiveTraffic": true, "statusBadge": "ACTIVE" }
      ]
    },
    {
      "id": "tier-3",
      "tierNumber": 3,
      "title": "Microservices",
      "subtitle": "Stateless Processing Engines",
      "isActiveTier": false,
      "hasSlaGuarantee": true,
      "nodes": [
        { "id": "n5", "name": "Order Pipeline", "protocol": "Go Worker", "latencyMs": 1.8, "hasActiveTraffic": false, "statusBadge": "STANDBY" },
        { "id": "n6", "name": "Telemetry Engine", "protocol": "Rust Core", "latencyMs": 0.9, "hasActiveTraffic": false, "statusBadge": "STANDBY" }
      ]
    },
    {
      "id": "tier-4",
      "tierNumber": 4,
      "title": "Persistent State",
      "subtitle": "Partitioned WAL & Cache",
      "isActiveTier": false,
      "hasSlaGuarantee": true,
      "nodes": [
        { "id": "n7", "name": "Split-DB SQLite", "protocol": "WAL Raft", "latencyMs": 0.8, "hasActiveTraffic": false, "statusBadge": "REPLICATED" },
        { "id": "n8", "name": "Distributed Redis", "protocol": "TCP Resp", "latencyMs": 0.3, "hasActiveTraffic": false, "statusBadge": "OPTIMAL" }
      ]
    }
  ]
}
```

---

### Archetype 03: `roi-metric-calculator` (RoiMetricCalculatorSlide)

#### Semantic Role & Business Context
Financial briefing and budget justification slide for CFOs and procurement directors. Contrasts baseline operational expenditure against transformed expenditure, with dynamic payback timeline gauge and annualized yield.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  FINANCIAL JUSTIFICATION & ROI MODEL                        |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Capital Expenditure vs Transformed Yield        |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  3-Year Net Present Value & Payback Amortization          |
|                                                                                                   |
|  +----------------------------------+       +--------------------------------------------------+  |
|  | BASELINE EXPENSE (STATUS QUO)    |       | TRANSFORMED ENTERPRISE MODEL                     |  |
|  | Top: 300px, Left: 140px          |       | Top: 300px, Left: 940px                          |  |
|  | Width: 740px, Height: 380px      |       | Width: 840px, Height: 380px                      |  |
|  |                                  |       |                                                  |  |
|  | Annual Run Rate:    $4,200,000   |       | Modernized Run Rate: $1,450,000                  |  |
|  | Maintenance Waste:  34%          |       | Efficiency Yield:    +$2,750,000 / yr            |  |
|  | Engineering Hours:  28,000 hrs   |       | Velocity Surge:      4.2x Faster                 |  |
|  +----------------------------------+       +--------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | DYNAMIC PAYBACK & ACCELERATION GAUGE (Top: 720px, Left: 140px, W: 1640px, Height: 240px)    |  |
|  | [=========== PAYBACK HORIZON: 4.8 MONTHS ============]  [NET 3-YR ROI: +384%]               |  |
|  | Phase 1: CapEx ($320k)  --> Phase 2: Breakeven (Mo 4.8)  --> Phase 3: Pure Enterprise Margin |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Baseline Card: `x: 140px`, `y: 300px`, `w: 740px`, `h: 380px`.
- Transformed Card: `x: 940px`, `y: 300px`, `w: 840px`, `h: 380px`.
- Payback Gauge: `x: 140px`, `y: 720px`, `w: 1640px`, `h: 240px`.

#### TypeScript Contract
```typescript
export interface FinancialMetricItem {
  id: string;
  label: string;
  baselineValue: string;
  transformedValue: string;
  differencePercent: string;
  hasPositiveImpact: boolean;
}

export interface RoiMetricCalculatorSlide extends BaseSlide {
  type: "roi-metric-calculator";
  initialInvestment: string;
  annualSavings: string;
  paybackMonths: number;
  netRoiPercent: number;
  hasCfoVerification: boolean;
  metricItems: FinancialMetricItem[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-roi-01",
  "type": "roi-metric-calculator",
  "title": "Capital Expenditure vs Transformed Yield",
  "subtitle": "3-Year Net Present Value & Payback Amortization",
  "kicker": "FINANCIAL JUSTIFICATION & ROI MODEL",
  "themeId": "emerald-wealth",
  "activeStep": 1,
  "maxSteps": 3,
  "initialInvestment": "$320,000",
  "annualSavings": "$2,750,000",
  "paybackMonths": 4.8,
  "netRoiPercent": 384,
  "hasCfoVerification": true,
  "metricItems": [
    { "id": "m1", "label": "Cloud Compute Overhead", "baselineValue": "$1,850,000", "transformedValue": "$620,000", "differencePercent": "-66%", "hasPositiveImpact": true },
    { "id": "m2", "label": "Incident Triage OPEX", "baselineValue": "$1,200,000", "transformedValue": "$280,000", "differencePercent": "-76%", "hasPositiveImpact": true },
    { "id": "m3", "label": "Feature Time-to-Market", "baselineValue": "14 Weeks", "transformedValue": "2.5 Weeks", "differencePercent": "5.6x Faster", "hasPositiveImpact": true }
  ]
}
```

---

### Archetype 04: `customer-journey-map` (CustomerJourneyMapSlide)

#### Semantic Role & Business Context
Illustrates 5 sequential customer experience lifecycle stages (Awareness, Evaluation, Purchase, Activation, Advocacy) mapped against emotional sentiment curves, touchpoint technologies, and friction alerts.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  LIFECYCLE ARCHITECTURE                                     |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Omnichannel Customer Experience Journey        |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Sentiment Curve, Operational Touchpoints & Friction Gates|
|                                                                                                   |
|  [SENTIMENT GRAPH: Top: 270px, Height: 130px, Left: 140px, Width: 1640px]                       |
|   High ^                 o                     o                    o (Peak Delight)              |
|        |                / \                   / \                  /                              |
|   Low  |    o----------o   \                 /   \                /                               |
|        +--------------------\---------------/-----\--------------/--------------------> (Stages)  |
|                               \            /       o (Friction)                                   |
|                                o (Lag)    o                                                       |
|                                                                                                   |
|  +-----------+     +-----------+     +-----------+     +-----------+     +-----------+            |
|  | STAGE 1   |     | STAGE 2   |     | STAGE 3   |     | STAGE 4   |     | STAGE 5   |            |
|  | DISCOVER  |     | EVALUATE  |     | ONBOARD   |     | ADAPT     |     | ADVOCATE  |            |
|  | Top: 430px|     | Top: 430px|     | Top: 430px|     | Top: 430px|     | Top: 430px|            |
|  | W: 300px  |     | W: 300px  |     | W: 300px  |     | W: 300px  |     | W: 300px  |            |
|  | H: 510px  |     | H: 510px  |     | H: 510px  |     | H: 510px  |     | H: 510px  |            |
|  +-----------+     +-----------+     +-----------+     +-----------+     +-----------+            |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Sentiment Rail: `x: 140px`, `y: 270px`, `w: 1640px`, `h: 130px`.
- 5 Stage Cards:
  - Width: 304px, Height: 510px, Y: 430px.
  - Spacing: 30px gap (`x: 140px, 474px, 808px, 1142px, 1476px`).

#### TypeScript Contract
```typescript
export interface JourneyStage {
  id: string;
  stageNumber: number;
  name: string;
  touchpoints: string[];
  sentimentScore: number; // 0 to 100
  customerThought: string;
  hasFrictionAlert: boolean;
  frictionDescription?: string;
  isActiveStage: boolean;
}

export interface CustomerJourneyMapSlide extends BaseSlide {
  type: "customer-journey-map";
  overallSatisfactionScore: string;
  stages: JourneyStage[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-cjm-01",
  "type": "customer-journey-map",
  "title": "Omnichannel Customer Experience Journey",
  "subtitle": "Sentiment Curve, Operational Touchpoints & Friction Gates",
  "kicker": "LIFECYCLE ARCHITECTURE",
  "themeId": "slate-clean",
  "activeStep": 3,
  "maxSteps": 5,
  "overallSatisfactionScore": "94.8 NPS",
  "stages": [
    { "id": "s1", "stageNumber": 1, "name": "Discover", "sentimentScore": 72, "touchpoints": ["Technical Blog", "GitHub Repo"], "customerThought": "Fast architecture docs", "hasFrictionAlert": false, "isActiveStage": false },
    { "id": "s2", "stageNumber": 2, "name": "Evaluate", "sentimentScore": 85, "touchpoints": ["Interactive Sandbox", "Benchmark CLI"], "customerThought": "Impressive microsecond latency", "hasFrictionAlert": false, "isActiveStage": false },
    { "id": "s3", "stageNumber": 3, "name": "Onboard", "sentimentScore": 64, "touchpoints": ["SDK Integration", "API Token Auth"], "customerThought": "Complex IAM role permissions", "hasFrictionAlert": true, "frictionDescription": "IAM role propagation delay", "isActiveStage": true },
    { "id": "s4", "stageNumber": 4, "name": "Adapt", "sentimentScore": 92, "touchpoints": ["Production Cutover", "Telemetry Hub"], "customerThought": "Seamless zero-downtime switch", "hasFrictionAlert": false, "isActiveStage": false },
    { "id": "s5", "stageNumber": 5, "name": "Advocate", "sentimentScore": 98, "touchpoints": ["Keynote Presentation", "Case Study"], "customerThought": "Standardized across all engineering pods", "hasFrictionAlert": false, "isActiveStage": false }
  ]
}
```

---

### Archetype 05: `matrix-comparison-grid` (MatrixComparisonGridSlide)

#### Semantic Role & Business Context
Competitive positioning and procurement matrix evaluating alternative vendors or architectural options against enterprise criteria. Features a prominently highlighted sovereign column with positive verification icons.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  COMPETITIVE MATRIX                                         |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Sovereign Architecture vs Legacy Alternatives   |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Evaluation Across Security, Throughput & Sizing Hard Caps|
|                                                                                                   |
|  +---------------------+-------------------+---------------------+-------------------+        |
|  | EVALUATION CRITERIA | LEGACY MONOLITH   | CLOUD SAAS VENDOR   | WHITE ENGINE (US) |        |
|  | Left: 140px, W:400px| Left: 560px, W:340| Left: 920px, W: 340 | Left: 1280px, W460| (GOLD) |
|  +---------------------+-------------------+---------------------+-------------------+        |
|  | Pure Live DOM Text  | No (Raster PNG)   | Partial (SVG text)  | YES (100% Native) |        |
|  | File Cap <= 100 Ln  | No (3000+ Lines)  | No (Monolithic)     | YES (Strict Rule) |        |
|  | Offline Execution   | Yes               | No (Cloud Lock-in)  | YES (Self-Contained)       |
|  | 10-Step Theme Ramps | No                | No                  | YES (Hardware Less)|       |
|  | Zero-Loss State     | No                | Partial             | YES (Split SQLite)|       |
|  | AI Headless Parsing | No (Binary blobs) | Weak (REST only)    | YES (Clean JSON)  |        |
|  +---------------------+-------------------+---------------------+-------------------+        |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Header Table Row: `y: 280px`, `h: 80px`.
- 6 Feature Rows: `y: 370px` to `y: 910px`, row height 90px.
- Column 1 (Criteria): `x: 140px`, `w: 420px`.
- Column 2 (Competitor A): `x: 580px`, `w: 330px`.
- Column 3 (Competitor B): `x: 930px`, `w: 330px`.
- Column 4 (Sovereign Engine): `x: 1280px`, `w: 500px` (Elevated with active border and halo).

#### TypeScript Contract
```typescript
export interface MatrixFeatureRow {
  id: string;
  category: string;
  featureName: string;
  competitorAValue: string;
  competitorBValue: string;
  sovereignValue: string;
  isSovereignSuperior: boolean;
  hasVerifiedProof: boolean;
}

export interface MatrixComparisonGridSlide extends BaseSlide {
  type: "matrix-comparison-grid";
  competitorAName: string;
  competitorBName: string;
  sovereignName: string;
  hasWinnerBadge: boolean;
  winnerBadgeText?: string;
  rows: MatrixFeatureRow[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-mat-01",
  "type": "matrix-comparison-grid",
  "title": "Sovereign Architecture vs Legacy Alternatives",
  "subtitle": "Evaluation Across Security, Throughput & Sizing Hard Caps",
  "kicker": "COMPETITIVE MATRIX",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 3,
  "competitorAName": "Legacy Monolith",
  "competitorBName": "Cloud SaaS Vendor",
  "sovereignName": "White Presentation Engine",
  "hasWinnerBadge": true,
  "winnerBadgeText": "HIGHEST RATED ARCHITECTURE",
  "rows": [
    { "id": "r1", "category": "TYPOGRAPHY", "featureName": "Pure Live DOM Typography", "competitorAValue": "Rasterized PNG", "competitorBValue": "SVG Text Fallback", "sovereignValue": "100% Native Live DOM", "isSovereignSuperior": true, "hasVerifiedProof": true },
    { "id": "r2", "category": "CODE HYGIENE", "featureName": "Hard Rule <= 100 Lines", "competitorAValue": "3,400 Line Monoliths", "competitorBValue": "Unbounded Files", "sovereignValue": "Strict File Decomposition", "isSovereignSuperior": true, "hasVerifiedProof": true },
    { "id": "r3", "category": "PERFORMANCE", "featureName": "Zero-Loss State Sync", "competitorAValue": "File Lock Corruption", "competitorBValue": "Cloud Latency Lag", "sovereignValue": "Split SQLite WAL Engine", "isSovereignSuperior": true, "hasVerifiedProof": true },
    { "id": "r4", "category": "ACCESSIBILITY", "featureName": "WCAG 2.1 AAA Compliance", "competitorAValue": "Fails Screen Readers", "competitorBValue": "Partial AA", "sovereignValue": "Complete AAA Compliance", "isSovereignSuperior": true, "hasVerifiedProof": true }
  ]
}
```

---

### Archetype 06: `tech-stack-grid` (TechStackGridSlide)

#### Semantic Role & Business Context
Engineering overview slide categorizing technology choices across 5 operational tiers (Client UI, API Mesh, Microservices, Storage Layer, Infrastructure & CI/CD). Displays technology logos, maturity status, and production version numbers.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  ENGINEERING SPECIFICATION                                  |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Polyglot Production Technology Stack            |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Modernized Tooling, Zero-Dependency Runtimes & CI Gates  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | TIER 1: CLIENT PRESENTATION (React 19, TypeScript 5.8, Framer Motion, Less) [ACTIVE]         |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | TIER 2: API & GATEWAY (Envoy Mesh, Casbin RBAC, HTTP/3, Protobuf)                           |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | TIER 3: DISTRIBUTED SERVICES (Go 1.24 Core, Rust Telemetry, Node Orchestrator)              |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | TIER 4: PERSISTENCE & CACHING (Split-DB SQLite WAL, Redis 7.2, Kafka Streaming)             |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | TIER 5: INFRASTRUCTURE & AUTOMATION (Docker Multi-Stage, GitHub Actions 0.0GB, Linux Alpine)|  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- 5 Stack Tiers: `x: 140px`, `w: 1640px`.
- Tier 1: `y: 280px`, `h: 125px`.
- Tier 2: `y: 420px`, `h: 125px`.
- Tier 3: `y: 560px`, `h: 125px`.
- Tier 4: `y: 700px`, `h: 125px`.
- Tier 5: `y: 840px`, `h: 125px`.

#### TypeScript Contract
```typescript
export interface TechPill {
  id: string;
  name: string;
  version: string;
  iconName: string;
  isStandardTool: boolean;
  hasProductionProof: boolean;
}

export interface TechStackTier {
  id: string;
  tierNumber: number;
  tierName: string;
  category: string;
  technologies: TechPill[];
  isActiveTier: boolean;
}

export interface TechStackGridSlide extends BaseSlide {
  type: "tech-stack-grid";
  totalTechnologiesCount: number;
  tiers: TechStackTier[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-tech-01",
  "type": "tech-stack-grid",
  "title": "Polyglot Production Technology Stack",
  "subtitle": "Modernized Tooling, Zero-Dependency Runtimes & CI Gates",
  "kicker": "ENGINEERING SPECIFICATION",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 5,
  "totalTechnologiesCount": 18,
  "tiers": [
    {
      "id": "t1",
      "tierNumber": 1,
      "tierName": "Client Presentation",
      "category": "FRONTEND",
      "isActiveTier": true,
      "technologies": [
        { "id": "p1", "name": "React", "version": "19.0.0", "iconName": "Atom", "isStandardTool": true, "hasProductionProof": true },
        { "id": "p2", "name": "TypeScript", "version": "5.8.2", "iconName": "Code", "isStandardTool": true, "hasProductionProof": true },
        { "id": "p3", "name": "Framer Motion", "version": "12.4.0", "iconName": "Sparkles", "isStandardTool": true, "hasProductionProof": true }
      ]
    },
    {
      "id": "t2",
      "tierNumber": 2,
      "tierName": "API & Ingress",
      "category": "GATEWAY",
      "isActiveTier": false,
      "technologies": [
        { "id": "p4", "name": "Envoy", "version": "1.32.0", "iconName": "Network", "isStandardTool": true, "hasProductionProof": true },
        { "id": "p5", "name": "Casbin", "version": "2.88.0", "iconName": "Lock", "isStandardTool": true, "hasProductionProof": true }
      ]
    }
  ]
}
```

---

### Archetype 07: `team-hierarchy-org` (TeamHierarchyOrgSlide)

#### Semantic Role & Business Context
Organizational structure and governance slide. Renders an executive leadership node branching via SVG hierarchy lines into specialized functional directors and engineering pod leads. Strictly enforces the **"Chief Software Engineer"** title for Alim Ul Karim.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  LEADERSHIP & GOVERNANCE                                    |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Engineering Organization & Squad Topology       |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Autonomous Functional Pods & Systems Accountability       |
|                                                                                                   |
|                         +-----------------------------------+                                     |
|                         | ALIM UL KARIM                     |                                     |
|                         | Chief Software Engineer           |                                     |
|                         | Top: 290px, Left: 720px           |                                     |
|                         | Width: 480px, Height: 150px       |                                     |
|                         +-----------------------------------+                                     |
|                                           |                                                       |
|                     +---------------------+---------------------+                                 |
|                     |                                           |                                 |
|     +-------------------------------+           +-------------------------------+                 |
|     | ARCHITECTURE & PLATFORM LEAD  |           | AGENTIC AI & COMPLIANCE LEAD  |                 |
|     | Top: 510px, Left: 260px       |           | Top: 510px, Left: 1040px      |                 |
|     | Width: 420px, Height: 140px   |           | Width: 420px, Height: 140px   |                 |
|     +-------------------------------+           +-------------------------------+                 |
|                     |                                           |                                 |
|        +------------+------------+                 +------------+------------+                    |
|        |                         |                 |                         |                    |
|  +-----------+             +-----------+     +-----------+             +-----------+              |
|  | POD: UI   |             | POD: SEC  |     | POD: AI   |             | POD: QA   |              |
|  | Top: 730px|             | Top: 730px|     | Top: 730px|             | Top: 730px|              |
|  | W: 300px  |             | W: 300px  |     | W: 300px  |             | W: 300px  |              |
|  +-----------+             +-----------+     +-----------+             +-----------+              |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Executive Root Node: `x: 720px`, `y: 290px`, `w: 480px`, `h: 150px`.
- Level 1 Director Nodes: `y: 510px`, `w: 420px`, `h: 140px` (`x: 260px, 1040px`).
- Level 2 Pod Nodes: `y: 730px`, `w: 300px`, `h: 180px` (`x: 180px, 540px, 980px, 1340px`).

#### TypeScript Contract
```typescript
export interface OrgMemberNode {
  id: string;
  name: string;
  title: string; // Strictly "Chief Software Engineer" for Alim Ul Karim
  avatarUrl?: string;
  location: string;
  reportsToId?: string;
  hasActiveFocus: boolean;
  isLeadRole: boolean;
}

export interface TeamHierarchyOrgSlide extends BaseSlide {
  type: "team-hierarchy-org";
  departmentName: string;
  totalTeamHeadcount: number;
  members: OrgMemberNode[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-org-01",
  "type": "team-hierarchy-org",
  "title": "Engineering Organization & Squad Topology",
  "subtitle": "Autonomous Functional Pods & Systems Accountability",
  "kicker": "LEADERSHIP & GOVERNANCE",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 3,
  "departmentName": "Enterprise Systems Engineering",
  "totalTeamHeadcount": 42,
  "members": [
    {
      "id": "m-root",
      "name": "Alim Ul Karim",
      "title": "Chief Software Engineer",
      "location": "Global / Remote",
      "hasActiveFocus": true,
      "isLeadRole": true
    },
    {
      "id": "m-dir-1",
      "name": "Sarah Chen",
      "title": "Principal Systems Architect",
      "location": "San Francisco, CA",
      "reportsToId": "m-root",
      "hasActiveFocus": false,
      "isLeadRole": true
    },
    {
      "id": "m-dir-2",
      "name": "Marcus Vance",
      "title": "Director of Agentic AI & Telemetry",
      "location": "Austin, TX",
      "reportsToId": "m-root",
      "hasActiveFocus": false,
      "isLeadRole": true
    }
  ]
}
```

---

### Archetype 08: `security-compliance-matrix` (SecurityComplianceMatrixSlide)

#### Semantic Role & Business Context
Enterprise trust, risk management, and regulatory compliance audit slide. Demonstrates certification posture across SOC2 Type II, ISO 27001, HIPAA, GDPR, and FedRAMP, detailing audit controls and positive compliance status.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  ENTERPRISE TRUST & GOVERNANCE                              |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Sovereign Security & Regulatory Compliance       |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Continuous Automated Audit Telemetry & Cryptographic Proof|
|                                                                                                   |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+   |
|  | SOC 2 TYPE II      |  | ISO 27001:2022     |  | HIPAA COMPLIANT    |  | GDPR & CCPA        |   |
|  | Top: 300px, W:380px|  | Top: 300px, W:380px|  | Top: 300px, W:380px|  | Top: 300px, W:380px|   |
|  | Left: 140px        |  | Left: 560px        |  | Left: 980px        |  | Left: 1400px       |   |
|  | Height: 320px      |  | Height: 320px      |  | Height: 320px      |  | Height: 320px      |   |
|  | [Badge: VERIFIED]  |  | [Badge: VERIFIED]  |  | [Badge: VERIFIED]  |  | [Badge: VERIFIED]  |   |
|  | Audit: EY Global   |  | Audit: BSI Group   |  | Audit: Third-Party |  | Data Sovereignty   |   |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+   |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | REAL-TIME SECURITY CONTROLS & CONTINUOUS PEN-TESTING TELEMETRY (Top: 670px, Height: 260px)   |  |
|  | • Zero Trust Identity (mTLS)   • 100% Cryptographic Audit Trails   • 0 Known CVE Vulnerabilities|
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- 4 Compliance Cards: `y: 300px`, `w: 380px`, `h: 320px` (`x: 140px, 560px, 980px, 1400px`).
- Security Telemetry Panel: `x: 140px`, `y: 670px`, `w: 1640px`, `h: 260px`.

#### TypeScript Contract
```typescript
export interface ComplianceCertification {
  id: string;
  name: string;
  badgeCode: string;
  auditorName: string;
  renewalDate: string;
  hasActiveCertification: boolean;
  hasZeroDeficiencies: boolean;
}

export interface SecurityControlItem {
  id: string;
  controlCode: string;
  name: string;
  automatedCheckFrequency: string;
  isPassingAudit: boolean;
}

export interface SecurityComplianceMatrixSlide extends BaseSlide {
  type: "security-compliance-matrix";
  overallPostureRating: string;
  certifications: ComplianceCertification[];
  controls: SecurityControlItem[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-sec-01",
  "type": "security-compliance-matrix",
  "title": "Sovereign Security & Regulatory Compliance",
  "subtitle": "Continuous Automated Audit Telemetry & Cryptographic Proof",
  "kicker": "ENTERPRISE TRUST & GOVERNANCE",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 4,
  "overallPostureRating": "TIER-1 ENTERPRISE TRUST",
  "certifications": [
    { "id": "c1", "name": "SOC 2 Type II", "badgeCode": "AICPA SOC", "auditorName": "Ernst & Young", "renewalDate": "2027-Q1", "hasActiveCertification": true, "hasZeroDeficiencies": true },
    { "id": "c2", "name": "ISO/IEC 27001", "badgeCode": "ISO CERT", "auditorName": "BSI Global", "renewalDate": "2027-Q3", "hasActiveCertification": true, "hasZeroDeficiencies": true },
    { "id": "c3", "name": "HIPAA Security", "badgeCode": "HHS HITECH", "auditorName": "KPMG Audit", "renewalDate": "2026-Q4", "hasActiveCertification": true, "hasZeroDeficiencies": true },
    { "id": "c4", "name": "GDPR / CCPA", "badgeCode": "EU COMPLIANT", "auditorName": "Internal Counsel", "renewalDate": "Continuous", "hasActiveCertification": true, "hasZeroDeficiencies": true }
  ],
  "controls": [
    { "id": "k1", "controlCode": "AC-01", "name": "Zero Trust mTLS Edge Ingress", "automatedCheckFrequency": "Every 60s", "isPassingAudit": true },
    { "id": "k2", "controlCode": "SI-04", "name": "Continuous Secret Leak Prevention", "automatedCheckFrequency": "Every Git Push", "isPassingAudit": true }
  ]
}
```

---

### Archetype 09: `product-roadmap-timeline` (ProductRoadmapTimelineSlide)

#### Semantic Role & Business Context
Multi-quarter strategic roadmap displaying parallel execution swimlanes (Core Engine, Enterprise AI, Platform Integrations). Uses step progression to highlight upcoming release targets and milestone delivery flags.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  STRATEGIC HORIZON                                          |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  FY2026 Multi-Quarter Execution Roadmap          |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Continuous Milestone Deliveries Across Parallel Tracks   |
|                                                                                                   |
|  +--------------------+-------------------+-------------------+-------------------+           |
|  | TRACK / QUARTER    | Q1: FOUNDATIONS   | Q2: INTELLIGENCE  | Q3: HYPER-SCALE   | Q4: GLOBAL|   |
|  | Left: 140px, W:240 | Left: 400px, W:330| Left: 750px, W:330| Left: 1100px, W330| Left: 1450|   |
|  +--------------------+-------------------+-------------------+-------------------+           |
|  | ENGINE CORE        | [v1.0 Release]    | [Split-DB WAL]    | [Zero-Copy IO]    | [Active²] |   |
|  | ENTERPRISE AI      | [Spec Synthesizer]| [Agentic Planner] | [Self-Healing]    | [Auto-Gov]|   |
|  | INTEGRATIONS       | [WebRTC Screen]   | [Figma Live Sync] | [Slack/Jira Webhk]| [Air-Gap] |   |
|  +--------------------+-------------------+-------------------+-------------------+           |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Header Timeline Axis: `y: 280px`, `h: 60px`.
- 3 Track Swimlanes: `y: 360px`, `y: 540px`, `y: 720px`, each lane height 150px.
- Quarter Columns: 4 columns, width 330px each (`x: 400px, 750px, 1100px, 1450px`).

#### TypeScript Contract
```typescript
export interface RoadmapMilestone {
  id: string;
  quarterCode: string; // "Q1", "Q2", "Q3", "Q4"
  title: string;
  tag: string;
  hasCompleted: boolean;
  isActiveTarget: boolean;
}

export interface RoadmapTrack {
  id: string;
  trackName: string;
  trackIcon: string;
  milestones: RoadmapMilestone[];
}

export interface ProductRoadmapTimelineSlide extends BaseSlide {
  type: "product-roadmap-timeline";
  currentActiveQuarter: string;
  tracks: RoadmapTrack[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-road-01",
  "type": "product-roadmap-timeline",
  "title": "FY2026 Multi-Quarter Execution Roadmap",
  "subtitle": "Continuous Milestone Deliveries Across Parallel Tracks",
  "kicker": "STRATEGIC HORIZON",
  "themeId": "true-dark",
  "activeStep": 2,
  "maxSteps": 4,
  "currentActiveQuarter": "Q2 2026",
  "tracks": [
    {
      "id": "tr-1",
      "trackName": "Engine Core",
      "trackIcon": "Cpu",
      "milestones": [
        { "id": "m-q1-1", "quarterCode": "Q1", "title": "Pure DOM Renderer", "tag": "CORE", "hasCompleted": true, "isActiveTarget": false },
        { "id": "m-q2-1", "quarterCode": "Q2", "title": "Split-DB WAL Engine", "tag": "DB", "hasCompleted": false, "isActiveTarget": true },
        { "id": "m-q3-1", "quarterCode": "Q3", "title": "Zero-Copy Streaming", "tag": "PERF", "hasCompleted": false, "isActiveTarget": false },
        { "id": "m-q4-1", "quarterCode": "Q4", "title": "Active-Active Multi-Region", "tag": "SCALE", "hasCompleted": false, "isActiveTarget": false }
      ]
    },
    {
      "id": "tr-2",
      "trackName": "Enterprise AI",
      "trackIcon": "Bot",
      "milestones": [
        { "id": "m-q1-2", "quarterCode": "Q1", "title": "Spec Synthesis Engine", "tag": "AI", "hasCompleted": true, "isActiveTarget": false },
        { "id": "m-q2-2", "quarterCode": "Q2", "title": "Multi-Agent Coordinator", "tag": "AGENT", "hasCompleted": false, "isActiveTarget": true },
        { "id": "m-q3-2", "quarterCode": "Q3", "title": "Self-Healing Pipeline AI", "tag": "RCA", "hasCompleted": false, "isActiveTarget": false },
        { "id": "m-q4-2", "quarterCode": "Q4", "title": "Autonomous Governance", "tag": "GOV", "hasCompleted": false, "isActiveTarget": false }
      ]
    }
  ]
}
```

---

### Archetype 10: `interactive-faq-flow` (InteractiveFaqFlowSlide)

#### Semantic Role & Business Context
Executive Q&A hub for addressing anticipated investor, customer, or stakeholder objections. Renders categorized questions with step-by-step accordion reveals and detailed technical answers.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  EXECUTIVE CLARITY & FAQ                                    |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Architectural Invariants & Key Inquiries        |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Addressing Enterprise Scale, Security & Deployment Queries|
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | Q1: How does the pure live DOM architecture guarantee 60fps performance?                     |  |
|  | [EXPANDED]: By anchoring layouts to virtual 1920x1080 and applying GPU matrix scaling...     |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | Q2: What prevents data loss in multi-agent autonomous loops?                                 |  |
|  | [COLLAPSED]: Split SQLite database transactions with WAL journal mode...                    |  |
|  +---------------------------------------------------------------------------------------------+  |
|  | Q3: Why is there a strict <= 100 lines of code limit per component file?                    |  |
|  | [COLLAPSED]: Prevents component monoliths, maximizes composability and ensures zero drift... |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Accordion Container: `x: 140px`, `y: 280px`, `w: 1640px`.
- Question Items: 3 to 4 items, collapsed height 110px, expanded height 240px.

#### TypeScript Contract
```typescript
export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answerMarkdown: string;
  authorTitle?: string;
  isExpanded: boolean;
  hasImportantBadge: boolean;
}

export interface InteractiveFaqFlowSlide extends BaseSlide {
  type: "interactive-faq-flow";
  totalFaqsCount: number;
  items: FaqItem[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-faq-01",
  "type": "interactive-faq-flow",
  "title": "Architectural Invariants & Key Inquiries",
  "subtitle": "Addressing Enterprise Scale, Security & Deployment Queries",
  "kicker": "EXECUTIVE CLARITY & FAQ",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 3,
  "totalFaqsCount": 3,
  "items": [
    {
      "id": "faq-1",
      "category": "PERFORMANCE",
      "question": "How does pure live DOM typography guarantee 60fps performance across 4K displays?",
      "answerMarkdown": "By anchoring all coordinates to a canonical 1920x1080 virtual canvas and driving outer scale via hardware-accelerated CSS GPU matrix transform `scale(s)`. Zero text is ever rasterized or re-flowed on resize.",
      "authorTitle": "Chief Software Engineer",
      "isExpanded": true,
      "hasImportantBadge": true
    },
    {
      "id": "faq-2",
      "category": "CODE HYGIENE",
      "question": "Why is there an uncompromising <= 100 lines of code cap per React component?",
      "answerMarkdown": "Monolithic files degrade LLM comprehension, invite unintended regressions, and compromise testability. Bounded components guarantee single responsibility and modular subcomponent extraction.",
      "isExpanded": false,
      "hasImportantBadge": false
    }
  ]
}
```

---

### Archetype 11: `key-metric-scorecard` (KeyMetricScorecardSlide)

#### Semantic Role & Business Context
Four-quadrant executive KPI dashboard displaying high-velocity figures, percentage growth badges, mini sparklines, and benchmark progress targets.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  EXECUTIVE SCORECARD                                        |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Key Performance Indicators & Velocity Benchmarks |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Trailing 12-Month Operational Telemetry & Platform Yield  |
|                                                                                                   |
|  +-----------------------------------+       +-----------------------------------+                |
|  | QUADRANT 1: THROUGHPUT            |       | QUADRANT 2: RELIABILITY           |                |
|  | Top: 290px, Left: 140px, W: 800px |       | Top: 290px, Left: 980px, W: 800px |                |
|  | Height: 320px                     |       | Height: 320px                     |                |
|  | KPI: 480k req/s (+38% YoY)        |       | KPI: 99.999% SLA (< 45s MTTR)    |                |
|  | [SPARKLINE CHART: ~~~~~/\~~~]     |       | [PROGRESS BAR: [==========] 100%] |                |
|  +-----------------------------------+       +-----------------------------------+                |
|                                                                                                   |
|  +-----------------------------------+       +-----------------------------------+                |
|  | QUADRANT 3: EFFICIENCY            |       | QUADRANT 4: DEVELOPER VELOCITY    |                |
|  | Top: 640px, Left: 140px, W: 800px |       | Top: 640px, Left: 980px, W: 800px |                |
|  | Height: 320px                     |       | Height: 320px                     |                |
|  | KPI: $12.4M Net OPEX Savings      |       | KPI: 4.8x Deploy Frequency (CI)   |                |
|  | [SPARKLINE CHART: __/'''^^^^]     |       | [BENCHMARK: 12 min vs 90 min]     |                |
|  +-----------------------------------+       +-----------------------------------+                |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- 4 Scorecard Quadrants:
  - Q1: `x: 140px`, `y: 290px`, `w: 800px`, `h: 320px`.
  - Q2: `x: 980px`, `y: 290px`, `w: 800px`, `h: 320px`.
  - Q3: `x: 140px`, `y: 640px`, `w: 800px`, `h: 320px`.
  - Q4: `x: 980px`, `y: 640px`, `w: 800px`, `h: 320px`.

#### TypeScript Contract
```typescript
export interface MetricCard {
  id: string;
  quadrantNumber: number;
  label: string;
  figure: string;
  growthBadge: string;
  description: string;
  sparklineValues: number[];
  hasSparkline: boolean;
  hasPositiveGrowth: boolean;
  isActiveCard: boolean;
}

export interface KeyMetricScorecardSlide extends BaseSlide {
  type: "key-metric-scorecard";
  reportingPeriod: string;
  metrics: MetricCard[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-kpi-01",
  "type": "key-metric-scorecard",
  "title": "Key Performance Indicators & Velocity Benchmarks",
  "subtitle": "Trailing 12-Month Operational Telemetry & Platform Yield",
  "kicker": "EXECUTIVE SCORECARD",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 4,
  "reportingPeriod": "FY2026-Q1 to Q3",
  "metrics": [
    { "id": "q1", "quadrantNumber": 1, "label": "Network Throughput", "figure": "480k req/s", "growthBadge": "+38% YoY", "description": "Sustained peak volume with zero packet drop", "sparklineValues": [40, 48, 55, 62, 78, 88, 95], "hasSparkline": true, "hasPositiveGrowth": true, "isActiveCard": true },
    { "id": "q2", "quadrantNumber": 2, "label": "Platform SLA", "figure": "99.999%", "growthBadge": "+0.09%", "description": "Mean time to resolution under 45 seconds", "sparklineValues": [99, 99.2, 99.8, 99.99, 99.999], "hasSparkline": true, "hasPositiveGrowth": true, "isActiveCard": false },
    { "id": "q3", "quadrantNumber": 3, "label": "Annualized OPEX Savings", "figure": "$12.4M", "growthBadge": "-42% Cost", "description": "Elimination of redundant commercial licenses", "sparklineValues": [2, 4.5, 7.8, 10.2, 12.4], "hasSparkline": true, "hasPositiveGrowth": true, "isActiveCard": false },
    { "id": "q4", "quadrantNumber": 4, "label": "Deployment Frequency", "figure": "4.8x", "growthBadge": "+380%", "description": "CI/CD automated pipeline build in under 3 minutes", "sparklineValues": [1.0, 1.8, 2.6, 3.4, 4.8], "hasSparkline": true, "hasPositiveGrowth": true, "isActiveCard": false }
  ]
}
```

---

### Archetype 12: `case-study-impact` (CaseStudyImpactSlide)

#### Semantic Role & Business Context
Enterprise customer transformation case study structured into three narrative phases: Challenge (the status quo friction), Solution (the sovereign architecture deployment), and Quantified Yield (the business outcome).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  ENTERPRISE TRANSFORMATION CASE STUDY                       |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Global Financial Institution Migration          |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Transitioning 40 Million User Accounts to Zero-Loss Fabric|
|                                                                                                   |
|  +-----------------------+     +-----------------------+     +-----------------------+            |
|  | 01: THE CHALLENGE     |     | 02: THE ARCHITECTURE  |     | 03: QUANTIFIED YIELD  |            |
|  | Top: 290px, W: 520px  |     | Top: 290px, W: 520px  |     | Top: 290px, W: 520px  |            |
|  | Height: 640px         |     | Height: 640px         |     | Height: 640px         |            |
|  | Left: 140px           |     | Left: 700px           |     | Left: 1260px          |            |
|  |                       |     |                       |     |                       |            |
|  | • 4.2-Hour Outages    |     | • Event Mesh Fabric   |     | • 100% Uptime Sustained|           |
|  | • $2.8M Annual Waste  |     | • Split-DB Isolation  |     | • $18.2M Net Savings  |            |
|  | • Fragmented Silos    |     | • Zero-Copy Caching   |     | • 12ms p99 Latency    |            |
|  +-----------------------+     +-----------------------+     +-----------------------+            |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- 3 Phase Columns: `y: 290px`, `w: 520px`, `h: 640px` (`x: 140px, 700px, 1260px`).

#### TypeScript Contract
```typescript
export interface CaseStudyPhase {
  id: string;
  phaseNumber: number;
  title: string;
  subtitle: string;
  narrative: string;
  keyMetrics: string[];
  hasHighlight: boolean;
  isActivePhase: boolean;
}

export interface CaseStudyImpactSlide extends BaseSlide {
  type: "case-study-impact";
  clientName: string;
  clientIndustry: string;
  phases: CaseStudyPhase[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-case-01",
  "type": "case-study-impact",
  "title": "Global Financial Institution Migration",
  "subtitle": "Transitioning 40 Million User Accounts to Zero-Loss Fabric",
  "kicker": "ENTERPRISE TRANSFORMATION CASE STUDY",
  "themeId": "true-dark",
  "activeStep": 3,
  "maxSteps": 3,
  "clientName": "Global Tier-1 Banking Corp",
  "clientIndustry": "Financial Services & Payment Settlement",
  "phases": [
    { "id": "cp1", "phaseNumber": 1, "title": "The Legacy Challenge", "subtitle": "Monolithic Technical Debt", "narrative": "Repeated peak-load degradations and a 4-month release cadence restricted innovation.", "keyMetrics": ["4.2h Outages / Qtr", "12-Week Deploy Cadence"], "hasHighlight": false, "isActivePhase": false },
    { "id": "cp2", "phaseNumber": 2, "title": "The Sovereign Solution", "subtitle": "Distributed Microservice Mesh", "narrative": "Deployed decoupled stateless processing pods backed by local partitioned Split-DB SQLite storage.", "keyMetrics": ["Zero Network Bottlenecks", "3-Minute CI Deploy"], "hasHighlight": false, "isActivePhase": false },
    { "id": "cp3", "phaseNumber": 3, "title": "The Quantified Yield", "subtitle": "Transformative ROI & Velocity", "narrative": "Zero downtime sustained across Black Friday traffic with $18.2M annualized savings.", "keyMetrics": ["$18.2M Net Savings", "99.999% SLA Met"], "hasHighlight": true, "isActivePhase": true }
  ]
}
```

---

### Archetype 13: `dual-column-pros-cons` (DualColumnProsConsSlide)

#### Semantic Role & Business Context
Trade-off decision briefing for executive steering committees (e.g., In-House Build vs Commercial Buy, Monolithic vs Event-Driven). Contrasts strategic advantages directly against operational tradeoffs.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  TRADE-OFF ANALYSIS & DECISION MATRIX                        |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Architectural Modernization: Build vs Buy        |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Evaluating Sovereign Intellectual Property vs SaaS Vendor|
|                                                                                                   |
|  +-----------------------------------+       +-----------------------------------+                |
|  | ADVANTAGES / PROS (SOVEREIGN)     |       | TRADE-OFFS / CONSIDERATIONS       |                |
|  | Top: 290px, Left: 140px, W: 800px |       | Top: 290px, Left: 980px, W: 800px |                |
|  | Height: 640px                     |       | Height: 640px                     |                |
|  |                                   |       |                                   |                |
|  | [✓] Zero Per-Seat SaaS Licensing  |       | [!] Initial 6-Week Engineering Cap|                |
|  | [✓] 100% Offline Air-Gapped Exec  |       | [!] In-House Maintenance Pod Req. |                |
|  | [✓] Unlimited AI Agent Scalability|       | [!] Specialized CI Setup Required |                |
|  | [✓] Complete Customization Control|       |                                   |                |
|  +-----------------------------------+       +-----------------------------------+                |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Pros Column: `x: 140px`, `y: 290px`, `w: 800px`, `h: 640px`.
- Cons Column: `x: 980px`, `y: 290px`, `w: 800px`, `h: 640px`.

#### TypeScript Contract
```typescript
export interface TradeoffItem {
  id: string;
  itemNumber: number;
  title: string;
  description: string;
  weightScore: number; // 1 to 5
  hasStrategicImportance: boolean;
}

export interface DualColumnProsConsSlide extends BaseSlide {
  type: "dual-column-pros-cons";
  prosColumnTitle: string;
  consColumnTitle: string;
  prosItems: TradeoffItem[];
  consItems: TradeoffItem[];
  recommendationTakeaway: string;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-pros-01",
  "type": "dual-column-pros-cons",
  "title": "Architectural Modernization: Build vs Buy",
  "subtitle": "Evaluating Sovereign Intellectual Property vs SaaS Vendor",
  "kicker": "TRADE-OFF ANALYSIS & DECISION MATRIX",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 2,
  "prosColumnTitle": "Sovereign In-House Architecture (Recommended)",
  "consColumnTitle": "Commercial Off-the-Shelf SaaS",
  "recommendationTakeaway": "Sovereign build secures proprietary data sovereignty and yields $3.2M ROI over 24 months.",
  "prosItems": [
    { "id": "p1", "itemNumber": 1, "title": "Zero Recurring SaaS Tax", "description": "Eliminates variable seat-based cost scaling as headcount expands.", "weightScore": 5, "hasStrategicImportance": true },
    { "id": "p2", "itemNumber": 2, "title": "Air-Gapped Offline Execution", "description": "Operates without external cloud vendor dependency.", "weightScore": 5, "hasStrategicImportance": true }
  ],
  "consItems": [
    { "id": "c1", "itemNumber": 1, "title": "Initial 6-Week Dev Capex", "description": "Requires upfront dedication of 2 senior systems engineers.", "weightScore": 3, "hasStrategicImportance": false },
    { "id": "c2", "itemNumber": 2, "title": "In-House Maintenance Duty", "description": "Internal team holds direct accountability for updates.", "weightScore": 2, "hasStrategicImportance": false }
  ]
}
```

---

### Archetype 14: `interactive-code-playground` (InteractiveCodePlaygroundSlide)

#### Semantic Role & Business Context
Technical deep-dive and architecture review slide. Split-pane layout featuring syntax-highlighted source code on the left and a live terminal output console on the right, with step-based line highlights.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  SOURCE CODE EXECUTION                                      |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Declarative Spring Physics Engine Hook          |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Zero-Dependency Harmonic Motion & Live Console Logs     |
|                                                                                                   |
|  +-----------------------------------+       +-----------------------------------+                |
|  | CODE EDITOR (SYNTAX HIGHLIGHTED)  |       | LIVE EXECUTION CONSOLE (TERMINAL) |                |
|  | Top: 290px, Left: 140px, W: 860px |       | Top: 290px, Left: 1040px, W: 740px|                |
|  | Height: 640px                     |       | Height: 640px                     |                |
|  |                                   |       |                                   |                |
|  | 01  export function useSpring() { |       | $ bun run test/physics.test.ts    |                |
|  | 02    const k = 420;              |       | [PASS] Spring stiffness verified  |                |
|  | 03    const zeta = 0.85;          |       | [PASS] Zero oscillation overshoot |                |
|  | 04    return compute(k, zeta);    |       | [PERF] Latency: 0.12ms / 60fps    |                |
|  | 05  }                             |       | Telemetry: 10,000 steps executed  |                |
|  +-----------------------------------+       +-----------------------------------+                |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Code Editor Pane: `x: 140px`, `y: 290px`, `w: 860px`, `h: 640px`.
- Execution Console Pane: `x: 1040px`, `y: 290px`, `w: 740px`, `h: 640px`.

#### TypeScript Contract
```typescript
export interface CodeHighlightStep {
  stepNumber: number;
  highlightedLines: number[];
  annotationText: string;
  consoleOutputLog: string;
}

export interface InteractiveCodePlaygroundSlide extends BaseSlide {
  type: "interactive-code-playground";
  language: string;
  sourceCode: string;
  fileName: string;
  executionSteps: CodeHighlightStep[];
  hasLiveExecution: boolean;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-code-01",
  "type": "interactive-code-playground",
  "title": "Declarative Spring Physics Engine Hook",
  "subtitle": "Zero-Dependency Harmonic Motion & Live Console Logs",
  "kicker": "SOURCE CODE EXECUTION",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 3,
  "language": "typescript",
  "fileName": "useSpringPhysics.ts",
  "hasLiveExecution": true,
  "sourceCode": "export function useSpringPhysics(activeStep: number) {\n  const stiffness = 420;\n  const damping = 31.17;\n  const mass = 0.8;\n  return { stiffness, damping, mass };\n}",
  "executionSteps": [
    {
      "stepNumber": 1,
      "highlightedLines": [2, 3],
      "annotationText": "Harmonic motion parameters calibrated for responsive UI cards.",
      "consoleOutputLog": "[OK] Physics spring mounted: k=420, c=31.17, m=0.8"
    }
  ]
}
```

---

### Archetype 15: `closing-cta-showcase` (ClosingCtaShowcaseSlide)

#### Semantic Role & Business Context
High-authority finale slide for closing keynote presentations, board approvals, and sales commitments. Features dual action buttons, executive contact badge, and cryptographic QR verification badge.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 110px, Left: 140px]  --  STRATEGIC COMMITMENT & NEXT ACTIONS                        |
|  [DISPLAY TITLE (H1): Top: 160px, Left: 140px]  --  Accelerate Your Enterprise Transformation      |
|  [SUBTITLE: Top: 250px, Left: 140px]  --  Sovereign Architecture, Zero Compromise & Guaranteed SLA|
|                                                                                                   |
|  +--------------------------------------------------+     +-----------------------------------+   |
|  | EXECUTIVE CONTACT PLATE (W: 880px, H: 480px)     |     | DUAL ACTION BUTTONS & QR CODE     |   |
|  | Top: 340px, Left: 140px                          |     | Top: 340px, Left: 1060px, W: 720px|   |
|  |                                                  |     |                                   |   |
|  | Lead: Alim Ul Karim                              |     | [ PRIMARY ACTION: SCHEDULE AUDIT ]|   |
|  | Title: Chief Software Engineer                   |     | [ SECONDARY: DOWNLOAD WHITE PAPER]|   |
|  | Org: Enterprise Systems Steering Committee       |     |                                   |   |
|  | SLA Commit: 99.999% Availability                 |     | +-------------------------------+ |   |
|  | Direct: eng-steering@organization.internal       |     | | [QR CODE] VERIFY SPECIFICATION| |   |
|  |                                                  |     | +-------------------------------+ |   |
|  +--------------------------------------------------+     +-----------------------------------+   |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Contact Plate: `x: 140px`, `y: 340px`, `w: 880px`, `h: 480px`.
- CTA Action Container: `x: 1060px`, `y: 340px`, `w: 720px`, `h: 480px`.

#### TypeScript Contract
```typescript
export interface ClosingCtaShowcaseSlide extends BaseSlide {
  type: "closing-cta-showcase";
  executiveLeadName: string; // Strictly "Alim Ul Karim"
  executiveLeadTitle: string; // Strictly "Chief Software Engineer"
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  qrVerificationUrl: string;
  hasQrCode: boolean;
  hasDirectEmail: boolean;
  contactEmail: string;
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-cta-01",
  "type": "closing-cta-showcase",
  "title": "Accelerate Your Enterprise Transformation",
  "subtitle": "Sovereign Architecture, Zero Compromise & Guaranteed SLA",
  "kicker": "STRATEGIC COMMITMENT & NEXT ACTIONS",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 2,
  "executiveLeadName": "Alim Ul Karim",
  "executiveLeadTitle": "Chief Software Engineer",
  "primaryButtonLabel": "Schedule Executive Architecture Review",
  "secondaryButtonLabel": "Download Technical Specification Suite",
  "hasQrCode": true,
  "qrVerificationUrl": "https://presentation.internal/verify/spec-28",
  "hasDirectEmail": true,
  "contactEmail": "eng-steering@presentation.internal"
}
```

---

### Archetype 16: `steps-chain` (StepsChainSlide)

#### Semantic Role & Business Context
Horizontal 4-node connected process chain with numbered badges, duration pills, deliverable checklists, and an animated gradient progress horizon bar.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  STRUCTURED DELIVERY PROCESS                                 |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  End-to-End Enterprise Implementation Steps      |
|  [SUBTITLE: Top: 200px, Left: 140px]  --  Sequential Verification Milestones & Workstream Gates    |
|                                                                                                   |
|  (1) DISCOVERY  =======> (2) ARCHITECTURE ======> (3) IMPLEMENT ========> (4) VERIFICATION       |
|  +---------------+     +---------------+     +---------------+     +---------------+              |
|  | STEP 01       |     | STEP 02       |     | STEP 03       |     | STEP 04       |              |
|  | 2 Weeks       |     | 3 Weeks       |     | 6 Weeks       |     | Continuous    |              |
|  | Top: 360px    |     | Top: 360px    |     | Top: 360px    |     | Top: 360px    |              |
|  | Left: 140px   |     | Left: 560px   |     | Left: 980px   |     | Left: 1400px  |              |
|  | W: 380px      |     | W: 380px      |     | W: 380px      |     | W: 380px      |              |
|  | H: 540px      |     | H: 540px      |     | H: 540px      |     | H: 540px      |              |
|  |               |     |               |     |               |     |               |              |
|  | • Scope Audit |     | • Schema DDL  |     | • Microservice|     | • 100% Tests  |              |
|  | • Constraints |     | • API Gateway |     | • Split-DB WAL|     | • Pen Testing |              |
|  +---------------+     +---------------+     +---------------+     +---------------+              |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Horizon Progress Bar: `x: 140px`, `y: 330px`, `w: 1640px`, `h: 4px`.
- 4 Step Cards: `y: 360px`, `w: 380px`, `h: 540px` (`x: 140px, 560px, 980px, 1400px`).

#### TypeScript Contract
```typescript
export interface ProcessStepChainItem {
  id: string;
  stepNumber: number;
  title: string;
  durationLabel: string;
  deliverables: string[];
  hasCompleted: boolean;
  isActiveStep: boolean;
}

export interface StepsChainSlide extends BaseSlide {
  type: "steps-chain";
  totalEstimatedWeeks: number;
  steps: ProcessStepChainItem[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-chain-01",
  "type": "steps-chain",
  "title": "End-to-End Enterprise Implementation Steps",
  "subtitle": "Sequential Verification Milestones & Workstream Gates",
  "kicker": "STRUCTURED DELIVERY PROCESS",
  "themeId": "true-dark",
  "activeStep": 2,
  "maxSteps": 4,
  "totalEstimatedWeeks": 12,
  "steps": [
    { "id": "st-1", "stepNumber": 1, "title": "Discovery & Audit", "durationLabel": "2 Weeks", "deliverables": ["Codebase Discovery", "Architecture Spec Audit"], "hasCompleted": true, "isActiveStep": false },
    { "id": "st-2", "stepNumber": 2, "title": "System Architecture", "durationLabel": "3 Weeks", "deliverables": ["Split-DB SQLite Schema", "Envoy Ingress Config"], "hasCompleted": false, "isActiveStep": true },
    { "id": "st-3", "stepNumber": 3, "title": "Implementation & Refactor", "durationLabel": "6 Weeks", "deliverables": ["<=100 Lines Decomposition", "Positive Boolean Normalization"], "hasCompleted": false, "isActiveStep": false },
    { "id": "st-4", "stepNumber": 4, "title": "Verification & Release", "durationLabel": "1 Week", "deliverables": ["Automated Quality Gates", "Tag & Release Sync"], "hasCompleted": false, "isActiveStep": false }
  ]
}
```

---

### Archetype 17: `timeline-rail` (TimelineRailSlide)

#### Semantic Role & Business Context
Continuous horizontal milestone progression rail adapted from `flat-slide-show`. Features a sweeping progress bar, active pulsing halo node (`k=320, c=30`), and monumental center-stage headline typography ($72\text{px}$).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
|  [KICKER: Top: 90px, Left: 140px]  --  CONTINUOUS PROGRESSION RAIL                                 |
|  [SLIDE TITLE (H1): Top: 130px, Left: 140px]  --  Strategic Milestone Horizon                     |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | ACTIVE MILESTONE CENTER STAGE DISPLAY (Top: 240px, Left: 240px, W: 1440px, Height: 440px)   |  |
|  |                                                                                             |  |
|  |                     MILESTONE 03: DISTRIBUTED REPLICATION ENGINE                            |  |
|  |              "Achieving 0-loss state synchronization with sub-millisecond p99"               |  |
|  |                                                                                             |  |
|  | [Badge: TARGET Q3 2026]     [Status: IN PROGRESS]     [Lead: Chief Software Engineer]        |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  === HORIZONTAL PROGRESS RAIL: railLeft: 240px, railRight: 1680px, railY: 780px ================= |
|                                                                                                   |
|     (Node 1) ------------ (Node 2) ------------ (( Node 3 )) ------------ (Node 4)                |
|     Jan 2026               Apr 2026              Jul 2026                  Oct 2026               |
|     Completed              Completed             [ACTIVE HALO]             Planned                |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget & Field Constraints
- Center Stage Card: `x: 240px`, `y: 240px`, `w: 1440px`, `h: 440px`.
- Progress Rail: `x: 240px`, `y: 780px`, `w: 1440px`, `h: 4px`.
- Node Diameter: 24px (inactive), 40px (active with outer pulsing halo 64px).

#### TypeScript Contract
```typescript
export interface TimelineMilestoneNode {
  id: string;
  milestoneNumber: number;
  dateLabel: string;
  title: string;
  summary: string;
  leadTitle: string;
  hasCompleted: boolean;
  isActiveMilestone: boolean;
}

export interface TimelineRailSlide extends BaseSlide {
  type: "timeline-rail";
  railLabel: string;
  milestones: TimelineMilestoneNode[];
}
```

#### JSON Payload Fixture
```json
{
  "id": "slide-rail-01",
  "type": "timeline-rail",
  "title": "Strategic Milestone Horizon",
  "subtitle": "Continuous Platform Modernization & Deployment Sequence",
  "kicker": "CONTINUOUS PROGRESSION RAIL",
  "themeId": "true-dark",
  "activeStep": 3,
  "maxSteps": 4,
  "railLabel": "FY2026 Execution Track",
  "milestones": [
    { "id": "m1", "milestoneNumber": 1, "dateLabel": "Jan 2026", "title": "Pure Live DOM Engine", "summary": "Eliminated all rasterized canvas typography.", "leadTitle": "Chief Software Engineer", "hasCompleted": true, "isActiveMilestone": false },
    { "id": "m2", "milestoneNumber": 2, "dateLabel": "Apr 2026", "title": "Spring Physics Motion", "summary": "Integrated harmonic spring transitions across all cards.", "leadTitle": "Chief Software Engineer", "hasCompleted": true, "isActiveMilestone": false },
    { "id": "m3", "milestoneNumber": 3, "dateLabel": "Jul 2026", "title": "Split-DB WAL Persistence", "summary": "Partitioned SQLite database architecture with 0 lock contention.", "leadTitle": "Chief Software Engineer", "hasCompleted": false, "isActiveMilestone": true },
    { "id": "m4", "milestoneNumber": 4, "dateLabel": "Oct 2026", "title": "Autonomous Governance", "summary": "Automated verification gates across polyglot repositories.", "leadTitle": "Chief Software Engineer", "hasCompleted": false, "isActiveMilestone": false }
  ]
}
```

---

## 3. Strict Positive Boolean Compliance Verification

In compliance with repository coding standard **R1 (Positive Booleans Only)**, every interface in this specification strictly validates positive naming polarity:

| Field Name | Interface | Verified Positive Polarity Meaning |
|:---|:---|:---|
| `hasHighlight` | `StrategicPillar`, `CaseStudyPhase` | Item renders with vibrant border/background glow |
| `isActivePillar` | `StrategicPillar` | Item is the currently focused step in sequence |
| `isVerified` | `StrategicPillar`, `OrgMemberNode` | Item passes verification/audit checks |
| `hasStatusBadge` | `ExecutiveSummarySlide` | Renders the top-right board approval badge |
| `hasActiveTraffic`| `ArchitectureNode` | Animated SVG packet is actively traversing this node |
| `hasSlaGuarantee`| `ArchitectureTier` | Node operates under 99.999% availability commitment |
| `hasPositiveImpact`| `FinancialMetricItem` | Metric contributes positively to cost reduction / yield |
| `hasCfoVerification`| `RoiMetricCalculatorSlide`| Model has formal finance steering committee sign-off |
| `hasFrictionAlert`| `JourneyStage` | Stage contains highlighted operational friction bottleneck |
| `isSovereignSuperior`| `MatrixFeatureRow` | Sovereign platform surpasses alternative vendors |
| `hasVerifiedProof`| `MatrixFeatureRow`, `TechPill` | Claim is substantiated by automated benchmark telemetry |
| `isStandardTool` | `TechPill` | Tool is part of core ratified technology standards |
| `hasProductionProof`| `TechPill` | Technology has active production deployment history |
| `isLeadRole` | `OrgMemberNode` | Member holds architectural or management accountability |
| `hasActiveCertification`| `ComplianceCertification`| Certification is active and in good standing |
| `hasZeroDeficiencies`| `ComplianceCertification`| Most recent audit reported zero findings or caveats |
| `isPassingAudit` | `SecurityControlItem` | Automated telemetry continuously confirms compliance |
| `hasCompleted` | `RoadmapMilestone`, `ProcessStepChainItem`, `TimelineMilestoneNode` | Milestone has met all exit criteria |
| `isActiveTarget` | `RoadmapMilestone` | Milestone is the active objective of the current sprint |
| `isExpanded` | `FaqItem` | Accordion drawer is open and displaying answer body |
| `hasImportantBadge`| `FaqItem` | Question is highlighted with high-importance badge |
| `hasSparkline` | `MetricCard` | Card displays SVG micro-sparkline trend |
| `hasPositiveGrowth`| `MetricCard` | Trailing metric displays positive trajectory |
| `isActiveCard` | `MetricCard` | Card is currently focused in step progression |
| `isActivePhase` | `CaseStudyPhase` | Phase is the active view in case study narrative |
| `hasStrategicImportance`| `TradeoffItem` | Item holds decisive weight in executive committee vote |
| `hasLiveExecution`| `InteractiveCodePlaygroundSlide`| Terminal pane connects to live test runner output |
| `hasQrCode` | `ClosingCtaShowcaseSlide` | Slide renders high-resolution QR verification code |
| `hasDirectEmail` | `ClosingCtaShowcaseSlide` | Slide provides direct contact mailto link |
| `isActiveStep` | `ProcessStepChainItem` | Step is currently active in progression chain |
| `isActiveMilestone`| `TimelineMilestoneNode` | Milestone is currently centered on timeline rail |
