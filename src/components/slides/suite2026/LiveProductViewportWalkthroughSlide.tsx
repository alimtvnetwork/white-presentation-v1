// lint-allow: file-size reason="LiveProductViewportWalkthroughSlide interactive mock product viewport walkthrough" max=160
import React from 'react';
import type { LiveProductViewportWalkthroughSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Laptop, CheckCircle2, Terminal, Shield, Play, MousePointer, Activity } from 'lucide-react';

const DEF_STEPS = [
  { id: 's1', stepIndex: 1, screenTitle: 'Unified Fleet Telemetry', interactionDescription: 'Real-time telemetry streaming from 4,096 distributed cluster nodes with instant anomaly detection', elementSelector: '#telemetry-cluster-heatmap', isCompleted: true, hasCheckmark: true, isPositive: true },
  { id: 's2', stepIndex: 2, screenTitle: 'Cryptographic Policy Gate', interactionDescription: 'Hardware-verified SPIFFE/SPIRE mutual TLS attestation preventing unauthorized ingress traffic', elementSelector: '#zero-trust-gate-panel', isCompleted: false, hasCheckmark: true, isPositive: true },
  { id: 's3', stepIndex: 3, screenTitle: 'Canary Deployment Pipeline', interactionDescription: 'Progressive 5% blue-green canary traffic ramp with automated latency circuit-breaker monitoring', elementSelector: '#canary-deployment-rail', isCompleted: false, hasCheckmark: true, isPositive: true },
  { id: 's4', stepIndex: 4, screenTitle: 'Automated Rollback Ledger', interactionDescription: 'Deterministic zero-downtime rollback triggered under 180ms with immutable audit cryptographic signoff', elementSelector: '#immutable-audit-ledger', isCompleted: false, hasCheckmark: true, isPositive: true },
];

export const LiveProductViewportWalkthroughSlide: React.FC<{
  slide?: LiveProductViewportWalkthroughSlideData;
  data?: LiveProductViewportWalkthroughSlideData;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const steps = data?.steps?.length ? data.steps : DEF_STEPS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), steps.length - 1);
  const activeItem = steps[currentStep] || steps[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-[14px] font-mono font-bold tracking-wider uppercase flex items-center gap-2">
              <Laptop size={16} className="text-violet-500" />
              {data?.kicker || 'LIVE PRODUCT WALKTHROUGH & INTERACTION HARNESS'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500" />
              Release {data?.productVersionName || 'v4.18.0-Enterprise'}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-[44px] font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Live Product Viewport: Autonomous Enterprise Orchestration Console'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-[16px] max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Interactive step-by-step product walkthrough demonstrating mission-critical workflow transitions and verifiable UI state fidelity.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Target Persona</span><span className="font-bold text-slate-900 dark:text-slate-100">{data?.walkthroughPersona || 'VP Infrastructure & SecOps'}</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Viewport Environment</span><span className="font-bold text-violet-500">Staging-East-01 (Isolated)</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Interactive Harness</span><span className="font-bold text-emerald-500">LIVE ATTESTED</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {steps.map((st, idx) => {
          const isActive = idx === currentStep;
          return (
            <button key={st.id} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-slate-900 dark:text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-80' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-500 dark:text-slate-400 blur-[0.5px]'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[14px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
                <span className="font-bold truncate text-[14px]">{st.screenTitle}</span>
              </div>
              <span className="text-[14px] opacity-75 font-mono truncate max-w-[120px]">{st.elementSelector}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[460px] items-stretch">
        <div className="col-span-8 plane-2-elevated rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between overflow-hidden shadow-2xl">
          <div className="bg-slate-100/90 dark:bg-slate-950/70 border-b border-[var(--pres-border)] px-4 py-2.5 flex items-center justify-between font-mono text-[14px]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-rose-500/80" /><div className="w-3 h-3 rounded-full bg-amber-500/80" /><div className="w-3 h-3 rounded-full bg-emerald-500/80" /></div>
              <span className="text-slate-600 dark:text-slate-400 text-[14px] ml-2">https://console.enterprise.sovereign/app/{activeItem.screenTitle.toLowerCase().replace(/\s+/g, '-')}</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-[14px]"><Shield size={14} /> TLS 1.3 FIPS-140-3 Validated</div>
          </div>
          <div className="p-8 flex-1 flex flex-col justify-between bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[14px] text-[var(--pres-accent)] uppercase tracking-wider block font-bold">Step {currentStep + 1} Focus Element</span>
                <h3 className="text-[26px] font-ubuntu font-bold text-slate-900 dark:text-white mt-1">{activeItem.screenTitle}</h3>
                <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 max-w-2xl mt-1 leading-relaxed">{activeItem.interactionDescription}</p>
              </div>
              <span className="font-mono text-[14px] px-3 py-1.5 rounded-lg bg-[var(--pres-accent)]/20 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 font-bold flex items-center gap-2">
                <MousePointer size={14} /> {activeItem.elementSelector}
              </span>
            </div>
            <div className="p-5 rounded-xl border-2 border-[var(--pres-accent)] bg-[var(--pres-accent)]/10 my-4 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--pres-accent)] flex items-center justify-center text-white"><Activity size={24} /></div>
                <div>
                  <div className="font-mono font-bold text-[16px] text-slate-900 dark:text-white">Active Inspector Hook: {activeItem.elementSelector}</div>
                  <div className="text-[14px] text-slate-600 dark:text-slate-300 font-poppins">Telemetry stream connected with zero-dropped buffers (100% frame stability).</div>
                </div>
              </div>
              <span className="font-mono text-[14px] px-3 py-1 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1.5">
                <CheckCircle2 size={14} /> ACTIVE IN VIEWPORT
              </span>
            </div>
            <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400 pt-2 border-t border-[var(--pres-border)]">
              <span>Rendering Engine: WebGL 2.0 / Tailwind JIT</span>
              <span>Frame Rate: 60.0 FPS Consistent</span>
            </div>
          </div>
        </div>

        <div className="col-span-4 plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold text-violet-500 dark:text-violet-400 flex items-center gap-2"><Terminal size={16} />STEP EXECUTION LOG</span>
            <span className="font-mono text-[14px] px-2.5 py-1 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">4 Steps Total</span>
          </div>
          <div className="space-y-3 font-mono text-[14px] my-3">
            {steps.map((st, idx) => {
              const isPast = idx < currentStep;
              const isCurrent = idx === currentStep;
              return (
                <div key={st.id} className={`p-3 rounded-xl border transition-all ${isCurrent ? 'bg-[var(--pres-accent)]/15 border-[var(--pres-accent)] shadow-sm' : isPast ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300' : 'bg-slate-100/80 dark:bg-slate-800/40 border-[var(--pres-border)] opacity-50'}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[14px]">Step {st.stepIndex}: {st.screenTitle}</span>
                    <span className={`text-[14px] font-bold ${isCurrent ? 'text-[var(--pres-accent)]' : isPast ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}`}>{isPast ? 'COMPLETED' : isCurrent ? 'ACTIVE' : 'QUEUED'}</span>
                  </div>
                  <div className="text-[14px] text-slate-500 dark:text-slate-400 mt-1 truncate">{st.elementSelector}</div>
                </div>
              );
            })}
          </div>
          <div className="p-3.5 rounded-xl bg-violet-500/10 border border-violet-500/20 font-mono text-[14px] text-violet-700 dark:text-violet-300 flex items-center gap-2">
            <Play size={15} /> Continuous Autonomous Simulation Mode Active
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-[14px] font-mono pt-3 border-t border-[var(--pres-border)]">
        <span style={{ color: 'var(--pres-text-muted)' }}>Slide 10 • Live Product Viewport Walkthrough • 16:9 4K Precision Standard</span>
        <span className="text-violet-500 font-bold">Dynamic Step {currentStep + 1} of {steps.length}</span>
      </div>
    </div>
  );
};
