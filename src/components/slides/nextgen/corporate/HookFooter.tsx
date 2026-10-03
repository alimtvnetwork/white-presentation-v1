import React from 'react';
import { AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';
import type { CatalystMetric } from '../../../../types/nextGenArchetypes';

interface HookFooterProps {
  centralTensionHeadline: string;
  catalystMetric: CatalystMetric;
  isDark?: boolean;
}

export const HookFooter: React.FC<HookFooterProps> = ({
  centralTensionHeadline,
  catalystMetric,
  isDark,
}) => (
  <div className="z-10 plane-1-raised p-4 rounded-2xl border border-slate-700/60 flex items-center justify-between gap-6 bg-slate-900/30">
    <div className="flex items-center gap-3 max-w-4xl">
      <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-700 dark:text-violet-400 shrink-0">
        <AlertCircle size={20} />
      </div>
      <div>
        <span className="font-mono text-[11px] text-violet-700 dark:text-violet-400 font-bold uppercase tracking-wider block">
          Central Tension
        </span>
        <p className="font-poppins text-sm text-slate-800 dark:text-slate-200 font-medium">
          {centralTensionHeadline}
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4 pl-6 border-l border-slate-700/40 shrink-0 font-mono">
      <div>
        <span className="text-[11px] text-slate-600 dark:text-slate-400 block uppercase">
          {catalystMetric.metricLabel}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            {catalystMetric.metricValue}
          </span>
          <span className={`text-xs font-bold flex items-center gap-0.5 ${
            isDark ? 'text-violet-300' : 'text-violet-800'
          }`}>
            {catalystMetric.trendDirection === 'UP' ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            {catalystMetric.deltaPercentage}
          </span>
        </div>
      </div>
    </div>
  </div>
);
