import type {
  ExecutiveGovernanceMatrixSlideData,
  OkrCascadeAlignmentSlideData,
  CloudCostFinopsOptimizerSlideData,
  CustomerSentimentRadarSlideData,
  CompetitiveBattlecardSlideData,
  LaunchReadinessChecklistSlideData,
  DeveloperGatewaySandboxSlideData,
  RagPipelineTopologySlideData,
  SocIncidentWarRoomSlideData,
  MerkleTreeStateLedgerSlideData,
  InvestorCapTableWaterfallSlideData,
  RealtimeEventStreamFabricSlideData,
  SupplyChainRiskMatrixSlideData,
  TalentCompetencyRadarSlideData,
  SustainabilityEsgScorecardSlideData,
  GlobalPptSuiteSlideType,
  GlobalPptSuiteSlideData,
} from '../types/globalPptArchetypes';
import type { ArchetypeOption } from './extendedSlideFactories';

// =============================================================================
// Archetype 01: Executive Governance Matrix (executive-governance-matrix)
// =============================================================================
export const createExecutiveGovernanceMatrixSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<ExecutiveGovernanceMatrixSlideData>
): ExecutiveGovernanceMatrixSlideData => ({
  id,
  type: 'executive-governance-matrix',
  kicker: 'ENTERPRISE GOVERNANCE',
  title: 'Corporate Governance & Board Committee Matrix',
  subtitle: 'Institutional Oversight, Quorum Compliance & Charter Resolutions',
  boardName: 'Global Executive Directorate',
  fiscalYear: 'FY2026-Q4',
  overallComplianceScore: 98.6,
  chiefGovernanceOfficer: 'Alim Ul Karim',
  cgoTitle: 'Chief Software Engineer',
  isRegulatoryAuditPassed: true,
  activeStep: 0,
  maxSteps: 3,
  governancePillars: [
    {
      id: 'pil-01',
      pillarName: 'Audit & Financial Risk',
      chairPerson: 'Eleanor Vance',
      chairTitle: 'Audit Committee Chair',
      committeeCode: 'AC-101',
      oversightDomain: 'Sarbanes-Oxley & Capital Reserves',
      complianceHealthPercent: 99.2,
      meetingCadence: 'Monthly',
      isQuorumAchieved: true,
      isAuditVerified: true,
      resolutions: [
        {
          id: 'res-01',
          resolutionCode: 'RES-2026-08',
          title: 'FY27 Capital Allocation Framework',
          summary: 'Authorized $45M expansion of sovereign AI datacenters with zero-debt financing.',
          votingQuorumPercent: 100.0,
          isPassed: true,
          isCompliant: true,
          hasAuditSignoff: true,
        },
        {
          id: 'res-02',
          resolutionCode: 'RES-2026-09',
          title: 'Liquidity & Capital Buffer Mandate',
          summary: 'Maintained 18-month cash runway reserves in tier-1 sovereign treasury bonds.',
          votingQuorumPercent: 98.5,
          isPassed: true,
          isCompliant: true,
          hasAuditSignoff: true,
        },
      ],
    },
    {
      id: 'pil-02',
      pillarName: 'Cybersecurity & Cryptographic Assurance',
      chairPerson: 'Alim Ul Karim',
      chairTitle: 'Chief Software Engineer',
      committeeCode: 'SEC-202',
      oversightDomain: 'Zero-Trust Infrastructure & Post-Quantum Cryptography',
      complianceHealthPercent: 99.8,
      meetingCadence: 'Bi-Weekly',
      isQuorumAchieved: true,
      isAuditVerified: true,
      resolutions: [
        {
          id: 'res-03',
          resolutionCode: 'RES-2026-14',
          title: 'Mandatory Post-Quantum Transport Encryption',
          summary: 'Enforced ML-KEM-768 key encapsulation across all Anycast edge ingress nodes.',
          votingQuorumPercent: 100.0,
          isPassed: true,
          isCompliant: true,
          hasAuditSignoff: true,
        },
        {
          id: 'res-04',
          resolutionCode: 'RES-2026-15',
          title: 'Continuous Automated Red-Team Verification',
          summary: 'Automated adversary attack simulation suites integrated into all CI/CD pipelines.',
          votingQuorumPercent: 100.0,
          isPassed: true,
          isCompliant: true,
          hasAuditSignoff: true,
        },
      ],
    },
    {
      id: 'pil-03',
      pillarName: 'Compensation & Governance Nominations',
      chairPerson: 'Sarah Sterling',
      chairTitle: 'Nomination Committee Chair',
      committeeCode: 'CG-303',
      oversightDomain: 'Executive Incentive Alignment & Equity Parity',
      complianceHealthPercent: 97.4,
      meetingCadence: 'Quarterly',
      isQuorumAchieved: true,
      isAuditVerified: true,
      resolutions: [
        {
          id: 'res-05',
          resolutionCode: 'RES-2026-22',
          title: 'Engineering Technical Meritocracy Policy',
          summary: 'Indexed executive equity vesting directly to platform reliability and zero-defect SLA targets.',
          votingQuorumPercent: 96.0,
          isPassed: true,
          isCompliant: true,
          hasAuditSignoff: true,
        },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 02: OKR Cascade Alignment (okr-cascade-alignment)
// =============================================================================
export const createOkrCascadeAlignmentSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<OkrCascadeAlignmentSlideData>
): OkrCascadeAlignmentSlideData => ({
  id,
  type: 'okr-cascade-alignment',
  kicker: 'STRATEGIC EXECUTION',
  title: 'Corporate OKR Cascade & Strategic Alignment',
  subtitle: 'Hierarchical Goal Distribution from Executive Vision to Engineering Delivery',
  planningCycle: '2026 Annual Planning',
  globalProgressPercent: 91.4,
  executiveSponsor: 'Alim Ul Karim',
  sponsorRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 3,
  cascadeTiers: [
    {
      id: 'tier-1',
      tierLevel: 1,
      tierName: 'Enterprise Vision',
      tierDescription: 'Foundational architectural scalability and client reliability',
      strategicObjective: 'Attain zero layout drift and 99.999% availability across global edge presentation stages.',
      isCompleted: false,
      isActiveTier: true,
      keyResults: [
        {
          id: 'kr-1.1',
          krCode: 'KR-1.1',
          targetMetric: '99.999%',
          currentMetric: '99.998%',
          unit: 'Availability',
          progressPercent: 98.0,
          isOnTrack: true,
          isVerified: true,
          initiatives: [
            {
              id: 'init-1',
              initiativeName: 'Anycast Edge Multi-Region Mesh',
              ownerName: 'Alim Ul Karim',
              ownerRole: 'Chief Software Engineer',
              progressPercent: 100.0,
              confidenceScore: 0.99,
              isCompleted: true,
              isOnTrack: true,
              hasConfidenceWarning: false,
            },
            {
              id: 'init-2',
              initiativeName: 'Bilateral Ingress TLS 1.3 Hardening',
              ownerName: 'Sarah Chen',
              ownerRole: 'Security Architect',
              progressPercent: 95.0,
              confidenceScore: 0.94,
              isCompleted: false,
              isOnTrack: true,
              hasConfidenceWarning: false,
            },
          ],
        },
      ],
    },
    {
      id: 'tier-2',
      tierLevel: 2,
      tierName: 'Divisional Engineering Objectives',
      tierDescription: 'Platform infrastructure and rendering optimizations',
      strategicObjective: 'Achieve sub-12ms render pipeline latency across all presentation themes.',
      isCompleted: false,
      isActiveTier: false,
      keyResults: [
        {
          id: 'kr-2.1',
          krCode: 'KR-2.1',
          targetMetric: '12.0ms',
          currentMetric: '8.4ms',
          unit: 'Render Latency',
          progressPercent: 92.0,
          isOnTrack: true,
          isVerified: true,
          initiatives: [
            {
              id: 'init-3',
              initiativeName: 'Framer Motion Spring Physics Vectorization',
              ownerName: 'Marcus Brody',
              ownerRole: 'Rendering Lead',
              progressPercent: 90.0,
              confidenceScore: 0.92,
              isCompleted: false,
              isOnTrack: true,
              hasConfidenceWarning: false,
            },
          ],
        },
      ],
    },
    {
      id: 'tier-3',
      tierLevel: 3,
      tierName: 'Tactical Squad Initiatives',
      tierDescription: 'Component-level refactoring and test automation',
      strategicObjective: 'Complete 100% test coverage with zero flake rate across all slide archetypes.',
      isCompleted: false,
      isActiveTier: false,
      keyResults: [
        {
          id: 'kr-3.1',
          krCode: 'KR-3.1',
          targetMetric: '100.0%',
          currentMetric: '96.5%',
          unit: 'Coverage',
          progressPercent: 88.0,
          isOnTrack: true,
          isVerified: true,
          initiatives: [
            {
              id: 'init-4',
              initiativeName: 'Autonomous QA Runner Test Suite',
              ownerName: 'Liam Scott',
              ownerRole: 'QA Automation Engineer',
              progressPercent: 88.0,
              confidenceScore: 0.89,
              isCompleted: false,
              isOnTrack: true,
              hasConfidenceWarning: false,
            },
          ],
        },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 03: Cloud Cost FinOps Optimizer (cloud-cost-finops-optimizer)
// =============================================================================
export const createCloudCostFinopsOptimizerSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<CloudCostFinopsOptimizerSlideData>
): CloudCostFinopsOptimizerSlideData => ({
  id,
  type: 'cloud-cost-finops-optimizer',
  kicker: 'CLOUD ECONOMICS',
  title: 'Cloud FinOps & Infrastructure Unit Economics',
  subtitle: 'Multi-Cloud Spend Rationalization, CUD Coverage & Automated Waste Elimination',
  reportingQuarter: 'Q4-2026',
  totalMonthlySpendUsd: 142500,
  totalAnnualProjectedSavingsUsd: 384000,
  overallDiscountCoveragePercent: 84.5,
  finopsLead: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  spendByProvider: [
    {
      id: 'prov-aws',
      providerName: 'Amazon Web Services',
      cloudIcon: 'aws',
      monthlyRunRateUsd: 78400,
      committedDiscountPercent: 88.0,
      unitCostPerTxUsd: 0.00042,
      monthlySavingsUsd: 21500,
      isOptimized: true,
    },
    {
      id: 'prov-gcp',
      providerName: 'Google Cloud Platform',
      cloudIcon: 'gcp',
      monthlyRunRateUsd: 44100,
      committedDiscountPercent: 82.0,
      unitCostPerTxUsd: 0.00038,
      monthlySavingsUsd: 12400,
      isOptimized: true,
    },
    {
      id: 'prov-azure',
      providerName: 'Microsoft Azure',
      cloudIcon: 'azure',
      monthlyRunRateUsd: 20000,
      committedDiscountPercent: 78.0,
      unitCostPerTxUsd: 0.00049,
      monthlySavingsUsd: 5200,
      isOptimized: true,
    },
  ],
  optimizationLevers: [
    {
      id: 'lev-01',
      leverTitle: 'Graviton4 Arm64 Microservice Replatforming',
      category: 'compute',
      annualSavingsUsd: 120000,
      effortTier: 'immediate',
      isAutomated: true,
      isRealized: true,
      hasAnomalousSpike: false,
    },
    {
      id: 'lev-02',
      leverTitle: 'S3 Glacier Deep Archive Tiering Policy',
      category: 'storage',
      annualSavingsUsd: 42000,
      effortTier: 'immediate',
      isAutomated: true,
      isRealized: true,
      hasAnomalousSpike: false,
    },
    {
      id: 'lev-03',
      leverTitle: 'Dynamic Pod Autoscaling & Spot Evacuation',
      category: 'compute',
      annualSavingsUsd: 98000,
      effortTier: 'moderate',
      isAutomated: true,
      isRealized: false,
      hasAnomalousSpike: false,
    },
    {
      id: 'lev-04',
      leverTitle: 'Cross-AZ Traffic Compression & Local Peering',
      category: 'network',
      annualSavingsUsd: 124000,
      effortTier: 'architectural',
      isAutomated: true,
      isRealized: false,
      hasAnomalousSpike: false,
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 04: Customer Sentiment Radar (customer-sentiment-radar)
// =============================================================================
export const createCustomerSentimentRadarSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<CustomerSentimentRadarSlideData>
): CustomerSentimentRadarSlideData => ({
  id,
  type: 'customer-sentiment-radar',
  kicker: 'CUSTOMER TELEMETRY',
  title: 'Voice of the Customer & Multidimensional Sentiment Radar',
  subtitle: 'Quantitative NPS/CSAT Telemetry & Enterprise Executive Verbatims',
  netPromoterScore: 74,
  customerSatisfactionScore: 96.2,
  surveySampleSize: 1420,
  executiveSponsor: 'Alim Ul Karim',
  sponsorRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  radarAxes: [
    { id: 'ax-1', axisLabel: 'System Reliability', currentScore: 98, benchmarkScore: 85, historicalScore: 92, hasExceededBenchmark: true },
    { id: 'ax-2', axisLabel: 'Zero-Trust Security', currentScore: 96, benchmarkScore: 88, historicalScore: 90, hasExceededBenchmark: true },
    { id: 'ax-3', axisLabel: 'Typography & Polish', currentScore: 99, benchmarkScore: 80, historicalScore: 88, hasExceededBenchmark: true },
    { id: 'ax-4', axisLabel: 'Developer Velocity', currentScore: 94, benchmarkScore: 78, historicalScore: 84, hasExceededBenchmark: true },
    { id: 'ax-5', axisLabel: 'Enterprise Support', currentScore: 95, benchmarkScore: 82, historicalScore: 86, hasExceededBenchmark: true },
    { id: 'ax-6', axisLabel: 'Total Cost Value', currentScore: 91, benchmarkScore: 75, historicalScore: 80, hasExceededBenchmark: true },
  ],
  quotes: [
    {
      id: 'q-1',
      quoteText: 'White Presentation eliminates hours of manual formatting with mathematical perfection.',
      authorName: 'Marcus Vance',
      authorRole: 'VP of Architecture',
      companyName: 'Apex Global Cloud',
      sentimentTier: 'promoter',
      isEnterpriseTier: true,
      isVerifiedCustomer: true,
    },
    {
      id: 'q-2',
      quoteText: 'Zero layout drift across all our 8K boardroom displays has set a new standard for our executive presentations.',
      authorName: 'Elena Rostova',
      authorRole: 'Head of Developer Experience',
      companyName: 'Sovereign Systems Corp',
      sentimentTier: 'promoter',
      isEnterpriseTier: true,
      isVerifiedCustomer: true,
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 05: Competitive Battlecard (competitive-battlecard)
// =============================================================================
export const createCompetitiveBattlecardSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<CompetitiveBattlecardSlideData>
): CompetitiveBattlecardSlideData => ({
  id,
  type: 'competitive-battlecard',
  kicker: 'MARKET SUPERIORITY',
  title: 'Competitive Battlecard: Enterprise Advantage',
  subtitle: 'Direct Architectural Comparison, Moat Verification & Objection Handling',
  targetMarketSegment: 'Enterprise Presentation & Executive Telemetry',
  winRatePercent: 76.4,
  commercialLead: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 3,
  battlecardPillars: [
    {
      id: 'pil-01',
      pillarTitle: 'Pure DOM Typography Architecture',
      strategicMoatDescription: 'Zero rasterization guarantees infinite DPI scaling, full screen-reader compliance, and live text copyability.',
      ourAdvantageScore: 99.0,
      isActivePillar: true,
      competitors: [
        {
          id: 'comp-1',
          competitorName: 'Legacy Slide Engines',
          marketSharePercent: 48.0,
          parityScorePercent: 24.0,
          weaknessSummary: 'Flattens typography into blurred canvas bitmaps; zero accessibility or DOM inspectability.',
          hasCompetitiveAdvantage: true,
        },
      ],
      objections: [
        {
          id: 'obj-1',
          commonObjection: 'Does live DOM rendering introduce frame drops on older hardware?',
          counterNarrative: 'All animations are bound to CSS transform3d and will-change: transform, utilizing GPU compositor threads exclusively.',
          evidentiaryProofPoint: '60fps verified on baseline 2020 Intel chipsets.',
          isVerified: true,
        },
      ],
    },
    {
      id: 'pil-02',
      pillarTitle: '4-Plane Spatial Depth & Kinetic Spring Engine',
      strategicMoatDescription: 'Natural physics-based motion without rigid frame animations, keeping audience engagement peak.',
      ourAdvantageScore: 96.5,
      isActivePillar: false,
      competitors: [
        {
          id: 'comp-2',
          competitorName: 'Static Template Generators',
          marketSharePercent: 32.0,
          parityScorePercent: 30.0,
          weaknessSummary: 'Static 2D slide decks with linear transitions and no spatial depth hierarchy.',
          hasCompetitiveAdvantage: true,
        },
      ],
      objections: [
        {
          id: 'obj-2',
          commonObjection: 'Are motion physics distracting during formal executive briefings?',
          counterNarrative: 'Spring physics are calibrated to critical damping (zeta = 1.0) with zero oscillation overshoot.',
          evidentiaryProofPoint: 'Rated highly by 94% of Fortune 500 board attendees.',
          isVerified: true,
        },
      ],
    },
    {
      id: 'pil-03',
      pillarTitle: 'Sub-Pixel Contrast & Optical Sharpening',
      strategicMoatDescription: 'WCAG AA verified contrast ratios with zero optical blur bleed across all 10 corporate themes.',
      ourAdvantageScore: 98.2,
      isActivePillar: false,
      competitors: [
        {
          id: 'comp-3',
          competitorName: 'Generic Web Decks',
          marketSharePercent: 20.0,
          parityScorePercent: 45.0,
          weaknessSummary: 'Inconsistent contrast ratios and illegible text on high-lumen boardroom projectors.',
          hasCompetitiveAdvantage: true,
        },
      ],
      objections: [
        {
          id: 'obj-3',
          commonObjection: 'Do dark themes wash out on budget conference room projectors?',
          counterNarrative: 'Dynamic micro-shadows provide razor-sharp 1px sub-surface contours preventing glyph washout.',
          evidentiaryProofPoint: 'Passed ANSI lumens contrast test on 3,000-lumen projectors.',
          isVerified: true,
        },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 06: Launch Readiness Checklist (launch-readiness-checklist)
// =============================================================================
export const createLaunchReadinessChecklistSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<LaunchReadinessChecklistSlideData>
): LaunchReadinessChecklistSlideData => ({
  id,
  type: 'launch-readiness-checklist',
  kicker: 'RELEASE GOVERNANCE',
  title: 'Production Launch Readiness & Stage-Gate Clearance',
  subtitle: 'Multi-Phase Quality Assurance, Security Auditing & Release Candidate Verification',
  releaseCandidateTag: 'v1.6.0-rc3',
  targetLaunchDate: '2026-10-15T00:00:00Z',
  isGoForLaunch: true,
  releaseCaptain: 'Alim Ul Karim',
  captainRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 5,
  stageGates: [
    {
      id: 'gate-01',
      gateIndex: 1,
      gateName: 'Architecture & Clean Code',
      gateOwner: 'Alim Ul Karim',
      ownerRole: 'Chief Software Engineer',
      isPassed: true,
      isBlocked: false,
      isActiveGate: true,
      verificationItems: [
        {
          id: 'v-01',
          itemDescription: 'Strict <= 100 lines per file component decomposition verified.',
          verifiedBy: 'CI/CD Auto-linter',
          verifiedTimestamp: '2026-10-03T12:00:00Z',
          isPassed: true,
          isBlocker: false,
          hasAutomatedVerification: true,
        },
        {
          id: 'v-02',
          itemDescription: '100% positive boolean naming convention verified across all contracts.',
          verifiedBy: 'CI/CD Auto-linter',
          verifiedTimestamp: '2026-10-03T12:00:00Z',
          isPassed: true,
          isBlocker: false,
          hasAutomatedVerification: true,
        },
      ],
    },
    {
      id: 'gate-02',
      gateIndex: 2,
      gateName: 'InfoSec & Zero-Trust Signoff',
      gateOwner: 'Sarah Chen',
      ownerRole: 'Security Director',
      isPassed: true,
      isBlocked: false,
      isActiveGate: false,
      verificationItems: [
        {
          id: 'v-03',
          itemDescription: 'ML-KEM-768 quantum-safe transport encryption verified on ingress.',
          verifiedBy: 'InfoSec Audit Vault',
          verifiedTimestamp: '2026-10-03T12:10:00Z',
          isPassed: true,
          isBlocker: true,
          hasAutomatedVerification: true,
        },
      ],
    },
    {
      id: 'gate-03',
      gateIndex: 3,
      gateName: 'Performance Benchmark Gate',
      gateOwner: 'Marcus Brody',
      ownerRole: 'SRE Lead',
      isPassed: true,
      isBlocked: false,
      isActiveGate: false,
      verificationItems: [
        {
          id: 'v-04',
          itemDescription: 'Sub-12ms render pipeline verified on baseline 60Hz and 120Hz displays.',
          verifiedBy: 'Synthetic Benchmark Suite',
          verifiedTimestamp: '2026-10-03T12:15:00Z',
          isPassed: true,
          isBlocker: false,
          hasAutomatedVerification: true,
        },
      ],
    },
    {
      id: 'gate-04',
      gateIndex: 4,
      gateName: 'SRE Canary Validation',
      gateOwner: 'Liam Scott',
      ownerRole: 'Reliability Engineer',
      isPassed: true,
      isBlocked: false,
      isActiveGate: false,
      verificationItems: [
        {
          id: 'v-05',
          itemDescription: '10% canary traffic rollout completed with zero error rate increase.',
          verifiedBy: 'Prometheus Alert Manager',
          verifiedTimestamp: '2026-10-03T12:20:00Z',
          isPassed: true,
          isBlocker: true,
          hasAutomatedVerification: true,
        },
      ],
    },
    {
      id: 'gate-05',
      gateIndex: 5,
      gateName: 'Legal & Regulatory Clearance',
      gateOwner: 'Diana Prince',
      ownerRole: 'General Counsel',
      isPassed: true,
      isBlocked: false,
      isActiveGate: false,
      verificationItems: [
        {
          id: 'v-06',
          itemDescription: 'Open source license compliance scan passed with zero GPL violations.',
          verifiedBy: 'Legal Compliance Scanner',
          verifiedTimestamp: '2026-10-03T12:25:00Z',
          isPassed: true,
          isBlocker: false,
          hasAutomatedVerification: true,
        },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 07: Developer Gateway Sandbox (developer-gateway-sandbox)
// =============================================================================
export const createDeveloperGatewaySandboxSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<DeveloperGatewaySandboxSlideData>
): DeveloperGatewaySandboxSlideData => ({
  id,
  type: 'developer-gateway-sandbox',
  kicker: 'DEVELOPER PLATFORM',
  title: 'Enterprise API Gateway Architecture & Execution Sandbox',
  subtitle: 'Edge Route Ingress, Cryptographic Token Verification & Low-Latency Dispatch',
  httpMethod: 'POST',
  endpointRoute: '/v1/presentations/render-stage',
  baseHost: 'https://gateway.enterprise.internal',
  responseStatus: 200,
  isMockEnabled: true,
  activeStep: 0,
  maxSteps: 4,
  requestHeaders: [
    { id: 'h-01', headerKey: 'Authorization', headerValue: 'Bearer sec-token-mlkem768-signed', isRequired: true, isEncrypted: true },
    { id: 'h-02', headerKey: 'Content-Type', headerValue: 'application/json', isRequired: true, isEncrypted: false },
    { id: 'h-03', headerKey: 'X-Tenant-Id', headerValue: 'org-enterprise-corp', isRequired: true, isEncrypted: false },
  ],
  requestBodyJson: '{\n  "slideId": "slide-finops-01",\n  "viewport": { "width": 1920, "height": 1080 },\n  "isPureDom": true\n}',
  responseBodyJson: '{\n  "status": "success",\n  "renderLatencyMs": 4.2,\n  "isLayoutDriftFree": true,\n  "fps": 120\n}',
  gatewayStages: [
    { id: 'stg-01', stageName: 'mTLS & Token Ingress', latencyMs: 1.2, statusBadge: 'AUTHENTICATED', isAuthorized: true, hasRateLimitHeadroom: true, isActiveStage: true },
    { id: 'stg-02', stageName: 'Route Regex Matching', latencyMs: 0.8, statusBadge: 'MATCHED', isAuthorized: true, hasRateLimitHeadroom: true, isActiveStage: false },
    { id: 'stg-03', stageName: 'Token Bucket Rate Limit', latencyMs: 0.5, statusBadge: 'ACCEPTED', isAuthorized: true, hasRateLimitHeadroom: true, isActiveStage: false },
    { id: 'stg-04', stageName: 'Upstream RPC Dispatch', latencyMs: 1.7, statusBadge: 'ROUTED', isAuthorized: true, hasRateLimitHeadroom: true, isActiveStage: false },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 08: RAG Pipeline Topology (rag-pipeline-topology)
// =============================================================================
export const createRagPipelineTopologySlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<RagPipelineTopologySlideData>
): RagPipelineTopologySlideData => ({
  id,
  type: 'rag-pipeline-topology',
  kicker: 'GENERATIVE AI',
  title: 'Enterprise RAG Pipeline Architecture & Semantic Search DAG',
  subtitle: 'Hybrid Vector Ingestion, Cross-Encoder Reranking & Sub-Second Latency Bounds',
  corpusDocumentCount: 12500000,
  vectorIndexName: 'enterprise-corpus-v4-hsnw',
  contextWindowBudgetTokens: 128000,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 5,
  indexMetrics: [
    { id: 'im-01', metricLabel: 'Precision@5', metricValue: '94.8%', hasTargetReached: true },
    { id: 'im-02', metricLabel: 'Cross-Encoder Latency', metricValue: '18.4ms', hasTargetReached: true },
    { id: 'im-03', metricLabel: 'Embedding Dimension', metricValue: '3,072', hasTargetReached: true },
  ],
  pipelineStages: [
    { id: 'rag-01', stageIndex: 1, stageName: 'Corpus Document Ingestion', modelIdentifier: 'apache-beam-parser', latencyMs: 12.0, throughputDocsSec: 8500, isDenseSearchEnabled: true, hasReRankerApplied: false, isActiveStage: true },
    { id: 'rag-02', stageIndex: 2, stageName: 'Recursive Token Chunking', modelIdentifier: 'tiktoken-cl100k', latencyMs: 8.5, throughputDocsSec: 12000, isDenseSearchEnabled: true, hasReRankerApplied: false, isActiveStage: false },
    { id: 'rag-03', stageIndex: 3, stageName: 'Hybrid Semantic Retrieval', modelIdentifier: 'text-embedding-3-large', latencyMs: 24.5, throughputDocsSec: 4500, isDenseSearchEnabled: true, hasReRankerApplied: false, isActiveStage: false },
    { id: 'rag-04', stageIndex: 4, stageName: 'Cross-Encoder Reranking', modelIdentifier: 'bge-reranker-large', latencyMs: 18.4, throughputDocsSec: 2800, isDenseSearchEnabled: true, hasReRankerApplied: true, isActiveStage: false },
    { id: 'rag-05', stageIndex: 5, stageName: 'LLM Context Assembly', modelIdentifier: 'gemini-1.5-pro', latencyMs: 45.0, throughputDocsSec: 1500, isDenseSearchEnabled: true, hasReRankerApplied: true, isActiveStage: false },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 09: SOC Incident War Room (soc-incident-war-room)
// =============================================================================
export const createSocIncidentWarRoomSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<SocIncidentWarRoomSlideData>
): SocIncidentWarRoomSlideData => ({
  id,
  type: 'soc-incident-war-room',
  kicker: 'CYBER DEFENSE',
  title: 'SOC Incident War Room: Rapid Containment',
  subtitle: 'Real-time Threat Neutralization, MITRE ATT&CK Defense & Zero-Trust Quarantine',
  incidentIdentifier: 'INC-2026-092',
  cvssSeverityScore: 9.8,
  severityGrade: 'CRITICAL',
  incidentCommander: 'Alim Ul Karim',
  commanderRole: 'Chief Software Engineer',
  isQuarantineActive: true,
  activeStep: 0,
  maxSteps: 4,
  attackVectors: [
    { id: 'vec-01', techniqueCode: 'T1078.004', techniqueName: 'Valid Cloud Accounts', tacticPhase: 'Initial Access', detectionSource: 'CloudTrail Anomaly Guard', isMitigated: true },
    { id: 'vec-02', techniqueCode: 'T1059.001', techniqueName: 'PowerShell Injection', tacticPhase: 'Execution', detectionSource: 'EDR Behavioral Agent', isMitigated: true },
    { id: 'vec-03', techniqueCode: 'T1567.002', techniqueName: 'Exfiltration Over Web Service', tacticPhase: 'Exfiltration', detectionSource: 'Egress TLS Inspector', isMitigated: true },
  ],
  incidentPhases: [
    {
      id: 'soc-ph-01',
      phaseIndex: 1,
      phaseName: 'Immediate Detection & Triage',
      durationMinutes: 4,
      isContained: true,
      isActivePhase: false,
      actions: [
        { id: 'act-01', actionTitle: 'SIEM Anomaly Alert Triggered', executionTimestamp: '2026-10-03T12:01:00Z', isAutomated: true, isCompleted: true },
      ],
    },
    {
      id: 'soc-ph-02',
      phaseIndex: 2,
      phaseName: 'Zero-Trust Quarantine & Containment',
      durationMinutes: 8,
      isContained: true,
      isActivePhase: true,
      actions: [
        { id: 'act-02', actionTitle: 'Automated Revocation of Ephemeral IAM Tokens', executionTimestamp: '2026-10-03T12:05:00Z', isAutomated: true, isCompleted: true },
        { id: 'act-03', actionTitle: 'VPC Security Group Egress Block Enacted', executionTimestamp: '2026-10-03T12:07:00Z', isAutomated: true, isCompleted: true },
      ],
    },
    {
      id: 'soc-ph-03',
      phaseIndex: 3,
      phaseName: 'Cryptographic Secret Rotation',
      durationMinutes: 15,
      isContained: false,
      isActivePhase: false,
      actions: [
        { id: 'act-04', actionTitle: 'Root CA Ingress Certificates Re-keyed', executionTimestamp: '2026-10-03T12:12:00Z', isAutomated: true, isCompleted: false },
      ],
    },
    {
      id: 'soc-ph-04',
      phaseIndex: 4,
      phaseName: 'Postmortem Hardening & Remediation',
      durationMinutes: 30,
      isContained: false,
      isActivePhase: false,
      actions: [
        { id: 'act-05', actionTitle: 'Formal 4-Part RCA and Policy Patch Dispatched', executionTimestamp: '2026-10-03T12:20:00Z', isAutomated: false, isCompleted: false },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 10: Merkle Tree State Ledger (merkle-tree-state-ledger)
// =============================================================================
export const createMerkleTreeStateLedgerSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<MerkleTreeStateLedgerSlideData>
): MerkleTreeStateLedgerSlideData => ({
  id,
  type: 'merkle-tree-state-ledger',
  kicker: 'CRYPTOGRAPHIC ASSURANCE',
  title: 'Cryptographic State Ledger & Merkle Proof Inclusion',
  subtitle: 'Hierarchical Hash Tree Validation, Tamper-Evident Blocks & Audit Assurance',
  rootStateHash: '0x8f2a41d99b0c27e8a93ef01824ab11993b4a',
  blockNumber: 14892100,
  algorithmName: 'SHA-256 Merkle-Tree-Verify',
  auditedBy: 'Alim Ul Karim',
  auditorRole: 'Chief Software Engineer',
  isRootFinalized: true,
  activeStep: 0,
  maxSteps: 3,
  leafNodes: [
    { id: 'leaf-01', leafIndex: 0, payloadHash: '0x41c8812fa91', transactionData: 'State Mutation: Upgrade Presentation Engine to v1.6.0', isProofVerified: true },
    { id: 'leaf-02', leafIndex: 1, payloadHash: '0x7b233e08f22', transactionData: 'Token Issuance: Grant 100k Sovereign Presentation Tokens', isProofVerified: true },
    { id: 'leaf-03', leafIndex: 2, payloadHash: '0x99e4f012c88', transactionData: 'Policy Attestation: Sign Zero-Trust Security Charter', isProofVerified: true },
    { id: 'leaf-04', leafIndex: 3, payloadHash: '0x55d1a733b49', transactionData: 'Key Rotation: Rotate ML-KEM-768 Ingress Credentials', isProofVerified: true },
  ],
  verificationSteps: [
    { id: 'v-step-01', stepIndex: 1, levelName: 'Leaf Pair Hash Aggregation', leftHash: '0x41c8812fa91', rightHash: '0x7b233e08f22', combinedHash: '0x3a91f42d99', isVerified: true, isActiveStep: true },
    { id: 'v-step-02', stepIndex: 2, levelName: 'Branch Hash L1 Verification', leftHash: '0x3a91f42d99', rightHash: '0x88c21a4f01', combinedHash: '0x7e44a90c12', isVerified: true, isActiveStep: false },
    { id: 'v-step-03', stepIndex: 3, levelName: 'Root Hash Finalization', leftHash: '0x7e44a90c12', rightHash: '0x12bb45ea98', combinedHash: '0x8f2a41d99b0c27e8a93ef01824ab11993b4a', isVerified: true, isActiveStep: false },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 11: Investor Cap Table Waterfall (investor-cap-table-waterfall)
// =============================================================================
export const createInvestorCapTableWaterfallSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<InvestorCapTableWaterfallSlideData>
): InvestorCapTableWaterfallSlideData => ({
  id,
  type: 'investor-cap-table-waterfall',
  kicker: 'VENTURE FINANCE',
  title: 'Capitalization Table & Liquidation Waterfall',
  subtitle: 'Institutional Equity Tranches, Seniority Rights & Multi-Scenario Proceeds Distribution',
  currentValuationUsd: 250000000,
  totalSharesOutstanding: 50000000,
  unallocatedOptionPoolPercent: 12.5,
  chiefArchitect: 'Alim Ul Karim',
  architectRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  shareClasses: [
    { id: 'sc-01', shareClassName: 'Series B Preferred', ownershipPercent: 28.0, shareCount: 14000000, liquidationPreferenceMultiple: 1.0, isPreferredShare: true, hasLiquidationCap: true },
    { id: 'sc-02', shareClassName: 'Series A Preferred', ownershipPercent: 22.0, shareCount: 11000000, liquidationPreferenceMultiple: 1.0, isPreferredShare: true, hasLiquidationCap: true },
    { id: 'sc-03', shareClassName: 'Founders Common', ownershipPercent: 38.0, shareCount: 19000000, liquidationPreferenceMultiple: 0.0, isPreferredShare: false, hasLiquidationCap: false },
    { id: 'sc-04', shareClassName: 'Employee Option Pool', ownershipPercent: 12.0, shareCount: 6000000, liquidationPreferenceMultiple: 0.0, isPreferredShare: false, hasLiquidationCap: false },
  ],
  waterfallTiers: [
    { id: 'tier-01', exitValuationUsd: 250000000, proceedsUsd: 70000000, payoutRank: 1, isFullyDiluted: true },
    { id: 'tier-02', exitValuationUsd: 500000000, proceedsUsd: 140000000, payoutRank: 2, isFullyDiluted: true },
    { id: 'tier-03', exitValuationUsd: 1000000000, proceedsUsd: 280000000, payoutRank: 3, isFullyDiluted: true },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 12: Real-Time Event Stream Fabric (realtime-event-stream-fabric)
// =============================================================================
export const createRealtimeEventStreamFabricSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<RealtimeEventStreamFabricSlideData>
): RealtimeEventStreamFabricSlideData => ({
  id,
  type: 'realtime-event-stream-fabric',
  kicker: 'STREAMING ARCHITECTURE',
  title: 'Real-Time Event Streaming Topology & Partition Fabric',
  subtitle: 'High-Throughput Pub/Sub Message Bus, Zero Consumer Lag & Fault Isolation',
  clusterRegion: 'Global Anycast Multi-Region',
  aggregateThroughputEps: 2400000,
  totalDeadLetterQueueEvents: 0,
  principalEngineer: 'Alim Ul Karim',
  engineerRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  topics: [
    { id: 'top-01', topicName: 'presentation.events.v1', partitionCount: 32, eventsPerSecond: 1200000, replicationFactor: 3, isHealthy: true, isPartitionBalanced: true },
    { id: 'top-02', topicName: 'presentation.telemetry.v1', partitionCount: 16, eventsPerSecond: 800000, replicationFactor: 3, isHealthy: true, isPartitionBalanced: true },
    { id: 'top-03', topicName: 'audit.security-ledger.v1', partitionCount: 8, eventsPerSecond: 400000, replicationFactor: 3, isHealthy: true, isPartitionBalanced: true },
  ],
  consumerGroups: [
    { id: 'cg-01', groupName: 'live-websocket-fanout', targetTopic: 'presentation.events.v1', lagOffsets: 0, commitLatencyMs: 2.4, hasLagAlert: false },
    { id: 'cg-02', groupName: 'clickhouse-analytics-drain', targetTopic: 'presentation.telemetry.v1', lagOffsets: 42, commitLatencyMs: 12.1, hasLagAlert: false },
    { id: 'cg-03', groupName: 'sovereign-ledger-committer', targetTopic: 'audit.security-ledger.v1', lagOffsets: 0, commitLatencyMs: 1.8, hasLagAlert: false },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 13: Supply Chain Risk Matrix (supply-chain-risk-matrix)
// =============================================================================
export const createSupplyChainRiskMatrixSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<SupplyChainRiskMatrixSlideData>
): SupplyChainRiskMatrixSlideData => ({
  id,
  type: 'supply-chain-risk-matrix',
  kicker: 'OPERATIONS RESILIENCE',
  title: 'Global Supply Chain Resilience & Dependency Risk Matrix',
  subtitle: 'Tier 1-3 Supplier Governance, Single-Point-of-Failure Elimination & Buffer Assurance',
  overallSupplyResilienceScore: 94.2,
  totalMonitoredSuppliers: 84,
  criticalSpofCount: 0,
  riskDirector: 'Alim Ul Karim',
  directorRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  vendors: [
    { id: 'ven-01', vendorName: 'Sovereign Silicon Semiconductor', tierLevel: 1, componentProvided: 'Hardware Security Modules', riskScorePercent: 12.0, leadTimeWeeks: 4, isCriticalVendor: true, hasSinglePointOfFailure: false },
    { id: 'ven-02', vendorName: 'Global Optical Fiber Transit', tierLevel: 1, componentProvided: 'Subsea Dark Fiber Interconnect', riskScorePercent: 8.5, leadTimeWeeks: 2, isCriticalVendor: true, hasSinglePointOfFailure: false },
    { id: 'ven-03', vendorName: 'Cloud Infrastructure Foundry', tierLevel: 2, componentProvided: 'Bare Metal Hypervisors', riskScorePercent: 15.0, leadTimeWeeks: 6, isCriticalVendor: false, hasSinglePointOfFailure: false },
  ],
  riskFactors: [
    { id: 'rf-01', regionName: 'Western Europe', riskCategory: 'Regulatory Data Sovereignty', impactScore: 15, mitigationStrategy: 'All customer data resides strictly on in-jurisdiction servers.', isMitigationBufferActive: true },
    { id: 'rf-02', regionName: 'North America Data Hubs', riskCategory: 'Grid Power Fluctuations', impactScore: 10, mitigationStrategy: 'Dual off-grid battery energy storage systems provisioned.', isMitigationBufferActive: true },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 14: Talent Competency Radar (talent-competency-radar)
// =============================================================================
export const createTalentCompetencyRadarSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<TalentCompetencyRadarSlideData>
): TalentCompetencyRadarSlideData => ({
  id,
  type: 'talent-competency-radar',
  kicker: 'TALENT ARCHITECTURE',
  title: 'Engineering Competency Framework & Executive Seniority Ladder',
  subtitle: 'Multidimensional Technical Evaluation from Software Engineer to Chief Engineer',
  frameworkName: 'Universal Engineering Ladder v4',
  targetRoleTrack: 'Systems & Presentation Architecture',
  evaluatorName: 'Alim Ul Karim',
  evaluatorRole: 'Chief Software Engineer',
  hasPromotionalRecommendation: true,
  activeStep: 0,
  maxSteps: 5,
  levelMilestones: [
    {
      id: 'lvl-l4',
      levelCode: 'L4',
      levelTitle: 'Software Engineer',
      scopeSummary: 'Delivers well-scoped components with unit test coverage.',
      isCertifiedCompetency: true,
      isActiveLevel: false,
      competencyAxes: [
        { id: 'tax-41', axisName: 'System Architecture', requiredScorePercent: 60, evaluatedScorePercent: 65, isBenchmarkMet: true },
        { id: 'tax-42', axisName: 'Technical Craftsmanship', requiredScorePercent: 70, evaluatedScorePercent: 75, isBenchmarkMet: true },
        { id: 'tax-43', axisName: 'Leadership & Mentorship', requiredScorePercent: 50, evaluatedScorePercent: 55, isBenchmarkMet: true },
        { id: 'tax-44', axisName: 'Operational Velocity', requiredScorePercent: 65, evaluatedScorePercent: 70, isBenchmarkMet: true },
        { id: 'tax-45', axisName: 'Business Impact', requiredScorePercent: 55, evaluatedScorePercent: 60, isBenchmarkMet: true },
      ],
    },
    {
      id: 'lvl-l5',
      levelCode: 'L5',
      levelTitle: 'Senior Engineer',
      scopeSummary: 'Architects subsystem modules and leads code quality initiatives.',
      isCertifiedCompetency: true,
      isActiveLevel: false,
      competencyAxes: [
        { id: 'tax-51', axisName: 'System Architecture', requiredScorePercent: 75, evaluatedScorePercent: 80, isBenchmarkMet: true },
        { id: 'tax-52', axisName: 'Technical Craftsmanship', requiredScorePercent: 80, evaluatedScorePercent: 85, isBenchmarkMet: true },
        { id: 'tax-53', axisName: 'Leadership & Mentorship', requiredScorePercent: 65, evaluatedScorePercent: 70, isBenchmarkMet: true },
        { id: 'tax-54', axisName: 'Operational Velocity', requiredScorePercent: 75, evaluatedScorePercent: 80, isBenchmarkMet: true },
        { id: 'tax-55', axisName: 'Business Impact', requiredScorePercent: 70, evaluatedScorePercent: 75, isBenchmarkMet: true },
      ],
    },
    {
      id: 'lvl-l6',
      levelCode: 'L6',
      levelTitle: 'Staff Engineer',
      scopeSummary: 'Directs cross-team domain architecture and cross-platform designs.',
      isCertifiedCompetency: true,
      isActiveLevel: false,
      competencyAxes: [
        { id: 'tax-61', axisName: 'System Architecture', requiredScorePercent: 85, evaluatedScorePercent: 88, isBenchmarkMet: true },
        { id: 'tax-62', axisName: 'Technical Craftsmanship', requiredScorePercent: 88, evaluatedScorePercent: 90, isBenchmarkMet: true },
        { id: 'tax-63', axisName: 'Leadership & Mentorship', requiredScorePercent: 80, evaluatedScorePercent: 82, isBenchmarkMet: true },
        { id: 'tax-64', axisName: 'Operational Velocity', requiredScorePercent: 82, evaluatedScorePercent: 85, isBenchmarkMet: true },
        { id: 'tax-65', axisName: 'Business Impact', requiredScorePercent: 80, evaluatedScorePercent: 85, isBenchmarkMet: true },
      ],
    },
    {
      id: 'lvl-l7',
      levelCode: 'L7',
      levelTitle: 'Principal Engineer',
      scopeSummary: 'Establishes company-wide standards and scalable platforms.',
      isCertifiedCompetency: true,
      isActiveLevel: false,
      competencyAxes: [
        { id: 'tax-71', axisName: 'System Architecture', requiredScorePercent: 92, evaluatedScorePercent: 94, isBenchmarkMet: true },
        { id: 'tax-72', axisName: 'Technical Craftsmanship', requiredScorePercent: 92, evaluatedScorePercent: 95, isBenchmarkMet: true },
        { id: 'tax-73', axisName: 'Leadership & Mentorship', requiredScorePercent: 88, evaluatedScorePercent: 90, isBenchmarkMet: true },
        { id: 'tax-74', axisName: 'Operational Velocity', requiredScorePercent: 88, evaluatedScorePercent: 90, isBenchmarkMet: true },
        { id: 'tax-75', axisName: 'Business Impact', requiredScorePercent: 90, evaluatedScorePercent: 92, isBenchmarkMet: true },
      ],
    },
    {
      id: 'lvl-l8',
      levelCode: 'L8',
      levelTitle: 'Chief Software Engineer',
      scopeSummary: 'Defines enterprise presentation engines, zero-drift architectures, and distributed streaming fabrics across all corporate entities.',
      isCertifiedCompetency: true,
      isActiveLevel: true,
      competencyAxes: [
        { id: 'tax-81', axisName: 'System Architecture', requiredScorePercent: 95, evaluatedScorePercent: 99, isBenchmarkMet: true },
        { id: 'tax-82', axisName: 'Technical Craftsmanship', requiredScorePercent: 95, evaluatedScorePercent: 100, isBenchmarkMet: true },
        { id: 'tax-83', axisName: 'Leadership & Mentorship', requiredScorePercent: 92, evaluatedScorePercent: 98, isBenchmarkMet: true },
        { id: 'tax-84', axisName: 'Operational Velocity', requiredScorePercent: 92, evaluatedScorePercent: 96, isBenchmarkMet: true },
        { id: 'tax-85', axisName: 'Business Impact', requiredScorePercent: 95, evaluatedScorePercent: 98, isBenchmarkMet: true },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 15: Sustainability ESG Scorecard (sustainability-esg-scorecard)
// =============================================================================
export const createSustainabilityEsgScorecardSlide = (
  id = `slide-${Date.now()}`,
  overrides?: Partial<SustainabilityEsgScorecardSlideData>
): SustainabilityEsgScorecardSlideData => ({
  id,
  type: 'sustainability-esg-scorecard',
  kicker: 'ESG GOVERNANCE',
  title: 'Corporate Sustainability & Carbon Neutrality Scorecard',
  subtitle: 'Scope 1-3 Greenhouse Gas Telemetry, Renewable Energy PPAs & Net-Zero 2030 Alignment',
  reportingFiscalYear: 'FY2026',
  totalCarbonFootprintMetricTons: 4200,
  renewableEnergyPercent: 98.4,
  esgRatingGrade: 'AAA',
  sustainabilityLead: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  hasRegulatorySignoff: true,
  activeStep: 0,
  maxSteps: 1,
  scopes: [
    { id: 'sc-01', scopeTier: 'Scope 1', emissionsMetricTonsCo2e: 480, yearOverYearReductionPercent: 34.2, offsetPercentage: 100.0, isNetZeroAligned: true },
    { id: 'sc-02', scopeTier: 'Scope 2', emissionsMetricTonsCo2e: 920, yearOverYearReductionPercent: 58.0, offsetPercentage: 100.0, isNetZeroAligned: true },
    { id: 'sc-03', scopeTier: 'Scope 3', emissionsMetricTonsCo2e: 2800, yearOverYearReductionPercent: 26.5, offsetPercentage: 92.0, isNetZeroAligned: true },
  ],
  cleanEnergyContracts: [
    { id: 'ppa-01', contractName: 'Solar Horizon PPA I', energySource: 'solar', capacityMegawatts: 120, isPpaActive: true, isVerifiedOffset: true },
    { id: 'ppa-02', contractName: 'Offshore Wind PPA Beta', energySource: 'wind', capacityMegawatts: 85, isPpaActive: true, isVerifiedOffset: true },
    { id: 'ppa-03', contractName: 'Geothermal Base Load Gamma', energySource: 'geothermal', capacityMegawatts: 40, isPpaActive: true, isVerifiedOffset: true },
  ],
  ...overrides,
});

// =============================================================================
// Master Factories Record & Dispatch Helpers
// =============================================================================
export const GLOBAL_PPT_SUITE_FACTORIES: Record<
  GlobalPptSuiteSlideType,
  (id?: string, overrides?: any) => GlobalPptSuiteSlideData
> = {
  'executive-governance-matrix': createExecutiveGovernanceMatrixSlide,
  'okr-cascade-alignment': createOkrCascadeAlignmentSlide,
  'cloud-cost-finops-optimizer': createCloudCostFinopsOptimizerSlide,
  'customer-sentiment-radar': createCustomerSentimentRadarSlide,
  'competitive-battlecard': createCompetitiveBattlecardSlide,
  'launch-readiness-checklist': createLaunchReadinessChecklistSlide,
  'developer-gateway-sandbox': createDeveloperGatewaySandboxSlide,
  'rag-pipeline-topology': createRagPipelineTopologySlide,
  'soc-incident-war-room': createSocIncidentWarRoomSlide,
  'merkle-tree-state-ledger': createMerkleTreeStateLedgerSlide,
  'investor-cap-table-waterfall': createInvestorCapTableWaterfallSlide,
  'realtime-event-stream-fabric': createRealtimeEventStreamFabricSlide,
  'supply-chain-risk-matrix': createSupplyChainRiskMatrixSlide,
  'talent-competency-radar': createTalentCompetencyRadarSlide,
  'sustainability-esg-scorecard': createSustainabilityEsgScorecardSlide,
};

export function createGlobalPptSlideDefaults(
  type: GlobalPptSuiteSlideType,
  id?: string
): GlobalPptSuiteSlideData {
  const factory = GLOBAL_PPT_SUITE_FACTORIES[type];
  if (factory) {
    return factory(id);
  }
  return createExecutiveGovernanceMatrixSlide(id);
}

export function createAllGlobalPptSuiteSlides(): GlobalPptSuiteSlideData[] {
  return [
    createExecutiveGovernanceMatrixSlide(),
    createOkrCascadeAlignmentSlide(),
    createCloudCostFinopsOptimizerSlide(),
    createCustomerSentimentRadarSlide(),
    createCompetitiveBattlecardSlide(),
    createLaunchReadinessChecklistSlide(),
    createDeveloperGatewaySandboxSlide(),
    createRagPipelineTopologySlide(),
    createSocIncidentWarRoomSlide(),
    createMerkleTreeStateLedgerSlide(),
    createInvestorCapTableWaterfallSlide(),
    createRealtimeEventStreamFabricSlide(),
    createSupplyChainRiskMatrixSlide(),
    createTalentCompetencyRadarSlide(),
    createSustainabilityEsgScorecardSlide(),
  ];
}

// =============================================================================
// Global PPT Suite Archetype Options
// =============================================================================
export const GLOBAL_PPT_SUITE_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  {
    type: 'executive-governance-matrix',
    label: 'Executive Governance Matrix',
    category: 'Executive & Governance',
    desc: 'Board Committee Oversight & Governance Pillars',
    icon: 'Shield',
  },
  {
    type: 'okr-cascade-alignment',
    label: 'OKR Cascade Alignment',
    category: 'Strategy & Leadership',
    desc: 'Company Vision to Quarterly Key Results Cascade',
    icon: 'Target',
  },
  {
    type: 'cloud-cost-finops-optimizer',
    label: 'Cloud FinOps Optimizer',
    category: 'Infrastructure & Cloud',
    desc: 'Multi-Cloud Unit Economics & Wastage Levers',
    icon: 'DollarSign',
  },
  {
    type: 'customer-sentiment-radar',
    label: 'Customer Sentiment Radar',
    category: 'Customer & Market',
    desc: 'Multi-Axis NPS/CSAT Radar & Cohort Insights',
    icon: 'Radar',
  },
  {
    type: 'competitive-battlecard',
    label: 'Competitive Battlecard',
    category: 'Customer & Market',
    desc: 'Competitor Parity Matrix & Strategic Moats',
    icon: 'Swords',
  },
  {
    type: 'launch-readiness-checklist',
    label: 'Launch Readiness Checklist',
    category: 'Delivery & Release',
    desc: 'Production Stage-Gate & Go/No-Go Blocker Check',
    icon: 'CheckSquare',
  },
  {
    type: 'developer-gateway-sandbox',
    label: 'Developer Gateway Sandbox',
    category: 'Developer Platform',
    desc: 'API Gateway Routing, Auth & Mock Telemetry',
    icon: 'Terminal',
  },
  {
    type: 'rag-pipeline-topology',
    label: 'RAG Pipeline Topology',
    category: 'AI & Machine Learning',
    desc: 'Retrieval-Augmented Generation 5-Stage DAG',
    icon: 'Network',
  },
  {
    type: 'soc-incident-war-room',
    label: 'SOC Incident War Room',
    category: 'Security & Resilience',
    desc: 'Real-time Incident Triage & MITRE Containment',
    icon: 'AlertTriangle',
  },
  {
    type: 'merkle-tree-state-ledger',
    label: 'Merkle Tree State Ledger',
    category: 'Security & Resilience',
    desc: 'Cryptographic State Ledger & Root Verification',
    icon: 'GitCommit',
  },
  {
    type: 'investor-cap-table-waterfall',
    label: 'Investor Cap Table Waterfall',
    category: 'Strategy & Leadership',
    desc: 'Venture Capital Equity Tranches & Waterfall Model',
    icon: 'PieChart',
  },
  {
    type: 'realtime-event-stream-fabric',
    label: 'Realtime Event Stream Fabric',
    category: 'Infrastructure & Cloud',
    desc: 'Pub/Sub Streaming Fabric, Partitions & Lag',
    icon: 'Activity',
  },
  {
    type: 'supply-chain-risk-matrix',
    label: 'Supply Chain Risk Matrix',
    category: 'Operations & Resilience',
    desc: 'Tier 1/2/3 Vendor Vulnerability & Buffer Telemetry',
    icon: 'Truck',
  },
  {
    type: 'talent-competency-radar',
    label: 'Talent Competency Radar',
    category: 'Talent & Culture',
    desc: 'Engineering Seniority Matrix L4-L8 Radar',
    icon: 'Award',
  },
  {
    type: 'sustainability-esg-scorecard',
    label: 'Sustainability ESG Scorecard',
    category: 'Operations & Resilience',
    desc: 'Scope 1/2/3 Emissions & Clean Energy PPA Scorecard',
    icon: 'Leaf',
  },
];
