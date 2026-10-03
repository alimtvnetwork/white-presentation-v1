import React from 'react';
import type { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import {
  LlmAgenticWorkflowSlide,
  ZeroDowntimeBlueGreenSlide,
  PostQuantumPqcKemSlide,
  DeveloperPlatformBackstageSlide,
  Soc2Type2EvidenceStreamSlide,
  AiModelDistillationSlide,
  ExecutiveCompensationClawbackSlide,
  EnterpriseLlmFineTuningSlide,
  DistributedVectorIndexSlide,
  RealtimeFinancialFraudSlide,
  AutonomousCloudCostSlide,
  LakehouseIcebergAcidSlide,
  MultiRegionActiveActiveSlide,
  SupplyChainCarbonCbamSlide,
  ChaosMeshNetworkPartitionSlide,
} from './mastery';

export const GlobalPptMasterySlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'llm-agentic-workflow-dag':
      return <LlmAgenticWorkflowSlide slide={slide as any} />;
    case 'zero-downtime-blue-green-mesh':
      return <ZeroDowntimeBlueGreenSlide slide={slide as any} />;
    case 'post-quantum-pqc-kem-handshake':
      return <PostQuantumPqcKemSlide slide={slide as any} />;
    case 'developer-platform-backstage-portal':
      return <DeveloperPlatformBackstageSlide slide={slide as any} />;
    case 'soc2-type2-continuous-evidence-stream':
      return <Soc2Type2EvidenceStreamSlide slide={slide as any} />;
    case 'ai-model-distillation-pipeline':
      return <AiModelDistillationSlide slide={slide as any} />;
    case 'executive-compensation-clawback-matrix':
      return <ExecutiveCompensationClawbackSlide slide={slide as any} />;
    case 'enterprise-llm-fine-tuning-loss':
      return <EnterpriseLlmFineTuningSlide slide={slide as any} />;
    case 'distributed-vector-index-sharding':
      return <DistributedVectorIndexSlide slide={slide as any} />;
    case 'realtime-financial-fraud-graph':
      return <RealtimeFinancialFraudSlide slide={slide as any} />;
    case 'autonomous-cloud-cost-anomalies':
      return <AutonomousCloudCostSlide slide={slide as any} />;
    case 'lakehouse-iceberg-acid-lineage':
      return <LakehouseIcebergAcidSlide slide={slide as any} />;
    case 'multi-region-active-active-cockroach':
      return <MultiRegionActiveActiveSlide slide={slide as any} />;
    case 'supply-chain-carbon-ledger-cbam':
      return <SupplyChainCarbonCbamSlide slide={slide as any} />;
    case 'chaos-mesh-network-partition-drill':
      return <ChaosMeshNetworkPartitionSlide slide={slide as any} />;
    default:
      return <WhiteMasterSlide slide={slide as any} />;
  }
};
