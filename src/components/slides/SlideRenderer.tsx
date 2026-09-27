import React from 'react';
import { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import { TitleSlide } from './TitleSlide';
import { CeoPersonaSlide } from './CeoPersonaSlide';
import { BeforeAfterSlide } from './BeforeAfterSlide';
import { TalentFunnelSlide } from './TalentFunnelSlide';
import { PricingProofSlide } from './PricingProofSlide';

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
    case 'before-after':
      return <BeforeAfterSlide slide={slide} />;
    case 'talent-funnel':
      return <TalentFunnelSlide slide={slide} />;
    case 'pricing':
      return <PricingProofSlide slide={slide} />;
    default:
      return <WhiteMasterSlide slide={slide as any} />;
  }
};
