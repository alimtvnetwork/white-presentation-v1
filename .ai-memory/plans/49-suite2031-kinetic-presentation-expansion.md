# Plan 49: Suite 2031 Kinetic Presentation Expansion (In Progress)

## Metadata
- **Identifier:** `49-suite2031-kinetic-presentation-expansion`
- **Specification:** [02-spec/21-app/49-suite2031-kinetic-presentation-expansion/01-architecture-spec.md](../../02-spec/21-app/49-suite2031-kinetic-presentation-expansion/01-architecture-spec.md)
- **Status:** `IN_PROGRESS`
- **Execution Budget:** `300 Steps`
- **Execution Date:** `2026-10-05`
- **Subagents Spawned:** `A = 2` concurrent subagents per wave (`invoke_subagent`)

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

learn /learn if you have to learn something and /plan stuff before working please./plan/plan/plan/plan/plan/plan/plan/plan/plan/plan/plan/plan/plan/plan
```

---

## Deliverables Checklist

### Wave 1: Specs, Themes, Animations & Step Progression
- [ ] Task-01A: Author `02-spec/21-app/49-suite2031-kinetic-presentation-expansion/01-architecture-spec.md`
- [ ] Task-01B: Add `global-stellar-plasma` and `archival-monaco-cream` to `src/themes/gradientTokens.ts`
- [ ] Task-01C: Add 5 GPU keyframe animations to `src/styles/animations.less`
- [ ] Task-01D: Author `02-spec/21-app/49-suite2031-kinetic-presentation-expansion/02-component-spec.md`
- [ ] Task-01E: Author `src/types/suite2031Archetypes.ts`
- [ ] Task-01F: Implement `SUITE_2031_STEP_CALCULATORS` in `src/utils/stepProgression.ts`

### Wave 2: 15 Slide Components
- [ ] Task-02A: Implement slides 1–8 in `src/components/slides/suite2031/`
- [ ] Task-02B: Implement slides 9–15 in `src/components/slides/suite2031/` + barrel export `index.ts`

### Wave 3: Runtime Delegation Chaining & Factories
- [ ] Task-03A: Implement `Suite2031SlideRenderer.tsx` and rewire `Suite2030SlideRenderer.tsx`
- [ ] Task-03B: Implement `suite2031SlideFactories.ts`, register in `slideArchetypeFactories.ts`, seed in `initialDeck.ts`

### Wave 4: Verification & Consolidation
- [ ] Task-04A: Verify with `03-ai-scripts/05-guideline-autofixer.py`
- [ ] Task-04B: Consolidate plan and commit via gitmap
