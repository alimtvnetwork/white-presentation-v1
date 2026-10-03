# Execution Plan: Global PPT Synthesis, Design System Alignment & 15 NextGen Slide Archetypes

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

---

## 1. Executive Summary & Verification Findings
- **Release Audit:** The codebase at commit `ff054bb` was not formally version-bumped (still `1.3.3`), tagged, or released.
- **Synthesis Scope:** Deeply adapt Global PPT color themes, 10-step gradient tokens, ambient canvas wash, kinetic CSS animations, flat slide JSON schemas, and interactive step progression into the presentation system.
- **Design System Mandate:** Enforce the 60/30/10 visual balance rule, 4-plane depth hierarchy, fluid `clamp()` typography, Northern UI/UX typography, positive booleans, and the strict **Zero Yellow-on-Light** contrast rule.
- **15 New Archetypes:** Implement 15 production-grade enterprise slide archetypes decomposed into modular $\le 100$-line subcomponents.

---

## 2. Master Work Breakdown Structure
- **Task-01:** Adapt Global PPT color themes, 10-step gradient tokens, ambient canvas wash, and CSS animations.
- **Task-02:** Author canonical specification suite `02-spec/21-app/35-global-ppt-motion-and-15-nextgen-archetypes/` adhering to the new design system.
- **Task-03:** Upgrade `StepsSlide` interactive step progression engine with directional navigation, hover animatable rails, and concentric halo glow.
- **Task-04:** Define TypeScript contracts and slide factories for 15 new enterprise archetypes.
- **Task-05:** Construct decomposed slide components ($\le 100$ lines) for 15 archetypes, register in `NextGenSlideRenderer` and `initialDeck`.

---

## 3. Disjoint Subagent Wave Strategy (A = 2, H = 2)

### Wave 1 (Spec Step):
- **Spec Author 01 (TypeName: "self"):**
  - Writes: `02-spec/21-app/35-global-ppt-motion-and-15-nextgen-archetypes/01-overview.md`
  - Writes: `02-spec/21-app/35-global-ppt-motion-and-15-nextgen-archetypes/03-visual-motion-and-flat-progression.md`
- **Spec Author 02 (TypeName: "self"):**
  - Writes: `02-spec/21-app/35-global-ppt-motion-and-15-nextgen-archetypes/02-data-contracts.md`
  - Writes: `02-spec/21-app/35-global-ppt-motion-and-15-nextgen-archetypes/04-verification-gates.md`
  - Writes: `02-spec/21-app/35-global-ppt-motion-and-15-nextgen-archetypes/readme.md`

### Wave 2 (Execution Step - Types, Factories & Core Engine):
- **Worker 01 (TypeName: "self"):**
  - Owns: `src/styles/animations.less`, `src/themes/gradientTokens.ts`, `src/themes/themeRuntime.ts`, `src/components/slides/StepsSlide.tsx`, `src/utils/stepProgression.ts`.
- **Worker 02 (TypeName: "self"):**
  - Owns: `src/types/nextgen/corporateStorytellingTypes.ts`, `src/types/nextgen/commercialFinancialTypes.ts`, `src/types/nextgen/deepTechGovernanceTypes.ts`, `src/types/nextGenArchetypes.ts`, `src/utils/nextgen/corporateStorytellingFactories.ts`, `src/utils/nextgen/commercialFinancialFactories.ts`, `src/utils/nextgen/deepTechGovernanceFactories.ts`, `src/utils/nextGenSlideFactories.ts`.

### Wave 3 (Execution Step - Slide Components & Integration):
- **Worker 01 (TypeName: "self"):**
  - Owns: `src/components/slides/nextgen/corporate/*`, `src/components/slides/nextgen/commercial/*`.
- **Worker 02 (TypeName: "self"):**
  - Owns: `src/components/slides/nextgen/techgov/*`, `src/components/slides/NextGenSlideRenderer.tsx`, `src/stores/initialDeck.ts`.

---

## 4. Verification & Quality Gates
- **CODE-RED-006R:** Strictly $\le 100$ lines per `.tsx` component.
- **R1 Ban:** Zero test suites, zero build commands.
- **Linters:** Targeted verification scripts in `linter-scripts/` and `03-ai-scripts/`.
- **Git Safety:** Subagents run NO git commands. Lead orchestrator commits atomically via GitMap (`gitmap cpf "presentation - synthesize global ppt themes animations and 15 nextgen archetypes"`).
