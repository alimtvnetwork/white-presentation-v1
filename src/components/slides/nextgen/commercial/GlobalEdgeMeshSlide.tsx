import React from 'react';
import type { GlobalEdgeMeshSlideData } from '../../../../types/nextGenArchetypes';
import { createGlobalEdgeMeshSlide } from '../../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { THEME_PALETTES } from '../../../../themes/gradientTokens';
import { MeshHeader } from './MeshHeader';
import { EdgeRegionCard } from './EdgeRegionCard';
import { GlobalMeshSummaryStrip } from './GlobalMeshSummaryStrip';

interface GlobalEdgeMeshSlideProps {
  slide?: GlobalEdgeMeshSlideData;
  data?: GlobalEdgeMeshSlideData;
}

export const GlobalEdgeMeshSlide: React.FC<GlobalEdgeMeshSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createGlobalEdgeMeshSlide('default-edge-mesh');
  const data = slide || propsData || fallback;
  const activeThemeId = useDeckStore((s) => s.activeThemeId);
  const isDark = Boolean(THEME_PALETTES[activeThemeId]?.isDark);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <MeshHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        summary={data.meshSummary}
      />

      <div className="grid grid-cols-4 gap-5 my-auto z-10 h-[520px]">
        {data.edgePops.map((pop) => (
          <EdgeRegionCard key={pop.popId} pop={pop} isDark={isDark} />
        ))}
      </div>

      <GlobalMeshSummaryStrip summary={data.meshSummary} isDark={isDark} />
    </div>
  );
};
