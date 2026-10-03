import React from 'react';
import type { SplitStepperStageItem } from '../../../types/flatGlobalSuiteTypes';
import { ShieldCheck, Cpu, Activity, Award } from 'lucide-react';

interface SplitNarrativeCardProps {
  activeStage?: SplitStepperStageItem;
  activeStep: number;
  totalSteps: number;
}

export const SplitNarrativeCard: React.FC<SplitNarrativeCardProps> = ({
  activeStage,
  activeStep,
  totalSteps,
}) => {
  if (!activeStage) return null;

  return (
    <div className="plane-1-raised flex flex-col justify-between h-full p-8 rounded-3xl border border-amber-500/40 bg-slate-900/60 shadow-[0_0_32px_rgba(245,158,11,0.15)] transition-all duration-300">
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/40 font-mono text-sm font-black flex items-center justify-center">
              0{activeStage.stageNumber || activeStep + 1}
            </span>
            <span className="font-mono text-xs text-amber-900 dark:text-amber-300 uppercase tracking-widest font-bold">
              Active Stage Focus
            </span>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
            <Award size={13} /> {activeStage.metricBadge}
          </span>
        </div>

        <h2 className="font-ubuntu text-3xl font-black text-slate-100 mb-4 leading-tight">
          {activeStage.stageTitle}
        </h2>

        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <ShieldCheck size={14} /> Technical Verification Milestone
          </div>
          <p className="font-mono text-sm text-slate-200 leading-relaxed">
            {activeStage.technicalVerification}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <Activity size={13} /> Synchronized State Pipeline
        </span>
        <span>Stage {activeStep + 1} of {totalSteps}</span>
      </div>
    </div>
  );
};
