import React from 'react';
import type { SlideData } from '../../types/presentation';
import { Suite2030SlideRenderer } from './Suite2030SlideRenderer';
import * as S from './suite2029';

export const Suite2029SlideRenderer: React.FC<{ slide: SlideData; activeStep?: number }> = ({
  slide,
  activeStep = 0,
}) => {
  switch (slide.type) {
    case 'speculative-decoding-inference-engine':
      return <S.SpeculativeDecodingInferenceEngineSlide slide={slide as any} activeStep={activeStep} />;
    case 'autonomous-agent-swarm-consensus-loop':
      return <S.AutonomousAgentSwarmConsensusLoopSlide slide={slide as any} activeStep={activeStep} />;
    case 'distributed-consensus-state-replication':
      return <S.DistributedConsensusStateReplicationSlide slide={slide as any} activeStep={activeStep} />;
    case 'quantum-resistant-key-exchange-stepper':
      return <S.QuantumResistantKeyExchangeStepperSlide slide={slide as any} activeStep={activeStep} />;
    case 'realtime-crossborder-settlement-fabric':
      return <S.RealtimeCrossborderSettlementFabricSlide slide={slide as any} activeStep={activeStep} />;
    case 'ebpf-kernel-telemetry-anomaly-flow':
      return <S.EbpfKernelTelemetryAnomalyFlowSlide slide={slide as any} activeStep={activeStep} />;
    case 'rag-continuous-knowledge-distillation-loop':
      return <S.RagContinuousKnowledgeDistillationLoopSlide slide={slide as any} activeStep={activeStep} />;
    case 'confidential-compute-attestation-pipeline':
      return <S.ConfidentialComputeAttestationPipelineSlide slide={slide as any} activeStep={activeStep} />;
    case 'high-frequency-order-book-matcher':
      return <S.HighFrequencyOrderBookMatcherSlide slide={slide as any} activeStep={activeStep} />;
    case 'autonomous-agent-fleet-ops-center':
      return <S.AutonomousAgentFleetOpsCenterSlide slide={slide as any} activeStep={activeStep} />;
    case 'post-quantum-crypto-migration-radar':
      return <S.PostQuantumCryptoMigrationRadarSlide slide={slide as any} activeStep={activeStep} />;
    case 'global-sovereign-cloud-geopolitical-risk-matrix':
      return <S.GlobalSovereignCloudGeopoliticalRiskMatrixSlide slide={slide as any} activeStep={activeStep} />;
    case 'zero-trust-identity-mesh-topology':
      return <S.ZeroTrustIdentityMeshTopologySlide slide={slide as any} activeStep={activeStep} />;
    case 'ai-model-safety-alignment-radar':
      return <S.AiModelSafetyAlignmentRadarSlide slide={slide as any} activeStep={activeStep} />;
    case 'finops-unit-economics-command-deck':
      return <S.FinopsUnitEconomicsCommandDeckSlide slide={slide as any} activeStep={activeStep} />;
    default:
      return <Suite2030SlideRenderer slide={slide} activeStep={activeStep} />;
  }
};
