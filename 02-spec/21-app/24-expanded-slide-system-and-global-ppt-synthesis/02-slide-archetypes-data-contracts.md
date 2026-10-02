# 02-Slide Archetypes & Data Contracts: The 15 New Slide Archetypes

> **Specification Identifier:** `24-expanded-slide-system-and-global-ppt-synthesis/02-slide-archetypes-data-contracts`  
> **Status:** `APPROVED SPECIFICATION`  
> **Target Release:** `v1.1.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Slide Data Schemas, TypeScript Interfaces & Wireframe Geometries  

---

## 1. Architectural Overview & Base Contract

All slide archetypes extend the foundational `BaseSlide` contract. Every archetype adheres strictly to:
1. **Canonical 16:9 1920x1080 Viewport Metrics:** Coordinates and bounding containers are fixed to 1920px × 1080px.
2. **Positive Boolean Polarity:** Only positive boolean properties (`is*`, `has*`) are permitted (e.g. `isHighlighted`, `isCompleted`, `isActive`, `isPositiveDelta`, `hasFeaturedGlow`, `hasBadge`).
3. **Pure DOM Text Guarantee:** No text is baked into image layers; all headlines, labels, and numbers render as editable DOM nodes.
4. **Discriminated Union:** Each slide specifies a literal `type` field matching its archetype identifier.

```typescript
export interface BaseSlide {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  themeId?: string;
  notes?: string;
}
```

---

## 2. Catalog of the 15 Slide Archetypes

```
+--------------------------------------------------------------------------------------------------+
|                              THE 15 SLIDE ARCHETYPES CATALOG                                     |
+--------------------------------------------------------------------------------------------------+
|  01. metric-grid           06. feature-grid             11. case-study                           |
|  02. problem-solution      07. architecture-diagram     12. comparison-columns                   |
|  03. quadrant-matrix       08. quote-callout            13. process-cycle                        |
|  04. market-opportunity    09. stats-callout            14. code-terminal                        |
|  05. timeline-roadmap      10. team-grid                15. call-to-action                       |
+--------------------------------------------------------------------------------------------------+
```

---

### Archetype 01: `metric-grid` (KPI Performance Matrix)

#### Purpose & Semantics
Presents 4 to 6 quantitative performance metrics or KPIs. Each card showcases a primary metric value, metric label, comparative delta badge (+/- percentage), timeframe pill, and trend indicator.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: FINANCIAL PERFORMANCE]                                            Top Padding: 80px    |
|  HEADLINE: Sovereign Infrastructure at Unprecedented Scale                                       |
|  SUBTITLE: FY2026 operational milestones demonstrating exponential platform efficiency          |
|                                                                                                  |
|  +--------------------+  +--------------------+  +--------------------+                          |
|  | $48.2M             |  | 99.999%            |  | 4.2x               |   Card Height: 260px    |
|  | Annual Run Rate    |  | Verified Uptime    |  | Compute Throughput |   Card Width: 540px     |
|  | [+324% YoY] [Q4]   |  | [+0.05% vs SLA][L12M]  | [+420% YoY] [2026] |   Gap: 30px             |
|  +--------------------+  +--------------------+  +--------------------+                          |
|                                                                                                  |
|  +--------------------+  +--------------------+  +--------------------+                          |
|  | 14.8M              |  | < 12ms             |  | 98.4%              |                          |
|  | Active API Nodes   |  | P99 Edge Latency   |  | Gross Retention    |                          |
|  | [+180% MoM] [Live] |  | [-45% vs Cloud][Global]| [+14% vs Benchmark]|                         |
|  +--------------------+  +--------------------+  +--------------------+                          |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface MetricGridItem {
  id: string;
  value: string;
  label: string;
  delta: string;
  timeframe: string;
  isPositiveDelta: boolean;
  trendDirection?: 'up' | 'down' | 'neutral';
}

export interface MetricGridSlideData extends BaseSlide {
  type: 'metric-grid';
  metrics: MetricGridItem[];
}
```

#### Field Constraints
- `metrics`: Array length 4 to 6 items.
- `value`: Max 12 characters (e.g. `"$48.2M"`, `"99.999%"`).
- `delta`: Max 20 characters (e.g. `"+324% YoY"`).

#### Canonical JSON Payload Example
```json
{
  "id": "slide-metric-grid-01",
  "type": "metric-grid",
  "kicker": "FINANCIAL PERFORMANCE",
  "title": "Sovereign Infrastructure at Unprecedented Scale",
  "subtitle": "FY2026 operational milestones demonstrating exponential platform efficiency",
  "metrics": [
    { "id": "m1", "value": "$48.2M", "label": "Annual Run Rate", "delta": "+324% YoY", "timeframe": "Q4 FY26", "isPositiveDelta": true, "trendDirection": "up" },
    { "id": "m2", "value": "99.999%", "label": "Verified Uptime", "delta": "+0.05% vs SLA", "timeframe": "L12M", "isPositiveDelta": true, "trendDirection": "up" },
    { "id": "m3", "value": "4.2x", "label": "Compute Throughput", "delta": "+420% YoY", "timeframe": "2026", "isPositiveDelta": true, "trendDirection": "up" },
    { "id": "m4", "value": "14.8M", "label": "Active API Nodes", "delta": "+180% MoM", "timeframe": "Live", "isPositiveDelta": true, "trendDirection": "up" },
    { "id": "m5", "value": "< 12ms", "label": "P99 Edge Latency", "delta": "-45% vs Cloud", "timeframe": "Global", "isPositiveDelta": true, "trendDirection": "down" },
    { "id": "m6", "value": "98.4%", "label": "Gross Retention", "delta": "+14% vs Index", "timeframe": "Annual", "isPositiveDelta": true, "trendDirection": "up" }
  ]
}
```

---

### Archetype 02: `problem-solution` (Bilateral Conflict & Resolution)

#### Purpose & Semantics
Contrasts current market/legacy friction on the left column with the sovereign breakthrough architecture on the right column, emphasizing asymmetric superiority with highlight pills.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: MARKET DISRUPTION]                                                Top Padding: 80px    |
|  HEADLINE: Breaking The Legacy Architectural Ceiling                                             |
|  SUBTITLE: Why status-quo cloud frameworks collapse under enterprise multi-agent workloads      |
|                                                                                                  |
|  +---------------------------------------+   +---------------------------------------+           |
|  | [LEGACY FRICTION / STATUS QUO]        |   | [SOVEREIGN BREAKTHROUGH / OUR ENGINE] |           |
|  |                                       |   |                                       |           |
|  | * Fragile orchestration pipelines     |   | * Deterministic compiled workflows   |           |
|  | * Vendor cloud lock-in & spiraling fee|   | * Zero-runtime dependency portability | Width: 830|
|  | * Unpredictable latency spikes (>500ms|   | * Sub-10ms localized execution loops  | Gap: 60px |
|  | * Opaque black-box model governance   |   | * Cryptographic audit logs & state    |           |
|  |                                       |   |                                       |           |
|  | Metric: 78% of teams report downtime  |   | Metric: 100% Deterministic Reproduc.  |           |
|  +---------------------------------------+   +---------------------------------------+           |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface ProblemColumn {
  tag: string;
  title: string;
  points: string[];
  calloutMetric?: string;
}

export interface SolutionColumn {
  tag: string;
  title: string;
  points: string[];
  calloutMetric?: string;
  isHighlighted: boolean;
}

export interface ProblemSolutionSlideData extends BaseSlide {
  type: 'problem-solution';
  problem: ProblemColumn;
  solution: SolutionColumn;
}
```

#### Field Constraints
- `problem.points` / `solution.points`: 3 to 5 bullet points each.
- `solution.isHighlighted`: Positive boolean defaulting to `true`.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-problem-solution-01",
  "type": "problem-solution",
  "kicker": "MARKET DISRUPTION",
  "title": "Breaking The Legacy Architectural Ceiling",
  "subtitle": "Why status-quo cloud frameworks collapse under enterprise multi-agent workloads",
  "problem": {
    "tag": "STATUS QUO / LEGACY",
    "title": "Fragile Cloud Spaghetti",
    "points": [
      "Fragile orchestration pipelines with cascading runtime failures",
      "Vendor cloud lock-in resulting in runaway compute expenditures",
      "Unpredictable P99 latency spikes exceeding 650ms per step",
      "Opaque black-box governance without verifiable audit trails"
    ],
    "calloutMetric": "78% Enterprise Failure Rate"
  },
  "solution": {
    "tag": "SOVEREIGN ARCHITECTURE",
    "title": "Deterministic Engineering",
    "points": [
      "Deterministic compiled state machines with zero drift",
      "Zero-runtime dependency portability across cloud, edge, or bare metal",
      "Sub-12ms localized execution loops with instant caching",
      "Cryptographic audit logs guaranteeing 100% reproducibility"
    ],
    "calloutMetric": "10x Throughput & 0.00% Drift",
    "isHighlighted": true
  }
}
```

---

### Archetype 03: `quadrant-matrix` (2x2 Strategic Positioning Matrix)

#### Purpose & Semantics
Maps competitive positioning or capability maturity across a 2x2 coordinate space defined by custom X and Y axes, plotting distinct nodes with high-visibility callouts.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: STRATEGIC POSITIONING]                                            Top Padding: 80px    |
|  HEADLINE: Defining The Sovereign Leadership Quadrant                                            |
|  SUBTITLE: Comparative landscape evaluation across automation depth and operational autonomy    |
|                                                                                                  |
|          ^ HIGH OPERATIONAL AUTONOMY (Y-Axis)                                                    |
|          |                                                                                       |
|     Q2   |   [Enterprise Incumbents]      |  Q1  [SOVEREIGN PLATFORM] (★ US)                     |
|          |   Manual Customization         |      Full Autonomy & Determinism                     |
|          |                                |                                                      |
|   -------+--------------------------------+---------------------------------------->             |
|          |                                |                       HIGH ARCHITECTURAL SCALE (X)   |
|     Q3   |   [Point Tools & Scripts]      |  Q4  [Legacy SaaS Suites]                            |
|          |   Fragmented Workflows         |      Rigid Workflows & Lock-in                       |
|          |                                |                                                      |
|          v LOW AUTONOMY                                                                          |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface MatrixQuadrant {
  id: 'q1' | 'q2' | 'q3' | 'q4';
  title: string;
  description: string;
  isTargetQuadrant: boolean;
}

export interface MatrixItem {
  id: string;
  name: string;
  x: number; // 0 to 100 percentage
  y: number; // 0 to 100 percentage
  isUs: boolean;
  badge?: string;
}

export interface QuadrantMatrixSlideData extends BaseSlide {
  type: 'quadrant-matrix';
  xAxisLabel: string;
  yAxisLabel: string;
  quadrants: MatrixQuadrant[];
  items: MatrixItem[];
}
```

#### Field Constraints
- `quadrants`: Exactly 4 quadrant definitions (`q1`, `q2`, `q3`, `q4`).
- `items`: 4 to 8 plotted items with `x` and `y` normalized between 0 and 100.
- `isTargetQuadrant`: Positive boolean flag indicating the preferred zone (typically Q1).

#### Canonical JSON Payload Example
```json
{
  "id": "slide-quadrant-matrix-01",
  "type": "quadrant-matrix",
  "kicker": "STRATEGIC POSITIONING",
  "title": "Defining The Sovereign Leadership Quadrant",
  "subtitle": "Comparative landscape evaluation across automation depth and operational autonomy",
  "xAxisLabel": "Architectural Scalability & Throughput",
  "yAxisLabel": "Autonomous Operational Independence",
  "quadrants": [
    { "id": "q1", "title": "Sovereign Leaders", "description": "High Autonomy, High Scale", "isTargetQuadrant": true },
    { "id": "q2", "title": "Custom Artisans", "description": "High Autonomy, Low Scale", "isTargetQuadrant": false },
    { "id": "q3", "title": "Fragmented Tools", "description": "Low Autonomy, Low Scale", "isTargetQuadrant": false },
    { "id": "q4", "title": "Legacy Monoliths", "description": "Low Autonomy, High Scale", "isTargetQuadrant": false }
  ],
  "items": [
    { "id": "i1", "name": "White Presentation Engine", "x": 88, "y": 92, "isUs": true, "badge": "Sovereign Leader" },
    { "id": "i2", "name": "Global Cloud Corp", "x": 75, "y": 35, "isUs": false },
    { "id": "i3", "name": "Legacy Slides SaaS", "x": 30, "y": 25, "isUs": false },
    { "id": "i4", "name": "Bespoke Design Agency", "x": 25, "y": 80, "isUs": false }
  ]
}
```

---

### Archetype 04: `market-opportunity` (TAM / SAM / SOM Concentric Sizing)

#### Purpose & Semantics
Visualizes total addressable market (TAM), serviceable addressable market (SAM), and serviceable obtainable market (SOM) through concentric hierarchical cards or nested tiers with CAGR metrics.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: MARKET OPPORTUNITY]                                               Top Padding: 80px    |
|  HEADLINE: Capturing The Multi-Billion Enterprise Synthesis Opportunity                          |
|  SUBTITLE: Market sizing breakdown across global presentation and generative workflow ecosystems|
|                                                                                                  |
|  +--------------------------------------------------------------------------------------------+  |
|  | TAM: $68.4 Billion  [Global Digital Presentation & Content Intelligence]        [CAGR: 24.8%] |  |
|  | +----------------------------------------------------------------------------------------+ |  |
|  | | SAM: $14.2 Billion  [Enterprise Executive Decks & Collaborative Engines]   [CAGR: 31.2%]| |  |
|  | | +------------------------------------------------------------------------------------+ | |  |
|  | | | SOM: $2.8 Billion  [Sovereign Code-Driven Canvas & AI Presentation Suites] [CAGR: 48.5%]| | |  |
|  | | | Projected Share: 18% penetration within 36 months via developer-led adoption       | | |  |
|  | | +------------------------------------------------------------------------------------+ | |  |
|  | +----------------------------------------------------------------------------------------+ |  |
|  +--------------------------------------------------------------------------------------------+  |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface MarketTier {
  id: 'tam' | 'sam' | 'som';
  tierLabel: string; // "TAM", "SAM", "SOM"
  marketSize: string; // "$68.4B"
  description: string;
  cagr: string; // "24.8%"
  isFocusTier: boolean;
}

export interface MarketOpportunitySlideData extends BaseSlide {
  type: 'market-opportunity';
  cagrHeadline: string;
  tiers: MarketTier[];
}
```

#### Field Constraints
- `tiers`: Exactly 3 tiers (`tam`, `sam`, `som`).
- `isFocusTier`: Positive boolean (true on SOM).

#### Canonical JSON Payload Example
```json
{
  "id": "slide-market-opportunity-01",
  "type": "market-opportunity",
  "kicker": "MARKET OPPORTUNITY",
  "title": "Capturing The Multi-Billion Enterprise Synthesis Opportunity",
  "subtitle": "Market sizing breakdown across global presentation and generative workflow ecosystems",
  "cagrHeadline": "34.6% Blended Sector CAGR",
  "tiers": [
    { "id": "tam", "tierLabel": "TAM", "marketSize": "$68.4B", "description": "Global Enterprise Presentation, Document Synthesis & Content Intelligence", "cagr": "24.8% CAGR", "isFocusTier": false },
    { "id": "sam", "tierLabel": "SAM", "marketSize": "$14.2B", "description": "Executive Pitch Decks, Interactive Canvases & Multi-Agent Design Engines", "cagr": "31.2% CAGR", "isFocusTier": false },
    { "id": "som", "tierLabel": "SOM", "marketSize": "$2.8B", "description": "Sovereign Code-Driven Presentations & High-Density Corporate Storytelling", "cagr": "48.5% CAGR", "isFocusTier": true }
  ]
}
```

---

### Archetype 05: `timeline-roadmap` (Quarterly Milestone Horizon)

#### Purpose & Semantics
Presents a 4-quarter sequential execution roadmap. Displays chronological quarters, thematic milestones, delivery deliverables, and status pills (Complete, In Progress, Planned).

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: STRATEGIC ROADMAP]                                                Top Padding: 80px    |
|  HEADLINE: 2026 Sovereign Platform Milestones & Delivery Horizon                                 |
|  SUBTITLE: Phased architectural rollout across core engine, multi-agent mesh, and enterprise SSO|
|                                                                                                  |
|   Q1 2026 [DONE]        Q2 2026 [ACTIVE]      Q3 2026 [PLANNED]     Q4 2026 [FUTURE]             |
|   ●====================●====================○====================○                              |
|   [Core Engine v1.0]   [Expanded Archetypes] [Multi-Agent Fleet]   [Sovereign Cloud SSO]        |
|   * 1080p Pure DOM     * 15 Slide Archetypes * Parallel Subagents  * Casbin RBAC Engine          |
|   * 10 Gradient Themes * In-Place Editing    * Automated QA Gates  * Air-Gapped Deployments      |
|   * Split-DB Engine    * Sound Sequencing    * Live Collaboration  * Global CDN Clustering       |
|                                                                                                  |
|   Status: Completed    Status: In Progress   Status: Q3 Backlog    Status: Q4 Vision             |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface RoadmapQuarter {
  id: string;
  quarter: string; // "Q1 2026"
  title: string;
  description: string;
  milestones: string[];
  status: 'completed' | 'in-progress' | 'planned';
  isCompleted: boolean;
  isActive: boolean;
}

export interface TimelineRoadmapSlideData extends BaseSlide {
  type: 'timeline-roadmap';
  quarters: RoadmapQuarter[];
}
```

#### Field Constraints
- `quarters`: Array of 3 to 4 chronological quarters.
- `isCompleted` / `isActive`: Positive booleans.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-timeline-roadmap-01",
  "type": "timeline-roadmap",
  "kicker": "STRATEGIC ROADMAP",
  "title": "2026 Sovereign Platform Milestones & Delivery Horizon",
  "subtitle": "Phased architectural rollout across core engine, multi-agent mesh, and enterprise SSO",
  "quarters": [
    {
      "id": "q1",
      "quarter": "Q1 2026",
      "title": "Core Engine Foundation",
      "description": "Deterministic 1080p canvas and 10-theme color matrix",
      "milestones": ["1080p Pure DOM Layout Engine", "10-Step Gradient Precision Tokens", "Split-DB Local State Persistence"],
      "status": "completed",
      "isCompleted": true,
      "isActive": false
    },
    {
      "id": "q2",
      "quarter": "Q2 2026",
      "title": "Expanded Slide Archetypes",
      "description": "15 enterprise slide archetypes & live in-place editing",
      "milestones": ["15 Enterprise Slide Archetypes", "In-Place Live Content Editing", "Sound & Motion Choreography"],
      "status": "in-progress",
      "isCompleted": false,
      "isActive": true
    },
    {
      "id": "q3",
      "quarter": "Q3 2026",
      "title": "Multi-Agent Orchestration",
      "description": "Parallel subagent generation and real-time QA linting",
      "milestones": ["Multi-Agent Presentation Generator", "Automated Contrast Verification", "Live Multi-Presenter HUD"],
      "status": "planned",
      "isCompleted": false,
      "isActive": false
    },
    {
      "id": "q4",
      "quarter": "Q4 2026",
      "title": "Enterprise Sovereign Suite",
      "description": "Air-gapped deployment, Casbin RBAC, and cluster federation",
      "milestones": ["Air-Gapped Enterprise Deployment", "Casbin RBAC Security Architecture", "Global Clustered Fleet Nodes"],
      "status": "planned",
      "isCompleted": false,
      "isActive": false
    }
  ]
}
```

---

### Archetype 06: `feature-grid` (Bento Feature Matrix)

#### Purpose & Semantics
Showcases system capabilities through an asymmetrical 6-card Bento grid. Features Lucide icon badges, card subtitles, bullet tags, and an optional featured glow card.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: CORE PLATFORM CAPABILITIES]                                       Top Padding: 80px    |
|  HEADLINE: Architected For Relentless Developer Productivity                                     |
|  SUBTITLE: Six foundational pillars underpinning the white presentation runtime environment      |
|                                                                                                  |
|  +--------------------+  +--------------------+  +--------------------+                          |
|  | [Icon] Pure DOM    |  | [Icon] 10 Themes   |  | [Icon] 15 Types    |   Bento Row 1           |
|  | Zero rasterization |  | Mathematical stops |  | Enterprise catalog |   Card Height: 240px    |
|  | 100% accessible   |  | Contrast validated |  | Pitch to technical |                         |
|  +--------------------+  +--------------------+  +--------------------+                          |
|                                                                                                  |
|  +--------------------+  +--------------------+  +--------------------+                          |
|  | [Icon] In-Place Ed |  | [Icon] Camera HUD  |  | [Icon] Clean Arch  |   Bento Row 2           |
|  | Instant blur save  |  | Cinematic zoom     |  | <= 100 line modules|                         |
|  | Keyboard shortcuts |  | Multi-dock controls|  | Zero debt footprint|                         |
|  +--------------------+  +--------------------+  +--------------------+                          |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface FeatureGridCard {
  id: string;
  icon: string; // Lucide icon name, e.g. "Cpu", "Palette", "Layers"
  title: string;
  description: string;
  badge?: string;
  hasFeaturedGlow: boolean;
}

export interface FeatureGridSlideData extends BaseSlide {
  type: 'feature-grid';
  cards: FeatureGridCard[];
}
```

#### Field Constraints
- `cards`: Array of exactly 6 cards for the 3x2 Bento grid.
- `hasFeaturedGlow`: Positive boolean for the anchor highlight card.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-feature-grid-01",
  "type": "feature-grid",
  "kicker": "CORE PLATFORM CAPABILITIES",
  "title": "Architected For Relentless Developer Productivity",
  "subtitle": "Six foundational pillars underpinning the white presentation runtime environment",
  "cards": [
    { "id": "c1", "icon": "Layers", "title": "Pure Live DOM Text", "description": "Zero rasterized typography. Every label, number, and title is an accessible, styleable DOM node.", "badge": "Accessibility", "hasFeaturedGlow": true },
    { "id": "c2", "icon": "Palette", "title": "10-Step Precision Palettes", "description": "Mathematically calibrated 10-step ramps guaranteeing WCAG AAA contrast across dark and light themes.", "badge": "Theming", "hasFeaturedGlow": false },
    { "id": "c3", "icon": "LayoutGrid", "title": "15 Slide Archetypes", "description": "Comprehensive taxonomy from KPI matrices to multi-tier architectures and interactive flywheels.", "badge": "Taxonomy", "hasFeaturedGlow": false },
    { "id": "c4", "icon": "Edit3", "title": "In-Place Inline Editing", "description": "Instant contentEditable text mutations with zero lag, seamless blur persistence, and undo history.", "badge": "Authoring", "hasFeaturedGlow": false },
    { "id": "c5", "icon": "Camera", "title": "Cinematic Camera HUD", "description": "GPU-interpolated viewport zooming with floating dock controls and multi-corner snapping.", "badge": "Presenter", "hasFeaturedGlow": false },
    { "id": "c6", "icon": "ShieldCheck", "title": "Modular Architecture", "description": "Strict 100-line component cap, leaf type isolation, and zero-debt dependency hygiene.", "badge": "Code Health", "hasFeaturedGlow": false }
  ]
}
```

---

### Archetype 07: `architecture-diagram` (4-Tier Sovereign Cloud Topology)

#### Purpose & Semantics
Visualizes complex enterprise system architectures via a 4-tier structural stack: Client Layer, Edge Gateway Layer, Microservices / Compute Layer, and Persistence / Storage Layer.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: SYSTEM TOPOLOGY]                                                  Top Padding: 80px    |
|  HEADLINE: Four-Tier Sovereign Infrastructure Architecture                                       |
|  SUBTITLE: High-throughput end-to-end telemetry from client viewport to distributed storage     |
|                                                                                                  |
|  +--------------------------------------------------------------------------------------------+  |
|  | LAYER 1: CLIENT PRESENTATION TIER                                                          |  |
|  | [Pure DOM Canvas 1920x1080]  <--->  [In-Place Edit Store]  <--->  [Cinematic Camera Engine]   |  |
|  +--------------------------------------------------------------------------------------------+  |
|                                 | (WebSocket Telemetry & REST)                                   |
|  +--------------------------------------------------------------------------------------------+  |
|  | LAYER 2: EDGE & GATEWAY TIER                                                               |  |
|  | [Cloudflare Edge Worker]     <--->  [TLS 1.3 Termination]  <--->  [Rate Limiter & WAF]     |  |
|  +--------------------------------------------------------------------------------------------+  |
|                                 | (gRPC High-Speed RPC Mesh)                                     |
|  +--------------------------------------------------------------------------------------------+  |
|  | LAYER 3: COMPUTE & MICROSERVICES TIER                                                      |  |
|  | [Task Dispatcher Fleet]     <--->  [AI Spec Synthesizer]  <--->  [Real-Time Audio Mixer]   |  |
|  +--------------------------------------------------------------------------------------------+  |
|                                 | (Encrypted TLS Shards)                                         |
|  +--------------------------------------------------------------------------------------------+  |
|  | LAYER 4: PERSISTENCE & DATA TIER                                                           |  |
|  | [Split SQLite Tier]         <--->  [Casbin RBAC Store]    <--->  [Blob Storage Cache]      |  |
|  +--------------------------------------------------------------------------------------------+  |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface ArchitectureTier {
  id: string;
  tierNumber: number; // 1 to 4
  name: string; // e.g. "Client Presentation Tier"
  protocol: string; // e.g. "WebSocket / REST"
  modules: Array<{
    name: string;
    detail: string;
    isPrimary: boolean;
  }>;
}

export interface ArchitectureDiagramSlideData extends BaseSlide {
  type: 'architecture-diagram';
  tiers: ArchitectureTier[];
}
```

#### Field Constraints
- `tiers`: Array of 4 architectural tiers.
- `modules`: 2 to 4 modules per tier.
- `isPrimary`: Positive boolean indicating the central gateway module.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-architecture-diagram-01",
  "type": "architecture-diagram",
  "kicker": "SYSTEM TOPOLOGY",
  "title": "Four-Tier Sovereign Infrastructure Architecture",
  "subtitle": "High-throughput end-to-end telemetry from client viewport to distributed storage",
  "tiers": [
    {
      "id": "tier-1",
      "tierNumber": 1,
      "name": "Client Presentation Tier",
      "protocol": "React 18 / Tailwind / Zustand",
      "modules": [
        { "name": "1080p Canvas Engine", "detail": "Pure DOM rendering", "isPrimary": true },
        { "name": "In-Place Edit Store", "detail": "Blur state persistence", "isPrimary": false },
        { "name": "Cinematic Camera HUD", "detail": "GPU transform presets", "isPrimary": false }
      ]
    },
    {
      "id": "tier-2",
      "tierNumber": 2,
      "name": "Edge Gateway & Ingress",
      "protocol": "TLS 1.3 / HTTP/3",
      "modules": [
        { "name": "Edge Routing Proxy", "detail": "Sub-5ms geolocation routing", "isPrimary": true },
        { "name": "Auth Barrier", "detail": "Zero-trust token validation", "isPrimary": false },
        { "name": "Telemetry Ingress", "detail": "Real-time audit emission", "isPrimary": false }
      ]
    },
    {
      "id": "tier-3",
      "tierNumber": 3,
      "name": "Compute & Synthesis Mesh",
      "protocol": "gRPC / Event Bus",
      "modules": [
        { "name": "Autonomous Agent Fleet", "detail": "Parallel subtask workers", "isPrimary": true },
        { "name": "Slide AI Synthesizer", "detail": "Automated prompt compiler", "isPrimary": false },
        { "name": "Audio Sequencer", "detail": "Directional sound synthesizer", "isPrimary": false }
      ]
    },
    {
      "id": "tier-4",
      "tierNumber": 4,
      "name": "Persistence & Storage Tier",
      "protocol": "Split SQLite / WAL Mode",
      "modules": [
        { "name": "Local Split SQLite", "detail": "Isolated partition storage", "isPrimary": true },
        { "name": "Casbin RBAC Engine", "detail": "Deterministic permissions", "isPrimary": false },
        { "name": "Asset Cache Vault", "detail": "Zero-egress vector repository", "isPrimary": false }
      ]
    }
  ]
}
```

---

### Archetype 08: `quote-callout` (Editorial Authority Pull-Quote)

#### Purpose & Semantics
High-authority editorial pull-quote designed for keynote impact. Displays monumental oversized quotation mark typography, verified author portrait, executive credentials, and context badge.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: KEYNOTE TESTIMONY]                                                Top Padding: 80px    |
|                                                                                                  |
|   “                                                                                              |
|   True enterprise autonomy is achieved not by adding more tooling,                              |
|   but by eliminating runtime indeterminism at the architectural foundation.                      |
|   When your presentation engine runs with compiled precision, every slide                        |
|   becomes an undeniable proof of sovereign capability.                                           |
|   ”                                                                                              |
|                                                                                                  |
|   +----+  ALIM UL KARIM                                                                          |
|   |Avatar| Chief Software Engineer, Enterprise Systems Architecture                              |
|   +----+  [VERIFIED CONTRIBUTOR] [GLOBAL PPT ARCHITECT]                                          |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface QuoteCalloutSlideData extends BaseSlide {
  type: 'quote-callout';
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarUrl: string;
  badge?: string;
  hasVerifiedBadge: boolean;
}
```

#### Field Constraints
- `role`: Standardized to "Chief Software Engineer" for Alim Ul Karim references.
- `hasVerifiedBadge`: Positive boolean.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-quote-callout-01",
  "type": "quote-callout",
  "kicker": "KEYNOTE TESTIMONY",
  "title": "The Mandate for Deterministic Architecture",
  "quote": "True enterprise autonomy is achieved not by adding more layers of tooling, but by eliminating runtime indeterminism at the architectural foundation. When your presentation engine runs with compiled precision, every slide becomes an undeniable proof of sovereign capability.",
  "author": "Alim Ul Karim",
  "role": "Chief Software Engineer",
  "company": "Enterprise Systems & Autonomous Runtimes",
  "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
  "badge": "Architecture Keynote",
  "hasVerifiedBadge": true
}
```

---

### Archetype 09: `stats-callout` (Monumental Headline Stat)

#### Purpose & Semantics
Spotlights a singular monumental statistic (e.g. "10x", "99.99%", "<12ms") using giant display typography (120px+), supported by 3 comparative contextual proof chips.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: CORE METRIC BREAKTHROUGH]                                         Top Padding: 80px    |
|  HEADLINE: Unrivaled Throughput Acceleration                                                     |
|                                                                                                  |
|              10.4x                                                                               |
|              FASTER EXECUTION SPEED                                                              |
|              Measured across 500,000 automated slide generation cycles                           |
|                                                                                                  |
|   +--------------------------+  +--------------------------+  +--------------------------+       |
|   | Sub-12ms Render Time     |  | 0.00% Drift Rate         |  | 100% Deterministic       |       |
|   | Instant GPU composition  |  | Cryptographic validation |  | Reproducible everywhere  |       |
|   +--------------------------+  +--------------------------+  +--------------------------+       |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface StatProofChip {
  id: string;
  label: string;
  detail: string;
  isPositive: boolean;
}

export interface StatsCalloutSlideData extends BaseSlide {
  type: 'stats-callout';
  primaryStat: string; // "10.4x"
  statLabel: string; // "Faster Execution Speed"
  statContext: string;
  proofChips: StatProofChip[];
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-stats-callout-01",
  "type": "stats-callout",
  "kicker": "CORE METRIC BREAKTHROUGH",
  "title": "Unrivaled Throughput Acceleration",
  "subtitle": "Benchmarking autonomous canvas compilation against standard cloud renderers",
  "primaryStat": "10.4x",
  "statLabel": "Faster Execution Speed",
  "statContext": "Measured across 500,000 automated slide generation and compilation cycles",
  "proofChips": [
    { "id": "pc1", "label": "Sub-12ms Render Time", "detail": "Instant GPU CSS transform composition", "isPositive": true },
    { "id": "pc2", "label": "0.00% Drift Rate", "detail": "Zero layout shift or fractional pixel jitter", "isPositive": true },
    { "id": "pc3", "label": "100% Deterministic", "detail": "Bit-for-bit reproducible canvas state", "isPositive": true }
  ]
}
```

---

### Archetype 10: `team-grid` (Leadership & Engineering Roster)

#### Purpose & Semantics
Presents 4 to 6 leadership, engineering, or research team profiles. Displays profile image, full name, executive title, domain credentials, and technical specialization tags. Standardizes Alim Ul Karim as "Chief Software Engineer".

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: CORE LEADERSHIP]                                                  Top Padding: 80px    |
|  HEADLINE: World-Class Engineering & Architecture Leadership                                     |
|  SUBTITLE: Proven pioneers in distributed systems, compilers, and declarative UI runtimes       |
|                                                                                                  |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+  |
|  | [Avatar]           |  | [Avatar]           |  | [Avatar]           |  | [Avatar]           |  |
|  | Alim Ul Karim      |  | Elena Rostova      |  | Marcus Vance       |  | Dr. Sarah Chen     |  |
|  | Chief Software Eng.|  | Principal Frontend |  | Head of Compilers  |  | AI Research Lead   |  |
|  | Enterprise Systems |  | WebGL & Canvas Perf|  | Low-Latency Mesh   |  | Multi-Agent Models |  |
|  | [Systems][Core]    |  | [UI/UX][Animation] |  | [Rust][Orchestr.]  |  | [LLM][Verification]|  |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+  |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  avatarUrl: string;
  tags: string[];
  isLeadership: boolean;
}

export interface TeamGridSlideData extends BaseSlide {
  type: 'team-grid';
  members: TeamMember[];
}
```

#### Field Constraints
- Alim Ul Karim must strictly be titled `"Chief Software Engineer"`.
- `members`: 4 to 6 members.
- `isLeadership`: Positive boolean.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-team-grid-01",
  "type": "team-grid",
  "kicker": "CORE LEADERSHIP",
  "title": "World-Class Engineering & Architecture Leadership",
  "subtitle": "Proven pioneers in distributed systems, compilers, and declarative UI runtimes",
  "members": [
    {
      "id": "tm1",
      "name": "Alim Ul Karim",
      "role": "Chief Software Engineer",
      "credentials": "Lead Architect, Distributed Runtimes & Presentation Systems",
      "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
      "tags": ["Distributed Systems", "Core Architecture", "Compiler Design"],
      "isLeadership": true
    },
    {
      "id": "tm2",
      "name": "Elena Rostova",
      "role": "Principal Frontend Architect",
      "credentials": "Specialist in 60fps WebGL, Canvas Math & High-Fidelity Motion",
      "avatarUrl": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300",
      "tags": ["DOM Typography", "GPU Transforms", "Design Tokens"],
      "isLeadership": true
    },
    {
      "id": "tm3",
      "name": "Marcus Vance",
      "role": "Head of Systems & Performance",
      "credentials": "Low-Latency Concurrency, Split-DB Persistence & IPC Runtimes",
      "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      "tags": ["SQLite WAL", "Memory Optimization", "Cache Engine"],
      "isLeadership": false
    },
    {
      "id": "tm4",
      "name": "Dr. Sarah Chen",
      "role": "AI Research Lead",
      "credentials": "Multi-Agent Orchestration, Prompt Synthesis & Formal Auditing",
      "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
      "tags": ["Agent Swarms", "Automated QA", "Verification"],
      "isLeadership": false
    }
  ]
}
```

---

### Archetype 11: `case-study` (Enterprise Customer Transformation Story)

#### Purpose & Semantics
Detailed four-part enterprise transformation case study structured into: Client Profile, Business Challenge, Implemented Sovereign Solution, and Measurable ROI Impact Metrics.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: ENTERPRISE CASE STUDY]                                            Top Padding: 80px    |
|  HEADLINE: Global Fintech Corp Accelerates Deck Velocity by 12x                                  |
|  SUBTITLE: How a Tier-1 financial institution eliminated deck friction with our sovereign engine|
|                                                                                                  |
|  +---------------------------------------+   +---------------------------------------+           |
|  | CLIENT PROFILE & CHALLENGE            |   | SOLUTION IMPLEMENTED & MEASURABLE ROI |           |
|  | Client: Tier-1 Global Investment Bank |   | Solution: Sovereign White Engine      |           |
|  | Industry: Institutional Finance       |   | Deployment: Air-gapped on-premise     |           |
|  |                                       |   |                                       |           |
|  | "Legacy tools took 48 hours to assemble|   | Results:                              |           |
|  | executive decks with frequent styling |   | * 94% reduction in deck authoring time|           |
|  | corruption and zero version control." |   | * 100% brand typography compliance   |           |
|  |                                       |   | * $1.4M saved in annual design spend  |           |
|  +---------------------------------------+   +---------------------------------------+           |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface CaseStudyStat {
  metric: string;
  label: string;
}

export interface CaseStudySlideData extends BaseSlide {
  type: 'case-study';
  clientName: string;
  clientIndustry: string;
  clientLogoUrl?: string;
  challengeTitle: string;
  challengeDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  results: CaseStudyStat[];
  hasVerifiedOutcome: boolean;
}
```

#### Canonical JSON Payload Example
```json
{
  "id": "slide-case-study-01",
  "type": "case-study",
  "kicker": "ENTERPRISE CASE STUDY",
  "title": "Global Fintech Corp Accelerates Deck Velocity by 12x",
  "subtitle": "How a Tier-1 financial institution eliminated deck friction with our sovereign engine",
  "clientName": "Apex Capital International",
  "clientIndustry": "Institutional Asset Management",
  "challengeTitle": "Legacy Presentation Bottlenecks",
  "challengeDescription": "Executive investment teams spent 48 hours per week manually adjusting PowerPoint formatting, suffering frequent font corruptions and zero programmatic version control.",
  "solutionTitle": "Sovereign Code-Driven Slide Synthesis",
  "solutionDescription": "Implemented White Presentation Engine with automated data connectors, deterministic 1080p canvas layout, and air-gapped local Split-DB storage.",
  "results": [
    { "metric": "12x", "label": "Faster Deck Assembly" },
    { "metric": "100%", "label": "Brand Compliance" },
    { "metric": "$1.4M", "label": "Annual Savings" }
  ],
  "hasVerifiedOutcome": true
}
```

---

### Archetype 12: `comparison-columns` (3-Tier Model Comparison Matrix)

#### Purpose & Semantics
Directly contrasts 3 architectural approaches or products (e.g. Traditional Slides, Cloud Presentation SaaS, Sovereign Engine) across feature criteria, highlighting the winning column.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: COMPARATIVE EVALUATION]                                           Top Padding: 80px    |
|  HEADLINE: Choosing The Right Architectural Foundation                                           |
|  SUBTITLE: Feature-by-feature evaluation against traditional slide tools and cloud presentation SaaS|
|                                                                                                  |
|  +-----------------------+   +-----------------------+   +-----------------------+               |
|  | TRADITIONAL PPT       |   | CLOUD SAAS SLIDES     |   | SOVEREIGN ENGINE (★)  |               |
|  | Rigid desktop file    |   | Cloud subscription    |   | Deterministic Code    |               |
|  |                       |   |                       |   |                       |   Col Width:  |
|  | ✗ Binary file lock    |   | ✗ Vendor lock-in      |   | ✓ Pure DOM typography |   540px       |
|  | ✗ Manual formatting   |   | ✗ Opaque security     |   | ✓ 10 Precision themes |   Gap: 30px   |
|  | ✗ Zero live data sync |   | ~ Fragile web viewers |   | ✓ In-place live edits |               |
|  | ✗ No programmatic API |   | ~ Limited hotkeys     |   | ✓ Air-gapped deploy   |               |
|  |                       |   |                       |   |                       |               |
|  | $0 (Legacy)           |   | $40/user/mo           |   | Unlimited / Sovereign |               |
|  +-----------------------+   +-----------------------+   +-----------------------+               |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface ComparisonColumnItem {
  id: string;
  name: string;
  subtitle: string;
  priceOrBadge: string;
  features: Array<{
    text: string;
    isSupported: boolean;
  }>;
  isHighlighted: boolean;
}

export interface ComparisonColumnsSlideData extends BaseSlide {
  type: 'comparison-columns';
  columns: ComparisonColumnItem[];
}
```

#### Field Constraints
- `columns`: Exactly 3 columns.
- `isHighlighted`: Positive boolean on the featured column.
- `isSupported`: Positive boolean on each row feature item.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-comparison-columns-01",
  "type": "comparison-columns",
  "kicker": "COMPARATIVE EVALUATION",
  "title": "Choosing The Right Architectural Foundation",
  "subtitle": "Feature-by-feature evaluation against traditional slide tools and cloud presentation SaaS",
  "columns": [
    {
      "id": "col-legacy",
      "name": "Traditional Slides",
      "subtitle": "Binary files & manual editing",
      "priceOrBadge": "Legacy Office Suites",
      "features": [
        { "text": "Pure Live DOM text rendering", "isSupported": false },
        { "text": "Programmatic slide generation", "isSupported": false },
        { "text": "10-Step precision color ramp", "isSupported": false },
        { "text": "In-place inline canvas editing", "isSupported": false },
        { "text": "Zero-egress local persistence", "isSupported": true }
      ],
      "isHighlighted": false
    },
    {
      "id": "col-cloud",
      "name": "Cloud Presentation SaaS",
      "subtitle": "Hosted proprietary web apps",
      "priceOrBadge": "Cloud Subscription",
      "features": [
        { "text": "Pure Live DOM text rendering", "isSupported": false },
        { "text": "Programmatic slide generation", "isSupported": false },
        { "text": "10-Step precision color ramp", "isSupported": false },
        { "text": "In-place inline canvas editing", "isSupported": true },
        { "text": "Zero-egress local persistence", "isSupported": false }
      ],
      "isHighlighted": false
    },
    {
      "id": "col-sovereign",
      "name": "Sovereign White Engine",
      "subtitle": "Deterministic React & TypeScript",
      "priceOrBadge": "Enterprise Sovereign",
      "features": [
        { "text": "Pure Live DOM text rendering", "isSupported": true },
        { "text": "Programmatic slide generation", "isSupported": true },
        { "text": "10-Step precision color ramp", "isSupported": true },
        { "text": "In-place inline canvas editing", "isSupported": true },
        { "text": "Zero-egress local persistence", "isSupported": true }
      ],
      "isHighlighted": true
    }
  ]
}
```

---

### Archetype 13: `process-cycle` (4-Stage Continuous Flywheel Engine)

#### Purpose & Semantics
Visualizes a closed-loop compounding lifecycle (e.g. Discovery -> Construction -> Synthesis -> Compounding Scale) arranged in a clockwise circular or 4-corner flow around a central strategic core.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: OPERATIONAL FLYWHEEL]                                             Top Padding: 80px    |
|  HEADLINE: The Compounding Sovereign Lifecycle Loop                                              |
|  SUBTITLE: Continuous four-phase delivery cycle driving self-improving platform acceleration     |
|                                                                                                  |
|                    +------------------------------------+                                        |
|                    | STAGE 1: DISCOVER & AUDIT          |                                        |
|                    | Continuous spec & codebase parsing |                                        |
|                    +-----------------+------------------+                                        |
|                                      |                                                           |
|             +--------------------+   v   +--------------------+                                  |
|             | STAGE 4: SCALE     |  (★)  | STAGE 2: BUILD     |                                  |
|             | Zero-defect rollout|  HUB  | Deterministic DOM  |                                  |
|             +--------------------+       +--------------------+                                  |
|                                      ^                                                           |
|                                      |                                                           |
|                    +-----------------+------------------+                                        |
|                    | STAGE 3: SYNTHESIZE & VERIFY       |                                        |
|                    | Automated QA & contrast checks     |                                        |
|                    +------------------------------------+                                        |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface ProcessStage {
  id: string;
  stageNumber: number; // 1 to 4
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
}

export interface ProcessCycleSlideData extends BaseSlide {
  type: 'process-cycle';
  centerHubTitle: string;
  centerHubSubtitle: string;
  stages: ProcessStage[];
}
```

#### Field Constraints
- `stages`: Exactly 4 stages in clockwise sequence.
- `isActive`: Positive boolean highlighting the current operational focus.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-process-cycle-01",
  "type": "process-cycle",
  "kicker": "OPERATIONAL FLYWHEEL",
  "title": "The Compounding Sovereign Lifecycle Loop",
  "subtitle": "Continuous four-phase delivery cycle driving self-improving platform acceleration",
  "centerHubTitle": "Sovereign Core",
  "centerHubSubtitle": "Self-Optimizing Engine",
  "stages": [
    { "id": "s1", "stageNumber": 1, "title": "Discover & Plan", "description": "Rigorous specification auditing and architectural boundary decomposition.", "icon": "Search", "isActive": false },
    { "id": "s2", "stageNumber": 2, "title": "Build & Compose", "description": "Pure DOM component synthesis adhering to strict 100-line modular bounds.", "icon": "Code2", "isActive": true },
    { "id": "s3", "stageNumber": 3, "title": "Audit & Verify", "description": "Automated contrast validation, zero-debt linters, and type checking.", "icon": "CheckCheck", "isActive": false },
    { "id": "s4", "stageNumber": 4, "title": "Deploy & Scale", "description": "Deterministic local persistence and global presentation dissemination.", "icon": "Rocket", "isActive": false }
  ]
}
```

---

### Archetype 14: `code-terminal` (macOS Syntax Log & Command Console)

#### Purpose & Semantics
Developer-oriented slide featuring a realistic macOS window chrome with red/yellow/green window controls, command execution lines, syntax-colored output logs, and an interactive copy button.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: DEVELOPER INTERFACE]                                              Top Padding: 80px    |
|  HEADLINE: Instantaneous Programmatic Compilation via CLI                                       |
|  SUBTITLE: High-speed presentation compilation and archetype generation in milliseconds          |
|                                                                                                  |
|  +--------------------------------------------------------------------------------------------+  |
|  | (● ● ●)  terminal@white-engine: ~/presentations/corporate-deck              [COPY CODE]    |  |
|  +--------------------------------------------------------------------------------------------+  |
|  | $ pnpm run build:slides --theme=wp-exam-purple --archetypes=15                             |  |
|  |                                                                                            |  |
|  | [INFO] Ingesting specification matrix from 02-spec/21-app/24-expanded-slide-system...      |  |
|  | [OK]   Compiled 15/15 slide archetypes in 8.4ms (zero bundle warnings)                     |  |
|  | [OK]   WCAG AAA contrast verified for theme: 'WP Exam Purple (Royal Tech)'                 |  |
|  | [OK]   Canvas bound locked to 1920x1080 @ 60fps GPU acceleration                           |  |
|  | [SUCCESS] Presentation ready at file:///presentations/index.html (Status: ZERO DEFECTS)    |  |
|  +--------------------------------------------------------------------------------------------+  |
|                                                                             Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface TerminalLine {
  id: string;
  type: 'command' | 'info' | 'success' | 'warning' | 'error';
  text: string;
}

export interface CodeTerminalSlideData extends BaseSlide {
  type: 'code-terminal';
  windowTitle: string;
  commandSnippet: string;
  outputLines: TerminalLine[];
  hasExecutionSuccess: boolean;
}
```

#### Field Constraints
- `outputLines`: 4 to 8 lines.
- `hasExecutionSuccess`: Positive boolean driving terminal prompt status indicator.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-code-terminal-01",
  "type": "code-terminal",
  "kicker": "DEVELOPER INTERFACE",
  "title": "Instantaneous Programmatic Compilation via CLI",
  "subtitle": "High-speed presentation compilation and archetype generation in milliseconds",
  "windowTitle": "terminal@white-engine: ~/presentations/corporate-deck",
  "commandSnippet": "pnpm run build:slides --theme=wp-exam-purple --archetypes=15",
  "outputLines": [
    { "id": "l1", "type": "info", "text": "[INFO] Ingesting specification matrix from 02-spec/21-app/24-expanded-slide-system..." },
    { "id": "l2", "type": "success", "text": "[OK]   Compiled 15/15 slide archetypes in 8.4ms (zero bundle warnings)" },
    { "id": "l3", "type": "success", "text": "[OK]   WCAG AAA contrast verified for theme: 'WP Exam Purple (Royal Tech)'" },
    { "id": "l4", "type": "success", "text": "[OK]   Canvas bound locked to 1920x1080 @ 60fps GPU acceleration" },
    { "id": "l5", "type": "success", "text": "[SUCCESS] Presentation ready at file:///presentations/index.html (Status: ZERO DEFECTS)" }
  ],
  "hasExecutionSuccess": true
}
```

---

### Archetype 15: `call-to-action` (Executive Closing & Conversion Portal)

#### Purpose & Semantics
High-conversion concluding slide designed to drive executive follow-ups. Features bold primary and secondary call-to-action buttons, verified contact channels (email, website), and sovereign assurance badges.

#### ASCII Wireframe Geometry (1920x1080)
```
+--------------------------------------------------------------------------------------------------+
|  [KICKER: NEXT STEPS & ENGAGEMENT]                                          Top Padding: 80px    |
|                                                                                                  |
|  HEADLINE: Ready To Modernize Your Enterprise Presentations?                                     |
|  SUBTITLE: Deploy sovereign declarative slide engineering across your organization today         |
|                                                                                                  |
|         +-----------------------------+     +-----------------------------+                      |
|         | [SCHEDULE EXECUTIVE DEMO]   |     | [BROWSE ARCHETYPE LIBRARY]  |                      |
|         +-----------------------------+     +-----------------------------+                      |
|                                                                                                  |
|   +--------------------------+  +--------------------------+  +--------------------------+       |
|   | Direct Architecture Desk |  | Enterprise Engineering   |  | Open Verification Spec   |       |
|   | chief@riseup.enterprise  |  | https://white-pres.dev   |  | GitHub / Air-Gapped Docs |       |
|   +--------------------------+  +--------------------------+  +--------------------------+       |
|                                                                                                  |
|   [✓ 100% Deterministic] [✓ Zero Egress Cloud] [✓ Enterprise Ready]         Bottom Padding: 80px |
+--------------------------------------------------------------------------------------------------+
```

#### TypeScript Interface
```typescript
export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface CallToActionSlideData extends BaseSlide {
  type: 'call-to-action';
  primaryCtaLabel: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel: string;
  secondaryCtaUrl?: string;
  contactChannels: ContactChannel[];
  trustBadges: string[];
  hasDirectAccess: boolean;
}
```

#### Field Constraints
- `primaryCtaLabel` & `secondaryCtaLabel`: Max 30 chars each.
- `contactChannels`: 2 to 3 channels.
- `hasDirectAccess`: Positive boolean.

#### Canonical JSON Payload Example
```json
{
  "id": "slide-call-to-action-01",
  "type": "call-to-action",
  "kicker": "NEXT STEPS & ENGAGEMENT",
  "title": "Ready To Modernize Your Enterprise Presentations?",
  "subtitle": "Deploy sovereign declarative slide engineering across your organization today",
  "primaryCtaLabel": "Schedule Executive Demo",
  "primaryCtaUrl": "https://white-pres.dev/demo",
  "secondaryCtaLabel": "Browse Archetype Catalog",
  "secondaryCtaUrl": "https://white-pres.dev/archetypes",
  "contactChannels": [
    { "id": "cc1", "label": "Direct Architecture Desk", "value": "chief@riseup.enterprise", "icon": "Mail" },
    { "id": "cc2", "label": "Enterprise Engineering Portal", "value": "https://white-pres.dev", "icon": "Globe" },
    { "id": "cc3", "label": "Sovereign Specs", "value": "github.com/alimtvnetwork/white-pres", "icon": "ShieldCheck" }
  ],
  "trustBadges": [
    "100% Deterministic",
    "Zero Egress Air-Gapped",
    "Enterprise SSO Ready"
  ],
  "hasDirectAccess": true
}
```

---

## 3. Discriminated Union & Type Guard Helpers

```typescript
export type ExpandedSlideData =
  | MetricGridSlideData
  | ProblemSolutionSlideData
  | QuadrantMatrixSlideData
  | MarketOpportunitySlideData
  | TimelineRoadmapSlideData
  | FeatureGridSlideData
  | ArchitectureDiagramSlideData
  | QuoteCalloutSlideData
  | StatsCalloutSlideData
  | TeamGridSlideData
  | CaseStudySlideData
  | ComparisonColumnsSlideData
  | ProcessCycleSlideData
  | CodeTerminalSlideData
  | CallToActionSlideData;

export function isMetricGridSlide(slide: BaseSlide): slide is MetricGridSlideData {
  return slide.type === 'metric-grid';
}

export function isProblemSolutionSlide(slide: BaseSlide): slide is ProblemSolutionSlideData {
  return slide.type === 'problem-solution';
}

export function isQuadrantMatrixSlide(slide: BaseSlide): slide is QuadrantMatrixSlideData {
  return slide.type === 'quadrant-matrix';
}

export function isTimelineRoadmapSlide(slide: BaseSlide): slide is TimelineRoadmapSlideData {
  return slide.type === 'timeline-roadmap';
}
```

---

## 4. Cross-References

| Document | File Path | Focus |
|:---|:---|:---|
| Overview Specification | [01-overview.md](01-overview.md) | Architectural pillars & persona standardization |
| Global PPT Themes Subtask | [.ai-memory/plans/subtasks/24-expanded-slide-system-and-global/01-global-ppt-themes.md](../../../.ai-memory/plans/subtasks/24-expanded-slide-system-and-global/01-global-ppt-themes.md) | Palette dynamics and CSS animations |
| Batch 1 Archetypes Subtask | [.ai-memory/plans/subtasks/24-expanded-slide-system-and-global/03-new-slide-archetypes-batch-1.md](../../../.ai-memory/plans/subtasks/24-expanded-slide-system-and-global/03-new-slide-archetypes-batch-1.md) | Component authoring instructions (1-8) |
