import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import type { OnboardingMilestone } from '../../../../types/nextGenArchetypes';

interface RoadmapPhaseCardProps {
  milestone: OnboardingMilestone;
  index: number;
}

export const RoadmapPhaseCard: React.FC<RoadmapPhaseCardProps> = ({ milestone, index }) => (
  <div
    className={`p-5 rounded-2xl border transition-all flex flex-col justify-between h-full ${
      milestone.isCurrentMilestone
        ? 'border-violet-500 bg-violet-500/10 shadow-xl'
        : 'border-slate-700/60 bg-slate-900/30'
    }`}
  >
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 font-bold">
          {milestone.dayMilestone}
        </span>
        {milestone.isCompleted ? (
          <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center gap-1 font-bold">
            <CheckCircle2 size={12} /> Complete
          </span>
        ) : null}
      </div>

      <h3 className="font-ubuntu text-lg font-bold text-slate-900 dark:text-white mb-1.5">
        {milestone.title}
      </h3>
      <p className="font-poppins text-xs text-slate-600 dark:text-slate-400 mb-3">
        {milestone.objective}
      </p>

      <div className="space-y-1.5 mb-4">
        <span className="font-mono text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">
          Deliverables
        </span>
        {milestone.deliverables.map((deliv, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-xs font-poppins text-slate-800 dark:text-slate-200">
            <CheckCircle2 size={12} className="text-violet-500 shrink-0" />
            <span>{deliv}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="pt-3 border-t border-slate-700/40 font-mono text-[11px] space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-slate-500">Gate:</span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <ShieldCheck size={12} /> {milestone.verificationGate}
        </span>
      </div>
      <div className="flex items-center justify-between text-slate-500">
        <span>Mentor:</span>
        <span className="text-slate-300">{milestone.mentorCheckin}</span>
      </div>
    </div>
  </div>
);
