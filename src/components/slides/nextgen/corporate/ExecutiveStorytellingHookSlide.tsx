import React, { useState } from 'react';
import type { ExecutiveStorytellingHookSlideData } from '../../../../types/nextGenArchetypes';
import { createExecutiveStorytellingHookSlide } from '../../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { THEME_PALETTES } from '../../../../themes/gradientTokens';
import { HookHeader } from './HookHeader';
import { HookCard } from './HookCard';
import { HookFooter } from './HookFooter';

interface ExecutiveStorytellingHookSlideProps {
  slide?: ExecutiveStorytellingHookSlideData;
  data?: ExecutiveStorytellingHookSlideData;
}

export const ExecutiveStorytellingHookSlide: React.FC<ExecutiveStorytellingHookSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createExecutiveStorytellingHookSlide('default-exec-hook');
  const data = slide || propsData || fallback;
  const activeThemeId = useDeckStore((s) => s.activeThemeId);
  const isDark = Boolean(THEME_PALETTES[activeThemeId]?.isDark);
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeIndex = hoveredIndex ?? (deckActiveStep !== undefined ? deckActiveStep - 1 : 0);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <HookHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        quote={data.hookQuote}
        inflectionDate={data.inflectionDate}
        isDark={isDark}
      />

      <div className="grid grid-cols-3 gap-6 my-auto z-10">
        {data.narrativePillars.map((pillar, idx) => (
          <div
            key={pillar.id}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <HookCard
              pillar={pillar}
              index={idx}
              isActive={idx === activeIndex}
              isDark={isDark}
            />
          </div>
        ))}
      </div>

      <HookFooter
        centralTensionHeadline={data.centralTensionHeadline}
        catalystMetric={data.catalystMetric}
        isDark={isDark}
      />
    </div>
  );
};
