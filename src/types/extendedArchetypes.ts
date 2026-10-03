import type { BaseSlide } from './presentation';

// -----------------------------------------------------------------------------
// 1. Personal VPN Slide Data Contract
// -----------------------------------------------------------------------------
export interface VpnNodeItem {
  id: string;
  city: string;
  country: string;
  ipAddress: string;
  latencyMs: number;
  bandwidthGbps: number;
  serverLoadPct: number;
  osDistribution: 'FreeBSD' | 'OpenBSD' | 'Linux-Hardened';
  isKillSwitchActive: boolean;
  isVerifiedAudit: boolean;
}

export interface PersonalVpnSlideData extends BaseSlide {
  type: 'personal-vpn';
  activeProtocol: 'WireGuard' | 'OpenVPN' | 'IPSec';
  encryptionSuite: string;
  totalServersCount: number;
  totalCountriesCount: number;
  nodes: VpnNodeItem[];
  networkSummaryNotes?: string;
  features?: VpnNodeItem[];
}

// -----------------------------------------------------------------------------
// 2. Meeting Transcript Slide Data Contract
// -----------------------------------------------------------------------------
export interface SpeakerTurnItem {
  id: string;
  speakerName: string;
  speakerRole: string;
  timestamp: string;
  utterance: string;
  speakerColor: string;
  sentimentTag: 'constructive' | 'decisive' | 'inquiry';
  hasAccentHighlight?: boolean;
}

export interface SyncedDeviceItem {
  id: string;
  deviceName: string;
  deviceType: 'desktop' | 'phone' | 'tablet';
  syncState: string;
  latencyMs: number;
  isPrimaryHost: boolean;
}

export interface MeetingTranscriptSlideData extends BaseSlide {
  type: 'meeting-transcript';
  meetingTitle: string;
  meetingDate: string;
  durationFormatted: string;
  speakerTurns: SpeakerTurnItem[];
  syncedDevices: SyncedDeviceItem[];
  isLiveRecording: boolean;
  transcriptSegments?: SpeakerTurnItem[];
}

// -----------------------------------------------------------------------------
// 3. LLM Benchmark Slide Data Contract
// -----------------------------------------------------------------------------
export interface LlmBenchmarkModelItem {
  id: string;
  modelName: string;
  provider: string;
  timeToFirstTokenMs: number;
  tokensPerSec: number;
  contextWindow: string;
  isPrivateOnDevice: boolean;
  isLeader: boolean;
  sampleStreamChunk: string;
  evaluationScorePct: number;
}

export interface LlmBenchmarkSlideData extends BaseSlide {
  type: 'llm-benchmark';
  benchmarkDatasetName: string;
  hardwarePlatform: string;
  peakThroughput: string;
  lowestLatency: string;
  models: LlmBenchmarkModelItem[];
  evaluationCriteriaNotes?: string;
  modelResults?: LlmBenchmarkModelItem[];
}

// -----------------------------------------------------------------------------
// 4. Services Gravity Slide Data Contract
// -----------------------------------------------------------------------------
export interface OrbitingServiceBubble {
  id: string;
  name: string;
  category: string;
  orbitRadiusPx: number;
  orbitSpeedDeg: number;
  bubbleSizePx: number;
  slaAvailability: string;
  throughputKps: number;
  p99LatencyMs: number;
  isMissionCritical: boolean;
}

export interface ServicesGravitySlideData extends BaseSlide {
  type: 'services-gravity';
  coreSunTitle: string;
  coreSunSubtitle: string;
  physicsPreset: 'servicesDefault' | 'calm' | 'dense' | 'lively';
  services: OrbitingServiceBubble[];
  gravitySummaryNotes?: string;
  pillars?: OrbitingServiceBubble[];
}

// -----------------------------------------------------------------------------
// 5. SEO Dominance Slide Data Contract
// -----------------------------------------------------------------------------
export interface SeoEraItem {
  id: string;
  yearRange: string;
  eraName: string;
  primaryRankingSignal: string;
  difficultyScorePct: number;
  tacticsSummary: string;
  isCurrentEra: boolean;
}

export interface SeoAuditCell {
  id: string;
  metricName: string;
  benchmarkTarget: string;
  achievedValue: string;
  scorePct: number;
  isPassingScore: boolean;
}

export interface SeoDominanceSlideData extends BaseSlide {
  type: 'seo-dominance';
  historicCtrDropPct: number;
  zeroClickQueryPct: number;
  eras: SeoEraItem[];
  auditGrid: SeoAuditCell[];
  strategicTakeawayQuote?: string;
}

// -----------------------------------------------------------------------------
// 6. Staff Aug Pipeline Slide Data Contract
// -----------------------------------------------------------------------------
export interface VettingStageItem {
  id: string;
  stageNumber: number;
  stageName: string;
  candidateVolume: number;
  passPercentage: number;
  primaryFilterCriteria: string;
  assessmentTool: string;
  isDecisiveGate: boolean;
}

export interface StaffAugPipelineSlideData extends BaseSlide {
  type: 'staff-aug-pipeline';
  sourcePoolCount: number;
  finalHiredCount: number;
  yieldRatioText: string;
  stages: VettingStageItem[];
  pipelineSummaryNotes?: string;
  vettingStages?: VettingStageItem[];
}

// -----------------------------------------------------------------------------
// 7. Craftsmanship Benchmark Slide Data Contract
// -----------------------------------------------------------------------------
export interface CraftsmanshipTierItem {
  id: string;
  dimensionName: string;
  commodityStandard: string;
  sovereignCraftsmanship: string;
  metricComparison: string;
  isBenchmarkExceeded: boolean;
}

export interface CraftsmanshipBenchmarkSlideData extends BaseSlide {
  type: 'craftsmanship-benchmark';
  luxuryBrandMetaphor: string;
  prestigeQuote: string;
  authorTitle: string;
  benchmarks: CraftsmanshipTierItem[];
  revelations?: CraftsmanshipTierItem[];
}

// -----------------------------------------------------------------------------
// 8. Weekly Cadence Slide Data Contract
// -----------------------------------------------------------------------------
export interface CadenceTimeBlock {
  id: string;
  timeRange: string;
  blockTitle: string;
  blockCategory: 'deep-work' | 'sync-overlap' | 'sprint-demo' | 'async-rfc';
  durationHours: number;
}

export interface CadenceDayItem {
  id: string;
  dayName: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday';
  dayThemeFocus: string;
  blocks: CadenceTimeBlock[];
  isReleaseDay: boolean;
}

export interface WeeklyCadenceSlideData extends BaseSlide {
  type: 'weekly-cadence';
  primaryTimezonesText: string;
  goldenOverlapWindowText: string;
  days: CadenceDayItem[];
  governanceMotto?: string;
  weeklyRituals?: CadenceDayItem[];
}

// -----------------------------------------------------------------------------
// 9. Competitive Moat Slide Data Contract
// -----------------------------------------------------------------------------
export interface MoatPillarItem {
  id: string;
  pillarTitle: string;
  category: 'network-effects' | 'switching-costs' | 'data-flywheel' | 'intellectual-property';
  barrierScore10: number;
  timeToReplicateYears: number;
  coreMechanism: string;
  keyAssets: string[];
  isDominantAdvantage: boolean;
}

export interface CompetitiveMoatSlideData extends BaseSlide {
  type: 'competitive-moat';
  shimmerStatement: string;
  overallDefensibilityRating: string;
  moatPillars: MoatPillarItem[];
  defensibilityNotes?: string;
  moatDimensions?: MoatPillarItem[];
}

// -----------------------------------------------------------------------------
// 10. Rapid Feedback Slide Data Contract
// -----------------------------------------------------------------------------
export interface FeedbackLoopStageItem {
  id: string;
  stageOrder: number;
  stageName: string;
  leadTimeFormatted: string;
  toolchainIcon: string;
  actionSummary: string;
  isAutomatedGate: boolean;
}

export interface RapidFeedbackSlideData extends BaseSlide {
  type: 'rapid-feedback';
  dailyDeployFrequency: number;
  leadTimeToProductionMinutes: number;
  changeFailureRatePct: number;
  loopStages: FeedbackLoopStageItem[];
  cultureDirectives?: string[];
  cycleStages?: FeedbackLoopStageItem[];
}

// -----------------------------------------------------------------------------
// 11. Interactive Poll Slide Data Contract
// -----------------------------------------------------------------------------
export interface PollOptionItem {
  id: string;
  optionKey: 'A' | 'B' | 'C' | 'D';
  optionLabel: string;
  votesCount: number;
  percentageScore: number;
  isWinningLeader: boolean;
}

export interface InteractivePollSlideData extends BaseSlide {
  type: 'interactive-poll';
  questionPrompt: string;
  totalVotesReceived: number;
  isPollingActive: boolean;
  options: PollOptionItem[];
  qrCodeTargetUrl?: string;
}

// -----------------------------------------------------------------------------
// 12. Live QA Slide Data Contract
// -----------------------------------------------------------------------------
export interface LiveQuestionItem {
  id: string;
  submitterName: string;
  submitterCompany: string;
  questionText: string;
  upvotesCount: number;
  answerBullets: string[];
  isAnswered: boolean;
  isFlaggedPriority: boolean;
}

export interface LiveQaSlideData extends BaseSlide {
  type: 'live-qa';
  totalQuestionsSubmitted: number;
  moderationStatusText: string;
  questions: LiveQuestionItem[];
  curatedQuestions?: LiveQuestionItem[];
}

// -----------------------------------------------------------------------------
// 13. Embed Stage Slide Data Contract
// -----------------------------------------------------------------------------
export interface EmbedStageSlideData extends BaseSlide {
  type: 'embed-stage';
  embedUrl: string;
  displayTitle: string;
  isSandboxStrict: boolean;
  isCameraAllowed: boolean;
  hasCameraAccess?: boolean;
  allowCameraAccess?: boolean;
  isMicrophoneAllowed: boolean;
  hasMicrophoneAccess?: boolean;
  allowMicrophoneAccess?: boolean;
  fallbackImageUrl?: string;
  telemetryBadgeText?: string;
}

// -----------------------------------------------------------------------------
// 14. Countdown Launch Slide Data Contract
// -----------------------------------------------------------------------------
export interface LaunchGateItem {
  id: string;
  gateNumber: number;
  gateTitle: string;
  assignedOwner: string;
  isPassed: boolean;
  isMissionCritical: boolean;
}

export interface CountdownLaunchSlideData extends BaseSlide {
  type: 'countdown-launch';
  targetIsoTimestamp: string;
  launchStageName: string;
  launchDirectorName: string;
  launchDirectorTitle: string;
  urgencyState: 'normal' | 'impending' | 'critical';
  launchGates: LaunchGateItem[];
  launchPhases?: LaunchGateItem[];
}

// -----------------------------------------------------------------------------
// 15. Executive Takeaways Slide Data Contract
// -----------------------------------------------------------------------------
export interface ExecutiveRoiMetric {
  id: string;
  metricValue: string;
  metricLabel: string;
  isPositiveYield: boolean;
}

export interface ExecutiveActionItem {
  id: string;
  actionTitle: string;
  ownerName: string;
  ownerTitle: string;
  targetTimeline: string;
  statusBadge: string;
  isApproved: boolean;
}

export interface ExecutiveTakeawaysSlideData extends BaseSlide {
  type: 'executive-takeaways';
  strategicSynopsis: string;
  executiveSignOffName: string;
  executiveSignOffTitle: string;
  roiMetrics: ExecutiveRoiMetric[];
  actionItems: ExecutiveActionItem[];
  boardApprovalReference?: string;
  actionProtocols?: ExecutiveActionItem[];
}

// -----------------------------------------------------------------------------
// The 15 Extended Slide Discriminated Unions
// -----------------------------------------------------------------------------
export type ExtendedSlideType =
  | 'personal-vpn'
  | 'meeting-transcript'
  | 'llm-benchmark'
  | 'services-gravity'
  | 'seo-dominance'
  | 'staff-aug-pipeline'
  | 'craftsmanship-benchmark'
  | 'weekly-cadence'
  | 'competitive-moat'
  | 'rapid-feedback'
  | 'interactive-poll'
  | 'live-qa'
  | 'embed-stage'
  | 'countdown-launch'
  | 'executive-takeaways';

export type ExtendedSlideData =
  | PersonalVpnSlideData
  | MeetingTranscriptSlideData
  | LlmBenchmarkSlideData
  | ServicesGravitySlideData
  | SeoDominanceSlideData
  | StaffAugPipelineSlideData
  | CraftsmanshipBenchmarkSlideData
  | WeeklyCadenceSlideData
  | CompetitiveMoatSlideData
  | RapidFeedbackSlideData
  | InteractivePollSlideData
  | LiveQaSlideData
  | EmbedStageSlideData
  | CountdownLaunchSlideData
  | ExecutiveTakeawaysSlideData;

// -----------------------------------------------------------------------------
// Legacy Slide Archetypes (Preserved for backwards compatibility with existing slides)
// -----------------------------------------------------------------------------
export interface GrowthChannel {
  id: string;
  name: string;
  headlineMetric: string;
  metricLabel: string;
  growthDelta: string;
  isPositiveGrowth: boolean;
  tactics: string[];
  tag: string;
  icon: string;
}

export interface GrowthEngineSlideData extends BaseSlide {
  type: 'growth-engine';
  channels: GrowthChannel[];
  summaryNote?: string;
}

export interface PyramidTier {
  id: string;
  tierNumber: number;
  label: string;
  filterRatio: string;
  subtitle: string;
  description: string;
  color: string;
  icon: string;
  isApex?: boolean;
}

export interface TalentPyramidSlideData extends BaseSlide {
  type: 'talent-pyramid';
  tiers: PyramidTier[];
  attritionRate?: string;
}

export interface CostModelColumn {
  id: string;
  name: string;
  annualCost: string;
  billingCadence: string;
  badge?: string;
  isFeatured?: boolean;
  bulletPoints: string[];
  attributes: Array<{ label: string; value: string; isAdvantage?: boolean }>;
  verdict: string;
}

export interface CostComparisonSlideData extends BaseSlide {
  type: 'cost-comparison';
  headlineInvert?: string;
  columns: CostModelColumn[];
  annualSavingsSummary?: string;
}

export interface WorkCultureRitual {
  time: string;
  title: string;
  description: string;
  icon?: string;
  tag?: string;
  isCore?: boolean;
}

export interface DailyWorkCultureSlideData extends BaseSlide {
  type: 'daily-work-culture';
  rituals: WorkCultureRitual[];
  cultureMotto?: string;
}

export interface ShowcaseProject {
  title: string;
  client: string;
  category: string;
  description: string;
  metrics: string;
  image?: string;
  isFeatured?: boolean;
}

export interface OurWorkShowcaseSlideData extends BaseSlide {
  type: 'our-work-showcase';
  projects: ShowcaseProject[];
  summaryTag?: string;
}

export interface ExecutiveLeader {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  highlightPills: string[];
  quote?: string;
  isPrimary?: boolean;
}

export interface ExecutiveDuoSlideData extends BaseSlide {
  type: 'executive-duo';
  leaders: ExecutiveLeader[];
  partnershipContext?: string;
}

export interface SupportTier {
  title: string;
  slaResponse: string;
  features: string[];
  isIncluded?: boolean;
  isHighlight?: boolean;
}

export interface AfterSalesSupportSlideData extends BaseSlide {
  type: 'after-sales-support';
  supportTiers: SupportTier[];
  guaranteeBanner?: string;
}

export interface SearchQueryProof {
  query: string;
  rank: string;
  searchVolume: string;
  urlSnippet: string;
  isVerified?: boolean;
}

export interface SearchSerpProofSlideData extends BaseSlide {
  type: 'search-serp-proof';
  searchQueries: SearchQueryProof[];
  aggregateGrowth?: string;
}

export interface CalendarDayItem {
  day: string;
  topic: string;
  channel: string;
  format: string;
  isLive?: boolean;
}

export interface ContentCalendarSlideData extends BaseSlide {
  type: 'content-calendar';
  scheduleDays: CalendarDayItem[];
  monthlyCadence?: string;
}

export interface MindsetShiftItem {
  from: string;
  to: string;
  benefit: string;
  category?: string;
  isTransformed?: boolean;
}

export interface MindsetShiftSlideData extends BaseSlide {
  type: 'mindset-shift';
  shifts: MindsetShiftItem[];
  principleTag?: string;
}

export interface SessionModule {
  moduleNumber: number;
  title: string;
  duration: string;
  topics: string[];
  isKeyFocus?: boolean;
}

export interface SessionOutlineSlideData extends BaseSlide {
  type: 'session-outline';
  modules: SessionModule[];
  targetAudience?: string;
}

export interface RevealGridItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
  tag?: string;
  isHighlighted?: boolean;
}

export interface RevealGridSlideData extends BaseSlide {
  type: 'reveal-grid';
  columns?: 2 | 3;
  items: RevealGridItem[];
  activeStep?: number;
}

export interface CounterStatItem {
  value: string;
  label: string;
  suffix?: string;
  detail: string;
  isPositive?: boolean;
}

export interface CounterStatSlideData extends BaseSlide {
  type: 'counter-stat';
  stats: CounterStatItem[];
  benchmarkSource?: string;
}

export interface PollOption {
  label: string;
  percentage: number;
  votesCount?: string;
  isWinner?: boolean;
}

export interface PollSurveySlideData extends BaseSlide {
  type: 'poll-survey';
  question: string;
  options: PollOption[];
  totalVotes?: string;
}

export interface PromptOutputBlock {
  title: string;
  codeOrText: string;
  isHighlighted?: boolean;
}

export interface TypewriterPromptSlideData extends BaseSlide {
  type: 'typewriter-prompt';
  promptQuery: string;
  systemPersona?: string;
  outputBlocks: PromptOutputBlock[];
}

export interface DepthStackCard {
  id: string;
  order: number;
  pill?: string;
  headline: string;
  body: string;
  accentTag?: string;
  isRevealed?: boolean;
}

export interface DepthStackSlideData extends BaseSlide {
  type: 'depth-stack';
  heading?: string;
  perspective?: number;
  cards: DepthStackCard[];
  activeStep?: number;
}

export interface BeforeAfterFeature {
  aspect: string;
  beforeState: string;
  afterState: string;
}

export interface BeforeAfterShowcaseSlideData extends BaseSlide {
  type: 'before-after-showcase';
  beforeHeader?: string;
  afterHeader?: string;
  multiplierBadge?: string;
  features: BeforeAfterFeature[];
}

export type LegacyExtendedSlideType =
  | 'growth-engine'
  | 'talent-pyramid'
  | 'cost-comparison'
  | 'daily-work-culture'
  | 'our-work-showcase'
  | 'executive-duo'
  | 'after-sales-support'
  | 'search-serp-proof'
  | 'content-calendar'
  | 'mindset-shift'
  | 'session-outline'
  | 'reveal-grid'
  | 'counter-stat'
  | 'poll-survey'
  | 'typewriter-prompt'
  | 'depth-stack'
  | 'before-after-showcase';

export type LegacyExtendedSlideData =
  | GrowthEngineSlideData
  | TalentPyramidSlideData
  | CostComparisonSlideData
  | DailyWorkCultureSlideData
  | OurWorkShowcaseSlideData
  | ExecutiveDuoSlideData
  | AfterSalesSupportSlideData
  | SearchSerpProofSlideData
  | ContentCalendarSlideData
  | MindsetShiftSlideData
  | SessionOutlineSlideData
  | RevealGridSlideData
  | CounterStatSlideData
  | PollSurveySlideData
  | TypewriterPromptSlideData
  | DepthStackSlideData
  | BeforeAfterShowcaseSlideData;
