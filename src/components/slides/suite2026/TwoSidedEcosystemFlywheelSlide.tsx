// lint-allow: file-size reason="TwoSidedEcosystemFlywheelSlide kinetic platform network flywheel compounding" max=160
import React from 'react';
import type { TwoSidedEcosystemFlywheelSlideData } from '../../types/suite2026Archetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { RefreshCw, CheckCircle2, Zap, ArrowRight, Activity, TrendingUp, Sparkles } from 'lucide-react';

const DEF_SUPPLY = [
  { id: 's1', stageIndex: 1, stageTitle: 'Developer Supply Ingress', metricLabel: '12,500+ Active Builders', velocityMultiplier: 1.4, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
  { id: 's2', stageIndex: 2, stageTitle: 'Module & API Density', metricLabel: '4,200 Verified Extensions', velocityMultiplier: 2.1, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
  { id: 's3', stageIndex: 3, stageTitle: 'Ecosystem Lock-In & Gravity', metricLabel: '98.4% Retention Rate', velocityMultiplier: 3.5, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
  { id: 's4', stageIndex: 4, stageTitle: 'Unit Cost Deflation', metricLabel: '-42% Compute COGS per Op', velocityMultiplier: 4.8, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
];

const DEF_DEMAND = [
  { id: 'd1', stageIndex: 1, stageTitle: 'Enterprise Demand Aggregation', metricLabel: '$140M Pipeline Volume', velocityMultiplier: 1.6, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
  { id: 'd2', stageIndex: 2, stageTitle: 'Transaction Liquidity Surge', metricLabel: '185,000 TPS Peak Scale', velocityMultiplier: 2.4, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
  { id: 'd3', stageIndex: 3, stageTitle: 'Data Gravity Accrual', metricLabel: '4.8 PB Vectorized Context', velocityMultiplier: 3.8, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
  { id: 'd4', stageIndex: 4, stageTitle: 'Autonomous Revenue Flywheel', metricLabel: '142% Net Revenue Retention', velocityMultiplier: 5.2, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
];

const STAGES = [
  { step: 1, name: 'Liquidity Ignition', desc: 'Developer tooling creates supply while enterprise buyers generate early transaction demand.' },
  { step: 2, name: 'Density & Volume Surge', desc: 'Pre-built modules attract high-frequency transaction volume across distributed regions.' },
  { step: 3, name: 'Data Gravity Compounding', desc: 'Contextual memory and persistent state make platform switching prohibitively expensive.' },
  { step: 4, name: 'Sovereign Scale & Deflation', desc: 'Massive scale lowers marginal compute cost, creating an insurmountable competitive moat.' },
];

export const TwoSidedEcosystemFlywheelSlide: React.FC<{ slide?: TwoSidedEcosystemFlywheelSlideData; data?: TwoSidedEcosystemFlywheelSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const supply = data?.supplyStages?.length ? data.supplyStages : DEF_SUPPLY;
  const demand = data?.demandStages?.length ? data.demandStages : DEF_DEMAND;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const activeStage = STAGES[currentStep];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-violet-500/10 text-violet-800 dark:text-violet-300 border border-violet-500/20 flex items-center gap-2">
              <RefreshCw size={16} className="text-violet-500 animate-spin-slow" /> {data?.kicker || 'NETWORK EFFECTS & FLYWHEEL COMPRESSION'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" /> Velocity Factor: 5.2x Compound Accrual
            </span>
          </div>
          <h1 className="text-[48px] font-ubuntu font-bold tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Two-Sided Ecosystem Flywheel: Self-Reinforcing Scaling Loops'}
          </h1>
          <p className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Dual-sided platform mechanics where developer module density accelerates enterprise transaction liquidity.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Network Moat</span><span className="text-emerald-600 dark:text-emerald-400 font-bold">SELF-COMPOUNDING</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Chief Software Engineer</span><span className="text-slate-800 dark:text-slate-200 font-bold">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {STAGES.map((st, idx) => (
          <button key={st.step} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-90' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-60 text-slate-500 dark:text-slate-400'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-white dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.name}</span>
            </div>
            <span className="text-[14px] opacity-75">Loop {st.step}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto h-[480px] items-center">
        {/* Left: Supply-Side Platform Pillars */}
        <div className="col-span-5 space-y-3 plane-1-raised p-4 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md">
          <div className="text-[14px] font-mono font-bold uppercase text-violet-700 dark:text-violet-400 tracking-wider mb-2">SUPPLY SIDE: DEVELOPERS & BUILDERS</div>
          {supply.map((item, idx) => {
            const isSelected = idx === currentStep;
            return (
              <div key={item.id} className={`p-4 rounded-xl border transition-all font-mono text-[14px] flex items-center justify-between ${isSelected ? 'bg-violet-500/20 border-violet-400 ring-2 ring-violet-400 shadow-xl scale-[1.02]' : 'bg-slate-100/60 dark:bg-black/20 border-slate-200 dark:border-slate-800/60 opacity-80'}`}>
                <div>
                  <div className="text-[14px] text-slate-500 dark:text-slate-400">Step 0{item.stageIndex}</div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">{item.stageTitle}</div>
                </div>
                <div className="text-right">
                  <div className="text-violet-800 dark:text-violet-300 font-bold">{item.metricLabel}</div>
                  <div className="text-[14px] text-slate-500 dark:text-slate-400">{item.velocityMultiplier}x Velocity</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center: Flywheel Compounding Core */}
        <div className="col-span-2 plane-1-raised flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-[var(--pres-bg-card)] border border-[var(--pres-border)] backdrop-blur-md shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-[var(--pres-accent)]/20 border-2 border-[var(--pres-accent)] flex items-center justify-center text-[var(--pres-accent)] mb-3 animate-spin-slow">
            <RefreshCw size={36} />
          </div>
          <span className="font-ubuntu text-base font-bold text-slate-900 dark:text-slate-100">Flywheel Core</span>
          <span className="font-mono text-[14px] text-emerald-700 dark:text-emerald-400 mt-1">{activeStage.name}</span>
          <span className="font-mono text-[14px] text-slate-700 dark:text-slate-400 mt-2 px-2 py-1 rounded bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-slate-800">Compounding 5.2x</span>
        </div>

        {/* Right: Demand-Side Enterprise Growth */}
        <div className="col-span-5 space-y-3 plane-1-raised p-4 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md">
          <div className="text-[14px] font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400 tracking-wider mb-2">DEMAND SIDE: ENTERPRISE & BUYERS</div>
          {demand.map((item, idx) => {
            const isSelected = idx === currentStep;
            return (
              <div key={item.id} className={`p-4 rounded-xl border transition-all font-mono text-[14px] flex items-center justify-between ${isSelected ? 'bg-emerald-500/20 border-emerald-400 ring-2 ring-emerald-400 shadow-xl scale-[1.02]' : 'bg-slate-100/60 dark:bg-black/20 border-slate-200 dark:border-slate-800/60 opacity-80'}`}>
                <div>
                  <div className="text-[14px] text-slate-500 dark:text-slate-400">Step 0{item.stageIndex}</div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">{item.stageTitle}</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-800 dark:text-emerald-300 font-bold">{item.metricLabel}</div>
                  <div className="text-[14px] text-slate-500 dark:text-slate-400">{item.velocityMultiplier}x Multiplier</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase">Loop Insight:</span>
          <span className="text-[var(--pres-accent)] font-bold">{activeStage.name}: {activeStage.desc}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400">Step {currentStep + 1} of 4</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 size={16} /> Self-Reinforcing Moat</span>
        </div>
      </div>
    </div>
  );
};
