import React from 'react';
import type { ExecutiveActionItem } from '../../../types/extendedArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { CheckCircle2, Clock, User, ShieldCheck } from 'lucide-react';

interface TakeawayActionRowProps {
  action: ExecutiveActionItem;
  index: number;
  currentStep: number;
  accentColor?: string;
}

export const TakeawayActionRow: React.FC<TakeawayActionRowProps> = ({
  action,
  index,
  currentStep,
  accentColor = '#8b5cf6',
}) => {
  const phase = getStepPhase(index, currentStep);
  const phaseStyle = getStepPhaseStyle(phase, accentColor);
  const isApproved = isBooleanTrue(action.isApproved);
  const isPast = phase === 'past';
  const isActive = phase === 'active';

  return (
    <div
      style={phaseStyle}
      className={`rounded-2xl border p-4 transition-all duration-300 ${
        isActive ? 'bg-slate-900/90 border-violet-500/60 plane-2-elevated' : 'bg-slate-900/40 border-slate-800 plane-1-raised'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 flex items-center justify-center font-mono text-xs font-bold">
            0{index + 1}
          </span>
          <span className="font-ubuntu text-base font-bold text-white tracking-wide">
            {action.actionTitle}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-slate-800 text-slate-300 border border-slate-700">
            {action.statusBadge}
          </span>
          {isApproved && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <ShieldCheck size={10} /> Approved
            </span>
          )}
          {isPast && (
            <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-mono">
              <CheckCircle2 size={13} /> Committed
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 font-poppins pt-2 border-t border-slate-800/40 font-mono">
        <span className="flex items-center gap-1.5 text-slate-300">
          <User size={12} className="text-violet-400" />
          <span>{action.ownerName}</span>
          <span className="text-slate-500">({action.ownerTitle})</span>
        </span>
        <span className="flex items-center gap-1.5 text-cyan-300">
          <Clock size={12} /> {action.targetTimeline}
        </span>
      </div>
    </div>
  );
};
