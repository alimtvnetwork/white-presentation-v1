import type { BaseSlide } from '../presentation';

export interface EconomicPillar {
  id: string; stepIndex: number; pillarTitle: string;
  primaryMetricValue: string; primaryMetricLabel: string;
  secondaryMetricValue: string; secondaryMetricLabel: string;
  efficiencyVerdict: string; isPillarActive: boolean; isBenchmarkExceeded: boolean; detailedDrivers: string[];
}
export interface SaaSExecutiveHealthStrip {
  annualRecurringRevenue: string; ruleOfFortyScore: number;
  netRevenueRetentionPercentage: number; lifetimeValueToCacRatio: number; isTopDecilePerformance: boolean;
}
export interface SaasUnitEconomicsBreakdownSlideData extends BaseSlide {
  type: 'saas-unit-economics-breakdown';
  healthStrip: SaaSExecutiveHealthStrip; economicPillars: EconomicPillar[];
  fiscalQuarter: string; isAuditVerified: boolean;
}
export type SaaSUnitEconomicsBreakdownSlideData = SaasUnitEconomicsBreakdownSlideData;

export interface SettlementStep {
  id: string; stepIndex: number; stepName: string; subsystemProtocol: string;
  processingThroughputTps: number; settlementLatencyMs: number; reconciliationStatus: string;
  isStepActive: boolean; isImmutablyCommitted: boolean; protocolStandards: string[];
}
export interface FintechLedgerTelemetryStrip {
  dailyClearingVolumeUsd: string; averageSettlementTimeMs: number;
  peakThroughputTps: number; discrepancyRatePercentage: number; isReconciliationClean: boolean;
}
export interface GlobalFintechLedgerSettlementSlideData extends BaseSlide {
  type: 'global-fintech-ledger-settlement';
  telemetry: FintechLedgerTelemetryStrip; settlementSteps: SettlementStep[];
  settlementCurrencyPair: string; isRegulatoryCompliant: boolean;
}

export interface ShardingTier {
  id: string; stepIndex: number; tierName: string; architectureComponent: string;
  activeNodeCount: number; latencyBudgetMs: number; throughputQps: number;
  isTierActive: boolean; isHighlyAvailable: boolean; tierFeatures: string[];
}
export interface ShardClusterTelemetry {
  totalPhysicalShards: number; managedTenantsCount: number;
  p99ReplicationLagMs: number; systemAvailabilityPercentage: number; isAutoRebalanceEnabled: boolean;
}
export interface MultiTenantDatabaseShardingSlideData extends BaseSlide {
  type: 'multi-tenant-database-sharding';
  telemetry: ShardClusterTelemetry; shardingTiers: ShardingTier[];
  hashAlgorithm: string; isShardTopologyHealthy: boolean;
}

export interface ComplianceFrameworkCard {
  id: string; frameworkName: string; controlCount: number; passingControlCount: number;
  auditFrequency: string; certificationStatus: string; isAuditPassing: boolean;
  hasContinuousMonitoring: boolean; verifiedHighlights: string[];
}
export interface ComplianceGlobalHeader {
  overallComplianceScore: number; totalAutomatedTestsPerHour: number;
  configurationDriftPercentage: number; openCriticalFindingsCount: number; isAuditReady: boolean;
}
export interface ContinuousCompliancePostureSlideData extends BaseSlide {
  type: 'continuous-compliance-posture';
  globalHeader: ComplianceGlobalHeader; frameworks: ComplianceFrameworkCard[];
  merkleRootHash: string; chiefAuditor: string; hasCryptographicSeal: boolean;
}

export interface CatalogServiceItem {
  id: string; serviceName: string; tierLevel: 'TIER-1' | 'TIER-2' | 'TIER-3';
  apiProtocol: 'gRPC' | 'OpenAPI' | 'GraphQL' | 'EventStream'; currentVersion: string;
  uptimeSlaPercentage: number; ownerTeam: string; isServiceHealthy: boolean; hasActiveGoldenPath: boolean;
}
export interface PlatformMeshHealthStrip {
  totalRegisteredServices: number; averageDeployDurationMinutes: number;
  goldenPathAdoptionPercentage: number; systemSloPercentage: number; isIdpHealthy: boolean;
}
export interface DeveloperPlatformCatalogMeshSlideData extends BaseSlide {
  type: 'developer-platform-catalog-mesh';
  platformHealth: PlatformMeshHealthStrip; tierOneServices: CatalogServiceItem[];
  dataStreamingServices: CatalogServiceItem[]; goldenPaths: string[];
  platformArchitect: string; isPlatformStandardized: boolean;
}
