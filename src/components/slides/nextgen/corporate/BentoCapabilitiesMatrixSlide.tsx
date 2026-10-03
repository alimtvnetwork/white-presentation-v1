import React from 'react';
import type { BentoCapabilitiesMatrixSlideData } from '../../../../types/nextGenArchetypes';
import { createBentoCapabilitiesMatrixSlide } from '../../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { THEME_PALETTES } from '../../../../themes/gradientTokens';
import { BentoHeader } from './BentoHeader';
import { BentoGridCell } from './BentoGridCell';
import { BentoTelemetryBar } from './BentoTelemetryBar';

interface BentoCapabilitiesMatrixSlideProps {
  slide?: BentoCapabilitiesMatrixSlideData;
  data?: BentoCapabilitiesMatrixSlideData;
}

export const BentoCapabilitiesMatrixSlide: React.FC<BentoCapabilitiesMatrixSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createBentoCapabilitiesMatrixSlide('default-bento-matrix');
  const data = slide || propsData || fallback;
  const activeThemeId = useDeckStore((s) => s.activeThemeId);
  const isDark = Boolean(THEME_PALETTES[activeThemeId]?.isDark);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <BentoHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        hasLiveTelemetry={data.hasLiveTelemetry}
      />

      <div className="my-auto z-10">
        <BentoGridCell
          hero={data.heroCapability}
          pillar={data.primaryPillar}
          isDark={isDark}
        />
      </div>

      <BentoTelemetryBar
        telemetry={data.telemetryStrip}
        microMetrics={data.microMetrics}
        isDark={isDark}
      />
    </div>
  );
};
