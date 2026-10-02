import type { BaseSlide } from './presentation';

export interface RealityGapPoint {
  id: string; myth: string; truth: string; impact: string; isHighlighted?: boolean;
}

export interface AuthenticityHookSlideData extends BaseSlide {
  type: 'authenticity-hook';
  hookHeadline: string;
  tensionNarrative: string;
  statFigure: string;
  statLabel: string;
  statSource?: string;
  realityPoints: RealityGapPoint[];
}

export interface CommodityComparisonItem {
  id: string; dimension: string; commodityPitfall: string; sovereignAdvantage: string; isKeyDifferentiator?: boolean;
}

export interface AvoidCommoditySlideData extends BaseSlide {
  type: 'avoid-commodity';
  commodityTitle: string;
  commoditySubtitle: string;
  sovereignTitle: string;
  sovereignSubtitle: string;
  comparisons: CommodityComparisonItem[];
  sovereignBadgeText?: string;
  summaryNote?: string;
}

export interface ChapterTopic {
  id: string; indexStr: string; title: string; summary: string; isPrimaryFocus?: boolean;
}

export interface ChapterDividerSlideData extends BaseSlide {
  type: 'chapter-divider';
  actNumber: string;
  actLabel: string;
  topicKicker?: string;
  preamble: string;
  topics: ChapterTopic[];
}

export interface ConsequenceItem {
  id: string; title: string; metric: string; description: string; hasCriticalImpact?: boolean;
}

export interface PayoffItem {
  id: string; title: string; metric: string; description: string; isFeaturedMetric?: boolean;
}

export interface LoseVsInvestSlideData extends BaseSlide {
  type: 'lose-vs-invest';
  inactionTitle: string;
  inactionConsequences: ConsequenceItem[];
  investmentTitle: string;
  investmentReturns: PayoffItem[];
  summaryPaybackPeriod?: string;
  summaryIrr?: string;
}

export interface SprintPhase {
  id: string; phaseNumber: string; timeframe: string; title: string; objective: string;
  leadOwner: string; deliverables: string[]; exitCriteria: string; isCurrentSprint?: boolean;
}

export interface NextStepsSprintSlideData extends BaseSlide {
  type: 'next-steps-sprint';
  sprintTimelineTitle: string;
  sprints: SprintPhase[];
  activeStep?: number;
}

export interface ExecutivePersona {
  name: string; role: string; quote: string; bioBullets: string[];
  avatarUrl?: string; isVerified?: boolean; location?: string;
}

export interface ExecutiveContactSlideData extends BaseSlide {
  type: 'executive-contact';
  persona: ExecutivePersona;
  bookingUrl: string;
  email: string;
  phone?: string;
  qrCodeValue: string;
  ctaButtonText: string;
  guaranteeNote: string;
}

export interface ProofCard {
  id: string; icon: string; badgeText: string; headline: string; description: string; hasVerificationBadge?: boolean;
}

export interface UspStrikethroughSlideData extends BaseSlide {
  type: 'usp-strikethrough';
  prefixText: string;
  affirmationText: string;
  rejectionPrefixText: string;
  strikethroughText: string;
  suffixText?: string;
  proofCards: ProofCard[];
}

export interface PricingFeatureItem {
  id: string; featureName: string; isIncluded: boolean; tooltipNote?: string;
}

export interface PricingTier {
  id: string; tierName: string; price: string; billingPeriod: string; badgeText?: string;
  description: string; features: PricingFeatureItem[]; ctaText: string; isRecommended?: boolean;
}

export interface SaaSPricingTiersSlideData extends BaseSlide {
  type: 'saas-pricing-tiers';
  billingCadence: string;
  tiers: PricingTier[];
  disclaimerNote?: string;
}

export interface FaqItem {
  id: string; category: string; question: string; answer: string;
  isHighlighted?: boolean; isExpanded?: boolean;
}

export interface FaqAccordionSlideData extends BaseSlide {
  type: 'faq-accordion';
  introSummary?: string;
  faqs: FaqItem[];
  activeStep?: number;
}

export interface ClientLogo {
  id: string; clientName: string; industry: string; logoUrl?: string; proofMetric?: string; isKeyPartner?: boolean;
}

export interface TrustBadge {
  id: string; label: string; value: string; isVerified?: boolean;
}

export interface ClientLogoWallSlideData extends BaseSlide {
  type: 'client-logo-wall';
  clientSubtitle?: string;
  activeCategory?: string;
  logos: ClientLogo[];
  trustBadges: TrustBadge[];
}

export interface SwotQuadrant {
  id: string; quadrantType: 'strengths' | 'weaknesses' | 'opportunities' | 'threats';
  title: string; icon: string; items: string[]; isHighlighted?: boolean;
}

export interface SwotAnalysisSlideData extends BaseSlide {
  type: 'swot-analysis';
  strategicContext?: string;
  quadrants: SwotQuadrant[];
}

export interface QuizOption {
  id: string; letter: 'A' | 'B' | 'C' | 'D'; text: string; explanation?: string;
  isSelected?: boolean; isCorrect?: boolean; isRevealed?: boolean;
}

export interface InteractiveQuizSlideData extends BaseSlide {
  type: 'interactive-quiz';
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  options: QuizOption[];
  revealExplanation?: string;
  isAnswerRevealed?: boolean;
}

export interface HardwareHotspot {
  id: string; pinNumber: number; xCoord: number; yCoord: number;
  label: string; subsystemTitle: string; specDetails: string; isActive?: boolean;
}

export interface HardwareSpecItem {
  id: string; label: string; value: string; isHighlighted?: boolean;
}

export interface HardwareShowcaseSlideData extends BaseSlide {
  type: 'hardware-showcase';
  deviceName: string;
  deviceTagline: string;
  imageSchematicUrl?: string;
  hotspots: HardwareHotspot[];
  specifications: HardwareSpecItem[];
  activePinIndex?: number;
}

export interface MatrixCapabilityRow {
  id: string; capabilityName: string; category?: string;
  ourPlatformSupport: boolean; ourPlatformNote?: string;
  competitorASupport: boolean; competitorBSupport: boolean;
  competitorCSupport?: boolean; isKeyDifferentiator?: boolean;
}

export interface CompetitorMatrixSlideData extends BaseSlide {
  type: 'competitor-matrix';
  matrixHeadline?: string;
  ourPlatformName: string;
  competitorNames: string[];
  capabilities: MatrixCapabilityRow[];
  summaryNote?: string;
}

export interface ValuePyramidTier {
  id: string; tierLevel: number; tierName: string; tagline: string;
  capabilities: string[]; businessImpactMetric: string; isHighlighted?: boolean; isActive?: boolean;
}

export interface ValuePyramidSlideData extends BaseSlide {
  type: 'value-pyramid';
  pyramidSubtitle?: string;
  tiers: ValuePyramidTier[];
  activeTierLevel?: number;
}

export type ExpandedSlideType =
  | 'authenticity-hook'
  | 'avoid-commodity'
  | 'chapter-divider'
  | 'lose-vs-invest'
  | 'next-steps-sprint'
  | 'executive-contact'
  | 'usp-strikethrough'
  | 'saas-pricing-tiers'
  | 'faq-accordion'
  | 'client-logo-wall'
  | 'swot-analysis'
  | 'interactive-quiz'
  | 'hardware-showcase'
  | 'competitor-matrix'
  | 'value-pyramid';

export type ExpandedSlideData =
  | AuthenticityHookSlideData
  | AvoidCommoditySlideData
  | ChapterDividerSlideData
  | LoseVsInvestSlideData
  | NextStepsSprintSlideData
  | ExecutiveContactSlideData
  | UspStrikethroughSlideData
  | SaaSPricingTiersSlideData
  | FaqAccordionSlideData
  | ClientLogoWallSlideData
  | SwotAnalysisSlideData
  | InteractiveQuizSlideData
  | HardwareShowcaseSlideData
  | CompetitorMatrixSlideData
  | ValuePyramidSlideData;
