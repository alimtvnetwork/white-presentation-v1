import React from 'react';
import type { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import { GlobalPptMasterySlideRenderer } from './GlobalPptMasterySlideRenderer';
import {
  GpuClusterFabricSlide,
  RagNeedleHaystackSlide,
  EbpfKernelTelemetrySlide,
  AiInferenceTokenEconomicsSlide,
  MicroFrontendFederationSlide,
  ProgressiveDeliveryCanarySlide,
  DataMeshFederatedSlide,
  ThreatExposureCtemSlide,
  SubseaCableGlobalBackboneSlide,
  MultiAgentReflectionSlide,
  SemanticCacheHitSlide,
  SaasNetRevenueRetentionSlide,
  ConfidentialMpcKeyVaultSlide,
  DeveloperFrictionDxSlide,
  BoardroomMaSynergySlide,
} from './revolution';

export const KineticRevolutionSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'gpu-cluster-fabric-interconnect':
      return <GpuClusterFabricSlide slide={slide as any} />;
    case 'rag-needle-haystack-benchmark':
      return <RagNeedleHaystackSlide slide={slide as any} />;
    case 'ebpf-kernel-telemetry-observability':
      return <EbpfKernelTelemetrySlide slide={slide as any} />;
    case 'ai-inference-token-economics':
      return <AiInferenceTokenEconomicsSlide slide={slide as any} />;
    case 'micro-frontend-federation-matrix':
      return <MicroFrontendFederationSlide slide={slide as any} />;
    case 'progressive-delivery-canary-gate':
      return <ProgressiveDeliveryCanarySlide slide={slide as any} />;
    case 'data-mesh-federated-governance':
      return <DataMeshFederatedSlide slide={slide as any} />;
    case 'threat-exposure-ctem-matrix':
      return <ThreatExposureCtemSlide slide={slide as any} />;
    case 'subsea-cable-global-backbone':
      return <SubseaCableGlobalBackboneSlide slide={slide as any} />;
    case 'multi-agent-reflection-deliberation':
      return <MultiAgentReflectionSlide slide={slide as any} />;
    case 'semantic-cache-hit-topology':
      return <SemanticCacheHitSlide slide={slide as any} />;
    case 'saas-net-revenue-retention-cohort':
      return <SaasNetRevenueRetentionSlide slide={slide as any} />;
    case 'confidential-mpc-key-vault':
      return <ConfidentialMpcKeyVaultSlide slide={slide as any} />;
    case 'developer-friction-dx-telemetry':
      return <DeveloperFrictionDxSlide slide={slide as any} />;
    case 'boardroom-m-and-a-synergy-realization':
      return <BoardroomMaSynergySlide slide={slide as any} />;
    default:
      return <GlobalPptMasterySlideRenderer slide={slide} />;
  }
};
