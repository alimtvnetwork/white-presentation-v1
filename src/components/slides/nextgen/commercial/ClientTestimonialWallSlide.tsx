import React from 'react';
import type { ClientTestimonialWallSlideData } from '../../../../types/nextGenArchetypes';
import { createClientTestimonialWallSlide } from '../../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { THEME_PALETTES } from '../../../../themes/gradientTokens';
import { WallHeader } from './WallHeader';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialMetricsStrip } from './TestimonialMetricsStrip';

interface ClientTestimonialWallSlideProps {
  slide?: ClientTestimonialWallSlideData;
  data?: ClientTestimonialWallSlideData;
}

export const ClientTestimonialWallSlide: React.FC<ClientTestimonialWallSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createClientTestimonialWallSlide('default-testimonial-wall');
  const data = slide || propsData || fallback;
  const activeThemeId = useDeckStore((s) => s.activeThemeId);
  const isDark = Boolean(THEME_PALETTES[activeThemeId]?.isDark);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <WallHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        metrics={data.aggregateMetrics}
      />

      <div className="grid grid-cols-3 gap-6 my-auto z-10 h-[520px]">
        {data.testimonials.slice(0, 3).map((item) => (
          <TestimonialCard key={item.id} testimonial={item} isDark={isDark} />
        ))}
      </div>

      <TestimonialMetricsStrip metrics={data.aggregateMetrics} />
    </div>
  );
};
