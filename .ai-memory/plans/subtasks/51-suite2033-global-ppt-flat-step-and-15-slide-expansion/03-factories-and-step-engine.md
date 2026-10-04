# Subtask 03: Data Factories, Step Count Resolver & Type Registry

> **Task ID:** `Task-03`  
> **Parent:** `51-suite2033-global-ppt-flat-step-and-15-slide-expansion`  
> **Wave:** `Wave 1 (Contracts, Styles, Engine)`  
> **Status:** `COMPLETED`  
> **Target Files:** `src/utils/suite2033SlideFactories.ts`, `src/utils/stepProgression.ts`, `src/types/suite2033Archetypes.ts`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  

---

## 1. Objective & Scope
Construct realistic production data factories for all 15 Suite 2033 slide archetypes and integrate the step count calculation engine to ensure deterministic intra-slide progression (4 steps for kinetic workflows, 1 step for flat sovereign overviews).

---

## 2. Inviolable Architectural Mandates
1. **Deterministic Step Count Resolution:**
   - Multi-step workflows evaluate to `4` steps (or dynamically via `slide[stageKey].length`).
   - Flat sovereign overviews evaluate to strictly `1` step.
2. **100% Positive Affirmative Booleans:** Factory-generated fixtures must exclusively use affirmative boolean properties (`is*`, `has*`, `can*`, `should*`). Zero negative booleans.
3. **Institutional Executive Content:** Data fixtures must represent mission-critical enterprise scenarios (sovereign cloud, AI model evals, SOC zero-day defense, ESG accounting, cap table equity).
4. **Persona Attribution:** Chief Software Engineer Alim Ul Karim (`CODE-RED-011`).

---

## 3. Implementation Steps
1. Create `src/utils/suite2033SlideFactories.ts`:
   - Implement factory functions for all 15 archetypes:
     - `createStrategicInitiativeCascadeSlide(id?: number | string): StrategicInitiativeCascadeSlideData`
     - `createAiAgentOrchestrationPipelineSlide(id?: number | string): AiAgentOrchestrationPipelineSlideData`
     - `createMaSynergyRealizationBridgeSlide(id?: number | string): MaSynergyRealizationBridgeSlideData`
     - `createZeroDayIncidentContainmentLoopSlide(id?: number | string): ZeroDayIncidentContainmentLoopSlideData`
     - `createCloudMigrationWaveStepperSlide(id?: number | string): CloudMigrationWaveStepperSlideData`
     - `createCustomerLifecycleExpansionFunnelSlide(id?: number | string): CustomerLifecycleExpansionFunnelSlideData`
     - `createDataLineageGovernanceFlowSlide(id?: number | string): DataLineageGovernanceFlowSlideData`
     - `createProductReleaseBurnUpCadenceSlide(id?: number | string): ProductReleaseBurnUpCadenceSlideData`
     - `createGlobalInfrastructureTopologyCockpitSlide(id?: number | string): GlobalInfrastructureTopologyCockpitSlideData`
     - `createSaasUnitEconomicsBreakdownSlide(id?: number | string): SaasUnitEconomicsBreakdownSlideData`
     - `createEsgSustainabilityGovernanceMatrixSlide(id?: number | string): EsgSustainabilityGovernanceMatrixSlideData`
     - `createCapTableOwnershipWaterfallSlide(id?: number | string): CapTableOwnershipWaterfallSlideData`
     - `createAiModelEvaluationBenchmarkRadarSlide(id?: number | string): AiModelEvaluationBenchmarkRadarSlideData`
     - `createEnterpriseSecurityPostureRadarSlide(id?: number | string): EnterpriseSecurityPostureRadarSlideData`
     - `createPartnerEcosystemValueMapSlide(id?: number | string): PartnerEcosystemValueMapSlideData`
2. Update step count engine (`src/utils/stepProgression.ts`):
   - Import `isSuite2033Slide`, `calculateSuite2033StepCount`, `SUITE_2033_STAGE_KEYS`.
   - Register `SUITE_2033_STEP_CALCULATORS` and `getSuite2033SlideSteps(slide)`.
   - Hook into `getSlideMaxSteps(slide)` prioritizing `suite2033` first.
   - Implement `getSlideStageKey(slide)` with Suite 2033 stage key support.

---

## 4. Acceptance Criteria
- [x] 15 factory functions export typed data objects satisfying TypeScript interfaces.
- [x] Step engine returns exactly 4 for kinetic slides and 1 for flat sovereign slides.
- [x] No negative booleans present in factory defaults.
