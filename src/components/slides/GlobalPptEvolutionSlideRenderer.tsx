// lint-allow: file-size reason="GlobalPptEvolutionSlideRenderer archetype dispatcher" max=100
import React from 'react';
import type { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import {
  PqcMigrationFlowSlide,
  AgentHierarchicalMemorySlide,
  ActiveActiveShardingSlide,
  ZeroTrustApiMeshSlide,
  AutonomousVulnerabilityLoopSlide,
  EdgeComputeOrchestratorSlide,
  CloudFinopsLadderSlide,
  BoardAiRiskOversightSlide,
  SovereignQkdBackboneSlide,
  AgentSwarmMemoryRegistrySlide,
  HyperscaleShardingTopologySlide,
  MicroservicesZeroTrustPolicySlide,
  AutonomousSiemTriageSlide,
  EdgeFleetDensitySlide,
  BoardFiduciaryEsgHorizonSlide,
} from './evolution';

export const GlobalPptEvolutionSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'pqc-migration-orchestration-flow':
      return <PqcMigrationFlowSlide slide={slide as any} />;
    case 'agent-hierarchical-memory-pipeline':
      return <AgentHierarchicalMemorySlide slide={slide as any} />;
    case 'active-active-sharding-consensus-mesh':
      return <ActiveActiveShardingSlide slide={slide as any} />;
    case 'zero-trust-api-mesh-authorization':
      return <ZeroTrustApiMeshSlide slide={slide as any} />;
    case 'autonomous-vulnerability-remediation-loop':
      return <AutonomousVulnerabilityLoopSlide slide={slide as any} />;
    case 'edge-compute-workload-orchestrator':
      return <EdgeComputeOrchestratorSlide slide={slide as any} />;
    case 'cloud-finops-unit-amortization-ladder':
      return <CloudFinopsLadderSlide slide={slide as any} />;
    case 'executive-board-ai-risk-oversight':
      return <BoardAiRiskOversightSlide slide={slide as any} />;
    case 'sovereign-qkd-optical-backbone':
      return <SovereignQkdBackboneSlide slide={slide as any} />;
    case 'agent-swarm-memory-registry':
      return <AgentSwarmMemoryRegistrySlide slide={slide as any} />;
    case 'hyperscale-database-sharding-topology':
      return <HyperscaleShardingTopologySlide slide={slide as any} />;
    case 'microservices-zero-trust-policy-map':
      return <MicroservicesZeroTrustPolicySlide slide={slide as any} />;
    case 'autonomous-siem-incident-triage-matrix':
      return <AutonomousSiemTriageSlide slide={slide as any} />;
    case 'edge-infrastructure-fleet-density-matrix':
      return <EdgeFleetDensitySlide slide={slide as any} />;
    case 'executive-board-fiduciary-esg-horizon':
      return <BoardFiduciaryEsgHorizonSlide slide={slide as any} />;
    default:
      return <WhiteMasterSlide slide={slide as any} />;
  }
};
