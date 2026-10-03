import type { BaseSlide } from '../presentation';

// =============================================================================
// 9. CSPM & CIEM Cloud Entitlement Graph (cspm-ciem-cloud-entitlement-graph) - Archetype 54
// =============================================================================
export interface CloudEntitlementMetricItem {
  id: string;
  metricLabel: string;
  metricValue: string;
  deltaPercentage: number;
  riskTier: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  affectedIdentitiesCount: number;
  isCompliant: boolean;
  hasOverPrivilegeWarning: boolean;
}

export interface CspmCiemCloudEntitlementGraphSlideData extends BaseSlide {
  type: 'cspm-ciem-cloud-entitlement-graph';
  entitlementMetrics: CloudEntitlementMetricItem[];
  cloudAccountsMonitored: number;
  totalIdentitiesAnalyzed: number;
  effectivePermissionsEvaluated: string;
  chiefInformationSecurityOfficer: string;
  isLeastPrivilegeEnforced: boolean;
  hasZeroCriticalPaths: boolean;
  isAutomatedRemediationActive: boolean;
}

// =============================================================================
// 10. Confidential Computing Enclave Attestation (confidential-computing-enclave) - Archetype 55
// =============================================================================
export interface ConfidentialEnclaveMetricItem {
  id: string;
  enclaveName: string;
  isolationProtocol: string;
  memoryEncryptedGb: number;
  pkiAttestationHash: string;
  cpuOverheadPercentage: number;
  isEnclaveActive: boolean;
  isHardwareProtected: boolean;
}

export interface ConfidentialComputingEnclaveSlideData extends BaseSlide {
  type: 'confidential-computing-enclave';
  enclaveMetrics: ConfidentialEnclaveMetricItem[];
  hardwareArchitecture: string;
  chipsetVendor: string;
  trustedExecutionEnvironment: string;
  firmwareVersion: string;
  isMemoryEncrypted: boolean;
  hasHardwareRootOfTrust: boolean;
  isAttestationVerified: boolean;
  hasSecureKeyReleased: boolean;
}

// =============================================================================
// 11. Predictive Autoscaling Pod Matrix (predictive-autoscaling-pod-matrix) - Archetype 56
// =============================================================================
export interface PredictiveAutoscalingMetricItem {
  id: string;
  workloadCluster: string;
  currentReplicas: number;
  predictedReplicas: number;
  leadTimeMinutes: number;
  costEfficiencyPercentage: number;
  isScalingActive: boolean;
  isPredictionAccurate: boolean;
}

export interface PredictiveAutoscalingPodMatrixSlideData extends BaseSlide {
  type: 'predictive-autoscaling-pod-matrix';
  autoscalingMetrics: PredictiveAutoscalingMetricItem[];
  forecastHorizonHours: number;
  totalManagedPods: number;
  mlInferenceIntervalSec: number;
  spotInstanceRatioPercentage: number;
  isPredictiveModelActive: boolean;
  hasSpotFallback: boolean;
  isZeroColdStartGuaranteed: boolean;
}

// =============================================================================
// 12. Capex vs Opex Capital Allocation Tranches (capex-opex-capital-allocation) - Archetype 57
// =============================================================================
export interface CapitalAllocationTrancheItem {
  id: string;
  trancheName: string;
  allocationCategory: 'CAPEX' | 'OPEX' | 'R&D' | 'M&A';
  allocatedAmountMln: number;
  projectedIrrPercentage: number;
  paybackPeriodYears: number;
  isTrancheFunded: boolean;
  hasBoardApproval: boolean;
}

export interface CapexOpexCapitalAllocationSlideData extends BaseSlide {
  type: 'capex-opex-capital-allocation';
  allocationTranches: CapitalAllocationTrancheItem[];
  fiscalYear: string;
  totalCapitalEnvelopeMln: number;
  hurdleRatePercentage: number;
  chiefFinancialOfficer: string;
  isHurdleRateExceeded: boolean;
  hasPositiveFreeCashFlow: boolean;
  isDepreciationScheduleOnTrack: boolean;
}

// =============================================================================
// 13. Transfer Pricing Tax Topology (transfer-pricing-tax-topology) - Archetype 58
// =============================================================================
export interface TransferPricingJurisdictionItem {
  id: string;
  jurisdictionCountry: string;
  countryCode: string;
  effectiveTaxRatePercentage: number;
  intercompanyVolumeMln: number;
  pricingMethodology: string;
  isOecdCompliant: boolean;
  hasLocalSubstance: boolean;
}

export interface TransferPricingTaxTopologySlideData extends BaseSlide {
  type: 'transfer-pricing-tax-topology';
  jurisdictionTaxNodes: TransferPricingJurisdictionItem[];
  headquartersJurisdiction: string;
  globalEffectiveTaxRatePercentage: number;
  statutoryPillar2MinRatePercentage: number;
  taxCounselPartner: string;
  isBepsPillar2Compliant: boolean;
  hasArmsLengthPricing: boolean;
  isAuditDefensible: boolean;
}

// =============================================================================
// 14. Sales Quota & Compensation Attainment Matrix (sales-quota-compensation-matrix) - Archetype 59
// =============================================================================
export interface SalesQuotaRepItem {
  id: string;
  repName: string;
  salesRegion: string;
  annualQuotaMln: number;
  attainmentPercentage: number;
  closedWonMln: number;
  pipelineCoverageRatio: number;
  isPresidentClubQualified: boolean;
  hasOverageAccelerator: boolean;
}

export interface SalesQuotaCompensationMatrixSlideData extends BaseSlide {
  type: 'sales-quota-compensation-matrix';
  salesReps: SalesQuotaRepItem[];
  fiscalQuarter: string;
  totalTeamQuotaMln: number;
  blendedAttainmentPercentage: number;
  chiefRevenueOfficer: string;
  isTeamQuotaAttained: boolean;
  hasAcceleratorsActive: boolean;
  isPipelineCoverageHealthy: boolean;
}

// =============================================================================
// 15. Executive Succession & Leadership Bench (executive-succession-leadership-bench) - Archetype 60
// =============================================================================
export interface ExecutiveSuccessionRoleItem {
  id: string;
  executiveRole: string;
  incumbentName: string;
  readyNowCandidateName: string;
  readinessHorizonMonths: number;
  benchDepthCount: number;
  isSuccessorReady: boolean;
  hasRetentionIncentive: boolean;
}

export interface ExecutiveSuccessionLeadershipBenchSlideData extends BaseSlide {
  type: 'executive-succession-leadership-bench';
  successionRoles: ExecutiveSuccessionRoleItem[];
  governanceReviewDate: string;
  emergencySuccessionCoveragePercentage: number;
  retentionBudgetMln: number;
  chairCompensationCommittee: string;
  isImmediateSuccessorIdentified: boolean;
  hasRetentionPlanActive: boolean;
  isQuorumApproved: boolean;
}
