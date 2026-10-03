import React from 'react';
import type { LaunchGateItem } from '../../../types/extendedArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { CheckCircle2, ShieldAlert, AlertTriangle, Clock } from 'lucide-react';

interface LaunchGatePillProps {
  gate: LaunchGateItem;
  index: number;
  currentStep: number;
  accentColor?: string;
}

export const LaunchGatePill: React.FC<LaunchGatePillProps> = ({
  gate,
  index,
  currentStep,
  accentColor = '#f59e0b',
}) => {
  const phase = getStepPhase(index, currentStep);
  const phaseStyle = getStepPhaseStyle(phase, accentColor);
  const isPassed = isBooleanTrue(gate.isPassed);
  const isCritical = isBooleanTrue(gate.isMissionCritical);
  const isPast = phase === 'past';
  const isActive = phase === 'active';

  return (
    <div
      style={phaseStyle}
      className={`rounded-2xl border p-4 transition-all duration-300 ${
        isActive ? 'bg-slate-900/90 border-amber-500/60 plane-2-elevated' : 'bg-slate-900/40 border-slate-800 plane-1-raised'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center font-mono text-xs font-bold">
            0{gate.gateNumber || index + 1}
          </span>
          <span className="font-ubuntu text-sm font-bold text-white tracking-wide">
            {gate.gateTitle}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isCritical && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-rose-500/15 text-rose-300 border border-rose-500/30 flex items-center gap-1">
              <ShieldAlert size={10} /> Critical
            </span>
          )}
          {isPassed ? (
            <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-mono">
              <CheckCircle2 size={13} /> Verified
            </span>
          ) : (
            <span className="text-amber-400 flex items-center gap-1 text-[11px] font-mono">
              <Clock size={13} /> In Progress
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 font-poppins pt-1 border-t border-slate-800/40">
        <span className="font-mono text-[11px]">Owner: {gate.assignedOwner}</span>
        {isActive && <span className="text-amber-400 font-mono text-[11px] font-bold">Active Verification Gate</span>}
      </div>
    </div>
  );
};
