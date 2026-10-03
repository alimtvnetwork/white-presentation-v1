import React from 'react';
import type { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import {
  EnterpriseCloudMigrationFunnelSlide,
  ZeroTrustIdentityPerimeterSlide,
  AiDataFlywheelLifecycleSlide,
  IncidentCommandWarRoomSlide,
  RegulatoryGdprDataLineageSlide,
} from './modern/transformation';
import {
  SaasUnitEconomicsBreakdownSlide,
  GlobalFintechLedgerSettlementSlide,
  MultiTenantDatabaseShardingSlide,
  ContinuousCompliancePostureSlide,
  DeveloperPlatformCatalogMeshSlide,
} from './modern/saas';
import {
  BoardroomMarketInflectionThesisSlide,
  AsymmetricThreatDefenseMatrixSlide,
  HardwareAcceleratorDieTopologySlide,
  CustomerExperienceJourneyDeltaSlide,
  ExecutiveBoardMandateCtaSlide,
} from './modern/boardroom';

export const ModernSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'enterprise-cloud-migration-funnel':
      return <EnterpriseCloudMigrationFunnelSlide slide={slide as any} />;
    case 'zero-trust-identity-perimeter':
      return <ZeroTrustIdentityPerimeterSlide slide={slide as any} />;
    case 'ai-data-flywheel-lifecycle':
      return <AiDataFlywheelLifecycleSlide slide={slide as any} />;
    case 'incident-command-war-room':
      return <IncidentCommandWarRoomSlide slide={slide as any} />;
    case 'regulatory-gdpr-data-lineage':
      return <RegulatoryGdprDataLineageSlide slide={slide as any} />;
    case 'saas-unit-economics-breakdown':
      return <SaasUnitEconomicsBreakdownSlide slide={slide as any} />;
    case 'global-fintech-ledger-settlement':
      return <GlobalFintechLedgerSettlementSlide slide={slide as any} />;
    case 'multi-tenant-database-sharding':
      return <MultiTenantDatabaseShardingSlide slide={slide as any} />;
    case 'continuous-compliance-posture':
      return <ContinuousCompliancePostureSlide slide={slide as any} />;
    case 'developer-platform-catalog-mesh':
      return <DeveloperPlatformCatalogMeshSlide slide={slide as any} />;
    case 'boardroom-market-inflection-thesis':
      return <BoardroomMarketInflectionThesisSlide slide={slide as any} />;
    case 'asymmetric-threat-defense-matrix':
      return <AsymmetricThreatDefenseMatrixSlide slide={slide as any} />;
    case 'hardware-accelerator-die-topology':
      return <HardwareAcceleratorDieTopologySlide slide={slide as any} />;
    case 'customer-experience-journey-delta':
      return <CustomerExperienceJourneyDeltaSlide slide={slide as any} />;
    case 'executive-board-mandate-cta':
      return <ExecutiveBoardMandateCtaSlide slide={slide as any} />;
    default:
      return <WhiteMasterSlide slide={slide as any} />;
  }
};
