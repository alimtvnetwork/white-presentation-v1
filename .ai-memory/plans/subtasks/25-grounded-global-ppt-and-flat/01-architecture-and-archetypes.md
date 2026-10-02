# Subtask 01: Architecture, Leaf Types & Progression Engine Implementation Plan

> **Module:** `.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/`  
> **Parent Plan:** [Plan 25: Grounded Global PPT & Flat Slide Show Synthesis](../../pending/25-grounded-global-ppt-and-flat-slide-synthesis.md)  
> **Specification Reference:** [01-Overview](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/01-overview.md) & [02-Slide Archetypes Data Contracts](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md)  
> **Status:** Pending Implementation  
> **Target Release:** `v1.2.0`  

---

## 1. Executive Summary & Subtask Goal

Subtask 01 establishes the foundational architectural contracts, leaf-type isolation, and step-by-step progression engine for the Grounded Global PPT & Flat Slide synthesis. 

By separating slide schemas into a dedicated leaf-type module (`src/types/archetypes.ts`) and extracting slide generation payloads into template factories (`src/utils/slideArchetypeFactories.ts`), this subtask guarantees strict adherence to the repository's coding guidelines:
1. `src/types/presentation.ts` remains well below the 300-line budget by re-exporting leaf types.
2. Every slide archetype interface enforces positive boolean polarity (`is*`, `has*`) with zero inverted booleans.
3. The step-by-step progression engine (`activeStep`, `maxSteps`, `stepAdvance`, `stepRewind`, `jumpToStep`) is integrated into the presentation deck store (`src/stores/deckStore.ts`), enabling intra-slide animations without altering slide indices.
4. The executive persona for **Alim Ul Karim** is strictly standardized as **"Chief Software Engineer"** across all schemas, factories, and seed decks.

---

## 2. File Sizing Budgets & Target Scope

| File Path | Action | Role / Purpose | Line Ceiling |
|:---|:---:|:---|:---:|
| `src/types/archetypes.ts` | Edit / Expand | 15 slide archetype contracts, item sub-types, discriminated union | $\le 350$ lines |
| `src/types/presentation.ts` | Edit / Clean | Re-export leaf types, SlideType union, BaseSlide, PresentationDeck | $\le 280$ lines |
| `src/stores/deckStore.ts` | Edit / Enhance | Intra-slide step management (`activeStep`, `stepAdvance`, `jumpToStep`) | $\le 250$ lines |
| `src/utils/slideArchetypeFactories.ts` | Edit / Expand | Default template payloads for all 15 archetypes | $\le 450$ lines |
| `src/hooks/useDeckShortcuts.ts` | Edit / Enhance | Arrow key navigation handling sub-steps before slide navigation | $\le 100$ lines |

---

## 3. Step-by-Step Implementation Sequence

### Step 1: Expand Leaf Types in `src/types/archetypes.ts`
- Declare interfaces for the 15 grounded slide archetypes:
  1. `StepsSlideData` (`steps`) with `StepItem`, `StepMedia`, `StepPhase`
  2. `TimelineSlideData` (`timeline`) with `TimelineMilestone`
  3. `ProcessSlideData` (`process`) with `ProcessStage`
  4. `DepthStackSlideData` (`depth-stack`) with `DepthStackCard`
  5. `RevealGridSlideData` (`reveal-grid`) with `RevealGridItem`
  6. `GrowthEngineSlideData` (`growth-engine`) with `GrowthChannel`
  7. `TalentPyramidSlideData` (`talent-pyramid`) with `PyramidTier`
  8. `CostComparisonSlideData` (`cost-comparison`) with `CostModelColumn`, `ComparisonAttribute`
  9. `TechStackSlideData` (`tech-stack`) with `TechStackCategory`, `TechnologyItem`
  10. `ProblemSolutionSlideData` (`problem-solution`) with `ProblemSolutionSide`
  11. `MetricGridSlideData` (`metric-grid`) with `MetricGridItem`
  12. `BeforeAfterSlideData` (`before-after`) with `BeforeAfterSide`
  13. `TestimonialsSlideData` (`testimonials`) with `TestimonialItem`
  14. `CodeTerminalSlideData` (`code-terminal`) with `TerminalLine`
  15. `CallToActionSlideData` (`call-to-action`) with `ActionButton`, `ContactInfo`
- Formulate discriminated unions:
  ```typescript
  export type NewSlideType =
    | 'steps'
    | 'timeline'
    | 'process'
    | 'depth-stack'
    | 'reveal-grid'
    | 'growth-engine'
    | 'talent-pyramid'
    | 'cost-comparison'
    | 'tech-stack'
    | 'problem-solution'
    | 'metric-grid'
    | 'before-after'
    | 'testimonials'
    | 'code-terminal'
    | 'call-to-action';

  export type NewSlideData = ...;
  ```
- Enforce positive booleans only: `isCompleted`, `isActive`, `isHighlighted`, `isPositiveDelta`, `isPositiveGrowth`, `isCore`, `isVerified`, `hasBadge`, `hasBorder`.

### Step 2: Harmonize `src/types/presentation.ts`
- Re-export `* from './archetypes';`.
- Add `activeStep?: number` to `BaseSlide`.
- Ensure `SlideType` includes all new types.
- Ensure `SlideData` union includes `NewSlideData`.
- Verify total line count remains strictly $\le 300$ lines.

### Step 3: Upgrade Step Progression Engine in `src/stores/deckStore.ts`
- Extend state interface with:
  ```typescript
  activeStep: number;
  stepAdvance: () => void;
  stepRewind: () => void;
  jumpToStep: (step: number) => void;
  getActiveSlideMaxSteps: () => number;
  ```
- Implement step bounds checking:
  - When `nextSlide()` is invoked, reset `activeStep` to 0.
  - When `stepAdvance()` is called:
    - If `activeStep < getActiveSlideMaxSteps() - 1`, increment `activeStep` by 1.
    - If `activeStep >= getActiveSlideMaxSteps() - 1`, advance to the next slide via `nextSlide()`.
  - When `stepRewind()` is called:
    - If `activeStep > 0`, decrement `activeStep` by 1.
    - If `activeStep === 0`, move to previous slide via `prevSlide()` and set `activeStep` to that slide's max step.

### Step 4: Synchronize Keyboard Navigation in `src/hooks/useDeckShortcuts.ts`
- Intercept `ArrowRight`, `ArrowDown`, `Space`, `PageDown` to trigger `stepAdvance()`.
- Intercept `ArrowLeft`, `ArrowUp`, `PageUp` to trigger `stepRewind()`.
- Maintain single-key quick jumps (e.g. `0`..`9` or direct slide index jumps) while resetting `activeStep = 0`.
- Verify file remains $\le 100$ lines.

### Step 5: Expand Template Factories in `src/utils/slideArchetypeFactories.ts`
- Implement template generators for all 15 archetypes (`createStepsSlideTemplate`, `createTimelineSlideTemplate`, `createProcessSlideTemplate`, etc.).
- Ensure every template generates valid canonical data matching the JSON schemas in [02-slide-archetypes-data-contracts.md](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md).
- Validate executive persona Alim Ul Karim is titled "Chief Software Engineer".

---

## 4. Acceptance Criteria & Quality Gates

- [ ] **Leaf Types Isolated:** `src/types/archetypes.ts` contains all 15 contracts and compiles with `tsc --noEmit` without errors.
- [ ] **Line Sizing Strictness:** `src/types/presentation.ts` is $\le 300$ lines; `src/hooks/useDeckShortcuts.ts` is $\le 100$ lines.
- [ ] **Positive Booleans Verified:** AST check verifies zero instances of `isNot*`, `disable*`, or `hidden`.
- [ ] **Executive Persona Verified:** Zero occurrences of "Founder" or "CEO" associated with Alim Ul Karim; strictly titled "Chief Software Engineer".
- [ ] **Intra-Slide Progression Verified:** Unit tests confirm `stepAdvance()` correctly increments `activeStep` until `maxSteps` before advancing slide index.

---

## 5. Cross-References

| Document | Target Location | Description |
|:---|:---|:---|
| Overview Specification | [01-overview.md](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/01-overview.md) | Architectural pillars & persona rules |
| Data Contracts | [02-slide-archetypes-data-contracts.md](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md) | Exhaustive schemas & ASCII wireframes |
| Subtask 02: Motion & Theming | [02-motion-and-theming.md](02-motion-and-theming.md) | Spring physics & palette tokens |
| Subtask 03: Batch 1 Slides | [03-batch-1-slides.md](03-batch-1-slides.md) | Slide components 1 to 8 |
| Subtask 04: Batch 2 Slides | [04-batch-2-slides.md](04-batch-2-slides.md) | Slide components 9 to 15 |
