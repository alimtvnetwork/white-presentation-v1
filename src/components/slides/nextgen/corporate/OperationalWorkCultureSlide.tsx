import React from 'react';
import type { OperationalWorkCultureSlideData } from '../../../../types/nextGenArchetypes';
import { createOperationalWorkCultureSlide } from '../../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { THEME_PALETTES } from '../../../../themes/gradientTokens';
import { CultureHeader } from './CultureHeader';
import { PillarCard } from './PillarCard';
import { HealthScoreCard } from './HealthScoreCard';

interface OperationalWorkCultureSlideProps {
  slide?: OperationalWorkCultureSlideData;
  data?: OperationalWorkCultureSlideData;
}

export const OperationalWorkCultureSlide: React.FC<OperationalWorkCultureSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createOperationalWorkCultureSlide('default-work-culture');
  const data = slide || propsData || fallback;
  const activeThemeId = useDeckStore((s) => s.activeThemeId);
  const isDark = Boolean(THEME_PALETTES[activeThemeId]?.isDark);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <CultureHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        cultureVision={data.cultureVision}
        isDark={isDark}
      />

      <div className="grid grid-cols-4 gap-5 my-auto z-10 h-[520px]">
        {data.tenets.map((tenet, idx) => (
          <PillarCard
            key={tenet.id}
            tenet={tenet}
            index={idx}
            isDark={isDark}
          />
        ))}
      </div>

      <HealthScoreCard
        healthScore={data.healthScore}
        isDark={isDark}
      />
    </div>
  );
};
