# 02-Data Contracts: TypeScript Interfaces & Coordinate Budgets for 15 Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/02-data-contracts`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.6.0`  
> **Author:** Spec Subagent 01  
> **Created:** 2026-10-03  
> **Domain:** TypeScript Schemas, Virtual Coordinate Budgets, Step Count Formulas, ASCII Wireframes & Verified JSON Fixtures  

---

## 1. Architectural Foundation & Base Contract

Every one of the 15 slide archetypes specified in this document extends the foundational `BaseSlide` contract. Every archetype adheres strictly to:

1. **Canonical 16:9 1920x1080 Viewport Geometry:** All bounding containers and coordinate calculations are fixed to exactly $1920\text{px}$ width by $1080\text{px}$ height. Layout drift across disparate display resolutions is eliminated through uniform GPU transform scaling.
2. **Pure Live DOM Typography Mandate:** Every text node (headlines, subtitles, kicker pill badges, body narratives, table cells, metric digits, and footnotes) renders as an accessible, selectable HTML element. Text must never be flattened into raster graphics or canvas bitmaps.
3. **Stepwise Intra-Slide Progression:** Slides support internal sub-step choreography (`activeStep: number`, `maxSteps: number`), resolving items into `completed` (0.75 opacity with checkmark), `active` (1.00 opacity with glowing halo and spring physics), or `future` (0.40 opacity with $1.25\text{px}$ optical blur).
4. **Positive Boolean Polarity Only:** All boolean fields use positive naming conventions (`is*`, `has*`, `can*`, `should*`). Prohibit negative booleans (`disabled`, `hidden`, `isNotActive`) and explicit boolean comparisons (`== true`).
5. **Persona Normalization:** Any reference to executive Alim Ul Karim is strictly titled **"Chief Software Engineer"** (never "Founder" or "CEO").

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

## 2. Positive Boolean Polarity Standard

All properties across the presentation data contracts must employ positive, affirmative terminology. Negative identifiers introduce cognitive friction and invert conditional logic.

| Forbidden Negative Identifiers | Canonical Positive Replacement | Semantic Behavior |
|:---|:---|:---|
| `disabled`, `isDisabled` | `isEnabled` | Inverted check: `!isEnabled` |
| `hidden`, `isHidden` | `isVisible` | Inverted check: `!isVisible` |
| `isNotActive`, `inactive` | `isActive` | Inverted check: `!isActive` |
| `isInvalid`, `hasErrors` | `isValid`, `isFailure`, `hasFailures` | Affirmative state model |
| `isOffline` | `isOnline` / `isOperational` | Health indicator flag |
| `unverified` | `isVerified` | Cryptographic evidence flag |

---

## 3. Master Catalog of the 15 New Slide Archetypes

```
+---------------------------------------------------------------------------------------------------+
|                        MASTER CATALOG: 15 GLOBAL PPT SLIDE ARCHETYPES                             |
+---------------------------------------------------------------------------------------------------+
|  [01] executive-governance-matrix    --> Board Committee Oversight & Governance Pillars (Multi-step) |
|  [02] okr-cascade-alignment          --> Company Vision to Quarterly Key Results (Multi-step)       |
|  [03] cloud-cost-finops-optimizer    --> Multi-Cloud Unit Economics & Wastage Levers (Flat)         |
|  [04] customer-sentiment-radar       --> Multi-Axis NPS/CSAT Radar & Cohort Insights (Flat)         |
|  [05] competitive-battlecard         --> Competitor Parity Matrix & Strategic Moats (Multi-step)    |
|  [06] launch-readiness-checklist     --> Production Stage-Gate & Go/No-Go Blocker Check (Multi-step)|
|  [07] developer-gateway-sandbox      --> API Gateway Routing, Auth & Mock Telemetry (Multi-step)    |
|  [08] rag-pipeline-topology          --> Retrieval-Augmented Generation 5-Stage DAG (Multi-step)    |
|  [09] soc-incident-war-room          --> Real-time Incident Triage & MITRE Containment (Multi-step) |
|  [10] merkle-tree-state-ledger       --> Cryptographic State Ledger & Root Verification (Multi-step)|
|  [11] investor-cap-table-waterfall   --> Venture Capital Equity Tranches & Waterfall Model (Flat)  |
|  [12] realtime-event-stream-fabric   --> Pub/Sub Streaming Fabric, Partitions & Lag (Flat)          |
|  [13] supply-chain-risk-matrix       --> Tier 1/2/3 Vendor Vulnerability & Buffer Telemetry (Flat)  |
|  [14] talent-competency-radar        --> Engineering Seniority Matrix L4-L8 Radar (Multi-step)      |
|  [15] sustainability-esg-scorecard   --> Scope 1/2/3 Emissions & Clean Energy PPA Scorecard (Flat)  |
+---------------------------------------------------------------------------------------------------+
```

### Archetype Category & Step Matrix

| # | Type Identifier | Interface Contract | Layout Category | Step Count Formula | Focus Dynamic |
|:---:|:---|:---|:---:|:---:|:---|
| 01 | `executive-governance-matrix` | `ExecutiveGovernanceMatrixSlideData` | Multi-step | $\max(\text{pillars.length}, 1)$ | Sequential committee charter, quorum & compliance focus |
| 02 | `okr-cascade-alignment` | `OkrCascadeAlignmentSlideData` | Multi-step | $\max(\text{tiers.length}, 1)$ | Strategic cascade down from Company Goal to Team Initiative |
| 03 | `cloud-cost-finops-optimizer` | `CloudCostFinopsOptimizerSlideData` | Flat | $1$ | High-density multi-cloud spend, unit cost & optimization ROI |
| 04 | `customer-sentiment-radar` | `CustomerSentimentRadarSlideData` | Flat | $1$ | 6-dimension radar diagram, NPS distribution & verbatim quotes |
| 05 | `competitive-battlecard` | `CompetitiveBattlecardSlideData` | Multi-step | $\max(\text{pillars.length}, 1)$ | Strategic moat evaluation, objection handling & win rate |
| 06 | `launch-readiness-checklist` | `LaunchReadinessChecklistSlideData` | Multi-step | $\max(\text{gates.length}, 1)$ | 5-phase operational signoff & automated security gates |
| 07 | `developer-gateway-sandbox` | `DeveloperGatewaySandboxSlideData` | Multi-step | $\max(\text{stages.length}, 1)$ | Stepwise request ingress, policy auth & mock payload drawer |
| 08 | `rag-pipeline-topology` | `RagPipelineTopologySlideData` | Multi-step | $\max(\text{stages.length}, 1)$ | 5-stage RAG DAG traversal: Ingestion to LLM Context |
| 09 | `soc-incident-war-room` | `SocIncidentWarRoomSlideData` | Multi-step | $\max(\text{phases.length}, 1)$ | 4-phase incident triage, MITRE kill chain & quarantine |
| 10 | `merkle-tree-state-ledger` | `MerkleTreeStateLedgerSlideData` | Multi-step | $\max(\text{steps.length}, 1)$ | Cryptographic hash tree verification from leaf to root |
| 11 | `investor-cap-table-waterfall` | `InvestorCapTableWaterfallSlideData` | Flat | $1$ | Equity tranches, liquidation preference & exit waterfall |
| 12 | `realtime-event-stream-fabric` | `RealtimeEventStreamFabricSlideData` | Flat | $1$ | Topic partition throughput, consumer group lag & dead-letters |
| 13 | `supply-chain-risk-matrix` | `SupplyChainRiskMatrixSlideData` | Flat | $1$ | Tier 1-3 supplier risk scoring, geopolitical buffer telemetry |
| 14 | `talent-competency-radar` | `TalentCompetencyRadarSlideData` | Multi-step | $\max(\text{milestones.length}, 1)$ | Engineering seniority level progression & competency radar |
| 15 | `sustainability-esg-scorecard` | `SustainabilityEsgScorecardSlideData` | Flat | $1$ | Scope 1/2/3 greenhouse gas emissions & renewable energy PPA |

---

## 4. Discriminated Union Declarations

```typescript
export type GlobalPptSuiteSlideType =
  | 'executive-governance-matrix'
  | 'okr-cascade-alignment'
  | 'cloud-cost-finops-optimizer'
  | 'customer-sentiment-radar'
  | 'competitive-battlecard'
  | 'launch-readiness-checklist'
  | 'developer-gateway-sandbox'
  | 'rag-pipeline-topology'
  | 'soc-incident-war-room'
  | 'merkle-tree-state-ledger'
  | 'investor-cap-table-waterfall'
  | 'realtime-event-stream-fabric'
  | 'supply-chain-risk-matrix'
  | 'talent-competency-radar'
  | 'sustainability-esg-scorecard';

export type GlobalPptSuiteSlideData =
  | ExecutiveGovernanceMatrixSlideData
  | OkrCascadeAlignmentSlideData
  | CloudCostFinopsOptimizerSlideData
  | CustomerSentimentRadarSlideData
  | CompetitiveBattlecardSlideData
  | LaunchReadinessChecklistSlideData
  | DeveloperGatewaySandboxSlideData
  | RagPipelineTopologySlideData
  | SocIncidentWarRoomSlideData
  | MerkleTreeStateLedgerSlideData
  | InvestorCapTableWaterfallSlideData
  | RealtimeEventStreamFabricSlideData
  | SupplyChainRiskMatrixSlideData
  | TalentCompetencyRadarSlideData
  | SustainabilityEsgScorecardSlideData;

export function calculateGlobalPptSlideStepCount(slide: GlobalPptSuiteSlideData): number {
  switch (slide.type) {
    case 'executive-governance-matrix':
      return Math.max(slide.governancePillars?.length || 1, 1);
    case 'okr-cascade-alignment':
      return Math.max(slide.cascadeTiers?.length || 1, 1);
    case 'competitive-battlecard':
      return Math.max(slide.battlecardPillars?.length || 1, 1);
    case 'launch-readiness-checklist':
      return Math.max(slide.stageGates?.length || 1, 1);
    case 'developer-gateway-sandbox':
      return Math.max(slide.gatewayStages?.length || 1, 1);
    case 'rag-pipeline-topology':
      return Math.max(slide.pipelineStages?.length || 1, 1);
    case 'soc-incident-war-room':
      return Math.max(slide.incidentPhases?.length || 1, 1);
    case 'merkle-tree-state-ledger':
      return Math.max(slide.verificationSteps?.length || 1, 1);
    case 'talent-competency-radar':
      return Math.max(slide.levelMilestones?.length || 1, 1);

    // Flat Sovereign Telemetry Archetypes
    case 'cloud-cost-finops-optimizer':
    case 'customer-sentiment-radar':
    case 'investor-cap-table-waterfall':
    case 'realtime-event-stream-fabric':
    case 'supply-chain-risk-matrix':
    case 'sustainability-esg-scorecard':
      return 1;

    default:
      return 1;
  }
}
```

---

## 5. Detailed Archetype Specifications

```
=====================================================================================================
CANONICAL CANVAS COORDINATE BUDGET (1920 x 1080)
=====================================================================================================
Container Boundaries:
- Root Viewport: Width = 1920px, Height = 1080px
- Safe Margins: Left = 80px, Right = 80px, Top = 48px, Bottom = 48px
- Header Zone: X: 80px -> 1840px (Width: 1760px), Y: 48px -> 152px (Height: 104px)
- Content Stage Zone: X: 80px -> 1840px (Width: 1760px), Y: 176px -> 956px (Height: 780px)
- Footer / Status Telemetry: X: 80px -> 1840px (Width: 1760px), Y: 976px -> 1032px (Height: 56px)
=====================================================================================================
```

---

### Archetype 01: `executive-governance-matrix`

#### Intent & Boardroom Narrative

Presents board-level governance architecture, oversight committee charters, quorum thresholds, regulatory compliance scores, and key shareholder resolutions with audit-verified authenticity.

#### Modality & Step Dynamics

- **Layout Category:** Multi-step Interactive Workflow
- **Step Formula:** `stepCount = Math.max(slide.governancePillars.length, 1)`
- **Step Focus:** Steps sequentially through each governance committee pillar. The active committee is elevated to Plane 2 with a luminescent halo ring, completed committees remain at 0.75 opacity with checkmark verification, and future committees are subdued at 0.40 opacity with a $1.25\text{px}$ blur.

#### TypeScript Interface Contract

```typescript
export interface CharterResolutionItem {
  id: string;
  resolutionCode: string;
  title: string;
  summary: string;
  votingQuorumPercent: number;
  isPassed: boolean;
  isCompliant: boolean;
  hasAuditSignoff: boolean;
}

export interface GovernancePillarItem {
  id: string;
  pillarName: string;
  chairPerson: string;
  chairTitle: string;
  committeeCode: string;
  oversightDomain: string;
  complianceHealthPercent: number;
  meetingCadence: string;
  resolutions: CharterResolutionItem[];
  isQuorumAchieved: boolean;
  isAuditVerified: boolean;
}

export interface ExecutiveGovernanceMatrixSlideData extends BaseSlide {
  type: 'executive-governance-matrix';
  boardName: string;
  fiscalYear: string;
  overallComplianceScore: number;
  governancePillars: GovernancePillarItem[];
  chiefGovernanceOfficer: string;
  cgoTitle: string;
  isRegulatoryAuditPassed: boolean;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER ZONE: (80, 48) -> (1840, 152) [Width: 1760px, Height: 104px]                               |
| Kicker: CAPSULE-GOLD | Title: Executive Governance & Board Oversight | Fiscal: FY2026/27           |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Width: 1760px, Height: 780px]                            |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | TOP METRIC STRIP: (80, 176) -> (1840, 240) [Height: 64px]                                    | |
| | Compliance Score: 98.4% | Quorum: 100% | Total Resolutions: 24 | Lead: Alim Ul Karim, Chief S/E| |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-------------------------+ +-------------------------+ +-------------------------+ +-----------+ |
| | PILLAR 1: AUDIT & RISK  | | PILLAR 2: CYBER DEFENSE | | PILLAR 3: COMPENSATION  | | PILLAR 4: | |
| | X: 80 -> 490 (410px)    | | X: 530 -> 940 (410px)   | | X: 980 -> 1390 (410px)  | | ESG GOV   | |
| | Plane 2 (Active Halo)   | | Plane 1 (Completed 0.75)| | Plane 1 (Future 0.40)   | | Future    | |
| | Quorum: 100% Verified   | | Quorum: 100% Verified   | | Quorum: Pending         | | 0.40 Blur | |
| | Resolution Cards (x3)   | | Resolution Cards (x3)   | | Resolution Cards (x3)   | | Cards (x3)| |
| +-------------------------+ +-------------------------+ +-------------------------+ +-----------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER TELEMETRY: (80, 976) -> (1840, 1032) [Height: 56px] - Plane 3                             |
| Status: Board Certified | Legal Review: Complete | Chief Software Engineer Verified: YES          |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-gov-01",
  "type": "executive-governance-matrix",
  "title": "Corporate Governance & Board Committee Matrix",
  "subtitle": "Institutional Oversight, Quorum Compliance & Charter Resolutions",
  "kicker": "Enterprise Governance",
  "boardName": "Global Executive Directorate",
  "fiscalYear": "FY2026-Q4",
  "overallComplianceScore": 98.6,
  "chiefGovernanceOfficer": "Alim Ul Karim",
  "cgoTitle": "Chief Software Engineer",
  "isRegulatoryAuditPassed": true,
  "governancePillars": [
    {
      "id": "pil-01",
      "pillarName": "Audit & Financial Risk",
      "chairPerson": "Eleanor Vance",
      "chairTitle": "Audit Committee Chair",
      "committeeCode": "AC-101",
      "oversightDomain": "Sarbanes-Oxley & Capital Reserves",
      "complianceHealthPercent": 99.2,
      "meetingCadence": "Monthly",
      "isQuorumAchieved": true,
      "isAuditVerified": true,
      "resolutions": [
        {
          "id": "res-01",
          "resolutionCode": "RES-2026-08",
          "title": "FY27 Capital Allocation Framework",
          "summary": "Authorized $45M expansion of sovereign AI datacenters with zero-debt financing.",
          "votingQuorumPercent": 100.0,
          "isPassed": true,
          "isCompliant": true,
          "hasAuditSignoff": true
        }
      ]
    },
    {
      "id": "pil-02",
      "pillarName": "Cybersecurity & Cryptographic Assurance",
      "chairPerson": "Alim Ul Karim",
      "chairTitle": "Chief Software Engineer",
      "committeeCode": "SEC-202",
      "oversightDomain": "Zero-Trust Infrastructure & Post-Quantum Cryptography",
      "complianceHealthPercent": 99.8,
      "meetingCadence": "Bi-Weekly",
      "isQuorumAchieved": true,
      "isAuditVerified": true,
      "resolutions": [
        {
          "id": "res-02",
          "resolutionCode": "RES-2026-14",
          "title": "Mandatory Post-Quantum Transport Encryption",
          "summary": "Enforced ML-KEM-768 key encapsulation across all Anycast edge ingress nodes.",
          "votingQuorumPercent": 100.0,
          "isPassed": true,
          "isCompliant": true,
          "hasAuditSignoff": true
        }
      ]
    }
  ]
}
```

---

### Archetype 02: `okr-cascade-alignment`

#### Intent & Boardroom Narrative

Visualizes how high-level corporate strategic objectives cascade downward into functional business units and tactical engineering key results with quantified progress meters and confidence indicators.

#### Modality & Step Dynamics

- **Layout Category:** Multi-step Interactive Workflow
- **Step Formula:** `stepCount = Math.max(slide.cascadeTiers.length, 1)`
- **Step Focus:** Steps sequentially down through each organizational tier (Company Horizon -> Division Level -> Tactical Squad Initiatives).

#### TypeScript Interface Contract

```typescript
export interface OkrInitiativeItem {
  id: string;
  initiativeName: string;
  ownerName: string;
  ownerRole: string;
  progressPercent: number;
  confidenceScore: number; // 0.0 to 1.0
  isCompleted: boolean;
  isOnTrack: boolean;
  hasConfidenceWarning: boolean;
}

export interface OkrKeyResultItem {
  id: string;
  krCode: string;
  targetMetric: string;
  currentMetric: string;
  unit: string;
  progressPercent: number;
  initiatives: OkrInitiativeItem[];
  isOnTrack: boolean;
  isVerified: boolean;
}

export interface OkrCascadeTierItem {
  id: string;
  tierLevel: number;
  tierName: string;
  tierDescription: string;
  strategicObjective: string;
  keyResults: OkrKeyResultItem[];
  isCompleted: boolean;
  isActiveTier: boolean;
}

export interface OkrCascadeAlignmentSlideData extends BaseSlide {
  type: 'okr-cascade-alignment';
  planningCycle: string;
  globalProgressPercent: number;
  cascadeTiers: OkrCascadeTierItem[];
  executiveSponsor: string;
  sponsorRole: string;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Strategic OKR Cascade Alignment FY26           |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| [TIER 1: ENTERPRISE OBJECTIVE] (80, 176) -> (1840, 360) [Height: 184px]                           |
| "Expand Sovereign Cloud Architecture to 99.999% Availability & Zero Layout Drift"                 |
| Progress: 92% | Owner: Alim Ul Karim, Chief Software Engineer | Plane 1 / Plane 2                  |
|                                                                                                   |
|        │ (Connecting Harmonic Cascade Rail: SVG Stroke Animated)                                  |
|        ▼                                                                                          |
| [TIER 2: DIVISIONAL KEY RESULTS] (80, 400) -> (1840, 640) [Height: 240px]                         |
| Card A: Vector Engine Latency < 12ms (94%)  │ Card B: Edge Ingress TLS 1.3 (100%)                  |
| Card C: Automated E2E CI/CD Flake = 0 (88%) │ Card D: Zero DOM Reflows (96%)                      |
|                                                                                                   |
|        │ (Connecting Harmonic Cascade Rail)                                                       |
|        ▼                                                                                          |
| [TIER 3: TACTICAL INITIATIVES] (80, 680) -> (1840, 936) [Height: 256px]                          |
| 4 Responsive Columns: Micro-sprints, verified delivery milestones, and confidence badges         |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - Global Status: 91.4% ON TRACK | Confidence: HIGH              |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-okr-01",
  "type": "okr-cascade-alignment",
  "title": "Corporate OKR Cascade & Strategic Alignment",
  "subtitle": "Hierarchical Goal Distribution from Executive Vision to Engineering Delivery",
  "kicker": "Strategic Execution",
  "planningCycle": "2026 Annual Planning",
  "globalProgressPercent": 91.4,
  "executiveSponsor": "Alim Ul Karim",
  "sponsorRole": "Chief Software Engineer",
  "cascadeTiers": [
    {
      "id": "tier-1",
      "tierLevel": 1,
      "tierName": "Enterprise Vision",
      "tierDescription": "Foundational architectural scalability and client reliability",
      "strategicObjective": "Attain zero layout drift and 99.999% availability across global edge presentation stages.",
      "isCompleted": false,
      "isActiveTier": true,
      "keyResults": [
        {
          "id": "kr-1",
          "krCode": "KR-1.1",
          "targetMetric": "99.999%",
          "currentMetric": "99.998%",
          "unit": "Availability",
          "progressPercent": 98.0,
          "isOnTrack": true,
          "isVerified": true,
          "initiatives": [
            {
              "id": "init-1",
              "initiativeName": "Anycast Edge Multi-Region Mesh",
              "ownerName": "Alim Ul Karim",
              "ownerRole": "Chief Software Engineer",
              "progressPercent": 100.0,
              "confidenceScore": 0.99,
              "isCompleted": true,
              "isOnTrack": true,
              "hasConfidenceWarning": false
            }
          ]
        }
      ]
    }
  ]
}
```

---

### Archetype 03: `cloud-cost-finops-optimizer`

#### Intent & Boardroom Narrative

Presents cloud infrastructure economics, multi-cloud spend across compute, storage, and networking, committed use discounts (CUDs), automated idle reclamation, and unit cost per transaction.

#### Modality & Step Dynamics

- **Layout Category:** Flat Sovereign Telemetry
- **Step Formula:** `stepCount = 1`
- **Focus Dynamic:** Invariant high-density financial overview. Interactive hover illuminates individual cost levers and projected annual savings without step mutation.

#### TypeScript Interface Contract

```typescript
export interface CloudSpendProviderItem {
  id: string;
  providerName: string;
  cloudIcon: string;
  monthlyRunRateUsd: number;
  committedDiscountPercent: number;
  unitCostPerTxUsd: number;
  monthlySavingsUsd: number;
  isOptimized: boolean;
}

export interface CostOptimizationLeverItem {
  id: string;
  leverTitle: string;
  category: 'compute' | 'storage' | 'network' | 'licensing';
  annualSavingsUsd: number;
  effortTier: 'immediate' | 'moderate' | 'architectural';
  isAutomated: boolean;
  isRealized: boolean;
  hasAnomalousSpike: boolean;
}

export interface CloudCostFinopsOptimizerSlideData extends BaseSlide {
  type: 'cloud-cost-finops-optimizer';
  reportingQuarter: string;
  totalMonthlySpendUsd: number;
  totalAnnualProjectedSavingsUsd: number;
  overallDiscountCoveragePercent: number;
  spendByProvider: CloudSpendProviderItem[];
  optimizationLevers: CostOptimizationLeverItem[];
  finopsLead: string;
  leadRole: string;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Cloud FinOps & Unit Economic Architecture       |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | FINANCIAL SUMMARY BENTO: (80, 176) -> (1840, 310) [Height: 134px]                             | |
| | Monthly Run Rate: $142,500 | Projected Savings: $384,000/yr | CUD Coverage: 84.5% | Plane 1    | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-----------------------------------------+ +---------------------------------------------------+ |
| | MULTI-CLOUD SPEND ALLOCATION            | | STRATEGIC OPTIMIZATION LEVERS                     | |
| | X: 80 -> 920 (840px), Y: 330 -> 936     | | X: 960 -> 1840 (880px), Y: 330 -> 936             | |
| | AWS: $78.4K (Compute/Graviton)          | | Lever 1: Graviton4 CPU Migration ($120K saved)    | |
| | GCP: $44.1K (BigQuery/Dataproc)         | | Lever 2: S3 Glacier Deep Archive Tiering ($42K)   | |
| | Azure: $20.0K (AD/Office Fabric)        | | Lever 3: Dynamic Pod Auto-scaling ($98K)          | |
| | Bar Sparkline & Unit Cost Gauge         | | Lever 4: Cross-AZ Traffic Compression ($124K)     | |
| +-----------------------------------------+ +---------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - FinOps Certified | Validated by Chief Software Engineer       |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-finops-01",
  "type": "cloud-cost-finops-optimizer",
  "title": "Cloud FinOps & Infrastructure Unit Economics",
  "subtitle": "Multi-Cloud Spend Rationalization, CUD Coverage & Automated Waste Elimination",
  "kicker": "Cloud Economics",
  "reportingQuarter": "Q4-2026",
  "totalMonthlySpendUsd": 142500,
  "totalAnnualProjectedSavingsUsd": 384000,
  "overallDiscountCoveragePercent": 84.5,
  "finopsLead": "Alim Ul Karim",
  "leadRole": "Chief Software Engineer",
  "spendByProvider": [
    {
      "id": "prov-aws",
      "providerName": "Amazon Web Services",
      "cloudIcon": "aws",
      "monthlyRunRateUsd": 78400,
      "committedDiscountPercent": 88.0,
      "unitCostPerTxUsd": 0.00042,
      "monthlySavingsUsd": 21500,
      "isOptimized": true
    },
    {
      "id": "prov-gcp",
      "providerName": "Google Cloud Platform",
      "cloudIcon": "gcp",
      "monthlyRunRateUsd": 44100,
      "committedDiscountPercent": 82.0,
      "unitCostPerTxUsd": 0.00038,
      "monthlySavingsUsd": 12400,
      "isOptimized": true
    }
  ],
  "optimizationLevers": [
    {
      "id": "lev-01",
      "leverTitle": "Graviton4 Arm64 Microservice Replatforming",
      "category": "compute",
      "annualSavingsUsd": 120000,
      "effortTier": "immediate",
      "isAutomated": true,
      "isRealized": true,
      "hasAnomalousSpike": false
    }
  ]
}
```

---

### Archetype 04: `customer-sentiment-radar`

#### Intent & Boardroom Narrative

Presents a 6-axis customer sentiment radar diagram (Product Reliability, Usability, Enterprise Support, Value for Money, Security Assurance, Innovation Velocity), NPS/CSAT distribution, and verified verbatim quotes from Fortune 500 decision makers.

#### Modality & Step Dynamics

- **Layout Category:** Flat Sovereign Telemetry
- **Step Formula:** `stepCount = 1`
- **Focus Dynamic:** Single-stage sovereign canvas. Pure SVG live radar polygon with animated data coordinates and selectable DOM quote tiles.

#### TypeScript Interface Contract

```typescript
export interface RadarDimensionAxisItem {
  id: string;
  axisLabel: string;
  currentScore: number; // 0 to 100
  benchmarkScore: number; // 0 to 100
  historicalScore: number; // 0 to 100
  hasExceededBenchmark: boolean;
}

export interface CustomerVerbatimQuoteItem {
  id: string;
  quoteText: string;
  authorName: string;
  authorRole: string;
  companyName: string;
  sentimentTier: 'promoter' | 'neutral';
  isEnterpriseTier: boolean;
  isVerifiedCustomer: boolean;
}

export interface CustomerSentimentRadarSlideData extends BaseSlide {
  type: 'customer-sentiment-radar';
  netPromoterScore: number;
  customerSatisfactionScore: number;
  surveySampleSize: number;
  radarAxes: RadarDimensionAxisItem[];
  quotes: CustomerVerbatimQuoteItem[];
  executiveSponsor: string;
  sponsorRole: string;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Voice of Customer & Sentiment Radar Analysis   |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------+ +---------------------------------------------------+ |
| | 6-AXIS SVG RADAR CHART ZONE             | | SENTIMENT METRICS & VERBATIM COHORTS              | |
| | X: 80 -> 940 (860px), Y: 176 -> 956     | | X: 980 -> 1840 (860px), Y: 176 -> 956             | |
| | - Pure Live SVG Polygon with Glow Accent| | Top KPI Badges: NPS: +74 | CSAT: 96.2%            | |
| | - Axes: Reliability (98), Security (96),| |                                                   | |
| |   Usability (92), Support (94),         | | Enterprise Quote 1:                               | |
| |   Value (88), Innovation (95)           | | "The presentation engine eliminates hours of      | |
| | - Benchmark reference polygon overlay   | | manual styling with mathematical perfection."     | |
| | - Harmonic pulse coordinate nodes       | | - VP of Infrastructure, Fortune 50 Tech           | |
| |                                         | |                                                   | |
| |                                         | | Enterprise Quote 2:                               | |
| |                                         | | "Zero layout drift across all boardroom displays."| |
| +-----------------------------------------+ +---------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - Survey Sample: 1,420 Enterprise Accounts | Audited by CPO     |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-radar-01",
  "type": "customer-sentiment-radar",
  "title": "Voice of the Customer & Multidimensional Sentiment Radar",
  "subtitle": "Quantitative NPS/CSAT Telemetry & Enterprise Executive Verbatims",
  "kicker": "Customer Telemetry",
  "netPromoterScore": 74,
  "customerSatisfactionScore": 96.2,
  "surveySampleSize": 1420,
  "executiveSponsor": "Alim Ul Karim",
  "sponsorRole": "Chief Software Engineer",
  "radarAxes": [
    {
      "id": "ax-1",
      "axisLabel": "System Reliability",
      "currentScore": 98,
      "benchmarkScore": 85,
      "historicalScore": 92,
      "hasExceededBenchmark": true
    },
    {
      "id": "ax-2",
      "axisLabel": "Zero-Trust Security",
      "currentScore": 96,
      "benchmarkScore": 88,
      "historicalScore": 90,
      "hasExceededBenchmark": true
    },
    {
      "id": "ax-3",
      "axisLabel": "Typography & Polish",
      "currentScore": 99,
      "benchmarkScore": 80,
      "historicalScore": 88,
      "hasExceededBenchmark": true
    }
  ],
  "quotes": [
    {
      "id": "q-1",
      "quoteText": "White Presentation's live DOM scaling guarantees razor-sharp keynotes on our 8K boardroom displays with zero layout reflows.",
      "authorName": "Marcus Vance",
      "authorRole": "VP of Architecture",
      "companyName": "Apex Global Cloud",
      "sentimentTier": "promoter",
      "isEnterpriseTier": true,
      "isVerifiedCustomer": true
    }
  ]
}
```

---

### Archetype 05: `competitive-battlecard`

#### Intent & Boardroom Narrative

Presents competitive displacement analysis, comparing our enterprise architecture directly against incumbent solutions across feature parity, technological moats, total cost of ownership, and sales objection handling.

#### Modality & Step Dynamics

- **Layout Category:** Multi-step Interactive Workflow
- **Step Formula:** `stepCount = Math.max(slide.battlecardPillars.length, 1)`
- **Step Focus:** Steps sequentially through each strategic battlecard pillar (e.g. Architectural Moat -> Compliance Standards -> Total Cost -> Operational Velocity).

#### TypeScript Interface Contract

```typescript
export interface CompetitorParityItem {
  id: string;
  competitorName: string;
  marketSharePercent: number;
  parityScorePercent: number;
  weaknessSummary: string;
  hasCompetitiveAdvantage: boolean;
}

export interface ObjectionResponseItem {
  id: string;
  commonObjection: string;
  counterNarrative: string;
  evidentiaryProofPoint: string;
  isVerified: boolean;
}

export interface BattlecardPillarItem {
  id: string;
  pillarTitle: string;
  strategicMoatDescription: string;
  ourAdvantageScore: number;
  competitors: CompetitorParityItem[];
  objections: ObjectionResponseItem[];
  isActivePillar: boolean;
}

export interface CompetitiveBattlecardSlideData extends BaseSlide {
  type: 'competitive-battlecard';
  targetMarketSegment: string;
  winRatePercent: number;
  battlecardPillars: BattlecardPillarItem[];
  commercialLead: string;
  leadRole: string;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Competitive Battlecard & Market Differentiation |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | WIN RATE STRIP: Win Rate vs Legacy Platforms: 76.4% (+14.2% YoY) | Plane 1                     | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +----------------------------------+ +----------------------------------------------------------+ |
| | BATTLECARD PILLARS (STEP SELECT) | | DETAILED PILLAR DEEP DIVE & COUNTER-NARRATIVE            | |
| | X: 80 -> 600 (520px)             | | X: 640 -> 1840 (1200px)                                  | |
| | Pillar 1: Pure DOM Typography    | | Parity Comparison Table:                                 | |
| |   (Active Step - Plane 2 Halo)   | | - Feature: Zero Raster Artifacts (Us: 100% | Legacy: 20%) | |
| | Pillar 2: 4-Plane Spatial Depth  | | - Feature: 60/30/10 Balance (Us: Built-in | Legacy: None)| |
| | Pillar 3: Sub-pixel Clamping     | | Objection Handling Drawer:                               | |
| | Pillar 4: Total Cost of Ownership| | "Is custom DOM slower than bitmap canvases?"              | |
| |                                  | | Proof: Sub-pixel GPU transforms run at constant 120 FPS. | |
| +----------------------------------+ +----------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - Commercial Strategy Verified by Chief Software Engineer      |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-battle-01",
  "type": "competitive-battlecard",
  "title": "Competitive Battlecard: Enterprise Advantage",
  "subtitle": "Direct Architectural Comparison, Moat Verification & Objection Handling",
  "kicker": "Market Superiority",
  "targetMarketSegment": "Enterprise Presentation & Executive Telemetry",
  "winRatePercent": 76.4,
  "commercialLead": "Alim Ul Karim",
  "leadRole": "Chief Software Engineer",
  "battlecardPillars": [
    {
      "id": "pil-01",
      "pillarTitle": "Pure DOM Typography Architecture",
      "strategicMoatDescription": "Zero rasterization guarantees infinite DPI scaling, full screen-reader compliance, and live text copyability.",
      "ourAdvantageScore": 99.0,
      "isActivePillar": true,
      "competitors": [
        {
          "id": "comp-legacy-slide",
          "competitorName": "Legacy Slide Engines",
          "marketSharePercent": 48.0,
          "parityScorePercent": 24.0,
          "weaknessSummary": "Flattens typography into blurred canvas bitmaps; zero accessibility or DOM inspectability.",
          "hasCompetitiveAdvantage": true
        }
      ],
      "objections": [
        {
          "id": "obj-01",
          "commonObjection": "Does live DOM rendering introduce frame drops on older hardware?",
          "counterNarrative": "All animations are bound to CSS transform3d and will-change: transform, utilizing GPU compositor threads exclusively.",
          "evidentiaryProofPoint": "60fps verified on baseline 2020 Intel chipsets.",
          "isVerified": true
        }
      ]
    }
  ]
}
```

---

### Archetype 06: `launch-readiness-checklist`

#### Intent & Boardroom Narrative

Presents the executive go/no-go stage-gate release checklist, validating Architecture Review, InfoSec & Zero-Trust Signoff, Performance Benchmarks, SRE Canary Health, and Legal Regulatory Clearance.

#### Modality & Step Dynamics

- **Layout Category:** Multi-step Interactive Workflow
- **Step Formula:** `stepCount = Math.max(slide.stageGates.length, 1)`
- **Step Focus:** Steps through the 5 chronological stage gates. Blocker items are highlighted in vivid alert tokens with direct resolution owners.

#### TypeScript Interface Contract

```typescript
export interface ChecklistVerificationItem {
  id: string;
  itemDescription: string;
  verifiedBy: string;
  verifiedTimestamp: string;
  isPassed: boolean;
  isBlocker: boolean;
  hasAutomatedVerification: boolean;
}

export interface StageGateItem {
  id: string;
  gateIndex: number;
  gateName: string;
  gateOwner: string;
  ownerRole: string;
  verificationItems: ChecklistVerificationItem[];
  isPassed: boolean;
  isBlocked: boolean;
  isActiveGate: boolean;
}

export interface LaunchReadinessChecklistSlideData extends BaseSlide {
  type: 'launch-readiness-checklist';
  releaseCandidateTag: string;
  targetLaunchDate: string;
  isGoForLaunch: boolean;
  stageGates: StageGateItem[];
  releaseCaptain: string;
  captainRole: string;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Launch Readiness & Production Go/No-Go Gate    |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | RELEASE VERDICT BANNER: (80, 176) -> (1840, 246) [Height: 70px]                                | |
| | Release: v1.6.0-rc3 | Launch Date: 2026-10-15 | Status: GO FOR LAUNCH (100% Gates Passed)    | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | 5 HORIZONTAL STAGE GATES: Y: 266 -> 936 (670px)                                               | |
| | Gate 1: Architecture Signoff  | Gate 2: InfoSec Zero-Trust | Gate 3: Perf Benchmark (<12ms)  | |
| | Gate 4: SRE Canary Validation | Gate 5: Legal & ESG Clear  | Active Step elevated to Plane 2  | |
| | Detail pane renders nested automated verification tests, auditor credentials, and signoffs.   | |
| +-----------------------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - Signed by Alim Ul Karim, Chief Software Engineer              |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-launch-01",
  "type": "launch-readiness-checklist",
  "title": "Production Launch Readiness & Stage-Gate Clearance",
  "subtitle": "Multi-Phase Quality Assurance, Security Auditing & Release Candidate Verification",
  "kicker": "Release Governance",
  "releaseCandidateTag": "v1.6.0-rc3",
  "targetLaunchDate": "2026-10-15T00:00:00Z",
  "isGoForLaunch": true,
  "releaseCaptain": "Alim Ul Karim",
  "captainRole": "Chief Software Engineer",
  "stageGates": [
    {
      "id": "gate-01",
      "gateIndex": 1,
      "gateName": "Architecture & Clean Code",
      "gateOwner": "Alim Ul Karim",
      "ownerRole": "Chief Software Engineer",
      "isPassed": true,
      "isBlocked": false,
      "isActiveGate": true,
      "verificationItems": [
        {
          "id": "v-01",
          "itemDescription": "Strict <= 100 lines per file component decomposition verified.",
          "verifiedBy": "CI/CD Auto-linter",
          "verifiedTimestamp": "2026-10-03T12:00:00Z",
          "isPassed": true,
          "isBlocker": false,
          "hasAutomatedVerification": true
        }
      ]
    }
  ]
}
```

---

### Archetype 07: `developer-gateway-sandbox`

#### Intent & Boardroom Narrative

Presents modern developer platform architecture, API gateway routing, cryptographic authentication headers, rate limit quotas, payload schema transformation, and real-time mock responses.

#### Modality & Step Dynamics

- **Layout Category:** Multi-step Interactive Workflow
- **Step Formula:** `stepCount = Math.max(slide.gatewayStages.length, 1)`
- **Step Focus:** Steps through the 4 request execution phases: Auth Ingress -> Route Matcher -> Rate Limiter -> Upstream Dispatch.

#### TypeScript Interface Contract

```typescript
export interface GatewayHeaderParamItem {
  id: string;
  headerKey: string;
  headerValue: string;
  isRequired: boolean;
  isEncrypted: boolean;
}

export interface GatewayPipelineStageItem {
  id: string;
  stageName: string;
  latencyMs: number;
  statusBadge: string;
  isAuthorized: boolean;
  hasRateLimitHeadroom: boolean;
  isActiveStage: boolean;
}

export interface DeveloperGatewaySandboxSlideData extends BaseSlide {
  type: 'developer-gateway-sandbox';
  httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpointRoute: string;
  baseHost: string;
  gatewayStages: GatewayPipelineStageItem[];
  requestHeaders: GatewayHeaderParamItem[];
  requestBodyJson: string;
  responseStatus: number;
  responseBodyJson: string;
  isMockEnabled: boolean;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - API Gateway Architecture & Sandbox Studio       |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | ROUTE BAR: [POST] https://api.enterprise.internal/v1/slides/render | Latency: 14ms | Plane 1  | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +----------------------------------+ +----------------------------------------------------------+ |
| | PIPELINE STAGES (STEPPED)        | | INTERACTIVE PAYLOAD & SCHEMA DRAWER                      | |
| | Stage 1: Mutual TLS & JWT Auth   | | Request Schema & Monospace Code Pane                     | |
| | Stage 2: Route Regex Matching    | | { "deckId": "deck-2026", "theme": "true-dark" }          | |
| | Stage 3: Token Bucket Rate Limit | | -------------------------------------------------------- | |
| | Stage 4: Upstream RPC Dispatch   | | Response [200 OK]: { "isRendered": true, "fps": 120 }    | |
| +----------------------------------+ +----------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - Edge Mesh Protected | Rate Limit: 10,000 req/sec              |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-gw-01",
  "type": "developer-gateway-sandbox",
  "title": "Enterprise API Gateway Architecture & Execution Sandbox",
  "subtitle": "Edge Route Ingress, Cryptographic Token Verification & Low-Latency Dispatch",
  "kicker": "Developer Platform",
  "httpMethod": "POST",
  "endpointRoute": "/v1/presentations/render-stage",
  "baseHost": "https://gateway.enterprise.internal",
  "responseStatus": 200,
  "isMockEnabled": true,
  "requestHeaders": [
    {
      "id": "h-01",
      "headerKey": "Authorization",
      "headerValue": "Bearer sec-token-mlkem768-signed",
      "isRequired": true,
      "isEncrypted": true
    }
  ],
  "requestBodyJson": "{\n  \"slideId\": \"slide-finops-01\",\n  \"viewport\": { \"width\": 1920, \"height\": 1080 },\n  \"isPureDom\": true\n}",
  "responseBodyJson": "{\n  \"status\": \"success\",\n  \"renderLatencyMs\": 4.2,\n  \"isLayoutDriftFree\": true,\n  \"fps\": 120\n}",
  "gatewayStages": [
    {
      "id": "stg-01",
      "stageName": "mTLS & Token Ingress",
      "latencyMs": 1.2,
      "statusBadge": "AUTHENTICATED",
      "isAuthorized": true,
      "hasRateLimitHeadroom": true,
      "isActiveStage": true
    }
  ]
}
```

---

### Archetype 08: `rag-pipeline-topology`

#### Intent & Boardroom Narrative

Presents the enterprise Retrieval-Augmented Generation (RAG) topological DAG, highlighting chunking, dense vector embedding, hybrid BM25 search, cross-encoder reranking, and LLM context window assembly.

#### Modality & Step Dynamics

- **Layout Category:** Multi-step Interactive Workflow
- **Step Formula:** `stepCount = Math.max(slide.pipelineStages.length, 1)`
- **Step Focus:** Traverses the 5 pipeline nodes in topological execution order with glowing animated SVG connect rails.

#### TypeScript Interface Contract

```typescript
export interface VectorIndexMetricItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  hasTargetReached: boolean;
}

export interface RagPipelineStageItem {
  id: string;
  stageIndex: number;
  stageName: string;
  modelIdentifier: string;
  latencyMs: number;
  throughputDocsSec: number;
  isDenseSearchEnabled: boolean;
  hasReRankerApplied: boolean;
  isActiveStage: boolean;
}

export interface RagPipelineTopologySlideData extends BaseSlide {
  type: 'rag-pipeline-topology';
  corpusDocumentCount: number;
  vectorIndexName: string;
  contextWindowBudgetTokens: number;
  pipelineStages: RagPipelineStageItem[];
  indexMetrics: VectorIndexMetricItem[];
  leadArchitect: string;
  leadRole: string;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Enterprise RAG Pipeline Topology & Latency DAG  |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| [STAGE 1: INGESTION] -> [STAGE 2: CHUNKING] -> [STAGE 3: VECTOR DB] -> [STAGE 4: RERANKER] -> [LLM]|
| Node X: 80 -> 380    | Node X: 430 -> 730   | Node X: 780 -> 1080  | Node X: 1130 -> 1430| Node X: 1480|
| SVG Connecting Directed Edges with Animated Stroke Dash Pulse (Keyframe: dagNodeTraverse)         |
| Active Stage Card elevated to Plane 2 with Luminescent Accent Halo Ring                           |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | TELEMETRY PANEL: Y: 560 -> 936 [Height: 376px]                                                | |
| | Left: Chunking Distribution & Cosine Similarity | Right: Token Window Allocation (128K Budget)| |
| +-----------------------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - End-to-End P99 Latency: 142ms | Precision@5: 94.6%            |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-rag-01",
  "type": "rag-pipeline-topology",
  "title": "Enterprise RAG Pipeline Architecture & Semantic Search DAG",
  "subtitle": "Hybrid Vector Ingestion, Cross-Encoder Reranking & Sub-Second Latency Bounds",
  "kicker": "Generative AI",
  "corpusDocumentCount": 12500000,
  "vectorIndexName": "enterprise-corpus-v4-hsnw",
  "contextWindowBudgetTokens": 128000,
  "leadArchitect": "Alim Ul Karim",
  "leadRole": "Chief Software Engineer",
  "indexMetrics": [
    {
      "id": "im-01",
      "metricLabel": "Precision@5",
      "metricValue": "94.8%",
      "hasTargetReached": true
    },
    {
      "id": "im-02",
      "metricLabel": "Cross-Encoder Latency",
      "metricValue": "18.4ms",
      "hasTargetReached": true
    }
  ],
  "pipelineStages": [
    {
      "id": "rag-stg-01",
      "stageIndex": 1,
      "stageName": "Hybrid Semantic Retrieval",
      "modelIdentifier": "text-embedding-3-large",
      "latencyMs": 24.5,
      "throughputDocsSec": 4500,
      "isDenseSearchEnabled": true,
      "hasReRankerApplied": false,
      "isActiveStage": true
    }
  ]
}
```

---

### Archetype 09: `soc-incident-war-room`

#### Intent & Boardroom Narrative

Presents Security Operations Center (SOC) real-time incident response telemetry, CVSS 3.1 severity scores, MITRE ATT&CK kill chain vectors, automated containment playbooks, and mitigation timelines.

#### Modality & Step Dynamics

- **Layout Category:** Multi-step Interactive Workflow
- **Step Formula:** `stepCount = Math.max(slide.incidentPhases.length, 1)`
- **Step Focus:** Steps sequentially through the 4 incident triage phases: Detection -> Containment -> Eradication -> Postmortem Hardening.

#### TypeScript Interface Contract

```typescript
export interface KillChainVectorItem {
  id: string;
  techniqueCode: string;
  techniqueName: string;
  tacticPhase: string;
  detectionSource: string;
  isMitigated: boolean;
}

export interface ContainmentActionItem {
  id: string;
  actionTitle: string;
  executionTimestamp: string;
  isAutomated: boolean;
  isCompleted: boolean;
}

export interface SocIncidentPhaseItem {
  id: string;
  phaseIndex: number;
  phaseName: string;
  durationMinutes: number;
  actions: ContainmentActionItem[];
  isContained: boolean;
  isActivePhase: boolean;
}

export interface SocIncidentWarRoomSlideData extends BaseSlide {
  type: 'soc-incident-war-room';
  incidentIdentifier: string;
  cvssSeverityScore: number;
  severityGrade: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  incidentPhases: SocIncidentPhaseItem[];
  attackVectors: KillChainVectorItem[];
  incidentCommander: string;
  commanderRole: string;
  isQuarantineActive: boolean;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - SOC Incident Command & Threat Triage War Room    |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | SEVERITY HERO BAR: INCIDENT SEC-2026-902 | CVSS 9.8 CRITICAL | QUARANTINE: ACTIVE | Plane 1   | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-----------------------------------------+ +---------------------------------------------------+ |
| | 4-PHASE TRIAGE PIPELINE (STEPPED)       | | MITRE ATT&CK KILL CHAIN & CONTAINMENT LOG         | |
| | Phase 1: Anomaly Ingestion (12m)        | | - T1078.004: Compromised Cloud Credentials        | |
| | Phase 2: Zero-Trust Quarantine (Active) | | - Action: Automated Session Invalidation (Done)   | |
| | Phase 3: Binary Hash Revocation (Queued)| | - Action: VPC Security Group Egress Block (Done)  | |
| | Phase 4: Postmortem Hardening (Future)  | | - Action: Cryptographic Secret Rotation (In Prog) | |
| +-----------------------------------------+ +---------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - MTTD: 4.2 min | MTTR Projected: 18 min | Commander: Chief S/E|
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-soc-01",
  "type": "soc-incident-war-room",
  "title": "SOC Incident War Room: Rapid Containment",
  "subtitle": "Real-time Threat Neutralization, MITRE ATT&CK Defense & Zero-Trust Quarantine",
  "kicker": "Cyber Defense",
  "incidentIdentifier": "INC-2026-092",
  "cvssSeverityScore": 9.8,
  "severityGrade": "CRITICAL",
  "incidentCommander": "Alim Ul Karim",
  "commanderRole": "Chief Software Engineer",
  "isQuarantineActive": true,
  "attackVectors": [
    {
      "id": "vec-01",
      "techniqueCode": "T1078.004",
      "techniqueName": "Valid Cloud Accounts",
      "tacticPhase": "Initial Access",
      "detectionSource": "CloudTrail Anomaly Guard",
      "isMitigated": true
    }
  ],
  "incidentPhases": [
    {
      "id": "soc-ph-01",
      "phaseIndex": 1,
      "phaseName": "Immediate Quarantine & Containment",
      "durationMinutes": 8,
      "isContained": true,
      "isActivePhase": true,
      "actions": [
        {
          "id": "act-01",
          "actionTitle": "Automated Revocation of Ephemeral IAM Tokens",
          "executionTimestamp": "2026-10-03T12:05:00Z",
          "isAutomated": true,
          "isCompleted": true
        }
      ]
    }
  ]
}
```

---

### Archetype 10: `merkle-tree-state-ledger`

#### Intent & Boardroom Narrative

Presents hierarchical cryptographic state ledger proofs, illustrating leaf transactions, intermediate branch hash calculations, Merkle root verification, and mathematical non-repudiation.

#### Modality & Step Dynamics

- **Layout Category:** Multi-step Interactive Workflow
- **Step Formula:** `stepCount = Math.max(slide.verificationSteps.length, 1)`
- **Step Focus:** Steps from individual leaf nodes up the binary tree to the root state hash, verifying cryptographic sibling inclusion.

#### TypeScript Interface Contract

```typescript
export interface MerkleLeafNodeItem {
  id: string;
  leafIndex: number;
  payloadHash: string;
  transactionData: string;
  isProofVerified: boolean;
}

export interface MerkleProofStepItem {
  id: string;
  stepIndex: number;
  levelName: string;
  leftHash: string;
  rightHash: string;
  combinedHash: string;
  isVerified: boolean;
  isActiveStep: boolean;
}

export interface MerkleTreeStateLedgerSlideData extends BaseSlide {
  type: 'merkle-tree-state-ledger';
  rootStateHash: string;
  blockNumber: number;
  algorithmName: string;
  verificationSteps: MerkleProofStepItem[];
  leafNodes: MerkleLeafNodeItem[];
  auditedBy: string;
  auditorRole: string;
  isRootFinalized: boolean;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Cryptographic Merkle Tree & State Ledger Proof   |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
|                            [MERKLE ROOT HASH: 0x8f2a...c014] (Plane 3)                            |
|                                           /      \                                                |
|                   [BRANCH HASH L1-A]              [BRANCH HASH L1-B]                              |
|                         /    \                          /    \                                    |
|                   [L0-A]      [L0-B]              [L0-C]      [L0-D]                              |
|                 (Tx 1)       (Tx 2)             (Tx 3)       (Tx 4)                               |
|                                                                                                   |
| Stepwise Path Illumination: Active proof path glows in vivid emerald / indigo accent token         |
| Bottom: Monospace cryptographic verification hash table and inclusion audit signoff               |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - Zero-Knowledge Verified | Block #14,892,100 | SHA-256 Valid   |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-merkle-01",
  "type": "merkle-tree-state-ledger",
  "title": "Cryptographic State Ledger & Merkle Proof Inclusion",
  "subtitle": "Hierarchical Hash Tree Validation, Tamper-Evident Blocks & Audit Assurance",
  "kicker": "Cryptographic Assurance",
  "rootStateHash": "0x8f2a41d99b0c27e8a93ef01824ab11993b4a",
  "blockNumber": 14892100,
  "algorithmName": "SHA-256 Merkle-Tree-Verify",
  "auditedBy": "Alim Ul Karim",
  "auditorRole": "Chief Software Engineer",
  "isRootFinalized": true,
  "leafNodes": [
    {
      "id": "leaf-01",
      "leafIndex": 0,
      "payloadHash": "0x41c8...a1",
      "transactionData": "State Mutation: Upgrade Presentation Engine to v1.6.0",
      "isProofVerified": true
    }
  ],
  "verificationSteps": [
    {
      "id": "v-step-01",
      "stepIndex": 1,
      "levelName": "Root Verification",
      "leftHash": "0x41c8...a1",
      "rightHash": "0x98f2...b2",
      "combinedHash": "0x8f2a41d99b0c27e8a93ef01824ab11993b4a",
      "isVerified": true,
      "isActiveStep": true
    }
  ]
}
```

---

### Archetype 11: `investor-cap-table-waterfall`

#### Intent & Boardroom Narrative

Presents venture capital equity structure, preferred vs common stock liquidation preferences, priced funding rounds (Seed, Series A-D), option pool headroom, and exit proceeds waterfall distribution.

#### Modality & Step Dynamics

- **Layout Category:** Flat Sovereign Telemetry
- **Step Formula:** `stepCount = 1`
- **Focus Dynamic:** Invariant financial sovereign overview with interactive exit valuation slider and tranche inspection.

#### TypeScript Interface Contract

```typescript
export interface ShareholderClassItem {
  id: string;
  shareClassName: string;
  ownershipPercent: number;
  shareCount: number;
  liquidationPreferenceMultiple: number;
  isPreferredShare: boolean;
  hasLiquidationCap: boolean;
}

export interface LiquidationWaterfallTierItem {
  id: string;
  exitValuationUsd: number;
  proceedsUsd: number;
  payoutRank: number;
  isFullyDiluted: boolean;
}

export interface InvestorCapTableWaterfallSlideData extends BaseSlide {
  type: 'investor-cap-table-waterfall';
  currentValuationUsd: number;
  totalSharesOutstanding: number;
  unallocatedOptionPoolPercent: number;
  shareClasses: ShareholderClassItem[];
  waterfallTiers: LiquidationWaterfallTierItem[];
  chiefArchitect: string;
  architectRole: string;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Investor Cap Table & Liquidation Waterfall      |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------+ +---------------------------------------------------+ |
| | EQUITY TRANCHES (CAP TABLE)             | | EXIT VALUATION WATERFALL MODEL ($100M - $1B)      | |
| | - Series B Preferred: 28% ($70M Pref)   | | Liquidation Priority Bar Chart:                   | |
| | - Series A Preferred: 22% ($25M Pref)   | | Tier 1: 1.0x Non-Participating Preferred Returns  | |
| | - Founders Common: 38%                  | | Tier 2: Option Pool & Management Carve-out        | |
| | - Employee Option Pool: 12%             | | Tier 3: Common Equity Pro-Rata Distribution       | |
| | Detailed Ownership & Share Count Table  | | Dynamic Waterfall Graph across Exit Scenarios     | |
| +-----------------------------------------+ +---------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - Fully Diluted Basis | Verified by Chief Software Engineer     |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-cap-01",
  "type": "investor-cap-table-waterfall",
  "title": "Capitalization Table & Liquidation Waterfall",
  "subtitle": "Institutional Equity Tranches, Seniority Rights & Multi-Scenario Proceeds Distribution",
  "kicker": "Venture Finance",
  "currentValuationUsd": 250000000,
  "totalSharesOutstanding": 50000000,
  "unallocatedOptionPoolPercent": 12.5,
  "chiefArchitect": "Alim Ul Karim",
  "architectRole": "Chief Software Engineer",
  "shareClasses": [
    {
      "id": "sc-01",
      "shareClassName": "Series B Preferred",
      "ownershipPercent": 28.0,
      "shareCount": 14000000,
      "liquidationPreferenceMultiple": 1.0,
      "isPreferredShare": true,
      "hasLiquidationCap": true
    },
    {
      "id": "sc-02",
      "shareClassName": "Founders Common",
      "ownershipPercent": 42.0,
      "shareCount": 21000000,
      "liquidationPreferenceMultiple": 0.0,
      "isPreferredShare": false,
      "hasLiquidationCap": false
    }
  ],
  "waterfallTiers": [
    {
      "id": "tier-01",
      "exitValuationUsd": 500000000,
      "proceedsUsd": 140000000,
      "payoutRank": 1,
      "isFullyDiluted": true
    }
  ]
}
```

---

### Archetype 12: `realtime-event-stream-fabric`

#### Intent & Boardroom Narrative

Presents enterprise real-time event streaming topology (Kafka/Pulsar clusters), topic partition distribution, events per second (EPS) throughput, consumer group lag, and dead-letter queue isolation.

#### Modality & Step Dynamics

- **Layout Category:** Flat Sovereign Telemetry
- **Step Formula:** `stepCount = 1`
- **Focus Dynamic:** Invariant streaming telemetry with live data pulse animations and partition health indicators.

#### TypeScript Interface Contract

```typescript
export interface EventTopicPartitionItem {
  id: string;
  topicName: string;
  partitionCount: number;
  eventsPerSecond: number;
  replicationFactor: number;
  isHealthy: boolean;
  isPartitionBalanced: boolean;
}

export interface ConsumerGroupLagItem {
  id: string;
  groupName: string;
  targetTopic: string;
  lagOffsets: number;
  commitLatencyMs: number;
  hasLagAlert: boolean;
}

export interface RealtimeEventStreamFabricSlideData extends BaseSlide {
  type: 'realtime-event-stream-fabric';
  clusterRegion: string;
  aggregateThroughputEps: number;
  totalDeadLetterQueueEvents: number;
  topics: EventTopicPartitionItem[];
  consumerGroups: ConsumerGroupLagItem[];
  principalEngineer: string;
  engineerRole: string;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Real-time Event Streaming & Partition Fabric    |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | AGGREGATE FABRIC METRICS: 2.4M Events/Sec | 120 Partitions | P99 Ingress: 3.1ms | DLQ: 0      | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-----------------------------------------+ +---------------------------------------------------+ |
| | PARTITION TOPOLOGY MATRIX               | | CONSUMER GROUP LAG TELEMETRY                      | |
| | Topic: presentations.telemetry (32 P)   | | Group: sse-edge-broadcaster (Lag: 0 ms)           | |
| | Topic: presentation.mutations (16 P)    | | Group: clickhouse-analytics-drain (Lag: 42 ms)    | |
| | Topic: audit.security-ledger (8 P)      | | Group: state-snapshot-compactor (Lag: 12 ms)      | |
| | Visual animated data pulse lines        | | Alert badges if lag > 500 ms                      | |
| +-----------------------------------------+ +---------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - TLS 1.3 End-to-End Encrypted | Validated by Chief Software Eng|
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-stream-01",
  "type": "realtime-event-stream-fabric",
  "title": "Real-Time Event Streaming Topology & Partition Fabric",
  "subtitle": "High-Throughput Pub/Sub Message Bus, Zero Consumer Lag & Fault Isolation",
  "kicker": "Streaming Architecture",
  "clusterRegion": "Global Anycast Multi-Region",
  "aggregateThroughputEps": 2400000,
  "totalDeadLetterQueueEvents": 0,
  "principalEngineer": "Alim Ul Karim",
  "engineerRole": "Chief Software Engineer",
  "topics": [
    {
      "id": "top-01",
      "topicName": "presentation.events.v1",
      "partitionCount": 32,
      "eventsPerSecond": 1200000,
      "replicationFactor": 3,
      "isHealthy": true,
      "isPartitionBalanced": true
    }
  ],
  "consumerGroups": [
    {
      "id": "cg-01",
      "groupName": "live-websocket-fanout",
      "targetTopic": "presentation.events.v1",
      "lagOffsets": 0,
      "commitLatencyMs": 2.4,
      "hasLagAlert": false
    }
  ]
}
```

---

### Archetype 13: `supply-chain-risk-matrix`

#### Intent & Boardroom Narrative

Presents enterprise multi-tier vendor dependency risk modeling, Tier 1/2/3 supplier vulnerability scores, geopolitical impact heat maps, buffer reserves, and single-point-of-failure (SPOF) mitigation.

#### Modality & Step Dynamics

- **Layout Category:** Flat Sovereign Telemetry
- **Step Formula:** `stepCount = 1`
- **Focus Dynamic:** Invariant risk dashboard with interactive vendor drill-downs and single-point-of-failure alert indicators.

#### TypeScript Interface Contract

```typescript
export interface VendorDependencyItem {
  id: string;
  vendorName: string;
  tierLevel: 1 | 2 | 3;
  componentProvided: string;
  riskScorePercent: number; // 0 to 100
  leadTimeWeeks: number;
  isCriticalVendor: boolean;
  hasSinglePointOfFailure: boolean;
}

export interface GeopoliticalRiskFactorItem {
  id: string;
  regionName: string;
  riskCategory: string;
  impactScore: number;
  mitigationStrategy: string;
  isMitigationBufferActive: boolean;
}

export interface SupplyChainRiskMatrixSlideData extends BaseSlide {
  type: 'supply-chain-risk-matrix';
  overallSupplyResilienceScore: number;
  totalMonitoredSuppliers: number;
  criticalSpofCount: number;
  vendors: VendorDependencyItem[];
  riskFactors: GeopoliticalRiskFactorItem[];
  riskDirector: string;
  directorRole: string;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Supply Chain Vulnerability & Multi-Tier Resilience |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | SUPPLY RESILIENCE BANNER: Resilience Score: 94.2% | Monitored: 84 | SPOF Count: 0 (Eliminated) | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-----------------------------------------+ +---------------------------------------------------+ |
| | TIER 1/2/3 VENDOR DEPENDENCIES          | | GEOPOLITICAL RISK & BUFFER MITIGATION             | |
| | - Cloud Foundry (Tier 1): 99.8% Safe    | | - Region: North America Data Hubs (Active Buffer) | |
| | - Silicon Fab Partners (Tier 2): Dual   | | - Region: European Sovereign Cloud (Compliant)    | |
| | - DNS/Anycast Transit (Tier 1): Triple  | | - Region: APAC Edge Nodes (Redundant)             | |
| | Visual Risk Indicator Rings             | | Secondary Sourcing Playbooks & Lead Times         | |
| +-----------------------------------------+ +---------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - ISO 28000 Certified | Verified by Chief Software Engineer      |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-supply-01",
  "type": "supply-chain-risk-matrix",
  "title": "Global Supply Chain Resilience & Dependency Risk Matrix",
  "subtitle": "Tier 1-3 Supplier Governance, Single-Point-of-Failure Elimination & Buffer Assurance",
  "kicker": "Operations Resilience",
  "overallSupplyResilienceScore": 94.2,
  "totalMonitoredSuppliers": 84,
  "criticalSpofCount": 0,
  "riskDirector": "Alim Ul Karim",
  "directorRole": "Chief Software Engineer",
  "vendors": [
    {
      "id": "ven-01",
      "vendorName": "Sovereign Silicon Semiconductor",
      "tierLevel": 1,
      "componentProvided": "Hardware Security Modules",
      "riskScorePercent": 12.0,
      "leadTimeWeeks": 4,
      "isCriticalVendor": true,
      "hasSinglePointOfFailure": false
    }
  ],
  "riskFactors": [
    {
      "id": "rf-01",
      "regionName": "Western Europe",
      "riskCategory": "Regulatory Data Sovereignty",
      "impactScore": 15,
      "mitigationStrategy": "All customer data resides strictly on in-jurisdiction servers.",
      "isMitigationBufferActive": true
    }
  ]
}
```

---

### Archetype 14: `talent-competency-radar`

#### Intent & Boardroom Narrative

Presents technical career ladders and engineering competency progressions across seniority levels (L4 Software Engineer to L8 Distinguished Engineer), evaluating System Architecture, Technical Craftsmanship, Leadership & Mentorship, Operational Velocity, and Business Impact.

#### Modality & Step Dynamics

- **Layout Category:** Multi-step Interactive Workflow
- **Step Formula:** `stepCount = Math.max(slide.levelMilestones.length, 1)`
- **Step Focus:** Steps through career levels L4 to L8, morphing the radar benchmark polygon and illuminating promotional criteria.

#### TypeScript Interface Contract

```typescript
export interface CompetencyAxisItem {
  id: string;
  axisName: string;
  requiredScorePercent: number; // 0 to 100
  evaluatedScorePercent: number; // 0 to 100
  isBenchmarkMet: boolean;
}

export interface EngineeringLevelMilestoneItem {
  id: string;
  levelCode: string; // "L4", "L5", "L6", "L7", "L8"
  levelTitle: string;
  scopeSummary: string;
  competencyAxes: CompetencyAxisItem[];
  isCertifiedCompetency: boolean;
  isActiveLevel: boolean;
}

export interface TalentCompetencyRadarSlideData extends BaseSlide {
  type: 'talent-competency-radar';
  frameworkName: string;
  targetRoleTrack: string;
  levelMilestones: EngineeringLevelMilestoneItem[];
  evaluatorName: string;
  evaluatorRole: string;
  hasPromotionalRecommendation: boolean;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Engineering Competency Matrix & Technical Ladder|
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------+ +---------------------------------------------------+ |
| | LEVEL SELECTOR & SCOPE SUMMARY          | | 5-AXIS TALENT COMPETENCY RADAR                    | |
| | L4: Software Engineer                   | | Pure Live SVG Radar Polygon                       | |
| | L5: Senior Engineer                     | | - System Architecture (95)                        | |
| | L6: Staff Engineer                      | | - Technical Craftsmanship (98)                    | |
| | L7: Principal Engineer                  | | - Mentorship & Leadership (90)                    | |
| | L8: Distinguished / Chief Engineer      | | - Operational Velocity (92)                       | |
| |   (Active Step - Plane 2 Elevation)     | | - Business Impact (96)                            | |
| +-----------------------------------------+ +---------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - Framework Champion: Alim Ul Karim, Chief Software Engineer    |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-talent-01",
  "type": "talent-competency-radar",
  "title": "Engineering Competency Framework & Executive Seniority Ladder",
  "subtitle": "Multidimensional Technical Evaluation from Software Engineer to Chief Engineer",
  "kicker": "Talent Architecture",
  "frameworkName": "Universal Engineering Ladder v4",
  "targetRoleTrack": "Systems & Presentation Architecture",
  "evaluatorName": "Alim Ul Karim",
  "evaluatorRole": "Chief Software Engineer",
  "hasPromotionalRecommendation": true,
  "levelMilestones": [
    {
      "id": "lvl-l8",
      "levelCode": "L8",
      "levelTitle": "Chief Software Engineer",
      "scopeSummary": "Defines enterprise presentation engines, zero-drift architectures, and distributed streaming fabrics across all corporate entities.",
      "isCertifiedCompetency": true,
      "isActiveLevel": true,
      "competencyAxes": [
        {
          "id": "tax-01",
          "axisName": "System Architecture",
          "requiredScorePercent": 95,
          "evaluatedScorePercent": 99,
          "isBenchmarkMet": true
        },
        {
          "id": "tax-02",
          "axisName": "Technical Craftsmanship",
          "requiredScorePercent": 95,
          "evaluatedScorePercent": 100,
          "isBenchmarkMet": true
        }
      ]
    }
  ]
}
```

---

### Archetype 15: `sustainability-esg-scorecard`

#### Intent & Boardroom Narrative

Presents corporate Environmental, Social, and Governance (ESG) sustainability performance, Scope 1, 2, and 3 greenhouse gas emissions telemetry, clean renewable Power Purchase Agreement (PPA) coverage, and regulatory compliance signoffs.

#### Modality & Step Dynamics

- **Layout Category:** Flat Sovereign Telemetry
- **Step Formula:** `stepCount = 1`
- **Focus Dynamic:** Invariant executive ESG scorecard with interactive emission breakdown and verified offset certificates.

#### TypeScript Interface Contract

```typescript
export interface EsgEmissionsScopeItem {
  id: string;
  scopeTier: 'Scope 1' | 'Scope 2' | 'Scope 3';
  emissionsMetricTonsCo2e: number;
  yearOverYearReductionPercent: number;
  offsetPercentage: number;
  isNetZeroAligned: boolean;
}

export interface RenewableEnergyPpaItem {
  id: string;
  contractName: string;
  energySource: 'solar' | 'wind' | 'hydro' | 'geothermal';
  capacityMegawatts: number;
  isPpaActive: boolean;
  isVerifiedOffset: boolean;
}

export interface SustainabilityEsgScorecardSlideData extends BaseSlide {
  type: 'sustainability-esg-scorecard';
  reportingFiscalYear: string;
  totalCarbonFootprintMetricTons: number;
  renewableEnergyPercent: number;
  esgRatingGrade: string; // e.g. "AAA", "AA"
  scopes: EsgEmissionsScopeItem[];
  cleanEnergyContracts: RenewableEnergyPpaItem[];
  sustainabilityLead: string;
  leadRole: string;
  hasRegulatorySignoff: boolean;
}
```

#### Coordinate Budget & ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| HEADER: (80, 48) -> (1840, 152) [Height: 104px] - Corporate Sustainability & ESG Carbon Scorecard  |
+---------------------------------------------------------------------------------------------------+
| CONTENT STAGE: (80, 176) -> (1840, 956) [Height: 780px]                                           |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | ESG SUMMARY KPI STRIP: Rating: AAA | Renewable PPA: 98.4% | Net Zero Goal: 2030 (On Track)    | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-----------------------------------------+ +---------------------------------------------------+ |
| | GREENHOUSE GAS EMISSIONS SCOPES         | | RENEWABLE CLEAN ENERGY PPA ASSETS                 | |
| | Scope 1 (Direct Facilities): -34% YoY   | | - Solar Farm PPA Alpha (120 MW, Active)           | |
| | Scope 2 (Purchased Power): -58% YoY     | | - Offshore Wind PPA Beta (85 MW, Active)          | |
| | Scope 3 (Supply Chain): -26% YoY        | | - Geothermal Base Load (40 MW, Active)            | |
| | Visual Progress Bars & Offset Ratios    | | Regulatory Signoff: Verified by Audit Authority   | |
| +-----------------------------------------+ +---------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
| FOOTER: (80, 976) -> (1840, 1032) - GHG Protocol Certified | Chief Software Engineer Verified     |
+---------------------------------------------------------------------------------------------------+
```

#### Verified Production JSON Fixture

```json
{
  "id": "slide-esg-01",
  "type": "sustainability-esg-scorecard",
  "title": "Corporate Sustainability & Carbon Neutrality Scorecard",
  "subtitle": "Scope 1-3 Greenhouse Gas Telemetry, Renewable Energy PPAs & Net-Zero 2030 Alignment",
  "kicker": "ESG Governance",
  "reportingFiscalYear": "FY2026",
  "totalCarbonFootprintMetricTons": 4200,
  "renewableEnergyPercent": 98.4,
  "esgRatingGrade": "AAA",
  "sustainabilityLead": "Alim Ul Karim",
  "leadRole": "Chief Software Engineer",
  "hasRegulatorySignoff": true,
  "scopes": [
    {
      "id": "sc-01",
      "scopeTier": "Scope 1",
      "emissionsMetricTonsCo2e": 480,
      "yearOverYearReductionPercent": 34.2,
      "offsetPercentage": 100.0,
      "isNetZeroAligned": true
    },
    {
      "id": "sc-02",
      "scopeTier": "Scope 2",
      "emissionsMetricTonsCo2e": 920,
      "yearOverYearReductionPercent": 58.0,
      "offsetPercentage": 100.0,
      "isNetZeroAligned": true
    },
    {
      "id": "sc-03",
      "scopeTier": "Scope 3",
      "emissionsMetricTonsCo2e": 2800,
      "yearOverYearReductionPercent": 26.5,
      "offsetPercentage": 92.0,
      "isNetZeroAligned": true
    }
  ],
  "cleanEnergyContracts": [
    {
      "id": "ppa-01",
      "contractName": "Solar Horizon PPA I",
      "energySource": "solar",
      "capacityMegawatts": 120,
      "isPpaActive": true,
      "isVerifiedOffset": true
    }
  ]
}
```

---

## 6. Mathematical Formulas for Coordinate Calculations

Component renderers must calculate item positions using standard algebraic expressions:

### 2-Column Horizontal Split

$$\text{Width}_{\text{col}} = \frac{W_{\text{stage}} - \text{Gap}}{2} = \frac{1760 - 40}{2} = 860\text{px}$$
$$\text{Col}_0.x = 80\text{px}, \quad \text{Col}_1.x = 80 + 860 + 40 = 980\text{px}$$

### 3-Column Bento Distribution

$$\text{Width}_{\text{col}} = \frac{W_{\text{stage}} - 2 \cdot \text{Gap}}{3} = \frac{1760 - 2 \cdot 40}{3} = \frac{1680}{3} = 560\text{px}$$
$$\text{Col}_k.x = 80 + k \cdot (560 + 40)\text{px}, \quad k \in \{0, 1, 2\}$$

### 4-Column Grid Distribution

$$\text{Width}_{\text{col}} = \frac{W_{\text{stage}} - 3 \cdot \text{Gap}}{4} = \frac{1760 - 3 \cdot 40}{4} = \frac{1640}{4} = 410\text{px}$$
$$\text{Col}_k.x = 80 + k \cdot (410 + 40)\text{px}, \quad k \in \{0, 1, 2, 3\}$$

---

## 7. Verification Gates for Data Contracts

To ensure total specification compliance before downstream implementation:
1. **Positive Boolean Verification:** Every property of type boolean MUST begin with `is*`, `has*`, `can*`, or `should*`. Zero occurrences of `isDisabled`, `isHidden`, `isNotActive`, or `unverified`.
2. **Persona Standardization:** Any persona title for Alim Ul Karim MUST be exactly `"Chief Software Engineer"`. Zero occurrences of `"CEO"` or `"Founder"`.
3. **Step Count Authenticity:** Every multi-step archetype must dynamically compute `stepCount` using its array length formula, preventing phantom static step counts.
4. **Coordinate Budget Integrity:** No container may exceed $X_{\max} = 1840\text{px}$ or $Y_{\max} = 1032\text{px}$.
