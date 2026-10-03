// lint-allow: file-size reason="Contracts for 15 flat global suite slide archetypes" max=500
import type { BaseSlide } from './presentation';

// =============================================================================
// 1. Interactive Branching Close ('interactive-branching-close')
// =============================================================================
export interface BranchingChoiceOption {
  label: string;
  description: string;
  targetSlideId?: string;
  badge?: string;
}

export interface BranchingChoiceItem {
  id: string;
  keyTrigger: 'y' | 'n';
  choiceLabel: string;
  actionSummary: string;
  targetSlideId?: string;
  isRecommendedOption?: boolean;
}

export interface InteractiveBranchingCloseSlideData extends BaseSlide {
  type: 'interactive-branching-close';
  headline: string;
  promptQuestion: string;
  decisionContext: string;
  yesOption: BranchingChoiceOption;
  noOption: BranchingChoiceOption;
  yesTargetSlideId?: string;
  noTargetSlideId?: string;
  branches?: BranchingChoiceItem[];
  scarcityWarning?: string;
  isBranchingEnabled?: boolean;
  hasKeyboardHints?: boolean;
  executivePresenter?: string;
}

// =============================================================================
// 2. Before / After Showcase Pan ('before-after-showcase-pan')
// =============================================================================
export interface PanComparisonItem {
  id: string;
  featureTitle: string;
  beforeStateText: string;
  afterStateText: string;
  deltaMetric: string;
  isHighlighted?: boolean;
}

export interface BeforeAfterShowcasePanSlideData extends BaseSlide {
  type: 'before-after-showcase-pan';
  beforeHeadline: string;
  afterHeadline: string;
  panItems: PanComparisonItem[];
  beforeMetricSummary: string;
  afterMetricSummary: string;
  splitPercentage?: number;
  hasLivePanControl?: boolean;
  isComparisonActive?: boolean;
}

// =============================================================================
// 3. Search SERP Proof Lightbox ('search-serp-proof-lightbox')
// =============================================================================
export interface SerpProofItem {
  id: string;
  searchRank: number;
  resultTitle: string;
  destinationUrl: string;
  snippetText: string;
  verificationBadge: string;
  previewImageUrl?: string;
  isVerifiedAuthority?: boolean;
  hasLightboxPreview?: boolean;
}

export interface SearchSerpProofLightboxSlideData extends BaseSlide {
  type: 'search-serp-proof-lightbox';
  searchQueryPhrase: string;
  searchEngineName: string;
  proofItems: SerpProofItem[];
  totalResultsIndexed: string;
  searchExecutionDurationMs: number;
  isLightboxActive?: boolean;
  hasOrganicDominance?: boolean;
  isVerificationGuaranteed?: boolean;
}

// =============================================================================
// 4. Cognitive Inversion Punchline ('cognitive-inversion-punchline')
// =============================================================================
export interface CognitiveInversionPillarItem {
  id: string;
  conventionalPremise: string;
  invertedReality: string;
  breakthroughMetric: string;
  isPillarRevealed?: boolean;
}

export interface CognitiveInversionPunchlineSlideData extends BaseSlide {
  type: 'cognitive-inversion-punchline';
  conventionalWisdom: string;
  counterIntuitiveThesis: string;
  punchlineStatement: string;
  inversionPillars: CognitiveInversionPillarItem[];
  authorAttribution: string;
  hasDramaticReveal?: boolean;
  isPunchlineHighlighted?: boolean;
}

// =============================================================================
// 5. Talent Pyramid Funnel SVG ('talent-pyramid-funnel-svg')
// =============================================================================
export interface TalentFunnelTierItem {
  id: string;
  tierLevel: number;
  tierName: string;
  candidateVolume: string;
  passRatePercentage: number;
  vettingGateSummary: string;
  isApexTier?: boolean;
}

export interface TalentPyramidFunnelSvgSlideData extends BaseSlide {
  type: 'talent-pyramid-funnel-svg';
  funnelTiers: TalentFunnelTierItem[];
  totalCandidatesEvaluated: string;
  finalHiredCount: string;
  acceptanceRatePercentage: number;
  chiefSoftwareEngineer: string;
  isSvgRendered?: boolean;
  hasPrecisionFiltering?: boolean;
}

// =============================================================================
// 6. Hexagonal Tech Cluster ('hexagonal-tech-cluster')
// =============================================================================
export interface TechClusterNodeItem {
  id: string;
  nodeName: string;
  stackCategory: string;
  nodeIcon: string;
  connectivityScore: number;
  isCoreHub?: boolean;
  isNodeActive?: boolean;
}

export interface TechClusterConnectionItem {
  sourceNodeId: string;
  targetNodeId: string;
  protocolName: string;
  isEncryptedChannel?: boolean;
}

export interface HexagonalTechClusterSlideData extends BaseSlide {
  type: 'hexagonal-tech-cluster';
  clusterCenterTitle: string;
  clusterSubtitle: string;
  clusterNodes: TechClusterNodeItem[];
  clusterConnections: TechClusterConnectionItem[];
  totalNodesCount: number;
  isHoneycombRendered?: boolean;
  hasPulsingConnections?: boolean;
}

// =============================================================================
// 7. Connected Roadmap Rail Pulse ('connected-roadmap-rail-pulse')
// =============================================================================
export interface RoadmapRailNodeItem {
  id: string;
  stepIndex: number;
  milestoneTitle: string;
  targetQuarter: string;
  operationalStatus: 'completed' | 'in-progress' | 'upcoming';
  pulseIntensity: 'low' | 'medium' | 'high';
  keyDeliverables: string[];
  isNodePulsing?: boolean;
}

export interface ConnectedRoadmapRailPulseSlideData extends BaseSlide {
  type: 'connected-roadmap-rail-pulse';
  currentActiveQuarter: string;
  railNodes: RoadmapRailNodeItem[];
  overallVelocityScore: string;
  hasActivePulseRail?: boolean;
  isProgressionConnected?: boolean;
}

// =============================================================================
// 8. Campaign Performance Lightbox ('campaign-performance-lightbox')
// =============================================================================
export interface CampaignChannelMetricItem {
  id: string;
  channelName: string;
  budgetAllocation: string;
  conversionsCount: number;
  roasMultiplier: string;
  isTopPerformer?: boolean;
}

export interface CampaignCreativeAssetItem {
  id: string;
  creativeTitle: string;
  mediaAssetUrl: string;
  conversionRatePercentage: number;
  isFeaturedAsset?: boolean;
}

export interface CampaignPerformanceLightboxSlideData extends BaseSlide {
  type: 'campaign-performance-lightbox';
  campaignName: string;
  campaignDuration: string;
  totalAdSpend: string;
  totalGeneratedRevenue: string;
  performanceChannels: CampaignChannelMetricItem[];
  lightboxCreatives: CampaignCreativeAssetItem[];
  hasLightboxPreview?: boolean;
  isCampaignActive?: boolean;
}

// =============================================================================
// 9. Executive Roster Keypad ('executive-roster-keypad')
// =============================================================================
export interface ExecutiveRosterMemberItem {
  id: string;
  keypadIndex: number;
  name: string;
  executiveTitle: string;
  divisionScope: string;
  avatarImageUrl: string;
  bioSynopsis: string;
  executiveCredentials: string[];
  isLeadPersona?: boolean;
}

export interface ExecutiveRosterKeypadSlideData extends BaseSlide {
  type: 'executive-roster-keypad';
  rosterMembers: ExecutiveRosterMemberItem[];
  activeMemberIndex?: number;
  hasKeypadNavigation?: boolean;
  isRosterInteractive?: boolean;
}

// =============================================================================
// 10. Flat Step Process Flow ('flat-step-process-flow')
// =============================================================================
export interface FlatProcessStepItem {
  id: string;
  stepNumber: number;
  stepTitle: string;
  stepDescription: string;
  executionDuration: string;
  keyDeliverables: string[];
  isStepActive?: boolean;
  isStepCompleted?: boolean;
}

export interface FlatStepProcessFlowSlideData extends BaseSlide {
  type: 'flat-step-process-flow';
  cadenceDescription: string;
  processSteps: FlatProcessStepItem[];
  totalStepsCount: number;
  isStepByStepProgression?: boolean;
  hasFlatAesthetics?: boolean;
}

// =============================================================================
// 11. Flat Split Narrative Stepper ('flat-split-narrative-stepper')
// =============================================================================
export interface SplitStepperStageItem {
  id: string;
  stageNumber: number;
  stageTitle: string;
  technicalVerification: string;
  metricBadge: string;
  isStageActive?: boolean;
  isStageCompleted?: boolean;
}

export interface FlatSplitNarrativeStepperSlideData extends BaseSlide {
  type: 'flat-split-narrative-stepper';
  narrativeHeading: string;
  narrativeBodyParagraphs: string[];
  strategicCallout: string;
  stepperSteps: SplitStepperStageItem[];
  stages?: SplitStepperStageItem[];
  hasSynchronizedSteps?: boolean;
  isNarrativeHighlighted?: boolean;
}

// =============================================================================
// 12. Flat Timeline Milestone Rail ('flat-timeline-milestone-rail')
// =============================================================================
export interface FlatTimelineMilestoneItem {
  id: string;
  milestoneIndex: number;
  dateRangeLabel: string;
  milestoneTitle: string;
  strategicObjective: string;
  actionItems: string[];
  completionStatus: 'completed' | 'in-progress' | 'upcoming';
  isMilestoneActive?: boolean;
}

export interface FlatTimelineMilestoneRailSlideData extends BaseSlide {
  type: 'flat-timeline-milestone-rail';
  targetCompletionDate: string;
  milestones: FlatTimelineMilestoneItem[];
  overallProgressPercentage: number;
  hasMilestoneConnectors?: boolean;
  isFlatTimelineActive?: boolean;
}

// =============================================================================
// 13. Flat Reveal Bento Grid ('flat-reveal-bento-grid')
// =============================================================================
export interface FlatBentoTileItem {
  id: string;
  gridSpan: 'col-1' | 'col-2' | 'row-2';
  tileTitle: string;
  tileDescription: string;
  highlightMetric?: string;
  statusBadge?: string;
  iconIdentifier?: string;
  isTileRevealed?: boolean;
  isTileFeatured?: boolean;
}

export interface FlatRevealBentoGridSlideData extends BaseSlide {
  type: 'flat-reveal-bento-grid';
  gridColumnCount: number;
  bentoCards: FlatBentoTileItem[];
  cards?: FlatBentoTileItem[];
  isProgressiveReveal?: boolean;
  hasBorderHighlight?: boolean;
}

// =============================================================================
// 14. Flat Depth Sentence Stack ('flat-depth-sentence-stack')
// =============================================================================
export interface SentenceStackCardItem {
  id: string;
  cardIndex: number;
  coreSentence: string;
  contextNarrative: string;
  authorSignature?: string;
  isCardActive?: boolean;
  isSentenceEmphasized?: boolean;
}

export interface FlatDepthSentenceStackSlideData extends BaseSlide {
  type: 'flat-depth-sentence-stack';
  sentenceCards: SentenceStackCardItem[];
  cards?: SentenceStackCardItem[];
  stackDepthLevel: number;
  isLayeredDepthEnabled?: boolean;
  hasCardShuffling?: boolean;
}

// =============================================================================
// 15. Flat Typewriter Code Walkthrough ('flat-typewriter-code-walkthrough')
// =============================================================================
export interface CodeWalkthroughStepItem {
  id: string;
  stepNumber: number;
  stepTitle: string;
  stepExplanation: string;
  highlightedLineNumbers: number[];
  isStepActive?: boolean;
}

export interface FlatTypewriterCodeWalkthroughSlideData extends BaseSlide {
  type: 'flat-typewriter-code-walkthrough';
  codeLanguage: string;
  codeSnippet: string;
  terminalHeaderTitle: string;
  walkthroughSteps: CodeWalkthroughStepItem[];
  steps?: CodeWalkthroughStepItem[];
  isTypewriterAnimated?: boolean;
  hasSyntaxHighlighting?: boolean;
  isMonospaceTerminal?: boolean;
}

// =============================================================================
// Aggregated Unions & Type Guards
// =============================================================================
export type FlatGlobalSuiteSlideType =
  | 'interactive-branching-close'
  | 'before-after-showcase-pan'
  | 'search-serp-proof-lightbox'
  | 'cognitive-inversion-punchline'
  | 'talent-pyramid-funnel-svg'
  | 'hexagonal-tech-cluster'
  | 'connected-roadmap-rail-pulse'
  | 'campaign-performance-lightbox'
  | 'executive-roster-keypad'
  | 'flat-step-process-flow'
  | 'flat-split-narrative-stepper'
  | 'flat-timeline-milestone-rail'
  | 'flat-reveal-bento-grid'
  | 'flat-depth-sentence-stack'
  | 'flat-typewriter-code-walkthrough';

export type FlatGlobalSuiteSlideData =
  | InteractiveBranchingCloseSlideData
  | BeforeAfterShowcasePanSlideData
  | SearchSerpProofLightboxSlideData
  | CognitiveInversionPunchlineSlideData
  | TalentPyramidFunnelSvgSlideData
  | HexagonalTechClusterSlideData
  | ConnectedRoadmapRailPulseSlideData
  | CampaignPerformanceLightboxSlideData
  | ExecutiveRosterKeypadSlideData
  | FlatStepProcessFlowSlideData
  | FlatSplitNarrativeStepperSlideData
  | FlatTimelineMilestoneRailSlideData
  | FlatRevealBentoGridSlideData
  | FlatDepthSentenceStackSlideData
  | FlatTypewriterCodeWalkthroughSlideData;

const VALID_FLAT_GLOBAL_TYPES = new Set<string>([
  'interactive-branching-close',
  'before-after-showcase-pan',
  'search-serp-proof-lightbox',
  'cognitive-inversion-punchline',
  'talent-pyramid-funnel-svg',
  'hexagonal-tech-cluster',
  'connected-roadmap-rail-pulse',
  'campaign-performance-lightbox',
  'executive-roster-keypad',
  'flat-step-process-flow',
  'flat-split-narrative-stepper',
  'flat-timeline-milestone-rail',
  'flat-reveal-bento-grid',
  'flat-depth-sentence-stack',
  'flat-typewriter-code-walkthrough',
]);

export function isFlatGlobalSuiteSlide(slide: unknown): slide is FlatGlobalSuiteSlideData {
  if (typeof slide !== 'object' || !slide) return false;
  return VALID_FLAT_GLOBAL_TYPES.has((slide as { type?: unknown }).type as string);
}
