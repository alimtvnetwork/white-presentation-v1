import React from 'react';
import type { SlideData } from '../../types/presentation';
import { Suite2031SlideRenderer } from './Suite2031SlideRenderer';
import * as S from './suite2030';

export const Suite2030SlideRenderer: React.FC<{ slide: SlideData; activeStep?: number }> = ({
  slide,
  activeStep = 0,
}) => {
  switch (slide.type) {
    case 'neuromorphic-spiking-neural-mesh':
      return <S.NeuromorphicSpikingNeuralMeshSlide slide={slide as any} activeStep={activeStep} />;
    case 'quantum-annealing-portfolio-optimizer':
      return <S.QuantumAnnealingPortfolioOptimizerSlide slide={slide as any} activeStep={activeStep} />;
    case 'autonomous-synthetic-data-foundry':
      return <S.AutonomousSyntheticDataFoundrySlide slide={slide as any} activeStep={activeStep} />;
    case 'zero-knowledge-rollup-prover-cluster':
      return <S.ZeroKnowledgeRollupProverClusterSlide slide={slide as any} activeStep={activeStep} />;
    case 'photonic-interconnect-optical-mesh':
      return <S.PhotonicInterconnectOpticalMeshSlide slide={slide as any} activeStep={activeStep} />;
    case 'decentralized-oracle-consensus-spine':
      return <S.DecentralizedOracleConsensusSpineSlide slide={slide as any} activeStep={activeStep} />;
    case 'ebpf-cloud-native-ddos-shield':
      return <S.EbpfCloudNativeDdosShieldSlide slide={slide as any} activeStep={activeStep} />;
    case 'enterprise-rag-graph-hybrid-traversal':
      return <S.EnterpriseRagGraphHybridTraversalSlide slide={slide as any} activeStep={activeStep} />;
    case 'continuous-ai-agent-eval-harness':
      return <S.ContinuousAiAgentEvalHarnessSlide slide={slide as any} activeStep={activeStep} />;
    case 'hyperscale-datacenter-liquid-cooling-telemetry':
      return <S.HyperscaleDatacenterLiquidCoolingTelemetrySlide slide={slide as any} activeStep={activeStep} />;
    case 'global-sovereign-ai-compute-reserve-grid':
      return <S.GlobalSovereignAiComputeReserveGridSlide slide={slide as any} activeStep={activeStep} />;
    case 'post-quantum-pki-certificate-hierarchy-radar':
      return <S.PostQuantumPkiCertificateHierarchyRadarSlide slide={slide as any} activeStep={activeStep} />;
    case 'zero-trust-cloud-workload-entitlement-graph':
      return <S.ZeroTrustCloudWorkloadEntitlementGraphSlide slide={slide as any} activeStep={activeStep} />;
    case 'frontier-multimodal-alignment-matrix':
      return <S.FrontierMultimodalAlignmentMatrixSlide slide={slide as any} activeStep={activeStep} />;
    case 'enterprise-saas-efficiency-rule-of-40-quadrant':
      return <S.EnterpriseSaasEfficiencyRuleOf40QuadrantSlide slide={slide as any} activeStep={activeStep} />;
    default:
      return <Suite2031SlideRenderer slide={slide} activeStep={activeStep} />;
  }
};
