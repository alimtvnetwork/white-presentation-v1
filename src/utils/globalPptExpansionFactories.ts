// lint-allow: file-size reason="Production default factories for 16 Global PPT Expansion slide archetypes" max=420
import type {
  ExecutiveMandateScorecardSlideData,
  BoardQuorumResolutionLedgerSlideData,
  MacroEconomicThreatRadarSlideData,
  ZeroTrustNetworkMeshSlideData,
  DistributedConsensusRaftLogSlideData,
  DataPipelineLineageDagSlideData,
  CodeWalkthroughSyntaxLensSlideData,
  TierComparisonFeatureMatrixSlideData,
  ArrGrowthBridgeWaterfallSlideData,
  MultiTierSaasPackagingTableSlideData,
  FlywheelGrowthMomentumOrbitSlideData,
  EnterpriseCaseStudyHeroSlideData,
  ClientWallSocialProofGridSlideData,
  IncidentRetrospectiveTimelineSlideData,
  InteractiveFaqTabbedDeckSlideData,
  AudienceDecisionForkMatrixSlideData,
  GlobalPptExpansionSlideData,
} from '../types/globalPptExpansionArchetypes';

const LEAD = 'Alim Ul Karim';
const LEAD_ROLE = 'Chief Software Engineer';

export const createExecutiveMandateScorecardSlide = (
  id = `slide-mandate-scorecard-${Date.now()}`
): ExecutiveMandateScorecardSlideData => ({
  id,
  type: 'executive-mandate-scorecard',
  title: 'Annual C-Suite Strategic Mandates & Capital Allocation',
  subtitle: 'Executive OKR performance tracking, ROI yield realization, and audit committee governance scorecard.',
  kicker: 'STRATEGIC GOVERNANCE',
  reportingFiscalYear: 'FY2026',
  reportingQuarter: 'Q3',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  capitalEfficiencyRatio: '4.8x Compounded',
  hasAuditCommitteeEndorsement: true,
  hasDetailedCapitalTracking: true,
  mandateStages: [
    { stepIndex: 0, stageName: 'Strategic Prioritization', stageDescription: 'Mandate scoping & resource allocation', isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Engineering Mobilization', stageDescription: 'Core team deployment and telemetry setup', isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Milestone Execution', stageDescription: 'Production rollout & mid-quarter review', isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Audit & Realization', stageDescription: 'Independent fiduciary verification', isActive: false, isCompleted: false },
  ],
  mandateItems: [
    { id: 'm-1', pillar: 'Cloud Infrastructure', mandateName: 'Hyperscale Migration', objectiveSummary: 'Zero-downtime database sharding to planetary mesh', executiveOwner: 'VP Infrastructure', ownerRole: 'VP Engineering', ragStatus: 'green', targetDate: 'Q3 FY26', allocatedCapitalFormatted: '$14.2M', roiProjected: '320% Yield', isCompleted: true, isActive: false, hasFiduciarySignoff: true },
    { id: 'm-2', pillar: 'AI & Data Moats', mandateName: 'Private LLM Inference Enclave', objectiveSummary: 'Sub-15ms speculative decoding cluster on sovereign silicon', executiveOwner: 'Alim Ul Karim', ownerRole: LEAD_ROLE, ragStatus: 'green', targetDate: 'Q4 FY26', allocatedCapitalFormatted: '$22.0M', roiProjected: '480% Yield', isCompleted: false, isActive: true, hasFiduciarySignoff: true },
    { id: 'm-3', pillar: 'Cyber Resilience', mandateName: 'Zero-Trust mTLS Mesh', objectiveSummary: 'Universal SPIFFE/SPIRE cryptographic workload attestation', executiveOwner: 'Chief Information Security Officer', ownerRole: 'CISO', ragStatus: 'blue', targetDate: 'Q1 FY27', allocatedCapitalFormatted: '$8.5M', roiProjected: 'Risk Hedge', isCompleted: false, isActive: false, hasFiduciarySignoff: true },
    { id: 'm-4', pillar: 'Commercial GTM', mandateName: 'Global Enterprise Expansion', objectiveSummary: 'Tier-1 EMEA and APAC enterprise contract activations', executiveOwner: 'Chief Commercial Officer', ownerRole: 'CRO', ragStatus: 'amber', targetDate: 'Q4 FY26', allocatedCapitalFormatted: '$18.0M', roiProjected: '240% ARR', isCompleted: false, isActive: false, hasFiduciarySignoff: false },
  ],
});

export const createBoardQuorumResolutionLedgerSlide = (
  id = `slide-board-quorum-${Date.now()}`
): BoardQuorumResolutionLedgerSlideData => ({
  id,
  type: 'board-quorum-resolution-ledger',
  title: 'Board of Directors Quorum & Unanimous Action Ledger',
  subtitle: 'Binding corporate resolutions, fiduciary vote tabulation, and cryptographic meeting attestation.',
  kicker: 'BOARDROOM GOVERNANCE',
  meetingReference: 'BOD-2026-OCT-EXTRAORDINARY',
  meetingDate: 'October 3, 2026',
  totalSharesRepresentedFormatted: '48,250,000 Common (94.2%)',
  quorumPercentageFormatted: '94.2% Verified Quorum',
  isQuorumEstablished: true,
  hasUnanimousConsent: true,
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  resolutions: [
    { resolutionId: 'RES-01', statutoryCode: 'DEL-CORP-SEC-141', resolutionTitle: 'Authorization of Series B Capital Expansion', summaryClause: 'Approves allocation of preferred equity at $1.4B valuation.', votesFor: 7, votesAgainst: 0, votesAbstain: 0, passPercentage: 100, isPassed: true, hasRegulatoryNotice: true, legalFilingReference: 'SEC-FORM-D-8821' },
    { resolutionId: 'RES-02', statutoryCode: 'DEL-CORP-SEC-142', resolutionTitle: 'Adoption of Sovereign AI Architecture Mandate', summaryClause: 'Mandates on-prem and private enclave processing for all customer telemetry.', votesFor: 7, votesAgainst: 0, votesAbstain: 0, passPercentage: 100, isPassed: true, hasRegulatoryNotice: false, legalFilingReference: 'BOARD-MINUTES-OCT26' },
    { resolutionId: 'RES-03', statutoryCode: 'DEL-CORP-SEC-143', resolutionTitle: 'Appointment of Chief Software Engineer to Tech Advisory', summaryClause: 'Ratifies executive technical oversight charter for Alim Ul Karim.', votesFor: 7, votesAgainst: 0, votesAbstain: 0, passPercentage: 100, isPassed: true, hasRegulatoryNotice: false, legalFilingReference: 'EXEC-CHARTER-2026' },
  ],
  signatories: [
    { signatoryName: 'Eleanor Vance', signatoryTitle: 'Chairwoman of the Board', signatureTimestamp: '2026-10-03 14:30 UTC', isSigned: true, hasCryptographicSeal: true },
    { signatoryName: LEAD, signatoryTitle: LEAD_ROLE, signatureTimestamp: '2026-10-03 14:35 UTC', isSigned: true, hasCryptographicSeal: true },
    { signatoryName: 'Marcus Sterling', signatoryTitle: 'General Counsel & Secretary', signatureTimestamp: '2026-10-03 14:40 UTC', isSigned: true, hasCryptographicSeal: true },
  ],
});

export const createMacroEconomicThreatRadarSlide = (
  id = `slide-threat-radar-${Date.now()}`
): MacroEconomicThreatRadarSlideData => ({
  id,
  type: 'macro-economic-threat-radar',
  title: 'Macro-Economic Threat Radar & Strategic Hedging Matrix',
  subtitle: 'Continuous environmental threat telemetry across regulatory, geopolitical, capital, and technological vectors.',
  kicker: 'RISK MANAGEMENT',
  assessmentHorizon: 'Trailing 18 Months (2026 - 2027)',
  compositeMacroRiskIndex: 38,
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasHedgingProtocolActive: true,
  hasRealTimeFeedConnection: true,
  radarStages: [
    { quadrantIndex: 0, quadrantTitle: 'Monetary & Capital Volatility', quadrantCode: 'Q1-CAPITAL', compositeRiskScore: 42, isActive: true, isCompleted: false, threatItems: [
      { threatId: 't-1', threatName: 'Sovereign Debt Yield Spikes', threatScore: 65, threatVelocity: 'stable', hedgingStrategy: 'Multi-currency treasury cash reserve matching', isCriticalRisk: false, hasAutomatedHedge: true, isMonitored: true },
      { threatId: 't-2', threatName: 'SaaS Multiple Compression', threatScore: 48, threatVelocity: 'decelerating', hedgingStrategy: 'Rule of 50 operating discipline with 88% gross margins', isCriticalRisk: false, hasAutomatedHedge: true, isMonitored: true },
    ]},
    { quadrantIndex: 1, quadrantTitle: 'Antitrust & Data Sovereignty', quadrantCode: 'Q2-REGULATORY', compositeRiskScore: 68, isActive: false, isCompleted: false, threatItems: [
      { threatId: 't-3', threatName: 'EU AI Act Frontier Audits', threatScore: 78, threatVelocity: 'accelerating', hedgingStrategy: 'Deterministic open-weights isolated within local boundary', isCriticalRisk: true, hasAutomatedHedge: true, isMonitored: true },
    ]},
    { quadrantIndex: 2, quadrantTitle: 'Geopolitical Supply Chain', quadrantCode: 'Q3-SUPPLY', compositeRiskScore: 54, isActive: false, isCompleted: false, threatItems: [
      { threatId: 't-4', threatName: 'Advanced Foundry Wafer Allocations', threatScore: 62, threatVelocity: 'stable', hedgingStrategy: 'Dual-source fab contracts with multi-cloud GPU reservations', isCriticalRisk: false, hasAutomatedHedge: true, isMonitored: true },
    ]},
    { quadrantIndex: 3, quadrantTitle: 'Technological Commoditization', quadrantCode: 'Q4-DISRUPTION', compositeRiskScore: 32, isActive: false, isCompleted: false, threatItems: [
      { threatId: 't-5', threatName: 'Commodity Model Margin Collapse', threatScore: 40, threatVelocity: 'decelerating', hedgingStrategy: 'Vertical proprietary workflow software lock-in', isCriticalRisk: false, hasAutomatedHedge: true, isMonitored: true },
    ]},
  ],
});

export const createZeroTrustNetworkMeshSlide = (
  id = `slide-zero-trust-${Date.now()}`
): ZeroTrustNetworkMeshSlideData => ({
  id,
  type: 'zero-trust-network-mesh',
  title: 'Cryptographic Zero-Trust Workload & Service Mesh',
  subtitle: 'mTLS 1.3 encapsulation, SPIFFE/SPIRE cryptographic identities, and hardware enclave attestation.',
  kicker: 'SECURITY ARCHITECTURE',
  cryptographicSuite: 'TLS 1.3 / Kyber-768 Post-Quantum + AES-256-GCM',
  networkTopologyType: 'Planetary Anycast eBPF Service Fabric',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasPostQuantumAlgorithmsEnabled: true,
  hasContinuousAttestation: true,
  meshStages: [
    { stepIndex: 0, stageTitle: 'Edge Ingress Inspection', securityDomain: 'Perimeter Gateway', enforcementMechanism: 'WAF & DDoS Anycast Shield', isActive: true, isCompleted: false },
    { stepIndex: 1, stageTitle: 'Cryptographic Attestation', securityDomain: 'Identity Broker', enforcementMechanism: 'SPIFFE/SPIRE X.509 SVID Validation', isActive: false, isCompleted: false },
    { stepIndex: 2, stageTitle: 'Sidecar Proxy Encryption', securityDomain: 'Envoy Service Mesh', enforcementMechanism: 'Mutual TLS WireGuard Overlay', isActive: false, isCompleted: false },
    { stepIndex: 3, stageTitle: 'Secure Data Enclave', securityDomain: 'Hardware Silicon', enforcementMechanism: 'AMD SEV-SNP Memory Encryption', isActive: false, isCompleted: false },
  ],
  meshNodes: [
    { nodeId: 'node-edge', nodeName: 'Global Edge Ingress', nodeCategory: 'edge-proxy', ipAddress: '198.51.100.24', attestationStandard: 'Cloudflare Magic WAN', tlsVersion: 'TLS 1.3', latencyOverheadMs: 0.8, isEncrypted: true, hasHardwareKeyVerification: true, isPolicyCompliant: true, isActive: true },
    { nodeId: 'node-pdp', nodeName: 'Policy Decision Point', nodeCategory: 'identity-pdp', ipAddress: '10.240.0.12', attestationStandard: 'OPA / OpenFGA Engine', tlsVersion: 'TLS 1.3 mTLS', latencyOverheadMs: 1.2, isEncrypted: true, hasHardwareKeyVerification: true, isPolicyCompliant: true, isActive: true },
    { nodeId: 'node-enclave', nodeName: 'Confidential Compute Pod', nodeCategory: 'mesh-enclave', ipAddress: '10.240.16.84', attestationStandard: 'Nitro Enclave / SGX', tlsVersion: 'Kyber-768 PQ', latencyOverheadMs: 2.1, isEncrypted: true, hasHardwareKeyVerification: true, isPolicyCompliant: true, isActive: true },
    { nodeId: 'node-db', nodeName: 'Sovereign Database Tier', nodeCategory: 'core-database', ipAddress: '10.240.32.200', attestationStandard: 'FIPS 140-3 HSM KMS', tlsVersion: 'TLS 1.3 Strict', latencyOverheadMs: 0.6, isEncrypted: true, hasHardwareKeyVerification: true, isPolicyCompliant: true, isActive: true },
  ],
});

export const createDistributedConsensusRaftLogSlide = (
  id = `slide-consensus-raft-${Date.now()}`
): DistributedConsensusRaftLogSlideData => ({
  id,
  type: 'distributed-consensus-raft-log',
  title: 'Distributed Raft Consensus & Multi-Node Log Replication',
  subtitle: 'Strong linearizable consistency, dynamic leader election, and atomic state machine commit mechanics.',
  kicker: 'DISTRIBUTED SYSTEMS',
  clusterName: 'Primary Raft Quorum Cluster (Cluster-Alpha)',
  clusterQuorumRequirement: '3 of 5 Node Quorum (F=2 Fault Tolerance)',
  heartbeatIntervalMs: 150,
  electionTimeoutRangeMs: '300ms - 600ms Randomized',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasLinearizableConsistency: true,
  hasDynamicMembershipReconfiguration: true,
  consensusStages: [
    { stepIndex: 0, stageName: 'Leader Heartbeat Pulse', operationDescription: 'Cluster leader broadcasts AppendEntries RPC', isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Client Command Ingestion', operationDescription: 'New entry appended to uncommitted leader log', isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Quorum Replication', operationDescription: 'Followers write entry to durable disk journal', isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'State Machine Commit', operationDescription: 'Entry committed and applied to state machine', isActive: false, isCompleted: false },
  ],
  raftNodes: [
    { nodeId: 'raft-1', nodeName: 'Node 1 (Virginia)', nodeRole: 'leader', currentTerm: 42, votedFor: 'raft-1', lastHeartbeatMsAgo: 12, isLeader: true, isHealthy: true, hasQuorumConsensus: true, logEntries: [
      { logIndex: 104, term: 42, command: 'SET config.timeout=5000', isCommitted: true, hasAppliedToStateMachine: true },
      { logIndex: 105, term: 42, command: 'ADD route.tenant_8821', isCommitted: true, hasAppliedToStateMachine: true },
      { logIndex: 106, term: 42, command: 'UPDATE quota.burst=10000', isCommitted: false, hasAppliedToStateMachine: false },
    ]},
    { nodeId: 'raft-2', nodeName: 'Node 2 (Frankfurt)', nodeRole: 'follower', currentTerm: 42, votedFor: 'raft-1', lastHeartbeatMsAgo: 18, isLeader: false, isHealthy: true, hasQuorumConsensus: true, logEntries: [
      { logIndex: 104, term: 42, command: 'SET config.timeout=5000', isCommitted: true, hasAppliedToStateMachine: true },
      { logIndex: 105, term: 42, command: 'ADD route.tenant_8821', isCommitted: true, hasAppliedToStateMachine: true },
    ]},
    { nodeId: 'raft-3', nodeName: 'Node 3 (Tokyo)', nodeRole: 'follower', currentTerm: 42, votedFor: 'raft-1', lastHeartbeatMsAgo: 24, isLeader: false, isHealthy: true, hasQuorumConsensus: true, logEntries: [
      { logIndex: 104, term: 42, command: 'SET config.timeout=5000', isCommitted: true, hasAppliedToStateMachine: true },
      { logIndex: 105, term: 42, command: 'ADD route.tenant_8821', isCommitted: true, hasAppliedToStateMachine: true },
    ]},
  ],
});

export const createDataPipelineLineageDagSlide = (
  id = `slide-pipeline-dag-${Date.now()}`
): DataPipelineLineageDagSlideData => ({
  id,
  type: 'data-pipeline-lineage-dag',
  title: 'End-to-End Planetary Data Pipeline Lineage DAG',
  subtitle: 'Streaming ingestion, Apache Flink transformations, Apache Iceberg lakehouse, and sub-second analytics serving.',
  kicker: 'DATA ARCHITECTURE',
  pipelineName: 'Global Realtime Telemetry Pipeline v4',
  pipelineVersion: '4.2.0-PROD',
  totalDailyVolumeFormatted: '184 TB / Day Ingestion',
  endToEndP99SlaFormatted: '< 850ms End-to-End P99',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasAutomatedDataQualityEnforcement: true,
  hasSchemaRegistryStrictValidation: true,
  dagNodes: [
    { nodeId: 'node-kafka', nodeName: 'Kafka Event Fabric', nodeLayer: 'ingestion', technology: 'Apache Kafka 3.7', throughputEventsSecFormatted: '1.4M events/s', p99LatencyMsFormatted: '12ms', partitionCount: 256, isStreamActive: true, hasBackpressureGuard: true, isSlaCompliant: true },
    { nodeId: 'node-flink', nodeName: 'Stateful Stream Processing', nodeLayer: 'transformation', technology: 'Apache Flink RocksDB', throughputEventsSecFormatted: '1.2M events/s', p99LatencyMsFormatted: '45ms', partitionCount: 128, isStreamActive: true, hasBackpressureGuard: true, isSlaCompliant: true },
    { nodeId: 'node-iceberg', nodeName: 'Sovereign Lakehouse Tier', nodeLayer: 'storage-lake', technology: 'Apache Iceberg + S3', throughputEventsSecFormatted: '980K rows/s', p99LatencyMsFormatted: '180ms', partitionCount: 64, isStreamActive: true, hasBackpressureGuard: false, isSlaCompliant: true },
    { nodeId: 'node-clickhouse', nodeName: 'Real-Time Serving Engine', nodeLayer: 'analytics-serving', technology: 'ClickHouse Distributed', throughputEventsSecFormatted: '450K queries/s', p99LatencyMsFormatted: '22ms', partitionCount: 32, isStreamActive: true, hasBackpressureGuard: true, isSlaCompliant: true },
  ],
  dagEdges: [
    { edgeId: 'edge-1', sourceNodeId: 'node-kafka', targetNodeId: 'node-flink', protocol: 'Kafka Consumer Group', hasBufferQueue: true },
    { edgeId: 'edge-2', sourceNodeId: 'node-flink', targetNodeId: 'node-iceberg', protocol: 'Iceberg Parquet Sink', hasBufferQueue: true },
    { edgeId: 'edge-3', sourceNodeId: 'node-iceberg', targetNodeId: 'node-clickhouse', protocol: 'ClickHouse Materialized View', hasBufferQueue: false },
  ],
});

export const createCodeWalkthroughSyntaxLensSlide = (
  id = `slide-code-walkthrough-${Date.now()}`
): CodeWalkthroughSyntaxLensSlideData => ({
  id,
  type: 'code-walkthrough-syntax-lens',
  title: 'Zero-Allocation Monadic Engine Implementation',
  subtitle: 'Deconstructive code inspection of zero-copy buffer pools, monadic AppResult envelopes, and lock-free rings.',
  kicker: 'DEEP CODE CRAFTSMANSHIP',
  sourceFilename: 'engine/pipeline/zero_copy_ring.go',
  programmingLanguage: 'go',
  gitCommitHash: 'sha-e4a819b-main',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasInteractiveLensGlow: true,
  hasSyntaxHighlightingActive: true,
  walkthroughStages: [
    { stepIndex: 0, stageName: 'Buffer Pool Acquisition', focusLineStart: 1, focusLineEnd: 4, explanationTitle: 'Zero-Copy Heap Reuse', explanationProse: 'Acquires zero-copy byte slice from sync.Pool to eliminate GC allocation overhead.', algorithmicComplexity: 'O(1) Lock-Free', isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Cryptographic Attestation', focusLineStart: 5, focusLineEnd: 8, explanationTitle: 'Hardware Vector Attestation', explanationProse: 'Computes hardware-accelerated SHA-256 checksum utilizing AVX-512 instructions.', algorithmicComplexity: 'O(1) AVX-512', isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Monadic Result Dispatch', focusLineStart: 9, focusLineEnd: 10, explanationTitle: 'Monadic Result Dispatch', explanationProse: 'Wraps validated payload inside AppResult envelope eliminating multi-return nil error hazards.', algorithmicComplexity: 'O(1) Deterministic', isActive: false, isCompleted: false },
  ],
  codeLines: [
    { lineNumber: 1, codeContent: 'func ProcessStream(ctx context.Context, buf *ByteBuffer) AppResult[*EventBatch] {', isFocalLine: true, hasCalloutBadge: false },
    { lineNumber: 2, codeContent: '    span, spanCtx := tracer.Start(ctx, "ProcessStream")', isFocalLine: true, hasCalloutBadge: false },
    { lineNumber: 3, codeContent: '    defer span.End()', isFocalLine: true, hasCalloutBadge: false },
    { lineNumber: 4, codeContent: '    slice := memPool.GetSlice(buf.Length())', isFocalLine: true, hasCalloutBadge: true, calloutText: 'Zero heap allocation memory reuse' },
    { lineNumber: 5, codeContent: '    if !crypto.VerifyEnclaveSig(slice, buf.Signature()) {', isFocalLine: false, hasCalloutBadge: false },
    { lineNumber: 6, codeContent: '        return ErrResult[*EventBatch](appfault.NewInvalidSignature())', isFocalLine: false, hasCalloutBadge: false },
    { lineNumber: 7, codeContent: '    }', isFocalLine: false, hasCalloutBadge: false },
    { lineNumber: 8, codeContent: '    batch := ring.DispatchNonBlocking(slice)', isFocalLine: false, hasCalloutBadge: false },
    { lineNumber: 9, codeContent: '    return OkResult[*EventBatch](batch)', isFocalLine: false, hasCalloutBadge: true, calloutText: 'Pure monadic return guaranteed non-nil' },
    { lineNumber: 10, codeContent: '}', isFocalLine: false, hasCalloutBadge: false },
  ],
});

export const createTierComparisonFeatureMatrixSlide = (
  id = `slide-feature-matrix-${Date.now()}`
): TierComparisonFeatureMatrixSlideData => ({
  id,
  type: 'tier-comparison-feature-matrix',
  title: 'Enterprise Architecture & Capability Matrix',
  subtitle: 'Exhaustive feature comparison across Open Source, Pro Cloud, Enterprise, and Sovereign Infrastructure tiers.',
  kicker: 'PRODUCT CAPABILITY MATRIX',
  comparisonHeadline: 'Sovereign Architecture vs Commercial Tiers',
  recommendedTierId: 'enterprise',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasCommercialGuarantee: true,
  hasComplianceAuditTable: true,
  featureRows: [
    { featureId: 'f-1', category: 'Security', featureName: 'Zero-Trust mTLS Mesh', featureDescription: 'Mutual TLS workload identity with SPIFFE/SPIRE', isOpenSourceSupported: true, isProCloudSupported: true, isEnterpriseSupported: true, isSovereignSupported: true, hasAirGappedCapability: true },
    { featureId: 'f-2', category: 'Security', featureName: 'Hardware Enclave Execution', featureDescription: 'AMD SEV-SNP memory encryption isolation', isOpenSourceSupported: false, isProCloudSupported: false, isEnterpriseSupported: true, isSovereignSupported: true, hasAirGappedCapability: true },
    { featureId: 'f-3', category: 'Resilience', featureName: 'Multi-Region Raft Quorum', featureDescription: 'Cross-cloud automatic failover and state replication', isOpenSourceSupported: false, isProCloudSupported: true, isEnterpriseSupported: true, isSovereignSupported: true, hasAirGappedCapability: true },
    { featureId: 'f-4', category: 'Compliance', featureName: 'FIPS 140-3 Level 4 HSM KMS', featureDescription: 'Cryptographic keys never touch volatile memory', isOpenSourceSupported: false, isProCloudSupported: false, isEnterpriseSupported: true, isSovereignSupported: true, hasAirGappedCapability: true },
    { featureId: 'f-5', category: 'Deployment', featureName: 'Air-Gapped Sovereign Deployment', featureDescription: '100% disconnected on-premise datacenter operation', isOpenSourceSupported: false, isProCloudSupported: false, isEnterpriseSupported: false, isSovereignSupported: true, hasAirGappedCapability: true },
  ],
});

export const createArrGrowthBridgeWaterfallSlide = (
  id = `slide-arr-bridge-${Date.now()}`
): ArrGrowthBridgeWaterfallSlideData => ({
  id,
  type: 'arr-growth-bridge-waterfall',
  title: 'ARR Growth Bridge & Net Revenue Retention',
  subtitle: 'Audited walk from Starting Base ARR through New Logo additions, Product Expansion, Contraction, and Ending ARR.',
  kicker: 'FINANCIAL PERFORMANCE',
  fiscalPeriod: 'FY2026 Trailing Twelve Months',
  startingArrFormatted: '$42.5M',
  endingArrFormatted: '$68.2M',
  netRevenueRetentionPct: 138,
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasAuditedFinancials: true,
  hasDetailedCohortAnalysis: true,
  bridgeStages: [
    { stepIndex: 0, stageName: 'Base Starting ARR', focusSegmentIds: ['seg-base'], narrativeTakeaway: 'Established core baseline revenue portfolio.', isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Organic Expansion', focusSegmentIds: ['seg-expansion'], narrativeTakeaway: 'Land-and-expand product multiplier driven by AI features.', isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'New Logo Acquisition', focusSegmentIds: ['seg-new'], narrativeTakeaway: 'Enterprise tier additions across Fortune 500 accounts.', isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Ending Run-Rate ARR', focusSegmentIds: ['seg-ending'], narrativeTakeaway: 'Ending portfolio positioned for FY27 scale.', isActive: false, isCompleted: false },
  ],
  waterfallSegments: [
    { segmentId: 'seg-base', segmentLabel: 'Starting ARR', segmentType: 'starting', amountValue: 42.5, amountFormatted: '$42.5M', percentageOfStartingArr: 100, isPositiveContribution: true, hasAuditedMetric: true, isProjected: false },
    { segmentId: 'seg-new', segmentLabel: 'New Logo ARR', segmentType: 'positive-expansion', amountValue: 14.8, amountFormatted: '+$14.8M', percentageOfStartingArr: 34.8, isPositiveContribution: true, hasAuditedMetric: true, isProjected: false },
    { segmentId: 'seg-expansion', segmentLabel: 'Account Expansion', segmentType: 'positive-expansion', amountValue: 13.4, amountFormatted: '+$13.4M', percentageOfStartingArr: 31.5, isPositiveContribution: true, hasAuditedMetric: true, isProjected: false },
    { segmentId: 'seg-churn', segmentLabel: 'Gross Churn & Downsell', segmentType: 'negative-contraction', amountValue: -2.5, amountFormatted: '-$2.5M', percentageOfStartingArr: -5.9, isPositiveContribution: false, hasAuditedMetric: true, isProjected: false },
    { segmentId: 'seg-ending', segmentLabel: 'Ending ARR Run-Rate', segmentType: 'ending', amountValue: 68.2, amountFormatted: '$68.2M', percentageOfStartingArr: 160.4, isPositiveContribution: true, hasAuditedMetric: true, isProjected: false },
  ],
});

export const createMultiTierSaasPackagingTableSlide = (
  id = `slide-saas-packaging-${Date.now()}`
): MultiTierSaasPackagingTableSlideData => ({
  id,
  type: 'multi-tier-saas-packaging-table',
  title: 'Enterprise Packaging & Commercial Tiers',
  subtitle: 'Transparent commercial architecture spanning Developer Starter, Enterprise Cloud, and Sovereign Infrastructure tiers.',
  kicker: 'COMMERCIAL PACKAGING',
  billingMode: 'annual',
  annualDiscountPercentage: 20,
  currencyCode: 'USD',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasVolumeDiscounts: true,
  hasMoneyBackGuarantee: true,
  pricingTiers: [
    { tierId: 'starter', tierName: 'Developer Starter', badgeLabel: 'COMMUNITY', monthlyPriceFormatted: '$49 / mo', annualPriceFormatted: '$39 / mo billed annually', targetAudience: 'Individual developers and agile startup squads', entitlements: ['Up to 5 concurrent cluster nodes', 'Standard community support', 'Public image registries', '99.9% uptime SLA'], ctaLabel: 'Start Free Trial', isPopularTier: false, hasCustomPricing: false, hasPrioritySupport: false, hasDedicatedAccountManager: false },
    { tierId: 'enterprise', tierName: 'Enterprise Platform', badgeLabel: 'MOST POPULAR', monthlyPriceFormatted: '$499 / mo', annualPriceFormatted: '$399 / mo billed annually', targetAudience: 'Scaling technology teams with high-compliance workloads', entitlements: ['Unlimited mesh service nodes', '24/7 dedicated engineering support', 'Zero-Trust mTLS & SPIFFE/SPIRE', 'Private enclave processing', '99.99% uptime guarantee'], ctaLabel: 'Deploy Enterprise', isPopularTier: true, hasCustomPricing: false, hasPrioritySupport: true, hasDedicatedAccountManager: true },
    { tierId: 'sovereign', tierName: 'Sovereign Infrastructure', badgeLabel: 'MAXIMUM SECURITY', monthlyPriceFormatted: 'Custom / Dedicated', annualPriceFormatted: 'Custom contractual pricing', targetAudience: 'Banking, defense, healthcare, and state institutions', entitlements: ['Air-gapped on-premise installation', 'FIPS 140-3 Level 4 HSM integration', 'Dedicated solutions architect', 'Guaranteed 99.999% SLA contract', 'Full source code escrow access'], ctaLabel: 'Schedule Executive Review', isPopularTier: false, hasCustomPricing: true, hasPrioritySupport: true, hasDedicatedAccountManager: true },
  ],
});

export const createFlywheelGrowthMomentumOrbitSlide = (
  id = `slide-flywheel-orbit-${Date.now()}`
): FlywheelGrowthMomentumOrbitSlideData => ({
  id,
  type: 'flywheel-growth-momentum-orbit',
  title: 'Compounding Product Flywheel & Growth Orbit',
  subtitle: 'Self-reinforcing customer telemetry, algorithmic efficiency, and compounding gross margin velocity.',
  kicker: 'GROWTH MECHANICS',
  flywheelName: 'Sovereign Architecture Compounding Engine',
  compoundingVelocityRatio: '4.6x Annual Acceleration',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasCentrifugalAccelerationActive: true,
  hasSelfSustainingMomentum: true,
  orbitStages: [
    { stepIndex: 0, phaseName: 'User Delight & Adoption', focusNodeId: 'node-adoption', reinforcingEffectDescription: 'Delightful developer experience drives rapid bottom-up enterprise adoption.', isActive: true, isCompleted: false },
    { stepIndex: 1, phaseName: 'Telemetry Density', focusNodeId: 'node-telemetry', reinforcingEffectDescription: 'Increased cluster nodes generate high-density performance and routing telemetry.', isActive: false, isCompleted: false },
    { stepIndex: 2, phaseName: 'Algorithmic Optimization', focusNodeId: 'node-algo', reinforcingEffectDescription: 'Machine learning models leverage telemetry to continuously cut edge latency.', isActive: false, isCompleted: false },
    { stepIndex: 3, phaseName: 'Compounding Margin Moat', focusNodeId: 'node-margin', reinforcingEffectDescription: 'Lower unit costs yield unbeatable pricing and superior reinvestment capacity.', isActive: false, isCompleted: false },
  ],
  orbitNodes: [
    { nodeId: 'node-adoption', nodeTitle: 'Frictionless Developer Experience', subtext: 'Sub-60s SDK deployment', orbitAngleDeg: 0, rotationalVelocityRpm: 45, metricMultiplier: '10x Faster Time-to-Value', isCoreEngine: true, hasPositiveFeedbackLoop: true, isActive: true },
    { nodeId: 'node-telemetry', nodeTitle: 'Planetary Telemetry Ingestion', subtext: 'Real-time performance metrics', orbitAngleDeg: 90, rotationalVelocityRpm: 60, metricMultiplier: '1.4M Events/sec', isCoreEngine: false, hasPositiveFeedbackLoop: true, isActive: false },
    { nodeId: 'node-algo', nodeTitle: 'Autonomous Routing Optimization', subtext: 'Predictive cluster autoscaling', orbitAngleDeg: 180, rotationalVelocityRpm: 75, metricMultiplier: '-42% Compute Waste', isCoreEngine: false, hasPositiveFeedbackLoop: true, isActive: false },
    { nodeId: 'node-margin', nodeTitle: 'Defensible Operating Margin', subtext: 'Compounded enterprise gross profit', orbitAngleDeg: 270, rotationalVelocityRpm: 90, metricMultiplier: '88% Gross Margin', isCoreEngine: true, hasPositiveFeedbackLoop: true, isActive: false },
  ],
});

export const createEnterpriseCaseStudyHeroSlide = (
  id = `slide-case-study-${Date.now()}`
): EnterpriseCaseStudyHeroSlideData => ({
  id,
  type: 'enterprise-case-study-hero',
  title: 'Global Tier-1 Financial Institution Case Study',
  subtitle: 'How an enterprise banking giant migrated 14,000 microservices to sovereign zero-trust architecture with zero downtime.',
  kicker: 'CUSTOMER PROOF',
  clientName: 'Apex Continental Financial Group',
  clientIndustry: 'Global Tier-1 Commercial & Investment Banking',
  deploymentScaleDescription: '14,000 Microservices Across 6 Continental Regions',
  legacyChallengeProse: 'Apex was constrained by monolithic legacy networking, 18-minute deployment cycles, fragile database deadlocks, and severe compliance audit exposure.',
  architecturalInterventionProse: 'Implemented our zero-trust mTLS mesh, Raft consensus distributed datastore, and automated failover pipelines under the architectural direction of Alim Ul Karim.',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasVerifiedOutcome: true,
  hasVideoAssetAvailable: true,
  executiveQuote: {
    quoteText: 'Migrating our core payment fabric to this sovereign presentation and infrastructure architecture transformed our engineering velocity and achieved our first flawless SOC2 Type II audit in firm history.',
    executiveName: 'Dr. Harrison Hayes',
    executiveTitle: 'Executive Vice President & Global Head of Infrastructure',
    companyName: 'Apex Continental Financial Group',
    isQuoteAuthorized: true,
  },
  keyMetrics: [
    { metricId: 'met-1', metricLabel: 'P99 Latency Reduction', metricValue: '78%', improvementDirection: 'reduction', contextNote: 'Dropped from 340ms to 74ms worldwide' },
    { metricId: 'met-2', metricLabel: 'Infrastructure Cost Savings', metricValue: '$18.4M', improvementDirection: 'reduction', contextNote: 'Annualized cloud compute elimination' },
    { metricId: 'met-3', metricLabel: 'Deployment Frequency', metricValue: '12x', improvementDirection: 'increase', contextNote: 'From bi-weekly releases to continuous deploy' },
  ],
});

export const createClientWallSocialProofGridSlide = (
  id = `slide-client-wall-${Date.now()}`
): ClientWallSocialProofGridSlideData => ({
  id,
  type: 'client-wall-social-proof-grid',
  title: 'Trusted by Mission-Critical Enterprise Leaders',
  subtitle: 'Validated across global hyperscalers, regulated commercial banks, defense institutions, and healthtech providers.',
  kicker: 'SOCIAL PROOF & ADOPTION',
  totalEnterpriseClientsCount: 48,
  totalAssetsProtectedFormatted: '$14.2B Assets Under Telemetry',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasVerifiedContractAudits: true,
  hasNdaCompliantLogos: true,
  clients: [
    { clientId: 'c-1', clientName: 'Sovereign Federal Reserve Systems', industryCategory: 'defense-gov', contractTenureYears: 4, deploymentScope: 'National Defense Network Enclave', isFortune500: true, isPublicReferenceable: true, hasCaseStudyAvailable: true, isFeaturedClient: true },
    { clientId: 'c-2', clientName: 'BioHealth Genomic Therapeutics', industryCategory: 'healthtech', contractTenureYears: 3, deploymentScope: 'HIPAA & FDA Computational Cluster', isFortune500: true, isPublicReferenceable: true, hasCaseStudyAvailable: true, isFeaturedClient: false },
    { clientId: 'c-3', clientName: 'Nordic Transatlantic Bank', industryCategory: 'banking', contractTenureYears: 5, deploymentScope: 'Core Real-Time Payment Clearing', isFortune500: true, isPublicReferenceable: true, hasCaseStudyAvailable: true, isFeaturedClient: true },
    { clientId: 'c-4', clientName: 'Stellar Cloud Global Edge Fabric', industryCategory: 'hyperscaler', contractTenureYears: 2, deploymentScope: '120 Edge PoPs Planetary Mesh', isFortune500: false, isPublicReferenceable: true, hasCaseStudyAvailable: false, isFeaturedClient: false },
  ],
});

export const createIncidentRetrospectiveTimelineSlide = (
  id = `slide-incident-rca-${Date.now()}`
): IncidentRetrospectiveTimelineSlideData => ({
  id,
  type: 'incident-retrospective-timeline',
  title: 'Production Incident Post-Mortem & Blameless RCA',
  subtitle: 'Rigorous engineering retrospective: detection timeline, automated failover behavior, root cause analysis, and permanent fixes.',
  kicker: 'SYSTEM RELIABILITY & SRE',
  incidentIdentifier: 'INC-2026-0924-P0',
  severityLevel: 'SEV-1',
  timeToDetectFormatted: '45s TTD',
  timeToMitigateFormatted: '3m 12s TTM',
  leadIncidentCommander: LEAD,
  commanderRole: LEAD_ROLE,
  rootCauseSummary: 'Buffer pool deadlock under unhedged network packet burst.',
  preventativeMeasures: [
    'Lock-free ring buffer pool with AVX-512 bounds checking',
    'Automated synthetic chaos drill integrated into continuous pipeline',
  ],
  hasBlamelessCultureSignoff: true,
  hasAutomatedRegressionTestCreated: true,
  timelineStages: [
    { stepIndex: 0, stageName: 'Anomaly Detection', timeWindowUtc: '14:22 UTC', summaryObjective: 'eBPF probes alerted on packet drop threshold.', isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'War Room Mobilization', timeWindowUtc: '14:23 UTC', summaryObjective: 'Automated PagerDuty escalation to on-call architects.', isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Circuit Breaker Isolation', timeWindowUtc: '14:25 UTC', summaryObjective: 'Rerouted 100% traffic to secondary redundant mesh.', isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Permanent Code Remediation', timeWindowUtc: '14:30 UTC', summaryObjective: 'Merged lock-free ring buffer fix with regression tests.', isActive: false, isCompleted: false },
  ],
  timelineEvents: [
    { eventId: 'ev-1', timestampUtc: '14:22:10 UTC', eventType: 'detection', eventTitle: 'Jitter Burst Alert', descriptionProse: 'Jitter burst detected across European edge gateways', actor: 'Automated Datadog Monitor', actorRole: 'Telemetry SRE', isResolved: true, hasActionItemAssigned: true },
    { eventId: 'ev-2', timestampUtc: '14:23:30 UTC', eventType: 'investigation', eventTitle: 'Deadlock Pinpointed', descriptionProse: 'Identified buffer pool allocation deadlock in legacy handler', actor: 'Alim Ul Karim', actorRole: LEAD_ROLE, isResolved: true, hasActionItemAssigned: true },
    { eventId: 'ev-3', timestampUtc: '14:25:22 UTC', eventType: 'mitigation', eventTitle: 'Circuit Breaker Tripped', descriptionProse: 'Tripped circuit breaker, shedding non-critical logging calls', actor: 'Envoy Mesh Automation', actorRole: 'Infrastructure Automation', isResolved: true, hasActionItemAssigned: true },
    { eventId: 'ev-4', timestampUtc: '14:30:52 UTC', eventType: 'resolution', eventTitle: 'Full Restoration', descriptionProse: 'Cluster traffic fully restored; zero customer records dropped', actor: 'SRE Command Fleet', actorRole: 'SRE Command', isResolved: true, hasActionItemAssigned: true },
  ],
});

export const createInteractiveFaqTabbedDeckSlide = (
  id = `slide-faq-tabbed-${Date.now()}`
): InteractiveFaqTabbedDeckSlideData => ({
  id,
  type: 'interactive-faq-tabbed-deck',
  title: 'Enterprise Architecture & Strategic FAQ',
  subtitle: 'Direct answers to boardroom and engineering queries regarding security, scalability, commercial licensing, and uptime guarantees.',
  kicker: 'INTERACTIVE DIALOGUE',
  activeCategoryKey: 'security',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasLiveSearchEnabled: true,
  hasDocumentationLinksActive: true,
  categories: [
    { categoryKey: 'security', categoryLabel: 'Security & Enclaves', itemCount: 3, isActive: true },
    { categoryKey: 'architecture', categoryLabel: 'Distributed Mesh', itemCount: 2, isActive: false },
    { categoryKey: 'commercial', categoryLabel: 'Licensing & Pricing', itemCount: 2, isActive: false },
    { categoryKey: 'sla', categoryLabel: 'Uptime & Disaster Recovery', itemCount: 2, isActive: false },
  ],
  faqItems: [
    { faqId: 'faq-1', category: 'security', question: 'How is customer data isolated inside confidential hardware enclaves?', answerSummary: 'All compute runs within AMD SEV-SNP and AWS Nitro Enclaves with cryptographic memory encryption.', answerDeepDiveProse: 'Even users with physical root datacenter access cannot inspect volatile application memory. Encryption keys are managed through customer-held FIPS 140-3 HSM appliances.', isExpandedByDefault: true, hasCodeSnippet: false, isVerifiedAnswer: true },
    { faqId: 'faq-2', category: 'security', question: 'Are post-quantum cryptography algorithms supported today?', answerSummary: 'Yes, our mTLS fabric supports Kyber-768 hybrid key encapsulation natively.', answerDeepDiveProse: 'All session handshakes protect against harvest-now-decrypt-later attacks using quantum-resistant mathematics.', isExpandedByDefault: false, hasCodeSnippet: true, isVerifiedAnswer: true },
    { faqId: 'faq-3', category: 'architecture', question: 'What is the recovery point objective (RPO) during catastrophic cloud failure?', answerSummary: 'Our multi-region Raft cluster guarantees an RPO of zero for committed state entries.', answerDeepDiveProse: 'Transactions are synchronized across three isolated cloud providers prior to client acknowledgment.', isExpandedByDefault: true, hasCodeSnippet: false, isVerifiedAnswer: true },
  ],
});

export const createAudienceDecisionForkMatrixSlide = (
  id = `slide-decision-fork-${Date.now()}`
): AudienceDecisionForkMatrixSlideData => ({
  id,
  type: 'audience-decision-fork-matrix',
  title: 'Strategic Architectural Trajectory: Choose Your Path',
  subtitle: 'Interactive executive workshop fork evaluating CapEx, time-to-market, and long-term defensibility across three architectural models.',
  kicker: 'EXECUTIVE WORKSHOP & FORK',
  decisionContextPrompt: 'Select the optimal cloud and sovereign architecture trajectory for FY2027 enterprise scale:',
  votingSessionId: 'FORK-OCT-2026-LIVE',
  activePathwayKey: 'B',
  leadArchitect: LEAD,
  leadRole: LEAD_ROLE,
  hasKeyboardShortcutsActive: true,
  hasFiduciarySignoff: true,
  forkStages: [
    { stepIndex: 0, stageTitle: 'Baseline Evaluation', actionInstruction: 'Review architectural trade-offs across Pathways A, B, and C', isActive: true, isCompleted: false },
    { stepIndex: 1, stageTitle: 'Interactive Pathway Selection', actionInstruction: 'Press A, B, or C to focus trajectory analysis', isActive: false, isCompleted: false },
  ],
  pathways: [
    { pathwayKey: 'A', pathwayTitle: 'Legacy Public Cloud SaaS', strategicHeadline: 'Fastest Initial Time-to-Market with Long-Term Margin Drain', capExRequirementFormatted: '$1.2M Initial', opExAnnualFormatted: '$14.8M / Year Cloud Bills', timeToProduction: '3 Months', riskProfile: 'moderate', coreAdvantages: ['Instant cloud marketplace procurement', 'No bare-metal hardware management'], strategicTradeoffs: ['Severe vendor lock-in', 'Margin erosion at scale', 'Data residency compliance risks'], isRecommended: false },
    { pathwayKey: 'B', pathwayTitle: 'Sovereign Hybrid Mesh', strategicHeadline: 'Maximum Defensibility, Zero Vendor Lock-in, 88% Gross Margin', capExRequirementFormatted: '$4.5M Initial', opExAnnualFormatted: '$3.2M / Year Total TCO', timeToProduction: '6 Months', riskProfile: 'low', coreAdvantages: ['Complete IP and cryptographic data ownership', 'Sub-15ms planetary latency', '78% lower 5-year operating TCO'], strategicTradeoffs: ['Requires disciplined engineering team', 'Six-month upfront migration roadmap'], isRecommended: true, isSelected: true },
    { pathwayKey: 'C', pathwayTitle: 'Air-Gapped Private Enclave', strategicHeadline: 'Maximum Regulatory Isolation for Government & Banking', capExRequirementFormatted: '$8.2M Initial', opExAnnualFormatted: '$2.1M / Year Maintenance', timeToProduction: '9 Months', riskProfile: 'low', coreAdvantages: ['100% disconnected security guarantee', 'Complies with highest state security standards'], strategicTradeoffs: ['Longer deployment timeline', 'Requires on-prem hardware leasing'], isRecommended: false },
  ],
});

export const EXPANSION_FACTORIES: Record<string, (id?: string) => GlobalPptExpansionSlideData> = {
  'executive-mandate-scorecard': createExecutiveMandateScorecardSlide,
  'board-quorum-resolution-ledger': createBoardQuorumResolutionLedgerSlide,
  'macro-economic-threat-radar': createMacroEconomicThreatRadarSlide,
  'zero-trust-network-mesh': createZeroTrustNetworkMeshSlide,
  'distributed-consensus-raft-log': createDistributedConsensusRaftLogSlide,
  'data-pipeline-lineage-dag': createDataPipelineLineageDagSlide,
  'code-walkthrough-syntax-lens': createCodeWalkthroughSyntaxLensSlide,
  'tier-comparison-feature-matrix': createTierComparisonFeatureMatrixSlide,
  'arr-growth-bridge-waterfall': createArrGrowthBridgeWaterfallSlide,
  'multi-tier-saas-packaging-table': createMultiTierSaasPackagingTableSlide,
  'flywheel-growth-momentum-orbit': createFlywheelGrowthMomentumOrbitSlide,
  'enterprise-case-study-hero': createEnterpriseCaseStudyHeroSlide,
  'client-wall-social-proof-grid': createClientWallSocialProofGridSlide,
  'incident-retrospective-timeline': createIncidentRetrospectiveTimelineSlide,
  'interactive-faq-tabbed-deck': createInteractiveFaqTabbedDeckSlide,
  'audience-decision-fork-matrix': createAudienceDecisionForkMatrixSlide,
};
