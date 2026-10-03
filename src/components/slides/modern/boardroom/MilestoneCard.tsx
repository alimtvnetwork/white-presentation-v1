import React from 'react';
import type { MandatePillar } from '../../../../types/modern/boardroomStrategyTypes';
import { Target, CheckCircle2, Clock } from 'lucide-react';

interface MilestoneCardProps {
  pillar: MandatePillar;
  onClick?: () => void;
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ({ pillar, onClick }) => (
  <div
    onClick={onClick}
    className="plane-1-raised p-6 rounded-2xl flex flex-col justify-between border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
  >
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          {pillar.primaryActionLabel}
        </span>
        <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
          <Clock size={11} className="text-slate-500" /> {pillar.executionWindow}
        </span>
      </div>

      <h3 className="text-lg font-ubuntu font-bold text-slate-100 mb-3">{pillar.pillarTitle}</h3>

      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-4">
        <div className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold">
          Key Metric / Target
        </div>
        <div className="text-sm font-ubuntu font-bold text-emerald-400 mt-1">
          {pillar.keyMetricOrTarget}
        </div>
      </div>
    </div>

    <div>
      <div className="text-xs uppercase text-slate-400 font-mono font-bold tracking-wider mb-2">
        Mandated Deliverables
      </div>
      <div className="space-y-1.5">
        {pillar.deliverables.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
            <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
