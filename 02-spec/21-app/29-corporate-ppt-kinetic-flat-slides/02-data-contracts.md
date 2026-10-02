# 02-Data Contracts: The 15 Enterprise Slide Archetypes & Archetype 17 Timeline Rail

> **Specification Identifier:** `02-spec/21-app/29-corporate-ppt-kinetic-flat-slides/02-data-contracts`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.3.0`  
> **Author:** Spec Author 01  
> **Created:** 2026-10-02  
> **Domain:** TypeScript Schemas, Virtual Coordinate Budgets, Step Count Formulas & Kinetic Mappings  

---

## 1. Architectural Foundations & Foundational BaseSlide Contract

Every slide archetype in the White Presentation Engine extends the foundational `BaseSlide` contract. All slide components are designed to render within a sovereign $1920 \times 1080$ virtual coordinate space, scale dynamically to any viewport without text reflow, and consume `activeStep` (0-indexed) to drive a 3-phase kinetic lifecycle:

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

### Architectural Non-Negotiables:
1. **Canonical 16:9 Canvas:** Bounding coordinates and inner grids are calculated strictly within $W = 1920\text{px}$, $H = 1080\text{px}$.
2. **Pure Live DOM Typography:** Headlines, kickers, pills, metric numbers, and code blocks render as accessible HTML text nodes. Zero rasterized typography.
3. **Positive Booleans Exclusively:** Schema properties and internal flags must use positive prefixes (`is*`, `has*`, `can*`, `should*`). Prohibit `disabled`, `hidden`, and explicit comparisons (`== true`).
4. **Step Progression Consistency:** Every archetype exposes an authentic `stepCount` formula registered in `src/stores/deckStore.ts` and consumes `activeStep` to apply:
   - `completed`: Opacity 0.75, scale 1.00, checkmark badge.
   - `active`: Opacity 1.00, scale 1.02, elevated Plane 2 depth, illuminated halo.
   - `future`: Opacity 0.40, scale 0.98, **`filter: blur(1.25px)`**.

---

## 2. Master Catalog of Slide Archetypes

```
+---------------------------------------------------------------------------------------------------+
|                        MASTER CATALOG: 15 ENTERPRISE ARCHETYPES + ARCHETYPE 17                    |
+---------------------------------------------------------------------------------------------------+
|  [01] executive-summary           --> 3 core strategic pillars + executive takeaway hero banner   |
|  [02] system-architecture-flow    --> Multi-tier distributed topology + live animated packet rails|
|  [03] roi-metric-calculator       --> Financial model, baseline vs yield + dynamic payback gauge  |
|  [04] customer-journey-map        --> 5-stage lifecycle rail + sentiment curve & friction points   |
|  [05] matrix-comparison-grid      --> Multi-axis feature matrix with sovereign highlighted column |
|  [06] tech-stack-grid             --> Layered architecture tiers + technology status chips         |
|  [07] team-hierarchy-org          --> Multi-tier org chart with SVG tree connectors               |
|  [08] security-compliance-matrix  --> Regulatory frameworks (SOC2, ISO, HIPAA) + audit evidence   |
|  [09] product-roadmap-timeline    --> Multi-quarter parallel swimlanes + milestone release gates  |
|  [10] interactive-faq-flow        --> Categorized Q&A hub with step-based accordion reveals        |
|  [11] key-metric-scorecard        --> 4-quadrant executive KPI cards + trend pills & sparklines   |
|  [12] case-study-impact           --> Enterprise customer journey: Challenge, Architecture, ROI    |
|  [13] dual-column-pros-cons       --> Bilateral trade-off analysis with weighted impact indicators |
|  [14] interactive-code-playground --> Split-pane code editor, step execution + live console drawer|
|  [15] closing-cta-showcase        --> High-authority finale, dual action buttons, QR verification  |
|  [17] timeline-rail               --> Continuous horizontal SVG rail + milestone beacon nodes      |
+---------------------------------------------------------------------------------------------------+
```

---

### Archetype 01: `executive-summary` (ExecutiveSummarySlide)

#### Semantic Role & Use Case
Strategic corporate transformation briefing for board of directors, steering committees, and investor updates. Synthesizes core strategy into 3 operational pillars anchored by a full-width takeaway quote.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64]                                                    |
| [Slide Subtitle: Y=188, X=100, W=1400, H=32]                                                      |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | TAKEAWAY HERO BANNER (Y=240, X=100, W=1720, H=110, Plane 1)                                   | |
| | "Transitioning to event-driven fabric unlocks 4.8x velocity and 38% infrastructure savings"   | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-------------------------+     +-------------------------+     +-------------------------+       |
| | PILLAR 01: VELOCITY     |     | PILLAR 02: RESILIENCE   |     | PILLAR 03: EFFICIENCY   |       |
| | Y=380, X=100, W=550     |     | Y=380, X=685, W=550     |     | Y=380, X=1270, W=550    |       |
| | Height: 580px           |     | Height: 580px           |     | Height: 580px           |       |
| |                         |     |                         |     |                         |       |
| | [Icon: Zap]             |     | [Icon: ShieldCheck]     |     | [Icon: TrendingUp]      |       |
| | Multi-Region Event Mesh |     | Zero Trust Security     |     | Autonomous Operations   |       |
| | Target: 99.999% SLA     |     | SOC2 Type II Certified  |     | 38% OPEX Reduction      |       |
| | Status: [Completed]     |     | Status: [Active Halo]   |     | Status: [1.25px Blur]   |       |
| +-------------------------+     +-------------------------+     +-------------------------+       |
|                                                                                                   |
| [Footer & Page Index: Y=990, X=100, W=1720, H=30]                                                 |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraint |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker (Ubuntu 700, 14px), H1 (Ubuntu 800, 52px), Subtitle (Poppins 400, 20px) |
| Takeaway Banner | 100 | 240 | 1720 | 110 | Plane 1 | Frosted glass card, 24px padding, border: `--pres-card-border`, quote icon |
| Pillar Card 01 | 100 | 380 | 550 | 580 | Plane 1/2 | Interactive card, step 0, border-radius: 20px, 32px padding |
| Pillar Card 02 | 685 | 380 | 550 | 580 | Plane 1/2 | Interactive card, step 1, border-radius: 20px, 32px padding |
| Pillar Card 03 | 1270 | 380 | 550 | 580 | Plane 1/2 | Interactive card, step 2, border-radius: 20px, 32px padding |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Metadata, date, Alim Ul Karim, Chief Software Engineer |

#### TypeScript Contract
```typescript
export interface ExecutiveHighlightItem {
  id: string;
  label: string;
  value: string;
  detail: string;
  isPositiveTrend?: boolean;
}

export interface ExecutivePillarItem {
  id: string;
  title: string;
  category?: string;
  description: string;
  icon?: string;
  targetKpi?: string;
  kpiLabel?: string;
  hasAccent?: boolean;
  isVerified?: boolean;
}

export interface ExecutiveSummarySlideData extends BaseSlide {
  type: 'executive-summary';
  overview: string;
  highlights: ExecutiveHighlightItem[];
  strategicPillars: ExecutivePillarItem[];
  takeawayQuote?: string;
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.strategicPillars ? Math.max(1, slide.strategicPillars.length) : 1` (Standard: 3 steps).
- **Consumption:**
  - `idx < activeStep`: Pillar completed. Opacity `0.75`, verified checkmark icon displayed, desaturated border.
  - `idx === activeStep`: Pillar active. Opacity `1.00`, scale `1.02`, elevated to Plane 2, glowing halo ring with theme accent color, active pulse badge.
  - `idx > activeStep`: Pillar future. Opacity `0.40`, scale `0.98`, **`filter: blur(1.25px)`**, ghosted border.

---

### Archetype 02: `system-architecture-flow` (SystemArchitectureFlowSlide)

#### Semantic Role & Use Case
Detailed enterprise infrastructure layout demonstrating distributed service topology, microservice tiers, API gateways, database replication, and real-time event packets.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: DISTRIBUTED TOPOLOGY]                              [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Cloud-Native Microservices & Multi-Region Event Mesh]                                        |
| [Subtitle: Layered zero-trust architecture with sub-millisecond edge synchronization]             |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | TIER 01: EDGE CLIENTS & INGRESS (Y=240, X=100, W=1720, H=140, Step 0)                         | |
| |  [Web Portal]  --  [Mobile SDK]  --  [IoT Gateways]  --  [Cloudflare Anycast CDN]             | |
| +-----------------------------------------------------------------------------------------------+ |
|       ||| Animated SVG Packet Flow (Step 0 -> Step 1)                                            |
| +-----------------------------------------------------------------------------------------------+ |
| | TIER 02: API GATEWAY & ZERO-TRUST AUTH (Y=420, X=100, W=1720, H=140, Step 1)                  | |
| |  [Envoy Proxy Mesh]  --  [OAuth2 / Casbin Engine]  --  [Rate Limiter]  --  [WAF Inspector]   | |
| +-----------------------------------------------------------------------------------------------+ |
|       ||| Animated SVG Packet Flow (Step 1 -> Step 2)                                            |
| +-----------------------------------------------------------------------------------------------+ |
| | TIER 03: MICROSERVICES & EVENT FABRIC (Y=600, X=100, W=1720, H=140, Step 2)                  | |
| |  [Order Service]  --  [Payment Engine]  --  [Apache Kafka Cluster]  --  [Analytics Worker]   | |
| +-----------------------------------------------------------------------------------------------+ |
|       ||| Animated SVG Packet Flow (Step 2 -> Step 3)                                            |
| +-----------------------------------------------------------------------------------------------+ |
| | TIER 04: STORAGE & PERSISTENCE (Y=780, X=100, W=1720, H=140, Step 3)                          | |
| |  [Split SQLite Shards]  --  [PostgreSQL Primary]  --  [Redis Cluster]  --  [S3 Object Vault]  | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| [Footer & Engine Status: Latency < 12ms | Throughput 140K req/s | SOC2 Encrypted]                 |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Layer 01: Client & Ingress | 100 | 230 | 1720 | 150 | Plane 1/2 | Tier container, 4 node chips (`w: 360px`, `h: 80px`), step 0 |
| SVG Connector Rail 1-2 | 100 | 380 | 1720 | 30 | Plane 3 | Animated traveling pulse line (`stroke-dasharray`) |
| Layer 02: API Gateway | 100 | 410 | 1720 | 150 | Plane 1/2 | Tier container, 4 node chips, step 1 |
| SVG Connector Rail 2-3 | 100 | 560 | 1720 | 30 | Plane 3 | Animated traveling pulse line |
| Layer 03: Microservices | 100 | 590 | 1720 | 150 | Plane 1/2 | Tier container, 4 node chips, step 2 |
| SVG Connector Rail 3-4 | 100 | 740 | 1720 | 30 | Plane 3 | Animated traveling pulse line |
| Layer 04: Storage & Data | 100 | 770 | 1720 | 150 | Plane 1/2 | Tier container, 4 node chips, step 3 |
| Telemetry Footer | 100 | 950 | 1720 | 40 | Plane 1 | Status metrics, encryption badges |

#### TypeScript Contract
```typescript
export interface ArchitectureNode {
  id: string;
  name: string;
  type: string;
  icon?: string;
  isCluster?: boolean;
  hasHighAvailability?: boolean;
  statusText?: string;
}

export interface SystemArchitectureFlowLayer {
  id: string;
  layerName: string;
  description?: string;
  isHighlighted?: boolean;
  hasActiveTraffic?: boolean;
  nodes: ArchitectureNode[];
}

export interface ArchitectureConnection {
  fromId: string;
  toId: string;
  label?: string;
  hasBiDirectional?: boolean;
  isEncrypted?: boolean;
}

export interface SystemArchitectureSlideData extends BaseSlide {
  type: 'system-architecture-flow';
  flowDirection?: 'horizontal' | 'vertical';
  layers: SystemArchitectureFlowLayer[];
  connections?: ArchitectureConnection[];
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.layers ? Math.max(1, slide.layers.length) : 1` (Typically 4 steps).
- **Consumption:**
  - `idx < activeStep`: Layer completed. Displays green pulse indicator, opacity `0.75`, stable border.
  - `idx === activeStep`: Layer active. Opacity `1.00`, scale `1.01`, elevated with accent border, traveling SVG packet beams illuminate downstream connectors.
  - `idx > activeStep`: Layer future. Opacity `0.40`, **`filter: blur(1.25px)`**, ghosted nodes.

---

### Archetype 03: `roi-metric-calculator` (RoiMetricCalculatorSlide)

#### Semantic Role & Use Case
Financial justification model comparing initial capital expenditure with operational yield, payback timelines, and cumulative 3-year return on investment.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: FINANCIAL JUSTIFICATION]                           [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Capital Allocation & Enterprise Payback Model]                                              |
| [Subtitle: Quantitative savings and payback milestone forecasting based on FY26 run rates]        |
|                                                                                                   |
| +------------------------------------+     +----------------------------------------------------+ |
| | CAPITAL MODEL PANEL (W=650, H=680) |     | CALCULATED METRICS & PAYBACK GAUGE (W=1030, H=680) | |
| | Y=240, X=100                       |     | Y=240, X=790                                       | |
| |                                    |     |                                                    | |
| | [Initial Investment]: $450,000     |     | +------------------------------------------------+ | |
| | [Annual Operational Save]: $620,000|     | | DYNAMIC PAYBACK GAUGE (Radial Arc: 240 deg)    | | |
| | [Payback Period]: 8.7 Months       |     | | Angle: Computed from active step (0% -> 100%)  | | |
| | [3-Year Net Benefit]: $1,410,000   |     | | Milestone: Break-even achieved in Month 9      | | |
| |                                    |     | +------------------------------------------------+ | |
| | ASSUMPTIONS LIST:                  |     |                                                    | |
| |  [x] Cloud license consolidation   |     | METRIC SCORECARDS:                                 | |
| |  [x] Automated pipeline operations |     | +--------------------+    +--------------------+   | |
| |  [ ] Legacy maintenance retirement |     | | 312% 3-YEAR ROI    |    | $1.41M NET YIELD   |   | |
| |                                    |     | | Step 0 Active Halo |    | Step 1 Completed   |   | |
| | Status: Audited by Finance         |     | +--------------------+    +--------------------+   | |
| +------------------------------------+     +----------------------------------------------------+ |
|                                                                                                   |
| [Footer: Model based on 5-region enterprise workload consolidation at 99.999% SLA]                |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Capital Model Panel | 100 | 240 | 650 | 680 | Plane 1 | Frosted glass card, financial inputs, assumption items |
| Calculated Metrics & Gauge | 790 | 240 | 1030 | 680 | Plane 1/2 | Interactive right wing, SVG radial payback gauge + metric cards |
| Radial Payback Arc | 850 | 280 | 910 | 260 | Plane 2 | SVG progress arc dynamically filled by `activeStep` |
| Metric Card Grid | 830 | 580 | 950 | 300 | Plane 1/2 | 4 metric tiles (`w: 455px`, `h: 135px`) mapped to steps |

#### TypeScript Contract
```typescript
export interface RoiAssumptionItem {
  id: string;
  factor: string;
  impact: string;
  isEstimated?: boolean;
  isVerified?: boolean;
}

export interface RoiCalculatedMetric {
  id: string;
  label: string;
  value: string;
  subtext?: string;
  isPrimaryRoi?: boolean;
  hasPositiveVariance?: boolean;
}

export interface RoiMetricCalculatorSlideData extends BaseSlide {
  type: 'roi-metric-calculator';
  investmentAmount: number;
  annualReturn: number;
  timeframeMonths: number;
  currencySymbol?: string;
  assumptions: RoiAssumptionItem[];
  calculatedMetrics: RoiCalculatedMetric[];
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.calculatedMetrics ? Math.max(1, slide.calculatedMetrics.length) : 1` (Typically 3 to 4 steps).
- **Consumption:**
  - `idx < activeStep`: Metric completed. Checkmark badge, opacity `0.75`.
  - `idx === activeStep`: Metric active. Gauge rotates to that target percentage, card gains theme accent halo, value digit pulses.
  - `idx > activeStep`: Metric future. Opacity `0.40`, **`filter: blur(1.25px)`**.

---

### Archetype 04: `customer-journey-map` (CustomerJourneyMapSlide)

#### Semantic Role & Use Case
Detailed 5-stage customer experience map plotting touchpoints, sentiment curves, friction alerts, and digital interventions across the buyer lifecycle.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: CUSTOMER EXPERIENCE MAP]                           [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: End-to-End Enterprise Customer Onboarding Journey]                                          |
| [Subtitle: Tracking user friction, sentiment velocity, and milestone unlocks from discovery to renewal] |
|                                                                                                   |
|  =====================(CONTINUOUS SVG SENTIMENT CURVE: Y=260, H=120)============================  |
|      (Delighted) -----\                 /---- (Delighted)               /---- (Ecstatic)          |
|                        \-- (Satisfied) /                 \-- (Neutral) /                          |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | 5 PHASE CARDS (Y=400, H=500, Each W=320, Gap=30)                                              | |
| |                                                                                               | |
| | [STAGE 01]       [STAGE 02]       [STAGE 03]          [STAGE 04]          [STAGE 05]          | |
| | Discovery        Evaluation       Provisioning        Adoption            Expansion           | |
| | Touchpoint: Web  Touchpoint: POC  Touchpoint: Cloud   Touchpoint: API     Touchpoint: C-Suite | |
| | Sentiment: High  Sentiment: Calm  Sentiment: FRICTION Sentiment: Rising   Sentiment: High     | |
| | [Completed]      [Completed]      [ACTIVE HALO]       [1.25px Blur]       [1.25px Blur]       | |
| |                  Friction Alert:  Auto-migration bot                      Target: 140% NRR    | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| [Footer: Persona: Enterprise Head of Platform | Friction Alert Resolution Time: < 2 Hours]        |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| SVG Sentiment Curve | 100 | 230 | 1720 | 130 | Plane 2 | Continuous cubic bezier curve with dynamic sentiment nodes |
| Phase 01: Discovery | 100 | 380 | 320 | 530 | Plane 1/2 | Frosted card, step 0, touchpoint pills, sentiment badge |
| Phase 02: Evaluation | 450 | 380 | 320 | 530 | Plane 1/2 | Frosted card, step 1 |
| Phase 03: Provisioning | 800 | 380 | 320 | 530 | Plane 1/2 | Frosted card, step 2, active halo, friction alert callout |
| Phase 04: Adoption | 1150 | 380 | 320 | 530 | Plane 1/2 | Frosted card, step 3 |
| Phase 05: Expansion | 1500 | 380 | 320 | 530 | Plane 1/2 | Frosted card, step 4 |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Persona attribution, telemetry stats |

#### TypeScript Contract
```typescript
export interface CustomerJourneyPhase {
  id: string;
  phaseTitle: string;
  touchpoint: string;
  emotion: 'delighted' | 'satisfied' | 'neutral' | 'frustrated';
  painPoint?: string;
  opportunity?: string;
  isActivePhase?: boolean;
  hasFrictionAlert?: boolean;
  deliverables?: string[];
}

export interface CustomerJourneySlideData extends BaseSlide {
  type: 'customer-journey-map';
  personaName?: string;
  phases: CustomerJourneyPhase[];
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.phases ? Math.max(1, slide.phases.length) : 1` (Typically 5 steps).
- **Consumption:**
  - `idx < activeStep`: Phase completed. Opacity `0.75`, sentiment point filled with theme accent, checkmark badge.
  - `idx === activeStep`: Phase active. Opacity `1.00`, scale `1.02`, pulsing beacon dot on sentiment curve, expanded pain-point/opportunity details.
  - `idx > activeStep`: Phase future. Opacity `0.40`, **`filter: blur(1.25px)`**.

---

### Archetype 05: `matrix-comparison-grid` (MatrixComparisonGridSlide)

#### Semantic Role & Use Case
Competitive vendor or architectural evaluation matrix featuring bilateral comparison criteria and a dedicated sovereign highlighted column with brand accent glow.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: ARCHITECTURAL BENCHMARK]                           [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Enterprise Platform Capability & Differentiator Matrix]                                      |
| [Subtitle: Head-to-head comparison across security, latency, deployment speed, and sovereignty]  |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | TABLE HEADER (Y=240, X=100, W=1720, H=70):                                                    | |
| | [Feature / Capability]  |  [Competitor A]  |  [Competitor B]  |  [OUR SOVEREIGN FABRIC (*)]   | |
| +-----------------------------------------------------------------------------------------------+ |
| | FEATURE ROWS (Y=320, H=590, 5 Rows, Each H=105):                                              | |
| |                                                                                               | |
| | Row 1: Sub-Millisecond Edge Sync      |  Partial       |  No            |  YES (0.4ms) [Past] | |
| | Row 2: Zero-Trust Casbin RBAC         |  Manual ACL    |  Role-Only     |  YES (Native) [Past]| |
| | Row 3: Sovereign Multi-Tenant DB      |  Shared DB     |  SaaS Silo     |  YES (Split) [ACTIVE| |
| | Row 4: 99.999% SLA Financial Backing  |  Best Effort   |  99.9% Cloud   |  YES (5-Nines) [Blur| |
| | Row 5: Air-Gapped On-Premises Deploy  |  Cloud Only    |  Hybrid        |  YES (Bare Metal)[B]| |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| [Footer: Sovereign Column highlighted with 10% accent glow | Audited by Independent Benchmark]   |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Table Header Row | 100 | 230 | 1720 | 70 | Plane 1 | 4 columns: Capability (520px), Comp A (380px), Comp B (380px), Sovereign (440px) |
| Feature Rows Container | 100 | 310 | 1720 | 580 | Plane 1/2 | 5 rows (`h: 105px`), border-bottom: `--pres-card-border` |
| Sovereign Highlight Col | 1380 | 230 | 440 | 660 | Plane 2 | Sovereign column, border: 2px solid `--pres-accent`, background: `--pres-accent` at 8% |
| Footer Zone | 100 | 930 | 1720 | 40 | Plane 1 | Independent audit badge, methodology link |

#### TypeScript Contract
```typescript
export interface MatrixComparisonColumn {
  id: string;
  title: string;
  isLeader?: boolean;
  hasAccentHighlight?: boolean;
  badge?: string;
}

export interface MatrixComparisonFeature {
  id: string;
  category?: string;
  featureName: string;
  values: Record<string, string | boolean>;
  isKeyDifferentiator?: boolean;
  hasVerifiedProof?: boolean;
}

export interface MatrixComparisonSlideData extends BaseSlide {
  type: 'matrix-comparison-grid';
  columns: MatrixComparisonColumn[];
  features: MatrixComparisonFeature[];
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.features ? Math.max(1, slide.features.length) : 1` (Typically 5 steps).
- **Consumption:**
  - `idx < activeStep`: Row completed. Opacity `0.75`, verified green checks.
  - `idx === activeStep`: Row active. Opacity `1.00`, elevated background tint, row border illuminates, sovereign cell pulses.
  - `idx > activeStep`: Row future. Opacity `0.40`, **`filter: blur(1.25px)`**.

---

### Archetype 06: `tech-stack-grid` (TechStackGridSlide)

#### Semantic Role & Use Case
Detailed technology architecture catalog grouping software components into vertical pillars (Frontend/Client, API/Gateway, Core Services, Storage, Cloud Infrastructure).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: TECHNOLOGY INFRASTRUCTURE]                         [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Enterprise Polyglot Technology Stack & Framework Catalog]                                    |
| [Subtitle: Modern production stack standards, verification status, and version lifecycle]         |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | 4 STACK PILLARS (Y=240, H=680, Each W=400, Gap=40)                                            | |
| |                                                                                               | |
| | [PILLAR 01: FRONTEND]  [PILLAR 02: SERVICES]  [PILLAR 03: DATA]      [PILLAR 04: CLOUD/OPS]   | |
| | React 19 + TypeScript  Go 1.24 + Rust Engine  Split SQLite Shards    Kubernetes Fleet         | |
| | Tailwind CSS + Less    gRPC + Protobuf 3      PostgreSQL 17 Primary  Terraform + GitHub Action| |
| | Framer Motion Springs  Apache Kafka Streams   Redis 7 In-Memory      Cloudflare Workers Edge  | |
| | Lucide Icons           Casbin RBAC Engine     S3 Object Storage      Prometheus + Grafana     | |
| |                                                                                               | |
| | [Step 0: Completed]    [Step 1: ACTIVE HALO]  [Step 2: 1.25px Blur]  [Step 3: 1.25px Blur]    | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| [Footer: Zero-vulnerability dependency chain | Strict positive boolean linting enforced]          |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Pillar 01: Frontend | 100 | 240 | 400 | 680 | Plane 1/2 | Frosted card, step 0, category header, tech chip rows |
| Pillar 02: Services | 540 | 240 | 400 | 680 | Plane 1/2 | Frosted card, step 1, active halo |
| Pillar 03: Data Store | 980 | 240 | 400 | 680 | Plane 1/2 | Frosted card, step 2 |
| Pillar 04: Cloud & Ops | 1420 | 240 | 400 | 680 | Plane 1/2 | Frosted card, step 3 |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Audit badge, dependency scanner pass |

#### TypeScript Contract
```typescript
export interface TechStackPillarItem {
  id?: string;
  name: string;
  version?: string;
  purpose: string;
  icon?: string;
  isVerified?: boolean;
  hasProductionProof?: boolean;
}

export interface TechStackPillar {
  id: string;
  category: string;
  description?: string;
  technologies: TechStackPillarItem[];
  isHighlighted?: boolean;
}

export interface TechStackGridSlideData extends BaseSlide {
  type: 'tech-stack-grid';
  stackPillars: TechStackPillar[];
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.stackPillars ? Math.max(1, slide.stackPillars.length) : 1` (Typically 4 steps).
- **Consumption:**
  - `idx < activeStep`: Pillar completed. Opacity `0.75`, verified badges displayed.
  - `idx === activeStep`: Pillar active. Opacity `1.00`, scale `1.02`, glowing accent border, tech chips expand with version chips and purpose notes.
  - `idx > activeStep`: Pillar future. Opacity `0.40`, **`filter: blur(1.25px)`**.

---

### Archetype 07: `team-hierarchy-org` (TeamHierarchyOrgSlide)

#### Semantic Role & Use Case
Executive leadership hierarchy and engineering department structure featuring canonical executive titles and dynamic SVG organizational connector lines.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: ORGANIZATIONAL LEADERSHIP]                         [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Engineering Architecture & Technical Leadership Structure]                                   |
| [Subtitle: Global platform delivery units and reporting lines under Chief Software Engineer]     |
|                                                                                                   |
|                               +-------------------------------+                                   |
|                               | ROOT LEADER NODE (Plane 2)     |                                   |
|                               | Y=230, X=720, W=480, H=130    |                                   |
|                               | Alim Ul Karim                 |                                   |
|                               | Chief Software Engineer       |                                   |
|                               +-------------------------------+                                   |
|                                               |                                                   |
|                +------------------------------+------------------------------+                    |
|                |                                                             |                    |
| +-----------------------------+  +-----------------------------+  +-----------------------------+ |
| | DEPT 01: CORE ARCHITECTURE  |  | DEPT 02: PLATFORM & CLOUD   |  | DEPT 03: PRODUCT & SECURITY | |
| | Y=440, X=100, W=520, H=460  |  | Y=440, X=700, W=520, H=460  |  | Y=440, X=1300, W=520, H=460 | |
| | Lead: VP Architecture       |  | Lead: Principal SRE         |  | Lead: Head of InfoSec       | |
| | Headcount: 24 Engineers     |  | Headcount: 18 Engineers     |  | Headcount: 14 Engineers     | |
| | Member Chips: [x][x][x]     |  | Member Chips: [x][x][x]     |  | Member Chips: [x][x][x]     | |
| | [Step 0: Completed]         |  | [Step 1: ACTIVE HALO]       |  | [Step 2: 1.25px Blur]       | |
| +-----------------------------+  +-----------------------------+  +-----------------------------+ |
|                                                                                                   |
| [Footer: Canonical Title: Alim Ul Karim, Chief Software Engineer | Total Org Headcount: 56]       |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Root Leader Node | 720 | 230 | 480 | 130 | Plane 2 | Alim Ul Karim, Chief Software Engineer card, border: `--pres-accent` |
| Dynamic SVG Tree Wire | 100 | 360 | 1720 | 80 | Plane 1 | Tree branches branching from root node to 3 departments |
| Department 01 | 100 | 440 | 520 | 470 | Plane 1/2 | Core Architecture card, lead title, member chips |
| Department 02 | 700 | 440 | 520 | 470 | Plane 1/2 | Platform & Cloud card |
| Department 03 | 1300 | 440 | 520 | 470 | Plane 1/2 | Product & Security card |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Governance attribution, headcount summary |

#### TypeScript Contract
```typescript
export interface OrgMemberItem {
  name: string;
  role: string;
  isLead?: boolean;
  avatarUrl?: string;
  hasVerifiedClearance?: boolean;
}

export interface OrgDepartment {
  id: string;
  departmentName: string;
  leadName: string;
  leadRole: string;
  headcount: number;
  members?: OrgMemberItem[];
  isExpandedDefault?: boolean;
  hasDirectBoardReporting?: boolean;
}

export interface TeamHierarchySlideData extends BaseSlide {
  type: 'team-hierarchy-org';
  rootRole: string; // Strictly "Chief Software Engineer" for Alim Ul Karim
  rootName: string; // "Alim Ul Karim"
  rootAvatarUrl?: string;
  departments: OrgDepartment[];
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.departments ? Math.max(1, slide.departments.length) : 1` (Typically 3 steps).
- **Consumption:**
  - `idx < activeStep`: Department completed. Opacity `0.75`, stable tree branch.
  - `idx === activeStep`: Department active. Opacity `1.00`, scale `1.02`, SVG branch illuminates with accent glow, member chips reveal roles.
  - `idx > activeStep`: Department future. Opacity `0.40`, **`filter: blur(1.25px)`**.

---

### Archetype 08: `security-compliance-matrix` (SecurityComplianceMatrixSlide)

#### Semantic Role & Use Case
Enterprise regulatory posture, security certifications (SOC2 Type II, ISO 27001, HIPAA, FedRAMP, GDPR), cryptographic standards, and third-party audit verification gates.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: REGULATORY ASSURANCE]                              [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Enterprise Security, Governance & Compliance Posture]                                        |
| [Subtitle: Continuous automated auditing, zero-trust enforcement, and certified standards]        |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | 4 CERTIFICATION CARDS (Y=240, H=220, Each W=400, Gap=40)                                      | |
| |                                                                                               | |
| | [SOC 2 TYPE II]        [ISO 27001:2022]     [HIPAA BAA READY]       [GDPR / EDPB COMPLIANT]   | |
| | Status: Certified      Status: Certified    Status: Validated       Status: Certified         | |
| | Audited: EY LLP        Audited: BSI Global  Audited: Schellman      Audited: Data Privacy Net | |
| | [Step 0: Completed]    [Step 1: ACTIVE]     [Step 2: 1.25px Blur]   [Step 3: 1.25px Blur]     | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | DETAILED AUDIT CONTROLS BREAKDOWN (Y=490, X=100, W=1720, H=430, Plane 1/2)                     | |
| | Control 01: AES-256-GCM Encryption at Rest & In-Transit (TLS 1.3 Strict)     [100% Passed]    | |
| | Control 02: Casbin Role-Based Access Control (Zero Permissive Defaults)       [100% Passed]    | |
| | Control 03: Immutable Tamper-Evident Audit Logging (WORM Storage)             [100% Passed]    | |
| | Control 04: Real-Time Vulnerability Scanning & Dynamic Penetration Testing    [Zero Criticals] | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| [Footer: Compliance Level: Federal Enterprise Grade | Annual Pen-Test Report: Clean Pass]          |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Cert 01: SOC 2 | 100 | 230 | 400 | 230 | Plane 1/2 | Frosted badge card, step 0, audit authority badge |
| Cert 02: ISO 27001 | 540 | 230 | 400 | 230 | Plane 1/2 | Frosted badge card, step 1, active halo |
| Cert 03: HIPAA | 980 | 230 | 400 | 230 | Plane 1/2 | Frosted badge card, step 2 |
| Cert 04: GDPR | 1420 | 230 | 400 | 230 | Plane 1/2 | Frosted badge card, step 3 |
| Controls Container | 100 | 490 | 1720 | 440 | Plane 1/2 | 4 control rows (`h: 90px`), coverage progress bars |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Security officer sign-off, SLA badge |

#### TypeScript Contract
```typescript
export interface ComplianceCertification {
  id: string;
  name: string;
  issuingBody: string;
  status: 'certified' | 'in-review' | 'scheduled';
  badgeIcon?: string;
  hasFullAuditPassed?: boolean;
  renewalDate?: string;
}

export interface ComplianceControlItem {
  id: string;
  category: string;
  standard: string;
  coveragePercent: number;
  isAudited?: boolean;
  hasAutomatedCheck?: boolean;
  evidenceLink?: string;
}

export interface SecurityComplianceSlideData extends BaseSlide {
  type: 'security-compliance-matrix';
  complianceLevel?: string;
  certifications: ComplianceCertification[];
  controls: ComplianceControlItem[];
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.certifications ? Math.max(1, slide.certifications.length) : 1` (Typically 4 steps).
- **Consumption:**
  - `idx < activeStep`: Certification completed. Checkmark badge, opacity `0.75`.
  - `idx === activeStep`: Certification active. Glowing halo ring, associated audit controls in lower pane illuminate.
  - `idx > activeStep`: Certification future. Opacity `0.40`, **`filter: blur(1.25px)`**.

---

### Archetype 09: `product-roadmap-timeline` (ProductRoadmapTimelineSlide)

#### Semantic Role & Use Case
Quarterly execution roadmap illustrating parallel feature swimlanes, major release milestones, and release gate verification.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: STRATEGIC DELIVERY HORIZON]                        [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Multi-Quarter Product Roadmap & Feature Milestones]                                          |
| [Subtitle: Sequential capability releases across core engine, developer SDK, and cloud scale]    |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | 4 QUARTERLY SWIMLANES (Y=240, H=680, Each W=400, Gap=40)                                       | |
| |                                                                                               | |
| | [Q1 2026: ENGINE DEPLOY] [Q2 2026: DEVELOPER SDK] [Q3 2026: CLOUD SCALE] [Q4 2026: FEDERATION]   | |
| | Milestone: Core Engine   Milestone: Web SDK      Milestone: Multi-Region Milestone: Edge Mesh | |
| | Deliverables:            Deliverables:           Deliverables:           Deliverables:        | |
| |  [x] Split SQLite Shards  [x] Live Canvas Mode    [ ] Kafka Data Mesh     [ ] Hybrid Clusters | |
| |  [x] 10 HSL Themes        [x] Studio Builder      [ ] Cross-region Fail   [ ] AI Agent Mesh   | |
| |  [x] Positive Booleans    [ ] Micro-Shadow API    [ ] Autoscaling Fleet   [ ] Sovereign Node  | |
| |                                                                                               | |
| | Status: [Completed]      Status: [ACTIVE HALO]   Status: [1.25px Blur]   Status: [1.25px Blur]| |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| [Footer: Current Quarter: Q2 2026 | Next Major Gate: Developer SDK General Availability]          |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Q1 Swimlane | 100 | 240 | 400 | 680 | Plane 1/2 | Quarter card, step 0, completed status pill |
| Q2 Swimlane | 540 | 240 | 400 | 680 | Plane 1/2 | Quarter card, step 1, active halo, active deliverables |
| Q3 Swimlane | 980 | 240 | 400 | 680 | Plane 1/2 | Quarter card, step 2 |
| Q4 Swimlane | 1420 | 240 | 400 | 680 | Plane 1/2 | Quarter card, step 3 |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Current quarter badge, release gate note |

#### TypeScript Contract
```typescript
export interface RoadmapMilestone {
  id: string;
  quarter: string;
  headline: string;
  deliverables: string[];
  status: 'completed' | 'in-progress' | 'planned';
  isMajorRelease?: boolean;
  hasReleaseGatePassed?: boolean;
}

export interface ProductRoadmapTimelineSlideData extends BaseSlide {
  type: 'product-roadmap-timeline';
  milestones: RoadmapMilestone[];
  currentQuarter?: string;
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.milestones ? Math.max(1, slide.milestones.length) : 1` (Typically 4 steps).
- **Consumption:**
  - `idx < activeStep`: Milestone completed. Checkmark icon, opacity `0.75`.
  - `idx === activeStep`: Milestone active. Glowing halo ring, scale `1.02`, deliverable bullet points expand.
  - `idx > activeStep`: Milestone future. Opacity `0.40`, **`filter: blur(1.25px)`**.

---

### Archetype 10: `interactive-faq-flow` (InteractiveFaqFlowSlide)

#### Semantic Role & Use Case
Executive FAQ hub providing structured answers to complex technical, operational, or legal inquiries, with step-based accordion disclosure and syntax snippets.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: ARCHITECTURAL FAQ]                                 [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Frequently Addressed Architectural & Security Inquiries]                                     |
| [Subtitle: Detailed operational clarifications on data sovereignty, failover, and isolation]      |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | ACCORDION STACK (Y=240, X=100, W=1720, H=680, 4 Accordion Items)                               | |
| |                                                                                               | |
| | [Q1: How does sovereign Split SQLite prevent multi-tenant data bleed?]                        | |
| |  Answer: Each workspace tenant is physically segregated into an isolated SQLite database file. | |
| |  Status: [Completed]                                                                         | |
| | --------------------------------------------------------------------------------------------- | |
| | [Q2: What is the failover latency during cross-region outages?]                                | |
| |  Answer: Automated Raft consensus triggers failover in < 45 seconds with zero data loss.      | |
| |  Status: [ACTIVE HALO - EXPANDED VIEW WITH EMBEDDED CODE SNIPPET]                             | |
| | --------------------------------------------------------------------------------------------- | |
| | [Q3: How are positive booleans enforced across polyglot repositories?]                       | |
| |  Status: [1.25px Blur - Collapsed]                                                            | |
| | --------------------------------------------------------------------------------------------- | |
| | [Q4: What is the SLA guarantee for mission-critical enterprise workloads?]                   | |
| |  Status: [1.25px Blur - Collapsed]                                                            | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| [Footer: Have additional technical questions? Inquire with our Chief Software Engineer]          |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Accordion Item 01 | 100 | 230 | 1720 | 110 | Plane 1 | Step 0, collapsed if past |
| Accordion Item 02 (Active) | 100 | 360 | 1720 | 280 | Plane 2 | Step 1, expanded card with answer narrative & code box, active halo |
| Accordion Item 03 | 100 | 660 | 1720 | 110 | Plane 1 | Step 2, collapsed future |
| Accordion Item 04 | 100 | 790 | 1720 | 110 | Plane 1 | Step 3, collapsed future |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Support contact attribution |

#### TypeScript Contract
```typescript
export interface FaqFlowItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  isOpenDefault?: boolean;
  hasCodeSnippet?: boolean;
  codeSnippetContent?: string;
  isVerifiedAnswer?: boolean;
}

export interface InteractiveFaqSlideData extends BaseSlide {
  type: 'interactive-faq-flow';
  categories?: string[];
  faqItems: FaqFlowItem[];
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.faqItems ? Math.max(1, slide.faqItems.length) : 1` (Typically 4 steps).
- **Consumption:**
  - `idx < activeStep`: Item completed. Collapsed summary pill, opacity `0.75`.
  - `idx === activeStep`: Item active. Smoothly expands with spring easing, displays answer text and code snippet, halo border applied.
  - `idx > activeStep`: Item future. Collapsed, opacity `0.40`, **`filter: blur(1.25px)`**.

---

### Archetype 11: `key-metric-scorecard` (KeyMetricScorecardSlide)

#### Semantic Role & Use Case
4-quadrant executive KPI scorecard presenting critical business or technical metrics, variance delta badges, and animated sparklines.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: PERFORMANCE SCORECARD]                             [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Executive Key Performance Metrics & Annual Benchmarks]                                       |
| [Subtitle: Quantitative performance variance against FY2026 enterprise targets]                   |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | 4-QUADRANT SCORECARD GRID (Y=240, X=100, W=1720, H=680)                                       | |
| |                                                                                               | |
| | +------------------------------------+     +------------------------------------+             | |
| | | KPI 01: ANNUAL RUN-RATE REVENUE    |     | KPI 02: NET RETENTION RATE         |             | |
| | | $48.6M (+34% YoY)                  |     | 142.8% (+6.8% Target Variance)     |             | |
| | | [Mini Sparkline Beam: Rising]      |     | [Mini Sparkline Beam: Rising]      |             | |
| | | [Step 0: Completed]                |     | [Step 1: ACTIVE HALO]              |             | |
| | +------------------------------------+     +------------------------------------+             | |
| |                                                                                               | |
| | +------------------------------------+     +------------------------------------+             | |
| | | KPI 03: PLATFORM AVAILABILITY      |     | KPI 04: INFRASTRUCTURE EFFICIENCY  |             | |
| | | 99.9992% SLA (Target: 99.99%)      |     | $0.0014 Per Event (38% Reduction)  |             | |
| | | [Mini Sparkline Beam: Flat High]   |     | [Mini Sparkline Beam: Down-Slope]  |             | |
| | | [Step 2: 1.25px Blur]              |     | [Step 3: 1.25px Blur]              |             | |
| | +------------------------------------+     +------------------------------------+             | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| [Footer: Overall Grade: Triple-A Enterprise Ready | Audited by KPMG Assurance Services]           |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Quadrant 01 (Top-Left) | 100 | 240 | 830 | 320 | Plane 1/2 | Step 0, big KPI digit (72px), variance pill, mini sparkline |
| Quadrant 02 (Top-Right) | 990 | 240 | 830 | 320 | Plane 1/2 | Step 1, active halo |
| Quadrant 03 (Bottom-Left) | 100 | 600 | 830 | 320 | Plane 1/2 | Step 2, future |
| Quadrant 04 (Bottom-Right) | 990 | 600 | 830 | 320 | Plane 1/2 | Step 3, future |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Grade pill, audit timestamp |

#### TypeScript Contract
```typescript
export interface MetricScorecardItem {
  id: string;
  metricTitle: string;
  currentValue: string;
  targetValue: string;
  varianceDelta: string;
  isTargetExceeded?: boolean;
  hasPositiveVariance?: boolean;
  statusColor?: string;
  sparklinePoints?: number[];
}

export interface KeyMetricScorecardSlideData extends BaseSlide {
  type: 'key-metric-scorecard';
  overallGrade?: string;
  scorecards: MetricScorecardItem[];
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.scorecards ? Math.max(1, slide.scorecards.length) : 1` (Standard: 4 steps).
- **Consumption:**
  - `idx < activeStep`: Quadrant completed. Checkmark badge, opacity `0.75`.
  - `idx === activeStep`: Quadrant active. Opacity `1.00`, scale `1.02`, illuminated border halo, sparkline beam sweeps across container.
  - `idx > activeStep`: Quadrant future. Opacity `0.40`, **`filter: blur(1.25px)`**.

---

### Archetype 12: `case-study-impact` (CaseStudyImpactSlide)

#### Semantic Role & Use Case
Enterprise client transformation story structured into a 3-part storytelling arc: The Challenge (Legacy Problem), The Solution Architecture, and The Quantified Business Yield.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: TRANSFORMATION CASE STUDY]                         [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Global Tier-1 FinTech: 10x Scale with Sovereign Event Fabric]                               |
| [Subtitle: How a leading digital bank eliminated failover latency and reduced cloud cost by 42%] |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | 3 TRANSFORMATION PHASES (Y=240, H=680, Each W=540, Gap=50)                                     | |
| |                                                                                               | |
| | [PHASE 01: THE CHALLENGE]   [PHASE 02: THE SOLUTION]       [PHASE 03: THE YIELD]              | |
| | Monolithic database stalls  Sovereign Split SQLite mesh    $18.4M Annual Run-Rate Savings     | |
| | 120-minute failover window  Sub-second Raft replication    99.999% Verified Availability      | |
| | Fragile deployment trains   Automated CI/CD gitmap runner  Zero Outages in 24 Months          | |
| |                             Zero-trust Casbin engine                                          | |
| |                                                                                               | |
| | [Step 0: Completed]         [Step 1: ACTIVE HALO]          [Step 2: 1.25px Blur]              | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| [Footer: Client: Tier-1 Global Bank | Industry: Financial Services | Chief Software Engineer Verified] |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Phase 01: Challenge | 100 | 240 | 540 | 680 | Plane 1/2 | Frosted card, step 0, red-tinted pain-point pill, narrative |
| Phase 02: Solution | 690 | 240 | 540 | 680 | Plane 1/2 | Frosted card, step 1, theme accent pill, architecture bullets |
| Phase 03: Yield | 1280 | 240 | 540 | 680 | Plane 1/2 | Frosted card, step 2, green-tinted yield pill, big metric callouts |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Client attribution, industry, Chief Software Engineer stamp |

#### TypeScript Contract
```typescript
export interface CaseStudyResultItem {
  id?: string;
  label: string;
  metricValue: string;
  context?: string;
  isHeadlineMetric?: boolean;
  hasPositiveYield?: boolean;
}

export interface CaseStudyImpactSlideData extends BaseSlide {
  type: 'case-study-impact';
  clientName: string;
  clientIndustry: string;
  clientLogoUrl?: string;
  challenge: string;
  solution: string;
  quantifiedResults: CaseStudyResultItem[];
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.quantifiedResults ? Math.max(1, slide.quantifiedResults.length) : 3` (Standard: 3 narrative steps).
- **Consumption:**
  - `activeStep === 0`: Focus on Phase 1 (Challenge). Phase 2 & 3 blurred.
  - `activeStep === 1`: Focus on Phase 2 (Solution). Phase 1 completed, Phase 3 blurred.
  - `activeStep === 2`: Focus on Phase 3 (Yield). Phase 1 & 2 completed, Phase 3 illuminated with metric counters.

---

### Archetype 13: `dual-column-pros-cons` (DualColumnProsConsSlide)

#### Semantic Role & Use Case
Bilateral architectural trade-off analysis comparing two strategic alternatives (e.g. In-House Sovereign Build vs Commercial SaaS Vendor Lock-In).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: BILATERAL TRADE-OFF ANALYSIS]                      [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Strategic Evaluation: Sovereign Build vs Commercial Vendor Lock-In]                          |
| [Subtitle: Comprehensive comparison across ownership, long-term costs, security, and velocity]    |
|                                                                                                   |
| +-----------------------------------+     +-----------------------------------+                   |
| | COLUMN A: SOVEREIGN BUILD (PROS)  |     | COLUMN B: VENDOR SAAS (CONS)      |                   |
| | Y=240, X=100, W=830, H=680        |     | Y=240, X=990, W=830, H=680        |                   |
| |                                   |     |                                   |                   |
| | [x] 100% Data Sovereignty & IP    |     | [!] Escalating API & User Seat Fee|                   |
| |     Zero third-party vendor lock  |     |     30% compounded price increases|                   |
| |     Status: [Completed]           |     |     Status: [Completed]           |                   |
| |                                   |     |                                   |                   |
| | [x] Microsecond Custom Execution  |     | [!] Black-Box SLA Vulnerability   |                   |
| |     Tailored event architecture   |     |     Third-party outage exposure   |                   |
| |     Status: [ACTIVE HALO]         |     |     Status: [ACTIVE HALO]         |                   |
| |                                   |     |                                   |                   |
| | [x] Fixed Low Operating Cost      |     | [!] Regulatory Compliance Friction|                   |
| |     Status: [1.25px Blur]         |     |     Status: [1.25px Blur]         |                   |
| +-----------------------------------+     +-----------------------------------+                   |
|                                                                                                   |
| [Footer: Strategic Recommendation: Proceed with sovereign event-driven architecture]             |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Column A: Pros (Sovereign) | 100 | 240 | 830 | 680 | Plane 1/2 | Frosted card, green accent border, list of pros items |
| Column B: Cons (Vendor) | 990 | 240 | 830 | 680 | Plane 1/2 | Frosted card, amber/red accent border, list of cons items |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Recommendation pill, executive summary note |

#### TypeScript Contract
```typescript
export interface ProConItem {
  id: string;
  title: string;
  detail: string;
  hasHighImpact?: boolean;
  hasWorkaround?: boolean;
  isPositiveFactor?: boolean;
}

export interface DualColumnProsConsSlideData extends BaseSlide {
  type: 'dual-column-pros-cons';
  topic: string;
  prosHeader?: string;
  pros: ProConItem[];
  consHeader?: string;
  cons: ProConItem[];
  recommendationSummary?: string;
}
```

#### Step Progression Mapping
- **Step Count Formula:** `Math.max(slide.pros ? slide.pros.length : 0, slide.cons ? slide.cons.length : 0, 1)` (Typically 3 to 4 steps).
- **Consumption:**
  - `idx < activeStep`: Pair completed. Opacity `0.75`, stable checkmarks.
  - `idx === activeStep`: Pair active. Row elevates, pro item illuminates green, con item illuminates amber/red.
  - `idx > activeStep`: Pair future. Opacity `0.40`, **`filter: blur(1.25px)`**.

---

### Archetype 14: `interactive-code-playground` (InteractiveCodePlaygroundSlide)

#### Semantic Role & Use Case
Split-pane technical demo featuring a live syntax-highlighted code editor on the left and a reactive execution terminal / console drawer on the right.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: TECHNICAL IMPLEMENTATION]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Reactive Step Progression Engine & Monadic Result Handlers]                                  |
| [Subtitle: Live code execution of positive boolean guards and zero-allocation string folding]     |
|                                                                                                   |
| +-----------------------------------+     +-----------------------------------+                   |
| | CODE EDITOR PANEL (W=900, H=680)  |     | RUNTIME CONSOLE DRAWER (W=760)    |                   |
| | Y=240, X=100                      |     | Y=240, X=1060, H=680              |                   |
| | File: src/engine/stepEngine.ts    |     | Environment: Node 22 / V8 Live    |                   |
| |                                   |     |                                   |                   |
| | 1: export function advanceStep()  |     | > [COMPILER]: TS5.8 Typecheck PASS|                   |
| | 2:   const current = getStep();   |     | > [LINTER]: 0 Boolean Violations  |                   |
| | 3:   const phase = getPhase(curr);|     | > [EXEC]: advanceStep(step=2)     |                   |
| | 4:   return {                     |     | > [PHASE]: 'active' Halo Emitted  |                   |
| | 5:     isCompleted: phase === past|     | > [AUDIO]: Synthesizer 880Hz Ping |                   |
| | 6:     hasActiveHalo: phase==='act|     | > [STATUS]: 200 OK (0.12ms)       |                   |
| | 7:   };                           |     |                                   |                   |
| | 8: }                              |     | Step 0: Formulation [Past]        |                   |
| |                                   |     | Step 1: Compilation [Past]        |                   |
| | Status: Syntax Validated          |     | Step 2: EXECUTION LIVE [ACTIVE]   |                   |
| +-----------------------------------+     +-----------------------------------+                   |
|                                                                                                   |
| [Footer: Zero-dependency execution engine | Chief Software Engineer Verified]                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Code Editor Panel | 100 | 240 | 900 | 680 | Plane 1/2 | Frosted terminal container, dark carbon surface, line numbers, JetBrains Mono |
| Runtime Console Drawer | 1060 | 240 | 760 | 680 | Plane 1/2 | Terminal drawer, execution status lines, simulated CLI cursor |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Runtime metrics, sandbox status |

#### TypeScript Contract
```typescript
export interface InteractiveCodePlaygroundSlideData extends BaseSlide {
  type: 'interactive-code-playground';
  language: string;
  initialCode: string;
  executionOutput?: string;
  filename?: string;
  isExecutable?: boolean;
  hasSyntaxHighlighting?: boolean;
  hasLiveConsole?: boolean;
}
```

#### Step Progression Mapping
- **Step Count Formula:** `3` (Fixed 3-stage execution lifecycle).
- **Consumption:**
  - `activeStep === 0`: Step 0: Code Formulation. Highlights active function signature, terminal shows syntax parsed.
  - `activeStep === 1`: Step 1: Compilation Pass. Line highlighter sweeps down body, terminal prints compiler pass and zero lint errors.
  - `activeStep === 2`: Step 2: Live Runtime Execution. Terminal outputs execution logs, active halo pulses on output panel.

---

### Archetype 15: `closing-cta-showcase` (ClosingCtaShowcaseSlide)

#### Semantic Role & Use Case
High-authority presentation finale featuring strategic value summary, dual action callouts, executive contact attribution, and live QR code verification.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: PARTNERSHIP & NEXT STEPS]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Accelerate Your Enterprise Transformation with Sovereign Architecture]                       |
| [Subtitle: Schedule an architectural deep-dive with our platform steering committee]             |
|                                                                                                   |
| +------------------------------------+     +----------------------------------------------------+ |
| | STRATEGIC ACTION PANEL (W=900)     |     | EXECUTIVE CONTACT & QR VERIFY (W=760, H=680)       | |
| | Y=240, X=100, H=680                |     | Y=240, X=1060                                      | |
| |                                    |     |                                                    | |
| | CORE VALUE SUMMARY:                |     | +------------------------------------------------+ | |
| | - 4.8x Deployment Velocity         |     | | DYNAMIC QR VERIFICATION CODE                   | | |
| | - 38% Infrastructure OPEX Savings  |     | | [Scan to book architectural session with]      | | |
| | - 100% Sovereign Data Isolation    |     | | [Alim Ul Karim, Chief Software Engineer]       | | |
| |                                    |     | +------------------------------------------------+ | |
| | ACTION BUTTONS:                    |     |                                                    | |
| | +--------------------------------+ |     | CONTACT DETAILS:                                   | |
| | | [PRIMARY CTA: BOOK WORKSHOP]   | |     | - Email: alim@enterprise.internal                  | |
| | | (Step 0: ACTIVE HALO)          | |     | - Calendar: cal.com/alim-chief-software-engineer   | |
| | +--------------------------------+ |     | - Location: Global Enterprise Headquarters         | |
| | [SECONDARY: DOWNLOAD WHITE PAPER]| |     |                                                    | |
| +------------------------------------+     +----------------------------------------------------+ |
|                                                                                                   |
| [Footer: Confidential & Proprietary | Sovereign Architecture Steering Committee]                  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| Action Panel (Left) | 100 | 240 | 900 | 680 | Plane 1/2 | Value bullet points, primary action button (`h: 64px`), secondary button |
| Contact & QR Panel (Right) | 1060 | 240 | 760 | 680 | Plane 1/2 | QR code frame (`w: 240px`, `h: 240px`), contact details list |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Proprietary notice, steering committee badge |

#### TypeScript Contract
```typescript
export interface ClosingCtaButton {
  label: string;
  url?: string;
  actionType?: string;
  isPrimaryButton?: boolean;
  hasArrowIcon?: boolean;
}

export interface ClosingContactInfo {
  email?: string;
  phone?: string;
  website?: string;
  hasCalendarLink?: boolean;
  executiveTitle?: string; // Strictly "Chief Software Engineer"
  executiveName?: string;  // "Alim Ul Karim"
}

export interface ClosingCtaShowcaseSlideData extends BaseSlide {
  type: 'closing-cta-showcase';
  ctaHeadline: string;
  subHeadline?: string;
  primaryCta: ClosingCtaButton;
  secondaryCta?: { label: string; url?: string };
  contactInfo?: ClosingContactInfo;
  socialProofNote?: string;
  hasQrCode?: boolean;
}
```

#### Step Progression Mapping
- **Step Count Formula:** `2` (Step 0: Action CTA focus, Step 1: Calendar booking & QR code verification reveal).
- **Consumption:**
  - `activeStep === 0`: Focus on Primary CTA button (pulsing accent ring, scale `1.03`). QR code pane muted.
  - `activeStep === 1`: Focus shifts to Executive Booking & QR code verification stamp (QR illuminated, contact links highlighted).

---

### Archetype 17: `timeline-rail` (TimelineRailSlide)

#### Semantic Role & Use Case
High-density continuous linear timeline rail displaying sprint delivery gates, sequential product releases, or multi-year enterprise transformation chronologies along a continuous horizontal SVG track.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: STRATEGIC DELIVERY HORIZON]                        [Corporate Logo: Y=80, X=1720, W=100] |
| [H1: Continuous Architecture Milestones & Sprint Delivery Gates]                                  |
| [Subtitle: Sequential capability releases tracking infrastructure rollout across global regions]  |
|                                                                                                   |
|  =====================(SVG PROGRESS RAIL TRACK: Y=260, X=100, W=1720)===========================  |
|     (01) Milestone 1 -------- (02) Milestone 2 -------- [03] ACTIVE BEACON ------- (04) Milestone |
|     [Completed]               [Completed]               [ACTIVE HALO]              [1.25px Blur]  |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | ACTIVE MILESTONE DETAIL PANE (Y=360, X=100, W=1720, H=560, Plane 2)                           | |
| |                                                                                               | |
| | Milestone 03: Global Multi-Region Data Fabric & Cross-Cloud Failover                         | |
| | Target Quarter: Q3 2026 | SLA Target: 99.999% | Status: IN PROGRESS (ACTIVE STEP)             | |
| |                                                                                               | |
| | CORE DELIVERABLES:                                                                            | |
| |  [x] Split SQLite physical shard automation across 5 global edge points                       | |
| |  [x] Casbin authorization sync via distributed Raft consensus                                | |
| |  [ ] Automated failover chaos engineering verification tests (< 45s recovery)                 | |
| |                                                                                               | |
| | OWNER TEAM: Enterprise Platform Engineering | Lead: Chief Software Engineer                   | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| [Footer: Strategic Delivery Rail | Progress: 3 of 5 Milestones Completed (60%)]                   |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Details |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 130 | Plane 1 | Kicker, H1, Subtitle |
| SVG Progress Rail Track | 100 | 240 | 1720 | 80 | Plane 2 | Continuous horizontal track line with dynamic animated accent progress fill |
| Beacon Nodes (4 to 5 Nodes)| 100 to 1820 | 250 | 60 | 60 | Plane 3 | Circular milestone beacon nodes with step numbers and checkmarks |
| Active Detail Card | 100 | 360 | 1720 | 560 | Plane 2 | Active milestone card with spring transition (`k: 420`), deliverable checklist |
| Footer Zone | 100 | 950 | 1720 | 40 | Plane 1 | Progress percentage badge, lead engineer attribution |

#### TypeScript Contract
```typescript
export interface TimelineRailMilestone {
  id: string;
  stepNumber: number;
  dateOrQuarter: string;
  title: string;
  description: string;
  deliverables: string[];
  isCompleted?: boolean;
  hasCriticalPath?: boolean;
  ownerTeam?: string;
  badgeLabel?: string;
}

export interface TimelineRailSlideData extends BaseSlide {
  type: 'timeline-rail';
  railTitle?: string;
  totalDuration?: string;
  railNodes: TimelineRailMilestone[];
  targetSla?: string;
  hasAnimatedTrack?: boolean;
}
```

#### Step Progression Mapping
- **Step Count Formula:** `slide.railNodes ? Math.max(1, slide.railNodes.length) : 1` (Typically 4 to 5 milestones).
- **Consumption:**
  - `idx < activeStep`: Node completed. SVG track segment filled with accent color, beacon shows checkmark, opacity `0.75`.
  - `idx === activeStep`: Node active. Beacon pulses with outer halo (`boxShadow: 0 0 0 2px ${theme.accentColor}50, 0 0 28px ${theme.accentColor}60`), detail card below displays this milestone's deep deliverables with spring easing.
  - `idx > activeStep`: Node future. Ghosted circular beacon, track remains muted grey, card details have **`filter: blur(1.25px)`**.

---

## 3. Union Types & System Re-Exports

```typescript
// Union of all 15 enterprise slide types + Archetype 17
export type EnterpriseSlideType =
  | 'executive-summary'
  | 'system-architecture-flow'
  | 'roi-metric-calculator'
  | 'customer-journey-map'
  | 'matrix-comparison-grid'
  | 'tech-stack-grid'
  | 'team-hierarchy-org'
  | 'security-compliance-matrix'
  | 'product-roadmap-timeline'
  | 'interactive-faq-flow'
  | 'key-metric-scorecard'
  | 'case-study-impact'
  | 'dual-column-pros-cons'
  | 'interactive-code-playground'
  | 'closing-cta-showcase'
  | 'timeline-rail';

// Union of all enterprise slide data schemas
export type EnterpriseSlideData =
  | ExecutiveSummarySlideData
  | SystemArchitectureSlideData
  | RoiMetricCalculatorSlideData
  | CustomerJourneySlideData
  | MatrixComparisonSlideData
  | TechStackGridSlideData
  | TeamHierarchySlideData
  | SecurityComplianceSlideData
  | ProductRoadmapTimelineSlideData
  | InteractiveFaqSlideData
  | KeyMetricScorecardSlideData
  | CaseStudyImpactSlideData
  | DualColumnProsConsSlideData
  | InteractiveCodePlaygroundSlideData
  | ClosingCtaShowcaseSlideData
  | TimelineRailSlideData;
```
