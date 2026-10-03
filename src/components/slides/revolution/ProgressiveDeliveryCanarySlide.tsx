// lint-allow: file-size reason="ProgressiveDeliveryCanarySlide kinetic 4-step orchestration" max=120
import React from 'react';
import type { ProgressiveDeliveryCanarySlideData } from '../../../types/kineticRevolutionArchetypes';
import { createProgressiveDeliveryCanarySlide } from '../../../utils/kineticRevolutionFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { GitMerge, CheckCircle2, ShieldCheck, AlertTriangle, Activity } from 'lucide-react';

const STAGES = [
  { index: 0, title: 'Warmup (5%)', desc: 'Baseline shadow error budget' },
  { index: 1, title: 'Early Ramp (25%)', desc: 'P99 latency & 5xx verification' },
  { index: 2, title: 'Majority Soak (50%)', desc: 'DB connection contention check' },
  { index: 3, title: 'Promotion (100%)', desc: 'Zero-downtime full release' },
];

export const ProgressiveDeliveryCanarySlide: React.FC<{ slide?: ProgressiveDeliveryCanarySlideData; data?: ProgressiveDeliveryCanarySlideData }> = ({ slide, data: pData }) => {
  const fallback = createProgressiveDeliveryCanarySlide('default-canary-gate');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const gates = data.metricGates?.length ? data.metricGates : fallback.metricGates;
  const triggers = data.rollbackTriggers?.length ? data.rollbackTriggers : fallback.rollbackTriggers;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <GitMerge size={15} className="text-violet-500" />
              {data.kicker || 'DEPLOYMENT ORCHESTRATION'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> Canary: {data.releaseVersion} • Baseline: {data.baselineVersion}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Progressive Delivery Canary Gate: Traffic Shift & SLO Automation'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Continuous deployment confidence gates executing algorithmic canary traffic shifts from 5% to 100% with automated Prometheus SLO rollback.'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Current Traffic</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.stages[currentStep]?.trafficPercent ?? 25}% Shift</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Analysis Window</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">15m Rolling Prometheus</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Auto-Rollback</span><span className="text-xs font-bold text-emerald-400">Armed & Healthy</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {STAGES.map((st, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          return (
            <button key={st.index} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : isCompleted ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : isCompleted ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{isCompleted ? '✓' : idx + 1}</span>
                <span className="font-bold">{st.title}</span>
              </div>
              <span className="text-[10px] opacity-75 truncate max-w-[130px]">{st.desc}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-5 z-10 my-auto h-[490px] items-stretch">
        <div className="col-span-7 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex-1 flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2"><Activity size={14} /> Prometheus SLO Metric Gates</span>
            <div className="grid grid-cols-2 gap-3 my-2">
              {gates.map((g) => (
                <div key={g.id} className="p-3 rounded-xl border border-slate-700/50 bg-slate-800/20 font-mono text-xs flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-200">{g.metricName}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">{g.sloStatus}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Threshold: {g.threshold}</span>
                    <span className="text-slate-100 font-bold">{g.currentValue}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-black/20 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>Traffic Shift: <strong className="text-emerald-400">{data.stages[currentStep]?.trafficPercent ?? 25}% Canary / {100 - (data.stages[currentStep]?.trafficPercent ?? 25)}% Baseline</strong></span>
              <span className="text-sky-300 font-bold">Error Budget Consumed: 0.24%</span>
            </div>
          </div>
        </div>

        <div className="col-span-5 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex-1 flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2"><AlertTriangle size={14} /> Automated Circuit Breakers</span>
            <div className="space-y-2 my-2">
              {triggers.map((t) => (
                <div key={t.id} className="p-3 rounded-xl border border-slate-700/40 bg-slate-800/20 font-mono text-xs flex flex-col gap-1">
                  <div className="flex justify-between items-center text-slate-300 font-bold">
                    <span>{t.triggerCondition}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">Armed</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Action: {t.action}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-black/20 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>Gate Officer: <strong>Alim Ul Karim (Chief Software Engineer)</strong></span>
              <span className="text-emerald-400 font-bold">Rollout Status: STABLE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Progressive Canary Verification Engine</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>P99 Latency: <strong className="text-slate-200">62 ms</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>HTTP 5xx Rate: <span className="text-emerald-400">0.012% (Target &lt; 0.05%)</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Stage: {STAGES[currentStep].title}</span>
          <span>Step {currentStep + 1} of {STAGES.length}</span>
        </div>
      </div>
    </div>
  );
};
