export * from './nextgen/strategyInfraTypes';
export * from './nextgen/fintechEsgAiTypes';
export * from './nextgen/platformSecOpsTypes';
export * from './nextgen/voiceComplianceDoraTypes';

import type {
  ThreeHorizonsStrategySlideData, AiAgentFleetTopologySlideData,
  ApiRateLimitGatewaySlideData, MultiCloudDrFailoverSlideData,
} from './nextgen/strategyInfraTypes';
import type {
  FintechPaymentClearingSlideData, EsgDecarbonizationRoadmapSlideData,
  ModelContextProtocolMeshSlideData, DataCleanRoomSlideData,
} from './nextgen/fintechEsgAiTypes';
import type {
  DeveloperPlatformIdpSlideData, ExecutiveMaSynergySlideData,
  CyberThreatKillChainSlideData, SupplyChainDigitalTwinSlideData,
} from './nextgen/platformSecOpsTypes';
import type {
  VoiceAiConversationalMeshSlideData,
  ComplianceSoc2ReadinessLadderSlideData, ValueStreamDoraFlywheelSlideData,
} from './nextgen/voiceComplianceDoraTypes';

// =============================================================================
// Discriminated Union Types
// =============================================================================
export type NextGenSlideType =
  | 'three-horizons-strategy-matrix'
  | 'ai-agent-fleet-topology'
  | 'api-rate-limit-gateway'
  | 'multi-cloud-dr-failover-mesh'
  | 'fintech-payment-clearing-engine'
  | 'esg-decarbonization-roadmap'
  | 'model-context-protocol-mesh'
  | 'data-clean-room-collaboration'
  | 'developer-platform-idp-hub'
  | 'executive-mergers-acquisitions-synergy'
  | 'cyber-threat-kill-chain-matrix'
  | 'supply-chain-digital-twin-lattice'
  | 'voice-ai-realtime-conversational-mesh'
  | 'compliance-audit-soc2-readiness-ladder'
  | 'value-stream-engineering-dora-flywheel';

export type NextGenSlideData =
  | ThreeHorizonsStrategySlideData
  | AiAgentFleetTopologySlideData
  | ApiRateLimitGatewaySlideData
  | MultiCloudDrFailoverSlideData
  | FintechPaymentClearingSlideData
  | EsgDecarbonizationRoadmapSlideData
  | ModelContextProtocolMeshSlideData
  | DataCleanRoomSlideData
  | DeveloperPlatformIdpSlideData
  | ExecutiveMaSynergySlideData
  | CyberThreatKillChainSlideData
  | SupplyChainDigitalTwinSlideData
  | VoiceAiConversationalMeshSlideData
  | ComplianceSoc2ReadinessLadderSlideData
  | ValueStreamDoraFlywheelSlideData;

// =============================================================================
// Type Guard
// =============================================================================
const VALID_NEXT_GEN_TYPES: Set<string> = new Set<NextGenSlideType>([
  'three-horizons-strategy-matrix', 'ai-agent-fleet-topology', 'api-rate-limit-gateway',
  'multi-cloud-dr-failover-mesh', 'fintech-payment-clearing-engine', 'esg-decarbonization-roadmap',
  'model-context-protocol-mesh', 'data-clean-room-collaboration', 'developer-platform-idp-hub',
  'executive-mergers-acquisitions-synergy', 'cyber-threat-kill-chain-matrix',
  'supply-chain-digital-twin-lattice', 'voice-ai-realtime-conversational-mesh',
  'compliance-audit-soc2-readiness-ladder', 'value-stream-engineering-dora-flywheel',
]);

export function isNextGenSlide(slide: unknown): slide is NextGenSlideData {
  if (typeof slide !== 'object' || !slide) return false;
  return VALID_NEXT_GEN_TYPES.has((slide as { type?: unknown }).type as string);
}

// =============================================================================
// Step Count Calculation Engine
// =============================================================================
export function calculateNextGenSlideStepCount(slide: NextGenSlideData): number {
  switch (slide.type) {
    case 'three-horizons-strategy-matrix':
      return Math.max(slide.horizons?.length || 1, 1);
    case 'esg-decarbonization-roadmap':
      return Math.max(slide.milestoneYears?.length || 1, 1);
    case 'developer-platform-idp-hub':
      return Math.max(slide.goldenTemplates?.length || 1, 1);
    case 'executive-mergers-acquisitions-synergy':
      return Math.max(slide.synergyMilestones?.length || 1, 1);
    case 'compliance-audit-soc2-readiness-ladder':
      return Math.max(slide.ladderSteps?.length || 1, 1);
    case 'ai-agent-fleet-topology':
    case 'api-rate-limit-gateway':
    case 'multi-cloud-dr-failover-mesh':
    case 'fintech-payment-clearing-engine':
    case 'model-context-protocol-mesh':
    case 'data-clean-room-collaboration':
    case 'cyber-threat-kill-chain-matrix':
    case 'supply-chain-digital-twin-lattice':
    case 'voice-ai-realtime-conversational-mesh':
    case 'value-stream-engineering-dora-flywheel':
      return 4;
    default:
      return 1;
  }
}
