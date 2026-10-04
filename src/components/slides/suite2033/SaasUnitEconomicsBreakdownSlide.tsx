import React from 'react';
import type { SaasUnitEconomicsBreakdownSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { DollarSign, TrendingUp, ShieldCheck, CheckCircle2, PieChart, BarChart2 } from 'lucide-react';

export const SaasUnitEconomicsBreakdownSlide: React.FC<{
  slide: SaasUnitEconomicsBreakdownSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const metrics = slide?.economicMetrics || [];
  const cohorts = slide?.paybackCurves || [];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2"><DollarSign size={18} /> {slide?.kicker || 'SAAS UNIT ECONOMICS BREAKDOWN'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)]">Quarter: {slide?.reportingQuarter || 'Q4 FY2026'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-beacon-pulse inline-block" /><ShieldCheck size={16} /> Rule of 40: {slide?.ruleOf40Score || 54}%</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-[var(--pres-accent)]/40 relative overflow-hidden flex items-center justify-center"><div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[var(--pres-accent)]/60 animate-radar-sweep origin-center" /></div>
            <span className="text-[var(--pres-text-muted)]">Composite LTV:CAC:</span>
            <span className="font-bold text-[16px] text-[var(--pres-accent)]">{slide?.compositeLtvCacRatio || 6.2}x</span>
          </div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">CFO: {slide?.chiefFinancialOfficer || 'Elena Vance'}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 my-auto z-10 h-[520px]">
        <div className="grid grid-cols-2 gap-4">
          {metrics.slice(0, 4).map((m) => (
            <div key={m.id} className="plane-1-raised rounded-3xl p-6 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[14px] text-[var(--pres-text-muted)]">{m.metricLabel}</span>
                  <span className="font-mono text-[14px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-beacon-pulse" /> Top Decile</span>
                </div>
                <div className="text-[32px] font-bold text-[var(--pres-text)] my-3">{m.metricValue}</div>
                <p className="text-[14px] text-[var(--pres-text-muted)] leading-relaxed">{m.varianceExplanation}</p>
              </div>
              <div className="pt-3 border-t border-[var(--pres-border)] font-mono text-[14px] text-[var(--pres-accent)] flex items-center justify-between">
                <span>Benchmark:</span><span className="font-bold">{m.topDecileBenchmark}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="plane-1-raised rounded-3xl p-6 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[16px] font-bold text-[var(--pres-accent)] flex items-center gap-2"><BarChart2 size={18} /> Cohort Payback Trajectory</span>
              <span className="font-mono text-[14px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"><CheckCircle2 size={16} /> All Cohorts Profitable</span>
            </div>
            <div className="space-y-3 mt-4">
              {cohorts.map((c) => (
                <div key={c.id} className="p-3.5 rounded-2xl bg-[var(--pres-bg-card)] border border-[var(--pres-border)] flex items-center justify-between font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-[16px] font-bold text-[var(--pres-text)]">{c.cohortQuarter}</span>
                    <span className="text-[14px] px-2.5 py-0.5 rounded bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] font-semibold animate-sparkline-trace">{c.cacPaybackMonths} mo Payback</span>
                  </div>
                  <div className="flex items-center gap-6 text-[14px]">
                    <div><span className="text-[var(--pres-text-muted)]">LTV/CAC:</span> <span className="font-bold text-[var(--pres-text)]">{c.ltvToCacRatio}x</span></div>
                    <div><span className="text-[var(--pres-text-muted)]">Gross Margin:</span> <span className="font-bold text-emerald-600 dark:text-emerald-400">{c.grossMarginPercentage}%</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-[var(--pres-text-muted)]">
            <span className="flex items-center gap-2"><PieChart size={16} className="text-[var(--pres-accent)]" /> Blended CAC Payback: <strong className="text-[var(--pres-text)]">{slide?.blendedCacPaybackMonths || 11.4} Months</strong></span>
            <span>Gross Margin: <strong className="text-emerald-600 dark:text-emerald-400">{slide?.overallGrossMarginPercentage || 82.5}%</strong></span>
          </div>
        </div>
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-mono text-[16px] text-emerald-600 dark:text-emerald-400"><TrendingUp size={20} /> Cash Flow Positive</div>
          <div className="font-mono text-[14px] text-[var(--pres-text-muted)]">CFO Signoff: <strong className="text-[var(--pres-text)]">{slide?.chiefFinancialOfficer || 'Elena Vance'}</strong></div>
          <div className="font-mono text-[14px] text-[var(--pres-text-muted)]">Financial Audit: <strong className="text-emerald-600 dark:text-emerald-400">Certified Unqualified</strong></div>
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Executive Verification: <span className="font-bold text-[var(--pres-text)]">Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>
    </div>
  );
};
