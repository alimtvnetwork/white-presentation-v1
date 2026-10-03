import type {
  ExecutiveStorytellingHookSlideData,
  LeadershipSynergyDuoSlideData,
  OperationalWorkCultureSlideData,
  BentoCapabilitiesMatrixSlideData,
  OpportunityCostWaterfallSlideData,
} from '../../types/presentation';

// =============================================================================
// Archetype 16: Executive Storytelling Hook (executive-storytelling-hook)
// =============================================================================
export const createExecutiveStorytellingHookSlide = (
  id = `slide-exec-hook-${Date.now()}`,
  overrides?: Partial<ExecutiveStorytellingHookSlideData>
): ExecutiveStorytellingHookSlideData => ({
  id,
  type: 'executive-storytelling-hook',
  title: 'The Sovereign Engineering Imperative',
  subtitle: 'Navigating the architectural inflection point from fragile legacy pipelines to self-healing platforms',
  kicker: 'EXECUTIVE KEYNOTE',
  activeStep: 1,
  maxSteps: 3,
  hookQuote: {
    quoteText: 'Enterprises fail not from lack of ambition, but from accumulated friction in their daily software delivery loop.',
    author: 'Alim Ul Karim',
    authorTitle: 'Chief Software Engineer',
    isVerifiedQuote: true,
  },
  centralTensionHeadline: 'Accelerating market volatility demands instant software deployment, yet 78% of engineering capacity is trapped in maintenance toil.',
  catalystMetric: {
    metricValue: '$42.8M',
    metricLabel: 'Annualized Latency & Maintenance Drag',
    trendDirection: 'UP',
    deltaPercentage: '+38.4% YoY',
    isPositiveTrend: false,
  },
  narrativePillars: [
    {
      id: 'pillar-01',
      stepIndex: 1,
      title: 'The Status Quo: Friction & Fragmentation',
      subtitle: 'Decoupled teams operating across 19 disparate CI/CD tools',
      description: 'Proliferation of bespoke scripts and unmaintained GitHub Actions creates persistent delivery bottlenecks and multi-day PR cycles.',
      impactMetric: '14-Day Cycle Time',
      isPillarActive: true,
      isResolved: false,
    },
    {
      id: 'pillar-02',
      stepIndex: 2,
      title: 'The Inevitable Inflection: Autonomous Tooling',
      subtitle: 'AI-guided refactoring and deterministically verified specifications',
      description: 'Next-generation agentic workflows compress weeks of architectural design into executable, verifiable specification suites.',
      impactMetric: '10x Scaffolding Speed',
      isPillarActive: false,
      isResolved: false,
    },
    {
      id: 'pillar-03',
      stepIndex: 3,
      title: 'The Sovereign Opportunity: Unified Velocity',
      subtitle: 'Zero-build AST linters, live DOM rendering, and instant delivery',
      description: 'Consolidated developer experience delivering enterprise-grade presentation decks and applications with sub-second feedback loops.',
      impactMetric: '99.98% Verification SLA',
      isPillarActive: false,
      isResolved: true,
    },
  ],
  inflectionDate: 'Q4 2026',
  isCatalystActive: true,
  ...overrides,
});

// =============================================================================
// Archetype 17: Leadership Synergy Duo (leadership-synergy-duo)
// =============================================================================
export const createLeadershipSynergyDuoSlide = (
  id = `slide-leadership-synergy-${Date.now()}`,
  overrides?: Partial<LeadershipSynergyDuoSlideData>
): LeadershipSynergyDuoSlideData => ({
  id,
  type: 'leadership-synergy-duo',
  title: 'Architectural Rigor & Enterprise Strategy',
  subtitle: 'Co-equal leadership alignment uniting platform precision with rapid customer value realization',
  kicker: 'EXECUTIVE LEADERSHIP',
  activeStep: 1,
  maxSteps: 2,
  leaderAlpha: {
    name: 'Alim Ul Karim',
    title: 'Chief Software Engineer',
    personaRole: 'Technical Architecture & Systems Governance',
    organization: 'Platform Engineering Core',
    focusAreas: [
      'Sub-second AST Static Verification',
      'Deterministic State Machines & Split SQLite',
      'Zero-Regression Multi-Agent Orchestration',
    ],
    credentials: [
      'Principal Enterprise Systems Architect',
      'Author of Enterprise Coding Guidelines Suite',
    ],
    metricImpact: '99.995% Platform Reliability',
    isLeaderActive: true,
    hasKeynoteRole: true,
  },
  leaderBeta: {
    name: 'Elena Vance',
    title: 'VP of Enterprise Product Strategy',
    personaRole: 'Commercial Growth & Go-to-Market',
    organization: 'Global Strategic Operations',
    focusAreas: [
      'Fortune 100 Account Expansion',
      'Enterprise Multi-Tenant Compliance',
      'Developer Ecosystem Productization',
    ],
    credentials: [
      '12+ Years SaaS Product Leadership',
      'Ex-Cloud Infrastructure Executive',
    ],
    metricImpact: '+185% Enterprise ARR Acceleration',
    isLeaderActive: false,
    hasKeynoteRole: true,
  },
  synergyBridge: {
    coreThesis: 'Engineering purity and rapid business velocity are complementary forces when anchored by verifiable architectural contracts.',
    collaborativeDynamic: 'Weekly synchronized architecture and roadmap council ensuring zero technical debt accumulation.',
    sharedCommitment: 'Deliver mission-critical platforms with zero regression, guaranteed WCAG compliance, and sub-100-line modular design.',
    synergyMetric: '4.6x Faster Enterprise Feature Rollouts',
    isSynergyVerified: true,
  },
  executiveSignoff: {
    reviewer: 'Alim Ul Karim',
    reviewerTitle: 'Chief Software Engineer',
    isApproved: true,
  },
  ...overrides,
});

// =============================================================================
// Archetype 18: Operational Work Culture (operational-work-culture)
// =============================================================================
export const createOperationalWorkCultureSlide = (
  id = `slide-work-culture-${Date.now()}`,
  overrides?: Partial<OperationalWorkCultureSlideData>
): OperationalWorkCultureSlideData => ({
  id,
  type: 'operational-work-culture',
  title: 'Engineering Values & High-Velocity Culture',
  subtitle: 'Institutionalizing engineering discipline, blameless psychological safety, and evidence-driven decisions',
  kicker: 'ENGINEERING EXCELLENCE',
  activeStep: 1,
  maxSteps: 4,
  cultureVision: 'Pioneering high-velocity software engineering through autonomous agents, modular architecture, and radical blameless transparency.',
  tenets: [
    {
      id: 'tenet-01',
      stepIndex: 1,
      name: 'Blameless Root Cause Analysis',
      mantra: 'Processes and systemic safeguards fail, never individuals.',
      practiceRitual: 'Mandatory 4-part RCA published within 24 hours of any production anomaly.',
      quantitativeMetric: '0%',
      metricLabel: 'Repeat Severity-1 Incidents Over 12 Months',
      isCoreTenet: true,
      isEnforcedInCi: false,
    },
    {
      id: 'tenet-02',
      stepIndex: 2,
      name: 'Extreme DRY & Sub-100 Line Modularity',
      mantra: 'Small, single-responsibility components compose resilient systems.',
      practiceRitual: 'Strict enforcement of CODE-RED-006R line cap via pre-commit static AST gates.',
      quantitativeMetric: '68%',
      metricLabel: 'Boilerplate Elimination via Reusable UI Primitives',
      isCoreTenet: true,
      isEnforcedInCi: true,
    },
    {
      id: 'tenet-03',
      stepIndex: 3,
      name: 'Ship Fast with Guardrails',
      mantra: 'High deployment frequency accelerates organizational learning.',
      practiceRitual: 'Continuous automated Canary verification with automated rollback triggers.',
      quantitativeMetric: '48/day',
      metricLabel: 'Production Deployments per Engineering Squad',
      isCoreTenet: true,
      isEnforcedInCi: true,
    },
    {
      id: 'tenet-04',
      stepIndex: 4,
      name: 'Truth Over Harmony',
      mantra: 'Grounded empirical data supersedes hierarchical opinions.',
      practiceRitual: 'Evidence-gated architectural reviews requiring verified benchmarks.',
      quantitativeMetric: '100%',
      metricLabel: 'Architecture Decisions Backed by Concrete Prototypes',
      isCoreTenet: true,
      isEnforcedInCi: false,
    },
  ],
  healthScore: {
    scoreValue: 98.4,
    scoreMax: 100,
    tierStatus: 'Elite High-Performance',
    isHighPerformance: true,
  },
  ...overrides,
});

// =============================================================================
// Archetype 19: Bento Capabilities Matrix (bento-capabilities-matrix)
// =============================================================================
export const createBentoCapabilitiesMatrixSlide = (
  id = `slide-bento-capabilities-${Date.now()}`,
  overrides?: Partial<BentoCapabilitiesMatrixSlideData>
): BentoCapabilitiesMatrixSlideData => ({
  id,
  type: 'bento-capabilities-matrix',
  title: 'Autonomous Platform Capabilities',
  subtitle: 'High-density enterprise architecture mosaic delivering streaming telemetry and zero-build verification',
  kicker: 'PLATFORM ARCHITECTURE',
  activeStep: 1,
  maxSteps: 4,
  heroCapability: {
    id: 'hero-bento',
    title: 'Autonomous Agentic Synthesis Engine',
    subtitle: 'Continuous parallel agent orchestration with AST-level safety guards',
    description: 'Powers sub-second code generation, deterministic SQLite state synchronization, and zero-regression presentation authoring.',
    telemetryKpi: '14.2M Ops/sec',
    kpiLabel: 'Aggregated Live Execution Throughput',
    isHeroActive: true,
    hasDotMatrix: true,
  },
  primaryPillar: {
    id: 'pillar-bento',
    title: 'Zero-Trust Security Perimeter',
    subtitle: 'Hardware-attested enclave isolation',
    features: [
      'mTLS 1.3 Cryptographic Mesh',
      'Casbin Fine-Grained RBAC',
      'eBPF Kernel-Level Telemetry',
      'Zero-PII Dynamic Sanitization',
    ],
    statusBadge: 'SOC2 TYPE II VERIFIED',
    isPillarHealthy: true,
  },
  telemetryStrip: {
    id: 'telemetry-bento',
    title: 'Global Edge Telemetry & Mesh Fabric',
    liveThroughput: '920k Req/sec',
    errorRate: '0.0004%',
    clusterRegion: '38 Global Edge POPs',
    isOperational: true,
  },
  microMetrics: [
    {
      id: 'micro-01',
      label: 'Cold Start Latency',
      value: '8.4ms',
      delta: '-64% YoY',
      isAccelerating: true,
    },
    {
      id: 'micro-02',
      label: 'Autonomous Test Pass Rate',
      value: '99.98%',
      delta: '+0.14%',
      isAccelerating: true,
    },
  ],
  isBentoInteractive: true,
  hasLiveTelemetry: true,
  ...overrides,
});

// =============================================================================
// Archetype 20: Opportunity Cost Waterfall (opportunity-cost-waterfall)
// =============================================================================
export const createOpportunityCostWaterfallSlide = (
  id = `slide-opportunity-waterfall-${Date.now()}`,
  overrides?: Partial<OpportunityCostWaterfallSlideData>
): OpportunityCostWaterfallSlideData => ({
  id,
  type: 'opportunity-cost-waterfall',
  title: 'Opportunity Cost & Capital Efficiency Waterfall',
  subtitle: 'Quantifying legacy developer drag against accelerated platform ROI under audited corporate economics',
  kicker: 'FINANCIAL MODELING',
  activeStep: 1,
  maxSteps: 5,
  currencySymbol: '$',
  unitMagnitude: 'Millions USD',
  waterfallBars: [
    {
      id: 'bar-01',
      stepIndex: 1,
      category: 'BASELINE',
      label: 'FY26 Engineering Run-Rate',
      amountMillionUsd: 45.0,
      runningTotalMillionUsd: 45.0,
      isPositiveDelta: true,
      isSubtotal: false,
    },
    {
      id: 'bar-02',
      stepIndex: 2,
      category: 'FRICTION',
      label: 'Manual CI/CD & Deploy Lag',
      amountMillionUsd: -12.4,
      runningTotalMillionUsd: 32.6,
      isPositiveDelta: false,
      isSubtotal: false,
    },
    {
      id: 'bar-03',
      stepIndex: 3,
      category: 'FRICTION',
      label: 'Code Review Context Switching',
      amountMillionUsd: -7.8,
      runningTotalMillionUsd: 24.8,
      isPositiveDelta: false,
      isSubtotal: false,
    },
    {
      id: 'bar-04',
      stepIndex: 4,
      category: 'EFFICIENCY_GAIN',
      label: 'Autonomous AI Agent Acceleration',
      amountMillionUsd: 33.2,
      runningTotalMillionUsd: 58.0,
      isPositiveDelta: true,
      isSubtotal: false,
    },
    {
      id: 'bar-05',
      stepIndex: 5,
      category: 'NET_SOVEREIGN_VALUE',
      label: 'Net Sovereign Capital Realized',
      amountMillionUsd: 58.0,
      runningTotalMillionUsd: 58.0,
      isPositiveDelta: true,
      isSubtotal: true,
    },
  ],
  netRoiSummary: {
    roiMultiplier: 3.8,
    paybackMonths: 4.2,
    annualizedSavingsUsd: '$33.2M',
    confidenceIntervalPercent: 96.5,
    isInvestmentApproved: true,
  },
  ...overrides,
});
