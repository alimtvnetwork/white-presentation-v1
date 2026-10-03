import React from 'react';
import type { MarketTensionQuadrantSlideData } from '../../../../types/nextgen/deepTechGovernanceTypes';
import { MarketHeader } from './MarketHeader';
import { QuadrantCanvas } from './QuadrantCanvas';
import { MarketEntityLegend } from './MarketEntityLegend';
import { Compass, Sparkles } from 'lucide-react';

interface Props {
  slide?: MarketTensionQuadrantSlideData;
  data?: MarketTensionQuadrantSlideData;
}

export const MarketTensionQuadrantSlide: React.FC<Props> = ({ slide, data: propsData }) => {
  const data = slide || propsData;
  if (!data) return null;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <MarketHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        trajectoryHorizon={data.strategicTrajectory.trajectoryHorizon}
        isOnTrack={data.strategicTrajectory.isExecutionOnTrack}
      />

      <div className="grid grid-cols-12 gap-6 my-auto items-stretch h-[640px]">
        <div className="col-span-7">
          <QuadrantCanvas
            xAxisLabel={data.xAxisLabel}
            yAxisLabel={data.yAxisLabel}
            quadrants={data.quadrants}
            entities={data.marketEntities}
            trajectory={data.strategicTrajectory}
          />
        </div>

        <div className="col-span-5">
          <MarketEntityLegend entities={data.marketEntities} />
        </div>
      </div>

      <footer className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Compass size={14} className="text-violet-600 dark:text-violet-400" />
          Quadrant Frontier: Highest Combined Velocity + Verifiable AST Governance
        </span>
        <span className="flex items-center gap-1.5 text-violet-700 dark:text-violet-300 font-bold">
          <Sparkles size={14} /> Sovereign Market Leadership Vector Verified
        </span>
      </footer>
    </div>
  );
};
