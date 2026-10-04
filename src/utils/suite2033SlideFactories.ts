// lint-allow: file-size reason="Suite 2033 enterprise slide mock data factories" max=600
import type { SlideData } from '../types/presentation';
import type { ArchetypeOption } from './extendedSlideFactories';
import type {
  StrategicInitiativeCascadeSlideData,
  AiAgentOrchestrationPipelineSlideData,
  MaSynergyRealizationBridgeSlideData,
  ZeroDayIncidentContainmentLoopSlideData,
  CloudMigrationWaveStepperSlideData,
  CustomerLifecycleExpansionFunnelSlideData,
  DataLineageGovernanceFlowSlideData,
  ProductReleaseBurnUpCadenceSlideData,
  GlobalInfrastructureTopologyCockpitSlideData,
  SaasUnitEconomicsBreakdownSlideData,
  EsgSustainabilityGovernanceMatrixSlideData,
  CapTableOwnershipWaterfallSlideData,
  AiModelEvaluationBenchmarkRadarSlideData,
  EnterpriseSecurityPostureRadarSlideData,
  PartnerEcosystemValueMapSlideData,
  Suite2033SlideData,
  Suite2033SlideType,
} from '../types/suite2033Archetypes';

// ============================================================================
// 1. StrategicInitiativeCascadeSlide (Kinetic 4-Step)
// ============================================================================
export const createStrategicInitiativeCascadeSlide = (
  id = `slide-${Date.now()}`
): StrategicInitiativeCascadeSlideData => ({
  id,
  type: 'strategic-initiative-cascade',
  title: 'Multi-Year Strategic Initiative & Capital Cascade',
  subtitle: 'Sequenced enterprise transformation horizons, capital allocation gates, and compounding ARR targets through FY30',
  kicker: 'STRATEGIC INITIATIVE CASCADE',
  executiveSponsor: 'Alim Ul Karim',
  sponsorTitle: 'Chief Software Engineer',
  planningCycleYear: '2027-2030',
  activeStep: 0,
  maxSteps: 4,
  isCascadeApproved: true,
  hasBoardQuorumSigned: true,
  hasCapitalFullyAllocated: true,
  hasTelemetryGlow: true,
  cascadeHorizons: [
    { stepIndex: 0, horizonCode: 'H1', horizonTitle: 'Core Modernization & Cloud Fabric', timeframeQuarter: 'Q1-Q4 2027', targetRevenueRunRate: '$120M', capitalExpenditureAllocation: '$18M', strategicObjectiveSummary: 'Consolidate legacy monoliths into distributed Kubernetes micro-clusters.', keyDeliverables: ['99.99% Availability Core', 'Multi-tenant RBAC engine', 'Zero-trust network mesh'], isHorizonActive: true, isHorizonCompleted: false, hasBoardCommitment: true, hasCapitalUnlocked: true },
    { stepIndex: 1, horizonCode: 'H2', horizonTitle: 'Autonomous Agent Orchestration', timeframeQuarter: 'Q1-Q4 2028', targetRevenueRunRate: '$210M', capitalExpenditureAllocation: '$24M', strategicObjectiveSummary: 'Deploy multi-agent swarms for self-healing operations and automated workflows.', keyDeliverables: ['DAG agent swarms', 'Real-time telemetry stream', 'Automated QA gates'], isHorizonActive: false, isHorizonCompleted: false, hasBoardCommitment: true, hasCapitalUnlocked: true },
    { stepIndex: 2, horizonCode: 'H3', horizonTitle: 'Global Sovereign Infrastructure', timeframeQuarter: 'Q1-Q4 2029', targetRevenueRunRate: '$350M', capitalExpenditureAllocation: '$32M', strategicObjectiveSummary: 'Establish air-gapped sovereign datacenters across EU and APAC jurisdictions.', keyDeliverables: ['EU Data Boundary Enclave', 'Hardware TPM integration', 'Zero-day containment loop'], isHorizonActive: false, isHorizonCompleted: false, hasBoardCommitment: true, hasCapitalUnlocked: false },
    { stepIndex: 3, horizonCode: 'H4', horizonTitle: 'Ecosystem Flywheel & Platform Moat', timeframeQuarter: 'Q1-Q4 2030', targetRevenueRunRate: '$500M+', capitalExpenditureAllocation: '$45M', strategicObjectiveSummary: 'Scale ISV developer ecosystem and third-party hyperscaler co-sell marketplaces.', keyDeliverables: ['Global marketplace APIs', 'Sub-millisecond edge RPC', 'Institutional governance'], isHorizonActive: false, isHorizonCompleted: false, hasBoardCommitment: true, hasCapitalUnlocked: false },
  ],
  capitalKpis: [
    { id: 'kpi-01', kpiLabel: 'Blended ROI Target', kpiValue: '3.8x', variancePercentage: '+14%', isTargetMet: true, hasExecutiveSignoff: true },
    { id: 'kpi-02', kpiLabel: 'CapEx Efficiency', kpiValue: '92.4%', variancePercentage: '+5.2%', isTargetMet: true, hasExecutiveSignoff: true },
    { id: 'kpi-03', kpiLabel: 'Payback Velocity', kpiValue: '14 Mo', variancePercentage: '-2 Mo', isTargetMet: true, hasExecutiveSignoff: true },
  ],
});

// ============================================================================
// 2. AiAgentOrchestrationPipelineSlide (Kinetic 4-Step)
// ============================================================================
export const createAiAgentOrchestrationPipelineSlide = (
  id = `slide-${Date.now()}`
): AiAgentOrchestrationPipelineSlideData => ({
  id,
  type: 'ai-agent-orchestration-pipeline',
  title: 'Hierarchical Multi-Agent Orchestration Pipeline',
  subtitle: 'Continuous DAG agent pipeline executing autonomous code verification, reasoning consensus, and deterministic release gating',
  kicker: 'AI AGENT ORCHESTRATION PIPELINE',
  orchestrationCoordinator: 'Alim Ul Karim, Chief Software Engineer',
  clusterArchitectureTopology: 'Hierarchical DAG Swarm',
  totalContextTokensProcessed: 845000000,
  activeStep: 0,
  maxSteps: 4,
  isPipelineConverged: true,
  hasZeroDataLeakageVerified: true,
  hasHumanInTheLoopArmed: true,
  hasTelemetryGlow: true,
  orchestrationPhases: [
    { stepIndex: 0, phaseId: 'Phase-1: Ingest & Triage', phaseName: 'Spec Decomposition', reasoningModelFamily: 'WhiteOmni-Reason-v2', subagentWorkerCount: 8, tokenThroughputPerSecond: 1420, p99LatencyMilliseconds: 120, phaseDeliverableSummary: 'Deconstruct parent prompt into discrete dependency graphs and lock validation contracts.', activeToolCapabilities: ['gitmap', 'spec_parser', 'sqlite_lock'], isPhaseActive: true, isPhaseCompleted: false, hasMcpSandboxArmed: true, hasConsensusVerified: true },
    { stepIndex: 1, phaseId: 'Phase-2: Parallel Synthesis', phaseName: 'Autonomous Implementation', reasoningModelFamily: 'WhiteOmni-Code-v3', subagentWorkerCount: 16, tokenThroughputPerSecond: 2850, p99LatencyMilliseconds: 180, phaseDeliverableSummary: 'Execute surgical code modifications across isolated worktrees under affirmative boolean rules.', activeToolCapabilities: ['ast_editor', 'type_verifier', 'linter_gate'], isPhaseActive: false, isPhaseCompleted: false, hasMcpSandboxArmed: true, hasConsensusVerified: true },
    { stepIndex: 2, phaseId: 'Phase-3: Consensus Gate', phaseName: 'Multi-Perspective Review', reasoningModelFamily: 'WhiteOmni-Audit-v2', subagentWorkerCount: 6, tokenThroughputPerSecond: 980, p99LatencyMilliseconds: 95, phaseDeliverableSummary: 'Cross-examine AST diffs for memory leaks, accessibility compliance, and code size rules.', activeToolCapabilities: ['security_scanner', 'diff_auditor', 'a11y_bot'], isPhaseActive: false, isPhaseCompleted: false, hasMcpSandboxArmed: true, hasConsensusVerified: true },
    { stepIndex: 3, phaseId: 'Phase-4: Release Lock', phaseName: 'Cryptographic Attestation', reasoningModelFamily: 'WhiteOmni-Release-v1', subagentWorkerCount: 4, tokenThroughputPerSecond: 750, p99LatencyMilliseconds: 65, phaseDeliverableSummary: 'Generate hardware TPM attestation signatures and update SQLite task manager ledgers.', activeToolCapabilities: ['tpm_signer', 'task_manager', 'ci_bridge'], isPhaseActive: false, isPhaseCompleted: false, hasMcpSandboxArmed: true, hasConsensusVerified: true },
  ],
  workerNodes: [
    { id: 'node-01', nodeName: 'Worker-01 (Kinetic)', roleSpecialization: 'Kinetic Slide Engine', contextWindowUtilizationPercentage: 42, isPrimaryReasoner: true, hasExecutionClearance: true },
    { id: 'node-02', nodeName: 'Worker-02 (Flat)', roleSpecialization: 'Flat Sovereign Architect', contextWindowUtilizationPercentage: 38, isPrimaryReasoner: true, hasExecutionClearance: true },
    { id: 'node-03', nodeName: 'Worker-03 (Audit)', roleSpecialization: 'AST Linter Gatekeeper', contextWindowUtilizationPercentage: 25, isPrimaryReasoner: false, hasExecutionClearance: true },
    { id: 'node-04', nodeName: 'Worker-04 (Attest)', roleSpecialization: 'Ledger Fiduciary Signer', contextWindowUtilizationPercentage: 18, isPrimaryReasoner: false, hasExecutionClearance: true },
  ],
});

// ============================================================================
// 3. MaSynergyRealizationBridgeSlide (Kinetic 4-Step)
// ============================================================================
export const createMaSynergyRealizationBridgeSlide = (
  id = `slide-${Date.now()}`
): MaSynergyRealizationBridgeSlideData => ({
  id,
  type: 'ma-synergy-realization-bridge',
  title: 'M&A Synergy Realization & Value Creation Bridge',
  subtitle: 'Quantified EBITDA accretion bridge across platform rationalization, unified GTM, and procurement leverage',
  kicker: 'M&A SYNERGY REALIZATION BRIDGE',
  acquiringEntityName: 'White Global Enterprise',
  targetEntityName: 'OmniCloud Technologies',
  dealCloseDate: 'Q1 FY2026',
  totalCommittedSynergiesMillionUsd: 185,
  leadIntegrationExecutive: 'Alim Ul Karim, Chief Software Engineer',
  activeStep: 0,
  maxSteps: 4,
  isSynergyProgramOnTrack: true,
  hasBoardAuditCertified: true,
  hasAntitrustClearanceApproved: true,
  hasTelemetryGlow: true,
  synergyWaves: [
    { stepIndex: 0, waveCode: 'Wave 1: Day 1-100', waveTitle: 'Operational Stabilization', timeframeHorizon: 'Days 1-100', ebitdaAccretionMillionUsd: 32, cumulativeSynergyMillionUsd: 32, headcountRationalizationSavings: '$14M ARR', procurementOptimizationSavings: '$18M ARR', strategicDeliverable: 'Eliminate duplicate enterprise SaaS licenses and harmonize developer toolchains.', isWaveActive: true, isWaveCompleted: false, hasPassedPmoAudit: true, hasExceededTarget: true },
    { stepIndex: 1, waveCode: 'Wave 2: Month 4-9', waveTitle: 'Unified Go-To-Market', timeframeHorizon: 'Months 4-9', ebitdaAccretionMillionUsd: 48, cumulativeSynergyMillionUsd: 80, headcountRationalizationSavings: '$20M ARR', procurementOptimizationSavings: '$28M ARR', strategicDeliverable: 'Cross-sell combined product suite across Fortune 500 enterprise customer bases.', isWaveActive: false, isWaveCompleted: false, hasPassedPmoAudit: true, hasExceededTarget: true },
    { stepIndex: 2, waveCode: 'Wave 3: Month 10-18', waveTitle: 'Platform Convergence', timeframeHorizon: 'Months 10-18', ebitdaAccretionMillionUsd: 60, cumulativeSynergyMillionUsd: 140, headcountRationalizationSavings: '$24M ARR', procurementOptimizationSavings: '$36M ARR', strategicDeliverable: 'Migrate target workloads into unified multi-tenant Kubernetes and data lakehouse.', isWaveActive: false, isWaveCompleted: false, hasPassedPmoAudit: true, hasExceededTarget: false },
    { stepIndex: 3, waveCode: 'Wave 4: Month 19-24', waveTitle: 'Ecosystem Compounding', timeframeHorizon: 'Months 19-24', ebitdaAccretionMillionUsd: 45, cumulativeSynergyMillionUsd: 185, headcountRationalizationSavings: '$18M ARR', procurementOptimizationSavings: '$27M ARR', strategicDeliverable: 'Scale combined partner ecosystem and unlock joint pricing power with tier-1 hyperscalers.', isWaveActive: false, isWaveCompleted: false, hasPassedPmoAudit: true, hasExceededTarget: false },
  ],
  valueDrivers: [
    { id: 'driver-01', categoryName: 'Cloud & Infrastructure Sourcing', runRateContributionMillionUsd: 68, responsibleOfficer: 'Elena Vance, VP Infrastructure', isRealizationOnTrack: true },
    { id: 'driver-02', categoryName: 'Enterprise Cross-Sell Expansion', runRateContributionMillionUsd: 72, responsibleOfficer: 'Victoria Hastings, CRO', isRealizationOnTrack: true },
    { id: 'driver-03', categoryName: 'General & Administrative Consolidation', runRateContributionMillionUsd: 45, responsibleOfficer: 'Sarah Sterling, General Counsel', isRealizationOnTrack: true },
  ],
});

// ============================================================================
// 4. ZeroDayIncidentContainmentLoopSlide (Kinetic 4-Step)
// ============================================================================
export const createZeroDayIncidentContainmentLoopSlide = (
  id = `slide-${Date.now()}`
): ZeroDayIncidentContainmentLoopSlideData => ({
  id,
  type: 'zero-day-incident-containment-loop',
  title: 'Zero-Day Incident Containment & Neutralization Loop',
  subtitle: 'Automated 14-minute MTTR incident containment loop isolating compromised assets with zero customer data loss',
  kicker: 'ZERO-DAY INCIDENT CONTAINMENT LOOP',
  cveIdentifier: 'CVE-2026-9812',
  socIncidentCommander: 'Alim Ul Karim',
  commanderTitle: 'Chief Software Engineer',
  incidentSeverityTier: 'CRITICAL-SEV0',
  totalElapsedContainmentMinutes: 14,
  activeStep: 0,
  maxSteps: 4,
  isContainmentVerified: true,
  hasCriticalInfrastructureIsolated: true,
  hasForensicMemoryPreserved: true,
  hasTelemetryGlow: true,
  containmentSteps: [
    { stepIndex: 0, stageCode: 'T+2m: Trigger', stageTitle: 'Heuristic Anomaly Detection', slaElapsedMinutes: 2, targetMaxMinutes: 3, containmentProtocol: 'eBPF Kernel Anomaly Detector', remediationActionSummary: 'Flagged unexpected memory privilege escalation in edge API gateway pods.', affectedHostCount: 4, isStepActive: true, isStepCompleted: false, hasBlastRadiusContained: true, hasZeroDataLossGuaranteed: true },
    { stepIndex: 1, stageCode: 'T+5m: Isolate', stageTitle: 'Blast Radius Quarantining', slaElapsedMinutes: 5, targetMaxMinutes: 6, containmentProtocol: 'BGP Anycast Route Severing', remediationActionSummary: 'Automated network isolation severed outbound egress traffic to unknown C2 IPs.', affectedHostCount: 4, isStepActive: false, isStepCompleted: false, hasBlastRadiusContained: true, hasZeroDataLossGuaranteed: true },
    { stepIndex: 2, stageCode: 'T+9m: Forensic', stageTitle: 'Memory Dump & AST Diff', slaElapsedMinutes: 9, targetMaxMinutes: 10, containmentProtocol: 'Hardware Memory Snapshot', remediationActionSummary: 'Preserved volatile RAM state into cryptographically sealed audit bucket for analysis.', affectedHostCount: 4, isStepActive: false, isStepCompleted: false, hasBlastRadiusContained: true, hasZeroDataLossGuaranteed: true },
    { stepIndex: 3, stageCode: 'T+14m: Remediate', stageTitle: 'Live Rolling Kernel Patch', slaElapsedMinutes: 14, targetMaxMinutes: 15, containmentProtocol: 'Immutable MicroVM Rotation', remediationActionSummary: 'Hot-swapped 100% of affected gateway instances with patched microVM images.', affectedHostCount: 0, isStepActive: false, isStepCompleted: false, hasBlastRadiusContained: true, hasZeroDataLossGuaranteed: true },
  ],
  iocRecords: [
    { id: 'ioc-01', iocType: 'CVE-Exploit', iocValue: 'CVE-2026-9812 (Kernel UAF)', threatActorAttribution: 'Advanced Persistent Threat 44', isNeutralized: true },
    { id: 'ioc-02', iocType: 'C2-IP', iocValue: '198.51.100.84:9443 (Outbound)', threatActorAttribution: 'Bulletproof Hosting Enclave', isNeutralized: true },
    { id: 'ioc-03', iocType: 'SHA256', iocValue: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', threatActorAttribution: 'Trojanized Payload Dropper', isNeutralized: true },
  ],
});

// ============================================================================
// 5. CloudMigrationWaveStepperSlide (Kinetic 4-Step)
// ============================================================================
export const createCloudMigrationWaveStepperSlide = (
  id = `slide-${Date.now()}`
): CloudMigrationWaveStepperSlideData => ({
  id,
  type: 'cloud-migration-wave-stepper',
  title: 'Enterprise Cloud Migration Wave Stepper',
  subtitle: 'Structured cutover trajectory migrating 1,420 physical servers and 8.4 PB of storage to multi-region cloud fabric',
  kicker: 'CLOUD MIGRATION WAVE STEPPER',
  migrationProgramLead: 'Alim Ul Karim',
  leadArchitectRole: 'Chief Software Engineer',
  sourceDatacenterLocation: 'Equinix DC-04 Frankfurt',
  destinationCloudRegion: 'AWS eu-central-1 / GCP europe-west3',
  totalServersInScope: 1420,
  totalStoragePetabytes: 8.4,
  activeStep: 0,
  maxSteps: 4,
  isOverallProgramOnSchedule: true,
  hasCloudSecurityGateClearance: true,
  hasTelemetryGlow: true,
  migrationWaves: [
    { stepIndex: 0, waveNumber: 1, waveTitle: 'Telemetry & Ingestion Edge', targetCloudRegion: 'eu-central-1a', serverCountMigrated: 280, databaseStorageTerabytes: 640, cutoverDowntimeMinutes: 0, migrationPattern: 'Replatform', waveDeliverableSummary: 'Migrate stateless edge ingest proxies and logging aggregation pipelines.', isWaveActive: true, isWaveCompleted: false, hasZeroDataLossVerified: true, hasRollbackPlanArmed: true },
    { stepIndex: 1, waveNumber: 2, waveTitle: 'Internal Microservices & APIs', targetCloudRegion: 'eu-central-1b', serverCountMigrated: 450, databaseStorageTerabytes: 1800, cutoverDowntimeMinutes: 4, migrationPattern: 'Refactor', waveDeliverableSummary: 'Containerize backend business domain services onto managed EKS clusters.', isWaveActive: false, isWaveCompleted: false, hasZeroDataLossVerified: true, hasRollbackPlanArmed: true },
    { stepIndex: 2, waveNumber: 3, waveTitle: 'Transactional Database Shards', targetCloudRegion: 'eu-central-1c', serverCountMigrated: 390, databaseStorageTerabytes: 3800, cutoverDowntimeMinutes: 8, migrationPattern: 'Replatform', waveDeliverableSummary: 'Execute live CDC replication to Aurora PostgreSQL and Cloud Spanner.', isWaveActive: false, isWaveCompleted: false, hasZeroDataLossVerified: true, hasRollbackPlanArmed: true },
    { stepIndex: 3, waveNumber: 4, waveTitle: 'Historical Lakehouse & Cold Storage', targetCloudRegion: 'europe-west3', serverCountMigrated: 300, databaseStorageTerabytes: 2160, cutoverDowntimeMinutes: 0, migrationPattern: 'Rehost', waveDeliverableSummary: 'Migrate SAN/NAS arrays to distributed Object Storage with life-cycle tiering.', isWaveActive: false, isWaveCompleted: false, hasZeroDataLossVerified: true, hasRollbackPlanArmed: true },
  ],
  workloadInventory: [
    { id: 'workload-01', workloadName: 'Core Trading Engine', criticalityTier: 'Tier-1', sourceVirtualMachinesCount: 180, isCutoverCompleted: true, hasComplianceApproval: true },
    { id: 'workload-02', workloadName: 'Customer Master Record DB', criticalityTier: 'Tier-1', sourceVirtualMachinesCount: 220, isCutoverCompleted: true, hasComplianceApproval: true },
    { id: 'workload-03', workloadName: 'Analytics Lakehouse Engine', criticalityTier: 'Tier-2', sourceVirtualMachinesCount: 340, isCutoverCompleted: false, hasComplianceApproval: true },
  ],
});

// ============================================================================
// 6. CustomerLifecycleExpansionFunnelSlide (Kinetic 4-Step)
// ============================================================================
export const createCustomerLifecycleExpansionFunnelSlide = (
  id = `slide-${Date.now()}`
): CustomerLifecycleExpansionFunnelSlideData => ({
  id,
  type: 'customer-lifecycle-expansion-funnel',
  title: 'Customer Lifecycle Expansion & Land-and-Expand Funnel',
  subtitle: 'Predictable account compounding trajectory driving 142% Net Revenue Retention and enterprise contract maturation',
  kicker: 'CUSTOMER LIFECYCLE EXPANSION FUNNEL',
  chiefRevenueOfficer: 'Alim Ul Karim, Chief Software Engineer',
  reportingPeriodWindow: 'FY2026 Annual Cohort Review',
  overallNetRetentionRatePercentage: 142,
  grossRevenueRetentionPercentage: 98.4,
  activeStep: 0,
  maxSteps: 4,
  isExpansionTrajectoryHealthy: true,
  hasExecutiveChurnShieldActive: true,
  hasQuotaTargetExceeded: true,
  hasTelemetryGlow: true,
  expansionStages: [
    { stepIndex: 0, stageCode: 'Stage 1: Land', stageTitle: 'Departmental POC Land', customerCohortCount: 420, averageContractValueUsd: 48000, netRevenueRetentionPercentage: 100, expansionDriverSummary: 'Initial deployment inside engineering or data science teams solving immediate friction.', keyExpansionPlaybook: 'Self-serve developer onboarding and standard API connectors.', isStageActive: true, isStageCompleted: false, hasHitQuotaTarget: true, hasPlaybookActive: true },
    { stepIndex: 1, stageCode: 'Stage 2: Adopt', stageTitle: 'Cross-Team Standardization', customerCohortCount: 285, averageContractValueUsd: 125000, netRevenueRetentionPercentage: 118, expansionDriverSummary: 'Adoption spreads across adjacent engineering divisions with centralized billing.', keyExpansionPlaybook: 'Enterprise SSO, SOC2 audit support, and dedicated CSM.', isStageActive: false, isStageCompleted: false, hasHitQuotaTarget: true, hasPlaybookActive: true },
    { stepIndex: 2, stageCode: 'Stage 3: Expand', stageTitle: 'Enterprise Master Service Agreement', customerCohortCount: 160, averageContractValueUsd: 380000, netRevenueRetentionPercentage: 135, expansionDriverSummary: 'Corporate procurement standardizes on White platform as enterprise system of record.', keyExpansionPlaybook: 'Tier-1 custom SLA, VPC peering, and executive QBR reviews.', isStageActive: false, isStageCompleted: false, hasHitQuotaTarget: true, hasPlaybookActive: true },
    { stepIndex: 3, stageCode: 'Stage 4: Champion', stageTitle: 'Global Strategic Partnership', customerCohortCount: 65, averageContractValueUsd: 950000, netRevenueRetentionPercentage: 154, expansionDriverSummary: 'Multi-year wall-to-wall commitment with co-innovation and executive sponsorship.', keyExpansionPlaybook: 'Joint GTM co-sell, custom ML model tuning, and advisory council seat.', isStageActive: false, isStageCompleted: false, hasHitQuotaTarget: true, hasPlaybookActive: true },
  ],
  cohortMetrics: [
    { id: 'cohort-2023', cohortYearQuarter: '2023 Cohort', initialAnnualRecurringRevenueUsd: 12000000, currentAnnualRecurringRevenueUsd: 26400000, expansionMultiplierScore: '2.20x', isTopDecileExpansion: true },
    { id: 'cohort-2024', cohortYearQuarter: '2024 Cohort', initialAnnualRecurringRevenueUsd: 24000000, currentAnnualRecurringRevenueUsd: 43200000, expansionMultiplierScore: '1.80x', isTopDecileExpansion: true },
    { id: 'cohort-2025', cohortYearQuarter: '2025 Cohort', initialAnnualRecurringRevenueUsd: 48000000, currentAnnualRecurringRevenueUsd: 69600000, expansionMultiplierScore: '1.45x', isTopDecileExpansion: true },
  ],
});

// ============================================================================
// 7. DataLineageGovernanceFlowSlide (Kinetic 4-Step)
// ============================================================================
export const createDataLineageGovernanceFlowSlide = (
  id = `slide-${Date.now()}`
): DataLineageGovernanceFlowSlideData => ({
  id,
  type: 'data-lineage-governance-flow',
  title: 'Cryptographic Data Lineage & Governance Flow',
  subtitle: 'End-to-end cryptographic provenance tracking 64.8 TB daily ingestion with BCBS 239 and EU AI Act compliance',
  kicker: 'DATA LINEAGE GOVERNANCE FLOW',
  chiefDataOfficerName: 'Alim Ul Karim, Chief Software Engineer',
  complianceFrameworkName: 'BCBS 239 & EU AI Act Article 10',
  totalGovernedDatasetsCount: 3840,
  dailyIngestionTerabytes: 64.8,
  activeStep: 0,
  maxSteps: 4,
  isLineageCryptographicallySealed: true,
  hasGdprComplianceCertified: true,
  hasHipaaEnclaveActive: true,
  hasTelemetryGlow: true,
  governanceHops: [
    { stepIndex: 0, hopCode: 'Hop-01', hopTitle: 'Raw Multi-Source Ingest', dataVolumeDailyGigabytes: 64800, processingEngineName: 'Distributed Kafka Cluster', complianceAuditStandard: 'TLS 1.3 / mTLS In-Flight', piiMaskingAlgorithm: 'Format-Preserving Encryption', cryptographicHashTag: 'sha256:d8a4f9...', isHopActive: true, isHopCompleted: false, hasEncryptionAtRestActive: true, hasZeroAuditDefects: true },
    { stepIndex: 1, hopCode: 'Hop-02', hopTitle: 'Data Scrubbing & Sanitization', dataVolumeDailyGigabytes: 58200, processingEngineName: 'Apache Spark Structured Streaming', complianceAuditStandard: 'GDPR Article 32 / HIPAA', piiMaskingAlgorithm: 'Differential Privacy Laplace Noise', cryptographicHashTag: 'sha256:7c21e4...', isHopActive: false, isHopCompleted: false, hasEncryptionAtRestActive: true, hasZeroAuditDefects: true },
    { stepIndex: 2, hopCode: 'Hop-03', hopTitle: 'Feature Store & Semantic Catalog', dataVolumeDailyGigabytes: 42100, processingEngineName: 'Delta Lake & Iceberg Enclave', complianceAuditStandard: 'BCBS 239 Principle 3', piiMaskingAlgorithm: 'Role-Based Dynamic Masking', cryptographicHashTag: 'sha256:9f40b2...', isHopActive: false, isHopCompleted: false, hasEncryptionAtRestActive: true, hasZeroAuditDefects: true },
    { stepIndex: 3, hopCode: 'Hop-04', hopTitle: 'Model Serving & Inference Ingest', dataVolumeDailyGigabytes: 24500, processingEngineName: 'Triton / TensorRT Enclave', complianceAuditStandard: 'EU AI Act Article 10 Logging', piiMaskingAlgorithm: 'Hardware Enclave Attestation', cryptographicHashTag: 'sha256:1a87e5...', isHopActive: false, isHopCompleted: false, hasEncryptionAtRestActive: true, hasZeroAuditDefects: true },
  ],
  catalogAttributes: [
    { id: 'attr-01', attributeFieldName: 'customer_ssn_ein', classificationTier: 'Restricted', isProtectedByRbac: true, hasDynamicMaskingArmed: true },
    { id: 'attr-02', attributeFieldName: 'transaction_amount_usd', classificationTier: 'Confidential', isProtectedByRbac: true, hasDynamicMaskingArmed: false },
    { id: 'attr-03', attributeFieldName: 'inference_token_latency', classificationTier: 'Internal', isProtectedByRbac: false, hasDynamicMaskingArmed: false },
  ],
});

// ============================================================================
// 8. ProductReleaseBurnUpCadenceSlide (Kinetic 4-Step)
// ============================================================================
export const createProductReleaseBurnUpCadenceSlide = (
  id = `slide-${Date.now()}`
): ProductReleaseBurnUpCadenceSlideData => ({
  id,
  type: 'product-release-burn-up-cadence',
  title: 'Product Release Burn-Up & Cadence Governance',
  subtitle: 'Rigorous release gating burning 1,240 story points with zero tolerance for Sev-1 defects across automated staging gates',
  kicker: 'PRODUCT RELEASE BURN-UP CADENCE',
  targetReleaseVersion: 'v2033.4.0-Enterprise',
  releaseManagerName: 'Alim Ul Karim',
  chiefSoftwareEngineer: 'Alim Ul Karim, Chief Software Engineer',
  totalScopeStoryPoints: 1240,
  activeStep: 0,
  maxSteps: 4,
  isReleaseCandidateLocked: true,
  hasZeroSev1Defects: true,
  hasAllGatesPassed: true,
  hasTelemetryGlow: true,
  releaseGates: [
    { stepIndex: 0, gateCode: 'Gate 1: M1', gateTitle: 'Core Architecture Freeze', storyPointsBurned: 380, targetStoryPoints: 380, zeroToleranceDefectsCount: 0, p99LatencyMilliseconds: 42, gateApprovalStatus: 'Passed & Locked', isGateActive: true, isGateCompleted: false, hasPassedAutomatedGates: true, hasReleaseLeadApproved: true },
    { stepIndex: 1, gateCode: 'Gate 2: M2', gateTitle: 'Security & Static Analysis', storyPointsBurned: 720, targetStoryPoints: 720, zeroToleranceDefectsCount: 0, p99LatencyMilliseconds: 54, gateApprovalStatus: 'Passed & Locked', isGateActive: false, isGateCompleted: false, hasPassedAutomatedGates: true, hasReleaseLeadApproved: true },
    { stepIndex: 2, gateCode: 'Gate 3: M3', gateTitle: 'Chaos & Performance Stress', storyPointsBurned: 1040, targetStoryPoints: 1040, zeroToleranceDefectsCount: 0, p99LatencyMilliseconds: 68, gateApprovalStatus: 'Passed & Locked', isGateActive: false, isGateCompleted: false, hasPassedAutomatedGates: true, hasReleaseLeadApproved: true },
    { stepIndex: 3, gateCode: 'Gate 4: GA', gateTitle: 'General Availability Release', storyPointsBurned: 1240, targetStoryPoints: 1240, zeroToleranceDefectsCount: 0, p99LatencyMilliseconds: 65, gateApprovalStatus: 'Ready for Deploy', isGateActive: false, isGateCompleted: false, hasPassedAutomatedGates: true, hasReleaseLeadApproved: true },
  ],
  qualityChecks: [
    { id: 'check-01', checkTitle: 'Code Coverage Floor (>= 90%)', verificationTool: 'Vitest / Istanbul', codeCoveragePercentage: 94.6, isReleaseBlocking: true, hasPassedVerification: true },
    { id: 'check-02', checkTitle: 'Zero AST Rule Violations', verificationTool: 'Custom ESLint / Biome Gate', codeCoveragePercentage: 100, isReleaseBlocking: true, hasPassedVerification: true },
    { id: 'check-03', checkTitle: 'A11y Northern Standard Audit', verificationTool: 'Axe-Core / DevTools MCP', codeCoveragePercentage: 98.2, isReleaseBlocking: true, hasPassedVerification: true },
  ],
});

// ============================================================================
// 9. GlobalInfrastructureTopologyCockpitSlide (Flat Overview)
// ============================================================================
export const createGlobalInfrastructureTopologyCockpitSlide = (
  id = `slide-${Date.now()}`
): GlobalInfrastructureTopologyCockpitSlideData => ({
  id,
  type: 'global-infrastructure-topology-cockpit',
  title: 'Global Infrastructure Topology & Backbone Cockpit',
  subtitle: 'Real-time telemetry across multi-region sovereign datacenters, high-capacity fiber backbone, and sub-10ms inter-region latency',
  kicker: 'GLOBAL INFRASTRUCTURE TOPOLOGY COCKPIT',
  cockpitOperatorRole: 'Alim Ul Karim, Chief Software Engineer',
  globalAvailabilitySlaPercentage: 99.999,
  totalGlobalTrafficTbps: 148,
  isGlobalBgpBalanced: true,
  hasDdosProtectionActive: true,
  hasEdgeFailoverOperational: true,
  hasTelemetryHighlight: true,
  regionalClusters: [
    { id: 'cluster-us-east', regionCode: 'US-EAST (IAD)', regionName: 'North America Primary Hub', activeDatacenterCount: 14, p99LatencyMilliseconds: 4.2, availabilityUptimePercentage: 99.999, trafficThroughputTbps: 48, isPrimaryFailoverArmed: true, hasHardwareSecurityModuleEnforced: true },
    { id: 'cluster-us-west', regionCode: 'US-WEST (SFO)', regionName: 'West Coast Compute Enclave', activeDatacenterCount: 10, p99LatencyMilliseconds: 5.1, availabilityUptimePercentage: 99.998, trafficThroughputTbps: 36, isPrimaryFailoverArmed: true, hasHardwareSecurityModuleEnforced: true },
    { id: 'cluster-eu-west', regionCode: 'EU-WEST (FRA)', regionName: 'European Sovereign Core', activeDatacenterCount: 12, p99LatencyMilliseconds: 3.8, availabilityUptimePercentage: 99.999, trafficThroughputTbps: 42, isPrimaryFailoverArmed: true, hasHardwareSecurityModuleEnforced: true },
    { id: 'cluster-ap-east', regionCode: 'AP-EAST (SIN)', regionName: 'Asia-Pacific Transit Edge', activeDatacenterCount: 8, p99LatencyMilliseconds: 6.4, availabilityUptimePercentage: 99.997, trafficThroughputTbps: 22, isPrimaryFailoverArmed: true, hasHardwareSecurityModuleEnforced: true },
  ],
  backboneLinks: [
    { id: 'link-01', originRegionCode: 'US-EAST', destinationRegionCode: 'EU-WEST', bandwidthCapacityTbps: 40, utilizationPercentage: 58, isHealthy: true },
    { id: 'link-02', originRegionCode: 'US-WEST', destinationRegionCode: 'AP-EAST', bandwidthCapacityTbps: 32, utilizationPercentage: 64, isHealthy: true },
    { id: 'link-03', originRegionCode: 'EU-WEST', destinationRegionCode: 'AP-EAST', bandwidthCapacityTbps: 28, utilizationPercentage: 52, isHealthy: true },
  ],
});

// ============================================================================
// 10. SaasUnitEconomicsBreakdownSlide (Flat Overview)
// ============================================================================
export const createSaasUnitEconomicsBreakdownSlide = (
  id = `slide-${Date.now()}`
): SaasUnitEconomicsBreakdownSlideData => ({
  id,
  type: 'saas-unit-economics-breakdown',
  title: 'Enterprise SaaS Unit Economics & Cohort Payback',
  subtitle: 'Rigorous financial distillation across CAC payback velocity, composite LTV:CAC multiples, and Rule of 40 operational efficiency',
  kicker: 'SAAS UNIT ECONOMICS BREAKDOWN',
  chiefFinancialOfficer: 'Elena Vance',
  reportingQuarter: 'Q4 FY2026',
  ruleOf40Score: 56.4,
  compositeLtvCacRatio: 6.8,
  blendedCacPaybackMonths: 10.2,
  overallGrossMarginPercentage: 84.5,
  isCashFlowPositive: true,
  hasBoardAuditClearance: true,
  hasFinancialAuditConfirmed: true,
  hasTelemetryHighlight: true,
  economicMetrics: [
    { id: 'metric-01', metricLabel: 'Blended CAC Payback', metricValue: '10.2 Mo', topDecileBenchmark: '< 12 Mo', varianceExplanation: 'Inbound organic product-led velocity reducing acquisition cost.', isTopDecilePerformance: true, hasExceededTarget: true },
    { id: 'metric-02', metricLabel: 'Gross Margin', metricValue: '84.5%', topDecileBenchmark: '> 80%', varianceExplanation: 'Proprietary GPU optimization reducing inference hosting costs.', isTopDecilePerformance: true, hasExceededTarget: true },
    { id: 'metric-03', metricLabel: 'Magic Number', metricValue: '1.42x', topDecileBenchmark: '> 1.0x', varianceExplanation: 'Sales efficiency multiplier accelerating net-new ARR creation.', isTopDecilePerformance: true, hasExceededTarget: true },
    { id: 'metric-04', metricLabel: 'Net Retention (NRR)', metricValue: '142%', topDecileBenchmark: '> 130%', varianceExplanation: 'Strong land-and-expand trajectory across enterprise accounts.', isTopDecilePerformance: true, hasExceededTarget: true },
  ],
  paybackCurves: [
    { id: 'curve-q1', cohortQuarter: 'Q1 FY2025', cacPaybackMonths: 9.8, ltvToCacRatio: 7.2, grossMarginPercentage: 85.2, isProfitableCohort: true },
    { id: 'curve-q2', cohortQuarter: 'Q2 FY2025', cacPaybackMonths: 10.1, ltvToCacRatio: 6.9, grossMarginPercentage: 84.8, isProfitableCohort: true },
    { id: 'curve-q3', cohortQuarter: 'Q3 FY2025', cacPaybackMonths: 10.4, ltvToCacRatio: 6.7, grossMarginPercentage: 84.1, isProfitableCohort: true },
    { id: 'curve-q4', cohortQuarter: 'Q4 FY2025', cacPaybackMonths: 10.5, ltvToCacRatio: 6.4, grossMarginPercentage: 83.9, isProfitableCohort: true },
  ],
});

// ============================================================================
// 11. EsgSustainabilityGovernanceMatrixSlide (Flat Overview)
// ============================================================================
export const createEsgSustainabilityGovernanceMatrixSlide = (
  id = `slide-${Date.now()}`
): EsgSustainabilityGovernanceMatrixSlideData => ({
  id,
  type: 'esg-sustainability-governance-matrix',
  title: 'ESG Sustainability & Corporate Governance Matrix',
  subtitle: 'Audited environmental stewardship, social responsibility initiatives, and independent fiduciary governance standards',
  kicker: 'ESG SUSTAINABILITY & GOVERNANCE MATRIX',
  committeeChairName: 'Dr. Evelyn Reed',
  reportingFiscalYear: 'FY2026',
  compositeEsgScore: 94.8,
  cdpRatingBadge: 'A- Leadership',
  isCarbonNeutralityOnTarget: true,
  hasZeroBriberyPolicyEnforced: true,
  hasIndependentBoardMajority: true,
  hasTelemetryHighlight: true,
  pillars: [
    { pillarCategory: 'Environmental', pillarScore: 96, targetMaxScore: 100, leadInitiativeTitle: '100% Carbon-Neutral Datacenters', auditVerificationAgency: 'SGS International Environmental Audit', isPillarCertified: true, hasThirdPartyAuditVerified: true, kpis: [{ kpiLabel: 'Renewable Power Match', kpiValue: '99.4%', targetBenchmark: '100% by 2027', isTargetMet: true }, { kpiLabel: 'Average PUE Ratio', kpiValue: '1.14 PUE', targetBenchmark: '< 1.20 PUE', isTargetMet: true }, { kpiLabel: 'Electronic E-Waste Recycled', kpiValue: '98.2%', targetBenchmark: '> 95.0%', isTargetMet: true }] },
    { pillarCategory: 'Social', pillarScore: 92, targetMaxScore: 100, leadInitiativeTitle: 'Global Inclusive Talent & Equity', auditVerificationAgency: 'Deloitte Human Capital Attestation', isPillarCertified: true, hasThirdPartyAuditVerified: true, kpis: [{ kpiLabel: 'Gender Pay Equity Ratio', kpiValue: '1.00 : 1.00', targetBenchmark: '1.00 : 1.00', isTargetMet: true }, { kpiLabel: 'Leadership Diversity', kpiValue: '44.5%', targetBenchmark: '> 40.0%', isTargetMet: true }, { kpiLabel: 'Employee Retention Rate', kpiValue: '94.2%', targetBenchmark: '> 90.0%', isTargetMet: true }] },
    { pillarCategory: 'Governance', pillarScore: 97, targetMaxScore: 100, leadInitiativeTitle: 'Ethical AI & Fiduciary Compliance', auditVerificationAgency: 'KPMG Advisory Governance Services', isPillarCertified: true, hasThirdPartyAuditVerified: true, kpis: [{ kpiLabel: 'Independent Board Members', kpiValue: '67.0%', targetBenchmark: '> 50.0%', isTargetMet: true }, { kpiLabel: 'Whistleblower Case Resolution', kpiValue: '100%', targetBenchmark: '100%', isTargetMet: true }, { kpiLabel: 'Ethics Training Completion', kpiValue: '99.8%', targetBenchmark: '100%', isTargetMet: true }] },
  ],
});

// ============================================================================
// 12. CapTableOwnershipWaterfallSlide (Flat Overview)
// ============================================================================
export const createCapTableOwnershipWaterfallSlide = (
  id = `slide-${Date.now()}`
): CapTableOwnershipWaterfallSlideData => ({
  id,
  type: 'cap-table-ownership-waterfall',
  title: 'Capitalization Table & Equity Ownership Waterfall',
  subtitle: 'Transparent equity distribution, liquidation preference seniority, and fully diluted share capital across investor tranches',
  kicker: 'CAP TABLE OWNERSHIP WATERFALL',
  preMoneyValuationMillionUsd: 210,
  postMoneyValuationMillionUsd: 260,
  fullyDilutedSharesTotal: 28500000,
  generalCounselLead: 'Sarah Sterling, Esq.',
  isCapTableFullyDiluted: true,
  hasLiquidationWaterfallVerified: true,
  has409aValuationCurrent: true,
  hasTelemetryHighlight: true,
  shareholderClasses: [
    { id: 'class-01', shareholderGroupName: 'Founding Team', shareClassTitle: 'Founders Common', totalSharesCount: 11400000, ownershipPercentage: 40.0, totalCapitalInvestedUsd: 500000, liquidationPreferenceMultiplier: 1.0, isVotingStock: true, hasSeniorityRanking: false },
    { id: 'class-02', shareholderGroupName: 'Seed Syndicate', shareClassTitle: 'Series Seed Preferred', totalSharesCount: 3420000, ownershipPercentage: 12.0, totalCapitalInvestedUsd: 4500000, liquidationPreferenceMultiplier: 1.0, isVotingStock: true, hasSeniorityRanking: false },
    { id: 'class-03', shareholderGroupName: 'Series A Lead VC', shareClassTitle: 'Series A Preferred', totalSharesCount: 5130000, ownershipPercentage: 18.0, totalCapitalInvestedUsd: 18000000, liquidationPreferenceMultiplier: 1.0, isVotingStock: true, hasSeniorityRanking: true },
    { id: 'class-04', shareholderGroupName: 'Growth Capital Group', shareClassTitle: 'Series B Preferred', totalSharesCount: 5130000, ownershipPercentage: 18.0, totalCapitalInvestedUsd: 50000000, liquidationPreferenceMultiplier: 1.0, isVotingStock: true, hasSeniorityRanking: true },
    { id: 'class-05', shareholderGroupName: 'Employee Option Pool', shareClassTitle: 'ESOP Pool', totalSharesCount: 3420000, ownershipPercentage: 12.0, totalCapitalInvestedUsd: 0, liquidationPreferenceMultiplier: 0.0, isVotingStock: false, hasSeniorityRanking: false },
  ],
});

// ============================================================================
// 13. AiModelEvaluationBenchmarkRadarSlide (Flat Overview)
// ============================================================================
export const createAiModelEvaluationBenchmarkRadarSlide = (
  id = `slide-${Date.now()}`
): AiModelEvaluationBenchmarkRadarSlideData => ({
  id,
  type: 'ai-model-evaluation-benchmark-radar',
  title: 'Frontier AI Model Evaluation & Capability Radar',
  subtitle: 'Empirical multi-axis benchmark testing reasoning, code generation, instruction following, and mathematical verification',
  kicker: 'AI MODEL EVALUATION BENCHMARK RADAR',
  evaluationSuiteVersion: 'v4.1-Frontier',
  leadResearchScientist: 'Dr. Maya Lin',
  referenceModelName: 'WhiteOmni-Ultra-2033',
  overallWinRatePercentage: 89.4,
  isThirdPartyBenchmarked: true,
  hasDataContaminationChecked: true,
  hasReproducibilityVerified: true,
  hasTelemetryHighlight: true,
  benchmarkAxes: [
    { id: 'axis-01', axisName: 'Complex Multi-Step Reasoning', ourModelScore: 94.2, competitorModelScore: 88.6, openSourceBaselineScore: 78.4, isOurModelLeading: true, hasStatisticallySignificantDelta: true },
    { id: 'axis-02', axisName: 'Autonomous Code Refactoring', ourModelScore: 96.8, competitorModelScore: 91.2, openSourceBaselineScore: 82.0, isOurModelLeading: true, hasStatisticallySignificantDelta: true },
    { id: 'axis-03', axisName: 'Formal Mathematical Logic', ourModelScore: 92.4, competitorModelScore: 89.8, openSourceBaselineScore: 74.5, isOurModelLeading: true, hasStatisticallySignificantDelta: true },
    { id: 'axis-04', axisName: 'Agent Tool & API Orchestration', ourModelScore: 95.1, competitorModelScore: 87.4, openSourceBaselineScore: 76.2, isOurModelLeading: true, hasStatisticallySignificantDelta: true },
    { id: 'axis-05', axisName: 'Hallucination Suppression', ourModelScore: 98.2, competitorModelScore: 93.0, openSourceBaselineScore: 84.1, isOurModelLeading: true, hasStatisticallySignificantDelta: true },
    { id: 'axis-06', axisName: 'Multi-Modal Context Coherence', ourModelScore: 91.6, competitorModelScore: 90.2, openSourceBaselineScore: 75.8, isOurModelLeading: true, hasStatisticallySignificantDelta: true },
  ],
  evaluatedModels: [
    { id: 'model-white', modelIdentifier: 'WhiteOmni-Ultra-2033', parameterVolumeLabel: '1.8T MoE Active', providerOrganization: 'White AI Research Labs', isReferenceModel: true },
    { id: 'model-comp', modelIdentifier: 'Frontier SOTA Benchmark', parameterVolumeLabel: 'Dense Proprietary', providerOrganization: 'Commercial Tier-1 Provider', isReferenceModel: false },
    { id: 'model-oss', modelIdentifier: 'OpenSource Standard 70B', parameterVolumeLabel: '70B Fine-Tuned', providerOrganization: 'Open Weights Consortium', isReferenceModel: false },
  ],
});

// ============================================================================
// 14. EnterpriseSecurityPostureRadarSlide (Flat Overview)
// ============================================================================
export const createEnterpriseSecurityPostureRadarSlide = (
  id = `slide-${Date.now()}`
): EnterpriseSecurityPostureRadarSlideData => ({
  id,
  type: 'enterprise-security-posture-radar',
  title: 'Enterprise Security Posture & Zero-Trust Radar',
  subtitle: 'Rigorous multi-domain cybersecurity assessment, continuous control auditing, and third-party compliance attestations',
  kicker: 'ENTERPRISE SECURITY POSTURE RADAR',
  chiefInformationSecurityOfficer: 'Marcus Vance',
  auditQuarterYear: 'Q4 FY2026',
  compositeSecurityMaturityScore: 4.88,
  isZeroTrustEnforced: true,
  hasSoc2Type2Certified: true,
  hasIncidentResponseTested: true,
  hasTelemetryHighlight: true,
  securityDomains: [
    { id: 'sec-01', domainName: 'Identity & Access Governance', currentMaturityScore: 4.9, targetMaturityScore: 5.0, complianceFrameworkStandard: 'NIST CSF PR.AC', activeAutomatedControlsCount: 42, isAuditCompliant: true, hasZeroOpenSev1Defects: true },
    { id: 'sec-02', domainName: 'Cloud Workload Hardening', currentMaturityScore: 4.8, targetMaturityScore: 5.0, complianceFrameworkStandard: 'CIS AWS/GCP Benchmark', activeAutomatedControlsCount: 68, isAuditCompliant: true, hasZeroOpenSev1Defects: true },
    { id: 'sec-03', domainName: 'Cryptographic Data Protection', currentMaturityScore: 5.0, targetMaturityScore: 5.0, complianceFrameworkStandard: 'FIPS 140-3 Hardware HSM', activeAutomatedControlsCount: 35, isAuditCompliant: true, hasZeroOpenSev1Defects: true },
    { id: 'sec-04', domainName: 'Autonomous Threat Hunting', currentMaturityScore: 4.8, targetMaturityScore: 5.0, complianceFrameworkStandard: 'MITRE ATT&CK Framework', activeAutomatedControlsCount: 54, isAuditCompliant: true, hasZeroOpenSev1Defects: true },
  ],
  certifications: [
    { id: 'cert-01', certificationName: 'SOC 2 Type II', auditorAgency: 'PricewaterhouseCoopers', expirationDate: '2027-08-31', isCertified: true },
    { id: 'cert-02', certificationName: 'ISO/IEC 27001:2022', auditorAgency: 'BSI Assurance UK', expirationDate: '2028-03-15', isCertified: true },
    { id: 'cert-03', certificationName: 'FedRAMP High Ready', auditorAgency: 'Coalfire 3PAO', expirationDate: '2027-12-31', isCertified: true },
  ],
});

// ============================================================================
// 15. PartnerEcosystemValueMapSlide (Flat Overview)
// ============================================================================
export const createPartnerEcosystemValueMapSlide = (
  id = `slide-${Date.now()}`
): PartnerEcosystemValueMapSlideData => ({
  id,
  type: 'partner-ecosystem-value-map',
  title: 'Global Partner Ecosystem & Co-Sell Value Map',
  subtitle: 'Synergistic partner channels generating $165M in co-sell pipeline across hyperscalers, global SIs, and software alliances',
  kicker: 'PARTNER ECOSYSTEM VALUE MAP',
  vpGlobalAlliancesName: 'Victoria Hastings',
  reportingFiscalYear: 'FY2026',
  totalCoSellPipelineMillionUsd: 165,
  isEcosystemFlywheelAccelerating: true,
  hasHyperscalerCoSellLocked: true,
  hasJointGtmAuthorized: true,
  hasTelemetryHighlight: true,
  partnerPillars: [
    { id: 'pillar-01', pillarTitle: 'Global System Integrators', activePartnerCount: 18, annualCoSellPipelineMillionUsd: 64, topPartnerNames: ['Accenture', 'Deloitte', 'Capgemini'], isStrategicPillar: true, hasJointSolutionValidated: true },
    { id: 'pillar-02', pillarTitle: 'Cloud Hyperscalers', activePartnerCount: 4, annualCoSellPipelineMillionUsd: 52, topPartnerNames: ['AWS Marketplace', 'Google Cloud', 'Microsoft Azure'], isStrategicPillar: true, hasJointSolutionValidated: true },
    { id: 'pillar-03', pillarTitle: 'ISV Tech Alliances', activePartnerCount: 45, annualCoSellPipelineMillionUsd: 31, topPartnerNames: ['Snowflake', 'Datadog', 'HashiCorp'], isStrategicPillar: true, hasJointSolutionValidated: true },
    { id: 'pillar-04', pillarTitle: 'Channel Resellers', activePartnerCount: 120, annualCoSellPipelineMillionUsd: 18, topPartnerNames: ['SHI International', 'CDW', 'Optiv'], isStrategicPillar: true, hasJointSolutionValidated: true },
  ],
  ecosystemMetrics: [
    { id: 'metric-01', metricLabel: 'Co-Sell Pipeline Velocity', metricValue: '$165M', growthPercentage: '+68% YoY', isTargetExceeded: true },
    { id: 'metric-02', metricLabel: 'Partner Attached Win Rate', metricValue: '62.4%', growthPercentage: '+14% Delta', isTargetExceeded: true },
    { id: 'metric-03', metricLabel: 'Tier-1 Certified Engineers', metricValue: '1,840+', growthPercentage: '+92% YoY', isTargetExceeded: true },
  ],
});

// Master Factory Map for Suite 2033
export const SUITE_2033_FACTORIES: Record<Suite2033SlideType, (id?: string) => Suite2033SlideData> = {
  'strategic-initiative-cascade': createStrategicInitiativeCascadeSlide,
  'ai-agent-orchestration-pipeline': createAiAgentOrchestrationPipelineSlide,
  'ma-synergy-realization-bridge': createMaSynergyRealizationBridgeSlide,
  'zero-day-incident-containment-loop': createZeroDayIncidentContainmentLoopSlide,
  'cloud-migration-wave-stepper': createCloudMigrationWaveStepperSlide,
  'customer-lifecycle-expansion-funnel': createCustomerLifecycleExpansionFunnelSlide,
  'data-lineage-governance-flow': createDataLineageGovernanceFlowSlide,
  'product-release-burn-up-cadence': createProductReleaseBurnUpCadenceSlide,
  'global-infrastructure-topology-cockpit': createGlobalInfrastructureTopologyCockpitSlide,
  'saas-unit-economics-breakdown': createSaasUnitEconomicsBreakdownSlide,
  'esg-sustainability-governance-matrix': createEsgSustainabilityGovernanceMatrixSlide,
  'cap-table-ownership-waterfall': createCapTableOwnershipWaterfallSlide,
  'ai-model-evaluation-benchmark-radar': createAiModelEvaluationBenchmarkRadarSlide,
  'enterprise-security-posture-radar': createEnterpriseSecurityPostureRadarSlide,
  'partner-ecosystem-value-map': createPartnerEcosystemValueMapSlide,
};

export const createSuite2033Slide = (
  type: string,
  id = `slide-${Date.now()}`
): Suite2033SlideData => {
  const factory = SUITE_2033_FACTORIES[type as Suite2033SlideType];

  return factory ? (factory(id) as Suite2033SlideData) : createStrategicInitiativeCascadeSlide(id);
};

// Archetype Options Catalog for Suite 2033
export const SUITE_2033_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  { type: 'strategic-initiative-cascade', label: 'Strategic Initiative Cascade', category: 'Corporate Strategy', desc: 'Multi-year strategic initiative horizons, capital expenditure gates, and compounding ARR targets', icon: 'Target' },
  { type: 'ai-agent-orchestration-pipeline', label: 'AI Agent Orchestration Pipeline', category: 'Product & Architecture', desc: 'Continuous DAG agent pipeline executing autonomous code verification and reasoning consensus', icon: 'Cpu' },
  { type: 'ma-synergy-realization-bridge', label: 'M&A Synergy Realization Bridge', category: 'Strategy & Metrics', desc: 'Quantified EBITDA accretion bridge across platform rationalization and unified GTM', icon: 'TrendingUp' },
  { type: 'zero-day-incident-containment-loop', label: 'Zero-Day Incident Containment Loop', category: 'Security & Compliance', desc: 'Automated 14-minute MTTR incident containment loop isolating compromised assets', icon: 'ShieldAlert' },
  { type: 'cloud-migration-wave-stepper', label: 'Cloud Migration Wave Stepper', category: 'Product & Architecture', desc: 'Structured cutover trajectory migrating physical servers and storage to multi-region cloud', icon: 'Cloud' },
  { type: 'customer-lifecycle-expansion-funnel', label: 'Customer Lifecycle Expansion Funnel', category: 'Go-to-Market', desc: 'Predictable account compounding trajectory driving 142% Net Revenue Retention', icon: 'Filter' },
  { type: 'data-lineage-governance-flow', label: 'Data Lineage Governance Flow', category: 'Security & Compliance', desc: 'Cryptographic provenance tracking daily ingestion with BCBS 239 and EU AI Act compliance', icon: 'Database' },
  { type: 'product-release-burn-up-cadence', label: 'Product Release Burn-Up Cadence', category: 'Product & Architecture', desc: 'Rigorous release gating burning story points with zero tolerance for Sev-1 defects', icon: 'CheckCircle' },
  { type: 'global-infrastructure-topology-cockpit', label: 'Global Infrastructure Topology Cockpit', category: 'Product & Architecture', desc: 'Real-time telemetry across multi-region sovereign datacenters and high-capacity fiber backbone', icon: 'Globe' },
  { type: 'saas-unit-economics-breakdown', label: 'SaaS Unit Economics Breakdown', category: 'Financial Analytics', desc: 'Rigorous financial distillation across CAC payback velocity, composite LTV:CAC, and Rule of 40', icon: 'DollarSign' },
  { type: 'esg-sustainability-governance-matrix', label: 'ESG Sustainability Governance Matrix', category: 'Corporate Governance', desc: 'Audited environmental stewardship, social equity, and independent fiduciary governance', icon: 'Leaf' },
  { type: 'cap-table-ownership-waterfall', label: 'Cap Table Ownership Waterfall', category: 'Financial Analytics', desc: 'Transparent equity distribution, liquidation preference seniority, and fully diluted share capital', icon: 'Layers' },
  { type: 'ai-model-evaluation-benchmark-radar', label: 'AI Model Evaluation Benchmark Radar', category: 'Product & Architecture', desc: 'Empirical multi-axis benchmark testing reasoning, code generation, and instruction following', icon: 'BarChart' },
  { type: 'enterprise-security-posture-radar', label: 'Enterprise Security Posture Radar', category: 'Security & Compliance', desc: 'Rigorous multi-domain cybersecurity assessment, continuous controls, and SOC 2 attestations', icon: 'ShieldCheck' },
  { type: 'partner-ecosystem-value-map', label: 'Partner Ecosystem Value Map', category: 'Go-to-Market', desc: 'Synergistic partner channels generating $165M in co-sell pipeline across hyperscalers and SIs', icon: 'Network' },
];

// Helper to batch instantiate all 15 demo slides for Suite 2033
export const createSuite2033Slides = (startIndex = 340): SlideData[] => [
  createStrategicInitiativeCascadeSlide(`slide-${startIndex}`),
  createAiAgentOrchestrationPipelineSlide(`slide-${startIndex + 1}`),
  createMaSynergyRealizationBridgeSlide(`slide-${startIndex + 2}`),
  createZeroDayIncidentContainmentLoopSlide(`slide-${startIndex + 3}`),
  createCloudMigrationWaveStepperSlide(`slide-${startIndex + 4}`),
  createCustomerLifecycleExpansionFunnelSlide(`slide-${startIndex + 5}`),
  createDataLineageGovernanceFlowSlide(`slide-${startIndex + 6}`),
  createProductReleaseBurnUpCadenceSlide(`slide-${startIndex + 7}`),
  createGlobalInfrastructureTopologyCockpitSlide(`slide-${startIndex + 8}`),
  createSaasUnitEconomicsBreakdownSlide(`slide-${startIndex + 9}`),
  createEsgSustainabilityGovernanceMatrixSlide(`slide-${startIndex + 10}`),
  createCapTableOwnershipWaterfallSlide(`slide-${startIndex + 11}`),
  createAiModelEvaluationBenchmarkRadarSlide(`slide-${startIndex + 12}`),
  createEnterpriseSecurityPostureRadarSlide(`slide-${startIndex + 13}`),
  createPartnerEcosystemValueMapSlide(`slide-${startIndex + 14}`),
];
