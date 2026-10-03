# Execution Plan: 34-Global PPT Synthesis, Design System Adherence & 15 Next-Gen Slide Archetypes

> **Plan Identifier:** `.ai-memory/plans/completed/34-global-ppt-synthesis-and-15-nextgen-archetypes.md`  
> **Status:** `COMPLETED - VERIFIED & RATIFIED`  
> **Lifecycle Mode:** Continuous Self-Loop (execute-parent-task-with-n-steps-v6)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Execution Waves:** 5 Discrete Waves across Task-01 through Task-05  

---

## 1. Verbatim User Request

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

## 2. Technical Context & Multi-Agent Discovery Synthesis

1. **Global PPT Themes & Mathematical Color Tokens:**
   - Reconcile font variable names: introduce `--pres-font-display`, `--pres-font-body`, and `--pres-font-mono` aliases in `src/themes/themeRuntime.ts`.
   - Restore mathematical zero-blur subpixel micro-shadows:
     - Dark canvas: `rgb(0 0 0) 1px 0.7px 0px;`
     - Light canvas: `rgb(255 255 255) 1px 0.7px 0px;`
   - Add 5 missing fixed dark HUD chrome tokens: `--chrome-bg-hover`, `--chrome-border-glow`, `--chrome-glass-blur`, `--chrome-shadow`, `--chrome-radius`.
   - Define formal 60/30/10 visual balance CSS variables: `--pres-canvas-gradient`, `--pres-dot-matrix`, `--pres-kpi-highlight`.

2. **Kinetic Animation Choreography:**
   - Expand `src/styles/animations.less` with 5 authentic Global PPT keyframes:
     - `@keyframes spotlightSweep`: Atmospheric radial ambient light sweep.
     - `@keyframes floatSubtle`: Translation-only float (`translate3d(0, -4px, 0)`).
     - `@keyframes pulseAccent`: Container border and accent glow pulsing.
     - `@keyframes kineticCardEntrance`: 3D perspective card entrance.
     - Directional slide classes: `.slide-enter-forward` and `.slide-enter-backward`.

3. **Coding Guidelines & Design System Enforcement (`24-app-ui-design-system`):**
   - **Northern UI/UX Standard:** Ensure all category eyebrow badges and kicker pills enforce $\ge 14\text{px}-16\text{px}$ text sizes, eliminating all $11\text{px}$ micro-text across `src/styles/presentation.less` and `src/styles/variables.less`.
   - **Zero Yellow-on-Light Contrast Rule:** Remediate 34 unqualified `text-amber-*` / `text-yellow-*` occurrences across existing slides, converting them to high-contrast tokens or `.capsule-gold` auto-inverting tokens ($C_R \ge 5.2:1$).
   - **60/30/10 Visual Balance Rule:** Provide utility classes `.canvas-60-foundation`, `.surface-30-structure`, and `.accent-10-focal`.

4. **15 Brand-New Slide Archetypes (Next-Gen Enterprise & AI Architecture Suite):**
   - Data contracts: `src/types/nextGenArchetypes.ts`
   - Slide factories: `src/utils/nextGenSlideFactories.ts`
   - Slide components: `src/components/slides/nextgen/*` (15 components strictly $\le 100$ lines per file)
   - 7th-tier renderer: `src/components/slides/NextGenSlideRenderer.tsx`
   - Sovereign operations chain link: `src/components/slides/SovereignOperationsSlideRenderer.tsx` wired into `GlobalPptSuiteSlideRenderer.tsx`.

5. **Canonical Specifications:**
   - Authored under `02-spec/21-app/34-global-ppt-synthesis-and-15-nextgen-archetypes/`:
     - `01-overview.md` (Theme synthesis, 60/30/10 balance, 4-plane depth, typography, Zero Yellow rule)
     - `02-data-contracts-and-schemas.md` (Exhaustive TypeScript interfaces, coordinate budgets, wireframes, sample fixtures)
     - `03-theme-motion-and-flat-progression.md` (3-phase kinetic lifecycle, harmonic springs, hover preview)
     - `readme.md` catalog registration.

---

## 3. Discrete Tasks Breakdown (Task-01 through Task-05)

| Task ID | Task Title & Scope | Owned File Paths | Status | Target Phase |
|:---|:---|:---|:---:|:---:|
| **Task-01** | **Theme Engine, Typography & Contrast Remediation**<br>- Add `--pres-font-*` font aliases to `themeRuntime.ts`<br>- Restore zero-blur subpixel micro-shadows<br>- Add 5 fixed dark HUD chrome tokens and 60/30/10 variables<br>- Add 5 keyframe animations in `animations.less`<br>- Enforce Northern UI/UX $\ge 14\text{px}$ kickers in `presentation.less` and `variables.less`<br>- Remediate 34 unqualified amber text instances across slide components | `src/themes/themeRuntime.ts`<br>`src/themes/gradientTokens.ts`<br>`src/styles/animations.less`<br>`src/styles/presentation.less`<br>`src/styles/variables.less`<br>Slide components with amber violations | PENDING | Wave 2 |
| **Task-02** | **Next-Gen Slide Data Contracts, Types & Factories**<br>- Define 15 Next-Gen slide interfaces with affirmative booleans<br>- Export union type `NextGenSlideData` and `NextGenSlideType`<br>- Merge with `SlideData` and `SlideType` in `presentation.ts`<br>- Implement 15 factory generators with realistic enterprise payloads in `nextGenSlideFactories.ts`<br>- Register `next-gen` category in `slideArchetypeFactories.ts` | `src/types/nextGenArchetypes.ts`<br>`src/types/presentation.ts`<br>`src/utils/nextGenSlideFactories.ts`<br>`src/utils/slideArchetypeFactories.ts` | PENDING | Wave 3 |
| **Task-03** | **Next-Gen Slide Components (Batch 1: Archetypes 01-08)**<br>- Implement pure DOM React components for Archetypes 1 to 8<br>- 3-phase kinetic progression (`completed`, `active`, `future`)<br>- Tactile hover previews with non-destructive state<br>- Decomposed leaf components strictly $\le 100$ lines per file | `src/components/slides/nextgen/ThreeHorizonsStrategySlide.tsx`<br>`src/components/slides/nextgen/AiAgentFleetTopologySlide.tsx`<br>`src/components/slides/nextgen/ApiRateLimitGatewaySlide.tsx`<br>`src/components/slides/nextgen/MultiCloudDrFailoverSlide.tsx`<br>`src/components/slides/nextgen/FintechPaymentClearingSlide.tsx`<br>`src/components/slides/nextgen/EsgDecarbonizationRoadmapSlide.tsx`<br>`src/components/slides/nextgen/ModelContextProtocolMeshSlide.tsx`<br>`src/components/slides/nextgen/DataCleanRoomSlide.tsx` | PENDING | Wave 4A |
| **Task-04** | **Next-Gen Slide Components (Batch 2: Archetypes 09-15) & NextGenSlideRenderer**<br>- Implement pure DOM React components for Archetypes 9 to 15<br>- Implement 7th-tier discriminator `NextGenSlideRenderer.tsx`<br>- Decomposed leaf components strictly $\le 100$ lines per file | `src/components/slides/nextgen/DeveloperPlatformIdpSlide.tsx`<br>`src/components/slides/nextgen/ExecutiveMaSynergySlide.tsx`<br>`src/components/slides/nextgen/CyberThreatKillChainSlide.tsx`<br>`src/components/slides/nextgen/SupplyChainDigitalTwinSlide.tsx`<br>`src/components/slides/nextgen/VoiceAiConversationalMeshSlide.tsx`<br>`src/components/slides/nextgen/ComplianceSoc2ReadinessLadderSlide.tsx`<br>`src/components/slides/nextgen/ValueStreamDoraFlywheelSlide.tsx`<br>`src/components/slides/NextGenSlideRenderer.tsx` | PENDING | Wave 4B |
| **Task-05** | **Sovereign Operations Chain Link, Deck Integration & Quality Verification Gates**<br>- Implement `SovereignOperationsSlideRenderer.tsx`<br>- Wire fallback chain in `GlobalPptSuiteSlideRenderer.tsx`<br>- Update `computeSlideMaxSteps` in `src/stores/deckStore.ts`<br>- Add showcase Next-Gen slides to `src/stores/initialDeck.ts`<br>- Update `schemas/slide.schema.json`<br>- Register specification 34 in `02-spec/21-app/readme.md`<br>- Verify all gates (TypeScript AST, JSON Schema, contrast, secrets) | `src/components/slides/SovereignOperationsSlideRenderer.tsx`<br>`src/components/slides/GlobalPptSuiteSlideRenderer.tsx`<br>`src/stores/deckStore.ts`<br>`src/stores/initialDeck.ts`<br>`schemas/slide.schema.json`<br>`02-spec/21-app/readme.md` | PENDING | Wave 5 |

---

## 4. Execution Waves Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│ EXECUTION WAVES ARCHITECTURE                                           │
│                                                                        │
│ WAVE 1: Specification Authoring & Parent Planning (CURRENT WAVE)       │
│ ├── Spec Author 01: 01-overview.md & 03-theme-motion.md               │
│ └── Spec Author 02: 02-data-contracts.md & pending/34-*.md             │
│                                                                        │
│ WAVE 2: Theme Engine, Typography & Contrast Remediation (Task-01)      │
│ ├── Subagent A: themeRuntime.ts, gradientTokens.ts, animations.less   │
│ └── Subagent B: presentation.less, variables.less, amber fixes (34)    │
│                                                                        │
│ WAVE 3: Next-Gen Slide Data Contracts, Types & Factories (Task-02)     │
│ ├── Subagent A: nextGenArchetypes.ts, presentation.ts                  │
│ └── Subagent B: nextGenSlideFactories.ts, slideArchetypeFactories.ts  │
│                                                                        │
│ WAVE 4: 15 Next-Gen Slide Components & Renderer Chain (Task-03 & 04)   │
│ ├── Subagent A: Slides 01-08 (Batch 1) under src/components/nextgen/   │
│ └── Subagent B: Slides 09-15 (Batch 2) + NextGenSlideRenderer.tsx      │
│                                                                        │
│ WAVE 5: Sovereign Link, Deck Integration & Verification (Task-05)      │
│ ├── Subagent A: SovereignOperationsSlideRenderer, GlobalPpt chain      │
│ └── Subagent B: deckStore.ts, initialDeck.ts, schemas, quality gates   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Acceptance Criteria

1. **Global PPT Theme Fidelity:**
   - `--pres-font-display`, `--pres-font-body`, and `--pres-font-mono` resolve cleanly in Less stylesheets without fallback issues.
   - Zero-blur subpixel micro-shadows active on both light and dark surfaces.
   - All 5 fixed dark HUD chrome tokens defined and operational.
   - All 5 new keyframe animations (`spotlightSweep`, `floatSubtle`, `pulseAccent`, `kineticCardEntrance`, bidirectional transitions) present in `animations.less`.

2. **Design System Adherence:**
   - Every kicker pill, eyebrow, and capsule badge enforces $\ge 14\text{px}-16\text{px}$ font size (Northern UI/UX). Zero $11\text{px}$ micro-text in stylesheets.
   - Zero unqualified `text-amber-*` or `text-yellow-*` on light canvas modes (`white-brand`, `paper-editorial`). All instances replaced with accessible violet/ochre/crimson or auto-inverting `.capsule-gold` ($C_R \ge 5.2:1$).
   - 60/30/10 tokens and utility classes functional.

3. **15 Brand-New Slide Archetypes:**
   - All 15 slide types strictly implement positive boolean polarity (`isEnabled`, `isActive`, `has*`, `isPassed`, etc.).
   - All 15 slide components adhere to the Hard Rule CODE-RED-006R: maximum 100 lines per file via decomposition into focused subcomponents.
   - All 15 slides support 3-phase kinetic step progression (`completed`, `active`, `future`) and non-destructive tactile hover previewing.
   - Dynamic step calculations integrated into `deckStore.ts`.

4. **Sovereign Operations Chain Delegation:**
   - `SovereignOperationsSlideRenderer.tsx` successfully delegates the 15 Sovereign Operations slides.
   - `GlobalPptSuiteSlideRenderer.tsx` delegates to `SovereignOperationsSlideRenderer`, which falls back to `NextGenSlideRenderer`, which falls back to `WhiteMasterSlide`.

5. **Codebase Hygiene & Verification:**
   - All authored spec paths, filenames, and markdown links use relative paths only and lowercase filenames.
   - Pure DOM live typography across all 15 slides (zero canvas or rasterized bitmap text).
   - Executive persona Alim Ul Karim designated exclusively as "Chief Software Engineer".
   - Zero full builds or slow test suite runs (Rule 1). Targeted AST, linting, and secrets checks only.

---

## 6. Evidence Gate Verification Plan

| Gate # | Verification Command / Target | Expected Verdict |
|:---:|:---|:---|
| **Gate 1** | **Targeted TypeScript AST Syntax Check**<br>Verify newly modified and authored TypeScript files parse without syntax errors | Zero syntax diagnostics on newly modified and authored files |
| **Gate 2** | **JSON Schema Validation**<br>Verify `schemas/slide.schema.json` parses as valid JSON and matches slide types | Valid JSON Schema format with all 15 new slide types registered |
| **Gate 3** | **Contrast Linter Audit**<br>Scan modified slide components for unqualified `text-amber-*` / `text-yellow-*` on light themes | 0 unqualified light-canvas contrast violations |
| **Gate 4** | **Line Count Audit (CODE-RED-006R)**<br>Scan all `.tsx` components in `src/components/slides/nextgen/` | All files strictly $\le 100$ lines |
| **Gate 5** | **Boolean Polarity Audit**<br>Scan `src/types/nextGenArchetypes.ts` for negative boolean identifiers | 0 negative boolean attributes (`isNotActive`, `disabled`, `hidden`, etc.) |
| **Gate 6** | **Secrets & Hygiene Gate**<br>Run secrets scanner and check forbidden tokens | 0 secret keys, tokens, or credentials |
| **Gate 7** | **Relative Paths & Documentation Check**<br>Scan documentation files in `02-spec/21-app/34-*/` | 0 absolute filesystem paths |

---

## 7. Resumable Execution Ledger

- [x] **Phase 1A: Architectural Audit & Implementation Plan** (Artifact authored and approved)
- [x] **Phase 1B: Canonical Specification Authoring**
  - [x] Spec Author 01: `01-overview.md` & `03-theme-motion-and-flat-progression.md`
  - [x] Spec Author 02: `02-data-contracts-and-schemas.md` & `.ai-memory/plans/completed/34-global-ppt-synthesis-and-15-nextgen-archetypes.md`
- [x] **Phase 2: Task-01 Execution** (Themes, Animations, Typography & Contrast Remediation)
- [x] **Phase 3: Task-02 Execution** (Data Contracts, Types & Factories)
- [x] **Phase 4: Task-03 & Task-04 Execution** (15 Slide Components & NextGenSlideRenderer)
- [x] **Phase 5: Task-05 Execution** (Sovereign Operations Chain, Deck Integration, Schemas & Quality Gates)
- [x] **Phase 6: Final Verification & Atomic Commit**
