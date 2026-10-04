// lint-allow: file-size reason="Type contracts for 15 global PPT mastery slide archetypes" max=500
import type { BaseSlide } from './presentation';

// =============================================================================
// Discriminated Union Types for Global PPT Mastery (Module 41)
// =============================================================================

export type GlobalPptMasterySlideType =
  // Kinetic 4-Step Workflows (8 Archetypes)
  | 'llm-agentic-workflow-dag'
  | 'zero-downtime-blue-green-mesh'
  | 'post-quantum-pqc-kem-handshake'
  | 'developer-platform-backstage-portal'
  | 'soc2-type2-continuous-evidence-stream'
  | 'ai-model-distillation-pipeline'
  | 'executive-compensation-clawback-matrix'
  | 'enterprise-llm-fine-tuning-loss'
  // Flat Sovereign Overviews (7 Archetypes)
  | 'distributed-vector-index-sharding'
  | 'realtime-financial-fraud-graph'
  | 'autonomous-cloud-cost-anomalies'
  | 'lakehouse-iceberg-acid-lineage'
  | 'multi-region-active-active-cockroach'
  | 'supply-chain-carbon-ledger-cbam'
  | 'chaos-mesh-network-partition-drill';

export type GlobalPptMastery15SlideType = GlobalPptMasterySlideType;

// =============================================================================
// 1. LLM Agentic Workflow DAG
// =============================================================================

export interface AgentTaskNode {
  id: string;
  nodeIndex: number;
  agentRole: string;
  statusBadge: string;
  executionLatencyMs: number;
  confidenceScorePercent: number;
  outputPayloadSummary: string;
  isActive: boolean;
  isVerified: boolean;
  hasFallbackTriggered: boolean;
}

export interface AgentWorkflowStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  focusAgent: string;
  verificationGate: string;
  toolIntegrations: string[];
  isActive: boolean;
  isCompleted: boolean;
}

export interface LlmAgenticWorkflowDagSlideData extends BaseSlide {
  type: 'llm-agentic-workflow-dag';
  workflowTitle: string;
  orchestratorFramework: string;
  consensusThresholdPercent: number;
  maxExecutionSteps: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  agentStages: AgentWorkflowStage[];
  taskNodes: AgentTaskNode[];
  hasHumanApprovalGate: boolean;
  hasSandboxIsolationActive: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 2. Zero-Downtime Blue-Green Mesh
// =============================================================================

export interface ServicePodReplica {
  id: string;
  podName: string;
  fleetColor: 'blue' | 'green';
  versionTag: string;
  trafficSharePercent: number;
  cpuUtilizationPercent: number;
  p99LatencyMs: number;
  isHealthy: boolean;
  isDraining: boolean;
}

export interface DeploymentStage {
  stepIndex: number;
  stageName: string;
  trafficAllocationPercent: number;
  errorBudgetBurnRate: number;
  rollbackSloThresholdMs: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ZeroDowntimeBlueGreenMeshSlideData extends BaseSlide {
  type: 'zero-downtime-blue-green-mesh';
  serviceName: string;
  meshIngressController: string;
  clusterRegion: string;
  totalActiveConnections: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  deploymentStages: DeploymentStage[];
  podReplicas: ServicePodReplica[];
  hasAutomaticRollbackEnabled: boolean;
  hasMutualTlsActive: boolean;
  hasZeroDowntimeCertified: boolean;
}

// =============================================================================
// 3. Post-Quantum PQC-KEM Handshake
// =============================================================================

export interface CryptoPrimitiveSpec {
  algorithmName: string;
  nistSecurityCategory: number;
  keySizeBits: number;
  ciphertextSizeBytes: number;
  isNistStandardized: boolean;
}

export interface PqcKemStage {
  stepIndex: number;
  stageName: string;
  protocolDirection: string;
  payloadSizeFormatted: string;
  executionDurationMicroseconds: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface PostQuantumPqcKemHandshakeSlideData extends BaseSlide {
  type: 'post-quantum-pqc-kem-handshake';
  handshakeStandard: string;
  classicalAlgorithm: string;
  quantumSafeAlgorithm: string;
  handshakeLatencyFormatted: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  handshakeStages: PqcKemStage[];
  cryptoPrimitives: CryptoPrimitiveSpec[];
  hasHybridModeActive: boolean;
  hasSideChannelProtection: boolean;
  hasHardwareAccelerationActive: boolean;
}

// =============================================================================
// 4. Developer Platform Backstage Portal
// =============================================================================

export interface GoldenPathTemplate {
  templateId: string;
  templateName: string;
  stackRuntime: string;
  provisioningDurationSeconds: number;
  isCompliantWithSecurityBaseline: boolean;
}

export interface ServiceScorecardItem {
  metricName: string;
  currentScoreFormatted: string;
  targetThresholdFormatted: string;
  isPassed: boolean;
}

export interface BackstagePortalStage {
  stepIndex: number;
  stageName: string;
  actionSummary: string;
  automationEngine: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface DeveloperPlatformBackstagePortalSlideData extends BaseSlide {
  type: 'developer-platform-backstage-portal';
  portalName: string;
  timeToFirstCommitMinutes: number;
  catalogServiceCount: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  portalStages: BackstagePortalStage[];
  goldenPathTemplates: GoldenPathTemplate[];
  scorecardMetrics: ServiceScorecardItem[];
  hasGoldenPathEnforced: boolean;
  hasCatalogSyncActive: boolean;
  hasSecurityScorecardPassing: boolean;
}

// =============================================================================
// 5. SOC 2 Type II Continuous Evidence Stream
// =============================================================================

export interface TrustCriteriaRule {
  ruleCode: string;
  description: string;
  sourceSystem: string;
  samplingIntervalMinutes: number;
  isCompliant: boolean;
}

export interface MerkleEvidenceBlock {
  blockHeight: number;
  blockHash: string;
  evidenceItemCount: number;
  rootMerkleTreeHash: string;
  timestampUtc: string;
  isAnchored: boolean;
}

export interface Soc2EvidenceStage {
  stepIndex: number;
  stageName: string;
  controlDomain: string;
  evidenceThroughputFormatted: string;
  verificationLatencyFormatted: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface Soc2Type2ContinuousEvidenceStreamSlideData extends BaseSlide {
  type: 'soc2-type2-continuous-evidence-stream';
  auditFirmName: string;
  reportingPeriodFormatted: string;
  complianceScorePercent: number;
  totalControlsMonitored: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  complianceStages: Soc2EvidenceStage[];
  trustRules: TrustCriteriaRule[];
  merkleBlocks: MerkleEvidenceBlock[];
  hasContinuousAuditCertified: boolean;
  hasZeroFindingsReported: boolean;
  hasCryptographicImmutability: boolean;
}

// =============================================================================
// 6. AI Model Distillation Pipeline
// =============================================================================

export interface ModelLayerSpec {
  layerIndex: number;
  layerType: string;
  teacherParameterCount: string;
  studentParameterCount: string;
  prunedHeadPercentage: number;
  isPreserved: boolean;
}

export interface QuantizationBenchmark {
  quantizationPrecision: string;
  memoryFootprintGb: number;
  gsm8kAccuracyPercent: number;
  inferenceSpeedTokensPerSec: number;
  isOptimal: boolean;
}

export interface DistillationStage {
  stepIndex: number;
  stageName: string;
  lossFunctionSummary: string;
  hardwareCluster: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface AiModelDistillationPipelineSlideData extends BaseSlide {
  type: 'ai-model-distillation-pipeline';
  teacherModelName: string;
  studentModelName: string;
  compressionRatioFormatted: string;
  accuracyRetentionPercent: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  distillationStages: DistillationStage[];
  modelLayers: ModelLayerSpec[];
  quantizationBenchmarks: QuantizationBenchmark[];
  hasEdgeDeploymentReady: boolean;
  hasAwqQuantizationCertified: boolean;
  hasOnDeviceGpuAccelerated: boolean;
}

// =============================================================================
// 7. Executive Compensation Clawback Matrix
// =============================================================================

export interface ExecutiveHurdleMetric {
  metricName: string;
  targetThresholdFormatted: string;
  actualAchievedFormatted: string;
  payoutMultiplierPercent: number;
  isHurdleAchieved: boolean;
}

export interface ClawbackCovenantRule {
  covenantTitle: string;
  governingBody: string;
  lookbackPeriodYears: number;
  isRecoveryEnforcedNoFault: boolean;
}

export interface CompensationClawbackStage {
  stepIndex: number;
  stageName: string;
  governanceAction: string;
  auditSignoffBody: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ExecutiveCompensationClawbackMatrixSlideData extends BaseSlide {
  type: 'executive-compensation-clawback-matrix';
  companyTicker: string;
  planFiscalYear: string;
  relativeTsrPercentile: number;
  totalExecutivePoolFormatted: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  clawbackStages: CompensationClawbackStage[];
  hurdleMetrics: ExecutiveHurdleMetric[];
  clawbackCovenants: ClawbackCovenantRule[];
  hasSecRule10D1Compliant: boolean;
  hasStrictFaultEnforcement: boolean;
  hasBoardCommitteeCertified: boolean;
}

// =============================================================================
// 8. Enterprise LLM Fine-Tuning Loss
// =============================================================================

export interface TrainingCheckpointMetric {
  checkpointStep: number;
  trainingLoss: number;
  validationPerplexity: number;
  learningRate: number;
  gpuMemoryUsageGb: number;
  isSavedCheckpoint: boolean;
}

export interface LoraHyperparameterSpec {
  loraRank: number;
  loraAlpha: number;
  targetModules: string[];
  trainableParameterRatioPercent: number;
}

export interface FineTuningStage {
  stepIndex: number;
  stageName: string;
  stageMetricSummary: string;
  gradientNorm: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface EnterpriseLlmFineTuningLossSlideData extends BaseSlide {
  type: 'enterprise-llm-fine-tuning-loss';
  foundationModelName: string;
  corpusTokenCountFormatted: string;
  finalEvalPerplexity: number;
  gpuClusterConfig: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  tuningStages: FineTuningStage[];
  checkpoints: TrainingCheckpointMetric[];
  loraParams: LoraHyperparameterSpec;
  hasConvergenceAchieved: boolean;
  hasZeroCatastrophicForgetting: boolean;
  hasFlashAttentionEnabled: boolean;
}

// =============================================================================
// 9. Distributed Vector Index Sharding
// =============================================================================

export interface VectorShardNode {
  shardId: string;
  nodeHost: string;
  vectorCapacityFormatted: string;
  indexType: string;
  memoryTier: 'DRAM' | 'MemoryMappedNVMe' | 'CXL';
  p99LatencyMs: number;
  recallAccuracyPercent: number;
  isLeader: boolean;
  isHealthy: boolean;
}

export interface IndexPartitionCluster {
  clusterName: string;
  totalVectorsIndexed: number;
  vectorDimensionality: number;
  totalIndexStorageTb: number;
  hasNvmeDirectActive: boolean;
}

export interface DistributedVectorIndexShardingSlideData extends BaseSlide {
  type: 'distributed-vector-index-sharding';
  clusterSpec: IndexPartitionCluster;
  shards: VectorShardNode[];
  routingAlgorithm: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  hasSubMillisecondCentroidRouting: boolean;
  hasNvmeDirectIoEnabled: boolean;
  hasReplicationSyncActive: boolean;
}

// =============================================================================
// 10. Real-Time Financial Fraud Graph
// =============================================================================

export interface FraudGraphEntityNode {
  entityId: string;
  entityType: 'ACCOUNT' | 'SHELL_CORP' | 'MERCHANT' | 'ATM_NODE';
  label: string;
  riskScore: number;
  flaggedReason: string;
  jurisdictionCountry: string;
  isFlaggedSuspicious: boolean;
}

export interface FundTransferEdge {
  sourceEntityId: string;
  targetEntityId: string;
  amountFormatted: string;
  hopIndex: number;
  timeElapsedSeconds: number;
  isRapidLayering: boolean;
}

export interface GnnInferenceScorecard {
  modelArchitecture: string;
  inferenceLatencyMs: number;
  falsePositiveReductionPercent: number;
  detectedFraudRingValue: string;
}

export interface RealtimeFinancialFraudGraphSlideData extends BaseSlide {
  type: 'realtime-financial-fraud-graph';
  scorecard: GnnInferenceScorecard;
  entities: FraudGraphEntityNode[];
  edges: FundTransferEdge[];
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  hasAmlComplianceCertified: boolean;
  hasRealtimeBlockingActive: boolean;
  hasCircularRoutingDetected: boolean;
}

// =============================================================================
// 11. Autonomous Cloud Cost Anomalies
// =============================================================================

export interface CloudCostAnomalyItem {
  podNamespace: string;
  workloadName: string;
  projectedMonthlyCostFormatted: string;
  baselineCostFormatted: string;
  anomalyMultiplierFormatted: string;
  hasEbpfThrottleApplied?: boolean;
  ebpfThrottleApplied?: boolean;
  isRunawayDetected: boolean;
}

export interface CgroupResourceAllocation {
  clusterNodeId: string;
  cgroupV2Path: string;
  cpuQuotaPercentage: number;
  memoryLimitGb: number;
  isThrottled: boolean;
}

export interface AutonomousCloudCostAnomaliesSlideData extends BaseSlide {
  type: 'autonomous-cloud-cost-anomalies';
  clusterSpendRunRateFormatted: string;
  totalMonthlySavingsFormatted: string;
  activeEbpfProbesCount: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  anomalies: CloudCostAnomalyItem[];
  cgroupAllocations: CgroupResourceAllocation[];
  hasEbpfKernelAccounting: boolean;
  hasAutonomousThrottlingActive: boolean;
  hasBudgetGovernanceCertified: boolean;
}

// =============================================================================
// 12. Lakehouse Iceberg ACID Lineage
// =============================================================================

export interface IcebergSnapshotCommit {
  snapshotId: string;
  parentSnapshotId: string;
  commitTimestampUtc: string;
  operationType: 'APPEND' | 'OVERWRITE' | 'DELETE' | 'BRANCH';
  addedRecordsFormatted: string;
  totalRecordsFormatted: string;
  isCurrentSnapshot: boolean;
}

export interface ManifestFileEntry {
  manifestPath: string;
  partitionRangeFormatted: string;
  dataFileCount: number;
  fileSizeBytesFormatted: string;
  hasDeletedFiles: boolean;
}

export interface LakehouseIcebergAcidLineageSlideData extends BaseSlide {
  type: 'lakehouse-iceberg-acid-lineage';
  tableName: string;
  lakehouseStorageFormat: string;
  storageEngine: string;
  totalTableSizeBytes: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  snapshots: IcebergSnapshotCommit[];
  manifests: ManifestFileEntry[];
  hasAcidIsolationCertified: boolean;
  hasTimeTravelQueryEnabled: boolean;
  hasCopyOnWriteActive: boolean;
}

// =============================================================================
// 13. Multi-Region Active-Active Cockroach
// =============================================================================

export interface RaftConsensusRegionNode {
  regionCode: string;
  datacenterCity: string;
  nodeCount: number;
  readLeaseCount: number;
  localReadLatencyMs: number;
  crossRegionWriteLatencyMs: number;
  isLeaseholder: boolean;
  isConsensusQuorumAchieved: boolean;
}

export interface MultiRegionActiveActiveCockroachSlideData extends BaseSlide {
  type: 'multi-region-active-active-cockroach';
  clusterDatabaseName: string;
  consensusProtocol: string;
  hasZeroRpoCertified?: boolean;
  zeroRpoCertified?: boolean;
  mttrFailoverSeconds: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  regionNodes: RaftConsensusRegionNode[];
  hasLocalReadLeasesActive: boolean;
  hasHybridLogicalClocksSync: boolean;
  hasZeroDataLossRpo: boolean;
}

// =============================================================================
// 14. Supply Chain Carbon Ledger CBAM
// =============================================================================

export interface SupplyChainTierItem {
  tierNumber: number;
  supplierName: string;
  countryOriginIso: string;
  embeddedEmissionsKgCo2ePerTon: number;
  cbamBenchmarkKgCo2ePerTon: number;
  tariffLiabilityPerTonEur: number;
  hasCryptographicCarbonCert: boolean;
  isCompliantWithEuThreshold: boolean;
}

export interface SupplyChainCarbonLedgerCbamSlideData extends BaseSlide {
  type: 'supply-chain-carbon-ledger-cbam';
  reportingFiscalQuarter: string;
  totalEmbeddedEmissionsTonnesCo2e: number;
  totalEstimatedTariffExposureEur: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  tierItems: SupplyChainTierItem[];
  hasEuRegistryConnected: boolean;
  hasScope3TelemetryAudited: boolean;
  hasCryptographicCertValidation: boolean;
}

// =============================================================================
// 15. Chaos Mesh Network Partition Drill
// =============================================================================

export interface ChaosFaultInjectionNode {
  nodeId: string;
  nodeRole: string;
  injectedFailureType: string;
  heartbeatLossMilliseconds: number;
  isPartitioned: boolean;
  hasQuorumMaintained: boolean;
}

export interface MttrRecoveryMetric {
  drillPhase: string;
  elapsedSeconds: number;
  clusterAvailabilityPercent: number;
  hasCircuitBreakerTripped?: boolean;
  circuitBreakerTripped?: boolean;
}

export interface ChaosMeshNetworkPartitionDrillSlideData extends BaseSlide {
  type: 'chaos-mesh-network-partition-drill';
  drillExperimentName: string;
  targetDatabaseCluster: string;
  mttrSeconds: number;
  quorumRule: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  nodes: ChaosFaultInjectionNode[];
  recoveryPhases: MttrRecoveryMetric[];
  hasSplitBrainPrevented: boolean;
  hasAutomatedFailoverValidated: boolean;
  hasZeroDataLossGuaranteed: boolean;
}

// =============================================================================
// Discriminated Union of all 15 Global PPT Mastery Slide Data Types
// =============================================================================

export type GlobalPptMasterySlideData =
  // Kinetic 4-Step Workflows
  | LlmAgenticWorkflowDagSlideData
  | ZeroDowntimeBlueGreenMeshSlideData
  | PostQuantumPqcKemHandshakeSlideData
  | DeveloperPlatformBackstagePortalSlideData
  | Soc2Type2ContinuousEvidenceStreamSlideData
  | AiModelDistillationPipelineSlideData
  | ExecutiveCompensationClawbackMatrixSlideData
  | EnterpriseLlmFineTuningLossSlideData
  // Flat Sovereign Overviews
  | DistributedVectorIndexShardingSlideData
  | RealtimeFinancialFraudGraphSlideData
  | AutonomousCloudCostAnomaliesSlideData
  | LakehouseIcebergAcidLineageSlideData
  | MultiRegionActiveActiveCockroachSlideData
  | SupplyChainCarbonLedgerCbamSlideData
  | ChaosMeshNetworkPartitionDrillSlideData;

export type GlobalPptMastery15SlideData = GlobalPptMasterySlideData;

// =============================================================================
// Step Count Calculation Engine & Type Guards
// =============================================================================

export function calculateGlobalPptMasteryStepCount(slide: GlobalPptMasterySlideData): number {
  switch (slide.type) {
    case 'llm-agentic-workflow-dag':
      return Math.max(slide.agentStages?.length ?? 4, 1);
    case 'zero-downtime-blue-green-mesh':
      return Math.max(slide.deploymentStages?.length ?? 4, 1);
    case 'post-quantum-pqc-kem-handshake':
      return Math.max(slide.handshakeStages?.length ?? 4, 1);
    case 'developer-platform-backstage-portal':
      return Math.max(slide.portalStages?.length ?? 4, 1);
    case 'soc2-type2-continuous-evidence-stream':
      return Math.max(slide.complianceStages?.length ?? 4, 1);
    case 'ai-model-distillation-pipeline':
      return Math.max(slide.distillationStages?.length ?? 4, 1);
    case 'executive-compensation-clawback-matrix':
      return Math.max(slide.clawbackStages?.length ?? 4, 1);
    case 'enterprise-llm-fine-tuning-loss':
      return Math.max(slide.tuningStages?.length ?? 4, 1);
    case 'distributed-vector-index-sharding':
    case 'realtime-financial-fraud-graph':
    case 'autonomous-cloud-cost-anomalies':
    case 'lakehouse-iceberg-acid-lineage':
    case 'multi-region-active-active-cockroach':
    case 'supply-chain-carbon-ledger-cbam':
    case 'chaos-mesh-network-partition-drill':
    default:
      return 1;
  }
}

export function isGlobalPptMasterySlide(slide: unknown): slide is GlobalPptMasterySlideData {
  if (typeof slide !== 'object' || slide === null) return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && [
    'llm-agentic-workflow-dag',
    'zero-downtime-blue-green-mesh',
    'post-quantum-pqc-kem-handshake',
    'developer-platform-backstage-portal',
    'soc2-type2-continuous-evidence-stream',
    'ai-model-distillation-pipeline',
    'executive-compensation-clawback-matrix',
    'enterprise-llm-fine-tuning-loss',
    'distributed-vector-index-sharding',
    'realtime-financial-fraud-graph',
    'autonomous-cloud-cost-anomalies',
    'lakehouse-iceberg-acid-lineage',
    'multi-region-active-active-cockroach',
    'supply-chain-carbon-ledger-cbam',
    'chaos-mesh-network-partition-drill',
  ].includes(candidate.type);
}
