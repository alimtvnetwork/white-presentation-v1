import React from 'react';
import type { FlatProcessStepItem } from '../../../types/flatGlobalSuiteTypes';
import type { StepPhase } from '../../../utils/stepProgression';
import { CheckCircle2, Clock, Check, ArrowRight } from 'lucide-react';

interface ProcessStageNodeProps {
  step: FlatProcessStepItem;
  index: number;
  activeStep: number;
  phase: StepPhase;
}

export const ProcessStageNode: React.FC<ProcessStageNodeProps> = ({
  step,
  index,
  phase,
}) => {
  const isCompleted = phase === 'completed';
  const isActive = phase === 'active';

  const phaseClasses = isCompleted
    ? 'border-emerald-500/60 bg-emerald-950/20 text-slate-200'
    : isActive
    ? 'border-amber-500/80 bg-amber-500/10 shadow-[0_0_24px_rgba(245,158,11,0.25)] scale-[1.03] z-20'
    : 'border-slate-800 bg-slate-900/30 opacity-40 scale-[0.98]';

  return (
    <div
      className={`plane-1-raised relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-400 ${phaseClasses}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 font-mono text-xs font-bold flex items-center justify-center text-slate-100">
            {isCompleted ? <Check size={14} className="text-emerald-400" /> : `0${step.stepNumber || index + 1}`}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center gap-1">
            <Clock size={10} className="text-cyan-400" /> {step.executionDuration}
          </span>
        </div>

        <h3 className="font-ubuntu font-bold text-lg text-slate-100 mb-2 leading-snug">
          {step.stepTitle}
        </h3>
        <p className="font-poppins text-xs text-slate-300 leading-relaxed mb-4">
          {step.stepDescription}
        </p>
      </div>

      <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">Deliverables:</div>
        {step.keyDeliverables.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-[11px] font-poppins text-slate-300">
            <CheckCircle2 size={11} className={isCompleted ? 'text-emerald-400' : isActive ? 'text-amber-400' : 'text-slate-600'} />
            <span className="truncate">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
