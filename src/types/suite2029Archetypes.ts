// lint-allow: file-size reason="Suite 2029 slide archetype contracts and type definitions" max=600
import type { BaseSlide } from './presentation';

// Discriminated Union Types for Suite 2029 (Chapter 47)

export const SUITE_2029_STEP_SLIDE_TYPES = [
  'speculative-decoding-inference-engine', 'autonomous-agent-swarm-consensus-loop',
  'distributed-consensus-state-replication', 'quantum-resistant-key-exchange-stepper',
  'realtime-crossborder-settlement-fabric', 'ebpf-kernel-telemetry-anomaly-flow',
  'rag-continuous-knowledge-distillation-loop', 'confidential-compute-attestation-pipeline',
  'high-frequency-order-book-matcher',
] as const;

export const SUITE_2029_FLAT_SLIDE_TYPES = [
  'autonomous-agent-fleet-ops-center', 'post-quantum-crypto-migration-radar',
  'global-sovereign-cloud-geopolitical-risk-matrix', 'zero-trust-identity-mesh-topology',
  'ai-model-safety-alignment-radar', 'finops-unit-economics-command-deck',
] as const;

export const SUITE_2029_SLIDE_TYPES = [
  ...SUITE_2029_STEP_SLIDE_TYPES,
  ...SUITE_2029_FLAT_SLIDE_TYPES,
] as const;

export type Suite2029StepSlideType = (typeof SUITE_2029_STEP_SLIDE_TYPES)[number];
export type Suite2029FlatSlideType = (typeof SUITE_2029_FLAT_SLIDE_TYPES)[number];
export type Suite2029SlideType = (typeof SUITE_2029_SLIDE_TYPES)[number];

// Specification Aliases
export type GlobalPptSuite2029SlideType = Suite2029SlideType;

// 1. Kinetic 4-Step: speculative-decoding-inference-engine

export interface SpeculativeDraftNode {
  id: string;
  tokenText: string;
  draftProbability: number;
  targetProbability: number;
  isAccepted: boolean;
  hasAttentionBranch: boolean;
}

export interface SpeculativeDecodingStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  latencyMs: number;
  throughputTokensPerSec: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface SpeculativeDecodingInferenceEngineSlideData extends BaseSlide {
  type: 'speculative-decoding-inference-engine';
  engineIdentifier: string;
  speedupFactor: number;
  acceptanceRatePercentage: number;
  leadArchitect: string;
  leadRole: string;
  decodingStages: SpeculativeDecodingStage[];
  draftNodes: SpeculativeDraftNode[];
  isDraftModelAccelerated: boolean;
  hasTreeAttentionActive: boolean;
  hasDynamicDraftLength: boolean;
  hasTelemetryGlow: boolean;
}

// 2. Kinetic 4-Step: autonomous-agent-swarm-consensus-loop

export interface SwarmAgentPeer {
  id: string;
  agentRole: string;
  confidenceScorePercentage: number;
  voteWeight: number;
  isConsensusAgreed: boolean;
  hasDialecticCritique: boolean;
}

export interface SwarmConsensusStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  agentsParticipatingCount: number;
  convergenceScorePercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface AutonomousAgentSwarmConsensusLoopSlideData extends BaseSlide {
  type: 'autonomous-agent-swarm-consensus-loop';
  swarmIdentifier: string;
  quorumThresholdPercentage: number;
  totalAgentsCount: number;
  leadArchitect: string;
  leadRole: string;
  consensusStages: SwarmConsensusStage[];
  peerAgents: SwarmAgentPeer[];
  isQuorumAchieved: boolean;
  hasByzantineFaultTolerance: boolean;
  hasDialecticDeliberation: boolean;
  hasTelemetryGlow: boolean;
}

// 3. Kinetic 4-Step: distributed-consensus-state-replication

export interface ReplicatedRaftNode {
  id: string;
  nodeName: string;
  nodeRole: 'leader' | 'follower' | 'candidate';
  currentTerm: number;
  lastLogIndex: number;
  commitIndex: number;
  isQuorumParticipant: boolean;
  hasHeartbeatGlow: boolean;
}

export interface ReplicationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  replicationLatencyMs: number;
  majorityNodesConfirmed: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface DistributedConsensusStateReplicationSlideData extends BaseSlide {
  type: 'distributed-consensus-state-replication';
  clusterIdentifier: string;
  consensusProtocol: string;
  activeTerm: number;
  leadArchitect: string;
  leadRole: string;
  replicationStages: ReplicationStage[];
  clusterNodes: ReplicatedRaftNode[];
  isLeaderElected: boolean;
  hasQuorumAcks: boolean;
  hasSplitBrainPrevention: boolean;
  hasTelemetryGlow: boolean;
}

// 4. Kinetic 4-Step: quantum-resistant-key-exchange-stepper

export interface LatticeVectorParameter {
  id: string;
  parameterName: string;
  securityCategory: number;
  publicKeySizeBytes: number;
  ciphertextSizeBytes: number;
  isNistStandardized: boolean;
  hasFipsApproval: boolean;
}

export interface KeyExchangeStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  operationTimeMicroseconds: number;
  entropyBits: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface QuantumResistantKeyExchangeStepperSlideData extends BaseSlide {
  type: 'quantum-resistant-key-exchange-stepper';
  algorithmStandard: string;
  sessionIdentifier: string;
  classicalHybridFallback: string;
  leadArchitect: string;
  leadRole: string;
  keyExchangeStages: KeyExchangeStage[];
  latticeParameters: LatticeVectorParameter[];
  isHybridModeActive: boolean;
  hasNistFips203Compliance: boolean;
  hasHardwareAccelerationActive: boolean;
  hasTelemetryGlow: boolean;
}

// 5. Kinetic 4-Step: realtime-crossborder-settlement-fabric

export interface CurrencySettlementPair {
  id: string;
  sourceCurrency: string;
  targetCurrency: string;
  exchangeRate: number;
  liquidityReserveMillion: number;
  isEscrowLocked: boolean;
  hasInstantSettlementReady: boolean;
}

export interface SettlementStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  settlementLatencySec: number;
  complianceChecksPassed: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface RealtimeCrossborderSettlementFabricSlideData extends BaseSlide {
  type: 'realtime-crossborder-settlement-fabric';
  fabricIdentifier: string;
  dailyVolumeBillionUsd: number;
  settlementSpeedSeconds: number;
  leadArchitect: string;
  leadRole: string;
  settlementStages: SettlementStage[];
  currencyPairs: CurrencySettlementPair[];
  isAtomicSettlementGuaranteed: boolean;
  hasIso20022Compliance: boolean;
  hasPvpEscrowActive: boolean;
  hasTelemetryGlow: boolean;
}

// 6. Kinetic 4-Step: ebpf-kernel-telemetry-anomaly-flow

export interface EbpfProbeHook {
  id: string;
  hookType: 'kprobe' | 'kretprobe' | 'tracepoint' | 'raw_tracepoint' | 'xdp';
  kernelSymbol: string;
  eventsPerSecond: number;
  cpuOverheadPercentage: number;
  isJitCompiled: boolean;
  hasRingBufferStreamActive: boolean;
}

export interface EbpfTelemetryStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  samplingRateHz: number;
  kernelEventsProcessedPerSec: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface EbpfKernelTelemetryAnomalyFlowSlideData extends BaseSlide {
  type: 'ebpf-kernel-telemetry-anomaly-flow';
  clusterNodeName: string;
  kernelVersion: string;
  anomaliesDetectedCount: number;
  leadArchitect: string;
  leadRole: string;
  telemetryStages: EbpfTelemetryStage[];
  probeHooks: EbpfProbeHook[];
  isKernelVerifierApproved: boolean;
  hasZeroCopyRingBuffer: boolean;
  hasAnomalyAutoIsolation: boolean;
  hasTelemetryGlow: boolean;
}

// 7. Kinetic 4-Step: rag-continuous-knowledge-distillation-loop

export interface KnowledgeCorpusChunk {
  id: string;
  sourceDocument: string;
  tokenCount: number;
  embeddingModel: string;
  similarityScore: number;
  isIndexEmbedded: boolean;
  hasDistillationSampled: boolean;
}

export interface DistillationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  corpusDocumentsIndexedCount: number;
  factualConsistencyScore: number;
  isActive: boolean;
  isCompleted: boolean;
}

export type Suite2029DistillationStage = DistillationStage;

export interface RagContinuousKnowledgeDistillationLoopSlideData extends BaseSlide {
  type: 'rag-continuous-knowledge-distillation-loop';
  distillationLoopId: string;
  edgeModelParameterCount: string;
  frontierTeacherModel: string;
  leadArchitect: string;
  leadRole: string;
  distillationStages: DistillationStage[];
  corpusChunks: KnowledgeCorpusChunk[];
  isHybridSearchActive: boolean;
  hasContinuousDistillation: boolean;
  hasHallucinationGatePassed: boolean;
  hasTelemetryGlow: boolean;
}

// 8. Kinetic 4-Step: confidential-compute-attestation-pipeline

export interface EnclavePcrDigest {
  id: string;
  pcrRegisterIndex: number;
  digestHashSha384: string;
  componentMeasured: string;
  isHardwareVerified: boolean;
  hasZeroTaint: boolean;
}

export interface AttestationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  verificationLatencyMs: number;
  securityBitsEnforced: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ConfidentialComputeAttestationPipelineSlideData extends BaseSlide {
  type: 'confidential-compute-attestation-pipeline';
  enclaveIdentifier: string;
  hardwareArchitecture: string;
  attestationVerifierDomain: string;
  leadArchitect: string;
  leadRole: string;
  attestationStages: AttestationStage[];
  pcrDigests: EnclavePcrDigest[];
  isEnclaveMemoryEncrypted: boolean;
  hasHardwareRootOfTrust: boolean;
  hasRemoteAttestationVerified: boolean;
  hasTelemetryGlow: boolean;
}

// 9. Kinetic 4-Step: high-frequency-order-book-matcher

export interface OrderBookLevel {
  id: string;
  side: 'bid' | 'ask';
  price: number;
  quantityLots: number;
  orderCount: number;
  isInsideMarket: boolean;
  hasActiveExecution: boolean;
}

export interface MatchingStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  tickLatencyNanoseconds: number;
  ordersProcessedPerSec: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface HighFrequencyOrderBookMatcherSlideData extends BaseSlide {
  type: 'high-frequency-order-book-matcher';
  tradingPair: string;
  engineInstance: string;
  p99LatencyNanoseconds: number;
  leadArchitect: string;
  leadRole: string;
  matchingStages: MatchingStage[];
  bookLevels: OrderBookLevel[];
  isFpgaAccelerated: boolean;
  hasZeroSlippageExecution: boolean;
  hasMulticastDissemination: boolean;
  hasTelemetryGlow: boolean;
}

// 10. Flat Sovereign: autonomous-agent-fleet-ops-center

export interface AgentFleetClusterStatus {
  id: string;
  clusterRegion: string;
  activeAgentsCount: number;
  healthyAgentsPercentage: number;
  averageResponseLatencyMs: number;
  isAutoScalingActive: boolean;
  hasKillSwitchArmReady: boolean;
}

export interface AutonomousAgentFleetOpsCenterSlideData extends BaseSlide {
  type: 'autonomous-agent-fleet-ops-center';
  totalActiveAgentsCount: number;
  fleetUptimePercentage: number;
  safetyInterventionRatePercentage: number;
  tokensConsumedBillions: number;
  leadArchitect: string;
  leadRole: string;
  fleetClusters: AgentFleetClusterStatus[];
  isFleetOperational: boolean;
  hasLiveHeartbeatFeed: boolean;
  hasAutomatedKillSwitch: boolean;
  hasTelemetryGlow: boolean;
}

// 11. Flat Sovereign: post-quantum-crypto-migration-radar

export interface CryptoMigrationAsset {
  id: string;
  assetCategory: 'TLS Endpoints' | 'VPN Gateways' | 'PKI Certificates' | 'Hardware HSMs';
  legacyAlgorithm: string;
  targetPqcAlgorithm: string;
  migrationProgressPercentage: number;
  targetCompletionYear: number;
  isNistCompliant: boolean;
  hasAutomatedValidation: boolean;
}

export interface PostQuantumCryptoMigrationRadarSlideData extends BaseSlide {
  type: 'post-quantum-crypto-migration-radar';
  totalCryptographicAssetsCount: number;
  overallPqcReadinessPercentage: number;
  nistMandateDeadlineYear: number;
  leadArchitect: string;
  leadRole: string;
  cryptoAssets: CryptoMigrationAsset[];
  isMigrationOnTrack: boolean;
  hasAutomatedDiscovery: boolean;
  hasHybridDualCertificates: boolean;
  hasTelemetryGlow: boolean;
}

// 12. Flat Sovereign: global-sovereign-cloud-geopolitical-risk-matrix

export interface SovereignCloudJurisdiction {
  id: string;
  regionName: string;
  sovereigntyIndexScore: number;
  extraterritorialShieldingLevel: 'Complete' | 'High' | 'Partial' | 'Evaluating';
  isKeyLocalizationEnforced: boolean;
  keyLocalizationEnforced?: boolean;
  isAirGappedPartitionAvailable: boolean;
  hasLocalOperationsMandate: boolean;
}

export interface GlobalSovereignCloudGeopoliticalRiskMatrixSlideData extends BaseSlide {
  type: 'global-sovereign-cloud-geopolitical-risk-matrix';
  evaluatedJurisdictionsCount: number;
  averageSovereigntyScore: number;
  fisaShieldingEnforcedPercentage: number;
  leadArchitect: string;
  leadRole: string;
  jurisdictions: SovereignCloudJurisdiction[];
  isSovereigntyCompliant: boolean;
  hasZeroForeignAccessEscrow: boolean;
  hasNationalKeyManagement: boolean;
  hasTelemetryGlow: boolean;
}

// 13. Flat Sovereign: zero-trust-identity-mesh-topology

export interface SpireWorkloadNode {
  id: string;
  serviceName: string;
  spiffeId: string;
  trustDomain: string;
  mtlsHandshakeDurationMs: number;
  isAttested: boolean;
  hasValidSvid: boolean;
}

export interface ZeroTrustIdentityMeshTopologySlideData extends BaseSlide {
  type: 'zero-trust-identity-mesh-topology';
  meshIdentifier: string;
  totalAttestedWorkloadsCount: number;
  mtlsEncryptionRatePercentage: number;
  averageSvidLifetimeHours: number;
  leadArchitect: string;
  leadRole: string;
  workloadNodes: SpireWorkloadNode[];
  isSpiffeCompliant: boolean;
  hasContinuousMtls: boolean;
  hasPostureEvaluationActive: boolean;
  hasTelemetryGlow: boolean;
}

// 14. Flat Sovereign: ai-model-safety-alignment-radar

export interface SafetyEvaluationAxis {
  id: string;
  axisName: string;
  benchmarkScorePercentage: number;
  thresholdScorePercentage: number;
  evaluationMethodology: string;
  isStandardPassed: boolean;
  hasZeroKnownExploits: boolean;
}

export interface AiModelSafetyAlignmentRadarSlideData extends BaseSlide {
  type: 'ai-model-safety-alignment-radar';
  modelIdentifier: string;
  overallSafetyIndex: number;
  alignmentTaxPercentage: number;
  leadArchitect: string;
  leadRole: string;
  safetyAxes: SafetyEvaluationAxis[];
  isAlignmentPassed: boolean;
  hasAutomatedRedTeaming: boolean;
  hasOutputGuardrailActive: boolean;
  hasTelemetryGlow: boolean;
}

// 15. Flat Sovereign: finops-unit-economics-command-deck

export interface GpuClusterUnitCost {
  id: string;
  hardwarePool: string;
  utilizationEfficiencyPercentage: number;
  costPerMillionTokensUsd: number;
  spotArbitrageSavingsPercentage: number;
  isTargetEfficiencyAchieved: boolean;
  hasAutoDownscalingActive: boolean;
}

export interface FinopsUnitEconomicsCommandDeckSlideData extends BaseSlide {
  type: 'finops-unit-economics-command-deck';
  blendedCostPerMillionTokensUsd: number;
  gpuClusterUtilizationPercentage: number;
  monthlyArbitrageSavingsMillionUsd: number;
  grossMarginPercentage: number;
  leadArchitect: string;
  leadRole: string;
  gpuPools: GpuClusterUnitCost[];
  isTargetMarginAchieved: boolean;
  hasSpotArbitrageEnabled: boolean;
  hasAutomatedDownscaling: boolean;
  hasTelemetryGlow: boolean;
}

// Aggregated Unions & Type Guards

export type Suite2029StepSlideData =
  | SpeculativeDecodingInferenceEngineSlideData | AutonomousAgentSwarmConsensusLoopSlideData
  | DistributedConsensusStateReplicationSlideData | QuantumResistantKeyExchangeStepperSlideData
  | RealtimeCrossborderSettlementFabricSlideData | EbpfKernelTelemetryAnomalyFlowSlideData
  | RagContinuousKnowledgeDistillationLoopSlideData | ConfidentialComputeAttestationPipelineSlideData
  | HighFrequencyOrderBookMatcherSlideData;

export type Suite2029FlatSlideData =
  | AutonomousAgentFleetOpsCenterSlideData | PostQuantumCryptoMigrationRadarSlideData
  | GlobalSovereignCloudGeopoliticalRiskMatrixSlideData | ZeroTrustIdentityMeshTopologySlideData
  | AiModelSafetyAlignmentRadarSlideData | FinopsUnitEconomicsCommandDeckSlideData;

export type Suite2029SlideData = Suite2029StepSlideData | Suite2029FlatSlideData;
export type GlobalPptSuite2029SlideData = Suite2029SlideData;

export const SUITE_2029_STAGE_KEYS: Record<string, string> = {
  'speculative-decoding-inference-engine': 'decodingStages',
  'autonomous-agent-swarm-consensus-loop': 'consensusStages',
  'distributed-consensus-state-replication': 'replicationStages',
  'quantum-resistant-key-exchange-stepper': 'keyExchangeStages',
  'realtime-crossborder-settlement-fabric': 'settlementStages',
  'ebpf-kernel-telemetry-anomaly-flow': 'telemetryStages',
  'rag-continuous-knowledge-distillation-loop': 'distillationStages',
  'confidential-compute-attestation-pipeline': 'attestationStages',
  'high-frequency-order-book-matcher': 'matchingStages',
};

export function isSuite2029StepSlideType(type: string): type is Suite2029StepSlideType {
  return (SUITE_2029_STEP_SLIDE_TYPES as readonly string[]).includes(type);
}

export function isSuite2029FlatSlideType(type: string): type is Suite2029FlatSlideType {
  return (SUITE_2029_FLAT_SLIDE_TYPES as readonly string[]).includes(type);
}

export function isSuite2029SlideType(type: string): type is Suite2029SlideType {
  return isSuite2029StepSlideType(type) || isSuite2029FlatSlideType(type);
}

export function isSuite2029Slide(slide: unknown): slide is Suite2029SlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2029_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isSuite2029StepSlide(slide: unknown): slide is Suite2029StepSlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2029_STEP_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isSuite2029FlatSlide(slide: unknown): slide is Suite2029FlatSlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2029_FLAT_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isGlobalPptSuite2029Slide(slide: unknown): slide is GlobalPptSuite2029SlideData {
  return isSuite2029Slide(slide);
}

export function calculateSuite2029StepCount(slide: Suite2029SlideData | any): number {
  if (!slide || typeof slide !== 'object') return 1;
  const stageKey = SUITE_2029_STAGE_KEYS[slide.type];
  if (!stageKey) return 1;
  const stages = slide[stageKey];
  return Math.max(Array.isArray(stages) ? stages.length : 4, 1);
}

export function calculateGlobalPptSuite2029StepCount(slide: GlobalPptSuite2029SlideData): number {
  return calculateSuite2029StepCount(slide);
}

export function getSuite2029SlideStepCount(slide: unknown): number {
  if (!isSuite2029Slide(slide)) return 0;
  return calculateSuite2029StepCount(slide);
}
