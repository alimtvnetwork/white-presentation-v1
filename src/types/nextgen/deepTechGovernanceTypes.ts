import type { BaseSlide } from '../presentation';

// =============================================================================
// 26. AI Governance Safety Governor (ai-governance-safety-governor)
// =============================================================================
export interface GovernanceGate {
  gateId: string;
  gateName: string;
  inspectionType: string;
  latencyBudgetMs: number;
  sampleThroughputRps: number;
  rejectionPolicy: string;
  isGatePassed: boolean;
  isEnforcedInRealtime: boolean;
}

export interface GovernorMetrics {
  totalEvaluationsCount: string;
  violationRatePercentage: number;
  auditHash: string;
  isComplianceCertified: boolean;
}

export interface AiGovernanceSafetyGovernorSlideData extends BaseSlide {
  type: 'ai-governance-safety-governor';
  governorMetrics: GovernorMetrics;
  governanceGates: GovernanceGate[];
  governorSignoff: {
    reviewer: string;
    reviewerTitle: string;
    isApproved: boolean;
  };
}

// =============================================================================
// 27. Developer Velocity Flywheel (developer-velocity-flywheel)
// =============================================================================
export interface FlywheelStage {
  stageNumber: number;
  stageName: string;
  corePractice: string;
  doraMetric: string;
  targetValue: string;
  currentValue: string;
  isStageOptimized: boolean;
  isFeedbackActive: boolean;
}

export interface FlywheelAcceleration {
  cycleTimeReductionPercent: number;
  deploymentFrequencyMultiplier: string;
  isFlywheelAccelerating: boolean;
}

export interface DeveloperVelocityFlywheelSlideData extends BaseSlide {
  type: 'developer-velocity-flywheel';
  flywheelAcceleration: FlywheelAcceleration;
  flywheelStages: FlywheelStage[];
}

// =============================================================================
// 28. Strategic Decarbonization ESG (strategic-decarbonization-esg)
// =============================================================================
export interface EmissionScope {
  scopeId: 'SCOPE_1' | 'SCOPE_2' | 'SCOPE_3';
  scopeName: string;
  emissionSource: string;
  currentMtCo2e: number;
  targetReductionPercent: number;
  isSbtiValidated: boolean;
}

export interface MilestoneWedge {
  milestoneYear: number;
  abatementStrategy: string;
  cumulativeReductionPercent: number;
  isMilestoneOnTrack: boolean;
}

export interface EfficiencyMetrics {
  datacenterPue: number;
  renewableEnergyPercentage: number;
  isCarbonNeutral: boolean;
}

export interface StrategicDecarbonizationEsgSlideData extends BaseSlide {
  type: 'strategic-decarbonization-esg';
  baselineYear: number;
  netZeroTargetYear: number;
  efficiencyMetrics: EfficiencyMetrics;
  scopes: EmissionScope[];
  milestoneWedges: MilestoneWedge[];
}

// =============================================================================
// 29. Market Tension Quadrant (market-tension-quadrant)
// =============================================================================
export interface QuadrantDefinition {
  id: 'CHALLENGERS' | 'LEADERS' | 'NICHE' | 'SOVEREIGN_PARADIGM';
  quadrantName: string;
  description: string;
  isSovereignTerritory: boolean;
}

export interface MarketEntity {
  id: string;
  entityName: string;
  xScorePercent: number;
  yScorePercent: number;
  marketSharePercent: number;
  isSovereignPlatform: boolean;
  isCompetitor: boolean;
}

export interface StrategicTrajectory {
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  trajectoryHorizon: string;
  isExecutionOnTrack: boolean;
}

export interface MarketTensionQuadrantSlideData extends BaseSlide {
  type: 'market-tension-quadrant';
  xAxisLabel: string;
  yAxisLabel: string;
  quadrants: QuadrantDefinition[];
  marketEntities: MarketEntity[];
  strategicTrajectory: StrategicTrajectory;
}

// =============================================================================
// 30. Executive Close & Contact (executive-close-contact)
// =============================================================================
export interface StrategicCallToAction {
  headline: string;
  primaryRequest: string;
  immediateNextStep: string;
  decisionDeadline: string;
  isActionApproved: boolean;
}

export interface ExecutiveContact {
  id: string;
  name: string;
  executiveTitle: string;
  organization: string;
  emailContact: string;
  securityKeyFingerprint: string;
  isChiefEngineer: boolean;
  isAvailableForBriefing: boolean;
}

export interface VerificationSeal {
  sealAuthority: string;
  cryptographicHash: string;
  issueDate: string;
  isSealValid: boolean;
}

export interface ExecutiveCloseContactSlideData extends BaseSlide {
  type: 'executive-close-contact';
  strategicCallToAction: StrategicCallToAction;
  executiveContacts: ExecutiveContact[];
  verificationSeal: VerificationSeal;
}
