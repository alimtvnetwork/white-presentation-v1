# 02-Data Contracts: Master Catalog of the 15 Kinetic Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/31-global-ppt-motion-design-and-15-kinetic-archetypes/02-data-contracts`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.5.0`  
> **Author:** Spec Author Subagent 01  
> **Created:** 2026-10-03  
> **Domain:** TypeScript Schemas, Virtual Coordinate Budgets, Step Count Formulas, ASCII Wireframes & Verified JSON Fixtures  

---

## 1. Architectural Foundation & Base Contract

Every one of the 15 kinetic slide archetypes specified in this document extends the foundational `BaseSlide` contract. Every archetype adheres strictly to:

1. **Canonical 16:9 1920x1080 Viewport Geometry:** All bounding containers and coordinate calculations are fixed to exactly $1920\text{px}$ width by $1080\text{px}$ height. Layout drift across disparate display resolutions is eliminated through uniform GPU transform scaling.
2. **Pure Live DOM Typography Mandate:** Every text node (headlines, subtitles, kicker pill badges, body narratives, table cells, metric digits, and footnotes) renders as an accessible, selectable HTML element. Text must never be flattened into raster graphics or canvas bitmaps.
3. **Stepwise Intra-Slide Progression:** Slides support internal sub-step choreography (`activeStep: number`, `maxSteps: number`), resolving items into `past` (0.75 opacity with checkmark), `active` (1.00 opacity with glowing halo and spring physics), or `future` (0.40 opacity with $1.25\text{px}$ optical blur).
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

## 3. Master Catalog of the 15 New Kinetic Slide Archetypes

```
+---------------------------------------------------------------------------------------------------+
|                        MASTER CATALOG: 15 KINETIC SLIDE ARCHETYPES                                |
+---------------------------------------------------------------------------------------------------+
|  [01] code-diff-comparison     --> Side-by-Side Code Diff & Refactoring Comparison (Multi-step)    |
|  [02] global-cloud-edge-mesh   --> Global Cloud Edge Network & Latency Matrix (Flat)              |
|  [03] api-endpoint-inspector   --> Interactive API Endpoint & Payload Studio (Multi-step)         |
|  [04] database-schema-erd      --> Relational Split-DB Entity Relationship Diagram (Multi-step)   |
|  [05] security-threat-model    --> Zero-Trust Attack Surface & Defensive Perimeter (Flat)         |
|  [06] ai-agent-swarm-dag       --> Autonomous Multi-Agent Orchestration DAG (Multi-step)          |
|  [07] financial-burn-runway    --> Venture Financial Model & Capital Runway Horizon (Flat)        |
|  [08] bento-kpi-mosaic         --> Asymmetric Bento Metric Mosaic (Flat)                          |
|  [09] canary-release-gauge     --> Progressive Canary & Feature Flag Rollout (Multi-step)         |
|  [10] incident-rca-postmortem  --> 4-Part Root Cause Analysis & Postmortem (Multi-step)           |
|  [11] slas-and-uptime-status   --> Public Status Page & 99.999% Service Health Matrix (Flat)       |
|  [12] audio-waveform-studio    --> Voice AI & Audio Synthesizer Waveform Visualizer (Multi-step)  |
|  [13] hardware-silicon-spec    --> Deep-Tech Device / Silicon Hardware Spec Sheet (Flat)          |
|  [14] cohort-retention-heatmap --> Investor Traction & Compound Cohort Heatmap (Flat)            |
|  [15] verifiable-audit-ledger  --> Cryptographic Evidence Gate & Audit Checklist (Multi-step)     |
+---------------------------------------------------------------------------------------------------+
```

### Archetype Category & Step Matrix

| # | Type Identifier | Interface Contract | Layout Category | Step Count Formula | Focus Dynamic |
|:---:|:---|:---|:---:|:---:|:---|
| 01 | `code-diff-comparison` | `CodeDiffComparisonSlideData` | Multi-step | $\max(\text{chunks.length}, 1)$ | Hunk-by-hunk diff illumination & refactor telemetry |
| 02 | `global-cloud-edge-mesh` | `GlobalCloudEdgeMeshSlideData` | Flat | $1$ | High-density Anycast PoPs, latency matrix & backbone links |
| 03 | `api-endpoint-inspector` | `ApiEndpointInspectorSlideData` | Multi-step | $\text{parameters.length} + (\text{hasPayload} ? 1 : 0)$ | Interactive request/response payload & schema drawer |
| 04 | `database-schema-erd` | `DatabaseSchemaErdSlideData` | Multi-step | $\max(\text{tables.length}, 1)$ | PascalCase entity relationships, join rails & partition keys |
| 05 | `security-threat-model` | `SecurityThreatModelSlideData` | Flat | $1$ | STRIDE attack vectors, defense perimeter & key vaults |
| 06 | `ai-agent-swarm-dag` | `AiAgentSwarmDagSlideData` | Multi-step | $\max(\text{nodes.length}, 1)$ | Autonomous agent handoffs, task tokens & evidence gates |
| 07 | `financial-burn-runway` | `FinancialBurnRunwaySlideData` | Flat | $1$ | Capital runway horizon, net-burn trajectory & milestones |
| 08 | `bento-kpi-mosaic` | `BentoKpiMosaicSlideData` | Flat | $1$ | Golden-ratio asymmetric bento grid & dual-axis sparklines |
| 09 | `canary-release-gauge` | `CanaryReleaseGaugeSlideData` | Multi-step | $\max(\text{stages.length}, 1)$ | 1% to 100% traffic shift gauge, error budgets & circuit breakers |
| 10 | `incident-rca-postmortem` | `IncidentRcaPostmortemSlideData` | Multi-step | $4$ | 4-Part RCA: Immediate Cause, Root Cause, Impact & Actions |
| 11 | `slas-and-uptime-status` | `SlasAndUptimeStatusSlideData` | Flat | $1$ | 99.999% health matrix, 90-day strip calendar & MTTD/MTTR |
| 12 | `audio-waveform-studio` | `AudioWaveformStudioSlideData` | Multi-step | $\max(\text{tracks.length}, 1)$ | Multichannel spectrogram, phoneme alignment & voice channels |
| 13 | `hardware-silicon-spec` | `HardwareSiliconSpecSlideData` | Flat | $1$ | Die floorplan blocks, TDP envelope & memory interconnects |
| 14 | `cohort-retention-heatmap` | `CohortRetentionHeatmapSlideData` | Flat | $1$ | Triangular SaaS retention cohorts, decay curves & NRR callout |
| 15 | `verifiable-audit-ledger` | `VerifiableAuditLedgerSlideData` | Multi-step | $\max(\text{gates.length}, 1)$ | Merkle tree evidence gates, cryptographic hashes & signatures |

---

## 4. Discriminated Union Declarations

```typescript
export type KineticSuiteSlideType =
  | 'code-diff-comparison'
  | 'global-cloud-edge-mesh'
  | 'api-endpoint-inspector'
  | 'database-schema-erd'
  | 'security-threat-model'
  | 'ai-agent-swarm-dag'
  | 'financial-burn-runway'
  | 'bento-kpi-mosaic'
  | 'canary-release-gauge'
  | 'incident-rca-postmortem'
  | 'slas-and-uptime-status'
  | 'audio-waveform-studio'
  | 'hardware-silicon-spec'
  | 'cohort-retention-heatmap'
  | 'verifiable-audit-ledger';

export type KineticSuiteSlideData =
  | CodeDiffComparisonSlideData
  | GlobalCloudEdgeMeshSlideData
  | ApiEndpointInspectorSlideData
  | DatabaseSchemaErdSlideData
  | SecurityThreatModelSlideData
  | AiAgentSwarmDagSlideData
  | FinancialBurnRunwaySlideData
  | BentoKpiMosaicSlideData
  | CanaryReleaseGaugeSlideData
  | IncidentRcaPostmortemSlideData
  | SlasAndUptimeStatusSlideData
  | AudioWaveformStudioSlideData
  | HardwareSiliconSpecSlideData
  | CohortRetentionHeatmapSlideData
  | VerifiableAuditLedgerSlideData;
```

---

## 5. Detailed Specifications of the 15 Kinetic Slide Archetypes

---

### Archetype 01: `code-diff-comparison` (CodeDiffComparisonSlide)

#### Semantic Role & Use Case
Side-by-Side Code Diff & Refactoring Comparison. Designed for engineering all-hands, architecture reviews, and technical refactoring keynotes. Contrasts monolithic legacy anti-patterns with modern, immutable, and performant implementations.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Memory-Safe Value Semantics Modernization       |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Migrating mutable pointers to immutable return structs  |
|                                                                                                   |
| +------------------------------------+  +------------------------------------+  +---------------+ |
| | LEGACY IMPLEMENTATION (BEFORE)     |  | REFACTORED PATTERN (AFTER)         |  | METRICS PANEL | |
| | (Y=240, X=100, W=680, H=700)       |  | (Y=240, X=800, W=680, H=700)       |  | (Y=240, X=1500| |
| |                                    |  |                                    |  |  W=320, H=700)| |
| | 01 func (s *Service) Mutate(d *D)  |  | 01 func ProcessData(d Data) Result |  | Lines: -34%   | |
| | 02   if d == nil { return err }    |  | 02   if isBooleanFalse(d.isValid)  |  | Alloc: 0 B/op | |
| | 03   s.lock.Lock()                 |  | 03     return Failure(ErrInvalid)  |  | Heap: 0 alloc | |
| | 04   // [ACTIVE HUNK: RED GLOW]    |  | 04   // [ACTIVE HUNK: ACCENT GLOW] |  | Speed: +2.8x  | |
| | 05   s.cache[d.ID] = d.Val         |  | 05   return Success(d.Transform()) |  | Safe: 100%    | |
| | 06   s.lock.Unlock()               |  | 06 }                               |  | Status: PASS  | |
| +------------------------------------+  +------------------------------------+  +---------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- AST Transform Verified | Zero Pointer Escapes  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ember`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Before Code Pane | 100 | 240 | 680 | 700 | Plane 1 | Terminal shell, monospaced font, line numbers, red strikeout highlights |
| After Code Pane | 800 | 240 | 680 | 700 | Plane 1/2 | Terminal shell, active hunk elevated to Plane 2 with accent halo |
| Refactoring Metrics | 1500 | 240 | 320 | 700 | Plane 1 | Bento card stack, KPI delta badges, allocation summary |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Toolchain flags, compiler version, GC profiling telemetry |

#### TypeScript Contract
```typescript
export interface DiffHunkLine {
  lineNumber: number;
  content: string;
  isAddition: boolean;
  isDeletion: boolean;
  isModified: boolean;
  isHighlighted: boolean;
}

export interface DiffChunkItem {
  id: string;
  chunkTitle: string;
  chunkExplanation: string;
  beforeStartLine: number;
  afterStartLine: number;
  beforeLines: DiffHunkLine[];
  afterLines: DiffHunkLine[];
  isCompleted?: boolean;
}

export interface RefactoringMetricItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  metricDelta: string;
  hasPositiveImpact: boolean;
}

export interface CodeDiffComparisonSlideData extends BaseSlide {
  type: 'code-diff-comparison';
  language: string;
  beforeHeader: string;
  afterHeader: string;
  diffChunks: DiffChunkItem[];
  refactoringMetrics: RefactoringMetricItem[];
  hasSyntaxHighlighting: boolean;
  hasLineNumbers: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = \max(\text{diffChunks.length}, 1)$
- **Progression:** At step $k$, `diffChunks[k]` is active (Plane 2, accent border glow, explanation callout expanded). Prior chunks $0 \le i < k$ render as completed (Plane 1, 0.75 opacity with checkmark). Future chunks $j > k$ render with $1.25\text{px}$ optical blur.

#### Verified JSON Fixture
```json
{
  "id": "slide-01-code-diff",
  "type": "code-diff-comparison",
  "title": "Immutable Architecture: Eliminating Pointer Mutation",
  "subtitle": "Refactoring monolithic Go service handlers into stateless, value-semantic pipelines",
  "kicker": "CODING GUIDELINE REMEDIATION",
  "language": "go",
  "beforeHeader": "Monolithic Pointer Mutator (Before)",
  "afterHeader": "Stateless Monadic Pipeline (After)",
  "hasSyntaxHighlighting": true,
  "hasLineNumbers": true,
  "diffChunks": [
    {
      "id": "chunk-01",
      "chunkTitle": "Eliminate Mutable Receiver",
      "chunkExplanation": "Replace pointer receiver with pure value receiver and copy-on-write semantics.",
      "beforeStartLine": 1,
      "afterStartLine": 1,
      "beforeLines": [
        { "lineNumber": 1, "content": "func (s *OrderService) ApplyDiscount(o *Order) error {", "isAddition": false, "isDeletion": true, "isModified": true, "isHighlighted": true }
      ],
      "afterLines": [
        { "lineNumber": 1, "content": "func ApplyDiscount(o Order) Result[Order] {", "isAddition": true, "isDeletion": false, "isModified": true, "isHighlighted": true }
      ]
    },
    {
      "id": "chunk-02",
      "chunkTitle": "Invert Guard & Monadic Result",
      "chunkExplanation": "Remove explicit nil error returns; enforce positive boolean guards and monadic wrap.",
      "beforeStartLine": 2,
      "afterStartLine": 2,
      "beforeLines": [
        { "lineNumber": 2, "content": "  if o.Discount == nil { return errors.New(\"empty\") }", "isAddition": false, "isDeletion": true, "isModified": true, "isHighlighted": true },
        { "lineNumber": 3, "content": "  o.Total -= o.Discount.Amount", "isAddition": false, "isDeletion": true, "isModified": true, "isHighlighted": true }
      ],
      "afterLines": [
        { "lineNumber": 2, "content": "  if isBooleanFalse(o.hasDiscount) { return Failure(ErrEmptyDiscount) }", "isAddition": true, "isDeletion": false, "isModified": true, "isHighlighted": true },
        { "lineNumber": 3, "content": "  return Success(o.WithCalculatedTotal())", "isAddition": true, "isDeletion": false, "isModified": true, "isHighlighted": true }
      ]
    }
  ],
  "refactoringMetrics": [
    { "id": "m1", "metricLabel": "Heap Escapes", "metricValue": "0 allocs", "metricDelta": "-100%", "hasPositiveImpact": true },
    { "id": "m2", "metricLabel": "Execution Speed", "metricValue": "42 ns/op", "metricDelta": "+280%", "hasPositiveImpact": true },
    { "id": "m3", "metricLabel": "Cyclomatic Complexity", "metricValue": "2", "metricDelta": "-65%", "hasPositiveImpact": true }
  ]
}
```

---

### Archetype 02: `global-cloud-edge-mesh` (GlobalCloudEdgeMeshSlide)

#### Semantic Role & Use Case
Global Cloud Edge Network & Latency Matrix. High-density sovereign infrastructure telemetry showing Anycast PoPs, inter-region WireGuard mesh backbones, and live latency percentiles (p50, p95, p99). Flat single-step overview designed for investor summits and enterprise CTO reviews.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Global Anycast Cloud Edge Network               |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- 28 Sovereign Points of Presence with 100Gbps Backbones   |
|                                                                                                   |
| +-------------------------------------------------------+  +------------------------------------+ |
| | GLOBAL TOPOLOGY MAP STAGE                             |  | REGIONAL LATENCY MATRIX & HEALTH   | |
| | (Y=240, X=100, W=1080, H=700)                         |  | (Y=240, X=1220, W=600, H=700)      | |
| |                                                       |  |                                    | |
| |   [US-West: SFO] ====== (18ms) ===== [US-East: IAD]   |  | REGION      P50    P95    P99  STATUS  | |
| |         \\                                 //         |  | us-east-1   8ms   14ms   21ms  [100%]  | |
| |          \\                               //          |  | eu-west-1   12ms  18ms   26ms  [100%]  | |
| |       [AP-East: NRT] ===== (62ms) ===== [EU-West: DUB]|  | ap-northeast 18ms 28ms   41ms  [100%]  | |
| |                                                       |  | sa-east-1   38ms  54ms   78ms  [100%]  | |
| | Core Backbones: 100 Gbps Encrypted WireGuard Mesh     |  |                                    | |
| | Edge Routing: Anycast BGP Autonomous System (AS64512) |  | Edge Hit Ratio: 99.4%              | |
| | Active Nodes: 28 PoPs | Global Cache Warm: 100%       |  | Global TTFB: 14.2ms                | |
| +-------------------------------------------------------+  +------------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- 0.000% Packet Loss | Tier-1 IP Transit Sockets  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ink`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Topology Mesh Stage | 100 | 240 | 1080 | 700 | Plane 1 | SVG node map, active transit lines, Anycast cluster tags |
| Latency Matrix Card | 1220 | 240 | 600 | 700 | Plane 1 | Tabular bento grid, monospace font, positive health chips |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | BGP AS number, transit partners, telemetry timestamps |

#### TypeScript Contract
```typescript
export interface EdgeMeshRegionItem {
  id: string;
  regionCode: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  p50LatencyMs: number;
  p95LatencyMs: number;
  p99LatencyMs: number;
  throughputGbps: number;
  isOperational: boolean;
  isPrimaryHub: boolean;
}

export interface MeshBackboneLink {
  id: string;
  sourceRegionId: string;
  targetRegionId: string;
  transitLatencyMs: number;
  bandwidthCapacityGbps: number;
  isEncrypted: boolean;
  isHealthy: boolean;
}

export interface GlobalCloudEdgeMeshSlideData extends BaseSlide {
  type: 'global-cloud-edge-mesh';
  autonomousSystemNumber: string;
  edgeHitRatioPercent: number;
  globalAverageTtfbMs: number;
  regions: EdgeMeshRegionItem[];
  backboneLinks: MeshBackboneLink[];
  hasLivePulse: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = 1$ (Flat Archetype).
- **Progression:** All edge nodes, links, and matrix values render fully active at step 0 with ambient pulse animations on links and nodes.

#### Verified JSON Fixture
```json
{
  "id": "slide-02-edge-mesh",
  "type": "global-cloud-edge-mesh",
  "title": "Global Edge Infrastructure & Anycast Mesh",
  "subtitle": "28 Sovereign Points of Presence delivering sub-20ms global transit via dedicated fiber",
  "kicker": "INFRASTRUCTURE TELEMETRY",
  "autonomousSystemNumber": "AS64512",
  "edgeHitRatioPercent": 99.4,
  "globalAverageTtfbMs": 14.2,
  "hasLivePulse": true,
  "regions": [
    { "id": "reg-us-iad", "regionCode": "us-east-iad", "city": "Ashburn", "country": "USA", "latitude": 39.04, "longitude": -77.48, "p50LatencyMs": 6, "p95LatencyMs": 11, "p99LatencyMs": 16, "throughputGbps": 100, "isOperational": true, "isPrimaryHub": true },
    { "id": "reg-eu-fra", "regionCode": "eu-central-fra", "city": "Frankfurt", "country": "DEU", "latitude": 50.11, "longitude": 8.68, "p50LatencyMs": 9, "p95LatencyMs": 15, "p99LatencyMs": 22, "throughputGbps": 100, "isOperational": true, "isPrimaryHub": true },
    { "id": "reg-ap-nrt", "regionCode": "ap-northeast-nrt", "city": "Tokyo", "country": "JPN", "latitude": 35.68, "longitude": 139.69, "p50LatencyMs": 14, "p95LatencyMs": 22, "p99LatencyMs": 31, "throughputGbps": 100, "isOperational": true, "isPrimaryHub": false }
  ],
  "backboneLinks": [
    { "id": "link-iad-fra", "sourceRegionId": "reg-us-iad", "targetRegionId": "reg-eu-fra", "transitLatencyMs": 68, "bandwidthCapacityGbps": 100, "isEncrypted": true, "isHealthy": true },
    { "id": "link-fra-nrt", "sourceRegionId": "reg-eu-fra", "targetRegionId": "reg-ap-nrt", "transitLatencyMs": 124, "bandwidthCapacityGbps": 100, "isEncrypted": true, "isHealthy": true }
  ]
}
```

---

### Archetype 03: `api-endpoint-inspector` (ApiEndpointInspectorSlide)

#### Semantic Role & Use Case
Interactive API Endpoint & Payload Studio. Demonstrates high-assurance REST/gRPC interfaces, request parameter schemas, strict auth token contracts, and payload response structures. Multi-step progression advances through parameters, headers, and response payloads.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Enterprise Session Delegation API               |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- POST /api/v1/auth/tokens/delegate (RBAC Scope: admin)   |
|                                                                                                   |
| +---------------------------------------+  +----------------------------------------------------+ |
| | METHOD & PARAMETER MATRIX             |  | PAYLOAD & RESPONSE STUDIO                          | |
| | (Y=240, X=100, W=780, H=700)          |  | (Y=240, X=920, W=900, H=700)                       | |
| |                                       |  |                                                    | |
| | [POST] /api/v1/auth/tokens/delegate   |  | Response: 200 OK (application/json) | Latency: 4ms  | |
| | Auth: Bearer JWT (mTLS Required)      |  | {                                                  | |
| |                                       |  |   "status": "success",                             | |
| | PARAMETER       TYPE     REQ  ACTIVE  |  |   "delegationId": "del_8f92ac",                    | |
| | +-----------------------------------+ |  |   "tenantId": "tnt_prod_alpha",                   | |
| | | 01 tenantId   string   Yes  [DONE]| |  |   "expiresAt": "2026-10-04T00:00:00Z",             | |
| | | 02 actorId    string   Yes  [ACT] | |  |   "claims": {                                      | |
| | | 03 durationS  integer  No   [FUT] | |  |     "canReadTelemetry": true,                      | |
| | | 04 scopes     array    Yes  [FUT] | |  |     "canTriggerFailover": true                     | |
| | +-----------------------------------+ |  |   }                                                | |
| |                                       |  | }                                                  | |
| +---------------------------------------+  +----------------------------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- OpenAPI 3.1 Spec Validated | Casbin RBAC Guard  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-cream`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Parameter Matrix Card | 100 | 240 | 780 | 700 | Plane 1 | Bento container, parameter rows, active parameter halo ring |
| Payload Studio Card | 920 | 240 | 900 | 700 | Plane 1/2 | JSON editor shell, live DOM syntax tokens, status badge |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Serialization format, validation schema engine |

#### TypeScript Contract
```typescript
export interface ApiParameterItem {
  id: string;
  name: string;
  type: string;
  location: 'query' | 'path' | 'header' | 'body';
  description: string;
  isRequired: boolean;
  defaultValue?: string;
}

export interface ApiResponseField {
  key: string;
  value: string;
  type: string;
  description: string;
  isPositiveStatus?: boolean;
}

export interface ApiEndpointInspectorSlideData extends BaseSlide {
  type: 'api-endpoint-inspector';
  httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpointPath: string;
  authStrategy: string;
  rateLimitPerMinute: number;
  parameters: ApiParameterItem[];
  responseStatusCode: number;
  responsePayload: string;
  hasSchemaValidation: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = \max(\text{parameters.length}, 1)$
- **Progression:** Step $k$ highlights parameter $k$. At the final step, the full JSON payload illuminates on Plane 2.

#### Verified JSON Fixture
```json
{
  "id": "slide-03-api-inspector",
  "type": "api-endpoint-inspector",
  "title": "Cryptographic Token Delegation Endpoint",
  "subtitle": "High-throughput mTLS authentication exchange with fine-grained Casbin policy claims",
  "kicker": "API SPECIFICATION",
  "httpMethod": "POST",
  "endpointPath": "/api/v1/auth/tokens/delegate",
  "authStrategy": "Mutual TLS + Bearer JWT",
  "rateLimitPerMinute": 10000,
  "hasSchemaValidation": true,
  "responseStatusCode": 200,
  "responsePayload": "{\n  \"status\": \"success\",\n  \"delegationId\": \"del_8f92ac\",\n  \"tenantId\": \"tnt_prod_alpha\",\n  \"expiresAt\": \"2026-10-04T00:00:00Z\",\n  \"claims\": {\n    \"canReadTelemetry\": true,\n    \"canTriggerFailover\": true\n  }\n}",
  "parameters": [
    { "id": "p1", "name": "tenantId", "type": "string", "location": "body", "description": "Target tenant UUID", "isRequired": true },
    { "id": "p2", "name": "actorId", "type": "string", "location": "body", "description": "Authenticated actor issuing delegation", "isRequired": true },
    { "id": "p3", "name": "durationS", "type": "integer", "location": "body", "description": "Delegation lifespan in seconds", "isRequired": false, "defaultValue": "3600" },
    { "id": "p4", "name": "scopes", "type": "array<string>", "location": "body", "description": "Explicit Casbin RBAC permission strings", "isRequired": true }
  ]
}
```

---

### Archetype 04: `database-schema-erd` (DatabaseSchemaErdSlide)

#### Semantic Role & Use Case
Relational Split-DB Entity Relationship Diagram. Displays multi-tier split SQLite / PostgreSQL schemas with PascalCase table names, camelCase column fields, positive boolean flags, and foreign-key join paths. Multi-step progression walks through relational entities.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Split-DB Relational Schema Architecture         |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Isolated storage tiers: Users, Presentations & AuditLog  |
|                                                                                                   |
| +-----------------------------+     +-----------------------------+     +-----------------------+ |
| | TABLE: Users                |     | TABLE: Presentations        |     | TABLE: AuditEvents    | |
| | (Y=240, X=100, W=500, H=700)| ===>| (Y=240, X=660, W=540, H=700)| ===>| (Y=240, X=1260,       | |
| |                             |     |                             |     |  W=560, H=700)        | |
| | PK id: uuid                 |     | PK id: uuid                 |     | PK id: uuid           | |
| |    email: varchar(255)      |     | FK ownerUserId: uuid        |     | FK presentationId: uuid| |
| |    fullName: varchar(100)   |     |    title: varchar(200)      |     |    actionType: varchar| |
| |    isSuperAdmin: boolean    |     |    themeId: varchar(50)     |     |    actorId: uuid      | |
| |    hasMfaEnabled: boolean   |     |    isPublished: boolean     |     |    isVerified: boolean| |
| |    canCreateDeck: boolean   |     |    hasWatermark: boolean    |     |    payloadJson: text  | |
| |    createdAt: timestamp     |     |    createdAt: timestamp     |     |    timestamp: datetime| |
| |                             |     |                             |     |                       | |
| | [ACTIVE: Plane 2 Halo]      |     | [Step 1 Focused]            |     | [Step 2 Focused]      | |
| +-----------------------------+     +-----------------------------+     +-----------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- Split-DB WAL Mode | Foreign Key Constraints ON   |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-outline`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Table Card 01 | 100 | 240 | 500 | 700 | Plane 1/2 | PascalCase table container, column rows, key icons |
| Table Card 02 | 660 | 240 | 540 | 700 | Plane 1/2 | Foreign key target card, active join connectors |
| Table Card 03 | 1260 | 240 | 560 | 700 | Plane 1/2 | Audit storage tier, immutable append-only badges |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | SQLite PRAGMA journal_mode=WAL, PRAGMA foreign_keys=ON |

#### TypeScript Contract
```typescript
export interface DbColumnDefinition {
  name: string;
  dataType: string;
  isPrimaryKey: boolean;
  isForeignKey: boolean;
  isNullable: boolean;
  isIndexed: boolean;
  defaultValue?: string;
}

export interface DbRelationshipLink {
  sourceColumn: string;
  targetTable: string;
  targetColumn: string;
  cardinality: 'one-to-one' | 'one-to-many' | 'many-to-many';
}

export interface DbTableEntity {
  id: string;
  tableName: string;
  databaseTier: 'system.db' | 'tenant.db' | 'audit.db';
  columns: DbColumnDefinition[];
  relationships: DbRelationshipLink[];
  rowCountEstimate: number;
}

export interface DatabaseSchemaErdSlideData extends BaseSlide {
  type: 'database-schema-erd';
  databaseEngine: string;
  storageIsolationModel: string;
  tables: DbTableEntity[];
  hasForeignKeyEnforcement: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = \max(\text{tables.length}, 1)$
- **Progression:** Step $k$ focuses table $k$ (Plane 2 elevation, halo outline, active connecting lines illuminated with animated dash offsets).

#### Verified JSON Fixture
```json
{
  "id": "slide-04-database-erd",
  "type": "database-schema-erd",
  "title": "Split-DB Relational Schema Architecture",
  "subtitle": "Independent SQLite databases adhering strictly to PascalCase tables and positive boolean flags",
  "kicker": "DATABASE ARCHITECTURE",
  "databaseEngine": "SQLite 3.45 (WAL Mode)",
  "storageIsolationModel": "Split-DB Multi-Tier Isolation",
  "hasForeignKeyEnforcement": true,
  "tables": [
    {
      "id": "tbl-users",
      "tableName": "Users",
      "databaseTier": "system.db",
      "rowCountEstimate": 25000,
      "columns": [
        { "name": "id", "dataType": "uuid", "isPrimaryKey": true, "isForeignKey": false, "isNullable": false, "isIndexed": true },
        { "name": "email", "dataType": "varchar(255)", "isPrimaryKey": false, "isForeignKey": false, "isNullable": false, "isIndexed": true },
        { "name": "isSuperAdmin", "dataType": "boolean", "isPrimaryKey": false, "isForeignKey": false, "isNullable": false, "isIndexed": false, "defaultValue": "false" },
        { "name": "hasMfaEnabled", "dataType": "boolean", "isPrimaryKey": false, "isForeignKey": false, "isNullable": false, "isIndexed": false, "defaultValue": "true" }
      ],
      "relationships": []
    },
    {
      "id": "tbl-presentations",
      "tableName": "Presentations",
      "databaseTier": "tenant.db",
      "rowCountEstimate": 140000,
      "columns": [
        { "name": "id", "dataType": "uuid", "isPrimaryKey": true, "isForeignKey": false, "isNullable": false, "isIndexed": true },
        { "name": "ownerUserId", "dataType": "uuid", "isPrimaryKey": false, "isForeignKey": true, "isNullable": false, "isIndexed": true },
        { "name": "title", "dataType": "varchar(200)", "isPrimaryKey": false, "isForeignKey": false, "isNullable": false, "isIndexed": false },
        { "name": "isPublished", "dataType": "boolean", "isPrimaryKey": false, "isForeignKey": false, "isNullable": false, "isIndexed": true, "defaultValue": "false" }
      ],
      "relationships": [
        { "sourceColumn": "ownerUserId", "targetTable": "Users", "targetColumn": "id", "cardinality": "one-to-many" }
      ]
    }
  ]
}
```

---

### Archetype 05: `security-threat-model` (SecurityThreatModelSlide)

#### Semantic Role & Use Case
Zero-Trust Attack Surface & Defensive Perimeter. Provides a board-level STRIDE threat taxonomy, zero-trust cryptographic boundaries, and automated defensive mitigation controls. Single-step sovereign overview.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- STRIDE Threat Model & Zero-Trust Perimeter       |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Defense-in-depth security posture across 5 trust boundaries|
|                                                                                                   |
| +-----------------------------------------------------+  +--------------------------------------+ |
| | STRIDE ATTACK SURFACE VECTORS                       |  | DEFENSIVE CONTROLS & KEY VAULT       | |
| | (Y=240, X=100, W=920, H=700)                        |  | (Y=240, X=1060, W=760, H=700)        | |
| |                                                     |  |                                      | |
| | [Spoofing]        Token Forgery via Replay          |  | Control 01: Hardware Enclave (SGX)   | |
| |                   Risk: CRITICAL | Mitigated: YES   |  | Control 02: Casbin Strict RBAC       | |
| | [Tampering]       AST Bytecode Injection            |  | Control 03: mTLS Ephemeral Certs     | |
| |                   Risk: HIGH     | Mitigated: YES   |  | Control 04: Ed25519 Commit Signing   | |
| | [Repudiation]     Audit Log Erasure                 |  | Control 05: KMS Hourly Key Rotation  | |
| |                   Risk: MEDIUM   | Mitigated: YES   |  |                                      | |
| | [Info Disclosure] Side-Channel Memory Timing        |  | Threat Score: 0 Critical Unresolved  | |
| |                   Risk: LOW      | Mitigated: YES   |  | SOC2 Type II: Compliant              | |
| +-----------------------------------------------------+  +--------------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- FIPS 140-3 Hardware Security Modules Active      |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ember`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Threat Vector Bento | 100 | 240 | 920 | 700 | Plane 1 | STRIDE categorized cards, risk rating chips, mitigation pill |
| Defensive Controls | 1060 | 240 | 760 | 700 | Plane 1 | Key vault indicators, cryptographic protocol summary |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Compliance standard tags, cryptographic hardware status |

#### TypeScript Contract
```typescript
export interface ThreatVectorItem {
  id: string;
  category: 'Spoofing' | 'Tampering' | 'Repudiation' | 'InformationDisclosure' | 'DenialOfService' | 'ElevationOfPrivilege';
  vectorName: string;
  riskSeverity: 'low' | 'medium' | 'high' | 'critical';
  mitigationStrategy: string;
  isMitigated: boolean;
}

export interface DefensiveControlItem {
  id: string;
  name: string;
  enforcementLayer: 'network' | 'kernel' | 'application' | 'database';
  cipherSuite: string;
  isHardwareAccelerated: boolean;
  isEnforced: boolean;
}

export interface SecurityThreatModelSlideData extends BaseSlide {
  type: 'security-threat-model';
  trustBoundaryCount: number;
  threatVectors: ThreatVectorItem[];
  defensiveControls: DefensiveControlItem[];
  isSoc2Compliant: boolean;
  hasHardwareIsolation: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = 1$ (Flat Archetype).
- **Progression:** Unified single-step overview rendering all STRIDE categories and defense layers simultaneously.

#### Verified JSON Fixture
```json
{
  "id": "slide-05-threat-model",
  "type": "security-threat-model",
  "title": "Zero-Trust Attack Surface & Defense Perimeter",
  "subtitle": "STRIDE threat taxonomy with automated cryptographic mitigations across all trust boundaries",
  "kicker": "SECURITY ARCHITECTURE",
  "trustBoundaryCount": 5,
  "isSoc2Compliant": true,
  "hasHardwareIsolation": true,
  "threatVectors": [
    { "id": "tv-1", "category": "Spoofing", "vectorName": "JWT Token Forgery via Replay", "riskSeverity": "critical", "mitigationStrategy": "Ephemeral 60s tokens with mTLS binding", "isMitigated": true },
    { "id": "tv-2", "category": "Tampering", "vectorName": "AST Bytecode Modification", "riskSeverity": "high", "mitigationStrategy": "Ed25519 signature checks before execution", "isMitigated": true }
  ],
  "defensiveControls": [
    { "id": "dc-1", "name": "Casbin Strict RBAC Engine", "enforcementLayer": "application", "cipherSuite": "AES-256-GCM", "isHardwareAccelerated": false, "isEnforced": true },
    { "id": "dc-2", "name": "Secure Enclave KMS", "enforcementLayer": "kernel", "cipherSuite": "ChaCha20-Poly1305", "isHardwareAccelerated": true, "isEnforced": true }
  ]
}
```

---

### Archetype 06: `ai-agent-swarm-dag` (AiAgentSwarmDagSlide)

#### Semantic Role & Use Case
Autonomous Multi-Agent Orchestration DAG. Maps complex workflows across multiple subagents executing tasks sequentially and in parallel. Displays task evidence gates, subagent statuses, model parameters, and execution latencies. Multi-step progression advances node-by-node.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Autonomous Multi-Agent DAG Orchestration        |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Evidence-gated task delegation across specialized subagents|
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | DIRECTED ACYCLIC GRAPH CANVAS (Y=240, X=100, W=1720, H=500)                                   | |
| |                                                                                               | |
| |   [Node 01: Orchestrator]                                                                     | |
| |          ||                                                                                   | |
| |          \/ (DAG Task Edge Link)                                                              | |
| |   [Node 02: Spec Author] ========> [Node 03: AST Refactorer]                                  | |
| |          ||                                     ||                                            | |
| |          \/ (Evidence Gate)                     \/ (Evidence Gate)                            | |
| |   [Node 04: Quality Auditor] =====> [Node 05: Release Verifier]                               | |
| |                                                                                               | |
| +-----------------------------------------------------------------------------------------------+ |
| | ACTIVE AGENT TELEMETRY DRAWER (Y=760, X=100, W=1720, H=180)                                   | |
| | Role: AST Refactorer | Model: pro | Status: [ACTIVE] | Latency: 1.4s | Tokens: 4,820          | |
| | Evidence Gate: 100% Guideline Compliance Verified | Zero Lint Violations                      | |
| +-----------------------------------------------------------------------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- Topologically Sorted | Zero Cycle Guarantee    |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| DAG Graph Canvas | 100 | 240 | 1720 | 500 | Plane 1 | SVG edge links, glowing markers, node pill cards |
| Telemetry Drawer | 100 | 760 | 1720 | 180 | Plane 2 | Active agent parameters, evidence token badges |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Topological sorting verification, cycle detection |

#### TypeScript Contract
```typescript
export interface AgentNodeItem {
  id: string;
  agentRole: string;
  agentName: string;
  modelIdentifier: 'pro' | 'flash' | 'flash_lite';
  assignedTaskDescription: string;
  executionDurationMs: number;
  tokenCount: number;
  isCompleted: boolean;
  isEvidencePassed: boolean;
}

export interface DagEdgeLink {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  edgeLabel?: string;
  isTraversed: boolean;
}

export interface AiAgentSwarmDagSlideData extends BaseSlide {
  type: 'ai-agent-swarm-dag';
  orchestratorRole: string;
  totalTokenBudget: number;
  nodes: AgentNodeItem[];
  edges: DagEdgeLink[];
  hasCyclicDependency: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = \max(\text{nodes.length}, 1)$
- **Progression:** Step $k$ illuminates node $k$ with Plane 2 elevation, accent glowing border, and dynamic agent telemetry in the bottom drawer.

#### Verified JSON Fixture
```json
{
  "id": "slide-06-ai-swarm-dag",
  "type": "ai-agent-swarm-dag",
  "title": "Autonomous Multi-Agent DAG Orchestration",
  "subtitle": "Deterministic topological task execution with automated evidence verification gates",
  "kicker": "MULTI-AGENT SYSTEMS",
  "orchestratorRole": "Lead Orchestrator Subagent",
  "totalTokenBudget": 50000,
  "hasCyclicDependency": false,
  "nodes": [
    { "id": "n1", "agentRole": "Lead Orchestrator", "agentName": "agent-orchestrator", "modelIdentifier": "pro", "assignedTaskDescription": "Decompose parent goal into DAG steps", "executionDurationMs": 450, "tokenCount": 1200, "isCompleted": true, "isEvidencePassed": true },
    { "id": "n2", "agentRole": "Spec Author Subagent", "agentName": "agent-spec-author", "modelIdentifier": "pro", "assignedTaskDescription": "Author canonical data contracts", "executionDurationMs": 1420, "tokenCount": 4800, "isCompleted": true, "isEvidencePassed": true },
    { "id": "n3", "agentRole": "Quality Auditor", "agentName": "agent-auditor", "modelIdentifier": "flash", "assignedTaskDescription": "Audit affirmative boolean conventions", "executionDurationMs": 620, "tokenCount": 1850, "isCompleted": false, "isEvidencePassed": true }
  ],
  "edges": [
    { "id": "e1", "sourceNodeId": "n1", "targetNodeId": "n2", "edgeLabel": "Delegates Spec", "isTraversed": true },
    { "id": "e2", "sourceNodeId": "n2", "targetNodeId": "n3", "edgeLabel": "Passes Contracts", "isTraversed": false }
  ]
}
```

---

### Archetype 07: `financial-burn-runway` (FinancialBurnRunwaySlide)

#### Semantic Role & Use Case
Venture Financial Model & Capital Runway Horizon. Projects monthly cash reserves, net-burn rate, gross revenue growth, and capital runway zero-date horizons. Flat single-step overview designed for venture board meetings.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Capital Runway Horizon & Financial Trajectory   |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- 22 Months Operating Runway with Breakeven at Month 14   |
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | CAPITAL RUNWAY HORIZON TIMELINE                         |  | FINANCIAL HIGHLIGHTS & BURN      | |
| | (Y=240, X=100, W=1100, H=700)                           |  | (Y=240, X=1240, W=580, H=700)    | |
| |                                                         |  |                                  | |
| | Cash Reserves ($M)                                      |  | Cash on Hand: $8.40M             | |
| | $8M |==================\                                |  | Monthly Net Burn: $185,000       | |
| | $6M |                   \                               |  | Gross Margin: 86.4%              | |
| | $4M |                    \=====[BREAKEVEN: M14]======== |  | Runway Horizon: 22.4 Months      | |
| | $2M |                                                   |  | Annual Recurring Rev: $4.2M      | |
| |  0M +-------------------------------------------------- |  |                                  | |
| |     M01  M04  M08  M12  M14  M18  M22  M24              |  | EXPENSE BREAKDOWN:               | |
| |                                                         |  | - Engineering: 68%               | |
| | Net Burn Rate: -$185K/mo decreasing by 8% monthly       |  | - Cloud Infra: 18%               | |
| | Revenue Crossover: Month 14 ($350K MRR)                 |  | - G&A / Legal: 14%               | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- Audited Financial Model | Series A Closed       |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Runway Timeline Canvas | 100 | 240 | 1100 | 700 | Plane 1 | Dual-axis line chart, breakeven vertical line indicator |
| Financial Highlights | 1240 | 240 | 580 | 700 | Plane 1 | Large typography KPI cards, expense percentage pills |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Accounting standard, banking partner confirmation |

#### TypeScript Contract
```typescript
export interface RunwayMonthData {
  monthIndex: number;
  monthLabel: string;
  cashReservesUsd: number;
  netBurnUsd: number;
  monthlyRevenueUsd: number;
  isBreakevenMonth: boolean;
}

export interface ExpenseAllocationItem {
  id: string;
  category: string;
  percentageShare: number;
  monthlyAmountUsd: number;
}

export interface FinancialBurnRunwaySlideData extends BaseSlide {
  type: 'financial-burn-runway';
  currentReservesUsd: number;
  monthlyNetBurnUsd: number;
  runwayMonthsRemaining: number;
  breakevenMonthTarget: number;
  grossMarginPercent: number;
  months: RunwayMonthData[];
  expenseAllocations: ExpenseAllocationItem[];
  isVentureBacked: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = 1$ (Flat Archetype).
- **Progression:** Unified single-step financial projection.

#### Verified JSON Fixture
```json
{
  "id": "slide-07-financial-runway",
  "type": "financial-burn-runway",
  "title": "Capital Runway Horizon & Financial Trajectory",
  "subtitle": "22.4 months operating runway with revenue crossover at Month 14",
  "kicker": "FINANCIAL ARCHITECTURE",
  "currentReservesUsd": 8400000,
  "monthlyNetBurnUsd": 185000,
  "runwayMonthsRemaining": 22.4,
  "breakevenMonthTarget": 14,
  "grossMarginPercent": 86.4,
  "isVentureBacked": true,
  "months": [
    { "monthIndex": 1, "monthLabel": "M01", "cashReservesUsd": 8400000, "netBurnUsd": 185000, "monthlyRevenueUsd": 120000, "isBreakevenMonth": false },
    { "monthIndex": 14, "monthLabel": "M14", "cashReservesUsd": 6200000, "netBurnUsd": 0, "monthlyRevenueUsd": 350000, "isBreakevenMonth": true },
    { "monthIndex": 24, "monthLabel": "M24", "cashReservesUsd": 7800000, "netBurnUsd": -120000, "monthlyRevenueUsd": 520000, "isBreakevenMonth": false }
  ],
  "expenseAllocations": [
    { "id": "exp-1", "category": "R&D Engineering", "percentageShare": 68, "monthlyAmountUsd": 125800 },
    { "id": "exp-2", "category": "Cloud Infrastructure", "percentageShare": 18, "monthlyAmountUsd": 33300 },
    { "id": "exp-3", "category": "G&A and Legal", "percentageShare": 14, "monthlyAmountUsd": 25900 }
  ]
}
```

---

### Archetype 08: `bento-kpi-mosaic` (BentoKpiMosaicSlide)

#### Semantic Role & Use Case
Asymmetric Bento Metric Mosaic. Visualizes organizational KPIs and metrics using golden-ratio bento containers, sparkline trendlines, and positive delta callouts. Flat single-step overview.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Enterprise Platform Performance Mosaic          |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Asymmetric bento architecture summarizing key metrics   |
|                                                                                                   |
| +--------------------------------------+  +---------------------+  +----------------------------+ |
| | HERO METRIC CARD (W=760, H=440)      |  | CARD 02 (W=440,H=210) | | CARD 03 (W=440, H=210)     | |
| | ARR: $18.4M                          |  | NRR: 142%           | | Active Users: 240,000      | |
| | Delta: +128% YoY                     |  | Delta: +14% QoQ     | | Delta: +32% MoM            | |
| | [Sparkline: Continuous Ascent]       |  +---------------------+ +----------------------------+ |
| |                                      |  +---------------------+  +----------------------------+ |
| | Enterprise Accounts: 412             |  | CARD 04 (W=440,H=210) | | CARD 05 (W=440, H=210)     | |
| | Retention: 99.2%                     |  | Latency: 12ms       | | SLA: 99.999%               | |
| +--------------------------------------+  +---------------------+  +----------------------------+ |
| +-----------------------------------------------------------------------------------------------+ |
| | CARD 06: FULL-WIDTH PLATFORM AUDIT STRIP (Y=720, X=100, W=1720, H=220)                        | |
| | SOC2: Verified | Zero Security Incidents | Multi-Region Active-Active | 0.000% Downtime       | |
| +-----------------------------------------------------------------------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- Real-Time Metric Synced | Telemetry Cluster OK  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-cream`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Bento Hero Card | 100 | 240 | 760 | 440 | Plane 1 | Hero display typography, accent sparkline SVG |
| Bento Secondary Cards | 880 / 1340 | 240 / 470 | 440 | 210 | Plane 1 | 4 modular bento cards with positive delta pills |
| Bento Platform Strip | 100 | 700 | 1720 | 240 | Plane 1 | Horizontal summary strip with telemetry pills |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Timestamp, data warehouse ingestion pipeline info |

#### TypeScript Contract
```typescript
export interface BentoKpiCardItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  deltaPercent: number;
  deltaPeriod: string;
  hasPositiveGrowth: boolean;
  sparklinePoints?: number[];
  cardSpanColumns: number;
  cardSpanRows: number;
}

export interface BentoKpiMosaicSlideData extends BaseSlide {
  type: 'bento-kpi-mosaic';
  reportingQuarter: string;
  cards: BentoKpiCardItem[];
  hasLiveSparklines: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = 1$ (Flat Archetype).
- **Progression:** Unified single-step bento presentation.

#### Verified JSON Fixture
```json
{
  "id": "slide-08-bento-kpi",
  "type": "bento-kpi-mosaic",
  "title": "Enterprise Platform Performance Mosaic",
  "subtitle": "Asymmetric bento grid tracking hyper-growth ARR, retention, and infrastructure health",
  "kicker": "EXECUTIVE DASHBOARD",
  "reportingQuarter": "Q3 2026",
  "hasLiveSparklines": true,
  "cards": [
    { "id": "c1", "metricLabel": "Annual Recurring Revenue", "metricValue": "$18.4M", "deltaPercent": 128, "deltaPeriod": "YoY", "hasPositiveGrowth": true, "sparklinePoints": [4, 6, 8, 12, 14, 18.4], "cardSpanColumns": 2, "cardSpanRows": 2 },
    { "id": "c2", "metricLabel": "Net Revenue Retention", "metricValue": "142%", "deltaPercent": 14, "deltaPeriod": "QoQ", "hasPositiveGrowth": true, "cardSpanColumns": 1, "cardSpanRows": 1 },
    { "id": "c3", "metricLabel": "Global p99 Latency", "metricValue": "12.4ms", "deltaPercent": 34, "deltaPeriod": "Improvement", "hasPositiveGrowth": true, "cardSpanColumns": 1, "cardSpanRows": 1 }
  ]
}
```

---

### Archetype 09: `canary-release-gauge` (CanaryReleaseGaugeSlide)

#### Semantic Role & Use Case
Progressive Canary & Feature Flag Rollout. Visualizes progressive traffic shifts (1% -> 5% -> 25% -> 50% -> 100%), error budgets, and automated rollback circuit breakers. Multi-step progression steps through deployment tiers.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Progressive Canary Deployment Pipeline           |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Automated traffic graduation with circuit breaker guards |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | CANARY PROGRESSION GAUGE (Y=240, X=100, W=1720, H=420)                                         | |
| |                                                                                               | |
| |   [ TIER 01: 1% ] ======> [ TIER 02: 5% ] ======> [ TIER 03: 25% ] ======> [ TIER 04: 100% ]   | |
| |   Internal Canary         Edge Beta               Regional Rollout         Full Production    | |
| |   Status: [COMPLETED]     Status: [ACTIVE HALO]   Status: [BLUR 1.25px]    Status: [BLUR]     | |
| |   Errors: 0.00%           Errors: 0.01%           Errors: Pending          Errors: Pending    | |
| |                                                                                               | |
| +-----------------------------------------------------------------------------------------------+ |
| +---------------------------------------------------------+  +----------------------------------+ |
| | AUTOMATED CIRCUIT BREAKER THRESHOLDS                    |  | ERROR BUDGET TELEMETRY           | |
| | (Y=680, X=100, W=1080, H=260)                           |  | (Y=680, X=1220, W=600, H=260)    | |
| | 1. 5xx Error Rate > 0.05% -> Automated Rollback (ACTIVE)|  | Budget Burn: 4.2% of 100%        | |
| | 2. Latency Degrade > 15ms -> Freeze Rollout (ARMED)     |  | Healthy Responses: 99.99%        | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- Envoy Service Mesh | Prometheus Telemetry Gate  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ember`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Rollout Gauge Card | 100 | 240 | 1720 | 420 | Plane 1 | Horizontal track, graduation pills, active stage elevated |
| Circuit Breaker Bento | 100 | 680 | 1080 | 260 | Plane 1 | Threshold rules, affirmative triggers |
| Error Budget Bento | 1220 | 680 | 600 | 260 | Plane 1 | Error budget meter, health score badge |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Mesh controller status, telemetry scraper health |

#### TypeScript Contract
```typescript
export interface CanaryStageItem {
  id: string;
  stageName: string;
  trafficPercentage: number;
  durationMinutes: number;
  observedErrorRatePercent: number;
  isCompleted: boolean;
  isActive: boolean;
  hasPassedQualityGate: boolean;
}

export interface MetricThresholdRule {
  id: string;
  metricName: string;
  thresholdLimit: string;
  isTriggered: boolean;
  canRollbackAutomatically: boolean;
}

export interface CanaryReleaseGaugeSlideData extends BaseSlide {
  type: 'canary-release-gauge';
  releaseVersion: string;
  targetEnvironment: string;
  stages: CanaryStageItem[];
  thresholdRules: MetricThresholdRule[];
  isAutomatedRollbackEnabled: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = \max(\text{stages.length}, 1)$
- **Progression:** Step $k$ activates tier $k$. The stage card pops to Plane 2 with spring dynamics ($k=420$, $c=17$, $m=0.8$) and glowing halo ring.

#### Verified JSON Fixture
```json
{
  "id": "slide-09-canary-gauge",
  "type": "canary-release-gauge",
  "title": "Progressive Canary Deployment Pipeline",
  "subtitle": "Automated traffic graduation across 4 validation tiers with automated circuit breakers",
  "kicker": "DEPLOYMENT AUTOMATION",
  "releaseVersion": "v1.5.0-rc2",
  "targetEnvironment": "Production Multi-Region",
  "isAutomatedRollbackEnabled": true,
  "stages": [
    { "id": "st-1", "stageName": "Internal Smoke", "trafficPercentage": 1, "durationMinutes": 15, "observedErrorRatePercent": 0.00, "isCompleted": true, "isActive": false, "hasPassedQualityGate": true },
    { "id": "st-2", "stageName": "Edge Beta", "trafficPercentage": 5, "durationMinutes": 30, "observedErrorRatePercent": 0.01, "isCompleted": false, "isActive": true, "hasPassedQualityGate": true },
    { "id": "st-3", "stageName": "Regional Staged", "trafficPercentage": 25, "durationMinutes": 60, "observedErrorRatePercent": 0.00, "isCompleted": false, "isActive": false, "hasPassedQualityGate": false },
    { "id": "st-4", "stageName": "Full Global Release", "trafficPercentage": 100, "durationMinutes": 120, "observedErrorRatePercent": 0.00, "isCompleted": false, "isActive": false, "hasPassedQualityGate": false }
  ],
  "thresholdRules": [
    { "id": "tr-1", "metricName": "HTTP 5xx Error Spike", "thresholdLimit": "> 0.05%", "isTriggered": false, "canRollbackAutomatically": true },
    { "id": "tr-2", "metricName": "p99 Latency Regression", "thresholdLimit": "> 15ms", "isTriggered": false, "canRollbackAutomatically": true }
  ]
}
```

---

### Archetype 10: `incident-rca-postmortem` (IncidentRcaPostmortemSlide)

#### Semantic Role & Use Case
4-Part Root Cause Analysis & Postmortem. Grounded engineering debrief structuring incident postmortems into: Immediate Cause, Root Cause, Blast Radius / Impact, and Preventative Remediation. Multi-step progression steps through the 4 pillars.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Incident Postmortem: RCA-2026-0819               |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Transient connection pool saturation during db migration|
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | 4-PART ROOT CAUSE ANALYSIS PILLARS                                                            | |
| | (Y=240, X=100, W=1720, H=700)                                                                 | |
| |                                                                                               | |
| | +-----------------------+ +-----------------------+ +--------------------+ +----------------+ | |
| | | PILLAR 01: IMMEDIATE  | | PILLAR 02: ROOT CAUSE | | PILLAR 03: BLAST   | | PILLAR 04:     | | |
| | | CAUSE (Trigger)       | | (System Defect)       | | RADIUS & IMPACT    | | PREVENTATIVE   | | |
| | |                       | |                       | |                    | | REMEDIATION    | | |
| | | Unbounded connection  | | Missing connection-   | | 0.04% of API calls | | Add HikariCP   | |
| | | pool burst exhausted  | | pool timeout guard    | | experienced 504s;  | | hard timeout;  | |
| | | file descriptors.     | | in migration runner.  | | 4m 12s recovery.   | | enforce CI test| |
| | |                       | |                       | |                    | |                | |
| | | [COMPLETED: Step 0]   | | [ACTIVE: Plane 2 Halo]| | [BLUR 1.25px]      | | [BLUR 1.25px]  | |
| | +-----------------------+ +-----------------------+ +--------------------+ +----------------+ | |
| +-----------------------------------------------------------------------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- Blameless Engineering Culture | Action Items ON |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ember`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Pillar 01 (Immediate) | 100 | 240 | 400 | 700 | Plane 1/2 | Symptom telemetry, alerting log snippet |
| Pillar 02 (Root Cause) | 530 | 240 | 400 | 700 | Plane 1/2 | Underlying design flaw, code path diagnosis |
| Pillar 03 (Impact) | 960 | 240 | 400 | 700 | Plane 1/2 | Downtime minutes, impacted requests, SLA credit |
| Pillar 04 (Actions) | 1390 | 240 | 430 | 700 | Plane 1/2 | Action checklist, owner assignments, Jira link |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Postmortem sign-off date, incident coordinator |

#### TypeScript Contract
```typescript
export interface RcaPillarItem {
  id: string;
  pillarIndex: number;
  pillarTitle: string;
  pillarSubtitle: string;
  findings: string[];
  remediationOwner?: string;
  isActionable: boolean;
}

export interface IncidentTimelineEvent {
  timeOffset: string;
  eventDescription: string;
  isMitigationPoint: boolean;
}

export interface IncidentRcaPostmortemSlideData extends BaseSlide {
  type: 'incident-rca-postmortem';
  incidentId: string;
  severityLevel: 'SEV-1' | 'SEV-2' | 'SEV-3';
  downtimeMinutes: number;
  pillars: RcaPillarItem[];
  timeline: IncidentTimelineEvent[];
  isBlamelessPostmortem: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = 4$ (Fixed 4 RCA Pillars).
- **Progression:** Step 0: Immediate Cause -> Step 1: Root Cause -> Step 2: Impact -> Step 3: Preventative Remediation.

#### Verified JSON Fixture
```json
{
  "id": "slide-10-rca-postmortem",
  "type": "incident-rca-postmortem",
  "title": "Incident Postmortem: RCA-2026-0819",
  "subtitle": "Analysis of transient connection pool exhaustion during database partition migration",
  "kicker": "ROOT CAUSE ANALYSIS",
  "incidentId": "INC-2026-0819",
  "severityLevel": "SEV-1",
  "downtimeMinutes": 4.2,
  "isBlamelessPostmortem": true,
  "pillars": [
    { "id": "pil-1", "pillarIndex": 0, "pillarTitle": "Immediate Cause", "pillarSubtitle": "Symptom & Trigger", "findings": ["Unbounded connection spike during migration script", "OS socket descriptor limit reached at 65,535"], "isActionable": true },
    { "id": "pil-2", "pillarIndex": 1, "pillarTitle": "Root Cause", "pillarSubtitle": "Underlying Architecture Flaw", "findings": ["Database connection timeout guard was missing in migration runner", "Retry loop did not implement exponential backoff"], "isActionable": true },
    { "id": "pil-3", "pillarIndex": 2, "pillarTitle": "Blast Radius", "pillarSubtitle": "User Impact & Telemetry", "findings": ["0.04% of public API calls received 504 Gateway Timeout", "Zero data loss or corruption detected"], "isActionable": false },
    { "id": "pil-4", "pillarIndex": 3, "pillarTitle": "Preventative Actions", "pillarSubtitle": "Remediation & Guardrails", "findings": ["Add connection-pool timeout gate in CI/CD pipeline", "Enforce exponential jitter backoff on all database clients"], "remediationOwner": "Alim Ul Karim, Chief Software Engineer", "isActionable": true }
  ],
  "timeline": [
    { "timeOffset": "14:02 UTC", "eventDescription": "Automated migration job triggered", "isMitigationPoint": false },
    { "timeOffset": "14:04 UTC", "eventDescription": "Socket saturation alerts fire", "isMitigationPoint": false },
    { "timeOffset": "14:08 UTC", "eventDescription": "Circuit breaker trips to backup pool; recovery", "isMitigationPoint": true }
  ]
}
```

---

### Archetype 11: `slas-and-uptime-status` (SlasAndUptimeStatusSlide)

#### Semantic Role & Use Case
Public Status Page & 99.999% Service Health Matrix. Demonstrates service tier operational status, 90-day daily uptime strips, MTTD/MTTR telemetry, and proactive maintenance windows. Flat single-step overview.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Enterprise Public Status & Service Health       |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- 99.999% Operational Availability across all services    |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | CORE SERVICE STATUS MATRIX (Y=240, X=100, W=1720, H=380)                                       | |
| |                                                                                               | |
| | SERVICE COMPONENT       STATUS         90-DAY UPTIME STRIP                         AVAILABILITY| |
| | Authentication Cluster  [OPERATIONAL]  ||||||||||||||||||||||||||||||||||||||||||  100.000%    | |
| | Edge API Gateway        [OPERATIONAL]  ||||||||||||||||||||||||||||||||||||||||||  99.998%     | |
| | Distributed Storage     [OPERATIONAL]  ||||||||||||||||||||||||||||||||||||||||||  100.000%    | |
| | Realtime WebSocket Mesh [OPERATIONAL]  ||||||||||||||||||||||||||||||||||||||||||  99.999%     | |
| +-----------------------------------------------------------------------------------------------+ |
| +-------------------------+ +-------------------------+ +---------------------------------------+ |
| | METRIC: MTTD            | | METRIC: MTTR            | | INCIDENT-FREE STREAK                  | |
| | 42 Seconds              | | 2.8 Minutes             | | 314 Days Continuous Uptime            | |
| +-------------------------+ +-------------------------+ +---------------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- Third-Party Multi-Region Heartbeat Verification   |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Service Status Matrix | 100 | 240 | 1720 | 380 | Plane 1 | Tabular service grid, 90-day mini bar strips, operational chips |
| Incident Telemetry Bento | 100 | 650 | 1720 | 290 | Plane 1 | MTTD/MTTR cards, continuous uptime counter |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | External heartbeat monitor URLs, status sync interval |

#### TypeScript Contract
```typescript
export interface ServiceComponentItem {
  id: string;
  name: string;
  tier: 'core' | 'edge' | 'data' | 'async';
  uptimePercentage: number;
  isOperational: boolean;
  hasRecentIncident: boolean;
  historyBlocks: { dayIndex: number; isHealthy: boolean }[];
}

export interface SlasAndUptimeStatusSlideData extends BaseSlide {
  type: 'slas-and-uptime-status';
  overallUptimePercent: number;
  meanTimeToDetectSeconds: number;
  meanTimeToRecoverMinutes: number;
  incidentFreeDaysCount: number;
  services: ServiceComponentItem[];
  hasExternalAuditorVerification: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = 1$ (Flat Archetype).
- **Progression:** Unified single-step health status board.

#### Verified JSON Fixture
```json
{
  "id": "slide-11-uptime-status",
  "type": "slas-and-uptime-status",
  "title": "Enterprise Public Status & Service Health",
  "subtitle": "99.999% verified operational availability across 4 mission-critical service tiers",
  "kicker": "SERVICE LEVEL AGREEMENTS",
  "overallUptimePercent": 99.999,
  "meanTimeToDetectSeconds": 42,
  "meanTimeToRecoverMinutes": 2.8,
  "incidentFreeDaysCount": 314,
  "hasExternalAuditorVerification": true,
  "services": [
    { "id": "s1", "name": "Authentication Cluster", "tier": "core", "uptimePercentage": 100.0, "isOperational": true, "hasRecentIncident": false, "historyBlocks": [{ "dayIndex": 1, "isHealthy": true }] },
    { "id": "s2", "name": "Edge API Gateway", "tier": "edge", "uptimePercentage": 99.998, "isOperational": true, "hasRecentIncident": false, "historyBlocks": [{ "dayIndex": 1, "isHealthy": true }] }
  ]
}
```

---

### Archetype 12: `audio-waveform-studio` (AudioWaveformStudioSlide)

#### Semantic Role & Use Case
Voice AI & Audio Synthesizer Waveform Visualizer. Displays multi-track audio channels, phoneme alignments, noise filtration spectra, and speaker diarization. Multi-step progression advances through tracks or vocal timeline intervals.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Voice AI Neural Waveform & Phoneme Studio        |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Real-time speech synthesis with sub-50ms token latency   |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | MULTI-CHANNEL WAVEFORM SPECTROGRAM (Y=240, X=100, W=1720, H=460)                              | |
| |                                                                                               | |
| | TRACK 01: Raw Mic Input [DONE]       |/\_/\_/\_/\_/\_/\_/\_/\_/\_/\_/\_/\_/\_/\_|             | |
| |                                                                                               | |
| | TRACK 02: Neural Synthesizer [ACTIVE]| | | | | | | | | | | | | | | | | | | | | | [HALO RING]  | |
| | Phonemes: [ /aI/ ] [ /m/ ] [ /p/ ] [ /l/ ] [ /I/ ] [ /m/ ] [ /e/ ] [ /n/ ] [ /t/ ]            | |
| |                                                                                               | |
| | TRACK 03: Noise Cancellation [BLUR]  |------------------------------------------|             | |
| +-----------------------------------------------------------------------------------------------+ |
| +---------------------------------------------------------+  +----------------------------------+ |
| | SYNTHESIS PARAMETERS & LATENCY TELEMETRY                |  | SPEAKER DIARIZATION              | |
| | (Y=720, X=100, W=1080, H=220)                           |  | (Y=720, X=1220, W=600, H=220)    | |
| | Sampling: 48 kHz / 24-bit Lossless                      |  | Speaker A: 99.4% Match           | |
| | Neural Model: 1.2B Parameter Diffusion Waveform         |  | Emotion: Authoritative Calm      | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- WebAudio API Context | Zero Audio Buffer Underrun |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ember`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Waveform Canvas | 100 | 240 | 1720 | 460 | Plane 1 | SVG audio channels, animated frequency bars |
| Audio Parameters | 100 | 720 | 1080 | 220 | Plane 1 | Monospace telemetry, sampling rate pills |
| Diarization Card | 1220 | 720 | 600 | 220 | Plane 1 | Speaker identification tags, confidence scores |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Audio codec, buffer underrun telemetry |

#### TypeScript Contract
```typescript
export interface PhonemeToken {
  phonemeSymbol: string;
  startTimestampMs: number;
  endTimestampMs: number;
  confidenceScore: number;
}

export interface AudioTrackChannel {
  id: string;
  trackName: string;
  samplingRateKhz: number;
  waveformAmplitudes: number[];
  phonemes?: PhonemeToken[];
  isActiveTrack: boolean;
}

export interface AudioWaveformStudioSlideData extends BaseSlide {
  type: 'audio-waveform-studio';
  audioCodec: string;
  synthesisLatencyMs: number;
  tracks: AudioTrackChannel[];
  hasLivePlayback: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = \max(\text{tracks.length}, 1)$
- **Progression:** Step $k$ highlights track $k$, activating amplitude bar animations and phoneme alignment tokens.

#### Verified JSON Fixture
```json
{
  "id": "slide-12-audio-studio",
  "type": "audio-waveform-studio",
  "title": "Voice AI Neural Waveform & Phoneme Studio",
  "subtitle": "Real-time speech synthesis with sub-50ms token latency and neural vocoder alignment",
  "kicker": "AUDIO SYNTHESIS",
  "audioCodec": "Opus Lossless 48kHz",
  "synthesisLatencyMs": 38,
  "hasLivePlayback": true,
  "tracks": [
    { "id": "t1", "trackName": "Raw Microphone Input", "samplingRateKhz": 48, "waveformAmplitudes": [0.2, 0.5, 0.8, 0.4, 0.1], "isActiveTrack": false },
    { "id": "t2", "trackName": "Neural Synthesizer Output", "samplingRateKhz": 48, "waveformAmplitudes": [0.3, 0.7, 0.9, 0.6, 0.2], "isActiveTrack": true, "phonemes": [{ "phonemeSymbol": "/al/", "startTimestampMs": 0, "endTimestampMs": 120, "confidenceScore": 0.99 }] }
  ]
}
```

---

### Archetype 13: `hardware-silicon-spec` (HardwareSiliconSpecSlide)

#### Semantic Role & Use Case
Deep-Tech Device / Silicon Hardware Spec Sheet. Designed for hardware engineering reviews, chip tape-outs, and edge AI device keynotes. Details die floorplan blocks, TDP envelope, memory bus, and cache hierarchies. Flat single-step overview.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Sovereign Neural Silicon Micro-Architecture      |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- 3nm FinFET, 48 Billion Transistors, 120W Thermal Envelope|
|                                                                                                   |
| +-----------------------------------------------------+  +--------------------------------------+ |
| | DIE FLOORPLAN BLOCK ARCHITECTURE                    |  | ELECTRICAL & THERMAL SPEC SHEET      | |
| | (Y=240, X=100, W=1000, H=700)                       |  | (Y=240, X=1140, W=680, H=700)        | |
| |                                                     |  |                                      | |
| | +-----------------------+ +-----------------------+ |  | Process Node: 3nm FinFET             | |
| | | 16x TENSOR CORES      | | 8x HIGH-PERF CORES    | |  | Transistor Count: 48.2 Billion       | |
| | | FP16/BF16/INT8 Engine | | 4.2 GHz Turbo Clock   | |  | TDP Thermal Limit: 120 Watts         | |
| | +-----------------------+ +-----------------------+ |  | Die Area: 312 mm²                    | |
| | +-------------------------------------------------+ |  | Memory: 64 GB Unified LPDDR5X        | |
| | | 128 MB SHARED SYSTEM LEVEL CACHE (SLC)          | |  | Bandwidth: 800 GB/s                  | |
| | +-------------------------------------------------+ |  | Interconnect: PCIe Gen 5 (16 Lanes)  | |
| | +-----------------------+ +-----------------------+ |  |                                      | |
| | | MEMORY CONTROLLER     | | CRYPTO ENGINE (FIPS)  | |  | SILICON PASS YIELD: 94.2%            | |
| | +-----------------------+ +-----------------------+ |  | Tape-out Status: Production Ready    | |
| +-----------------------------------------------------+  +--------------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- TSMC N3E Foundry Validated | Zero Timing Violations|
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ink`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Die Floorplan Canvas | 100 | 240 | 1000 | 700 | Plane 1 | Silicon block containers, gold interconnect tracks |
| Spec Sheet Card | 1140 | 240 | 680 | 700 | Plane 1 | High-contrast spec rows, hardware metric badges |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Foundry partner, tapeout revision ID |

#### TypeScript Contract
```typescript
export interface SiliconDieComponent {
  id: string;
  blockName: string;
  areaSquareMm: number;
  powerConsumptionWatts: number;
  clockSpeedGhz: number;
  isPrimaryCompute: boolean;
}

export interface HardwareSiliconSpecSlideData extends BaseSlide {
  type: 'hardware-silicon-spec';
  processNodeNm: number;
  transistorCountBillions: number;
  thermalDesignPowerWatts: number;
  dieAreaSquareMm: number;
  memoryBandwidthGbps: number;
  blocks: SiliconDieComponent[];
  isTapeoutVerified: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = 1$ (Flat Archetype).
- **Progression:** Unified single-step silicon hardware spec sheet.

#### Verified JSON Fixture
```json
{
  "id": "slide-13-silicon-spec",
  "type": "hardware-silicon-spec",
  "title": "Sovereign Neural Silicon Micro-Architecture",
  "subtitle": "3nm FinFET process with 48 billion transistors and 120W thermal envelope",
  "kicker": "HARDWARE ARCHITECTURE",
  "processNodeNm": 3,
  "transistorCountBillions": 48.2,
  "thermalDesignPowerWatts": 120,
  "dieAreaSquareMm": 312,
  "memoryBandwidthGbps": 800,
  "isTapeoutVerified": true,
  "blocks": [
    { "id": "blk-1", "blockName": "16x Tensor Vector Cores", "areaSquareMm": 84, "powerConsumptionWatts": 45, "clockSpeedGhz": 2.8, "isPrimaryCompute": true },
    { "id": "blk-2", "blockName": "8x High-Perf CPU Cores", "areaSquareMm": 42, "powerConsumptionWatts": 35, "clockSpeedGhz": 4.2, "isPrimaryCompute": true }
  ]
}
```

---

### Archetype 14: `cohort-retention-heatmap` (CohortRetentionHeatmapSlide)

#### Semantic Role & Use Case
Investor Traction & Compound Cohort Heatmap. Triangular retention grid showing customer retention percentages across monthly cohorts from Month 0 through Month 12+. Flat single-step overview designed for venture partners.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Enterprise Cohort Retention & Expansion Matrix   |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- 138% Net Revenue Retention with compound account expansion|
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | COHORT RETENTION HEATMAP GRID                           |  | EXPANSION METRIC HIGHLIGHTS      | |
| | (Y=240, X=100, W=1200, H=700)                           |  | (Y=240, X=1340, W=480, H=700)    | |
| |                                                         |  |                                  | |
| | COHORT  M0    M1    M2    M3    M4    M5    M6          |  | Net Revenue Retention: 138%      | |
| | Jan 26  100%  98%   96%   95%   95%   94%   94%         |  | Gross Logo Retention: 97.4%      | |
| | Feb 26  100%  99%   97%   96%   95%   95%               |  | LTV / CAC Ratio: 6.2x            | |
| | Mar 26  100%  98%   97%   96%   96%                     |  | Payback Period: 7 Months         | |
| | Apr 26  100%  99%   98%   97%                           |  |                                  | |
| | May 26  100%  100%  99%                                 |  | "Best-in-class enterprise decay   | |
| | Jun 26  100%  99%                                       |  | curve flattening above 94%."     | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- Cohort Data Synced via Stripe Billing | GAAP Valid|
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Heatmap Grid Stage | 100 | 240 | 1200 | 700 | Plane 1 | Triangular matrix, colored cells using HSL alpha wash |
| Expansion Highlights | 1340 | 240 | 480 | 700 | Plane 1 | Large NRR typography card, investor proof bullets |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Data source tag, GAAP compliance indicator |

#### TypeScript Contract
```typescript
export interface CohortRowItem {
  id: string;
  cohortLabel: string;
  startingAccountCount: number;
  retentionPercentages: number[];
}

export interface CohortRetentionHeatmapSlideData extends BaseSlide {
  type: 'cohort-retention-heatmap';
  netRevenueRetentionPercent: number;
  grossLogoRetentionPercent: number;
  ltvToCacRatio: number;
  cohorts: CohortRowItem[];
  hasColorShading: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = 1$ (Flat Archetype).
- **Progression:** Unified single-step cohort matrix overview.

#### Verified JSON Fixture
```json
{
  "id": "slide-14-cohort-retention",
  "type": "cohort-retention-heatmap",
  "title": "Enterprise Cohort Retention & Expansion Matrix",
  "subtitle": "138% Net Revenue Retention with curve stabilization above 94% retention",
  "kicker": "INVESTOR TRACTION",
  "netRevenueRetentionPercent": 138,
  "grossLogoRetentionPercent": 97.4,
  "ltvToCacRatio": 6.2,
  "hasColorShading": true,
  "cohorts": [
    { "id": "c-jan", "cohortLabel": "Jan 2026", "startingAccountCount": 45, "retentionPercentages": [100, 98, 96, 95, 95, 94] },
    { "id": "c-feb", "cohortLabel": "Feb 2026", "startingAccountCount": 52, "retentionPercentages": [100, 99, 97, 96, 95] },
    { "id": "c-mar", "cohortLabel": "Mar 2026", "startingAccountCount": 68, "retentionPercentages": [100, 98, 97, 96] }
  ]
}
```

---

### Archetype 15: `verifiable-audit-ledger` (VerifiableAuditLedgerSlide)

#### Semantic Role & Use Case
Cryptographic Evidence Gate & Audit Checklist. Displays tamper-evident CI/CD verification stages, Merkle tree cryptographic hashes, commit signatures, and compliance attestations. Multi-step progression advances gate-by-gate.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Cryptographic Evidence Gate & Audit Ledger       |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Tamper-evident Merkle verification of all build outputs  |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | CRYPTOGRAPHIC EVIDENCE GATES (Y=240, X=100, W=1720, H=500)                                     | |
| |                                                                                               | |
| | GATE 01: Git Commit Signature (Ed25519) [PASSED]   SHA: 4a9f2b8... Signer: Alim Ul Karim     | |
| | GATE 02: Software Bill of Materials (SBOM) [PASSED] Hash: 9e81ca2... Zero High CVEs          | |
| | GATE 03: Positive Boolean Linter Gate [ACTIVE HALO] Result: 100% Valid (0 Negative Identifiers)| |
| | GATE 04: End-to-End Isolated Integration Gate [BLUR] Tests: 42/42 Pass                       | |
| | GATE 05: Immutable Merkle Root Notarization [BLUR] Merkle Root: 0x7f28... Published to Ledger| |
| +-----------------------------------------------------------------------------------------------+ |
| +-----------------------------------------------------------------------------------------------+ |
| | VERIFICATION ATTESTATION SUMMARY (Y=760, X=100, W=1720, H=180)                                 | |
| | Certified by: Alim Ul Karim, Chief Software Engineer | Compliance Status: 100% GATED PASS    | |
| +-----------------------------------------------------------------------------------------------+ |
| [Footer Telemetry: Y=970, X=100, W=1720, H=30] -- Merkle Tree Proof Verified | Zero Audit Gaps    |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Evidence Gates Container | 100 | 240 | 1720 | 500 | Plane 1 | Vertical list of cryptographic gates, active gate elevated to Plane 2 |
| Attestation Summary | 100 | 760 | 1720 | 180 | Plane 2 | Signer badge, Merkle root hash chip, audit pass confirmation |
| Footer Zone | 100 | 970 | 1720 | 30 | Plane 1 | Ledger contract ID, timestamp verification |

#### TypeScript Contract
```typescript
export interface CryptographicEvidenceItem {
  id: string;
  gateIndex: number;
  gateName: string;
  evidenceType: 'signature' | 'sbom' | 'linter' | 'integration' | 'merkle';
  cryptographicHash: string;
  attestorIdentity: string;
  isVerified: boolean;
  hasAuditGap: boolean;
}

export interface VerifiableAuditLedgerSlideData extends BaseSlide {
  type: 'verifiable-audit-ledger';
  merkleRootHash: string;
  chiefAuditorName: string;
  chiefAuditorTitle: string;
  gates: CryptographicEvidenceItem[];
  isTamperEvident: boolean;
}
```

#### Step Calculation & Kinetic Behavior
- **Formula:** $\text{stepCount} = \max(\text{gates.length}, 1)$
- **Progression:** Step $k$ illuminates verification gate $k$, showing active verification computation, and elevating to Plane 2 with a glowing halo ring.

#### Verified JSON Fixture
```json
{
  "id": "slide-15-audit-ledger",
  "type": "verifiable-audit-ledger",
  "title": "Cryptographic Evidence Gate & Audit Ledger",
  "subtitle": "Tamper-evident verification guaranteeing zero guideline violations and verified signatures",
  "kicker": "VERIFIABLE AUDIT",
  "merkleRootHash": "0x7f28ab49c10928e498d3901ba32cff918",
  "chiefAuditorName": "Alim Ul Karim",
  "chiefAuditorTitle": "Chief Software Engineer",
  "isTamperEvident": true,
  "gates": [
    { "id": "g-1", "gateIndex": 0, "gateName": "Git Commit Signature", "evidenceType": "signature", "cryptographicHash": "4a9f2b801de2", "attestorIdentity": "Alim Ul Karim", "isVerified": true, "hasAuditGap": false },
    { "id": "g-2", "gateIndex": 1, "gateName": "Positive Boolean Linter Gate", "evidenceType": "linter", "cryptographicHash": "9e81ca244f01", "attestorIdentity": "Linter CI Subsystem", "isVerified": true, "hasAuditGap": false },
    { "id": "g-3", "gateIndex": 2, "gateName": "Isolated Integration Test Suite", "evidenceType": "integration", "cryptographicHash": "3b2901a884fe", "attestorIdentity": "Autonomous QA", "isVerified": true, "hasAuditGap": false }
  ]
}
```

---

## 6. Step Calculation Matrix & Wireframe Geometries

### Unified Step Calculation Engine

Every slide archetype resolves its runtime step count deterministically using the following engine:

```typescript
export function calculateKineticSlideStepCount(slide: KineticSuiteSlideData): number {
  switch (slide.type) {
    case 'code-diff-comparison':
      return Math.max(slide.diffChunks.length, 1);
    case 'api-endpoint-inspector':
      return Math.max(slide.parameters.length, 1);
    case 'database-schema-erd':
      return Math.max(slide.tables.length, 1);
    case 'ai-agent-swarm-dag':
      return Math.max(slide.nodes.length, 1);
    case 'canary-release-gauge':
      return Math.max(slide.stages.length, 1);
    case 'incident-rca-postmortem':
      return 4; // Exactly 4 RCA Pillars
    case 'audio-waveform-studio':
      return Math.max(slide.tracks.length, 1);
    case 'verifiable-audit-ledger':
      return Math.max(slide.gates.length, 1);

    // Flat Sovereign Telemetry Archetypes
    case 'global-cloud-edge-mesh':
    case 'security-threat-model':
    case 'financial-burn-runway':
    case 'bento-kpi-mosaic':
    case 'slas-and-uptime-status':
    case 'hardware-silicon-spec':
    case 'cohort-retention-heatmap':
      return 1;

    default:
      return 1;
  }
}
```

### Dynamic Step Bounds Clamping

At presentation runtime, the active sub-step index must be clamped defensively:
$$\text{clampedStep} = \max(0, \min(\text{activeStep}, \text{stepCount} - 1))$$

This guarantees zero phantom steps, eliminates undefined array dereferences, and maintains uninterrupted presentation flow during live boardroom delivery.
