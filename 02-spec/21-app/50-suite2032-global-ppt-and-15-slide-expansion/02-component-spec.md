# 02-Component Spec: Canonical Contracts for Suite 2032 Archetypes

> **Specification Identifier:** `02-spec/21-app/50-suite2032-global-ppt-and-15-slide-expansion/02-component-spec.md`  
> **Status:** `APPROVED CANONICAL COMPONENT SPECIFICATION`  
> **Target Release:** `v1.6.0` (Suite 2032 Expansion)  
> **Author:** Worker 1 (Spec & Styling Author)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Created:** 2026-10-05  
> **Domain:** Canonical TypeScript Interfaces, Discriminated Unions, Step Count Engine, and Visual Contracts for 15 Suite 2032 Slide Archetypes (8 Kinetic Multi-Step Workflows + 7 Flat Sovereign Overviews).

---

## 1. Discriminated Union & Type Catalog

```typescript
import type { BaseSlide } from '../presentation';

// 8 Kinetic Multi-Step Slide Types (4 steps each)
export const SUITE_2032_STEP_SLIDE_TYPES = [
  'executive-brief-distillation', 'milestone-roadmap-stream',
  'hex-architecture-mesh', 'customer-conversion-funnel',
  'transformation-split-canvas', 'deal-ecosystem-flywheel',
  'pnl-runway-waterfall', 'api-spec-terminal-split',
] as const;

// 7 Flat Sovereign Overview Slide Types (1 step)
export const SUITE_2032_FLAT_SLIDE_TYPES = [
  'matrix-feature-benchmark', 'executive-metrics-pulse',
  'board-governance-roster', 'editorial-quote-spotlight',
  'bento-capability-mosaic', 'risk-opportunity-quadrant',
  'commercial-tier-packaging',
] as const;

export const SUITE_2032_SLIDE_TYPES = [
  ...SUITE_2032_STEP_SLIDE_TYPES,
  ...SUITE_2032_FLAT_SLIDE_TYPES,
] as const;

export type Suite2032StepSlideType = (typeof SUITE_2032_STEP_SLIDE_TYPES)[number];
export type Suite2032FlatSlideType = (typeof SUITE_2032_FLAT_SLIDE_TYPES)[number];
export type Suite2032SlideType = (typeof SUITE_2032_SLIDE_TYPES)[number];
```

---

## 2. Kinetic Multi-Step Contracts (8 Archetypes, 4 Steps Each)

```typescript
// 1. executive-brief-distillation
export interface BriefDistillationStage {
  stepIndex: number; pillarTitle: string; headlineSummary: string;
  coreTakeaway: string; evidenceMetric: string; evidenceLabel: string;
  isActive: boolean; isCompleted: boolean;
}
export interface BriefDistillationKeySignal {
  id: string; signalLabel: string; impactScore: string; isStrategicPriority: boolean;
}
export interface ExecutiveBriefDistillationSlideData extends BaseSlide {
  type: 'executive-brief-distillation'; executiveSponsor: string; briefingPeriod: string;
  distillationStages: BriefDistillationStage[]; keySignals: BriefDistillationKeySignal[];
  isExecutiveSignoffComplete: boolean; hasConsensusLocked: boolean; hasHighPriorityGlow: boolean;
}

// 2. milestone-roadmap-stream
export interface RoadmapStreamMilestoneStage {
  stepIndex: number; timeQuarter: string; milestoneTitle: string;
  deliverableSummary: string; targetReleaseDate: string; completionPercentage: number;
  isActive: boolean; isCompleted: boolean;
}
export interface RoadmapStreamStreamTrack {
  id: string; trackName: string; ownerRole: string; headcount: number; isCriticalPath: boolean;
}
export interface MilestoneRoadmapStreamSlideData extends BaseSlide {
  type: 'milestone-roadmap-stream'; programLead: string; strategicInitiative: string;
  roadmapStages: RoadmapStreamMilestoneStage[]; streamTracks: RoadmapStreamStreamTrack[];
  isRoadmapOnSchedule: boolean; hasResourceBufferAllocated: boolean; hasMilestoneGlow: boolean;
}

// 3. hex-architecture-mesh
export interface HexArchitectureStage {
  stepIndex: number; tierName: string; layerDescription: string;
  protocolStack: string; latencyProfile: string; isActive: boolean; isCompleted: boolean;
}
export interface HexMeshCellNode {
  id: string; nodeName: string; cellRing: number;
  boundaryRole: 'core-domain' | 'inbound-adapter' | 'outbound-adapter' | 'mesh-backbone';
  throughputRps: number; isResilientCircuitArmed: boolean; hasZeroTrustEnforced: boolean;
}
export interface HexArchitectureMeshSlideData extends BaseSlide {
  type: 'hex-architecture-mesh'; systemIdentifier: string; domainBoundary: string;
  meshStages: HexArchitectureStage[]; meshCells: HexMeshCellNode[];
  isMeshConverged: boolean; hasEventSourcingActive: boolean; hasTelemetryHighlight: boolean;
}

// 4. customer-conversion-funnel
export interface FunnelStageItem {
  stepIndex: number; stageName: string; visitorCount: number;
  conversionRatePercentage: number; dropoffRatePercentage: number;
  optimizationLever: string; isActive: boolean; isCompleted: boolean;
}
export interface FunnelChannelAttribution {
  id: string; channelName: string; leadVolume: number; cacUsd: number; isTopPerformingChannel: boolean;
}
export interface CustomerConversionFunnelSlideData extends BaseSlide {
  type: 'customer-conversion-funnel'; funnelTimeWindow: string; totalVisitorsAudience: number;
  overallConversionPercentage: number; funnelStages: FunnelStageItem[]; channels: FunnelChannelAttribution[];
  isFunnelOptimized: boolean; hasRetargetingActive: boolean; hasTelemetryHighlight: boolean;
}

// 5. transformation-split-canvas
export interface TransformationPhaseStage {
  stepIndex: number; phaseName: string; phaseObjective: string;
  legacyStateSnapshot: string; futureStateSnapshot: string;
  valueRealizationPercentage: number; isActive: boolean; isCompleted: boolean;
}
export interface TransformationValuePillar {
  id: string; pillarTitle: string; roiMultiplier: string; efficiencyGainPercentage: number; isStrategicTransformation: boolean;
}
export interface TransformationSplitCanvasSlideData extends BaseSlide {
  type: 'transformation-split-canvas'; programHorizon: string; executiveSummary: string;
  transformationStages: TransformationPhaseStage[]; valuePillars: TransformationValuePillar[];
  isTransformationActive: boolean; hasChangeManagementApproved: boolean; hasTelemetryGlow: boolean;
}

// 6. deal-ecosystem-flywheel
export interface FlywheelQuadrantStage {
  stepIndex: number; stageTitle: string; flywheelDriver: string;
  momentumMetric: string; reinforcingFeedbackLoop: string; isActive: boolean; isCompleted: boolean;
}
export interface FlywheelPartnerNode {
  id: string; partnerTier: string; annualGrossMerchandiseValue: string; isAnchorEcosystemPartner: boolean; hasJointGoToMarketVerified: boolean;
}
export interface DealEcosystemFlywheelSlideData extends BaseSlide {
  type: 'deal-ecosystem-flywheel'; ecosystemName: string; compoundGrowthRatePercentage: number;
  flywheelStages: FlywheelQuadrantStage[]; partnerNodes: FlywheelPartnerNode[];
  isFlywheelSelfSustaining: boolean; hasNetworkEffectsAccelerated: boolean; hasDynamicRotationGlow: boolean;
}

// 7. pnl-runway-waterfall
export interface WaterfallStepStage {
  stepIndex: number; stepLabel: string; categoryType: 'gross-revenue' | 'cogs-reduction' | 'opex-expense' | 'net-runway';
  deltaAmountMillionUsd: number; cumulativeBalanceMillionUsd: number; varianceExplanation: string; isActive: boolean; isCompleted: boolean;
}
export interface PnlRunwaySummaryMetric {
  id: string; metricLabel: string; metricValue: string; isRunwayPositive: boolean; hasBoardApproval: boolean;
}
export interface PnlRunwayWaterfallSlideData extends BaseSlide {
  type: 'pnl-runway-waterfall'; fiscalPeriod: string; startingCashBalanceMillionUsd: number;
  endingCashBalanceMillionUsd: number; runwayMonthsRemaining: number;
  waterfallStages: WaterfallStepStage[]; summaryMetrics: PnlRunwaySummaryMetric[];
  isRunwayHealthy: boolean; hasCapitalCallBuffer: boolean; hasFinancialAuditConfirmed: boolean;
}

// 8. api-spec-terminal-split
export interface ApiSpecTerminalStage {
  stepIndex: number; operationName: string; httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpointPath: string; requestSnippet: string; responseSnippet: string;
  latencyBenchmarkMs: number; isActive: boolean; isCompleted: boolean;
}
export interface ApiHeaderSpec {
  id: string; headerName: string; headerValueDescription: string; isRequiredHeader: boolean;
}
export interface ApiSpecTerminalSplitSlideData extends BaseSlide {
  type: 'api-spec-terminal-split'; apiTitle: string; openApiVersion: string; baseUrl: string;
  terminalStages: ApiSpecTerminalStage[]; standardHeaders: ApiHeaderSpec[];
  isTlsEnforced: boolean; hasRateLimitActive: boolean; hasLiveSyntaxHighlighting: boolean;
}
```

---

## 3. Flat Sovereign Overview Contracts (7 Archetypes, 1 Step Each)

```typescript
// 9. matrix-feature-benchmark
export interface MatrixBenchmarkCompetitor {
  id: string; name: string; badge?: string; isOurPlatform: boolean;
}
export interface MatrixBenchmarkFeatureRow {
  id: string; featureName: string; featureCategory: string;
  scores: Record<string, 'supported' | 'partial' | 'unsupported' | string>;
  isDifferentiatingFactor: boolean; hasEnterpriseSecurity: boolean;
}
export interface MatrixFeatureBenchmarkSlideData extends BaseSlide {
  type: 'matrix-feature-benchmark'; benchmarkCategory: string; evaluatedVersion: string;
  competitors: MatrixBenchmarkCompetitor[]; featureRows: MatrixBenchmarkFeatureRow[];
  isEvaluatedByThirdParty: boolean; hasEnterpriseComplianceVerified: boolean; hasTelemetryHighlight: boolean;
}

// 10. executive-metrics-pulse
export interface ExecutivePulseMetricItem {
  id: string; metricLabel: string; metricValue: string; changePercentage: string;
  periodComparison: string; targetBenchmark: string; isPositiveTrend: boolean; hasExceededTarget: boolean;
}
export interface ExecutivePulseDepartmentSummary {
  id: string; departmentName: string; performanceScore: number; status: string; hasAuditClearance: boolean;
}
export interface ExecutiveMetricsPulseSlideData extends BaseSlide {
  type: 'executive-metrics-pulse'; reportWindow: string; overallHealthScore: number;
  metrics: ExecutivePulseMetricItem[]; departments: ExecutivePulseDepartmentSummary[];
  isPulseHealthy: boolean; hasRealtimeSyncActive: boolean; hasAlertTriggered: boolean;
}

// 11. board-governance-roster
export interface BoardMemberProfile {
  id: string; memberName: string; boardRole: string; committeeMembership: string;
  tenureYears: number; biographySnippet: string; avatarUrl?: string; isIndependentDirector: boolean; hasVotingRights: boolean;
}
export interface GovernanceCommitteeMetric {
  id: string; committeeName: string; chairPerson: string; annualMeetingsCount: number; hasCharterReviewed: boolean;
}
export interface BoardGovernanceRosterSlideData extends BaseSlide {
  type: 'board-governance-roster'; governanceYear: string; boardQuorumStatus: string;
  boardMembers: BoardMemberProfile[]; committees: GovernanceCommitteeMetric[];
  isGovernanceCompliant: boolean; hasIndependentMajority: boolean; hasAuditCharterApproved: boolean;
}

// 12. editorial-quote-spotlight
export interface EditorialKeyTakeaway {
  id: string; takeawayLabel: string; supportingContext: string; isCoreThesis: boolean;
}
export interface EditorialQuoteSpotlightSlideData extends BaseSlide {
  type: 'editorial-quote-spotlight'; primaryQuote: string; quoteAttribution: string;
  attributionTitle: string; organizationName: string; publicationSource?: string; publicationDate?: string;
  keyTakeaways: EditorialKeyTakeaway[]; isFeaturedEndorsement: boolean; hasVerifiedCitation: boolean; hasAmbientGlow: boolean;
}

// 13. bento-capability-mosaic
export interface BentoCapabilityTile {
  id: string; tileTitle: string; tileSpan: 'col-span-1' | 'col-span-2' | 'col-span-3' | 'row-span-1' | 'row-span-2';
  tileDescription: string; badgeLabel: string; keyMetricValue?: string; keyMetricLabel?: string; iconName?: string;
  isFeaturedCapability: boolean; hasLiveStatusPulse: boolean;
}
export interface BentoCapabilityMosaicSlideData extends BaseSlide {
  type: 'bento-capability-mosaic'; mosaicCategory: string; architectureVersion: string;
  tiles: BentoCapabilityTile[]; isMosaicFullyDeployed: boolean; hasModularArchitecture: boolean; hasGridTelemetryHighlight: boolean;
}

// 14. risk-opportunity-quadrant
export interface RiskOpportunityItem {
  id: string; itemTitle: string; impactScore: number; probabilityScore: number;
  quadrant: 'strategic-opportunity' | 'containable-risk' | 'existential-threat' | 'tactical-quick-win';
  mitigationAction: string; isCriticalAttentionRequired: boolean; hasMitigationAssigned: boolean;
}
export interface RiskOpportunityQuadrantSlideData extends BaseSlide {
  type: 'risk-opportunity-quadrant'; auditQuarter: string; chiefRiskOfficer: string;
  items: RiskOpportunityItem[]; isRiskEnvelopeBounded: boolean; hasExecutiveOversightApproved: boolean; hasQuadrantOverlayActive: boolean;
}

// 15. commercial-tier-packaging
export interface CommercialPricingTier {
  id: string; tierName: string; tagline: string; monthlyPriceUsd: number;
  billingFrequency: string; featuresList: string[]; isRecommendedTier: boolean;
  hasCustomDeployment: boolean; slaUptimePercentage: number;
}
export interface PackagingAddOnModule {
  id: string; moduleName: string; monthlyPriceUsd: number; isSecurityFeature: boolean;
}
export interface CommercialTierPackagingSlideData extends BaseSlide {
  type: 'commercial-tier-packaging'; pricingModel: string; currencyCode: string; annualDiscountPercentage: number;
  pricingTiers: CommercialPricingTier[]; addOnModules: PackagingAddOnModule[];
  isAnnualBillingDefault: boolean; hasEnterpriseContractOption: boolean; hasPriceLockGuaranteed: boolean;
}
```

---

## 4. Step Count Engine Integration

```typescript
export function getSuite2032SlideSteps(slide: { type?: string }): number {
  if (!slide?.type) return 0;
  if (SUITE_2032_STEP_SLIDE_TYPES.includes(slide.type as Suite2032StepSlideType)) {
    return 4; // 8 kinetic multi-step slides have 4 discrete steps
  }
  if (SUITE_2032_FLAT_SLIDE_TYPES.includes(slide.type as Suite2032FlatSlideType)) {
    return 1; // 7 flat sovereign overviews have 1 sovereign step
  }
  return 0;
}
```
