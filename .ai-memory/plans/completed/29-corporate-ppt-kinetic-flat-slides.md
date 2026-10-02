# Execution Plan: 29-corporate-ppt-kinetic-flat-slides

> **Slug:** `29-corporate-ppt-kinetic-flat-slides`  
> **Status:** `ACTIVE`  
> **Budget:** `300 Steps`  
> **Canonical Spec:** [02-spec/21-app/29-corporate-ppt-kinetic-flat-slides/readme.md](../../../02-spec/21-app/29-corporate-ppt-kinetic-flat-slides/readme.md)  
> **Task Database:** `.ai-memory/temp-agents/09-v29-corporate-ppt-kinetic-flat-slides/agent-task.db`

---

## 1. User Request (Verbatim)

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

## 2. Core Pillars & Architecture

1. **Global PPT Institutional Authority**: 10 master themes with HSL triplets, fixed dark chrome for HUD, light theme capsule inversion, dynamic micro-shadows, and WebAudio synthesizer.
2. **Flat Slide Show Kinetic Step Progression**: Intra-slide 3-phase progression (`completed`, `active`, `future` with 1.25px blur), Framer Motion `layoutId` step halos, spring-eased detail panes.
3. **15+ Enterprise Slide Archetypes Wired**: Zero phantom steps; all 15 enterprise slide components consume `activeStep` from `useDeckStore`.
4. **Missing Archetype Addition**: Implement `TimelineRailSlide` (Archetype 17).
5. **Coding Guidelines & Positive Booleans**: Zero explicit `== true`, zero raw `!is*` / `!has*` negations via `src/utils/booleanGuards.ts`, strict $\le 100$ lines per `.tsx` component, pure DOM typography, and canonical persona titles ("Chief Software Engineer").

---

## 3. Subtasks Breakdown

| Code | Subtask Title | Owner | Target Files | Status |
|:---:|:---|:---:|:---|:---:|
| **Task-01** | Author Canonical Specifications under 02-spec/21-app/29-corporate-ppt-kinetic-flat-slides | Spec Author 01 & 02 | `02-spec/21-app/29-corporate-ppt-kinetic-flat-slides/` | IN_PROGRESS |
| **Task-02** | Adapt Global PPT Color Themes, Contrast Engine, Dynamic Micro-Shadows & WebAudio Cues | Worker 01 | `src/themes/gradientTokens.ts`, `src/audio/soundEngine.ts`, `src/components/canvas/SlideBackground.tsx` | PENDING |
| **Task-03** | Wire Step-by-Step Progression in deckStore for All Enterprise Slides | Worker 01 | `src/stores/deckStore.ts` | PENDING |
| **Task-04** | Upgrade 15 Enterprise Slide Components with Active Step Progression & 3-Phase Lifecycle | Worker 02 | `src/components/slides/` (15 Enterprise Slide Files) | PENDING |
| **Task-05** | Implement Missing TimelineRailSlide Archetype, Factory and Deck Integration | Worker 02 | `src/components/slides/TimelineRailSlide.tsx`, `src/components/slides/rail/`, `src/utils/enterpriseSlideFactories.ts`, `src/stores/initialDeck.ts` | PENDING |
| **Task-06** | Remediate Raw Boolean Negations via booleanGuards and Verify Coding Guidelines | Lead Orchestrator | `src/utils/booleanGuards.ts`, affected component files | PENDING |

---

## 4. Verification & Push Gate

- `python 03-ai-scripts/05-guideline-autofixer.py src --check-only`
- File sizing checks ($\le 100$ lines for `.tsx`)
- Secrets gate clean
- Atomic commit: `gitmap cpf "presentation - synthesize global ppt themes motion and 15 slide archetypes with flat progression"`
