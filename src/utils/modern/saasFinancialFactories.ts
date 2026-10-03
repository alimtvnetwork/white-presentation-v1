import type {
  SaasUnitEconomicsBreakdownSlideData, GlobalFintechLedgerSettlementSlideData,
  MultiTenantDatabaseShardingSlideData, ContinuousCompliancePostureSlideData,
  DeveloperPlatformCatalogMeshSlideData,
} from '../../types/modern/saasFinancialTypes';

export function createSaasUnitEconomicsBreakdownSlide(id = 'slide-saas-economics'): SaasUnitEconomicsBreakdownSlideData {
  return {
    id, type: 'saas-unit-economics-breakdown',
    title: 'Enterprise SaaS Unit Economics & Margin Architecture',
    subtitle: 'Decomposition of acquisition efficiency, net revenue expansion, and cloud gross margins',
    kicker: 'FINANCIAL SOVEREIGNTY & CAPITAL EFFICIENCY', themeId: 'corporate-clean', activeStep: 1, maxSteps: 4,
    fiscalQuarter: 'FY2026-Q3', isAuditVerified: true,
    healthStrip: { annualRecurringRevenue: '$48.2M ARR', ruleOfFortyScore: 62, netRevenueRetentionPercentage: 138, lifetimeValueToCacRatio: 6.4, isTopDecilePerformance: true },
    economicPillars: [
      { id: 'ep1', stepIndex: 1, pillarTitle: 'Customer Acquisition Cost', primaryMetricValue: '$14,200', primaryMetricLabel: 'Blended CAC', secondaryMetricValue: '7.2 Mos', secondaryMetricLabel: 'Payback Period', efficiencyVerdict: '2.4x Benchmark', isPillarActive: true, isBenchmarkExceeded: true, detailedDrivers: ['Product-Led Funnel', 'Zero Ad Waste'] },
      { id: 'ep2', stepIndex: 2, pillarTitle: 'Net Revenue Retention', primaryMetricValue: '138%', primaryMetricLabel: 'Dollar Expansion', secondaryMetricValue: '0.38%', secondaryMetricLabel: 'Monthly Churn', efficiencyVerdict: 'Top Decile', isPillarActive: false, isBenchmarkExceeded: true, detailedDrivers: ['Seat Expansion', 'Multi-Product Upsell'] },
      { id: 'ep3', stepIndex: 3, pillarTitle: 'Gross Margin & COGS', primaryMetricValue: '82.4%', primaryMetricLabel: 'Consolidated Margin', secondaryMetricValue: '8.2%', secondaryMetricLabel: 'Hosting COGS', efficiencyVerdict: '+640 bps YoY', isPillarActive: false, isBenchmarkExceeded: true, detailedDrivers: ['Split-DB Cost Cut', 'Graviton Fleet'] },
      { id: 'ep4', stepIndex: 4, pillarTitle: 'Rule of 40 & Leverage', primaryMetricValue: '62%', primaryMetricLabel: 'Rule of 40 Score', secondaryMetricValue: '1.82', secondaryMetricLabel: 'Magic Number', efficiencyVerdict: 'Elite Efficiency', isPillarActive: false, isBenchmarkExceeded: true, detailedDrivers: ['20% FCF Margin', 'Autonomous Support'] },
    ],
  };
}

export function createGlobalFintechLedgerSettlementSlide(id = 'slide-fintech-settlement'): GlobalFintechLedgerSettlementSlideData {
  return {
    id, type: 'global-fintech-ledger-settlement',
    title: 'Global FinTech Double-Entry Ledger & Real-Time Settlement',
    subtitle: 'Distributed transaction clearing architecture delivering sub-second finality and zero-discrepancy reconciliation',
    kicker: 'HIGH-THROUGHPUT TRANSACTION INFRASTRUCTURE', themeId: 'corporate-clean', activeStep: 1, maxSteps: 4,
    settlementCurrencyPair: 'USD / EUR / GBP / JPY Pool', isRegulatoryCompliant: true,
    telemetry: { dailyClearingVolumeUsd: '$1.84B / Day', averageSettlementTimeMs: 380, peakThroughputTps: 48500, discrepancyRatePercentage: 0, isReconciliationClean: true },
    settlementSteps: [
      { id: 'st1', stepIndex: 1, stepName: 'Transaction Ingestion', subsystemProtocol: 'Idempotency Key & Hash Chain', processingThroughputTps: 48500, settlementLatencyMs: 14, reconciliationStatus: '100% Balanced', isStepActive: true, isImmutablyCommitted: true, protocolStandards: ['Double-Entry', 'SHA-256'] },
      { id: 'st2', stepIndex: 2, stepName: 'Multilateral Netting', subsystemProtocol: 'Liquidity Matrix', processingThroughputTps: 36000, settlementLatencyMs: 45, reconciliationStatus: 'Zero Exposure', isStepActive: false, isImmutablyCommitted: true, protocolStandards: ['FX Netting', 'Liquidity Gate'] },
      { id: 'st3', stepIndex: 3, stepName: 'ISO 20022 Validation', subsystemProtocol: 'pacs.008 XML Structured Msg', processingThroughputTps: 28000, settlementLatencyMs: 85, reconciliationStatus: 'Schema Validated', isStepActive: false, isImmutablyCommitted: true, protocolStandards: ['ISO 20022', 'SWIFT gpi'] },
      { id: 'st4', stepIndex: 4, stepName: 'Atomic RTGS Settlement', subsystemProtocol: 'Central Bank Instant Reserve', processingThroughputTps: 18000, settlementLatencyMs: 236, reconciliationStatus: 'Final Settlement', isStepActive: false, isImmutablyCommitted: true, protocolStandards: ['Atomic Settle', 'Zero Reversal'] },
    ],
  };
}

export function createMultiTenantDatabaseShardingSlide(id = 'slide-database-sharding'): MultiTenantDatabaseShardingSlideData {
  return {
    id, type: 'multi-tenant-database-sharding',
    title: 'Multi-Tenant Database Sharding & Distributed Consensus',
    subtitle: 'Split-database isolation architecture combining consistent hash routing, tenant sharding, and sub-10ms replication',
    kicker: 'DISTRIBUTED STORAGE ARCHITECTURE', themeId: 'corporate-clean', activeStep: 1, maxSteps: 4,
    hashAlgorithm: 'MurmurHash3 Virtual Ring (1024 V-Nodes)', isShardTopologyHealthy: true,
    telemetry: { totalPhysicalShards: 64, managedTenantsCount: 18400, p99ReplicationLagMs: 8, systemAvailabilityPercentage: 99.999, isAutoRebalanceEnabled: true },
    shardingTiers: [
      { id: 'sh1', stepIndex: 1, tierName: 'Consistent Hash Router', architectureComponent: 'Stateless Envoy Router', activeNodeCount: 16, latencyBudgetMs: 2, throughputQps: 320000, isTierActive: true, isHighlyAvailable: true, tierFeatures: ['Zero-Alloc Map', 'Circuit Breakers'] },
      { id: 'sh2', stepIndex: 2, tierName: 'Tenant Shard Cluster', architectureComponent: 'Isolated Split-DB Shards', activeNodeCount: 64, latencyBudgetMs: 5, throughputQps: 180000, isTierActive: false, isHighlyAvailable: true, tierFeatures: ['Resource Quotas', 'Zero Leakage'] },
      { id: 'sh3', stepIndex: 3, tierName: 'Geo Read Replicas', architectureComponent: 'Read-Only WAL Mirrors', activeNodeCount: 192, latencyBudgetMs: 3, throughputQps: 850000, isTierActive: false, isHighlyAvailable: true, tierFeatures: ['Sub-8ms Sync', 'Edge Cache'] },
      { id: 'sh4', stepIndex: 4, tierName: 'Raft Consensus', architectureComponent: 'Distributed Coordinator', activeNodeCount: 5, latencyBudgetMs: 12, throughputQps: 25000, isTierActive: false, isHighlyAvailable: true, tierFeatures: ['Sub-sec Election', 'Split-Brain Guard'] },
    ],
  };
}

export function createContinuousCompliancePostureSlide(id = 'slide-compliance-posture'): ContinuousCompliancePostureSlideData {
  return {
    id, type: 'continuous-compliance-posture',
    title: 'Continuous Compliance Posture & Automated Drift Telemetry',
    subtitle: 'Real-time compliance monitoring engine running 482 hourly tests across SOC 2, ISO 27001, HIPAA, and PCI-DSS',
    kicker: 'CONTINUOUS AUDIT & COMPLIANCE', themeId: 'corporate-clean', activeStep: 1, maxSteps: 1,
    merkleRootHash: '0x9b4a3c1f88e7d2105a41c3098e94fa8211b742e9ca4f09d2e731802bcde0f721',
    chiefAuditor: 'Alim Ul Karim, Chief Software Engineer', hasCryptographicSeal: true,
    globalHeader: { overallComplianceScore: 100, totalAutomatedTestsPerHour: 482, configurationDriftPercentage: 0, openCriticalFindingsCount: 0, isAuditReady: true },
    frameworks: [
      { id: 'f1', frameworkName: 'SOC 2 Type II', controlCount: 142, passingControlCount: 142, auditFrequency: 'Continuous Probes', certificationStatus: 'Clean Opinion', isAuditPassing: true, hasContinuousMonitoring: true, verifiedHighlights: ['Security Controls', 'Zero Exceptions'] },
      { id: 'f2', frameworkName: 'ISO/IEC 27001:2022', controlCount: 93, passingControlCount: 93, auditFrequency: 'Daily Re-scan', certificationStatus: 'UKAS Accredited', isAuditPassing: true, hasContinuousMonitoring: true, verifiedHighlights: ['Annex A Enforced', 'Asset Registry'] },
      { id: 'f3', frameworkName: 'HIPAA Security', controlCount: 42, passingControlCount: 42, auditFrequency: 'Real-Time Log Audits', certificationStatus: 'Attested', isAuditPassing: true, hasContinuousMonitoring: true, verifiedHighlights: ['ePHI Isolation', '7-Year Immutability'] },
      { id: 'f4', frameworkName: 'PCI-DSS v4.0', controlCount: 64, passingControlCount: 64, auditFrequency: 'Weekly Scans', certificationStatus: 'Level 1 Merchant', isAuditPassing: true, hasContinuousMonitoring: true, verifiedHighlights: ['Card Tokenization', 'Zero Clean Scan'] },
    ],
  };
}

export function createDeveloperPlatformCatalogMeshSlide(id = 'slide-platform-catalog'): DeveloperPlatformCatalogMeshSlideData {
  return {
    id, type: 'developer-platform-catalog-mesh',
    title: 'Internal Developer Platform Service Catalog & Golden Path Mesh',
    subtitle: 'Unified registry of 148 microservices, gRPC interfaces, and automated golden path scaffolding',
    kicker: 'INTERNAL DEVELOPER PLATFORM', themeId: 'corporate-clean', activeStep: 1, maxSteps: 1,
    platformArchitect: 'Alim Ul Karim, Chief Software Engineer', isPlatformStandardized: true,
    platformHealth: { totalRegisteredServices: 148, averageDeployDurationMinutes: 4.2, goldenPathAdoptionPercentage: 94.2, systemSloPercentage: 99.98, isIdpHealthy: true },
    goldenPaths: ['Go / SQLite Split-DB Microservice', 'TypeScript / React 19 Frontend', 'Python AI Inference Agent', 'Kafka Consumer Template'],
    tierOneServices: [
      { id: 's1', serviceName: 'Identity Gateway', tierLevel: 'TIER-1', apiProtocol: 'gRPC', currentVersion: 'v4.8.2', uptimeSlaPercentage: 99.999, ownerTeam: 'Security', isServiceHealthy: true, hasActiveGoldenPath: true },
      { id: 's2', serviceName: 'Billing Ledger', tierLevel: 'TIER-1', apiProtocol: 'gRPC', currentVersion: 'v3.2.1', uptimeSlaPercentage: 99.995, ownerTeam: 'FinTech', isServiceHealthy: true, hasActiveGoldenPath: true },
      { id: 's3', serviceName: 'Shard Coordinator', tierLevel: 'TIER-1', apiProtocol: 'gRPC', currentVersion: 'v2.9.0', uptimeSlaPercentage: 99.99, ownerTeam: 'Data Infra', isServiceHealthy: true, hasActiveGoldenPath: true },
    ],
    dataStreamingServices: [
      { id: 's4', serviceName: 'Kafka Stream', tierLevel: 'TIER-1', apiProtocol: 'EventStream', currentVersion: 'v3.8.0', uptimeSlaPercentage: 99.99, ownerTeam: 'Data Platform', isServiceHealthy: true, hasActiveGoldenPath: true },
      { id: 's5', serviceName: 'Cloud Spanner', tierLevel: 'TIER-1', apiProtocol: 'gRPC', currentVersion: 'v1.4.1', uptimeSlaPercentage: 99.999, ownerTeam: 'Storage', isServiceHealthy: true, hasActiveGoldenPath: true },
    ],
  };
}
