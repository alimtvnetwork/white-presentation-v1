// lint-allow: file-size reason="ExecutiveCompensationClawbackSlide kinetic 4-step SEC 10D-1 governance orchestration" max=120
import React from 'react';
import type { ExecutiveCompensationClawbackMatrixSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createExecutiveCompensationClawbackSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Scale, CheckCircle2, ShieldCheck, Activity, Award, FileText } from 'lucide-react';

export const ExecutiveCompensationClawbackSlide: React.FC<{ slide?: ExecutiveCompensationClawbackMatrixSlideData; data?: ExecutiveCompensationClawbackMatrixSlideData }> = ({ slide, data: pData }) => {
  const fallback = createExecutiveCompensationClawbackSlide('default-executive-compensation-clawback');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data.clawbackStages?.length ? data.clawbackStages : fallback.clawbackStages;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const hurdles = data.hurdleMetrics?.length ? data.hurdleMetrics : fallback.hurdleMetrics;
  const covenants = data.clawbackCovenants?.length ? data.clawbackCovenants : fallback.clawbackCovenants;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Scale size={15} className="text-violet-500" />{data.kicker || 'BOARDROOM GOVERNANCE & SEC COMPLIANCE'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {data.companyTicker || 'NASDAQ: APEX'} • {data.planFiscalYear || 'FY2026 LTIP'}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Executive Compensation Clawback Matrix: SEC Rule 10D-1 Compliance'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Performance hurdles, relative TSR rankings, vesting multipliers, and no-fault recovery covenants'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">LTIP Pool</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.totalExecutivePoolFormatted || '$38.5M'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Relative TSR</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">{data.relativeTsrPercentile || 88}th %ile</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-[10px] opacity-75 truncate max-w-[120px]">{st.auditSignoffBody}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-400 block mb-1">01. FINANCIAL HURDLES</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">GAAP & FCF Audits</h3></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {hurdles.map((h, i) => (
              <div key={i} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block">{h.metricName}</span>
                <div className="flex justify-between items-center text-slate-200 font-bold"><span>{h.actualAchievedFormatted}</span><span className="text-emerald-400 text-[10px]">MET</span></div>
                <div className="text-[10px] text-sky-300">Target: {h.targetThresholdFormatted} (Payout: {h.payoutMultiplierPercent}%)</div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-slate-400">Compensation Committee</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 block mb-1">02. RELATIVE TSR RANK</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">S&P Peer Benchmark</h3></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-slate-400 text-[10px] block">3-YEAR COMPOUNDED TSR</span>
              <div className="text-2xl font-bold text-emerald-400">88th Percentile</div>
              <div className="text-[11px] text-slate-300">Top Quartile vs S&P Tech Software</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">TSR Multiplier Cap:</span><strong className="text-emerald-400">175%</strong></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-slate-400">Aon Hewitt Equity Group</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-400 block mb-1">03. PSU WATERFALL</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">Vesting Multiplier Gates</h3></div>
          <div className="space-y-2 font-mono text-xs my-3">
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Base PSU Pool:</span><span className="text-slate-200 font-bold">$24.0M</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Financial Multiplier:</span><span className="text-emerald-400 font-bold">1.25x</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">TSR Performance Gate:</span><span className="text-emerald-400 font-bold">1.28x</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Final Adjusted Pool:</span><span className="text-emerald-400 font-bold">$38.5M</span></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-slate-400">Principal Independent Actuary</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 block mb-1">04. SEC 10D-1 COVENANT</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">No-Fault Recovery</h3></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {covenants.map((cov, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <span className="text-emerald-400 text-xs font-bold flex items-center gap-1.5"><Award size={14} /> MANDATORY RECOVERY</span>
                <div className="text-[11px] text-slate-300">{cov.covenantTitle}</div>
                <div className="text-[10px] text-slate-400">Lookback Period: {cov.lookbackPeriodYears} Years (Rolling)</div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-emerald-400 flex items-center justify-between"><span>Enforceability:</span><span className="font-bold flex items-center gap-1"><FileText size={12} /> BINDING</span></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> SEC Rule 10D-1 Compliant</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Dodd-Frank Recovery Shield: <strong className="text-slate-200">NO-FAULT ENFORCEABLE</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Board Committee Signoff: <strong className="text-emerald-400">UNANIMOUS RATIFICATION</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span>
          <span>Step {currentStep + 1} of {stages.length}</span>
        </div>
      </div>
    </div>
  );
};
