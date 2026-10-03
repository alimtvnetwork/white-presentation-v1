import React from 'react';
import type { OpportunityCostWaterfallSlideData } from '../../../../types/nextGenArchetypes';
import { createOpportunityCostWaterfallSlide } from '../../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { THEME_PALETTES } from '../../../../themes/gradientTokens';
import { WaterfallHeader } from './WaterfallHeader';
import { WaterfallBar } from './WaterfallBar';
import { WaterfallRoiCard } from './WaterfallRoiCard';

interface OpportunityCostWaterfallSlideProps {
  slide?: OpportunityCostWaterfallSlideData;
  data?: OpportunityCostWaterfallSlideData;
}

export const OpportunityCostWaterfallSlide: React.FC<OpportunityCostWaterfallSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createOpportunityCostWaterfallSlide('default-waterfall');
  const data = slide || propsData || fallback;
  const activeThemeId = useDeckStore((s) => s.activeThemeId);
  const isDark = Boolean(THEME_PALETTES[activeThemeId]?.isDark);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <WaterfallHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        currencySymbol={data.currencySymbol}
        unitMagnitude={data.unitMagnitude}
      />

      <div className="my-auto z-10">
        <WaterfallBar
          bars={data.waterfallBars}
          currencySymbol={data.currencySymbol}
          isDark={isDark}
        />
      </div>

      <WaterfallRoiCard
        summary={data.netRoiSummary}
        isDark={isDark}
      />
    </div>
  );
};
