// lint-allow: file-size reason="Suite 2032 slide archetype contracts and type definitions" max=600
import type { BaseSlide } from './presentation';

// Discriminated Union Types for Suite 2032 (15 Slide Archetypes)
export const SUITE_2032_STEP_SLIDE_TYPES = [
  'executive-brief-distillation',
  'milestone-roadmap-stream',
  'hex-architecture-mesh',
  'customer-conversion-funnel',
  'transformation-split-canvas',
  'deal-ecosystem-flywheel',
  'pnl-runway-waterfall',
  'api-spec-terminal-split',
] as const;

export const SUITE_2032_FLAT_SLIDE_TYPES = [
  'matrix-feature-benchmark',
  'executive-metrics-pulse',
  'board-governance-roster',
  'editorial-quote-spotlight',
  'bento-capability-mosaic',
  'risk-opportunity-quadrant',
  'commercial-tier-packaging',
] as const;

export const SUITE_2032_SLIDE_TYPES = [
  ...SUITE_2032_STEP_SLIDE_TYPES,
  ...SUITE_2032_FLAT_SLIDE_TYPES,
] as const;

export type Suite2032StepSlideType = (typeof SUITE_2032_STEP_SLIDE_TYPES)[number];
export type Suite2032FlatSlideType = (typeof SUITE_2032_FLAT_SLIDE_TYPES)[number];
export type Suite2032SlideType = (typeof SUITE_2032_SLIDE_TYPES)[number];
export type GlobalPptSuite2032SlideType = Suite2032SlideType;

// ============================================================================
// 1. Kinetic 4-Step: executive-brief-distillation
// ============================================================================
export interface BriefDistillationStage {
  stepIndex: number;
  pillarTitle: string;
  headlineSummary: string;
  coreTakeaway: string;
  evidenceMetric: string;
  evidenceLabel: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface BriefDistillationKeySignal {
  id: string;
  signalLabel: string;
  impactScore: string;
  isStrategicPriority: boolean;
}

export interface ExecutiveBriefDistillationSlideData extends BaseSlide {
  type: 'executive-brief-distillation';
  executiveSponsor: string;
  briefingPeriod: string;
  distillationStages: BriefDistillationStage[];
  keySignals: BriefDistillationKeySignal[];
  isExecutiveSignoffComplete: boolean;
  hasConsensusLocked: boolean;
  hasHighPriorityGlow: boolean;
}

// ============================================================================
// 2. Flat Overview: matrix-feature-benchmark
// ============================================================================
export interface MatrixBenchmarkCompetitor {
  id: string;
  name: string;
  badge?: string;
  isOurPlatform: boolean;
}

export interface MatrixBenchmarkFeatureRow {
  id: string;
  featureName: string;
  featureCategory: string;
  scores: Record<string, 'supported' | 'partial' | 'unsupported' | string>;
  isDifferentiatingFactor: boolean;
  hasEnterpriseSecurity: boolean;
}

export interface MatrixFeatureBenchmarkSlideData extends BaseSlide {
  type: 'matrix-feature-benchmark';
  benchmarkCategory: string;
  evaluatedVersion: string;
  competitors: MatrixBenchmarkCompetitor[];
  featureRows: MatrixBenchmarkFeatureRow[];
  isEvaluatedByThirdParty: boolean;
  hasEnterpriseComplianceVerified: boolean;
  hasTelemetryHighlight: boolean;
}

// ============================================================================
// 3. Flat Overview: executive-metrics-pulse
// ============================================================================
export interface ExecutivePulseMetricItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  changePercentage: string;
  periodComparison: string;
  targetBenchmark: string;
  isPositiveTrend: boolean;
  hasExceededTarget: boolean;
}

export interface ExecutivePulseDepartmentSummary {
  id: string;
  departmentName: string;
  performanceScore: number;
  status: string;
  hasAuditClearance: boolean;
}

export interface ExecutiveMetricsPulseSlideData extends BaseSlide {
  type: 'executive-metrics-pulse';
  reportWindow: string;
  overallHealthScore: number;
  metrics: ExecutivePulseMetricItem[];
  departments: ExecutivePulseDepartmentSummary[];
  isPulseHealthy: boolean;
  hasRealtimeSyncActive: boolean;
  hasAlertTriggered: boolean;
}

// ============================================================================
// 4. Kinetic 4-Step: milestone-roadmap-stream
// ============================================================================
export interface RoadmapStreamMilestoneStage {
  stepIndex: number;
  timeQuarter: string;
  milestoneTitle: string;
  deliverableSummary: string;
  targetReleaseDate: string;
  completionPercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface RoadmapStreamStreamTrack {
  id: string;
  trackName: string;
  ownerRole: string;
  headcount: number;
  isCriticalPath: boolean;
}

export interface MilestoneRoadmapStreamSlideData extends BaseSlide {
  type: 'milestone-roadmap-stream';
  programLead: string;
  strategicInitiative: string;
  roadmapStages: RoadmapStreamMilestoneStage[];
  streamTracks: RoadmapStreamStreamTrack[];
  isRoadmapOnSchedule: boolean;
  hasResourceBufferAllocated: boolean;
  hasMilestoneGlow: boolean;
}

// ============================================================================
// 5. Kinetic 4-Step: hex-architecture-mesh
// ============================================================================
export interface HexArchitectureStage {
  stepIndex: number;
  tierName: string;
  layerDescription: string;
  protocolStack: string;
  latencyProfile: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface HexMeshCellNode {
  id: string;
  nodeName: string;
  cellRing: number;
  boundaryRole: 'core-domain' | 'inbound-adapter' | 'outbound-adapter' | 'mesh-backbone';
  throughputRps: number;
  isResilientCircuitArmed: boolean;
  hasZeroTrustEnforced: boolean;
}

export interface HexArchitectureMeshSlideData extends BaseSlide {
  type: 'hex-architecture-mesh';
  systemIdentifier: string;
  domainBoundary: string;
  meshStages: HexArchitectureStage[];
  meshCells: HexMeshCellNode[];
  isMeshConverged: boolean;
  hasEventSourcingActive: boolean;
  hasTelemetryHighlight: boolean;
}

// ============================================================================
// 6. Flat Overview: board-governance-roster
// ============================================================================
export interface BoardMemberProfile {
  id: string;
  memberName: string;
  boardRole: string;
  committeeMembership: string;
  tenureYears: number;
  biographySnippet: string;
  avatarUrl?: string;
  isIndependentDirector: boolean;
  hasVotingRights: boolean;
}

export interface GovernanceCommitteeMetric {
  id: string;
  committeeName: string;
  chairPerson: string;
  annualMeetingsCount: number;
  hasCharterReviewed: boolean;
}

export interface BoardGovernanceRosterSlideData extends BaseSlide {
  type: 'board-governance-roster';
  governanceYear: string;
  boardQuorumStatus: string;
  boardMembers: BoardMemberProfile[];
  committees: GovernanceCommitteeMetric[];
  isGovernanceCompliant: boolean;
  hasIndependentMajority: boolean;
  hasAuditCharterApproved: boolean;
}

// ============================================================================
// 7. Flat Overview: editorial-quote-spotlight
// ============================================================================
export interface EditorialKeyTakeaway {
  id: string;
  takeawayLabel: string;
  supportingContext: string;
  isCoreThesis: boolean;
}

export interface EditorialQuoteSpotlightSlideData extends BaseSlide {
  type: 'editorial-quote-spotlight';
  primaryQuote: string;
  quoteAttribution: string;
  attributionTitle: string;
  organizationName: string;
  publicationSource?: string;
  publicationDate?: string;
  keyTakeaways: EditorialKeyTakeaway[];
  isFeaturedEndorsement: boolean;
  hasVerifiedCitation: boolean;
  hasAmbientGlow: boolean;
}

// ============================================================================
// 8. Kinetic 4-Step: customer-conversion-funnel
// ============================================================================
export interface FunnelStageItem {
  stepIndex: number;
  stageName: string;
  visitorCount: number;
  conversionRatePercentage: number;
  dropoffRatePercentage: number;
  optimizationLever: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface FunnelChannelAttribution {
  id: string;
  channelName: string;
  leadVolume: number;
  cacUsd: number;
  isTopPerformingChannel: boolean;
}

export interface CustomerConversionFunnelSlideData extends BaseSlide {
  type: 'customer-conversion-funnel';
  funnelTimeWindow: string;
  totalVisitorsAudience: number;
  overallConversionPercentage: number;
  funnelStages: FunnelStageItem[];
  channels: FunnelChannelAttribution[];
  isFunnelOptimized: boolean;
  hasRetargetingActive: boolean;
  hasTelemetryHighlight: boolean;
}

// ============================================================================
// 9. Kinetic 4-Step: transformation-split-canvas
// ============================================================================
export interface TransformationPhaseStage {
  stepIndex: number;
  phaseName: string;
  phaseObjective: string;
  legacyStateSnapshot: string;
  futureStateSnapshot: string;
  valueRealizationPercentage: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface TransformationValuePillar {
  id: string;
  pillarTitle: string;
  roiMultiplier: string;
  efficiencyGainPercentage: number;
  isStrategicTransformation: boolean;
}

export interface TransformationSplitCanvasSlideData extends BaseSlide {
  type: 'transformation-split-canvas';
  programHorizon: string;
  executiveSummary: string;
  transformationStages: TransformationPhaseStage[];
  valuePillars: TransformationValuePillar[];
  isTransformationActive: boolean;
  hasChangeManagementApproved: boolean;
  hasTelemetryGlow: boolean;
}

// ============================================================================
// 10. Flat Overview: bento-capability-mosaic
// ============================================================================
export interface BentoCapabilityTile {
  id: string;
  tileTitle: string;
  tileSpan: 'col-span-1' | 'col-span-2' | 'col-span-3' | 'row-span-1' | 'row-span-2';
  tileDescription: string;
  badgeLabel: string;
  keyMetricValue?: string;
  keyMetricLabel?: string;
  iconName?: string;
  isFeaturedCapability: boolean;
  hasLiveStatusPulse: boolean;
}

export interface BentoCapabilityMosaicSlideData extends BaseSlide {
  type: 'bento-capability-mosaic';
  mosaicCategory: string;
  architectureVersion: string;
  tiles: BentoCapabilityTile[];
  isMosaicFullyDeployed: boolean;
  hasModularArchitecture: boolean;
  hasGridTelemetryHighlight: boolean;
}

// ============================================================================
// 11. Kinetic 4-Step: deal-ecosystem-flywheel
// ============================================================================
export interface FlywheelQuadrantStage {
  stepIndex: number;
  stageTitle: string;
  flywheelDriver: string;
  momentumMetric: string;
  reinforcingFeedbackLoop: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface FlywheelPartnerNode {
  id: string;
  partnerTier: string;
  annualGrossMerchandiseValue: string;
  isAnchorEcosystemPartner: boolean;
  hasJointGoToMarketVerified: boolean;
}

export interface DealEcosystemFlywheelSlideData extends BaseSlide {
  type: 'deal-ecosystem-flywheel';
  ecosystemName: string;
  compoundGrowthRatePercentage: number;
  flywheelStages: FlywheelQuadrantStage[];
  partnerNodes: FlywheelPartnerNode[];
  isFlywheelSelfSustaining: boolean;
  hasNetworkEffectsAccelerated: boolean;
  hasDynamicRotationGlow: boolean;
}

// ============================================================================
// 12. Kinetic 4-Step: pnl-runway-waterfall
// ============================================================================
export interface WaterfallStepStage {
  stepIndex: number;
  stepLabel: string;
  categoryType: 'gross-revenue' | 'cogs-reduction' | 'opex-expense' | 'net-runway';
  deltaAmountMillionUsd: number;
  cumulativeBalanceMillionUsd: number;
  varianceExplanation: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface PnlRunwaySummaryMetric {
  id: string;
  metricLabel: string;
  metricValue: string;
  isRunwayPositive: boolean;
  hasBoardApproval: boolean;
}

export interface PnlRunwayWaterfallSlideData extends BaseSlide {
  type: 'pnl-runway-waterfall';
  fiscalPeriod: string;
  startingCashBalanceMillionUsd: number;
  endingCashBalanceMillionUsd: number;
  runwayMonthsRemaining: number;
  waterfallStages: WaterfallStepStage[];
  summaryMetrics: PnlRunwaySummaryMetric[];
  isRunwayHealthy: boolean;
  hasCapitalCallBuffer: boolean;
  hasFinancialAuditConfirmed: boolean;
}

// ============================================================================
// 13. Flat Overview: risk-opportunity-quadrant
// ============================================================================
export interface RiskOpportunityItem {
  id: string;
  itemTitle: string;
  impactScore: number;
  probabilityScore: number;
  quadrant: 'strategic-opportunity' | 'containable-risk' | 'existential-threat' | 'tactical-quick-win';
  mitigationAction: string;
  isCriticalAttentionRequired: boolean;
  hasMitigationAssigned: boolean;
}

export interface RiskOpportunityQuadrantSlideData extends BaseSlide {
  type: 'risk-opportunity-quadrant';
  auditQuarter: string;
  chiefRiskOfficer: string;
  items: RiskOpportunityItem[];
  isRiskEnvelopeBounded: boolean;
  hasExecutiveOversightApproved: boolean;
  hasQuadrantOverlayActive: boolean;
}

// ============================================================================
// 14. Kinetic 4-Step: api-spec-terminal-split
// ============================================================================
export interface ApiSpecTerminalStage {
  stepIndex: number;
  operationName: string;
  httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpointPath: string;
  requestSnippet: string;
  responseSnippet: string;
  latencyBenchmarkMs: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ApiHeaderSpec {
  id: string;
  headerName: string;
  headerValueDescription: string;
  isRequiredHeader: boolean;
}

export interface ApiSpecTerminalSplitSlideData extends BaseSlide {
  type: 'api-spec-terminal-split';
  apiTitle: string;
  openApiVersion: string;
  baseUrl: string;
  terminalStages: ApiSpecTerminalStage[];
  standardHeaders: ApiHeaderSpec[];
  isTlsEnforced: boolean;
  hasRateLimitActive: boolean;
  hasLiveSyntaxHighlighting: boolean;
}

// ============================================================================
// 15. Flat Overview: commercial-tier-packaging
// ============================================================================
export interface CommercialPricingTier {
  id: string;
  tierName: string;
  tagline: string;
  monthlyPriceUsd: number;
  billingFrequency: string;
  featuresList: string[];
  isRecommendedTier: boolean;
  hasCustomDeployment: boolean;
  slaUptimePercentage: number;
}

export interface PackagingAddOnModule {
  id: string;
  moduleName: string;
  monthlyPriceUsd: number;
  isSecurityFeature: boolean;
}

export interface CommercialTierPackagingSlideData extends BaseSlide {
  type: 'commercial-tier-packaging';
  pricingModel: string;
  currencyCode: string;
  annualDiscountPercentage: number;
  pricingTiers: CommercialPricingTier[];
  addOnModules: PackagingAddOnModule[];
  isAnnualBillingDefault: boolean;
  hasEnterpriseContractOption: boolean;
  hasPriceLockGuaranteed: boolean;
}

// ============================================================================
// Union and Guards
// ============================================================================
export type Suite2032StepSlideData =
  | ExecutiveBriefDistillationSlideData
  | MilestoneRoadmapStreamSlideData
  | HexArchitectureMeshSlideData
  | CustomerConversionFunnelSlideData
  | TransformationSplitCanvasSlideData
  | DealEcosystemFlywheelSlideData
  | PnlRunwayWaterfallSlideData
  | ApiSpecTerminalSplitSlideData;

export type Suite2032FlatSlideData =
  | MatrixFeatureBenchmarkSlideData
  | ExecutiveMetricsPulseSlideData
  | BoardGovernanceRosterSlideData
  | EditorialQuoteSpotlightSlideData
  | BentoCapabilityMosaicSlideData
  | RiskOpportunityQuadrantSlideData
  | CommercialTierPackagingSlideData;

export type Suite2032SlideData = Suite2032StepSlideData | Suite2032FlatSlideData;
export type GlobalPptSuite2032SlideData = Suite2032SlideData;

export const SUITE_2032_STAGE_KEYS: Record<string, string> = {
  'executive-brief-distillation': 'distillationStages',
  'milestone-roadmap-stream': 'roadmapStages',
  'hex-architecture-mesh': 'meshStages',
  'customer-conversion-funnel': 'funnelStages',
  'transformation-split-canvas': 'transformationStages',
  'deal-ecosystem-flywheel': 'flywheelStages',
  'pnl-runway-waterfall': 'waterfallStages',
  'api-spec-terminal-split': 'terminalStages',
};

export function isSuite2032StepSlideType(type: string): type is Suite2032StepSlideType {
  return (SUITE_2032_STEP_SLIDE_TYPES as readonly string[]).includes(type);
}

export function isSuite2032FlatSlideType(type: string): type is Suite2032FlatSlideType {
  return (SUITE_2032_FLAT_SLIDE_TYPES as readonly string[]).includes(type);
}

export function isSuite2032SlideType(type: string): type is Suite2032SlideType {
  return isSuite2032StepSlideType(type) || isSuite2032FlatSlideType(type);
}

export function isSuite2032Slide(slide: unknown): slide is Suite2032SlideData {
  if (!slide || typeof slide !== 'object') return false;

  return typeof (slide as { type?: string }).type === 'string' &&
    (SUITE_2032_SLIDE_TYPES as readonly string[]).includes((slide as { type: string }).type);
}

export function isSuite2032StepSlide(slide: unknown): slide is Suite2032StepSlideData {
  if (!slide || typeof slide !== 'object') return false;

  return typeof (slide as { type?: string }).type === 'string' &&
    (SUITE_2032_STEP_SLIDE_TYPES as readonly string[]).includes((slide as { type: string }).type);
}

export function isSuite2032FlatSlide(slide: unknown): slide is Suite2032FlatSlideData {
  if (!slide || typeof slide !== 'object') return false;

  return typeof (slide as { type?: string }).type === 'string' &&
    (SUITE_2032_FLAT_SLIDE_TYPES as readonly string[]).includes((slide as { type: string }).type);
}

export function isGlobalPptSuite2032Slide(slide: unknown): slide is GlobalPptSuite2032SlideData {
  return isSuite2032Slide(slide);
}

export function calculateSuite2032StepCount(slide: Suite2032SlideData | any): number {
  if (!slide || typeof slide !== 'object') return 1;
  const stageKey = SUITE_2032_STAGE_KEYS[slide.type];
  if (!stageKey) return 1;
  const stages = slide[stageKey];

  return Math.max(Array.isArray(stages) ? stages.length : 4, 1);
}

export function calculateGlobalPptSuite2032StepCount(slide: GlobalPptSuite2032SlideData): number {
  return calculateSuite2032StepCount(slide);
}

export function getSuite2032SlideStepCount(slide: unknown): number {
  if (!isSuite2032Slide(slide)) return 0;

  return calculateSuite2032StepCount(slide);
}

