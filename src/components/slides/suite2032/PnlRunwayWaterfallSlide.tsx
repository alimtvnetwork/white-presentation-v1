import React from 'react';
import type { PnlRunwayWaterfallSlideData } from '../../../types/suite2032Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { TrendingDown, TrendingUp, DollarSign, ShieldCheck, Activity, Calendar } from 'lucide-react';

export const PnlRunwayWaterfallSlide: React.FC<{
  slide: PnlRunwayWaterfallSlideData;
  activeStep?: number;
}> = ({ slide, activeStep: propStep }) => {
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = slide?.waterfallStages || [];
  const currentStep = Math.min(Math.max(0, propStep ?? storeStep ?? 0), Math.max(stages.length - 1, 0));
  const activeStage = stages[currentStep] || stages[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-2">
              <Activity size={16} /> {slide?.kicker || 'CAPITAL ALLOCATION & CASH RUNWAY'}
            </span>
            <span className="font-mono text-[14px] px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-bold">
              <Calendar size={14} /> Runway Horizon: {slide?.runwayMonthsRemaining || 44} Months
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">{slide?.fiscalPeriod || 'FY2026-FY2027'}</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-slate-400 mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-[14px] bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-slate-300">
          <span>Starting: <strong className="text-slate-100">${slide?.startingCashBalanceMillionUsd || 84.5}M</strong></span>
          <span className="text-slate-600">→</span>
          <span>Ending: <strong className="text-emerald-400">${slide?.endingCashBalanceMillionUsd || 112.3}M</strong></span>
        </div>
      </div>

      {/* Financial Waterfall Bridge Chart */}
      <div className="plane-1-raised rounded-3xl p-8 border border-slate-800 bg-slate-900/40 my-auto z-10 h-[560px] flex flex-col justify-between relative">
        <div className="grid grid-cols-4 gap-6 h-[400px] items-end pb-8 border-b border-slate-800 relative">
          {stages.map((st, idx) => {
            const phase = resolveStepPhase(idx, currentStep);
            const isPos = st.deltaAmountMillionUsd >= 0;
            const barHeightPct = Math.min(Math.max((Math.abs(st.cumulativeBalanceMillionUsd) / 150) * 100, 20), 95);
            return (
              <div key={st.stepIndex} onClick={() => jumpToStep(idx)} style={getStepLifecycleStyle(phase)} className={`relative flex flex-col items-center justify-end h-full p-4 rounded-2xl cursor-pointer transition-all ${phase === 'active' ? 'bg-[var(--pres-card-bg)] border border-[var(--pres-accent)]' : 'bg-slate-900/50 border border-slate-800/80'}`}>
                {idx > 0 && <div className="absolute top-1/2 -left-3 w-6 border-t-2 border-dashed border-slate-700 pointer-events-none" />}
                <div className="mb-auto text-center w-full">
                  <div className={`inline-flex items-center gap-1 font-mono text-[16px] font-bold px-3 py-1 rounded-full ${isPos ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}`}>
                    {isPos ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {isPos ? `+$${st.deltaAmountMillionUsd}M` : `-$${Math.abs(st.deltaAmountMillionUsd)}M`}
                  </div>
                </div>
                <div style={{ height: `${barHeightPct}%` }} className={`w-28 rounded-t-xl transition-all duration-500 flex flex-col justify-between p-3 text-center ${idx === 0 || idx === stages.length - 1 ? 'bg-gradient-to-t from-[var(--pres-accent)]/80 to-[var(--pres-accent)] text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]' : isPos ? 'bg-gradient-to-t from-emerald-600/80 to-emerald-500 text-white' : 'bg-gradient-to-t from-rose-600/80 to-rose-500 text-white'}`}>
                  <span className="text-[14px] font-mono font-bold uppercase tracking-wider opacity-90">${st.cumulativeBalanceMillionUsd}M</span>
                  <span className="text-[14px] font-sans font-medium line-clamp-1">{st.stepLabel.split(' ')[0]}</span>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-[15px] font-bold text-slate-100 truncate w-48">{st.stepLabel}</div>
                  <div className="text-[14px] font-mono text-slate-400">Step 0{idx + 1}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-[15px] text-slate-300 font-sans flex items-center gap-3">
            <span className="font-mono text-cyan-400 text-[14px] uppercase font-bold">Active Variance:</span>
            <span>{activeStage?.varianceExplanation}</span>
          </div>
          <div className="flex items-center gap-6">
            {(slide?.summaryMetrics || []).map((m) => (
              <div key={m.id} className="flex items-center gap-2 font-mono text-[14px]">
                <span className="text-slate-400">{m.metricLabel}:</span>
                <span className="font-bold text-emerald-400">{m.metricValue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="plane-1-raised px-6 py-3.5 rounded-2xl border border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-[14px] text-slate-300">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-cyan-400 font-bold"><DollarSign size={16} /> Liquidity Audit Verified</span>
          <span className="text-slate-400">Capital Call Buffer: <strong className="text-emerald-400">Armed & Secured</strong></span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-bold"><ShieldCheck size={16} /> GAAP Audit Certified</div>
      </div>
    </div>
  );
};
