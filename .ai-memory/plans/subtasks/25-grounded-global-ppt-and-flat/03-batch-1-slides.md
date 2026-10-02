# Subtask 03: Batch 1 Slide Archetypes (Slides 1–8) Implementation Plan

> **Module:** `.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/`  
> **Parent Plan:** [Plan 25: Grounded Global PPT & Flat Slide Show Synthesis](../../pending/25-grounded-global-ppt-and-flat-slide-synthesis.md)  
> **Specification Reference:** [02-Slide Archetypes Data Contracts](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md)  
> **Status:** Pending Implementation  
> **Target Release:** `v1.2.0`  

---

## 1. Executive Summary & Subtask Goal

Subtask 03 delivers production-grade React components for the first 8 slide archetypes synthesized from `flat-slide-show` and `global-ppt-v1`. 

A non-negotiable architectural invariant of this implementation is the **strict $\le 100$ lines of code cap per `.tsx` file**. To satisfy this constraint while delivering fluid spring choreography, multi-column layouts, and inline live editing, each component leverages focused helper subcomponents, atomic CSS variables (`--pres-*`), and motion physics tokens.

The 8 slide archetypes covered in Batch 1 are:
1. `StepsSlide` (`steps`): Split interactive sidebar with `StepDetailPane` spring transition (`[420, 17, 0.8]`).
2. `TimelineRoadmapSlide` (`timeline`): Continuous progress rail (`railLeft: 240, railRight: 1680`) with active halo (`[320, 30]`).
3. `ProcessCycleSlide` (`process`): Connected circle roadmap with SVG connector arrows jumping between stages and traveling glow pulses.
4. `DepthStackSlide` (`depth-stack`): 3D depth-stacked perspective cards with peel-away reveal.
5. `RevealGridSlide` (`reveal-grid`): Bento feature matrix with staggered spring cell entrance.
6. `GrowthEngineSlide` (`growth-engine`): 4 growth channels (SEO, Ads, Social/Content, AI Video) adapted from Global PPT.
7. `TalentPyramidSlide` (`talent-pyramid`): Multi-tier organizational and engineering capability pyramid.
8. `CostComparisonSlide` (`cost-comparison`): 3-column financial comparison with ROI metrics and savings calculation.

---

## 2. File Sizing Budgets & Decomposition Strategy

To strictly obey the $\le 100$ lines rule, any archetype with complex kinetic logic is factored into a clean primary component ($\le 100$ lines) and a lightweight subcomponent or helper ($\le 80$ lines):

| Target File | Action | Archetype / Role | Line Ceiling |
|:---|:---:|:---|:---:|
| `src/components/slides/StepsSlide.tsx` | Create / Refactor | Split sidebar & active step controller | $\le 95$ lines |
| `src/components/slides/steps/StepDetailPane.tsx` | Create | Spring animated detail container [420, 17, 0.8] | $\le 75$ lines |
| `src/components/slides/TimelineRoadmapSlide.tsx` | Create / Refactor | Horizontal roadmap & center stage headline | $\le 95$ lines |
| `src/components/slides/timeline/TimelineProgressRail.tsx`| Create | Progress rail, halo [320, 30], & milestone nodes | $\le 90$ lines |
| `src/components/slides/ProcessCycleSlide.tsx` | Create / Refactor | Circular stage nodes & outcome banner | $\le 95$ lines |
| `src/components/slides/process/ProcessSvgArrows.tsx` | Create | Quadratic Bézier SVG connectors & traveling pulse | $\le 85$ lines |
| `src/components/slides/DepthStackSlide.tsx` | Create / Refactor | 3D depth stack with perspective transforms | $\le 95$ lines |
| `src/components/slides/RevealGridSlide.tsx` | Create / Refactor | Bento matrix with staggered spring cell entrance | $\le 95$ lines |
| `src/components/slides/GrowthEngineSlide.tsx` | Create | 4-channel growth vector matrix | $\le 95$ lines |
| `src/components/slides/TalentPyramidSlide.tsx` | Create | Multi-tier talent pyramid with filter ratios | $\le 95$ lines |
| `src/components/slides/CostComparisonSlide.tsx` | Create | 3-column financial model & savings metrics | $\le 95$ lines |

---

## 3. Step-by-Step Implementation Sequence

### Step 1: Implement `StepsSlide` & `StepDetailPane`
- Create `src/components/slides/steps/StepDetailPane.tsx`:
  - Receives `step: StepItem`, `phase: StepPhase`, `fieldIndex: number`.
  - Animates entry via `motion.div` with spring config `{ type: 'spring', stiffness: 420, damping: 17, mass: 0.8 }`.
  - Supports live editing on blur: `applyEdit((s) => ...)`.
  - Caps at $\le 75$ lines.
- Create/refactor `src/components/slides/StepsSlide.tsx`:
  - Renders 620px left sidebar list with number pill insets (`-6px -14px`).
  - Active number pill layout animation using Framer Motion.
  - Interactive click listener: `jumpToStep(i)`.
  - Caps at $\le 95$ lines.

### Step 2: Implement `TimelineRoadmapSlide` & `TimelineProgressRail`
- Create `src/components/slides/timeline/TimelineProgressRail.tsx`:
  - Coordinates: `railLeft = 240`, `railRight = 1680`, `railY = 780`, `railTop = 778`, `railWidth = 1440`.
  - Animated progress bar fill with spring `{ type: 'spring', stiffness: 220, damping: 32 }`.
  - Glowing active halo with spring `{ type: 'spring', stiffness: 320, damping: 30 }`.
  - Milestone circle nodes (34px active, 20px inactive) with click-to-jump.
  - Caps at $\le 90$ lines.
- Create/refactor `src/components/slides/TimelineRoadmapSlide.tsx`:
  - Header kicker and monumental center stage headline (`fontSize: 72px`).
  - AnimatePresence cross-fade between active milestone details.
  - Caps at $\le 95$ lines.

### Step 3: Implement `ProcessCycleSlide` & `ProcessSvgArrows`
- Create `src/components/slides/process/ProcessSvgArrows.tsx`:
  - Renders 1920x1080 SVG layer with quadratic Bézier curves: `M sx sy Q cx cy ex sy`.
  - Implements traveling glowing dot pulse hopping along Bézier sample points.
  - Caps at $\le 85$ lines.
- Create/refactor `src/components/slides/ProcessCycleSlide.tsx`:
  - Calculates circle coordinates: `cy = 620`, `diameter = Math.min(360, stepX * 0.72)`.
  - Renders 3 to 5 circular stage nodes with icons, titles, and bullet points.
  - Renders bottom compounding flywheel outcome banner.
  - Caps at $\le 95$ lines.

### Step 4: Implement `DepthStackSlide`
- Create/refactor `src/components/slides/DepthStackSlide.tsx`:
  - 3D container with `perspective: 1200px`.
  - Maps cards with computed depth offsets based on $\Delta = i - \text{activeStep}$.
  - Elevation transitions: Active card pops to $z = 0$, previous cards peel away with $y = -140\text{px}$, upcoming cards recede with $z = -\Delta \times 60\text{px}$.
  - Caps at $\le 95$ lines.

### Step 5: Implement `RevealGridSlide`
- Create/refactor `src/components/slides/RevealGridSlide.tsx`:
  - Renders 2 or 3 column Bento grid (`repeat(3, minmax(0, 1fr))`).
  - Cells reveal sequentially: `i <= activeStep`.
  - Spring entrance: `translateY: isRevealed ? 0 : 28px`, `opacity: isRevealed ? 1 : 0`.
  - Caps at $\le 95$ lines.

### Step 6: Implement `GrowthEngineSlide`
- Create `src/components/slides/GrowthEngineSlide.tsx`:
  - 4 columns: SEO, Ads, Content/Social, AI Video (395px width each, 30px gap).
  - Displays large growth metric (`fontSize: 48px`), delta pill, and tactic bullets.
  - Visual styling matches Global PPT high-authority cards.
  - Caps at $\le 95$ lines.

### Step 7: Implement `TalentPyramidSlide`
- Create `src/components/slides/TalentPyramidSlide.tsx`:
  - Multi-tier visual hierarchy (Tiers 1 to 5).
  - Left pyramid visualization with trapezoidal SVG or CSS clip-paths.
  - Right tier detail list showing filter ratios ("Top 1%", "20 / 1,000") and screening modules.
  - Caps at $\le 95$ lines.

### Step 8: Implement `CostComparisonSlide`
- Create `src/components/slides/CostComparisonSlide.tsx`:
  - 3 columns: In-House ($780k), Legacy Agency ($450k), Sovereign Engine ($168k).
  - Featured accent styling and glow on Sovereign Engine column.
  - Inverted headline: "How much will you lose if you don't?".
  - Bottom net savings metric: "$612,000 Annual Savings with 10x Velocity".
  - Caps at $\le 95$ lines.

---

## 4. Acceptance Criteria & Quality Gates

- [ ] **Strict Line Count Compliance:** Every slide file in `src/components/slides/` is strictly $\le 100$ lines.
- [ ] **Positive Booleans Only:** All components use `is*` and `has*` boolean props; zero negative booleans (`disable*`, `un*`, `isNot*`, `hidden`).
- [ ] **Pure DOM Typography:** Zero text embedded in images; all headlines, metrics, and labels support live inline editing.
- [ ] **Spring Motion Calibrated:** `StepDetailPane` uses `[420, 17, 0.8]`; Timeline rail uses `[220, 32]`; Halo uses `[320, 30]`.
- [ ] **TypeScript Check:** `tsc --noEmit` passes with 0 errors across all 8 slide components and their helpers.
- [ ] **SlideRenderer Registration:** All 8 slide types are imported and handled in `src/components/slides/SlideRenderer.tsx`.

---

## 5. Cross-References

| Document | Target Location | Description |
|:---|:---|:---|
| Data Contracts | [02-slide-archetypes-data-contracts.md](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md) | Exhaustive schemas & ASCII wireframes |
| Subtask 01: Architecture & Archetypes | [01-architecture-and-archetypes.md](01-architecture-and-archetypes.md) | Types & progression engine |
| Subtask 02: Motion & Theming | [02-motion-and-theming.md](02-motion-and-theming.md) | Spring physics & palette tokens |
| Subtask 04: Batch 2 Slides | [04-batch-2-slides.md](04-batch-2-slides.md) | Slide components 9 to 15 |
