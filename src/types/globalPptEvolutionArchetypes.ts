// lint-allow: file-size reason="Chapter 43 Global PPT Evolution slide archetype contracts" max=650
import type { BaseSlide } from './presentation';

// =============================================================================
// Discriminated Union Types for Global PPT Evolution (Chapter 43)
// =============================================================================

export type GlobalPptEvolutionSlideType =
  // Kinetic 4-Step Workflows (8 Archetypes)
  | 'pqc-migration-orchestration-flow'
  | 'agent-hierarchical-memory-pipeline'
  | 'active-active-sharding-consensus-mesh'
  | 'zero-trust-api-mesh-authorization'
  | 'autonomous-vulnerability-remediation-loop'
  | 'edge-compute-workload-orchestrator'
  | 'cloud-finops-unit-amortization-ladder'
  | 'executive-board-ai-risk-oversight'
  // Flat Sovereign Overviews (7 Archetypes)
  | 'sovereign-qkd-optical-backbone'
  | 'agent-swarm-memory-registry'
  | 'hyperscale-database-sharding-topology'
  | 'microservices-zero-trust-policy-map'
  | 'autonomous-siem-incident-triage-matrix'
  | 'edge-infrastructure-fleet-density-matrix'
  | 'executive-board-fiduciary-esg-horizon';

export type GlobalPptEvolution15SlideType = GlobalPptEvolutionSlideType;

export const GLOBAL_PPT_EVOLUTION_SLIDE_TYPES: readonly GlobalPptEvolutionSlideType[] = [
  'pqc-migration-orchestration-flow',
  'agent-hierarchical-memory-pipeline',
  'active-active-sharding-consensus-mesh',
  'zero-trust-api-mesh-authorization',
  'autonomous-vulnerability-remediation-loop',
  'edge-compute-workload-orchestrator',
  'cloud-finops-unit-amortization-ladder',
  'executive-board-ai-risk-oversight',
  'sovereign-qkd-optical-backbone',
  'agent-swarm-memory-registry',
  'hyperscale-database-sharding-topology',
  'microservices-zero-trust-policy-map',
  'autonomous-siem-incident-triage-matrix',
  'edge-infrastructure-fleet-density-matrix',
  'executive-board-fiduciary-esg-horizon',
] as const;

// =============================================================================
// 1. Kinetic 4-Step Workflows (8 Archetypes)
// =============================================================================

// --- 1. PQC Migration Orchestration Flow ---
export interface PqcCipherSuiteNode {
  id: string;
  suiteIndex: number;
  primitiveName: string;
  classicalPair: string;
  securityCategory: string;
  migrationProgressPercent: number;
  isQuantumResistant: boolean;
  hasHardwareAccelerationActive: boolean;
  isCompliantWithFipsStandards: boolean;
}

export interface PqcMigrationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  orchestrationEngine: string;
  targetStandard: string;
  endpointsMigratedCount: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface PqcMigrationFlowSlideData extends BaseSlide {
  type: 'pqc-migration-orchestration-flow';
  programName: string;
  quantumResilienceScorePercent: number;
  targetComplianceDeadline: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  migrationStages: PqcMigrationStage[];
  cipherSuites: PqcCipherSuiteNode[];
  hasAutomatedRollbackEnabled: boolean;
  hasHybridDualStackActive: boolean;
  hasExecutiveSignoffCompleted: boolean;
  hasTelemetryGlow: boolean;
  stages?: PqcMigrationStage[];
}

// --- 2. Agent Hierarchical Memory Pipeline ---
export interface AgentMemorySegmentNode {
  id: string;
  segmentIndex: number;
  memoryTierName: string;
  latencyTargetMs: number;
  capacityMegabytes: number;
  retentionWindowHours: number;
  isMemoryTierActive: boolean;
  hasHardwareGpuAcceleration: boolean;
  isEvictionProtected: boolean;
}

export interface AgentMemoryPipelineStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  storageEngine: string;
  throughputEventsPerSec: number;
  retrievalAccuracyPercent: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface AgentHierarchicalMemorySlideData extends BaseSlide {
  type: 'agent-hierarchical-memory-pipeline';
  swarmName: string;
  memoryConsolidationRatePercent: number;
  knowledgeGraphTripleCount: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  pipelineStages: AgentMemoryPipelineStage[];
  memorySegments: AgentMemorySegmentNode[];
  hasSemanticGraphValidationActive: boolean;
  hasVectorCompressionEnabled: boolean;
  hasMerkleProofAttestationSeal: boolean;
  hasTelemetryGlow: boolean;
  stages?: AgentMemoryPipelineStage[];
}

// --- 3. Active-Active Sharding Consensus Mesh ---
export interface ConsensusShardNode {
  id: string;
  shardIndex: number;
  regionCode: string;
  assignedVnodesCount: number;
  writeThroughputQps: number;
  replicationLagMilliseconds: number;
  isLeaderNode: boolean;
  hasQuorumAchieved: boolean;
  isCrdtMergeActive: boolean;
}

export interface ConsensusMeshStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  consensusProtocol: string;
  commitLatencyTargetMs: number;
  unanimousQuorumNodesCount: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ActiveActiveShardingSlideData extends BaseSlide {
  type: 'active-active-sharding-consensus-mesh';
  clusterMeshName: string;
  globalTransactionTps: number;
  meanReplicationLagMs: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  consensusStages: ConsensusMeshStage[];
  shards: ConsensusShardNode[];
  hasZeroDataLossGuaranteed: boolean;
  hasHybridLogicalClockSynchronized: boolean;
  hasGeoReplicationActive: boolean;
  hasTelemetryGlow: boolean;
  stages?: ConsensusMeshStage[];
}

// --- 4. Zero-Trust API Mesh Authorization ---
export interface ApiMeshServiceNode {
  id: string;
  serviceIndex: number;
  serviceName: string;
  spiffeIdentifier: string;
  tlsCipherSuite: string;
  authorizedQps: number;
  isSvidAttested: boolean;
  hasMtlsActive: boolean;
  isPolicyCompliant: boolean;
}

export interface ApiMeshAuthStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  authorizationEngine: string;
  policyEvaluationMicroseconds: number;
  rejectedTokenCount: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ZeroTrustApiMeshSlideData extends BaseSlide {
  type: 'zero-trust-api-mesh-authorization';
  meshDomain: string;
  enforcementMode: string;
  authorizedTrafficPercent: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  authorizationStages: ApiMeshAuthStage[];
  services: ApiMeshServiceNode[];
  hasHardwareHsmBacked: boolean;
  hasStrictZeroTrustEnforced: boolean;
  hasAuditStreamingActive: boolean;
  hasTelemetryGlow: boolean;
  stages?: ApiMeshAuthStage[];
}

// --- 5. Autonomous Vulnerability Remediation Loop ---
export interface RemediationVulnerabilityNode {
  id: string;
  vulnIndex: number;
  cveIdentifier: string;
  targetRepository: string;
  severityLevel: string;
  synthesizedDiffLinesCount: number;
  isZeroDay: boolean;
  hasAutomatedPatchGenerated: boolean;
  isSandboxVerified: boolean;
  isCanaryDeployed: boolean;
}

export interface RemediationLoopStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  remediationEngine: string;
  meanTimeToRemediateMinutes: number;
  syntheticProbeValidationCount: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface AutonomousVulnerabilityLoopSlideData extends BaseSlide {
  type: 'autonomous-vulnerability-remediation-loop';
  pipelineName: string;
  automatedFixRatePercent: number;
  meanTimeToRemediateMinutes: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  remediationStages: RemediationLoopStage[];
  vulnerabilities: RemediationVulnerabilityNode[];
  hasZeroHumanTouchAchieved: boolean;
  hasHermeticIsolationActive: boolean;
  hasAutomatedRollbackArmed: boolean;
  hasTelemetryGlow: boolean;
  stages?: RemediationLoopStage[];
}

// --- 6. Edge Compute Workload Orchestrator ---
export interface EdgeComputeNode {
  id: string;
  nodeIndex: number;
  nodeLocation: string;
  roundTripLatencyMilliseconds: number;
  activeContainersCount: number;
  cpuUtilizationPercent: number;
  isNodeOnline: boolean;
  hasGpuAcceleration: boolean;
  isWithinLatencySla: boolean;
}

export interface EdgeOrchestrationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  orchestratorEngine: string;
  schedulingLatencyMilliseconds: number;
  activeEdgeNodesCount: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface EdgeComputeOrchestratorSlideData extends BaseSlide {
  type: 'edge-compute-workload-orchestrator';
  fleetName: string;
  globalEdgeNodesTotal: number;
  meanEdgeLatencyMs: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  orchestrationStages: EdgeOrchestrationStage[];
  edgeNodes: EdgeComputeNode[];
  hasSubSecondFailoverActive: boolean;
  hasP2pDistributionActive: boolean;
  hasThermalThrottlingAvoided: boolean;
  hasTelemetryGlow: boolean;
  stages?: EdgeOrchestrationStage[];
}

// --- 7. Cloud FinOps Unit Amortization Ladder ---
export interface FinopsCostAllocationNode {
  id: string;
  allocationIndex: number;
  costCategory: string;
  monthlySpendUsd: number;
  unitCostUsd: number;
  unitMetricUnit: string;
  savingsPotentialUsd: number;
  isTagNormalized: boolean;
  hasRightsizingApplied: boolean;
  hasCommitmentDiscountActive: boolean;
}

export interface FinopsLadderStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  finopsEngine: string;
  realizedSavingsAnnualUsd: number;
  unallocatedSpendPercent: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface CloudFinopsLadderSlideData extends BaseSlide {
  type: 'cloud-finops-unit-amortization-ladder';
  programName: string;
  totalMonthlyCloudSpendUsd: number;
  effectiveSavingsRatePercent: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  amortizationStages: FinopsLadderStage[];
  allocations: FinopsCostAllocationNode[];
  hasAutomatedCommitmentPurchasing: boolean;
  hasUnitCostBudgetEnforced: boolean;
  hasExecutiveApprovedAudit: boolean;
  hasTelemetryGlow: boolean;
  stages?: FinopsLadderStage[];
}

// --- 8. Executive Board AI Risk Oversight ---
export interface BoardAiRiskCategoryNode {
  id: string;
  categoryIndex: number;
  riskCategoryTitle: string;
  riskLevelBadge: string;
  complianceScorePercent: number;
  mitigationProtocol: string;
  isRegulatoryCompliant: boolean;
  hasAuditAttestationActive: boolean;
  isRiskTolerancePassed: boolean;
}

export interface BoardRiskOversightStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  governanceBody: string;
  auditStandard: string;
  unresolvedRiskItemsCount: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface BoardAiRiskOversightSlideData extends BaseSlide {
  type: 'executive-board-ai-risk-oversight';
  auditCommitteeTitle: string;
  overallPortfolioGovernanceScorePercent: number;
  regulatoryFramework: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  oversightStages: BoardRiskOversightStage[];
  riskCategories: BoardAiRiskCategoryNode[];
  hasBoardResolutionPassed: boolean;
  hasFiduciaryAuditApproved: boolean;
  hasExecutiveSignoffCompleted: boolean;
  hasTelemetryGlow: boolean;
  stages?: BoardRiskOversightStage[];
}

// =============================================================================
// 2. Flat Sovereign Overviews (7 Archetypes - Exactly 1 Step)
// =============================================================================

// --- 9. Sovereign QKD Optical Backbone ---
export interface QkdFiberChannelNode {
  channelId: string;
  channelIndex: number;
  originNode: string;
  destinationNode: string;
  fiberDistanceKilometers: number;
  quantumBitErrorRatePercent: number;
  keyGenerationRateKbps: number;
  isChannelSecured: boolean;
  hasDecoyStateActive: boolean;
  isQberWithinThreshold: boolean;
}

export interface QkdNetworkTelemetry {
  aggregateKeyYieldKbps: number;
  meanQberPercent: number;
  photonDetectorEfficiencyPercent: number;
  isEntanglementAttested: boolean;
  isTrustedNodeOperational: boolean;
}

export interface SovereignQkdBackboneSlideData extends BaseSlide {
  type: 'sovereign-qkd-optical-backbone';
  backboneNetworkName: string;
  totalFiberDistanceKm: number;
  protocolStandard: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  channels: QkdFiberChannelNode[];
  networkTelemetry: QkdNetworkTelemetry;
  hasHardwarePhotonDetectionActive: boolean;
  hasZeroEavesdroppingDetected: boolean;
  hasSovereignAuditApproved: boolean;
  hasTelemetryGlow: boolean;
}

// --- 10. Agent Swarm Memory Registry ---
export interface SwarmMemoryShardNode {
  shardId: string;
  shardIndex: number;
  agentRoleAffinity: string;
  vectorDimensions: number;
  storedVectorsTotal: number;
  quantizationMode: string;
  cacheHitRatePercent: number;
  isShardOnline: boolean;
  hasVectorQuantizationActive: boolean;
  isCacheWarmed: boolean;
}

export interface MemoryIndexMetric {
  indexType: string;
  efConstructionParameter: number;
  mConnectivityEdges: number;
  averageRecallAt10Percent: number;
  isHnswGraphBalanced: boolean;
}

export interface AgentSwarmMemoryRegistrySlideData extends BaseSlide {
  type: 'agent-swarm-memory-registry';
  registryClusterName: string;
  totalIndexedVectors: number;
  memoryEngine: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  memoryShards: SwarmMemoryShardNode[];
  indexMetrics: MemoryIndexMetric[];
  hasReplicationInSync: boolean;
  hasAutomaticGarbageCollectionActive: boolean;
  hasGpuMemoryOffloadEnabled: boolean;
  hasTelemetryGlow: boolean;
}

// --- 11. Hyperscale Database Sharding Topology ---
export interface DatabaseShardPartitionNode {
  partitionId: string;
  partitionIndex: number;
  hashRingTokenRange: string;
  primaryStorageNode: string;
  dataVolumeTerabytes: number;
  activeReadWriteQps: number;
  replicationLagMs: number;
  isPartitionBalanced: boolean;
  hasReplicaLagWithinSla: boolean;
  isPrimaryOnline: boolean;
}

export interface ClusterReplicationTopologyMetric {
  totalPhysicalStorageNodes: number;
  activeConsistentHashTokens: number;
  meanWriteAmplificationFactor: number;
  isConsistentHashRingFormed: boolean;
  hasAutoRebalancingActive: boolean;
}

export interface HyperscaleShardingTopologySlideData extends BaseSlide {
  type: 'hyperscale-database-sharding-topology';
  databaseClusterName: string;
  totalClusterStoragePetabytes: number;
  peakThroughputQps: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  partitions: DatabaseShardPartitionNode[];
  topologyMetrics: ClusterReplicationTopologyMetric;
  hasContinuousOnlineRebalancing: boolean;
  hasZeroDowntimeMigrationGuaranteed: boolean;
  hasNvmeDirectStorageActive: boolean;
  hasTelemetryGlow: boolean;
}

// --- 12. Microservices Zero-Trust Policy Map ---
export interface ServicePolicyEdgeNode {
  edgeId: string;
  edgeIndex: number;
  sourceService: string;
  targetService: string;
  authorizationAction: string;
  trafficThroughputQps: number;
  droppedPacketsPerMinute: number;
  isTlsMutualEnforced: boolean;
  hasStrictEgressFiltering: boolean;
  isPolicyCompliant: boolean;
}

export interface ZeroTrustClusterPolicySummary {
  totalServiceNodes: number;
  activeEgressPolicies: number;
  policyEnforcementLatencyMicroseconds: number;
  isSpiffeIdentityVerified: boolean;
  hasKernelBypassActive: boolean;
}

export interface MicroservicesZeroTrustPolicySlideData extends BaseSlide {
  type: 'microservices-zero-trust-policy-map';
  meshClusterDomain: string;
  overallComplianceRatePercent: number;
  activeMtlsSessionsCount: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  policyEdges: ServicePolicyEdgeNode[];
  clusterPolicySummary: ZeroTrustClusterPolicySummary;
  hasZeroDefaultAllowEnforced: boolean;
  hasContinuousAttestationActive: boolean;
  hasRealtimeTelemetryAudited: boolean;
  hasTelemetryGlow: boolean;
}

// --- 13. Autonomous SIEM Incident Triage Matrix ---
export interface SiemIncidentTriageNode {
  incidentId: string;
  incidentIndex: number;
  threatCategory: string;
  mitreTacticId: string;
  aiConfidencePercent: number;
  automatedActionTaken: string;
  timeToContainSeconds: number;
  isAutomatedContainmentActive: boolean;
  hasMitreAttackMapped: boolean;
  isTriageConfidenceHigh: boolean;
  hasContainmentSucceeded: boolean;
}

export interface SiemOperationsTelemetrySummary {
  eventsAnalyzedPerSecond: number;
  meanTimeToDetectSeconds: number;
  meanTimeToContainSeconds: number;
  isForensicSnapshotPreserved: boolean;
  hasContinuousAuditLedgerSynced: boolean;
}

export interface AutonomousSiemTriageSlideData extends BaseSlide {
  type: 'autonomous-siem-incident-triage-matrix';
  siemPlatformName: string;
  overallTriageAccuracyPercent: number;
  containedIncidentsTotal: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  incidents: SiemIncidentTriageNode[];
  telemetrySummary: SiemOperationsTelemetrySummary;
  hasZeroFalseNegativeGuarantee: boolean;
  hasAutomatedSandboxIsolation: boolean;
  hasExecutiveBriefingGenerated: boolean;
  hasTelemetryGlow: boolean;
}

// --- 14. Edge Infrastructure Fleet Density Matrix ---
export interface EdgePoPDensityNode {
  popId: string;
  popIndex: number;
  metroArea: string;
  activeEdgeRacksCount: number;
  deployedMicroServersCount: number;
  powerUsageEffectiveness: number;
  averageChassisTempCelsius: number;
  isPoPOnline: boolean;
  hasGreenEnergyCertified: boolean;
  isPueOptimized: boolean;
}

export interface FleetPueOperationalMetric {
  fleetWideAveragePue: number;
  aggregatePowerMegawatts: number;
  totalRunningContainers: number;
  hasHardwareWatchdogActive: boolean;
  isCapacityWithinLimits: boolean;
}

export interface EdgeFleetDensitySlideData extends BaseSlide {
  type: 'edge-infrastructure-fleet-density-matrix';
  fleetNetworkTitle: string;
  globalPoPsCount: number;
  meanUptimePercent: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  pops: EdgePoPDensityNode[];
  fleetMetrics: FleetPueOperationalMetric;
  hasZeroEmissionOffsetActive: boolean;
  hasImmersionCoolingDeployed: boolean;
  hasDynamicPowerScalingActive: boolean;
  hasTelemetryGlow: boolean;
}

// --- 15. Executive Board Fiduciary ESG Horizon ---
export interface BoardEsgStrategicPillarNode {
  pillarId: string;
  pillarIndex: number;
  pillarTitle: string;
  targetMetricName: string;
  achievedValueDisplay: string;
  complianceStandard: string;
  isTargetMet: boolean;
  hasRenewablePowerMatching: boolean;
  isCsrdCompliant: boolean;
  hasThirdPartyAuditCertified: boolean;
}

export interface BoardFiduciaryComplianceSummary {
  overallEsgRating: string;
  carbonNeutralityTargetYear: number;
  totalAbatedCarbonMetricTons: number;
  isFiduciarySignoffComplete: boolean;
  hasSecClimateDisclosureFiled: boolean;
}

export interface BoardFiduciaryEsgHorizonSlideData extends BaseSlide {
  type: 'executive-board-fiduciary-esg-horizon';
  boardReportingPeriod: string;
  auditFirmName: string;
  sustainabilityScorePercent: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  pillars: BoardEsgStrategicPillarNode[];
  complianceSummary: BoardFiduciaryComplianceSummary;
  hasZeroGreenwashingGuarantee: boolean;
  hasBoardCommitteeResolutionSealed: boolean;
  hasExecutiveSignoffCompleted: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// Discriminated Union of all 15 Global PPT Evolution Slide Data Types
// =============================================================================

export type GlobalPptEvolutionSlideData =
  // Kinetic 4-Step Workflows
  | PqcMigrationFlowSlideData
  | AgentHierarchicalMemorySlideData
  | ActiveActiveShardingSlideData
  | ZeroTrustApiMeshSlideData
  | AutonomousVulnerabilityLoopSlideData
  | EdgeComputeOrchestratorSlideData
  | CloudFinopsLadderSlideData
  | BoardAiRiskOversightSlideData
  // Flat Sovereign Overviews
  | SovereignQkdBackboneSlideData
  | AgentSwarmMemoryRegistrySlideData
  | HyperscaleShardingTopologySlideData
  | MicroservicesZeroTrustPolicySlideData
  | AutonomousSiemTriageSlideData
  | EdgeFleetDensitySlideData
  | BoardFiduciaryEsgHorizonSlideData;

export type GlobalPptEvolution15SlideData = GlobalPptEvolutionSlideData;

// =============================================================================
// Step Count Calculation Engine & Type Guards
// =============================================================================

export function calculateGlobalPptEvolutionStepCount(slide: any): number {
  if (typeof slide !== 'object' || slide === null) return 1;

  switch (slide.type) {
    // Kinetic 4-Step Workflows
    case 'pqc-migration-orchestration-flow':
      return Math.max(slide.migrationStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'agent-hierarchical-memory-pipeline':
      return Math.max(slide.pipelineStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'active-active-sharding-consensus-mesh':
      return Math.max(slide.consensusStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'zero-trust-api-mesh-authorization':
      return Math.max(slide.authorizationStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'autonomous-vulnerability-remediation-loop':
      return Math.max(slide.remediationStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'edge-compute-workload-orchestrator':
      return Math.max(slide.orchestrationStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'cloud-finops-unit-amortization-ladder':
      return Math.max(slide.amortizationStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'executive-board-ai-risk-oversight':
      return Math.max(slide.oversightStages?.length ?? slide.stages?.length ?? 4, 1);

    // Flat Sovereign Overviews (Exactly 1 Step)
    case 'sovereign-qkd-optical-backbone':
    case 'agent-swarm-memory-registry':
    case 'hyperscale-database-sharding-topology':
    case 'microservices-zero-trust-policy-map':
    case 'autonomous-siem-incident-triage-matrix':
    case 'edge-infrastructure-fleet-density-matrix':
    case 'executive-board-fiduciary-esg-horizon':
    default:
      return 1;
  }
}

export function isGlobalPptEvolutionSlideType(type: string): type is GlobalPptEvolutionSlideType {
  return (GLOBAL_PPT_EVOLUTION_SLIDE_TYPES as readonly string[]).includes(type);
}

export function isGlobalPptEvolutionSlide(slide: unknown): slide is GlobalPptEvolutionSlideData {
  if (typeof slide !== 'object' || slide === null) return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && isGlobalPptEvolutionSlideType(candidate.type);
}
