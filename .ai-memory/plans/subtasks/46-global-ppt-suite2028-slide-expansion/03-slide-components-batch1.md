# Subtask 03: Slide Archetypes Batch 1 (Slides 1 to 8)

> **Subtask Code:** `Task-03`  
> **Parent Task:** `46-global-ppt-suite2028-slide-expansion`  
> **Assigned Role:** `Worker 01`  
> **Target Files:**
> - `src/components/slides/suite2028/SyntheticDataCurationPipelineSlide.tsx`
> - `src/components/slides/suite2028/CloudNativeWasmMicroserviceMeshSlide.tsx`
> - `src/components/slides/suite2028/SovereignAiDatacenterPowerGridSlide.tsx`
> - `src/components/slides/suite2028/AutonomousCodeSecurityPatchingLoopSlide.tsx`
> - `src/components/slides/suite2028/CrossCloudMeshLatencyRoutingSlide.tsx`
> - `src/components/slides/suite2028/EnterpriseGenaiAppObservabilitySlide.tsx`
> - `src/components/slides/suite2028/ZeroDowntimeSchemaEvolutionStepperSlide.tsx`
> - `src/components/slides/suite2028/EnterpriseSoftwareSupplyChainChokepointSlide.tsx`

---

## Technical Scope

Construct the first 8 production slide components for Suite 2028 (all kinetic multi-step workflows, 4 steps each):
1. Adhere to $1920 \times 1080$ virtual canvas layout with pure live DOM elements.
2. Consume props: `{ slide?: SlideDataType; data?: SlideDataType; activeStep?: number }`.
3. Support inline content editing via `useEditModeStore` (`contentEditable={isEditMode}`).
4. Implement the 3-phase kinetic lifecycle:
   - Completed steps ($< \text{activeStep}$): opacity $0.75$, scale $1.00$, checked indicator ($\checkmark$).
   - Active step ($== \text{activeStep}$): opacity $1.00$, scale $1.02$, accent glow halo (`0 0 24px var(--pres-accent-glow)`), $z\text{-index}: 20$, animated with `.animate-kinetic-step-reveal`.
   - Future steps ($> \text{activeStep}$): opacity $0.40$, scale $0.98$, optical blur ($1.25\text{px}$).
5. Northern UI/UX typography scale with absolute floor $\ge 14\text{px}$ on badges/kickers.
6. Zero Yellow-on-Light contrast compliance ($C_R \ge 4.5:1$).
7. Affirmative positive booleans only (`is*`, `has*`, `can*`, `should*`).
8. Keep each component concise ($\le 100$ lines, cleanly organized).
