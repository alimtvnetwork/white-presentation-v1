# Subtask 03: Data Factories, Step Count Resolver & Type Registry

> **Task ID:** `Task-03`  
> **Parent:** `51-suite2033-global-ppt-flat-step-and-15-slide-expansion`  
> **Wave:** `Wave 1 (Contracts, Styles, Engine)`  
> **Status:** `PENDING`  
> **Target Files:** `src/stores/deckSegments/suite2033Factories.ts`, `src/components/presentation/suiteStepEngine.ts`  
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
1. Create `src/stores/deckSegments/suite2033Factories.ts`:
   - Implement factory functions for all 15 archetypes:
     - `createStrategicInitiativeCascadeSlide(id?: string): StrategicInitiativeCascadeSlideData`
     - `createAiAgentOrchestrationPipelineSlide(id?: string): AiAgentOrchestrationPipelineSlideData`
     - `createMaSynergyRealizationBridgeSlide(id?: string): MaSynergyRealizationBridgeSlideData`
     - `createZeroDayIncidentContainmentLoopSlide(id?: string): ZeroDayIncidentContainmentLoopSlideData`
     - `createCloudMigrationWaveStepperSlide(id?: string): CloudMigrationWaveStepperSlideData`
     - `createCustomerLifecycleExpansionFunnelSlide(id?: string): CustomerLifecycleExpansionFunnelSlideData`
     - `createDataLineageGovernanceFlowSlide(id?: string): DataLineageGovernanceFlowSlideData`
     - `createProductReleaseBurnUpCadenceSlide(id?: string): ProductReleaseBurnUpCadenceSlideData`
     - `createGlobalInfrastructureTopologyCockpitSlide(id?: string): GlobalInfrastructureTopologyCockpitSlideData`
     - `createSaasUnitEconomicsBreakdownSlide(id?: string): SaasUnitEconomicsBreakdownSlideData`
     - `createEsgSustainabilityGovernanceMatrixSlide(id?: string): EsgSustainabilityGovernanceMatrixSlideData`
     - `createCapTableOwnershipWaterfallSlide(id?: string): CapTableOwnershipWaterfallSlideData`
     - `createAiModelEvaluationBenchmarkRadarSlide(id?: string): AiModelEvaluationBenchmarkRadarSlideData`
     - `createEnterpriseSecurityPostureRadarSlide(id?: string): EnterpriseSecurityPostureRadarSlideData`
     - `createPartnerEcosystemValueMapSlide(id?: string): PartnerEcosystemValueMapSlideData`
2. Update step count engine (`src/components/presentation/suiteStepEngine.ts` or corresponding step resolver):
   - Import `SUITE_2033_STEP_SLIDE_TYPES` and `SUITE_2033_FLAT_SLIDE_TYPES`.
   - Register `getSuite2033SlideSteps(slide)` into the presentation navigation engine.
   - Verify that clicking next step steps through all 4 stages before advancing slides.

---

## 4. Acceptance Criteria
- [ ] 15 factory functions export typed data objects satisfying TypeScript interfaces.
- [ ] Step engine returns exactly 4 for kinetic slides and 1 for flat sovereign slides.
- [ ] No negative booleans present in factory defaults.
