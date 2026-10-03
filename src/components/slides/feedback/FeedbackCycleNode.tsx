import React from 'react';
import type { FeedbackLoopStageItem } from '../../../types/extendedArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { CheckCircle2, Clock, Cpu, Workflow } from 'lucide-react';

interface FeedbackCycleNodeProps {
  stage: FeedbackLoopStageItem;
  index: number;
  currentStep: number;
  accentColor?: string;
}

export const FeedbackCycleNode: React.FC<FeedbackCycleNodeProps> = ({
  stage,
  index,
  currentStep,
  accentColor = '#8b5cf6',
}) => {
  const phase = getStepPhase(index, currentStep);
  const phaseStyle = getStepPhaseStyle(phase, accentColor);
  const isAutomated = isBooleanTrue(stage.isAutomatedGate);
  const isPast = phase === 'past';
  const isActive = phase === 'active';

  return (
    <div
      style={phaseStyle}
      className={`rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
        isActive ? 'bg-slate-900/90 border-cyan-500/60 plane-2-elevated' : 'bg-slate-900/40 border-slate-800 plane-1-raised'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-mono text-xs font-bold">
              {stage.stageOrder || index + 1}
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">Stage</span>
          </div>
          {isPast && (
            <span className="text-emerald-400 flex items-center gap-1 text-[10px] font-mono">
              <CheckCircle2 size={12} /> Executed
            </span>
          )}
          {isActive && (
            <span className="text-cyan-400 flex items-center gap-1 text-[10px] font-mono font-bold animate-pulse">
              <Workflow size={12} /> Active Loop
            </span>
          )}
        </div>

        <h3 className="font-ubuntu text-lg font-bold text-white mb-2 leading-snug">{stage.stageName}</h3>
        <p className="text-xs text-slate-300 font-poppins leading-relaxed mb-4 line-clamp-3">{stage.actionSummary}</p>

        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
            <Clock size={12} /> {stage.leadTimeFormatted}
          </span>
          {isAutomated && (
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 flex items-center gap-1">
              <Cpu size={11} /> Automated Gate
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>Cycle Order: #{stage.stageOrder}</span>
        <span className="text-slate-400">{stage.toolchainIcon || 'Pipeline'}</span>
      </div>
    </div>
  );
};
