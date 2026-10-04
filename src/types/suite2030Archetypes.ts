// lint-allow: file-size reason="Suite 2030 slide archetype contracts and type definitions" max=650
import type { BaseSlide } from './presentation';

// Discriminated Union Types for Suite 2030 (Chapter 48)

export const SUITE_2030_STEP_SLIDE_TYPES = [
  'neuromorphic-spiking-neural-mesh',
  'quantum-annealing-portfolio-optimizer',
  'autonomous-synthetic-data-foundry',
  'zero-knowledge-rollup-prover-cluster',
  'photonic-interconnect-optical-mesh',
  'decentralized-oracle-consensus-spine',
  'ebpf-cloud-native-ddos-shield',
  'enterprise-rag-graph-hybrid-traversal',
  'continuous-ai-agent-eval-harness',
] as const;

export const SUITE_2030_FLAT_SLIDE_TYPES = [
  'hyperscale-datacenter-liquid-cooling-telemetry',
  'global-sovereign-ai-compute-reserve-grid',
  'post-quantum-pki-certificate-hierarchy-radar',
  'zero-trust-cloud-workload-entitlement-graph',
  'frontier-multimodal-alignment-matrix',
  'enterprise-saas-efficiency-rule-of-40-quadrant',
] as const;

export const SUITE_2030_SLIDE_TYPES = [
  ...SUITE_2030_STEP_SLIDE_TYPES,
  ...SUITE_2030_FLAT_SLIDE_TYPES,
] as const;

export type Suite2030StepSlideType = (typeof SUITE_2030_STEP_SLIDE_TYPES)[number];
export type Suite2030FlatSlideType = (typeof SUITE_2030_FLAT_SLIDE_TYPES)[number];
export type Suite2030SlideType = (typeof SUITE_2030_SLIDE_TYPES)[number];

// Specification Aliases
export type GlobalPptSuite2030SlideType = Suite2030SlideType;

// 1. Kinetic 4-Step: neuromorphic-spiking-neural-mesh

export interface SpikingNeuronNode {
  id: string;
  layerName: string;
  membranePotentialMv: number;
  thresholdPotentialMv: number;
  synapticWeight: number;
  isSpikeFired: boolean;
  hasPlasticityReinforced: boolean;
}

export interface SpikingStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  synapticEventCount: number;
  energyJoulesPerSpikePj: number;
  isActive: boolean;
  isCompleted: boolean;
}

export type Suite2030SpikingStage = SpikingStage;

export interface NeuromorphicSpikingNeuralMeshSlideData extends BaseSlide {
  type: 'neuromorphic-spiking-neural-mesh';
  meshIdentifier: string;
  totalSynapseCountMillion: number;
  energyEfficiencyFactor: number;
  leadArchitect: string;
  leadRole: string;
  spikingStages: SpikingStage[];
  neuronNodes: SpikingNeuronNode[];
  isSpikeThresholdExceeded: boolean;
  hasSynapticPlasticityActive: boolean;
  hasMembraneDecayEnabled: boolean;
  hasTelemetryGlow: boolean;
}

// 2. Kinetic 4-Step: quantum-annealing-portfolio-optimizer

export interface QuantumAnnealingAssetNode {
  id: string;
  ticker: string;
  allocationWeightPercentage: number;
  expectedReturnPercentage: number;
  qubitCouplingStrength: number;
  isQubitAssigned: boolean;
  hasCardinalitySelected: boolean;
}

export interface AnnealingStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  transverseFieldEnergyGhz: number;
  hamiltonianEnergyScore: number;
  isActive: boolean;
  isCompleted: boolean;
}

export type Suite2030AnnealingStage = AnnealingStage;

export interface QuantumAnnealingPortfolioOptimizerSlideData extends BaseSlide {
  type: 'quantum-annealing-portfolio-optimizer';
  optimizerIdentifier: string;
  totalQubitsCount: number;
  sharpeRatioOptimal: number;
  leadArchitect: string;
  leadRole: string;
  annealingStages: AnnealingStage[];
  assetNodes: QuantumAnnealingAssetNode[];
  isGlobalMinimumFound: boolean;
  hasTunnelingActive: boolean;
  hasQuboConstraintSatisfied: boolean;
  hasTelemetryGlow: boolean;
}

// 3. Kinetic 4-Step: autonomous-synthetic-data-foundry

export interface SyntheticDatasetSlice {
  id: string;
  modalityType: string;
  sampleCountThousands: number;
  fidelityScorePercentage: number;
  divergenceScore: number;
  isCurated: boolean;
  hasDifferentialPrivacyPassed: boolean;
}

export interface FoundryStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  samplesGeneratedThousands: number;
  filterPassRatePercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export type Suite2030FoundryStage = FoundryStage;

export interface AutonomousSyntheticDataFoundrySlideData extends BaseSlide {
  type: 'autonomous-synthetic-data-foundry';
  foundryIdentifier: string;
  totalGeneratedTokensBillion: number;
  epsilonPrivacyBudget: number;
  leadArchitect: string;
  leadRole: string;
  foundryStages: FoundryStage[];
  datasetSlices: SyntheticDatasetSlice[];
  isDifferentialPrivacyPreserved: boolean;
  hasFidelityTargetMet: boolean;
  hasAutomatedCurationEnabled: boolean;
  hasTelemetryGlow: boolean;
}

// 4. Kinetic 4-Step: zero-knowledge-rollup-prover-cluster

export interface ZkProverNode {
  id: string;
  hardwareType: string;
  proofCircuitName: string;
  batchCapacityTps: number;
  witnessLatencyMs: number;
  isProvingActive: boolean;
  hasProofVerified: boolean;
}

export interface ProverStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  transactionsCompressedCount: number;
  circuitConstraintsMillion: number;
  isActive: boolean;
  isCompleted: boolean;
}

export type Suite2030ProverStage = ProverStage;

export interface ZeroKnowledgeRollupProverClusterSlideData extends BaseSlide {
  type: 'zero-knowledge-rollup-prover-cluster';
  clusterIdentifier: string;
  settlementThroughputTps: number;
  compressionRatioMultiplier: number;
  leadArchitect: string;
  leadRole: string;
  proverStages: ProverStage[];
  proverNodes: ZkProverNode[];
  isProofRecursivelyAggregated: boolean;
  hasWitnessGenerationComplete: boolean;
  hasL1SettlementVerified: boolean;
  hasTelemetryGlow: boolean;
}

// 5. Kinetic 4-Step: photonic-interconnect-optical-mesh

export interface OpticalChannelNode {
  id: string;
  wavelengthNanometers: number;
  bandwidthGigabitsPerSec: number;
  attenuationDecibels: number;
  bitErrorRateExponent: number;
  isChannelCalibrated: boolean;
  hasWdmMultiplexed: boolean;
}

export interface OpticalStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  totalMeshBandwidthPbps: number;
  opticalSwitchLatencyNs: number;
  isActive: boolean;
  isCompleted: boolean;
}

export type Suite2030OpticalStage = OpticalStage;

export interface PhotonicInterconnectOpticalMeshSlideData extends BaseSlide {
  type: 'photonic-interconnect-optical-mesh';
  meshIdentifier: string;
  totalOpticalBandwidthPbps: number;
  laserWavelengthCount: number;
  leadArchitect: string;
  leadRole: string;
  opticalStages: OpticalStage[];
  opticalChannels: OpticalChannelNode[];
  isOpticalSwitchAligned: boolean;
  hasWavelengthMultiplexingActive: boolean;
  hasZeroPacketLossMaintained: boolean;
  hasTelemetryGlow: boolean;
}

// 6. Kinetic 4-Step: decentralized-oracle-consensus-spine

export interface OracleSignerNode {
  id: string;
  nodeOperator: string;
  reportedDataValue: number;
  reputationScorePercentage: number;
  responseTimeMs: number;
  isSignatureSubmitted: boolean;
  hasOutlierPruned: boolean;
}

export interface OracleStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  nodesParticipatingCount: number;
  consensusConfidencePercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export type Suite2030OracleStage = OracleStage;

export interface DecentralizedOracleConsensusSpineSlideData extends BaseSlide {
  type: 'decentralized-oracle-consensus-spine';
  spineIdentifier: string;
  activeDataFeedName: string;
  aggregatedMedianValue: number;
  leadArchitect: string;
  leadRole: string;
  oracleStages: OracleStage[];
  signerNodes: OracleSignerNode[];
  isThresholdSignatureAchieved: boolean;
  hasOutlierTruncated: boolean;
  hasHeartbeatVerified: boolean;
  hasTelemetryGlow: boolean;
}

// 7. Kinetic 4-Step: ebpf-cloud-native-ddos-shield

export interface DdosFilterRuleNode {
  id: string;
  ruleVector: string;
  packetRateDroppedMpps: number;
  mitigationProtocol: string;
  isFilterActive: boolean;
  hasZeroCopyBypassed: boolean;
}

export interface ShieldStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  attackTrafficVolumeTbps: number;
  mitigatedTrafficVolumeTbps: number;
  isActive: boolean;
  isCompleted: boolean;
}

export type Suite2030ShieldStage = ShieldStage;

export interface EbpfCloudNativeDdosShieldSlideData extends BaseSlide {
  type: 'ebpf-cloud-native-ddos-shield';
  shieldIdentifier: string;
  peakAttackVolumeTbps: number;
  xdpDropRateMpps: number;
  leadArchitect: string;
  leadRole: string;
  shieldStages: ShieldStage[];
  filterRules: DdosFilterRuleNode[];
  isXdpLineRateEnforced: boolean;
  hasSynFloodMitigated: boolean;
  hasZeroCopyBypassActive: boolean;
  hasTelemetryGlow: boolean;
}

// 8. Kinetic 4-Step: enterprise-rag-graph-hybrid-traversal

export interface KnowledgeEntityNode {
  id: string;
  entityName: string;
  entityType: string;
  graphDegreeCentrality: number;
  vectorRelevanceScorePercentage: number;
  isTraversed: boolean;
  hasNeighborhoodExpanded: boolean;
}

export interface TraversalStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  subgraphHopCount: number;
  fusedRetrievalRecallPercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export type Suite2030TraversalStage = TraversalStage;

export interface EnterpriseRagGraphHybridTraversalSlideData extends BaseSlide {
  type: 'enterprise-rag-graph-hybrid-traversal';
  traversalIdentifier: string;
  totalKnowledgeEntitiesMillion: number;
  reciprocalRankScore: number;
  leadArchitect: string;
  leadRole: string;
  traversalStages: TraversalStage[];
  entityNodes: KnowledgeEntityNode[];
  isHybridFusionRanked: boolean;
  hasGraphEntityExtracted: boolean;
  hasSubGraphBounded: boolean;
  hasTelemetryGlow: boolean;
}

// 9. Kinetic 4-Step: continuous-ai-agent-eval-harness

export interface AgentBenchmarkSuiteNode {
  id: string;
  suiteName: string;
  eloRating: number;
  toolCallAccuracyPercentage: number;
  safetyViolationCount: number;
  isBenchmarkPassed: boolean;
  hasRegressionDetected: boolean;
}

export interface EvalStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  testScenariosExecutedCount: number;
  passRatePercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export type Suite2030EvalStage = EvalStage;

export interface ContinuousAiAgentEvalHarnessSlideData extends BaseSlide {
  type: 'continuous-ai-agent-eval-harness';
  harnessIdentifier: string;
  blendedEloScore: number;
  targetDeploymentGate: string;
  leadArchitect: string;
  leadRole: string;
  evalStages: EvalStage[];
  benchmarkSuites: AgentBenchmarkSuiteNode[];
  isEloBenchmarkConverged: boolean;
  hasRegressionDetected: boolean;
  hasSafetyGuardrailPassed: boolean;
  hasTelemetryGlow: boolean;
}

// 10. Flat Sovereign: hyperscale-datacenter-liquid-cooling-telemetry

export interface LiquidCoolingLoopNode {
  id: string;
  loopIdentifier: string;
  coolantType: string;
  supplyTemperatureCelsius: number;
  returnTemperatureCelsius: number;
  flowRateLitersPerMin: number;
  pumpHealthPercentage: number;
  isLoopBalanced: boolean;
  hasCavitationDetected: boolean;
}

export interface HyperscaleDatacenterLiquidCoolingTelemetrySlideData extends BaseSlide {
  type: 'hyperscale-datacenter-liquid-cooling-telemetry';
  datacenterFacilityName: string;
  powerUsageEffectivenessPue: number;
  totalThermalHeatRejectedMw: number;
  leadArchitect: string;
  leadRole: string;
  coolingLoops: LiquidCoolingLoopNode[];
  isPueOptimized: boolean;
  hasImmersionCirculationActive: boolean;
  hasThermalRunawayGuarded: boolean;
  hasTelemetryGlow: boolean;
}

// 11. Flat Sovereign: global-sovereign-ai-compute-reserve-grid

export interface SovereignComputeRegionNode {
  id: string;
  jurisdictionCountry: string;
  clusterCapacityExaflops: number;
  renewableEnergyPercentage: number;
  datacenterCount: number;
  isDataLocalizationEnforced: boolean;
  hasSovereignReserveAllocated: boolean;
}

export interface GlobalSovereignAiComputeReserveGridSlideData extends BaseSlide {
  type: 'global-sovereign-ai-compute-reserve-grid';
  gridIdentifier: string;
  totalFederatedCapacityExaflops: number;
  averageRenewablePowerPercentage: number;
  leadArchitect: string;
  leadRole: string;
  computeRegions: SovereignComputeRegionNode[];
  isSovereignReserveOnline: boolean;
  hasCrossBorderInterconnectActive: boolean;
  hasGeopoliticalQuarantineEnabled: boolean;
  hasTelemetryGlow: boolean;
}

// 12. Flat Sovereign: post-quantum-pki-certificate-hierarchy-radar

export interface CertificateTierNode {
  id: string;
  authorityName: string;
  hierarchyTier: string;
  signatureAlgorithm: string;
  keyLengthBits: number;
  quantumExpirationMonths: number;
  isPqcMigrated: boolean;
  hasHybridDualSignature: boolean;
}

export interface PostQuantumPkiCertificateHierarchyRadarSlideData extends BaseSlide {
  type: 'post-quantum-pki-certificate-hierarchy-radar';
  radarIdentifier: string;
  overallPqcMigrationPercentage: number;
  totalCertificatesMonitoredThousands: number;
  leadArchitect: string;
  leadRole: string;
  caTiers: CertificateTierNode[];
  isDualSignatureEnforced: boolean;
  hasMldsaRootSecured: boolean;
  hasQuantumRevocationMonitored: boolean;
  hasTelemetryGlow: boolean;
}

// 13. Flat Sovereign: zero-trust-cloud-workload-entitlement-graph

export interface WorkloadEntitlementEdge {
  id: string;
  principalIdentity: string;
  targetCloudResource: string;
  effectivePermissionLevel: string;
  lastUsedDaysAgo: number;
  isJitGranted: boolean;
  hasOverprivilegedRisk: boolean;
}

export interface ZeroTrustCloudWorkloadEntitlementGraphSlideData extends BaseSlide {
  type: 'zero-trust-cloud-workload-entitlement-graph';
  graphIdentifier: string;
  dormantEntitlementReductionPercentage: number;
  totalMonitoredIdentitiesCount: number;
  leadArchitect: string;
  leadRole: string;
  entitlementEdges: WorkloadEntitlementEdge[];
  isJitAccessEnforced: boolean;
  hasOverprivilegedRolePruned: boolean;
  hasCrossAccountBoundaryGuarded: boolean;
  hasTelemetryGlow: boolean;
}

// 14. Flat Sovereign: frontier-multimodal-alignment-matrix

export interface MultimodalAlignmentVectorNode {
  id: string;
  modalityCombination: string;
  attackVectorType: string;
  adversarialRobustnessScorePercentage: number;
  falsePositiveRefusalPercentage: number;
  isSafetyBoundaryCalibrated: boolean;
  hasCrossModalJailbreakBlocked: boolean;
}

export interface FrontierMultimodalAlignmentMatrixSlideData extends BaseSlide {
  type: 'frontier-multimodal-alignment-matrix';
  matrixIdentifier: string;
  blendedAdversarialRobustnessPercentage: number;
  redTeamAttackScenariosCount: number;
  leadArchitect: string;
  leadRole: string;
  alignmentVectors: MultimodalAlignmentVectorNode[];
  isMultimodalRefusalCalibrated: boolean;
  hasAdversarialJailbreakBlocked: boolean;
  hasCrossModalLeakagePrevented: boolean;
  hasTelemetryGlow: boolean;
}

// 15. Flat Sovereign: enterprise-saas-efficiency-rule-of-40-quadrant

export interface SaasBusinessUnitNode {
  id: string;
  unitName: string;
  revenueGrowthPercentage: number;
  freeCashFlowMarginPercentage: number;
  ruleOfFortyScore: number;
  netRetentionRatePercentage: number;
  cacPaybackMonths: number;
  isRuleOfFortyAchieved: boolean;
  hasTopDecileEfficiency: boolean;
}

export interface EnterpriseSaasEfficiencyRuleOf40QuadrantSlideData extends BaseSlide {
  type: 'enterprise-saas-efficiency-rule-of-40-quadrant';
  quadrantIdentifier: string;
  blendedRuleOfFortyScore: number;
  annualRecurringRevenueMillionUsd: number;
  leadArchitect: string;
  leadRole: string;
  businessUnits: SaasBusinessUnitNode[];
  isRuleOfFortyAchieved: boolean;
  hasNetRetentionTargetMet: boolean;
  hasExpansionRevenueOptimized: boolean;
  hasTelemetryGlow: boolean;
}

// Aggregated Unions & Type Guards

export type Suite2030StepSlideData =
  | NeuromorphicSpikingNeuralMeshSlideData
  | QuantumAnnealingPortfolioOptimizerSlideData
  | AutonomousSyntheticDataFoundrySlideData
  | ZeroKnowledgeRollupProverClusterSlideData
  | PhotonicInterconnectOpticalMeshSlideData
  | DecentralizedOracleConsensusSpineSlideData
  | EbpfCloudNativeDdosShieldSlideData
  | EnterpriseRagGraphHybridTraversalSlideData
  | ContinuousAiAgentEvalHarnessSlideData;

export type Suite2030FlatSlideData =
  | HyperscaleDatacenterLiquidCoolingTelemetrySlideData
  | GlobalSovereignAiComputeReserveGridSlideData
  | PostQuantumPkiCertificateHierarchyRadarSlideData
  | ZeroTrustCloudWorkloadEntitlementGraphSlideData
  | FrontierMultimodalAlignmentMatrixSlideData
  | EnterpriseSaasEfficiencyRuleOf40QuadrantSlideData;

export type Suite2030SlideData = Suite2030StepSlideData | Suite2030FlatSlideData;
export type GlobalPptSuite2030SlideData = Suite2030SlideData;

export const SUITE_2030_STAGE_KEYS: Record<string, string> = {
  'neuromorphic-spiking-neural-mesh': 'spikingStages',
  'quantum-annealing-portfolio-optimizer': 'annealingStages',
  'autonomous-synthetic-data-foundry': 'foundryStages',
  'zero-knowledge-rollup-prover-cluster': 'proverStages',
  'photonic-interconnect-optical-mesh': 'opticalStages',
  'decentralized-oracle-consensus-spine': 'oracleStages',
  'ebpf-cloud-native-ddos-shield': 'shieldStages',
  'enterprise-rag-graph-hybrid-traversal': 'traversalStages',
  'continuous-ai-agent-eval-harness': 'evalStages',
};

export function isSuite2030StepSlideType(type: string): type is Suite2030StepSlideType {
  return (SUITE_2030_STEP_SLIDE_TYPES as readonly string[]).includes(type);
}

export function isSuite2030FlatSlideType(type: string): type is Suite2030FlatSlideType {
  return (SUITE_2030_FLAT_SLIDE_TYPES as readonly string[]).includes(type);
}

export function isSuite2030SlideType(type: string): type is Suite2030SlideType {
  return isSuite2030StepSlideType(type) || isSuite2030FlatSlideType(type);
}

export function isSuite2030Slide(slide: unknown): slide is Suite2030SlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2030_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isSuite2030StepSlide(slide: unknown): slide is Suite2030StepSlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2030_STEP_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isSuite2030FlatSlide(slide: unknown): slide is Suite2030FlatSlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2030_FLAT_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isGlobalPptSuite2030Slide(slide: unknown): slide is GlobalPptSuite2030SlideData {
  return isSuite2030Slide(slide);
}

export function calculateSuite2030StepCount(slide: Suite2030SlideData | any): number {
  if (!slide || typeof slide !== 'object') return 1;
  const stageKey = SUITE_2030_STAGE_KEYS[slide.type];
  if (!stageKey) return 1;
  const stages = slide[stageKey];
  return Math.max(Array.isArray(stages) ? stages.length : 4, 1);
}

export function calculateGlobalPptSuite2030StepCount(slide: GlobalPptSuite2030SlideData): number {
  return calculateSuite2030StepCount(slide);
}

export function getSuite2030SlideStepCount(slide: unknown): number {
  if (!isSuite2030Slide(slide)) return 0;
  return calculateSuite2030StepCount(slide);
}
