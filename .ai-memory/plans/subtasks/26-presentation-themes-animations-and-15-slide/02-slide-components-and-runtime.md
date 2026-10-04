# Subtask 02: Suite 2026 Slide Components & Runtime Wiring Implementation Plan

> **Subtask Identifier:** `.ai-memory/plans/subtasks/26-presentation-themes-animations-and-15-slide/02-slide-components-and-runtime.md`  
> **Parent Execution Plan:** `.ai-memory/plans/pending/26-presentation-themes-animations-and-15-slide.md`  
> **Module Identifier:** `26-presentation-themes-animations-and-15-slide`  
> **Status:** `IN PROGRESS (SPECIFIED & READY FOR WORKER EXECUTION)`  
> **Target Release:** `v2.5.0`  
> **Author:** Spec Subagent 02 (Slide Components & Runtime Architect)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Suite 2026 Slide Archetype Wiring, Dispatcher Chain, Step Progression Engine, Flat vs Kinetic Multi-Step Lifecycle, and Universal Theming Adaptation

---

## 1. Executive Summary & Scope

This subtask governs the architectural execution plan for wiring and refactoring the **16 Suite 2026 Enterprise Slide Archetypes** across the White Presentation Platform runtime. It serves as the direct operational guide for Worker 01 and Worker 02 across **Wave 2** (Task-03: Dispatcher & Factory Wiring; Task-04: Step Progression Refinement) and **Wave 3** (Task-05A: Theming Refactor Batch 1; Task-05B: Theming Refactor Batch 2).

### 1.1 Parent Plan Task Mapping

| Wave | Task ID | Assigned Worker | Primary Deliverables | Owned Files |
|:---:|:---|:---:|:---|:---|
| 2 | `Task-03` | Worker 01 | Suite 2026 Runtime Dispatcher & Factory Wiring | `src/components/slides/suite2026/index.ts`<br>`src/components/slides/Suite2026SlideRenderer.tsx`<br>`src/components/slides/GlobalPptEvolutionSlideRenderer.tsx`<br>`src/utils/suite2026SlideFactories.ts`<br>`src/utils/slideArchetypeFactories.ts`<br>`src/stores/initialDeck.ts` |
| 2 | `Task-04` | Worker 02 | Step Progression & Flat/Step Navigation Refinement | `src/utils/stepProgression.ts`<br>`src/components/canvas/NavigationControls.tsx` |
| 3 | `Task-05A` | Worker 01 | Theming Refactor Batch 1 (Archetypes 1–8) | `src/components/slides/suite2026/ExecutivePnlWaterfallTableSlide.tsx`<br>`src/components/slides/suite2026/CompetitiveFeatureHeatmapSlide.tsx`<br>`src/components/slides/suite2026/CustomerPersonaArchetypeSplitSlide.tsx`<br>`src/components/slides/suite2026/GlobalDataJurisdictionBoundarySlide.tsx`<br>`src/components/slides/suite2026/HardwareInterfaceBlueprintSlide.tsx`<br>`src/components/slides/suite2026/MultiHorizonValueRealizationBridgeSlide.tsx`<br>`src/components/slides/suite2026/TwoSidedEcosystemFlywheelSlide.tsx`<br>`src/components/slides/suite2026/IshikawaRootCauseFishboneSlide.tsx` |
| 3 | `Task-05B` | Worker 02 | Theming Refactor Batch 2 (Archetypes 9–16) | `src/components/slides/suite2026/ModularConsumptionPricingCalculatorSlide.tsx`<br>`src/components/slides/suite2026/LiveProductViewportWalkthroughSlide.tsx`<br>`src/components/slides/suite2026/EnterpriseRiskTaxonomyHeatmapSlide.tsx`<br>`src/components/slides/suite2026/GlobalPartnerTieringLadderSlide.tsx`<br>`src/components/slides/suite2026/TalentCompetencyGapHeatmapSlide.tsx`<br>`src/components/slides/suite2026/SloErrorBudgetBurnWaterfallSlide.tsx`<br>`src/components/slides/suite2026/WeightedDecisionTradeoffMatrixSlide.tsx`<br>`src/components/slides/suite2026/CustomerChurnInterventionLadderSlide.tsx` |

### 1.2 Non-Negotiable Architectural Boundaries
1. **Total Ban on Git Commands:** Subagents and workers must NEVER execute git commands (`git add`, `git commit`, `git status`). Git operations are reserved solely for Lead Agent in Task-06.
2. **Strict No-Build and No-Test Execution:** No heavy compilers (`npm run build`, `vite build`, `tsc`, `npm test`) may be executed. Verification is performed exclusively via targeted lightweight Python linters and schema inspection scripts.
3. **Strict File Ownership:** Workers must strictly modify only their assigned files within each wave.
4. **Positive Booleans Convention:** All flags and conditions must use positive names (`is*`, `has*`).
5. **Relative Paths Convention:** All imports and links must strictly use relative paths.
6. **Fluid Typography Floor:** Text must never be sized below $14\text{px}$.

---

## 2. Inventory & Classification of the 16 Suite 2026 Archetypes

The 16 archetypes are systematically partitioned into:
- **10 Kinetic Multi-Step Slides:** Interactive 4-step progressive workflows with intra-slide stage progression, direct step jumping (`jumpToStep(idx)`), and 3-phase kinetic lifecycle styling (`completed`, `active`, `future`).
- **6 Flat Sovereign Slides:** High-density, single-step (1 step) panoramic telemetry and architectural boards presenting complete operational domains without pagination or ghost steps.

| # | Archetype Identifier | Component | Mode | Declared Steps | Focus Domain | Data Interface |
|:---:|:---|:---|:---:|:---:|:---|:---|
| 01 | `executive-pnl-waterfall-table` | `ExecutivePnlWaterfallTableSlide` | Kinetic Step | 4 | Financial P&L | `ExecutivePnlWaterfallTableSlideData` |
| 02 | `competitive-feature-heatmap` | `CompetitiveFeatureHeatmapSlide` | Flat Sovereign | 1 | Market Moats | `CompetitiveFeatureHeatmapSlideData` |
| 03 | `customer-persona-archetype-split` | `CustomerPersonaArchetypeSplitSlide` | Kinetic Step | 4 | Persona ICP | `CustomerPersonaArchetypeSplitSlideData` |
| 04 | `global-data-jurisdiction-boundary` | `GlobalDataJurisdictionBoundarySlide` | Flat Sovereign | 1 | Data Compliance | `GlobalDataJurisdictionBoundarySlideData` |
| 05 | `hardware-interface-blueprint` | `HardwareInterfaceBlueprintSlide` | Kinetic Step | 4 | Edge Hardware | `HardwareInterfaceBlueprintSlideData` |
| 06 | `multi-horizon-value-realization-bridge` | `MultiHorizonValueRealizationBridgeSlide` | Kinetic Step | 4 | Scaling Bridge | `MultiHorizonValueRealizationBridgeSlideData` |
| 07 | `two-sided-ecosystem-flywheel` | `TwoSidedEcosystemFlywheelSlide` | Kinetic Step | 4 | Network Loops | `TwoSidedEcosystemFlywheelSlideData` |
| 08 | `ishikawa-root-cause-fishbone` | `IshikawaRootCauseFishboneSlide` | Kinetic Step | 4 | Reliability RCA | `IshikawaRootCauseFishboneSlideData` |
| 09 | `modular-consumption-pricing-calculator` | `ModularConsumptionPricingCalculatorSlide` | Flat Sovereign | 1 | Pricing Tiers | `ModularConsumptionPricingCalculatorSlideData` |
| 10 | `live-product-viewport-walkthrough` | `LiveProductViewportWalkthroughSlide` | Kinetic Step | 4 | Viewport Demo | `LiveProductViewportWalkthroughSlideData` |
| 11 | `enterprise-risk-taxonomy-heatmap` | `EnterpriseRiskTaxonomyHeatmapSlide` | Flat Sovereign | 1 | Risk Governance | `EnterpriseRiskTaxonomyHeatmapSlideData` |
| 12 | `global-partner-tiering-ladder` | `GlobalPartnerTieringLadderSlide` | Kinetic Step | 4 | Alliances Ladder | `GlobalPartnerTieringLadderSlideData` |
| 13 | `talent-competency-gap-heatmap` | `TalentCompetencyGapHeatmapSlide` | Flat Sovereign | 1 | Talent Readiness | `TalentCompetencyGapHeatmapSlideData` |
| 14 | `slo-error-budget-burn-waterfall` | `SloErrorBudgetBurnWaterfallSlide` | Kinetic Step | 4 | SRE Error Budgets | `SloErrorBudgetBurnWaterfallSlideData` |
| 15 | `weighted-decision-tradeoff-matrix` | `WeightedDecisionTradeoffMatrixSlide` | Flat Sovereign | 1 | Tech Tradeoffs | `WeightedDecisionTradeoffMatrixSlideData` |
| 16 | `customer-churn-intervention-ladder` | `CustomerChurnInterventionLadderSlide` | Kinetic Step | 4 | Retention CS | `CustomerChurnInterventionLadderSlideData` |

---

## 3. Wave 2 / Task-03 Implementation Plan: Runtime Wiring Pipeline

Worker 01 is responsible for wiring the Suite 2026 slide components into the active application lifecycle across 6 files:

### Step 3.1: Create Barrel Export (`src/components/slides/suite2026/index.ts`)
* Create `src/components/slides/suite2026/index.ts` cleanly re-exporting all 16 slide components.
* Ensure naming matches the export names defined in each slide component.

### Step 3.2: Create Dispatcher Router (`src/components/slides/Suite2026SlideRenderer.tsx`)
* Implement `Suite2026SlideRenderer` as a clean, performant switch-case component.
* Match `slide.type` across all 16 `Suite2026SlideType` values.
* Cast `slide as any` to satisfy component prop types.
* Fallback default case renders `<WhiteMasterSlide slide={slide as any} />`.

### Step 3.3: Connect Fallback Delegation in `GlobalPptEvolutionSlideRenderer.tsx`
* Update `src/components/slides/GlobalPptEvolutionSlideRenderer.tsx`.
* Replace `default: return <WhiteMasterSlide slide={slide as any} />;` with:
  ```typescript
  import { Suite2026SlideRenderer } from './Suite2026SlideRenderer';
  // ...
  default:
    return <Suite2026SlideRenderer slide={slide} />;
  ```
* This establishes an uninterrupted delegation pipeline: App Canvas -> `SlideCanvas` -> `EvolutionSlideRenderer` -> `Suite2026SlideRenderer` -> Target Slide Component.

### Step 3.4: Author Authentic Enterprise Mock Factories (`src/utils/suite2026SlideFactories.ts`)
* Create `src/utils/suite2026SlideFactories.ts` exporting 16 mock slide factory functions:
  1. `createExecutivePnlWaterfallTableSlide(id: string): ExecutivePnlWaterfallTableSlideData`
  2. `createCompetitiveFeatureHeatmapSlide(id: string): CompetitiveFeatureHeatmapSlideData`
  3. `createCustomerPersonaArchetypeSplitSlide(id: string): CustomerPersonaArchetypeSplitSlideData`
  4. `createGlobalDataJurisdictionBoundarySlide(id: string): GlobalDataJurisdictionBoundarySlideData`
  5. `createHardwareInterfaceBlueprintSlide(id: string): HardwareInterfaceBlueprintSlideData`
  6. `createMultiHorizonValueRealizationBridgeSlide(id: string): MultiHorizonValueRealizationBridgeSlideData`
  7. `createTwoSidedEcosystemFlywheelSlide(id: string): TwoSidedEcosystemFlywheelSlideData`
  8. `createIshikawaRootCauseFishboneSlide(id: string): IshikawaRootCauseFishboneSlideData`
  9. `createModularConsumptionPricingCalculatorSlide(id: string): ModularConsumptionPricingCalculatorSlideData`
  10. `createLiveProductViewportWalkthroughSlide(id: string): LiveProductViewportWalkthroughSlideData`
  11. `createEnterpriseRiskTaxonomyHeatmapSlide(id: string): EnterpriseRiskTaxonomyHeatmapSlideData`
  12. `createGlobalPartnerTieringLadderSlide(id: string): GlobalPartnerTieringLadderSlideData`
  13. `createTalentCompetencyGapHeatmapSlide(id: string): TalentCompetencyGapHeatmapSlideData`
  14. `createSloErrorBudgetBurnWaterfallSlide(id: string): SloErrorBudgetBurnWaterfallSlideData`
  15. `createWeightedDecisionTradeoffMatrixSlide(id: string): WeightedDecisionTradeoffMatrixSlideData`
  16. `createCustomerChurnInterventionLadderSlide(id: string): CustomerChurnInterventionLadderSlideData`
* Mock data must include realistic boardroom metrics, audited financials, positive booleans (`is*`, `has*`), and valid stage definitions.

### Step 3.5: Register in `src/utils/slideArchetypeFactories.ts`
* Import `SUITE_2026_FACTORIES` and options from `suite2026SlideFactories.ts`.
* Expose options in `SUITE_2026_ARCHETYPE_OPTIONS`.
* Wire the 16 factories into `createArchetypeSlide(type, id)`:
  ```typescript
  if (type in SUITE_2026_FACTORIES) {
    return SUITE_2026_FACTORIES[type as keyof typeof SUITE_2026_FACTORIES](id);
  }
  ```

### Step 3.6: Seed the Active Demo Keynote (`src/stores/initialDeck.ts`)
* Import the Suite 2026 factory functions in `src/stores/initialDeck.ts`.
* Append curated instances of Suite 2026 slides to the initial presentation deck array.
* Verify deck loads without type or runtime errors.

---

## 4. Wave 2 / Task-04 Implementation Plan: Step Progression & Flat/Step Engine

Worker 02 is responsible for auditing and hardening `src/utils/stepProgression.ts` and `src/components/canvas/NavigationControls.tsx`.

### Step 4.1: Audit and Calibrate `SUITE_2026_STEP_CALCULATORS` in `stepProgression.ts`
* Ensure the 16 slide step calculators match their architectural mode:
  ```typescript
  export const SUITE_2026_STEP_CALCULATORS: Record<string, StepCalcFn> = {
    // 10 Kinetic Multi-Step Slides (4 Steps)
    'executive-pnl-waterfall-table': () => 4,
    'customer-persona-archetype-split': () => 4,
    'hardware-interface-blueprint': () => 4,
    'multi-horizon-value-realization-bridge': () => 4,
    'two-sided-ecosystem-flywheel': () => 4,
    'ishikawa-root-cause-fishbone': () => 4,
    'live-product-viewport-walkthrough': () => 4,
    'global-partner-tiering-ladder': () => 4,
    'slo-error-budget-burn-waterfall': () => 4,
    'customer-churn-intervention-ladder': () => 4,

    // 6 Flat Sovereign Slides (Exactly 1 Step, Zero Phantom Steps)
    'competitive-feature-heatmap': () => 1,
    'global-data-jurisdiction-boundary': () => 1,
    'modular-consumption-pricing-calculator': () => 1,
    'enterprise-risk-taxonomy-heatmap': () => 1,
    'talent-competency-gap-heatmap': () => 1,
    'weighted-decision-tradeoff-matrix': () => 1,
  };
  ```

### Step 4.2: Zero Phantom Steps Guarantee
* When `getSlideMaxSteps(slide)` is called for any of the 6 flat slides, it MUST return `1`.
* In `NavigationControls.tsx`, `totalSteps === 1` hides the intra-slide step indicator dots and prevents sub-clicks, smoothly advancing to `nextSlide()`.

### Step 4.3: 3-Phase Kinetic Styling Verification
* Ensure `src/styles/presentation.less` declares the proper transitions:
  * `.step-phase-active`: `opacity: 1; transform: scale(1.02); box-shadow: 0 0 24px -2px var(--pres-accent); z-index: 20;`
  * `.step-phase-completed`: `opacity: 0.75; transform: scale(1.0); filter: none; z-index: 1;`
  * `.step-phase-future`: `opacity: 0.40; transform: scale(0.98); filter: blur(1.25px); pointer-events: none; z-index: 0;`

### Step 4.4: Click-to-Jump Navigation Controls
* Verify `NavigationControls.tsx` handles click-to-jump step progression with audio cues (`playStepAdvanceAudio`, `playStepRewindAudio`).
* Ensure keyboard shortcuts (`ArrowRight`, `ArrowLeft`, `Space`, `Number Keys`) advance intra-slide steps seamlessly before advancing slides.

---

## 5. Wave 3 / Tasks 05A & 05B Implementation Plan: Theming Refactor

Workers 01 and 02 will refactor the 16 slide components in parallel.

### 5.1 Batch 1 Allocation (Worker 01, Task-05A)
1. `ExecutivePnlWaterfallTableSlide.tsx`
2. `CompetitiveFeatureHeatmapSlide.tsx`
3. `CustomerPersonaArchetypeSplitSlide.tsx`
4. `GlobalDataJurisdictionBoundarySlide.tsx`
5. `HardwareInterfaceBlueprintSlide.tsx`
6. `MultiHorizonValueRealizationBridgeSlide.tsx`
7. `TwoSidedEcosystemFlywheelSlide.tsx`
8. `IshikawaRootCauseFishboneSlide.tsx`

### 5.2 Batch 2 Allocation (Worker 02, Task-05B)
9. `ModularConsumptionPricingCalculatorSlide.tsx`
10. `LiveProductViewportWalkthroughSlide.tsx`
11. `EnterpriseRiskTaxonomyHeatmapSlide.tsx`
12. `GlobalPartnerTieringLadderSlide.tsx`
13. `TalentCompetencyGapHeatmapSlide.tsx`
14. `SloErrorBudgetBurnWaterfallSlide.tsx`
15. `WeightedDecisionTradeoffMatrixSlide.tsx`
16. `CustomerChurnInterventionLadderSlide.tsx`

### 5.3 Concrete Refactoring Directives
1. **Eliminate Hardcoded Slate:**
   * Replace `bg-slate-800`, `bg-slate-900` with `bg-[var(--pres-bg-card)]` or `border-[var(--pres-border)]`.
   * Replace `text-slate-200`, `text-slate-100` with `text-[var(--pres-text)]`.
   * Replace `text-slate-400`, `text-slate-500` with `text-[var(--pres-text-muted)]`.
2. **Standardize Import Paths:**
   * Standardize import paths: `import type { ... } from '../../types/suite2026Archetypes';`
   * Fix any broken relative paths (such as `../../../types/` if the component is at `src/components/slides/suite2026/`).
3. **Enforce Fluid Typography Floor $\ge 14\text{px}$:**
   * Replace any `text-xs` (12px) or `text-[10px]` with `text-[14px]` or fluid `clamp(14px, 0.8vw + 6px, 18px)`.
4. **Enforce 60/30/10 Balance & 4-Plane Elevation:**
   * Outer slide container: `plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px]`
   * Content panels/cards: `plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md`
   * Active step/metric: `plane-2-focus ring-2 ring-[var(--pres-accent)] bg-[var(--pres-accent)]/15`
5. **Enforce Positive Booleans:**
   * Verify all conditional renderings check positive booleans (`is*`, `has*`).
6. **Support Inline Editing:**
   * Ensure `title` and `subtitle` use `contentEditable={isEditMode}` and `onBlur` with `applyEdit`.

---

## 6. Verification Checklist & Quality Gates

Each worker must verify their owned deliverables against this checklist prior to signaling completion:

- [ ] **Wiring Verification:**
  - [ ] `src/components/slides/suite2026/index.ts` exports all 16 components without naming errors.
  - [ ] `Suite2026SlideRenderer.tsx` contains cases for all 16 slide types.
  - [ ] `GlobalPptEvolutionSlideRenderer.tsx` successfully falls back to `Suite2026SlideRenderer`.
  - [ ] `suite2026SlideFactories.ts` produces valid mock objects for all 16 slide types.
  - [ ] `slideArchetypeFactories.ts` creates Suite 2026 slides via `createArchetypeSlide`.
  - [ ] `initialDeck.ts` includes Suite 2026 slides without schema breakage.
- [ ] **Step Progression Verification:**
  - [ ] 6 Flat slides evaluate strictly to `1` step in `getSlideMaxSteps`.
  - [ ] 10 Kinetic slides evaluate strictly to `4` steps in `getSlideMaxSteps`.
  - [ ] Zero phantom steps occur during deck playback.
  - [ ] Stage buttons trigger `jumpToStep(idx)` properly.
- [ ] **Theming & Design System Verification:**
  - [ ] Zero static `bg-slate-800`, `bg-slate-900`, `text-slate-200` violations.
  - [ ] Clean visual rendering in both Light (e.g. `CorporateClean`, `BioGrowth`) and Dark (e.g. `TechModern`, `ExecutivePrestige`) themes.
  - [ ] All typography uses native live DOM elements with minimum font size $\ge 14\text{px}$.
  - [ ] 100% positive booleans (`is*`, `has*`).
- [ ] **Git & Build Hygiene:**
  - [ ] Zero git commands executed by subagents.
  - [ ] Zero build/test runs executed.
  - [ ] Only assigned files modified.
