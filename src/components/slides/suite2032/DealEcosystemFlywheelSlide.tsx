import React from 'react';
import type { DealEcosystemFlywheelSlideData } from '../../../types/suite2032Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { RefreshCw, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export const DealEcosystemFlywheelSlide: React.FC<{
  slide: DealEcosystemFlywheelSlideData;
  activeStep?: number;
}> = ({ slide, activeStep: propStep }) => {
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = slide?.flywheelStages || [];
  const currentStep = Math.min(Math.max(0, propStep ?? storeStep ?? 0), Math.max(stages.length - 1, 0));
  const activeStage = stages[currentStep] || stages[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-2">
              <RefreshCw size={16} /> {slide?.kicker || 'ECOSYSTEM EXPANSION & FLYWHEEL'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">Fabric: {slide?.ecosystemName || 'Nexus Partner Fabric'}</span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5"><TrendingUp size={14} /> +{slide?.compoundGrowthRatePercentage || 46.8}% CAGR</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-slate-400 mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-[14px] bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-slate-300">
          <span>Loop:</span><span className="font-bold text-[var(--pres-accent)]">{currentStep + 1} of {stages.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto z-10 h-[560px] items-center">
        <div className="col-span-5 flex items-center justify-center relative">
          <div className="relative w-[440px] h-[440px] flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full transition-transform duration-700 ease-out" style={{ transform: `rotate(${currentStep * 90}deg)` }}>
              <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="16" />
              <circle cx="200" cy="200" r="180" fill="none" stroke="var(--pres-accent)" strokeWidth="16" strokeDasharray="280 850" strokeLinecap="round" />
              <path d="M 200 20 A 180 180 0 0 1 380 200" fill="none" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="6" strokeDasharray="6 6" />
              <path d="M 380 200 A 180 180 0 0 1 200 380" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="6" strokeDasharray="6 6" />
              <circle cx="200" cy="20" r="12" fill="var(--pres-accent)" /><circle cx="380" cy="200" r="12" fill="#06b6d4" />
              <circle cx="200" cy="380" r="12" fill="#10b981" /><circle cx="20" cy="200" r="12" fill="#8b5cf6" />
            </svg>
            <div className="absolute inset-0 m-auto w-[220px] h-[220px] rounded-full plane-2-floating bg-slate-950/90 border border-slate-700/80 flex flex-col items-center justify-center p-4 text-center shadow-[0_0_40px_rgba(124,58,237,0.25)]">
              <Zap size={24} className="text-[var(--pres-accent)] mb-1" />
              <span className="text-[28px] font-mono font-bold text-slate-100">+{slide?.compoundGrowthRatePercentage || 46.8}%</span>
              <span className="text-[14px] font-mono text-cyan-400 font-semibold uppercase">Compound Velocity</span>
            </div>
          </div>
        </div>

        <div className="col-span-7 plane-1-raised rounded-3xl p-8 border border-[var(--pres-accent)]/40 bg-[var(--pres-card-bg)] flex flex-col justify-between h-[520px]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-[14px] font-mono font-bold uppercase text-[var(--pres-accent)] tracking-wider">Quadrant 0{currentStep + 1} — Active Vector</span>
              <span className="text-[14px] font-mono text-emerald-400 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5"><ShieldCheck size={14} /> Self-Sustaining</span>
            </div>
            <h3 className="text-[30px] font-bold text-slate-100 mt-4 mb-2">{activeStage?.stageTitle}</h3>
            <p className="text-[18px] text-slate-300 leading-relaxed mb-6">{activeStage?.flywheelDriver}</p>
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 mb-4">
              <div className="text-[14px] font-mono text-cyan-400 uppercase font-semibold">Momentum Multiplier</div>
              <div className="text-[22px] font-mono font-bold text-slate-100 mt-0.5">{activeStage?.momentumMetric}</div>
            </div>
            <div className="text-[15px] text-purple-300 bg-purple-950/20 border border-purple-800/30 p-3.5 rounded-xl font-mono">
              Feedback Loop: <span className="text-slate-200">{activeStage?.reinforcingFeedbackLoop}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
            {(slide?.partnerNodes || []).slice(0, 2).map((n) => (
              <div key={n.id} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <span className="text-[14px] text-slate-300 truncate mr-2">{n.partnerTier}</span>
                <span className="text-[16px] font-mono font-bold text-emerald-400">{n.annualGrossMerchandiseValue}</span>
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
              <div className="flex items-center justify-between text-[14px] font-mono mb-1"><span className="text-slate-400">Step 0{idx + 1}</span><span className="text-cyan-400 font-bold">Active</span></div>
              <div className="text-[15px] font-bold text-slate-200 truncate">{st.stageTitle}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
