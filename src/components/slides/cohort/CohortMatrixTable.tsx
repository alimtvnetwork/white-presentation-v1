import React from 'react';
import type { CohortRowItem } from '../../../types/kineticSuiteArchetypes';
import { CohortHeatmapCell } from './CohortHeatmapCell';
import { Users, Calendar } from 'lucide-react';

export interface CohortMatrixTableProps {
  cohorts: CohortRowItem[];
  hasColorShading: boolean;
}

export const CohortMatrixTable: React.FC<CohortMatrixTableProps> = ({
  cohorts,
  hasColorShading,
}) => {
  const maxMonthCount = Math.max(
    ...cohorts.map((c) => c.retentionPercentages.length),
    6
  );
  const monthHeaders = Array.from({ length: maxMonthCount }, (_, i) => `M${i}`);

  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <span className="flex items-center gap-2 font-bold text-slate-200">
          <Calendar size={14} className="text-emerald-400" />
          Compound Account Retention Matrix
        </span>
        <span className="text-slate-400">
          {cohorts.length} Tracked Cohorts
        </span>
      </div>

      <div className="my-auto overflow-x-auto">
        <div className="min-w-[680px]">
          <div className="grid grid-cols-12 gap-2 text-slate-400 pb-2 border-b border-slate-800/80 font-bold text-[11px]">
            <div className="col-span-3">Cohort</div>
            <div className="col-span-2 flex items-center gap-1">
              <Users size={12} className="text-emerald-400" /> Accounts
            </div>
            <div className="col-span-7 grid grid-flow-col auto-cols-fr gap-1.5 text-center">
              {monthHeaders.map((m) => (
                <div key={m}>{m}</div>
              ))}
            </div>
          </div>

          <div className="space-y-1.5 pt-2">
            {cohorts.map((c) => (
              <div
                key={c.id}
                className="grid grid-cols-12 gap-2 items-center p-1.5 rounded-xl bg-slate-950/60 border border-slate-800/60"
              >
                <div className="col-span-3 font-bold text-slate-200">
                  {c.cohortLabel}
                </div>
                <div className="col-span-2 text-slate-400 font-bold">
                  {c.startingAccountCount}
                </div>
                <div className="col-span-7 grid grid-flow-col auto-cols-fr gap-1.5">
                  {c.retentionPercentages.map((pct, mIdx) => (
                    <CohortHeatmapCell
                      key={mIdx}
                      percentage={pct}
                      hasColorShading={hasColorShading}
                    />
                  ))}
                  {Array.from(
                    { length: maxMonthCount - c.retentionPercentages.length },
                    (_, emptyIdx) => (
                      <div
                        key={`empty-${emptyIdx}`}
                        className="h-9 rounded-lg border border-slate-800/30 bg-slate-950/20"
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-slate-400 text-[11px]">
        <span className="text-emerald-400 font-bold">
          Decay Curve Flattening &gt; 94% Retention
        </span>
        <span>Stripe Invoicing Reconciliation</span>
      </div>
    </div>
  );
};
