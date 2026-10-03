import React from 'react';
import type { CanaryStageItem } from '../../../types/kineticSuiteArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { CheckCircle2, ShieldCheck, Clock, ArrowRight, Activity } from 'lucide-react';

export interface CanaryStageCardProps {
  stage: CanaryStageItem;
  index: number;
  activeStep: number;
  accentColor?: string;
}

export const CanaryStageCard: React.FC<CanaryStageCardProps> = ({
  stage,
  index,
  activeStep,
  accentColor = '#06b6d4',
}) => {
  const phase = getStepPhase(index, activeStep);
  const stepStyle = getStepPhaseStyle(phase, accentColor);
  const isCurrent = phase === 'active';
  const isDone = stage.isCompleted || index < activeStep;
  const hasPassed = stage.hasPassedQualityGate;

  return (
    <div
      style={stepStyle}
      className={`rounded-2xl border p-5 flex flex-col justify-between font-mono text-xs transition-all duration-300 ${
        isCurrent
          ? 'bg-slate-950/95 border-cyan-500 ring-2 ring-cyan-500/40 shadow-2xl'
          : isDone
          ? 'bg-slate-900/60 border-slate-700'
          : 'bg-slate-950/40 border-slate-800'
      }`}
    >
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px]">
              {index + 1}
            </span>
            <span className="font-bold text-slate-100 text-sm">{stage.stageName}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            {stage.trafficPercentage}% Traffic
          </span>
        </div>

        <div className="space-y-2 text-slate-300 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Duration:</span>
            <span className="flex items-center gap-1 font-bold text-slate-200">
              <Clock size={12} className="text-cyan-400" /> {stage.durationMinutes} min
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Error Rate:</span>
            <span className="font-bold text-emerald-400">{stage.observedErrorRatePercent.toFixed(2)}%</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-3 mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {hasPassed && (
            <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-bold">
              <ShieldCheck size={13} /> Gate Passed
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {isDone && <CheckCircle2 size={13} className="text-emerald-400" />}
          {isCurrent && (
            <span className="text-cyan-400 flex items-center gap-1 text-[11px] font-bold animate-pulse">
              <Activity size={12} /> Active
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
