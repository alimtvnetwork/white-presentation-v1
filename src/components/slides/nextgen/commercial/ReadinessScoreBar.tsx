import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import type { ReadinessScore } from '../../../../types/nextGenArchetypes';

interface ReadinessScoreBarProps {
  score: ReadinessScore;
}

export const ReadinessScoreBar: React.FC<ReadinessScoreBarProps> = ({ score }) => (
  <div className="z-10 plane-1-raised p-4 px-6 rounded-2xl border border-slate-700/60 bg-slate-900/40 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-700 dark:text-violet-400">
        <Award size={20} />
      </div>
      <div>
        <span className="font-mono text-xs uppercase text-slate-500 dark:text-slate-400 font-bold block">
          Cohort Readiness Level
        </span>
        <div className="flex items-baseline gap-2 font-mono">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            {score.overallReadinessPercent}%
          </span>
          <span className="text-xs text-slate-500">Readiness Benchmark</span>
        </div>
      </div>
    </div>

    {score.isProductionCertified ? (
      <span className="font-mono text-xs px-3.5 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
        <ShieldCheck size={14} className="text-emerald-500" />
        Production Certified Track
      </span>
    ) : null}
  </div>
);
