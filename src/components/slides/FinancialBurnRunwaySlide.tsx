import React from 'react';
import type { FinancialBurnRunwaySlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { RunwayHorizonBar } from './runway/RunwayHorizonBar';
import { TrendingUp, DollarSign, PieChart, ShieldCheck, Flame } from 'lucide-react';

export const FinancialBurnRunwaySlide: React.FC<{ slide: FinancialBurnRunwaySlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const months = slide.months || [];
  const expenses = slide.expenseAllocations || [];
  const maxReserves = Math.max(...months.map((m) => m.cashReservesUsd), slide.currentReservesUsd || 8000000);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <DollarSign size={12} /> {slide.kicker || 'CAPITAL RUNWAY HORIZON'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            {slide.runwayMonthsRemaining ?? 22} Months Capital Runway | Target Breakeven: M{slide.breakevenMonthTarget ?? 14}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.title || 'Capital Runway Horizon & Financial Trajectory'}</h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || '22 Months Operating Runway with Breakeven at Month 14 and 86% Gross Margins.'}
        </p>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl border border-slate-800 bg-slate-900/60 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span>Reserves: <strong className="text-emerald-400 font-bold">${((slide.currentReservesUsd || 8400000) / 1000000).toFixed(2)}M</strong></span>
          <span>Net Burn: <strong className="text-rose-400 font-bold">-${Math.round((slide.monthlyNetBurnUsd || 185000) / 1000)}k/mo</strong></span>
          <span>Gross Margin: <strong className="text-cyan-300 font-bold">{slide.grossMarginPercent ?? 86.4}%</strong></span>
        </div>
        <span className="flex items-center gap-1 text-emerald-400 font-bold">
          <ShieldCheck size={14} /> Audited Financial Model
        </span>
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch h-[500px]">
        <div className="col-span-8 plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-mono text-xs">
            <span className="flex items-center gap-2 font-bold text-slate-300"><TrendingUp size={14} className="text-emerald-400" /> Cash Reserves & Runway Trajectory</span>
            <span className="text-slate-400">{months.length} Forecast Months</span>
          </div>
          <div className="flex items-end gap-2 flex-1 pt-6 pb-2 px-2">
            {months.map((month) => (
              <RunwayHorizonBar key={month.monthIndex} month={month} maxReserves={maxReserves} />
            ))}
          </div>
        </div>

        <div className="col-span-4 plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="flex items-center gap-2 font-bold text-slate-300"><PieChart size={14} className="text-amber-400" /> Expense Allocation</span>
            <span className="text-slate-400">{expenses.length} Categories</span>
          </div>
          <div className="space-y-3 overflow-y-auto flex-1 pr-1">
            {expenses.map((exp) => (
              <div key={exp.id} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-200">{exp.category}</span>
                  <span className="text-emerald-400 font-bold">{exp.percentageShare}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div style={{ width: `${exp.percentageShare}%` }} className="bg-emerald-400 h-full rounded-full" />
                </div>
                <span className="text-[10px] text-slate-400">${(exp.monthlyAmountUsd / 1000).toFixed(0)}k / month</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold"><Flame size={14} /> Sovereign Capital Model | Series A Closed | Zero Deficit Crossover</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Status: Capital Efficient</span>
      </div>
    </div>
  );
};
