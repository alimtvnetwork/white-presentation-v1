import React from 'react';
import type { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import * as S from './suite2033';

export const Suite2033SlideRenderer: React.FC<{ slide: SlideData; activeStep?: number }> = ({
  slide,
  activeStep = 0,
}) => {
  switch (slide.type) {
    case 'strategic-initiative-cascade': return <S.StrategicInitiativeCascadeSlide slide={slide as any} activeStep={activeStep} />;
    case 'ai-agent-orchestration-pipeline': return <S.AiAgentOrchestrationPipelineSlide slide={slide as any} activeStep={activeStep} />;
    case 'ma-synergy-realization-bridge': return <S.MaSynergyRealizationBridgeSlide slide={slide as any} activeStep={activeStep} />;
    case 'zero-day-incident-containment-loop': return <S.ZeroDayIncidentContainmentLoopSlide slide={slide as any} activeStep={activeStep} />;
    case 'cloud-migration-wave-stepper': return <S.CloudMigrationWaveStepperSlide slide={slide as any} activeStep={activeStep} />;
    case 'customer-lifecycle-expansion-funnel': return <S.CustomerLifecycleExpansionFunnelSlide slide={slide as any} activeStep={activeStep} />;
    case 'data-lineage-governance-flow': return <S.DataLineageGovernanceFlowSlide slide={slide as any} activeStep={activeStep} />;
    case 'product-release-burn-up-cadence': return <S.ProductReleaseBurnUpCadenceSlide slide={slide as any} activeStep={activeStep} />;
    case 'global-infrastructure-topology-cockpit': return <S.GlobalInfrastructureTopologyCockpitSlide slide={slide as any} activeStep={activeStep} />;
    case 'saas-unit-economics-breakdown': return <S.SaasUnitEconomicsBreakdownSlide slide={slide as any} activeStep={activeStep} />;
    case 'esg-sustainability-governance-matrix': return <S.EsgSustainabilityGovernanceMatrixSlide slide={slide as any} activeStep={activeStep} />;
    case 'cap-table-ownership-waterfall': return <S.CapTableOwnershipWaterfallSlide slide={slide as any} activeStep={activeStep} />;
    case 'ai-model-evaluation-benchmark-radar': return <S.AiModelEvaluationBenchmarkRadarSlide slide={slide as any} activeStep={activeStep} />;
    case 'enterprise-security-posture-radar': return <S.EnterpriseSecurityPostureRadarSlide slide={slide as any} activeStep={activeStep} />;
    case 'partner-ecosystem-value-map': return <S.PartnerEcosystemValueMapSlide slide={slide as any} activeStep={activeStep} />;
    default: return <WhiteMasterSlide slide={slide as any} />;
  }
};
