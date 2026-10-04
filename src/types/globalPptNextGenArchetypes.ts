// lint-allow: file-size reason="Chapter 42 Global PPT NextGen slide archetype contracts" max=600
import type { BaseSlide } from './presentation';

// =============================================================================
// Discriminated Union Types for Global PPT NextGen (Chapter 42)
// =============================================================================

export type GlobalPptNextGenSlideType =
  | 'agentic-eval-red-team-harness' | 'gitops-argocd-sync-reconciliation'
  | 'nvme-over-fabrics-rdma-storage' | 'confidential-gpu-attestation-flow'
  | 'ebpf-ddos-xdp-packet-mitigation' | 'active-inference-memory-tiering'
  | 'sovereign-ai-data-clean-room' | 'incident-command-automated-playbook'
  | 'gpu-hbm-interconnect-mesh' | 'realtime-feature-store-feast'
  | 'distributed-wal-raft-consensus' | 'finops-unit-economics-cloud-matrix'
  | 'cross-border-privacy-data-residency' | 'zero-trust-microsegmentation-spiffe'
  | 'enterprise-board-capital-allocation';

export type GlobalPptNextGen15SlideType = GlobalPptNextGenSlideType;

export const GLOBAL_PPT_NEXTGEN_SLIDE_TYPES: readonly GlobalPptNextGenSlideType[] = [
  'agentic-eval-red-team-harness', 'gitops-argocd-sync-reconciliation',
  'nvme-over-fabrics-rdma-storage', 'confidential-gpu-attestation-flow',
  'ebpf-ddos-xdp-packet-mitigation', 'active-inference-memory-tiering',
  'sovereign-ai-data-clean-room', 'incident-command-automated-playbook',
  'gpu-hbm-interconnect-mesh', 'realtime-feature-store-feast',
  'distributed-wal-raft-consensus', 'finops-unit-economics-cloud-matrix',
  'cross-border-privacy-data-residency', 'zero-trust-microsegmentation-spiffe',
  'enterprise-board-capital-allocation',
] as const;

// --- 1. Agentic Eval Red-Team Harness ---
export interface RedTeamAttackVectorNode {
  id: string;
  vectorIndex: number;
  attackCategory: string;
  severityBadge: string;
  successRatePercent: number;
  mitigationStatus: string;
  isContained: boolean;
  hasActiveMitigation: boolean;
  isVerified: boolean;
}
export interface EvalHarnessStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  evaluatorEngine: string;
  targetBenchmark: string;
  syntheticProbeCount: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface AgenticEvalRedTeamSlideData extends BaseSlide {
  type: 'agentic-eval-red-team-harness';
  harnessName: string;
  targetModelFamily: string;
  overallRobustnessScorePercent: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  evalStages: EvalHarnessStage[];
  attackVectors: RedTeamAttackVectorNode[];
  hasAutomatedPatchingEnabled: boolean;
  hasSandboxIsolationActive: boolean;
  hasAttestationSeal: boolean;
  hasTelemetryGlow: boolean;
  stages?: EvalHarnessStage[];
}

// --- 2. GitOps ArgoCD Sync Reconciliation ---
export interface GitOpsResourceDiffNode {
  id: string;
  resourceKind: string;
  resourceName: string;
  targetNamespace: string;
  syncWave: number;
  syncStatus: string;
  isSynced: boolean;
  isHealthy: boolean;
  hasDriftDetected: boolean;
}
export interface GitOpsReconciliationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  actionSummary: string;
  elapsedTimeMs: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface GitOpsArgoCdSyncSlideData extends BaseSlide {
  type: 'gitops-argocd-sync-reconciliation';
  applicationName: string;
  clusterTarget: string;
  gitRevisionSha: string;
  syncDurationSeconds: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  reconciliationStages: GitOpsReconciliationStage[];
  resources: GitOpsResourceDiffNode[];
  hasAutoPruneEnabled: boolean;
  hasSelfHealingActive: boolean;
  hasZeroDowntimeEnforced: boolean;
  hasTelemetryGlow: boolean;
  stages?: GitOpsReconciliationStage[];
}

// --- 3. NVMe-over-Fabrics RDMA Storage ---
export interface RdmaQueuePairNode {
  id: string;
  queuePairId: string;
  transportProtocol: 'RoCEv2' | 'InfiniBand';
  bufferSizeMb: number;
  iopsThroughput: number;
  latencyMicroseconds: number;
  isEstablished: boolean;
  hasZeroCopyActive: boolean;
  isHealthy: boolean;
}
export interface NvmeFabricsStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  protocolLayer: string;
  bandwidthGbps: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface NvmeFabricsRdmaSlideData extends BaseSlide {
  type: 'nvme-over-fabrics-rdma-storage';
  storageClusterName: string;
  fabricProtocol: string;
  aggregateIopsMillion: number;
  p99LatencyMicros: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  fabricStages: NvmeFabricsStage[];
  queuePairs: RdmaQueuePairNode[];
  hasKernelBypassEnabled: boolean;
  hasMultipathActive: boolean;
  hasHardwareChecksumEnforced: boolean;
  hasTelemetryGlow: boolean;
  stages?: NvmeFabricsStage[];
}

// --- 4. Confidential GPU Attestation Flow ---
export interface AttestationEvidenceNode {
  id: string;
  componentTarget: string;
  sha384MeasurementHash: string;
  expectedGoldenHash: string;
  verificationStatus: string;
  isHardwareVerified: boolean;
  hasTamperProofShield: boolean;
  isMatched: boolean;
}
export interface ConfidentialGpuStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  cryptographicStandard: string;
  attestationAuthority: string;
  isActive: boolean;
  isCompleted: boolean;
}
export interface ConfidentialGpuAttestSlideData extends BaseSlide {
  type: 'confidential-gpu-attestation-flow';
  acceleratorModel: string;
  attestationAuthorityUrl: string;
  enclaveSecurityLevel: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  attestationStages: ConfidentialGpuStage[];
  evidenceNodes: AttestationEvidenceNode[];
  hasHardwareRootOfTrust: boolean;
  hasEphemeralKeyDecryptionActive: boolean;
  hasZeroHostAccessEnforced: boolean;
  hasTelemetryGlow: boolean;
  stages?: ConfidentialGpuStage[];
}

// --- 5. eBPF DDoS XDP Packet Mitigation ---
export interface XdpMitigationFilterNode {
  id: string;
  filterName: string;
  actionType: 'XDP_DROP' | 'XDP_PASS' | 'XDP_TX';
  packetThroughputMpps: number;
  droppedPacketsTotal: number;
  isFilterActive: boolean;
  hasHardwareOffload: boolean;
  isHealthy: boolean;
}
export interface EbpfPacketStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  kernelHookLocation: string;
  processingBudgetNanoseconds: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface EbpfDdosXdpSlideData extends BaseSlide {
  type: 'ebpf-ddos-xdp-packet-mitigation';
  interfaceDevice: string;
  attackPeakBandwidthTbps: number;
  droppedPacketRatePercent: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  mitigationStages: EbpfPacketStage[];
  filters: XdpMitigationFilterNode[];
  hasXdpDriverModeEnabled: boolean;
  hasKernelBypassEnforced: boolean;
  hasZeroCpuAllocationAchieved: boolean;
  hasTelemetryGlow: boolean;
  stages?: EbpfPacketStage[];
}

// --- 6. Active Inference Memory Tiering ---
export interface KvCacheMemoryTierNode {
  id: string;
  tierName: string;
  bandwidthCapacityTbps: number;
  storageCapacityGb: number;
  averageAccessLatencyNs: number;
  activeContextTokens: number;
  isTierActive: boolean;
  hasPagingEnabled: boolean;
  isSaturated: boolean;
}
export interface ActiveInferenceStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  memoryTierTarget: string;
  cacheHitRatePercent: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface ActiveInferenceMemorySlideData extends BaseSlide {
  type: 'active-inference-memory-tiering';
  modelContextWindowTokens: number;
  inferenceEngineName: string;
  overallCacheHitRatePercent: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  tieringStages: ActiveInferenceStage[];
  memoryTiers: KvCacheMemoryTierNode[];
  hasPrefetchPredictorActive: boolean;
  hasZeroStallGuaranteed: boolean;
  hasDynamicEvictionEnabled: boolean;
  hasTelemetryGlow: boolean;
  stages?: ActiveInferenceStage[];
}

// --- 7. Sovereign AI Data Clean Room ---
export interface CleanRoomParticipantNode {
  id: string;
  participantOrg: string;
  jurisdictionRegion: string;
  datasetName: string;
  recordCount: number;
  privacyEpsilonBudget: number;
  isIngestionComplete: boolean;
  hasAttestationConfirmed: boolean;
  isEncrypted: boolean;
}
export interface SovereignCleanRoomStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  governanceProtocol: string;
  differentialEpsilonUsed: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface SovereignAiCleanRoomSlideData extends BaseSlide {
  type: 'sovereign-ai-data-clean-room';
  cleanRoomTitle: string;
  confidentialEnclaveProvider: string;
  complianceCertification: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  cleanRoomStages: SovereignCleanRoomStage[];
  participants: CleanRoomParticipantNode[];
  hasDifferentialPrivacyEnforced: boolean;
  hasHomomorphicEncryptionActive: boolean;
  hasMultiPartyConsensusCertified: boolean;
  hasTelemetryGlow: boolean;
  stages?: SovereignCleanRoomStage[];
}

// --- 8. Incident Command Automated Playbook ---
export interface IncidentActionNode {
  id: string;
  actionOrder: number;
  actionTitle: string;
  executionStatus: string;
  executionLatencySeconds: number;
  mitigationImpactSummary: string;
  isExecuted: boolean;
  isVerified: boolean;
  hasRollbackSucceeded: boolean;
}
export interface IncidentPlaybookStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  orchestratorBot: string;
  serviceAvailabilityPercent: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface IncidentCommandPlaybookSlideData extends BaseSlide {
  type: 'incident-command-automated-playbook';
  incidentId: string;
  incidentSeverityBadge: string;
  meanTimeToRecoverySeconds: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  playbookStages: IncidentPlaybookStage[];
  remediationActions: IncidentActionNode[];
  hasAutonomousExecutionApproved: boolean;
  hasCircuitBreakerActive: boolean;
  hasPostMortemGenerated: boolean;
  hasTelemetryGlow: boolean;
  stages?: IncidentPlaybookStage[];
}

// --- 9. GPU HBM Interconnect Mesh ---
export interface GpuDieNode {
  gpuId: string;
  dieIndex: number;
  hbmCapacityGigabytes: number;
  hbmBandwidthTbps: number;
  temperatureCelsius: number;
  powerDrawWatts: number;
  isOnline: boolean;
  hasNvLinkActive: boolean;
}
export interface NvLinkFabricMetric {
  switchLayer: string;
  bisectionBandwidthTbps: number;
  linkErrorRatePerMillion: number;
  isFabricHealthy: boolean;
}
export interface GpuHbmInterconnectSlideData extends BaseSlide {
  type: 'gpu-hbm-interconnect-mesh';
  clusterFabricModel: string;
  aggregateMemoryGb: number;
  bisectionBandwidthTbps: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  gpus: GpuDieNode[];
  fabricMetrics: NvLinkFabricMetric[];
  hasDirectPeerAccessEnabled: boolean;
  hasHardwareWatchdogActive: boolean;
  hasThermalThrottlingAverted: boolean;
}

// --- 10. Realtime Feature Store Feast ---
export interface FeatureViewEntity {
  entityName: string;
  onlineStoreProvider: string;
  offlineWarehouse: string;
  servingLatencyP99Ms: number;
  freshnessSlaSeconds: number;
  isPointInTimeCorrect: boolean;
  isOnlineStoreReady: boolean;
}
export interface FeatureStoreMetric {
  metricName: string;
  metricValue: string;
  isHealthy: boolean;
}
export interface RealtimeFeatureStoreSlideData extends BaseSlide {
  type: 'realtime-feature-store-feast';
  featureRegistryName: string;
  totalRegisteredFeatures: number;
  onlineReadThroughputQps: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  featureViews: FeatureViewEntity[];
  metrics: FeatureStoreMetric[];
  hasStreamingIngestionActive: boolean;
  hasDataDriftDetectionEnabled: boolean;
  hasZeroLeakageCertified: boolean;
}

// --- 11. Distributed WAL Raft Consensus ---
export interface RaftNodeState {
  nodeId: string;
  role: 'Leader' | 'Follower' | 'Candidate';
  currentTerm: number;
  lastLogIndex: number;
  commitIndex: number;
  replicationLagMs: number;
  isLeader: boolean;
  isHealthy: boolean;
}
export interface WalLogSegment {
  logIndex: number;
  term: number;
  commandPayload: string;
  isCommitted: boolean;
  isFsynced: boolean;
}
export interface DistributedWalRaftSlideData extends BaseSlide {
  type: 'distributed-wal-raft-consensus';
  clusterName: string;
  currentRaftTerm: number;
  commitWatermarkIndex: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  raftNodes: RaftNodeState[];
  recentLogEntries: WalLogSegment[];
  hasQuorumReplicated: boolean;
  hasStrictFsyncDurability: boolean;
  hasLinearizableReadsEnforced: boolean;
}

// --- 12. FinOps Unit Economics Cloud Matrix ---
export interface CloudWorkloadCostItem {
  workloadName: string;
  cloudProvider: string;
  costPerMillionTokensUsd: number;
  monthlySpendUsd: number;
  commitmentDiscountCoveragePercent: number;
  isOptimized: boolean;
  hasBudgetAlertAverted: boolean;
}
export interface FinopsEfficiencyKpi {
  kpiTitle: string;
  metricFormatted: string;
  isTargetMet: boolean;
}
export interface FinopsUnitEconomicsSlideData extends BaseSlide {
  type: 'finops-unit-economics-cloud-matrix';
  reportingFiscalPeriod: string;
  totalMonthlyCloudSpendUsd: number;
  blendedCostPerTokenCent: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  workloads: CloudWorkloadCostItem[];
  kpis: FinopsEfficiencyKpi[];
  hasMultiCloudArbitrageActive: boolean;
  hasReservedCapacitySecured: boolean;
  hasCarbonOffsetIncluded: boolean;
}

// --- 13. Cross-Border Privacy Data Residency ---
export interface JurisdictionBoundaryNode {
  jurisdictionCode: string;
  datacenterLocation: string;
  dataRetentionDays: number;
  encryptionStandard: string;
  egressFenceStatus: string;
  isFenced: boolean;
  hasZeroCrossBorderLeak: boolean;
  isCompliant: boolean;
}
export interface DataResidencyAuditRecord {
  auditFramework: string;
  lastInspectionDate: string;
  isAuditPassed: boolean;
}
export interface CrossBorderDataResidencySlideData extends BaseSlide {
  type: 'cross-border-privacy-data-residency';
  globalComplianceFramework: string;
  monitoredDataStoreCount: number;
  unauthorizedEgressAttempts: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  jurisdictions: JurisdictionBoundaryNode[];
  auditRecords: DataResidencyAuditRecord[];
  hasGeofenceEnforced: boolean;
  hasCryptographicShardingActive: boolean;
  hasRealtimeEgressFirewall: boolean;
}

// --- 14. Zero-Trust Microsegmentation SPIFFE ---
export interface SpiffeWorkloadNode {
  spiffeId: string;
  workloadNamespace: string;
  svidTtlSeconds: number;
  certificateIssuer: string;
  isIdentityAttested: boolean;
  hasMtlsEnforced: boolean;
  isCompliant: boolean;
}
export interface MtlsSecurityPolicyRule {
  sourceWorkload: string;
  destinationWorkload: string;
  authorizedMethod: string;
  isEnforced: boolean;
}
export interface ZeroTrustSpiffeSlideData extends BaseSlide {
  type: 'zero-trust-microsegmentation-spiffe';
  trustDomain: string;
  activeWorkloadIdentities: number;
  svidRotationFrequencyHours: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  workloads: SpiffeWorkloadNode[];
  securityPolicies: MtlsSecurityPolicyRule[];
  hasZeroStaticSecrets: boolean;
  hasHardwareTpmAttested: boolean;
  hasStrictDenyAllDefault: boolean;
}

// --- 15. Enterprise Board Capital Allocation ---
export interface CapitalProjectAllocation {
  projectId: string;
  projectTitle: string;
  allocatedCapitalMillionsUsd: number;
  projectedInternalRateOfReturnPercent: number;
  paybackPeriodYears: number;
  hasHurdlePassed?: boolean;
  hurdleRatePassed?: boolean;
  isHurdlePassed?: boolean;
  isBoardApproved: boolean;
}
export interface BoardGovernanceHurdle {
  governanceClause: string;
  hurdleThresholdPercent: number;
  isHurdleSatisfied: boolean;
}
export interface BoardCapitalAllocationSlideData extends BaseSlide {
  type: 'enterprise-board-capital-allocation';
  fiscalYear: string;
  totalCapitalBudgetMillionsUsd: number;
  minimumHurdleRatePercent: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  allocations: CapitalProjectAllocation[];
  governanceHurdles: BoardGovernanceHurdle[];
  hasExecutiveSignoffCompleted: boolean;
  hasFiduciaryAuditApproved: boolean;
  hasRiskAdjustedReturnVerified: boolean;
}

// =============================================================================
// Discriminated Union of all 15 Global PPT NextGen Slide Data Types
// =============================================================================

export type GlobalPptNextGenSlideData =
  | AgenticEvalRedTeamSlideData | GitOpsArgoCdSyncSlideData
  | NvmeFabricsRdmaSlideData | ConfidentialGpuAttestSlideData
  | EbpfDdosXdpSlideData | ActiveInferenceMemorySlideData
  | SovereignAiCleanRoomSlideData | IncidentCommandPlaybookSlideData
  | GpuHbmInterconnectSlideData | RealtimeFeatureStoreSlideData
  | DistributedWalRaftSlideData | FinopsUnitEconomicsSlideData
  | CrossBorderDataResidencySlideData | ZeroTrustSpiffeSlideData
  | BoardCapitalAllocationSlideData;

export type GlobalPptNextGen15SlideData = GlobalPptNextGenSlideData;

// =============================================================================
// Step Count Calculation Engine & Type Guards
// =============================================================================
export function calculateGlobalPptNextGenStepCount(slide: any): number {
  if (typeof slide !== 'object' || slide === null) return 1;

  switch (slide.type) {
    case 'agentic-eval-red-team-harness':
      return Math.max(slide.evalStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'gitops-argocd-sync-reconciliation':
      return Math.max(slide.reconciliationStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'nvme-over-fabrics-rdma-storage':
      return Math.max(slide.fabricStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'confidential-gpu-attestation-flow':
      return Math.max(slide.attestationStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'ebpf-ddos-xdp-packet-mitigation':
      return Math.max(slide.mitigationStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'active-inference-memory-tiering':
      return Math.max(slide.tieringStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'sovereign-ai-data-clean-room':
      return Math.max(slide.cleanRoomStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'incident-command-automated-playbook':
      return Math.max(slide.playbookStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'gpu-hbm-interconnect-mesh':
    case 'realtime-feature-store-feast':
    case 'distributed-wal-raft-consensus':
    case 'finops-unit-economics-cloud-matrix':
    case 'cross-border-privacy-data-residency':
    case 'zero-trust-microsegmentation-spiffe':
    case 'enterprise-board-capital-allocation':
    default:
      return 1;
  }
}

export function isGlobalPptNextGenSlideType(type: string): type is GlobalPptNextGenSlideType {
  return (GLOBAL_PPT_NEXTGEN_SLIDE_TYPES as readonly string[]).includes(type);
}

export function isGlobalPptNextGenSlide(slide: unknown): slide is GlobalPptNextGenSlideData {
  if (typeof slide !== 'object' || slide === null) return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && isGlobalPptNextGenSlideType(candidate.type);
}
