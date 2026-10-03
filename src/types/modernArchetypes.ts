export * from './modern/transformationTypes';
export * from './modern/saasFinancialTypes';
export * from './modern/boardroomStrategyTypes';

import type {
  EnterpriseCloudMigrationFunnelSlideData, ZeroTrustIdentityPerimeterSlideData,
  AiDataFlywheelLifecycleSlideData, IncidentCommandWarRoomSlideData,
  RegulatoryGdprDataLineageSlideData,
} from './modern/transformationTypes';
import type {
  SaasUnitEconomicsBreakdownSlideData, GlobalFintechLedgerSettlementSlideData,
  MultiTenantDatabaseShardingSlideData, ContinuousCompliancePostureSlideData,
  DeveloperPlatformCatalogMeshSlideData,
} from './modern/saasFinancialTypes';
import type {
  BoardroomMarketInflectionThesisSlideData, AsymmetricThreatDefenseMatrixSlideData,
  HardwareAcceleratorDieTopologySlideData, CustomerExperienceJourneyDeltaSlideData,
  ExecutiveBoardMandateCtaSlideData,
} from './modern/boardroomStrategyTypes';

export type ModernSlideType =
  | 'enterprise-cloud-migration-funnel' | 'zero-trust-identity-perimeter'
  | 'ai-data-flywheel-lifecycle' | 'incident-command-war-room'
  | 'regulatory-gdpr-data-lineage' | 'saas-unit-economics-breakdown'
  | 'global-fintech-ledger-settlement' | 'multi-tenant-database-sharding'
  | 'continuous-compliance-posture' | 'developer-platform-catalog-mesh'
  | 'boardroom-market-inflection-thesis' | 'asymmetric-threat-defense-matrix'
  | 'hardware-accelerator-die-topology' | 'customer-experience-journey-delta'
  | 'executive-board-mandate-cta';

export type ModernSlideData =
  | EnterpriseCloudMigrationFunnelSlideData | ZeroTrustIdentityPerimeterSlideData
  | AiDataFlywheelLifecycleSlideData | IncidentCommandWarRoomSlideData
  | RegulatoryGdprDataLineageSlideData | SaasUnitEconomicsBreakdownSlideData
  | GlobalFintechLedgerSettlementSlideData | MultiTenantDatabaseShardingSlideData
  | ContinuousCompliancePostureSlideData | DeveloperPlatformCatalogMeshSlideData
  | BoardroomMarketInflectionThesisSlideData | AsymmetricThreatDefenseMatrixSlideData
  | HardwareAcceleratorDieTopologySlideData | CustomerExperienceJourneyDeltaSlideData
  | ExecutiveBoardMandateCtaSlideData;

const VALID_MODERN_TYPES = new Set<string>([
  'enterprise-cloud-migration-funnel', 'zero-trust-identity-perimeter',
  'ai-data-flywheel-lifecycle', 'incident-command-war-room',
  'regulatory-gdpr-data-lineage', 'saas-unit-economics-breakdown',
  'global-fintech-ledger-settlement', 'multi-tenant-database-sharding',
  'continuous-compliance-posture', 'developer-platform-catalog-mesh',
  'boardroom-market-inflection-thesis', 'asymmetric-threat-defense-matrix',
  'hardware-accelerator-die-topology', 'customer-experience-journey-delta',
  'executive-board-mandate-cta',
]);

export function isModernSlide(slide: unknown): slide is ModernSlideData {
  if (typeof slide !== 'object' || !slide) return false;
  return VALID_MODERN_TYPES.has((slide as { type?: unknown }).type as string);
}

export function calculateModernSlideStepCount(slide: ModernSlideData): number {
  switch (slide.type) {
    case 'enterprise-cloud-migration-funnel': return Math.max(slide.funnelPhases?.length ?? 4, 1);
    case 'zero-trust-identity-perimeter': return Math.max(slide.securityPerimeterLayers?.length ?? 4, 1);
    case 'ai-data-flywheel-lifecycle': return Math.max(slide.flywheelStages?.length ?? 4, 1);
    case 'incident-command-war-room': return Math.max(slide.incidentPhases?.length ?? 4, 1);
    case 'regulatory-gdpr-data-lineage': return Math.max(slide.lineageNodes?.length ?? 4, 1);
    case 'saas-unit-economics-breakdown': return Math.max(slide.economicPillars?.length ?? 4, 1);
    case 'global-fintech-ledger-settlement': return Math.max(slide.settlementSteps?.length ?? 4, 1);
    case 'multi-tenant-database-sharding': return Math.max(slide.shardingTiers?.length ?? 4, 1);
    default: return 1;
  }
}
