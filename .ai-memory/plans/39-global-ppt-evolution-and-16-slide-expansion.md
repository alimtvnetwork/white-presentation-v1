# Plan 39: Global PPT Evolution & 16 High-Authority Slide Expansion

## User Request (Verbatim)
> # High Priority Instruction
> 
> Okay. So in the work presentation, you have a lot of things, a lot of customization, a lot of factors are missing from, let's say, global PPT, how the color themes, animation goes. You didn't, let's say, adapt much. Also, you can look into the coding guideline properly. There is a new design systems, those are added. I request you to understand those, try to update your spec regarding the new design concepts and see how you can improve and add more slides. I've been asking. So you should look into the flat slide, global PPT, step-by-step slide. You should do all these things, and probably you should try to improve at least, let's say, 15 slides, new 15 types of slides, try to improve in your system. Okay? That's the first thing you should work on. Go deep, point deep, and then
> 
> # Actionable Items Must Follow Non-Negotiable
> 
> 1. Review and adapt the global PPT color themes and animations.
> 2. Examine and adhere to the new coding guidelines and design systems.
> 3. Update your specifications with the new design concepts.
> 4. Improve and add at least 15 new types of slides.
> 5. Analyze flat slides and step-by-step slides for improvements.
> 
> Must follow and spawn agent using 
> 
> @[.agents/skills/execute-parent-task-with-n-steps-v6]
> 
> ## Additional Instructions
> 
> learn /learn if you have to learn something and /plan stuff before working please./plan/plan/plan/plan/plan/plan/plan/plan/plan/plan

---

## Architecture & Scope
1. **02-spec/21-app/39-global-ppt-evolution-and-16-slide-expansion/**:
   - `readme.md`, `01-overview.md`, `02-data-contracts.md`, `03-theme-motion-and-flat-progression.md`, `04-verification-gates.md`.
2. **Type Contracts**:
   - `src/types/globalPptExpansionArchetypes.ts` with 16 distinct high-authority slide types.
   - Integration into `src/types/presentation.ts`.
3. **Motion & Theming**:
   - Add radar sweep, raft heartbeat, lineage flow, and orbit animations in `src/styles/animations.less`.
   - Affirmative step progression in `src/stores/deckStore.ts`.
4. **Slide Components**:
   - 16 new components under `src/components/slides/expansion/`, all strictly $\le 100$ lines.
5. **Renderer, Factories, and Initial Deck**:
   - `GlobalPptExpansionSuiteSlideRenderer.tsx` cascading dispatcher.
   - `globalPptExpansionFactories.ts` and wiring into `slideArchetypeFactories.ts` (fixing factory lookup bug).
   - Pre-seeding into `src/stores/initialDeck.ts`.

---

## Subtask Breakdown
- **Subtask 01:** Specifications Authoring (`02-spec/21-app/39-global-ppt-evolution-and-16-slide-expansion/`)
- **Subtask 02:** Type Contracts & Step Engine (`src/types/`, `src/stores/deckStore.ts`, `src/styles/animations.less`)
- **Subtask 03:** Slide Components Batch 1 (Archetypes 01–08 under `src/components/slides/expansion/`)
- **Subtask 04:** Slide Components Batch 2 (Archetypes 09–16 under `src/components/slides/expansion/`)
- **Subtask 05:** Cascading Renderer, Factory Integration & Initial Deck
- **Subtask 06:** Verification, Linters & Clean Status
