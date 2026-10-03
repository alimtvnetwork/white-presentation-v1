import React from 'react';
import { TrendingDown, ShieldCheck, Activity } from 'lucide-react';
import type { MigrationTelemetrySummary } from '../../../../types/modern/transformationTypes';

interface TcoSavingsBarProps {
  summary: MigrationTelemetrySummary;
  isMigrationOnTrack: boolean;
  cutoverDeadline: string;
}

export const TcoSavingsBar: React.FC<TcoSavingsBarProps> = ({
  summary,
  isMigrationOnTrack,
  cutoverDeadline,
}) => {
  const percentComplete = Math.round((summary.completedWorkloads / Math.max(summary.totalWorkloads, 1)) * 100);

  return (
    <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm z-10">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-slate-400">Migration Status</span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30 flex items-center gap-1">
            <Activity size={12} />
            {isMigrationOnTrack ? 'ON TRACK' : 'SCHEDULE REVISED'}
          </span>
        </div>

        <div className="w-[1px] h-6 bg-slate-700/50" />

        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-slate-400">SLA Posture</span>
          <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-400 font-bold border border-sky-500/30 flex items-center gap-1">
            <ShieldCheck size={12} />
            {summary.isSlaMaintained ? '100% SLA Maintained' : 'SLA Under Review'}
          </span>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-8">
        <div className="flex justify-between text-xs text-slate-400 mb-1.5">
          <span>Overall Funnel Progress</span>
          <span className="text-slate-200 font-bold">{percentComplete}% Migrated</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden border border-slate-700/50">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xs uppercase tracking-wider text-slate-400">Target Cutover: {cutoverDeadline}</span>
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold">
          <TrendingDown size={16} />
          <span>-{summary.costReductionPercentage}% Projected TCO</span>
        </div>
      </div>
    </div>
  );
};
