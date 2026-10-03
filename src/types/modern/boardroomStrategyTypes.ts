import type { BaseSlide } from '../presentation';

export interface MarketThesisPillar {
  id: string; pillarTitle: string; coreThesisStatement: string;
  quantitativeProof: string; strategicOutcome: string;
  isPillarValidated: boolean; hasCompetitiveMoat: boolean; strategicEnablers: string[];
}
export interface BoardroomTamSummary {
  totalAddressableMarket: string; compoundAnnualGrowthRate: string;
  currentMarketPenetration: string; projectedAnnualRevenue: string; isBoardApproved: boolean;
}
export interface BoardroomMarketInflectionThesisSlideData extends BaseSlide {
  type: 'boardroom-market-inflection-thesis';
  tamSummary: BoardroomTamSummary; thesisPillars: MarketThesisPillar[];
  executiveSponsor: string; isStrategicPriority: boolean;
}

export interface ThreatVectorCard {
  id: string; threatName: string; mitreAttackId: string;
  hostileVectorDescription: string; autonomousDefenseMechanism: string;
  meanTimeToContainSeconds: number; mitigationConfidencePercentage: number;
  isVectorMitigated: boolean; hasAutomatedRollback: boolean; countermeasures: string[];
}
export interface CyberDefenseTelemetryHeader {
  activeDefenseStatus: string; mitreCoveragePercentage: number;
  meanTimeToContainSeconds: number; dailyQuarantinedProbes: number; isAirGapActive: boolean;
}
export interface AsymmetricThreatDefenseMatrixSlideData extends BaseSlide {
  type: 'asymmetric-threat-defense-matrix';
  defenseHeader: CyberDefenseTelemetryHeader; threatVectors: ThreatVectorCard[];
  securityAuditor: string; isPerimeterHardened: boolean;
}

export interface DieBlockModule {
  id: string; blockName: string; blockType: 'COMPUTE' | 'MEMORY' | 'INTERCONNECT' | 'CONTROLLER';
  transistorCountBillions: number; powerConsumptionWatts: number;
  areaSquareMillimeters: number; isBlockOperational: boolean; hasHardwareIsolation: boolean;
}
export interface SiliconPackageTelemetry {
  processNodeNanometers: string; totalTransistorCount: string;
  hbm3eCapacityGigabytes: number; memoryBandwidthTerabytesPerSec: number;
  peakComputeTflopsFp8: number; thermalDesignPowerWatts: number;
  averageDieTemperatureCelsius: number; isLiquidCoolingActive: boolean;
}
export interface HardwareAcceleratorDieTopologySlideData extends BaseSlide {
  type: 'hardware-accelerator-die-topology';
  packageTelemetry: SiliconPackageTelemetry; dieBlocks: DieBlockModule[];
  siliconArchitect: string; isDieTapeOutVerified: boolean;
}

export interface CustomerJourneyStage {
  id: string; stageName: string; legacyPainPoints: string[];
  modernSovereignExperience: string[]; timeToCompleteDelta: string;
  satisfactionUpliftPercentage: number; isFrictionEliminated: boolean; hasAutonomousSupport: boolean;
}
export interface CustomerExperienceDeltaSummary {
  consolidatedCsatScore: number; netPromoterScore: number;
  averageOnboardingHours: number; monthlyCustomerChurnPercentage: number;
  isSatisfactionExceedingBenchmark: boolean;
}
export interface CustomerExperienceJourneyDeltaSlideData extends BaseSlide {
  type: 'customer-experience-journey-delta';
  deltaSummary: CustomerExperienceDeltaSummary; journeyStages: CustomerJourneyStage[];
  customerExperienceLead: string; isJourneyValidated: boolean;
}

export interface MandatePillar {
  id: string; pillarTitle: string; primaryActionLabel: string;
  keyMetricOrTarget: string; executionWindow: string;
  isActionApproved: boolean; isExecutionReady: boolean; deliverables: string[];
}
export interface BoardResolutionSummary {
  resolutionId: string; capitalTrancheAmount: string;
  boardVoteStatus: string; targetCompletionQuarter: string; isResolutionAdopted: boolean;
}
export interface ExecutiveBoardMandateCtaSlideData extends BaseSlide {
  type: 'executive-board-mandate-cta';
  resolutionSummary: BoardResolutionSummary; mandatePillars: MandatePillar[];
  chiefSoftwareEngineer: string; cryptographicSignoffHash: string; hasBoardApprovalSeal: boolean;
}
