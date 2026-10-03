import type { BaseSlide } from './presentation';

// -----------------------------------------------------------------------------
// Master Catalog of 15 Sovereign Operations Slide Archetypes
// -----------------------------------------------------------------------------

// =============================================================================
// 1. Zero-Trust Packet Inspection (zero-trust-packet-inspection)
// =============================================================================
export interface PacketRuleCheckItem {
  id: string;
  ruleName: string;
  protocol: string;
  isCompliant: boolean;
  isEnforced: boolean;
  hasZeroTrustSignoff: boolean;
}

export interface PacketInspectionStageItem {
  id: string;
  stageIndex: number;
  stageName: string;
  layer: string;
  latencyMicros: number;
  packetThroughputMpps: number;
  summary: string;
  ruleChecks: PacketRuleCheckItem[];
  isVerified: boolean;
  isActiveStage: boolean;
  hasAnomalyAlert: boolean;
}

export interface ZeroTrustPacketInspectionSlideData extends BaseSlide {
  type: 'zero-trust-packet-inspection';
  networkSegment: string;
  inspectionMode: string;
  packetThroughputGbps: number;
  inspectionStages: PacketInspectionStageItem[];
  chiefSecurityArchitect: string;
  architectTitle: string;
  isAirGapEnforced: boolean;
  isStrictMtlsActive: boolean;
}

// =============================================================================
// 2. Database Migration Pipeline (database-migration-pipeline)
// =============================================================================
export interface MigrationVerificationCheckItem {
  id: string;
  checkName: string;
  targetTable: string;
  recordsVerified: number;
  checksumMatchPercent: number;
  isPassed: boolean;
  isVerified: boolean;
  hasReplicationLagWarning: boolean;
}

export interface DbMigrationPhaseItem {
  id: string;
  phaseIndex: number;
  phaseName: string;
  sourceDb: string;
  targetDb: string;
  durationMinutes: number;
  replicationLagMs: number;
  recordsTransferred: string;
  summary: string;
  verificationChecks: MigrationVerificationCheckItem[];
  isZeroDowntime: boolean;
  isCutoverReady: boolean;
  isRollbackAvailable: boolean;
}

export interface DatabaseMigrationPipelineSlideData extends BaseSlide {
  type: 'database-migration-pipeline';
  migrationCluster: string;
  targetEngine: string;
  totalRecords: string;
  overallCompletionPercent: number;
  pipelinePhases: DbMigrationPhaseItem[];
  leadMigrationEngineer: string;
  engineerTitle: string;
  isZeroDataLossGuaranteed: boolean;
}

// =============================================================================
// 3. Autonomous AI Evaluation Harness (autonomous-ai-eval-harness)
// =============================================================================
export interface EvalBenchmarkMetricItem {
  id: string;
  benchmarkName: string;
  scorePercent: number;
  baselineDelta: string;
  isPassingBenchmark: boolean;
  isVerified: boolean;
}

export interface AiEvalSuiteItem {
  id: string;
  suiteIndex: number;
  suiteName: string;
  targetModel: string;
  samplesTested: number;
  passRatePercent: number;
  latencyP95Ms: number;
  summary: string;
  benchmarkMetrics: EvalBenchmarkMetricItem[];
  isCertified: boolean;
  hasSafetySignoff: boolean;
  isAutomatedRun: boolean;
}

export interface AutonomousAiEvalHarnessSlideData extends BaseSlide {
  type: 'autonomous-ai-eval-harness';
  evalFramework: string;
  modelEvaluated: string;
  overallSafetyScore: number;
  evalSuites: AiEvalSuiteItem[];
  principalEvaluator: string;
  evaluatorTitle: string;
  isProductionDeploymentPermitted: boolean;
}

// =============================================================================
// 4. Chaos Engineering Matrix (chaos-engineering-matrix)
// =============================================================================
export interface FaultInjectionMetricItem {
  id: string;
  metricName: string;
  measuredValue: string;
  isWithinTolerance: boolean;
  isVerified: boolean;
}

export interface ChaosScenarioItem {
  id: string;
  scenarioIndex: number;
  scenarioName: string;
  blastRadius: string;
  injectedFault: string;
  mttrSeconds: number;
  recoveryStatus: string;
  summary: string;
  faultMetrics: FaultInjectionMetricItem[];
  isSelfHealingVerified: boolean;
  hasAutomatedRollback: boolean;
  isSloPreserved: boolean;
}

export interface ChaosEngineeringMatrixSlideData extends BaseSlide {
  type: 'chaos-engineering-matrix';
  targetCluster: string;
  resilienceIndexScore: number;
  steadyStateSloPercent: number;
  chaosScenarios: ChaosScenarioItem[];
  leadResilienceArchitect: string;
  architectTitle: string;
  isProductionSafeExecution: boolean;
}

// =============================================================================
// 5. CI/CD Artifact Provenance (ci-cd-artifact-provenance)
// =============================================================================
export interface ProvenanceAttestationItem {
  id: string;
  attestationType: string;
  digestSha256: string;
  signerIdentity: string;
  isVerified: boolean;
  isTamperEvident: boolean;
  hasCryptographicProof: boolean;
}

export interface ArtifactProvenanceStageItem {
  id: string;
  stageIndex: number;
  stageName: string;
  slsaLevel: string;
  buildRunnerId: string;
  executionDurationSeconds: number;
  summary: string;
  attestations: ProvenanceAttestationItem[];
  isCompliant: boolean;
  isReproducibleBuild: boolean;
  hasImmutableDigest: boolean;
}

export interface CiCdArtifactProvenanceSlideData extends BaseSlide {
  type: 'ci-cd-artifact-provenance';
  artifactName: string;
  rootDigestSha256: string;
  slsaComplianceRating: string;
  provenanceStages: ArtifactProvenanceStageItem[];
  attestationSigner: string;
  signerTitle: string;
  isKeylessSigningActive: boolean;
}

// =============================================================================
// 6. Disaster Recovery Drill (disaster-recovery-drill)
// =============================================================================
export interface DrServiceFailoverItem {
  id: string;
  serviceName: string;
  rtoAchievedSeconds: number;
  rpoTargetAchieved: boolean;
  isOperationalInReplica: boolean;
  isTrafficRerouted: boolean;
}

export interface DrDrillPhaseItem {
  id: string;
  phaseIndex: number;
  phaseName: string;
  originRegion: string;
  failoverRegion: string;
  elapsedSeconds: number;
  targetRtoSeconds: number;
  summary: string;
  serviceFailovers: DrServiceFailoverItem[];
  isPhasePassed: boolean;
  isDataSynchronized: boolean;
  hasZeroDataLoss: boolean;
}

export interface DisasterRecoveryDrillSlideData extends BaseSlide {
  type: 'disaster-recovery-drill';
  drillCode: string;
  targetRtoFormatted: string;
  targetRpoFormatted: string;
  overallRtoAchievedSeconds: number;
  drillPhases: DrDrillPhaseItem[];
  incidentCommander: string;
  commanderTitle: string;
  isExecutiveSignoffAchieved: boolean;
}

// =============================================================================
// 7. Feature Flag Rollout Tree (feature-flag-rollout-tree)
// =============================================================================
export interface RolloutTelemetryGuardItem {
  id: string;
  guardMetric: string;
  currentTelemetry: string;
  isGuardPassing: boolean;
  isVerified: boolean;
}

export interface FeatureFlagRolloutRingItem {
  id: string;
  ringIndex: number;
  ringName: string;
  allocationPercent: number;
  userCohortSize: string;
  dwellTimeHours: number;
  summary: string;
  telemetryGuards: RolloutTelemetryGuardItem[];
  isRingCompleted: boolean;
  isAutoKillSwitchArmed: boolean;
  hasTelemetryHealthy: boolean;
}

export interface FeatureFlagRolloutTreeSlideData extends BaseSlide {
  type: 'feature-flag-rollout-tree';
  flagKey: string;
  targetReleaseVersion: string;
  totalAudienceCoveredPercent: number;
  rolloutRings: FeatureFlagRolloutRingItem[];
  releaseOwner: string;
  ownerTitle: string;
  isInstantKillSwitchActive: boolean;
}

// =============================================================================
// 8. Quantum Cryptography Transition (quantum-cryptography-transition)
// =============================================================================
export interface PqcAlgorithmMigrationItem {
  id: string;
  classicAlgorithm: string;
  pqcReplacement: string;
  cryptoAgilityStatus: string;
  isHardwareAccelerated: boolean;
  isNistFipsCompliant: boolean;
  hasZeroPerformancePenalty: boolean;
}

export interface PqcTransitionMilestoneItem {
  id: string;
  milestoneIndex: number;
  milestoneName: string;
  targetDeadlineQuarter: string;
  completionPercent: number;
  summary: string;
  algorithms: PqcAlgorithmMigrationItem[];
  isMilestoneAchieved: boolean;
  isCryptoAgileArchitecture: boolean;
  hasRegulatoryApproval: boolean;
}

export interface QuantumCryptographyTransitionSlideData extends BaseSlide {
  type: 'quantum-cryptography-transition';
  cryptoFramework: string;
  overallPqcReadinessPercent: number;
  transitionMilestones: PqcTransitionMilestoneItem[];
  chiefCryptographer: string;
  cryptographerTitle: string;
  isFipsCertified: boolean;
}

// =============================================================================
// 9. Global Latency Topology (global-latency-topology) - Flat Sovereign
// =============================================================================
export interface EdgePopNodeItem {
  id: string;
  popCode: string;
  location: string;
  p50Ms: number;
  p95Ms: number;
  p99Ms: number;
  trafficEgressGbps: number;
  cacheHitRatioPercent: number;
  isOperational: boolean;
  isAnycastHealthy: boolean;
  hasOptimalRouting: boolean;
}

export interface BackboneTransitLinkItem {
  id: string;
  sourcePop: string;
  destPop: string;
  fiberDistanceKm: number;
  rttLatencyMs: number;
  capacityTbps: number;
  isEncrypted: boolean;
  isCongestionFree: boolean;
}

export interface GlobalLatencyTopologySlideData extends BaseSlide {
  type: 'global-latency-topology';
  globalAverageRttMs: number;
  anycastPopsCount: number;
  overallCacheHitPercent: number;
  edgeNodes: EdgePopNodeItem[];
  transitLinks: BackboneTransitLinkItem[];
  networkDirector: string;
  directorTitle: string;
  isAnycastBgpActive: boolean;
}

// =============================================================================
// 10. Microservices Mesh Telemetry (microservices-mesh-telemetry) - Flat Sovereign
// =============================================================================
export interface MeshServiceNodeItem {
  id: string;
  serviceName: string;
  podReplicas: number;
  requestsPerSecond: number;
  p99LatencyMs: number;
  errorBudgetRemainingPercent: number;
  isMtlsEnforced: boolean;
  isCircuitBreakerHealthy: boolean;
  hasTelemetryTracing: boolean;
}

export interface MeshTrafficEdgeItem {
  id: string;
  fromService: string;
  toService: string;
  protocol: string;
  successRatePercent: number;
  isEncrypted: boolean;
}

export interface MicroservicesMeshTelemetrySlideData extends BaseSlide {
  type: 'microservices-mesh-telemetry';
  meshName: string;
  totalMeshRps: number;
  overallSuccessRatePercent: number;
  meshServices: MeshServiceNodeItem[];
  trafficEdges: MeshTrafficEdgeItem[];
  meshArchitect: string;
  architectTitle: string;
  isStrictMtlsGlobal: boolean;
}

// =============================================================================
// 11. Threat Intelligence Feed (threat-intelligence-feed) - Flat Sovereign
// =============================================================================
export interface ThreatFeedItem {
  id: string;
  threatActor: string;
  threatCategory: string;
  mitreTactic: string;
  cvssScore: number;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  affectedAssetsCount: number;
  isContained: boolean;
  isZeroDaySignature: boolean;
  hasAutomatedWafBlock: boolean;
}

export interface DefensePerimeterItem {
  id: string;
  perimeterZone: string;
  blockedAttacksLast24h: number;
  containmentSpeedMs: number;
  isProtected: boolean;
}

export interface ThreatIntelligenceFeedSlideData extends BaseSlide {
  type: 'threat-intelligence-feed';
  feedSource: string;
  threatLevel: 'NOMINAL' | 'ELEVATED' | 'CRITICAL' | 'GUARDED';
  containmentRatePercent: number;
  threatFeed: ThreatFeedItem[];
  perimeterZones: DefensePerimeterItem[];
  socCommander: string;
  commanderTitle: string;
  isAutomatedMitigationActive: boolean;
}

// =============================================================================
// 12. Data Lakehouse Governance (data-lakehouse-governance) - Flat Sovereign
// =============================================================================
export interface LakehouseDomainItem {
  id: string;
  domainName: string;
  tableFormat: string;
  storagePetabytes: number;
  dailyQueryCount: string;
  complianceHealthPercent: number;
  isColumnLevelMasked: boolean;
  isGdprCompliant: boolean;
  hasAuditProvenance: boolean;
}

export interface GovernanceRuleItem {
  id: string;
  ruleName: string;
  enforcementMode: string;
  isEnforced: boolean;
  isPassed: boolean;
}

export interface DataLakehouseGovernanceSlideData extends BaseSlide {
  type: 'data-lakehouse-governance';
  catalogName: string;
  totalDataManagedPb: number;
  complianceAuditScorePercent: number;
  dataDomains: LakehouseDomainItem[];
  governanceRules: GovernanceRuleItem[];
  lakehouseArchitect: string;
  architectTitle: string;
  isCasbinRbacEnforced: boolean;
}

// =============================================================================
// 13. Kubernetes Fleet Orchestrator (kubernetes-fleet-orchestrator) - Flat Sovereign
// =============================================================================
export interface K8sClusterItem {
  id: string;
  clusterName: string;
  region: string;
  k8sVersion: string;
  nodeCount: number;
  runningPods: number;
  cpuUtilizationPercent: number;
  memoryUtilizationPercent: number;
  isGitOpsSynced: boolean;
  isHealthy: boolean;
  hasQuorumLock: boolean;
}

export interface FleetPolicyItem {
  id: string;
  policyName: string;
  complianceRatePercent: number;
  isEnforcedGlobally: boolean;
}

export interface KubernetesFleetOrchestratorSlideData extends BaseSlide {
  type: 'kubernetes-fleet-orchestrator';
  fleetName: string;
  totalManagedClusters: number;
  overallNodeCapacity: number;
  clusters: K8sClusterItem[];
  fleetPolicies: FleetPolicyItem[];
  leadFleetOrchestrator: string;
  orchestratorTitle: string;
  isZeroDriftEnforced: boolean;
}

// =============================================================================
// 14. API Monetization & Billing (api-monetization-billing) - Flat Sovereign
// =============================================================================
export interface ApiTierItem {
  id: string;
  tierName: string;
  monthlyBaseFee: number;
  includedCallsMillions: number;
  overagePerThousandCalls: number;
  activeSubscribers: number;
  monthlyRecurringRevenue: number;
  grossMarginPercent: number;
  isSlaGuaranteeActive: boolean;
  isSelfServeEnabled: boolean;
  hasVolumeDiscount: boolean;
}

export interface BillingMetricSummaryItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  isTargetAchieved: boolean;
}

export interface ApiMonetizationBillingSlideData extends BaseSlide {
  type: 'api-monetization-billing';
  billingCycle: string;
  totalMrrFormatted: string;
  grossMarginOverallPercent: number;
  pricingTiers: ApiTierItem[];
  metricSummaries: BillingMetricSummaryItem[];
  billingArchitect: string;
  architectTitle: string;
  isRealtimeMeteringActive: boolean;
}

// =============================================================================
// 15. AI Inference Cluster Telemetry (ai-inference-cluster-telemetry) - Flat Sovereign
// =============================================================================
export interface GpuNodeGroupItem {
  id: string;
  nodeGroupName: string;
  acceleratorModel: string;
  gpuCount: number;
  computeUtilizationPercent: number;
  kvCacheEfficiencyPercent: number;
  tokensPerSecondGenerated: number;
  averageTemperatureCelsius: number;
  isThermalThrottleFree: boolean;
  isHealthy: boolean;
  hasActiveWorkload: boolean;
}

export interface InferenceSloItem {
  id: string;
  modelName: string;
  ttftMs: number;
  interTokenLatencyMs: number;
  isMeetingSlo: boolean;
}

export interface AiInferenceClusterTelemetrySlideData extends BaseSlide {
  type: 'ai-inference-cluster-telemetry';
  clusterName: string;
  totalGpuAccelerators: number;
  aggregateTokensPerSecFormatted: string;
  averageComputeUtilizationPercent: number;
  gpuNodeGroups: GpuNodeGroupItem[];
  inferenceSlos: InferenceSloItem[];
  leadHpcArchitect: string;
  architectTitle: string;
  isContinuousBatchingActive: boolean;
}

// =============================================================================
// Discriminated Union Types
// =============================================================================
export type SovereignOperationsSlideType =
  | 'zero-trust-packet-inspection'
  | 'database-migration-pipeline'
  | 'autonomous-ai-eval-harness'
  | 'chaos-engineering-matrix'
  | 'ci-cd-artifact-provenance'
  | 'disaster-recovery-drill'
  | 'feature-flag-rollout-tree'
  | 'quantum-cryptography-transition'
  | 'global-latency-topology'
  | 'microservices-mesh-telemetry'
  | 'threat-intelligence-feed'
  | 'data-lakehouse-governance'
  | 'kubernetes-fleet-orchestrator'
  | 'api-monetization-billing'
  | 'ai-inference-cluster-telemetry';

export type SovereignOperationsSlideData =
  | ZeroTrustPacketInspectionSlideData
  | DatabaseMigrationPipelineSlideData
  | AutonomousAiEvalHarnessSlideData
  | ChaosEngineeringMatrixSlideData
  | CiCdArtifactProvenanceSlideData
  | DisasterRecoveryDrillSlideData
  | FeatureFlagRolloutTreeSlideData
  | QuantumCryptographyTransitionSlideData
  | GlobalLatencyTopologySlideData
  | MicroservicesMeshTelemetrySlideData
  | ThreatIntelligenceFeedSlideData
  | DataLakehouseGovernanceSlideData
  | KubernetesFleetOrchestratorSlideData
  | ApiMonetizationBillingSlideData
  | AiInferenceClusterTelemetrySlideData;

// =============================================================================
// Type Guard
// =============================================================================
export function isSovereignOperationsSlide(slide: unknown): slide is SovereignOperationsSlideData {
  const isObject = typeof slide === 'object' && Boolean(slide);
  if (!isObject) return false;
  const validTypes: SovereignOperationsSlideType[] = [
    'zero-trust-packet-inspection',
    'database-migration-pipeline',
    'autonomous-ai-eval-harness',
    'chaos-engineering-matrix',
    'ci-cd-artifact-provenance',
    'disaster-recovery-drill',
    'feature-flag-rollout-tree',
    'quantum-cryptography-transition',
    'global-latency-topology',
    'microservices-mesh-telemetry',
    'threat-intelligence-feed',
    'data-lakehouse-governance',
    'kubernetes-fleet-orchestrator',
    'api-monetization-billing',
    'ai-inference-cluster-telemetry',
  ];
  return validTypes.includes((slide as { type?: unknown }).type as SovereignOperationsSlideType);
}

// =============================================================================
// Step Count Calculation Engine
// =============================================================================
export function calculateSovereignOperationsSlideStepCount(
  slide: SovereignOperationsSlideData
): number {
  switch (slide.type) {
    // 8 Multi-Step Operational Workflows
    case 'zero-trust-packet-inspection':
      return Math.max(slide.inspectionStages?.length || 1, 1);
    case 'database-migration-pipeline':
      return Math.max(slide.pipelinePhases?.length || 1, 1);
    case 'autonomous-ai-eval-harness':
      return Math.max(slide.evalSuites?.length || 1, 1);
    case 'chaos-engineering-matrix':
      return Math.max(slide.chaosScenarios?.length || 1, 1);
    case 'ci-cd-artifact-provenance':
      return Math.max(slide.provenanceStages?.length || 1, 1);
    case 'disaster-recovery-drill':
      return Math.max(slide.drillPhases?.length || 1, 1);
    case 'feature-flag-rollout-tree':
      return Math.max(slide.rolloutRings?.length || 1, 1);
    case 'quantum-cryptography-transition':
      return Math.max(slide.transitionMilestones?.length || 1, 1);

    // 7 High-Density Flat Sovereign Overviews
    case 'global-latency-topology':
    case 'microservices-mesh-telemetry':
    case 'threat-intelligence-feed':
    case 'data-lakehouse-governance':
    case 'kubernetes-fleet-orchestrator':
    case 'api-monetization-billing':
    case 'ai-inference-cluster-telemetry':
      return 1;

    default:
      return 1;
  }
}