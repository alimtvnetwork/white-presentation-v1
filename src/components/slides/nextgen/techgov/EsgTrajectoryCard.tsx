import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import type { MilestoneWedge } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface EsgTrajectoryCardProps {
  milestones: MilestoneWedge[];
}

export const EsgTrajectoryCard: React.FC<EsgTrajectoryCardProps> = ({ milestones }) => (
  <div
    style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
    className="plane-1-raised rounded-3xl p-6 border flex flex-col justify-between h-full"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
          <Target size={16} />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider font-bold text-slate-800 dark:text-slate-200">
          SBTi Abatement Wedges &amp; Net-Zero Trajectory
        </span>
      </div>
      <span className="font-mono text-xs text-violet-700 dark:text-violet-300 font-bold">
        1.5°C Paris Accord Aligned
      </span>
    </div>

    <div className="space-y-4 my-auto">
      {milestones.map((m) => (
        <div
          key={m.milestoneYear}
          className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 font-mono text-xs"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-[11px]">
                {m.milestoneYear}
              </span>
              <span className="text-xs truncate max-w-sm">{m.abatementStrategy}</span>
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              {m.isMilestoneOnTrack && <CheckCircle2 size={12} />}
              -{m.cumulativeReductionPercent}%
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-violet-500 transition-all duration-500"
              style={{ width: `${Math.min(100, m.cumulativeReductionPercent)}%` }}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-300">
      <span>Scope 1, 2 &amp; 3 Full Lifecycle Decarbonization</span>
      <span className="text-emerald-700 dark:text-emerald-400 font-bold">100% Certified Abatement</span>
    </div>
  </div>
);
