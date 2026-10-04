# Plan: Suite 2029 (Chapter 47) Global PPT Slide Expansion & Flat/Step Suite

> **Task ID:** `47-global-ppt-suite2029-slide-expansion`  
> **Target Release:** `v1.4.0`  
> **Status:** `IN_PROGRESS`  
> **Lead Architect:** Alim Ul Karim, Chief Software Engineer  

---

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

learn /learn if you have to learn something and /plan stuff before working please./plan/plan/plan/plan/plan/plan/plan/plan/plan/plan/plan/plan
```

---

## Confirmed Deliverables & Traceable Tasks

1. **Task-01: Global PPT Color Themes & Animation Engine Expansion**
   - Add 2 new canonical themes (`global-sapphire-executive` and `cyber-emerald-aurora`) with 10-step mathematical stops (`makeStop 0..9`), luminance curves, and unadorned `hslRaw` triplets in `src/themes/gradientTokens.ts`.
   - Update `src/themes/themeRuntime.ts` with `KNOWN_LIGHT_ACCENTS` entries ensuring WCAG AA compliance and zero yellow-on-light.
   - Implement 5 GPU-accelerated keyframe animations in `src/styles/animations.less` (`quantumEntanglementWave`, `neuromorphicSpikeTrace`, `hyperDimensionalIsometricSnap`, `agentDialecticConsensusLock`, `zkProofAttestationIris`).

2. **Task-02: Specifications (Chapter 47)**
   - Author canonical specs in `02-spec/21-app/47-global-ppt-suite2029-slide-expansion/` (`readme.md`, `01-architecture-spec.md`, `02-component-spec.md`).
   - Register Chapter 47 in `02-spec/21-app/readme.md`.

3. **Task-03: Flat Slide & Step-by-Step Slide Engine Improvements**
   - Enhance `StepsSlide.tsx` and `StepByStepSlide.tsx` with the 3-phase kinetic lifecycle (active $1.00$ elevation, completed $0.75$, future $0.38$ with optical blur $1.25\text{px}$).
   - Add magnetic hover micro-interactions and direct node click-to-jump.

4. **Task-04: TypeScript Contracts & Type Guards**
   - Create `src/types/suite2029Archetypes.ts` with contracts for all 15 archetypes, positive booleans, step count calculator, and type guards.
   - Integrate into `src/types/presentation.ts`.

5. **Task-05: 15 Slide Components (Suite 2029)**
   - Construct 15 production React components under `src/components/slides/suite2029/` with live vector DOM text, 60/30/10 visual balance, and 4-plane depth hierarchy.
   - Author barrel export in `src/components/slides/suite2029/index.ts`.

6. **Task-06: Factories, Dispatcher Renderer & Keynote Deck Integration**
   - Author `src/utils/suite2029SlideFactories.ts` and register in `src/utils/slideArchetypeFactories.ts`.
   - Implement `src/components/slides/Suite2029SlideRenderer.tsx` and wire into `src/components/slides/Suite2028SlideRenderer.tsx`.
   - Register step calculators in `src/utils/stepProgression.ts`.
   - Register demo slides in `src/stores/initialDeck.ts`.

7. **Task-07: Targeted Verification & Walkthrough**
   - Run file-scoped TypeScript checks (`npx tsc --noEmit`).
   - Run affirmative boolean and forbidden string linters.
   - Create walkthrough artifact and update `.ai-memory/plans/` records.
