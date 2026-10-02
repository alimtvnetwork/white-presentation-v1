import React from 'react';
import type { NextStepsSprintSlideData } from '../../../types/expandedArchetypes';
import { Flag, CheckCircle2, User } from 'lucide-react';

const getSprintPhaseStyle = (isActive: boolean, isCompleted: boolean): React.CSSProperties => {
  if (isActive) {
    return {
      opacity: 1.0,
      borderColor: 'rgba(99, 102, 241, 0.8)',
      boxShadow: '0 0 0 1px rgba(99, 102, 241, 0.4), 0 0 24px -2px rgba(99, 102, 241, 0.5)',
      transform: 'translateY(-2px)',
      transition: 'all 0.35s ease',
    };
  }
  const opacity = isCompleted ? 0.55 : 0.40;
  const borderColor = isCompleted ? 'rgba(99, 102, 241, 0.3)' : 'rgba(51, 65, 85, 0.5)';
  return { opacity, borderColor, transition: 'all 0.35s ease' };
};

export interface SprintPhaseCardProps {
  sp: NextStepsSprintSlideData['sprints'][0];
  idx: number;
  isActive: boolean;
  isCompleted: boolean;
  onSelect: (index: number) => void;
}

export const SprintPhaseCard: React.FC<SprintPhaseCardProps> = ({
  sp, idx, isActive, isCompleted, onSelect,
}) => {
  const style = getSprintPhaseStyle(isActive, isCompleted);
  const surfaceClass = isActive
    ? 'plane-2-elevated bg-indigo-500/15 shadow-xl'
    : 'plane-1-raised bg-slate-900/40';

  return (
    <div
      onClick={() => onSelect(idx)}
      style={style}
      className={`p-6 rounded-2xl border flex flex-col justify-between cursor-pointer ${surfaceClass}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider">
            PHASE {sp.phaseNumber}
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
            {sp.timeframe}
          </span>
        </div>
        <h3 className="font-ubuntu text-lg font-bold mb-2 text-slate-100">{sp.title}</h3>
        <p className="font-poppins text-xs text-slate-400 mb-4">{sp.objective}</p>
        <div className="flex items-center gap-1.5 text-xs font-mono text-violet-300 mb-4 bg-slate-800/40 p-2 rounded">
          <User size={12} /> <span>Lead: {sp.leadOwner}</span>
        </div>
        <div className="space-y-1.5 mb-4">
          {(sp.deliverables || []).map((d, dIdx) => (
            <div key={dIdx} className={`flex items-start gap-1.5 text-xs ${isActive ? 'text-slate-200' : 'text-slate-400'}`}>
              <span className="text-indigo-400 font-bold">•</span> <span>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
          <Flag size={12} className="text-indigo-400" /> {sp.exitCriteria}
        </span>
        {isCompleted ? <CheckCircle2 size={16} className="text-emerald-400" /> : null}
      </div>
    </div>
  );
};
