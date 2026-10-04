// lint-allow: file-size reason="Suite 2026 slide archetype renderer dispatcher" max=120
import React from 'react';
import type { SlideData } from '../../types/presentation';
import type {
  ExecutivePnlWaterfallTableSlideData,
  CompetitiveFeatureHeatmapSlideData,
  CustomerPersonaArchetypeSplitSlideData,
  GlobalDataJurisdictionBoundarySlideData,
  HardwareInterfaceBlueprintSlideData,
  MultiHorizonValueRealizationBridgeSlideData,
  TwoSidedEcosystemFlywheelSlideData,
  IshikawaRootCauseFishboneSlideData,
  ModularConsumptionPricingCalculatorSlideData,
  LiveProductViewportWalkthroughSlideData,
  EnterpriseRiskTaxonomyHeatmapSlideData,
  GlobalPartnerTieringLadderSlideData,
  TalentCompetencyGapHeatmapSlideData,
  SloErrorBudgetBurnWaterfallSlideData,
  WeightedDecisionTradeoffMatrixSlideData,
  CustomerChurnInterventionLadderSlideData,
} from '../../types/suite2026Archetypes';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import { Suite2027SlideRenderer } from './Suite2027SlideRenderer';
import * as S from './suite2026';

type SlideWithStep<T> = React.FC<{ slide: T; activeStep?: number }>;

export const Suite2026SlideRenderer: React.FC<{ slide: SlideData; activeStep?: number }> = ({
  slide,
  activeStep = 0,
}) => {
  switch (slide.type) {
    case 'executive-pnl-waterfall-table': {
      const Comp = S.ExecutivePnlWaterfallTableSlide as SlideWithStep<ExecutivePnlWaterfallTableSlideData>;
      return <Comp slide={slide as ExecutivePnlWaterfallTableSlideData} activeStep={activeStep} />;
    }
    case 'competitive-feature-heatmap': {
      const Comp = S.CompetitiveFeatureHeatmapSlide as SlideWithStep<CompetitiveFeatureHeatmapSlideData>;
      return <Comp slide={slide as CompetitiveFeatureHeatmapSlideData} activeStep={activeStep} />;
    }
    case 'customer-persona-archetype-split': {
      const Comp = S.CustomerPersonaArchetypeSplitSlide as SlideWithStep<CustomerPersonaArchetypeSplitSlideData>;
      return <Comp slide={slide as CustomerPersonaArchetypeSplitSlideData} activeStep={activeStep} />;
    }
    case 'global-data-jurisdiction-boundary': {
      const Comp = S.GlobalDataJurisdictionBoundarySlide as SlideWithStep<GlobalDataJurisdictionBoundarySlideData>;
      return <Comp slide={slide as GlobalDataJurisdictionBoundarySlideData} activeStep={activeStep} />;
    }
    case 'hardware-interface-blueprint': {
      const Comp = S.HardwareInterfaceBlueprintSlide as SlideWithStep<HardwareInterfaceBlueprintSlideData>;
      return <Comp slide={slide as HardwareInterfaceBlueprintSlideData} activeStep={activeStep} />;
    }
    case 'multi-horizon-value-realization-bridge': {
      const Comp = S.MultiHorizonValueRealizationBridgeSlide as SlideWithStep<MultiHorizonValueRealizationBridgeSlideData>;
      return <Comp slide={slide as MultiHorizonValueRealizationBridgeSlideData} activeStep={activeStep} />;
    }
    case 'two-sided-ecosystem-flywheel': {
      const Comp = S.TwoSidedEcosystemFlywheelSlide as SlideWithStep<TwoSidedEcosystemFlywheelSlideData>;
      return <Comp slide={slide as TwoSidedEcosystemFlywheelSlideData} activeStep={activeStep} />;
    }
    case 'ishikawa-root-cause-fishbone': {
      const Comp = S.IshikawaRootCauseFishboneSlide as SlideWithStep<IshikawaRootCauseFishboneSlideData>;
      return <Comp slide={slide as IshikawaRootCauseFishboneSlideData} activeStep={activeStep} />;
    }
    case 'modular-consumption-pricing-calculator': {
      const Comp = S.ModularConsumptionPricingCalculatorSlide as SlideWithStep<ModularConsumptionPricingCalculatorSlideData>;
      return <Comp slide={slide as ModularConsumptionPricingCalculatorSlideData} activeStep={activeStep} />;
    }
    case 'live-product-viewport-walkthrough': {
      const Comp = S.LiveProductViewportWalkthroughSlide as SlideWithStep<LiveProductViewportWalkthroughSlideData>;
      return <Comp slide={slide as LiveProductViewportWalkthroughSlideData} activeStep={activeStep} />;
    }
    case 'enterprise-risk-taxonomy-heatmap': {
      const Comp = S.EnterpriseRiskTaxonomyHeatmapSlide as SlideWithStep<EnterpriseRiskTaxonomyHeatmapSlideData>;
      return <Comp slide={slide as EnterpriseRiskTaxonomyHeatmapSlideData} activeStep={activeStep} />;
    }
    case 'global-partner-tiering-ladder': {
      const Comp = S.GlobalPartnerTieringLadderSlide as SlideWithStep<GlobalPartnerTieringLadderSlideData>;
      return <Comp slide={slide as GlobalPartnerTieringLadderSlideData} activeStep={activeStep} />;
    }
    case 'talent-competency-gap-heatmap': {
      const Comp = S.TalentCompetencyGapHeatmapSlide as SlideWithStep<TalentCompetencyGapHeatmapSlideData>;
      return <Comp slide={slide as TalentCompetencyGapHeatmapSlideData} activeStep={activeStep} />;
    }
    case 'slo-error-budget-burn-waterfall': {
      const Comp = S.SloErrorBudgetBurnWaterfallSlide as SlideWithStep<SloErrorBudgetBurnWaterfallSlideData>;
      return <Comp slide={slide as SloErrorBudgetBurnWaterfallSlideData} activeStep={activeStep} />;
    }
    case 'weighted-decision-tradeoff-matrix': {
      const Comp = S.WeightedDecisionTradeoffMatrixSlide as SlideWithStep<WeightedDecisionTradeoffMatrixSlideData>;
      return <Comp slide={slide as WeightedDecisionTradeoffMatrixSlideData} activeStep={activeStep} />;
    }
    case 'customer-churn-intervention-ladder': {
      const Comp = S.CustomerChurnInterventionLadderSlide as SlideWithStep<CustomerChurnInterventionLadderSlideData>;
      return <Comp slide={slide as CustomerChurnInterventionLadderSlideData} activeStep={activeStep} />;
    }
    default:
      return <Suite2027SlideRenderer slide={slide} activeStep={activeStep} />;
  }
};
