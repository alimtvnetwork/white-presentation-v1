// lint-allow: file-size reason="DeveloperFrictionDxSlide kinetic 4-step orchestration" max=120
import React from 'react';
import type { DeveloperFrictionDxSlideData } from '../../../types/kineticRevolutionArchetypes';
import { createDeveloperFrictionDxSlide } from '../../../utils/kineticRevolutionFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Terminal, CheckCircle2, ShieldCheck, Gauge, Wrench } from 'lucide-react';

const STAGES = [
  { index: 0, title: 'Inner Loop HMR', desc: 'Sub-50ms instant reload' },
  { index: 1, title: 'Remote Caching', desc: '88.5% cache hits' },
  { index: 2, title: 'Parallel CI Sharding', desc: 'PR verification in 3.2 min' },
  { index: 3, title: 'Continuous Release', desc: '18 deploys/day Elite DORA' },
];

export const DeveloperFrictionDxSlide: React.FC<{ slide?: DeveloperFrictionDxSlideData; data?: DeveloperFrictionDxSlideData }> = ({ slide, data: pData }) => {
  const fallback = createDeveloperFrictionDxSlide('default-developer-friction');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const points = data.frictionPoints?.length ? data.frictionPoints : fallback.frictionPoints;
  const metrics = data.metrics?.length ? data.metrics : fallback.metrics;
  const toolchains = data.toolchains?.length ? data.toolchains : fallback.toolchains;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Terminal size={15} className="text-violet-500" />
              {data.kicker || 'DEVELOPER EXPERIENCE & DORA'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> Composite DX Score: {data.compositeDxScore} / 100 (Elite)
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Developer Friction & DX Telemetry: Inner-Loop Latency Optimization'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Engineering productivity analytics quantifying local build latency, remote CI bottlenecks, and DORA Elite cycle time recovery.'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Org Scale</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.totalDeveloperCount} Engineers</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Hours Recovered</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">42,500 hrs/yr</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Annual ROI</span><span className="text-xs font-bold text-emerald-400">$4.8M Recovered</span></div>
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
        <div className="col-span-6 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex-1 flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2"><Wrench size={14} /> Remediated Engineering Friction Points</span>
            <div className="space-y-2 my-2">
              {points.map((p) => (
                <div key={p.id} className="p-3 rounded-xl border border-slate-700/50 bg-slate-800/20 font-mono text-xs flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-200 block">{p.workflowStage}</span>
                    <span className="text-[11px] text-slate-400">{p.painPointDescription}</span>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <span className="text-emerald-400 font-bold block">{p.weeklyHoursLost}h Saved/Wk</span>
                    <span className="text-[10px] text-slate-400">Remediated</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-black/20 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>Audited by: <strong>Alim Ul Karim (Chief Software Engineer)</strong></span>
              <span className="text-emerald-400 font-bold">Local Cache Acceleration: ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="col-span-6 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex-1 flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2"><Gauge size={14} className="text-emerald-400" /> DORA Elite Telemetry & Toolchains</span>
            <div className="grid grid-cols-2 gap-2 my-2">
              {metrics.map((m) => (
                <div key={m.id} className="p-2.5 rounded-xl border border-slate-700/50 bg-slate-800/20 font-mono text-xs">
                  <span className="text-slate-400 text-[10px] block">{m.metricName}</span>
                  <span className="text-lg font-bold text-slate-100 block my-0.5">{m.currentP95Value}</span>
                  <span className="text-[10px] text-emerald-400 font-bold">Target: {m.targetP95Value}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-700/40 space-y-1 font-mono text-[11px]">
              {toolchains.map((t) => (
                <div key={t.id} className="flex justify-between text-slate-300">
                  <span>{t.toolName}</span>
                  <span className="text-emerald-400 font-bold">{t.executionSeconds}s ({t.cacheHitPercent}% cache hit)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> DORA Elite Velocity Metric Gated</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Local HMR Latency: <strong className="text-slate-200">48 ms P95</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Pre-Merge CI Duration: <span className="text-emerald-400">3.2 Minutes</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Stage: {STAGES[currentStep].title}</span>
          <span>Step {currentStep + 1} of {STAGES.length}</span>
        </div>
      </div>
    </div>
  );
};
