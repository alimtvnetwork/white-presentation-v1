import React from 'react';
import type { SlideData } from '../../types/presentation';
import { ThreeHorizonsStrategySlide } from './nextgen/ThreeHorizonsStrategySlide';
import { AiAgentFleetTopologySlide } from './nextgen/AiAgentFleetTopologySlide';
import { ApiRateLimitGatewaySlide } from './nextgen/ApiRateLimitGatewaySlide';
import { MultiCloudDrFailoverSlide } from './nextgen/MultiCloudDrFailoverSlide';
import { FintechPaymentClearingSlide } from './nextgen/FintechPaymentClearingSlide';
import { EsgDecarbonizationRoadmapSlide } from './nextgen/EsgDecarbonizationRoadmapSlide';
import { ModelContextProtocolMeshSlide } from './nextgen/ModelContextProtocolMeshSlide';
import { DataCleanRoomSlide } from './nextgen/DataCleanRoomSlide';
import { DeveloperPlatformIdpSlide } from './nextgen/DeveloperPlatformIdpSlide';
import { ExecutiveMaSynergySlide } from './nextgen/ExecutiveMaSynergySlide';
import { CyberThreatKillChainSlide } from './nextgen/CyberThreatKillChainSlide';
import { SupplyChainDigitalTwinSlide } from './nextgen/SupplyChainDigitalTwinSlide';
import { VoiceAiConversationalMeshSlide } from './nextgen/VoiceAiConversationalMeshSlide';
import { ComplianceSoc2ReadinessLadderSlide } from './nextgen/ComplianceSoc2ReadinessLadderSlide';
import { ValueStreamDoraFlywheelSlide } from './nextgen/ValueStreamDoraFlywheelSlide';
import { WhiteMasterSlide } from './WhiteMasterSlide';

export const NextGenSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'three-horizons-strategy-matrix': return <ThreeHorizonsStrategySlide slide={slide as any} />;
    case 'ai-agent-fleet-topology': return <AiAgentFleetTopologySlide slide={slide as any} />;
    case 'api-rate-limit-gateway': return <ApiRateLimitGatewaySlide slide={slide as any} />;
    case 'multi-cloud-dr-failover-mesh': return <MultiCloudDrFailoverSlide slide={slide as any} />;
    case 'fintech-payment-clearing-engine': return <FintechPaymentClearingSlide slide={slide as any} />;
    case 'esg-decarbonization-roadmap': return <EsgDecarbonizationRoadmapSlide slide={slide as any} />;
    case 'model-context-protocol-mesh': return <ModelContextProtocolMeshSlide slide={slide as any} />;
    case 'data-clean-room-collaboration': return <DataCleanRoomSlide slide={slide as any} />;
    case 'developer-platform-idp-hub': return <DeveloperPlatformIdpSlide slide={slide as any} />;
    case 'executive-mergers-acquisitions-synergy': return <ExecutiveMaSynergySlide slide={slide as any} />;
    case 'cyber-threat-kill-chain-matrix': return <CyberThreatKillChainSlide slide={slide as any} />;
    case 'supply-chain-digital-twin-lattice': return <SupplyChainDigitalTwinSlide slide={slide as any} />;
    case 'voice-ai-realtime-conversational-mesh': return <VoiceAiConversationalMeshSlide slide={slide as any} />;
    case 'compliance-audit-soc2-readiness-ladder': return <ComplianceSoc2ReadinessLadderSlide slide={slide as any} />;
    case 'value-stream-engineering-dora-flywheel': return <ValueStreamDoraFlywheelSlide slide={slide as any} />;
    default: return <WhiteMasterSlide slide={slide as any} />;
  }
};
