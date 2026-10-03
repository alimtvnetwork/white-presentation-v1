import type { SlideType } from '../types/presentation';
import type {
  ExtendedSlideData,
  ExtendedSlideType,
  PersonalVpnSlideData,
  MeetingTranscriptSlideData,
  LlmBenchmarkSlideData,
  ServicesGravitySlideData,
  SeoDominanceSlideData,
  StaffAugPipelineSlideData,
  CraftsmanshipBenchmarkSlideData,
  WeeklyCadenceSlideData,
  CompetitiveMoatSlideData,
  RapidFeedbackSlideData,
  InteractivePollSlideData,
  LiveQaSlideData,
  EmbedStageSlideData,
  CountdownLaunchSlideData,
  ExecutiveTakeawaysSlideData,
  // Legacy types
  LegacyExtendedSlideData,
  GrowthEngineSlideData,
  TalentPyramidSlideData,
  CostComparisonSlideData,
  DailyWorkCultureSlideData,
  OurWorkShowcaseSlideData,
  ExecutiveDuoSlideData,
  AfterSalesSupportSlideData,
  SearchSerpProofSlideData,
  ContentCalendarSlideData,
  MindsetShiftSlideData,
  SessionOutlineSlideData,
  RevealGridSlideData,
  CounterStatSlideData,
  PollSurveySlideData,
  TypewriterPromptSlideData,
  DepthStackSlideData,
  BeforeAfterShowcaseSlideData,
} from '../types/extendedArchetypes';

// =============================================================================
// The 15 Extended Slide Archetype Factories
// =============================================================================

// 01. Personal VPN Slide
export const createPersonalVpnSlide = (id = `slide-${Date.now()}`): PersonalVpnSlideData => ({
  id,
  type: 'personal-vpn',
  title: 'Consumer Infrastructure & Sovereign Network Mesh',
  subtitle: 'Bare-metal FreeBSD edge nodes with WireGuard ChaCha20-Poly1305 encryption',
  kicker: 'ZERO-TRUST EDGE',
  themeId: 'true-dark',
  activeStep: 0,
  activeProtocol: 'WireGuard',
  encryptionSuite: 'ChaCha20-Poly1305 + Curve25519',
  totalServersCount: 320,
  totalCountriesCount: 29,
  nodes: [
    {
      id: 'node-fra',
      city: 'Frankfurt',
      country: 'Germany',
      ipAddress: '198.51.100.12',
      latencyMs: 12,
      bandwidthGbps: 10.0,
      serverLoadPct: 34,
      osDistribution: 'FreeBSD',
      isKillSwitchActive: true,
      isVerifiedAudit: true,
    },
    {
      id: 'node-tyo',
      city: 'Tokyo',
      country: 'Japan',
      ipAddress: '198.51.100.42',
      latencyMs: 18,
      bandwidthGbps: 10.0,
      serverLoadPct: 52,
      osDistribution: 'FreeBSD',
      isKillSwitchActive: true,
      isVerifiedAudit: true,
    },
    {
      id: 'node-sin',
      city: 'Singapore',
      country: 'Singapore',
      ipAddress: '198.51.100.88',
      latencyMs: 24,
      bandwidthGbps: 10.0,
      serverLoadPct: 28,
      osDistribution: 'FreeBSD',
      isKillSwitchActive: true,
      isVerifiedAudit: true,
    },
  ],
  networkSummaryNotes: 'Zero log persistence verified across all 29 sovereign jurisdictions.',
});

// 02. Meeting Transcript Slide
export const createMeetingTranscriptSlide = (id = `slide-${Date.now()}`): MeetingTranscriptSlideData => ({
  id,
  type: 'meeting-transcript',
  title: 'Real-Time Meeting Diarization & Synchronized Multi-Device Fabric',
  subtitle: 'Continuous speaker turn attribution with sub-16ms CRDT multi-device state synchronization',
  kicker: 'AUDIO INTELLIGENCE',
  themeId: 'midnight-luxe',
  activeStep: 0,
  meetingTitle: 'Executive Engineering Council - Q4 Architecture Sync',
  meetingDate: 'October 3, 2026',
  durationFormatted: '00:45:18',
  isLiveRecording: true,
  speakerTurns: [
    {
      id: 'turn-01',
      speakerName: 'Sarah Chen',
      speakerRole: 'VP of Infrastructure',
      timestamp: '00:04:12',
      utterance: 'We have consolidated the distributed ledger nodes into 3 bare-metal regions with automatic failover.',
      speakerColor: '#008DDA',
      sentimentTag: 'decisive',
    },
    {
      id: 'turn-02',
      speakerName: 'Alim Ul Karim',
      speakerRole: 'Chief Software Engineer',
      timestamp: '00:05:08',
      utterance: 'The consensus round latency is down to 42ms with zero frame drops. Pure live DOM rendering is mathematically verified.',
      speakerColor: '#6366F1',
      sentimentTag: 'constructive',
      hasAccentHighlight: true,
    },
    {
      id: 'turn-03',
      speakerName: 'Elena Rostova',
      speakerRole: 'Product Lead',
      timestamp: '00:06:15',
      utterance: 'Executive steering committee confirmed deployment schedule for tomorrow morning.',
      speakerColor: '#10B981',
      sentimentTag: 'decisive',
    },
  ],
  syncedDevices: [
    {
      id: 'dev-01',
      deviceName: 'MacBook Pro 16"',
      deviceType: 'desktop',
      syncState: 'Ingesting 48kHz Audio Stream',
      latencyMs: 0,
      isPrimaryHost: true,
    },
    {
      id: 'dev-02',
      deviceName: 'iPhone 16 Pro',
      deviceType: 'phone',
      syncState: 'CRDT Real-Time Sync Active',
      latencyMs: 14,
      isPrimaryHost: false,
    },
    {
      id: 'dev-03',
      deviceName: 'iPad Pro 13"',
      deviceType: 'tablet',
      syncState: 'Stage Display Visualizer',
      latencyMs: 16,
      isPrimaryHost: false,
    },
  ],
});

// 03. LLM Benchmark Slide
export const createLlmBenchmarkSlide = (id = `slide-${Date.now()}`): LlmBenchmarkSlideData => ({
  id,
  type: 'llm-benchmark',
  title: 'Enterprise LLM Arena & Private Stream Benchmark',
  subtitle: 'Real-time comparison of Time-To-First-Token, generation speed, and sovereign privacy',
  kicker: 'AI BENCHMARK',
  themeId: 'cyber-neon',
  activeStep: 0,
  benchmarkDatasetName: 'Enterprise Code Synthesis & Financial Reasoning v4.2',
  hardwarePlatform: '8x NVIDIA H100 SXM5 / PCIe 5.0',
  peakThroughput: '184 tok/s',
  lowestLatency: '85ms TTFT',
  models: [
    {
      id: 'model-claude',
      modelName: 'Claude 3.7 Sonnet',
      provider: 'Anthropic Cloud',
      timeToFirstTokenMs: 240,
      tokensPerSec: 92,
      contextWindow: '200k',
      isPrivateOnDevice: false,
      isLeader: false,
      sampleStreamChunk: 'Synthesizing event fabric topology and distributed cluster constraints...',
      evaluationScorePct: 94.6,
    },
    {
      id: 'model-llama-sovereign',
      modelName: 'Llama-3-70B Sovereign',
      provider: 'On-Prem Private Cluster',
      timeToFirstTokenMs: 85,
      tokensPerSec: 184,
      contextWindow: '128k',
      isPrivateOnDevice: true,
      isLeader: true,
      sampleStreamChunk: 'Executing zero-latency memory kernel; verified zero external data transmission.',
      evaluationScorePct: 96.2,
    },
    {
      id: 'model-gemini',
      modelName: 'Gemini 2.0 Flash',
      provider: 'Google Cloud',
      timeToFirstTokenMs: 140,
      tokensPerSec: 145,
      contextWindow: '1M',
      isPrivateOnDevice: false,
      isLeader: false,
      sampleStreamChunk: 'Streaming high-frequency token vector responses with multimodal grounding.',
      evaluationScorePct: 93.8,
    },
  ],
  evaluationCriteriaNotes: 'Evaluated under FP16 tensor core precision with automated reproducibility harnesses.',
});

// 04. Services Gravity Slide
export const createServicesGravitySlide = (id = `slide-${Date.now()}`): ServicesGravitySlideData => ({
  id,
  type: 'services-gravity',
  title: 'Services Bubble Gravity & Core Orbital Topology',
  subtitle: 'Force-directed physics simulation of microservices orbiting sovereign Core Event Fabric',
  kicker: 'SYSTEM TOPOLOGY',
  themeId: 'wp-exam-purple',
  activeStep: 0,
  coreSunTitle: 'Sovereign Event Core',
  coreSunSubtitle: '142k events/sec Zero-Copy Bus',
  physicsPreset: 'servicesDefault',
  services: [
    {
      id: 'svc-auth',
      name: 'Auth & RBAC Mesh',
      category: 'Identity',
      orbitRadiusPx: 180,
      orbitSpeedDeg: 12,
      bubbleSizePx: 110,
      slaAvailability: '99.999%',
      throughputKps: 48.5,
      p99LatencyMs: 1.8,
      isMissionCritical: true,
    },
    {
      id: 'svc-billing',
      name: 'Billing & Ledger',
      category: 'Commerce',
      orbitRadiusPx: 240,
      orbitSpeedDeg: 8,
      bubbleSizePx: 105,
      slaAvailability: '99.995%',
      throughputKps: 12.4,
      p99LatencyMs: 3.4,
      isMissionCritical: true,
    },
    {
      id: 'svc-ai',
      name: 'AI Inference Mesh',
      category: 'Compute',
      orbitRadiusPx: 310,
      orbitSpeedDeg: 6,
      bubbleSizePx: 125,
      slaAvailability: '99.990%',
      throughputKps: 22.8,
      p99LatencyMs: 8.5,
      isMissionCritical: true,
    },
    {
      id: 'svc-search',
      name: 'Vector Search Cluster',
      category: 'Storage',
      orbitRadiusPx: 380,
      orbitSpeedDeg: 4,
      bubbleSizePx: 115,
      slaAvailability: '99.990%',
      throughputKps: 34.0,
      p99LatencyMs: 6.1,
      isMissionCritical: false,
    },
  ],
  gravitySummaryNotes: 'Dynamic spring stiffness (k=0.08) and orbital damping prevent satellite collision.',
});

// 05. SEO Dominance Slide
export const createSeoDominanceSlide = (id = `slide-${Date.now()}`): SeoDominanceSlideData => ({
  id,
  type: 'seo-dominance',
  title: 'SEO Evolution: 10-Year Search Dominance Matrix',
  subtitle: 'The 4-era structural transition from keyword stuffing to zero-click AI Overviews',
  kicker: 'ORGANIC ARCHITECTURE',
  themeId: 'emerald-growth',
  activeStep: 0,
  historicCtrDropPct: 48.2,
  zeroClickQueryPct: 58.5,
  strategicTakeawayQuote: 'Survival in 2025 demands direct brand recall, verified entity authority, and sub-second technical speed.',
  eras: [
    {
      id: 'era-2015',
      yearRange: '2015-2017',
      eraName: 'Keyword Relevance',
      primaryRankingSignal: 'Keyword Density & Meta Tags',
      difficultyScorePct: 22,
      tacticsSummary: 'High volume blogging, exact-match anchor links',
      isCurrentEra: false,
    },
    {
      id: 'era-2018',
      yearRange: '2018-2020',
      eraName: 'Domain Authority',
      primaryRankingSignal: 'Backlink Velocity & PageRank',
      difficultyScorePct: 54,
      tacticsSummary: 'Digital PR campaigns, skyscraper content assets',
      isCurrentEra: false,
    },
    {
      id: 'era-2021',
      yearRange: '2021-2024',
      eraName: 'Experience & Trust (EEAT)',
      primaryRankingSignal: 'Core Web Vitals & First-Hand Proof',
      difficultyScorePct: 78,
      tacticsSummary: 'Sub-second LCP, author entity schemas, original research',
      isCurrentEra: false,
    },
    {
      id: 'era-2025',
      yearRange: '2025-2027',
      eraName: 'AI Engine Optimization (AEO)',
      primaryRankingSignal: 'Direct Citation in Generative Answers',
      difficultyScorePct: 96,
      tacticsSummary: 'Structured knowledge graphs, conversational brand presence',
      isCurrentEra: true,
    },
  ],
  auditGrid: [
    { id: 'aud-1', metricName: 'Interaction to Next Paint (INP)', benchmarkTarget: '< 50ms', achievedValue: '32ms', scorePct: 100, isPassingScore: true },
    { id: 'aud-2', metricName: 'Largest Contentful Paint (LCP)', benchmarkTarget: '< 1.2s', achievedValue: '0.74s', scorePct: 99, isPassingScore: true },
    { id: 'aud-3', metricName: 'Cumulative Layout Shift (CLS)', benchmarkTarget: '< 0.05', achievedValue: '0.000', scorePct: 100, isPassingScore: true },
    { id: 'aud-4', metricName: 'JSON-LD Entity Graph Coverage', benchmarkTarget: '100%', achievedValue: '100%', scorePct: 100, isPassingScore: true },
    { id: 'aud-5', metricName: 'Edge Cache Hit Ratio', benchmarkTarget: '> 95%', achievedValue: '98.4%', scorePct: 98, isPassingScore: true },
    { id: 'aud-6', metricName: 'Server Response Time (TTFB)', benchmarkTarget: '< 100ms', achievedValue: '48ms', scorePct: 100, isPassingScore: true },
  ],
});

// 06. Staff Aug Pipeline Slide
export const createStaffAugPipelineSlide = (id = `slide-${Date.now()}`): StaffAugPipelineSlideData => ({
  id,
  type: 'staff-aug-pipeline',
  title: 'Elite Engineering Vetting Funnel & Candidate Pipeline',
  subtitle: 'Rigorous 6-stage technical vetting achieving an uncompromising 1000:3 selectivity ratio',
  kicker: 'TALENT ARCHITECTURE',
  themeId: 'true-dark',
  activeStep: 0,
  sourcePoolCount: 1000,
  finalHiredCount: 3,
  yieldRatioText: '1,000 : 3 (0.3% Selectivity)',
  stages: [
    { id: 'stg-1', stageNumber: 1, stageName: 'Global Candidate Sourcing', candidateVolume: 1000, passPercentage: 100, primaryFilterCriteria: 'Top 5% GitHub contributions & verified university/repo pedigree', assessmentTool: 'AI Resume Scanner & Portfolio Verification', isDecisiveGate: false },
    { id: 'stg-2', stageNumber: 2, stageName: 'Algorithmic & Data Structures', candidateVolume: 200, passPercentage: 20, primaryFilterCriteria: 'LeetCode Hard under 30min with zero memory leaks', assessmentTool: 'Automated Sandbox Evaluator', isDecisiveGate: true },
    { id: 'stg-3', stageNumber: 3, stageName: 'Distributed Systems Architecture', candidateVolume: 50, passPercentage: 5, primaryFilterCriteria: 'Fault tolerance, consensus protocols, multi-region database replication', assessmentTool: 'Architectural Whiteboard & Design Defense', isDecisiveGate: true },
    { id: 'stg-4', stageNumber: 4, stageName: 'Live Pair Programming', candidateVolume: 15, passPercentage: 1.5, primaryFilterCriteria: 'Real-world bug hunting, refactoring legacy code, pure live DOM integration', assessmentTool: '60min Live Pair Session with Staff Engineer', isDecisiveGate: true },
    { id: 'stg-5', stageNumber: 5, stageName: 'Executive Culture & Alignment', candidateVolume: 5, passPercentage: 0.5, primaryFilterCriteria: 'Extreme ownership, direct communication, asynchronous excellence', assessmentTool: 'Alim Ul Karim, Chief Software Engineer Interview', isDecisiveGate: true },
    { id: 'stg-6', stageNumber: 6, stageName: 'Certified Deployable Engineer', candidateVolume: 3, passPercentage: 0.3, primaryFilterCriteria: 'Immediate deployment into mission-critical client sprint', assessmentTool: 'Sovereign Enterprise Contract Sign-off', isDecisiveGate: false },
  ],
  pipelineSummaryNotes: 'Zero compromise policy: candidates failing any decisive gate are immediately released.',
});

// 07. Craftsmanship Benchmark Slide
export const createCraftsmanshipBenchmarkSlide = (id = `slide-${Date.now()}`): CraftsmanshipBenchmarkSlideData => ({
  id,
  type: 'craftsmanship-benchmark',
  title: 'Precision Craftsmanship: The Luxury Benchmark',
  subtitle: 'Applying the horological standards of master watchmaking to distributed systems',
  kicker: 'CRAFTSMANSHIP BENCHMARK',
  themeId: 'white-brand',
  activeStep: 0,
  luxuryBrandMetaphor: 'Rolex Perpetual Calibre & Horological Rigor',
  prestigeQuote: 'Effortless performance is the product of thousands of hours of unseen discipline. True luxury in software is zero crashes, zero drift, and timeless stability.',
  authorTitle: 'Alim Ul Karim, Chief Software Engineer',
  benchmarks: [
    {
      id: 'bm-1',
      dimensionName: 'Timing Tolerance & Jitter',
      commodityStandard: 'Accepts +/- 200ms latency spikes as normal web behavior',
      sovereignCraftsmanship: 'Hard sub-16ms frame budgeting with zero audio/visual stutter',
      metricComparison: '12.5x tighter jitter tolerance',
      isBenchmarkExceeded: true,
    },
    {
      id: 'bm-2',
      dimensionName: 'Code Durability & Technical Debt',
      commodityStandard: 'Quick hack jobs requiring total system rewrite every 18 months',
      sovereignCraftsmanship: 'Architected for decadal longevity with strict typing and positive booleans',
      metricComparison: '10-year projected maintainability lifespan',
      isBenchmarkExceeded: true,
    },
    {
      id: 'bm-3',
      dimensionName: 'Typography & DOM Rendering',
      commodityStandard: 'Rasterized graphic banners that pixelate on high-DPI displays',
      sovereignCraftsmanship: '100% pure live DOM text nodes rendering with mathematical clamp formulas',
      metricComparison: 'Infinite resolution fidelity & full WCAG AAA',
      isBenchmarkExceeded: true,
    },
    {
      id: 'bm-4',
      dimensionName: 'Pride of Ownership & Elegance',
      commodityStandard: 'Generic component templates copied without design intention',
      sovereignCraftsmanship: 'Handcrafted micro-shadows, authentic HSL ramps, and spring dynamics',
      metricComparison: 'Unanimous executive boardroom approval',
      isBenchmarkExceeded: true,
    },
  ],
});

// 08. Weekly Cadence Slide
export const createWeeklyCadenceSlide = (id = `slide-${Date.now()}`): WeeklyCadenceSlideData => ({
  id,
  type: 'weekly-cadence',
  title: 'Global Remote Work Culture & Timezone Operating Rhythm',
  subtitle: 'Structured Sun-Thu operating rhythm designed for maximum deep-work velocity and zero burnout',
  kicker: 'REMOTE CULTURE',
  themeId: 'paper-editorial',
  activeStep: 0,
  primaryTimezonesText: 'UTC-5 (New York) | UTC+0 (London) | UTC+6 (Dhaka)',
  goldenOverlapWindowText: '14:00 - 17:00 UTC (3-Hour Real-Time Overlap)',
  governanceMotto: 'Asynchronous by default, synchronous for celebration and decisive architecture.',
  days: [
    {
      id: 'day-sun',
      dayName: 'Sunday',
      dayThemeFocus: 'Sprint Initialization & Architectural Alignment',
      isReleaseDay: false,
      blocks: [
        { id: 'b-1', timeRange: '09:00 - 11:00', blockTitle: 'Sprint Planning & Task Assignment', blockCategory: 'sync-overlap', durationHours: 2 },
        { id: 'b-2', timeRange: '11:00 - 15:00', blockTitle: 'Deep Work: Core Architecture Implementation', blockCategory: 'deep-work', durationHours: 4 },
        { id: 'b-3', timeRange: '15:00 - 17:00', blockTitle: 'Async Spec Review & RFC Sign-off', blockCategory: 'async-rfc', durationHours: 2 },
      ],
    },
    {
      id: 'day-mon',
      dayName: 'Monday',
      dayThemeFocus: 'Uninterrupted Engineering Flow',
      isReleaseDay: false,
      blocks: [
        { id: 'b-4', timeRange: '09:00 - 14:00', blockTitle: 'Protected Deep-Work Zone (Zero Slack/Meetings)', blockCategory: 'deep-work', durationHours: 5 },
        { id: 'b-5', timeRange: '14:00 - 17:00', blockTitle: 'Golden Overlap: Pair Programming & Code Reviews', blockCategory: 'sync-overlap', durationHours: 3 },
      ],
    },
    {
      id: 'day-tue',
      dayName: 'Tuesday',
      dayThemeFocus: 'Performance Optimization & Testing',
      isReleaseDay: false,
      blocks: [
        { id: 'b-6', timeRange: '09:00 - 14:00', blockTitle: 'Deep Work: Stress Testing & Benchmarks', blockCategory: 'deep-work', durationHours: 5 },
        { id: 'b-7', timeRange: '14:00 - 17:00', blockTitle: 'Cross-Functional Architecture Review', blockCategory: 'sync-overlap', durationHours: 3 },
      ],
    },
    {
      id: 'day-wed',
      dayName: 'Wednesday',
      dayThemeFocus: 'Feature Complete & Pre-Flight Audits',
      isReleaseDay: false,
      blocks: [
        { id: 'b-8', timeRange: '09:00 - 14:00', blockTitle: 'Code Freeze & 12 Quality Gate Verification', blockCategory: 'deep-work', durationHours: 5 },
        { id: 'b-9', timeRange: '14:00 - 17:00', blockTitle: 'Release Candidate Staging Validation', blockCategory: 'sync-overlap', durationHours: 3 },
      ],
    },
    {
      id: 'day-thu',
      dayName: 'Thursday',
      dayThemeFocus: 'Demo Ceremony & Production Release',
      isReleaseDay: true,
      blocks: [
        { id: 'b-10', timeRange: '09:00 - 11:00', blockTitle: 'Production Deployment & Smoke Tests', blockCategory: 'sprint-demo', durationHours: 2 },
        { id: 'b-11', timeRange: '14:00 - 16:00', blockTitle: 'All-Hands Sprint Demo & Executive Showcase', blockCategory: 'sync-overlap', durationHours: 2 },
      ],
    },
  ],
});

// 09. Competitive Moat Slide
export const createCompetitiveMoatSlide = (id = `slide-${Date.now()}`): CompetitiveMoatSlideData => ({
  id,
  type: 'competitive-moat',
  title: 'Multi-Dimensional Enterprise Competitive Moat',
  subtitle: 'Four structural defensibility barriers providing decadal protection against commodity competition',
  kicker: 'STRATEGIC DEFENSE',
  themeId: 'midnight-luxe',
  activeStep: 0,
  shimmerStatement: 'Our architecture transforms technical superiority into institutional switching costs.',
  overallDefensibilityRating: '9.1 / 10 (Tier-1 Defensibility)',
  moatPillars: [
    {
      id: 'moat-net',
      pillarTitle: 'Network Effects & Ecosystem',
      category: 'network-effects',
      barrierScore10: 8.8,
      timeToReplicateYears: 3.0,
      coreMechanism: 'Every deployed enterprise node enhances global telemetry accuracy for all participants.',
      keyAssets: ['320+ Edge Nodes', 'Shared Threat Intelligence Mesh'],
      isDominantAdvantage: false,
    },
    {
      id: 'moat-switch',
      pillarTitle: 'High Switching Costs',
      category: 'switching-costs',
      barrierScore10: 9.6,
      timeToReplicateYears: 4.5,
      coreMechanism: 'Deep embedding into mission-critical financial settlement and real-time audio workflows.',
      keyAssets: ['48 Enterprise ERP Adapters', 'Certified Regulatory Workflows'],
      isDominantAdvantage: true,
    },
    {
      id: 'moat-data',
      pillarTitle: 'Data Flywheel Asymmetry',
      category: 'data-flywheel',
      barrierScore10: 9.2,
      timeToReplicateYears: 5.0,
      coreMechanism: 'Petabytes of proprietary meeting diarization and distributed telemetry models.',
      keyAssets: ['Zero-Leak On-Device Models', 'Proprietary Audio Weights'],
      isDominantAdvantage: true,
    },
    {
      id: 'moat-ip',
      pillarTitle: 'Horological IP & Patents',
      category: 'intellectual-property',
      barrierScore10: 8.4,
      timeToReplicateYears: 2.5,
      coreMechanism: 'Patented pure live DOM rendering algorithms and zero-drift virtual canvas transforms.',
      keyAssets: ['Canvas Transform Patent', 'Positive Boolean Type Guards'],
      isDominantAdvantage: false,
    },
  ],
  defensibilityNotes: 'Four discrete layers create compounding defensibility that increases over time.',
});

// 10. Rapid Feedback Slide
export const createRapidFeedbackSlide = (id = `slide-${Date.now()}`): RapidFeedbackSlideData => ({
  id,
  type: 'rapid-feedback',
  title: 'Continuous Rapid Feedback & Sprint Loop Velocity',
  subtitle: '4-stage sub-hour iteration loop achieving elite DORA operational performance',
  kicker: 'SPRINT VELOCITY',
  themeId: 'sunset-horizon',
  activeStep: 0,
  dailyDeployFrequency: 18,
  leadTimeToProductionMinutes: 42,
  changeFailureRatePct: 0.08,
  cultureDirectives: [
    'Instrument telemetry before authoring business logic.',
    'Canary deployments verify real user load at 5% traffic.',
    'Automated rollbacks trigger when p99 latency spikes above 20ms.',
  ],
  loopStages: [
    {
      id: 'stage-plan',
      stageOrder: 1,
      stageName: 'Plan & Instrument',
      leadTimeFormatted: '15 min',
      toolchainIcon: 'FileCode',
      actionSummary: 'Author specifications, add telemetry tags, and establish negative test bounds.',
      isAutomatedGate: true,
    },
    {
      id: 'stage-ship',
      stageOrder: 2,
      stageName: 'Ship Micro-Increment',
      leadTimeFormatted: '12 min',
      toolchainIcon: 'Send',
      actionSummary: 'Execute bounded atomic commits; deploy immediately to isolated staging cluster.',
      isAutomatedGate: true,
    },
    {
      id: 'stage-observe',
      stageOrder: 3,
      stageName: 'Observe Live Telemetry',
      leadTimeFormatted: '10 min',
      toolchainIcon: 'Activity',
      actionSummary: 'Inspect real-time Grafana metrics, error rates, and memory heap allocation.',
      isAutomatedGate: true,
    },
    {
      id: 'stage-adapt',
      stageOrder: 4,
      stageName: 'Adapt & Refactor',
      leadTimeFormatted: '5 min',
      toolchainIcon: 'RefreshCw',
      actionSummary: 'Incorporate feedback immediately into next micro-batch without technical debt.',
      isAutomatedGate: false,
    },
  ],
});

// 11. Interactive Poll Slide
export const createInteractivePollSlide = (id = `slide-${Date.now()}`): InteractivePollSlideData => ({
  id,
  type: 'interactive-poll',
  title: 'Live Audience Poll: Enterprise Modernization Bottlenecks',
  subtitle: 'Real-time audience telemetry and preference distribution collected via live WebSockets',
  kicker: 'AUDIENCE TELEMETRY',
  themeId: 'true-dark',
  activeStep: 0,
  questionPrompt: 'What is the single greatest bottleneck preventing your organization from achieving sub-second delivery?',
  totalVotesReceived: 482,
  isPollingActive: true,
  qrCodeTargetUrl: 'https://vote.enterprise.internal/session-842',
  options: [
    {
      id: 'opt-a',
      optionKey: 'A',
      optionLabel: 'Legacy Monolith Code Debt & Inverted Booleans',
      votesCount: 231,
      percentageScore: 48.0,
      isWinningLeader: true,
    },
    {
      id: 'opt-b',
      optionKey: 'B',
      optionLabel: 'Lack of Pure Live DOM Typography Standards',
      votesCount: 154,
      percentageScore: 32.0,
      isWinningLeader: false,
    },
    {
      id: 'opt-c',
      optionKey: 'C',
      optionLabel: 'Brittle End-to-End Testing Suites & Flaky CI/CD',
      votesCount: 67,
      percentageScore: 14.0,
      isWinningLeader: false,
    },
    {
      id: 'opt-d',
      optionKey: 'D',
      optionLabel: 'Unclear Executive Ownership & RACI Drift',
      votesCount: 30,
      percentageScore: 6.0,
      isWinningLeader: false,
    },
  ],
});

// 12. Live QA Slide
export const createLiveQaSlide = (id = `slide-${Date.now()}`): LiveQaSlideData => ({
  id,
  type: 'live-qa',
  title: 'Keynote Live Q&A & Curated Audience Inquiries',
  subtitle: 'Community-upvoted inquiries streamed live with real-time speaker answer synthesis',
  kicker: 'LIVE Q&A',
  themeId: 'true-dark',
  activeStep: 0,
  totalQuestionsSubmitted: 84,
  moderationStatusText: 'Real-time AI Moderation & Spam Filter Active',
  questions: [
    {
      id: 'q-1',
      submitterName: 'Dr. Aris Thorne',
      submitterCompany: 'MIT Distributed Systems Lab',
      questionText: 'How do you guarantee sub-16ms frame delivery across heterogeneous client devices?',
      upvotesCount: 142,
      answerBullets: [
        'Hardware-accelerated CSS transform scale applied to fixed 1920x1080 virtual root.',
        'Zero layout recalculations during intra-slide kinetic step transitions.',
      ],
      isAnswered: true,
      isFlaggedPriority: true,
    },
    {
      id: 'q-2',
      submitterName: 'Michael Vance',
      submitterCompany: 'Stripe Infrastructure',
      questionText: 'What architectural safeguards prevent memory leaks during multi-hour canvas sessions?',
      upvotesCount: 128,
      answerBullets: [
        'Pure live DOM typography eliminates canvas bitmap allocations entirely.',
        'Strict unmount cleanup in all React step progression hooks.',
        'Fixed coordinate space prevents incremental DOM geometry thrashing.',
      ],
      isAnswered: false,
      isFlaggedPriority: true,
    },
    {
      id: 'q-3',
      submitterName: 'Priya Patel',
      submitterCompany: 'Canva Core Engine',
      questionText: 'Can the 10 authentic HSL palettes be extended with custom brand hex tokens?',
      upvotesCount: 94,
      answerBullets: [
        'Yes, hex tokens are automatically parsed into unadorned HSL triplets at runtime.',
        'Enables instant slash-alpha compositing without CSS rewriting.',
      ],
      isAnswered: false,
      isFlaggedPriority: false,
    },
  ],
});

// 13. Embed Stage Slide
export const createEmbedStageSlide = (id = `slide-${Date.now()}`): EmbedStageSlideData => ({
  id,
  type: 'embed-stage',
  title: 'Sandboxed Interactive Web Application Stage',
  subtitle: 'Live interactive demonstration running within a cryptographically isolated browser viewport',
  kicker: 'LIVE DEMO STAGE',
  themeId: 'true-dark',
  activeStep: 0,
  embedUrl: 'https://demo.enterprise.internal/realtime-mesh',
  displayTitle: 'Sovereign Event Mesh - Live Visualizer',
  isSandboxStrict: true,
  isCameraAllowed: false,
  hasCameraAccess: false,
  allowCameraAccess: false,
  isMicrophoneAllowed: false,
  hasMicrophoneAccess: false,
  allowMicrophoneAccess: false,
  telemetryBadgeText: 'Live Stream: 60 FPS | Zero Frame Drop',
});

// 14. Countdown Launch Slide
export const createCountdownLaunchSlide = (id = `slide-${Date.now()}`): CountdownLaunchSlideData => ({
  id,
  type: 'countdown-launch',
  title: 'Production Launch T-Minus Countdown Protocol',
  subtitle: 'Mission control deployment gates and global DNS traffic cutover synchronization',
  kicker: 'COUNTDOWN PROTOCOL',
  themeId: 'true-dark',
  activeStep: 0,
  targetIsoTimestamp: '2026-10-04T04:00:00Z',
  launchStageName: 'Stage 4: Global Mesh Cutover',
  launchDirectorName: 'Alim Ul Karim',
  launchDirectorTitle: 'Chief Software Engineer',
  urgencyState: 'impending',
  launchGates: [
    { id: 'gate-1', gateNumber: 1, gateTitle: 'Distributed Database Replication Lock', assignedOwner: 'Database Reliability Team', isPassed: true, isMissionCritical: true },
    { id: 'gate-2', gateNumber: 2, gateTitle: 'Multi-Region Load Balancer Health Verification', assignedOwner: 'Core Infrastructure Team', isPassed: true, isMissionCritical: true },
    { id: 'gate-3', gateNumber: 3, gateTitle: 'Security & Penetration Test Sign-Off', assignedOwner: 'InfoSec Governance', isPassed: false, isMissionCritical: true },
    { id: 'gate-4', gateNumber: 4, gateTitle: 'Global BGP Route Announcement & DNS Cutover', assignedOwner: 'Network Operations', isPassed: false, isMissionCritical: true },
  ],
});

// 15. Executive Takeaways Slide
export const createExecutiveTakeawaysSlide = (id = `slide-${Date.now()}`): ExecutiveTakeawaysSlideData => ({
  id,
  type: 'executive-takeaways',
  title: 'Executive Briefing: Strategic Decision Protocol',
  subtitle: 'Bilateral governance sign-off and 14-day prioritized execution roadmap',
  kicker: 'EXECUTIVE DECISION',
  themeId: 'true-dark',
  activeStep: 0,
  strategicSynopsis: 'Transitioning to sovereign presentation architecture eliminates third-party licensing dependencies, guarantees zero layout drift on high-resolution displays, and accelerates delivery velocity across all engineering squads.',
  executiveSignOffName: 'Alim Ul Karim',
  executiveSignOffTitle: 'Chief Software Engineer',
  boardApprovalReference: 'BOARD-RES-2026-10-03',
  roiMetrics: [
    { id: 'roi-1', metricValue: '4.8x', metricLabel: 'Engineering Velocity', isPositiveYield: true },
    { id: 'roi-2', metricValue: '38%', metricLabel: 'Cloud Cost Savings', isPositiveYield: true },
    { id: 'roi-3', metricValue: '100%', metricLabel: 'Pure Live DOM Text', isPositiveYield: true },
  ],
  actionItems: [
    {
      id: 'act-1',
      actionTitle: 'Deploy WireGuard Mesh Nodes & FreeBSD Edge Clusters',
      ownerName: 'Core Infrastructure Squad',
      ownerTitle: 'Engineering Team Lead',
      targetTimeline: 'Next 72 Hours',
      statusBadge: 'Completed',
      isApproved: true,
    },
    {
      id: 'act-2',
      actionTitle: 'Enforce Affirmative Booleans and 100-Line Component Cap',
      ownerName: 'Alim Ul Karim',
      ownerTitle: 'Chief Software Engineer',
      targetTimeline: 'Next 5 Days',
      statusBadge: 'Active Execution',
      isApproved: true,
    },
    {
      id: 'act-3',
      actionTitle: 'Conduct Keynote Boardroom Demonstration with 10 HSL Themes',
      ownerName: 'Executive Steering Committee',
      ownerTitle: 'Board Sponsors',
      targetTimeline: 'Next 14 Days',
      statusBadge: 'Scheduled',
      isApproved: false,
    },
  ],
});

// =============================================================================
// Legacy Slide Archetype Factories (Preserved for backwards compatibility)
// =============================================================================
export const createGrowthEngineSlide = (id = `slide-${Date.now()}`): GrowthEngineSlideData => ({
  id, type: 'growth-engine', kicker: 'DISTRIBUTION ENGINE',
  title: 'Multi-Channel Autonomous Growth Engine',
  subtitle: 'Four synchronized vectors compounding platform scale and organic market authority',
  summaryNote: 'Aggregated 10.4x top-of-funnel expansion with 42% lower customer acquisition cost.',
  channels: [
    { id: 'ch1', name: 'SEO Authority', headlineMetric: '1.4M+', metricLabel: 'Search Visits', growthDelta: '+380% YoY', isPositiveGrowth: true, tag: 'Organic', icon: 'Search', tactics: ['Topic cluster domination', 'Sub-100ms Core Web Vitals', 'High-intent capture'] },
    { id: 'ch2', name: 'Paid Precision', headlineMetric: '4.2x', metricLabel: 'Blended ROAS', growthDelta: '-38% CAC', isPositiveGrowth: true, tag: 'Paid Scale', icon: 'TrendingUp', tactics: ['Programmatic bids', 'Creative sprint tests', 'Audience retargeting'] },
    { id: 'ch3', name: 'Content Engine', headlineMetric: '8.6M', metricLabel: 'Impressions', growthDelta: '+240% QoQ', isPositiveGrowth: true, tag: 'Authority', icon: 'Share2', tactics: ['Technical breakdowns', 'Video syndication', 'Executive ghostwriting'] },
    { id: 'ch4', name: 'AI Video Ops', headlineMetric: '180+', metricLabel: 'Assets / Mo', growthDelta: '+650% Scale', isPositiveGrowth: true, tag: 'Synthetic', icon: 'Video', tactics: ['Script-to-render pipelines', 'Multilingual dubbing', 'Dynamic personalization'] },
  ],
});

export const createTalentPyramidSlide = (id = `slide-${Date.now()}`): TalentPyramidSlideData => ({
  id, type: 'talent-pyramid', kicker: 'ENGINEERING TALENT',
  title: 'Sovereign Talent Vetting Architecture',
  subtitle: 'Multi-tier screening funnel admitting only the top 1% of elite global engineers',
  attritionRate: '99.2% Candidate Attrition Guarantee',
  tiers: [
    { id: 't5', tierNumber: 5, label: 'Live Proctored Evaluation', filterRatio: 'Top 1%', subtitle: '1-Hour Live Code', description: 'Real-time proctored coding and systems design under strict scrutiny.', color: '#EF4444', icon: 'ShieldAlert', isApex: true },
    { id: 't4', tierNumber: 4, label: 'Production Simulation', filterRatio: 'Top 3%', subtitle: 'Enterprise PR Review', description: 'Tasks modeled directly on distributed multi-tier codebases.', color: '#F59E0B', icon: 'Target' },
    { id: 't3', tierNumber: 3, label: '25-Hour System Build', filterRatio: 'Top 8%', subtitle: 'Complex Deliverable', description: 'Compressed architectural challenge requiring deep systems mastery.', color: '#10B981', icon: 'Cpu' },
    { id: 't2', tierNumber: 2, label: 'Graded Assessments', filterRatio: 'Top 25%', subtitle: 'Core Competency', description: 'Casbin RBAC schemas, positive booleans, and 100-line modular design.', color: '#3B82F6', icon: 'BookOpen' },
    { id: 't1', tierNumber: 1, label: 'Initial Intake', filterRatio: '20 / 1,000', subtitle: 'Aptitude Screen', description: 'Strict alertness, reasoning, and algorithmic intake filtering.', color: '#6366F1', icon: 'Users' },
  ],
});

export const createCostComparisonSlide = (id = `slide-${Date.now()}`): CostComparisonSlideData => ({
  id, type: 'cost-comparison', kicker: 'CAPITAL EFFICIENCY',
  title: 'Engineering Investment vs Opportunity Loss',
  headlineInvert: 'How much will you lose if you do not modernize?',
  annualSavingsSummary: '$612,000 Net Annual Savings with 10x Velocity Multiplier',
  columns: [
    { id: 'c1', name: 'In-House Team', annualCost: '$780,000', billingCadence: 'per year (4 Seniors)', isFeatured: false, bulletPoints: ['4-6 month hiring lag', '35% benefits and payroll overhead', 'Severe key-person risk'], attributes: [{ label: 'Time to Start', value: '120 Days', isAdvantage: false }, { label: 'Code Guarantee', value: 'None', isAdvantage: false }], verdict: 'Slow and capital intensive' },
    { id: 'c2', name: 'Legacy Agency', annualCost: '$450,000', billingCadence: 'per year (Hourly T&M)', isFeatured: false, bulletPoints: ['Junior bait-and-switch developers', 'Opaque overages with zero accountability', 'Drift and architectural rot'], attributes: [{ label: 'Time to Start', value: '30 Days', isAdvantage: false }, { label: 'Code Guarantee', value: 'Limited SLA', isAdvantage: false }], verdict: 'Unpredictable costs with drift' },
    { id: 'c3', name: 'Sovereign Engine', annualCost: '$168,000', billingCadence: 'per year (Flat Retainer)', badge: 'RECOMMENDED', isFeatured: true, bulletPoints: ['Immediate day-one execution', 'Top 1% elite proctored talent', 'Zero-defect guarantee with 4-part RCA'], attributes: [{ label: 'Time to Start', value: '24 Hours', isAdvantage: true }, { label: 'Code Guarantee', value: '100% Zero-Defect', isAdvantage: true }], verdict: 'Sovereign precision: $612k saved' },
  ],
});

export const createDailyWorkCultureSlide = (id = `slide-${Date.now()}`): DailyWorkCultureSlideData => ({
  id, type: 'daily-work-culture', kicker: 'OPERATIONAL CADENCE',
  title: 'High-Discipline Daily Engineering Culture',
  subtitle: 'Structured rituals ensuring relentless focus, rapid iteration, and zero ambiguity',
  cultureMotto: 'Autonomy through discipline, velocity through deterministic standards.',
  rituals: [
    { time: '09:00 - 09:30', title: 'Async Standup & RFC Triage', description: 'Brief blocker resolution and atomic subtask assignment via SQLite task manager.', tag: 'Alignment', icon: 'Clock', isCore: true },
    { time: '09:30 - 13:00', title: 'Deep Work & Subagent Loops', description: 'Uninterrupted flow state with parallel AI worker orchestration and local verification.', tag: 'Execution', icon: 'Zap', isCore: true },
    { time: '14:00 - 16:30', title: 'Architecture Reviews & Pairing', description: 'Strict 100-line component reviews, leaf type isolation, and positive boolean audits.', tag: 'Quality', icon: 'Users', isCore: true },
    { time: '16:30 - 17:30', title: 'Continuous RCA & Zero-Storage Purge', description: 'Root cause analysis, test duration profiling, and zero-storage GitHub Actions sweeps.', tag: 'Hygiene', icon: 'Shield', isCore: false },
  ],
});

export const createOurWorkShowcaseSlide = (id = `slide-${Date.now()}`): OurWorkShowcaseSlideData => ({
  id, type: 'our-work-showcase', kicker: 'PROVEN PORTFOLIO',
  title: 'Mission-Critical Engineering Showcase',
  subtitle: 'Production systems delivered with zero defects, sub-12ms latencies, and high reliability',
  summaryTag: '14 Production Systems Delivered on Time with 100% Client Retention',
  projects: [
    { title: 'Sovereign Slide Runtime', client: 'Enterprise Core', category: 'Canvas Engine', description: '1080p Pure Live DOM viewport with 10 calibrated color ramps and spring physics.', metrics: '60fps GPU • 0ms Drift', isFeatured: true },
    { title: 'Subagent Swarm Coordinator', client: 'Fintech Corp', category: 'AI Orchestration', description: 'Deterministic 300-step execution loops with SQLite task state locking.', metrics: '12x Speed • 0 Regressions' },
    { title: 'Zero-Storage CI/CD Pipeline', client: 'Cloud Fleet', category: 'Infrastructure', description: 'Automated artifact purging, dynamic pipeline timeouts, and SemVer release ceremony.', metrics: '0.0 GB • $0 Actions Cost' },
    { title: 'Casbin RBAC Persistence Hub', client: 'Healthcare Global', category: 'Split-DB Engine', description: 'Split SQLite three-tier database with PascalCase schemas and positive booleans.', metrics: '99.999% SLA • Air-Gapped' },
  ],
});

export const createExecutiveDuoSlide = (id = `slide-${Date.now()}`): ExecutiveDuoSlideData => ({
  id, type: 'executive-duo', kicker: 'LEADERSHIP EXCELLENCE',
  title: 'Executive Architecture & Systems Leadership',
  subtitle: 'Complementary leadership combining low-level systems engineering with strategic delivery',
  partnershipContext: 'Over 25 combined years of building distributed platforms and deterministic engines.',
  leaders: [
    {
      name: 'Alim Ul Karim', role: 'Chief Software Engineer', bio: 'Pioneered deterministic agentic presentation architectures, split-DB database engines, and 100-line modular design.',
      avatarUrl: '/assets/screenshots/hero-speaker-clean.png', highlightPills: ['Chief Software Engineer', 'Distributed Runtimes', 'Formal Verification'],
      quote: 'Eliminate runtime indeterminism at the core; every slide becomes undeniable proof.', isPrimary: true,
    },
    {
      name: 'Elena Rostova', role: 'Principal Systems Architect', bio: 'Specialist in 60fps GPU-accelerated canvas mathematics, typography rendering, and precision color systems.',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300', highlightPills: ['Systems Architecture', 'WebGL & Canvas', 'Design Systems'],
      quote: 'Mathematical elegance in code translates directly into visceral visual authority.', isPrimary: false,
    },
  ],
});

export const createAfterSalesSupportSlide = (id = `slide-${Date.now()}`): AfterSalesSupportSlideData => ({
  id, type: 'after-sales-support', kicker: 'CONTINUOUS GUARANTEE',
  title: 'Comprehensive After-Sales Support & SLAs',
  subtitle: 'Long-term operational peace of mind backed by automated root cause analysis and zero defects',
  guaranteeBanner: '100% Bug Remediation Within 24 Hours or Full Month Service Credit',
  supportTiers: [
    { title: 'Standard Coverage', slaResponse: '< 24 Hours', isIncluded: true, features: ['Automated 4-part RCA diagnosis', 'Nightly zero-storage pipeline runs', 'Community patch updates'] },
    { title: 'Enterprise Priority', slaResponse: '< 4 Hours', isIncluded: false, isHighlight: true, features: ['Dedicated Slack/Discord war room', 'Deterministic bug turnaround < 4h', 'Direct pairing with core engineers'] },
    { title: 'Mission-Critical VIP', slaResponse: '< 15 Minutes', isIncluded: false, features: ['24/7 dedicated telephone hotline', 'Live root cause remediation pairing', 'Quarterly architectural code reviews'] },
  ],
});

export const createSearchSerpProofSlide = (id = `slide-${Date.now()}`): SearchSerpProofSlideData => ({
  id, type: 'search-serp-proof', kicker: 'ORGANIC DOMINANCE',
  title: 'Undeniable Search Engine Authority',
  subtitle: 'Target keywords captured at position #1 with sustained compound organic visibility',
  aggregateGrowth: '+480% Organic Inbound Leads Generated in 6 Months',
  searchQueries: [
    { query: 'enterprise presentation framework', rank: '#1', searchVolume: '22,400 / mo', urlSnippet: 'https://riseup.sovereign/framework', isVerified: true },
    { query: 'deterministic slide rendering engine', rank: '#1', searchVolume: '8,900 / mo', urlSnippet: 'https://riseup.sovereign/engine', isVerified: true },
    { query: '1080p pure live dom typography', rank: '#2', searchVolume: '14,200 / mo', urlSnippet: 'https://riseup.sovereign/dom-spec', isVerified: true },
  ],
});

export const createContentCalendarSlide = (id = `slide-${Date.now()}`): ContentCalendarSlideData => ({
  id, type: 'content-calendar', kicker: 'EDITORIAL CADENCE',
  title: 'Weekly Multi-Channel Distribution Velocity',
  subtitle: 'Compounding brand authority through disciplined, high-frequency technical publishing',
  monthlyCadence: '24 Long-Form Technical Articles & 60 Micro-Breakdowns / Mo',
  scheduleDays: [
    { day: 'Mon', topic: 'Architecture Deep-Dive RFC', channel: 'Substack / Blog', format: 'Long-Form Markdown', isLive: true },
    { day: 'Tue', topic: 'Live Pair Programming Stream', channel: 'YouTube / X', format: 'Interactive Video', isLive: true },
    { day: 'Wed', topic: 'Customer Transformation Story', channel: 'LinkedIn', format: 'Carousel & Case Study', isLive: true },
    { day: 'Thu', topic: 'Technical Release Announcement', channel: 'GitHub & Docs', format: 'Release Notes + Demo', isLive: true },
    { day: 'Fri', topic: 'Weekly Engineering AMA', channel: 'Discord Stage', format: 'Audio Keynote Q&A', isLive: false },
  ],
});

export const createMindsetShiftSlide = (id = `slide-${Date.now()}`): MindsetShiftSlideData => ({
  id, type: 'mindset-shift', kicker: 'STRATEGIC EVOLUTION',
  title: 'The Shift: From Commodity To Sovereign Engineering',
  subtitle: 'Fundamental paradigm transformations separating elite organizations from legacy agencies',
  principleTag: 'Mindset Transformation Protocol',
  shifts: [
    { from: 'Manual QA Testing & Subjective Bug Guessing', to: 'Autonomous Quality Gates & Grounded 4-Part RCA', benefit: 'Zero regressions, instantaneous issue isolation', isTransformed: true },
    { from: 'Bloated Spaghetti Components (800+ lines)', to: 'Strict <= 100-line Boundaries & Leaf Types', benefit: 'Radical maintainability and effortless onboarding', isTransformed: true },
    { from: 'Ad-Hoc Hex Colors & Optical Guesswork', to: '10 HSL Gradient Ramps & Strict Design Tokens', benefit: 'Flawless visual authority across light and dark canvas', isTransformed: true },
    { from: 'Transient Build Bloat & Action Costs', to: 'Zero-Storage Hygiene & Automated Purge Sweeps', benefit: '0.0 GB storage debt, minimal CI/CD infrastructure cost', isTransformed: true },
  ],
});

export const createSessionOutlineSlide = (id = `slide-${Date.now()}`): SessionOutlineSlideData => ({
  id, type: 'session-outline', kicker: 'CURRICULUM ARCHITECTURE',
  title: 'Keynote & Intensive Workshop Roadmap',
  subtitle: 'A structured, high-intensity trajectory through modern deterministic software systems',
  targetAudience: 'Chief Architects, Engineering VPs, and Principal Systems Developers',
  modules: [
    { moduleNumber: 1, title: 'Deterministic Runtimes & Canvas Mathematics', duration: '45 min', isKeyFocus: true, topics: ['1920x1080 fixed geometry transforms', 'Pure live DOM rendering vs bitmap artifacts', 'GPU spring physics & kinetic indicators'] },
    { moduleNumber: 2, title: 'Multi-Agent Subtask Loops & SQLite Persistence', duration: '60 min', isKeyFocus: false, topics: ['Autonomous worker dispatch & locking', '46-agent SQLite task manager integration', '100% coding guideline injection'] },
    { moduleNumber: 3, title: 'Root Cause Analysis & Quality Verification', duration: '45 min', isKeyFocus: true, topics: ['The 4-part RCA diagnosis framework', 'Continuous regression prevention', 'Local parallel CI/CD runners (18 gates)'] },
    { moduleNumber: 4, title: 'Zero-Defect Production Deployment Ceremony', duration: '30 min', isKeyFocus: false, topics: ['Zero-storage artifact sweeps', 'Hyphen-separated atomic commits', 'Automated SemVer release governance'] },
  ],
});

export const createRevealGridSlide = (id = `slide-${Date.now()}`): RevealGridSlideData => ({
  id, type: 'reveal-grid', kicker: 'CORE CAPABILITIES',
  title: 'The Six Pillars of Sovereign Engineering',
  subtitle: 'Interlocking technical capabilities designed for speed, resilience, and mathematical elegance',
  columns: 3,
  items: [
    { id: 'p1', icon: 'Cpu', title: 'Deterministic Execution', description: 'Zero runtime randomness. Every state change is predictable, logged, and verifiable.', badge: 'FOUNDATION', isHighlighted: true },
    { id: 'p2', icon: 'Shield', title: 'Casbin RBAC Security', description: 'Three-tier SQLite split-DB persistence with role-based policies and positive booleans.', badge: 'SECURITY', isHighlighted: false },
    { id: 'p3', icon: 'Zap', title: '60fps Spring Dynamics', description: 'Fluid kinetic transitions with calibrated damping and physics-driven micro-interactions.', badge: 'PERFORMANCE', isHighlighted: false },
    { id: 'p4', icon: 'Maximize2', title: 'Pure Live DOM Rendering', description: 'Zero pixelated canvas screenshots. 100% vector typography accessible on all displays.', badge: 'TYPOGRAPHY', isHighlighted: false },
    { id: 'p5', icon: 'Layers', title: '100-Line Component Cap', description: 'Modular architecture where files stay under 100 lines and functions under 15 lines.', badge: 'HYGIENE', isHighlighted: false },
    { id: 'p6', icon: 'CheckCircle2', title: 'Autonomous Quality Gates', description: '18-gate local CI/CD verification with automated 4-part RCA diagnostics.', badge: 'GOVERNANCE', isHighlighted: true },
  ],
});

export const createCounterStatSlide = (id = `slide-${Date.now()}`): CounterStatSlideData => ({
  id, type: 'counter-stat', kicker: 'BENCHMARK METRICS',
  title: 'Quantified Impact Across Distributed Clusters',
  subtitle: 'Definitive performance breakthroughs verified under real-world enterprise workloads',
  benchmarkSource: 'Verified by cryptographically signed telemetry and third-party penetration audits.',
  stats: [
    { value: '12', suffix: 'x', label: 'Velocity Multiplier', detail: 'Faster delivery cadence compared to legacy consulting agency benchmarks.', isPositive: true },
    { value: '99.99', suffix: '%', label: 'System Availability', detail: 'Measured across 320 distributed edge nodes under multi-region failover.', isPositive: true },
    { value: '0.0', suffix: ' GB', label: 'Action Storage Debt', detail: 'Zero persistent storage overhead maintained via automated daily purges.', isPositive: true },
    { value: '< 16', suffix: 'ms', label: 'Frame Budget', detail: 'Consistently maintained frame delivery guaranteeing zero UI stuttering.', isPositive: true },
  ],
});

export const createPollSurveySlide = (id = `slide-${Date.now()}`): PollSurveySlideData => ({
  id, type: 'poll-survey', kicker: 'AUDIENCE ALIGNMENT',
  title: 'The Great Architectural Divide: What Slows Your Team?',
  subtitle: 'Live audience voting results highlighting the primary drivers of organizational inertia',
  question: 'Which factor represents the largest drain on your current engineering velocity?',
  totalVotes: '842 Industry Leaders Polled',
  options: [
    { label: 'Oversized Monolithic Components (> 800 lines)', percentage: 44, votesCount: '370 votes', isWinner: true },
    { label: 'Brittle Flaky Integration Tests with Zero RCA', percentage: 28, votesCount: '236 votes', isWinner: false },
    { label: 'Inconsistent Ad-Hoc Theming & Design Drift', percentage: 18, votesCount: '152 votes', isWinner: false },
    { label: 'Indeterminate Multi-Threaded State Leaks', percentage: 10, votesCount: '84 votes', isWinner: false },
  ],
});

export const createTypewriterPromptSlide = (id = `slide-${Date.now()}`): TypewriterPromptSlideData => ({
  id, type: 'typewriter-prompt', kicker: 'PROMPT SYNTHESIS CLI',
  title: 'Autonomous System Architect Terminal',
  subtitle: 'Natural language directives mapped into deterministic multi-agent execution workflows',
  promptQuery: 'antigravity synthesize --architecture "sovereign-slide-runtime" --strict-booleans --cap 100',
  systemPersona: 'Chief Software Engineer Protocol Daemon v2.1.0',
  outputBlocks: [
    { title: 'TASK RESOLUTION', codeOrText: 'Loading 10 calibrated HSL theme ramps and verifying 1920x1080 canvas geometry.', isHighlighted: false },
    { title: 'CODE HYGIENE ENFORCEMENT', codeOrText: 'Audit complete: 0 negative booleans, 0 components exceeding 100 lines, 100% pure live DOM text.', isHighlighted: true },
    { title: 'EXECUTION CERTIFICATE', codeOrText: 'Status: 0 errors, 18 quality gates passed. Release candidate ready for deployment.', isHighlighted: false },
  ],
});

export const createDepthStackSlide = (id = `slide-${Date.now()}`): DepthStackSlideData => ({
  id, type: 'depth-stack', kicker: 'ARCHITECTURAL DEPTH',
  title: 'Multi-Layered Perspective: Core Invariants',
  heading: 'Three Non-Negotiable Tenets of Sovereign Systems',
  perspective: 1200,
  cards: [
    { id: 'c1', order: 1, pill: 'Tenet 01', headline: 'Affirmative Boolean Conventions Only', body: 'Negative boolean flags cause cognitive friction and hidden bugs. All properties and parameters must adhere to is* and has* affirmative naming.', accentTag: 'Zero Ambiguity', isRevealed: true },
    { id: 'c2', order: 2, pill: 'Tenet 02', headline: 'Zero-Storage Pipeline Sanitization', body: 'Persistent CI/CD clutter and artifact accumulation represent technical debt. All pipelines must maintain 0.0 GB storage via automated purge triggers.', accentTag: 'Storage Hygiene', isRevealed: false },
    { id: 'c3', order: 3, pill: 'Tenet 03', headline: 'Leaf-Type Isolation & 100-Line Component Boundaries', body: 'Monolithic files breed fragility. By enforcing 100-line component caps and leaf-type separation, systems remain modular and maintainable.', accentTag: 'Modular Precision', isRevealed: false },
  ],
});

export const createBeforeAfterShowcaseSlide = (id = `slide-${Date.now()}`): BeforeAfterShowcaseSlideData => ({
  id, type: 'before-after-showcase', kicker: 'TRANSFORMATION PARADIGM',
  title: 'Engineering Transformation: Status Quo vs Sovereign Standard',
  beforeHeader: 'LEGACY AGENCY / FRAGMENTED',
  afterHeader: 'THE RISEUP SOVEREIGN STANDARD',
  multiplierBadge: '10x Acceleration Multiplier',
  features: [
    { aspect: 'Typography Fidelity', beforeState: 'Rasterized text baked in images', afterState: '100% Vector Live DOM Sharpness' },
    { aspect: 'Component Governance', beforeState: 'Bloated 800+ line spaghetti', afterState: 'Strict <= 100-line Component Boundaries' },
    { aspect: 'Quality Assurance', beforeState: 'Subjective manual review tickets', afterState: 'Deterministic Automated Verification Gates' },
    { aspect: 'Theming Contrast', beforeState: 'Ad-hoc random hex values', afterState: '10-Step Mathematical Gradient Precision' },
  ],
});

// =============================================================================
// Master Factories & Archetype Options Registry
// =============================================================================

export const EXTENDED_FACTORIES: Record<string, (id: string) => ExtendedSlideData | LegacyExtendedSlideData> = {
  // 15 Extended Slide Archetypes
  'personal-vpn': createPersonalVpnSlide,
  'meeting-transcript': createMeetingTranscriptSlide,
  'llm-benchmark': createLlmBenchmarkSlide,
  'services-gravity': createServicesGravitySlide,
  'seo-dominance': createSeoDominanceSlide,
  'staff-aug-pipeline': createStaffAugPipelineSlide,
  'craftsmanship-benchmark': createCraftsmanshipBenchmarkSlide,
  'weekly-cadence': createWeeklyCadenceSlide,
  'competitive-moat': createCompetitiveMoatSlide,
  'rapid-feedback': createRapidFeedbackSlide,
  'interactive-poll': createInteractivePollSlide,
  'live-qa': createLiveQaSlide,
  'embed-stage': createEmbedStageSlide,
  'countdown-launch': createCountdownLaunchSlide,
  'executive-takeaways': createExecutiveTakeawaysSlide,

  // Legacy Slide Archetypes
  'growth-engine': createGrowthEngineSlide,
  'talent-pyramid': createTalentPyramidSlide,
  'cost-comparison': createCostComparisonSlide,
  'daily-work-culture': createDailyWorkCultureSlide,
  'our-work-showcase': createOurWorkShowcaseSlide,
  'executive-duo': createExecutiveDuoSlide,
  'after-sales-support': createAfterSalesSupportSlide,
  'search-serp-proof': createSearchSerpProofSlide,
  'content-calendar': createContentCalendarSlide,
  'mindset-shift': createMindsetShiftSlide,
  'session-outline': createSessionOutlineSlide,
  'reveal-grid': createRevealGridSlide,
  'counter-stat': createCounterStatSlide,
  'poll-survey': createPollSurveySlide,
  'typewriter-prompt': createTypewriterPromptSlide,
  'depth-stack': createDepthStackSlide,
  'before-after-showcase': createBeforeAfterShowcaseSlide,
};

export const createExtendedSlide = (type: ExtendedSlideType | string, id = `slide-${Date.now()}`): ExtendedSlideData | LegacyExtendedSlideData => {
  const factory = EXTENDED_FACTORIES[type];
  return factory ? factory(id) : createPersonalVpnSlide(id);
};

export interface ArchetypeOption {
  type: SlideType;
  label: string;
  category: 'Strategy & Metrics' | 'Product & Architecture' | 'Team & Credibility' | 'Story & Conversion' | string;
  desc: string;
  icon: string;
}

export const EXTENDED_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  // 15 Extended Slide Options
  { type: 'personal-vpn', label: 'Personal VPN Mesh', category: 'Product & Architecture', desc: 'FreeBSD WireGuard zero-trust network node mesh', icon: 'Shield' },
  { type: 'meeting-transcript', label: 'Meeting Diarization & Sync', category: 'Product & Architecture', desc: 'Real-time audio transcript with multi-device CRDT sync', icon: 'Mic' },
  { type: 'llm-benchmark', label: 'LLM Token Stream Arena', category: 'Strategy & Metrics', desc: 'Frontier LLM benchmark comparing TTFT and throughput', icon: 'Cpu' },
  { type: 'services-gravity', label: 'Services Bubble Gravity', category: 'Product & Architecture', desc: 'Orbital solar system physics simulation of core services', icon: 'Globe' },
  { type: 'seo-dominance', label: 'SEO Evolution Matrix', category: 'Strategy & Metrics', desc: '10-year 4-era SEO ladder with organic CTR erosion curve', icon: 'Search' },
  { type: 'staff-aug-pipeline', label: 'Staff Aug Vetting Funnel', category: 'Team & Credibility', desc: 'Elite 6-stage engineering candidate vetting funnel (1000:3)', icon: 'Filter' },
  { type: 'craftsmanship-benchmark', label: 'Craftsmanship Luxury Standard', category: 'Team & Credibility', desc: 'Horological precision engineering and luxury Rolex benchmark', icon: 'Award' },
  { type: 'weekly-cadence', label: 'Weekly Timezone Rhythm', category: 'Team & Credibility', desc: 'Sun-Thu operating cadence with protected deep-work blocks', icon: 'Calendar' },
  { type: 'competitive-moat', label: 'Enterprise Competitive Moat', category: 'Strategy & Metrics', desc: '4-dimensional structural defensibility barriers and switching costs', icon: 'Lock' },
  { type: 'rapid-feedback', label: 'Rapid Sprint Feedback Loop', category: 'Product & Architecture', desc: '4-stage circular continuous feedback loop with DORA metrics', icon: 'RefreshCw' },
  { type: 'interactive-poll', label: 'Live Audience Poll', category: 'Story & Conversion', desc: 'Real-time audience voting percentages and mobile QR scan', icon: 'BarChart3' },
  { type: 'live-qa', label: 'Live Keynote Q&A Stream', category: 'Story & Conversion', desc: 'Attendee-upvoted inquiry queue with speaker spotlight', icon: 'MessageSquare' },
  { type: 'embed-stage', label: 'Sandboxed Interactive Embed', category: 'Product & Architecture', desc: 'Cryptographically isolated browser demo stage with telemetry', icon: 'AppWindow' },
  { type: 'countdown-launch', label: 'Production Launch Countdown', category: 'Story & Conversion', desc: 'T-Minus mission control countdown clock with readiness gates', icon: 'Timer' },
  { type: 'executive-takeaways', label: 'Executive Briefing & Decision', category: 'Strategy & Metrics', desc: 'Bipartite strategic synopsis, quantified ROI, and RACI roadmap', icon: 'CheckCircle2' },

  // Legacy Archetype Options
  { type: 'growth-engine', label: 'Autonomous Growth Engine', category: 'Strategy & Metrics', desc: '4-vector compounding distribution flywheel', icon: 'TrendingUp' },
  { type: 'talent-pyramid', label: 'Talent Vetting Pyramid', category: 'Team & Credibility', desc: '5-tier screening funnel admitting top 1% talent', icon: 'Shield' },
  { type: 'cost-comparison', label: 'Cost vs Opportunity Loss', category: 'Strategy & Metrics', desc: 'Sovereign pricing vs in-house & agency overhead', icon: 'BarChart3' },
  { type: 'daily-work-culture', label: 'Daily Engineering Cadence', category: 'Team & Credibility', desc: '4 structured rituals ensuring relentless focus', icon: 'Zap' },
  { type: 'our-work-showcase', label: 'Mission-Critical Showcase', category: 'Team & Credibility', desc: '4 production systems delivered with zero defects', icon: 'Award' },
  { type: 'executive-duo', label: 'Executive Architecture Duo', category: 'Team & Credibility', desc: 'Technical leadership pairing systems & strategy', icon: 'Users' },
  { type: 'after-sales-support', label: 'After-Sales Support & SLAs', category: 'Story & Conversion', desc: '3-tier continuous warranty with RCA guarantees', icon: 'CheckCircle2' },
  { type: 'search-serp-proof', label: 'Search SERP Domination', category: 'Strategy & Metrics', desc: 'First-page organic ranking proof & keyword share', icon: 'Search' },
  { type: 'content-calendar', label: 'Weekly Content Calendar', category: 'Product & Architecture', desc: '5-day multi-channel editorial and release schedule', icon: 'Calendar' },
  { type: 'mindset-shift', label: 'Paradigm Mindset Shift', category: 'Story & Conversion', desc: '4 fundamental transformation cards (From -> To)', icon: 'Sparkles' },
  { type: 'session-outline', label: 'Session Agenda & Outline', category: 'Product & Architecture', desc: '4-module workshop and keynote roadmap', icon: 'ListChecks' },
  { type: 'reveal-grid', label: 'Bento Progressive Reveal', category: 'Product & Architecture', desc: '6-card bento grid with step-by-step reveal', icon: 'Grid' },
  { type: 'counter-stat', label: 'Monumental Counter Stats', category: 'Strategy & Metrics', desc: '4 performance benchmark metrics with trends', icon: 'Flame' },
  { type: 'poll-survey', label: 'Audience Poll & Survey', category: 'Story & Conversion', desc: 'Real-time voting results with percentage bars', icon: 'HelpCircle' },
  { type: 'typewriter-prompt', label: 'AI Prompt Synthesis CLI', category: 'Product & Architecture', desc: 'Natural language terminal query & output blocks', icon: 'Terminal' },
  { type: 'depth-stack', label: '3D Depth Perspective Stack', category: 'Product & Architecture', desc: 'Kinetic 3D card stack with peel-away reveal', icon: 'Layers' },
];
