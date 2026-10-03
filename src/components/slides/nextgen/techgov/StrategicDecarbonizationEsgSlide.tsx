import React from 'react';
import type { StrategicDecarbonizationEsgSlideData } from '../../../../types/nextgen/deepTechGovernanceTypes';
import { EsgHeader } from './EsgHeader';
import { EsgScopeCard } from './EsgScopeCard';
import { EsgTrajectoryCard } from './EsgTrajectoryCard';
import { Leaf, Award } from 'lucide-react';

interface Props {
  slide?: StrategicDecarbonizationEsgSlideData;
  data?: StrategicDecarbonizationEsgSlideData;
}

export const StrategicDecarbonizationEsgSlide: React.FC<Props> = ({ slide, data: propsData }) => {
  const data = slide || propsData;
  if (!data) return null;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <EsgHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        metrics={data.efficiencyMetrics}
        targetYear={data.netZeroTargetYear}
      />

      <div className="grid grid-cols-12 gap-6 my-auto items-stretch h-[640px]">
        <div className="col-span-5 flex flex-col justify-between gap-4">
          {data.scopes.map((scope) => (
            <EsgScopeCard key={scope.scopeId} scope={scope} />
          ))}
        </div>

        <div className="col-span-7">
          <EsgTrajectoryCard milestones={data.milestoneWedges} />
        </div>
      </div>

      <footer className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Leaf size={14} className="text-emerald-700 dark:text-emerald-400" />
          Baseline Year: {data.baselineYear} • Absolute Net-Zero Horizon: {data.netZeroTargetYear}
        </span>
        <span className="flex items-center gap-1.5 text-violet-700 dark:text-violet-300 font-bold">
          <Award size={14} /> SBTi Corporate Standard &amp; GHG Protocol Verified
        </span>
      </footer>
    </div>
  );
};
