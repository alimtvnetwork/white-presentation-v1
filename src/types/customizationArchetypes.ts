export * from './customization/aiInfraTypes';
export * from './customization/networkPlatformTypes';
export * from './customization/enterpriseStrategyTypes';
export * from './customization/sovereignTelemetryTypes';

import type {
  NeuralVectorSearchTopologySlideData,
  ModelQuantizationSpeculativeDecodingSlideData,
  LlmFirewallRedTeamMatrixSlideData,
} from './customization/aiInfraTypes';
import type {
  GlobalAnycastTrafficDirectorSlideData,
  CqrsEventSourcingFabricSlideData,
  SbomSlsaProvenanceAttestationSlideData,
} from './customization/networkPlatformTypes';
import type {
  PostMergerIntegrationRoadmapSlideData,
  Scope3CarbonSupplyChainAuditSlideData,
} from './customization/enterpriseStrategyTypes';
import type {
  CspmCiemCloudEntitlementGraphSlideData,
  ConfidentialComputingEnclaveSlideData,
  PredictiveAutoscalingPodMatrixSlideData,
  CapexOpexCapitalAllocationSlideData,
  TransferPricingTaxTopologySlideData,
  SalesQuotaCompensationMatrixSlideData,
  ExecutiveSuccessionLeadershipBenchSlideData,
} from './customization/sovereignTelemetryTypes';

export type CustomizationSlideType =
  // Group A (Archetypes 46–53: Multi-Step Kinetic Workflows)
  | 'neural-vector-search-topology'
  | 'model-quantization-speculative-decoding'
  | 'llm-firewall-red-team-matrix'
  | 'global-anycast-traffic-director'
  | 'cqrs-event-sourcing-fabric'
  | 'sbom-slsa-provenance-attestation'
  | 'post-merger-integration-roadmap'
  | 'scope3-carbon-supply-chain-audit'
  // Group B (Archetypes 54–60: Flat Sovereign Telemetry Overviews)
  | 'cspm-ciem-cloud-entitlement-graph'
  | 'confidential-computing-enclave'
  | 'predictive-autoscaling-pod-matrix'
  | 'capex-opex-capital-allocation'
  | 'transfer-pricing-tax-topology'
  | 'sales-quota-compensation-matrix'
  | 'executive-succession-leadership-bench';

export type CustomizationSlideData =
  | NeuralVectorSearchTopologySlideData
  | ModelQuantizationSpeculativeDecodingSlideData
  | LlmFirewallRedTeamMatrixSlideData
  | GlobalAnycastTrafficDirectorSlideData
  | CqrsEventSourcingFabricSlideData
  | SbomSlsaProvenanceAttestationSlideData
  | PostMergerIntegrationRoadmapSlideData
  | Scope3CarbonSupplyChainAuditSlideData
  | CspmCiemCloudEntitlementGraphSlideData
  | ConfidentialComputingEnclaveSlideData
  | PredictiveAutoscalingPodMatrixSlideData
  | CapexOpexCapitalAllocationSlideData
  | TransferPricingTaxTopologySlideData
  | SalesQuotaCompensationMatrixSlideData
  | ExecutiveSuccessionLeadershipBenchSlideData;

const VALID_CUSTOMIZATION_TYPES = new Set<string>([
  'neural-vector-search-topology',
  'model-quantization-speculative-decoding',
  'llm-firewall-red-team-matrix',
  'global-anycast-traffic-director',
  'cqrs-event-sourcing-fabric',
  'sbom-slsa-provenance-attestation',
  'post-merger-integration-roadmap',
  'scope3-carbon-supply-chain-audit',
  'cspm-ciem-cloud-entitlement-graph',
  'confidential-computing-enclave',
  'predictive-autoscaling-pod-matrix',
  'capex-opex-capital-allocation',
  'transfer-pricing-tax-topology',
  'sales-quota-compensation-matrix',
  'executive-succession-leadership-bench',
]);

export function isCustomizationSlide(slide: unknown): slide is CustomizationSlideData {
  if (typeof slide !== 'object' || !slide) return false;
  return VALID_CUSTOMIZATION_TYPES.has((slide as { type?: unknown }).type as string);
}

// lint-allow: function-length reason="exhaustive switch over customization slide types" max=35
export function calculateCustomizationSlideStepCount(slide: CustomizationSlideData): number {
  switch (slide.type) {
    case 'neural-vector-search-topology':
      return Math.max(slide.searchPhases?.length ?? slide.stages?.length ?? 4, 1);
    case 'model-quantization-speculative-decoding':
      return Math.max(slide.decodingStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'llm-firewall-red-team-matrix':
      return Math.max(slide.guardrailGates?.length ?? slide.stages?.length ?? 4, 1);
    case 'global-anycast-traffic-director':
      return Math.max(slide.routingSteps?.length ?? slide.stages?.length ?? 4, 1);
    case 'cqrs-event-sourcing-fabric':
      return Math.max(slide.streamStages?.length ?? slide.stages?.length ?? 4, 1);
    case 'sbom-slsa-provenance-attestation':
      return Math.max(slide.attestationSteps?.length ?? slide.stages?.length ?? 4, 1);
    case 'post-merger-integration-roadmap':
      return Math.max(slide.integrationMilestones?.length ?? slide.stages?.length ?? 4, 1);
    case 'scope3-carbon-supply-chain-audit':
      return Math.max(slide.auditPhases?.length ?? slide.stages?.length ?? 4, 1);
    default:
      return 1;
  }
}
