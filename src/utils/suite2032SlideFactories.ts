// lint-allow: file-size reason="Suite 2032 enterprise slide mock data factories" max=600
import type { SlideData } from '../types/presentation';
import type { ArchetypeOption } from './extendedSlideFactories';
import type {
  ExecutiveBriefDistillationSlideData,
  MatrixFeatureBenchmarkSlideData,
  ExecutiveMetricsPulseSlideData,
  MilestoneRoadmapStreamSlideData,
  HexArchitectureMeshSlideData,
  BoardGovernanceRosterSlideData,
  EditorialQuoteSpotlightSlideData,
  CustomerConversionFunnelSlideData,
  TransformationSplitCanvasSlideData,
  BentoCapabilityMosaicSlideData,
  DealEcosystemFlywheelSlideData,
  PnlRunwayWaterfallSlideData,
  RiskOpportunityQuadrantSlideData,
  ApiSpecTerminalSplitSlideData,
  CommercialTierPackagingSlideData,
  Suite2032SlideData,
  Suite2032SlideType,
} from '../types/suite2032Archetypes';

// ============================================================================
// 1. ExecutiveBriefDistillationSlide (Kinetic 4-Step)
// ============================================================================
export const createExecutiveBriefDistillationSlide = (
  id = `slide-${Date.now()}`
): ExecutiveBriefDistillationSlideData => ({
  id,
  type: 'executive-brief-distillation',
  title: 'Executive Strategic Brief & Synthesis Distillation',
  subtitle: 'High-altitude corporate distillation, macro market dynamics, critical risk vector hedge, and FY27 capital deployment',
  kicker: 'STRATEGIC ALIGNMENT & BOARD DISTILLATION',
  executiveSponsor: 'Alim Ul Karim',
  briefingPeriod: 'Q4 FY2026 Executive Review',
  activeStep: 0,
  maxSteps: 4,
  isExecutiveSignoffComplete: true,
  hasConsensusLocked: true,
  hasHighPriorityGlow: true,
  distillationStages: [
    { stepIndex: 0, pillarTitle: 'Macro Paradigm & Context', headlineSummary: 'Rapid consolidation across autonomous infrastructure & AI data sovereignty', coreTakeaway: 'Market transition accelerates consolidation from legacy SaaS to autonomous multi-agent pipelines.', evidenceMetric: '$4.2B', evidenceLabel: 'Addressable SAM', isActive: true, isCompleted: false },
    { stepIndex: 1, pillarTitle: 'Core Operational Bottlenecks', headlineSummary: 'Legacy data silos and inference compute saturation throttling deployment velocity', coreTakeaway: 'Technical debt in unstructured ingest slows enterprise inference throughput by 3.8x.', evidenceMetric: '380ms', evidenceLabel: 'Latency Ceiling', isActive: false, isCompleted: false },
    { stepIndex: 2, pillarTitle: 'Sovereign Architecture Thesis', headlineSummary: 'Decentralized high-throughput mesh fabric with zero-trust cryptographic attestations', coreTakeaway: 'Re-architecting onto distributed micro-clusters cuts inter-region latency by 64%.', evidenceMetric: '64%', evidenceLabel: 'Bandwidth Optimization', isActive: false, isCompleted: false },
    { stepIndex: 3, pillarTitle: 'Capital Allocation & Execution', headlineSummary: 'Prioritizing $48M strategic infrastructure deployment across tier-1 multi-modal hubs', coreTakeaway: 'Capital investment yields breakeven run-rate at month 14 with 42% IRR forecast.', evidenceMetric: '42%', evidenceLabel: 'Projected IRR', isActive: false, isCompleted: false },
  ],
  keySignals: [
    { id: 'signal-01', signalLabel: 'Multi-tenant Data Moat Expansion', impactScore: '9.4/10', isStrategicPriority: true },
    { id: 'signal-02', signalLabel: 'Zero-Downtime Migration Mandate', impactScore: '8.9/10', isStrategicPriority: true },
    { id: 'signal-03', signalLabel: 'Algorithmic Redundancy Shield', impactScore: '8.2/10', isStrategicPriority: false },
  ],
});

// ============================================================================
// 2. MatrixFeatureBenchmarkSlide (Flat Overview)
// ============================================================================
export const createMatrixFeatureBenchmarkSlide = (
  id = `slide-${Date.now()}`
): MatrixFeatureBenchmarkSlideData => ({
  id,
  type: 'matrix-feature-benchmark',
  title: 'Next-Gen Enterprise Feature & Architectural Benchmark',
  subtitle: 'Rigorous capability parity analysis across hyper-scale distributed platforms and zero-trust orchestration stacks',
  kicker: 'COMPETITIVE INTELLIGENCE & MATRIX BENCHMARK',
  benchmarkCategory: 'Enterprise Distributed Autonomous Platforms',
  evaluatedVersion: 'v4.2.0-Production',
  isEvaluatedByThirdParty: true,
  hasEnterpriseComplianceVerified: true,
  hasTelemetryHighlight: true,
  competitors: [
    { id: 'comp-white', name: 'White Platform (Enterprise)', badge: 'Our Platform', isOurPlatform: true },
    { id: 'comp-alpha', name: 'ApexCloud Sovereign', isOurPlatform: false },
    { id: 'comp-beta', name: 'HyperGrid Foundation', isOurPlatform: false },
    { id: 'comp-gamma', name: 'LegacyCloud Enterprise', isOurPlatform: false },
  ],
  featureRows: [
    { id: 'row-01', featureName: 'Zero-Trust Attestation Mesh', featureCategory: 'Security', scores: { 'comp-white': 'supported', 'comp-alpha': 'partial', 'comp-beta': 'unsupported', 'comp-gamma': 'unsupported' }, isDifferentiatingFactor: true, hasEnterpriseSecurity: true },
    { id: 'row-02', featureName: 'Sub-Millisecond Stream Consensus', featureCategory: 'Performance', scores: { 'comp-white': 'supported', 'comp-alpha': 'supported', 'comp-beta': 'partial', 'comp-gamma': 'unsupported' }, isDifferentiatingFactor: true, hasEnterpriseSecurity: false },
    { id: 'row-03', featureName: 'Dynamic PnL Runway Engine', featureCategory: 'Financial Analytics', scores: { 'comp-white': 'supported', 'comp-alpha': 'unsupported', 'comp-beta': 'partial', 'comp-gamma': 'unsupported' }, isDifferentiatingFactor: true, hasEnterpriseSecurity: false },
    { id: 'row-04', featureName: 'Air-Gapped Sovereign Deployment', featureCategory: 'Infrastructure', scores: { 'comp-white': 'supported', 'comp-alpha': 'supported', 'comp-beta': 'unsupported', 'comp-gamma': 'unsupported' }, isDifferentiatingFactor: false, hasEnterpriseSecurity: true },
    { id: 'row-05', featureName: 'Automated Fallback Circuit Breakers', featureCategory: 'Reliability', scores: { 'comp-white': 'supported', 'comp-alpha': 'partial', 'comp-beta': 'partial', 'comp-gamma': 'supported' }, isDifferentiatingFactor: false, hasEnterpriseSecurity: true },
  ],
});

// ============================================================================
// 3. ExecutiveMetricsPulseSlide (Flat Overview)
// ============================================================================
export const createExecutiveMetricsPulseSlide = (
  id = `slide-${Date.now()}`
): ExecutiveMetricsPulseSlideData => ({
  id,
  type: 'executive-metrics-pulse',
  title: 'Executive Operations & Vital Health Metrics Pulse',
  subtitle: 'Real-time telemetry pulse across ARR growth, gross margin expansion, net retention rate, and infrastructure reliability',
  kicker: 'TELEMETRY & BOARD VITALS',
  reportWindow: 'Trailing 30 Days Telemetry',
  overallHealthScore: 98.4,
  isPulseHealthy: true,
  hasRealtimeSyncActive: true,
  hasAlertTriggered: false,
  metrics: [
    { id: 'metric-01', metricLabel: 'Annual Recurring Revenue', metricValue: '$148.6M', changePercentage: '+34.2%', periodComparison: 'vs Prior Year', targetBenchmark: '$140.0M', isPositiveTrend: true, hasExceededTarget: true },
    { id: 'metric-02', metricLabel: 'Net Revenue Retention', metricValue: '132.8%', changePercentage: '+4.5%', periodComparison: 'vs Prior Quarter', targetBenchmark: '125.0%', isPositiveTrend: true, hasExceededTarget: true },
    { id: 'metric-03', metricLabel: 'Gross Operating Margin', metricValue: '81.4%', changePercentage: '+2.1%', periodComparison: 'vs Target', targetBenchmark: '80.0%', isPositiveTrend: true, hasExceededTarget: true },
    { id: 'metric-04', metricLabel: 'System Core Uptime', metricValue: '99.994%', changePercentage: '+0.01%', periodComparison: 'vs SLA', targetBenchmark: '99.990%', isPositiveTrend: true, hasExceededTarget: true },
  ],
  departments: [
    { id: 'dept-01', departmentName: 'Core Engineering & Cloud Architecture', performanceScore: 99.2, status: 'Exceptional', hasAuditClearance: true },
    { id: 'dept-02', departmentName: 'Enterprise Growth & Expansion', performanceScore: 96.8, status: 'On Target', hasAuditClearance: true },
    { id: 'dept-03', departmentName: 'Global Customer Success', performanceScore: 97.4, status: 'On Target', hasAuditClearance: true },
    { id: 'dept-04', departmentName: 'Legal & Regulatory Compliance', performanceScore: 100.0, status: 'Fully Certified', hasAuditClearance: true },
  ],
});

// ============================================================================
// 4. MilestoneRoadmapStreamSlide (Kinetic 4-Step)
// ============================================================================
export const createMilestoneRoadmapStreamSlide = (
  id = `slide-${Date.now()}`
): MilestoneRoadmapStreamSlideData => ({
  id,
  type: 'milestone-roadmap-stream',
  title: 'Milestone Execution & Strategic Roadmap Stream',
  subtitle: 'Continuous delivery trajectory detailing quarterly commitments, release gate attestation, and critical dependency tracks',
  kicker: 'EXECUTION CADENCE & ROADMAP',
  programLead: 'Alim Ul Karim',
  strategicInitiative: 'Autonomous Enterprise Fabric v5',
  activeStep: 0,
  maxSteps: 4,
  isRoadmapOnSchedule: true,
  hasResourceBufferAllocated: true,
  hasMilestoneGlow: true,
  roadmapStages: [
    { stepIndex: 0, timeQuarter: 'Q1 FY27', milestoneTitle: 'Kernel Architecture Decoupling', deliverableSummary: 'Modularize core domain event loop and implement micro-kernel IPC abstractions', targetReleaseDate: '2027-03-31', completionPercentage: 100, isActive: true, isCompleted: true },
    { stepIndex: 1, timeQuarter: 'Q2 FY27', milestoneTitle: 'Sovereign Multi-Region Mesh', deliverableSummary: 'Deploy zero-knowledge cross-region fabric across US, EMEA, and APAC nodes', targetReleaseDate: '2027-06-30', completionPercentage: 85, isActive: false, isCompleted: false },
    { stepIndex: 2, timeQuarter: 'Q3 FY27', milestoneTitle: 'Autonomous Self-Healing Fabric', deliverableSummary: 'Integrate predictive circuit breakers with machine-speed telemetry failover', targetReleaseDate: '2027-09-30', completionPercentage: 40, isActive: false, isCompleted: false },
    { stepIndex: 3, timeQuarter: 'Q4 FY27', milestoneTitle: 'Enterprise GA & Ecosystem Rollout', deliverableSummary: 'Final compliance attestation, SOC2 Type II renewal, and multi-tier launch', targetReleaseDate: '2027-12-15', completionPercentage: 10, isActive: false, isCompleted: false },
  ],
  streamTracks: [
    { id: 'track-01', trackName: 'Distributed Core Runtime', ownerRole: 'Chief Software Engineer', headcount: 24, isCriticalPath: true },
    { id: 'track-02', trackName: 'Zero-Trust Cryptography', ownerRole: 'Lead Cryptographer', headcount: 12, isCriticalPath: true },
    { id: 'track-03', trackName: 'Enterprise UI/UX Experience', ownerRole: 'VP Design', headcount: 16, isCriticalPath: false },
  ],
});

// ============================================================================
// 5. HexArchitectureMeshSlide (Kinetic 4-Step)
// ============================================================================
export const createHexArchitectureMeshSlide = (
  id = `slide-${Date.now()}`
): HexArchitectureMeshSlideData => ({
  id,
  type: 'hex-architecture-mesh',
  title: 'Hexagonal Domain Architecture & Event Mesh',
  subtitle: 'Strict boundary isolation separating pure domain logic, inbound orchestrators, outbound adapters, and event-driven backbones',
  kicker: 'HEXAGONAL DESIGN & INTEGRATION',
  systemIdentifier: 'HEX-SYSTEM-NEXUS-V5',
  domainBoundary: 'Unified Presentation & Analytics Engine',
  activeStep: 0,
  maxSteps: 4,
  isMeshConverged: true,
  hasEventSourcingActive: true,
  hasTelemetryHighlight: true,
  meshStages: [
    { stepIndex: 0, tierName: 'Pure Domain Core', layerDescription: 'Zero-dependency deterministic business models, invariant guards, and domain events', protocolStack: 'Pure Memory / POJO', latencyProfile: 'Sub-1ms', isActive: true, isCompleted: false },
    { stepIndex: 1, tierName: 'Inbound Ports & Gateways', layerDescription: 'gRPC, REST, and WebSocket controllers translating contract inputs into domain commands', protocolStack: 'Protobuf / HTTP/3', latencyProfile: '1.2ms', isActive: false, isCompleted: false },
    { stepIndex: 2, tierName: 'Outbound Adapter Fabric', layerDescription: 'Pluggable database drivers, distributed cache wrappers, and telemetry sinks', protocolStack: 'Split SQLite / Redis', latencyProfile: '2.4ms', isActive: false, isCompleted: false },
    { stepIndex: 3, tierName: 'Asynchronous Event Mesh', layerDescription: 'Reliable Kafka-backed commit-log for saga orchestration and read-model hydration', protocolStack: 'Apache Kafka / Raft', latencyProfile: '3.8ms', isActive: false, isCompleted: false },
  ],
  meshCells: [
    { id: 'cell-01', nodeName: 'OrderExecutionDomain', cellRing: 1, boundaryRole: 'core-domain', throughputRps: 45000, isResilientCircuitArmed: true, hasZeroTrustEnforced: true },
    { id: 'cell-02', nodeName: 'GrpcIngressGateway', cellRing: 2, boundaryRole: 'inbound-adapter', throughputRps: 38000, isResilientCircuitArmed: true, hasZeroTrustEnforced: true },
    { id: 'cell-03', nodeName: 'SplitDbPersistenceAdapter', cellRing: 3, boundaryRole: 'outbound-adapter', throughputRps: 28000, isResilientCircuitArmed: true, hasZeroTrustEnforced: true },
    { id: 'cell-04', nodeName: 'EventBusMeshReplicator', cellRing: 3, boundaryRole: 'mesh-backbone', throughputRps: 52000, isResilientCircuitArmed: true, hasZeroTrustEnforced: true },
  ],
});

// ============================================================================
// 6. BoardGovernanceRosterSlide (Flat Overview - CODE-RED-011 Mandate)
// ============================================================================
export const createBoardGovernanceRosterSlide = (
  id = `slide-${Date.now()}`
): BoardGovernanceRosterSlideData => ({
  id,
  type: 'board-governance-roster',
  title: 'Board Governance & Executive Leadership Roster',
  subtitle: 'Independent oversight committee structure, fiduciary tenure tracking, audit governance, and executive accountability',
  kicker: 'CORPORATE GOVERNANCE & OVERSIGHT',
  governanceYear: 'FY2026-FY2027',
  boardQuorumStatus: 'Quorum Verified (100% Present)',
  isGovernanceCompliant: true,
  hasIndependentMajority: true,
  hasAuditCharterApproved: true,
  boardMembers: [
    {
      id: 'member-01',
      memberName: 'Alim Ul Karim',
      boardRole: 'Chief Software Engineer',
      committeeMembership: 'Technology & Architecture Oversight (Chair)',
      tenureYears: 6,
      biographySnippet: 'Architectural pioneer guiding scalable distributed systems, zero-trust cloud fabrics, and resilient high-speed micro-services.',
      isIndependentDirector: false,
      hasVotingRights: true,
    },
    {
      id: 'member-02',
      memberName: 'Dr. Eleanor Vance',
      boardRole: 'Lead Independent Director',
      committeeMembership: 'Audit & Risk Committee (Chair)',
      tenureYears: 4,
      biographySnippet: 'Former Fortune 50 CFO with two decades of capital governance, compliance audit rigor, and institutional risk oversight.',
      isIndependentDirector: true,
      hasVotingRights: true,
    },
    {
      id: 'member-03',
      memberName: 'Marcus Sterling',
      boardRole: 'Non-Executive Director',
      committeeMembership: 'Compensation & Governance',
      tenureYears: 3,
      biographySnippet: 'Global enterprise software investor focusing on SaaS expansion, international expansion, and strategic M&A execution.',
      isIndependentDirector: true,
      hasVotingRights: true,
    },
    {
      id: 'member-04',
      memberName: 'Sarah Lin',
      boardRole: 'Independent Director',
      committeeMembership: 'Cybersecurity & Data Privacy',
      tenureYears: 2,
      biographySnippet: 'Veteran cybersecurity chief and cryptographer directing national-level sovereign infrastructure resilience initiatives.',
      isIndependentDirector: true,
      hasVotingRights: true,
    },
  ],
  committees: [
    { id: 'comm-01', committeeName: 'Audit & Financial Risk', chairPerson: 'Dr. Eleanor Vance', annualMeetingsCount: 8, hasCharterReviewed: true },
    { id: 'comm-02', committeeName: 'Technology & Cyber Architecture', chairPerson: 'Alim Ul Karim', annualMeetingsCount: 12, hasCharterReviewed: true },
    { id: 'comm-03', committeeName: 'Governance & Nominating', chairPerson: 'Marcus Sterling', annualMeetingsCount: 6, hasCharterReviewed: true },
  ],
});

// ============================================================================
// 7. EditorialQuoteSpotlightSlide (Flat Overview)
// ============================================================================
export const createEditorialQuoteSpotlightSlide = (
  id = `slide-${Date.now()}`
): EditorialQuoteSpotlightSlideData => ({
  id,
  type: 'editorial-quote-spotlight',
  title: 'Strategic Vision & Industry Editorial Spotlight',
  subtitle: 'Distinguished analyst validation and authoritative executive commentary on transformative market shifts',
  kicker: 'INDUSTRY LEADERSHIP & PERSPECTIVE',
  primaryQuote: 'The convergence of deterministic memory architectures with autonomous agent orchestration marks the most profound shift in enterprise software economics since the advent of multi-tenant cloud.',
  quoteAttribution: 'Alim Ul Karim',
  attributionTitle: 'Chief Software Engineer',
  organizationName: 'Global Technology Architecture Review',
  publicationSource: 'Quarterly Systems Engineering Journal, Vol. 48',
  publicationDate: 'October 2026',
  isFeaturedEndorsement: true,
  hasVerifiedCitation: true,
  hasAmbientGlow: true,
  keyTakeaways: [
    { id: 'takeaway-01', takeawayLabel: 'Architectural Determinism', supportingContext: 'Eliminates cascading state failures across large-scale distributed deployments.', isCoreThesis: true },
    { id: 'takeaway-02', takeawayLabel: 'Unit Economic Shift', supportingContext: 'Reduces per-transaction computational cost by up to 70% compared to legacy architectures.', isCoreThesis: false },
    { id: 'takeaway-03', takeawayLabel: 'Autonomous Resilience', supportingContext: 'Self-stabilizing feedback loops guarantee zero data loss during network partition events.', isCoreThesis: false },
  ],
});

// ============================================================================
// 8. CustomerConversionFunnelSlide (Kinetic 4-Step)
// ============================================================================
export const createCustomerConversionFunnelSlide = (
  id = `slide-${Date.now()}`
): CustomerConversionFunnelSlideData => ({
  id,
  type: 'customer-conversion-funnel',
  title: 'Enterprise Acquisition & Customer Conversion Funnel',
  subtitle: 'End-to-end full-funnel efficiency, cohort velocity, qualification thresholds, and multi-touch conversion attribution',
  kicker: 'GO-TO-MARKET VELOCITY & FUNNEL METRICS',
  funnelTimeWindow: 'Q3-Q4 FY2026 Pipeline',
  totalVisitorsAudience: 240000,
  overallConversionPercentage: 4.85,
  activeStep: 0,
  maxSteps: 4,
  isFunnelOptimized: true,
  hasRetargetingActive: true,
  hasTelemetryHighlight: true,
  funnelStages: [
    { stepIndex: 0, stageName: 'Top-of-Funnel Discovery', visitorCount: 240000, conversionRatePercentage: 100.0, dropoffRatePercentage: 68.2, optimizationLever: 'Interactive Developer Sandbox & High-Authority Whitepapers', isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Marketing Qualified Lead (MQL)', visitorCount: 76320, conversionRatePercentage: 31.8, dropoffRatePercentage: 48.0, optimizationLever: 'Technical Architecture Webinars & Benchmark Reports', isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Sales Accepted Opportunity (SQO)', visitorCount: 39680, conversionRatePercentage: 52.0, dropoffRatePercentage: 35.5, optimizationLever: 'Hands-on POCs & Dedicated Solution Architect Engagement', isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Enterprise Contract Close', visitorCount: 25590, conversionRatePercentage: 64.5, dropoffRatePercentage: 0.0, optimizationLever: 'Value Engineering Business Cases & Executive Sponsorship', isActive: false, isCompleted: false },
  ],
  channels: [
    { id: 'chan-01', channelName: 'Direct Developer Community & Open Source', leadVolume: 98000, cacUsd: 140, isTopPerformingChannel: true },
    { id: 'chan-02', channelName: 'Organic Search & Technical Documentation', leadVolume: 72000, cacUsd: 195, isTopPerformingChannel: false },
    { id: 'chan-03', channelName: 'Strategic Technology Partner Referrals', leadVolume: 45000, cacUsd: 320, isTopPerformingChannel: false },
    { id: 'chan-04', channelName: 'Executive Industry Summits', leadVolume: 25000, cacUsd: 650, isTopPerformingChannel: false },
  ],
});

// ============================================================================
// 9. TransformationSplitCanvasSlide (Kinetic 4-Step)
// ============================================================================
export const createTransformationSplitCanvasSlide = (
  id = `slide-${Date.now()}`
): TransformationSplitCanvasSlideData => ({
  id,
  type: 'transformation-split-canvas',
  title: 'Enterprise Digital Transformation Split Canvas',
  subtitle: 'Side-by-side architectural transformation roadmap contrasting legacy monolithic constraints against modern sovereign fabric',
  kicker: 'PARADIGM SHIFT & VALUE REALIZATION',
  programHorizon: '3-Year Enterprise Modernization Horizon',
  executiveSummary: 'Systematic migration de-risks critical transactional pathways while generating immediate operational savings.',
  activeStep: 0,
  maxSteps: 4,
  isTransformationActive: true,
  hasChangeManagementApproved: true,
  hasTelemetryGlow: true,
  transformationStages: [
    { stepIndex: 0, phaseName: 'Foundation & Telemetry Interception', phaseObjective: 'Deploy non-invasive sidecar telemetry across existing core banking systems.', legacyStateSnapshot: 'Fragmented logging across 18 isolated servers', futureStateSnapshot: 'Unified OpenTelemetry stream with central analytics', valueRealizationPercentage: 25, isActive: true, isCompleted: true },
    { stepIndex: 1, phaseName: 'Strangler Fig Domain Decoupling', phaseObjective: 'Extract customer identity and account entitlement into isolated micro-services.', legacyStateSnapshot: 'Tightly coupled monolithic schema with lock contention', futureStateSnapshot: 'Autonomous domain boundaries with optimistic concurrency', valueRealizationPercentage: 50, isActive: false, isCompleted: false },
    { stepIndex: 2, phaseName: 'Real-Time Event Mesh Activation', phaseObjective: 'Reroute high-volume transactional flows onto distributed event-driven spine.', legacyStateSnapshot: 'Batch processing with 6-hour reconciliation delay', futureStateSnapshot: 'Sub-second event streaming with instantaneous audit ledger', valueRealizationPercentage: 75, isActive: false, isCompleted: false },
    { stepIndex: 3, phaseName: 'Full Sovereign Mesh Deployment', phaseObjective: 'Decommission legacy mainframes and complete transition to distributed cloud-native mesh.', legacyStateSnapshot: 'Brittle manual failover taking 45+ minutes', futureStateSnapshot: 'Zero-downtime automated self-healing across multi-zones', valueRealizationPercentage: 100, isActive: false, isCompleted: false },
  ],
  valuePillars: [
    { id: 'pillar-01', pillarTitle: 'Compute Cost Efficiency', roiMultiplier: '4.2x', efficiencyGainPercentage: 68.5, isStrategicTransformation: true },
    { id: 'pillar-02', pillarTitle: 'Release Cycle Velocity', roiMultiplier: '8.0x', efficiencyGainPercentage: 82.0, isStrategicTransformation: true },
    { id: 'pillar-03', pillarTitle: 'Mean Time to Resolution (MTTR)', roiMultiplier: '12.5x', efficiencyGainPercentage: 91.0, isStrategicTransformation: false },
  ],
});

// ============================================================================
// 10. BentoCapabilityMosaicSlide (Flat Overview)
// ============================================================================
export const createBentoCapabilityMosaicSlide = (
  id = `slide-${Date.now()}`
): BentoCapabilityMosaicSlideData => ({
  id,
  type: 'bento-capability-mosaic',
  title: 'Bento Grid System Capability & Architecture Mosaic',
  subtitle: 'Modular layout highlighting modular core runtime, multi-tenant isolation, real-time analytics, and developer ergonomics',
  kicker: 'PLATFORM CAPABILITIES & BENTO MOSAIC',
  mosaicCategory: 'Next-Generation Autonomous Systems',
  architectureVersion: 'Release 5.4-LTS',
  isMosaicFullyDeployed: true,
  hasModularArchitecture: true,
  hasGridTelemetryHighlight: true,
  tiles: [
    { id: 'tile-01', tileTitle: 'Deterministic Execution Core', tileSpan: 'col-span-2', tileDescription: 'Guarantees bit-for-bit replayability across distributed nodes with sub-millisecond state convergence.', badgeLabel: 'CORE ENGINE', keyMetricValue: '99.999%', keyMetricLabel: 'State Replay Fidelity', iconName: 'Cpu', isFeaturedCapability: true, hasLiveStatusPulse: true },
    { id: 'tile-02', tileTitle: 'Zero-Trust Mesh Attestation', tileSpan: 'col-span-1', tileDescription: 'Mutual TLS with continuous hardware TPM cryptographic verification.', badgeLabel: 'SECURITY', keyMetricValue: '0 Trust', keyMetricLabel: 'Identity Verification', iconName: 'ShieldCheck', isFeaturedCapability: true, hasLiveStatusPulse: false },
    { id: 'tile-03', tileTitle: 'Split SQLite Distributed Store', tileSpan: 'col-span-1', tileDescription: 'Segregates read replicas from write leaders for boundless local analytical speed.', badgeLabel: 'DATABASE', keyMetricValue: '< 0.4ms', keyMetricLabel: 'Local Query Latency', iconName: 'Database', isFeaturedCapability: false, hasLiveStatusPulse: true },
    { id: 'tile-04', tileTitle: 'Interactive Presenter Canvas', tileSpan: 'col-span-2', tileDescription: 'Pure DOM 1920x1080 virtual coordinate space supporting fluid 60fps spring transitions.', badgeLabel: 'PRESENTATION', keyMetricValue: '60 FPS', keyMetricLabel: 'Render Fluidity', iconName: 'Monitor', isFeaturedCapability: false, hasLiveStatusPulse: true },
    { id: 'tile-05', tileTitle: 'Automated Step Progression Engine', tileSpan: 'col-span-1', tileDescription: 'Multi-phase kinetic state machine governing cascading reveals and telemetry transitions.', badgeLabel: 'STEP CONTROLLER', keyMetricValue: '15 Suites', keyMetricLabel: 'Archetype Coverage', iconName: 'Layers', isFeaturedCapability: false, hasLiveStatusPulse: false },
    { id: 'tile-06', tileTitle: 'Enterprise Compliance & Audit Vault', tileSpan: 'col-span-2', tileDescription: 'Tamper-evident append-only ledger satisfying SOC2 Type II, HIPAA, and ISO27001.', badgeLabel: 'GOVERNANCE', keyMetricValue: '100%', keyMetricLabel: 'Audit Compliance', iconName: 'Lock', isFeaturedCapability: true, hasLiveStatusPulse: true },
  ],
});

// ============================================================================
// 11. DealEcosystemFlywheelSlide (Kinetic 4-Step)
// ============================================================================
export const createDealEcosystemFlywheelSlide = (
  id = `slide-${Date.now()}`
): DealEcosystemFlywheelSlideData => ({
  id,
  type: 'deal-ecosystem-flywheel',
  title: 'Deal Ecosystem & Platform Network Effects Flywheel',
  subtitle: 'Self-reinforcing growth engine connecting enterprise developers, certified ISVs, cloud hyperscalers, and global clients',
  kicker: 'ECOSYSTEM EXPANSION & FLYWHEEL',
  ecosystemName: 'Nexus Global Partner Fabric',
  compoundGrowthRatePercentage: 46.8,
  activeStep: 0,
  maxSteps: 4,
  isFlywheelSelfSustaining: true,
  hasNetworkEffectsAccelerated: true,
  hasDynamicRotationGlow: true,
  flywheelStages: [
    { stepIndex: 0, stageTitle: 'Developer Traction & Tooling', flywheelDriver: 'Robust SDKs and rapid documentation drive frictionless adoption among core engineers.', momentumMetric: '145K active developers', reinforcingFeedbackLoop: 'Accelerates third-party plugin and integration authoring', isActive: true, isCompleted: true },
    { stepIndex: 1, stageTitle: 'Certified ISV Marketplace', flywheelDriver: 'Commercial software vendors deploy pre-packaged extensions directly onto the platform mesh.', momentumMetric: '420+ certified partner apps', reinforcingFeedbackLoop: 'Drives enterprise workflow lock-in and multi-product suites', isActive: false, isCompleted: false },
    { stepIndex: 2, stageTitle: 'Enterprise Volume & Data Moat', flywheelDriver: 'Large global enterprises route billions of transactions through unified partner workflows.', momentumMetric: '$1.8B annual GMV', reinforcingFeedbackLoop: 'Generates high-fidelity benchmarks that refine system intelligence', isActive: false, isCompleted: false },
    { stepIndex: 3, stageTitle: 'Hyperscaler Co-Selling Acceleration', flywheelDriver: 'Global cloud platforms co-package solutions into unified procurement agreements.', momentumMetric: '68 Tier-1 joint contracts', reinforcingFeedbackLoop: 'Reinvests shared capital into developer grants and community growth', isActive: false, isCompleted: false },
  ],
  partnerNodes: [
    { id: 'partner-01', partnerTier: 'Premier Global Cloud Hyperscalers', annualGrossMerchandiseValue: '$840M', isAnchorEcosystemPartner: true, hasJointGoToMarketVerified: true },
    { id: 'partner-02', partnerTier: 'Strategic Global System Integrators', annualGrossMerchandiseValue: '$520M', isAnchorEcosystemPartner: true, hasJointGoToMarketVerified: true },
    { id: 'partner-03', partnerTier: 'Independent ISV Innovation Tier', annualGrossMerchandiseValue: '$290M', isAnchorEcosystemPartner: false, hasJointGoToMarketVerified: true },
    { id: 'partner-04', partnerTier: 'Specialized Regional Value-Added Resellers', annualGrossMerchandiseValue: '$150M', isAnchorEcosystemPartner: false, hasJointGoToMarketVerified: true },
  ],
});

// ============================================================================
// 12. PnlRunwayWaterfallSlide (Kinetic 4-Step)
// ============================================================================
export const createPnlRunwayWaterfallSlide = (
  id = `slide-${Date.now()}`
): PnlRunwayWaterfallSlideData => ({
  id,
  type: 'pnl-runway-waterfall',
  title: 'Corporate PnL & Liquidity Runway Waterfall',
  subtitle: 'Bridging initial cash reserves through operational cashflow, gross margins, R&D allocation, and net monthly burn',
  kicker: 'CAPITAL ALLOCATION & CASH RUNWAY',
  fiscalPeriod: 'FY2026-FY2027 Capital Outlook',
  startingCashBalanceMillionUsd: 84.5,
  endingCashBalanceMillionUsd: 112.3,
  runwayMonthsRemaining: 44,
  activeStep: 0,
  maxSteps: 4,
  isRunwayHealthy: true,
  hasCapitalCallBuffer: true,
  hasFinancialAuditConfirmed: true,
  waterfallStages: [
    { stepIndex: 0, stepLabel: 'Beginning Cash Reserves', categoryType: 'gross-revenue', deltaAmountMillionUsd: 84.5, cumulativeBalanceMillionUsd: 84.5, varianceExplanation: 'Unencumbered treasury cash and liquid short-term commercial paper holdings', isActive: true, isCompleted: true },
    { stepIndex: 1, stepLabel: 'Annual Enterprise Revenue', categoryType: 'gross-revenue', deltaAmountMillionUsd: 52.8, cumulativeBalanceMillionUsd: 137.3, varianceExplanation: 'GAAP subscription revenue and recurring multi-year enterprise contracts', isActive: false, isCompleted: false },
    { stepIndex: 2, stepLabel: 'Cost of Goods Sold (COGS)', categoryType: 'cogs-reduction', deltaAmountMillionUsd: -10.4, cumulativeBalanceMillionUsd: 126.9, varianceExplanation: 'Direct cloud compute, networking, and tier-1 vendor hosting expenses', isActive: false, isCompleted: false },
    { stepIndex: 3, stepLabel: 'Operating & Growth Investment (OpEx)', categoryType: 'opex-expense', deltaAmountMillionUsd: -14.6, cumulativeBalanceMillionUsd: 112.3, varianceExplanation: 'Strategic R&D engineering payroll, enterprise marketing, and G&A overhead', isActive: false, isCompleted: false },
  ],
  summaryMetrics: [
    { id: 'sum-01', metricLabel: 'Net Cash Expansion Rate', metricValue: '+$27.8M / yr', isRunwayPositive: true, hasBoardApproval: true },
    { id: 'sum-02', metricLabel: 'Monthly Net Burn Rate', metricValue: '-$0.35M / mo', isRunwayPositive: true, hasBoardApproval: true },
    { id: 'sum-03', metricLabel: 'Rule of 40 Operational Score', metricValue: '58.4%', isRunwayPositive: true, hasBoardApproval: true },
  ],
});

// ============================================================================
// 13. RiskOpportunityQuadrantSlide (Flat Overview)
// ============================================================================
export const createRiskOpportunityQuadrantSlide = (
  id = `slide-${Date.now()}`
): RiskOpportunityQuadrantSlideData => ({
  id,
  type: 'risk-opportunity-quadrant',
  title: 'Enterprise Risk & Strategic Opportunity Quadrant',
  subtitle: '2x2 executive framework calibrating probability versus strategic impact across existential threats and exponential opportunities',
  kicker: 'PORTFOLIO RISK & STRATEGIC PRIORITIZATION',
  auditQuarter: 'Q4 FY2026 Board Audit',
  chiefRiskOfficer: 'Alim Ul Karim',
  isRiskEnvelopeBounded: true,
  hasExecutiveOversightApproved: true,
  hasQuadrantOverlayActive: true,
  items: [
    { id: 'item-01', itemTitle: 'Generative Multi-Agent Platform Disruption', impactScore: 9.2, probabilityScore: 8.8, quadrant: 'strategic-opportunity', mitigationAction: 'Accelerate developer ecosystem investment and open standards integration.', isCriticalAttentionRequired: true, hasMitigationAssigned: true },
    { id: 'item-02', itemTitle: 'Sovereign Cloud Data Residency Mandates', impactScore: 8.5, probabilityScore: 7.4, quadrant: 'containable-risk', mitigationAction: 'Establish localized isolated database shards across EU and APAC jurisdictions.', isCriticalAttentionRequired: true, hasMitigationAssigned: true },
    { id: 'item-03', itemTitle: 'Critical Supply Chain Foundry Bottlenecks', impactScore: 9.5, probabilityScore: 4.2, quadrant: 'existential-threat', mitigationAction: 'Dual-source compute agreements and diversify architecture across ARM and x86.', isCriticalAttentionRequired: false, hasMitigationAssigned: true },
    { id: 'item-04', itemTitle: 'Automated CI/CD Test Optimization', impactScore: 6.0, probabilityScore: 9.1, quadrant: 'tactical-quick-win', mitigationAction: 'Implement GitMap parallel execution scripts to cut build waiting by 65%.', isCriticalAttentionRequired: false, hasMitigationAssigned: true },
  ],
});

// ============================================================================
// 14. ApiSpecTerminalSplitSlide (Kinetic 4-Step)
// ============================================================================
export const createApiSpecTerminalSplitSlide = (
  id = `slide-${Date.now()}`
): ApiSpecTerminalSplitSlideData => ({
  id,
  type: 'api-spec-terminal-split',
  title: 'Developer API Specification & Interactive Terminal Split',
  subtitle: 'Side-by-side OpenAPI specification documentation with real-time cURL terminal invocation and response telemetry',
  kicker: 'DEVELOPER EXPERIENCE & API ARCHITECTURE',
  apiTitle: 'Nexus Sovereign Compute & Event Dispatch API',
  openApiVersion: 'v3.1.0',
  baseUrl: 'https://api.nexus.enterprise.io/v1',
  activeStep: 0,
  maxSteps: 4,
  isTlsEnforced: true,
  hasRateLimitActive: true,
  hasLiveSyntaxHighlighting: true,
  terminalStages: [
    { stepIndex: 0, operationName: 'Authenticate & Ingest Token', httpMethod: 'POST', endpointPath: '/auth/token', requestSnippet: 'curl -X POST https://api.nexus.enterprise.io/v1/auth/token \\\n  -H "Content-Type: application/json" \\\n  -d \'{"clientId": "nexus_enterprise_prod", "clientSecret": "sec_k982...x"}\'', responseSnippet: '{\n  "accessToken": "eyJh...98z",\n  "tokenType": "Bearer",\n  "expiresInSeconds": 3600,\n  "scope": "compute:read compute:write"\n}', latencyBenchmarkMs: 42, isActive: true, isCompleted: true },
    { stepIndex: 1, operationName: 'Submit Distributed Task', httpMethod: 'POST', endpointPath: '/tasks/dispatch', requestSnippet: 'curl -X POST https://api.nexus.enterprise.io/v1/tasks/dispatch \\\n  -H "Authorization: Bearer $NEXUS_TOKEN" \\\n  -d \'{"model": "sovereign-agent-v5", "payload": {"dataset": "q4_metrics"}}\'', responseSnippet: '{\n  "taskId": "task-88219-exa",\n  "status": "QUEUED",\n  "estimatedDurationMs": 180,\n  "allocatedCores": 128\n}', latencyBenchmarkMs: 65, isActive: false, isCompleted: false },
    { stepIndex: 2, operationName: 'Stream Execution Telemetry', httpMethod: 'GET', endpointPath: '/tasks/task-88219-exa/telemetry', requestSnippet: 'curl -X GET https://api.nexus.enterprise.io/v1/tasks/task-88219-exa/telemetry \\\n  -H "Authorization: Bearer $NEXUS_TOKEN" \\\n  -H "Accept: text/event-stream"', responseSnippet: 'data: {"step": 1, "progress": 0.45, "throughputGbps": 24.2}\ndata: {"step": 2, "progress": 0.90, "throughputGbps": 28.5}\ndata: {"step": 3, "status": "COMPLETED"}', latencyBenchmarkMs: 18, isActive: false, isCompleted: false },
    { stepIndex: 3, operationName: 'Harvest Result Dataset', httpMethod: 'GET', endpointPath: '/tasks/task-88219-exa/results', requestSnippet: 'curl -X GET https://api.nexus.enterprise.io/v1/tasks/task-88219-exa/results \\\n  -H "Authorization: Bearer $NEXUS_TOKEN"', responseSnippet: '{\n  "taskId": "task-88219-exa",\n  "consensusScore": 0.9998,\n  "metricsGenerated": 420,\n  "checksum": "sha256:7f9a88..."\n}', latencyBenchmarkMs: 35, isActive: false, isCompleted: false },
  ],
  standardHeaders: [
    { id: 'hdr-01', headerName: 'Authorization', headerValueDescription: 'Bearer <cryptographic_jwt_token>', isRequiredHeader: true },
    { id: 'hdr-02', headerName: 'X-Nexus-Tenant-Id', headerValueDescription: 'Unique multi-tenant organization identifier', isRequiredHeader: true },
    { id: 'hdr-03', headerName: 'X-Nexus-Idempotency-Key', headerValueDescription: 'UUIDv4 ensuring safe non-duplicate retries', isRequiredHeader: false },
  ],
});

// ============================================================================
// 15. CommercialTierPackagingSlide (Flat Overview)
// ============================================================================
export const createCommercialTierPackagingSlide = (
  id = `slide-${Date.now()}`
): CommercialTierPackagingSlideData => ({
  id,
  type: 'commercial-tier-packaging',
  title: 'Enterprise Commercial Tiers & Feature Packaging',
  subtitle: 'Value-aligned subscription architecture spanning Developer Starter, Growth Team, Enterprise Fabric, and Sovereign On-Prem',
  kicker: 'PACKAGING & MONETIZATION ARCHITECTURE',
  pricingModel: 'Value-Metric & Capacity Packaging',
  currencyCode: 'USD',
  annualDiscountPercentage: 20,
  isAnnualBillingDefault: true,
  hasEnterpriseContractOption: true,
  hasPriceLockGuaranteed: true,
  pricingTiers: [
    { id: 'tier-01', tierName: 'Starter Developer', tagline: 'Self-serve exploration for individual architects and early experiments.', monthlyPriceUsd: 0, billingFrequency: 'Free Forever', featuresList: ['Up to 5 concurrent agent workflows', 'Community Slack support', '10GB shared vector store capacity', 'Standard REST endpoints'], isRecommendedTier: false, hasCustomDeployment: false, slaUptimePercentage: 99.5 },
    { id: 'tier-02', tierName: 'Growth Team', tagline: 'Collaborative development for fast-scaling engineering teams.', monthlyPriceUsd: 240, billingFrequency: 'Billed Annually', featuresList: ['Unlimited agent workflows', 'Priority email and ticket support', '500GB high-speed encrypted storage', 'Sub-millisecond webhook streaming', 'Automated regression test runner'], isRecommendedTier: false, hasCustomDeployment: false, slaUptimePercentage: 99.9 },
    { id: 'tier-03', tierName: 'Enterprise Fabric', tagline: 'Mission-critical scale for modern global digital organizations.', monthlyPriceUsd: 1200, billingFrequency: 'Billed Annually', featuresList: ['Dedicated VPC peering & SSO/SAML', '24/7/365 dedicated solution architect', 'Unlimited distributed vector storage', 'Custom ML model fine-tuning adapters', 'Full SOC2 Type II and HIPAA attestation'], isRecommendedTier: true, hasCustomDeployment: true, slaUptimePercentage: 99.99 },
    { id: 'tier-04', tierName: 'Sovereign On-Prem', tagline: 'Air-gapped deployment for defense, banking, and government entities.', monthlyPriceUsd: 4500, billingFrequency: 'Custom Enterprise Contract', featuresList: ['Complete source code escrow access', 'Air-gapped offline runtime verification', 'Hardware TPM cryptographic attestation', 'Custom SLA with financial guarantees', 'Dedicated engineering liaison'], isRecommendedTier: false, hasCustomDeployment: true, slaUptimePercentage: 99.999 },
  ],
  addOnModules: [
    { id: 'addon-01', moduleName: 'High-Volume Dedicated GPU Inference Pod', monthlyPriceUsd: 850, isSecurityFeature: false },
    { id: 'addon-02', moduleName: 'Automated Continuous Compliance Audit Bot', monthlyPriceUsd: 400, isSecurityFeature: true },
    { id: 'addon-03', moduleName: 'Global Anycast Low-Latency Edge Acceleration', monthlyPriceUsd: 300, isSecurityFeature: false },
  ],
});

// Master Factory Map for Suite 2032
export const SUITE_2032_FACTORIES: Record<Suite2032SlideType, (id?: string) => Suite2032SlideData> = {
  'executive-brief-distillation': createExecutiveBriefDistillationSlide,
  'matrix-feature-benchmark': createMatrixFeatureBenchmarkSlide,
  'executive-metrics-pulse': createExecutiveMetricsPulseSlide,
  'milestone-roadmap-stream': createMilestoneRoadmapStreamSlide,
  'hex-architecture-mesh': createHexArchitectureMeshSlide,
  'board-governance-roster': createBoardGovernanceRosterSlide,
  'editorial-quote-spotlight': createEditorialQuoteSpotlightSlide,
  'customer-conversion-funnel': createCustomerConversionFunnelSlide,
  'transformation-split-canvas': createTransformationSplitCanvasSlide,
  'bento-capability-mosaic': createBentoCapabilityMosaicSlide,
  'deal-ecosystem-flywheel': createDealEcosystemFlywheelSlide,
  'pnl-runway-waterfall': createPnlRunwayWaterfallSlide,
  'risk-opportunity-quadrant': createRiskOpportunityQuadrantSlide,
  'api-spec-terminal-split': createApiSpecTerminalSplitSlide,
  'commercial-tier-packaging': createCommercialTierPackagingSlide,
};

export const createSuite2032Slide = (
  type: string,
  id = `slide-${Date.now()}`
): Suite2032SlideData => {
  const factory = SUITE_2032_FACTORIES[type as Suite2032SlideType];

  return factory ? (factory(id) as Suite2032SlideData) : createExecutiveBriefDistillationSlide(id);
};

// Archetype Options Catalog for Suite 2032
export const SUITE_2032_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  { type: 'executive-brief-distillation', label: 'Executive Brief Distillation', category: 'Strategy & Metrics', desc: 'High-altitude corporate distillation, macro market dynamics, and capital deployment', icon: 'FileText' },
  { type: 'matrix-feature-benchmark', label: 'Matrix Feature Benchmark', category: 'Competitive Intelligence', desc: 'Rigorous capability parity analysis across hyper-scale distributed platforms', icon: 'Table' },
  { type: 'executive-metrics-pulse', label: 'Executive Metrics Pulse', category: 'Strategy & Metrics', desc: 'Real-time telemetry pulse across ARR growth, gross margin, and infrastructure reliability', icon: 'Activity' },
  { type: 'milestone-roadmap-stream', label: 'Milestone Roadmap Stream', category: 'Corporate Strategy', desc: 'Continuous delivery trajectory detailing quarterly commitments and release gates', icon: 'GitCommit' },
  { type: 'hex-architecture-mesh', label: 'Hexagonal Architecture Mesh', category: 'Product & Architecture', desc: 'Strict boundary isolation separating domain logic, inbound gateways, and adapters', icon: 'Hexagon' },
  { type: 'board-governance-roster', label: 'Board Governance Roster', category: 'Corporate Governance', desc: 'Independent oversight committee structure, fiduciary tenure, and leadership', icon: 'Users' },
  { type: 'editorial-quote-spotlight', label: 'Editorial Quote Spotlight', category: 'Thought Leadership', desc: 'Distinguished analyst validation and authoritative executive perspective', icon: 'Quote' },
  { type: 'customer-conversion-funnel', label: 'Customer Conversion Funnel', category: 'Go-to-Market', desc: 'End-to-end full-funnel efficiency, cohort velocity, and qualification thresholds', icon: 'Filter' },
  { type: 'transformation-split-canvas', label: 'Transformation Split Canvas', category: 'Corporate Strategy', desc: 'Side-by-side architectural transformation roadmap contrasting legacy vs target', icon: 'Columns' },
  { type: 'bento-capability-mosaic', label: 'Bento Capability Mosaic', category: 'Product & Architecture', desc: 'Modular grid layout highlighting runtime, security, database, and telemetry', icon: 'LayoutGrid' },
  { type: 'deal-ecosystem-flywheel', label: 'Deal Ecosystem Flywheel', category: 'Go-to-Market', desc: 'Self-reinforcing growth engine connecting developers, ISVs, and hyperscalers', icon: 'RefreshCw' },
  { type: 'pnl-runway-waterfall', label: 'PnL Runway Waterfall', category: 'Financial Analytics', desc: 'Bridging cash reserves through operational cashflow, gross margins, and net burn', icon: 'TrendingDown' },
  { type: 'risk-opportunity-quadrant', label: 'Risk Opportunity Quadrant', category: 'Strategy & Metrics', desc: '2x2 executive framework calibrating probability versus strategic impact', icon: 'Grid' },
  { type: 'api-spec-terminal-split', label: 'API Spec Terminal Split', category: 'Developer Experience', desc: 'Side-by-side OpenAPI documentation with live terminal invocation and response', icon: 'Terminal' },
  { type: 'commercial-tier-packaging', label: 'Commercial Tier Packaging', category: 'Go-to-Market', desc: 'Value-aligned subscription architecture spanning Starter to Sovereign On-Prem', icon: 'Package' },
];

// Helper to batch instantiate all 15 demo slides for Suite 2032
export const createSuite2032Slides = (startId = 320): SlideData[] => [
  createExecutiveBriefDistillationSlide(`slide-${startId}`),
  createMatrixFeatureBenchmarkSlide(`slide-${startId + 1}`),
  createExecutiveMetricsPulseSlide(`slide-${startId + 2}`),
  createMilestoneRoadmapStreamSlide(`slide-${startId + 3}`),
  createHexArchitectureMeshSlide(`slide-${startId + 4}`),
  createBoardGovernanceRosterSlide(`slide-${startId + 5}`),
  createEditorialQuoteSpotlightSlide(`slide-${startId + 6}`),
  createCustomerConversionFunnelSlide(`slide-${startId + 7}`),
  createTransformationSplitCanvasSlide(`slide-${startId + 8}`),
  createBentoCapabilityMosaicSlide(`slide-${startId + 9}`),
  createDealEcosystemFlywheelSlide(`slide-${startId + 10}`),
  createPnlRunwayWaterfallSlide(`slide-${startId + 11}`),
  createRiskOpportunityQuadrantSlide(`slide-${startId + 12}`),
  createApiSpecTerminalSplitSlide(`slide-${startId + 13}`),
  createCommercialTierPackagingSlide(`slide-${startId + 14}`),
];
