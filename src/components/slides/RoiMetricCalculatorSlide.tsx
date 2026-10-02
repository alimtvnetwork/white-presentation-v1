import React, { useState } from 'react';
import type { RoiMetricCalculatorSlideData, RoiCalculatedMetric } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { TrendingUp, Calculator } from 'lucide-react';
import { PaybackHorizonGauge } from './roi/PaybackHorizonGauge';

const RoiHeader: React.FC<{ kicker?: string; title?: string }> = ({ kicker, title }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  return (
    <div className="z-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">{kicker || 'ROI & FINANCIAL IMPACT'}</span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Dynamic Capital Return Model</span>
      </div>
      <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="font-ubuntu text-[40px] font-black tracking-tight leading-none" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
        {title || 'Quantifiable Return on Investment Model'}
      </h1>
    </div>
  );
};

const MetricCard: React.FC<{ metric: RoiCalculatedMetric }> = ({ metric }) => {
  const isPrimary = Boolean(metric.isPrimaryRoi);
  return (
    <div className={`p-4 rounded-2xl border flex flex-col justify-between ${isPrimary ? 'plane-2-elevated bg-emerald-500/10 border-emerald-500/40 shadow-emerald-950/20' : 'plane-1-raised bg-slate-900/60 border-slate-800'}`}>
      <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs uppercase">{metric.label}</span>
      <div className={`font-ubuntu text-2xl font-black my-1 ${isPrimary ? 'text-emerald-400' : 'text-slate-100'}`}>{metric.value}</div>
      {metric.subtext && <span className="font-poppins text-[11px] text-slate-400">{metric.subtext}</span>}
    </div>
  );
};

export const RoiMetricCalculatorSlide: React.FC<{ slide: RoiMetricCalculatorSlideData }> = ({ slide }) => {
  const [invest, setInvest] = useState<number>(slide.investmentAmount || 150000);
  const [ret, setRet] = useState<number>(slide.annualReturn || 576000);
  const currency = slide.currencySymbol || '$';
  const computedRoiPct = invest > 0 ? Math.round(((ret - invest) / invest) * 100) : 0;
  const paybackMonths = ret > 0 ? Number(((invest / (ret / 12))).toFixed(1)) : 3.8;
  const metrics: RoiCalculatedMetric[] = slide.calculatedMetrics?.length ? slide.calculatedMetrics : [
    { label: 'Calculated Net ROI', value: `+${computedRoiPct}%`, subtext: 'Annualized net gain', isPrimaryRoi: true },
    { label: 'Payback Period', value: `${paybackMonths} mo`, subtext: 'Full capital recovery' },
    { label: 'Net Annual Gain', value: `${currency}${(ret - invest).toLocaleString()}`, subtext: 'Pre-tax profit delta' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between">
      <RoiHeader kicker={slide.kicker} title={slide.title} />

      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch">
        <div className="col-span-5 plane-1-raised p-6 rounded-3xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold mb-3">
            <Calculator size={16} /> Interactive Investment Model
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono"><span style={{ color: 'var(--pres-text-muted)' }}>Initial CapEx</span><span className="text-emerald-400 font-bold">{currency}{invest.toLocaleString()}</span></div>
              <input type="range" min={10000} max={1000000} step={10000} value={invest} onChange={(e) => setInvest(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono"><span style={{ color: 'var(--pres-text-muted)' }}>Annual Yield</span><span className="text-emerald-400 font-bold">{currency}{ret.toLocaleString()}</span></div>
              <input type="range" min={10000} max={2000000} step={10000} value={ret} onChange={(e) => setRet(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400" />
            </div>
          </div>
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex justify-between items-center">
            <span className="font-ubuntu text-xs font-bold text-slate-200">Compounded Net ROI:</span>
            <span className="font-mono text-lg font-black text-emerald-400">+{computedRoiPct}%</span>
          </div>
        </div>

        <div className="col-span-7 flex flex-col justify-between gap-4">
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((m, idx) => <MetricCard key={idx} metric={m} />)}
          </div>
          <PaybackHorizonGauge paybackMonths={paybackMonths} netRoiPercent={computedRoiPct} currencySymbol={currency} />
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold"><TrendingUp size={14} /> Deterministic Financial Return Assessment</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>CFO-Gated Capital Justification</span>
      </div>
    </div>
  );
};
