import React from 'react';
import type { CodeWalkthroughStepItem } from '../../../types/flatGlobalSuiteTypes';
import { Terminal, ShieldCheck, Check, Code2, ArrowRight } from 'lucide-react';

interface TypewriterStanzaPaneProps {
  activeStepItem?: CodeWalkthroughStepItem;
  activeStep: number;
  totalSteps: number;
  allSteps: CodeWalkthroughStepItem[];
}

export const TypewriterStanzaPane: React.FC<TypewriterStanzaPaneProps> = ({
  activeStepItem,
  activeStep,
  totalSteps,
  allSteps,
}) => {
  if (!activeStepItem) return null;

  return (
    <div className="plane-1-raised flex flex-col justify-between h-full p-8 rounded-3xl border border-amber-500/40 bg-slate-900/60 shadow-[0_0_32px_rgba(245,158,11,0.15)]">
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/40 font-mono text-sm font-black flex items-center justify-center">
              0{activeStepItem.stepNumber || activeStep + 1}
            </span>
            <span className="font-mono text-xs text-amber-900 dark:text-amber-300 uppercase tracking-widest font-bold">
              Architectural Commentary
            </span>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
            <Code2 size={13} /> Lines: [{activeStepItem.highlightedLineNumbers.join(', ')}]
          </span>
        </div>

        <h2 className="font-ubuntu text-2xl font-black text-slate-100 mb-3 leading-snug">
          {activeStepItem.stepTitle}
        </h2>

        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6">
          <p className="font-poppins text-sm text-slate-200 leading-relaxed">
            {activeStepItem.stepExplanation}
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
            Inspection Checkpoints:
          </div>
          {allSteps.map((st, idx) => (
            <div
              key={st.id || idx}
              className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-all duration-200 ${
                idx === activeStep
                  ? 'border-amber-500/60 bg-amber-500/10 text-slate-100'
                  : idx < activeStep
                  ? 'border-emerald-500/30 bg-emerald-950/20 text-slate-400'
                  : 'border-slate-800/80 bg-slate-950/40 text-slate-500'
              }`}
            >
              <span className="truncate">{st.stepTitle}</span>
              {idx < activeStep ? <Check size={13} className="text-emerald-400" /> : <ArrowRight size={13} className={idx === activeStep ? 'text-amber-400' : 'text-slate-600'} />}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck size={13} /> Strict Static Verification
        </span>
        <span>Inspection {activeStep + 1} of {totalSteps}</span>
      </div>
    </div>
  );
};
