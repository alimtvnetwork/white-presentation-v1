import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { HorizonInitiative } from '../../../../types/nextGenArchetypes';

interface HorizonInitiativeItemProps {
  initiative: HorizonInitiative;
}

export const HorizonInitiativeItem: React.FC<HorizonInitiativeItemProps> = ({ initiative }) => {
  const riskClass =
    initiative.riskProfile === 'LOW'
      ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300'
      : initiative.riskProfile === 'BALANCED'
        ? 'bg-sky-500/20 text-sky-800 dark:text-sky-300'
        : 'bg-rose-500/20 text-rose-800 dark:text-rose-300';

  return (
    <div className="p-2.5 rounded-xl bg-black/20 dark:bg-white/5 border border-slate-700/30 flex items-center justify-between text-xs font-mono hover:border-violet-500/40 transition-colors">
      <div className="flex flex-col">
        <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          {initiative.isMilestoneAchieved ? (
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
          ) : (
            <ArrowUpRight size={13} className="text-violet-400 shrink-0" />
          )}
          {initiative.name}
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px]">
          Owner: {initiative.leadOwner}
        </span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-slate-900 dark:text-emerald-300 font-bold">{initiative.metricTarget}</span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${riskClass}`}>
          {initiative.riskProfile} RISK
        </span>
      </div>
    </div>
  );
};
