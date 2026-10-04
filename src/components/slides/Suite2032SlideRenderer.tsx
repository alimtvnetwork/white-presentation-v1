import React from 'react';
import type { SlideData } from '../../types/presentation';
import { Suite2033SlideRenderer } from './Suite2033SlideRenderer';
import * as S from './suite2032';

export const Suite2032SlideRenderer: React.FC<{ slide: SlideData; activeStep?: number }> = ({
  slide,
  activeStep = 0,
}) => {
  switch (slide.type) {
    case 'executive-brief-distillation': return <S.ExecutiveBriefDistillationSlide slide={slide as any} activeStep={activeStep} />;
    case 'matrix-feature-benchmark': return <S.MatrixFeatureBenchmarkSlide slide={slide as any} activeStep={activeStep} />;
    case 'executive-metrics-pulse': return <S.ExecutiveMetricsPulseSlide slide={slide as any} activeStep={activeStep} />;
    case 'milestone-roadmap-stream': return <S.MilestoneRoadmapStreamSlide slide={slide as any} activeStep={activeStep} />;
    case 'hex-architecture-mesh': return <S.HexArchitectureMeshSlide slide={slide as any} activeStep={activeStep} />;
    case 'board-governance-roster': return <S.BoardGovernanceRosterSlide slide={slide as any} activeStep={activeStep} />;
    case 'editorial-quote-spotlight': return <S.EditorialQuoteSpotlightSlide slide={slide as any} activeStep={activeStep} />;
    case 'customer-conversion-funnel': return <S.CustomerConversionFunnelSlide slide={slide as any} activeStep={activeStep} />;
    case 'transformation-split-canvas': return <S.TransformationSplitCanvasSlide slide={slide as any} activeStep={activeStep} />;
    case 'bento-capability-mosaic': return <S.BentoCapabilityMosaicSlide slide={slide as any} activeStep={activeStep} />;
    case 'deal-ecosystem-flywheel': return <S.DealEcosystemFlywheelSlide slide={slide as any} activeStep={activeStep} />;
    case 'pnl-runway-waterfall': return <S.PnlRunwayWaterfallSlide slide={slide as any} activeStep={activeStep} />;
    case 'risk-opportunity-quadrant': return <S.RiskOpportunityQuadrantSlide slide={slide as any} activeStep={activeStep} />;
    case 'api-spec-terminal-split': return <S.ApiSpecTerminalSplitSlide slide={slide as any} activeStep={activeStep} />;
    case 'commercial-tier-packaging': return <S.CommercialTierPackagingSlide slide={slide as any} activeStep={activeStep} />;
    default: return <Suite2033SlideRenderer slide={slide} activeStep={activeStep} />;
  }
};
