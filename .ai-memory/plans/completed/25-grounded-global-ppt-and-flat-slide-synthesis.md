# Plan 25: Grounded Global PPT & Flat Slide Show Synthesis

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

learn /learn if you have to learn something and /plan stuff before working please.
```

## Discrete Deliverables & Task Breakdown
- **Task-01**: Spec Authoring & Synthesis in `02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/` (Overview, 15 Archetype Contracts, Color & Motion System, Verification Gates).
- **Task-02**: Step-by-Step Interactive Progression Engine (`activeStep`, spring choreography, fluid progress rail, SVG connector paths).
- **Task-03**: Themes & Animation Ramps (`gradientTokens.ts`, `animations.less`, ink-stamp shadows, light/dark contrast).
- **Task-04**: High-Fidelity Refactoring of 15 Slide Archetypes (strictly $\le 100$ lines per `.tsx` component):
  1. `StepsSlide`: Split interactive sidebar with `StepDetailPane` spring transition (`stiffness: 420, damping: 17, mass: 0.8`).
  2. `TimelineSlide`: Fluid animated progress rail with springing halo and step node jumping.
  3. `ProcessCycleSlide`: Connected circle flywheel with SVG animated connector arrows jumping between stages.
  4. `DepthStackSlide`: 3D card depth stacking with active card pop and layer peel.
  5. `RevealGridSlide`: Bento 6-card feature grid with staggered spring reveals.
  6. `GrowthEngineSlide`: 4 growth channels (SEO, Ads, Social/Content, AI Video) adapted from Global PPT.
  7. `TalentPyramidSlide`: Multi-tier organizational and engineering capability pyramid.
  8. `CostComparisonSlide`: 3-column financial comparison with ROI metrics and savings calculation.
  9. `TechStackSlide`: Layered technology ecosystem with category badges.
  10. `ProblemSolutionSlide`: Bilateral challenge vs sovereign solution breakdown with checkmarks/crosses.
  11. `MetricGridSlide`: KPI performance dashboard with delta pills and timeframe tags.
  12. `BeforeAfterShowcaseSlide`: Transformation split comparing legacy vs modernized states.
  13. `TestimonialsSlide`: High-authority executive quote cards with verification credentials.
  14. `CodeTerminalSlide`: macOS terminal window chrome with syntax-colored execution steps.
  15. `CallToActionSlide`: Closing executive decision frame with dual CTAs and contact details.
- **Task-05**: Template Factories & Canvas Integration (`slideArchetypeFactories.ts`, `SlideRenderer.tsx`, `SlideCreatorModal.tsx`, `deckStore.ts`).
- **Task-06**: Verification, Linting, Testing, and Release Ceremony (TSC 0, Build 0, GitMap commit & push, tag v1.2.0).
