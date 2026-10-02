import type { BaseSlide } from './presentation';

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

export type ExtendedSlideType =
  | 'growth-engine' | 'talent-pyramid' | 'cost-comparison' | 'daily-work-culture'
  | 'our-work-showcase' | 'executive-duo' | 'after-sales-support' | 'search-serp-proof'
  | 'content-calendar' | 'mindset-shift' | 'session-outline' | 'reveal-grid'
  | 'counter-stat' | 'poll-survey' | 'typewriter-prompt' | 'depth-stack'
  | 'before-after-showcase';

export type ExtendedSlideData =
  | GrowthEngineSlideData | TalentPyramidSlideData | CostComparisonSlideData
  | DailyWorkCultureSlideData | OurWorkShowcaseSlideData | ExecutiveDuoSlideData
  | AfterSalesSupportSlideData | SearchSerpProofSlideData | ContentCalendarSlideData
  | MindsetShiftSlideData | SessionOutlineSlideData | RevealGridSlideData
  | CounterStatSlideData | PollSurveySlideData | TypewriterPromptSlideData
  | DepthStackSlideData | BeforeAfterShowcaseSlideData;
