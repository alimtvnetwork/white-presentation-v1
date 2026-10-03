import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { NarrativePillar } from '../../../../types/nextGenArchetypes';

interface HookCardProps {
  pillar: NarrativePillar;
  index: number;
  isActive: boolean;
  isDark?: boolean;
}

export const HookCard: React.FC<HookCardProps> = ({ pillar, index, isActive, isDark }) => (
  <div
    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
      isActive
        ? 'border-violet-500 shadow-xl bg-violet-500/10'
        : 'border-slate-700/50 bg-slate-900/40 opacity-80 hover:opacity-100'
    }`}
  >
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 font-bold">
          PHASE 0{index + 1}
        </span>
        {pillar.isResolved ? (
          <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
            <CheckCircle2 size={12} />
            Resolved
          </span>
        ) : null}
      </div>
      <h3 className="font-ubuntu text-xl font-bold mb-2 text-slate-900 dark:text-white">
        {pillar.title}
      </h3>
      <p className="font-poppins text-xs text-violet-700 dark:text-violet-300 font-medium mb-3">
        {pillar.subtitle}
      </p>
      <p className="font-poppins text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
        {pillar.description}
      </p>
    </div>

    <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between">
      <span className="font-mono text-xs text-slate-600 dark:text-slate-400">Impact Metric</span>
      <span className={`font-mono text-xs font-bold flex items-center gap-1 ${
        isDark ? 'text-violet-300' : 'text-violet-800'
      }`}>
        {pillar.impactMetric}
        <ArrowRight size={12} />
      </span>
    </div>
  </div>
);
