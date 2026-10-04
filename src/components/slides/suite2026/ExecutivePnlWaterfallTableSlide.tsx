// lint-allow: file-size reason="ExecutivePnlWaterfallTableSlide kinetic waterfall financial bridge" max=160
import React from 'react';
import type { ExecutivePnlWaterfallTableSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { TrendingUp, CheckCircle2, DollarSign, ShieldCheck, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const DEF_ROWS = [
  { id: 'r1', label: 'Gross Contract Revenue', category: 'Revenue', amountMillions: 142.5, variancePercent: 18.4, isPositive: true, isSubtotal: false, hasAuditVerification: true },
  { id: 'r2', label: 'Hosting & Cloud Infrastructure', category: 'COGS', amountMillions: -24.8, variancePercent: -3.2, isPositive: false, isSubtotal: false, hasAuditVerification: true },
  { id: 'r3', label: 'Gross Margin Baseline', category: 'Subtotal', amountMillions: 117.7, variancePercent: 14.1, isPositive: true, isSubtotal: true, hasAuditVerification: true },
  { id: 'r4', label: 'Research & Platform Engineering', category: 'OpEx', amountMillions: -38.2, variancePercent: 4.5, isPositive: false, isSubtotal: false, hasAuditVerification: true },
  { id: 'r5', label: 'Enterprise GTM & Marketing', category: 'OpEx', amountMillions: -31.4, variancePercent: -6.1, isPositive: false, isSubtotal: false, hasAuditVerification: true },
  { id: 'r6', label: 'General & Administrative', category: 'OpEx', amountMillions: -14.6, variancePercent: 1.2, isPositive: false, isSubtotal: false, hasAuditVerification: true },
  { id: 'r7', label: 'Adjusted EBITDA Delivery', category: 'Final', amountMillions: 33.5, variancePercent: 28.6, isPositive: true, isSubtotal: true, hasAuditVerification: true },
];

const STAGES = [
  { step: 1, name: 'Gross Revenue Ingress', range: ['r1', 'r2', 'r3'], desc: 'Top-line enterprise contracts and hosting COGS' },
  { step: 2, name: 'Core OpEx Allocation', range: ['r4'], desc: 'R&D investments in autonomous platforms' },
  { step: 3, name: 'Go-to-Market Scale', range: ['r5', 'r6'], desc: 'Sales efficiency & G&A leverage' },
  { step: 4, name: 'Adjusted EBITDA Realization', range: ['r7'], desc: 'Audited operating cash flow delivery' },
];

export const ExecutivePnlWaterfallTableSlide: React.FC<{ slide?: ExecutivePnlWaterfallTableSlideData; data?: ExecutivePnlWaterfallTableSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const rows = data?.rows?.length ? data.rows : DEF_ROWS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const activeStage = STAGES[currentStep];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <TrendingUp size={16} className="text-emerald-500" /> {data?.kicker || 'FINANCIAL PERFORMANCE & P&L BRIDGE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <DollarSign size={14} /> Period: {data?.fiscalPeriod || 'Q3 FY26'}
            </span>
          </div>
          <h1 className="text-[48px] font-ubuntu font-bold tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Executive P&L Waterfall Bridge: Revenue to EBITDA'}
          </h1>
          <p className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Sequential financial realization table with audited line-item variance and operating cash margin expansion.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Net EBITDA</span><span className="text-emerald-600 dark:text-emerald-400 font-bold">${data?.netEbitdaMillions || 33.5}M (+28.6%)</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Chief Software Engineer</span><span className="text-slate-800 dark:text-slate-200 font-bold">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {STAGES.map((st, idx) => (
          <button key={st.step} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-90' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-60 text-slate-500 dark:text-slate-400'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-white dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.name}</span>
            </div>
            <span className="text-[14px] opacity-75">Stage {st.step}</span>
          </button>
        ))}
      </div>

      <div className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 z-10 my-auto shadow-xl">
        <div className="grid grid-cols-12 gap-4 pb-3 border-b border-[var(--pres-border)] font-mono text-[14px] font-bold text-slate-500 dark:text-slate-400 uppercase">
          <div className="col-span-4">Line Item Category</div>
          <div className="col-span-2 text-right">Amount (USD)</div>
          <div className="col-span-2 text-right">YoY Variance</div>
          <div className="col-span-3 text-center">Waterfall Magnitude</div>
          <div className="col-span-1 text-center">Audit</div>
        </div>
        <div className="space-y-2 mt-3 font-mono text-[14px]">
          {rows.map((row) => {
            const isHighlighted = activeStage.range.includes(row.id);
            const barWidthPercent = Math.min(100, Math.round((Math.abs(row.amountMillions) / 150) * 100));
            return (
              <div key={row.id} className={`grid grid-cols-12 gap-4 items-center p-3 rounded-xl border transition-all ${isHighlighted ? 'bg-[var(--pres-accent)]/15 border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)] scale-[1.01] shadow-lg' : row.isSubtotal ? 'bg-slate-100 dark:bg-slate-800/40 border-slate-300 dark:border-slate-700/60 font-bold' : 'border-transparent hover:bg-slate-100/60 dark:hover:bg-slate-800/20'}`}>
                <div className="col-span-4 flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px]">[{row.category}]</span>
                  <span className={`font-semibold ${row.isSubtotal ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-800 dark:text-slate-200'}`}>{row.label}</span>
                </div>
                <div className={`col-span-2 text-right font-bold ${row.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                  {row.amountMillions > 0 ? `$${row.amountMillions.toFixed(1)}M` : `($${Math.abs(row.amountMillions).toFixed(1)}M)`}
                </div>
                <div className="col-span-2 text-right flex items-center justify-end gap-1 font-semibold">
                  {row.variancePercent && row.variancePercent > 0 ? (
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center"><ArrowUpRight size={14} /> +{row.variancePercent}%</span>
                  ) : (
                    <span className="text-rose-600 dark:text-rose-400 flex items-center"><ArrowDownRight size={14} /> {row.variancePercent}%</span>
                  )}
                </div>
                <div className="col-span-3 px-3">
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${row.isPositive ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ width: `${barWidthPercent}%` }} />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center">
                  <span className="text-emerald-600 dark:text-emerald-400" title="Audited Financials"><ShieldCheck size={16} /></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3"><span className="text-slate-500 dark:text-slate-400 uppercase">Focus Stage:</span><span className="text-[var(--pres-accent)] font-bold">{activeStage.name} — {activeStage.desc}</span></div>
        <div className="flex items-center gap-4"><span className="text-slate-500 dark:text-slate-400">Step {currentStep + 1} of 4</span><span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 size={16} /> GAAP Compliant</span></div>
      </div>
    </div>
  );
};
