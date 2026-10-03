import type {
  NextGenSlideType,
  NextGenSlideData,
} from '../../types/presentation';
import type { ArchetypeOption } from '../extendedSlideFactories';

import {
  createThreeHorizonsStrategySlide,
  createAiAgentFleetTopologySlide,
} from './strategyAiFactories';
import {
  createApiRateLimitGatewaySlide,
  createMultiCloudDrFailoverSlide,
  createFintechPaymentClearingSlide,
} from './infraFintechFactories';
import {
  createEsgDecarbonizationRoadmapSlide,
  createModelContextProtocolMeshSlide,
  createDataCleanRoomSlide,
} from './esgProtocolDataFactories';
import {
  createDeveloperPlatformIdpSlide,
  createExecutiveMaSynergySlide,
  createCyberThreatKillChainSlide,
} from './platformSecOpsFactories';
import {
  createSupplyChainDigitalTwinSlide,
  createVoiceAiConversationalMeshSlide,
} from './logisticsVoiceFactories';
import {
  createComplianceSoc2ReadinessLadderSlide,
  createValueStreamDoraFlywheelSlide,
} from './complianceDoraFactories';

// =============================================================================
// Master Next-Gen Slide Factory Registry & Defaults Engine
// =============================================================================
export const NEXTGEN_FACTORIES: Record<
  NextGenSlideType,
  (id?: string) => NextGenSlideData
> = {
  'three-horizons-strategy-matrix': createThreeHorizonsStrategySlide,
  'ai-agent-fleet-topology': createAiAgentFleetTopologySlide,
  'api-rate-limit-gateway': createApiRateLimitGatewaySlide,
  'multi-cloud-dr-failover-mesh': createMultiCloudDrFailoverSlide,
  'fintech-payment-clearing-engine': createFintechPaymentClearingSlide,
  'esg-decarbonization-roadmap': createEsgDecarbonizationRoadmapSlide,
  'model-context-protocol-mesh': createModelContextProtocolMeshSlide,
  'data-clean-room-collaboration': createDataCleanRoomSlide,
  'developer-platform-idp-hub': createDeveloperPlatformIdpSlide,
  'executive-mergers-acquisitions-synergy': createExecutiveMaSynergySlide,
  'cyber-threat-kill-chain-matrix': createCyberThreatKillChainSlide,
  'supply-chain-digital-twin-lattice': createSupplyChainDigitalTwinSlide,
  'voice-ai-realtime-conversational-mesh': createVoiceAiConversationalMeshSlide,
  'compliance-audit-soc2-readiness-ladder': createComplianceSoc2ReadinessLadderSlide,
  'value-stream-engineering-dora-flywheel': createValueStreamDoraFlywheelSlide,
};

export const NEXT_GEN_SLIDE_FACTORIES = NEXTGEN_FACTORIES;

export function createNextGenSlide(
  type: NextGenSlideType,
  id?: string
): NextGenSlideData {
  const factory = NEXTGEN_FACTORIES[type];
  if (factory) {
    return factory(id);
  }
  return createThreeHorizonsStrategySlide(id);
}

export const createNextGenSlideDefaults = createNextGenSlide;

export function createAllNextGenSlides(): NextGenSlideData[] {
  return [
    createThreeHorizonsStrategySlide(),
    createAiAgentFleetTopologySlide(),
    createApiRateLimitGatewaySlide(),
    createMultiCloudDrFailoverSlide(),
    createFintechPaymentClearingSlide(),
    createEsgDecarbonizationRoadmapSlide(),
    createModelContextProtocolMeshSlide(),
    createDataCleanRoomSlide(),
    createDeveloperPlatformIdpSlide(),
    createExecutiveMaSynergySlide(),
    createCyberThreatKillChainSlide(),
    createSupplyChainDigitalTwinSlide(),
    createVoiceAiConversationalMeshSlide(),
    createComplianceSoc2ReadinessLadderSlide(),
    createValueStreamDoraFlywheelSlide(),
  ];
}

// =============================================================================
// Archetype Options Catalog for Slide Creator & Inspector
// =============================================================================
export const NEXTGEN_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  {
    type: 'three-horizons-strategy-matrix',
    label: 'Three Horizons Strategy Matrix',
    category: 'Next-Gen Enterprise & AI',
    desc: 'McKinsey Growth Portfolios (H1/H2/H3) with Capital Allocation & Stage-Gate Metrics',
    icon: 'TrendingUp',
  },
  {
    type: 'ai-agent-fleet-topology',
    label: 'AI Agent Fleet Topology',
    category: 'Next-Gen Enterprise & AI',
    desc: 'Supervisor Controller, Dispatcher & Sandboxed Multi-Agent Swarms with Safety Interlocks',
    icon: 'Cpu',
  },
  {
    type: 'api-rate-limit-gateway',
    label: 'API Rate Limit Gateway',
    category: 'Next-Gen Enterprise & AI',
    desc: 'Token-Bucket Quotas, Redis Sliding-Window Sync & HTTP 429 Degradation Circuit Breaker',
    icon: 'Zap',
  },
  {
    type: 'multi-cloud-dr-failover-mesh',
    label: 'Multi-Cloud DR Failover Mesh',
    category: 'Next-Gen Enterprise & AI',
    desc: 'Active-Active BGP Traffic Shifting, Raft Quorum Consensus & Sub-15s RTO Recovery',
    icon: 'RotateCw',
  },
  {
    type: 'fintech-payment-clearing-engine',
    label: 'FinTech Payment Clearing Engine',
    category: 'Next-Gen Enterprise & AI',
    desc: 'ISO 20022 Messaging, Sub-15ms ML Fraud Scoring & FedNow Instant Settlement Rails',
    icon: 'CheckCircle2',
  },
  {
    type: 'esg-decarbonization-roadmap',
    label: 'ESG Decarbonization Roadmap',
    category: 'Next-Gen Enterprise & AI',
    desc: 'SBTi Net-Zero 1.5°C Trajectory Across Scope 1-3 Reduction Wedges & Renewable PPAs',
    icon: 'Flag',
  },
  {
    type: 'model-context-protocol-mesh',
    label: 'Model Context Protocol (MCP) Mesh',
    category: 'Next-Gen Enterprise & AI',
    desc: 'JSON-RPC 2.0 Host Handshake, Gateway Discovery & Sandboxed Tool Execution Stream',
    icon: 'Terminal',
  },
  {
    type: 'data-clean-room-collaboration',
    label: 'Data Clean Room Collaboration',
    category: 'Next-Gen Enterprise & AI',
    desc: 'Confidential Computing Enclave, Differential Privacy Budget & Zero Raw PII Egress',
    icon: 'Shield',
  },
  {
    type: 'developer-platform-idp-hub',
    label: 'Developer Platform IDP Hub',
    category: 'Next-Gen Enterprise & AI',
    desc: 'Self-Service Golden Paths, Spotify Backstage Software Catalog & 42s Onboarding',
    icon: 'LayoutGrid',
  },
  {
    type: 'executive-mergers-acquisitions-synergy',
    label: 'Executive M&A Synergy Waterfall',
    category: 'Next-Gen Enterprise & AI',
    desc: 'M&A Valuation Waterfall, EBITDA Synergies, Workstream Health & Accretive EPS',
    icon: 'Building2',
  },
  {
    type: 'cyber-threat-kill-chain-matrix',
    label: 'Cyber Threat Kill Chain Matrix',
    category: 'Next-Gen Enterprise & AI',
    desc: 'Lockheed Martin 7-Stage Kill Chain Defense, MITRE ATT&CK & Automated SOAR Playbooks',
    icon: 'Crosshair',
  },
  {
    type: 'supply-chain-digital-twin-lattice',
    label: 'Supply Chain Digital Twin Lattice',
    category: 'Next-Gen Enterprise & AI',
    desc: 'Multimodal Corridors, Chokepoint Anomaly Detection & Autonomous Rerouting Simulation',
    icon: 'Grid',
  },
  {
    type: 'voice-ai-realtime-conversational-mesh',
    label: 'Voice AI Conversational Mesh',
    category: 'Next-Gen Enterprise & AI',
    desc: 'Sub-300ms Full-Duplex VAD, Streaming Conformer ASR, LLM Reasoning & Neural TTS',
    icon: 'Sparkles',
  },
  {
    type: 'compliance-audit-soc2-readiness-ladder',
    label: 'SOC 2 Readiness Ladder',
    category: 'Next-Gen Enterprise & AI',
    desc: 'Continuous 5 Trust Criteria Ladder Traversing Gap Analysis to Clean Type II Report',
    icon: 'ListChecks',
  },
  {
    type: 'value-stream-engineering-dora-flywheel',
    label: 'Value Stream & DORA Flywheel',
    category: 'Next-Gen Enterprise & AI',
    desc: 'Elite DORA Metrics, Flow Efficiency Framework & Engineering Revenue Acceleration',
    icon: 'Award',
  },
];

export const NEXT_GEN_ARCHETYPE_OPTIONS = NEXTGEN_ARCHETYPE_OPTIONS;
