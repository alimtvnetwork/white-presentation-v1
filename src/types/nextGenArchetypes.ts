export * from './nextgen/strategyInfraTypes';
export * from './nextgen/fintechEsgAiTypes';
export * from './nextgen/platformSecOpsTypes';
export * from './nextgen/voiceComplianceDoraTypes';
export * from './nextgen/corporateStorytellingTypes';
export * from './nextgen/commercialFinancialTypes';
export * from './nextgen/deepTechGovernanceTypes';

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
import type {
  ExecutiveStorytellingHookSlideData, LeadershipSynergyDuoSlideData,
  OperationalWorkCultureSlideData, BentoCapabilitiesMatrixSlideData,
  OpportunityCostWaterfallSlideData,
} from './nextgen/corporateStorytellingTypes';
import type {
  BenchmarkRegionalPricingSlideData, SprintOnboardingRoadmapSlideData,
  SimulatedBrowserShowcaseSlideData, ClientTestimonialWallSlideData,
  GlobalEdgeMeshSlideData,
} from './nextgen/commercialFinancialTypes';
import type {
  AiGovernanceSafetyGovernorSlideData, DeveloperVelocityFlywheelSlideData,
  StrategicDecarbonizationEsgSlideData, MarketTensionQuadrantSlideData,
  ExecutiveCloseContactSlideData,
} from './nextgen/deepTechGovernanceTypes';

// =============================================================================
// Discriminated Union Types (30 Next-Gen Archetypes)
// =============================================================================
export type NextGenSlideType =
  // Batch 1 (Archetypes 01-15)
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
  | 'value-stream-engineering-dora-flywheel'
  // Batch 2 (Archetypes 16-30)
  | 'executive-storytelling-hook'
  | 'leadership-synergy-duo'
  | 'operational-work-culture'
  | 'bento-capabilities-matrix'
  | 'opportunity-cost-waterfall'
  | 'benchmark-regional-pricing'
  | 'sprint-onboarding-roadmap'
  | 'simulated-browser-showcase'
  | 'client-testimonial-wall'
  | 'global-edge-mesh'
  | 'ai-governance-safety-governor'
  | 'developer-velocity-flywheel'
  | 'strategic-decarbonization-esg'
  | 'market-tension-quadrant'
  | 'executive-close-contact';

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
  | ValueStreamDoraFlywheelSlideData
  | ExecutiveStorytellingHookSlideData
  | LeadershipSynergyDuoSlideData
  | OperationalWorkCultureSlideData
  | BentoCapabilitiesMatrixSlideData
  | OpportunityCostWaterfallSlideData
  | BenchmarkRegionalPricingSlideData
  | SprintOnboardingRoadmapSlideData
  | SimulatedBrowserShowcaseSlideData
  | ClientTestimonialWallSlideData
  | GlobalEdgeMeshSlideData
  | AiGovernanceSafetyGovernorSlideData
  | DeveloperVelocityFlywheelSlideData
  | StrategicDecarbonizationEsgSlideData
  | MarketTensionQuadrantSlideData
  | ExecutiveCloseContactSlideData;

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
  'executive-storytelling-hook', 'leadership-synergy-duo', 'operational-work-culture',
  'bento-capabilities-matrix', 'opportunity-cost-waterfall', 'benchmark-regional-pricing',
  'sprint-onboarding-roadmap', 'simulated-browser-showcase', 'client-testimonial-wall',
  'global-edge-mesh', 'ai-governance-safety-governor', 'developer-velocity-flywheel',
  'strategic-decarbonization-esg', 'market-tension-quadrant', 'executive-close-contact',
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
    // Batch 2 (Archetypes 16-30)
    case 'executive-storytelling-hook':
      return 3;
    case 'leadership-synergy-duo':
      return 2;
    case 'operational-work-culture':
      return Math.max(slide.tenets?.length || 1, 1);
    case 'bento-capabilities-matrix':
      return 4;
    case 'opportunity-cost-waterfall':
      return Math.max(slide.waterfallBars?.length || 1, 1);
    case 'benchmark-regional-pricing':
      return Math.max(slide.regions?.length || 1, 1);
    case 'sprint-onboarding-roadmap':
      return Math.max(slide.milestones?.length || 1, 1);
    case 'simulated-browser-showcase':
      return 3;
    case 'client-testimonial-wall':
    case 'global-edge-mesh':
    case 'ai-governance-safety-governor':
    case 'developer-velocity-flywheel':
    case 'strategic-decarbonization-esg':
    case 'market-tension-quadrant':
    case 'executive-close-contact':
      return 1;
    default:
      return 1;
  }
}
