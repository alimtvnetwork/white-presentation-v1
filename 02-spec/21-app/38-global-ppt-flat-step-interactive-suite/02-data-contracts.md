# 02-Data Contracts: Canonical TypeScript Interfaces, Production Schemas & JSON Fixtures for Module 38

> **Specification Identifier:** `02-spec/21-app/38-global-ppt-flat-step-interactive-suite/02-data-contracts.md`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.9.0`  
> **Author:** Spec Subagent 01 (Worker 1)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-03  
> **Domain:** Canonical TypeScript Interfaces, Production Schemas, $1920 \times 1080$ Coordinate Budgets, Step Count Calculation Engine, 100% Affirmative Positive Booleans, ASCII Wireframes & Production JSON Fixtures for Archetypes 1 to 8  

---

## 1. Architectural Foundations & Base Contracts

Every slide archetype specified in this document extends the foundational `BaseSlide` contract. All archetypes strictly uphold five architectural mandates:

1. **Absolute $1920 \times 1080$ Reference Canvas:** Coordinate budgets and bounding containers are fixed to a $1920\text{px}$ width by $1080\text{px}$ height virtual canvas. Scaling is applied via CSS transform matrix anchored to `transform-origin: top left`.
2. **Pure Live DOM Typography Standard:** Headings, kickers, telemetry labels, KPI digits, and table rows render strictly as live, selectable HTML DOM elements (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<div>`). No rasterized image text and no `<canvas>` 2D bitmap text.
3. **Stepwise Intra-Slide Progression:** Multi-step archetypes (Archetypes 1–8) execute across 4 discrete stages driven by `activeStep` and `maxSteps`. Elements evaluate into three kinetic lifecycle states:
   - `completed`: Steps prior to `activeStep` (subdued opacity $0.75$, settled transform, checkmark indicator).
   - `active`: The active step (full opacity $1.00$, highlighted glow border, harmonic spring pop).
   - `future`: Upcoming steps (muted opacity $0.35$, slight optical blur $1.25\text{px}$).
4. **100% Affirmative Boolean Semantics:** All boolean identifiers must use affirmative naming (`is*`, `has*`, `can*`, `should*`). Negative boolean identifiers (`disabled`, `hidden`, `isNotActive`) and explicit equality checks (`== true`, `=== false`) are strictly prohibited.
5. **Executive Persona Standardization:** Any reference to executive Alim Ul Karim must strictly be designated as **"Chief Software Engineer"** (Rule R11).

---

### Foundational `BaseSlide` Interface

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
  isPublished?: boolean;
  hasPresenterNotes?: boolean;
}
```

---

### Discriminated Union Types for Module 38

```typescript
export type FlatGlobalSuiteSlideType =
  // Group A: Interactive Multi-Step Progression Workflows (Archetypes 1 to 8)
  | 'interactive-branching-close'
  | 'before-after-showcase-pan'
  | 'search-serp-proof-lightbox'
  | 'cognitive-inversion-punchline'
  | 'talent-pyramid-funnel-svg'
  | 'hexagonal-tech-cluster'
  | 'connected-roadmap-rail-pulse'
  | 'campaign-performance-lightbox'
  // Group B: High-Density Flat Sovereign Telemetry Overviews (Archetypes 9 to 15)
  | 'cloud-infrastructure-topology'
  | 'compliance-matrix-audit-grid'
  | 'unit-economics-waterfall-card'
  | 'executive-board-governance-deck'
  | 'developer-platform-api-surface'
  | 'esg-environmental-footprint'
  | 'global-partner-ecosystem-grid';

export type FlatGlobalSuiteSlideData =
  | InteractiveBranchingCloseSlideData
  | BeforeAfterShowcasePanSlideData
  | SearchSerpProofLightboxSlideData
  | CognitiveInversionPunchlineSlideData
  | TalentPyramidFunnelSvgSlideData
  | HexagonalTechClusterSlideData
  | ConnectedRoadmapRailPulseSlideData
  | CampaignPerformanceLightboxSlideData
  // Group B Types
  | CloudInfrastructureTopologySlideData
  | ComplianceMatrixAuditGridSlideData
  | UnitEconomicsWaterfallCardSlideData
  | ExecutiveBoardGovernanceDeckSlideData
  | DeveloperPlatformApiSurfaceSlideData
  | EsgEnvironmentalFootprintSlideData
  | GlobalPartnerEcosystemGridSlideData;
```

---

## 2. Dynamic Step Count Calculation Engine

Step calculation is deterministic. Multi-step workflows evaluate step counts dynamically using stage array lengths (defaulting to 4), while flat telemetry overviews evaluate to exactly 1.

```typescript
export function calculateFlatGlobalSuiteStepCount(slide: FlatGlobalSuiteSlideData): number {
  switch (slide.type) {
    case 'interactive-branching-close': {
      const data = slide as InteractiveBranchingCloseSlideData;
      return Math.max(data.decisionStages?.length ?? 4, 1);
    }
    case 'before-after-showcase-pan': {
      const data = slide as BeforeAfterShowcasePanSlideData;
      return Math.max(data.transformationStages?.length ?? 4, 1);
    }
    case 'search-serp-proof-lightbox': {
      const data = slide as SearchSerpProofLightboxSlideData;
      return Math.max(data.lightboxStages?.length ?? 4, 1);
    }
    case 'cognitive-inversion-punchline': {
      const data = slide as CognitiveInversionPunchlineSlideData;
      return Math.max(data.punchlineStages?.length ?? 4, 1);
    }
    case 'talent-pyramid-funnel-svg': {
      const data = slide as TalentPyramidFunnelSvgSlideData;
      return Math.max(data.funnelTiers?.length ?? 4, 1);
    }
    case 'hexagonal-tech-cluster': {
      const data = slide as HexagonalTechClusterSlideData;
      return Math.max(data.inspectionPhases?.length ?? 4, 1);
    }
    case 'connected-roadmap-rail-pulse': {
      const data = slide as ConnectedRoadmapRailPulseSlideData;
      return Math.max(data.milestoneStations?.length ?? 4, 1);
    }
    case 'campaign-performance-lightbox': {
      const data = slide as CampaignPerformanceLightboxSlideData;
      return Math.max(data.campaignChannels?.length ?? 4, 1);
    }
    default:
      return 1;
  }
}

export function isFlatGlobalSuiteSlide(slide: unknown): slide is FlatGlobalSuiteSlideData {
  if (typeof slide !== 'object' || slide === null) return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && [
    'interactive-branching-close',
    'before-after-showcase-pan',
    'search-serp-proof-lightbox',
    'cognitive-inversion-punchline',
    'talent-pyramid-funnel-svg',
    'hexagonal-tech-cluster',
    'connected-roadmap-rail-pulse',
    'campaign-performance-lightbox',
    'cloud-infrastructure-topology',
    'compliance-matrix-audit-grid',
    'unit-economics-waterfall-card',
    'executive-board-governance-deck',
    'developer-platform-api-surface',
    'esg-environmental-footprint',
    'global-partner-ecosystem-grid',
  ].includes(candidate.type);
}
```

---

## 3. Archetype 01: `interactive-branching-close`

### 3.1 Business Function & Strategic Intent
An executive closing slide engineered for boardroom decision gates. Instead of a passive "Thank You" screen, it provides an interactive fork in the road: the presenter or stakeholder can press **`Y`** (Affirmative: Immediate Enterprise Rollout) or **`N`** (Alternative: 30-Day Architectural Pilot). The slide executes a 3D perspective flip revealing commitments, deliverables, and calendar bookings for the selected path.

### 3.2 TypeScript Data Contract

```typescript
export interface BranchingStage {
  stepIndex: number;
  stageName: string;
  instructionText: string;
  isCompleted: boolean;
  isActive: boolean;
}

export interface BranchingOption {
  branchKey: 'Y' | 'N';
  branchLabel: string;
  headline: string;
  summary: string;
  deliverables: string[];
  timeline: string;
  investmentText: string;
  actionCta: string;
  isRecommended: boolean;
  isSelected?: boolean;
}

export interface InteractiveBranchingCloseSlideData extends BaseSlide {
  type: 'interactive-branching-close';
  decisionPrompt: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  activeBranchKey?: 'Y' | 'N';
  hasBranchShortcutsEnabled: boolean;
  hasQrCodeAccess: boolean;
  qrCodeUrl?: string;
  branchOptions: BranchingOption[];
  decisionStages: BranchingStage[];
}
```

### 3.3 Coordinate Budget ($1920 \times 1080$)

| Element | X ($px$) | Y ($px$) | Width ($px$) | Height ($px$) | Layer Plane |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Header Block (Kicker + Title + Prompt)** | 100 | 80 | 1720 | 140 | Plane 1 |
| **Stage Progress Rail (4 Steps)** | 100 | 230 | 1720 | 40 | Plane 1 |
| **Branch Card Y (Option Y: Rollout)** | 100 | 290 | 840 | 660 | Plane 2 |
| **Branch Card N (Option N: Pilot)** | 980 | 290 | 840 | 660 | Plane 2 |
| **Decision Shortcut Pill Bar** | 680 | 970 | 560 | 54 | Plane 3 |

### 3.4 ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| [KICKER: STRATEGIC DECISION GATE]                                    CHIEF SOFTWARE ENGINEER: ALIM|
| EXECUTIVE FORK IN THE ROAD: COMMITMENT ARCHITECTURE (54px)                                       |
| Prompt: Press [Y] for Immediate Enterprise Deployment or [N] for 30-Day Architecture Pilot        |
+---------------------------------------------------------------------------------------------------+
| (1) Context Set ====> (2) Path Comparison ====> (3) Branch Selected ====> (4) Executive Close     |
+-----------------------------------------------------------------+---------------------------------+
| OPTION [Y]: IMMEDIATE FULL-SCALE ROLLOUT                       | OPTION [N]: 30-DAY PILOT SANDBOX|
| [RECOMMENDED PILL]                                              | [EXPLORATORY PILL]              |
|                                                                 |                                 |
| - Timeline: 14-Day Production Migration Log                     | - Timeline: 30-Day Proof-of-Work|
| - Deliverable: Multi-Region High Availability Cluster           | - Deliverable: Synthetic Load   |
| - SLA Target: 99.999% Fault Tolerance Engine                    | - SLA Target: Benchmark Analysis|
| - Investment: Enterprise CapEx Allocated                        | - Investment: Pilot Credit Mesh |
|                                                                 |                                 |
| [ ACTION: PRESS 'Y' TO AUTHORIZE PRODUCTION ]                   | [ ACTION: PRESS 'N' FOR PILOT ] |
+-----------------------------------------------------------------+---------------------------------+
|                    [ SHORTCUT HUD: 'Y' = AUTHORIZE | 'N' = PILOT | ESC = RESET ]                  |
+---------------------------------------------------------------------------------------------------+
```

### 3.5 Production JSON Schema & Fixture

```json
{
  "id": "slide-38-01-branching-close",
  "type": "interactive-branching-close",
  "title": "Executive Commitment: Choose the Strategic Path Forward",
  "kicker": "STRATEGIC DECISION GATE",
  "decisionPrompt": "Press [Y] to authorize enterprise rollout or [N] for a 30-day architectural sandbox pilot.",
  "leadArchitect": "Alim Ul Karim",
  "leadRole": "Chief Software Engineer",
  "hasBranchShortcutsEnabled": true,
  "hasQrCodeAccess": true,
  "qrCodeUrl": "https://white-deck.internal/calendar/alim-chief-software-engineer",
  "branchOptions": [
    {
      "branchKey": "Y",
      "branchLabel": "Path Y: Enterprise Production Rollout",
      "headline": "Immediate Planetary Deployment",
      "summary": "Full cutover of global edge infrastructure with dedicated 24/7 site reliability engineering.",
      "deliverables": [
        "Zero-downtime multi-region BGP anycast migration",
        "Automated CI/CD security gate enforcement (SLSA Level 3)",
        "Executive board weekly reliability scorecard"
      ],
      "timeline": "14 Business Days to Full GA",
      "investmentText": "$450,000 Annualized Sovereign Tier",
      "actionCta": "Authorize GA Cutover",
      "isRecommended": true
    },
    {
      "branchKey": "N",
      "branchLabel": "Path N: 30-Day Architectural Sandbox",
      "headline": "Isolated Proof-of-Value Verification",
      "summary": "Deployment of staging cluster with synthetic traffic simulation and stress testing.",
      "deliverables": [
        "Synthetic 100,000 RPS burst latency evaluation",
        "Data isolation & confidential compute attestation audit",
        "Comprehensive TCO & payback horizon report"
      ],
      "timeline": "30-Day Isolated Pilot Horizon",
      "investmentText": "$45,000 Reimbursable Sandbox Credit",
      "actionCta": "Initialize Sandbox Pilot",
      "isRecommended": false
    }
  ],
  "decisionStages": [
    { "stepIndex": 0, "stageName": "Strategic Context", "instructionText": "Reviewing executive objectives", "isCompleted": true, "isActive": false },
    { "stepIndex": 1, "stageName": "Options Appraisal", "instructionText": "Comparing enterprise vs sandbox velocity", "isCompleted": false, "isActive": true },
    { "stepIndex": 2, "stageName": "Branch Authorization", "instructionText": "Awaiting keyboard input [Y/N]", "isCompleted": false, "isActive": false },
    { "stepIndex": 3, "stageName": "Executive Signoff", "instructionText": "Generating formal onboarding protocol", "isCompleted": false, "isActive": false }
  ]
}
```

---

## 4. Archetype 02: `before-after-showcase-pan`

### 4.1 Business Function & Strategic Intent
Visualizes transformative technological modernization. Features two contrasting panoramic views ("Legacy Monolithic Friction" vs "Unified Autonomous Engine") connected by horizontal camera panning and a 3D perspective flip card that highlights quantified breakthroughs.

### 4.2 TypeScript Data Contract

```typescript
export interface BeforeAfterMetric {
  metricLabel: string;
  metricValue: string;
  isBottleneck: boolean;
  isBreakthrough: boolean;
}

export interface TransformationStage {
  stepIndex: number;
  stageName: string;
  focusArea: string;
  improvementDelta: string;
  isCompleted: boolean;
  isActive: boolean;
}

export interface BeforeAfterShowcasePanSlideData extends BaseSlide {
  type: 'before-after-showcase-pan';
  panOffsetPercent: number;
  isFlipped: boolean;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  beforeState: {
    badgeText: string;
    headline: string;
    description: string;
    painPoints: string[];
    metrics: BeforeAfterMetric[];
  };
  afterState: {
    badgeText: string;
    headline: string;
    description: string;
    breakthroughs: string[];
    metrics: BeforeAfterMetric[];
  };
  transformationStages: TransformationStage[];
}
```

### 4.3 Coordinate Budget ($1920 \times 1080$)

| Element | X ($px$) | Y ($px$) | Width ($px$) | Height ($px$) | Layer Plane |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Header Block** | 100 | 80 | 1720 | 130 | Plane 1 |
| **Stage Progression Indicator** | 100 | 220 | 1720 | 36 | Plane 1 |
| **Pan & Flip Showcase Container** | 100 | 270 | 1720 | 730 | Plane 2 |
| **Left Card ("Before State")** | 120 | 290 | 800 | 690 | Plane 1 |
| **Right Card ("After State")** | 960 | 290 | 800 | 690 | Plane 2 |

### 4.4 ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| [KICKER: INFRASTRUCTURE TRANSFORMATION]                              CHIEF SOFTWARE ENGINEER: ALIM|
| FROM LEGACY MONOLITH TO AUTONOMOUS GLOBAL MESH (54px)                                             |
+---------------------------------------------------------------------------------------------------+
| Stage: [1] Legacy Baseline ===> [2] Decoupling ===> [3] Mesh Cutover ===> [4] Autonomous Velocity |
+-----------------------------------------------------------------+---------------------------------+
| BEFORE: FRAGMENTED & MANUAL                                     | AFTER: UNIFIED & AUTONOMOUS     |
| [ROSE MUTED BADGE: LEGACY STATUS QUO]                           | [EMERALD GLOW BADGE: 2026 GA]   |
|                                                                 |                                 |
| ❌ 14-Day Manual Testing & Deployment Cycles                     | ✅ 12-Minute Automated CI/CD    |
| ❌ 420ms Average Query Latency Under Load                       | ✅ 4.2ms Edge Memory Retrieval  |
| ❌ $84,000 Monthly Idling Compute Waste                         | ✅ 62% Cloud OpEx Reduction     |
| ❌ 3.4% Weekly Production Outage Incident Rate                  | ✅ 99.999% SLA High Availability|
|                                                                 |                                 |
| [ METRIC: 14 DAYS CYCLE TIME ]                                  | [ METRIC: 12 MINS CYCLE TIME ]  |
+-----------------------------------------------------------------+---------------------------------+
```

### 4.5 Production JSON Fixture

```json
{
  "id": "slide-38-02-before-after-pan",
  "type": "before-after-showcase-pan",
  "title": "From Fragmented Monolith to Autonomous Global Mesh",
  "kicker": "INFRASTRUCTURE TRANSFORMATION",
  "panOffsetPercent": 0,
  "isFlipped": false,
  "leadArchitect": "Alim Ul Karim",
  "leadRole": "Chief Software Engineer",
  "beforeState": {
    "badgeText": "LEGACY ENVIRONMENT (2024)",
    "headline": "Siloed Services & Manual Release Gates",
    "description": "Fragile monolithic release coordination with compounding technical debt and weekly downtime.",
    "painPoints": [
      "14-day manual verification & release cycle",
      "420ms p99 query latency during traffic peaks",
      "Siloed departmental relational data stores"
    ],
    "metrics": [
      { "metricLabel": "Release Cycle", "metricValue": "14 Days", "isBottleneck": true, "isBreakthrough": false },
      { "metricLabel": "p99 Latency", "metricValue": "420 ms", "isBottleneck": true, "isBreakthrough": false }
    ]
  },
  "afterState": {
    "badgeText": "AUTONOMOUS MESH (2026)",
    "headline": "Decoupled Event Sourcing & Edge Compute",
    "description": "High-velocity event-driven fabric providing zero-downtime canary rollouts and instant queries.",
    "breakthroughs": [
      "12-minute automated CI/CD deployment pipeline",
      "4.2ms global edge cache retrieval speed",
      "Unified distributed event mesh with cryptographic attestation"
    ],
    "metrics": [
      { "metricLabel": "Release Cycle", "metricValue": "12 Mins", "isBottleneck": false, "isBreakthrough": true },
      { "metricLabel": "p99 Latency", "metricValue": "4.2 ms", "isBottleneck": false, "isBreakthrough": true }
    ]
  },
  "transformationStages": [
    { "stepIndex": 0, "stageName": "Audit Baseline", "focusArea": "Monolith profiling", "improvementDelta": "0%", "isCompleted": true, "isActive": false },
    { "stepIndex": 1, "stageName": "Domain Decoupling", "focusArea": "Service extraction", "improvementDelta": "35%", "isCompleted": false, "isActive": true },
    { "stepIndex": 2, "stageName": "Anycast Mesh Cutover", "focusArea": "Edge routing", "improvementDelta": "75%", "isCompleted": false, "isActive": false },
    { "stepIndex": 3, "stageName": "Autonomous GA", "focusArea": "Continuous optimization", "improvementDelta": "100%", "isCompleted": false, "isActive": false }
  ]
}
```

---

## 5. Archetype 03: `search-serp-proof-lightbox`

### 5.1 Business Function & Strategic Intent
Delivers unquestionable visual evidence of market dominance, organic search authority, and #1 Google ranking positions. Features an interactive keyword ranking lightbox that expands to display live audit verification, search volume, click-through rates, and rich snippets.

### 5.2 TypeScript Data Contract

```typescript
export interface SerpResultItem {
  rankPosition: number;
  pageTitle: string;
  displayUrl: string;
  snippetText: string;
  isTargetDomain: boolean;
  hasRichSnippet: boolean;
  organicCtrPercent: number;
}

export interface SerpLightboxStage {
  stepIndex: number;
  stageName: string;
  keywordInspected: string;
  auditTakeaway: string;
  auditedBy: string;
  auditorRole: string; // Strictly "Chief Software Engineer"
  isCompleted: boolean;
  isActive: boolean;
}

export interface SearchSerpProofLightboxSlideData extends BaseSlide {
  type: 'search-serp-proof-lightbox';
  searchQuery: string;
  searchEngine: string;
  totalResultsCount: string;
  searchDurationSeconds: string;
  domainName: string;
  isLightboxOpen: boolean;
  activeInspectKeyword?: string;
  serpResults: SerpResultItem[];
  lightboxStages: SerpLightboxStage[];
}
```

### 5.3 Coordinate Budget ($1920 \times 1080$)

| Element | X ($px$) | Y ($px$) | Width ($px$) | Height ($px$) | Layer Plane |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Header Block** | 100 | 80 | 1720 | 130 | Plane 1 |
| **Search Engine Browser Bar** | 100 | 220 | 1720 | 64 | Plane 1 |
| **SERP Results List Panel** | 100 | 300 | 1080 | 700 | Plane 1 |
| **KPI & Ranking Proof Card** | 1210 | 300 | 610 | 700 | Plane 2 |
| **Active Lightbox Inspection Modal** | 260 | 160 | 1400 | 760 | Plane 3 |

### 5.4 ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| [KICKER: ORGANIC MARKET DOMINANCE]                                   CHIEF SOFTWARE ENGINEER: ALIM|
| VERIFIABLE SERP PROOF: #1 POSITION ACROSS CRITICAL ENTERPRISE QUERIES                             |
+---------------------------------------------------------------------------------------------------+
| [ https://google.com/search?q=enterprise+presentation+ai+architecture           ] [SEARCH BUTTON] |
+-----------------------------------------------------------------+---------------------------------+
| #1 RANK - WHITE PRESENTATION ARCHITECTURE                       | PROOF TELEMETRY METRICS         |
| https://white-presentation.internal/architecture                |                                 |
| Sovereign presentation engine with 1920x1080 pure live DOM...   | RANK: #1 POSITION (GLOBAL)      |
| CTR: 48.2% | Volume: 140,000 / mo | Rich Snippets: Enabled     | CTR:  48.2% (INDUSTRY AVG 8.4%) |
|                                                                 | VOLUME: 140,000 / MONTH         |
| #2 Rank - Competitor Legacy Slides                              |                                 |
| https://legacy-slides.com/slow-export                           | [ LIGHTBOX INSPECTION TRIGGER ] |
| Outdated PPT export tool with flat rasterized bitmaps...        | Audited by: Alim Ul Karim       |
| CTR: 12.1% | Volume: 140,000 / mo                               | Title: Chief Software Engineer  |
+-----------------------------------------------------------------+---------------------------------+
```

### 5.5 Production JSON Fixture

```json
{
  "id": "slide-38-03-serp-proof",
  "type": "search-serp-proof-lightbox",
  "title": "Verifiable SERP Proof: #1 Global Organic Ranking Authority",
  "kicker": "ORGANIC MARKET DOMINANCE",
  "searchQuery": "enterprise presentation ai architecture",
  "searchEngine": "Google Global",
  "totalResultsCount": "24,800,000",
  "searchDurationSeconds": "0.24",
  "domainName": "white-presentation.io",
  "isLightboxOpen": false,
  "activeInspectKeyword": "enterprise presentation ai architecture",
  "serpResults": [
    {
      "rankPosition": 1,
      "pageTitle": "White Presentation: Canonical Enterprise Slide Engine Architecture",
      "displayUrl": "https://white-presentation.io/architecture",
      "snippetText": "Pure DOM live typography, 1920x1080 deterministic canvas, and 6-tier HSL token contracts built for executive boardrooms and sovereign keynotes.",
      "isTargetDomain": true,
      "hasRichSnippet": true,
      "organicCtrPercent": 48.2
    },
    {
      "rankPosition": 2,
      "pageTitle": "Legacy Presentations Inc: Cloud PPT Solutions",
      "displayUrl": "https://legacy-slides.com/cloud",
      "snippetText": "Standard slide tools with rasterized exports and manual step coordination.",
      "isTargetDomain": false,
      "hasRichSnippet": false,
      "organicCtrPercent": 14.1
    }
  ],
  "lightboxStages": [
    { "stepIndex": 0, "stageName": "Keyword Selection", "keywordInspected": "enterprise presentation ai architecture", "auditTakeaway": "140K searches/month with 0.82 commercial intent.", "auditedBy": "Alim Ul Karim", "auditorRole": "Chief Software Engineer", "isCompleted": true, "isActive": false },
    { "stepIndex": 1, "stageName": "Position Validation", "keywordInspected": "enterprise presentation ai architecture", "auditTakeaway": "Rank #1 across 48 sovereign global datacenters.", "auditedBy": "Alim Ul Karim", "auditorRole": "Chief Software Engineer", "isCompleted": false, "isActive": true },
    { "stepIndex": 2, "stageName": "CTR Telemetry", "keywordInspected": "enterprise presentation ai architecture", "auditTakeaway": "48.2% click-through captures 67,480 monthly organic visits.", "auditedBy": "Alim Ul Karim", "auditorRole": "Chief Software Engineer", "isCompleted": false, "isActive": false },
    { "stepIndex": 3, "stageName": "Conversion Payback", "keywordInspected": "enterprise presentation ai architecture", "auditTakeaway": "Generates $3.2M pipeline value without paid ads.", "auditedBy": "Alim Ul Karim", "auditorRole": "Chief Software Engineer", "isCompleted": false, "isActive": false }
  ]
}
```

---

## 6. Archetype 04: `cognitive-inversion-punchline`

### 6.1 Business Function & Strategic Intent
Captivates boardroom attention by setting up a conventional industry belief ("Orthodox Assumption"), highlighting its hidden friction points, and snapping violently into a counter-intuitive technological breakthrough ("The Inversion Punchline").

### 6.2 TypeScript Data Contract

```typescript
export interface PunchlineStage {
  stepIndex: number;
  phaseTitle: string;
  tensionLevelPercent: number;
  narrativeText: string;
  isCompleted: boolean;
  isActive: boolean;
}

export interface CognitiveInversionPunchlineSlideData extends BaseSlide {
  type: 'cognitive-inversion-punchline';
  orthodoxAssumption: string;
  orthodoxFallacy: string;
  tensionHook: string;
  inversionPunchline: string;
  breakthroughMechanism: string;
  monumentalMetric: string;
  metricLabel: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  hasSpringSnapAnimation: boolean;
  punchlineStages: PunchlineStage[];
}
```

### 6.3 Coordinate Budget ($1920 \times 1080$)

| Element | X ($px$) | Y ($px$) | Width ($px$) | Height ($px$) | Layer Plane |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Header Block** | 100 | 80 | 1720 | 130 | Plane 1 |
| **Progress Tension Bar** | 100 | 220 | 1720 | 32 | Plane 1 |
| **Left Card: The Orthodox Myth** | 100 | 270 | 820 | 730 | Plane 1 |
| **Right Card: The Kinetic Punchline** | 960 | 270 | 860 | 730 | Plane 2 |

### 6.4 ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| [KICKER: COGNITIVE STRATEGIC INVERSION]                              CHIEF SOFTWARE ENGINEER: ALIM|
| SHATTERING THE CAPACITY MYTH: VELOCITY WITHOUT COMPUTE EXPLOSION                                  |
+---------------------------------------------------------------------------------------------------+
| Tension Arc: (1) Orthodox Belief ===> (2) Structural Cost ===> (3) Inversion ===> (4) Breakthrough |
+-----------------------------------------------------------------+---------------------------------+
| THE ORTHODOX BELIEF:                                            | THE INVERSION PUNCHLINE:        |
| "To 10x presentation rendering throughput,                      | "ZERO RUNTIME RASTERING         |
|  you must deploy 10x GPU cloud clusters."                       |  YIELDS 40x VELOCITY."          |
|                                                                 |                                 |
| - Fallacy: Hardware scaling ignores layout recalculation debt   | Monumental Metric: 40x FASTER   |
| - Cost: $180,000 / mo GPU inference spend                       | Metric Label: DOM Live Render   |
| - Bottleneck: 1.8s latency per rasterized slide                 | Latency: < 4.2ms local frame    |
|                                                                 |                                 |
| [ STATUS: SHATTERED ASSUMPTION ]                                | [ STATUS: PRODUCTION STANDARD ] |
+-----------------------------------------------------------------+---------------------------------+
```

### 6.5 Production JSON Fixture

```json
{
  "id": "slide-38-04-cognitive-inversion",
  "type": "cognitive-inversion-punchline",
  "title": "Shattering the Capacity Myth: Velocity Without Compute Inflation",
  "kicker": "COGNITIVE STRATEGIC INVERSION",
  "orthodoxAssumption": "Scaling presentation visual complexity requires proportional GPU cloud infrastructure.",
  "orthodoxFallacy": "Rasterizing server-side HTML to PNG creates massive network egress, memory bloat, and seconds of latency.",
  "tensionHook": "Why are enterprise teams spending $180K/month on headless Chrome instances just to render board decks?",
  "inversionPunchline": "Eliminating server rasterization entirely with pure live DOM typography yields 40x higher rendering throughput at 0% GPU cost.",
  "breakthroughMechanism": "Client-side CSS transform matrix scaling anchored to 1920x1080 canvas executes within a single 4.2ms browser animation frame.",
  "monumentalMetric": "40x",
  "metricLabel": "Rendering Throughput Increase",
  "leadArchitect": "Alim Ul Karim",
  "leadRole": "Chief Software Engineer",
  "hasSpringSnapAnimation": true,
  "punchlineStages": [
    { "stepIndex": 0, "phaseTitle": "The Orthodox Myth", "tensionLevelPercent": 25, "narrativeText": "Industry consensus assumed heavy backend GPUs were mandatory for dynamic slides.", "isCompleted": true, "isActive": false },
    { "stepIndex": 1, "phaseTitle": "Empirical Tension", "tensionLevelPercent": 60, "narrativeText": "Server costs soared while latency degraded to 1.8 seconds per slide change.", "isCompleted": false, "isActive": true },
    { "stepIndex": 2, "phaseTitle": "The Inversion Flash", "tensionLevelPercent": 95, "narrativeText": "Replaced the raster pipeline with hardware-accelerated pure DOM typography.", "isCompleted": false, "isActive": false },
    { "stepIndex": 3, "phaseTitle": "Verified GA Velocity", "tensionLevelPercent": 100, "narrativeText": "Achieved sub-5ms transitions and zero infrastructure egress cost.", "isCompleted": false, "isActive": false }
  ]
}
```

---

## 7. Archetype 05: `talent-pyramid-funnel-svg`

### 7.1 Business Function & Strategic Intent
Showcases extreme engineering caliber and rigorous vetting standards for high-stakes enterprise clients. Renders a multi-tier candidate funnel and SVG polygon pyramid mapping the progression from global applicant volume down to the top 1% principal engineers.

### 7.2 TypeScript Data Contract

```typescript
export interface FunnelTier {
  tierNumber: number;
  tierName: string;
  candidateVolume: string;
  retentionPercent: number;
  evaluationCriteria: string;
  svgPolygonPoints: string;
  isFinalTier: boolean;
  isActiveTier: boolean;
}

export interface TalentPyramidFunnelSvgSlideData extends BaseSlide {
  type: 'talent-pyramid-funnel-svg';
  totalApplicants: string;
  finalAcceptanceRate: string;
  vettingPhilosophy: string;
  leadEvaluator: string;
  evaluatorRole: string; // Strictly "Chief Software Engineer"
  hasStrictEvaluationBar: boolean;
  funnelTiers: FunnelTier[];
}
```

### 7.3 Coordinate Budget ($1920 \times 1080$)

| Element | X ($px$) | Y ($px$) | Width ($px$) | Height ($px$) | Layer Plane |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Header Block** | 100 | 80 | 1720 | 130 | Plane 1 |
| **SVG Funnel Pyramid Canvas** | 100 | 240 | 880 | 760 | Plane 2 |
| **Tier Details & Breakdown Bento Panel**| 1020 | 240 | 800 | 760 | Plane 2 |

### 7.4 ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| [KICKER: HUMAN CAPITAL & ENGINEERING CALIBER]                        CHIEF SOFTWARE ENGINEER: ALIM|
| THE TOP 1% ENGINEERING FILTER: 4-TIER VETTING FUNNEL                                             |
+---------------------------------------------------------------------------------------------------+
| SVG PYRAMID CANVAS (X:100, Y:240, W:880)                        | TIER BREAKDOWN & EVALUATION GATES|
|                                                                 |                                 |
|                 /\                                              | [TIER 4: PRINCIPAL ARCHITECTS]  |
|                /  \        Tier 4: Top 0.8% (12 Selected)       | Volume: 12 / 1,480 Applicants   |
|               /====\                                            | Gate: System Design War-Room    |
|              /      \      Tier 3: Top 3.5% (52 Candidates)     | Evaluator: Alim Ul Karim        |
|             /========\                                          | Title: Chief Software Engineer  |
|            /          \    Tier 2: Top 15% (220 Candidates)     |                                 |
|           /============\                                        | [TIER 3: SENIOR CORE ENGINEERS] |
|          /              \  Tier 1: Global Ingress (1,480 Apps)  | Volume: 52 Candidates           |
|         +----------------+                                      | Gate: Algorithmic & Code Audit  |
|                                                                 |                                 |
| [ TOTAL APPLICANTS: 1,480 ]   [ ACCEPTANCE RATE: 0.81% ]        | [ ACCEPTANCE RATE: 0.81% ]      |
+-----------------------------------------------------------------+---------------------------------+
```

### 7.5 Production JSON Fixture

```json
{
  "id": "slide-38-05-talent-pyramid",
  "type": "talent-pyramid-funnel-svg",
  "title": "The Top 1% Engineering Filter: 4-Tier Vetting Funnel",
  "kicker": "HUMAN CAPITAL & ENGINEERING CALIBER",
  "totalApplicants": "1,480",
  "finalAcceptanceRate": "0.81%",
  "vettingPhilosophy": "Zero compromise on algorithmic rigor, distributed systems architecture, and production discipline.",
  "leadEvaluator": "Alim Ul Karim",
  "evaluatorRole": "Chief Software Engineer",
  "hasStrictEvaluationBar": true,
  "funnelTiers": [
    {
      "tierNumber": 1,
      "tierName": "Global Technical Ingress",
      "candidateVolume": "1,480 Applicants",
      "retentionPercent": 100,
      "evaluationCriteria": "Automated code hygiene, algorithmic correctness, and async communication audit.",
      "svgPolygonPoints": "140,540 740,540 640,420 240,420",
      "isFinalTier": false,
      "isActiveTier": false
    },
    {
      "tierNumber": 2,
      "tierName": "Distributed Systems Deep Dive",
      "candidateVolume": "220 Candidates",
      "retentionPercent": 14.8,
      "evaluationCriteria": "Real-time debugging of live production incidents, memory leak profiling, and concurrency locks.",
      "svgPolygonPoints": "240,420 640,420 540,300 340,300",
      "isFinalTier": false,
      "isActiveTier": false
    },
    {
      "tierNumber": 3,
      "tierName": "Executive Architectural Defense",
      "candidateVolume": "52 Candidates",
      "retentionPercent": 3.5,
      "evaluationCriteria": "Presentation of end-to-end system topology before the Senior Engineering Committee.",
      "svgPolygonPoints": "340,300 540,300 470,180 410,180",
      "isFinalTier": false,
      "isActiveTier": true
    },
    {
      "tierNumber": 4,
      "tierName": "Principal Staff Induction",
      "candidateVolume": "12 Engineers",
      "retentionPercent": 0.81,
      "evaluationCriteria": "Final signoff and code provenance validation by Chief Software Engineer.",
      "svgPolygonPoints": "410,180 470,180 440,80",
      "isFinalTier": true,
      "isActiveTier": false
    }
  ]
}
```

---

## 8. Archetype 06: `hexagonal-tech-cluster`

### 8.1 Business Function & Strategic Intent
Visualizes modern distributed architectures as a honeycomb hexagonal coordinate grid. Displays microservices, event streams, and persistence engines with dynamic dependency tracing, highlighting active sub-clusters during intra-slide stepping.

### 8.2 TypeScript Data Contract

```typescript
export interface HexagonalNode {
  nodeId: string;
  label: string;
  clusterLayer: 'gateway' | 'compute' | 'event' | 'storage' | 'observability';
  gridCoordinates: { q: number; r: number };
  throughputText: string;
  latencyText: string;
  isCoreService: boolean;
  isActiveNode: boolean;
  dependencyIds: string[];
}

export interface InspectionPhase {
  phaseIndex: number;
  title: string;
  highlightedLayer: string;
  activeNodeCount: number;
  totalThroughput: string;
  averageLatency: string;
  isPassed: boolean;
}

export interface HexagonalTechClusterSlideData extends BaseSlide {
  type: 'hexagonal-tech-cluster';
  systemClusterName: string;
  clusterDescription: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  hexNodes: HexagonalNode[];
  inspectionPhases: InspectionPhase[];
}
```

### 8.3 Coordinate Budget ($1920 \times 1080$)

| Element | X ($px$) | Y ($px$) | Width ($px$) | Height ($px$) | Layer Plane |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Header Block** | 100 | 80 | 1720 | 130 | Plane 1 |
| **Honeycomb SVG Canvas** | 100 | 230 | 1040 | 770 | Plane 2 |
| **Inspection Telemetry Panel** | 1170 | 230 | 650 | 770 | Plane 2 |

### 8.4 ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| [KICKER: ARCHITECTURAL TOPOLOGY]                                     CHIEF SOFTWARE ENGINEER: ALIM|
| DISTRIBUTED HONEYCOMB CLUSTER: RESILIENT EDGE-TO-PERSISTENCE MESH                                 |
+---------------------------------------------------------------------------------------------------+
| HONEYCOMB HEXAGONAL SVG CANVAS (X:100, Y:230, W:1040)           | ACTIVE CLUSTER TELEMETRY PANEL  |
|                                                                 |                                 |
|       / \         / \         / \                               | PHASE: [2] COMPUTE FABRIC       |
|      / BGP \-----/ API \-----/ Auth\                            | Active Nodes: 6 Pods            |
|      \ Any /     \ Gwy /     \ Svc /                            | Throughput:   48,000 RPS        |
|       \ /         \ /         \ /                               | Latency:      2.1ms             |
|        |           |           |                                |                                 |
|       / \         / \         / \                               | HIGHLIGHTED NODES:              |
|      / RAG \-----/ Kafka\----/ CQRS\                            | - Auth Service (JWT Cache)      |
|      \ Vctr/     \ Stream/   \ Bus /                            | - Kafka Partition Router        |
|       \ /         \ /         \ /                               | - Anycast Edge Director         |
|                                                                 |                                 |
| [ TOTAL NODES: 9 ]   [ CLUSTER HEALTH: 100% HEALTHY ]           | Signoff: Alim Ul Karim (Lead)   |
+-----------------------------------------------------------------+---------------------------------+
```

### 8.5 Production JSON Fixture

```json
{
  "id": "slide-38-06-hex-cluster",
  "type": "hexagonal-tech-cluster",
  "title": "Distributed Honeycomb Cluster: Resilient Edge-to-Persistence Mesh",
  "kicker": "ARCHITECTURAL TOPOLOGY",
  "systemClusterName": "Core Mesh Alpha",
  "clusterDescription": "Acyclic microservice topology with zero single point of failure and sub-millisecond edge routing.",
  "leadArchitect": "Alim Ul Karim",
  "leadRole": "Chief Software Engineer",
  "hexNodes": [
    { "nodeId": "node-bgp", "label": "BGP Anycast", "clusterLayer": "gateway", "gridCoordinates": { "q": 0, "r": 0 }, "throughputText": "120K RPS", "latencyText": "0.8ms", "isCoreService": true, "isActiveNode": true, "dependencyIds": ["node-api"] },
    { "nodeId": "node-api", "label": "API Gateway", "clusterLayer": "gateway", "gridCoordinates": { "q": 1, "r": 0 }, "throughputText": "110K RPS", "latencyText": "1.2ms", "isCoreService": true, "isActiveNode": true, "dependencyIds": ["node-auth", "node-kafka"] },
    { "nodeId": "node-auth", "label": "Auth Service", "clusterLayer": "compute", "gridCoordinates": { "q": 2, "r": 0 }, "throughputText": "85K RPS", "latencyText": "1.4ms", "isCoreService": true, "isActiveNode": false, "dependencyIds": [] },
    { "nodeId": "node-kafka", "label": "Kafka Fabric", "clusterLayer": "event", "gridCoordinates": { "q": 1, "r": 1 }, "throughputText": "95K RPS", "latencyText": "2.1ms", "isCoreService": true, "isActiveNode": true, "dependencyIds": ["node-cqrs", "node-storage"] },
    { "nodeId": "node-cqrs", "label": "CQRS Projections", "clusterLayer": "compute", "gridCoordinates": { "q": 2, "r": 1 }, "throughputText": "60K RPS", "latencyText": "2.8ms", "isCoreService": false, "isActiveNode": false, "dependencyIds": [] },
    { "nodeId": "node-storage", "label": "Multi-Region DB", "clusterLayer": "storage", "gridCoordinates": { "q": 1, "r": 2 }, "throughputText": "40K RPS", "latencyText": "3.5ms", "isCoreService": true, "isActiveNode": false, "dependencyIds": [] }
  ],
  "inspectionPhases": [
    { "phaseIndex": 0, "title": "Gateway Tier Ingress", "highlightedLayer": "gateway", "activeNodeCount": 2, "totalThroughput": "120K RPS", "averageLatency": "1.0ms", "isPassed": true },
    { "phaseIndex": 1, "title": "Event Fabric Streaming", "highlightedLayer": "event", "activeNodeCount": 1, "totalThroughput": "95K RPS", "averageLatency": "2.1ms", "isPassed": true },
    { "phaseIndex": 2, "title": "Compute & Business Logic", "highlightedLayer": "compute", "activeNodeCount": 2, "totalThroughput": "85K RPS", "averageLatency": "1.8ms", "isPassed": true },
    { "phaseIndex": 3, "title": "State Persistence SLA", "highlightedLayer": "storage", "activeNodeCount": 1, "totalThroughput": "40K RPS", "averageLatency": "3.5ms", "isPassed": true }
  ]
}
```

---

## 9. Archetype 07: `connected-roadmap-rail-pulse`

### 9.1 Business Function & Strategic Intent
Visualizes enterprise delivery commitments as a continuous high-speed transit highway. Each milestone station features deliverables, timelines, and KPI commitments, while a traveling SVG laser pulse demonstrates active momentum along the connective rail.

### 9.2 TypeScript Data Contract

```typescript
export interface MilestoneStation {
  stationIndex: number;
  quarterLabel: string;
  stationTitle: string;
  themeObjective: string;
  deliverables: string[];
  kpiTarget: string;
  completionDate: string;
  isCompleted: boolean;
  isActiveStation: boolean;
}

export interface ConnectedRoadmapRailPulseSlideData extends BaseSlide {
  type: 'connected-roadmap-rail-pulse';
  roadmapHorizon: string;
  executiveSponsor: string;
  sponsorRole: string; // Strictly "Chief Software Engineer"
  hasLaserPulseAnimation: boolean;
  pulseSpeedMs: number;
  milestoneStations: MilestoneStation[];
}
```

### 9.3 Coordinate Budget ($1920 \times 1080$)

| Element | X ($px$) | Y ($px$) | Width ($px$) | Height ($px$) | Layer Plane |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Header Block** | 100 | 80 | 1720 | 130 | Plane 1 |
| **Laser Pulse Transit Rail** | 100 | 250 | 1720 | 24 | Plane 2 |
| **Station 1 Bento Card** | 100 | 310 | 400 | 690 | Plane 1 |
| **Station 2 Bento Card (Active)** | 540 | 310 | 400 | 690 | Plane 2 |
| **Station 3 Bento Card** | 980 | 310 | 400 | 690 | Plane 1 |
| **Station 4 Bento Card** | 1420 | 310 | 400 | 690 | Plane 1 |

### 9.4 ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| [KICKER: MULTI-YEAR DELIVERY HORIZON]                                CHIEF SOFTWARE ENGINEER: ALIM|
| STRATEGIC PLATFORM ROADMAP: 4-QUARTER PLANETARY EXECUTION                                         |
+---------------------------------------------------------------------------------------------------+
| ====== (Station 1) ============ (Station 2) ============ (Station 3) ============ (Station 4) ==== |
|        [COMPLETED]               [ACTIVE PULSE]           [SCHEDULED]             [PLANNED]       |
+--------------------+-------------------+--------------------+-------------------------------------+
| Q1 2026: FOUNDATION| Q2 2026: SCALE    | Q3 2026: AI AGENTS | Q4 2026: PLANETARY                  |
| [COMPLETED CHECK]  | [ACTIVE GLOW]     | [UPCOMING]         | [FUTURE GOAL]                       |
|                    |                   |                    |                                     |
| - Core Split-DB    | - Anycast Edge PoP| - Subagent Fleet   | - Sovereign Cloud                   |
| - HSL Design System| - Kafka Event Mesh| - Semantic Vector  | - 99.999% SLA                       |
| - CI/CD SLSA L3    | - 12-Minute Push  | - Auto-Triage      | - Global Compliance                 |
|                    |                   |                    |                                     |
| KPI: 100% Hermetic | KPI: < 10ms Global| KPI: 85% Auto-Ops  | KPI: 10M Concurrent                 |
+--------------------+-------------------+--------------------+-------------------------------------+
```

### 9.5 Production JSON Fixture

```json
{
  "id": "slide-38-07-roadmap-rail",
  "type": "connected-roadmap-rail-pulse",
  "title": "Strategic Platform Roadmap: 4-Quarter Planetary Execution",
  "kicker": "MULTI-YEAR DELIVERY HORIZON",
  "roadmapHorizon": "FY2026 Enterprise Horizon",
  "executiveSponsor": "Alim Ul Karim",
  "sponsorRole": "Chief Software Engineer",
  "hasLaserPulseAnimation": true,
  "pulseSpeedMs": 1400,
  "milestoneStations": [
    {
      "stationIndex": 0,
      "quarterLabel": "Q1 2026",
      "stationTitle": "Architectural Foundation",
      "themeObjective": "Eliminate technical debt and establish hermetic build infrastructure.",
      "deliverables": [
        "13 corporate themes with pure HSL triplet tokens",
        "Deterministic 1920x1080 pure DOM typography standard",
        "Zero-storage GitHub Actions CI/CD pipeline"
      ],
      "kpiTarget": "100% Hermetic Builds",
      "completionDate": "March 31, 2026",
      "isCompleted": true,
      "isActiveStation": false
    },
    {
      "stationIndex": 1,
      "quarterLabel": "Q2 2026",
      "stationTitle": "Global Edge Acceleration",
      "themeObjective": "Deploy distributed Anycast routing and real-time Kafka event fabric.",
      "deliverables": [
        "Sub-10ms global edge DNS latency steering",
        "Append-only event store with CQRS projections",
        "Multi-region failover automation"
      ],
      "kpiTarget": "< 10ms Global Latency",
      "completionDate": "June 30, 2026",
      "isCompleted": false,
      "isActiveStation": true
    },
    {
      "stationIndex": 2,
      "quarterLabel": "Q3 2026",
      "stationTitle": "Autonomous AI Agent Fleet",
      "themeObjective": "Integrate self-healing CI/CD runners and AI subagent orchestration.",
      "deliverables": [
        "Continuous 300-step autonomous worker execution",
        "Semantic vector search and re-ranking cache",
        "Automated linter and coding guideline remediation"
      ],
      "kpiTarget": "85% Autonomous Operations",
      "completionDate": "September 30, 2026",
      "isCompleted": false,
      "isActiveStation": false
    },
    {
      "stationIndex": 3,
      "quarterLabel": "Q4 2026",
      "stationTitle": "Planetary Enterprise Sovereign",
      "themeObjective": "Attain SOC2 Type II, ISO 27001, and global enterprise certification.",
      "deliverables": [
        "Confidential computing enclave attestation",
        "OECD Pillar Two global compliance automation",
        "Zero-trust cross-border IAM audit"
      ],
      "kpiTarget": "99.999% SLA High Availability",
      "completionDate": "December 31, 2026",
      "isCompleted": false,
      "isActiveStation": false
    }
  ]
}
```

---

## 10. Archetype 08: `campaign-performance-lightbox`

### 10.1 Business Function & Strategic Intent
Delivers transparency into capital allocation and multi-channel acquisition performance. Combines high-level CAC/LTV benchmarks with an interactive lightbox modal permitting deep drill-downs into channel spend, ROAS multipliers, and attribution payback horizons.

### 10.2 TypeScript Data Contract

```typescript
export interface CampaignChannel {
  channelId: string;
  channelName: string;
  spendAmount: string;
  roasMultiplier: string;
  conversionsCount: number;
  blendedCac: string;
  attributionModel: string;
  isTopPerformer: boolean;
  isLightboxInspected: boolean;
}

export interface CampaignLightboxStage {
  stepIndex: number;
  stageName: string;
  focusedChannel: string;
  paybackHorizonDays: number;
  auditConclusion: string;
  isCompleted: boolean;
  isActive: boolean;
}

export interface CampaignPerformanceLightboxSlideData extends BaseSlide {
  type: 'campaign-performance-lightbox';
  reportingQuarter: string;
  totalMarketingSpend: string;
  blendedLtvToCacRatio: string;
  netRevenueAttributed: string;
  chiefAuditor: string;
  auditorRole: string; // Strictly "Chief Software Engineer"
  isLightboxOpen: boolean;
  activeChannelInspectionId?: string;
  campaignChannels: CampaignChannel[];
  campaignStages: CampaignLightboxStage[];
}
```

### 10.3 Coordinate Budget ($1920 \times 1080$)

| Element | X ($px$) | Y ($px$) | Width ($px$) | Height ($px$) | Layer Plane |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Header Block** | 100 | 80 | 1720 | 130 | Plane 1 |
| **Top KPI Summary Strip** | 100 | 230 | 1720 | 100 | Plane 1 |
| **Channels Bento Table Card** | 100 | 350 | 1140 | 650 | Plane 2 |
| **Cohort & CAC Payback Card** | 1270 | 350 | 550 | 650 | Plane 2 |
| **Active Lightbox Modal Overlay**| 240 | 160 | 1440 | 760 | Plane 3 |

### 10.4 ASCII Wireframe

```
+---------------------------------------------------------------------------------------------------+
| [KICKER: REVENUE OPERATIONS & CAPITAL ALLOCATION]                    CHIEF SOFTWARE ENGINEER: ALIM|
| CAMPAIGN TELEMETRY & ATTRIBUTION WATERFALL: 4.8x BLENDED ROAS                                     |
+---------------------------------------------------------------------------------------------------+
| TOTAL SPEND: $1,240,000  |  NET REVENUE: $5,952,000  |  LTV/CAC RATIO: 6.2x  |  BLENDED ROAS: 4.8x|
+-----------------------------------------------------------------+---------------------------------+
| MULTI-CHANNEL ATTRIBUTION PERFORMANCE MATRIX                    | CAC PAYBACK HORIZON             |
|                                                                 |                                 |
| CHANNEL          SPEND     ROAS    CONV   CAC    STATUS         | - Blended Payback: 52 Days      |
| Organic Search   $180K     8.4x    4,200  $42    [TOP PERFORMER]| - Enterprise Cohort: 98% Ret.   |
| Paid Search      $420K     4.2x    3,800  $110   [SCALED]       | - Expansion Revenue: +42% NRR   |
| Technical Events $340K     5.1x    1,900  $178   [HIGH ACV]     |                                 |
| Developer DevRel $300K     3.8x    2,100  $142   [COMMUNITY]    | [ AUDITED BY: ALIM UL KARIM ]   |
|                                                                 | [ TITLE: CHIEF SOFTWARE ENG ]   |
| [ CLICK ROW FOR DEEP DRILL-DOWN LIGHTBOX INSPECTION ]           |                                 |
+-----------------------------------------------------------------+---------------------------------+
```

### 10.5 Production JSON Fixture

```json
{
  "id": "slide-38-08-campaign-performance",
  "type": "campaign-performance-lightbox",
  "title": "Campaign Telemetry & Attribution Waterfall: 4.8x Blended ROAS",
  "kicker": "REVENUE OPERATIONS & CAPITAL ALLOCATION",
  "reportingQuarter": "Q1 2026 Financial Close",
  "totalMarketingSpend": "$1,240,000",
  "blendedLtvToCacRatio": "6.2x",
  "netRevenueAttributed": "$5,952,000",
  "chiefAuditor": "Alim Ul Karim",
  "auditorRole": "Chief Software Engineer",
  "isLightboxOpen": false,
  "activeChannelInspectionId": "chan-organic-search",
  "campaignChannels": [
    {
      "channelId": "chan-organic-search",
      "channelName": "Organic Search & Technical Specs",
      "spendAmount": "$180,000",
      "roasMultiplier": "8.4x",
      "conversionsCount": 4200,
      "blendedCac": "$42.85",
      "attributionModel": "Algorithmic Multi-Touch",
      "isTopPerformer": true,
      "isLightboxInspected": true
    },
    {
      "channelId": "chan-paid-search",
      "channelName": "High-Intent Enterprise Search",
      "spendAmount": "$420,000",
      "roasMultiplier": "4.2x",
      "conversionsCount": 3800,
      "blendedCac": "$110.50",
      "attributionModel": "Position-Based 40/40/20",
      "isTopPerformer": false,
      "isLightboxInspected": false
    },
    {
      "channelId": "chan-technical-summits",
      "channelName": "Global Architecture Summits",
      "spendAmount": "$340,000",
      "roasMultiplier": "5.1x",
      "conversionsCount": 1900,
      "blendedCac": "$178.90",
      "attributionModel": "Time-Decay In-Person",
      "isTopPerformer": false,
      "isLightboxInspected": false
    },
    {
      "channelId": "chan-devrel-community",
      "channelName": "Developer Relations & Open Core",
      "spendAmount": "$300,000",
      "roasMultiplier": "3.8x",
      "conversionsCount": 2100,
      "blendedCac": "$142.80",
      "attributionModel": "Linear Engagement",
      "isTopPerformer": false,
      "isLightboxInspected": false
    }
  ],
  "campaignStages": [
    { "stepIndex": 0, "stageName": "Spend Aggregation", "focusedChannel": "All Channels", "paybackHorizonDays": 52, "auditConclusion": "Zero misallocated spend across all 4 production streams.", "isCompleted": true, "isActive": false },
    { "stepIndex": 1, "stageName": "Organic Search Drilldown", "focusedChannel": "Organic Search", "paybackHorizonDays": 18, "auditConclusion": "Fastest payback horizon with highest client retention.", "isCompleted": false, "isActive": true },
    { "stepIndex": 2, "stageName": "Paid Conversion Audit", "focusedChannel": "High-Intent Paid", "paybackHorizonDays": 64, "auditConclusion": "Healthy enterprise ACV offsets higher initial acquisition CAC.", "isCompleted": false, "isActive": false },
    { "stepIndex": 3, "stageName": "Executive Signoff", "focusedChannel": "All Channels", "paybackHorizonDays": 52, "auditConclusion": "Full attribution signoff by Chief Software Engineer.", "isCompleted": false, "isActive": false }
  ]
}
```

---

## 11. Complete Archetype Catalog (Archetypes 1 to 15)

```typescript
// Group B: Flat Sovereign Telemetry Slide Interfaces (Flat 1-Step Density)
export interface CloudInfrastructureTopologySlideData extends BaseSlide {
  type: 'cloud-infrastructure-topology';
  regionCount: number;
  globalLatencyP99Ms: number;
  cloudProviderMix: string;
  leadArchitect: string;
  leadRole: string; // Chief Software Engineer
  clusterHealthStatus: 'optimal' | 'degraded' | 'rebalancing';
  isMultiRegionActive: boolean;
}

export interface ComplianceMatrixAuditGridSlideData extends BaseSlide {
  type: 'compliance-matrix-audit-grid';
  standardsAudited: string[];
  passedControlCount: number;
  totalControlCount: number;
  auditSignoffDate: string;
  chiefAuditor: string;
  auditorRole: string; // Chief Software Engineer
  isFullyCompliant: boolean;
}

export interface UnitEconomicsWaterfallCardSlideData extends BaseSlide {
  type: 'unit-economics-waterfall-card';
  arrTotal: string;
  grossMarginPercent: number;
  cacPaybackMonths: number;
  netRetentionRatePercent: number;
  auditedBy: string;
  auditorRole: string; // Chief Software Engineer
  isPositiveContribution: boolean;
}

export interface ExecutiveBoardGovernanceDeckSlideData extends BaseSlide {
  type: 'executive-board-governance-deck';
  boardMeetingQuarter: string;
  quorumAttained: boolean;
  unanimousResolutionsPassed: number;
  presidingOfficer: string;
  officerRole: string; // Chief Software Engineer
  hasAuditCommitteeApproval: boolean;
}

export interface DeveloperPlatformApiSurfaceSlideData extends BaseSlide {
  type: 'developer-platform-api-surface';
  totalEndpoints: number;
  averageLatencyMs: number;
  rateLimitPerMinute: number;
  documentationVersion: string;
  leadEngineer: string;
  engineerRole: string; // Chief Software Engineer
  isPublicApiActive: boolean;
}

export interface EsgEnvironmentalFootprintSlideData extends BaseSlide {
  type: 'esg-environmental-footprint';
  totalCarbonEmissionsTons: number;
  renewableEnergyPercent: number;
  dataCenterPueRating: number;
  reportingYear: string;
  leadAuditor: string;
  auditorRole: string; // Chief Software Engineer
  isCarbonNeutralCertified: boolean;
}

export interface GlobalPartnerEcosystemGridSlideData extends BaseSlide {
  type: 'global-partner-ecosystem-grid';
  activeTier1Partners: number;
  ecosystemRevenuePercent: number;
  partnerRegions: string[];
  allianceDirector: string;
  directorRole: string; // Chief Software Engineer
  isCoSellingActive: boolean;
}
```
