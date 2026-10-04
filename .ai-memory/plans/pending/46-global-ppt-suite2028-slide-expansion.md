# Unified Execution Plan: 46-global-ppt-suite2028-slide-expansion

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

learn /learn if you have to learn something and /plan stuff before working please./plan/plan/plan/plan/plan/plan/plan/plan/plan/plan
```

---

## 1. System Vision & Deliverables

This execution plan synthesizes Global PPT corporate visual authority with the White Presentation runtime engine, establishing **Suite 2028 (Chapter 46)**. It incorporates:
1. **Global PPT Color Themes Adaptation:**
   - Audit the 25 existing themes and add 2 brand-new corporate themes:
     - `global-executive-gold` (Executive Prestige dark palette with 24k bullion accent and warm obsidian field).
     - `midnight-aurora` (Tech Modern dark palette with electric cyan/emerald aurora gradients).
   - Full 10-step mathematical color gradient ramps in `src/themes/gradientTokens.ts`.
   - WCAG AA ($C_R \ge 4.5:1$) contrast verification in `src/themes/themeRuntime.ts`.
2. **Kinetic Animations & Motion Curves:**
   - 5 new hardware-accelerated GPU animations in `src/styles/animations.less`:
     - `kineticStepReveal` (`.animate-kinetic-step-reveal`): Perspective entrance for step progression.
     - `perspective3dFlip` (`.animate-perspective-3d-flip`): 3D perspective flip for comparison cards.
     - `lensFocusGlow` (`.animate-lens-focus-glow`): Breathing halo focus for scorecard matrices.
     - `metricCountPulse` (`.animate-metric-count-pulse`): Tactile pulse for KPI and telemetry numbers.
     - `topologyFlow` (`.animate-topology-flow`): Animated SVG directional dash flow for network/mesh connections.
3. **Coding Guidelines & Design System Adherence:**
   - Enforce `02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md`:
     - 60% Dominant Base / 30% Structural Panels / 10% Vivid Focal Accents.
     - 4-Plane Depth Hierarchy (Plane 0 Canvas, Plane 1 Raised Bento, Plane 2 Elevated Active, Plane 3 Floating HUD).
     - Northern UI/UX typography scale with absolute $\ge 14\text{px}$ floor on badges/kickers.
     - Zero Yellow-on-Light contrast safeguard ($C_R \ge 4.5:1$).
     - 100% Affirmative Positive Booleans (`is*`, `has*`, `can*`, `should*`).
     - Sizing guidelines: components $\le 100$ lines, functions $8–15$ lines, files $\le 300$ lines.
4. **Canonical Specifications in `02-spec/21-app/46-global-ppt-suite2028-slide-expansion/`:**
   - `readme.md`: Master catalog, persona signoff by Alim Ul Karim, Chief Software Engineer.
   - `01-architecture-spec.md`: Spatial balance, 4-plane depth, typography tokens, tactile physics.
   - `02-component-spec.md`: 15 slide data contracts, type guards, ASCII wireframes, JSON schemas.
   - Update `02-spec/21-app/readme.md` index.
5. **15 Brand-New Suite 2028 Slide Archetypes:**
   - **9 Kinetic Multi-Step Slides (4 Steps):**
     1. `synthetic-data-curation-pipeline` (`SyntheticDataCurationPipelineSlide`)
     2. `cloud-native-wasm-microservice-mesh` (`CloudNativeWasmMicroserviceMeshSlide`)
     3. `sovereign-ai-datacenter-power-grid` (`SovereignAiDatacenterPowerGridSlide`)
     4. `autonomous-code-security-patching-loop` (`AutonomousCodeSecurityPatchingLoopSlide`)
     5. `cross-cloud-mesh-latency-routing` (`CrossCloudMeshLatencyRoutingSlide`)
     6. `enterprise-genai-app-observability` (`EnterpriseGenaiAppObservabilitySlide`)
     7. `zero-downtime-schema-evolution-stepper` (`ZeroDowntimeSchemaEvolutionStepperSlide`)
     8. `enterprise-software-supply-chain-chokepoint` (`EnterpriseSoftwareSupplyChainChokepointSlide`)
     9. `ai-agent-multi-turn-orchestration-dag` (`AiAgentMultiTurnOrchestrationDagSlide`)
   - **6 Flat Sovereign Slides (1 Step):**
     10. `enterprise-data-clean-room-audit` (`EnterpriseDataCleanRoomAuditSlide`)
     11. `hyperscale-k8s-cost-allocator-matrix` (`HyperscaleK8sCostAllocatorMatrixSlide`)
     12. `cyber-resilience-ransomware-readiness-radar` (`CyberResilienceRansomwareReadinessRadarSlide`)
     13. `saas-expansion-retention-waterfall-gauge` (`SaasExpansionRetentionWaterfallGaugeSlide`)
     14. `developer-experience-friction-index-heatmap` (`DeveloperExperienceFrictionIndexHeatmapSlide`)
     15. `geopolitical-sovereign-cloud-compliance-compass` (`GeopoliticalSovereignCloudComplianceCompassSlide`)
6. **Integration & Demo Registration:**
   - `src/types/suite2028Archetypes.ts`: Discriminated types and calculation functions.
   - `src/types/presentation.ts`: Union registration.
   - `src/utils/stepProgression.ts`: Top-priority step calculation wiring.
   - `src/components/slides/Suite2028SlideRenderer.tsx`: Component dispatcher.
   - `src/components/slides/Suite2027SlideRenderer.tsx`: Fallback chain wiring.
   - `src/utils/suite2028SlideFactories.ts`: Factory functions.
   - `src/utils/slideArchetypeFactories.ts`: Barrel export.
   - `src/stores/initialDeck.ts`: Register demo slides starting at `slide-260`.

---

## 2. Multi-Agent Task Decomposition

| Task-ID | Title | Worker | Target Files |
|:---|:---|:---:|:---|
| **Task-01** | Theme Ramps & Kinetic Animations | Worker 01 | `src/themes/gradientTokens.ts`, `src/themes/themeRuntime.ts`, `src/styles/animations.less` |
| **Task-02** | Spec Documentation & Type Contracts | Worker 02 | `02-spec/21-app/46-global-ppt-suite2028-slide-expansion/*`, `src/types/suite2028Archetypes.ts`, `src/types/presentation.ts`, `src/utils/stepProgression.ts` |
| **Task-03** | Slide Archetypes Batch 1 (Slides 1 to 8) | Worker 01 | `src/components/slides/suite2028/` (Components 1–8) |
| **Task-04** | Slide Archetypes Batch 2 (Slides 9 to 15) & Barrel | Worker 02 | `src/components/slides/suite2028/` (Components 9–15), `src/components/slides/suite2028/index.ts` |
| **Task-05** | Factories, Renderers & Demo Deck Registration | Worker 01 | `src/utils/suite2028SlideFactories.ts`, `src/utils/slideArchetypeFactories.ts`, `src/components/slides/Suite2028SlideRenderer.tsx`, `src/components/slides/Suite2027SlideRenderer.tsx`, `src/stores/initialDeck.ts` |

---

## 3. Verification Protocol

1. **Targeted Linters:**
   - `python 03-ai-scripts/05-guideline-autofixer.py src --check-only`
   - `python linter-scripts/check-relative-paths.py`
   - `python linter-scripts/check-forbidden-strings.py`
2. **Evidence Collection:**
   - Verify all 15 new slide components compile and export without errors.
   - Verify step count calculation handles all 15 types correctly.
   - Verify initial deck loads with 274 total slides (259 previous + 15 new).
3. **Atomic Commit & Push:**
   - `gitmap cpf "suite2028 - add global ppt themes animations and 15 slide archetypes"`
