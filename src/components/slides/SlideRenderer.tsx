import React from 'react';
import { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import { TitleSlide } from './TitleSlide';
import { CeoPersonaSlide } from './CeoPersonaSlide';
import { BeforeAfterSlide } from './BeforeAfterSlide';
import { TalentFunnelSlide } from './TalentFunnelSlide';
import { PricingProofSlide } from './PricingProofSlide';
import { KeyPlayerSlide } from './KeyPlayerSlide';
import { StepsChainSlide } from './StepsChainSlide';
import { TestimonialsSlide } from './TestimonialsSlide';

import { CompetitiveEdgeSlide } from './CompetitiveEdgeSlide';
import { TechStackSlide } from './TechStackSlide';
import { StepsSlide } from './StepsSlide';

interface SlideRendererProps {
  slide: SlideData;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  switch (slide.type) {
    case 'white-master':
      return <WhiteMasterSlide slide={slide} />;
    case 'title':
      return <TitleSlide slide={slide} />;
    case 'persona':
      return <CeoPersonaSlide slide={slide} />;
    case 'key-player':
      return <KeyPlayerSlide slide={slide} />;
    case 'before-after':
      return <BeforeAfterSlide slide={slide} />;
    case 'talent-funnel':
      return <TalentFunnelSlide slide={slide} />;
    case 'pricing':
      return <PricingProofSlide slide={slide} />;
    case 'steps-chain':
      return <StepsChainSlide slide={slide} />;
    case 'testimonials':
      return <TestimonialsSlide slide={slide} />;
    case 'competitive-edge':
      return <CompetitiveEdgeSlide slide={slide} />;
    case 'tech-stack':
      return <TechStackSlide slide={slide} />;
    case 'steps':
      return <StepsSlide slide={slide as any} />;
    default:
      return <WhiteMasterSlide slide={slide as any} />;
  }
};
