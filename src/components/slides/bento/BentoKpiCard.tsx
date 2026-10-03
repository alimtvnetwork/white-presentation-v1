import React from 'react';
import type { BentoKpiCardItem } from '../../../types/kineticSuiteArchetypes';
import { BentoSparkline } from './BentoSparkline';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

export interface BentoKpiCardProps {
  card: BentoKpiCardItem;
  hasLiveSparklines?: boolean;
}

export const BentoKpiCard: React.FC<BentoKpiCardProps> = ({
  card,
  hasLiveSparklines = true,
}) => {
  const isHero = card.cardSpanColumns >= 2 && card.cardSpanRows >= 2;
  const isWide = card.cardSpanColumns >= 3;
  const hasGrowth = card.hasPositiveGrowth;
  const hasPoints = Boolean(card.sparklinePoints && card.sparklinePoints.length >= 2);

  const colSpanClass = card.cardSpanColumns === 3 ? 'col-span-3' : card.cardSpanColumns === 2 ? 'col-span-2' : 'col-span-1';
  const rowSpanClass = card.cardSpanRows === 2 ? 'row-span-2' : 'row-span-1';

  return (
    <div
      className={`plane-1-raised rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 ${colSpanClass} ${rowSpanClass}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-1">
            {card.metricLabel}
          </span>
          <div
            className={`font-ubuntu font-black tracking-tight text-white ${
              isHero ? 'text-[54px] leading-none mt-2' : isWide ? 'text-[38px] leading-tight' : 'text-[32px] leading-tight'
            }`}
          >
            {card.metricValue}
          </div>
        </div>

        <div
          className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1 shrink-0 ${
            hasGrowth
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
              : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
          }`}
        >
          {hasGrowth ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
          <span>{hasGrowth ? '+' : ''}{card.deltaPercent}%</span>
          <span className="text-[10px] opacity-75">{card.deltaPeriod}</span>
        </div>
      </div>

      {hasLiveSparklines && hasPoints && (
        <div className="mt-4 pt-2 border-t border-slate-800/60">
          <BentoSparkline
            points={card.sparklinePoints}
            hasPositiveGrowth={hasGrowth}
          />
        </div>
      )}

      {isWide && !hasPoints && (
        <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-400 border-t border-slate-800/60 pt-3">
          <Activity size={14} className="text-cyan-400" />
          <span>Continuous Telemetry Verification &bull; Tier-1 SLA</span>
        </div>
      )}
    </div>
  );
};
