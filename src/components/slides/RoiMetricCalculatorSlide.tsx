import React from 'react';
import type { RoiMetricCalculatorSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { RoiMetricCard } from './roi/RoiMetricCard';
import { Calculator, DollarSign, CheckCircle2 } from 'lucide-react';

export const RoiMetricCalculatorSlide: React.FC<{ slide: RoiMetricCalculatorSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const calculatedMetrics = slide.calculatedMetrics || [];
  const assumptions = slide.assumptions || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {slide.kicker || 'CAPITAL EFFICIENCY & ROI'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
            <Calculator size={12} /> Metric Focus {Math.min(calculatedMetrics.length, activeStep + 1)} of {calculatedMetrics.length}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Quantified Enterprise ROI & Payback Model'}
        </h1>
        {slide.subtitle && <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm mt-2">{slide.subtitle}</p>}
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch">
        <div className="col-span-5 flex flex-col gap-6">
          <div className="plane-1-raised p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">Capital Investment Inputs</span>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
                <span className="text-[11px] font-mono text-slate-400 block">Upfront Capital</span>
                <span className="font-ubuntu text-xl font-bold text-slate-100">{slide.currencySymbol || '$'}{slide.investmentAmount.toLocaleString()}</span>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
                <span className="text-[11px] font-mono text-slate-400 block">Annual Yield</span>
                <span className="font-ubuntu text-xl font-bold text-emerald-400">{slide.currencySymbol || '$'}{slide.annualReturn.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="plane-1-raised p-6 rounded-2xl border border-slate-800 flex-1">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">Core Financial Assumptions</span>
            <div className="flex flex-col gap-2.5">
              {assumptions.map((item) => (
                <div key={item.id} className="flex items-start gap-2.5 text-xs font-poppins text-slate-300">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-100">{item.factor}:</strong> {item.impact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-7 grid grid-cols-1 gap-4">
          {calculatedMetrics.map((metric, idx) => (
            <RoiMetricCard key={idx} metric={metric} cardIndex={idx} activeStep={activeStep} />
          ))}
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <DollarSign size={14} /> Kinetic ROI Step Sequencing Active (Card {Math.min(calculatedMetrics.length, activeStep + 1)} of {calculatedMetrics.length})
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Deterministic Enterprise Capital Verification</span>
      </div>
    </div>
  );
};
