import type { BaseSlide } from '../presentation';

// =============================================================================
// 7. Post-Merger Integration Roadmap (post-merger-integration-roadmap) - Archetype 52
// =============================================================================
export interface MnaMilestoneItem {
  id: string;
  stepIndex: number;
  milestoneTitle: string;
  targetTimeline: string;
  workstreamOwner: string;
  financialSynergyMln: number;
  completionPercentage: number;
  isMilestoneActive: boolean;
  isMilestoneAchieved: boolean;
  keyDeliverables: string[];
}

export interface PostMergerIntegrationRoadmapSlideData extends BaseSlide {
  type: 'post-merger-integration-roadmap';
  integrationMilestones: MnaMilestoneItem[];
  stages?: MnaMilestoneItem[];
  entityNameAcquired: string;
  targetSynergyTotalMln: number;
  integrationBudgetMln: number;
  leadExecutiveSponsor: string;
  isDay1Completed: boolean;
  hasIdentityUnified: boolean;
  isErpConsolidated: boolean;
  hasSynergyAchieved: boolean;
}

// =============================================================================
// 8. Scope 3 Carbon Supply Chain Audit (scope3-carbon-supply-chain-audit) - Archetype 53
// =============================================================================
export interface Scope3AuditPhaseItem {
  id: string;
  stepIndex: number;
  phaseName: string;
  ghgProtocolScope: string;
  emissionTonsCo2e: number;
  supplierCoveragePercentage: number;
  reductionTargetPercentage: number;
  isPhaseActive: boolean;
  isPhaseAudited: boolean;
  reportingStandards: string[];
}

export interface Scope3CarbonSupplyChainAuditSlideData extends BaseSlide {
  type: 'scope3-carbon-supply-chain-audit';
  auditPhases: Scope3AuditPhaseItem[];
  stages?: Scope3AuditPhaseItem[];
  reportingFiscalYear: string;
  totalBaselineCo2eTons: number;
  currentYearCo2eTons: number;
  chiefSustainabilityOfficer: string;
  hasSensorTelemetry: boolean;
  isScope3Audited: boolean;
  isCbamCompliant: boolean;
  hasOffsetsVerified: boolean;
}
