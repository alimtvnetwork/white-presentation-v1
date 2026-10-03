import React from 'react';
import type { SocIncidentPhaseItem } from '../../../types/globalPptArchetypes';
import { resolveStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Clock, CheckCircle2, Shield, Activity } from 'lucide-react';

interface SocPhasesPipelineProps {
  phases: SocIncidentPhaseItem[];
  activeStep: number;
}

export const SocPhasesPipeline: React.FC<SocPhasesPipelineProps> = ({ phases, activeStep }) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-mono text-xs">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Activity size={14} className="text-rose-400" />
          4-Phase Triage & Containment Pipeline
        </span>
        <span className="text-slate-400">Step {activeStep + 1} of {Math.max(phases.length, 1)}</span>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1 font-mono text-xs">
        {phases.map((phase, idx) => {
          const stepPhase = resolveStepPhase(idx, activeStep);
          const phaseStyle = getStepPhaseStyle(stepPhase, 'var(--pres-accent, #f43f5e)');
          const isCurrent = stepPhase === 'active';
          const isContained = isBooleanTrue(phase.isContained);

          return (
            <div
              key={phase.id || idx}
              style={phaseStyle}
              className={`p-3.5 rounded-xl border flex flex-col gap-2 transition-all ${
                isCurrent
                  ? 'bg-rose-500/15 border-rose-500/60 shadow-lg'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {phase.phaseIndex}
                  </span>
                  <span className="font-bold text-slate-100">{phase.phaseName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock size={11} /> {phase.durationMinutes}m
                  </span>
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${
                      isContained
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        : 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30'
                    }`}
                  >
                    {isContained ? 'CONTAINED' : 'IN PROGRESS'}
                  </span>
                </div>
              </div>

              <div className="space-y-1 pl-7">
                {phase.actions.map((act) => (
                  <div key={act.id} className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className={isBooleanTrue(act.isCompleted) ? 'text-emerald-400' : 'text-slate-600'} />
                      {act.actionTitle}
                    </span>
                    <span className="text-[9px] text-slate-500">
                      {isBooleanTrue(act.isAutomated) ? 'AUTO' : 'MANUAL'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
