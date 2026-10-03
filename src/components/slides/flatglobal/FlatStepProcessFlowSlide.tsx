import React from 'react';
import type { FlatStepProcessFlowSlideData } from '../../../types/flatGlobalSuiteTypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase } from '../../../utils/stepProgression';
import { ProcessStageNode } from './ProcessStageNode';
import { Workflow, Timer, CheckCircle, ShieldCheck } from 'lucide-react';

export const FlatStepProcessFlowSlide: React.FC<{
  slide: FlatStepProcessFlowSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const steps = slide.processSteps || [];
  const currentStep = Math.min(activeStep, Math.max(0, steps.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <Workflow size={13} /> {slide.kicker || 'OPERATIONAL METHODOLOGY'}
            </span>
            <span className="font-mono text-xs text-cyan-800 dark:text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
              <Timer size={11} /> {slide.cadenceDescription}
            </span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)' }}
            className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Four-Phase Continuous Deployment Process Flow'}</h1>
          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-4xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >{slide.subtitle || 'Step-by-step sequential verification ensuring zero downtime releases'}</p>
        </div>
      </div>

      <div className="relative z-10 my-auto">
        <div className="grid grid-cols-4 gap-6 items-stretch h-[480px]">
          {steps.map((step, idx) => (
            <ProcessStageNode
              key={step.id || idx}
              step={step}
              index={idx}
              activeStep={currentStep}
              phase={resolveStepPhase(idx, currentStep)}
            />
          ))}
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5">
            <CheckCircle size={14} /> Deployment Gate:
          </span>
          <span>Cadence: <strong className="text-cyan-400">{slide.cadenceDescription}</strong></span>
          <span>Status: <strong className="text-emerald-400">{currentStep + 1 === steps.length ? 'Converged' : 'In Flight'}</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]">
            <ShieldCheck size={13} /> Zero-Downtime Guarantee
          </span>
          <span className="text-slate-400 text-xs">Phase {currentStep + 1} of {steps.length}</span>
        </div>
      </div>
    </div>
  );
};
