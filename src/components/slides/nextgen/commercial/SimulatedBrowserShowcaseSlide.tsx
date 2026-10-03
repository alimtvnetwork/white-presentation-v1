import React from 'react';
import type { SimulatedBrowserShowcaseSlideData } from '../../../../types/nextGenArchetypes';
import { createSimulatedBrowserShowcaseSlide } from '../../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { THEME_PALETTES } from '../../../../themes/gradientTokens';
import { ShowcaseHeader } from './ShowcaseHeader';
import { BrowserChrome } from './BrowserChrome';
import { BrowserViewport } from './BrowserViewport';

interface SimulatedBrowserShowcaseSlideProps {
  slide?: SimulatedBrowserShowcaseSlideData;
  data?: SimulatedBrowserShowcaseSlideData;
}

export const SimulatedBrowserShowcaseSlide: React.FC<SimulatedBrowserShowcaseSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createSimulatedBrowserShowcaseSlide('default-showcase');
  const data = slide || propsData || fallback;
  const activeThemeId = useDeckStore((s) => s.activeThemeId);
  const isDark = Boolean(THEME_PALETTES[activeThemeId]?.isDark);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <ShowcaseHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        header={data.browserHeader}
      />

      <div className="my-auto z-10 flex flex-col rounded-2xl shadow-2xl">
        <BrowserChrome
          header={data.browserHeader}
          workspace={data.appWorkspace}
        />
        <BrowserViewport
          workspace={data.appWorkspace}
          telemetry={data.telemetrySidebar}
          viewport={data.viewportCard}
          isDark={isDark}
        />
      </div>
    </div>
  );
};
