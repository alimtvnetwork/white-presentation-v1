# Subtask Plan 02: Type Contracts, Discriminated Unions & Dynamic Step Progression Engine for Suite 2028

> **Subtask Identifier:** `.ai-memory/plans/subtasks/46-global-ppt-suite2028-slide-expansion/02-type-contracts-and-step-engine.md`  
> **Parent Plan:** `46-global-ppt-suite2028-slide-expansion` (Unified Execution Plan)  
> **Assigned Owner:** Worker 02 (Contracts, Types & Step Engine Lead)  
> **Status:** `READY_FOR_EXECUTION`  
> **Target Release:** `v1.3.0`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-04  
> **Domain:** Canonical TypeScript Type Definitions, Discriminated Unions, Step Engine Integration, Affirmative Positive Booleans, and Central Presentation Union Aggregation for Suite 2028

---

## 1. Executive Objective & Strategic Scope

This subtask governs the complete implementation and integration of TypeScript data contracts, discriminated unions, type guards, and step calculation routing for **Suite 2028 (Chapter 46)** across the White Presentation codebase:

1. **New Type Definition Module (`src/types/suite2028Archetypes.ts`):**
   - Author canonical interfaces for all 15 slide archetypes (9 Kinetic Multi-Step Workflows + 6 Flat Sovereign Overviews) adhering strictly to `02-spec/21-app/46-global-ppt-suite2028-slide-expansion/02-component-spec.md`.
   - Implement discriminated union arrays (`SUITE_2028_STEP_SLIDE_TYPES`, `SUITE_2028_FLAT_SLIDE_TYPES`, `SUITE_2028_SLIDE_TYPES`).
   - Guarantee 100% affirmative positive booleans (`is*`, `has*`, `can*`, `should*`) with zero negated properties (`disabled`, `hidden`, `isNotActive`, etc.).
   - Standardize executive persona: `leadArchitect: "Alim Ul Karim"` and `leadRole: "Chief Software Engineer"` (Rule R11 / CODE-RED-011).
   - Author runtime type guards (`isSuite2028Slide`, `isSuite2028StepSlide`, `isSuite2028FlatSlide`) and deterministic step calculation (`calculateSuite2028StepCount`).

2. **Presentation Registry Union Update (`src/types/presentation.ts`):**
   - Import and re-export `Suite2028SlideType` and `Suite2028SlideData`.
   - Incorporate `Suite2028SlideType` into the global `SlideType` discriminated union.
   - Incorporate `Suite2028SlideData` into the global `SlideData` union.

3. **Step Progression Cascading Priority Engine Update (`src/utils/stepProgression.ts`):**
   - Import `isSuite2028Slide` and step calculation utilities from `../types/suite2028Archetypes`.
   - Define `SUITE_2028_STEP_CALCULATORS` mapping all 15 slide types (returning dynamic stage length or 4 for kinetic slides, exactly 1 for flat slides).
   - Implement `getSuite2028SlideSteps(slide: any): number`.
   - Insert `getSuite2028SlideSteps` at the absolute top of `getSlideMaxSteps(slide)` preceding Suite 2027 to ensure Suite 2028 precedence.
   - Re-export `getSuite2028SlideSteps` for external consumers.

---

## 2. Target File Ledger & Deliverables

| Target File | Operation | Scope & Responsibility |
|:---|:---:|:---|
| `src/types/suite2028Archetypes.ts` | **Create** | 15 slide interfaces, child node types, discriminated unions, type guards, step calculator. |
| `src/types/presentation.ts` | **Modify** | Re-exports, `SlideType` union aggregation, `SlideData` union aggregation. |
| `src/utils/stepProgression.ts` | **Modify** | `SUITE_2028_STEP_CALCULATORS`, `getSuite2028SlideSteps`, top priority wiring in `getSlideMaxSteps`. |

---

## 3. Work Item 1: Creating `src/types/suite2028Archetypes.ts`

### 3.1 File Header & Lint Directives
```typescript
// lint-allow: file-size reason="Suite 2028 slide archetype contracts and type definitions" max=750
import type { BaseSlide } from './presentation';
```

### 3.2 Discriminated Unions & Constants
```typescript
export const SUITE_2028_STEP_SLIDE_TYPES = [
  'synthetic-data-curation-pipeline',
  'cloud-native-wasm-microservice-mesh',
  'sovereign-ai-datacenter-power-grid',
  'autonomous-code-security-patching-loop',
  'cross-cloud-mesh-latency-routing',
  'enterprise-genai-app-observability',
  'zero-downtime-schema-evolution-stepper',
  'enterprise-software-supply-chain-chokepoint',
  'ai-agent-multi-turn-orchestration-dag',
] as const;

export const SUITE_2028_FLAT_SLIDE_TYPES = [
  'enterprise-data-clean-room-audit',
  'hyperscale-k8s-cost-allocator-matrix',
  'cyber-resilience-ransomware-readiness-radar',
  'saas-expansion-retention-waterfall-gauge',
  'developer-experience-friction-index-heatmap',
  'geopolitical-sovereign-cloud-compliance-compass',
] as const;

export const SUITE_2028_SLIDE_TYPES = [
  ...SUITE_2028_STEP_SLIDE_TYPES,
  ...SUITE_2028_FLAT_SLIDE_TYPES,
] as const;

export type Suite2028StepSlideType = (typeof SUITE_2028_STEP_SLIDE_TYPES)[number];
export type Suite2028FlatSlideType = (typeof SUITE_2028_FLAT_SLIDE_TYPES)[number];
export type Suite2028SlideType = (typeof SUITE_2028_SLIDE_TYPES)[number];

// Specification Aliases
export type GlobalPptSuite2028SlideType = Suite2028SlideType;
```

### 3.3 Interface Definitions (All 15 Archetypes)

#### Kinetic 4-Step Archetypes (1 to 9):
1. **`SyntheticDataCurationPipelineSlideData`** (`synthetic-data-curation-pipeline`)
   - `SyntheticBatchNode`: `id`, `datasetName`, `sourceDomain`, `syntheticSamplesCount`, `qualityScorePercentage`, `hallucinationRatePpm`, `isPrivacySanitized`, `hasHardwareAccelerationActive`.
   - `SyntheticPipelineStage`: `stepIndex`, `stageName`, `stageSubtitle`, `throughputSamplesPerHour`, `rejectionRatePercentage`, `isActive`, `isCompleted`.
   - Slide fields: `pipelineIdentifier`, `goldTokensGeneratedMillions`, `factualConsistencyIndex`, `leadArchitect`, `leadRole`, `pipelineStages`, `batchNodes`, `hasEvolutionaryPrompting`, `hasRewardModelFiltering`, `hasDifferentialPrivacyActive`, `hasTelemetryGlow`.

2. **`CloudNativeWasmMicroserviceMeshSlideData`** (`cloud-native-wasm-microservice-mesh`)
   - `WasmModuleNode`: `id`, `moduleName`, `sourceLanguage`, `binarySizeKb`, `coldStartLatencyMicros`, `memoryFootprintMb`, `isWasiCompliant`, `hasSandboxIsolated`.
   - `WasmMeshStage`: `stepIndex`, `stageName`, `stageSubtitle`, `activeInstancesCount`, `requestThroughputRps`, `isActive`, `isCompleted`.
   - Slide fields: `clusterRegion`, `medianColdStartMs`, `p99InvocationLatencyMs`, `leadArchitect`, `leadRole`, `meshStages`, `modules`, `hasCapabilitySandboxing`, `hasEbpfTelemetryActive`, `hasMutualTlsEnforced`, `hasTelemetryGlow`.

3. **`SovereignAiDatacenterPowerGridSlideData`** (`sovereign-ai-datacenter-power-grid`)
   - `PowerSubsystemNode`: `id`, `sourceType`, `capacityMegawatts`, `carbonIntensityGramsPerKwh`, `operationalAvailabilityPercentage`, `isRenewableCertified`, `hasDynamicThrottlingActive`.
   - `GridOptimizationStage`: `stepIndex`, `stageName`, `stageSubtitle`, `allocatedMegawatts`, `powerUsageEffectivenessPue`, `isActive`, `isCompleted`.
   - Slide fields: `facilityIdentifier`, `totalGridCapacityMw`, `targetPueRatio`, `leadArchitect`, `leadRole`, `gridStages`, `powerNodes`, `hasLiquidImmersionCooling`, `hasCarbonAwareScheduling`, `hasMicrogridBatteryBackup`, `hasTelemetryGlow`.

4. **`AutonomousCodeSecurityPatchingLoopSlideData`** (`autonomous-code-security-patching-loop`)
   - `SecurityVulnerabilityNode`: `id`, `cveIdentifier`, `targetPackage`, `cvssSeverityScore`, `patchSynthesizedDurationSeconds`, `regressionProofConfidencePercentage`, `isRemediationVerified`, `hasAutomatedCanaryPassed`.
   - `SecurityPatchingStage`: `stepIndex`, `stageName`, `stageSubtitle`, `meanTimeToRemediateMinutes`, `activePatchesInFlight`, `isActive`, `isCompleted`.
   - Slide fields: `repositoryFleet`, `meanTimeToRemediateMinutes`, `zeroDayContainmentRatePercentage`, `leadArchitect`, `leadRole`, `patchingStages`, `vulnerabilities`, `hasSymbolicProofEngine`, `hasHermeticSandboxing`, `hasAutomatedCanaryRollout`, `hasTelemetryGlow`.

5. **`CrossCloudMeshLatencyRoutingSlideData`** (`cross-cloud-mesh-latency-routing`)
   - `CloudTransitHopNode`: `id`, `sourceCloud`, `destinationCloud`, `nominalLatencyMs`, `optimizedLatencyMs`, `packetLossPercentage`, `tunnelEncryptionAlgorithm`, `isHardwareAccelerated`, `hasSlaCompliant`.
   - `RoutingOptimizationStage`: `stepIndex`, `stageName`, `stageSubtitle`, `globalP99LatencyMs`, `bandwidthThroughputTbps`, `isActive`, `isCompleted`.
   - Slide fields: `meshIdentifier`, `globalAverageLatencyReductionPercent`, `activeUnderseaTunnelsCount`, `leadArchitect`, `leadRole`, `routingStages`, `transitHops`, `hasAnycastBgpRouting`, `hasWireGuardAcceleration`, `hasSubSeaPathOptimization`, `hasTelemetryGlow`.

6. **`EnterpriseGenaiAppObservabilitySlideData`** (`enterprise-genai-app-observability`)
   - `GenAiTraceSpanNode`: `id`, `spanName`, `spanCategory`, `durationMilliseconds`, `tokenCount`, `costUsd`, `isWithinSlaBudget`, `hasAnomalousDriftDetected`.
   - `ObservabilityPipelineStage`: `stepIndex`, `stageName`, `stageSubtitle`, `meanDurationMs`, `hallucinationIndexScore`, `isActive`, `isCompleted`.
   - Slide fields: `applicationName`, `timeToFirstTokenP95Ms`, `blendedSuccessRatePercentage`, `leadArchitect`, `leadRole`, `observabilityStages`, `traceSpans`, `hasPromptShieldActive`, `hasVectorDriftTracked`, `hasSemanticEvaluatorEngaged`, `hasTelemetryGlow`.

7. **`ZeroDowntimeSchemaEvolutionStepperSlideData`** (`zero-downtime-schema-evolution-stepper`)
   - `SchemaEvolutionStepNode`: `id`, `tableName`, `currentSchemaVersion`, `targetSchemaVersion`, `rowsMigratedCount`, `replicationLagMilliseconds`, `isBackwardCompatible`, `hasChecksumVerified`.
   - `SchemaEvolutionStage`: `stepIndex`, `stageName`, `stageSubtitle`, `percentBackfillComplete`, `lockHoldTimeMicros`, `isActive`, `isCompleted`.
   - Slide fields: `databaseCluster`, `totalRowsMigratedBillions`, `zeroDowntimeVerified`, `leadArchitect`, `leadRole`, `evolutionStages`, `tableNodes`, `hasExpandContractPattern`, `hasCdcBackfillActive`, `hasShadowReadValidation`, `hasTelemetryGlow`.

8. **`EnterpriseSoftwareSupplyChainChokepointSlideData`** (`enterprise-software-supply-chain-chokepoint`)
   - `SupplyChainArtifactNode`: `id`, `artifactName`, `slsaComplianceLevel`, `digestSha256`, `vulnerabilitiesDetectedCount`, `isCosignSigned`, `hasProvenanceAttestation`.
   - `SupplyChainSecurityStage`: `stepIndex`, `stageName`, `stageSubtitle`, `enforcedPolicyCount`, `gatedArtifactsCount`, `isActive`, `isCompleted`.
   - Slide fields: `supplyChainPipeline`, `artifactsSecuredCount`, `slsaLevelAchieved`, `leadArchitect`, `leadRole`, `supplyChainStages`, `artifacts`, `hasHermeticBuildEnvironment`, `hasCryptographicAttestation`, `hasAdmissionWebhookEnforced`, `hasTelemetryGlow`.

9. **`AiAgentMultiTurnOrchestrationDagSlideData`** (`ai-agent-multi-turn-orchestration-dag`)
   - `AutonomousAgentTaskNode`: `id`, `agentRole`, `assignedSubGoal`, `toolInvocationsCount`, `reasoningStepCount`, `confidenceScorePercentage`, `isTaskCompleted`, `hasConsensusApproved`.
   - `AgentOrchestrationStage`: `stepIndex`, `stageName`, `stageSubtitle`, `parallelAgentsActiveCount`, `consensusConvergenceScore`, `isActive`, `isCompleted`.
   - Slide fields: `orchestrationProtocol`, `totalGoalResolutionTimeSeconds`, `accuracyRatePercentage`, `leadArchitect`, `leadRole`, `orchestrationStages`, `agentTasks`, `hasDynamicDagReplanning`, `hasCrossAgentConsensus`, `hasGroundedEvidenceVerification`, `hasTelemetryGlow`.

#### Flat Sovereign Archetypes (10 to 15):
10. **`EnterpriseDataCleanRoomAuditSlideData`** (`enterprise-data-clean-room-audit`)
    - `DataCleanRoomParticipantNode`: `id`, `organizationName`, `contributionRecordCount`, `privacyBudgetEpsilonConsumed`, `enclaveAttestationStatus`, `isDifferentialPrivacyEnforced`, `hasCryptographicAuditPassed`.
    - Slide fields: `cleanRoomIdentifier`, `totalRecordsAnalyzedMillions`, `cumulativePrivacyBudgetEpsilon`, `leadArchitect`, `leadRole`, `participants`, `isConfidentialEnclaveActive`, `hasZeroLeakProofVerified`, `hasRegulatoryComplianceApproved`, `hasTelemetryGlow`.

11. **`HyperscaleK8sCostAllocatorMatrixSlideData`** (`hyperscale-k8s-cost-allocator-matrix`)
    - `K8sNamespaceCostRow`: `id`, `namespaceName`, `businessUnit`, `monthlyCostUsd`, `cpuCoresAllocated`, `ramGigabytesAllocated`, `idleWastePercentage`, `spotInstancePercentage`, `isFinOpsOptimized`, `hasChargebackApproved`.
    - Slide fields: `reportingMonth`, `totalClusterSpendMonthlyUsd`, `overallIdleWastePercentage`, `leadArchitect`, `leadRole`, `costRows`, `hasAutomatedRightSizing`, `hasSpotFleetIntegration`, `hasDirectChargebackActive`, `hasTelemetryGlow`.

12. **`CyberResilienceRansomwareReadinessRadarSlideData`** (`cyber-resilience-ransomware-readiness-radar`)
    - `ResiliencePillarNode`: `id`, `pillarName`, `targetScore`, `actualScore`, `recoveryTimeObjectiveHours`, `isPillarCertified`, `hasAutomatedAuditPassed`.
    - Slide fields: `assessmentQuarter`, `blendedResilienceIndex`, `meanTimeToRecoverHours`, `leadArchitect`, `leadRole`, `pillars`, `hasAirGappedBackupsActive`, `hasImmutableSnapshotsVerified`, `hasSimulatedAttackExercised`, `hasTelemetryGlow`.

13. **`SaasExpansionRetentionWaterfallGaugeSlideData`** (`saas-expansion-retention-waterfall-gauge`)
    - `ArrWaterfallBucketNode`: `id`, `bucketType`, `amountMillionsUsd`, `deltaPercentage`, `isPositiveContribution`, `hasMetTargetPacing`.
    - Slide fields: `fiscalPeriod`, `netRevenueRetentionPercentage`, `grossRevenueRetentionPercentage`, `leadArchitect`, `leadRole`, `buckets`, `hasHighExpansionMomentum`, `hasLowChurnRisk`, `hasAuditedFinancialMetrics`, `hasTelemetryGlow`.

14. **`DeveloperExperienceFrictionIndexHeatmapSlideData`** (`developer-experience-friction-index-heatmap`)
    - `DevExFrictionCellNode`: `id`, `lifecycleStage`, `engineeringOrg`, `frictionSeverityScore`, `weeklyHoursLostPerEngineer`, `p95WaitDurationMinutes`, `isFrictionRemediated`, `hasAutomationInvestmentApproved`.
    - Slide fields: `organizationName`, `blendedFrictionIndex`, `developerNetPromoterScore`, `leadArchitect`, `leadRole`, `frictionCells`, `hasContinuousMeasurementActive`, `hasP95CiBuildUnderFiveMinutes`, `hasHermeticLocalSetup`, `hasTelemetryGlow`.

15. **`GeopoliticalSovereignCloudComplianceCompassSlideData`** (`geopolitical-sovereign-cloud-compliance-compass`)
    - `SovereignJurisdictionNode`: `id`, `jurisdictionRegion`, `regulatoryFramework`, `dataResidencyCompliancePercentage`, `keyManagementModel`, `auditReadinessStatus`, `isDataSovereigntyEnforced`, `hasCustomerKeyControl`.
    - Slide fields: `governanceYear`, `blendedSovereigntyComplianceScore`, `jurisdictionsCoveredCount`, `leadArchitect`, `leadRole`, `jurisdictions`, `hasAirGappedControlPlane`, `hasZeroForeignJurisdictionAccess`, `hasContinuousAuditAutomation`, `hasTelemetryGlow`.

### 3.4 Aggregated Unions & Type Guards
```typescript
export type Suite2028StepSlideData =
  | SyntheticDataCurationPipelineSlideData
  | CloudNativeWasmMicroserviceMeshSlideData
  | SovereignAiDatacenterPowerGridSlideData
  | AutonomousCodeSecurityPatchingLoopSlideData
  | CrossCloudMeshLatencyRoutingSlideData
  | EnterpriseGenaiAppObservabilitySlideData
  | ZeroDowntimeSchemaEvolutionStepperSlideData
  | EnterpriseSoftwareSupplyChainChokepointSlideData
  | AiAgentMultiTurnOrchestrationDagSlideData;

export type Suite2028FlatSlideData =
  | EnterpriseDataCleanRoomAuditSlideData
  | HyperscaleK8sCostAllocatorMatrixSlideData
  | CyberResilienceRansomwareReadinessRadarSlideData
  | SaasExpansionRetentionWaterfallGaugeSlideData
  | DeveloperExperienceFrictionIndexHeatmapSlideData
  | GeopoliticalSovereignCloudComplianceCompassSlideData;

export type Suite2028SlideData = Suite2028StepSlideData | Suite2028FlatSlideData;
export type GlobalPptSuite2028SlideData = Suite2028SlideData;

export function isSuite2028Slide(slide: unknown): slide is Suite2028SlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2028_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isSuite2028StepSlide(slide: unknown): slide is Suite2028StepSlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2028_STEP_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isSuite2028FlatSlide(slide: unknown): slide is Suite2028FlatSlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2028_FLAT_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isGlobalPptSuite2028Slide(slide: unknown): slide is GlobalPptSuite2028SlideData {
  return isSuite2028Slide(slide);
}

export function calculateSuite2028StepCount(slide: Suite2028SlideData): number {
  switch (slide.type) {
    case 'synthetic-data-curation-pipeline': return Math.max(slide.pipelineStages?.length ?? 4, 1);
    case 'cloud-native-wasm-microservice-mesh': return Math.max(slide.meshStages?.length ?? 4, 1);
    case 'sovereign-ai-datacenter-power-grid': return Math.max(slide.gridStages?.length ?? 4, 1);
    case 'autonomous-code-security-patching-loop': return Math.max(slide.patchingStages?.length ?? 4, 1);
    case 'cross-cloud-mesh-latency-routing': return Math.max(slide.routingStages?.length ?? 4, 1);
    case 'enterprise-genai-app-observability': return Math.max(slide.observabilityStages?.length ?? 4, 1);
    case 'zero-downtime-schema-evolution-stepper': return Math.max(slide.evolutionStages?.length ?? 4, 1);
    case 'enterprise-software-supply-chain-chokepoint': return Math.max(slide.supplyChainStages?.length ?? 4, 1);
    case 'ai-agent-multi-turn-orchestration-dag': return Math.max(slide.orchestrationStages?.length ?? 4, 1);
    case 'enterprise-data-clean-room-audit':
    case 'hyperscale-k8s-cost-allocator-matrix':
    case 'cyber-resilience-ransomware-readiness-radar':
    case 'saas-expansion-retention-waterfall-gauge':
    case 'developer-experience-friction-index-heatmap':
    case 'geopolitical-sovereign-cloud-compliance-compass':
    default:
      return 1;
  }
}

export function getSuite2028SlideSteps(slide: any): number {
  if (!slide || typeof slide !== 'object') return 0;
  if (!isSuite2028Slide(slide)) return 0;
  return calculateSuite2028StepCount(slide);
}
```

---

## 4. Work Item 2: Updating `src/types/presentation.ts`

### 4.1 Import Additions
Add the following imports near `Suite2027`:
```typescript
import type {
  Suite2028SlideType,
  Suite2028SlideData,
} from './suite2028Archetypes';
```

### 4.2 Re-Export Addition
Add to barrel re-exports:
```typescript
export * from './suite2028Archetypes';
```

### 4.3 Union Updates
- Add `| Suite2028SlideType` to `export type SlideType = ...`
- Add `| Suite2028SlideData` to `export type SlideData = ...`

---

## 5. Work Item 3: Updating `src/utils/stepProgression.ts`

### 5.1 Import Additions
Add imports at the top:
```typescript
import {
  isSuite2028Slide,
  getSuite2028SlideSteps,
  calculateSuite2028StepCount,
} from '../types/suite2028Archetypes';
```

### 5.2 Step Calculator Map
Define `SUITE_2028_STEP_CALCULATORS`:
```typescript
export const SUITE_2028_STEP_CALCULATORS: Record<string, StepCalcFn> = {
  // Flat Sovereign Overviews (Exactly 1 Step)
  'enterprise-data-clean-room-audit': () => 1,
  'hyperscale-k8s-cost-allocator-matrix': () => 1,
  'cyber-resilience-ransomware-readiness-radar': () => 1,
  'saas-expansion-retention-waterfall-gauge': () => 1,
  'developer-experience-friction-index-heatmap': () => 1,
  'geopolitical-sovereign-cloud-compliance-compass': () => 1,

  // Kinetic Multi-Step Workflows (Dynamic Stage Count or 4)
  'synthetic-data-curation-pipeline': (s) => Math.max(1, s.pipelineStages?.length || 4),
  'cloud-native-wasm-microservice-mesh': (s) => Math.max(1, s.meshStages?.length || 4),
  'sovereign-ai-datacenter-power-grid': (s) => Math.max(1, s.gridStages?.length || 4),
  'autonomous-code-security-patching-loop': (s) => Math.max(1, s.patchingStages?.length || 4),
  'cross-cloud-mesh-latency-routing': (s) => Math.max(1, s.routingStages?.length || 4),
  'enterprise-genai-app-observability': (s) => Math.max(1, s.observabilityStages?.length || 4),
  'zero-downtime-schema-evolution-stepper': (s) => Math.max(1, s.evolutionStages?.length || 4),
  'enterprise-software-supply-chain-chokepoint': (s) => Math.max(1, s.supplyChainStages?.length || 4),
  'ai-agent-multi-turn-orchestration-dag': (s) => Math.max(1, s.orchestrationStages?.length || 4),
};
```

### 5.3 Implement `getSuite2028SlideSteps`
```typescript
export function getSuite2028SlideSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return 0;
  const calc = SUITE_2028_STEP_CALCULATORS[slide.type];
  if (calc) {
    return calc(slide);
  }
  return 0;
}
```

### 5.4 Priority Insertion in `getSlideMaxSteps`
In `getSlideMaxSteps(slide: SlideData | any)`:
```typescript
  const suite2028Steps = getSuite2028SlideSteps(slide);
  if (suite2028Steps > 0) return suite2028Steps;

  const suite2027Steps = getSuite2027SlideSteps(slide);
  if (suite2027Steps > 0) return suite2027Steps;
```

### 5.5 Re-Exports Update
Add `isSuite2028Slide`, `getSuite2028SlideSteps`, and `calculateSuite2028StepCount` to the export block in `src/utils/stepProgression.ts`.

---

## 6. Verification Checklist & Quality Gates

| Check # | Verification Gate | Verification Command / Proof | Target Standard |
|:---:|:---|:---|:---|
| 01 | TypeScript Type Check | `npx tsc --noEmit` | Clean zero compilation errors |
| 02 | Coding Guideline Autofixer | `python 03-ai-scripts/05-guideline-autofixer.py src --check-only` | Clean zero violation reports |
| 03 | Relative Paths Linter | `python linter-scripts/check-relative-paths.py` | Clean zero absolute paths |
| 04 | Forbidden Strings Linter | `python linter-scripts/check-forbidden-strings.py` | Zero forbidden tokens detected |
| 05 | Affirmative Positive Booleans | Static audit of all `is*`, `has*`, `can*`, `should*` properties | 100% affirmative polarities |
| 06 | Step Progression Evaluation | Unit test / runtime validation | 4 steps for kinetic, 1 for flat |
| 07 | Executive Persona Compliance | Verify `leadArchitect: "Alim Ul Karim"` & `leadRole: "Chief Software Engineer"` | Rule R11 / CODE-RED-011 100% compliant |

---

## 7. Architectural Sign-Off

- **Lead Architect:** Alim Ul Karim, Chief Software Engineer
- **Subtask Status:** Verified and ready for execution by Worker 02
