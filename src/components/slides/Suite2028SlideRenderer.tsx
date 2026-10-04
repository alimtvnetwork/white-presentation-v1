import React from 'react';
import type { SlideData } from '../../types/presentation';
import { Suite2029SlideRenderer } from './Suite2029SlideRenderer';
import * as S from './suite2028';

export const Suite2028SlideRenderer: React.FC<{ slide: SlideData; activeStep?: number }> = ({
  slide,
  activeStep = 0,
}) => {
  switch (slide.type) {
    case 'synthetic-data-curation-pipeline':
      return <S.SyntheticDataCurationPipelineSlide slide={slide as any} activeStep={activeStep} />;
    case 'cloud-native-wasm-microservice-mesh':
      return <S.CloudNativeWasmMicroserviceMeshSlide slide={slide as any} activeStep={activeStep} />;
    case 'sovereign-ai-datacenter-power-grid':
      return <S.SovereignAiDatacenterPowerGridSlide slide={slide as any} activeStep={activeStep} />;
    case 'autonomous-code-security-patching-loop':
      return <S.AutonomousCodeSecurityPatchingLoopSlide slide={slide as any} activeStep={activeStep} />;
    case 'cross-cloud-mesh-latency-routing':
      return <S.CrossCloudMeshLatencyRoutingSlide slide={slide as any} activeStep={activeStep} />;
    case 'enterprise-genai-app-observability':
      return <S.EnterpriseGenaiAppObservabilitySlide slide={slide as any} activeStep={activeStep} />;
    case 'zero-downtime-schema-evolution-stepper':
      return <S.ZeroDowntimeSchemaEvolutionStepperSlide slide={slide as any} activeStep={activeStep} />;
    case 'enterprise-software-supply-chain-chokepoint':
      return <S.EnterpriseSoftwareSupplyChainChokepointSlide slide={slide as any} activeStep={activeStep} />;
    case 'ai-agent-multi-turn-orchestration-dag':
      return <S.AiAgentMultiTurnOrchestrationDagSlide slide={slide as any} activeStep={activeStep} />;
    case 'enterprise-data-clean-room-audit':
      return <S.EnterpriseDataCleanRoomAuditSlide slide={slide as any} activeStep={activeStep} />;
    case 'hyperscale-k8s-cost-allocator-matrix':
      return <S.HyperscaleK8sCostAllocatorMatrixSlide slide={slide as any} activeStep={activeStep} />;
    case 'cyber-resilience-ransomware-readiness-radar':
      return <S.CyberResilienceRansomwareReadinessRadarSlide slide={slide as any} activeStep={activeStep} />;
    case 'saas-expansion-retention-waterfall-gauge':
      return <S.SaasExpansionRetentionWaterfallGaugeSlide slide={slide as any} activeStep={activeStep} />;
    case 'developer-experience-friction-index-heatmap':
      return <S.DeveloperExperienceFrictionIndexHeatmapSlide slide={slide as any} activeStep={activeStep} />;
    case 'geopolitical-sovereign-cloud-compliance-compass':
      return <S.GeopoliticalSovereignCloudComplianceCompassSlide slide={slide as any} activeStep={activeStep} />;
    default:
      return <Suite2029SlideRenderer slide={slide} activeStep={activeStep} />;
  }
};
