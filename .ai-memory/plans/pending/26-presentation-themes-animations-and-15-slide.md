# Execution Plan: Global PPT Customization, Themes, Animations, Design Systems & 15+ Slide Archetypes

**Task Slug:** `26-presentation-themes-animations-and-15-slide`  
**Target Release:** `v2.5.0`  
**Budget:** 300 steps  
**Concurrency:** A = 2 Subagents, H = 2 Hands  

---

## 1. Executive Summary

This plan addresses the critical gaps identified in the White Presentation Platform:
1. **Global PPT Color Themes & Animation Engine Adaptation:** Seamlessly adapt the 25 themes across 5 theme families (`CorporateClean`, `TechModern`, `EditorialArchival`, `ExecutivePrestige`, `BioGrowth`) and hardware-accelerated animations (`kinetic-morph`, `slide`, `fade`, `zoom`, `rise`, `flip`) with spring physics and zero yellow-on-light contrast violations.
2. **Adherence to New Coding Guidelines & Design System:** Enforce `02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md` (60/30/10 spatial balance, 4-plane depth hierarchy, fluid typography floor >= 14px, magnetic tactile physics, positive booleans `is*`/`has*`).
3. **Specification Updates:** Fully synchronize `02-spec/21-app/44-global-ppt-mastery-flat-step-interactive-suite/` and `02-spec/21-app/readme.md` with the new design concepts and slide archetypes.
4. **Wiring & Enhancement of 16 High-Authority Slide Archetypes:** Wire the 16 newly added Suite 2026 slide archetypes into the active application runtime (barrel exports, slide renderer dispatcher chain, archetype factories, creator modal options, initial deck seeding) and refactor their styling to adapt dynamically across all light and dark themes.
5. **Flat Slides & Step-by-Step Slide Innovations:** Perfect the step progression engine (`stepProgression.ts`), eliminating phantom steps, ensuring flat slides evaluate to 1 step, and delivering the 3-phase kinetic step lifecycle (Active glowing halo, Completed 75% opacity, Future 1.25px blur).

---

## 2. Architecture & File Ownership Matrix

| Wave | Subtask ID | Task Name | Worker | Owned Files | Status |
|:---:|:---|:---|:---:|:---|:---:|
| 1 | `Task-01` | Specification & Design System Sync | Worker 01 | `02-spec/21-app/44-global-ppt-mastery-flat-step-interactive-suite/readme.md`, `02-spec/21-app/readme.md` | PENDING |
| 1 | `Task-02` | Theme Runtime & Animation Engine Adaptation | Worker 02 | `src/themes/themeRuntime.ts`, `src/components/canvas/SlideTransition.tsx`, `src/styles/presentation.less` | PENDING |
| 2 | `Task-03` | Suite 2026 Runtime Dispatcher & Factory Wiring | Worker 01 | `src/components/slides/suite2026/index.ts`, `src/components/slides/Suite2026SlideRenderer.tsx`, `src/components/slides/GlobalPptEvolutionSlideRenderer.tsx`, `src/utils/suite2026SlideFactories.ts`, `src/utils/slideArchetypeFactories.ts`, `src/stores/initialDeck.ts` | PENDING |
| 2 | `Task-04` | Step Progression & Flat/Step Navigation Refinement | Worker 02 | `src/utils/stepProgression.ts`, `src/components/canvas/NavigationControls.tsx` | PENDING |
| 3 | `Task-05A`| Suite 2026 Slide Components Theming Refactor (Batch 1: Archetypes 1-8) | Worker 01 | `src/components/slides/suite2026/ExecutivePnlWaterfallTableSlide.tsx`, `src/components/slides/suite2026/CompetitiveFeatureHeatmapSlide.tsx`, `src/components/slides/suite2026/CustomerPersonaArchetypeSplitSlide.tsx`, `src/components/slides/suite2026/GlobalDataJurisdictionBoundarySlide.tsx`, `src/components/slides/suite2026/HardwareInterfaceBlueprintSlide.tsx`, `src/components/slides/suite2026/MultiHorizonValueRealizationBridgeSlide.tsx`, `src/components/slides/suite2026/TwoSidedEcosystemFlywheelSlide.tsx`, `src/components/slides/suite2026/IshikawaRootCauseFishboneSlide.tsx` | PENDING |
| 3 | `Task-05B`| Suite 2026 Slide Components Theming Refactor (Batch 2: Archetypes 9-16) | Worker 02 | `src/components/slides/suite2026/ModularConsumptionPricingCalculatorSlide.tsx`, `src/components/slides/suite2026/LiveProductViewportWalkthroughSlide.tsx`, `src/components/slides/suite2026/EnterpriseRiskTaxonomyHeatmapSlide.tsx`, `src/components/slides/suite2026/GlobalPartnerTieringLadderSlide.tsx`, `src/components/slides/suite2026/TalentCompetencyGapHeatmapSlide.tsx`, `src/components/slides/suite2026/SloErrorBudgetBurnWaterfallSlide.tsx`, `src/components/slides/suite2026/WeightedDecisionTradeoffMatrixSlide.tsx`, `src/components/slides/suite2026/CustomerChurnInterventionLadderSlide.tsx` | PENDING |
| 4 | `Task-06` | Targeted Quality Gates & GitMap Atomic Commit | Lead Agent | Whole repository | PENDING |

---

## 3. Subtask Breakdown & Acceptance Criteria

### Task-01: Specification & Design System Sync
- Update `02-spec/21-app/44-global-ppt-mastery-flat-step-interactive-suite/readme.md` to detail:
  - Integration with `02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md` (60/30/10 spatial balance, 4-plane elevation, fluid typography >= 14px floor).
  - Explicit specification of Flat Sovereign (1 step) vs Kinetic Multi-Step (N steps) workflows.
  - Runtime dispatcher chain documentation and initial deck integration.
- Update `02-spec/21-app/readme.md` catalog with verified links.

### Task-02: Theme Runtime & Animation Engine Adaptation
- In `src/themes/themeRuntime.ts`, ensure `purgePresentationVariables` cleans CSS properties properly and verifies relative luminance contrast.
- In `src/components/canvas/SlideTransition.tsx`, optimize motion variants, hardware acceleration hints (`transform-gpu`, `will-change: transform, opacity`), and spring easing curves.
- In `src/styles/presentation.less`, harden `.step-phase-active`, `.step-phase-completed`, and `.step-phase-future` classes.

### Task-03: Suite 2026 Runtime Dispatcher & Factory Wiring
- Create `src/components/slides/suite2026/index.ts` barrel export.
- Create `src/components/slides/Suite2026SlideRenderer.tsx` switch-case router.
- Connect `src/components/slides/GlobalPptEvolutionSlideRenderer.tsx` default branch to `Suite2026SlideRenderer`.
- Create `src/utils/suite2026SlideFactories.ts` with authentic enterprise mock factories for all 16 slide types.
- Register all 16 slide factories in `src/utils/slideArchetypeFactories.ts`.
- Seed the 16 slides into `src/stores/initialDeck.ts`.

### Task-04: Step Progression & Flat/Step Navigation Refinement
- Audit `src/utils/stepProgression.ts` ensuring all 16 slide types have correct maxSteps calculations.
- Verify `NavigationControls.tsx` correctly handles step advancing, rewinding, audio cues, and intra-step indicator display.

### Task-05A & Task-05B: Theming Refactor for all 16 Slide Archetypes
- Refactor all 16 slide components in `src/components/slides/suite2026/`:
  - Replace static `text-slate-200`, `bg-slate-800`, `bg-slate-900` with dynamic theme variables (`var(--pres-bg-card)`, `var(--pres-text)`, `var(--pres-border)`, `var(--pres-accent)`).
  - Ensure typography uses fluid sizing with minimum 14px floor for micro-text.
  - Implement 60/30/10 visual balance and 4-plane depth tokens.
  - Enforce positive booleans (`is*`, `has*`).

### Task-06: Targeted Quality Gates & Atomic Commit
- Run targeted checks: `check-relative-paths.py`, `check-forbidden-strings.py`, doc path linter.
- Execute single atomic GitMap commit: `gitmap cpf "presentation - adapt global ppt themes animations and wire 16 slide archetypes"`.
