import React from 'react';
import type { TransformationSplitCanvasSlideData } from '../../../types/suite2032Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { AlertTriangle, Sparkles, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

export const TransformationSplitCanvasSlide: React.FC<{
  slide: TransformationSplitCanvasSlideData;
  activeStep?: number;
}> = ({ slide, activeStep: propStep }) => {
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = slide?.transformationStages || [];
  const currentStep = Math.min(Math.max(0, propStep ?? storeStep ?? 0), Math.max(stages.length - 1, 0));
  const activeStage = stages[currentStep] || stages[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-2">
              <Activity size={16} /> {slide?.kicker || 'PARADIGM SHIFT & VALUE REALIZATION'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">Horizon: {slide?.programHorizon || '3-Year Horizon'}</span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5"><ShieldCheck size={14} /> Approved</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-slate-400 mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-[14px] bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-slate-300">
          <span>Phase:</span><span className="font-bold text-[var(--pres-accent)]">{currentStep + 1} of {stages.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 my-auto z-10 h-[560px]">
        <div className="plane-1-raised rounded-3xl p-8 border border-rose-500/30 bg-rose-950/10 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-rose-500/20">
            <span className="font-mono text-[16px] font-bold text-rose-400 flex items-center gap-2"><AlertTriangle size={18} /> Legacy Monolithic Constraint</span>
            <span className="text-[14px] font-mono text-rose-300/80 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">Friction Point</span>
          </div>
          <div className="my-auto">
            <h3 className="text-[26px] font-bold text-slate-100 mb-4">{activeStage?.phaseName}</h3>
            <p className="text-[18px] text-rose-200/90 leading-relaxed p-6 rounded-2xl bg-rose-950/30 border border-rose-900/40">{activeStage?.legacyStateSnapshot}</p>
          </div>
          <div className="text-[14px] text-slate-400 font-mono">Objective: <span className="text-slate-200">{activeStage?.phaseObjective}</span></div>
        </div>

        <div className="plane-1-raised rounded-3xl p-8 border border-[var(--pres-accent)]/40 bg-[var(--pres-accent)]/5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-[var(--pres-accent)]/20">
            <span className="font-mono text-[16px] font-bold text-emerald-400 flex items-center gap-2"><Sparkles size={18} /> Target Modern Sovereign Fabric</span>
            <span className="text-[14px] font-mono text-emerald-300 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1"><CheckCircle2 size={14} /> Value: {activeStage?.valueRealizationPercentage}%</span>
          </div>
          <div className="my-auto">
            <h3 className="text-[26px] font-bold text-slate-100 mb-4">Target Architecture State</h3>
            <p className="text-[18px] text-emerald-100/90 leading-relaxed p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40">{activeStage?.futureStateSnapshot}</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {(slide?.valuePillars || []).map((p) => (
              <div key={p.id} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-[18px] font-bold text-[var(--pres-accent)]">{p.roiMultiplier}</div>
                <div className="text-[14px] text-slate-300 truncate">{p.pillarTitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10">
        {stages.map((st, idx) => {
          const phase = resolveStepPhase(idx, currentStep);
          return (
            <button key={st.stepIndex} onClick={() => jumpToStep(idx)} style={getStepLifecycleStyle(phase)} className={`p-4 rounded-2xl border text-left transition-all ${phase === 'active' ? 'bg-[var(--pres-card-bg)] border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]' : 'bg-slate-900/60 border-slate-800'}`}>
              <div className="flex items-center justify-between text-[14px] font-mono mb-1"><span className="text-slate-400">Phase 0{idx + 1}</span><span className="text-emerald-400 font-bold">{st.valueRealizationPercentage}%</span></div>
              <div className="text-[15px] font-bold text-slate-200 truncate">{st.phaseName}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
