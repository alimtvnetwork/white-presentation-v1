// lint-allow: file-size reason="Type contracts for 15 kinetic revolution slide archetypes" max=750
import type { BaseSlide } from './presentation';

// =============================================================================
// Discriminated Union Types for Kinetic Revolution (Module 40)
// =============================================================================

export type KineticRevolutionSlideType =
  | 'gpu-cluster-fabric-interconnect'
  | 'rag-needle-haystack-benchmark'
  | 'ebpf-kernel-telemetry-observability'
  | 'ai-inference-token-economics'
  | 'micro-frontend-federation-matrix'
  | 'progressive-delivery-canary-gate'
  | 'data-mesh-federated-governance'
  | 'threat-exposure-ctem-matrix'
  | 'subsea-cable-global-backbone'
  | 'multi-agent-reflection-deliberation'
  | 'semantic-cache-hit-topology'
  | 'saas-net-revenue-retention-cohort'
  | 'confidential-mpc-key-vault'
  | 'developer-friction-dx-telemetry'
  | 'boardroom-m-and-a-synergy-realization';

// =============================================================================
// 1. GPU Cluster Fabric Interconnect
// =============================================================================

export interface GpuFabricNode {
  id: string;
  name: string;
  nodeType: 'compute-h100' | 'compute-b200' | 'leaf-switch' | 'spine-switch';
  gpuCount: number;
  memoryGb: number;
  bandwidthGbps: number;
  temperatureCelsius: number;
  isActive: boolean;
  hasGlow: boolean;
  hasRoceV2Enabled: boolean;
}

export interface GpuFabricLink {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  linkSpeedGbps: number;
  latencyNanoseconds: number;
  isActive: boolean;
  hasAdaptiveRoutingEnabled: boolean;
  utilizationPercent: number;
}

export interface GpuFabricMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  isOptimal: boolean;
  hasAlert: boolean;
}

export interface GpuClusterFabricSlideData extends BaseSlide {
  type: 'gpu-cluster-fabric-interconnect';
  fabricArchitecture: string;
  totalFlopsFormatted: string;
  totalGpuNodes: number;
  interconnectProtocol: 'NVLink-4' | 'InfiniBand-NDR' | 'RoCEv2';
  bisectionBandwidthTbps: number;
  nodes: GpuFabricNode[];
  links: GpuFabricLink[];
  metrics: GpuFabricMetric[];
  hasAdaptiveRoutingEnabled: boolean;
  hasPacketTelemetry: boolean;
}

// =============================================================================
// 2. RAG Needle in a Haystack Benchmark
// =============================================================================

export interface HaystackDepthTest {
  id: string;
  contextLengthTokens: number;
  depthPercent: number;
  retrievalScorePercent: number;
  latencyMs: number;
  isRetrievedSuccessfully: boolean;
  isHighlighted: boolean;
}

export interface HaystackModelComparison {
  id: string;
  modelName: string;
  contextWindowLimit: string;
  averageAccuracy: number;
  isBaseline: boolean;
  isLeadingModel: boolean;
}

export interface HaystackInsight {
  id: string;
  title: string;
  description: string;
  hasSignificantFinding: boolean;
}

export interface RagNeedleHaystackSlideData extends BaseSlide {
  type: 'rag-needle-haystack-benchmark';
  testedDocumentDomain: string;
  contextWindowRange: string;
  needleQuery: string;
  overallRetrievalRate: string;
  matrixResults: HaystackDepthTest[];
  models: HaystackModelComparison[];
  insights: HaystackInsight[];
  hasLaserSweepGlow: boolean;
  hasSyntheticNoise: boolean;
}

// =============================================================================
// 3. eBPF Kernel Telemetry & Observability
// =============================================================================

export interface EbpfProbe {
  id: string;
  probeName: string;
  probeType: 'kprobe' | 'kretprobe' | 'tracepoint' | 'uprobe' | 'xdp';
  subsystem: string;
  eventsPerSecond: number;
  overheadNanoseconds: number;
  isActive: boolean;
  hasRingBufferGlow: boolean;
}

export interface KernelTraceEvent {
  id: string;
  timestampMicroseconds: number;
  syscallName: string;
  processName: string;
  pid: number;
  returnValue: number;
  isAnomaly: boolean;
  hasStackTrace: boolean;
}

export interface TelemetrySummaryPillar {
  id: string;
  title: string;
  metric: string;
  delta: string;
  isHealthy: boolean;
}

export interface EbpfKernelTelemetrySlideData extends BaseSlide {
  type: 'ebpf-kernel-telemetry-observability';
  kernelVersion: string;
  totalCapturedEventsPerSecond: string;
  averageOverheadPercent: string;
  probes: EbpfProbe[];
  recentTraceEvents: KernelTraceEvent[];
  pillars: TelemetrySummaryPillar[];
  hasZeroAllocationVerifier: boolean;
  hasSyscallTracingActive: boolean;
}

// =============================================================================
// 4. AI Inference Token Economics
// =============================================================================

export interface TokenEconomicsTier {
  id: string;
  tierName: string;
  modelFamily: string;
  inputPricePerMillion: number;
  outputPricePerMillion: number;
  ttftP95Ms: number;
  tokensPerSecond: number;
  isCostLeader: boolean;
  isRecommended: boolean;
}

export interface WorkloadCostBreakdown {
  id: string;
  category: string;
  monthlyTokensMillion: number;
  allocatedBudgetUsd: number;
  savingsPercent: number;
  isOptimized: boolean;
}

export interface InferenceEfficiencyMetric {
  id: string;
  label: string;
  value: string;
  target: string;
  isMet: boolean;
}

export interface AiInferenceTokenEconomicsSlideData extends BaseSlide {
  type: 'ai-inference-token-economics';
  primaryModel: string;
  monthlyRunRateUsd: string;
  averageTtftMs: number;
  cacheHitDiscountRate: string;
  tiers: TokenEconomicsTier[];
  costBreakdowns: WorkloadCostBreakdown[];
  efficiencyMetrics: InferenceEfficiencyMetric[];
  hasKvCacheOffloading: boolean;
  hasSpeculativeDecoding: boolean;
}

// =============================================================================
// 5. Micro-Frontend Federation Matrix
// =============================================================================

export interface FederationRemote {
  id: string;
  remoteName: string;
  teamOwner: string;
  exposedModulesCount: number;
  bundleSizeKb: number;
  runtimeStatus: 'healthy' | 'degraded' | 'syncing';
  isSharedSingleton: boolean;
  hasGlow: boolean;
}

export interface SharedDependency {
  id: string;
  packageName: string;
  requiredVersion: string;
  isSingleton: boolean;
  hasVersionMismatch: boolean;
  isStrictVersionEnforced: boolean;
}

export interface FederationBridgeLink {
  id: string;
  sourceRemoteId: string;
  targetRemoteId: string;
  channelType: 'event-bus' | 'shared-store' | 'route-bridge';
  isActive: boolean;
}

export interface MicroFrontendFederationSlideData extends BaseSlide {
  type: 'micro-frontend-federation-matrix';
  hostAppName: string;
  federationFramework: string;
  totalRemotesCount: number;
  sharedLibEfficiencyRatio: string;
  remotes: FederationRemote[];
  sharedDependencies: SharedDependency[];
  bridgeLinks: FederationBridgeLink[];
  hasIsolatedRuntimes: boolean;
  hasZeroBundleDuplication: boolean;
}

// =============================================================================
// 6. Progressive Delivery Canary Gate
// =============================================================================

export interface CanaryTrafficStage {
  id: string;
  stepIndex: number;
  stageName: string;
  trafficPercent: number;
  durationMinutes: number;
  isActive: boolean;
  isCompleted: boolean;
  isVerified: boolean;
}

export interface CanaryMetricGate {
  id: string;
  metricName: string;
  threshold: string;
  currentValue: string;
  sloStatus: 'passing' | 'breached' | 'evaluating';
  isCriticalGate: boolean;
  hasPassed: boolean;
}

export interface RollbackPolicyTrigger {
  id: string;
  triggerCondition: string;
  action: string;
  isArmed: boolean;
}

export interface ProgressiveDeliveryCanarySlideData extends BaseSlide {
  type: 'progressive-delivery-canary-gate';
  releaseVersion: string;
  baselineVersion: string;
  canaryTrafficRampPercent: number;
  gateEvaluationWindow: string;
  stages: CanaryTrafficStage[];
  metricGates: CanaryMetricGate[];
  rollbackTriggers: RollbackPolicyTrigger[];
  hasAutomatedRollback: boolean;
  hasLiveTrafficShift: boolean;
}

// =============================================================================
// 7. Data Mesh Federated Governance
// =============================================================================

export interface DataProductDomain {
  id: string;
  domainName: string;
  domainLead: string;
  dataProductCount: number;
  slasMetPercent: number;
  governanceTier: 'sovereign' | 'federated' | 'regulated';
  isActive: boolean;
  hasAuditCompliance: boolean;
}

export interface DataContractItem {
  id: string;
  contractName: string;
  consumerDomain: string;
  schemaVersion: string;
  isVerified: boolean;
  hasBreakingChangeProtection: boolean;
}

export interface GovernancePolicyRule {
  id: string;
  policyTitle: string;
  enforcementMode: 'automated-ci' | 'runtime-guard' | 'cryptographic-audit';
  isEnforced: boolean;
}

export interface DataMeshFederatedSlideData extends BaseSlide {
  type: 'data-mesh-federated-governance';
  enterpriseScope: string;
  totalDomainsCount: number;
  activeContractsCount: number;
  governanceStandard: string;
  domains: DataProductDomain[];
  contracts: DataContractItem[];
  policies: GovernancePolicyRule[];
  hasFederatedAccessControl: boolean;
  hasAutomatedCatalogSync: boolean;
}

// =============================================================================
// 8. Threat Exposure CTEM Matrix
// =============================================================================

export interface ThreatExposureVector {
  id: string;
  assetCategory: string;
  vectorName: string;
  cveIdentifier: string;
  exploitabilityScore: number;
  blastRadius: 'low' | 'medium' | 'high' | 'critical';
  isRemediated: boolean;
  isUnderActiveAttack: boolean;
  hasGlow: boolean;
}

export interface CtemPhase {
  id: string;
  phaseName: 'scoping' | 'discovery' | 'prioritization' | 'validation' | 'mobilization';
  stepIndex: number;
  progressPercent: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ExposurePillarMetric {
  id: string;
  pillarName: string;
  vulnCount: number;
  mttrHours: number;
  isCompliant: boolean;
}

export interface ThreatExposureCtemSlideData extends BaseSlide {
  type: 'threat-exposure-ctem-matrix';
  targetEnterprisePerimeter: string;
  compositeRiskScore: number;
  totalValidatedExposures: number;
  reductionTrendPercent: string;
  vectors: ThreatExposureVector[];
  phases: CtemPhase[];
  pillarMetrics: ExposurePillarMetric[];
  hasRealtimeTelemetry: boolean;
  hasAutomatedRemediationTicket: boolean;
}

// =============================================================================
// 9. Subsea Cable Global Backbone
// =============================================================================

export interface SubseaCableRoute {
  id: string;
  cableSystemName: string;
  landingPairs: string[];
  lengthKilometers: number;
  capacityTbps: number;
  fiberPairs: number;
  latencyRoundTripMs: number;
  isOperational: boolean;
  hasProtectedRing: boolean;
}

export interface LandingStation {
  id: string;
  cityName: string;
  countryCode: string;
  interconnectCarriers: number;
  latitude: number;
  longitude: number;
  isPrimaryGateway: boolean;
  isActive: boolean;
}

export interface BackboneHealthPillar {
  id: string;
  label: string;
  currentValue: string;
  availabilityPercent: number;
  isOptimal: boolean;
}

export interface SubseaCableGlobalBackboneSlideData extends BaseSlide {
  type: 'subsea-cable-global-backbone';
  globalNetworkName: string;
  totalSubseaCapacityTbps: number;
  activeLandingStations: number;
  averageCrossOceanLatency: string;
  cableRoutes: SubseaCableRoute[];
  landingStations: LandingStation[];
  healthPillars: BackboneHealthPillar[];
  hasGeoRedundantRouting: boolean;
  hasRealtimeFiberMonitoring: boolean;
}

// =============================================================================
// 10. Multi-Agent Reflection & Deliberation
// =============================================================================

export interface AgentDeliberationNode {
  id: string;
  agentRole: string;
  agentSpecialization: string;
  modelEngine: string;
  confidenceScorePercent: number;
  critiqueIterations: number;
  isActive: boolean;
  isConsensusAgreed: boolean;
  hasGlow: boolean;
}

export interface DeliberationExchange {
  id: string;
  sourceAgentId: string;
  targetAgentId: string;
  exchangeType: 'proposal' | 'critique' | 'refinement' | 'consensus-signoff';
  summaryContent: string;
  roundNumber: number;
  isVerified: boolean;
}

export interface ConsensusVerdictItem {
  id: string;
  verdictClause: string;
  majorityRatio: string;
  isApproved: boolean;
}

export interface MultiAgentReflectionSlideData extends BaseSlide {
  type: 'multi-agent-reflection-deliberation';
  orchestrationFramework: string;
  taskObjective: string;
  totalDeliberationRounds: number;
  consensusConvergenceScore: string;
  agents: AgentDeliberationNode[];
  exchanges: DeliberationExchange[];
  verdicts: ConsensusVerdictItem[];
  hasReflectionLoopActive: boolean;
  hasMonadicResultValidation: boolean;
}

// =============================================================================
// 11. Semantic Cache Hit Topology
// =============================================================================

export interface SemanticCacheCluster {
  id: string;
  clusterLabel: string;
  embeddingDimension: number;
  centroidDistance: number;
  hitRatePercent: number;
  sampleQueries: string[];
  isActive: boolean;
  hasNearExactMatch: boolean;
}

export interface SemanticThresholdTier {
  id: string;
  cosineThreshold: number;
  recallPrecisionRatio: string;
  falsePositiveRatePercent: number;
  isRecommendedThreshold: boolean;
}

export interface CacheTelemetryCard {
  id: string;
  metricTitle: string;
  displayValue: string;
  bandwidthSavedFormatted: string;
  isPositivePerformance: boolean;
}

export interface SemanticCacheHitSlideData extends BaseSlide {
  type: 'semantic-cache-hit-topology';
  vectorStoreEngine: string;
  embeddingModel: string;
  globalCacheHitRatio: string;
  medianLookupLatencyMs: number;
  clusters: SemanticCacheCluster[];
  thresholds: SemanticThresholdTier[];
  telemetryCards: CacheTelemetryCard[];
  hasAdaptiveThresholding: boolean;
  hasExactMatchBypass: boolean;
}

// =============================================================================
// 12. SaaS Net Revenue Retention (NRR) Cohort
// =============================================================================

export interface CohortRetentionItem {
  id: string;
  cohortQuarter: string;
  startingArrFormatted: string;
  expansionArrFormatted: string;
  churnArrFormatted: string;
  endingArrFormatted: string;
  nrrPercent: number;
  isExpansionPositive: boolean;
  isLeadingCohort: boolean;
}

export interface CustomerTierSegment {
  id: string;
  tierName: string;
  accountCount: number;
  averageArrFormatted: string;
  nrrRate: number;
  hasHighExpansionVelocity: boolean;
}

export interface RetentionDriverItem {
  id: string;
  driverCategory: string;
  impactBps: number;
  isGrowthDriver: boolean;
}

export interface SaasNetRevenueRetentionSlideData extends BaseSlide {
  type: 'saas-net-revenue-retention-cohort';
  reportingPeriod: string;
  blendedNrrPercent: number;
  grossRetentionRatePercent: number;
  expansionVelocityTrend: string;
  cohorts: CohortRetentionItem[];
  segments: CustomerTierSegment[];
  drivers: RetentionDriverItem[];
  hasCohortDecomposition: boolean;
  hasBenchmarkOutperformance: boolean;
}

// =============================================================================
// 13. Confidential MPC Key Vault
// =============================================================================

export interface MpcKeyShard {
  id: string;
  shardIndex: number;
  nodeName: string;
  enclaveType: 'intel-sgx' | 'amd-sev-snp' | 'aws-nitro';
  jurisdiction: string;
  isAttested: boolean;
  isOnline: boolean;
  hasGlow: boolean;
}

export interface ThresholdQuorumPolicy {
  id: string;
  thresholdM: number;
  totalN: number;
  ellipticCurve: string;
  isQuorumSatisfied: boolean;
  isSecurityStandardFips140_3: boolean;
}

export interface CryptographicAuditEntry {
  id: string;
  operationType: 'key-gen' | 'partial-sign' | 'shard-refresh' | 'revocation';
  sessionHash: string;
  latencyMs: number;
  isSuccess: boolean;
}

export interface ConfidentialMpcKeyVaultSlideData extends BaseSlide {
  type: 'confidential-mpc-key-vault';
  vaultSystemName: string;
  thresholdScheme: string;
  totalKeySharesCount: number;
  attestationStatus: 'fully-attested' | 'refreshing' | 'healthy';
  keyShards: MpcKeyShard[];
  quorumPolicy: ThresholdQuorumPolicy;
  auditLog: CryptographicAuditEntry[];
  hasZeroKnowledgeProof: boolean;
  hasEnclaveIsolation: boolean;
}

// =============================================================================
// 14. Developer Friction & DX Telemetry
// =============================================================================

export interface DxFrictionFrictionPoint {
  id: string;
  workflowStage: string;
  painPointDescription: string;
  weeklyHoursLost: number;
  frictionSeverity: 'low' | 'medium' | 'high' | 'critical';
  isRemediated: boolean;
  hasActiveAutomation: boolean;
}

export interface DxTelemetryMetric {
  id: string;
  metricName: string;
  currentP95Value: string;
  targetP95Value: string;
  isTargetMet: boolean;
  hasPositiveTrend: boolean;
}

export interface ToolchainLatencyBreakdown {
  id: string;
  toolName: string;
  executionSeconds: number;
  cacheHitPercent: number;
  isBottleneck: boolean;
}

export interface DeveloperFrictionDxSlideData extends BaseSlide {
  type: 'developer-friction-dx-telemetry';
  engineeringOrganization: string;
  totalDeveloperCount: number;
  compositeDxScore: number;
  estimatedAnnualHoursRecoverable: string;
  frictionPoints: DxFrictionFrictionPoint[];
  metrics: DxTelemetryMetric[];
  toolchains: ToolchainLatencyBreakdown[];
  hasLocalCacheAcceleration: boolean;
  hasDeveloperSentimentTracking: boolean;
}

// =============================================================================
// 15. Boardroom M&A Synergy Realization
// =============================================================================

export interface SynergyPillar {
  id: string;
  pillarName: string;
  synergyType: 'cost' | 'revenue' | 'technology' | 'go-to-market';
  targetValueUsd: string;
  realizedValueUsd: string;
  realizationPercent: number;
  isOnTrack: boolean;
  hasExecutiveSponsorship: boolean;
}

export interface IntegrationMilestone {
  id: string;
  milestoneTitle: string;
  dayTarget: number;
  workstreamOwner: string;
  isCompleted: boolean;
  isActive: boolean;
  hasRegulatoryApproval: boolean;
}

export interface ExecutiveSynergyRisk {
  id: string;
  riskFactor: string;
  mitigationPlan: string;
  severity: 'manageable' | 'elevated' | 'severe';
  isMitigated: boolean;
}

export interface BoardroomMaSynergySlideData extends BaseSlide {
  type: 'boardroom-m-and-a-synergy-realization';
  transactionCodename: string;
  targetClosingDate: string;
  totalSynergyTargetUsd: string;
  currentRunRateSynergyUsd: string;
  integrationDayCount: number;
  pillars: SynergyPillar[];
  milestones: IntegrationMilestone[];
  risks: ExecutiveSynergyRisk[];
  hasBoardApproval: boolean;
  hasQuarterlyAuditSignoff: boolean;
}

// =============================================================================
// Kinetic Revolution Discriminated Union Aggregates
// =============================================================================

export type KineticRevolutionSlideData =
  | GpuClusterFabricSlideData
  | RagNeedleHaystackSlideData
  | EbpfKernelTelemetrySlideData
  | AiInferenceTokenEconomicsSlideData
  | MicroFrontendFederationSlideData
  | ProgressiveDeliveryCanarySlideData
  | DataMeshFederatedSlideData
  | ThreatExposureCtemSlideData
  | SubseaCableGlobalBackboneSlideData
  | MultiAgentReflectionSlideData
  | SemanticCacheHitSlideData
  | SaasNetRevenueRetentionSlideData
  | ConfidentialMpcKeyVaultSlideData
  | DeveloperFrictionDxSlideData
  | BoardroomMaSynergySlideData;
