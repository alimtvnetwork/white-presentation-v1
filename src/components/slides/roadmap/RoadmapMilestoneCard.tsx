import React from 'react';
import type { RoadmapMilestone } from '../../../types/enterpriseArchetypes';
import { CheckCircle2, Circle, Clock, Sparkles } from 'lucide-react';

interface RoadmapMilestoneCardProps {
  milestone: RoadmapMilestone;
}

export const RoadmapMilestoneCard: React.FC<RoadmapMilestoneCardProps> = ({ milestone }) => {
  const isCompleted = milestone.status === 'completed';
  const isInProgress = milestone.status === 'in-progress';
  const isMajor = Boolean(milestone.isMajorRelease);

  return (
    <div
      className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
        isInProgress
          ? 'plane-2-elevated bg-violet-500/10 border-violet-500/50 shadow-violet-950/20'
          : isCompleted
          ? 'plane-1-raised bg-emerald-500/5 border-emerald-500/30'
          : 'plane-1-raised bg-slate-900/40 border-slate-800'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs font-bold text-violet-400 bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-500/20">
            {milestone.quarter}
          </span>
          <div className="flex items-center gap-1.5">
            {isMajor && (
              <span className="flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                <Sparkles size={10} /> Major
              </span>
            )}
            <span
              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : isInProgress
                  ? 'bg-violet-500/20 text-violet-300 border-violet-500/30'
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              {milestone.status}
            </span>
          </div>
        </div>

        <h3 className="font-ubuntu text-base font-bold text-slate-100 mb-3">{milestone.headline}</h3>

        <ul className="space-y-2">
          {(milestone.deliverables || []).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs font-poppins text-slate-300">
              {isCompleted ? (
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              ) : isInProgress ? (
                <Clock size={14} className="text-violet-400 shrink-0 mt-0.5" />
              ) : (
                <Circle size={14} className="text-slate-500 shrink-0 mt-0.5" />
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
