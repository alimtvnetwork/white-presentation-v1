import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import type { TimelineRailMilestone } from '../../../types/enterpriseArchetypes';

export interface TimelineRailNodeProps {
  node: TimelineRailMilestone;
  nodeIndex: number;
  activeStep: number;
  onSelectStep: (step: number) => void;
}

export const TimelineRailNode: React.FC<TimelineRailNodeProps> = ({
  node,
  nodeIndex,
  activeStep,
  onSelectStep,
}) => {
  const isPast = nodeIndex < activeStep;
  const isActive = nodeIndex === activeStep;
  const isFuture = nodeIndex > activeStep;

  const nodeStyle: React.CSSProperties = isActive
    ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
    : isPast
    ? { opacity: 0.75, transform: 'scale(1.0)' }
    : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

  return (
    <div
      style={nodeStyle}
      onClick={() => onSelectStep(nodeIndex)}
      className="relative flex flex-col items-center cursor-pointer transition-all duration-300 group"
    >
      <div
        className={`relative flex items-center justify-center w-14 h-14 rounded-2xl font-mono text-sm font-bold transition-all duration-300 ${
          isActive
            ? 'bg-blue-600 text-white shadow-[0_0_24px_rgba(59,130,246,0.65)] ring-4 ring-blue-400/50'
            : isPast
            ? 'bg-emerald-600/90 text-white border-2 border-emerald-400/80 shadow-md'
            : 'bg-slate-800/80 text-slate-400 border border-slate-700'
        }`}
      >
        {isPast ? <Check size={20} className="stroke-[3]" /> : node.stepNumber}
        {node.hasAlert && (
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-500 flex items-center justify-center text-[9px] text-white">
            <AlertCircle size={10} />
          </span>
        )}
      </div>

      <div className="mt-3 text-center max-w-[130px]">
        <div className="font-mono text-[11px] font-semibold tracking-wider uppercase text-blue-400">
          Node 0{node.stepNumber}
        </div>
        <div className="font-ubuntu text-xs font-bold truncate text-slate-200 mt-0.5">
          {node.title}
        </div>
        <div className="font-poppins text-[10px] text-slate-400 truncate">
          {node.subtitle || node.status}
        </div>
      </div>
    </div>
  );
};
