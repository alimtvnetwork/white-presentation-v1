import type { BaseSlide } from '../presentation';

// =============================================================================
// 21. Benchmark Regional Pricing (benchmark-regional-pricing)
// =============================================================================
export interface RegionPricingMetric {
  id: string;
  stepIndex: number;
  regionName: string;
  regionCode: string;
  latencyMs: number;
  computeCostPerHour: number;
  egressCostPerGb: number;
  storageCostPerGbMonth: number;
  slaPercentage: number;
  isPrimaryRegion: boolean;
  isAvailable: boolean;
}

export interface EnterprisePricingTier {
  tierName: string;
  tierBadge: string;
  monthlyBaseUsd: number;
  includedCreditsUsd: number;
  hasEnterpriseDiscount: boolean;
  isRecommendedTier: boolean;
}

export interface CostOptimizationSummary {
  estimatedSavingsPercentage: number;
  annualCostReductionUsd: string;
  isCloudEconomiesVerified: boolean;
}

export interface BenchmarkRegionalPricingSlideData extends BaseSlide {
  type: 'benchmark-regional-pricing';
  regions: RegionPricingMetric[];
  pricingTiers: EnterprisePricingTier[];
  costOptimizationSummary: CostOptimizationSummary;
}

// =============================================================================
// 22. Sprint Onboarding Roadmap (sprint-onboarding-roadmap)
// =============================================================================
export interface OnboardingMilestone {
  id: string;
  stepIndex: number;
  dayMilestone: string;
  title: string;
  objective: string;
  deliverables: string[];
  verificationGate: string;
  mentorCheckin: string;
  isCompleted: boolean;
  isCurrentMilestone: boolean;
}

export interface ReadinessScore {
  overallReadinessPercent: number;
  isProductionCertified: boolean;
}

export interface SprintOnboardingRoadmapSlideData extends BaseSlide {
  type: 'sprint-onboarding-roadmap';
  onboardingTrack: string;
  engineerPersona: string;
  milestones: OnboardingMilestone[];
  readinessScore: ReadinessScore;
}

// =============================================================================
// 23. Simulated Browser Showcase (simulated-browser-showcase)
// =============================================================================
export interface BrowserChromeHeader {
  simulatedUrl: string;
  protocol: 'https://';
  sslCertificateIssuer: string;
  hasSslEncryption: boolean;
  windowTitle: string;
}

export interface AppWorkspaceState {
  activeTab: string;
  availableTabs: string[];
  simulatedFps: number;
  roundTripLatencyMs: number;
  isInteractiveSession: boolean;
}

export interface TelemetrySidebarState {
  systemHealth: string;
  activeUsers: string;
  clusterRegion: string;
  isOnline: boolean;
}

export interface ViewportCardDetails {
  headline: string;
  summary: string;
  primaryMetric: string;
  metricLabel: string;
  isFeatureEnabled: boolean;
}

export interface SimulatedBrowserShowcaseSlideData extends BaseSlide {
  type: 'simulated-browser-showcase';
  browserHeader: BrowserChromeHeader;
  appWorkspace: AppWorkspaceState;
  telemetrySidebar: TelemetrySidebarState;
  viewportCard: ViewportCardDetails;
}

// =============================================================================
// 24. Client Testimonial Wall (client-testimonial-wall)
// =============================================================================
export interface ClientTestimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  enterpriseCompany: string;
  industryVertical: string;
  quoteText: string;
  quantitativeRoi: string;
  roiMetricLabel: string;
  isVerifiedClient: boolean;
  hasKeynoteEndorsement: boolean;
}

export interface TestimonialAggregateMetrics {
  npsScore: number;
  enterpriseClientCount: number;
  verifiedUptimeSla: string;
  isAuditCertified: boolean;
}

export interface ClientTestimonialWallSlideData extends BaseSlide {
  type: 'client-testimonial-wall';
  aggregateMetrics: TestimonialAggregateMetrics;
  testimonials: ClientTestimonial[];
}

// =============================================================================
// 25. Global Edge Mesh (global-edge-mesh)
// =============================================================================
export interface EdgePopMetric {
  popId: string;
  city: string;
  regionCode: string;
  anycastIp: string;
  p99LatencyMs: number;
  requestVolumeRps: number;
  ddosMitigationStatus: string;
  isPopOperational: boolean;
  isAnycastRouted: boolean;
}

export interface GlobalMeshSummary {
  totalPopsCount: number;
  globalAverageLatencyMs: number;
  backboneCapacityTbps: number;
  isMeshResilient: boolean;
}

export interface GlobalEdgeMeshSlideData extends BaseSlide {
  type: 'global-edge-mesh';
  meshSummary: GlobalMeshSummary;
  edgePops: EdgePopMetric[];
}
