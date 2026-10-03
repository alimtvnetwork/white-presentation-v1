import type { BaseSlide } from '../presentation';

// =============================================================================
// 9. Developer Platform IDP Hub (developer-platform-idp-hub)
// =============================================================================
export interface GoldenPathTemplate {
  templateId: string;
  name: string;
  language: string;
  framework: string;
  estimatedSetupMinutes: number;
  usageCount: number;
  isProductionReady: boolean;
  isSecurityApproved: boolean;
}

export interface IdpMetricSummary {
  developerSatisfactionScore: number;
  weeklyActiveEngineers: number;
  onboardingTimeReductionPercent: number;
  isGoldenPathEnforced: boolean;
}

export interface DeveloperPlatformIdpSlideData extends BaseSlide {
  type: 'developer-platform-idp-hub';
  goldenTemplates: GoldenPathTemplate[];
  serviceCatalog: {
    totalServicesTracked: number;
    compliantServicesPercentage: number;
    unownedOrphanCount: number;
    isCatalogSynchronized: boolean;
  };
  provisioningPipeline: {
    activeProvisioningsCount: number;
    avgProvisioningSeconds: number;
    successRatePercent: number;
    isSelfServiceEnabled: boolean;
  };
  platformAdoption: IdpMetricSummary;
}

// =============================================================================
// 10. Executive M&A Synergy Waterfall (executive-mergers-acquisitions-synergy)
// =============================================================================
export interface SynergyMilestone {
  milestoneId: string;
  phaseName: string;
  targetQuarter: string;
  projectedSavingsMillionUsd: number;
  actualSavingsMillionUsd: number;
  isMilestoneAchieved: boolean;
  isEpsAccretive: boolean;
  primaryDriver: string;
}

export type SynergyEbitdaMilestone = SynergyMilestone;

export interface IntegrationStreamProgress {
  streamName: 'TECH_INFRA' | 'GTM_SALES' | 'PEOPLE_OPS' | 'LEGAL_REGULATORY';
  completionPercentage: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  isStreamOnSchedule: boolean;
  streamLeaderTitle: string;
}

export type IntegrationWorkstream = IntegrationStreamProgress;

export interface ExecutiveMaSynergySlideData extends BaseSlide {
  type: 'executive-mergers-acquisitions-synergy';
  synergyMilestones: SynergyMilestone[];
  valuationWaterfall: {
    enterpriseValueMillionUsd: number;
    equityValueMillionUsd: number;
    runRateSynergiesMillionUsd: number;
    netDebtMillionUsd: number;
    ebitdaMultiple: number;
  };
  integrationStreams: IntegrationStreamProgress[];
  governanceSignoff: {
    chiefExecutiveOfficer: string;
    chiefFinancialOfficer: string;
    chiefSoftwareEngineer?: string;
    isBoardApproved: boolean;
    isAntitrustCleared: boolean;
  };
}

// =============================================================================
// 11. Cyber Threat Kill Chain Matrix (cyber-threat-kill-chain-matrix)
// =============================================================================
export interface KillChainStageDetail {
  stageIndex: number;
  stageName: string;
  mitreTacticId: string;
  primaryThreatVector: string;
  activeDefenseControl: string;
  containmentStatus: 'CONTAINED' | 'MONITORING' | 'NEUTRALIZED';
  mttdMinutes: number;
  isDefended: boolean;
  isAutomatedPlaybookTriggered: boolean;
}

export type KillChainStage = KillChainStageDetail;

export interface SoarContainmentAction {
  activeAlertsCount: number;
  meanTimeToContainMinutes: number;
  automatedContainmentRatePercent: number;
  isSoarActive: boolean;
}

export interface CyberThreatKillChainSlideData extends BaseSlide {
  type: 'cyber-threat-kill-chain-matrix';
  killChainStages: KillChainStageDetail[];
  threatActor: {
    adversaryCodename: string;
    originCountry: string;
    targetAsset: string;
    threatSeverity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    isAttributed: boolean;
  };
  socTelemetry: SoarContainmentAction;
  cisoReview: {
    chiefInformationSecurityOfficer: string;
    chiefSoftwareEngineer?: string;
    isExecutiveBriefingCompleted: boolean;
  };
}

// =============================================================================
// 12. Supply Chain Digital Twin Lattice (supply-chain-digital-twin-lattice)
// =============================================================================
export interface LogisticsCorridorNode {
  corridorId: string;
  originNode: string;
  destinationNode: string;
  transitMode: 'OCEAN' | 'AIR' | 'RAIL' | 'ROAD';
  averageTransitDays: number;
  disruptionRiskScorePercent: number;
  isCorridorOperational: boolean;
  isReroutingActive: boolean;
}

export type LogisticsTwinNode = LogisticsCorridorNode;

export interface SupplyChainDisruption {
  disruptionId: string;
  chokepointName: string;
  severity: 'MODERATE' | 'SEVERE' | 'CRITICAL';
  estimatedDelayDays: number;
  inventoryValueAtRiskMillionUsd: number;
  hasAlternateRouteAvailable: boolean;
  isContingencyDispatched: boolean;
}

export type DisruptionReroutePath = SupplyChainDisruption;

export interface SupplyChainDigitalTwinSlideData extends BaseSlide {
  type: 'supply-chain-digital-twin-lattice';
  logisticsCorridors: LogisticsCorridorNode[];
  activeDisruptions: SupplyChainDisruption[];
  twinTelemetry: {
    totalActiveShipmentsCount: number;
    overallOtifPercentage: number;
    savedDelayDaysAutonomous: number;
    isSimulationEngineSynchronized: boolean;
  };
  co2Optimization: {
    fuelSavingsMetricTons: number;
    isGreenLogisticsOptimized: boolean;
  };
}
