import React from 'react';
import type { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import * as S from './suite2027';

export const Suite2027SlideRenderer: React.FC<{ slide: SlideData; activeStep?: number }> = ({
  slide,
  activeStep = 0,
}) => {
  switch (slide.type) {
    case 'ai-inference-cost-token-waterfall':
      return <S.AiInferenceCostTokenWaterfallSlide slide={slide as any} activeStep={activeStep} />;
    case 'cross-functional-raci-matrix':
      return <S.CrossFunctionalRaciMatrixSlide slide={slide as any} activeStep={activeStep} />;
    case 'zero-trust-microsegmentation-map':
      return <S.ZeroTrustMicrosegmentationMapSlide slide={slide as any} activeStep={activeStep} />;
    case 'saas-magic-number-efficiency-gauge':
      return <S.SaasMagicNumberEfficiencyGaugeSlide slide={slide as any} activeStep={activeStep} />;
    case 'supply-chain-geopolitical-chokepoint':
      return <S.SupplyChainGeopoliticalChokepointSlide slide={slide as any} activeStep={activeStep} />;
    case 'incident-sev1-command-timeline':
      return <S.IncidentSev1CommandTimelineSlide slide={slide as any} activeStep={activeStep} />;
    case 'cloud-finops-unit-rate-optimization':
      return <S.CloudFinopsUnitRateOptimizationSlide slide={slide as any} activeStep={activeStep} />;
    case 'product-market-fit-cohort-triangles':
      return <S.ProductMarketFitCohortTrianglesSlide slide={slide as any} activeStep={activeStep} />;
    case 'enterprise-ai-governance-guardrails':
      return <S.EnterpriseAiGovernanceGuardrailsSlide slide={slide as any} activeStep={activeStep} />;
    case 'data-lakehouse-medallion-pipeline':
      return <S.DataLakehouseMedallionPipelineSlide slide={slide as any} activeStep={activeStep} />;
    case 'merger-acquisition-synergy-bridge':
      return <S.MergerAcquisitionSynergyBridgeSlide slide={slide as any} activeStep={activeStep} />;
    case 'developer-productivity-space-framework':
      return <S.DeveloperProductivitySpaceFrameworkSlide slide={slide as any} activeStep={activeStep} />;
    case 'hybrid-cloud-dr-failover-topology':
      return <S.HybridCloudDrFailoverTopologySlide slide={slide as any} activeStep={activeStep} />;
    case 'customer-health-scorecard-matrix':
      return <S.CustomerHealthScorecardMatrixSlide slide={slide as any} activeStep={activeStep} />;
    case 'value-stream-bottleneck-flow':
      return <S.ValueStreamBottleneckFlowSlide slide={slide as any} activeStep={activeStep} />;
    default:
      return <WhiteMasterSlide slide={slide as any} />;
  }
};
