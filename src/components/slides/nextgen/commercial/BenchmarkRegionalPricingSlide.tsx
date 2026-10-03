import React from 'react';
import type { BenchmarkRegionalPricingSlideData } from '../../../../types/nextGenArchetypes';
import { createBenchmarkRegionalPricingSlide } from '../../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { THEME_PALETTES } from '../../../../themes/gradientTokens';
import { PricingHeader } from './PricingHeader';
import { PricingTierCard } from './PricingTierCard';
import { RegionPricingRow } from './RegionPricingRow';

interface BenchmarkRegionalPricingSlideProps {
  slide?: BenchmarkRegionalPricingSlideData;
  data?: BenchmarkRegionalPricingSlideData;
}

export const BenchmarkRegionalPricingSlide: React.FC<BenchmarkRegionalPricingSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createBenchmarkRegionalPricingSlide('default-pricing');
  const data = slide || propsData || fallback;
  const activeThemeId = useDeckStore((s) => s.activeThemeId);
  const isDark = Boolean(THEME_PALETTES[activeThemeId]?.isDark);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <PricingHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        summary={data.costOptimizationSummary}
      />

      <div className="grid grid-cols-3 gap-6 my-auto z-10">
        {data.pricingTiers.map((tier, idx) => (
          <PricingTierCard key={idx} tier={tier} isDark={isDark} />
        ))}
      </div>

      <RegionPricingRow regions={data.regions} />
    </div>
  );
};
