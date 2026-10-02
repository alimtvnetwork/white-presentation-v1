# Plan 26: Global PPT Color Themes, Motion, Flat Slide Progression & 15 Enterprise Slide Archetypes

## User Request (Verbatim)
```text
is it really?

is it done properly tested and released?


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

## Discrete Deliverables & Ordered Task Breakdown

- **Task-01: Adapt Global PPT Color Themes & 10-Step Gradient Precision**
  - **State:** `[IN PROGRESS]`
  - **Owned Files:** `src/themes/gradientTokens.ts`, `src/themes/themeRuntime.ts`, `src/styles/variables.less`
  - **Deliverable:** 10-step monotonic lightness ramps ($S_0 \dots S_9$), WCAG 2.1 AAA contrast tokens, ink-stamp micro shadows, and dynamic CSS variable injection across 10 production themes.

- **Task-02: Implement 60/30/10 Visual Balance, 4-Plane Depth Hierarchy & Kinetic Animations**
  - **State:** `[IN PROGRESS]`
  - **Owned Files:** `src/styles/presentation.less`, `src/styles/variables.less`, `src/utils/motionPhysics.ts`
  - **Deliverable:** 4-plane depth classes (`.plane-0-base`, `.plane-1-card`, `.plane-2-focus`, `.plane-3-floating`), button variants, and spring physics constants ($k = 420\text{ N/m}, \zeta = 0.85$).

- **Task-03: Author Canonical 26-Series Specifications & Update Spec Index**
  - **State:** `[IN PROGRESS]`
  - **Owned Files:** `02-spec/21-app/26-global-ppt-color-motion-and-expanded-slides/*`, `02-spec/21-app/readme.md`
  - **Deliverable:** 4 comprehensive specification documents covering architecture overview, 15 archetype contracts & ASCII wireframes, color/motion design system, and 12 quality verification gates.

- **Task-04: Improve Flat Slides & Step-by-Step Slide Progression**
  - **State:** `[QUEUED]`
  - **Owned Files:** `src/utils/stepProgression.ts`, `src/components/slides/StepsSlide.tsx`, `src/components/slides/TimelineRoadmapSlide.tsx`, `src/components/slides/ProcessCycleSlide.tsx`, `src/components/slides/DepthStackSlide.tsx`
  - **Deliverable:** Reactive stage progression (`activeStep`, `maxSteps`), focus halos, stage badges, and spring transitions on flat and step slides.

- **Task-05: Deliver 15 New Enterprise Slide Archetypes & Canvas Integration**
  - **State:** `[QUEUED]`
  - **Owned Files:** `src/types/expandedArchetypes.ts`, `src/utils/expandedSlideFactories.ts`, `src/components/slides/ExpandedSlideRenderer.tsx`, `src/components/slides/SlideRenderer.tsx`, `src/components/builder/SlideCreatorModal.tsx`, 15 slide components in `src/components/slides/*.tsx`
  - **Deliverable:** 15 modular, pure live DOM slide archetypes (each $\le 100$ lines), default factories, and modal builder integration expanding total catalog to 40 templates.
