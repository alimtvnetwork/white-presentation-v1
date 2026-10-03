import type {
  AiGovernanceSafetyGovernorSlideData,
  DeveloperVelocityFlywheelSlideData,
  StrategicDecarbonizationEsgSlideData,
  MarketTensionQuadrantSlideData,
  ExecutiveCloseContactSlideData,
} from '../../types/presentation';

// =============================================================================
// Archetype 26: AI Governance Safety Governor (ai-governance-safety-governor)
// =============================================================================
export const createAiGovernanceSafetyGovernorSlide = (
  id = `slide-ai-governor-${Date.now()}`,
  overrides?: Partial<AiGovernanceSafetyGovernorSlideData>
): AiGovernanceSafetyGovernorSlideData => ({
  id,
  type: 'ai-governance-safety-governor',
  title: 'Real-Time AI Safety Governor & Firewall',
  subtitle: 'Deterministic inline evaluation pipeline preventing prompt injections, hallucinations, and unverified PII leakage',
  kicker: 'AI GOVERNANCE',
  activeStep: 1,
  maxSteps: 1,
  governorMetrics: {
    totalEvaluationsCount: '8,420,000 Inferences',
    violationRatePercentage: 0.0018,
    auditHash: 'sha256:4f8e91a27b8c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789',
    isComplianceCertified: true,
  },
  governanceGates: [
    {
      gateId: 'gate-01',
      gateName: 'PII Redaction & Ingress Sanitation',
      inspectionType: 'Zero-Regex AST Token Sanitizer',
      latencyBudgetMs: 1.8,
      sampleThroughputRps: 42000,
      rejectionPolicy: 'Sanitize and Mask In-Flight',
      isGatePassed: true,
      isEnforcedInRealtime: true,
    },
    {
      gateId: 'gate-02',
      gateName: 'Adversarial Injection Firewall',
      inspectionType: 'Vector Embedding Semantic Guard',
      latencyBudgetMs: 3.4,
      sampleThroughputRps: 42000,
      rejectionPolicy: 'Immediate TCP Reset & Alert',
      isGatePassed: true,
      isEnforcedInRealtime: true,
    },
    {
      gateId: 'gate-03',
      gateName: 'Factual Grounding & Citation Check',
      inspectionType: 'Differential Knowledge Verifier',
      latencyBudgetMs: 5.2,
      sampleThroughputRps: 38000,
      rejectionPolicy: 'Re-prompt with Stricter Constraints',
      isGatePassed: true,
      isEnforcedInRealtime: true,
    },
    {
      gateId: 'gate-04',
      gateName: 'Cryptographic Audit Ledger',
      inspectionType: 'Merkle Tree Transparency Log',
      latencyBudgetMs: 2.1,
      sampleThroughputRps: 42000,
      rejectionPolicy: 'Hard Drop on Signature Mismatch',
      isGatePassed: true,
      isEnforcedInRealtime: true,
    },
  ],
  governorSignoff: {
    reviewer: 'Alim Ul Karim',
    reviewerTitle: 'Chief Software Engineer',
    isApproved: true,
  },
  ...overrides,
});

// =============================================================================
// Archetype 27: Developer Velocity Flywheel (developer-velocity-flywheel)
// =============================================================================
export const createDeveloperVelocityFlywheelSlide = (
  id = `slide-velocity-flywheel-${Date.now()}`,
  overrides?: Partial<DeveloperVelocityFlywheelSlideData>
): DeveloperVelocityFlywheelSlideData => ({
  id,
  type: 'developer-velocity-flywheel',
  title: 'Compounding Engineering Velocity Flywheel',
  subtitle: 'Continuous virtuous feedback cycle transforming developer productivity into compounding enterprise value',
  kicker: 'DORA VELOCITY',
  activeStep: 1,
  maxSteps: 1,
  flywheelAcceleration: {
    cycleTimeReductionPercent: 82.5,
    deploymentFrequencyMultiplier: '14.2x',
    isFlywheelAccelerating: true,
  },
  flywheelStages: [
    {
      stageNumber: 1,
      stageName: 'Sub-Second Local Feedback',
      corePractice: 'Zero-dependency pure TypeScript functions and instant unit test execution',
      doraMetric: 'Lead Time for Changes',
      targetValue: '< 100ms',
      currentValue: '58ms',
      isStageOptimized: true,
      isFeedbackActive: true,
    },
    {
      stageNumber: 2,
      stageName: 'Zero-Build Static AST Verification',
      corePractice: 'Rule R1 strict no-build protocol with lightweight Python line counters and tsc --noEmit',
      doraMetric: 'Change Failure Rate',
      targetValue: '< 0.1%',
      currentValue: '0.00%',
      isStageOptimized: true,
      isFeedbackActive: true,
    },
    {
      stageNumber: 3,
      stageName: 'Continuous Automated Canary Rollout',
      corePractice: 'Progressive traffic shifting with automated circuit breaker rollback triggers',
      doraMetric: 'Deployment Frequency',
      targetValue: '> 40 / day',
      currentValue: '48.2 / day',
      isStageOptimized: true,
      isFeedbackActive: true,
    },
    {
      stageNumber: 4,
      stageName: 'Observability Feedback & Error Budgets',
      corePractice: 'Real-time eBPF telemetry streaming directly into developer IDE consoles',
      doraMetric: 'Mean Time to Restore (MTTR)',
      targetValue: '< 5.0 mins',
      currentValue: '2.1 mins',
      isStageOptimized: true,
      isFeedbackActive: true,
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 28: Strategic Decarbonization ESG (strategic-decarbonization-esg)
// =============================================================================
export const createStrategicDecarbonizationEsgSlide = (
  id = `slide-decarbonization-esg-${Date.now()}`,
  overrides?: Partial<StrategicDecarbonizationEsgSlideData>
): StrategicDecarbonizationEsgSlideData => ({
  id,
  type: 'strategic-decarbonization-esg',
  title: 'Strategic Decarbonization & Net-Zero Roadmap',
  subtitle: 'Science-Based Targets initiative (SBTi) verified abatement wedges across global digital operations',
  kicker: 'ESG SUSTAINABILITY',
  activeStep: 1,
  maxSteps: 1,
  baselineYear: 2024,
  netZeroTargetYear: 2040,
  efficiencyMetrics: {
    datacenterPue: 1.08,
    renewableEnergyPercentage: 100,
    isCarbonNeutral: true,
  },
  scopes: [
    {
      scopeId: 'SCOPE_1',
      scopeName: 'Scope 1: Direct Operations',
      emissionSource: 'Backup generators and operational facility fleet',
      currentMtCo2e: 12400,
      targetReductionPercent: 92.5,
      isSbtiValidated: true,
    },
    {
      scopeId: 'SCOPE_2',
      scopeName: 'Scope 2: Purchased Electricity',
      emissionSource: 'Cloud hyperscaler and self-hosted datacenter power',
      currentMtCo2e: 48200,
      targetReductionPercent: 100.0,
      isSbtiValidated: true,
    },
    {
      scopeId: 'SCOPE_3',
      scopeName: 'Scope 3: Upstream & Supply Chain',
      emissionSource: 'Hardware silicon manufacturing and employee travel',
      currentMtCo2e: 134000,
      targetReductionPercent: 84.0,
      isSbtiValidated: true,
    },
  ],
  milestoneWedges: [
    {
      milestoneYear: 2026,
      abatementStrategy: '100% 24/7 Carbon-Free Energy Matching for Compute',
      cumulativeReductionPercent: 35.0,
      isMilestoneOnTrack: true,
    },
    {
      milestoneYear: 2030,
      abatementStrategy: 'Supply Chain Scope 3 Supplier Mandate Enforcement',
      cumulativeReductionPercent: 55.0,
      isMilestoneOnTrack: true,
    },
    {
      milestoneYear: 2035,
      abatementStrategy: 'Closed-Loop Hardware Circularity & Waste Elimination',
      cumulativeReductionPercent: 80.0,
      isMilestoneOnTrack: true,
    },
    {
      milestoneYear: 2040,
      abatementStrategy: 'Absolute Net-Zero with Certified Durable Carbon Removal',
      cumulativeReductionPercent: 100.0,
      isMilestoneOnTrack: true,
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 29: Market Tension Quadrant (market-tension-quadrant)
// =============================================================================
export const createMarketTensionQuadrantSlide = (
  id = `slide-market-quadrant-${Date.now()}`,
  overrides?: Partial<MarketTensionQuadrantSlideData>
): MarketTensionQuadrantSlideData => ({
  id,
  type: 'market-tension-quadrant',
  title: 'Strategic Market Tension & Positioning',
  subtitle: 'Navigating the trade-off between architectural governance and developer delivery velocity',
  kicker: 'STRATEGIC POSITIONING',
  activeStep: 1,
  maxSteps: 1,
  xAxisLabel: 'Developer Delivery Velocity (Deploys/Day & Sub-Second Feeback)',
  yAxisLabel: 'Architectural Governance & Verifiable Safety (Zero-Build AST & Contrast)',
  quadrants: [
    {
      id: 'SOVEREIGN_PARADIGM',
      quadrantName: 'Sovereign Engineering Paradigm',
      description: 'Sub-second verification loops coupled with mathematically proven WCAG AAA and AST standards.',
      isSovereignTerritory: true,
    },
    {
      id: 'LEADERS',
      quadrantName: 'High-Governance Enterprise Monoliths',
      description: 'Rigid compliance processes requiring multi-day PR reviews and heavy compilation cycles.',
      isSovereignTerritory: false,
    },
    {
      id: 'CHALLENGERS',
      quadrantName: 'Unregulated Fast Prototypes',
      description: 'Rapid initial velocity undermined by severe architectural debt and high defect rates.',
      isSovereignTerritory: false,
    },
    {
      id: 'NICHE',
      quadrantName: 'Legacy Stagnation',
      description: 'Low release velocity constrained by fragile unmaintained legacy infrastructure.',
      isSovereignTerritory: false,
    },
  ],
  marketEntities: [
    {
      id: 'ent-white-pres',
      entityName: 'White Presentation System',
      xScorePercent: 94,
      yScorePercent: 96,
      marketSharePercent: 34.5,
      isSovereignPlatform: true,
      isCompetitor: false,
    },
    {
      id: 'ent-hyperscaler-corp',
      entityName: 'Legacy Cloud Monolith',
      xScorePercent: 38,
      yScorePercent: 88,
      marketSharePercent: 28.0,
      isSovereignPlatform: false,
      isCompetitor: true,
    },
    {
      id: 'ent-fragile-nocode',
      entityName: 'Rapid No-Code Canvas',
      xScorePercent: 82,
      yScorePercent: 22,
      marketSharePercent: 18.2,
      isSovereignPlatform: false,
      isCompetitor: true,
    },
  ],
  strategicTrajectory: {
    originX: 72,
    originY: 68,
    targetX: 96,
    targetY: 98,
    trajectoryHorizon: 'FY27 Horizon Target',
    isExecutionOnTrack: true,
  },
  ...overrides,
});

// =============================================================================
// Archetype 30: Executive Close & Contact (executive-close-contact)
// =============================================================================
export const createExecutiveCloseContactSlide = (
  id = `slide-executive-close-${Date.now()}`,
  overrides?: Partial<ExecutiveCloseContactSlideData>
): ExecutiveCloseContactSlideData => ({
  id,
  type: 'executive-close-contact',
  title: 'Strategic Next Steps & Executive Authorization',
  subtitle: 'Boardroom action items, deployment schedule authorization, and verified technical contact channels',
  kicker: 'BOARDROOM ACTION',
  activeStep: 1,
  maxSteps: 1,
  strategicCallToAction: {
    headline: 'Authorize Sovereign Engineering Architecture Deployment',
    primaryRequest: 'Ratify the multi-agent autonomous toolchain and enterprise presentation framework for enterprise rollout.',
    immediateNextStep: 'Provision sandbox environments across Americas and Europe edge clusters within 48 hours.',
    decisionDeadline: 'October 17, 2026',
    isActionApproved: true,
  },
  executiveContacts: [
    {
      id: 'exec-alim',
      name: 'Alim Ul Karim',
      executiveTitle: 'Chief Software Engineer',
      organization: 'Platform Architecture & Engineering Core',
      emailContact: 'alim.karim@sovereign.platform',
      securityKeyFingerprint: '9B42 81FC 34DA 7E91 0042 E31A',
      isChiefEngineer: true,
      isAvailableForBriefing: true,
    },
    {
      id: 'exec-partnerships',
      name: 'Enterprise Engagement Desk',
      executiveTitle: 'Director of Strategic Deployments',
      organization: 'Global Enterprise Solutions',
      emailContact: 'partnerships@sovereign.platform',
      securityKeyFingerprint: '48E1 92F0 11AC 5D78 9901 B4F2',
      isChiefEngineer: false,
      isAvailableForBriefing: true,
    },
  ],
  verificationSeal: {
    sealAuthority: 'Technical Steering Council Certification Authority',
    cryptographicHash: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
    issueDate: '2026-10-03',
    isSealValid: true,
  },
  ...overrides,
});
