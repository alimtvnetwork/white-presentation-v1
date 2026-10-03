// lint-allow: file-size reason="SaasNetRevenueRetentionSlide kinetic 4-step orchestration" max=120
import React from 'react';
import type { SaasNetRevenueRetentionSlideData } from '../../../types/kineticRevolutionArchetypes';
import { createSaasNetRevenueRetentionSlide } from '../../../utils/kineticRevolutionFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { TrendingUp, CheckCircle2, ShieldCheck, DollarSign, Layers } from 'lucide-react';

const STAGES = [
  { index: 0, title: 'Q1 Baseline (119%)', desc: '$24.0M starting ARR core' },
  { index: 1, title: 'Q2 Cross-Sell (128%)', desc: '+$6.2M expansion velocity' },
  { index: 2, title: 'Q3 Enterprise (137%)', desc: '+$8.1M hyperscale usage' },
  { index: 3, title: 'Q4 Climax (146%)', desc: '$51.7M ending compound ARR' },
];

export const SaasNetRevenueRetentionSlide: React.FC<{ slide?: SaasNetRevenueRetentionSlideData; data?: SaasNetRevenueRetentionSlideData }> = ({ slide, data: pData }) => {
  const fallback = createSaasNetRevenueRetentionSlide('default-saas-nrr');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const cohorts = data.cohorts?.length ? data.cohorts : fallback.cohorts;
  const segments = data.segments?.length ? data.segments : fallback.segments;
  const drivers = data.drivers?.length ? data.drivers : fallback.drivers;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <TrendingUp size={15} className="text-violet-500" />
              {data.kicker || 'ENTERPRISE SAAS METRICS'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> Blended NRR: {data.blendedNrrPercent}% Compounding
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'SaaS Net Revenue Retention (NRR) Cohort: 146% Compounding Orbit'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Longitudinal quarterly cohort waterfall tracking gross revenue retention, seat expansions, usage upsells, and sub-2% logo churn mechanics.'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Gross Retention</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.grossRetentionRatePercent}% GRR</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Expansion Trend</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">{data.expansionVelocityTrend}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Audited By</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
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
        <div className="col-span-7 grid grid-cols-2 gap-3">
          {cohorts.map((c, i) => (
            <div key={c.id} className={`plane-2-elevated p-4 rounded-2xl border flex flex-col justify-between ${i === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/10 shadow-[0_0_12px_var(--pres-accent)]' : 'border-slate-700/60'}`}>
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/40 font-mono text-xs">
                <span className="font-bold text-slate-100 flex items-center gap-1.5"><DollarSign size={14} className="text-emerald-400" /> {c.cohortQuarter}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">{c.nrrPercent}% NRR</span>
              </div>
              <div className="space-y-1.5 my-2 font-mono text-xs">
                <div className="flex justify-between text-slate-400 text-[11px]"><span>Starting ARR</span><span className="text-slate-200">{c.startingArrFormatted}</span></div>
                <div className="flex justify-between text-slate-400 text-[11px]"><span>Expansion</span><span className="text-emerald-400 font-bold">{c.expansionArrFormatted}</span></div>
                <div className="flex justify-between text-slate-400 text-[11px]"><span>Churn / Contraction</span><span className="text-rose-400">{c.churnArrFormatted}</span></div>
                <div className="flex justify-between text-slate-200 font-bold pt-1 border-t border-slate-700/40"><span>Ending ARR</span><span className="text-sky-300">{c.endingArrFormatted}</span></div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-5 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex-1 flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2"><Layers size={14} /> Tier Retention & Expansion Drivers</span>
            <div className="space-y-2 my-2">
              {segments.map((s) => (
                <div key={s.id} className="p-2.5 rounded-xl border border-slate-700/50 bg-slate-800/20 font-mono text-xs flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-200 block">{s.tierName}</span>
                    <span className="text-[10px] text-slate-400">{s.accountCount} Accounts • Avg {s.averageArrFormatted}</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-400">{s.nrrRate}% NRR</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-700/40 space-y-1 font-mono text-[11px]">
              {drivers.map((d) => (
                <div key={d.id} className="flex justify-between text-slate-300">
                  <span>{d.driverCategory}</span>
                  <span className="text-emerald-400 font-bold">+{d.impactBps} bps</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> SaaS Unit Metrics Verified</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Logo Churn: <strong className="text-slate-200">&lt; 1.8% Annualized</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Top Quartile Outperformance: <span className="text-emerald-400">+22% vs Bessemer Cloud Index</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Stage: {STAGES[currentStep].title}</span>
          <span>Step {currentStep + 1} of {STAGES.length}</span>
        </div>
      </div>
    </div>
  );
};
