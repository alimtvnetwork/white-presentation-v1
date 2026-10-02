# Execution Plan: 06-global-ppt-theme-animation-and-15

## User Request (Verbatim)
```text
# High Priority Instruction

Okay. So in the work presentation, you have a lot of things, a lot of customization, a lot of factors are missing from, let's say, global PPT, how the color themes, animation goes. You didn't, let's say, adapt much. Also, you can look into the coding guideline properly. There is a new design systems, those are added. I request you to understand those, try to update your spec regarding the new design concepts and see how you can improve and add more slides. I've been asking. So you should look into the flat slide, global PPT, step-by-step slide. You should do all these things, and probably you should try to improve at least, let's say, 15 slides, new 15 types of slides, try to improve in your system. Okay? That's the first thing you should work on. Go deep, point deep, and then

# Actionable Items Must Follow Non-Negotiable

1. Review and adapt the global PPT color themes and animations.
2. Examine and adhere to the new coding guidelines and design systems.
3. Update your specifications with the new design concepts.
4. Improve and add at least 15 new types of slides.
5. Analyze flat slides and step-by-step slides for improvements.

Must follow and spawn agent using 

@[.agents/skills/execute-parent-task-with-n-steps-v6]

## Additional Instructions

learn /learn if you have to learn something and /plan stuff before working please./plan
```

---

## 1. Executive Summary & Objective
Synthesize Global PPT (`global-ppt-v1`) and Flat Slide Show (`flat-slide-show`) capabilities into the White Presentation System (`white-presentation-v1`), fully adhering to coding guidelines and design systems.
Deliverables:
- **10 Color Themes & HSL Triplet Tokens:** Complete palette integration from Global PPT with runtime WCAG 2.1 AA/AAA contrast calculation.
- **Kinetic Slide Transitions & Spring Physics:** Directional slide transition engine with `AnimatePresence mode="wait"`, spring physics, and anti-black-flash step transitions.
- **Canonical Specification Module:** New specification `02-spec/21-app/26-new-design-and-slide-archetypes/` (01-overview, 02-data-contracts, 03-visual-and-motion, 04-verification-gates, readme.md).
- **15 New Enterprise Slide Types:** Fully typed schemas, <= 100-line React components, live DOM typography, and `EnterpriseSlideRenderer.tsx`.
- **Flat Slide & Step Progression Fixes:** Wire `StepsChainSlide` to `useDeckStore`, fix `stepRewind` backward landing, and add future-step blur effects.

---

## 2. Decomposed Subtask Waves (A = 2, H = 2)

### Wave 1: Specifications & Contracts
- **Subtask 01 (Worker 01):** Author `02-spec/21-app/26-new-design-and-slide-archetypes/` (01-overview.md, 02-data-contracts.md, 03-visual-and-motion.md, 04-verification-gates.md, readme.md) and update `02-spec/21-app/readme.md`.
- **Subtask 02 (Worker 02):** Create `src/types/enterpriseArchetypes.ts` defining all 15 new slide schemas and re-export in `src/types/presentation.ts`. Update `schemas/slide.schema.json`.

### Wave 2: Themes, Animation & Step Navigation Engine
- **Subtask 03 (Worker 01):** Update `src/themes/gradientTokens.ts` and `src/themes/themeRuntime.ts` with 10 Global PPT themes, HSL triplet variables, WCAG 2.1 calculations, and URL param support.
- **Subtask 04 (Worker 02):** Implement `src/components/canvas/SlideTransition.tsx`, wire directional transitions into `PresentationCanvas.tsx`, and fix `useDeckStore.ts` `stepRewind` backward landing + `slideDirection`.

### Wave 3: 15 New Enterprise Slide Components (Batch 1: Types 1–8)
- **Subtask 05 (Worker 01):** Implement `ExecutiveSummarySlide.tsx`, `SystemArchitectureSlide.tsx`, `RoiMetricCalculatorSlide.tsx`, `CustomerJourneySlide.tsx`.
- **Subtask 06 (Worker 02):** Implement `MatrixComparisonSlide.tsx`, `TechStackGridSlide.tsx`, `TeamHierarchySlide.tsx`, `SecurityComplianceSlide.tsx`.

### Wave 4: 15 New Enterprise Slide Components (Batch 2: Types 9–15 & Dispatcher)
- **Subtask 07 (Worker 01):** Implement `ProductRoadmapTimelineSlide.tsx`, `InteractiveFaqSlide.tsx`, `KeyMetricScorecardSlide.tsx`, `CaseStudyImpactSlide.tsx`.
- **Subtask 08 (Worker 02):** Implement `DualColumnProsConsSlide.tsx`, `InteractiveCodePlaygroundSlide.tsx`, `ClosingCtaShowcaseSlide.tsx`, and `EnterpriseSlideRenderer.tsx` + `SlideRenderer.tsx` integration.

### Wave 5: Flat & Step-by-Step Slide Improvements
- **Subtask 09 (Worker 01):** Implement `StepDetailPane.tsx` with spring physics and update `StepsSlide.tsx`.
- **Subtask 10 (Worker 02):** Update `StepsChainSlide.tsx` to connect to `useDeckStore` and apply future step blur and active glow styling.

---

## 3. Strict Coding Guidelines Gate
- Pure DOM text mandate (100% live HTML elements, zero canvas text).
- 16:9 1920x1080 virtual canvas reference geometry.
- Positive booleans only (`is*`, `has*`).
- Function line caps <= 8-15 lines; TSX component line caps <= 100 lines.
- Leaf-type segregation.
- No builds or test suites per Rule 1.
