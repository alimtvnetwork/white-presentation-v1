# Subtask 04: Slide Components Batch 1 (Archetypes 01–08) Implementation Plan

> **Module:** `.ai-memory/plans/subtasks/38-global-ppt-flat-step-interactive-suite/`  
> **Parent Plan:** Module 38: Global PPT Flat Step Interactive Suite  
> **Specification References:**  
> - [01-Overview](../../../02-spec/21-app/38-global-ppt-flat-step-interactive-suite/01-overview.md)  
> - [02-Data Contracts](../../../02-spec/21-app/38-global-ppt-flat-step-interactive-suite/02-data-contracts.md)  
> - [03-Theme Motion & Flat Progression](../../../02-spec/21-app/38-global-ppt-flat-step-interactive-suite/03-theme-motion-and-flat-progression.md)  
> - [04-Verification Gates](../../../02-spec/21-app/38-global-ppt-flat-step-interactive-suite/04-verification-gates.md)  
> **Status:** Pending Implementation  
> **Target Release:** `v1.9.0`  

---

## 1. Executive Summary & Subtask Objective

Subtask 04 executes the first production batch of React slide components for Module 38, delivering archetypes 01 through 08 under `src/components/slides/flatglobal/`. Each component is engineered as a pure live DOM presentation unit adhering strictly to **CODE-RED-006R** ($\le 100$ physical lines per `.tsx` file) and function brevity rules ($\le 15$ physical lines per function).

### Core Architecture Mandates:
1. **Hard Line Cap ($\le 100$ lines per file):** The parent slide component acts strictly as a compositional orchestrator connecting store state (`activeStep`, `theme`) with child presentation nodes.
2. **Leaf Subcomponent Decomposition:** Complex cards, SVG diagrams, and modal lightboxes reside in dedicated leaf subcomponents under `src/components/slides/flatglobal/`.
3. **Active Step Consumption:** Multi-step slides (`cognitive-inversion-punchline`, `talent-pyramid-funnel-svg`, `connected-roadmap-rail-pulse`) subscribe to `useDeckStore((state) => state.activeStep)` and cycle elements through the 3-phase kinetic progression lifecycle (`completed`, `active`, `future`).
4. **Pure Live DOM Typography:** Zero rasterized text images, zero `<canvas>` text blits. All headlines, numbers, and badges render via semantic HTML with fluid clamp typography on the $1920 \times 1080$ virtual canvas.
5. **Positive Booleans & Guard Helpers:** Zero raw boolean negations (`!is*`) or explicit comparisons (`=== true`). All logic uses affirmative helpers from `src/utils/booleanGuards.ts`.
6. **Persona Standardization:** Any speaker or leadership designation strictly references Alim Ul Karim as **"Chief Software Engineer"**.

---

## 2. File Sizing Budgets & Subcomponent Allocation Matrix

| Archetype # & Identifier | Parent Component File | Leaf Subcomponents | Parent Budget | Leaf Budgets |
|:---|:---|:---|:---:|:---:|
| 01. `interactive-branching-close` | `src/components/slides/flatglobal/InteractiveBranchingCloseSlide.tsx` | `BranchingActionCard.tsx`, `BranchingMetricsPill.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 02. `before-after-showcase-pan` | `src/components/slides/flatglobal/BeforeAfterShowcasePanSlide.tsx` | `ShowcaseViewportFrame.tsx`, `ShowcaseDeltaBadge.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 03. `search-serp-proof-lightbox` | `src/components/slides/flatglobal/SearchSerpProofLightboxSlide.tsx` | `SerpResultCard.tsx`, `SerpProofModal.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 04. `cognitive-inversion-punchline` | `src/components/slides/flatglobal/CognitiveInversionPunchlineSlide.tsx` | `InversionStageCard.tsx`, `PunchlineBanner.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 05. `talent-pyramid-funnel-svg` | `src/components/slides/flatglobal/TalentPyramidFunnelSvgSlide.tsx` | `PyramidTierSvgBand.tsx`, `TierMetricsCallout.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 06. `hexagonal-tech-cluster` | `src/components/slides/flatglobal/HexagonalTechClusterSlide.tsx` | `HexagonClusterCell.tsx`, `TechStackLegend.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 07. `connected-roadmap-rail-pulse` | `src/components/slides/flatglobal/ConnectedRoadmapRailPulseSlide.tsx` | `RoadmapPhaseNode.tsx`, `RailPulseConnector.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 08. `campaign-performance-lightbox` | `src/components/slides/flatglobal/CampaignPerformanceLightboxSlide.tsx` | `CampaignRoasCard.tsx`, `CampaignDetailModal.tsx` | $\le 85$ lines | $\le 90$ lines each |

---

## 3. Detailed Component Breakdown & Decomposition

### Archetype 01: `InteractiveBranchingCloseSlide` (`interactive-branching-close`)
- **Parent File:** `src/components/slides/flatglobal/InteractiveBranchingCloseSlide.tsx`
- **Subcomponents:**
  - `BranchingActionCard.tsx`: Interactive option card (Option Y: Next Steps, Option N: Scarcity Rebuttal) with keyboard shortcut pill (`[Y]`, `[N]`).
  - `BranchingMetricsPill.tsx`: Strategic business metric pill (e.g. ARR growth, payback velocity).
- **Behavior & Interactivity:**
  - Flat sovereign slide (step count = 1).
  - Listens to keyboard shortcuts `Y` and `N` via `useBranchingShortcuts` hook and provides clickable touch/mouse buttons.
  - Emits navigation branch events when clicked or triggered via key.

### Archetype 02: `BeforeAfterShowcasePanSlide` (`before-after-showcase-pan`)
- **Parent File:** `src/components/slides/flatglobal/BeforeAfterShowcasePanSlide.tsx`
- **Subcomponents:**
  - `ShowcaseViewportFrame.tsx`: Dual-panel before/after viewport container with hover-triggered `@keyframes baScrollPan` 7-second smooth vertical scrolling.
  - `ShowcaseDeltaBadge.tsx`: Performance and efficiency improvement badge (e.g. `+340% Throughput`, `-65% Latency`).
- **Behavior & Interactivity:**
  - Flat sovereign slide (step count = 1).
  - Mouse hover over viewport activates smooth CSS keyframe pan across full-height screenshots without layout reflow.

### Archetype 03: `SearchSerpProofLightboxSlide` (`search-serp-proof-lightbox`)
- **Parent File:** `src/components/slides/flatglobal/SearchSerpProofLightboxSlide.tsx`
- **Subcomponents:**
  - `SerpResultCard.tsx`: Google SERP simulated card displaying URL breadcrumb, bolded query matches, and citation ranking badge.
  - `SerpProofModal.tsx`: High-contrast modal dialog displaying full screenshot proof, crawl timestamp, and verification hash.
- **Behavior & Interactivity:**
  - Flat sovereign slide (step count = 1).
  - Clicking any SERP card sets `selectedProofId` and opens the proof lightbox modal.

### Archetype 04: `CognitiveInversionPunchlineSlide` (`cognitive-inversion-punchline`)
- **Parent File:** `src/components/slides/flatglobal/CognitiveInversionPunchlineSlide.tsx`
- **Subcomponents:**
  - `InversionStageCard.tsx`: Stage card rendering either the conventional industry myth or the inverted engineering truth.
  - `PunchlineBanner.tsx`: High-impact sovereign punchline takeaway banner illuminated on the final step.
- **Progression Logic:**
  - Dynamic steps = 3 (`slide.inversions.length`).
  - `step = 0`: Conventional industry premise presented in subdued tone.
  - `step = 1`: Cognitive inversion revealed with high-contrast accent ring.
  - `step = 2`: Uncompromising systemic punchline banner illuminated.

### Archetype 05: `TalentPyramidFunnelSvgSlide` (`talent-pyramid-funnel-svg`)
- **Parent File:** `src/components/slides/flatglobal/TalentPyramidFunnelSvgSlide.tsx`
- **Subcomponents:**
  - `PyramidTierSvgBand.tsx`: SVG trapezoid / triangle tier polygon with gradient fill and active glow halo.
  - `TierMetricsCallout.tsx`: Side callout card detailing applicant volume, filter pass rate, and competency criteria.
- **Progression Logic:**
  - Dynamic steps = 4 (`slide.tiers.length`).
  - Advancing steps illuminates tiers from base sourcing ($10,000$ candidates) up to senior leadership selection ($4$ hires).

### Archetype 06: `HexagonalTechClusterSlide` (`hexagonal-tech-cluster`)
- **Parent File:** `src/components/slides/flatglobal/HexagonalTechClusterSlide.tsx`
- **Subcomponents:**
  - `HexagonClusterCell.tsx`: SVG pointy-topped hexagon cell with technology icon, version chip, and category status.
  - `TechStackLegend.tsx`: Category filter bar (Core Engine, Storage, AI/ML, Security) highlighting related nodes.
- **Behavior & Interactivity:**
  - Flat sovereign slide (step count = 1).
  - Hovering a hexagonal cell illuminates adjacent connected dependencies along SVG stroke lines.

### Archetype 07: `ConnectedRoadmapRailPulseSlide` (`connected-roadmap-rail-pulse`)
- **Parent File:** `src/components/slides/flatglobal/ConnectedRoadmapRailPulseSlide.tsx`
- **Subcomponents:**
  - `RoadmapPhaseNode.tsx`: Milestone phase card with release version tag, target quarter, and feature checklist.
  - `RailPulseConnector.tsx`: SVG horizontal interconnect rail with pulsing animated photon packet traveling to active node.
- **Progression Logic:**
  - Dynamic steps = 4 (`slide.phases.length`).
  - Steps cycle through Architecture $\to$ Alpha $\to$ Beta $\to$ GA with tactile step sound (`playStepTick`).

### Archetype 08: `CampaignPerformanceLightboxSlide` (`campaign-performance-lightbox`)
- **Parent File:** `src/components/slides/flatglobal/CampaignPerformanceLightboxSlide.tsx`
- **Subcomponents:**
  - `CampaignRoasCard.tsx`: Marketing campaign card with spend figure, ROAS multiplier, and conversion rate pill.
  - `CampaignDetailModal.tsx`: Drilldown modal with multi-touch attribution breakdown and customer cohort telemetry.
- **Behavior & Interactivity:**
  - Flat sovereign slide (step count = 1).
  - Clicking a campaign card displays deep-dive attribution metrics in modal overlay.

---

## 4. Implementation Steps & Verification Sequence

1. **Step 1:** Create directory `src/components/slides/flatglobal/`.
2. **Step 2:** Author leaf subcomponents for archetypes 01 through 08, ensuring each file strictly satisfies $\le 90$ lines.
3. **Step 3:** Author parent slide components 01 through 08 connecting to `useDeckStore`, verifying each is strictly $\le 85$ lines.
4. **Step 4:** Execute fast static AST validation:
   - Line count verification: `python -c "import pathlib, sys; bad = [f for f in pathlib.Path('src/components/slides/flatglobal').glob('**/*.tsx') if len(f.read_text(encoding='utf-8').splitlines()) > 100]; sys.exit(1 if bad else 0)"`
   - Type verification: `npx tsc --noEmit`
5. **Step 5:** Ensure zero git commands are executed.
