import React from 'react';
import type { SlideData } from '../../types/presentation';
import { FlatGlobalSuiteSlideRenderer } from './FlatGlobalSuiteSlideRenderer';
import {
  NeuralVectorSearchTopologySlide,
  ModelQuantizationSpeculativeDecodingSlide,
  LlmFirewallRedTeamMatrixSlide,
  GlobalAnycastTrafficDirectorSlide,
  CqrsEventSourcingFabricSlide,
  SbomSlsaProvenanceAttestationSlide,
  PostMergerIntegrationRoadmapSlide,
  Scope3CarbonSupplyChainAuditSlide,
} from './customization/groupA';
import {
  CspmCiemCloudEntitlementGraphSlide,
  ConfidentialComputingEnclaveSlide,
  PredictiveAutoscalingPodMatrixSlide,
  CapexOpexCapitalAllocationSlide,
  TransferPricingTaxTopologySlide,
  SalesQuotaCompensationMatrixSlide,
  ExecutiveSuccessionLeadershipBenchSlide,
} from './customization/groupB';

export const CustomizationSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'neural-vector-search-topology':
      return <NeuralVectorSearchTopologySlide slide={slide as any} />;
    case 'model-quantization-speculative-decoding':
      return <ModelQuantizationSpeculativeDecodingSlide slide={slide as any} />;
    case 'llm-firewall-red-team-matrix':
      return <LlmFirewallRedTeamMatrixSlide slide={slide as any} />;
    case 'global-anycast-traffic-director':
      return <GlobalAnycastTrafficDirectorSlide slide={slide as any} />;
    case 'cqrs-event-sourcing-fabric':
      return <CqrsEventSourcingFabricSlide slide={slide as any} />;
    case 'sbom-slsa-provenance-attestation':
      return <SbomSlsaProvenanceAttestationSlide slide={slide as any} />;
    case 'post-merger-integration-roadmap':
      return <PostMergerIntegrationRoadmapSlide slide={slide as any} />;
    case 'scope3-carbon-supply-chain-audit':
      return <Scope3CarbonSupplyChainAuditSlide slide={slide as any} />;
    case 'cspm-ciem-cloud-entitlement-graph':
      return <CspmCiemCloudEntitlementGraphSlide slide={slide as any} />;
    case 'confidential-computing-enclave':
      return <ConfidentialComputingEnclaveSlide slide={slide as any} />;
    case 'predictive-autoscaling-pod-matrix':
      return <PredictiveAutoscalingPodMatrixSlide slide={slide as any} />;
    case 'capex-opex-capital-allocation':
      return <CapexOpexCapitalAllocationSlide slide={slide as any} />;
    case 'transfer-pricing-tax-topology':
      return <TransferPricingTaxTopologySlide slide={slide as any} />;
    case 'sales-quota-compensation-matrix':
      return <SalesQuotaCompensationMatrixSlide slide={slide as any} />;
    case 'executive-succession-leadership-bench':
      return <ExecutiveSuccessionLeadershipBenchSlide slide={slide as any} />;
    default:
      return <FlatGlobalSuiteSlideRenderer slide={slide} />;
  }
};
