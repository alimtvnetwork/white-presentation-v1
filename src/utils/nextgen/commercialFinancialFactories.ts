import type {
  BenchmarkRegionalPricingSlideData,
  SprintOnboardingRoadmapSlideData,
  SimulatedBrowserShowcaseSlideData,
  ClientTestimonialWallSlideData,
  GlobalEdgeMeshSlideData,
} from '../../types/presentation';

// =============================================================================
// Archetype 21: Benchmark Regional Pricing (benchmark-regional-pricing)
// =============================================================================
export const createBenchmarkRegionalPricingSlide = (
  id = `slide-regional-pricing-${Date.now()}`,
  overrides?: Partial<BenchmarkRegionalPricingSlideData>
): BenchmarkRegionalPricingSlideData => ({
  id,
  type: 'benchmark-regional-pricing',
  title: 'Global Edge Regional Pricing Benchmark',
  subtitle: 'Cross-region compute, egress, and storage cost arbitrage anchored by enterprise SLA guarantees',
  kicker: 'CLOUD ECONOMICS',
  activeStep: 1,
  maxSteps: 3,
  regions: [
    {
      id: 'reg-us-east',
      stepIndex: 1,
      regionName: 'Americas (N. Virginia)',
      regionCode: 'us-east-1',
      latencyMs: 8.2,
      computeCostPerHour: 0.038,
      egressCostPerGb: 0.012,
      storageCostPerGbMonth: 0.018,
      slaPercentage: 99.995,
      isPrimaryRegion: true,
      isAvailable: true,
    },
    {
      id: 'reg-eu-west',
      stepIndex: 2,
      regionName: 'Europe (Frankfurt)',
      regionCode: 'eu-central-1',
      latencyMs: 11.8,
      computeCostPerHour: 0.042,
      egressCostPerGb: 0.014,
      storageCostPerGbMonth: 0.021,
      slaPercentage: 99.995,
      isPrimaryRegion: false,
      isAvailable: true,
    },
    {
      id: 'reg-apac',
      stepIndex: 3,
      regionName: 'Asia-Pacific (Singapore)',
      regionCode: 'ap-southeast-1',
      latencyMs: 18.4,
      computeCostPerHour: 0.048,
      egressCostPerGb: 0.019,
      storageCostPerGbMonth: 0.024,
      slaPercentage: 99.99,
      isPrimaryRegion: false,
      isAvailable: true,
    },
  ],
  pricingTiers: [
    {
      tierName: 'Enterprise Sovereign Mesh',
      tierBadge: 'MOST POPULAR',
      monthlyBaseUsd: 14500,
      includedCreditsUsd: 25000,
      hasEnterpriseDiscount: true,
      isRecommendedTier: true,
    },
  ],
  costOptimizationSummary: {
    estimatedSavingsPercentage: 44.2,
    annualCostReductionUsd: '$1.48M',
    isCloudEconomiesVerified: true,
  },
  ...overrides,
});

// =============================================================================
// Archetype 22: Sprint Onboarding Roadmap (sprint-onboarding-roadmap)
// =============================================================================
export const createSprintOnboardingRoadmapSlide = (
  id = `slide-onboarding-roadmap-${Date.now()}`,
  overrides?: Partial<SprintOnboardingRoadmapSlideData>
): SprintOnboardingRoadmapSlideData => ({
  id,
  type: 'sprint-onboarding-roadmap',
  title: '90-Day Engineer Autonomy Roadmap',
  subtitle: 'Structured ramp-up protocol transitioning new engineers into high-impact architectural ownership',
  kicker: 'TALENT ACCELERATION',
  activeStep: 2,
  maxSteps: 5,
  onboardingTrack: 'Distributed Systems & Platform Engineering',
  engineerPersona: 'Senior / Staff Systems Architect',
  milestones: [
    {
      id: 'ms-day-01',
      stepIndex: 1,
      dayMilestone: 'Day 1',
      title: 'Zero-to-Commit Golden Path',
      objective: 'Complete local workstation initialization, pass all AST linters, and commit a validated documentation fix.',
      deliverables: [
        'Clone repo via high-speed GitMap tooling',
        'Verify clean local tests with zero build errors',
        'Submit first approved PR',
      ],
      verificationGate: 'Pre-commit hook pass with zero warnings',
      mentorCheckin: 'Day 1 close pairing with Alim Ul Karim, Chief Software Engineer',
      isCompleted: true,
      isCurrentMilestone: false,
    },
    {
      id: 'ms-day-14',
      stepIndex: 2,
      dayMilestone: 'Day 14',
      title: 'First Production Feature Delivery',
      objective: 'Ship a scoped customer-facing micro-feature through full Canary deployment stages.',
      deliverables: [
        'Decompose components into <= 100 physical lines',
        'Implement affirmative boolean guard checks',
        'Monitor live production Canary telemetry',
      ],
      verificationGate: 'Canary error rate 0.00% across 24h',
      mentorCheckin: 'Mid-sprint architecture alignment review',
      isCompleted: false,
      isCurrentMilestone: true,
    },
    {
      id: 'ms-day-30',
      stepIndex: 3,
      dayMilestone: 'Day 30',
      title: 'Autonomous On-Call Readiness',
      objective: 'Assume secondary on-call rotation with verified runbook mastery.',
      deliverables: [
        'Execute mock chaos engineering drill',
        'Author 1 blameless postmortem simulation',
        'Verify alerts and P99 latency dashboards',
      ],
      verificationGate: 'Successful disaster recovery dry run',
      mentorCheckin: 'On-call certification signoff',
      isCompleted: false,
      isCurrentMilestone: false,
    },
    {
      id: 'ms-day-60',
      stepIndex: 4,
      dayMilestone: 'Day 60',
      title: 'Cross-Squad Platform Impact',
      objective: 'Author a reusable platform utility adopted by at least 3 engineering squads.',
      deliverables: [
        'Extract shared TypeScript contract package',
        'Publish zero-dependency utility module',
        'Host squad architecture demo',
      ],
      verificationGate: '3+ squad production integrations',
      mentorCheckin: 'Cross-functional impact review',
      isCompleted: false,
      isCurrentMilestone: false,
    },
    {
      id: 'ms-day-90',
      stepIndex: 5,
      dayMilestone: 'Day 90',
      title: 'Sovereign Architectural RFC Lead',
      objective: 'Formulate and present a comprehensive strategic systems RFC to the Technical Steering Council.',
      deliverables: [
        'Ingest user specifications and benchmarks',
        'Draft formal RFC with 12-dimensional gates',
        'Obtain unanimous council approval',
      ],
      verificationGate: 'Technical Steering Council ratification',
      mentorCheckin: 'Autonomy milestone completion ceremony',
      isCompleted: false,
      isCurrentMilestone: false,
    },
  ],
  readinessScore: {
    overallReadinessPercent: 94.8,
    isProductionCertified: true,
  },
  ...overrides,
});

// =============================================================================
// Archetype 23: Simulated Browser Showcase (simulated-browser-showcase)
// =============================================================================
export const createSimulatedBrowserShowcaseSlide = (
  id = `slide-browser-showcase-${Date.now()}`,
  overrides?: Partial<SimulatedBrowserShowcaseSlideData>
): SimulatedBrowserShowcaseSlideData => ({
  id,
  type: 'simulated-browser-showcase',
  title: 'Interactive Console Application Telemetry',
  subtitle: 'Live DOM simulation of sovereign enterprise console with sub-10ms rendering and hardware telemetry',
  kicker: 'PRODUCT TELEMETRY',
  activeStep: 1,
  maxSteps: 3,
  browserHeader: {
    simulatedUrl: 'https://console.sovereign.platform/telemetry/live-mesh',
    protocol: 'https://',
    sslCertificateIssuer: "Let's Encrypt E1 Enterprise Attestation",
    hasSslEncryption: true,
    windowTitle: 'Sovereign Engineering Console - Live Mesh Topology',
  },
  appWorkspace: {
    activeTab: 'Live Mesh Topology',
    availableTabs: [
      'Live Mesh Topology',
      'Casbin Access Matrix',
      'eBPF Kernel Traces',
      'SLO Telemetry',
    ],
    simulatedFps: 60,
    roundTripLatencyMs: 4.8,
    isInteractiveSession: true,
  },
  telemetrySidebar: {
    systemHealth: 'OPTIMAL (99.995%)',
    activeUsers: '14,820 Live Engineers',
    clusterRegion: 'Global Anycast Edge (38 Regions)',
    isOnline: true,
  },
  viewportCard: {
    headline: 'Zero-Downtime Autonomous Canary Pipeline',
    summary: 'Every commit triggers parallel micro-agent verification, validating AST contracts without running heavy full-repo compilers.',
    primaryMetric: '1.28M Req/sec',
    metricLabel: 'Sovereign Telemetry Throughput',
    isFeatureEnabled: true,
  },
  ...overrides,
});

// =============================================================================
// Archetype 24: Client Testimonial Wall (client-testimonial-wall)
// =============================================================================
export const createClientTestimonialWallSlide = (
  id = `slide-testimonial-wall-${Date.now()}`,
  overrides?: Partial<ClientTestimonialWallSlideData>
): ClientTestimonialWallSlideData => ({
  id,
  type: 'client-testimonial-wall',
  title: 'Enterprise Trust & Quantified Impact',
  subtitle: 'Unsolicited testimonials from technical leaders operating mission-critical infrastructure',
  kicker: 'SOCIAL PROOF',
  activeStep: 1,
  maxSteps: 1,
  aggregateMetrics: {
    npsScore: 84,
    enterpriseClientCount: 165,
    verifiedUptimeSla: '99.995%',
    isAuditCertified: true,
  },
  testimonials: [
    {
      id: 'test-01',
      clientName: 'Sarah Jenkins',
      clientTitle: 'Chief Technology Officer',
      enterpriseCompany: 'Apex Financial Group',
      industryVertical: 'Fintech & Capital Markets',
      quoteText: 'Adopting the White Presentation System and sovereign engineering guidelines allowed our teams to compress quarterly release rituals into daily, verified deployments without a single production glitch.',
      quantitativeRoi: '+340%',
      roiMetricLabel: 'Delivery Velocity Multiplier',
      isVerifiedClient: true,
      hasKeynoteEndorsement: true,
    },
    {
      id: 'test-02',
      clientName: 'Marcus Vance',
      clientTitle: 'VP of Core Infrastructure',
      enterpriseCompany: 'OmniCloud Systems',
      industryVertical: 'Cloud Infrastructure',
      quoteText: "Enforcing the sub-100-line component cap and affirmative boolean guard checks completely eliminated our team's cognitive debt. Our codebases are cleaner and onboarding time dropped by half.",
      quantitativeRoi: '-68%',
      roiMetricLabel: 'Defect Escape Rate Reduction',
      isVerifiedClient: true,
      hasKeynoteEndorsement: false,
    },
    {
      id: 'test-03',
      clientName: 'Dr. Elena Rostova',
      clientTitle: 'Head of Platform Engineering',
      enterpriseCompany: 'Sovereign Health Networks',
      industryVertical: 'Healthcare & Life Sciences',
      quoteText: 'The live DOM typography mandate and zero yellow-on-light contrast rules ensured our boardroom presentations passed rigorous accessibility compliance audits seamlessly.',
      quantitativeRoi: '100%',
      roiMetricLabel: 'WCAG AAA Accessibility Adherence',
      isVerifiedClient: true,
      hasKeynoteEndorsement: true,
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 25: Global Edge Mesh (global-edge-mesh)
// =============================================================================
export const createGlobalEdgeMeshSlide = (
  id = `slide-edge-mesh-${Date.now()}`,
  overrides?: Partial<GlobalEdgeMeshSlideData>
): GlobalEdgeMeshSlideData => ({
  id,
  type: 'global-edge-mesh',
  title: 'Anycast Edge Mesh & Latency Topology',
  subtitle: 'Global fiber network delivering sub-15ms worldwide response times with autonomous BGP route draining',
  kicker: 'NETWORK TOPOLOGY',
  activeStep: 1,
  maxSteps: 1,
  meshSummary: {
    totalPopsCount: 38,
    globalAverageLatencyMs: 7.8,
    backboneCapacityTbps: 120,
    isMeshResilient: true,
  },
  edgePops: [
    {
      popId: 'pop-iad',
      city: 'Ashburn',
      regionCode: 'US-East',
      anycastIp: '198.51.100.1',
      p99LatencyMs: 3.8,
      requestVolumeRps: 284000,
      ddosMitigationStatus: 'ARMED (eBPF XDP)',
      isPopOperational: true,
      isAnycastRouted: true,
    },
    {
      popId: 'pop-sjc',
      city: 'San Jose',
      regionCode: 'US-West',
      anycastIp: '198.51.100.2',
      p99LatencyMs: 6.4,
      requestVolumeRps: 215000,
      ddosMitigationStatus: 'ARMED (eBPF XDP)',
      isPopOperational: true,
      isAnycastRouted: true,
    },
    {
      popId: 'pop-fra',
      city: 'Frankfurt',
      regionCode: 'EU-Central',
      anycastIp: '198.51.100.3',
      p99LatencyMs: 5.2,
      requestVolumeRps: 240000,
      ddosMitigationStatus: 'ARMED (eBPF XDP)',
      isPopOperational: true,
      isAnycastRouted: true,
    },
    {
      popId: 'pop-lhr',
      city: 'London',
      regionCode: 'EU-West',
      anycastIp: '198.51.100.4',
      p99LatencyMs: 5.8,
      requestVolumeRps: 198000,
      ddosMitigationStatus: 'ARMED (eBPF XDP)',
      isPopOperational: true,
      isAnycastRouted: true,
    },
    {
      popId: 'pop-sin',
      city: 'Singapore',
      regionCode: 'APAC-South',
      anycastIp: '198.51.100.5',
      p99LatencyMs: 11.4,
      requestVolumeRps: 164000,
      ddosMitigationStatus: 'ARMED (eBPF XDP)',
      isPopOperational: true,
      isAnycastRouted: true,
    },
    {
      popId: 'pop-hnd',
      city: 'Tokyo',
      regionCode: 'APAC-East',
      anycastIp: '198.51.100.6',
      p99LatencyMs: 9.2,
      requestVolumeRps: 182000,
      ddosMitigationStatus: 'ARMED (eBPF XDP)',
      isPopOperational: true,
      isAnycastRouted: true,
    },
  ],
  ...overrides,
});
