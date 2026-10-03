import type { BaseSlide } from './presentation';

// -----------------------------------------------------------------------------
// Master Catalog of 15 Kinetic Slide Archetypes (02-data-contracts.md)
// -----------------------------------------------------------------------------

// =============================================================================
// 1. Code Diff Comparison (code-diff-comparison)
// =============================================================================
export interface DiffHunkLine {
  lineNumber: number;
  content: string;
  isAddition: boolean;
  isDeletion: boolean;
  isModified: boolean;
  isHighlighted: boolean;
}

export interface DiffChunkItem {
  id: string;
  chunkTitle: string;
  chunkExplanation: string;
  beforeStartLine: number;
  afterStartLine: number;
  beforeLines: DiffHunkLine[];
  afterLines: DiffHunkLine[];
  isCompleted?: boolean;
}

export interface DiffRevealItem {
  id?: string;
  stepIndex?: number;
  title?: string;
  description?: string;
  beforeSnippet?: string;
  afterSnippet?: string;
  isHighlighted?: boolean;
  isCompleted?: boolean;
}

export interface RefactoringMetricItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  metricDelta: string;
  hasPositiveImpact: boolean;
}

export interface CodeDiffComparisonSlideData extends BaseSlide {
  type: 'code-diff-comparison';
  language: string;
  beforeHeader: string;
  afterHeader: string;
  diffChunks: DiffChunkItem[];
  diffReveals?: DiffRevealItem[];
  refactoringMetrics: RefactoringMetricItem[];
  hasSyntaxHighlighting: boolean;
  hasLineNumbers: boolean;
}

// =============================================================================
// 2. Global Cloud Edge Mesh (global-cloud-edge-mesh)
// =============================================================================
export interface EdgeMeshRegionItem {
  id: string;
  regionCode: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  p50LatencyMs: number;
  p95LatencyMs: number;
  p99LatencyMs: number;
  throughputGbps: number;
  isOperational: boolean;
  isPrimaryHub: boolean;
}

export interface MeshBackboneLink {
  id: string;
  sourceRegionId: string;
  targetRegionId: string;
  transitLatencyMs: number;
  bandwidthCapacityGbps: number;
  isEncrypted: boolean;
  isHealthy: boolean;
}

export interface GlobalCloudEdgeMeshSlideData extends BaseSlide {
  type: 'global-cloud-edge-mesh';
  autonomousSystemNumber: string;
  edgeHitRatioPercent: number;
  globalAverageTtfbMs: number;
  regions: EdgeMeshRegionItem[];
  backboneLinks: MeshBackboneLink[];
  hasLivePulse: boolean;
}

// =============================================================================
// 3. API Endpoint Inspector (api-endpoint-inspector)
// =============================================================================
export interface ApiParameterItem {
  id: string;
  name: string;
  type: string;
  location: 'query' | 'path' | 'header' | 'body';
  description: string;
  isRequired: boolean;
  defaultValue?: string;
}

export interface ApiResponseField {
  key: string;
  value: string;
  type: string;
  description: string;
  isPositiveStatus?: boolean;
}

export interface InspectorStepItem {
  id?: string;
  title?: string;
  description?: string;
  isHighlighted?: boolean;
}

export interface ApiEndpointInspectorSlideData extends BaseSlide {
  type: 'api-endpoint-inspector';
  httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpointPath: string;
  authStrategy: string;
  rateLimitPerMinute: number;
  parameters: ApiParameterItem[];
  inspectorSteps?: InspectorStepItem[];
  responseStatusCode: number;
  responsePayload: string;
  hasSchemaValidation: boolean;
}

// =============================================================================
// 4. Database Schema ERD (database-schema-erd)
// =============================================================================
export interface DbColumnDefinition {
  name: string;
  dataType: string;
  isPrimaryKey: boolean;
  isForeignKey: boolean;
  isNullable: boolean;
  isIndexed: boolean;
  defaultValue?: string;
}

export interface DbRelationshipLink {
  sourceColumn: string;
  targetTable: string;
  targetColumn: string;
  cardinality: 'one-to-one' | 'one-to-many' | 'many-to-many';
}

export interface DbTableEntity {
  id: string;
  tableName: string;
  databaseTier: 'system.db' | 'tenant.db' | 'audit.db';
  columns: DbColumnDefinition[];
  relationships: DbRelationshipLink[];
  rowCountEstimate: number;
}

export interface DatabaseSchemaErdSlideData extends BaseSlide {
  type: 'database-schema-erd';
  databaseEngine: string;
  storageIsolationModel: string;
  tables: DbTableEntity[];
  hasForeignKeyEnforcement: boolean;
}

// =============================================================================
// 5. Security Threat Model (security-threat-model)
// =============================================================================
export interface ThreatVectorItem {
  id: string;
  category: 'Spoofing' | 'Tampering' | 'Repudiation' | 'InformationDisclosure' | 'DenialOfService' | 'ElevationOfPrivilege';
  vectorName: string;
  riskSeverity: 'low' | 'medium' | 'high' | 'critical';
  mitigationStrategy: string;
  isMitigated: boolean;
}

export interface DefensiveControlItem {
  id: string;
  name: string;
  enforcementLayer: 'network' | 'kernel' | 'application' | 'database';
  cipherSuite: string;
  isHardwareAccelerated: boolean;
  isEnforced: boolean;
}

export interface SecurityThreatModelSlideData extends BaseSlide {
  type: 'security-threat-model';
  trustBoundaryCount: number;
  threatVectors: ThreatVectorItem[];
  defensiveControls: DefensiveControlItem[];
  isSoc2Compliant: boolean;
  hasHardwareIsolation: boolean;
}

// =============================================================================
// 6. AI Agent Swarm DAG (ai-agent-swarm-dag)
// =============================================================================
export interface AgentNodeItem {
  id: string;
  agentRole: string;
  agentName: string;
  modelIdentifier: 'pro' | 'flash' | 'flash_lite';
  assignedTaskDescription: string;
  executionDurationMs: number;
  tokenCount: number;
  isCompleted: boolean;
  isEvidencePassed: boolean;
}

export interface DagEdgeLink {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  edgeLabel?: string;
  isTraversed: boolean;
}

export interface SwarmPhaseItem {
  id?: string;
  phaseName?: string;
  description?: string;
  isCompleted?: boolean;
}

export interface AiAgentSwarmDagSlideData extends BaseSlide {
  type: 'ai-agent-swarm-dag';
  orchestratorRole: string;
  totalTokenBudget: number;
  nodes: AgentNodeItem[];
  edges: DagEdgeLink[];
  swarmPhases?: SwarmPhaseItem[];
  hasCyclicDependency: boolean;
}

// =============================================================================
// 7. Financial Burn & Runway (financial-burn-runway)
// =============================================================================
export interface RunwayMonthData {
  monthIndex: number;
  monthLabel: string;
  cashReservesUsd: number;
  netBurnUsd: number;
  monthlyRevenueUsd: number;
  isBreakevenMonth: boolean;
}

export interface ExpenseAllocationItem {
  id: string;
  category: string;
  percentageShare: number;
  monthlyAmountUsd: number;
}

export interface FinancialBurnRunwaySlideData extends BaseSlide {
  type: 'financial-burn-runway';
  currentReservesUsd: number;
  monthlyNetBurnUsd: number;
  runwayMonthsRemaining: number;
  breakevenMonthTarget: number;
  grossMarginPercent: number;
  months: RunwayMonthData[];
  expenseAllocations: ExpenseAllocationItem[];
  isVentureBacked: boolean;
}

// =============================================================================
// 8. Bento KPI Mosaic (bento-kpi-mosaic)
// =============================================================================
export interface BentoKpiCardItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  deltaPercent: number;
  deltaPeriod: string;
  hasPositiveGrowth: boolean;
  sparklinePoints?: number[];
  cardSpanColumns: number;
  cardSpanRows: number;
}

export interface BentoKpiMosaicSlideData extends BaseSlide {
  type: 'bento-kpi-mosaic';
  reportingQuarter: string;
  cards: BentoKpiCardItem[];
  hasLiveSparklines: boolean;
}

// =============================================================================
// 9. Canary Release Gauge (canary-release-gauge)
// =============================================================================
export interface CanaryStageItem {
  id: string;
  stageName: string;
  trafficPercentage: number;
  durationMinutes: number;
  observedErrorRatePercent: number;
  isCompleted: boolean;
  isActive: boolean;
  hasPassedQualityGate: boolean;
}

export interface MetricThresholdRule {
  id: string;
  metricName: string;
  thresholdLimit: string;
  isTriggered: boolean;
  canRollbackAutomatically: boolean;
}

export interface CanaryReleaseGaugeSlideData extends BaseSlide {
  type: 'canary-release-gauge';
  releaseVersion: string;
  targetEnvironment: string;
  stages: CanaryStageItem[];
  canaryStages?: CanaryStageItem[];
  thresholdRules: MetricThresholdRule[];
  isAutomatedRollbackEnabled: boolean;
}

// =============================================================================
// 10. Incident RCA Postmortem (incident-rca-postmortem)
// =============================================================================
export interface RcaPillarItem {
  id: string;
  pillarIndex: number;
  pillarTitle: string;
  pillarSubtitle: string;
  findings: string[];
  remediationOwner?: string;
  isActionable: boolean;
}

export interface IncidentTimelineEvent {
  timeOffset: string;
  eventDescription: string;
  isMitigationPoint: boolean;
}

export interface IncidentRcaPostmortemSlideData extends BaseSlide {
  type: 'incident-rca-postmortem';
  incidentId: string;
  severityLevel: 'SEV-1' | 'SEV-2' | 'SEV-3';
  downtimeMinutes: number;
  pillars: RcaPillarItem[];
  rcaPhases?: RcaPillarItem[];
  timeline: IncidentTimelineEvent[];
  isBlamelessPostmortem: boolean;
}

// =============================================================================
// 11. SLAs and Uptime Status (slas-and-uptime-status)
// =============================================================================
export interface ServiceComponentItem {
  id: string;
  name: string;
  tier: 'core' | 'edge' | 'data' | 'async';
  uptimePercentage: number;
  isOperational: boolean;
  hasRecentIncident: boolean;
  historyBlocks: { dayIndex: number; isHealthy: boolean }[];
}

export interface SlasAndUptimeStatusSlideData extends BaseSlide {
  type: 'slas-and-uptime-status';
  overallUptimePercent: number;
  meanTimeToDetectSeconds: number;
  meanTimeToRecoverMinutes: number;
  incidentFreeDaysCount: number;
  services: ServiceComponentItem[];
  hasExternalAuditorVerification: boolean;
}

// =============================================================================
// 12. Audio Waveform Studio (audio-waveform-studio)
// =============================================================================
export interface PhonemeToken {
  phonemeSymbol: string;
  startTimestampMs: number;
  endTimestampMs: number;
  confidenceScore: number;
}

export interface AudioTrackChannel {
  id: string;
  trackName: string;
  samplingRateKhz: number;
  waveformAmplitudes: number[];
  phonemes?: PhonemeToken[];
  isActiveTrack: boolean;
}

export interface AudioPhaseItem {
  id?: string;
  phaseName?: string;
  description?: string;
  isCompleted?: boolean;
}

export interface AudioWaveformStudioSlideData extends BaseSlide {
  type: 'audio-waveform-studio';
  audioCodec: string;
  synthesisLatencyMs: number;
  tracks: AudioTrackChannel[];
  audioPhases?: AudioPhaseItem[];
  hasLivePlayback: boolean;
}

// =============================================================================
// 13. Hardware Silicon Spec (hardware-silicon-spec)
// =============================================================================
export interface SiliconDieComponent {
  id: string;
  blockName: string;
  areaSquareMm: number;
  powerConsumptionWatts: number;
  clockSpeedGhz: number;
  isPrimaryCompute: boolean;
}

export interface HardwareSiliconSpecSlideData extends BaseSlide {
  type: 'hardware-silicon-spec';
  processNodeNm: number;
  transistorCountBillions: number;
  thermalDesignPowerWatts: number;
  dieAreaSquareMm: number;
  memoryBandwidthGbps: number;
  blocks: SiliconDieComponent[];
  isTapeoutVerified: boolean;
}

// =============================================================================
// 14. Cohort Retention Heatmap (cohort-retention-heatmap)
// =============================================================================
export interface CohortRowItem {
  id: string;
  cohortLabel: string;
  startingAccountCount: number;
  retentionPercentages: number[];
}

export interface CohortRetentionHeatmapSlideData extends BaseSlide {
  type: 'cohort-retention-heatmap';
  netRevenueRetentionPercent: number;
  grossLogoRetentionPercent: number;
  ltvToCacRatio: number;
  cohorts: CohortRowItem[];
  hasColorShading: boolean;
}

// =============================================================================
// 15. Verifiable Audit Ledger (verifiable-audit-ledger)
// =============================================================================
export interface CryptographicEvidenceItem {
  id: string;
  gateIndex: number;
  gateName: string;
  evidenceType: 'signature' | 'sbom' | 'linter' | 'integration' | 'merkle';
  cryptographicHash: string;
  attestorIdentity: string;
  isVerified: boolean;
  hasAuditGap: boolean;
}

export interface VerifiableAuditLedgerSlideData extends BaseSlide {
  type: 'verifiable-audit-ledger';
  merkleRootHash: string;
  chiefAuditorName: string;
  chiefAuditorTitle: string;
  gates: CryptographicEvidenceItem[];
  evidenceGates?: CryptographicEvidenceItem[];
  isTamperEvident: boolean;
}

// =============================================================================
// Master Discriminated Unions
// =============================================================================
export type KineticSuiteSlideType =
  | 'code-diff-comparison'
  | 'global-cloud-edge-mesh'
  | 'api-endpoint-inspector'
  | 'database-schema-erd'
  | 'security-threat-model'
  | 'ai-agent-swarm-dag'
  | 'financial-burn-runway'
  | 'bento-kpi-mosaic'
  | 'canary-release-gauge'
  | 'incident-rca-postmortem'
  | 'slas-and-uptime-status'
  | 'audio-waveform-studio'
  | 'hardware-silicon-spec'
  | 'cohort-retention-heatmap'
  | 'verifiable-audit-ledger';

export type KineticSuiteSlideData =
  | CodeDiffComparisonSlideData
  | GlobalCloudEdgeMeshSlideData
  | ApiEndpointInspectorSlideData
  | DatabaseSchemaErdSlideData
  | SecurityThreatModelSlideData
  | AiAgentSwarmDagSlideData
  | FinancialBurnRunwaySlideData
  | BentoKpiMosaicSlideData
  | CanaryReleaseGaugeSlideData
  | IncidentRcaPostmortemSlideData
  | SlasAndUptimeStatusSlideData
  | AudioWaveformStudioSlideData
  | HardwareSiliconSpecSlideData
  | CohortRetentionHeatmapSlideData
  | VerifiableAuditLedgerSlideData;

// =============================================================================
// Step Count Calculation Engine
// =============================================================================
export function calculateKineticSlideStepCount(slide: KineticSuiteSlideData): number {
  switch (slide.type) {
    case 'code-diff-comparison':
      return Math.max(slide.diffReveals?.length || slide.diffChunks?.length || 1, 1);
    case 'api-endpoint-inspector':
      return Math.max(slide.inspectorSteps?.length || slide.parameters?.length || 1, 1);
    case 'database-schema-erd':
      return Math.max(slide.tables?.length || 1, 1);
    case 'ai-agent-swarm-dag':
      return Math.max(slide.swarmPhases?.length || slide.nodes?.length || 1, 1);
    case 'canary-release-gauge':
      return Math.max(slide.canaryStages?.length || slide.stages?.length || 1, 1);
    case 'incident-rca-postmortem':
      return 4; // Exactly 4 RCA Pillars
    case 'audio-waveform-studio':
      return Math.max(slide.audioPhases?.length || slide.tracks?.length || 1, 1);
    case 'verifiable-audit-ledger':
      return Math.max(slide.evidenceGates?.length || slide.gates?.length || 1, 1);

    // Flat Sovereign Telemetry Archetypes
    case 'global-cloud-edge-mesh':
    case 'security-threat-model':
    case 'financial-burn-runway':
    case 'bento-kpi-mosaic':
    case 'slas-and-uptime-status':
    case 'hardware-silicon-spec':
    case 'cohort-retention-heatmap':
      return 1;

    default:
      return 1;
  }
}
