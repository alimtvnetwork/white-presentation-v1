import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { CultureTenet } from '../../../../types/nextGenArchetypes';

interface PillarCardProps {
  tenet: CultureTenet;
  index: number;
  isDark?: boolean;
}

export const PillarCard: React.FC<PillarCardProps> = ({ tenet, index, isDark }) => (
  <div className="plane-1-raised p-5 rounded-2xl border border-slate-700/60 bg-slate-900/30 flex flex-col justify-between h-full hover:border-violet-500/50 transition-colors">
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs px-2 py-0.5 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 font-bold">
          0{index + 1}
        </span>
        {tenet.isEnforcedInCi ? (
          <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
            <CheckCircle2 size={12} /> CI Enforced
          </span>
        ) : null}
      </div>

      <h3 className="font-ubuntu text-lg font-bold text-slate-900 dark:text-white mb-1.5">
        {tenet.name}
      </h3>
      <p className="font-poppins text-xs italic text-violet-700 dark:text-violet-300 font-medium mb-3">
        "{tenet.mantra}"
      </p>

      <div className="space-y-2 mb-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-bold">
            Daily Ritual
          </span>
          <p className="font-poppins text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            {tenet.practiceRitual}
          </p>
        </div>
      </div>
    </div>

    <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between">
      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
        {tenet.metricLabel}
      </span>
      <span className={`font-mono text-sm font-bold ${isDark ? 'text-violet-300' : 'text-violet-800'}`}>
        {tenet.quantitativeMetric}
      </span>
    </div>
  </div>
);
