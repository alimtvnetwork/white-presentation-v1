// lint-allow: file-size reason="15 Global PPT slide archetype TypeScript data contracts" max=600
import type { BaseSlide } from './presentation';

// -----------------------------------------------------------------------------
// Master Catalog of 15 Global PPT Slide Archetypes (02-data-contracts.md)
// -----------------------------------------------------------------------------

// =============================================================================
// 1. Executive Governance Matrix (executive-governance-matrix)
// =============================================================================
export interface CharterResolutionItem {
  id: string;
  resolutionCode: string;
  title: string;
  summary: string;
  votingQuorumPercent: number;
  isPassed: boolean;
  isCompliant: boolean;
  hasAuditSignoff: boolean;
}

export interface GovernancePillarItem {
  id: string;
  pillarName: string;
  chairPerson: string;
  chairTitle: string;
  committeeCode: string;
  oversightDomain: string;
  complianceHealthPercent: number;
  meetingCadence: string;
  resolutions: CharterResolutionItem[];
  isQuorumAchieved: boolean;
  isAuditVerified: boolean;
}

export interface ExecutiveGovernanceMatrixSlideData extends BaseSlide {
  type: 'executive-governance-matrix';
  boardName: string;
  fiscalYear: string;
  overallComplianceScore: number;
  governancePillars: GovernancePillarItem[];
  chiefGovernanceOfficer: string;
  cgoTitle: string;
  isRegulatoryAuditPassed: boolean;
}

// =============================================================================
// 2. OKR Cascade Alignment (okr-cascade-alignment)
// =============================================================================
export interface OkrInitiativeItem {
  id: string;
  initiativeName: string;
  ownerName: string;
  ownerRole: string;
  progressPercent: number;
  confidenceScore: number; // 0.0 to 1.0
  isCompleted: boolean;
  isOnTrack: boolean;
  hasConfidenceWarning: boolean;
}

export interface OkrKeyResultItem {
  id: string;
  krCode: string;
  targetMetric: string;
  currentMetric: string;
  unit: string;
  progressPercent: number;
  initiatives: OkrInitiativeItem[];
  isOnTrack: boolean;
  isVerified: boolean;
}

export interface OkrCascadeTierItem {
  id: string;
  tierLevel: number;
  tierName: string;
  tierDescription: string;
  strategicObjective: string;
  keyResults: OkrKeyResultItem[];
  isCompleted: boolean;
  isActiveTier: boolean;
}

export interface OkrCascadeAlignmentSlideData extends BaseSlide {
  type: 'okr-cascade-alignment';
  planningCycle: string;
  globalProgressPercent: number;
  cascadeTiers: OkrCascadeTierItem[];
  executiveSponsor: string;
  sponsorRole: string;
}

// =============================================================================
// 3. Cloud Cost FinOps Optimizer (cloud-cost-finops-optimizer)
// =============================================================================
export interface CloudSpendProviderItem {
  id: string;
  providerName: string;
  cloudIcon: string;
  monthlyRunRateUsd: number;
  committedDiscountPercent: number;
  unitCostPerTxUsd: number;
  monthlySavingsUsd: number;
  isOptimized: boolean;
}

export interface CostOptimizationLeverItem {
  id: string;
  leverTitle: string;
  category: 'compute' | 'storage' | 'network' | 'licensing';
  annualSavingsUsd: number;
  effortTier: 'immediate' | 'moderate' | 'architectural';
  isAutomated: boolean;
  isRealized: boolean;
  hasAnomalousSpike: boolean;
}

export interface CloudCostFinopsOptimizerSlideData extends BaseSlide {
  type: 'cloud-cost-finops-optimizer';
  reportingQuarter: string;
  totalMonthlySpendUsd: number;
  totalAnnualProjectedSavingsUsd: number;
  overallDiscountCoveragePercent: number;
  spendByProvider: CloudSpendProviderItem[];
  optimizationLevers: CostOptimizationLeverItem[];
  finopsLead: string;
  leadRole: string;
}

// =============================================================================
// 4. Customer Sentiment Radar (customer-sentiment-radar)
// =============================================================================
export interface RadarDimensionAxisItem {
  id: string;
  axisLabel: string;
  currentScore: number; // 0 to 100
  benchmarkScore: number; // 0 to 100
  historicalScore: number; // 0 to 100
  hasExceededBenchmark: boolean;
}

export interface CustomerVerbatimQuoteItem {
  id: string;
  quoteText: string;
  authorName: string;
  authorRole: string;
  companyName: string;
  sentimentTier: 'promoter' | 'neutral';
  isEnterpriseTier: boolean;
  isVerifiedCustomer: boolean;
}

export interface CustomerSentimentRadarSlideData extends BaseSlide {
  type: 'customer-sentiment-radar';
  netPromoterScore: number;
  customerSatisfactionScore: number;
  surveySampleSize: number;
  radarAxes: RadarDimensionAxisItem[];
  quotes: CustomerVerbatimQuoteItem[];
  executiveSponsor: string;
  sponsorRole: string;
}

// =============================================================================
// 5. Competitive Battlecard (competitive-battlecard)
// =============================================================================
export interface CompetitorParityItem {
  id: string;
  competitorName: string;
  marketSharePercent: number;
  parityScorePercent: number;
  weaknessSummary: string;
  hasCompetitiveAdvantage: boolean;
}

export interface ObjectionResponseItem {
  id: string;
  commonObjection: string;
  counterNarrative: string;
  evidentiaryProofPoint: string;
  isVerified: boolean;
}

export interface BattlecardPillarItem {
  id: string;
  pillarTitle: string;
  strategicMoatDescription: string;
  ourAdvantageScore: number;
  competitors: CompetitorParityItem[];
  objections: ObjectionResponseItem[];
  isActivePillar: boolean;
}

export interface CompetitiveBattlecardSlideData extends BaseSlide {
  type: 'competitive-battlecard';
  targetMarketSegment: string;
  winRatePercent: number;
  battlecardPillars: BattlecardPillarItem[];
  commercialLead: string;
  leadRole: string;
}

// =============================================================================
// 6. Launch Readiness Checklist (launch-readiness-checklist)
// =============================================================================
export interface ChecklistVerificationItem {
  id: string;
  itemDescription: string;
  verifiedBy: string;
  verifiedTimestamp: string;
  isPassed: boolean;
  isBlocker: boolean;
  hasAutomatedVerification: boolean;
}

export interface StageGateItem {
  id: string;
  gateIndex: number;
  gateName: string;
  gateOwner: string;
  ownerRole: string;
  verificationItems: ChecklistVerificationItem[];
  isPassed: boolean;
  isBlocked: boolean;
  isActiveGate: boolean;
}

export interface LaunchReadinessChecklistSlideData extends BaseSlide {
  type: 'launch-readiness-checklist';
  releaseCandidateTag: string;
  targetLaunchDate: string;
  isGoForLaunch: boolean;
  stageGates: StageGateItem[];
  releaseCaptain: string;
  captainRole: string;
}

// =============================================================================
// 7. Developer Gateway Sandbox (developer-gateway-sandbox)
// =============================================================================
export interface GatewayHeaderParamItem {
  id: string;
  headerKey: string;
  headerValue: string;
  isRequired: boolean;
  isEncrypted: boolean;
}

export interface GatewayPipelineStageItem {
  id: string;
  stageName: string;
  latencyMs: number;
  statusBadge: string;
  isAuthorized: boolean;
  hasRateLimitHeadroom: boolean;
  isActiveStage: boolean;
}

export interface DeveloperGatewaySandboxSlideData extends BaseSlide {
  type: 'developer-gateway-sandbox';
  httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpointRoute: string;
  baseHost: string;
  gatewayStages: GatewayPipelineStageItem[];
  requestHeaders: GatewayHeaderParamItem[];
  requestBodyJson: string;
  responseStatus: number;
  responseBodyJson: string;
  isMockEnabled: boolean;
}

// =============================================================================
// 8. RAG Pipeline Topology (rag-pipeline-topology)
// =============================================================================
export interface VectorIndexMetricItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  hasTargetReached: boolean;
}

export interface RagPipelineStageItem {
  id: string;
  stageIndex: number;
  stageName: string;
  modelIdentifier: string;
  latencyMs: number;
  throughputDocsSec: number;
  isDenseSearchEnabled: boolean;
  hasReRankerApplied: boolean;
  isActiveStage: boolean;
}

export interface RagPipelineTopologySlideData extends BaseSlide {
  type: 'rag-pipeline-topology';
  corpusDocumentCount: number;
  vectorIndexName: string;
  contextWindowBudgetTokens: number;
  pipelineStages: RagPipelineStageItem[];
  indexMetrics: VectorIndexMetricItem[];
  leadArchitect: string;
  leadRole: string;
}

// =============================================================================
// 9. SOC Incident War Room (soc-incident-war-room)
// =============================================================================
export interface KillChainVectorItem {
  id: string;
  techniqueCode: string;
  techniqueName: string;
  tacticPhase: string;
  detectionSource: string;
  isMitigated: boolean;
}

export interface ContainmentActionItem {
  id: string;
  actionTitle: string;
  executionTimestamp: string;
  isAutomated: boolean;
  isCompleted: boolean;
}

export interface SocIncidentPhaseItem {
  id: string;
  phaseIndex: number;
  phaseName: string;
  durationMinutes: number;
  actions: ContainmentActionItem[];
  isContained: boolean;
  isActivePhase: boolean;
}

export interface SocIncidentWarRoomSlideData extends BaseSlide {
  type: 'soc-incident-war-room';
  incidentIdentifier: string;
  cvssSeverityScore: number;
  severityGrade: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  incidentPhases: SocIncidentPhaseItem[];
  attackVectors: KillChainVectorItem[];
  incidentCommander: string;
  commanderRole: string;
  isQuarantineActive: boolean;
}

// =============================================================================
// 10. Merkle Tree State Ledger (merkle-tree-state-ledger)
// =============================================================================
export interface MerkleLeafNodeItem {
  id: string;
  leafIndex: number;
  payloadHash: string;
  transactionData: string;
  isProofVerified: boolean;
}

export interface MerkleProofStepItem {
  id: string;
  stepIndex: number;
  levelName: string;
  leftHash: string;
  rightHash: string;
  combinedHash: string;
  isVerified: boolean;
  isActiveStep: boolean;
}

export interface MerkleTreeStateLedgerSlideData extends BaseSlide {
  type: 'merkle-tree-state-ledger';
  rootStateHash: string;
  blockNumber: number;
  algorithmName: string;
  verificationSteps: MerkleProofStepItem[];
  leafNodes: MerkleLeafNodeItem[];
  auditedBy: string;
  auditorRole: string;
  isRootFinalized: boolean;
}

// =============================================================================
// 11. Investor Cap Table Waterfall (investor-cap-table-waterfall)
// =============================================================================
export interface ShareholderClassItem {
  id: string;
  shareClassName: string;
  ownershipPercent: number;
  shareCount: number;
  liquidationPreferenceMultiple: number;
  isPreferredShare: boolean;
  hasLiquidationCap: boolean;
}

export interface LiquidationWaterfallTierItem {
  id: string;
  exitValuationUsd: number;
  proceedsUsd: number;
  payoutRank: number;
  isFullyDiluted: boolean;
}

export interface InvestorCapTableWaterfallSlideData extends BaseSlide {
  type: 'investor-cap-table-waterfall';
  currentValuationUsd: number;
  totalSharesOutstanding: number;
  unallocatedOptionPoolPercent: number;
  shareClasses: ShareholderClassItem[];
  waterfallTiers: LiquidationWaterfallTierItem[];
  chiefArchitect: string;
  architectRole: string;
}

// =============================================================================
// 12. Real-Time Event Stream Fabric (realtime-event-stream-fabric)
// =============================================================================
export interface EventTopicPartitionItem {
  id: string;
  topicName: string;
  partitionCount: number;
  eventsPerSecond: number;
  replicationFactor: number;
  isHealthy: boolean;
  isPartitionBalanced: boolean;
}

export interface ConsumerGroupLagItem {
  id: string;
  groupName: string;
  targetTopic: string;
  lagOffsets: number;
  commitLatencyMs: number;
  hasLagAlert: boolean;
}

export interface RealtimeEventStreamFabricSlideData extends BaseSlide {
  type: 'realtime-event-stream-fabric';
  clusterRegion: string;
  aggregateThroughputEps: number;
  totalDeadLetterQueueEvents: number;
  topics: EventTopicPartitionItem[];
  consumerGroups: ConsumerGroupLagItem[];
  principalEngineer: string;
  engineerRole: string;
}

// =============================================================================
// 13. Supply Chain Risk Matrix (supply-chain-risk-matrix)
// =============================================================================
export interface VendorDependencyItem {
  id: string;
  vendorName: string;
  tierLevel: 1 | 2 | 3;
  componentProvided: string;
  riskScorePercent: number; // 0 to 100
  leadTimeWeeks: number;
  isCriticalVendor: boolean;
  hasSinglePointOfFailure: boolean;
}

export interface GeopoliticalRiskFactorItem {
  id: string;
  regionName: string;
  riskCategory: string;
  impactScore: number;
  mitigationStrategy: string;
  isMitigationBufferActive: boolean;
}

export interface SupplyChainRiskMatrixSlideData extends BaseSlide {
  type: 'supply-chain-risk-matrix';
  overallSupplyResilienceScore: number;
  totalMonitoredSuppliers: number;
  criticalSpofCount: number;
  vendors: VendorDependencyItem[];
  riskFactors: GeopoliticalRiskFactorItem[];
  riskDirector: string;
  directorRole: string;
}

// =============================================================================
// 14. Talent Competency Radar (talent-competency-radar)
// =============================================================================
export interface CompetencyAxisItem {
  id: string;
  axisName: string;
  requiredScorePercent: number; // 0 to 100
  evaluatedScorePercent: number; // 0 to 100
  isBenchmarkMet: boolean;
}

export interface EngineeringLevelMilestoneItem {
  id: string;
  levelCode: string; // "L4", "L5", "L6", "L7", "L8"
  levelTitle: string;
  scopeSummary: string;
  competencyAxes: CompetencyAxisItem[];
  isCertifiedCompetency: boolean;
  isActiveLevel: boolean;
}

export interface TalentCompetencyRadarSlideData extends BaseSlide {
  type: 'talent-competency-radar';
  frameworkName: string;
  targetRoleTrack: string;
  levelMilestones: EngineeringLevelMilestoneItem[];
  evaluatorName: string;
  evaluatorRole: string;
  hasPromotionalRecommendation: boolean;
}

// =============================================================================
// 15. Sustainability ESG Scorecard (sustainability-esg-scorecard)
// =============================================================================
export interface EsgEmissionsScopeItem {
  id: string;
  scopeTier: 'Scope 1' | 'Scope 2' | 'Scope 3';
  emissionsMetricTonsCo2e: number;
  yearOverYearReductionPercent: number;
  offsetPercentage: number;
  isNetZeroAligned: boolean;
}

export interface RenewableEnergyPpaItem {
  id: string;
  contractName: string;
  energySource: 'solar' | 'wind' | 'hydro' | 'geothermal';
  capacityMegawatts: number;
  isPpaActive: boolean;
  isVerifiedOffset: boolean;
}

export interface SustainabilityEsgScorecardSlideData extends BaseSlide {
  type: 'sustainability-esg-scorecard';
  reportingFiscalYear: string;
  totalCarbonFootprintMetricTons: number;
  renewableEnergyPercent: number;
  esgRatingGrade: string;
  scopes: EsgEmissionsScopeItem[];
  cleanEnergyContracts: RenewableEnergyPpaItem[];
  sustainabilityLead: string;
  leadRole: string;
  hasRegulatorySignoff: boolean;
}

// =============================================================================
// Discriminated Unions for Global PPT Suite
// =============================================================================
export type GlobalPptSuiteSlideType =
  | 'executive-governance-matrix'
  | 'okr-cascade-alignment'
  | 'cloud-cost-finops-optimizer'
  | 'customer-sentiment-radar'
  | 'competitive-battlecard'
  | 'launch-readiness-checklist'
  | 'developer-gateway-sandbox'
  | 'rag-pipeline-topology'
  | 'soc-incident-war-room'
  | 'merkle-tree-state-ledger'
  | 'investor-cap-table-waterfall'
  | 'realtime-event-stream-fabric'
  | 'supply-chain-risk-matrix'
  | 'talent-competency-radar'
  | 'sustainability-esg-scorecard';

export type GlobalPptSuiteSlideData =
  | ExecutiveGovernanceMatrixSlideData
  | OkrCascadeAlignmentSlideData
  | CloudCostFinopsOptimizerSlideData
  | CustomerSentimentRadarSlideData
  | CompetitiveBattlecardSlideData
  | LaunchReadinessChecklistSlideData
  | DeveloperGatewaySandboxSlideData
  | RagPipelineTopologySlideData
  | SocIncidentWarRoomSlideData
  | MerkleTreeStateLedgerSlideData
  | InvestorCapTableWaterfallSlideData
  | RealtimeEventStreamFabricSlideData
  | SupplyChainRiskMatrixSlideData
  | TalentCompetencyRadarSlideData
  | SustainabilityEsgScorecardSlideData;

// =============================================================================
// Type Guard
// =============================================================================
export function isGlobalPptSlide(slide: any): slide is GlobalPptSuiteSlideData {
  const isObject = typeof slide === 'object' && Boolean(slide);
  if (!isObject) return false;
  const validTypes: string[] = [
    'executive-governance-matrix',
    'okr-cascade-alignment',
    'cloud-cost-finops-optimizer',
    'customer-sentiment-radar',
    'competitive-battlecard',
    'launch-readiness-checklist',
    'developer-gateway-sandbox',
    'rag-pipeline-topology',
    'soc-incident-war-room',
    'merkle-tree-state-ledger',
    'investor-cap-table-waterfall',
    'realtime-event-stream-fabric',
    'supply-chain-risk-matrix',
    'talent-competency-radar',
    'sustainability-esg-scorecard',
  ];
  return validTypes.includes(slide.type);
}

// =============================================================================
// Step Count Calculation Engine
// =============================================================================
export function calculateGlobalPptSlideStepCount(slide: GlobalPptSuiteSlideData): number {
  switch (slide.type) {
    case 'executive-governance-matrix':
      return Math.max(slide.governancePillars?.length || 1, 1);
    case 'okr-cascade-alignment':
      return Math.max(slide.cascadeTiers?.length || 1, 1);
    case 'competitive-battlecard':
      return Math.max(slide.battlecardPillars?.length || 1, 1);
    case 'launch-readiness-checklist':
      return Math.max(slide.stageGates?.length || 1, 1);
    case 'developer-gateway-sandbox':
      return Math.max(slide.gatewayStages?.length || 1, 1);
    case 'rag-pipeline-topology':
      return Math.max(slide.pipelineStages?.length || 1, 1);
    case 'soc-incident-war-room':
      return Math.max(slide.incidentPhases?.length || 1, 1);
    case 'merkle-tree-state-ledger':
      return Math.max(slide.verificationSteps?.length || 1, 1);
    case 'talent-competency-radar':
      return Math.max(slide.levelMilestones?.length || 1, 1);

    // Flat Sovereign Telemetry Archetypes
    case 'cloud-cost-finops-optimizer':
    case 'customer-sentiment-radar':
    case 'investor-cap-table-waterfall':
    case 'realtime-event-stream-fabric':
    case 'supply-chain-risk-matrix':
    case 'sustainability-esg-scorecard':
      return 1;

    default:
      return 1;
  }
}
