import type { ModernSlideType, ModernSlideData } from '../../types/modernArchetypes';
import type { ArchetypeOption } from '../extendedSlideFactories';
import {
  createEnterpriseCloudMigrationFunnelSlide, createZeroTrustIdentityPerimeterSlide,
  createAiDataFlywheelLifecycleSlide, createIncidentCommandWarRoomSlide,
  createRegulatoryGdprDataLineageSlide,
} from './transformationFactories';
import {
  createSaasUnitEconomicsBreakdownSlide, createGlobalFintechLedgerSettlementSlide,
  createMultiTenantDatabaseShardingSlide, createContinuousCompliancePostureSlide,
  createDeveloperPlatformCatalogMeshSlide,
} from './saasFinancialFactories';
import {
  createBoardroomMarketInflectionThesisSlide, createAsymmetricThreatDefenseMatrixSlide,
  createHardwareAcceleratorDieTopologySlide, createCustomerExperienceJourneyDeltaSlide,
  createExecutiveBoardMandateCtaSlide,
} from './boardroomStrategyFactories';

export const MODERN_FACTORIES: Record<ModernSlideType, (id?: string) => ModernSlideData> = {
  'enterprise-cloud-migration-funnel': createEnterpriseCloudMigrationFunnelSlide,
  'zero-trust-identity-perimeter': createZeroTrustIdentityPerimeterSlide,
  'ai-data-flywheel-lifecycle': createAiDataFlywheelLifecycleSlide,
  'incident-command-war-room': createIncidentCommandWarRoomSlide,
  'regulatory-gdpr-data-lineage': createRegulatoryGdprDataLineageSlide,
  'saas-unit-economics-breakdown': createSaasUnitEconomicsBreakdownSlide,
  'global-fintech-ledger-settlement': createGlobalFintechLedgerSettlementSlide,
  'multi-tenant-database-sharding': createMultiTenantDatabaseShardingSlide,
  'continuous-compliance-posture': createContinuousCompliancePostureSlide,
  'developer-platform-catalog-mesh': createDeveloperPlatformCatalogMeshSlide,
  'boardroom-market-inflection-thesis': createBoardroomMarketInflectionThesisSlide,
  'asymmetric-threat-defense-matrix': createAsymmetricThreatDefenseMatrixSlide,
  'hardware-accelerator-die-topology': createHardwareAcceleratorDieTopologySlide,
  'customer-experience-journey-delta': createCustomerExperienceJourneyDeltaSlide,
  'executive-board-mandate-cta': createExecutiveBoardMandateCtaSlide,
};

export function createModernSlide(type: ModernSlideType, id?: string): ModernSlideData {
  const factory = MODERN_FACTORIES[type];
  return factory ? factory(id) : createEnterpriseCloudMigrationFunnelSlide(id);
}

export function createAllModernSlides(): ModernSlideData[] {
  return (Object.keys(MODERN_FACTORIES) as ModernSlideType[]).map((t) => MODERN_FACTORIES[t]());
}

export const MODERN_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  { type: 'enterprise-cloud-migration-funnel', label: 'Cloud Migration', category: 'Product & Architecture', desc: '4-phase enterprise workload migration funnel', icon: 'Cloud' },
  { type: 'zero-trust-identity-perimeter', label: 'Zero-Trust Perimeter', category: 'Product & Architecture', desc: 'Hardware identity & micro-segmentation', icon: 'ShieldCheck' },
  { type: 'ai-data-flywheel-lifecycle', label: 'AI Flywheel', category: 'Product & Architecture', desc: 'Continuous fine-tuning & edge inference', icon: 'Cpu' },
  { type: 'incident-command-war-room', label: 'Incident War Room', category: 'Strategy & Metrics', desc: 'P0 incident command & MTTR resolution', icon: 'AlertTriangle' },
  { type: 'regulatory-gdpr-data-lineage', label: 'GDPR Data Lineage', category: 'Strategy & Metrics', desc: 'PII provenance & right-to-erasure ledger', icon: 'FileText' },
  { type: 'saas-unit-economics-breakdown', label: 'SaaS Economics', category: 'Strategy & Metrics', desc: 'CAC, NRR, gross margin & Rule of 40', icon: 'TrendingUp' },
  { type: 'global-fintech-ledger-settlement', label: 'FinTech Settlement', category: 'Product & Architecture', desc: 'Double-entry ledger & atomic RTGS', icon: 'DollarSign' },
  { type: 'multi-tenant-database-sharding', label: 'Database Sharding', category: 'Product & Architecture', desc: 'Hash-ring routing & tenant isolation', icon: 'Database' },
  { type: 'continuous-compliance-posture', label: 'Compliance Posture', category: 'Strategy & Metrics', desc: 'Continuous SOC 2, ISO 27001 & HIPAA', icon: 'Award' },
  { type: 'developer-platform-catalog-mesh', label: 'IDP Catalog Mesh', category: 'Product & Architecture', desc: 'Service registry & developer golden paths', icon: 'Layers' },
  { type: 'boardroom-market-inflection-thesis', label: 'Market Thesis', category: 'Strategy & Metrics', desc: 'TAM expansion, moat & 3-year CAGR', icon: 'Target' },
  { type: 'asymmetric-threat-defense-matrix', label: 'Threat Defense Matrix', category: 'Product & Architecture', desc: 'MITRE ATT&CK mapping & eBPF containment', icon: 'Shield' },
  { type: 'hardware-accelerator-die-topology', label: 'Die Topology', category: 'Product & Architecture', desc: '3nm silicon floorplan & HBM3e stacks', icon: 'Server' },
  { type: 'customer-experience-journey-delta', label: 'CX Journey Delta', category: 'Story & Conversion', desc: 'Legacy friction vs autonomous experience', icon: 'Users' },
  { type: 'executive-board-mandate-cta', label: 'Board Mandate CTA', category: 'Story & Conversion', desc: 'Capital allocation & boardroom resolution', icon: 'CheckCircle' },
];
