// lint-allow: file-size reason="Suite 2028 slide archetype contracts and type definitions" max=750
import type { BaseSlide } from './presentation';

// =============================================================================
// Discriminated Union Types for Suite 2028 (Chapter 46)
// =============================================================================

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

// =============================================================================
// 1. Kinetic 4-Step: synthetic-data-curation-pipeline
// =============================================================================

export interface SyntheticBatchNode {
  id: string;
  datasetName: string;
  sourceDomain: string;
  syntheticSamplesCount: number;
  qualityScorePercentage: number;
  hallucinationRatePpm: number;
  isPrivacySanitized: boolean;
  hasHardwareAccelerationActive: boolean;
}

export interface SyntheticPipelineStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  throughputSamplesPerHour: number;
  rejectionRatePercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface SyntheticDataCurationPipelineSlideData extends BaseSlide {
  type: 'synthetic-data-curation-pipeline';
  pipelineIdentifier: string;
  goldTokensGeneratedMillions: number;
  factualConsistencyIndex: number;
  leadArchitect: string;
  leadRole: string;
  pipelineStages: SyntheticPipelineStage[];
  batchNodes: SyntheticBatchNode[];
  hasEvolutionaryPrompting: boolean;
  hasRewardModelFiltering: boolean;
  hasDifferentialPrivacyActive: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 2. Kinetic 4-Step: cloud-native-wasm-microservice-mesh
// =============================================================================

export interface WasmModuleNode {
  id: string;
  moduleName: string;
  sourceLanguage: 'Rust' | 'Go' | 'C++' | 'Zig';
  binarySizeKb: number;
  coldStartLatencyMicros: number;
  memoryFootprintMb: number;
  isWasiCompliant: boolean;
  hasSandboxIsolated: boolean;
}

export interface WasmMeshStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  activeInstancesCount: number;
  requestThroughputRps: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface CloudNativeWasmMicroserviceMeshSlideData extends BaseSlide {
  type: 'cloud-native-wasm-microservice-mesh';
  clusterRegion: string;
  medianColdStartMs: number;
  p99InvocationLatencyMs: number;
  leadArchitect: string;
  leadRole: string;
  meshStages: WasmMeshStage[];
  modules: WasmModuleNode[];
  hasCapabilitySandboxing: boolean;
  hasEbpfTelemetryActive: boolean;
  hasMutualTlsEnforced: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 3. Kinetic 4-Step: sovereign-ai-datacenter-power-grid
// =============================================================================

export interface PowerSubsystemNode {
  id: string;
  sourceType: 'Nuclear SMR' | 'Hydroelectric' | 'Solar PV Farm' | 'BESS Battery';
  capacityMegawatts: number;
  carbonIntensityGramsPerKwh: number;
  operationalAvailabilityPercentage: number;
  isRenewableCertified: boolean;
  hasDynamicThrottlingActive: boolean;
}

export interface GridOptimizationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  allocatedMegawatts: number;
  powerUsageEffectivenessPue: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface SovereignAiDatacenterPowerGridSlideData extends BaseSlide {
  type: 'sovereign-ai-datacenter-power-grid';
  facilityIdentifier: string;
  totalGridCapacityMw: number;
  targetPueRatio: number;
  leadArchitect: string;
  leadRole: string;
  gridStages: GridOptimizationStage[];
  powerNodes: PowerSubsystemNode[];
  hasLiquidImmersionCooling: boolean;
  hasCarbonAwareScheduling: boolean;
  hasMicrogridBatteryBackup: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 4. Kinetic 4-Step: autonomous-code-security-patching-loop
// =============================================================================

export interface SecurityVulnerabilityNode {
  id: string;
  cveIdentifier: string;
  targetPackage: string;
  cvssSeverityScore: number;
  patchSynthesizedDurationSeconds: number;
  regressionProofConfidencePercentage: number;
  isRemediationVerified: boolean;
  hasAutomatedCanaryPassed: boolean;
}

export interface SecurityPatchingStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  meanTimeToRemediateMinutes: number;
  activePatchesInFlight: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface AutonomousCodeSecurityPatchingLoopSlideData extends BaseSlide {
  type: 'autonomous-code-security-patching-loop';
  repositoryFleet: string;
  meanTimeToRemediateMinutes: number;
  zeroDayContainmentRatePercentage: number;
  leadArchitect: string;
  leadRole: string;
  patchingStages: SecurityPatchingStage[];
  vulnerabilities: SecurityVulnerabilityNode[];
  hasSymbolicProofEngine: boolean;
  hasHermeticSandboxing: boolean;
  hasAutomatedCanaryRollout: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 5. Kinetic 4-Step: cross-cloud-mesh-latency-routing
// =============================================================================

export interface CloudTransitHopNode {
  id: string;
  sourceCloud: string;
  destinationCloud: string;
  nominalLatencyMs: number;
  optimizedLatencyMs: number;
  packetLossPercentage: number;
  tunnelEncryptionAlgorithm: string;
  isHardwareAccelerated: boolean;
  hasSlaCompliant: boolean;
}

export interface RoutingOptimizationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  globalP99LatencyMs: number;
  bandwidthThroughputTbps: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface CrossCloudMeshLatencyRoutingSlideData extends BaseSlide {
  type: 'cross-cloud-mesh-latency-routing';
  meshIdentifier: string;
  globalAverageLatencyReductionPercent: number;
  activeUnderseaTunnelsCount: number;
  leadArchitect: string;
  leadRole: string;
  routingStages: RoutingOptimizationStage[];
  transitHops: CloudTransitHopNode[];
  hasAnycastBgpRouting: boolean;
  hasWireGuardAcceleration: boolean;
  hasSubSeaPathOptimization: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 6. Kinetic 4-Step: enterprise-genai-app-observability
// =============================================================================

export interface GenAiTraceSpanNode {
  id: string;
  spanName: string;
  spanCategory: 'Guardrail' | 'Retrieval' | 'Inference' | 'Evaluation';
  durationMilliseconds: number;
  tokenCount: number;
  costUsd: number;
  isWithinSlaBudget: boolean;
  hasAnomalousDriftDetected: boolean;
}

export interface ObservabilityPipelineStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  meanDurationMs: number;
  hallucinationIndexScore: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface EnterpriseGenaiAppObservabilitySlideData extends BaseSlide {
  type: 'enterprise-genai-app-observability';
  applicationName: string;
  timeToFirstTokenP95Ms: number;
  blendedSuccessRatePercentage: number;
  leadArchitect: string;
  leadRole: string;
  observabilityStages: ObservabilityPipelineStage[];
  traceSpans: GenAiTraceSpanNode[];
  hasPromptShieldActive: boolean;
  hasVectorDriftTracked: boolean;
  hasSemanticEvaluatorEngaged: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 7. Kinetic 4-Step: zero-downtime-schema-evolution-stepper
// =============================================================================

export interface SchemaEvolutionStepNode {
  id: string;
  tableName: string;
  currentSchemaVersion: string;
  targetSchemaVersion: string;
  rowsMigratedCount: number;
  replicationLagMilliseconds: number;
  isBackwardCompatible: boolean;
  hasChecksumVerified: boolean;
}

export interface SchemaEvolutionStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  percentBackfillComplete: number;
  lockHoldTimeMicros: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ZeroDowntimeSchemaEvolutionStepperSlideData extends BaseSlide {
  type: 'zero-downtime-schema-evolution-stepper';
  databaseCluster: string;
  totalRowsMigratedBillions: number;
  zeroDowntimeVerified: boolean;
  isZeroDowntimeVerified?: boolean;
  leadArchitect: string;
  leadRole: string;
  evolutionStages: SchemaEvolutionStage[];
  tableNodes: SchemaEvolutionStepNode[];
  hasExpandContractPattern: boolean;
  hasCdcBackfillActive: boolean;
  hasShadowReadValidation: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 8. Kinetic 4-Step: enterprise-software-supply-chain-chokepoint
// =============================================================================

export interface SupplyChainArtifactNode {
  id: string;
  artifactName: string;
  slsaComplianceLevel: 'SLSA-1' | 'SLSA-2' | 'SLSA-3' | 'SLSA-4';
  digestSha256: string;
  vulnerabilitiesDetectedCount: number;
  isCosignSigned: boolean;
  hasProvenanceAttestation: boolean;
}

export interface SupplyChainSecurityStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  enforcedPolicyCount: number;
  gatedArtifactsCount: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface EnterpriseSoftwareSupplyChainChokepointSlideData extends BaseSlide {
  type: 'enterprise-software-supply-chain-chokepoint';
  supplyChainPipeline: string;
  artifactsSecuredCount: number;
  slsaLevelAchieved: string;
  leadArchitect: string;
  leadRole: string;
  supplyChainStages: SupplyChainSecurityStage[];
  artifacts: SupplyChainArtifactNode[];
  hasHermeticBuildEnvironment: boolean;
  hasCryptographicAttestation: boolean;
  hasAdmissionWebhookEnforced: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 9. Kinetic 4-Step: ai-agent-multi-turn-orchestration-dag
// =============================================================================

export interface AutonomousAgentTaskNode {
  id: string;
  agentRole: string;
  assignedSubGoal: string;
  toolInvocationsCount: number;
  reasoningStepCount: number;
  confidenceScorePercentage: number;
  isTaskCompleted: boolean;
  hasConsensusApproved: boolean;
}

export interface AgentOrchestrationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  parallelAgentsActiveCount: number;
  consensusConvergenceScore: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface AiAgentMultiTurnOrchestrationDagSlideData extends BaseSlide {
  type: 'ai-agent-multi-turn-orchestration-dag';
  orchestrationProtocol: string;
  totalGoalResolutionTimeSeconds: number;
  accuracyRatePercentage: number;
  leadArchitect: string;
  leadRole: string;
  orchestrationStages: AgentOrchestrationStage[];
  agentTasks: AutonomousAgentTaskNode[];
  hasDynamicDagReplanning: boolean;
  hasCrossAgentConsensus: boolean;
  hasGroundedEvidenceVerification: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 10. Flat Sovereign: enterprise-data-clean-room-audit
// =============================================================================

export interface DataCleanRoomParticipantNode {
  id: string;
  organizationName: string;
  contributionRecordCount: number;
  privacyBudgetEpsilonConsumed: number;
  enclaveAttestationStatus: 'Hardware Attested' | 'Pending Refresh';
  isDifferentialPrivacyEnforced: boolean;
  hasCryptographicAuditPassed: boolean;
}

export interface EnterpriseDataCleanRoomAuditSlideData extends BaseSlide {
  type: 'enterprise-data-clean-room-audit';
  cleanRoomIdentifier: string;
  totalRecordsAnalyzedMillions: number;
  cumulativePrivacyBudgetEpsilon: number;
  leadArchitect: string;
  leadRole: string;
  participants: DataCleanRoomParticipantNode[];
  isConfidentialEnclaveActive: boolean;
  hasZeroLeakProofVerified: boolean;
  hasRegulatoryComplianceApproved: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 11. Flat Sovereign: hyperscale-k8s-cost-allocator-matrix
// =============================================================================

export interface K8sNamespaceCostRow {
  id: string;
  namespaceName: string;
  businessUnit: string;
  monthlyCostUsd: number;
  cpuCoresAllocated: number;
  ramGigabytesAllocated: number;
  idleWastePercentage: number;
  spotInstancePercentage: number;
  isFinOpsOptimized: boolean;
  hasChargebackApproved: boolean;
}

export interface HyperscaleK8sCostAllocatorMatrixSlideData extends BaseSlide {
  type: 'hyperscale-k8s-cost-allocator-matrix';
  reportingMonth: string;
  totalClusterSpendMonthlyUsd: number;
  overallIdleWastePercentage: number;
  leadArchitect: string;
  leadRole: string;
  costRows: K8sNamespaceCostRow[];
  hasAutomatedRightSizing: boolean;
  hasSpotFleetIntegration: boolean;
  hasDirectChargebackActive: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 12. Flat Sovereign: cyber-resilience-ransomware-readiness-radar
// =============================================================================

export interface ResiliencePillarNode {
  id: string;
  pillarName: string;
  targetScore: number;
  actualScore: number;
  recoveryTimeObjectiveHours: number;
  isPillarCertified: boolean;
  hasAutomatedAuditPassed: boolean;
}

export interface CyberResilienceRansomwareReadinessRadarSlideData extends BaseSlide {
  type: 'cyber-resilience-ransomware-readiness-radar';
  assessmentQuarter: string;
  blendedResilienceIndex: number;
  meanTimeToRecoverHours: number;
  leadArchitect: string;
  leadRole: string;
  pillars: ResiliencePillarNode[];
  hasAirGappedBackupsActive: boolean;
  hasImmutableSnapshotsVerified: boolean;
  hasSimulatedAttackExercised: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 13. Flat Sovereign: saas-expansion-retention-waterfall-gauge
// =============================================================================

export interface ArrWaterfallBucketNode {
  id: string;
  bucketType: 'Beginning ARR' | 'Expansion' | 'Cross-Sell' | 'Contraction' | 'Churn' | 'Ending ARR';
  amountMillionsUsd: number;
  deltaPercentage: number;
  isPositiveContribution: boolean;
  hasMetTargetPacing: boolean;
}

export interface SaasExpansionRetentionWaterfallGaugeSlideData extends BaseSlide {
  type: 'saas-expansion-retention-waterfall-gauge';
  fiscalPeriod: string;
  netRevenueRetentionPercentage: number;
  grossRevenueRetentionPercentage: number;
  leadArchitect: string;
  leadRole: string;
  buckets: ArrWaterfallBucketNode[];
  hasHighExpansionMomentum: boolean;
  hasLowChurnRisk: boolean;
  hasAuditedFinancialMetrics: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 14. Flat Sovereign: developer-experience-friction-index-heatmap
// =============================================================================

export interface DevExFrictionCellNode {
  id: string;
  lifecycleStage: 'Onboarding' | 'Local Dev' | 'CI/CD Pipeline' | 'Code Review' | 'Production Deploy';
  engineeringOrg: string;
  frictionSeverityScore: number;
  weeklyHoursLostPerEngineer: number;
  p95WaitDurationMinutes: number;
  isFrictionRemediated: boolean;
  hasAutomationInvestmentApproved: boolean;
}

export interface DeveloperExperienceFrictionIndexHeatmapSlideData extends BaseSlide {
  type: 'developer-experience-friction-index-heatmap';
  organizationName: string;
  blendedFrictionIndex: number;
  developerNetPromoterScore: number;
  leadArchitect: string;
  leadRole: string;
  frictionCells: DevExFrictionCellNode[];
  hasContinuousMeasurementActive: boolean;
  hasP95CiBuildUnderFiveMinutes: boolean;
  hasHermeticLocalSetup: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 15. Flat Sovereign: geopolitical-sovereign-cloud-compliance-compass
// =============================================================================

export interface SovereignJurisdictionNode {
  id: string;
  jurisdictionRegion: string;
  regulatoryFramework: string;
  dataResidencyCompliancePercentage: number;
  keyManagementModel: 'Customer Held Keys (HYOK)' | 'HSM Bring Your Own Key';
  auditReadinessStatus: 'Audit Certified' | 'Continuous Conformance';
  isDataSovereigntyEnforced: boolean;
  hasCustomerKeyControl: boolean;
}

export interface GeopoliticalSovereignCloudComplianceCompassSlideData extends BaseSlide {
  type: 'geopolitical-sovereign-cloud-compliance-compass';
  governanceYear: string;
  blendedSovereigntyComplianceScore: number;
  jurisdictionsCoveredCount: number;
  leadArchitect: string;
  leadRole: string;
  jurisdictions: SovereignJurisdictionNode[];
  hasAirGappedControlPlane: boolean;
  hasZeroForeignJurisdictionAccess: boolean;
  hasContinuousAuditAutomation: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// Aggregated Unions & Type Guards
// =============================================================================

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

export const SUITE_2028_STAGE_KEYS: Record<string, string> = {
  'synthetic-data-curation-pipeline': 'pipelineStages',
  'cloud-native-wasm-microservice-mesh': 'meshStages',
  'sovereign-ai-datacenter-power-grid': 'gridStages',
  'autonomous-code-security-patching-loop': 'patchingStages',
  'cross-cloud-mesh-latency-routing': 'routingStages',
  'enterprise-genai-app-observability': 'observabilityStages',
  'zero-downtime-schema-evolution-stepper': 'evolutionStages',
  'enterprise-software-supply-chain-chokepoint': 'supplyChainStages',
  'ai-agent-multi-turn-orchestration-dag': 'orchestrationStages',
};

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

export function calculateSuite2028StepCount(slide: Suite2028SlideData | any): number {
  if (!slide || typeof slide !== 'object') return 1;
  const stageKey = SUITE_2028_STAGE_KEYS[slide.type];
  if (!stageKey) return 1;
  const stages = slide[stageKey];
  return Math.max(Array.isArray(stages) ? stages.length : 4, 1);
}

export function calculateGlobalPptSuite2028StepCount(slide: GlobalPptSuite2028SlideData): number {
  return calculateSuite2028StepCount(slide);
}

export function getSuite2028SlideSteps(slide: any): number {
  if (!slide || typeof slide !== 'object') return 0;
  if (!isSuite2028Slide(slide)) return 0;
  return calculateSuite2028StepCount(slide);
}
