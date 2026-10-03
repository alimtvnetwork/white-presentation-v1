import type { BaseSlide } from '../presentation';

// =============================================================================
// 16. Executive Storytelling Hook (executive-storytelling-hook)
// =============================================================================
export interface NarrativePillar {
  id: string;
  stepIndex: number;
  title: string;
  subtitle: string;
  description: string;
  impactMetric: string;
  isPillarActive: boolean;
  isResolved: boolean;
}

export interface ExecutiveHookQuote {
  quoteText: string;
  author: string;
  authorTitle: string;
  isVerifiedQuote: boolean;
}

export interface CatalystMetric {
  metricValue: string;
  metricLabel: string;
  trendDirection: 'UP' | 'DOWN' | 'NEUTRAL';
  deltaPercentage: string;
  isPositiveTrend: boolean;
}

export interface ExecutiveStorytellingHookSlideData extends BaseSlide {
  type: 'executive-storytelling-hook';
  hookQuote: ExecutiveHookQuote;
  centralTensionHeadline: string;
  catalystMetric: CatalystMetric;
  narrativePillars: NarrativePillar[];
  inflectionDate: string;
  isCatalystActive: boolean;
}

// =============================================================================
// 17. Leadership Synergy Duo (leadership-synergy-duo)
// =============================================================================
export interface LeaderProfile {
  name: string;
  title: string;
  personaRole: string;
  organization: string;
  focusAreas: string[];
  credentials: string[];
  metricImpact: string;
  isLeaderActive: boolean;
  hasKeynoteRole: boolean;
}

export interface SynergyBridge {
  coreThesis: string;
  collaborativeDynamic: string;
  sharedCommitment: string;
  synergyMetric: string;
  isSynergyVerified: boolean;
}

export interface LeadershipSynergyDuoSlideData extends BaseSlide {
  type: 'leadership-synergy-duo';
  leaderAlpha: LeaderProfile;
  leaderBeta: LeaderProfile;
  synergyBridge: SynergyBridge;
  executiveSignoff: {
    reviewer: string;
    reviewerTitle: string;
    isApproved: boolean;
  };
}

// =============================================================================
// 18. Operational Work Culture (operational-work-culture)
// =============================================================================
export interface CultureTenet {
  id: string;
  stepIndex: number;
  name: string;
  mantra: string;
  practiceRitual: string;
  quantitativeMetric: string;
  metricLabel: string;
  isCoreTenet: boolean;
  isEnforcedInCi: boolean;
}

export interface CultureHealthScore {
  scoreValue: number;
  scoreMax: number;
  tierStatus: string;
  isHighPerformance: boolean;
}

export interface OperationalWorkCultureSlideData extends BaseSlide {
  type: 'operational-work-culture';
  cultureVision: string;
  tenets: CultureTenet[];
  healthScore: CultureHealthScore;
}

// =============================================================================
// 19. Bento Capabilities Matrix (bento-capabilities-matrix)
// =============================================================================
export interface HeroCapability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  telemetryKpi: string;
  kpiLabel: string;
  isHeroActive: boolean;
  hasDotMatrix: boolean;
}

export interface PrimaryPillar {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  statusBadge: string;
  isPillarHealthy: boolean;
}

export interface TelemetryStrip {
  id: string;
  title: string;
  liveThroughput: string;
  errorRate: string;
  clusterRegion: string;
  isOperational: boolean;
}

export interface BentoMicroMetric {
  id: string;
  label: string;
  value: string;
  delta: string;
  isAccelerating: boolean;
}

export interface BentoCapabilitiesMatrixSlideData extends BaseSlide {
  type: 'bento-capabilities-matrix';
  heroCapability: HeroCapability;
  primaryPillar: PrimaryPillar;
  telemetryStrip: TelemetryStrip;
  microMetrics: BentoMicroMetric[];
  isBentoInteractive: boolean;
  hasLiveTelemetry: boolean;
}

// =============================================================================
// 20. Opportunity Cost Waterfall (opportunity-cost-waterfall)
// =============================================================================
export interface WaterfallBar {
  id: string;
  stepIndex: number;
  category: 'BASELINE' | 'FRICTION' | 'EFFICIENCY_GAIN' | 'NET_SOVEREIGN_VALUE';
  label: string;
  amountMillionUsd: number;
  runningTotalMillionUsd: number;
  isPositiveDelta: boolean;
  isSubtotal: boolean;
}

export interface NetRoiSummary {
  roiMultiplier: number;
  paybackMonths: number;
  annualizedSavingsUsd: string;
  confidenceIntervalPercent: number;
  isInvestmentApproved: boolean;
}

export interface OpportunityCostWaterfallSlideData extends BaseSlide {
  type: 'opportunity-cost-waterfall';
  currencySymbol: string;
  unitMagnitude: string;
  waterfallBars: WaterfallBar[];
  netRoiSummary: NetRoiSummary;
}
