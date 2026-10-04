// lint-allow: file-size reason="Suite 2027 slide archetype contracts and type definitions" max=750
import type { BaseSlide } from './presentation';

// =============================================================================
// Discriminated Union Types for Suite 2027 (Chapter 45)
// =============================================================================

export const SUITE_2027_STEP_SLIDE_TYPES = [
  'ai-inference-cost-token-waterfall',
  'zero-trust-microsegmentation-map',
  'incident-sev1-command-timeline',
  'cloud-finops-unit-rate-optimization',
  'enterprise-ai-governance-guardrails',
  'data-lakehouse-medallion-pipeline',
  'merger-acquisition-synergy-bridge',
  'hybrid-cloud-dr-failover-topology',
  'value-stream-bottleneck-flow',
] as const;

export const SUITE_2027_FLAT_SLIDE_TYPES = [
  'cross-functional-raci-matrix',
  'saas-magic-number-efficiency-gauge',
  'supply-chain-geopolitical-chokepoint',
  'product-market-fit-cohort-triangles',
  'developer-productivity-space-framework',
  'customer-health-scorecard-matrix',
] as const;

export const SUITE_2027_SLIDE_TYPES = [
  ...SUITE_2027_STEP_SLIDE_TYPES,
  ...SUITE_2027_FLAT_SLIDE_TYPES,
] as const;

export type Suite2027StepSlideType = (typeof SUITE_2027_STEP_SLIDE_TYPES)[number];
export type Suite2027FlatSlideType = (typeof SUITE_2027_FLAT_SLIDE_TYPES)[number];
export type Suite2027SlideType = (typeof SUITE_2027_SLIDE_TYPES)[number];

// Specification Aliases
export type GlobalPptElevation15SlideType = Suite2027SlideType;

// =============================================================================
// 1. Kinetic 4-Step: ai-inference-cost-token-waterfall
// =============================================================================

export interface TokenCostNode {
  id: string;
  category: string;
  costPerThousandTokensUsd: number;
  percentageOfTotalCost: number;
  isOptimized: boolean;
  hasHardwareAccelerationActive: boolean;
}

export interface TokenWaterfallStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  tokenThroughputTps: number;
  cumulativeCostUsd: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface AiInferenceCostTokenWaterfallSlideData extends BaseSlide {
  type: 'ai-inference-cost-token-waterfall';
  modelIdentifier: string;
  blendedCostPerMillionTokensUsd: number;
  timeToFirstTokenMs: number;
  leadArchitect: string;
  leadRole: string;
  waterfallStages: TokenWaterfallStage[];
  costNodes: TokenCostNode[];
  hasSpeculativeDecoding: boolean;
  hasQuantizationOptimized: boolean;
  hasCacheHitRate: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 2. Kinetic 4-Step: zero-trust-microsegmentation-map
// =============================================================================

export interface MicrosegmentNode {
  id: string;
  workloadName: string;
  namespace: string;
  securityZone: string;
  svidIdentity: string;
  isQuarantined: boolean;
  hasEbpfFilterActive: boolean;
}

export interface SegmentationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  enforcedRuleCount: number;
  packetsInspectedRatePerSec: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ZeroTrustMicrosegmentationMapSlideData extends BaseSlide {
  type: 'zero-trust-microsegmentation-map';
  clusterIdentifier: string;
  packetRejectionRatePpm: number;
  leadArchitect: string;
  leadRole: string;
  segmentationStages: SegmentationStage[];
  workloadNodes: MicrosegmentNode[];
  isZeroTrustEnforced: boolean;
  hasEbpfActive: boolean;
  hasMutualTls: boolean;
  isQuarantineEngaged: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 3. Kinetic 4-Step: incident-sev1-command-timeline
// =============================================================================

export interface IncidentActionNode {
  id: string;
  timeOffsetMinutes: number;
  actionTitle: string;
  actionOwner: string;
  executionStatus: string;
  isAutomated: boolean;
  hasVerificationCheckPassed: boolean;
}

export interface IncidentTimelineStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  timestampOffset: string;
  blastRadiusPercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface IncidentSev1CommandTimelineSlideData extends BaseSlide {
  type: 'incident-sev1-command-timeline';
  incidentIdentifier: string;
  incidentCommander: string;
  commanderRole: string;
  meanTimeToRecoveryMinutes: number;
  slaTargetMinutes: number;
  timelineStages: IncidentTimelineStage[];
  actionNodes: IncidentActionNode[];
  isIncidentResolved: boolean;
  hasWarRoomActive: boolean;
  hasCanaryIsolated: boolean;
  hasMetSlaObjective: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 4. Kinetic 4-Step: cloud-finops-unit-rate-optimization
// =============================================================================

export interface WorkloadFinopsNode {
  id: string;
  workloadName: string;
  cloudProvider: string;
  monthlyCostUsd: number;
  unitCostPerUserUsd: number;
  realizedSavingsUsd: number;
  isTaggedFully: boolean;
  hasArbitrageActive: boolean;
}

export interface FinopsOptimizationStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  totalSpendMonitoredUsd: number;
  savingsRunRateUsd: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface CloudFinopsUnitRateOptimizationSlideData extends BaseSlide {
  type: 'cloud-finops-unit-rate-optimization';
  organizationName: string;
  annualizedSavingsTargetUsd: number;
  unitCostEfficiencyIndex: number;
  leadArchitect: string;
  leadRole: string;
  optimizationStages: FinopsOptimizationStage[];
  workloadNodes: WorkloadFinopsNode[];
  hasAutoArbitrageEnabled: boolean;
  isTaggedFully: boolean;
  hasContinuousAudit: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 5. Kinetic 4-Step: enterprise-ai-governance-guardrails
// =============================================================================

export interface GuardrailMetricNode {
  id: string;
  guardrailLayer: string;
  blockedRequestsCount: number;
  latencyOverheadMs: number;
  complianceStandard: string;
  isCompliant: boolean;
  hasActiveEnforcement: boolean;
}

export interface GuardrailStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  inspectionLatencyMs: number;
  passRatePercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface EnterpriseAiGovernanceGuardrailsSlideData extends BaseSlide {
  type: 'enterprise-ai-governance-guardrails';
  governanceFramework: string;
  overallComplianceScore: number;
  leadArchitect: string;
  leadRole: string;
  guardrailStages: GuardrailStage[];
  metricNodes: GuardrailMetricNode[];
  isEuAiActCompliant: boolean;
  hasPiiRedactionActive: boolean;
  hasAuditLedgerPreserved: boolean;
  isTamperEvident: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 6. Kinetic 4-Step: data-lakehouse-medallion-pipeline
// =============================================================================

export interface LakehouseLayerNode {
  id: string;
  layerName: string;
  tableCount: number;
  storageVolumeTerabytes: number;
  freshnessLatencySeconds: number;
  isSchemaEnforced: boolean;
  hasIcebergOptimized: boolean;
}

export interface MedallionPipelineStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  throughputEventsPerSec: number;
  dataQualityScorePercent: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface DataLakehouseMedallionPipelineSlideData extends BaseSlide {
  type: 'data-lakehouse-medallion-pipeline';
  lakehouseEngine: string;
  totalDataFootprintPetabytes: number;
  leadArchitect: string;
  leadRole: string;
  pipelineStages: MedallionPipelineStage[];
  layerNodes: LakehouseLayerNode[];
  isStreamingActive: boolean;
  hasDataQualityPassed: boolean;
  hasSchemaEnforced: boolean;
  isIcebergOptimized: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 7. Kinetic 4-Step: merger-acquisition-synergy-bridge
// =============================================================================

export interface SynergyBridgeNode {
  id: string;
  category: string;
  impactAmountMillionsUsd: number;
  isPositiveContribution: boolean;
  hasRealizedAuditVerification: boolean;
}

export interface SynergyStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  cumulativeValueMillionsUsd: number;
  realizationProgressPercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface MergerAcquisitionSynergyBridgeSlideData extends BaseSlide {
  type: 'merger-acquisition-synergy-bridge';
  dealCodename: string;
  targetEnterpriseValueMillionsUsd: number;
  integrationHorizonDays: number;
  leadArchitect: string;
  leadRole: string;
  synergyStages: SynergyStage[];
  bridgeNodes: SynergyBridgeNode[];
  hasSynergyTargetMet: boolean;
  isIntegrationOnSchedule: boolean;
  hasExecutiveSignoffCompleted: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 8. Kinetic 4-Step: hybrid-cloud-dr-failover-topology
// =============================================================================

export interface DrSiteNode {
  id: string;
  siteName: string;
  cloudRegion: string;
  trafficLoadPercentage: number;
  replicationLagSeconds: number;
  isPrimaryActive: boolean;
  hasQuorumHealthy: boolean;
}

export interface FailoverStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  recoveryPointObjectiveSeconds: number;
  recoveryTimeObjectiveSeconds: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface HybridCloudDrFailoverTopologySlideData extends BaseSlide {
  type: 'hybrid-cloud-dr-failover-topology';
  systemName: string;
  targetRpoSeconds: number;
  targetRtoSeconds: number;
  leadArchitect: string;
  leadRole: string;
  failoverStages: FailoverStage[];
  siteNodes: DrSiteNode[];
  isFailoverComplete: boolean;
  hasZeroDataLoss: boolean;
  isAnycastRerouted: boolean;
  hasReplicaPromoted: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 9. Kinetic 4-Step: value-stream-bottleneck-flow
// =============================================================================

export interface ValueStreamNode {
  id: string;
  stageName: string;
  processTimeHours: number;
  waitTimeHours: number;
  flowEfficiencyPercentage: number;
  isBottleneckStage: boolean;
  hasAutomationOptimized: boolean;
}

export interface StreamStage {
  stepIndex: number;
  stageName: string;
  stageSubtitle: string;
  cycleTimeHours: number;
  efficiencyPercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ValueStreamBottleneckFlowSlideData extends BaseSlide {
  type: 'value-stream-bottleneck-flow';
  engineeringOrgName: string;
  totalLeadTimeDays: number;
  totalCycleTimeHours: number;
  leadArchitect: string;
  leadRole: string;
  streamStages: StreamStage[];
  streamNodes: ValueStreamNode[];
  hasContinuousDelivery: boolean;
  isBottleneckIdentified: boolean;
  hasCanaryVerified: boolean;
  hasOptimizedFlow: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 10. Flat Sovereign: cross-functional-raci-matrix
// =============================================================================

export interface RaciMatrixRow {
  id: string;
  initiativeName: string;
  category: string;
  chiefSoftwareEngineerRaci: 'R' | 'A' | 'C' | 'I';
  vpInfrastructureRaci: 'R' | 'A' | 'C' | 'I';
  headSecOpsRaci: 'R' | 'A' | 'C' | 'I';
  leadDataScientistRaci: 'R' | 'A' | 'C' | 'I';
  finOpsDirectorRaci: 'R' | 'A' | 'C' | 'I';
  headComplianceRaci: 'R' | 'A' | 'C' | 'I';
  hasExecutiveSignoff: boolean;
}

export interface CrossFunctionalRaciMatrixSlideData extends BaseSlide {
  type: 'cross-functional-raci-matrix';
  governanceCycle: string;
  leadArchitect: string;
  leadRole: string;
  matrixRows: RaciMatrixRow[];
  isCompliantWithGovernance: boolean;
  hasAuditTrail: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 11. Flat Sovereign: saas-magic-number-efficiency-gauge
// =============================================================================

export interface EfficiencyGaugeItem {
  id: string;
  metricLabel: string;
  currentValue: number;
  benchmarkTarget: number;
  unit: string;
  efficiencyRating: string;
  isOptimalTier: boolean;
}

export interface SaasMagicNumberEfficiencyGaugeSlideData extends BaseSlide {
  type: 'saas-magic-number-efficiency-gauge';
  fiscalQuarter: string;
  saasMagicNumber: number;
  cacPaybackMonths: number;
  leadArchitect: string;
  leadRole: string;
  gauges: EfficiencyGaugeItem[];
  isTopDecilePerformance: boolean;
  hasHealthyPayback: boolean;
  isGrowthEfficient: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 12. Flat Sovereign: supply-chain-geopolitical-chokepoint
// =============================================================================

export interface ChokepointRiskNode {
  id: string;
  chokepointName: string;
  globalTradeSharePercentage: number;
  delayVarianceDays: number;
  vulnerabilityIndexScore: number;
  isAlternativeRouteAvailable: boolean;
  hasVulnerabilityAlert: boolean;
}

export interface SupplyChainGeopoliticalChokepointSlideData extends BaseSlide {
  type: 'supply-chain-geopolitical-chokepoint';
  operationalYear: string;
  totalVulnerabilityScore: number;
  leadArchitect: string;
  leadRole: string;
  chokepointNodes: ChokepointRiskNode[];
  isDisrupted: boolean;
  hasContinuousAudit: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 13. Flat Sovereign: product-market-fit-cohort-triangles
// =============================================================================

export interface RetentionCohortRow {
  id: string;
  cohortLabel: string;
  userCount: number;
  month0RetentionPercent: number;
  month1RetentionPercent: number;
  month3RetentionPercent: number;
  month6RetentionPercent: number;
  month12RetentionPercent: number;
  isAsymptoteFlattened: boolean;
}

export interface ProductMarketFitCohortTrianglesSlideData extends BaseSlide {
  type: 'product-market-fit-cohort-triangles';
  productName: string;
  asymptoticRetentionRate: number;
  quickRatio: number;
  leadArchitect: string;
  leadRole: string;
  cohortRows: RetentionCohortRow[];
  hasFlattenedRetentionCurve: boolean;
  isProductMarketFitAchieved: boolean;
  hasNetNegativeChurn: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 14. Flat Sovereign: developer-productivity-space-framework
// =============================================================================

export interface SpaceDimensionNode {
  id: string;
  dimensionCode: 'S' | 'P' | 'A' | 'C' | 'E';
  dimensionTitle: string;
  primaryMetric: string;
  metricScore: number;
  benchmarkPercentile: number;
  isEliteTier: boolean;
}

export interface DeveloperProductivitySpaceFrameworkSlideData extends BaseSlide {
  type: 'developer-productivity-space-framework';
  engineeringOrgName: string;
  overallHealthScore: number;
  leadArchitect: string;
  leadRole: string;
  dimensions: SpaceDimensionNode[];
  isDoraEliteTier: boolean;
  hasDeepWorkProtected: boolean;
  hasHealthyVelocity: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// 15. Flat Sovereign: customer-health-scorecard-matrix
// =============================================================================

export interface CustomerAccountHealthRow {
  id: string;
  accountName: string;
  annualRecurringRevenueUsd: number;
  featureAdoptionRatePercent: number;
  executiveAlignmentTier: 'Strong' | 'Moderate' | 'At Risk';
  openEscalationCount: number;
  npsSentimentScore: number;
  isContractRenewalSecured: boolean;
  hasExecutiveSponsorAligned: boolean;
}

export interface CustomerHealthScorecardMatrixSlideData extends BaseSlide {
  type: 'customer-health-scorecard-matrix';
  reportingQuarter: string;
  portfolioRetentionRatePercent: number;
  leadArchitect: string;
  leadRole: string;
  accounts: CustomerAccountHealthRow[];
  hasLowSupportEscalations: boolean;
  hasContinuousAudit: boolean;
  hasTelemetryGlow: boolean;
}

// =============================================================================
// Aggregated Suite 2027 Slide Data Union
// =============================================================================

export type Suite2027StepSlideData =
  | AiInferenceCostTokenWaterfallSlideData
  | ZeroTrustMicrosegmentationMapSlideData
  | IncidentSev1CommandTimelineSlideData
  | CloudFinopsUnitRateOptimizationSlideData
  | EnterpriseAiGovernanceGuardrailsSlideData
  | DataLakehouseMedallionPipelineSlideData
  | MergerAcquisitionSynergyBridgeSlideData
  | HybridCloudDrFailoverTopologySlideData
  | ValueStreamBottleneckFlowSlideData;

export type Suite2027FlatSlideData =
  | CrossFunctionalRaciMatrixSlideData
  | SaasMagicNumberEfficiencyGaugeSlideData
  | SupplyChainGeopoliticalChokepointSlideData
  | ProductMarketFitCohortTrianglesSlideData
  | DeveloperProductivitySpaceFrameworkSlideData
  | CustomerHealthScorecardMatrixSlideData;

export type Suite2027SlideData = Suite2027StepSlideData | Suite2027FlatSlideData;

// Specification Aliases
export type GlobalPptElevation15SlideData = Suite2027SlideData;

// =============================================================================
// Helper Type Guards & Step Progression Engine
// =============================================================================

export function isSuite2027Slide(slide: unknown): slide is Suite2027SlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2027_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isSuite2027StepSlide(slide: unknown): slide is Suite2027StepSlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2027_STEP_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

export function isSuite2027FlatSlide(slide: unknown): slide is Suite2027FlatSlideData {
  if (!slide || typeof slide !== 'object') return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (SUITE_2027_FLAT_SLIDE_TYPES as readonly string[]).includes(candidate.type);
}

// Specification Alias Guard
export function isGlobalPptElevationSlide(slide: unknown): slide is GlobalPptElevation15SlideData {
  return isSuite2027Slide(slide);
}

export function calculateSuite2027StepCount(slide: Suite2027SlideData): number {
  switch (slide.type) {
    case 'ai-inference-cost-token-waterfall':
      return Math.max(slide.waterfallStages?.length ?? 4, 1);
    case 'zero-trust-microsegmentation-map':
      return Math.max(slide.segmentationStages?.length ?? 4, 1);
    case 'incident-sev1-command-timeline':
      return Math.max(slide.timelineStages?.length ?? 4, 1);
    case 'cloud-finops-unit-rate-optimization':
      return Math.max(slide.optimizationStages?.length ?? 4, 1);
    case 'enterprise-ai-governance-guardrails':
      return Math.max(slide.guardrailStages?.length ?? 4, 1);
    case 'data-lakehouse-medallion-pipeline':
      return Math.max(slide.pipelineStages?.length ?? 4, 1);
    case 'merger-acquisition-synergy-bridge':
      return Math.max(slide.synergyStages?.length ?? 4, 1);
    case 'hybrid-cloud-dr-failover-topology':
      return Math.max(slide.failoverStages?.length ?? 4, 1);
    case 'value-stream-bottleneck-flow':
      return Math.max(slide.streamStages?.length ?? 4, 1);
    case 'cross-functional-raci-matrix':
    case 'saas-magic-number-efficiency-gauge':
    case 'supply-chain-geopolitical-chokepoint':
    case 'product-market-fit-cohort-triangles':
    case 'developer-productivity-space-framework':
    case 'customer-health-scorecard-matrix':
    default:
      return 1;
  }
}

export function calculateGlobalPptElevationStepCount(slide: GlobalPptElevation15SlideData): number {
  return calculateSuite2027StepCount(slide);
}
