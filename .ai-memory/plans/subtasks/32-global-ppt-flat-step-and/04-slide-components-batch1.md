# Subtask 04: Slide Components Batch 1 (Archetypes 01–08) Implementation Plan

> **Module:** `.ai-memory/plans/subtasks/32-global-ppt-flat-step-and/`  
> **Parent Plan:** [Plan 32: Global PPT Flat Step & 15 Slide Archetypes](../../pending/32-global-ppt-flat-step-and.md)  
> **Specification References:**  
> - [01-Overview](../../../02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/01-overview.md)  
> - [02-Data Contracts](../../../02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/02-data-contracts.md)  
> - [03-Visual and Motion](../../../02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/03-visual-and-motion.md)  
> - [04-Verification Gates](../../../02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/04-verification-gates.md)  
> **Status:** Pending Implementation  
> **Target Release:** `v1.5.0`  

---

## 1. Executive Summary & Subtask Objective

Subtask 04 executes the first production batch of React slide components, implementing the first 8 archetypes of the 15-archetype suite. Each component is engineered as a pure live DOM presentation unit adhering strictly to **CODE-RED-006R** ($\le 100$ lines per `.tsx` file) by decomposing rendering logic into dedicated child subcomponents within archetype-specific folders.

### Core Architecture Mandates:
1. **Hard Line Cap ($\le 100$ lines per file):** The parent slide component acts strictly as a compositional orchestrator connecting store state (`activeStep`, `theme`) with child presentation nodes.
2. **Subcomponent Folder Isolation:** Child components reside in dedicated folders under `src/components/slides/<archetype>/`.
3. **Active Step Consumption:** Every multi-step slide subscribes to `useDeckStore((state) => state.activeStep)` and partitions elements into the 3-phase kinetic progression lifecycle (`completed`, `active`, `future`).
4. **Pure Live DOM Typography:** Zero rasterized text images, zero `<canvas>` text blits. All headlines, code listings, and badges render via semantic HTML with fluid clamp typography.
5. **Positive Booleans & Guard Helpers:** Zero raw boolean negations (`!is*`) or explicit comparisons (`=== true`). All logic uses affirmative helpers from `src/utils/booleanGuards.ts`.
6. **Persona Standardization:** Any speaker or leadership designation strictly references Alim Ul Karim as **"Chief Software Engineer"**.

---

## 2. File Sizing Budgets & Subcomponent Allocation Matrix

| Slide Archetype | Parent File Path | Child Subcomponents Folder | Line Budget (Parent) | Child Line Budgets |
|:---|:---|:---|:---:|:---:|
| 01. `code-diff-comparison` | `src/components/slides/CodeDiffComparisonSlide.tsx` | `src/components/slides/diff/` | $\le 85$ lines | $\le 90$ lines each |
| 02. `global-cloud-edge-mesh` | `src/components/slides/GlobalCloudEdgeMeshSlide.tsx` | `src/components/slides/edge/` | $\le 85$ lines | $\le 90$ lines each |
| 03. `api-endpoint-inspector` | `src/components/slides/ApiEndpointInspectorSlide.tsx` | `src/components/slides/api/` | $\le 85$ lines | $\le 90$ lines each |
| 04. `database-schema-erd` | `src/components/slides/DatabaseSchemaErdSlide.tsx` | `src/components/slides/erd/` | $\le 85$ lines | $\le 90$ lines each |
| 05. `security-threat-model` | `src/components/slides/SecurityThreatModelSlide.tsx` | `src/components/slides/security/` | $\le 85$ lines | $\le 90$ lines each |
| 06. `ai-agent-swarm-dag` | `src/components/slides/AiAgentSwarmDagSlide.tsx` | `src/components/slides/dag/` | $\le 85$ lines | $\le 90$ lines each |
| 07. `financial-burn-runway` | `src/components/slides/FinancialBurnRunwaySlide.tsx` | `src/components/slides/runway/` | $\le 85$ lines | $\le 90$ lines each |
| 08. `bento-kpi-mosaic` | `src/components/slides/BentoKpiMosaicSlide.tsx` | `src/components/slides/mosaic/` | $\le 85$ lines | $\le 90$ lines each |

---

## 3. Detailed Component Breakdown & Decomposition

### Archetype 01: `CodeDiffComparisonSlide` (`code-diff-comparison`)
- **Parent Orchestrator:** `src/components/slides/CodeDiffComparisonSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/diff/DiffCodePane.tsx`: Syntax-highlighted code pane with step line highlighting.
  - `src/components/slides/diff/DiffAnnotationCard.tsx`: Annotation callout card showing rationale and performance delta.
- **Progression Logic:**
  - `step = 0`: Before/Legacy snippet highlighted with technical debt callout.
  - `step = 1`: After/Refactored snippet highlighted with optimization annotation.
  - `step = 2`: Performance impact metric callout and architectural gain summary.

### Archetype 02: `GlobalCloudEdgeMeshSlide` (`global-cloud-edge-mesh`)
- **Parent Orchestrator:** `src/components/slides/GlobalCloudEdgeMeshSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/edge/EdgeMeshMapCanvas.tsx`: SVG vector node map with animated ping trails (`@keyframes svgStrokeDash`).
  - `src/components/slides/edge/EdgeRegionMetricCard.tsx`: Regional latency card (Americas, EMEA, APAC) with status pill.
- **Progression Logic:**
  - `step = 0`: Global overview with primary PoP anchors.
  - `step = 1`: Edge traffic failover flow animated along mesh paths.
  - `step = 2`: Latency SLA breakdown and 99.99% edge availability KPI card reveal.

### Archetype 03: `ApiEndpointInspectorSlide` (`api-endpoint-inspector`)
- **Parent Orchestrator:** `src/components/slides/ApiEndpointInspectorSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/api/ApiEndpointHeader.tsx`: HTTP verb pill (`GET`, `POST`), endpoint URL bar, auth header chips.
  - `src/components/slides/api/ApiJsonTreeViewer.tsx`: Collapsible JSON payload visualizer with syntax-colored tokens.
- **Progression Logic:**
  - `step = 0`: Request signature, authentication headers, and URL query params.
  - `step = 1`: Response payload schema with status code 200 OK badge.
  - `step = 2`: Performance telemetry panel (TTFB, payload size, cache hit ratio).

### Archetype 04: `DatabaseSchemaErdSlide` (`database-schema-erd`)
- **Parent Orchestrator:** `src/components/slides/DatabaseSchemaErdSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/erd/ErdTableNode.tsx`: PascalCase table entity card with typed columns and primary/foreign key icons.
  - `src/components/slides/erd/ErdRelationSvgPath.tsx`: Dynamic SVG cubic Bezier connection lines between related keys.
- **Progression Logic:**
  - `step = 0`: Core user and account schema tables.
  - `step = 1`: Transactional and audit ledger tables with foreign key relationship highlighted.
  - `step = 2`: Indexing strategy and partition key callouts.

### Archetype 05: `SecurityThreatModelSlide` (`security-threat-model`)
- **Parent Orchestrator:** `src/components/slides/SecurityThreatModelSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/security/ThreatVectorCard.tsx`: Attack surface card with STRIDE category pill and severity badge.
  - `src/components/slides/security/MitigationProtocolList.tsx`: Layered defense countermeasure checklist with verified checkmarks.
- **Progression Logic:**
  - `step = 0`: Attack surface overview and vulnerability identification.
  - `step = 1`: Active exploit vector isolation and blast radius visualization.
  - `step = 2`: Zero-trust mitigation protocols and verified compliance status.

### Archetype 06: `AiAgentSwarmDagSlide` (`ai-agent-swarm-dag`)
- **Parent Orchestrator:** `src/components/slides/AiAgentSwarmDagSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/dag/DagAgentNode.tsx`: Autonomous agent node showing role title, model badge, and live state.
  - `src/components/slides/dag/DagExecutionEdge.tsx`: Animated flow line with active packet traversing between nodes.
- **Progression Logic:**
  - `step = 0`: Orchestrator agent decomposition and dispatch.
  - `step = 1`: Parallel worker execution (Subagent 01 & Subagent 02 in flight).
  - `step = 2`: Synthesis, verification gate validation, and finalized ledger commit.

### Archetype 07: `FinancialBurnRunwaySlide` (`financial-burn-runway`)
- **Parent Orchestrator:** `src/components/slides/FinancialBurnRunwaySlide.tsx`
- **Subcomponents:**
  - `src/components/slides/runway/RunwayTimelineChart.tsx`: SVG horizontal bar/area chart illustrating cash reserves and net burn.
  - `src/components/slides/runway/CapitalAllocationCard.tsx`: Spend distribution cards (R&D, Infra, Go-To-Market) with percentage pills.
- **Progression Logic:**
  - `step = 0`: Current ARR, cash balance, and baseline runway months.
  - `step = 1`: Spend optimization plan and headcount efficiency gains.
  - `step = 2`: Series B capital milestone target and profitability horizon.

### Archetype 08: `BentoKpiMosaicSlide` (`bento-kpi-mosaic`)
- **Parent Orchestrator:** `src/components/slides/BentoKpiMosaicSlide.tsx`
- **Subcomponents:**
  - `src/components/slides/mosaic/BentoKpiCell.tsx`: Frosted glass Bento cell with large clamp KPI value, sparkline, and change badge.
  - `src/components/slides/mosaic/BentoTrendSparkline.tsx`: SVG miniature trendline path with gradient fill under curve.
- **Progression Logic:**
  - `step = 0`: Primary enterprise growth KPI cell in focus.
  - `step = 1`: Operational efficiency and customer retention mosaic cells illuminated.
  - `step = 2`: Infrastructure reliability and unit economics cells highlighted.

---

## 4. Implementation Steps & Verification Flow

1. **Step 1:** Create directory structures:
   - `src/components/slides/diff/`
   - `src/components/slides/edge/`
   - `src/components/slides/api/`
   - `src/components/slides/erd/`
   - `src/components/slides/security/`
   - `src/components/slides/dag/`
   - `src/components/slides/runway/`
   - `src/components/slides/mosaic/`
2. **Step 2:** Implement child leaf components for each archetype ensuring strict $\le 90$ lines per file.
3. **Step 3:** Implement parent slide components connecting to `useDeckStore` with line counts strictly $\le 85$ lines.
4. **Step 4:** Execute fast targeted validation:
   - `python 03-ai-scripts/verify-component-lines.py`
   - `npx tsc --noEmit`
5. **Step 5:** Verify zero git commands executed by worker subagents.
