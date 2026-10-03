// lint-allow: file-size reason="Type contracts for 16 global ppt expansion slide archetypes" max=750
import type { BaseSlide } from './presentation';

// =============================================================================
// Discriminated Union Types for Module 39
// =============================================================================

export type GlobalPptExpansionSlideType =
  // 16 High-Authority Expansion Archetypes
  | 'multi-tenant-isolation-matrix'
  | 'realtime-latency-heatmap'
  | 'executive-governance-dashboard'
  | 'zero-trust-policy-graph'
  | 'cloud-finops-payback-waterfall'
  | 'distributed-cqrs-event-mesh'
  | 'autonomous-self-healing-pod'
  | 'global-anycast-routing-topology'
  | 'enterprise-sbom-slsa-provenance'
  | 'supply-chain-resilience-index'
  | 'quantum-safe-migration-ladder'
  | 'cognitive-decarbonization-esg'
  | 'customer-experience-retention-funnel'
  | 'developer-velocity-dora-matrix'
  | 'strategic-partnership-ecosystem'
  | 'executive-commitment-signoff'
  // Discipline 1: Strategic Governance
  | 'executive-mandate-scorecard'
  | 'board-quorum-resolution-ledger'
  | 'macro-economic-threat-radar'
  // Discipline 2: Deep Cloud Architecture
  | 'zero-trust-network-mesh'
  | 'distributed-consensus-raft-log'
  | 'data-pipeline-lineage-dag'
  | 'code-walkthrough-syntax-lens'
  // Discipline 3: Commercial GTM
  | 'tier-comparison-feature-matrix'
  | 'arr-growth-bridge-waterfall'
  | 'multi-tier-saas-packaging-table'
  | 'flywheel-growth-momentum-orbit'
  // Discipline 4: Operational Evidence
  | 'enterprise-case-study-hero'
  | 'client-wall-social-proof-grid'
  | 'incident-retrospective-timeline'
  // Discipline 5: Interactive Dialogue
  | 'interactive-faq-tabbed-deck'
  | 'audience-decision-fork-matrix';

// Backward compatibility alias
export type GlobalEvolution16SlideType = GlobalPptExpansionSlideType;

// =============================================================================
// Discipline 1: Strategic Governance
// =============================================================================

// 1. Executive Mandate Scorecard ('executive-mandate-scorecard')
export interface MandateItem {
  id: string;
  pillar: string;
  mandateName: string;
  objectiveSummary: string;
  executiveOwner: string;
  ownerRole: string; // e.g. "Chief Software Engineer"
  ragStatus: 'green' | 'amber' | 'blue';
  targetDate: string;
  allocatedCapitalFormatted: string;
  roiProjected: string;
  isCompleted: boolean;
  isActive: boolean;
  hasFiduciarySignoff: boolean;
}

export interface MandateReviewStage {
  stepIndex: number;
  stageName: string;
  stageDescription: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ExecutiveMandateScorecardSlideData extends BaseSlide {
  type: 'executive-mandate-scorecard';
  reportingFiscalYear: string;
  reportingQuarter: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  capitalEfficiencyRatio: string;
  mandateItems: MandateItem[];
  mandateStages: MandateReviewStage[];
  hasAuditCommitteeEndorsement: boolean;
  hasDetailedCapitalTracking: boolean;
}

// 2. Board Quorum Resolution Ledger ('board-quorum-resolution-ledger')
export interface ResolutionEntry {
  resolutionId: string;
  statutoryCode: string;
  resolutionTitle: string;
  summaryClause: string;
  votesFor: number;
  votesAgainst: number;
  votesAbstain: number;
  passPercentage: number;
  isPassed: boolean;
  hasRegulatoryNotice: boolean;
  legalFilingReference: string;
}

export interface BoardSignatory {
  signatoryName: string;
  signatoryTitle: string; // e.g. "Chief Software Engineer"
  signatureTimestamp: string;
  isSigned: boolean;
  hasCryptographicSeal: boolean;
}

export interface BoardQuorumResolutionLedgerSlideData extends BaseSlide {
  type: 'board-quorum-resolution-ledger';
  meetingReference: string;
  meetingDate: string;
  totalSharesRepresentedFormatted: string;
  quorumPercentageFormatted: string;
  isQuorumEstablished: boolean;
  hasUnanimousConsent: boolean;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  resolutions: ResolutionEntry[];
  signatories: BoardSignatory[];
}

// 3. Macro-Economic Threat Radar ('macro-economic-threat-radar')
export interface ThreatItem {
  threatId: string;
  threatName: string;
  threatScore: number; // 0 - 100
  threatVelocity: 'accelerating' | 'stable' | 'decelerating';
  hedgingStrategy: string;
  isCriticalRisk: boolean;
  hasAutomatedHedge: boolean;
  isMonitored: boolean;
}

export interface RadarQuadrant {
  quadrantIndex: number;
  quadrantTitle: string;
  quadrantCode: string; // e.g. "Q1-REGULATORY"
  compositeRiskScore: number;
  threatItems: ThreatItem[];
  isActive: boolean;
  isCompleted: boolean;
}

export interface MacroEconomicThreatRadarSlideData extends BaseSlide {
  type: 'macro-economic-threat-radar';
  assessmentHorizon: string;
  compositeMacroRiskIndex: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  radarStages: RadarQuadrant[];
  hasHedgingProtocolActive: boolean;
  hasRealTimeFeedConnection: boolean;
}

// =============================================================================
// Discipline 2: Deep Cloud Architecture
// =============================================================================

// 4. Zero-Trust Network Mesh ('zero-trust-network-mesh')
export interface MeshNode {
  nodeId: string;
  nodeName: string;
  nodeCategory: 'edge-proxy' | 'identity-pdp' | 'mesh-enclave' | 'core-database';
  ipAddress: string;
  attestationStandard: string; // e.g. "TPM 2.0 / Nitro Enclave"
  tlsVersion: string; // e.g. "TLS 1.3 / Kyber-768"
  latencyOverheadMs: number;
  isEncrypted: boolean;
  hasHardwareKeyVerification: boolean;
  isPolicyCompliant: boolean;
  isActive: boolean;
}

export interface MeshStage {
  stepIndex: number;
  stageTitle: string;
  securityDomain: string;
  enforcementMechanism: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ZeroTrustNetworkMeshSlideData extends BaseSlide {
  type: 'zero-trust-network-mesh';
  cryptographicSuite: string;
  networkTopologyType: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  meshNodes: MeshNode[];
  meshStages: MeshStage[];
  hasPostQuantumAlgorithmsEnabled: boolean;
  hasContinuousAttestation: boolean;
}

// 5. Distributed Consensus Raft Log ('distributed-consensus-raft-log')
export interface RaftLogEntry {
  logIndex: number;
  term: number;
  command: string;
  isCommitted: boolean;
  hasAppliedToStateMachine: boolean;
}

export interface RaftNode {
  nodeId: string;
  nodeName: string;
  nodeRole: 'leader' | 'follower' | 'candidate';
  currentTerm: number;
  votedFor?: string;
  lastHeartbeatMsAgo: number;
  logEntries: RaftLogEntry[];
  isLeader: boolean;
  isHealthy: boolean;
  hasQuorumConsensus: boolean;
}

export interface ConsensusStage {
  stepIndex: number;
  stageName: string;
  operationDescription: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface DistributedConsensusRaftLogSlideData extends BaseSlide {
  type: 'distributed-consensus-raft-log';
  clusterName: string;
  clusterQuorumRequirement: string; // e.g. "3 of 5 Nodes Required"
  heartbeatIntervalMs: number;
  electionTimeoutRangeMs: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  raftNodes: RaftNode[];
  consensusStages: ConsensusStage[];
  hasLinearizableConsistency: boolean;
  hasDynamicMembershipReconfiguration: boolean;
}

// 6. Data Pipeline Lineage DAG ('data-pipeline-lineage-dag')
export interface DagNode {
  nodeId: string;
  nodeName: string;
  nodeLayer: 'ingestion' | 'transformation' | 'storage-lake' | 'analytics-serving';
  technology: string; // e.g. "Apache Kafka", "Apache Flink", "Apache Iceberg"
  throughputEventsSecFormatted: string;
  p99LatencyMsFormatted: string;
  partitionCount: number;
  isStreamActive: boolean;
  hasBackpressureGuard: boolean;
  isSlaCompliant: boolean;
}

export interface DagEdge {
  edgeId: string;
  sourceNodeId: string;
  targetNodeId: string;
  protocol: string; // e.g. "gRPC Stream", "Parquet Batch", "Iceberg Catalog"
  hasBufferQueue: boolean;
}

export interface DataPipelineLineageDagSlideData extends BaseSlide {
  type: 'data-pipeline-lineage-dag';
  pipelineName: string;
  pipelineVersion: string;
  totalDailyVolumeFormatted: string;
  endToEndP99SlaFormatted: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  dagNodes: DagNode[];
  dagEdges: DagEdge[];
  hasAutomatedDataQualityEnforcement: boolean;
  hasSchemaRegistryStrictValidation: boolean;
}

// 7. Code Walkthrough Syntax Lens ('code-walkthrough-syntax-lens')
export interface WalkthroughLine {
  lineNumber: number;
  codeContent: string;
  isFocalLine: boolean;
  hasCalloutBadge: boolean;
  calloutText?: string;
}

export interface WalkthroughStage {
  stepIndex: number;
  stageName: string;
  focusLineStart: number;
  focusLineEnd: number;
  explanationTitle: string;
  explanationProse: string;
  algorithmicComplexity: string; // e.g. "O(1) Lock-Free"
  isActive: boolean;
  isCompleted: boolean;
}

export interface CodeWalkthroughSyntaxLensSlideData extends BaseSlide {
  type: 'code-walkthrough-syntax-lens';
  sourceFilename: string;
  programmingLanguage: 'go' | 'typescript' | 'rust';
  gitCommitHash: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  codeLines: WalkthroughLine[];
  walkthroughStages: WalkthroughStage[];
  hasInteractiveLensGlow: boolean;
  hasSyntaxHighlightingActive: boolean;
}

// =============================================================================
// Discipline 3: Commercial GTM
// =============================================================================

// 8. Tier Comparison Feature Matrix ('tier-comparison-feature-matrix')
export interface MatrixFeatureRow {
  featureId: string;
  category: string;
  featureName: string;
  featureDescription: string;
  isOpenSourceSupported: boolean;
  isProCloudSupported: boolean;
  isEnterpriseSupported: boolean;
  isSovereignSupported: boolean;
  hasAirGappedCapability: boolean;
}

export interface TierComparisonFeatureMatrixSlideData extends BaseSlide {
  type: 'tier-comparison-feature-matrix';
  comparisonHeadline: string;
  recommendedTierId: string; // e.g. "enterprise"
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  featureRows: MatrixFeatureRow[];
  hasCommercialGuarantee: boolean;
  hasComplianceAuditTable: boolean;
}

// 9. ARR Growth Bridge Waterfall ('arr-growth-bridge-waterfall')
export interface WaterfallSegment {
  segmentId: string;
  segmentLabel: string;
  segmentType: 'starting' | 'positive-expansion' | 'negative-contraction' | 'ending';
  amountValue: number;
  amountFormatted: string; // e.g. "+$14.2M"
  percentageOfStartingArr: number;
  isPositiveContribution: boolean;
  hasAuditedMetric: boolean;
  isProjected: boolean;
}

export interface WaterfallStage {
  stepIndex: number;
  stageName: string;
  focusSegmentIds: string[];
  narrativeTakeaway: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface ArrGrowthBridgeWaterfallSlideData extends BaseSlide {
  type: 'arr-growth-bridge-waterfall';
  fiscalPeriod: string;
  startingArrFormatted: string;
  endingArrFormatted: string;
  netRevenueRetentionPct: number;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  waterfallSegments: WaterfallSegment[];
  bridgeStages: WaterfallStage[];
  hasAuditedFinancials: boolean;
  hasDetailedCohortAnalysis: boolean;
}

// 10. Multi-Tier SaaS Packaging Table ('multi-tier-saas-packaging-table')
export interface PackagingPricingTier {
  tierId: string;
  tierName: string;
  badgeLabel?: string;
  monthlyPriceFormatted: string;
  annualPriceFormatted: string;
  targetAudience: string;
  entitlements: string[];
  ctaLabel: string;
  isPopularTier: boolean;
  hasCustomPricing: boolean;
  hasPrioritySupport: boolean;
  hasDedicatedAccountManager: boolean;
}

export interface MultiTierSaasPackagingTableSlideData extends BaseSlide {
  type: 'multi-tier-saas-packaging-table';
  billingMode: 'annual' | 'monthly';
  annualDiscountPercentage: number;
  currencyCode: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  pricingTiers: PackagingPricingTier[];
  hasVolumeDiscounts: boolean;
  hasMoneyBackGuarantee: boolean;
}

// 11. Flywheel Growth Momentum Orbit ('flywheel-growth-momentum-orbit')
export interface FlywheelNode {
  nodeId: string;
  nodeTitle: string;
  subtext: string;
  orbitAngleDeg: number;
  rotationalVelocityRpm: number;
  metricMultiplier: string; // e.g. "3.8x Compounding"
  isCoreEngine: boolean;
  hasPositiveFeedbackLoop: boolean;
  isActive: boolean;
}

export interface OrbitalFlywheelStage {
  stepIndex: number;
  phaseName: string;
  focusNodeId: string;
  reinforcingEffectDescription: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface FlywheelGrowthMomentumOrbitSlideData extends BaseSlide {
  type: 'flywheel-growth-momentum-orbit';
  flywheelName: string;
  compoundingVelocityRatio: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  orbitNodes: FlywheelNode[];
  orbitStages: OrbitalFlywheelStage[];
  hasCentrifugalAccelerationActive: boolean;
  hasSelfSustainingMomentum: boolean;
}

// =============================================================================
// Discipline 4: Operational Evidence
// =============================================================================

// 12. Enterprise Case Study Hero ('enterprise-case-study-hero')
export interface EnterpriseCaseStudyMetric {
  metricId: string;
  metricLabel: string;
  metricValue: string; // e.g. "84%"
  improvementDirection: 'reduction' | 'increase';
  contextNote: string;
}

export interface ClientExecutiveQuote {
  quoteText: string;
  executiveName: string;
  executiveTitle: string;
  companyName: string;
  avatarUrl?: string;
  isQuoteAuthorized: boolean;
}

export interface EnterpriseCaseStudyHeroSlideData extends BaseSlide {
  type: 'enterprise-case-study-hero';
  clientName: string;
  clientIndustry: string;
  deploymentScaleDescription: string;
  legacyChallengeProse: string;
  architecturalInterventionProse: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  keyMetrics: EnterpriseCaseStudyMetric[];
  executiveQuote: ClientExecutiveQuote;
  hasVerifiedOutcome: boolean;
  hasVideoAssetAvailable: boolean;
}

// 13. Client Wall Social Proof Grid ('client-wall-social-proof-grid')
export interface ClientLogoEntry {
  clientId: string;
  clientName: string;
  industryCategory: 'banking' | 'healthtech' | 'hyperscaler' | 'defense-gov';
  logoSvgPath?: string;
  contractTenureYears: number;
  deploymentScope: string; // e.g. "Planetary Fleet Rollout"
  isFortune500: boolean;
  isPublicReferenceable: boolean;
  hasCaseStudyAvailable: boolean;
  isFeaturedClient: boolean;
}

export interface ClientWallSocialProofGridSlideData extends BaseSlide {
  type: 'client-wall-social-proof-grid';
  totalEnterpriseClientsCount: number;
  totalAssetsProtectedFormatted: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  clients: ClientLogoEntry[];
  hasVerifiedContractAudits: boolean;
  hasNdaCompliantLogos: boolean;
}

// 14. Incident Retrospective Timeline ('incident-retrospective-timeline')
export interface IncidentEvent {
  eventId: string;
  timestampUtc: string;
  eventType: 'detection' | 'investigation' | 'mitigation' | 'resolution';
  eventTitle: string;
  descriptionProse: string;
  actor: string;
  actorRole: string; // e.g. "Chief Software Engineer"
  isResolved: boolean;
  hasActionItemAssigned: boolean;
}

export interface IncidentStage {
  stepIndex: number;
  stageName: string;
  timeWindowUtc: string;
  summaryObjective: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface IncidentRetrospectiveTimelineSlideData extends BaseSlide {
  type: 'incident-retrospective-timeline';
  incidentIdentifier: string; // e.g. "INC-2026-10-88"
  severityLevel: 'SEV-1' | 'SEV-2' | 'SEV-3';
  timeToDetectFormatted: string; // e.g. "42 Seconds"
  timeToMitigateFormatted: string; // e.g. "8 Minutes 14 Seconds"
  leadIncidentCommander: string;
  commanderRole: string; // Strictly "Chief Software Engineer"
  rootCauseSummary: string;
  preventativeMeasures: string[];
  timelineEvents: IncidentEvent[];
  timelineStages: IncidentStage[];
  hasBlamelessCultureSignoff: boolean;
  hasAutomatedRegressionTestCreated: boolean;
}

// =============================================================================
// Discipline 5: Interactive Dialogue
// =============================================================================

// 15. Interactive FAQ Tabbed Deck ('interactive-faq-tabbed-deck')
export interface InteractiveFaqItem {
  faqId: string;
  category: 'security' | 'architecture' | 'commercial' | 'sla';
  question: string;
  answerSummary: string;
  answerDeepDiveProse: string;
  documentationUrl?: string;
  isExpandedByDefault: boolean;
  hasCodeSnippet: boolean;
  isVerifiedAnswer: boolean;
}

export type TabbedFaqItem = InteractiveFaqItem;

export interface FaqCategoryTab {
  categoryKey: 'security' | 'architecture' | 'commercial' | 'sla';
  categoryLabel: string;
  itemCount: number;
  isActive: boolean;
}

export interface InteractiveFaqTabbedDeckSlideData extends BaseSlide {
  type: 'interactive-faq-tabbed-deck';
  activeCategoryKey: 'security' | 'architecture' | 'commercial' | 'sla';
  searchFilterQuery?: string;
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  categories: FaqCategoryTab[];
  faqItems: InteractiveFaqItem[];
  hasLiveSearchEnabled: boolean;
  hasDocumentationLinksActive: boolean;
}

// 16. Audience Decision Fork Matrix ('audience-decision-fork-matrix')
export interface DecisionPathway {
  pathwayKey: 'A' | 'B' | 'C';
  pathwayTitle: string;
  strategicHeadline: string;
  capExRequirementFormatted: string;
  opExAnnualFormatted: string;
  timeToProduction: string;
  riskProfile: 'low' | 'moderate' | 'high';
  coreAdvantages: string[];
  strategicTradeoffs: string[];
  isRecommended: boolean;
  isSelected?: boolean;
}

export interface ForkStage {
  stepIndex: number;
  stageTitle: string;
  actionInstruction: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface AudienceDecisionForkMatrixSlideData extends BaseSlide {
  type: 'audience-decision-fork-matrix';
  decisionContextPrompt: string;
  votingSessionId: string;
  activePathwayKey?: 'A' | 'B' | 'C';
  leadArchitect: string;
  leadRole: string; // Strictly "Chief Software Engineer"
  pathways: DecisionPathway[];
  forkStages: ForkStage[];
  hasKeyboardShortcutsActive: boolean;
  hasFiduciarySignoff: boolean;
}

export interface MultiTenantIsolationMatrixSlideData extends BaseSlide {
  type: 'multi-tenant-isolation-matrix';
  leadArchitect?: string;
  tiers?: Array<{
    tierName: string;
    compute: string;
    storageKms: string;
    network: string;
    sla: string;
    isSovereign?: boolean;
  }>;
}

export interface RealtimeLatencyHeatmapSlideData extends BaseSlide {
  type: 'realtime-latency-heatmap';
  leadArchitect?: string;
  pops?: Array<{
    region: string;
    location: string;
    p50Ms: number;
    p95Ms: number;
    p99Ms: number;
    jitterMs: number;
    lossPct: number;
    isHealthy?: boolean;
  }>;
}

export interface ExecutiveGovernanceDashboardSlideData extends BaseSlide {
  type: 'executive-governance-dashboard';
  leadArchitect?: string;
  pillars?: Array<{
    standard: string;
    scope: string;
    statusText: string;
    scorePct: number;
    auditBody: string;
    hasPassed?: boolean;
  }>;
}

export interface ZeroTrustPolicyGraphSlideData extends BaseSlide {
  type: 'zero-trust-policy-graph';
  leadArchitect?: string;
  nodes?: Array<{
    stepNumber: number;
    layerTitle: string;
    technology: string;
    inspectionLatency: string;
    verificationRule: string;
    hasHardwareRoot?: boolean;
  }>;
}

export interface CloudFinopsPaybackWaterfallSlideData extends BaseSlide {
  type: 'cloud-finops-payback-waterfall';
  leadArchitect?: string;
  segments?: Array<{
    label: string;
    amount: string;
    deltaPct: string;
    description: string;
    isTotal?: boolean;
  }>;
}

export interface DistributedCqrsEventMeshSlideData extends BaseSlide {
  type: 'distributed-cqrs-event-mesh';
  leadArchitect?: string;
  stages?: Array<{
    stageName: string;
    subhead: string;
    engine: string;
    throughput: string;
    latency: string;
  }>;
}

export interface AutonomousSelfHealingPodSlideData extends BaseSlide {
  type: 'autonomous-self-healing-pod';
  leadArchitect?: string;
  steps?: Array<{
    step: string;
    action: string;
    duration: string;
    mechanism: string;
    status: string;
  }>;
}

export interface GlobalAnycastRoutingTopologySlideData extends BaseSlide {
  type: 'global-anycast-routing-topology';
  leadArchitect?: string;
  hubs?: Array<{
    hubCode: string;
    metro: string;
    transitPeers: string;
    ingressCapacity: string;
    bgpLatency: string;
    isPrimaryTransit?: boolean;
  }>;
}

export interface EnterpriseSbomSlsaProvenanceSlideData extends BaseSlide {
  type: 'enterprise-sbom-slsa-provenance';
  leadArchitect?: string;
  gates?: Array<{
    step: string;
    gateName: string;
    tooling: string;
    attestationStandard: string;
    hasPassed?: boolean;
  }>;
}

export interface SupplyChainResilienceIndexSlideData extends BaseSlide {
  type: 'supply-chain-resilience-index';
  leadArchitect?: string;
  vectors?: Array<{
    componentCategory: string;
    primarySupplier: string;
    secondarySupplier: string;
    resilienceScorePct: number;
    bufferDays: number;
    hasDualSourceActive?: boolean;
  }>;
}

export interface QuantumSafeMigrationLadderSlideData extends BaseSlide {
  type: 'quantum-safe-migration-ladder';
  leadArchitect?: string;
  phases?: Array<{
    phaseNumber: number;
    phaseTitle: string;
    algorithms: string;
    targetTimeline: string;
    implementationDetail: string;
    isCompleted?: boolean;
    isActive?: boolean;
  }>;
}

export interface CognitiveDecarbonizationEsgSlideData extends BaseSlide {
  type: 'cognitive-decarbonization-esg';
  leadArchitect?: string;
  metrics?: Array<{
    title: string;
    metricValue: string;
    baseline: string;
    highlight: string;
    subtext: string;
  }>;
}

export interface CustomerExperienceRetentionFunnelSlideData extends BaseSlide {
  type: 'customer-experience-retention-funnel';
  leadArchitect?: string;
  stages?: Array<{
    stageNumber: number;
    stageName: string;
    metricHero: string;
    metricLabel: string;
    conversionRate: string;
    narrative: string;
  }>;
}

export interface DeveloperVelocityDoraMatrixSlideData extends BaseSlide {
  type: 'developer-velocity-dora-matrix';
  leadArchitect?: string;
  dora?: Array<{
    metricName: string;
    metricValue: string;
    tierRating: 'Elite' | 'High';
    industryBenchmark: string;
    enablingMechanism: string;
  }>;
}

export interface StrategicPartnershipEcosystemSlideData extends BaseSlide {
  type: 'strategic-partnership-ecosystem';
  leadArchitect?: string;
  rings?: Array<{
    categoryTitle: string;
    partnerNames: string;
    integrationScope: string;
    arrContribution: string;
    certLevel: string;
  }>;
}

export interface ExecutiveCommitmentSignoffSlideData extends BaseSlide {
  type: 'executive-commitment-signoff';
  leadArchitect?: string;
  commitments?: Array<{
    title: string;
    targetMetric: string;
    legalGuarantee: string;
    penaltyClause: string;
  }>;
}

// =============================================================================
// Discriminated Union Slide Data for Module 39
// =============================================================================

export type GlobalPptExpansionSlideData =
  // 16 High-Authority Expansion Archetypes
  | MultiTenantIsolationMatrixSlideData
  | RealtimeLatencyHeatmapSlideData
  | ExecutiveGovernanceDashboardSlideData
  | ZeroTrustPolicyGraphSlideData
  | CloudFinopsPaybackWaterfallSlideData
  | DistributedCqrsEventMeshSlideData
  | AutonomousSelfHealingPodSlideData
  | GlobalAnycastRoutingTopologySlideData
  | EnterpriseSbomSlsaProvenanceSlideData
  | SupplyChainResilienceIndexSlideData
  | QuantumSafeMigrationLadderSlideData
  | CognitiveDecarbonizationEsgSlideData
  | CustomerExperienceRetentionFunnelSlideData
  | DeveloperVelocityDoraMatrixSlideData
  | StrategicPartnershipEcosystemSlideData
  | ExecutiveCommitmentSignoffSlideData
  // Discipline 1
  | ExecutiveMandateScorecardSlideData
  | BoardQuorumResolutionLedgerSlideData
  | MacroEconomicThreatRadarSlideData
  // Discipline 2
  | ZeroTrustNetworkMeshSlideData
  | DistributedConsensusRaftLogSlideData
  | DataPipelineLineageDagSlideData
  | CodeWalkthroughSyntaxLensSlideData
  // Discipline 3
  | TierComparisonFeatureMatrixSlideData
  | ArrGrowthBridgeWaterfallSlideData
  | MultiTierSaasPackagingTableSlideData
  | FlywheelGrowthMomentumOrbitSlideData
  // Discipline 4
  | EnterpriseCaseStudyHeroSlideData
  | ClientWallSocialProofGridSlideData
  | IncidentRetrospectiveTimelineSlideData
  // Discipline 5
  | InteractiveFaqTabbedDeckSlideData
  | AudienceDecisionForkMatrixSlideData;

// Backward compatibility alias
export type GlobalEvolution16SlideData = GlobalPptExpansionSlideData;

// =============================================================================
// Step Count Calculation Engine & Type Guards
// =============================================================================

export const GLOBAL_PPT_EXPANSION_TYPES = [
  'multi-tenant-isolation-matrix',
  'realtime-latency-heatmap',
  'executive-governance-dashboard',
  'zero-trust-policy-graph',
  'cloud-finops-payback-waterfall',
  'distributed-cqrs-event-mesh',
  'autonomous-self-healing-pod',
  'global-anycast-routing-topology',
  'enterprise-sbom-slsa-provenance',
  'supply-chain-resilience-index',
  'quantum-safe-migration-ladder',
  'cognitive-decarbonization-esg',
  'customer-experience-retention-funnel',
  'developer-velocity-dora-matrix',
  'strategic-partnership-ecosystem',
  'executive-commitment-signoff',
  'executive-mandate-scorecard',
  'board-quorum-resolution-ledger',
  'macro-economic-threat-radar',
  'zero-trust-network-mesh',
  'distributed-consensus-raft-log',
  'data-pipeline-lineage-dag',
  'code-walkthrough-syntax-lens',
  'tier-comparison-feature-matrix',
  'arr-growth-bridge-waterfall',
  'multi-tier-saas-packaging-table',
  'flywheel-growth-momentum-orbit',
  'enterprise-case-study-hero',
  'client-wall-social-proof-grid',
  'incident-retrospective-timeline',
  'interactive-faq-tabbed-deck',
  'audience-decision-fork-matrix',
] as const;

export function isGlobalPptExpansionSlide(slide: unknown): slide is GlobalPptExpansionSlideData {
  if (typeof slide !== 'object' || slide === null) return false;
  const candidate = slide as { type?: string };
  return typeof candidate.type === 'string' && (GLOBAL_PPT_EXPANSION_TYPES as readonly string[]).includes(candidate.type);
}

export const isGlobalEvolution16Slide = isGlobalPptExpansionSlide;

function getExpansionDiscipline1Steps(slide: GlobalPptExpansionSlideData): number {
  if (slide.type === 'executive-mandate-scorecard') {
    return Math.max(slide.mandateStages?.length ?? 4, 1);
  }
  if (slide.type === 'macro-economic-threat-radar') {
    return Math.max(slide.radarStages?.length ?? 4, 1);
  }
  return 1;
}

function getExpansionDiscipline2Steps(slide: GlobalPptExpansionSlideData): number {
  if (slide.type === 'zero-trust-network-mesh') {
    return Math.max(slide.meshStages?.length ?? 4, 1);
  }
  if (slide.type === 'distributed-consensus-raft-log') {
    return Math.max(slide.consensusStages?.length ?? 4, 1);
  }
  if (slide.type === 'code-walkthrough-syntax-lens') {
    return Math.max(slide.walkthroughStages?.length ?? 4, 1);
  }
  return 1;
}

function getExpansionDiscipline3Steps(slide: GlobalPptExpansionSlideData): number {
  if (slide.type === 'arr-growth-bridge-waterfall') {
    return Math.max(slide.bridgeStages?.length ?? 4, 1);
  }
  if (slide.type === 'flywheel-growth-momentum-orbit') {
    return Math.max(slide.orbitStages?.length ?? 4, 1);
  }
  return 1;
}

function getExpansionDiscipline4And5Steps(slide: GlobalPptExpansionSlideData): number {
  if (slide.type === 'incident-retrospective-timeline') {
    return Math.max(slide.timelineStages?.length ?? 4, 1);
  }
  if (slide.type === 'audience-decision-fork-matrix') {
    return Math.max(slide.forkStages?.length ?? 4, 1);
  }
  return 1;
}

export function calculateGlobalPptExpansionSlideSteps(slide: GlobalPptExpansionSlideData): number {
  const t = slide.type;
  if (t === 'executive-mandate-scorecard' || t === 'macro-economic-threat-radar') {
    return getExpansionDiscipline1Steps(slide);
  }
  if (t === 'zero-trust-network-mesh' || t === 'distributed-consensus-raft-log' || t === 'code-walkthrough-syntax-lens') {
    return getExpansionDiscipline2Steps(slide);
  }
  if (t === 'arr-growth-bridge-waterfall' || t === 'flywheel-growth-momentum-orbit') {
    return getExpansionDiscipline3Steps(slide);
  }
  return getExpansionDiscipline4And5Steps(slide);
}

export const calculateGlobalEvolution16StepCount = calculateGlobalPptExpansionSlideSteps;
