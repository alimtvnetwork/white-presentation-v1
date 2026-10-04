// lint-allow: file-size reason="Suite 2026 slide archetype contracts and type definitions" max=420
import type { BaseSlide } from './presentation';

export type Suite2026SlideType =
  | 'executive-pnl-waterfall-table'
  | 'competitive-feature-heatmap'
  | 'customer-persona-archetype-split'
  | 'global-data-jurisdiction-boundary'
  | 'hardware-interface-blueprint'
  | 'multi-horizon-value-realization-bridge'
  | 'two-sided-ecosystem-flywheel'
  | 'ishikawa-root-cause-fishbone'
  | 'modular-consumption-pricing-calculator'
  | 'live-product-viewport-walkthrough'
  | 'enterprise-risk-taxonomy-heatmap'
  | 'global-partner-tiering-ladder'
  | 'talent-competency-gap-heatmap'
  | 'slo-error-budget-burn-waterfall'
  | 'weighted-decision-tradeoff-matrix'
  | 'customer-churn-intervention-ladder';

export const SUITE_2026_SLIDE_TYPES: readonly Suite2026SlideType[] = [
  'executive-pnl-waterfall-table',
  'competitive-feature-heatmap',
  'customer-persona-archetype-split',
  'global-data-jurisdiction-boundary',
  'hardware-interface-blueprint',
  'multi-horizon-value-realization-bridge',
  'two-sided-ecosystem-flywheel',
  'ishikawa-root-cause-fishbone',
  'modular-consumption-pricing-calculator',
  'live-product-viewport-walkthrough',
  'enterprise-risk-taxonomy-heatmap',
  'global-partner-tiering-ladder',
  'talent-competency-gap-heatmap',
  'slo-error-budget-burn-waterfall',
  'weighted-decision-tradeoff-matrix',
  'customer-churn-intervention-ladder',
] as const;

// 1. Executive PnL Waterfall Table
export interface PnlWaterfallRowItem {
  id: string;
  label: string;
  category: string;
  amountMillions: number;
  variancePercent?: number;
  isPositive: boolean;
  isSubtotal: boolean;
  hasAuditVerification: boolean;
}

export interface ExecutivePnlWaterfallTableSlideData extends BaseSlide {
  type: 'executive-pnl-waterfall-table';
  fiscalPeriod: string;
  reportingCurrency: string;
  baselineRevenueMillions: number;
  netEbitdaMillions: number;
  stepHighlightRowIds?: string[];
  rows: PnlWaterfallRowItem[];
  hasAuditedFinancials: boolean;
}

// 2. Competitive Feature Heatmap
export interface CompetitiveCapabilityItem {
  id: string;
  capabilityName: string;
  category: string;
  ourScore: number;
  competitorScores: Record<string, number>;
  hasCheckmark: boolean;
  isRecommended: boolean;
  isIndustryBenchmark: boolean;
}

export interface CompetitiveFeatureHeatmapSlideData extends BaseSlide {
  type: 'competitive-feature-heatmap';
  marketSegment: string;
  competitorNames: string[];
  capabilities: CompetitiveCapabilityItem[];
  winRateAdvantagePercent: number;
  hasThirdPartyValidation: boolean;
}

// 3. Customer Persona Archetype Split
export interface PersonaDimensionItem {
  id: string;
  dimensionName: string;
  primaryPersonaValue: string;
  secondaryPersonaValue: string;
  isPositive: boolean;
  isDifferentiator: boolean;
  hasQuantitativeMetric: boolean;
}

export interface CustomerPersonaArchetypeSplitSlideData extends BaseSlide {
  type: 'customer-persona-archetype-split';
  primaryPersonaTitle: string;
  secondaryPersonaTitle: string;
  marketShareSplit: string;
  dimensions: PersonaDimensionItem[];
  hasValidatedInterviews: boolean;
}

// 4. Global Data Jurisdiction Boundary
export interface DataEnclaveItem {
  id: string;
  enclaveName: string;
  geographicRegion: string;
  jurisdictionLaw: string;
  dataClassification: string;
  latencyTargetMs: number;
  isCompliant: boolean;
  hasActiveBoundary: boolean;
  hasHardwareIsolation: boolean;
}

export interface GlobalDataJurisdictionBoundarySlideData extends BaseSlide {
  type: 'global-data-jurisdiction-boundary';
  complianceFramework: string;
  globalCoveragePercent: number;
  enclaves: DataEnclaveItem[];
  hasZeroTrustBoundaryActive: boolean;
}

// 5. Hardware Interface Blueprint
export interface HardwarePinpointItem {
  id: string;
  interfaceName: string;
  pinoutStandard: string;
  bandwidthGigabits: number;
  operatingVoltage: string;
  isHighSpeed: boolean;
  hasOpticalIsolation: boolean;
  isProductionReady: boolean;
}

export interface HardwareInterfaceBlueprintSlideData extends BaseSlide {
  type: 'hardware-interface-blueprint';
  boardRevision: string;
  formFactor: string;
  pinpoints: HardwarePinpointItem[];
  hasThermalCertification: boolean;
}

// 6. Multi-Horizon Value Realization Bridge
export interface ValueHorizonItem {
  id: string;
  horizonIndex: number;
  horizonLabel: string;
  targetTimeline: string;
  realizedValueMillions: number;
  strategicObjective: string;
  isUnlocked: boolean;
  isPositive: boolean;
  hasExecutiveSignoff: boolean;
}

export interface MultiHorizonValueRealizationBridgeSlideData extends BaseSlide {
  type: 'multi-horizon-value-realization-bridge';
  programHorizonTitle: string;
  cumulativeValueTargetMillions: number;
  horizons: ValueHorizonItem[];
  hasBoardApproval: boolean;
}

// 7. Two-Sided Ecosystem Flywheel
export interface FlywheelStageItem {
  id: string;
  stageIndex: number;
  stageTitle: string;
  metricLabel: string;
  velocityMultiplier: number;
  isSelfReinforcing: boolean;
  hasActiveSynergy: boolean;
  isPositive: boolean;
}

export interface TwoSidedEcosystemFlywheelSlideData extends BaseSlide {
  type: 'two-sided-ecosystem-flywheel';
  flywheelTheme: string;
  supplySideLabel: string;
  demandSideLabel: string;
  supplyStages: FlywheelStageItem[];
  demandStages: FlywheelStageItem[];
  isFlywheelAccelerating: boolean;
}

// 8. Ishikawa Root Cause Fishbone
export interface FishboneSpineItem {
  id: string;
  spineCategory: string;
  primaryCause: string;
  contributingFactors: string[];
  severityRating: number;
  isCriticalPath: boolean;
  hasRemediationPlan: boolean;
  isPositive: boolean;
}

export interface IshikawaRootCauseFishboneSlideData extends BaseSlide {
  type: 'ishikawa-root-cause-fishbone';
  incidentProblemStatement: string;
  incidentSeverityLevel: string;
  spines: FishboneSpineItem[];
  hasRootCauseIdentified: boolean;
}

// 9. Modular Consumption Pricing Calculator
export interface ConsumptionPricingTierItem {
  id: string;
  tierName: string;
  unitMetricName: string;
  costPerUnitUsd: number;
  minimumCommitment: number;
  isRecommended: boolean;
  isSubtotal: boolean;
  hasVolumeDiscount: boolean;
}

export interface ModularConsumptionPricingCalculatorSlideData extends BaseSlide {
  type: 'modular-consumption-pricing-calculator';
  currencyCode: string;
  billingFrequency: string;
  estimatedMonthlyUsage: number;
  tiers: ConsumptionPricingTierItem[];
  hasCustomEnterpriseContract: boolean;
}

// 10. Live Product Viewport Walkthrough
export interface ProductWalkthroughStepItem {
  id: string;
  stepIndex: number;
  screenTitle: string;
  interactionDescription: string;
  elementSelector: string;
  isCompleted: boolean;
  hasCheckmark: boolean;
  isPositive: boolean;
}

export interface LiveProductViewportWalkthroughSlideData extends BaseSlide {
  type: 'live-product-viewport-walkthrough';
  productVersionName: string;
  walkthroughPersona: string;
  steps: ProductWalkthroughStepItem[];
  hasInteractiveDemoEnabled: boolean;
}

// 11. Enterprise Risk Taxonomy Heatmap
export interface EnterpriseRiskTaxonomyItem {
  id: string;
  riskName: string;
  taxonomyCategory: string;
  likelihoodScore: number;
  impactScore: number;
  mitigationControl: string;
  isResidualRiskAcceptable: boolean;
  isBoardEscalated: boolean;
  hasAuditProof: boolean;
}

export interface EnterpriseRiskTaxonomyHeatmapSlideData extends BaseSlide {
  type: 'enterprise-risk-taxonomy-heatmap';
  auditYear: string;
  governanceCommittee: string;
  risks: EnterpriseRiskTaxonomyItem[];
  hasExecutiveReviewCompleted: boolean;
}

// 12. Global Partner Tiering Ladder
export interface GlobalPartnerTierItem {
  id: string;
  tierName: string;
  revenueCommitmentMillions: number;
  rebatePercent: number;
  technicalCertificationCount: number;
  isRecommended: boolean;
  hasDedicatedPartnerManager: boolean;
  hasExecutiveAccess: boolean;
}

export interface GlobalPartnerTieringLadderSlideData extends BaseSlide {
  type: 'global-partner-tiering-ladder';
  ecosystemProgramName: string;
  partnerCountGlobal: number;
  tiers: GlobalPartnerTierItem[];
  hasChannelIncentiveActive: boolean;
}

// 13. Talent Competency Gap Heatmap
export interface TalentCompetencyDomainItem {
  id: string;
  domainName: string;
  targetHeadcount: number;
  actualHeadcount: number;
  proficiencyScore: number;
  isCriticalCompetency: boolean;
  hasUpskillingProgramActive: boolean;
  isPositive: boolean;
}

export interface TalentCompetencyGapHeatmapSlideData extends BaseSlide {
  type: 'talent-competency-gap-heatmap';
  workforcePlanningCycle: string;
  businessUnitName: string;
  domains: TalentCompetencyDomainItem[];
  hasRetentionStrategyActive: boolean;
}

// 14. SLO Error Budget Burn Waterfall
export interface SloBurnIncidentItem {
  id: string;
  incidentTitle: string;
  serviceImpacted: string;
  burnRateMultiplier: number;
  budgetDepletedPercent: number;
  durationMinutes: number;
  isBudgetExhausted: boolean;
  hasAutomaticRollbackExecuted: boolean;
  isPositive: boolean;
}

export interface SloErrorBudgetBurnWaterfallSlideData extends BaseSlide {
  type: 'slo-error-budget-burn-waterfall';
  serviceLevelObjectiveName: string;
  targetReliabilityPercent: number;
  remainingBudgetPercent: number;
  incidents: SloBurnIncidentItem[];
  hasBreachedSloTarget: boolean;
}

// 15. Weighted Decision Tradeoff Matrix
export interface DecisionCriterionItem {
  id: string;
  criterionName: string;
  weightPercent: number;
  isMandatoryCriterion: boolean;
}

export interface DecisionOptionScoreItem {
  optionName: string;
  scores: Record<string, number>;
  totalWeightedScore: number;
  isRecommended: boolean;
  hasExecutiveSponsor: boolean;
}

export interface WeightedDecisionTradeoffMatrixSlideData extends BaseSlide {
  type: 'weighted-decision-tradeoff-matrix';
  evaluationContext: string;
  selectedDecisionOutcome: string;
  criteria: DecisionCriterionItem[];
  options: DecisionOptionScoreItem[];
  hasConsensusReached: boolean;
}

// 16. Customer Churn Intervention Ladder
export interface ChurnInterventionStageItem {
  id: string;
  stageIndex: number;
  stageName: string;
  healthScoreThreshold: number;
  interventionTrigger: string;
  annualRecurringRevenuePreserved: number;
  isPositive: boolean;
  hasCustomerSuccessEscalation: boolean;
  hasCheckmark: boolean;
}

export interface CustomerChurnInterventionLadderSlideData extends BaseSlide {
  type: 'customer-churn-intervention-ladder';
  customerSegmentName: string;
  netRevenueRetentionTarget: number;
  stages: ChurnInterventionStageItem[];
  hasPredictiveModelActive: boolean;
}

// Aggregated Suite 2026 Slide Data Union
export type Suite2026SlideData =
  | ExecutivePnlWaterfallTableSlideData
  | CompetitiveFeatureHeatmapSlideData
  | CustomerPersonaArchetypeSplitSlideData
  | GlobalDataJurisdictionBoundarySlideData
  | HardwareInterfaceBlueprintSlideData
  | MultiHorizonValueRealizationBridgeSlideData
  | TwoSidedEcosystemFlywheelSlideData
  | IshikawaRootCauseFishboneSlideData
  | ModularConsumptionPricingCalculatorSlideData
  | LiveProductViewportWalkthroughSlideData
  | EnterpriseRiskTaxonomyHeatmapSlideData
  | GlobalPartnerTieringLadderSlideData
  | TalentCompetencyGapHeatmapSlideData
  | SloErrorBudgetBurnWaterfallSlideData
  | WeightedDecisionTradeoffMatrixSlideData
  | CustomerChurnInterventionLadderSlideData;

export function isSuite2026Slide(slide: any): slide is Suite2026SlideData {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (!hasSlide) return false;
  return SUITE_2026_SLIDE_TYPES.includes(slide.type);
}
