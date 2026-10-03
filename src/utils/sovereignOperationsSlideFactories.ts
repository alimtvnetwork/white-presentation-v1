// lint-allow: file-size reason="15 Sovereign Operations slide archetype default factory generators" max=1200
import type {
  ZeroTrustPacketInspectionSlideData,
  DatabaseMigrationPipelineSlideData,
  AutonomousAiEvalHarnessSlideData,
  ChaosEngineeringMatrixSlideData,
  CiCdArtifactProvenanceSlideData,
  DisasterRecoveryDrillSlideData,
  FeatureFlagRolloutTreeSlideData,
  QuantumCryptographyTransitionSlideData,
  GlobalLatencyTopologySlideData,
  MicroservicesMeshTelemetrySlideData,
  ThreatIntelligenceFeedSlideData,
  DataLakehouseGovernanceSlideData,
  KubernetesFleetOrchestratorSlideData,
  ApiMonetizationBillingSlideData,
  AiInferenceClusterTelemetrySlideData,
  SovereignOperationsSlideType,
  SovereignOperationsSlideData,
} from '../types/presentation';
import type { ArchetypeOption } from './extendedSlideFactories';

// =============================================================================
// Archetype 01: Zero-Trust Packet Inspection (zero-trust-packet-inspection)
// =============================================================================
export const createZeroTrustPacketInspectionSlide = (
  id = 'slide-zero-trust',
  overrides?: Partial<ZeroTrustPacketInspectionSlideData>
): ZeroTrustPacketInspectionSlideData => ({
  id,
  type: 'zero-trust-packet-inspection',
  kicker: 'KERNEL SECURITY & EBPF ENFORCEMENT',
  title: 'Zero-Trust Packet Inspection & Microsegmentation',
  subtitle: 'L3-L7 Hardware Ingress Decap, SPIFFE/SPIRE Identity, & Kernel Anomaly Enforcement',
  networkSegment: 'Tier-0 Sovereign Core VPC Mesh',
  inspectionMode: 'Inline eBPF XDP / TC Kernel Bypass',
  packetThroughputGbps: 400.0,
  chiefSecurityArchitect: 'Alim Ul Karim',
  architectTitle: 'Chief Software Engineer',
  isAirGapEnforced: true,
  isStrictMtlsActive: true,
  activeStep: 0,
  maxSteps: 4,
  inspectionStages: [
    {
      id: 'zt-stage-01',
      stageIndex: 0,
      stageName: 'Hardware Ingress XDP & Frame Decap',
      layer: 'L2/L3 Network Interface',
      latencyMicros: 4.2,
      packetThroughputMpps: 148.5,
      summary: 'Wire-speed packet filter executed directly inside NIC ring buffer via eBPF XDP.',
      isVerified: true,
      isActiveStage: true,
      hasAnomalyAlert: false,
      ruleChecks: [
        { id: 'rc-01', ruleName: 'BGP Route Hijack Guard', protocol: 'BGP / RPKI', isCompliant: true, isEnforced: true, hasZeroTrustSignoff: true },
        { id: 'rc-02', ruleName: 'Spoofed Ingress IP Drop', protocol: 'XDP Drop Hook', isCompliant: true, isEnforced: true, hasZeroTrustSignoff: true },
      ],
    },
    {
      id: 'zt-stage-02',
      stageIndex: 1,
      stageName: 'Cryptographic SPIFFE Identity Attestation',
      layer: 'L4 Transport Security',
      latencyMicros: 12.8,
      packetThroughputMpps: 142.0,
      summary: 'Cryptographic validation of X.509 SVID credentials against sovereign root CA.',
      isVerified: true,
      isActiveStage: false,
      hasAnomalyAlert: false,
      ruleChecks: [
        { id: 'rc-03', ruleName: 'SPIRE Agent Token Match', protocol: 'mTLS v1.3', isCompliant: true, isEnforced: true, hasZeroTrustSignoff: true },
        { id: 'rc-04', ruleName: 'Ephemeral Handshake Nonce', protocol: 'ChaCha20-Poly1305', isCompliant: true, isEnforced: true, hasZeroTrustSignoff: true },
      ],
    },
    {
      id: 'zt-stage-03',
      stageIndex: 2,
      stageName: 'Deep L7 Anomaly & Heuristic Inspection',
      layer: 'L7 Application Protocol',
      latencyMicros: 28.5,
      packetThroughputMpps: 135.2,
      summary: 'Zero-allocation payload parsing with real-time heuristic anomaly detection.',
      isVerified: true,
      isActiveStage: false,
      hasAnomalyAlert: false,
      ruleChecks: [
        { id: 'rc-05', ruleName: 'gRPC Header Policy Match', protocol: 'HTTP/2 Frame Parser', isCompliant: true, isEnforced: true, hasZeroTrustSignoff: true },
        { id: 'rc-06', ruleName: 'Embedded Payload Signature', protocol: 'WAF Deep Scan', isCompliant: true, isEnforced: true, hasZeroTrustSignoff: true },
      ],
    },
    {
      id: 'zt-stage-04',
      stageIndex: 3,
      stageName: 'Kernel TC Policy Enforcement Gate',
      layer: 'Linux Traffic Control',
      latencyMicros: 6.1,
      packetThroughputMpps: 148.0,
      summary: 'Final kernel admission gate enforcing microsegmentation namespace boundaries.',
      isVerified: true,
      isActiveStage: false,
      hasAnomalyAlert: false,
      ruleChecks: [
        { id: 'rc-07', ruleName: 'Namespace Isolation Barrier', protocol: 'TC Egress BPF', isCompliant: true, isEnforced: true, hasZeroTrustSignoff: true },
        { id: 'rc-08', ruleName: 'Egress Token Refresh', protocol: 'OAuth2 JWT Mesh', isCompliant: true, isEnforced: true, hasZeroTrustSignoff: true },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 02: Database Migration Pipeline (database-migration-pipeline)
// =============================================================================
export const createDatabaseMigrationPipelineSlide = (
  id = 'slide-db-migration',
  overrides?: Partial<DatabaseMigrationPipelineSlideData>
): DatabaseMigrationPipelineSlideData => ({
  id,
  type: 'database-migration-pipeline',
  kicker: 'DATABASE ARCHITECTURE & ZERO-DOWNTIME CUTOVER',
  title: 'Mission-Critical Database Migration Pipeline',
  subtitle: 'Dual-Write CDC Replication, Bitwise Checksum Verification & Zero-Downtime Traffic Switch',
  migrationCluster: 'Global Core Ledger Cluster Alpha',
  targetEngine: 'Distributed SQLite Split-DB Architecture',
  totalRecords: '4.8 Billion Entities',
  overallCompletionPercent: 99.4,
  leadMigrationEngineer: 'Alim Ul Karim',
  engineerTitle: 'Chief Software Engineer',
  isZeroDataLossGuaranteed: true,
  activeStep: 0,
  maxSteps: 4,
  pipelinePhases: [
    {
      id: 'phase-01',
      phaseIndex: 0,
      phaseName: 'Dual-Write Shadow CDC Stream',
      sourceDb: 'PostgreSQL 14 Monolith',
      targetDb: 'Split-DB Write Buffers',
      durationMinutes: 180,
      replicationLagMs: 2.1,
      recordsTransferred: '4.8B Active Records',
      summary: 'Asynchronous streaming replication capturing every mutation in real time.',
      isZeroDowntime: true,
      isCutoverReady: true,
      isRollbackAvailable: true,
      verificationChecks: [
        { id: 'chk-01', checkName: 'WAL Stream Ingestion', targetTable: 'core_ledger_transactions', recordsVerified: 1200000000, checksumMatchPercent: 100.0, isPassed: true, isVerified: true, hasReplicationLagWarning: false },
        { id: 'chk-02', checkName: 'Entity Identity Index', targetTable: 'account_balances', recordsVerified: 85000000, checksumMatchPercent: 100.0, isPassed: true, isVerified: true, hasReplicationLagWarning: false },
      ],
    },
    {
      id: 'phase-02',
      phaseIndex: 1,
      phaseName: 'Historical Snapshot Backfill',
      sourceDb: 'Cold Parquet Archive',
      targetDb: 'Distributed SQLite Shards',
      durationMinutes: 420,
      replicationLagMs: 1.8,
      recordsTransferred: '3.6B Archived Rows',
      summary: 'Parallelized worker chunks populating immutable read-only historical shards.',
      isZeroDowntime: true,
      isCutoverReady: true,
      isRollbackAvailable: true,
      verificationChecks: [
        { id: 'chk-03', checkName: 'Immutable Shard Hash', targetTable: 'historical_audit_events', recordsVerified: 2800000000, checksumMatchPercent: 100.0, isPassed: true, isVerified: true, hasReplicationLagWarning: false },
        { id: 'chk-04', checkName: 'Foreign Key Constraint', targetTable: 'audit_entity_relations', recordsVerified: 800000000, checksumMatchPercent: 100.0, isPassed: true, isVerified: true, hasReplicationLagWarning: false },
      ],
    },
    {
      id: 'phase-03',
      phaseIndex: 2,
      phaseName: 'Bitwise Checksum & Anomaly Reconciliation',
      sourceDb: 'PG Master Ledger',
      targetDb: 'Split-DB Master Ledger',
      durationMinutes: 60,
      replicationLagMs: 0.4,
      recordsTransferred: '100M Sample Verification',
      summary: 'Cryptographic SHA-256 block-level verification proving parity across all tables.',
      isZeroDowntime: true,
      isCutoverReady: true,
      isRollbackAvailable: true,
      verificationChecks: [
        { id: 'chk-05', checkName: 'Bitwise Checksum Parity', targetTable: 'all_tables_aggregate', recordsVerified: 100000000, checksumMatchPercent: 100.0, isPassed: true, isVerified: true, hasReplicationLagWarning: false },
        { id: 'chk-06', checkName: 'Schema Constraint Audit', targetTable: 'ddl_schema_catalog', recordsVerified: 450, checksumMatchPercent: 100.0, isPassed: true, isVerified: true, hasReplicationLagWarning: false },
      ],
    },
    {
      id: 'phase-04',
      phaseIndex: 3,
      phaseName: 'Zero-Downtime DNS Cutover & Traffic Promotion',
      sourceDb: 'Read-Only Shadow Pool',
      targetDb: 'Primary Production Cluster',
      durationMinutes: 15,
      replicationLagMs: 0.0,
      recordsTransferred: 'Live 85k RPS Traffic',
      summary: 'Dynamic connection pool retargeting with instantaneous rollback circuit breaker.',
      isZeroDowntime: true,
      isCutoverReady: true,
      isRollbackAvailable: true,
      verificationChecks: [
        { id: 'chk-07', checkName: 'Traffic Promotion Verification', targetTable: 'live_traffic_router', recordsVerified: 500000, checksumMatchPercent: 100.0, isPassed: true, isVerified: true, hasReplicationLagWarning: false },
        { id: 'chk-08', checkName: 'Zero-Error Write Acknowledgment', targetTable: 'primary_write_pool', recordsVerified: 500000, checksumMatchPercent: 100.0, isPassed: true, isVerified: true, hasReplicationLagWarning: false },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 03: Autonomous AI Eval Harness (autonomous-ai-eval-harness)
// =============================================================================
export const createAutonomousAiEvalHarnessSlide = (
  id = 'slide-ai-eval',
  overrides?: Partial<AutonomousAiEvalHarnessSlideData>
): AutonomousAiEvalHarnessSlideData => ({
  id,
  type: 'autonomous-ai-eval-harness',
  kicker: 'AI REASONING HARNESS & RED-TEAM BENCHMARK',
  title: 'Autonomous AI Evaluation & Alignment Harness',
  subtitle: 'Multi-Turn Agent Determinism, Prompt Injection Defense & Grounding Verification',
  evalFramework: 'Sovereign Automated AI Evaluation Harness v2.4',
  modelEvaluated: 'Sovereign Reasoning Agent L4',
  overallSafetyScore: 99.2,
  principalEvaluator: 'Alim Ul Karim',
  evaluatorTitle: 'Chief Software Engineer',
  isProductionDeploymentPermitted: true,
  activeStep: 0,
  maxSteps: 4,
  evalSuites: [
    {
      id: 'eval-suite-01',
      suiteIndex: 0,
      suiteName: 'Constitutional Adversarial Injection Matrix',
      targetModel: 'Sovereign Reasoning Agent L4',
      samplesTested: 10000,
      passRatePercent: 99.8,
      latencyP95Ms: 142,
      summary: 'Exhaustive automated red-teaming testing role-play, jailbreaks, and unicode attacks.',
      isCertified: true,
      hasSafetySignoff: true,
      isAutomatedRun: true,
      benchmarkMetrics: [
        { id: 'bm-01', benchmarkName: 'Direct Prompt Injection Defense', scorePercent: 99.9, baselineDelta: '+4.2%', isPassingBenchmark: true, isVerified: true },
        { id: 'bm-02', benchmarkName: 'Indirect RAG Payload Containment', scorePercent: 99.7, baselineDelta: '+5.8%', isPassingBenchmark: true, isVerified: true },
      ],
    },
    {
      id: 'eval-suite-02',
      suiteIndex: 1,
      suiteName: 'Multi-Agent Determinism & Tool Sandboxing',
      targetModel: 'Sovereign Reasoning Agent L4',
      samplesTested: 5000,
      passRatePercent: 99.4,
      latencyP95Ms: 185,
      summary: 'Tool-call schema conformity, parameter validation, and sandboxed boundary defense.',
      isCertified: true,
      hasSafetySignoff: true,
      isAutomatedRun: true,
      benchmarkMetrics: [
        { id: 'bm-03', benchmarkName: 'JSON Schema Call Conformity', scorePercent: 99.8, baselineDelta: '+2.1%', isPassingBenchmark: true, isVerified: true },
        { id: 'bm-04', benchmarkName: 'Sandbox Escape Prevention', scorePercent: 100.0, baselineDelta: '+0.0%', isPassingBenchmark: true, isVerified: true },
      ],
    },
    {
      id: 'eval-suite-03',
      suiteIndex: 2,
      suiteName: 'Grounding & Factuality Verification',
      targetModel: 'Sovereign Reasoning Agent L4',
      samplesTested: 8500,
      passRatePercent: 98.9,
      latencyP95Ms: 210,
      summary: 'Zero-hallucination verification comparing outputs directly against ground-truth specs.',
      isCertified: true,
      hasSafetySignoff: true,
      isAutomatedRun: true,
      benchmarkMetrics: [
        { id: 'bm-05', benchmarkName: 'Hallucination Mitigation Rate', scorePercent: 99.1, baselineDelta: '+6.4%', isPassingBenchmark: true, isVerified: true },
        { id: 'bm-06', benchmarkName: 'Spec Citation Fidelity', scorePercent: 98.7, baselineDelta: '+8.3%', isPassingBenchmark: true, isVerified: true },
      ],
    },
    {
      id: 'eval-suite-04',
      suiteIndex: 3,
      suiteName: 'Code Synthesis & Architecture Spec Adherence',
      targetModel: 'Sovereign Reasoning Agent L4',
      samplesTested: 4200,
      passRatePercent: 99.6,
      latencyP95Ms: 168,
      summary: 'Evaluation of generated ASTs against strict architectural rules and zero lint errors.',
      isCertified: true,
      hasSafetySignoff: true,
      isAutomatedRun: true,
      benchmarkMetrics: [
        { id: 'bm-07', benchmarkName: 'Positive Boolean Polarity Rate', scorePercent: 100.0, baselineDelta: '+12.0%', isPassingBenchmark: true, isVerified: true },
        { id: 'bm-08', benchmarkName: 'Single Responsibility Sizing', scorePercent: 99.2, baselineDelta: '+7.1%', isPassingBenchmark: true, isVerified: true },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 04: Chaos Engineering Matrix (chaos-engineering-matrix)
// =============================================================================
export const createChaosEngineeringMatrixSlide = (
  id = 'slide-chaos-matrix',
  overrides?: Partial<ChaosEngineeringMatrixSlideData>
): ChaosEngineeringMatrixSlideData => ({
  id,
  type: 'chaos-engineering-matrix',
  kicker: 'RESILIENCE DRILL & CHAOS INJECTION',
  title: 'Continuous Chaos Engineering & Fault Matrix',
  subtitle: 'Automated Blast-Radius Simulation, Consensus Disruption & Self-Healing Telemetry',
  targetCluster: 'Tier-1 High-Frequency Transaction Fabric',
  resilienceIndexScore: 99.85,
  steadyStateSloPercent: 99.999,
  leadResilienceArchitect: 'Alim Ul Karim',
  architectTitle: 'Chief Software Engineer',
  isProductionSafeExecution: true,
  activeStep: 0,
  maxSteps: 4,
  chaosScenarios: [
    {
      id: 'chaos-sc-01',
      scenarioIndex: 0,
      scenarioName: 'Cross-AZ Fiber Blackhole Injection',
      blastRadius: 'us-east-1a Inter-AZ Mesh (33% traffic)',
      injectedFault: '100% Synthetic Packet Drop on Backbone Transit',
      mttrSeconds: 4.8,
      recoveryStatus: 'Self-Healed via Anycast BGP Drain',
      summary: 'Dynamic BGP route withdraw successfully drained degraded availability zone in 4.8s.',
      isSelfHealingVerified: true,
      hasAutomatedRollback: true,
      isSloPreserved: true,
      faultMetrics: [
        { id: 'fm-01', metricName: 'Error Budget Impact', measuredValue: '0.002%', isWithinTolerance: true, isVerified: true },
        { id: 'fm-02', metricName: 'Failover RTT Degradation', measuredValue: '+1.4ms', isWithinTolerance: true, isVerified: true },
      ],
    },
    {
      id: 'chaos-sc-02',
      scenarioIndex: 1,
      scenarioName: 'Raft Consensus Leader Partitioning',
      blastRadius: 'Raft Cluster Node Alpha',
      injectedFault: 'SIGKILL Dispatched to Active Consensus Leader',
      mttrSeconds: 1.9,
      recoveryStatus: 'Quorum Formed & New Leader Promoted',
      summary: 'Election timer triggered and replica node promoted without dropping in-flight writes.',
      isSelfHealingVerified: true,
      hasAutomatedRollback: true,
      isSloPreserved: true,
      faultMetrics: [
        { id: 'fm-03', metricName: 'Write Stall Duration', measuredValue: '185ms', isWithinTolerance: true, isVerified: true },
        { id: 'fm-04', metricName: 'Data Drift Checksum', measuredValue: '0.00%', isWithinTolerance: true, isVerified: true },
      ],
    },
    {
      id: 'chaos-sc-03',
      scenarioIndex: 2,
      scenarioName: 'Kernel Memory Pressure Cascade',
      blastRadius: 'Worker Node Pool Delta',
      injectedFault: 'Synthetic OOM Killer Eviction via Cgroup Throttle',
      mttrSeconds: 6.2,
      recoveryStatus: 'Karpenter Fast-Scale Pod Rescheduling',
      summary: 'Cgroup limit triggered node cordon, drain, and warm-pool standby scheduling.',
      isSelfHealingVerified: true,
      hasAutomatedRollback: true,
      isSloPreserved: true,
      faultMetrics: [
        { id: 'fm-05', metricName: 'Pod Rebalance Speed', measuredValue: '6.2s', isWithinTolerance: true, isVerified: true },
        { id: 'fm-06', metricName: 'Client 5xx Error Spike', measuredValue: '0.00%', isWithinTolerance: true, isVerified: true },
      ],
    },
    {
      id: 'chaos-sc-04',
      scenarioIndex: 3,
      scenarioName: 'Database Storage IOPS Saturation',
      blastRadius: 'Split-DB Primary Storage Volume',
      injectedFault: '95% Synthetic Disk Latency Injection Under 80k RPS',
      mttrSeconds: 3.4,
      recoveryStatus: 'In-Memory Ring Buffer Writeback Active',
      summary: 'Adaptive backpressure diverted mutations into zero-latency RAM ring buffers.',
      isSelfHealingVerified: true,
      hasAutomatedRollback: true,
      isSloPreserved: true,
      faultMetrics: [
        { id: 'fm-07', metricName: 'Ingress Queue Depth', measuredValue: '420 requests', isWithinTolerance: true, isVerified: true },
        { id: 'fm-08', metricName: 'Buffer Flush Completion', measuredValue: '100.0%', isWithinTolerance: true, isVerified: true },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 05: CI/CD Artifact Provenance (ci-cd-artifact-provenance)
// =============================================================================
export const createCiCdArtifactProvenanceSlide = (
  id = 'slide-ci-cd-provenance',
  overrides?: Partial<CiCdArtifactProvenanceSlideData>
): CiCdArtifactProvenanceSlideData => ({
  id,
  type: 'ci-cd-artifact-provenance',
  kicker: 'SUPPLY CHAIN SECURITY & SLSA L4',
  title: 'Cryptographic CI/CD Artifact Provenance',
  subtitle: 'Hermetic Build Sandboxes, Keyless Sigstore Attestation & Rekor Transparency Logs',
  artifactName: 'sovereign-kernel-v2.18.0.tar.gz',
  rootDigestSha256: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  slsaComplianceRating: 'SLSA Level 4 Cryptographically Verified',
  attestationSigner: 'Alim Ul Karim',
  signerTitle: 'Chief Software Engineer',
  isKeylessSigningActive: true,
  activeStep: 0,
  maxSteps: 4,
  provenanceStages: [
    {
      id: 'prov-stage-01',
      stageIndex: 0,
      stageName: 'Hermetic Isolated Build Sandbox',
      slsaLevel: 'SLSA Level 4',
      buildRunnerId: 'ephemeral-runner-pod-x86',
      executionDurationSeconds: 145,
      summary: 'Air-gapped compilation in disposable Alpine container with zero internet egress.',
      isCompliant: true,
      isReproducibleBuild: true,
      hasImmutableDigest: true,
      attestations: [
        { id: 'att-01', attestationType: 'Hermetic Environment Audit', digestSha256: 'sha256:7a8b...1f', signerIdentity: 'github-actions-oidc', isVerified: true, isTamperEvident: true, hasCryptographicProof: true },
        { id: 'att-02', attestationType: 'Source Tree Git SHA Pin', digestSha256: 'sha256:9c1d...3e', signerIdentity: 'git-commit-signer', isVerified: true, isTamperEvident: true, hasCryptographicProof: true },
      ],
    },
    {
      id: 'prov-stage-02',
      stageIndex: 1,
      stageName: 'In-Toto Material & Step Attestation',
      slsaLevel: 'SLSA Level 4',
      buildRunnerId: 'attestation-engine-01',
      executionDurationSeconds: 18,
      summary: 'Cryptographic link metadata binding exact source inputs to output binary digests.',
      isCompliant: true,
      isReproducibleBuild: true,
      hasImmutableDigest: true,
      attestations: [
        { id: 'att-03', attestationType: 'In-Toto Link Metadata', digestSha256: 'sha256:4d2e...8a', signerIdentity: 'builder-attestor', isVerified: true, isTamperEvident: true, hasCryptographicProof: true },
        { id: 'att-04', attestationType: 'SPDX SBOM v2.3 Catalog', digestSha256: 'sha256:5f3a...9b', signerIdentity: 'sbom-generator', isVerified: true, isTamperEvident: true, hasCryptographicProof: true },
      ],
    },
    {
      id: 'prov-stage-03',
      stageIndex: 2,
      stageName: 'Sigstore Keyless Hardware Attestation',
      slsaLevel: 'SLSA Level 4',
      buildRunnerId: 'cosign-fulcio-oidc',
      executionDurationSeconds: 6,
      summary: 'Short-lived cryptographic certificates issued via OIDC and signed by Cosign.',
      isCompliant: true,
      isReproducibleBuild: true,
      hasImmutableDigest: true,
      attestations: [
        { id: 'att-05', attestationType: 'Cosign Fulcio Certificate', digestSha256: 'sha256:8b4c...2d', signerIdentity: 'sigstore-fulcio', isVerified: true, isTamperEvident: true, hasCryptographicProof: true },
        { id: 'att-06', attestationType: 'OCI Image Container Signature', digestSha256: 'sha256:2e1f...6a', signerIdentity: 'cosign-cli', isVerified: true, isTamperEvident: true, hasCryptographicProof: true },
      ],
    },
    {
      id: 'prov-stage-04',
      stageIndex: 3,
      stageName: 'Rekor Public Transparency Ledger Entry',
      slsaLevel: 'SLSA Level 4',
      buildRunnerId: 'rekor-ledger-v1',
      executionDurationSeconds: 8,
      summary: 'Immutable inclusion proof registered into public cryptographic transparency log.',
      isCompliant: true,
      isReproducibleBuild: true,
      hasImmutableDigest: true,
      attestations: [
        { id: 'att-07', attestationType: 'Rekor Log Inclusion Proof', digestSha256: 'sha256:3a9b...7c', signerIdentity: 'rekor.sigstore.dev', isVerified: true, isTamperEvident: true, hasCryptographicProof: true },
        { id: 'att-08', attestationType: 'Admission Controller Policy', digestSha256: 'sha256:1c4e...5d', signerIdentity: 'k8s-gatekeeper', isVerified: true, isTamperEvident: true, hasCryptographicProof: true },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 06: Disaster Recovery Drill (disaster-recovery-drill)
// =============================================================================
export const createDisasterRecoveryDrillSlide = (
  id = 'slide-dr-drill',
  overrides?: Partial<DisasterRecoveryDrillSlideData>
): DisasterRecoveryDrillSlideData => ({
  id,
  type: 'disaster-recovery-drill',
  kicker: 'DISASTER RECOVERY & RESILIENCE DRILL',
  title: 'Multi-Region Disaster Recovery Simulation',
  subtitle: 'Live Intercontinental Failover, BGP Anycast Rerouting & Zero Data Loss Guarantee',
  drillCode: 'DRILL-2026-OMEGA-CONTINENTAL',
  targetRtoFormatted: '180s (3m)',
  targetRpoFormatted: '0.0s (Zero Loss)',
  overallRtoAchievedSeconds: 114,
  incidentCommander: 'Alim Ul Karim',
  commanderTitle: 'Chief Software Engineer',
  isExecutiveSignoffAchieved: true,
  activeStep: 0,
  maxSteps: 4,
  drillPhases: [
    {
      id: 'dr-phase-01',
      phaseIndex: 0,
      phaseName: 'Primary Region Blackout Simulation',
      originRegion: 'us-east-virginia',
      failoverRegion: 'eu-west-frankfurt',
      elapsedSeconds: 24,
      targetRtoSeconds: 45,
      summary: 'Simulated total datapath failure across primary datacenter facilities.',
      isPhasePassed: true,
      isDataSynchronized: true,
      hasZeroDataLoss: true,
      serviceFailovers: [
        { id: 'sfo-01', serviceName: 'Edge Anycast Health Checks', rtoAchievedSeconds: 12, rpoTargetAchieved: true, isOperationalInReplica: true, isTrafficRerouted: true },
        { id: 'sfo-02', serviceName: 'Automated Quorum Failover', rtoAchievedSeconds: 24, rpoTargetAchieved: true, isOperationalInReplica: true, isTrafficRerouted: true },
      ],
    },
    {
      id: 'dr-phase-02',
      phaseIndex: 1,
      phaseName: 'BGP Anycast Route Drain & DNS Shift',
      originRegion: 'us-east-virginia',
      failoverRegion: 'eu-west-frankfurt',
      elapsedSeconds: 32,
      targetRtoSeconds: 45,
      summary: 'Global Anycast BGP withdrawals shifted 100% of ingress packets across transatlantic mesh.',
      isPhasePassed: true,
      isDataSynchronized: true,
      hasZeroDataLoss: true,
      serviceFailovers: [
        { id: 'sfo-03', serviceName: 'Global Ingress Route Drain', rtoAchievedSeconds: 18, rpoTargetAchieved: true, isOperationalInReplica: true, isTrafficRerouted: true },
        { id: 'sfo-04', serviceName: 'DNS TTL Eviction Guard', rtoAchievedSeconds: 32, rpoTargetAchieved: true, isOperationalInReplica: true, isTrafficRerouted: true },
      ],
    },
    {
      id: 'dr-phase-03',
      phaseIndex: 2,
      phaseName: 'Distributed Storage Engine Promotion',
      originRegion: 'us-east-virginia',
      failoverRegion: 'eu-west-frankfurt',
      elapsedSeconds: 38,
      targetRtoSeconds: 60,
      summary: 'Replica shards promoted to primary read/write authority with zero lost transactions.',
      isPhasePassed: true,
      isDataSynchronized: true,
      hasZeroDataLoss: true,
      serviceFailovers: [
        { id: 'sfo-05', serviceName: 'Split-DB Shard Promotion', rtoAchievedSeconds: 28, rpoTargetAchieved: true, isOperationalInReplica: true, isTrafficRerouted: true },
        { id: 'sfo-06', serviceName: 'Write Journal Validation', rtoAchievedSeconds: 38, rpoTargetAchieved: true, isOperationalInReplica: true, isTrafficRerouted: true },
      ],
    },
    {
      id: 'dr-phase-04',
      phaseIndex: 3,
      phaseName: 'Smoke Validation & Traffic Health Attestation',
      originRegion: 'eu-west-frankfurt',
      failoverRegion: 'eu-west-frankfurt',
      elapsedSeconds: 20,
      targetRtoSeconds: 30,
      summary: 'Automated synthetic verification suites executed across all 68 edge endpoints.',
      isPhasePassed: true,
      isDataSynchronized: true,
      hasZeroDataLoss: true,
      serviceFailovers: [
        { id: 'sfo-07', serviceName: 'Full End-to-End Synthetics', rtoAchievedSeconds: 14, rpoTargetAchieved: true, isOperationalInReplica: true, isTrafficRerouted: true },
        { id: 'sfo-08', serviceName: 'SLO Health Verification', rtoAchievedSeconds: 20, rpoTargetAchieved: true, isOperationalInReplica: true, isTrafficRerouted: true },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 07: Feature Flag Rollout Tree (feature-flag-rollout-tree)
// =============================================================================
export const createFeatureFlagRolloutTreeSlide = (
  id = 'slide-feature-flags',
  overrides?: Partial<FeatureFlagRolloutTreeSlideData>
): FeatureFlagRolloutTreeSlideData => ({
  id,
  type: 'feature-flag-rollout-tree',
  kicker: 'PROGRESSIVE DELIVERY & FEATURE FLAGS',
  title: 'Progressive Feature Flag Rollout Architecture',
  subtitle: 'Canary Progression Rings, Automated Metric Guards & Millisecond Kill-Switch Gating',
  flagKey: 'ff-sovereign-kernel-v2',
  targetReleaseVersion: 'v2.18.0-enterprise',
  totalAudienceCoveredPercent: 100,
  releaseOwner: 'Alim Ul Karim',
  ownerTitle: 'Chief Software Engineer',
  isInstantKillSwitchActive: true,
  activeStep: 0,
  maxSteps: 4,
  rolloutRings: [
    {
      id: 'ring-00',
      ringIndex: 0,
      ringName: 'Ring 0: Internal Dogfood & SRE Team',
      allocationPercent: 1,
      userCohortSize: '500 core engineers',
      dwellTimeHours: 24,
      summary: 'Immediate live verification on internal engineering fleet before customer traffic.',
      isRingCompleted: true,
      isAutoKillSwitchArmed: true,
      hasTelemetryHealthy: true,
      telemetryGuards: [
        { id: 'tg-01', guardMetric: 'Crash Free Rate (>99.99%)', currentTelemetry: '100.00%', isGuardPassing: true, isVerified: true },
        { id: 'tg-02', guardMetric: 'p99 Client Latency (<50ms)', currentTelemetry: '32ms', isGuardPassing: true, isVerified: true },
      ],
    },
    {
      id: 'ring-01',
      ringIndex: 1,
      ringName: 'Ring 1: Early Beta Adopter Cohort',
      allocationPercent: 5,
      userCohortSize: '25,000 opt-in users',
      dwellTimeHours: 48,
      summary: 'Telemetry collection across diverse hardware profiles and global ISPs.',
      isRingCompleted: true,
      isAutoKillSwitchArmed: true,
      hasTelemetryHealthy: true,
      telemetryGuards: [
        { id: 'tg-03', guardMetric: 'API Error Rate (<0.01%)', currentTelemetry: '0.002%', isGuardPassing: true, isVerified: true },
        { id: 'tg-04', guardMetric: 'Memory Leak Slope (<0.5MB/h)', currentTelemetry: '0.02MB/h', isGuardPassing: true, isVerified: true },
      ],
    },
    {
      id: 'ring-02',
      ringIndex: 2,
      ringName: 'Ring 2: Strategic Production Tenants',
      allocationPercent: 25,
      userCohortSize: '250,000 enterprise accounts',
      dwellTimeHours: 72,
      summary: 'Broad enterprise workloads under sustained high-concurrency peak conditions.',
      isRingCompleted: true,
      isAutoKillSwitchArmed: true,
      hasTelemetryHealthy: true,
      telemetryGuards: [
        { id: 'tg-05', guardMetric: 'Database Lock Contention (<1ms)', currentTelemetry: '0.12ms', isGuardPassing: true, isVerified: true },
        { id: 'tg-06', guardMetric: 'Customer Support Defect Rate', currentTelemetry: '0 tickets', isGuardPassing: true, isVerified: true },
      ],
    },
    {
      id: 'ring-03',
      ringIndex: 3,
      ringName: 'Ring 3: Global Production Traffic',
      allocationPercent: 100,
      userCohortSize: '1,800,000 global tenants',
      dwellTimeHours: 168,
      summary: 'Full release across all global regions with permanent telemetry surveillance.',
      isRingCompleted: true,
      isAutoKillSwitchArmed: true,
      hasTelemetryHealthy: true,
      telemetryGuards: [
        { id: 'tg-07', guardMetric: 'Global SLA Adherence (>99.99%)', currentTelemetry: '99.999%', isGuardPassing: true, isVerified: true },
        { id: 'tg-08', guardMetric: 'Automated Rollback Latency (<3s)', currentTelemetry: '1.2s armed', isGuardPassing: true, isVerified: true },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 08: Quantum Cryptography Transition (quantum-cryptography-transition)
// =============================================================================
export const createQuantumCryptographyTransitionSlide = (
  id = 'slide-pqc-transition',
  overrides?: Partial<QuantumCryptographyTransitionSlideData>
): QuantumCryptographyTransitionSlideData => ({
  id,
  type: 'quantum-cryptography-transition',
  kicker: 'POST-QUANTUM CRYPTOGRAPHY TRANSITION',
  title: 'NIST Post-Quantum Cryptography Migration Plan',
  subtitle: 'ML-KEM-768 Key Encapsulation, ML-DSA-65 Signatures & Hybrid TLS 1.3 Readiness',
  cryptoFramework: 'NIST FIPS 203 / 204 Standards Standardized',
  overallPqcReadinessPercent: 88.5,
  chiefCryptographer: 'Alim Ul Karim',
  cryptographerTitle: 'Chief Software Engineer',
  isFipsCertified: true,
  activeStep: 0,
  maxSteps: 4,
  transitionMilestones: [
    {
      id: 'pqc-ms-01',
      milestoneIndex: 0,
      milestoneName: 'Hybrid Key Exchange on Ingress Edge',
      targetDeadlineQuarter: '2026-Q1',
      completionPercent: 100,
      summary: 'X25519 + ML-KEM-768 hybrid key encapsulation active on all Anycast POPs.',
      isMilestoneAchieved: true,
      isCryptoAgileArchitecture: true,
      hasRegulatoryApproval: true,
      algorithms: [
        { id: 'algo-01', classicAlgorithm: 'ECDH Curve25519', pqcReplacement: 'ML-KEM-768 (Kyber)', cryptoAgilityStatus: 'Active Hybrid Ingress', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true },
        { id: 'algo-02', classicAlgorithm: 'RSA-4096 Key Agreement', pqcReplacement: 'ML-KEM-1024', cryptoAgilityStatus: 'Deprecated', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true },
      ],
    },
    {
      id: 'pqc-ms-02',
      milestoneIndex: 1,
      milestoneName: 'Internal Service Mesh Mutual Authentication',
      targetDeadlineQuarter: '2026-Q2',
      completionPercent: 100,
      summary: 'SPIFFE/SPIRE certificates upgraded to ML-DSA-65 post-quantum digital signatures.',
      isMilestoneAchieved: true,
      isCryptoAgileArchitecture: true,
      hasRegulatoryApproval: true,
      algorithms: [
        { id: 'algo-03', classicAlgorithm: 'ECDSA P-256 Certificates', pqcReplacement: 'ML-DSA-65 (Dilithium3)', cryptoAgilityStatus: 'Active Mesh mTLS', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true },
        { id: 'algo-04', classicAlgorithm: 'Ed25519 Micro-Signatures', pqcReplacement: 'SLH-DSA-SHAKE-128s', cryptoAgilityStatus: 'Standby Fallback', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true },
      ],
    },
    {
      id: 'pqc-ms-03',
      milestoneIndex: 2,
      milestoneName: 'Cold-Storage Data Vault Re-Encryption',
      targetDeadlineQuarter: '2026-Q3',
      completionPercent: 92,
      summary: 'Long-term customer archives re-encrypted using AES-256-GCM with ML-KEM keys.',
      isMilestoneAchieved: true,
      isCryptoAgileArchitecture: true,
      hasRegulatoryApproval: true,
      algorithms: [
        { id: 'algo-05', classicAlgorithm: 'RSA-4096 Master Envelope', pqcReplacement: 'ML-KEM-768 Master Key Envelope', cryptoAgilityStatus: '92% Migrated', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true },
        { id: 'algo-06', classicAlgorithm: 'SHA-256 HMAC Integrity', pqcReplacement: 'SHA3-512 / KMAC-256', cryptoAgilityStatus: 'Enforced', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true },
      ],
    },
    {
      id: 'pqc-ms-04',
      milestoneIndex: 3,
      milestoneName: 'Legacy RSA Deprecation & Enforcement Gating',
      targetDeadlineQuarter: '2026-Q4',
      completionPercent: 62,
      summary: 'Strict admission controller rejection of non-PQC cryptographic handshakes.',
      isMilestoneAchieved: false,
      isCryptoAgileArchitecture: true,
      hasRegulatoryApproval: true,
      algorithms: [
        { id: 'algo-07', classicAlgorithm: 'TLS 1.2 Legacy Handshake', pqcReplacement: 'TLS 1.3 Pure PQC Enforcement', cryptoAgilityStatus: 'Pilot Enforcement', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true },
        { id: 'algo-08', classicAlgorithm: 'Legacy PKCS#1 v1.5', pqcReplacement: 'Stateful Hash Signatures (LMS)', cryptoAgilityStatus: 'Hard Deprecation', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true },
      ],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 09: Global Latency Topology (global-latency-topology) - Flat Sovereign
// =============================================================================
export const createGlobalLatencyTopologySlide = (
  id = 'slide-global-latency',
  overrides?: Partial<GlobalLatencyTopologySlideData>
): GlobalLatencyTopologySlideData => ({
  id,
  type: 'global-latency-topology',
  kicker: 'EDGE ANYCAST TOPOLOGY & FIBER TRANSIT',
  title: 'Global Edge Latency Topology & Backbone Mesh',
  subtitle: 'Real-Time p50/p95/p99 RTT Telemetry Across Tier-1 Fiber Transits & Anycast POPs',
  globalAverageRttMs: 18.4,
  anycastPopsCount: 68,
  overallCacheHitPercent: 96.8,
  networkDirector: 'Alim Ul Karim',
  directorTitle: 'Chief Software Engineer',
  isAnycastBgpActive: true,
  edgeNodes: [
    { id: 'pop-nrt', popCode: 'NRT-01', location: 'Tokyo, Japan', p50Ms: 11.2, p95Ms: 18.4, p99Ms: 24.1, trafficEgressGbps: 115.4, cacheHitRatioPercent: 97.4, isOperational: true, isAnycastHealthy: true, hasOptimalRouting: true },
    { id: 'pop-lhr', popCode: 'LHR-02', location: 'London, United Kingdom', p50Ms: 14.8, p95Ms: 21.6, p99Ms: 28.5, trafficEgressGbps: 142.8, cacheHitRatioPercent: 96.9, isOperational: true, isAnycastHealthy: true, hasOptimalRouting: true },
    { id: 'pop-iad', popCode: 'IAD-04', location: 'Ashburn, Virginia, USA', p50Ms: 9.6, p95Ms: 15.2, p99Ms: 19.8, trafficEgressGbps: 195.2, cacheHitRatioPercent: 98.1, isOperational: true, isAnycastHealthy: true, hasOptimalRouting: true },
    { id: 'pop-sin', popCode: 'SIN-01', location: 'Singapore', p50Ms: 16.5, p95Ms: 24.1, p99Ms: 31.2, trafficEgressGbps: 98.6, cacheHitRatioPercent: 95.8, isOperational: true, isAnycastHealthy: true, hasOptimalRouting: true },
  ],
  transitLinks: [
    { id: 'link-01', sourcePop: 'IAD-04', destPop: 'LHR-02', fiberDistanceKm: 5900, rttLatencyMs: 64.2, capacityTbps: 120.0, isEncrypted: true, isCongestionFree: true },
    { id: 'link-02', sourcePop: 'IAD-04', destPop: 'NRT-01', fiberDistanceKm: 10800, rttLatencyMs: 118.5, capacityTbps: 90.0, isEncrypted: true, isCongestionFree: true },
    { id: 'link-03', sourcePop: 'LHR-02', destPop: 'SIN-01', fiberDistanceKm: 10900, rttLatencyMs: 122.0, capacityTbps: 80.0, isEncrypted: true, isCongestionFree: true },
    { id: 'link-04', sourcePop: 'SIN-01', destPop: 'NRT-01', fiberDistanceKm: 5300, rttLatencyMs: 58.4, capacityTbps: 100.0, isEncrypted: true, isCongestionFree: true },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 10: Microservices Mesh Telemetry (microservices-mesh-telemetry) - Flat Sovereign
// =============================================================================
export const createMicroservicesMeshTelemetrySlide = (
  id = 'slide-mesh-telemetry',
  overrides?: Partial<MicroservicesMeshTelemetrySlideData>
): MicroservicesMeshTelemetrySlideData => ({
  id,
  type: 'microservices-mesh-telemetry',
  kicker: 'ENVOY DATA PLANE & MTLS TELEMETRY',
  title: 'Microservices Mesh Telemetry & Security Fabric',
  subtitle: 'Cryptographic mTLS Identity, Distributed Tracing & Sub-Millisecond Circuit Breakers',
  meshName: 'Istio Ambient Mesh v1.22 Enterprise',
  totalMeshRps: 185000,
  overallSuccessRatePercent: 99.998,
  meshArchitect: 'Alim Ul Karim',
  architectTitle: 'Chief Software Engineer',
  isStrictMtlsGlobal: true,
  meshServices: [
    { id: 'svc-01', serviceName: 'ingress-gateway-envoy', podReplicas: 36, requestsPerSecond: 185000, p99LatencyMs: 2.4, errorBudgetRemainingPercent: 99.8, isMtlsEnforced: true, isCircuitBreakerHealthy: true, hasTelemetryTracing: true },
    { id: 'svc-02', serviceName: 'auth-identity-spire', podReplicas: 18, requestsPerSecond: 92000, p99LatencyMs: 3.8, errorBudgetRemainingPercent: 100.0, isMtlsEnforced: true, isCircuitBreakerHealthy: true, hasTelemetryTracing: true },
    { id: 'svc-03', serviceName: 'splitdb-router-pool', podReplicas: 48, requestsPerSecond: 145000, p99LatencyMs: 4.1, errorBudgetRemainingPercent: 99.9, isMtlsEnforced: true, isCircuitBreakerHealthy: true, hasTelemetryTracing: true },
    { id: 'svc-04', serviceName: 'ai-reasoning-dispatcher', podReplicas: 24, requestsPerSecond: 28000, p99LatencyMs: 14.2, errorBudgetRemainingPercent: 99.4, isMtlsEnforced: true, isCircuitBreakerHealthy: true, hasTelemetryTracing: true },
  ],
  trafficEdges: [
    { id: 'edge-01', fromService: 'ingress-gateway-envoy', toService: 'auth-identity-spire', protocol: 'gRPC mTLS v1.3', successRatePercent: 99.999, isEncrypted: true },
    { id: 'edge-02', fromService: 'ingress-gateway-envoy', toService: 'splitdb-router-pool', protocol: 'HTTP/2 Clearwire mTLS', successRatePercent: 99.998, isEncrypted: true },
    { id: 'edge-03', fromService: 'splitdb-router-pool', toService: 'ai-reasoning-dispatcher', protocol: 'gRPC Streaming', successRatePercent: 99.995, isEncrypted: true },
    { id: 'edge-04', fromService: 'auth-identity-spire', toService: 'splitdb-router-pool', protocol: 'Internal Token Auth', successRatePercent: 100.0, isEncrypted: true },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 11: Threat Intelligence Feed (threat-intelligence-feed) - Flat Sovereign
// =============================================================================
export const createThreatIntelligenceFeedSlide = (
  id = 'slide-threat-feed',
  overrides?: Partial<ThreatIntelligenceFeedSlideData>
): ThreatIntelligenceFeedSlideData => ({
  id,
  type: 'threat-intelligence-feed',
  kicker: 'SOVEREIGN SOC TELEMETRY & ATT&CK',
  title: 'Real-Time Threat Intelligence & Defense Perimeter',
  subtitle: 'Automated IOC Detection, MITRE Matrix Mapping & Real-Time Perimeter Containment',
  feedSource: 'Enterprise Sovereign SIEM / Threat Engine',
  threatLevel: 'GUARDED',
  containmentRatePercent: 99.7,
  socCommander: 'Alim Ul Karim',
  commanderTitle: 'Chief Software Engineer',
  isAutomatedMitigationActive: true,
  threatFeed: [
    { id: 'th-01', threatActor: 'APT-29 / Cozylight Heuristics', threatCategory: 'Supply Chain Ingress Probe', mitreTactic: 'Initial Access (T1190)', cvssScore: 9.8, severity: 'CRITICAL', affectedAssetsCount: 0, isContained: true, isZeroDaySignature: false, hasAutomatedWafBlock: true },
    { id: 'th-02', threatActor: 'Distributed Mirai Variant B', threatCategory: 'Volumetric L4 SynFlood', mitreTactic: 'Denial of Service (T1498)', cvssScore: 7.5, severity: 'HIGH', affectedAssetsCount: 2, isContained: true, isZeroDaySignature: false, hasAutomatedWafBlock: true },
    { id: 'th-03', threatActor: 'Heuristic Token Forger', threatCategory: 'Credential Stuffing Assault', mitreTactic: 'Credential Access (T1110)', cvssScore: 8.2, severity: 'HIGH', affectedAssetsCount: 0, isContained: true, isZeroDaySignature: false, hasAutomatedWafBlock: true },
    { id: 'th-04', threatActor: 'Kernel Privilege BPF Anomaly', threatCategory: 'Local Privilege Escalation', mitreTactic: 'Privilege Escalation (T1068)', cvssScore: 6.8, severity: 'MEDIUM', affectedAssetsCount: 0, isContained: true, isZeroDaySignature: true, hasAutomatedWafBlock: true },
  ],
  perimeterZones: [
    { id: 'pz-01', perimeterZone: 'Edge Ingress Anycast Layer', blockedAttacksLast24h: 421000, containmentSpeedMs: 1.2, isProtected: true },
    { id: 'pz-02', perimeterZone: 'Internal VPC Microsegment Mesh', blockedAttacksLast24h: 840, containmentSpeedMs: 0.8, isProtected: true },
    { id: 'pz-03', perimeterZone: 'Split-DB Shard Storage Enclave', blockedAttacksLast24h: 12, containmentSpeedMs: 0.3, isProtected: true },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 12: Data Lakehouse Governance (data-lakehouse-governance) - Flat Sovereign
// =============================================================================
export const createDataLakehouseGovernanceSlide = (
  id = 'slide-lakehouse-gov',
  overrides?: Partial<DataLakehouseGovernanceSlideData>
): DataLakehouseGovernanceSlideData => ({
  id,
  type: 'data-lakehouse-governance',
  kicker: 'ICEBERG LAKEHOUSE & AUDIT GOVERNANCE',
  title: 'Data Lakehouse Governance & Compliance Fabric',
  subtitle: 'Apache Iceberg Catalogs, Column-Level RBAC Masking & Automated GDPR Compaction',
  catalogName: 'Sovereign Enterprise Iceberg v2',
  totalDataManagedPb: 18.6,
  complianceAuditScorePercent: 99.8,
  lakehouseArchitect: 'Alim Ul Karim',
  architectTitle: 'Chief Software Engineer',
  isCasbinRbacEnforced: true,
  dataDomains: [
    { id: 'dom-01', domainName: 'Core Financial Ledgers', tableFormat: 'Apache Iceberg v2 / Parquet', storagePetabytes: 6.4, dailyQueryCount: '2.4M queries', complianceHealthPercent: 100.0, isColumnLevelMasked: true, isGdprCompliant: true, hasAuditProvenance: true },
    { id: 'dom-02', domainName: 'Customer PII & Identity', tableFormat: 'Apache Iceberg v2 / Parquet', storagePetabytes: 2.1, dailyQueryCount: '850k queries', complianceHealthPercent: 100.0, isColumnLevelMasked: true, isGdprCompliant: true, hasAuditProvenance: true },
    { id: 'dom-03', domainName: 'Operational Telemetry & Logs', tableFormat: 'Apache Iceberg v2 / Parquet', storagePetabytes: 8.9, dailyQueryCount: '14.2M queries', complianceHealthPercent: 99.6, isColumnLevelMasked: true, isGdprCompliant: true, hasAuditProvenance: true },
    { id: 'dom-04', domainName: 'ML Training Feature Store', tableFormat: 'Apache Iceberg v2 / Parquet', storagePetabytes: 1.2, dailyQueryCount: '480k queries', complianceHealthPercent: 100.0, isColumnLevelMasked: true, isGdprCompliant: true, hasAuditProvenance: true },
  ],
  governanceRules: [
    { id: 'rule-01', ruleName: 'Casbin Positive RBAC Evaluation', enforcementMode: 'Enforced at Query Engine', isEnforced: true, isPassed: true },
    { id: 'rule-02', ruleName: 'Automated GDPR Erasure Compaction', enforcementMode: 'Daily Iceberg Rewrite', isEnforced: true, isPassed: true },
    { id: 'rule-03', ruleName: 'Cryptographic Provenance Audit Log', enforcementMode: 'Append-Only Ledger', isEnforced: true, isPassed: true },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 13: Kubernetes Fleet Orchestrator (kubernetes-fleet-orchestrator) - Flat Sovereign
// =============================================================================
export const createKubernetesFleetOrchestratorSlide = (
  id = 'slide-k8s-fleet',
  overrides?: Partial<KubernetesFleetOrchestratorSlideData>
): KubernetesFleetOrchestratorSlideData => ({
  id,
  type: 'kubernetes-fleet-orchestrator',
  kicker: 'MULTI-REGION FLEET & GITOPS DRIFT',
  title: 'Multi-Region Kubernetes Fleet Orchestrator',
  subtitle: 'Zero-Drift GitOps Synchronization, Karpenter Dynamic Auto-Scaling & Quorum Guard',
  fleetName: 'Global Sovereign K8s Fleet Enterprise',
  totalManagedClusters: 24,
  overallNodeCapacity: 1420,
  leadFleetOrchestrator: 'Alim Ul Karim',
  orchestratorTitle: 'Chief Software Engineer',
  isZeroDriftEnforced: true,
  clusters: [
    { id: 'cl-01', clusterName: 'prod-us-east-alpha', region: 'us-east-1 (N. Virginia)', k8sVersion: 'v1.31.2-eks', nodeCount: 520, runningPods: 6800, cpuUtilizationPercent: 78.4, memoryUtilizationPercent: 82.1, isGitOpsSynced: true, isHealthy: true, hasQuorumLock: true },
    { id: 'cl-02', clusterName: 'prod-eu-west-beta', region: 'eu-west-1 (Ireland)', k8sVersion: 'v1.31.2-eks', nodeCount: 460, runningPods: 5400, cpuUtilizationPercent: 74.2, memoryUtilizationPercent: 79.5, isGitOpsSynced: true, isHealthy: true, hasQuorumLock: true },
    { id: 'cl-03', clusterName: 'prod-ap-south-gamma', region: 'ap-south-1 (Mumbai)', k8sVersion: 'v1.31.2-eks', nodeCount: 440, runningPods: 4900, cpuUtilizationPercent: 71.8, memoryUtilizationPercent: 76.4, isGitOpsSynced: true, isHealthy: true, hasQuorumLock: true },
  ],
  fleetPolicies: [
    { id: 'pol-01', policyName: 'Zero-Root Security Context Enforcement', complianceRatePercent: 100.0, isEnforcedGlobally: true },
    { id: 'pol-02', policyName: 'Karpenter Dynamic Node Consolidation', complianceRatePercent: 99.8, isEnforcedGlobally: true },
    { id: 'pol-03', policyName: 'GitOps Instant Reconciliation Drift Lock', complianceRatePercent: 100.0, isEnforcedGlobally: true },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 14: API Monetization & Billing (api-monetization-billing) - Flat Sovereign
// =============================================================================
export const createApiMonetizationBillingSlide = (
  id = 'slide-api-billing',
  overrides?: Partial<ApiMonetizationBillingSlideData>
): ApiMonetizationBillingSlideData => ({
  id,
  type: 'api-monetization-billing',
  kicker: 'API UNIT ECONOMICS & REVENUE METERING',
  title: 'API Monetization & Real-Time Billing Engine',
  subtitle: 'Tiered Pricing Economics, Quota Metering, Overage Revenue & Gross Margin Telemetry',
  billingCycle: 'FY2026-Q4 Executive Billing Cycle',
  totalMrrFormatted: '$2.84M',
  grossMarginOverallPercent: 84.6,
  billingArchitect: 'Alim Ul Karim',
  architectTitle: 'Chief Software Engineer',
  isRealtimeMeteringActive: true,
  pricingTiers: [
    { id: 'tier-dev', tierName: 'Public Developer Tier', monthlyBaseFee: 49, includedCallsMillions: 1, overagePerThousandCalls: 0.10, activeSubscribers: 14200, monthlyRecurringRevenue: 695800, grossMarginPercent: 78.2, isSlaGuaranteeActive: false, isSelfServeEnabled: true, hasVolumeDiscount: false },
    { id: 'tier-biz', tierName: 'Growth Business Tier', monthlyBaseFee: 499, includedCallsMillions: 15, overagePerThousandCalls: 0.06, activeSubscribers: 2800, monthlyRecurringRevenue: 1397200, grossMarginPercent: 84.5, isSlaGuaranteeActive: true, isSelfServeEnabled: true, hasVolumeDiscount: true },
    { id: 'tier-sov', tierName: 'Sovereign Enterprise Tier', monthlyBaseFee: 2499, includedCallsMillions: 100, overagePerThousandCalls: 0.03, activeSubscribers: 240, monthlyRecurringRevenue: 599760, grossMarginPercent: 89.2, isSlaGuaranteeActive: true, isSelfServeEnabled: false, hasVolumeDiscount: true },
    { id: 'tier-hpc', tierName: 'Hyperscale Custom Tier', monthlyBaseFee: 7500, includedCallsMillions: 500, overagePerThousandCalls: 0.02, activeSubscribers: 20, monthlyRecurringRevenue: 150000, grossMarginPercent: 91.8, isSlaGuaranteeActive: true, isSelfServeEnabled: false, hasVolumeDiscount: true },
  ],
  metricSummaries: [
    { id: 'bm-01', metricLabel: 'Total MRR Run-Rate', metricValue: '$34.08M ARR', isTargetAchieved: true },
    { id: 'bm-02', metricLabel: 'Overage Billable Ingress', metricValue: '$485k/mo', isTargetAchieved: true },
    { id: 'bm-03', metricLabel: '99.999% SLA Refund Rate', metricValue: '0.00%', isTargetAchieved: true },
    { id: 'bm-04', metricLabel: 'Gross Margin Blended', metricValue: '84.6%', isTargetAchieved: true },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 15: AI Inference Cluster Telemetry (ai-inference-cluster-telemetry) - Flat Sovereign
// =============================================================================
export const createAiInferenceClusterTelemetrySlide = (
  id = 'slide-gpu-cluster',
  overrides?: Partial<AiInferenceClusterTelemetrySlideData>
): AiInferenceClusterTelemetrySlideData => ({
  id,
  type: 'ai-inference-cluster-telemetry',
  kicker: 'HPC ACCELERATOR & TENSOR CORE METRICS',
  title: 'AI GPU Inference Cluster & Hardware Telemetry',
  subtitle: 'H100/Blackwell Utilization, Paged KV-Cache Efficiency & Sub-10ms TTFT Latency',
  clusterName: 'Sovereign Tensor HPC Cluster 01',
  totalGpuAccelerators: 512,
  aggregateTokensPerSecFormatted: '640,000 tps',
  averageComputeUtilizationPercent: 94.2,
  leadHpcArchitect: 'Alim Ul Karim',
  architectTitle: 'Chief Software Engineer',
  isContinuousBatchingActive: true,
  gpuNodeGroups: [
    { id: 'gpu-pod-01', nodeGroupName: 'H100-SXM5 Pod Alpha (Primary)', acceleratorModel: 'NVIDIA H100 80GB SXM5', gpuCount: 256, computeUtilizationPercent: 96.4, kvCacheEfficiencyPercent: 98.2, tokensPerSecondGenerated: 340000, averageTemperatureCelsius: 64, isThermalThrottleFree: true, isHealthy: true, hasActiveWorkload: true },
    { id: 'gpu-pod-02', nodeGroupName: 'B200 Blackwell Tensor Grid (Beta)', acceleratorModel: 'NVIDIA B200 192GB Blackwell', gpuCount: 128, computeUtilizationPercent: 92.8, kvCacheEfficiencyPercent: 99.4, tokensPerSecondGenerated: 210000, averageTemperatureCelsius: 58, isThermalThrottleFree: true, isHealthy: true, hasActiveWorkload: true },
    { id: 'gpu-pod-03', nodeGroupName: 'GH200 GraceHopper Pod Gamma', acceleratorModel: 'NVIDIA GH200 NVL 480GB', gpuCount: 128, computeUtilizationPercent: 93.5, kvCacheEfficiencyPercent: 97.6, tokensPerSecondGenerated: 90000, averageTemperatureCelsius: 61, isThermalThrottleFree: true, isHealthy: true, hasActiveWorkload: true },
  ],
  inferenceSlos: [
    { id: 'slo-01', modelName: 'Sovereign-Reasoning-70B', ttftMs: 8.4, interTokenLatencyMs: 4.2, isMeetingSlo: true },
    { id: 'slo-02', modelName: 'CodeSynthesis-34B-Hermetic', ttftMs: 6.1, interTokenLatencyMs: 2.8, isMeetingSlo: true },
    { id: 'slo-03', modelName: 'Embeddings-Dense-Large', ttftMs: 2.4, interTokenLatencyMs: 1.1, isMeetingSlo: true },
  ],
  ...overrides,
});

// =============================================================================
// Sovereign Operations Slide Factories Registry
// =============================================================================
export const SOVEREIGN_OPERATIONS_SLIDE_FACTORIES: Record<
  SovereignOperationsSlideType,
  (id?: string, overrides?: any) => SovereignOperationsSlideData
> = {
  'zero-trust-packet-inspection': createZeroTrustPacketInspectionSlide,
  'database-migration-pipeline': createDatabaseMigrationPipelineSlide,
  'autonomous-ai-eval-harness': createAutonomousAiEvalHarnessSlide,
  'chaos-engineering-matrix': createChaosEngineeringMatrixSlide,
  'ci-cd-artifact-provenance': createCiCdArtifactProvenanceSlide,
  'disaster-recovery-drill': createDisasterRecoveryDrillSlide,
  'feature-flag-rollout-tree': createFeatureFlagRolloutTreeSlide,
  'quantum-cryptography-transition': createQuantumCryptographyTransitionSlide,
  'global-latency-topology': createGlobalLatencyTopologySlide,
  'microservices-mesh-telemetry': createMicroservicesMeshTelemetrySlide,
  'threat-intelligence-feed': createThreatIntelligenceFeedSlide,
  'data-lakehouse-governance': createDataLakehouseGovernanceSlide,
  'kubernetes-fleet-orchestrator': createKubernetesFleetOrchestratorSlide,
  'api-monetization-billing': createApiMonetizationBillingSlide,
  'ai-inference-cluster-telemetry': createAiInferenceClusterTelemetrySlide,
};

export function createSovereignOperationsSlideDefaults(
  type: SovereignOperationsSlideType,
  id?: string
): SovereignOperationsSlideData {
  const factory = SOVEREIGN_OPERATIONS_SLIDE_FACTORIES[type];
  if (factory) {
    return factory(id);
  }
  return createZeroTrustPacketInspectionSlide(id);
}

export function createAllSovereignOperationsSlides(): SovereignOperationsSlideData[] {
  return [
    createZeroTrustPacketInspectionSlide(),
    createDatabaseMigrationPipelineSlide(),
    createAutonomousAiEvalHarnessSlide(),
    createChaosEngineeringMatrixSlide(),
    createCiCdArtifactProvenanceSlide(),
    createDisasterRecoveryDrillSlide(),
    createFeatureFlagRolloutTreeSlide(),
    createQuantumCryptographyTransitionSlide(),
    createGlobalLatencyTopologySlide(),
    createMicroservicesMeshTelemetrySlide(),
    createThreatIntelligenceFeedSlide(),
    createDataLakehouseGovernanceSlide(),
    createKubernetesFleetOrchestratorSlide(),
    createApiMonetizationBillingSlide(),
    createAiInferenceClusterTelemetrySlide(),
  ];
}

export const SOVEREIGN_OPERATIONS_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  {
    type: 'zero-trust-packet-inspection',
    label: 'Zero-Trust Packet Inspection',
    category: 'Product & Architecture',
    desc: 'L3-L7 Hardware Ingress Decap, SPIFFE/SPIRE & eBPF Kernel Policy',
    icon: 'ShieldCheck',
  },
  {
    type: 'database-migration-pipeline',
    label: 'Database Migration Pipeline',
    category: 'Product & Architecture',
    desc: 'Dual-Write CDC Replication, Bitwise Checksum & Zero-Downtime Switch',
    icon: 'Database',
  },
  {
    type: 'autonomous-ai-eval-harness',
    label: 'Autonomous AI Eval Harness',
    category: 'Strategy & Metrics',
    desc: 'Multi-Turn Agent Determinism, Injection Defense & Grounding Harness',
    icon: 'BrainCircuit',
  },
  {
    type: 'chaos-engineering-matrix',
    label: 'Chaos Engineering Matrix',
    category: 'Product & Architecture',
    desc: 'Automated Resilience Injection, Fault Simulation & Self-Healing MTTR',
    icon: 'Flame',
  },
  {
    type: 'ci-cd-artifact-provenance',
    label: 'CI/CD Artifact Provenance',
    category: 'Product & Architecture',
    desc: 'Hermetic Build Sandboxes, Sigstore Keyless Signing & SLSA L4 Rekor',
    icon: 'FileCheck2',
  },
  {
    type: 'disaster-recovery-drill',
    label: 'Disaster Recovery Drill',
    category: 'Strategy & Metrics',
    desc: 'Multi-Region Disaster Recovery Simulation, BGP Route Drain & RTO',
    icon: 'RefreshCw',
  },
  {
    type: 'feature-flag-rollout-tree',
    label: 'Feature Flag Rollout Tree',
    category: 'Product & Architecture',
    desc: 'Canary Progression Rings, Automated Metric Guards & Kill-Switch',
    icon: 'GitFork',
  },
  {
    type: 'quantum-cryptography-transition',
    label: 'Quantum Cryptography Transition',
    category: 'Strategy & Metrics',
    desc: 'NIST ML-KEM-768, ML-DSA-65 Signatures & Hybrid TLS 1.3 Readiness',
    icon: 'KeyRound',
  },
  {
    type: 'global-latency-topology',
    label: 'Global Latency Topology',
    category: 'Product & Architecture',
    desc: 'Real-Time Edge Anycast Latency RTT & Transatlantic Fiber Mesh',
    icon: 'Globe2',
  },
  {
    type: 'microservices-mesh-telemetry',
    label: 'Microservices Mesh Telemetry',
    category: 'Product & Architecture',
    desc: 'Envoy Data Plane, Strict mTLS Identity & Circuit Breaker Health',
    icon: 'Network',
  },
  {
    type: 'threat-intelligence-feed',
    label: 'Threat Intelligence Feed',
    category: 'Product & Architecture',
    desc: 'Real-Time SOC Telemetry, IOC Detection & Automated WAF Mitigation',
    icon: 'ShieldAlert',
  },
  {
    type: 'data-lakehouse-governance',
    label: 'Data Lakehouse Governance',
    category: 'Product & Architecture',
    desc: 'Apache Iceberg v2 Catalogs, Column RBAC Masking & GDPR Compaction',
    icon: 'Layers',
  },
  {
    type: 'kubernetes-fleet-orchestrator',
    label: 'Kubernetes Fleet Orchestrator',
    category: 'Product & Architecture',
    desc: 'Multi-Region Fleet, Karpenter Auto-Scaling & Zero-Drift GitOps',
    icon: 'Boxes',
  },
  {
    type: 'api-monetization-billing',
    label: 'API Monetization & Billing',
    category: 'Strategy & Metrics',
    desc: 'API Usage Metering, Pricing Economics, Overage Revenue & Margins',
    icon: 'Receipt',
  },
  {
    type: 'ai-inference-cluster-telemetry',
    label: 'AI Inference Cluster Telemetry',
    category: 'Product & Architecture',
    desc: 'GPU Tensor Cores, KV-Cache Paged Attention & Sub-10ms TTFT Latency',
    icon: 'Cpu',
  },
];
