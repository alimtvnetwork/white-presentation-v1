import type {
  EnterpriseCloudMigrationFunnelSlideData, ZeroTrustIdentityPerimeterSlideData,
  AiDataFlywheelLifecycleSlideData, AiFlywheelStage, IncidentCommandWarRoomSlideData,
  RegulatoryGdprDataLineageSlideData,
} from '../../types/modern/transformationTypes';

export function createEnterpriseCloudMigrationFunnelSlide(id = 'slide-cloud-migration'): EnterpriseCloudMigrationFunnelSlideData {
  return {
    id, type: 'enterprise-cloud-migration-funnel',
    title: 'Enterprise Cloud Migration & Workload Modernization Funnel',
    subtitle: 'Systematic 4-phase transformation from legacy on-premises to autonomous cloud infrastructure',
    kicker: 'CLOUD INFRASTRUCTURE TRANSFORMATION', themeId: 'corporate-clean', activeStep: 1, maxSteps: 4,
    isMigrationOnTrack: true, cutoverDeadline: '2026-Q4',
    summary: { totalWorkloads: 1420, completedWorkloads: 860, costReductionPercentage: 41.2, targetCloudProvider: 'Multi-Region Google Cloud & AWS', isSlaMaintained: true },
    funnelPhases: [
      { id: 'p1', stepIndex: 1, phaseName: 'Discovery & Catalog', workloadCount: 1420, workloadType: 'Bare-Metal VMs', durationWeeks: 6, successRatePercentage: 100, riskTier: 'LOW', keyMilestones: ['Agentless Scanning', 'Dependency Graph'], isPhaseActive: true, isPhaseCompleted: false },
      { id: 'p2', stepIndex: 2, phaseName: 'Wave Planning & Governance', workloadCount: 1140, workloadType: 'Database Clusters', durationWeeks: 8, successRatePercentage: 98.4, riskTier: 'MEDIUM', keyMilestones: ['Landing Zone Provisioning', 'RBAC Matrix'], isPhaseActive: false, isPhaseCompleted: false },
      { id: 'p3', stepIndex: 3, phaseName: 'Automated Cutover', workloadCount: 860, workloadType: 'Core Containers', durationWeeks: 12, successRatePercentage: 99.9, riskTier: 'HIGH', keyMilestones: ['Block-Level Async Sync', 'DNS Flip'], isPhaseActive: false, isPhaseCompleted: false },
      { id: 'p4', stepIndex: 4, phaseName: 'Cloud Modernization', workloadCount: 540, workloadType: 'Serverless Pods', durationWeeks: 16, successRatePercentage: 99.95, riskTier: 'LOW', keyMilestones: ['Graviton Porting', 'Auto-scaling Mesh'], isPhaseActive: false, isPhaseCompleted: false },
    ],
  };
}

export function createZeroTrustIdentityPerimeterSlide(id = 'slide-zero-trust'): ZeroTrustIdentityPerimeterSlideData {
  return {
    id, type: 'zero-trust-identity-perimeter',
    title: 'Autonomous Zero-Trust Identity & Access Perimeter',
    subtitle: 'Hardware-attested authentication and micro-segmented workload authorization across sovereign boundaries',
    kicker: 'ZERO TRUST ENTERPRISE ARCHITECTURE', themeId: 'corporate-clean', activeStep: 1, maxSteps: 4,
    complianceStandard: 'NIST SP 800-207 Zero Trust Architecture', isPostureCompliant: true,
    telemetry: { activeSessionsCount: 24890, averageTrustScore: 98.4, authLatencyMs: 12, blockedAnomaliesCount: 142, isZeroTrustEnforced: true },
    securityPerimeterLayers: [
      { id: 'l1', stepIndex: 1, layerTitle: 'Hardware Identity', layerMechanism: 'FIDO2 / WebAuthn + TPM 2.0', enforcementTarget: 'All Principals', trustScoreMinimum: 95, latencyBudgetMs: 15, isLayerActive: true, isHardwareAttested: true, protocols: ['FIDO2', 'TPM 2.0'] },
      { id: 'l2', stepIndex: 2, layerTitle: 'Contextual Auth', layerMechanism: 'Casbin RBAC & Geo-IP Velocity', enforcementTarget: 'Ingress Gateways', trustScoreMinimum: 90, latencyBudgetMs: 8, isLayerActive: false, isHardwareAttested: true, protocols: ['Casbin', 'mTLS 1.3'] },
      { id: 'l3', stepIndex: 3, layerTitle: 'Micro-Segmentation', layerMechanism: 'Cilium eBPF & Envoy Encryption', enforcementTarget: 'East-West Mesh', trustScoreMinimum: 92, latencyBudgetMs: 4, isLayerActive: false, isHardwareAttested: true, protocols: ['eBPF', 'WireGuard'] },
      { id: 'l4', stepIndex: 4, layerTitle: 'Adaptive Telemetry', layerMechanism: 'Autonomous AI Anomaly Detection', enforcementTarget: 'Active Sessions', trustScoreMinimum: 85, latencyBudgetMs: 20, isLayerActive: false, isHardwareAttested: true, protocols: ['OpenTelemetry', 'Kafka'] },
    ],
  };
}

export function createAiDataFlywheelLifecycleSlide(id = 'slide-ai-flywheel'): AiDataFlywheelLifecycleSlideData {
  const flywheelStages: AiFlywheelStage[] = [
    { id: 's1', stepIndex: 1, stageName: 'Data Harvesting', subsystemTitle: 'Privacy-Preserving Ingestion', throughputRate: '120k rec/s', coreMetricName: 'PII Scrub Efficiency', coreMetricValue: '100%', isStageActive: true, isAutonomous: true, capabilities: ['Synthetic Expansion', 'Redaction'] },
    { id: 's2', stepIndex: 2, stageName: 'Continuous Fine-Tuning', subsystemTitle: 'Distributed QLoRA & DPO', throughputRate: '8x H100 Nodes', coreMetricName: 'Validation Loss Delta', coreMetricValue: '-18.2%', isStageActive: false, isAutonomous: true, capabilities: ['Checkpoints', 'DPO Alignment'] },
    { id: 's3', stepIndex: 3, stageName: 'High-Throughput Serving', subsystemTitle: 'TensorRT-LLM Serving Mesh', throughputRate: '42,000 req/s', coreMetricName: 'Time to First Token', coreMetricValue: '14ms', isStageActive: false, isAutonomous: true, capabilities: ['Dynamic Batching', 'Paged KV'] },
    { id: 's4', stepIndex: 4, stageName: 'Active Feedback Loop', subsystemTitle: 'Automated Preference Pairs', throughputRate: '1.2M ratings/d', coreMetricName: 'Acceptance Rate', coreMetricValue: '96.8%', isStageActive: false, isAutonomous: true, capabilities: ['Preference Pairs', 'Auto-Retrain'] },
  ];
  return {
    id, type: 'ai-data-flywheel-lifecycle',
    title: 'Enterprise Generative AI Data Flywheel Lifecycle',
    subtitle: 'Closed-loop pipeline transforming runtime telemetry into continuous model fine-tuning and inference',
    kicker: 'ENTERPRISE AI ACCELERATION', themeId: 'corporate-clean', activeStep: 1, maxSteps: 4,
    modelFamilyName: 'Sovereign-Llama-3.3-70B-Enterprise', isLoopClosed: true,
    telemetry: { dailyProcessedTokens: '4.8B Tokens', modelPerplexityScore: 1.28, p99LatencyMs: 18, feedbackConversionRate: '99.4%', isFlywheelAccelerating: true },
    flywheelStages,
    stages: flywheelStages,
  };
}

export function createIncidentCommandWarRoomSlide(id = 'slide-incident-war-room'): IncidentCommandWarRoomSlideData {
  return {
    id, type: 'incident-command-war-room',
    title: 'Incident Command War Room & High-Resilience Response',
    subtitle: 'Deterministic 4-phase incident resolution lifecycle minimizing blast radius and restoring SLA',
    kicker: 'MISSION-CRITICAL SRE RESILIENCE', themeId: 'corporate-clean', activeStep: 1, maxSteps: 4,
    postMortemSignoffRole: 'Chief Software Engineer', hasPostMortemSignoff: true,
    commandHeader: { incidentId: 'INC-2026-1003-SEV0', severityLevel: 'SEV-0', incidentCommander: 'Alim Ul Karim', meanTimeToAcknowledgeSeconds: 42, meanTimeToResolutionMinutes: 8.23, isIncidentContained: true },
    incidentPhases: [
      { id: 'w1', stepIndex: 1, phaseName: 'P0 Alert & Triage', timestamp: '14:02 UTC', actionTaken: 'Synthetic probers detected p99 latency spike', leadResponder: 'SRE Fleet', statusMetric: 'Error Rate: 14.2%', isPhaseActive: true, isPhaseResolved: true, evidenceItems: ['PagerDuty Flare', 'Kafka Lag'] },
      { id: 'w2', stepIndex: 2, phaseName: 'Blast Radius Isolation', timestamp: '14:04 UTC', actionTaken: 'Trip circuit-breaker; reroute traffic to Split-DB', leadResponder: 'Platform Core', statusMetric: 'Error Rate: 1.1%', isPhaseActive: false, isPhaseResolved: true, evidenceItems: ['eBPF Reroute', 'Pod Shedding'] },
      { id: 'w3', stepIndex: 3, phaseName: 'Canary Verification', timestamp: '14:08 UTC', actionTaken: 'Deploy zero-downtime hotfix patch to canary', leadResponder: 'Release Eng', statusMetric: 'Error Rate: 0.001%', isPhaseActive: false, isPhaseResolved: true, evidenceItems: ['Canary 10%', 'Normalized Latency'] },
      { id: 'w4', stepIndex: 4, phaseName: 'Post-Mortem Signoff', timestamp: '14:10 UTC', actionTaken: 'Signoff on 4-part RCA and preventative guards', leadResponder: 'Alim Ul Karim', statusMetric: 'MTTR: 8m 23s', isPhaseActive: false, isPhaseResolved: true, evidenceItems: ['4-Part RCA', 'Executive Signoff'] },
    ],
  };
}

export function createRegulatoryGdprDataLineageSlide(id = 'slide-gdpr-lineage'): RegulatoryGdprDataLineageSlideData {
  return {
    id, type: 'regulatory-gdpr-data-lineage',
    title: 'Regulatory GDPR Data Lineage & Sovereignty Pipeline',
    subtitle: 'Cryptographically verifiable PII data provenance, tokenization boundaries, and right-to-erasure workflows',
    kicker: 'DATA PRIVACY & SOVEREIGN GOVERNANCE', themeId: 'corporate-clean', activeStep: 1, maxSteps: 4,
    dataProtectionOfficer: 'Alim Ul Karim, Chief Software Engineer', hasCryptographicAuditTrail: true,
    auditSummary: { complianceFramework: 'GDPR (EU) 2016/679 & CCPA', activeDataSubjectsCount: '14.2M Identities', erasureSlaSeconds: 15, encryptionStandard: 'AES-256-GCM', isAuditCompliant: true },
    lineageNodes: [
      { id: 'n1', stepIndex: 1, nodeTitle: 'Explicit Consent Gate', regulatoryArticle: 'GDPR Art. 6 & 7', processingStage: 'Client Ingress Edge', encryptionStandard: 'TLS 1.3 / PFS', auditVerificationState: 'Verified Hash', isNodeActive: true, isAuditVerified: true, governanceControls: ['Purpose Opt-In', 'Consent Version'] },
      { id: 'n2', stepIndex: 2, nodeTitle: 'Cross-Border Sovereign Mesh', regulatoryArticle: 'GDPR Chapter V', processingStage: 'Frankfurt Enclave', encryptionStandard: 'Sovereign HSM Keys', auditVerificationState: 'Zero-Egress Gateway', isNodeActive: false, isAuditVerified: true, governanceControls: ['EU Model Clauses', 'Geofencing'] },
      { id: 'n3', stepIndex: 3, nodeTitle: 'Tokenization Vault', regulatoryArticle: 'GDPR Art. 32', processingStage: 'Isolated HSM', encryptionStandard: 'Format-Preserving (FPE)', auditVerificationState: 'Zero Raw Exposure', isNodeActive: false, isAuditVerified: true, governanceControls: ['HMAC Pseudonymization', '30d Key Rotation'] },
      { id: 'n4', stepIndex: 4, nodeTitle: 'Right-to-Erasure Ledger', regulatoryArticle: 'GDPR Art. 17', processingStage: 'Distributed Deletion Bus', encryptionStandard: 'Cryptographic Destruction', auditVerificationState: 'Proof of Erasure', isNodeActive: false, isAuditVerified: true, governanceControls: ['Sub-15s Eviction', 'Signed Certificate'] },
    ],
  };
}
