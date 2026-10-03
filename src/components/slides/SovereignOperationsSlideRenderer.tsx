import React from 'react';
import type { SlideData } from '../../types/presentation';
import { ZeroTrustPacketInspectionSlide } from './ZeroTrustPacketInspectionSlide';
import { DatabaseMigrationPipelineSlide } from './DatabaseMigrationPipelineSlide';
import { AutonomousAiEvalHarnessSlide } from './AutonomousAiEvalHarnessSlide';
import { ChaosEngineeringMatrixSlide } from './ChaosEngineeringMatrixSlide';
import { CiCdArtifactProvenanceSlide } from './CiCdArtifactProvenanceSlide';
import { DisasterRecoveryDrillSlide } from './DisasterRecoveryDrillSlide';
import { FeatureFlagRolloutTreeSlide } from './FeatureFlagRolloutTreeSlide';
import { QuantumCryptographyTransitionSlide } from './QuantumCryptographyTransitionSlide';
import { GlobalLatencyTopologySlide } from './GlobalLatencyTopologySlide';
import { MicroservicesMeshTelemetrySlide } from './MicroservicesMeshTelemetrySlide';
import { ThreatIntelligenceFeedSlide } from './ThreatIntelligenceFeedSlide';
import { DataLakehouseGovernanceSlide } from './DataLakehouseGovernanceSlide';
import { KubernetesFleetOrchestratorSlide } from './KubernetesFleetOrchestratorSlide';
import { ApiMonetizationBillingSlide } from './ApiMonetizationBillingSlide';
import { AiInferenceClusterTelemetrySlide } from './AiInferenceClusterTelemetrySlide';
import { NextGenSlideRenderer } from './NextGenSlideRenderer';

export const SovereignOperationsSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'zero-trust-packet-inspection': return <ZeroTrustPacketInspectionSlide slide={slide as any} />;
    case 'database-migration-pipeline': return <DatabaseMigrationPipelineSlide slide={slide as any} />;
    case 'autonomous-ai-eval-harness': return <AutonomousAiEvalHarnessSlide slide={slide as any} />;
    case 'chaos-engineering-matrix': return <ChaosEngineeringMatrixSlide slide={slide as any} />;
    case 'ci-cd-artifact-provenance': return <CiCdArtifactProvenanceSlide slide={slide as any} />;
    case 'disaster-recovery-drill': return <DisasterRecoveryDrillSlide slide={slide as any} />;
    case 'feature-flag-rollout-tree': return <FeatureFlagRolloutTreeSlide slide={slide as any} />;
    case 'quantum-cryptography-transition': return <QuantumCryptographyTransitionSlide slide={slide as any} />;
    case 'global-latency-topology': return <GlobalLatencyTopologySlide slide={slide as any} />;
    case 'microservices-mesh-telemetry': return <MicroservicesMeshTelemetrySlide slide={slide as any} />;
    case 'threat-intelligence-feed': return <ThreatIntelligenceFeedSlide slide={slide as any} />;
    case 'data-lakehouse-governance': return <DataLakehouseGovernanceSlide slide={slide as any} />;
    case 'kubernetes-fleet-orchestrator': return <KubernetesFleetOrchestratorSlide slide={slide as any} />;
    case 'api-monetization-billing': return <ApiMonetizationBillingSlide slide={slide as any} />;
    case 'ai-inference-cluster-telemetry': return <AiInferenceClusterTelemetrySlide slide={slide as any} />;
    default: return <NextGenSlideRenderer slide={slide} />;
  }
};
