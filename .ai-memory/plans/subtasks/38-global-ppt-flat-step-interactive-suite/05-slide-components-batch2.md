# Subtask 05: Slide Components Batch 2 (Archetypes 09–15) Implementation Plan

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

Subtask 05 executes the second production batch of React slide components for Module 38, delivering archetypes 09 through 15 under `src/components/slides/flatglobal/`. This batch completes the 15-archetype interactive suite with focus on the **Flat Step Progression Suite** (archetypes 10 through 15) and the interactive executive roster keypad (archetype 09).

### Core Architecture Mandates:
1. **Hard Line Cap ($\le 100$ lines per file):** Every `.tsx` file strictly contains $\le 100$ physical lines, decomposing logic into isolated child subcomponents.
2. **Function Brevity Rule ($\le 15$ lines):** Every function body contains $\le 15$ physical lines.
3. **Tri-State Progression Integration:** Archetypes 10 through 15 consume `useDeckStore((state) => state.activeStep)` and partition visual nodes into `completed`, `active`, and `future` states with 3D elevation and harmonic spring transitions.
4. **Pure Live DOM Typography:** Zero canvas blits or baked images; 100% semantic HTML elements formatted with fluid viewport clamps on the $1920 \times 1080$ virtual canvas.
5. **Positive Booleans & Guard Helpers:** Zero raw boolean negations (`!is*`) or explicit comparisons (`=== true`). All logic uses affirmative helpers from `src/utils/booleanGuards.ts`.
6. **Persona Standardization:** Any reference to Alim Ul Karim strictly uses **"Chief Software Engineer"**.

---

## 2. File Sizing Budgets & Subcomponent Allocation Matrix

| Archetype # & Identifier | Parent Component File | Leaf Subcomponents | Parent Budget | Leaf Budgets |
|:---|:---|:---|:---:|:---:|
| 09. `executive-roster-keypad` | `src/components/slides/flatglobal/ExecutiveRosterKeypadSlide.tsx` | `ExecutiveKeypadTile.tsx`, `ExecutiveBioDetailPane.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 10. `flat-step-process-flow` | `src/components/slides/flatglobal/FlatStepProcessFlowSlide.tsx` | `ProcessStageStepCard.tsx`, `BezierStageTrack.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 11. `flat-split-narrative-stepper` | `src/components/slides/flatglobal/FlatSplitNarrativeStepperSlide.tsx` | `NarrativeStepperRail.tsx`, `HeroTelemetryDetailCard.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 12. `flat-timeline-milestone-rail` | `src/components/slides/flatglobal/FlatTimelineMilestoneRailSlide.tsx` | `MilestoneRailTrack.tsx`, `MilestoneDetailCard.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 13. `flat-reveal-bento-grid` | `src/components/slides/flatglobal/FlatRevealBentoGridSlide.tsx` | `BentoRevealGridCell.tsx`, `BentoKpiSparkline.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 14. `flat-depth-sentence-stack` | `src/components/slides/flatglobal/FlatDepthSentenceStackSlide.tsx` | `DepthSentenceLayer.tsx`, `SentenceThesisCallout.tsx` | $\le 85$ lines | $\le 90$ lines each |
| 15. `flat-typewriter-code-walkthrough` | `src/components/slides/flatglobal/FlatTypewriterCodeWalkthroughSlide.tsx` | `TypewriterCodeWindow.tsx`, `StanzaAnnotationBadge.tsx` | $\le 85$ lines | $\le 90$ lines each |

---

## 3. Detailed Component Breakdown & Decomposition

### Archetype 09: `ExecutiveRosterKeypadSlide` (`executive-roster-keypad`)
- **Parent File:** `src/components/slides/flatglobal/ExecutiveRosterKeypadSlide.tsx`
- **Subcomponents:**
  - `ExecutiveKeypadTile.tsx`: Compact keypad cell showing digit badge `[1]`–`[9]`, avatar, name, and verified credential checkmark.
  - `ExecutiveBioDetailPane.tsx`: Expanded bio panel displaying full role, KPI chips, email contact, and executive signoff.
- **Behavior & Interactivity:**
  - Flat sovereign slide (step count = 1).
  - Pressing keyboard keys `1`–`9` or clicking a tile instantly switches the selected executive without layout shifts.
  - Alim Ul Karim is strictly standardized as **"Chief Software Engineer"**.

### Archetype 10: `FlatStepProcessFlowSlide` (`flat-step-process-flow`)
- **Parent File:** `src/components/slides/flatglobal/FlatStepProcessFlowSlide.tsx`
- **Subcomponents:**
  - `ProcessStageStepCard.tsx`: Stage card with step number ring, stage category, deliverable tag, and tri-state lifecycle styling (`completed` $\to$ `active` $\to$ `future`).
  - `BezierStageTrack.tsx`: Smooth SVG cubic Bezier connecting line that dynamically shifts color to match completed vs. pending stages.
- **Progression Logic:**
  - Dynamic steps = 4 (`slide.stages.length`).
  - Steps cycle through stages with tactile step tick audio (`playStepTick`).

### Archetype 11: `FlatSplitNarrativeStepperSlide` (`flat-split-narrative-stepper`)
- **Parent File:** `src/components/slides/flatglobal/FlatSplitNarrativeStepperSlide.tsx`
- **Subcomponents:**
  - `NarrativeStepperRail.tsx`: Left-hand vertical stepper rail with step index pills, milestone titles, and progress connecting bar.
  - `HeroTelemetryDetailCard.tsx`: Right-hand expanding hero card displaying deep-dive analysis, metric badge, and code snippet.
- **Progression Logic:**
  - Dynamic steps = 4 (`slide.steps.length`).
  - Stepping highlights the active left milestone while animating the right-hand card expansion with harmonic spring physics (`STEP_DETAIL_PANE_SPRING`).

### Archetype 12: `FlatTimelineMilestoneRailSlide` (`flat-timeline-milestone-rail`)
- **Parent File:** `src/components/slides/flatglobal/FlatTimelineMilestoneRailSlide.tsx`
- **Subcomponents:**
  - `MilestoneRailTrack.tsx`: Horizontal milestone track with calendar date pills, status indicators, and completion percentage rings.
  - `MilestoneDetailCard.tsx`: Popover / expanded detail card displaying owner persona, blocker count, and signed-off status.
- **Progression Logic:**
  - Dynamic steps = 4 (`slide.milestones.length`).
  - Advancing steps illuminates milestones sequentially along the timeline rail.

### Archetype 13: `FlatRevealBentoGridSlide` (`flat-reveal-bento-grid`)
- **Parent File:** `src/components/slides/flatglobal/FlatRevealBentoGridSlide.tsx`
- **Subcomponents:**
  - `BentoRevealGridCell.tsx`: Frosted glass Bento cell with CSS grid span classes (`span-1`, `span-2`, `span-3`, `row-span-2`), KPI figure, and unit label.
  - `BentoKpiSparkline.tsx`: SVG mini trendline indicating growth velocity.
- **Progression Logic:**
  - Dynamic steps = 5 (`slide.cells.length`).
  - Cells are revealed sequentially with glowing accent halo rings on the active step.

### Archetype 14: `FlatDepthSentenceStackSlide` (`flat-depth-sentence-stack`)
- **Parent File:** `src/components/slides/flatglobal/FlatDepthSentenceStackSlide.tsx`
- **Subcomponents:**
  - `DepthSentenceLayer.tsx`: Layered sentence element positioned with 3D translation (`translateZ: index * 12px`, `translateY: index * 24px`), keyword highlights, and supporting rationale.
  - `SentenceThesisCallout.tsx`: High-level thesis header anchor card.
- **Progression Logic:**
  - Dynamic steps = 4 (`slide.sentences.length`).
  - Advancing brings the active sentence layer to the foreground with opacity 1.0 and accent glow, while background sentences remain readable at depth.

### Archetype 15: `FlatTypewriterCodeWalkthroughSlide` (`flat-typewriter-code-walkthrough`)
- **Parent File:** `src/components/slides/flatglobal/FlatTypewriterCodeWalkthroughSlide.tsx`
- **Subcomponents:**
  - `TypewriterCodeWindow.tsx`: Terminal window frame with simulated syntax highlighting, line numbers, and blinking cursor animation (`@keyframes cursorBlink`).
  - `StanzaAnnotationBadge.tsx`: Explanatory callout badge pointing to the active line range (`activeLinesRange`).
- **Progression Logic:**
  - Dynamic steps = 4 (`slide.stanzas.length`).
  - Stepping highlights consecutive code stanzas with character typewriter streaming and tactile step tick audio (`playStepTick`).

---

## 4. Implementation Steps & Verification Sequence

1. **Step 1:** Author leaf subcomponents for archetypes 09 through 15 under `src/components/slides/flatglobal/`, ensuring all files are strictly $\le 90$ lines.
2. **Step 2:** Author parent slide components 09 through 15 connecting to `useDeckStore`, ensuring all files are strictly $\le 85$ lines.
3. **Step 3:** Fast verification run:
   - Line count verification: `python -c "import pathlib, sys; bad = [f for f in pathlib.Path('src/components/slides/flatglobal').glob('**/*.tsx') if len(f.read_text(encoding='utf-8').splitlines()) > 100]; sys.exit(1 if bad else 0)"`
   - Type verification: `npx tsc --noEmit`
4. **Step 4:** Ensure zero git commands are executed.
