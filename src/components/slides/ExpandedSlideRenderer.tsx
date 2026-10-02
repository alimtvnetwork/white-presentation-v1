import React from 'react';
import type { SlideData } from '../../types/presentation';
import { AuthenticityHookSlide } from './AuthenticityHookSlide';
import { AvoidCommoditySlide } from './AvoidCommoditySlide';
import { ChapterDividerSlide } from './ChapterDividerSlide';
import { LoseVsInvestSlide } from './LoseVsInvestSlide';
import { NextStepsSprintSlide } from './NextStepsSprintSlide';
import { ExecutiveContactSlide } from './ExecutiveContactSlide';
import { UspStrikethroughSlide } from './UspStrikethroughSlide';
import { SaaSPricingTiersSlide } from './SaaSPricingTiersSlide';
import { FaqAccordionSlide } from './FaqAccordionSlide';
import { ClientLogoWallSlide } from './ClientLogoWallSlide';
import { SwotAnalysisSlide } from './SwotAnalysisSlide';
import { InteractiveQuizSlide } from './InteractiveQuizSlide';
import { HardwareShowcaseSlide } from './HardwareShowcaseSlide';
import { CompetitorMatrixSlide } from './CompetitorMatrixSlide';
import { ValuePyramidSlide } from './ValuePyramidSlide';
import { EnterpriseSlideRenderer } from './EnterpriseSlideRenderer';

export const ExpandedSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'authenticity-hook': return <AuthenticityHookSlide slide={slide as any} />;
    case 'avoid-commodity': return <AvoidCommoditySlide slide={slide as any} />;
    case 'chapter-divider': return <ChapterDividerSlide slide={slide as any} />;
    case 'lose-vs-invest': return <LoseVsInvestSlide slide={slide as any} />;
    case 'next-steps-sprint': return <NextStepsSprintSlide slide={slide as any} />;
    case 'executive-contact': return <ExecutiveContactSlide slide={slide as any} />;
    case 'usp-strikethrough': return <UspStrikethroughSlide slide={slide as any} />;
    case 'saas-pricing-tiers': return <SaaSPricingTiersSlide slide={slide as any} />;
    case 'faq-accordion': return <FaqAccordionSlide slide={slide as any} />;
    case 'client-logo-wall': return <ClientLogoWallSlide slide={slide as any} />;
    case 'swot-analysis': return <SwotAnalysisSlide slide={slide as any} />;
    case 'interactive-quiz': return <InteractiveQuizSlide slide={slide as any} />;
    case 'hardware-showcase': return <HardwareShowcaseSlide slide={slide as any} />;
    case 'competitor-matrix': return <CompetitorMatrixSlide slide={slide as any} />;
    case 'value-pyramid': return <ValuePyramidSlide slide={slide as any} />;
    default: return <EnterpriseSlideRenderer slide={slide} />;
  }
};
