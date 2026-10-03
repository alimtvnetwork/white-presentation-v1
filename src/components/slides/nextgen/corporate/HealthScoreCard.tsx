import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';
import type { CultureHealthScore } from '../../../../types/nextGenArchetypes';

interface HealthScoreCardProps {
  healthScore: CultureHealthScore;
  isDark?: boolean;
}

export const HealthScoreCard: React.FC<HealthScoreCardProps> = ({ healthScore, isDark }) => (
  <div className="z-10 plane-1-raised p-4 px-6 rounded-2xl border border-slate-700/60 flex items-center justify-between bg-slate-900/40">
    <div className="flex items-center gap-4">
      <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-700 dark:text-violet-400">
        <Activity size={20} />
      </div>
      <div>
        <span className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block">
          Culture Health Index
        </span>
        <div className="flex items-baseline gap-2 font-mono">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            {healthScore.scoreValue}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">/ {healthScore.scoreMax}</span>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="text-right">
        <span className="font-mono text-xs text-slate-500 dark:text-slate-400 block uppercase">
          Status Tier
        </span>
        <span className="font-mono text-sm font-bold text-violet-700 dark:text-violet-300">
          {healthScore.tierStatus}
        </span>
      </div>
      {healthScore.isHighPerformance ? (
        <span className="font-mono text-xs px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
          <ShieldCheck size={14} className="text-emerald-500" />
          High-Velocity Culture
        </span>
      ) : null}
    </div>
  </div>
);
