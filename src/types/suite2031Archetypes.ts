// lint-allow: file-size reason="Suite 2031 slide archetype contracts and type definitions" max=600
import type { BaseSlide } from './presentation';

// Discriminated Union Types for Suite 2031 (Chapter 49)
export const SUITE_2031_STEP_SLIDE_TYPES = [
  'dna-data-storage-codec-pipeline', 'superconducting-qubit-calibration-flow',
  'wafer-scale-engine-interconnect-routing', 'decentralized-ai-compute-slashing-protocol',
  'orbital-laser-satellite-constellation-routing', 'agentic-codebase-migration-factory',
  'chiplet-uci-e-interconnect-pipeline', 'ambient-iot-energy-harvesting-telemetry',
  'federated-homomorphic-analytics-enclave',
] as const;

export const SUITE_2031_FLAT_SLIDE_TYPES = [
  'geothermal-nuclear-smr-datacenter-grid', 'spaceborne-ai-edge-payload-telemetry',
  'sovereign-ai-silicon-supply-chain-chokepoint-radar', 'neuromorphic-brain-computer-interface-telemetry',
  'autonomous-cyber-threat-hunting-matrix', 'enterprise-ai-total-cost-of-ownership-quadrant',
] as const;

export const SUITE_2031_SLIDE_TYPES = [
  ...SUITE_2031_STEP_SLIDE_TYPES,
  ...SUITE_2031_FLAT_SLIDE_TYPES,
] as const;

export type Suite2031StepSlideType = (typeof SUITE_2031_STEP_SLIDE_TYPES)[number];
export type Suite2031FlatSlideType = (typeof SUITE_2031_FLAT_SLIDE_TYPES)[number];
export type Suite2031SlideType = (typeof SUITE_2031_SLIDE_TYPES)[number];
export type GlobalPptSuite2031SlideType = Suite2031SlideType;

// 1. Kinetic 4-Step: dna-data-storage-codec-pipeline
export interface DnaOligoBlock {
  id: string;
  oligoIndex: number;
  sequenceTag: string;
  nucleotideLength: number;
  gcContentPercentage: number;
  isSynthesized: boolean;
  hasErrorCorrectionVerified: boolean;
}
export interface DnaCodecStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  encodingDensityPetabytesPerGram: number;
  synthesisThroughputKbps: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface DnaDataStorageCodecPipelineSlideData extends BaseSlide {
  type: 'dna-data-storage-codec-pipeline';
  codecIdentifier: string;
  dataDensityPetabytesPerGram: number;
  rawPayloadMegabytes: number;
  leadArchitect: string;
  leadRole: string;
  codecStages: DnaCodecStage[];
  oligoBlocks: DnaOligoBlock[];
  isCodecPipelineActive: boolean;
  hasEnzymaticSynthesisActive: boolean;
  hasHomopolymerRunSuppressed: boolean;
  hasTelemetryGlow: boolean;
}

// 2. Kinetic 4-Step: superconducting-qubit-calibration-flow
export interface SuperconductingQubitNode {
  id: string;
  qubitLabel: string;
  frequencyGhz: number;
  t1RelaxationMicroseconds: number;
  t2DephasingMicroseconds: number;
  singleQubitGateFidelityPercentage: number;
  isCalibrated: boolean;
  hasResonanceLocked: boolean;
}
export interface QubitCalibrationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  cryogenicTempMilliKelvin: number;
  gateFidelityScore: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface SuperconductingQubitCalibrationFlowSlideData extends BaseSlide {
  type: 'superconducting-qubit-calibration-flow';
  processorIdentifier: string;
  qubitCount: number;
  averageTwoQubitFidelityPercentage: number;
  leadArchitect: string;
  leadRole: string;
  calibrationStages: QubitCalibrationStage[];
  qubitNodes: SuperconductingQubitNode[];
  isCryogenicThermalized: boolean;
  hasCrossResonanceTuned: boolean;
  hasLeakageSuppressed: boolean;
  hasTelemetryGlow: boolean;
}

// 3. Kinetic 4-Step: wafer-scale-engine-interconnect-routing
export interface WaferFabricTileNode {
  id: string;
  coreCoordinates: string;
  flitThroughputTbps: number;
  thermalGradientCelsius: number;
  packetLatencyPicoseconds: number;
  isTileOperational: boolean;
  hasDeflectionRouted: boolean;
}
export interface WaferRoutingStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  bisectionBandwidthTbps: number;
  meshPacketDropRatePpm: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface WaferScaleEngineInterconnectRoutingSlideData extends BaseSlide {
  type: 'wafer-scale-engine-interconnect-routing';
  engineIdentifier: string;
  totalCoresCount: number;
  bisectionBandwidthPetaBytesPerSec: number;
  leadArchitect: string;
  leadRole: string;
  routingStages: WaferRoutingStage[];
  tileNodes: WaferFabricTileNode[];
  isFabricMeshSynchronized: boolean;
  hasDefectBypassConfigured: boolean;
  hasThermalThrottleStabilized: boolean;
  hasTelemetryGlow: boolean;
}

// 4. Kinetic 4-Step: decentralized-ai-compute-slashing-protocol
export interface ComputeValidatorNode {
  id: string;
  validatorAddress: string;
  stakedTokensEth: number;
  gradientDivergenceScore: number;
  slashedPenaltyEth: number;
  isValidatorHonest: boolean;
  hasQuorumConsensusReached: boolean;
}
export interface SlashingProtocolStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  totalValueLockedUsd: number;
  gradientDivergenceTolerancePpm: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface DecentralizedAiComputeSlashingProtocolSlideData extends BaseSlide {
  type: 'decentralized-ai-compute-slashing-protocol';
  protocolIdentifier: string;
  totalStakePoolTokensUsdMillion: number;
  maliciousGradientInterceptionRate: number;
  leadArchitect: string;
  leadRole: string;
  slashingStages: SlashingProtocolStage[];
  validatorNodes: ComputeValidatorNode[];
  isDisputeWindowOpen: boolean;
  hasByzantineToleranceGuaranteed: boolean;
  hasMaliciousNodeSlashed: boolean;
  hasTelemetryGlow: boolean;
}

// 5. Kinetic 4-Step: orbital-laser-satellite-constellation-routing
export interface SatelliteLinkNode {
  id: string;
  satelliteCallsign: string;
  orbitalShellAltitudeKm: number;
  laserPointingAccuracyMicroRad: number;
  opticalThroughputGbps: number;
  isLinkEstablished: boolean;
  hasDopplerCompensated: boolean;
}
export interface LaserRoutingStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  intersatelliteLatencyMs: number;
  opticalBitErrorRatePower: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface OrbitalLaserSatelliteConstellationRoutingSlideData extends BaseSlide {
  type: 'orbital-laser-satellite-constellation-routing';
  constellationIdentifier: string;
  activeSatellitesCount: number;
  globalInterconnectLatencyMs: number;
  leadArchitect: string;
  leadRole: string;
  constellationStages: LaserRoutingStage[];
  satelliteNodes: SatelliteLinkNode[];
  isOrbitalMeshLocked: boolean;
  hasAtmosphericRefractionCorrected: boolean;
  hasInterlinkHoppingOptimized: boolean;
  hasTelemetryGlow: boolean;
}

// 6. Kinetic 4-Step: agentic-codebase-migration-factory
export interface RefactoringUnitNode {
  id: string;
  moduleName: string;
  linesOfCode: number;
  cyclomaticComplexity: number;
  testCoveragePercentage: number;
  isAstTransformed: boolean;
  hasQualityGatePassed: boolean;
}
export interface AgenticMigrationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  transformationSpeedLocPerSec: number;
  confidenceScorePercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface AgenticCodebaseMigrationFactorySlideData extends BaseSlide {
  type: 'agentic-codebase-migration-factory';
  factoryIdentifier: string;
  totalMigratedLocMillion: number;
  syntaxAccuracyPercentage: number;
  leadArchitect: string;
  leadRole: string;
  migrationStages: AgenticMigrationStage[];
  refactoringUnits: RefactoringUnitNode[];
  isAgenticFactoryExecuting: boolean;
  hasSemanticDiffVerified: boolean;
  hasFullTypeSafetyEnforced: boolean;
  hasTelemetryGlow: boolean;
}

// 7. Kinetic 4-Step: chiplet-uci-e-interconnect-pipeline
export interface DieToDieLaneNode {
  id: string;
  laneIdentifier: string;
  bumpPitchMicrons: number;
  laneBandwidthGbps: number;
  signalEyeOpeningPicoseconds: number;
  isLaneCalibrated: boolean;
  hasForwardErrorCorrectionLocked: boolean;
}
export interface ChipletPipelineStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  bandwidthLinearDensityTbpsPerMm: number;
  flitLatencyNanoseconds: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface ChipletUciEInterconnectPipelineSlideData extends BaseSlide {
  type: 'chiplet-uci-e-interconnect-pipeline';
  packageIdentifier: string;
  totalDieCount: number;
  rawBandwidthTerabitsPerSec: number;
  leadArchitect: string;
  leadRole: string;
  chipletStages: ChipletPipelineStage[];
  dieLanes: DieToDieLaneNode[];
  isPackageInterconnectOperational: boolean;
  hasUcieStandardCompliant: boolean;
  hasThermalDissipationBalanced: boolean;
  hasTelemetryGlow: boolean;
}

// 8. Kinetic 4-Step: ambient-iot-energy-harvesting-telemetry
export interface AmbientHarvesterNode {
  id: string;
  nodeTag: string;
  energySourceType: string;
  voltageOutputMilliVolts: number;
  storedEnergyMicroJoules: number;
  isDutyCycleActive: boolean;
  hasSufficientColdBootCharge: boolean;
}
export interface AmbientHarvestingStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  harvestingEfficiencyPercentage: number;
  quiescentCurrentNanoAmps: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface AmbientIotEnergyHarvestingTelemetrySlideData extends BaseSlide {
  type: 'ambient-iot-energy-harvesting-telemetry';
  networkIdentifier: string;
  activeZeroBatteryNodesCount: number;
  energyAutonomyScorePercentage: number;
  leadArchitect: string;
  leadRole: string;
  harvestingStages: AmbientHarvestingStage[];
  harvesterNodes: AmbientHarvesterNode[];
  isEnergyHarvestingSustained: boolean;
  hasDutyCycleOptimized: boolean;
  hasBackscatterModulationReady: boolean;
  hasTelemetryGlow: boolean;
}

// 9. Kinetic 4-Step: federated-homomorphic-analytics-enclave
export interface ConfidentialParticipantNode {
  id: string;
  institutionName: string;
  encryptedGradientCipherSizeBytes: number;
  noiseBudgetRemainingPercentage: number;
  zkProofVerificationTimeMs: number;
  isEnclaveAttested: boolean;
  hasZeroKnowledgeProofVerified: boolean;
}
export interface HomomorphicEnclaveStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  homomorphicComputationOpsPerSec: number;
  noiseBudgetDepletionRatePercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface FederatedHomomorphicAnalyticsEnclaveSlideData extends BaseSlide {
  type: 'federated-homomorphic-analytics-enclave';
  enclaveIdentifier: string;
  participatingInstitutionsCount: number;
  ciphertextPrivacyGuaranteeEpsilon: number;
  leadArchitect: string;
  leadRole: string;
  enclaveStages: HomomorphicEnclaveStage[];
  participantNodes: ConfidentialParticipantNode[];
  isEnclaveMemoryEncrypted: boolean;
  hasDifferentialPrivacySatisfied: boolean;
  hasNoiseBudgetSufficient: boolean;
  hasTelemetryGlow: boolean;
}

// 10. Flat Sovereign: geothermal-nuclear-smr-datacenter-grid
export interface PowerGenerationSource {
  id: string;
  facilityName: string;
  technologyType: string;
  outputCapacityMegawatts: number;
  capacityFactorPercentage: number;
  levelizedCostOfEnergyUsdPerMwh: number;
  isOnlineOperational: boolean;
  hasCarbonFreeCertificateValid: boolean;
}
export interface GridLoadMetric {
  id: string;
  metricName: string;
  metricValue: string;
  targetThreshold: string;
  isWithinOptimalRange: boolean;
}
export interface GeothermalNuclearSmrDatacenterGridSlideData extends BaseSlide {
  type: 'geothermal-nuclear-smr-datacenter-grid';
  gridClusterIdentifier: string;
  totalBaseloadCapacityMegawatts: number;
  powerUsageEffectivenessPue: number;
  leadArchitect: string;
  leadRole: string;
  isGridSynchronized: boolean;
  hasZeroCarbonBaseloadGuaranteed: boolean;
  hasCoolingLoopPressurized: boolean;
  hasTelemetryGlow: boolean;
  generationSources: PowerGenerationSource[];
  loadMetrics: GridLoadMetric[];
}

// 11. Flat Sovereign: spaceborne-ai-edge-payload-telemetry
export interface OrbitalPayloadSubsystem {
  id: string;
  subsystemName: string;
  processorType: string;
  powerDrawWatts: number;
  inferenceRateFramesPerSec: number;
  junctionTemperatureCelsius: number;
  isSubsystemNominal: boolean;
  hasSingleEventUpsetProtected: boolean;
}
export interface RadiationShieldMetric {
  id: string;
  sensorLocation: string;
  accumulatedTidKrad: number;
  protonFluxPerCm2Sec: number;
  isWithinToleranceLimit: boolean;
}
export interface SpaceborneAiEdgePayloadTelemetrySlideData extends BaseSlide {
  type: 'spaceborne-ai-edge-payload-telemetry';
  payloadIdentifier: string;
  orbitalAltitudeKm: number;
  downlinkCompressionRatio: number;
  leadArchitect: string;
  leadRole: string;
  isAutonomousInferenceActive: boolean;
  hasRadHardShieldIntact: boolean;
  hasThermalEquilibriumMaintained: boolean;
  hasTelemetryGlow: boolean;
  subsystems: OrbitalPayloadSubsystem[];
  radiationMetrics: RadiationShieldMetric[];
}

// 12. Flat Sovereign: sovereign-ai-silicon-supply-chain-chokepoint-radar
export interface SupplyChainChokepointNode {
  id: string;
  chokepointCategory: string;
  globalMarketConcentrationPercentage: number;
  leadTimeMonths: number;
  geopoliticalRiskScore: number;
  isSovereignAlternativeAvailable: boolean;
  hasStrategicStockpileSecured: boolean;
}
export interface LithographyTierMetric {
  id: string;
  processNodeNm: string;
  domesticYieldPercentage: number;
  waferMonthlyStarts: number;
  hasCommercialViabilityAchieved: boolean;
}
export interface SovereignAiSiliconSupplyChainChokepointRadarSlideData extends BaseSlide {
  type: 'sovereign-ai-silicon-supply-chain-chokepoint-radar';
  radarClusterIdentifier: string;
  sovereignSelfSufficiencyPercentage: number;
  criticalChokepointsCount: number;
  leadArchitect: string;
  leadRole: string;
  isSupplyChainResilient: boolean;
  hasDomesticFoundryOperational: boolean;
  hasCriticalBufferMaintained: boolean;
  hasTelemetryGlow: boolean;
  chokepointNodes: SupplyChainChokepointNode[];
  lithographyTiers: LithographyTierMetric[];
}

// 13. Flat Sovereign: neuromorphic-brain-computer-interface-telemetry
export interface BciChannelGroup {
  id: string;
  corticalRegion: string;
  activeElectrodeCount: number;
  signalToNoiseRatioDb: number;
  spikeSortingLatencyMicroseconds: number;
  isNeuralImpedanceOptimal: boolean;
  hasHermeticSealIntact: boolean;
}
export interface NeuralBandMetric {
  id: string;
  bandName: string;
  spectralPowerMicroVoltsSquared: number;
  decodingAccuracyPercentage: number;
  isChannelCalibrated: boolean;
}
export interface NeuromorphicBrainComputerInterfaceTelemetrySlideData extends BaseSlide {
  type: 'neuromorphic-brain-computer-interface-telemetry';
  bciIdentifier: string;
  totalElectrodeChannels: number;
  powerDissipationMilliWatts: number;
  leadArchitect: string;
  leadRole: string;
  isImplantCalibrated: boolean;
  hasBioCompatibilityVerified: boolean;
  hasWirelessTelemetryStreamActive: boolean;
  hasTelemetryGlow: boolean;
  channelGroups: BciChannelGroup[];
  neuralBands: NeuralBandMetric[];
}

// 14. Flat Sovereign: autonomous-cyber-threat-hunting-matrix
export interface ThreatVectorNode {
  id: string;
  attackVectorName: string;
  anomalyConfidenceScore: number;
  meanTimeToDetectSeconds: number;
  meanTimeToRemediateSeconds: number;
  isThreatNeutralized: boolean;
  hasZeroDaySignatureQuarantined: boolean;
}
export interface MitreAttAckMapping {
  id: string;
  tacticId: string;
  techniqueName: string;
  coveragePercentage: number;
  isHeuristicGuarded: boolean;
}
export interface AutonomousCyberThreatHuntingMatrixSlideData extends BaseSlide {
  type: 'autonomous-cyber-threat-hunting-matrix';
  matrixClusterIdentifier: string;
  autonomousNeutralizationRatePercentage: number;
  activeThreatInvestigationsCount: number;
  leadArchitect: string;
  leadRole: string;
  isKillChainInterceptionActive: boolean;
  hasSandboxIsolationEnforced: boolean;
  hasAutomatedForensicsCaptured: boolean;
  hasTelemetryGlow: boolean;
  threatVectors: ThreatVectorNode[];
  mitreMappings: MitreAttAckMapping[];
}

// 15. Flat Sovereign: enterprise-ai-total-cost-of-ownership-quadrant
export interface TcoQuadrantEntity {
  id: string;
  workloadName: string;
  annualCapexMillionUsd: number;
  annualOpexMillionUsd: number;
  inferenceCostPerMillionTokensUsd: number;
  roiPaybackPeriodMonths: number;
  isTopDecileEfficiency: boolean;
  hasCostCapEnforced: boolean;
}
export interface FinancialVectorMetric {
  id: string;
  vectorName: string;
  allocatedBudgetMillionUsd: number;
  budgetVariancePercentage: number;
  isWithinForecastTolerance: boolean;
}
export interface EnterpriseAiTotalCostOfOwnershipQuadrantSlideData extends BaseSlide {
  type: 'enterprise-ai-total-cost-of-ownership-quadrant';
  financialQuadrantIdentifier: string;
  totalAiExpenditureMillionUsd: number;
  aggregateInferenceEfficiencyScore: number;
  leadArchitect: string;
  leadRole: string;
  isTcoAnalysisFinalized: boolean;
  hasSpotComputeArbitrageActive: boolean;
  hasCapExAmortizationOptimized: boolean;
  hasTelemetryGlow: boolean;
  quadrantEntities: TcoQuadrantEntity[];
  financialVectors: FinancialVectorMetric[];
}

// Aggregated Unions & Type Guards
export type Suite2031StepSlideData =
  | DnaDataStorageCodecPipelineSlideData | SuperconductingQubitCalibrationFlowSlideData
  | WaferScaleEngineInterconnectRoutingSlideData | DecentralizedAiComputeSlashingProtocolSlideData
  | OrbitalLaserSatelliteConstellationRoutingSlideData | AgenticCodebaseMigrationFactorySlideData
  | ChipletUciEInterconnectPipelineSlideData | AmbientIotEnergyHarvestingTelemetrySlideData
  | FederatedHomomorphicAnalyticsEnclaveSlideData;

export type Suite2031FlatSlideData =
  | GeothermalNuclearSmrDatacenterGridSlideData | SpaceborneAiEdgePayloadTelemetrySlideData
  | SovereignAiSiliconSupplyChainChokepointRadarSlideData | NeuromorphicBrainComputerInterfaceTelemetrySlideData
  | AutonomousCyberThreatHuntingMatrixSlideData | EnterpriseAiTotalCostOfOwnershipQuadrantSlideData;

export type Suite2031SlideData = Suite2031StepSlideData | Suite2031FlatSlideData;
export type GlobalPptSuite2031SlideData = Suite2031SlideData;

export const SUITE_2031_STAGE_KEYS: Record<string, string> = {
  'dna-data-storage-codec-pipeline': 'codecStages', 'superconducting-qubit-calibration-flow': 'calibrationStages',
  'wafer-scale-engine-interconnect-routing': 'routingStages', 'decentralized-ai-compute-slashing-protocol': 'slashingStages',
  'orbital-laser-satellite-constellation-routing': 'constellationStages', 'agentic-codebase-migration-factory': 'migrationStages',
  'chiplet-uci-e-interconnect-pipeline': 'chipletStages', 'ambient-iot-energy-harvesting-telemetry': 'harvestingStages',
  'federated-homomorphic-analytics-enclave': 'enclaveStages',
};

export function isSuite2031StepSlideType(type: string): type is Suite2031StepSlideType {
  return (SUITE_2031_STEP_SLIDE_TYPES as readonly string[]).includes(type);
}
export function isSuite2031FlatSlideType(type: string): type is Suite2031FlatSlideType {
  return (SUITE_2031_FLAT_SLIDE_TYPES as readonly string[]).includes(type);
}
export function isSuite2031SlideType(type: string): type is Suite2031SlideType {
  return isSuite2031StepSlideType(type) || isSuite2031FlatSlideType(type);
}

export function isSuite2031Slide(slide: unknown): slide is Suite2031SlideData {
  if (!slide || typeof slide !== 'object') return false;
  return typeof (slide as { type?: string }).type === 'string' &&
    (SUITE_2031_SLIDE_TYPES as readonly string[]).includes((slide as { type: string }).type);
}

export function isSuite2031StepSlide(slide: unknown): slide is Suite2031StepSlideData {
  if (!slide || typeof slide !== 'object') return false;
  return typeof (slide as { type?: string }).type === 'string' &&
    (SUITE_2031_STEP_SLIDE_TYPES as readonly string[]).includes((slide as { type: string }).type);
}

export function isSuite2031FlatSlide(slide: unknown): slide is Suite2031FlatSlideData {
  if (!slide || typeof slide !== 'object') return false;
  return typeof (slide as { type?: string }).type === 'string' &&
    (SUITE_2031_FLAT_SLIDE_TYPES as readonly string[]).includes((slide as { type: string }).type);
}

export function isGlobalPptSuite2031Slide(slide: unknown): slide is GlobalPptSuite2031SlideData { return isSuite2031Slide(slide); }

export function calculateSuite2031StepCount(slide: Suite2031SlideData | any): number {
  if (!slide || typeof slide !== 'object') return 1;
  const stageKey = SUITE_2031_STAGE_KEYS[slide.type];
  if (!stageKey) return 1;
  const stages = slide[stageKey];
  return Math.max(Array.isArray(stages) ? stages.length : 4, 1);
}

export function calculateGlobalPptSuite2031StepCount(slide: GlobalPptSuite2031SlideData): number { return calculateSuite2031StepCount(slide); }

export function getSuite2031SlideStepCount(slide: unknown): number {
  if (!isSuite2031Slide(slide)) return 0;
  return calculateSuite2031StepCount(slide);
}
