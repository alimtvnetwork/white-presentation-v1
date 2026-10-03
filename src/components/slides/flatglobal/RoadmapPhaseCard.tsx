import React from 'react';
import type { RoadmapRailNodeItem } from '../../../types/flatGlobalSuiteTypes';
import { CheckCircle2, Clock, Zap } from 'lucide-react';

export interface RoadmapPhaseCardProps {
  node: RoadmapRailNodeItem;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
}

export const RoadmapPhaseCard: React.FC<RoadmapPhaseCardProps> = ({
  node,
  index,
  isActive,
  isCompleted,
}) => {
  const isInProgress = node.operationalStatus === 'in-progress';
  const deliverables = node.keyDeliverables || [];

  return (
    <div
      className={`plane-1-raised rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between h-[460px] w-[380px] shadow-xl ${
        isActive
          ? 'border-indigo-400 bg-slate-900 ring-2 ring-indigo-500/60 shadow-indigo-500/20 scale-[1.02]'
          : isCompleted
          ? 'border-slate-700 bg-slate-950/80'
          : 'border-slate-800 bg-slate-950/60'
      }`}
    >
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 rounded-lg font-mono font-bold text-xs flex items-center justify-center ${
              isActive ? 'bg-indigo-600 text-white' : isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
            }`}>
              0{index + 1}
            </span>
            <span className="font-mono text-xs font-bold text-slate-300">{node.targetQuarter}</span>
          </div>
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${
            isCompleted
              ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
              : isInProgress
              ? 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10 animate-pulse'
              : 'border-slate-700 text-slate-400 bg-slate-900'
          }`}>
            {node.operationalStatus.toUpperCase()}
          </span>
        </div>

        <h3 className="font-ubuntu text-lg font-bold text-slate-100 mb-3 leading-snug">
          {node.milestoneTitle}
        </h3>

        <div className="space-y-2 mt-4">
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">Key Deliverables</span>
          {deliverables.map((item, dIdx) => (
            <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 font-poppins">
              {isCompleted ? (
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              ) : isInProgress ? (
                <Zap size={14} className="text-indigo-400 shrink-0 mt-0.5" />
              ) : (
                <Clock size={14} className="text-slate-500 shrink-0 mt-0.5" />
              )}
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400">Pulse: {node.pulseIntensity}</span>
        {isActive && <span className="text-indigo-400 font-bold">Active Sprint Phase</span>}
      </div>
    </div>
  );
};
