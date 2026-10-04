# Subtask 07: Factories, Dispatcher Renderer & Keynote Deck Integration

> **Task ID:** `Task-07`  
> **Parent:** `47-global-ppt-suite2029-slide-expansion`  
> **Status:** `PENDING`  
> **Owner:** Worker 01  

---

## Scope & Target Files
1. `src/utils/suite2029SlideFactories.ts`
   - Implement factory functions for all 15 slide archetypes.
   - `SUITE_2029_FACTORIES` dictionary and `SUITE_2029_ARCHETYPE_OPTIONS` catalog.
2. `src/utils/slideArchetypeFactories.ts`
   - Re-export factories and prioritize in `createArchetypeSlide`.
3. `src/components/slides/Suite2029SlideRenderer.tsx`
   - Switch-case dispatcher routing all 15 types to their components.
4. `src/components/slides/Suite2028SlideRenderer.tsx`
   - Update default fallback to `<Suite2029SlideRenderer slide={slide} activeStep={activeStep} />`.
5. `src/utils/stepProgression.ts`
   - Register `SUITE_2029_STEP_CALCULATORS`.
6. `src/stores/initialDeck.ts`
   - Register demo slides in keynote presentation deck.
