// lint-allow: file-size reason="SloErrorBudgetBurnWaterfallSlide interactive SLO error budget waterfall analysis" max=160
import React from 'react';
import type { SloErrorBudgetBurnWaterfallSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Gauge, CheckCircle2, AlertTriangle, ShieldCheck, Flame, Clock } from 'lucide-react';

const DEF_INCIDENTS = [
  { id: 'i1', incidentTitle: 'Cross-Region TLS Mutual Handshake Expiry', serviceImpacted: 'Edge Ingress Gateway', burnRateMultiplier: 12.5, budgetDepletedPercent: 24, durationMinutes: 14, isBudgetExhausted: false, hasAutomaticRollbackExecuted: true, isPositive: true },
  { id: 'i2', incidentTitle: 'Shard Consensus Deadlock on Massive Bulk Write', serviceImpacted: 'Planetary Raft KV Mesh', burnRateMultiplier: 22.0, budgetDepletedPercent: 34, durationMinutes: 9, isBudgetExhausted: false, hasAutomaticRollbackExecuted: true, isPositive: true },
  { id: 'i3', incidentTitle: 'Global CDN Origin DNS Cache Poisoning', serviceImpacted: 'Public Static Assets Cache', burnRateMultiplier: 5.4, budgetDepletedPercent: 12, durationMinutes: 22, isBudgetExhausted: false, hasAutomaticRollbackExecuted: true, isPositive: true },
];

export const SloErrorBudgetBurnWaterfallSlide: React.FC<{
  slide?: SloErrorBudgetBurnWaterfallSlideData;
  data?: SloErrorBudgetBurnWaterfallSlideData;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const incidents = data?.incidents?.length ? data.incidents : DEF_INCIDENTS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), incidents.length - 1);
  const activeIncident = incidents[currentStep] || incidents[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-[14px] font-mono font-bold tracking-wider uppercase flex items-center gap-2">
              <Gauge size={16} className="text-violet-500" />
              {data?.kicker || 'SITE RELIABILITY & ERROR BUDGET TELEMETRY'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500" />
              SLO Target: {data?.targetReliabilityPercent ?? 99.99}% Four-Nines
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-[44px] font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'SLO Error Budget Burn Waterfall: Incident Amortization Engine'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-[16px] max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Algorithmic error budget burn rate tracking with automated rollback execution and circuit-breaking protection.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Remaining Budget</span><span className="font-bold text-emerald-500">{data?.remainingBudgetPercent ?? 30}% Solvent</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">SLO Breach Status</span><span className="font-bold text-emerald-500">ZERO BREACH</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Auto-Rollback</span><span className="font-bold text-violet-500">ENFORCED (&lt;30s)</span></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 z-10 my-3">
        {incidents.map((inc, idx) => {
          const isActive = idx === currentStep;
          return (
            <button key={inc.id} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-slate-900 dark:text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-80' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-500 dark:text-slate-400 blur-[0.5px]'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[14px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
                <span className="font-bold truncate text-[14px]">{inc.incidentTitle.split(' ')[0]}</span>
              </div>
              <span className="text-[14px] font-bold text-rose-600 dark:text-rose-400">-{inc.budgetDepletedPercent}% Budget</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[460px] items-stretch">
        <div className="col-span-5 plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold text-violet-500 dark:text-violet-400">ERROR BUDGET DEPLETION WATERFALL</span>
            <span className="font-mono text-[14px] px-2.5 py-1 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">Monthly Cycle</span>
          </div>
          <div className="space-y-4 my-auto font-mono text-[14px]">
            <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)]">
              <div className="flex justify-between items-center mb-1 text-[14px]"><span className="text-slate-500 dark:text-slate-400">Initial Error Budget Pool</span><span className="font-bold text-slate-900 dark:text-white">100.0% (4.32 min allowance)</span></div>
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700/50 overflow-hidden"><div className="h-full bg-emerald-500 w-full" /></div>
            </div>
            {incidents.map((inc, idx) => {
              const isSelected = idx === currentStep;
              return (
                <div key={inc.id} onClick={() => jumpToStep(idx)} className={`p-3.5 rounded-xl border transition-all cursor-pointer ${isSelected ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/10 shadow-sm' : 'border-[var(--pres-border)] bg-slate-100/80 dark:bg-slate-800/40'}`}>
                  <div className="flex justify-between items-center mb-1 text-[14px]">
                    <span className="font-bold text-slate-900 dark:text-slate-100 truncate">{inc.serviceImpacted}</span>
                    <span className="text-rose-600 dark:text-rose-400 font-bold">-{inc.budgetDepletedPercent}% ({inc.burnRateMultiplier}x burn)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700/50 overflow-hidden">
                    <div className="h-full bg-rose-500" style={{ width: `${inc.budgetDepletedPercent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono text-[14px] text-emerald-700 dark:text-emerald-300 flex justify-between">
            <span>Remaining Buffer:</span>
            <span className="font-bold">{data?.remainingBudgetPercent ?? 30}% (Solvent)</span>
          </div>
        </div>

        <div className="col-span-7 plane-2-elevated p-6 rounded-2xl border-2 border-[var(--pres-accent)] bg-[var(--pres-bg-card)] shadow-2xl flex flex-col justify-between scale-[1.01]">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold text-[var(--pres-accent)] flex items-center gap-2">
              <Flame size={16} /> INCIDENT ROOT CAUSE & TELEMETRY
            </span>
            <span className="font-mono text-[14px] px-2.5 py-1 rounded bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 font-bold">Incident {currentStep + 1} of {incidents.length}</span>
          </div>
          <div className="space-y-4 font-mono text-[14px] my-3">
            <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)] space-y-1">
              <span className="text-[14px] text-slate-500 dark:text-slate-400 block uppercase">Incident Title & Target Service</span>
              <h3 className="text-[24px] font-ubuntu font-bold text-slate-900 dark:text-white leading-tight">{activeIncident.incidentTitle}</h3>
              <div className="text-[14px] text-violet-600 dark:text-violet-400 font-bold">Target Service: {activeIncident.serviceImpacted}</div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)]"><span className="text-[14px] text-slate-500 uppercase block">Burn Multiplier</span><span className="text-[26px] font-bold text-rose-600 dark:text-rose-400">{activeIncident.burnRateMultiplier}x</span></div>
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)]"><span className="text-[14px] text-slate-500 uppercase block">Outage Duration</span><span className="text-[26px] font-bold text-slate-900 dark:text-white">{activeIncident.durationMinutes} min</span></div>
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)]"><span className="text-[14px] text-slate-500 uppercase block">Budget Depleted</span><span className="text-[26px] font-bold text-rose-600 dark:text-rose-400">-{activeIncident.budgetDepletedPercent}%</span></div>
            </div>
            <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)] space-y-1">
              <span className="text-[14px] text-emerald-600 dark:text-emerald-400 font-bold block uppercase flex items-center gap-1.5"><ShieldCheck size={16} /> Automated Mitigation Guard</span>
              <div className="font-poppins text-[14px] text-slate-700 dark:text-slate-100">Autonomous circuit breaker isolated faulty ingress route and triggered blue-green rollback in &lt;18 seconds.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)] font-mono text-[14px] text-slate-600 dark:text-slate-300 flex items-center gap-2">
            <Clock size={16} className="text-emerald-500" /> Mean Time to Recovery (MTTR) achieved within 15-minute high-severity SLA limit.
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-[14px] font-mono pt-3 border-t border-[var(--pres-border)]">
        <span style={{ color: 'var(--pres-text-muted)' }}>Slide 14 • SLO Error Budget Burn Waterfall • 16:9 4K Precision Standard</span>
        <span className="text-violet-500 font-bold">Dynamic Incident {currentStep + 1} of {incidents.length}</span>
      </div>
    </div>
  );
};
