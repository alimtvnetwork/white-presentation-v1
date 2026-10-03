# Execution Plan: 32-global-ppt-flat-step-and

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

## 1. Technical Context & Discovery Synthesis
- **Themes & Gradients:** `src/themes/gradientTokens.ts` currently aliases 10 Global PPT themes to existing presets. We expand them into 10 authentic palettes with dedicated 10-step mathematical ramps ($S_0$–$S_9$) and raw HSL triplet tokens (`accentHsl`).
- **Animations:** `src/styles/animations.less` is expanded with keyframe choreographies: `haloPulse`, `svgStrokeDash`, `bentoReveal`, `cardPop3D`, `audioWaveformPulse`, `dagNodeTraverse`, and `canaryGaugeSweep`.
- **Step Progression:** `src/utils/stepProgression.ts` and `src/hooks/useDeckShortcuts.ts` are upgraded so `ArrowRight`/`Space` step through sub-steps before transitioning slides, and number keys 1-9 jump directly to steps.
- **Design System Rules:** 60/30/10 visual balance rule, 4-plane depth hierarchy, fluid typography clamp curves, 100% pure live DOM rendering, positive booleans (`is*`, `has*` only, zero negative prefixes or `== true`).
- **15 New Slide Archetypes:** Complete TypeScript contracts in `src/types/globalPptArchetypes.ts`, factories in `src/utils/globalPptSlideFactories.ts`, 15 slide components under `src/components/slides/`, and a dedicated 6th-tier renderer `GlobalPptSuiteSlideRenderer.tsx` maintaining <= 100 lines per file.
- **Specification:** Modular specification suite authored under `02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes/`.

---

## 2. Traceable Task Breakdown

| Task-ID | Subtask | Description | Owned Files | Status |
|---|---|---|---|---|
| Task-01 | Global PPT Themes & Animations | Implement 10 standalone Global PPT themes, 10-step gradients, runtime variables, and kinetic CSS animations | `src/themes/gradientTokens.ts`, `src/themes/themeRuntime.ts`, `src/styles/animations.less` | PENDING |
| Task-02 | Step Progression & Flat Slide Engine | Enhance step progression utils, keyboard step navigation in `useDeckShortcuts.ts`, and step slide visual indicators | `src/utils/stepProgression.ts`, `src/hooks/useDeckShortcuts.ts`, `src/stores/deckStore.ts` | PENDING |
| Task-03 | 15 New Slide Archetype Types & Factories | Define TypeScript interfaces for 15 new archetypes with positive booleans, and generate production factory defaults | `src/types/globalPptArchetypes.ts`, `src/utils/globalPptSlideFactories.ts` | PENDING |
| Task-04 | 15 New Slide Components & 6th Tier Renderer | Implement 15 pure DOM React slide components, `GlobalPptSuiteSlideRenderer.tsx`, and wire into slide chain | `src/components/slides/`, `src/components/slides/GlobalPptSuiteSlideRenderer.tsx` | PENDING |
| Task-05 | Deck Integration & Verification | Add new archetype slides to `initialDeck.ts`, run targeted linters, and verify 100% compliance | `src/stores/initialDeck.ts` | PENDING |
| Task-06 | Specification Suite & Ledger Consolidation | Author modular specs under `02-spec/21-app/32-*/` and consolidate execution records | `02-spec/21-app/32-*/`, `.ai-memory/` | PENDING |

---

## 3. Verification & Push Gates
- File-scoped linters: `python 03-ai-scripts/05-guideline-autofixer.py src/ --check-only`
- Relative path check: `python linter-scripts/check-relative-paths.py`
- Doc path check: `python 03-ai-scripts/22-doc-path-linter.py 02-spec/21-app/`
- Sequence integrity: `python linter-scripts/check-sequence-integrity.py`
- Forbidden strings: `python linter-scripts/check-forbidden-strings.py`
- Zero builds or test suites executed during routine turns (R1).
- Final atomic commit via GitMap: `gitmap cpf "GlobalPPT - adapt themes animations and add 15 slide archetypes"` (R8/R9).
