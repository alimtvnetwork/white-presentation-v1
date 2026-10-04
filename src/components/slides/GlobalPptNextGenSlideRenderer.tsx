// lint-allow: file-size reason="GlobalPptNextGenSlideRenderer archetype dispatcher" max=100
import React from 'react';
import type { SlideData } from '../../types/presentation';
import { GlobalPptEvolutionSlideRenderer } from './GlobalPptEvolutionSlideRenderer';
import {
  AgenticEvalRedTeamSlide,
  GitOpsArgoCdSyncSlide,
  NvmeFabricsRdmaSlide,
  ConfidentialGpuAttestSlide,
  EbpfDdosXdpSlide,
  ActiveInferenceMemorySlide,
  SovereignAiCleanRoomSlide,
  IncidentCommandPlaybookSlide,
  GpuHbmInterconnectSlide,
  RealtimeFeatureStoreSlide,
  DistributedWalRaftSlide,
  FinopsUnitEconomicsSlide,
  CrossBorderDataResidencySlide,
  ZeroTrustSpiffeSlide,
  BoardCapitalAllocationSlide,
} from './nextgen';

export const GlobalPptNextGenSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'agentic-eval-red-team-harness':
      return <AgenticEvalRedTeamSlide slide={slide as any} />;
    case 'gitops-argocd-sync-reconciliation':
      return <GitOpsArgoCdSyncSlide slide={slide as any} />;
    case 'nvme-over-fabrics-rdma-storage':
      return <NvmeFabricsRdmaSlide slide={slide as any} />;
    case 'confidential-gpu-attestation-flow':
      return <ConfidentialGpuAttestSlide slide={slide as any} />;
    case 'ebpf-ddos-xdp-packet-mitigation':
      return <EbpfDdosXdpSlide slide={slide as any} />;
    case 'active-inference-memory-tiering':
      return <ActiveInferenceMemorySlide slide={slide as any} />;
    case 'sovereign-ai-data-clean-room':
      return <SovereignAiCleanRoomSlide slide={slide as any} />;
    case 'incident-command-automated-playbook':
      return <IncidentCommandPlaybookSlide slide={slide as any} />;
    case 'gpu-hbm-interconnect-mesh':
      return <GpuHbmInterconnectSlide slide={slide as any} />;
    case 'realtime-feature-store-feast':
      return <RealtimeFeatureStoreSlide slide={slide as any} />;
    case 'distributed-wal-raft-consensus':
      return <DistributedWalRaftSlide slide={slide as any} />;
    case 'finops-unit-economics-cloud-matrix':
      return <FinopsUnitEconomicsSlide slide={slide as any} />;
    case 'cross-border-privacy-data-residency':
      return <CrossBorderDataResidencySlide slide={slide as any} />;
    case 'zero-trust-microsegmentation-spiffe':
      return <ZeroTrustSpiffeSlide slide={slide as any} />;
    case 'enterprise-board-capital-allocation':
      return <BoardCapitalAllocationSlide slide={slide as any} />;
    default:
      return <GlobalPptEvolutionSlideRenderer slide={slide} />;
  }
};
