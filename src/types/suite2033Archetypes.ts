// lint-allow: file-size reason="Suite 2033 slide archetype contracts and type definitions" max=750
import type { BaseSlide } from './presentation';

// ============================================================================
// Discriminated Union Types for Suite 2033 (15 Slide Archetypes)
// ============================================================================
export const SUITE_2033_STEP_SLIDE_TYPES = [
  'strategic-initiative-cascade',
  'ai-agent-orchestration-pipeline',
  'ma-synergy-realization-bridge',
  'zero-day-incident-containment-loop',
  'cloud-migration-wave-stepper',
  'customer-lifecycle-expansion-funnel',
  'data-lineage-governance-flow',
  'product-release-burn-up-cadence',
] as const;

export const SUITE_2033_FLAT_SLIDE_TYPES = [
  'global-infrastructure-topology-cockpit',
  'saas-unit-economics-breakdown',
  'esg-sustainability-governance-matrix',
  'cap-table-ownership-waterfall',
  'ai-model-evaluation-benchmark-radar',
  'enterprise-security-posture-radar',
  'partner-ecosystem-value-map',
] as const;

export const SUITE_2033_SLIDE_TYPES = [
  ...SUITE_2033_STEP_SLIDE_TYPES,
  ...SUITE_2033_FLAT_SLIDE_TYPES,
] as const;

export type Suite2033StepSlideType = (typeof SUITE_2033_STEP_SLIDE_TYPES)[number];
export type Suite2033FlatSlideType = (typeof SUITE_2033_FLAT_SLIDE_TYPES)[number];
export type Suite2033SlideType = (typeof SUITE_2033_SLIDE_TYPES)[number];
export type GlobalPptSuite2033SlideType = Suite2033SlideType;

// ============================================================================
// 1. Kinetic 4-Step: strategic-initiative-cascade
// ============================================================================
export interface StrategicCascadeHorizon {
  stepIndex: number;
  horizonCode: string;
  horizonTitle: string;
  timeframeQuarter: string;
  targetRevenueRunRate: string;
  capitalExpenditureAllocation: string;
  strategicObjectiveSummary: string;
  keyDeliverables: string[];
  isHorizonActive: boolean;
  isHorizonCompleted: boolean;
  hasBoardCommitment: boolean;
  hasCapitalUnlocked: boolean;
}

export interface StrategicCapitalAllocationKpi {
  id: string;
  kpiLabel: string;
  kpiValue: string;
  variancePercentage: string;
  isTargetMet: boolean;
  hasExecutiveSignoff: boolean;
}

export interface StrategicInitiativeCascadeSlideData extends BaseSlide {
  type: 'strategic-initiative-cascade';
  executiveSponsor: string;
  sponsorTitle: string;
  planningCycleYear: string;
  cascadeHorizons: StrategicCascadeHorizon[];
  capitalKpis: StrategicCapitalAllocationKpi[];
  isCascadeApproved: boolean;
  hasBoardQuorumSigned: boolean;
  hasCapitalFullyAllocated: boolean;
  hasTelemetryGlow: boolean;
}

// ============================================================================
// 2. Kinetic 4-Step: ai-agent-orchestration-pipeline
// ============================================================================
export interface OrchestrationPhaseItem {
  stepIndex: number;
  phaseId: string;
  phaseName: string;
  reasoningModelFamily: string;
  subagentWorkerCount: number;
  tokenThroughputPerSecond: number;
  p99LatencyMilliseconds: number;
  phaseDeliverableSummary: string;
  activeToolCapabilities: string[];
  isPhaseActive: boolean;
  isPhaseCompleted: boolean;
  hasMcpSandboxArmed: boolean;
  hasConsensusVerified: boolean;
}

export interface SwarmWorkerNode {
  id: string;
  nodeName: string;
  roleSpecialization: string;
  contextWindowUtilizationPercentage: number;
  isPrimaryReasoner: boolean;
  hasExecutionClearance: boolean;
}

export interface AiAgentOrchestrationPipelineSlideData extends BaseSlide {
  type: 'ai-agent-orchestration-pipeline';
  orchestrationCoordinator: string;
  clusterArchitectureTopology: string;
  totalContextTokensProcessed: number;
  orchestrationPhases: OrchestrationPhaseItem[];
  workerNodes: SwarmWorkerNode[];
  isPipelineConverged: boolean;
  hasZeroDataLeakageVerified: boolean;
  hasHumanInTheLoopArmed: boolean;
  hasTelemetryGlow: boolean;
}

// ============================================================================
// 3. Kinetic 4-Step: ma-synergy-realization-bridge
// ============================================================================
export interface SynergyWaveItem {
  stepIndex: number;
  waveCode: string;
  waveTitle: string;
  timeframeHorizon: string;
  ebitdaAccretionMillionUsd: number;
  cumulativeSynergyMillionUsd: number;
  headcountRationalizationSavings: string;
  procurementOptimizationSavings: string;
  strategicDeliverable: string;
  isWaveActive: boolean;
  isWaveCompleted: boolean;
  hasPassedPmoAudit: boolean;
  hasExceededTarget: boolean;
}

export interface SynergyValueDriverCategory {
  id: string;
  categoryName: string;
  runRateContributionMillionUsd: number;
  responsibleOfficer: string;
  isRealizationOnTrack: boolean;
}

export interface MaSynergyRealizationBridgeSlideData extends BaseSlide {
  type: 'ma-synergy-realization-bridge';
  acquiringEntityName: string;
  targetEntityName: string;
  dealCloseDate: string;
  totalCommittedSynergiesMillionUsd: number;
  leadIntegrationExecutive: string;
  synergyWaves: SynergyWaveItem[];
  valueDrivers: SynergyValueDriverCategory[];
  isSynergyProgramOnTrack: boolean;
  hasBoardAuditCertified: boolean;
  hasAntitrustClearanceApproved: boolean;
  hasTelemetryGlow: boolean;
}

// ============================================================================
// 4. Kinetic 4-Step: zero-day-incident-containment-loop
// ============================================================================
export interface ContainmentStepItem {
  stepIndex: number;
  stageCode: string;
  stageTitle: string;
  slaElapsedMinutes: number;
  targetMaxMinutes: number;
  containmentProtocol: string;
  remediationActionSummary: string;
  affectedHostCount: number;
  isStepActive: boolean;
  isStepCompleted: boolean;
  hasBlastRadiusContained: boolean;
  hasZeroDataLossGuaranteed: boolean;
}

export interface IncidentIocRecord {
  id: string;
  iocType: 'SHA256' | 'C2-IP' | 'CVE-Exploit' | 'Memory-Pattern';
  iocValue: string;
  threatActorAttribution: string;
  isNeutralized: boolean;
}

export interface ZeroDayIncidentContainmentLoopSlideData extends BaseSlide {
  type: 'zero-day-incident-containment-loop';
  cveIdentifier: string;
  socIncidentCommander: string;
  commanderTitle: string;
  incidentSeverityTier: 'CRITICAL-SEV0' | 'HIGH-SEV1' | 'MEDIUM-SEV2';
  totalElapsedContainmentMinutes: number;
  containmentSteps: ContainmentStepItem[];
  iocRecords: IncidentIocRecord[];
  isContainmentVerified: boolean;
  hasCriticalInfrastructureIsolated: boolean;
  hasForensicMemoryPreserved: boolean;
  hasTelemetryGlow: boolean;
}

// ============================================================================
// 5. Kinetic 4-Step: cloud-migration-wave-stepper
// ============================================================================
export interface MigrationWaveItem {
  stepIndex: number;
  waveNumber: number;
  waveTitle: string;
  targetCloudRegion: string;
  serverCountMigrated: number;
  databaseStorageTerabytes: number;
  cutoverDowntimeMinutes: number;
  migrationPattern: 'Rehost' | 'Replatform' | 'Refactor' | 'Retire';
  waveDeliverableSummary: string;
  isWaveActive: boolean;
  isWaveCompleted: boolean;
  hasZeroDataLossVerified: boolean;
  hasRollbackPlanArmed: boolean;
}

export interface WorkloadComponentItem {
  id: string;
  workloadName: string;
  criticalityTier: 'Tier-1' | 'Tier-2' | 'Tier-3';
  sourceVirtualMachinesCount: number;
  isCutoverCompleted: boolean;
  hasComplianceApproval: boolean;
}

export interface CloudMigrationWaveStepperSlideData extends BaseSlide {
  type: 'cloud-migration-wave-stepper';
  migrationProgramLead: string;
  leadArchitectRole: string;
  sourceDatacenterLocation: string;
  destinationCloudRegion: string;
  totalServersInScope: number;
  totalStoragePetabytes: number;
  migrationWaves: MigrationWaveItem[];
  workloadInventory: WorkloadComponentItem[];
  isOverallProgramOnSchedule: boolean;
  hasCloudSecurityGateClearance: boolean;
  hasTelemetryGlow: boolean;
}

// ============================================================================
// 6. Kinetic 4-Step: customer-lifecycle-expansion-funnel
// ============================================================================
export interface ExpansionStageItem {
  stepIndex: number;
  stageCode: string;
  stageTitle: string;
  customerCohortCount: number;
  averageContractValueUsd: number;
  netRevenueRetentionPercentage: number;
  expansionDriverSummary: string;
  keyExpansionPlaybook: string;
  isStageActive: boolean;
  isStageCompleted: boolean;
  hasHitQuotaTarget: boolean;
  hasPlaybookActive: boolean;
}

export interface ExpansionCohortMetric {
  id: string;
  cohortYearQuarter: string;
  initialAnnualRecurringRevenueUsd: number;
  currentAnnualRecurringRevenueUsd: number;
  expansionMultiplierScore: string;
  isTopDecileExpansion: boolean;
}

export interface CustomerLifecycleExpansionFunnelSlideData extends BaseSlide {
  type: 'customer-lifecycle-expansion-funnel';
  chiefRevenueOfficer: string;
  reportingPeriodWindow: string;
  overallNetRetentionRatePercentage: number;
  grossRevenueRetentionPercentage: number;
  expansionStages: ExpansionStageItem[];
  cohortMetrics: ExpansionCohortMetric[];
  isExpansionTrajectoryHealthy: boolean;
  hasExecutiveChurnShieldActive: boolean;
  hasQuotaTargetExceeded: boolean;
  hasTelemetryGlow: boolean;
}

// ============================================================================
// 7. Kinetic 4-Step: data-lineage-governance-flow
// ============================================================================
export interface GovernanceHopItem {
  stepIndex: number;
  hopCode: string;
  hopTitle: string;
  dataVolumeDailyGigabytes: number;
  processingEngineName: string;
  complianceAuditStandard: string;
  piiMaskingAlgorithm: string;
  cryptographicHashTag: string;
  isHopActive: boolean;
  isHopCompleted: boolean;
  hasEncryptionAtRestActive: boolean;
  hasZeroAuditDefects: boolean;
}

export interface DataCatalogAttributeItem {
  id: string;
  attributeFieldName: string;
  classificationTier: 'Public' | 'Internal' | 'Confidential' | 'Restricted';
  isProtectedByRbac: boolean;
  hasDynamicMaskingArmed: boolean;
}

export interface DataLineageGovernanceFlowSlideData extends BaseSlide {
  type: 'data-lineage-governance-flow';
  chiefDataOfficerName: string;
  complianceFrameworkName: string;
  totalGovernedDatasetsCount: number;
  dailyIngestionTerabytes: number;
  governanceHops: GovernanceHopItem[];
  catalogAttributes: DataCatalogAttributeItem[];
  isLineageCryptographicallySealed: boolean;
  hasGdprComplianceCertified: boolean;
  hasHipaaEnclaveActive: boolean;
  hasTelemetryGlow: boolean;
}

// ============================================================================
// 8. Kinetic 4-Step: product-release-burn-up-cadence
// ============================================================================
export interface ReleaseGateItem {
  stepIndex: number;
  gateCode: string;
  gateTitle: string;
  storyPointsBurned: number;
  targetStoryPoints: number;
  zeroToleranceDefectsCount: number;
  p99LatencyMilliseconds: number;
  gateApprovalStatus: string;
  isGateActive: boolean;
  isGateCompleted: boolean;
  hasPassedAutomatedGates: boolean;
  hasReleaseLeadApproved: boolean;
}

export interface ReleaseQualityCheckItem {
  id: string;
  checkTitle: string;
  verificationTool: string;
  codeCoveragePercentage: number;
  isReleaseBlocking: boolean;
  hasPassedVerification: boolean;
}

export interface ProductReleaseBurnUpCadenceSlideData extends BaseSlide {
  type: 'product-release-burn-up-cadence';
  targetReleaseVersion: string;
  releaseManagerName: string;
  chiefSoftwareEngineer: string;
  totalScopeStoryPoints: number;
  releaseGates: ReleaseGateItem[];
  qualityChecks: ReleaseQualityCheckItem[];
  isReleaseCandidateLocked: boolean;
  hasZeroSev1Defects: boolean;
  hasAllGatesPassed: boolean;
  hasTelemetryGlow: boolean;
}

// ============================================================================
// 9. Flat Overview: global-infrastructure-topology-cockpit
// ============================================================================
export interface GlobalRegionClusterNode {
  id: string;
  regionCode: string;
  regionName: string;
  activeDatacenterCount: number;
  p99LatencyMilliseconds: number;
  availabilityUptimePercentage: number;
  trafficThroughputTbps: number;
  isPrimaryFailoverArmed: boolean;
  hasHardwareSecurityModuleEnforced: boolean;
}

export interface InterRegionBackboneLink {
  id: string;
  originRegionCode: string;
  destinationRegionCode: string;
  bandwidthCapacityTbps: number;
  utilizationPercentage: number;
  isHealthy: boolean;
}

export interface GlobalInfrastructureTopologyCockpitSlideData extends BaseSlide {
  type: 'global-infrastructure-topology-cockpit';
  cockpitOperatorRole: string;
  globalAvailabilitySlaPercentage: number;
  totalGlobalTrafficTbps: number;
  regionalClusters: GlobalRegionClusterNode[];
  backboneLinks: InterRegionBackboneLink[];
  isGlobalBgpBalanced: boolean;
  hasDdosProtectionActive: boolean;
  hasEdgeFailoverOperational: boolean;
  hasTelemetryHighlight: boolean;
}

// ============================================================================
// 10. Flat Overview: saas-unit-economics-breakdown
// ============================================================================
export interface UnitEconomicMetricItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  topDecileBenchmark: string;
  varianceExplanation: string;
  isTopDecilePerformance: boolean;
  hasExceededTarget: boolean;
}

export interface CohortPaybackCurveData {
  id: string;
  cohortQuarter: string;
  cacPaybackMonths: number;
  ltvToCacRatio: number;
  grossMarginPercentage: number;
  isProfitableCohort: boolean;
}

export interface SaasUnitEconomicsBreakdownSlideData extends BaseSlide {
  type: 'saas-unit-economics-breakdown';
  chiefFinancialOfficer: string;
  reportingQuarter: string;
  ruleOf40Score: number;
  compositeLtvCacRatio: number;
  blendedCacPaybackMonths: number;
  overallGrossMarginPercentage: number;
  economicMetrics: UnitEconomicMetricItem[];
  paybackCurves: CohortPaybackCurveData[];
  isCashFlowPositive: boolean;
  hasBoardAuditClearance: boolean;
  hasFinancialAuditConfirmed: boolean;
  hasTelemetryHighlight: boolean;
}
export type Suite2033SaasUnitEconomicsBreakdownSlideData = SaasUnitEconomicsBreakdownSlideData;

// ============================================================================
// 11. Flat Overview: esg-sustainability-governance-matrix
// ============================================================================
export interface EsgPillarKpiItem {
  kpiLabel: string;
  kpiValue: string;
  targetBenchmark: string;
  isTargetMet: boolean;
}

export interface EsgPillarCardData {
  pillarCategory: 'Environmental' | 'Social' | 'Governance';
  pillarScore: number;
  targetMaxScore: number;
  leadInitiativeTitle: string;
  auditVerificationAgency: string;
  kpis: EsgPillarKpiItem[];
  isPillarCertified: boolean;
  hasThirdPartyAuditVerified: boolean;
}

export interface EsgSustainabilityGovernanceMatrixSlideData extends BaseSlide {
  type: 'esg-sustainability-governance-matrix';
  committeeChairName: string;
  reportingFiscalYear: string;
  compositeEsgScore: number;
  cdpRatingBadge: string;
  pillars: EsgPillarCardData[];
  isCarbonNeutralityOnTarget: boolean;
  hasZeroBriberyPolicyEnforced: boolean;
  hasIndependentBoardMajority: boolean;
  hasTelemetryHighlight: boolean;
}

// ============================================================================
// 12. Flat Overview: cap-table-ownership-waterfall
// ============================================================================
export interface ShareholderClassItem {
  id: string;
  shareholderGroupName: string;
  shareClassTitle: 'Founders Common' | 'Series Seed Preferred' | 'Series A Preferred' | 'Series B Preferred' | 'ESOP Pool';
  totalSharesCount: number;
  ownershipPercentage: number;
  totalCapitalInvestedUsd: number;
  liquidationPreferenceMultiplier: number;
  isVotingStock: boolean;
  hasSeniorityRanking: boolean;
}
export type Suite2033ShareholderClassItem = ShareholderClassItem;

export interface CapTableOwnershipWaterfallSlideData extends BaseSlide {
  type: 'cap-table-ownership-waterfall';
  preMoneyValuationMillionUsd: number;
  postMoneyValuationMillionUsd: number;
  fullyDilutedSharesTotal: number;
  generalCounselLead: string;
  shareholderClasses: ShareholderClassItem[];
  isCapTableFullyDiluted: boolean;
  hasLiquidationWaterfallVerified: boolean;
  has409aValuationCurrent: boolean;
  hasTelemetryHighlight: boolean;
}

// ============================================================================
// 13. Flat Overview: ai-model-evaluation-benchmark-radar
// ============================================================================
export interface ModelBenchmarkAxisScore {
  id: string;
  axisName: string;
  ourModelScore: number;
  competitorModelScore: number;
  openSourceBaselineScore: number;
  isOurModelLeading: boolean;
  hasStatisticallySignificantDelta: boolean;
}

export interface EvaluatedModelProfile {
  id: string;
  modelIdentifier: string;
  parameterVolumeLabel: string;
  providerOrganization: string;
  isReferenceModel: boolean;
}

export interface AiModelEvaluationBenchmarkRadarSlideData extends BaseSlide {
  type: 'ai-model-evaluation-benchmark-radar';
  evaluationSuiteVersion: string;
  leadResearchScientist: string;
  referenceModelName: string;
  overallWinRatePercentage: number;
  benchmarkAxes: ModelBenchmarkAxisScore[];
  evaluatedModels: EvaluatedModelProfile[];
  isThirdPartyBenchmarked: boolean;
  hasDataContaminationChecked: boolean;
  hasReproducibilityVerified: boolean;
  hasTelemetryHighlight: boolean;
}

// ============================================================================
// 14. Flat Overview: enterprise-security-posture-radar
// ============================================================================
export interface SecurityDomainPostureItem {
  id: string;
  domainName: string;
  currentMaturityScore: number;
  targetMaturityScore: number;
  complianceFrameworkStandard: string;
  activeAutomatedControlsCount: number;
  isAuditCompliant: boolean;
  hasZeroOpenSev1Defects: boolean;
}

export interface SecurityCertificationRecord {
  id: string;
  certificationName: string;
  auditorAgency: string;
  expirationDate: string;
  isCertified: boolean;
}

export interface EnterpriseSecurityPostureRadarSlideData extends BaseSlide {
  type: 'enterprise-security-posture-radar';
  chiefInformationSecurityOfficer: string;
  auditQuarterYear: string;
  compositeSecurityMaturityScore: number;
  securityDomains: SecurityDomainPostureItem[];
  certifications: SecurityCertificationRecord[];
  isZeroTrustEnforced: boolean;
  hasSoc2Type2Certified: boolean;
  hasIncidentResponseTested: boolean;
  hasTelemetryHighlight: boolean;
}

// ============================================================================
// 15. Flat Overview: partner-ecosystem-value-map
// ============================================================================
export interface PartnerPillarCategory {
  id: string;
  pillarTitle: 'Global System Integrators' | 'Cloud Hyperscalers' | 'ISV Tech Alliances' | 'Channel Resellers';
  activePartnerCount: number;
  annualCoSellPipelineMillionUsd: number;
  topPartnerNames: string[];
  isStrategicPillar: boolean;
  hasJointSolutionValidated: boolean;
}

export interface EcosystemKeyMetricItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  growthPercentage: string;
  isTargetExceeded: boolean;
}

export interface PartnerEcosystemValueMapSlideData extends BaseSlide {
  type: 'partner-ecosystem-value-map';
  vpGlobalAlliancesName: string;
  reportingFiscalYear: string;
  totalCoSellPipelineMillionUsd: number;
  partnerPillars: PartnerPillarCategory[];
  ecosystemMetrics: EcosystemKeyMetricItem[];
  isEcosystemFlywheelAccelerating: boolean;
  hasHyperscalerCoSellLocked: boolean;
  hasJointGtmAuthorized: boolean;
  hasTelemetryHighlight: boolean;
}

// ============================================================================
// Union and Guards
// ============================================================================
export type Suite2033StepSlideData =
  | StrategicInitiativeCascadeSlideData
  | AiAgentOrchestrationPipelineSlideData
  | MaSynergyRealizationBridgeSlideData
  | ZeroDayIncidentContainmentLoopSlideData
  | CloudMigrationWaveStepperSlideData
  | CustomerLifecycleExpansionFunnelSlideData
  | DataLineageGovernanceFlowSlideData
  | ProductReleaseBurnUpCadenceSlideData;

export type Suite2033FlatSlideData =
  | GlobalInfrastructureTopologyCockpitSlideData
  | SaasUnitEconomicsBreakdownSlideData
  | EsgSustainabilityGovernanceMatrixSlideData
  | CapTableOwnershipWaterfallSlideData
  | AiModelEvaluationBenchmarkRadarSlideData
  | EnterpriseSecurityPostureRadarSlideData
  | PartnerEcosystemValueMapSlideData;

export type Suite2033SlideData = Suite2033StepSlideData | Suite2033FlatSlideData;
export type GlobalPptSuite2033SlideData = Suite2033SlideData;

export const SUITE_2033_STAGE_KEYS: Record<string, string> = {
  'strategic-initiative-cascade': 'cascadeHorizons',
  'ai-agent-orchestration-pipeline': 'orchestrationPhases',
  'ma-synergy-realization-bridge': 'synergyWaves',
  'zero-day-incident-containment-loop': 'containmentSteps',
  'cloud-migration-wave-stepper': 'migrationWaves',
  'customer-lifecycle-expansion-funnel': 'expansionStages',
  'data-lineage-governance-flow': 'governanceHops',
  'product-release-burn-up-cadence': 'releaseGates',
};

export function isSuite2033StepSlideType(type: string): type is Suite2033StepSlideType {
  return (SUITE_2033_STEP_SLIDE_TYPES as readonly string[]).includes(type);
}

export function isSuite2033FlatSlideType(type: string): type is Suite2033FlatSlideType {
  return (SUITE_2033_FLAT_SLIDE_TYPES as readonly string[]).includes(type);
}

export function isSuite2033SlideType(type: string): type is Suite2033SlideType {
  return isSuite2033StepSlideType(type) || isSuite2033FlatSlideType(type);
}

export function isSuite2033Slide(slide: unknown): slide is Suite2033SlideData {
  if (!slide || typeof slide !== 'object') return false;

  return typeof (slide as { type?: string }).type === 'string' &&
    (SUITE_2033_SLIDE_TYPES as readonly string[]).includes((slide as { type: string }).type);
}

export function isSuite2033StepSlide(slide: unknown): slide is Suite2033StepSlideData {
  if (!slide || typeof slide !== 'object') return false;

  return typeof (slide as { type?: string }).type === 'string' &&
    (SUITE_2033_STEP_SLIDE_TYPES as readonly string[]).includes((slide as { type: string }).type);
}

export function isSuite2033FlatSlide(slide: unknown): slide is Suite2033FlatSlideData {
  if (!slide || typeof slide !== 'object') return false;

  return typeof (slide as { type?: string }).type === 'string' &&
    (SUITE_2033_FLAT_SLIDE_TYPES as readonly string[]).includes((slide as { type: string }).type);
}

export function isGlobalPptSuite2033Slide(slide: unknown): slide is GlobalPptSuite2033SlideData {
  return isSuite2033Slide(slide);
}

export function calculateSuite2033StepCount(slide: Suite2033SlideData | any): number {
  if (!slide || typeof slide !== 'object') return 1;
  const stageKey = SUITE_2033_STAGE_KEYS[slide.type];
  if (!stageKey) return 1;
  const stages = slide[stageKey];

  return Math.max(Array.isArray(stages) ? stages.length : 4, 1);
}

export function calculateGlobalPptSuite2033StepCount(slide: GlobalPptSuite2033SlideData): number {
  return calculateSuite2033StepCount(slide);
}

export function getSuite2033SlideStepCount(slide: unknown): number {
  if (!isSuite2033Slide(slide)) return 0;

  return calculateSuite2033StepCount(slide);
}

export function getSuite2033SlideSteps(slide: { type?: string } | any): number {
  if (!slide?.type) return 0;
  if ((SUITE_2033_STEP_SLIDE_TYPES as readonly string[]).includes(slide.type)) {
    return calculateSuite2033StepCount(slide);
  }
  if ((SUITE_2033_FLAT_SLIDE_TYPES as readonly string[]).includes(slide.type)) {
    return 1;
  }
  return 0;
}
