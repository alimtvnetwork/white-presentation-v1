import React from 'react';
import type { LoseVsInvestSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { AlertOctagon, TrendingUp, DollarSign, Clock } from 'lucide-react';

export const LoseVsInvestSlide: React.FC<{ slide: LoseVsInvestSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const losses = slide.inactionConsequences || [];
  const gains = slide.investmentReturns || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30">
            {slide.kicker || 'FINANCIAL DECISION MATRIX'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Symmetric Balance</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[42px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'The Cost of Inaction vs Investment ROI'}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8 z-10 my-auto items-stretch">
        <div className="plane-1-raised p-6 rounded-3xl border border-rose-500/30 bg-rose-500/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <AlertOctagon size={16} /> {slide.inactionTitle}
            </div>
            <div className="space-y-3">
              {losses.map((item, idx) => {
                const isCrit = Boolean(item.hasCriticalImpact);
                return (
                  <div key={item.id || idx} className={`p-4 rounded-xl border ${isCrit ? 'bg-rose-500/10 border-rose-500/30' : 'bg-slate-900/40 border-slate-800'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-ubuntu text-base font-bold text-slate-100">{item.title}</span>
                      <span className="font-mono text-sm font-black text-rose-400">{item.metric}</span>
                    </div>
                    <p className="font-poppins text-xs text-slate-400">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="plane-2-elevated p-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <TrendingUp size={16} /> {slide.investmentTitle}
            </div>
            <div className="space-y-3">
              {gains.map((item, idx) => {
                const isFeat = Boolean(item.isFeaturedMetric);
                return (
                  <div key={item.id || idx} className={`p-4 rounded-xl border ${isFeat ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-slate-900/40 border-slate-800'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-ubuntu text-base font-bold text-slate-100">{item.title}</span>
                      <span className="font-mono text-sm font-black text-emerald-400">{item.metric}</span>
                    </div>
                    <p className="font-poppins text-xs text-slate-300">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-700 font-mono text-xs">
        <div className="flex items-center gap-6">
          {Boolean(slide.summaryPaybackPeriod) && (
            <span className="flex items-center gap-2 text-emerald-400 font-bold"><Clock size={14} /> Payback: {slide.summaryPaybackPeriod}</span>
          )}
          {Boolean(slide.summaryIrr) && (
            <span className="flex items-center gap-2 text-violet-400 font-bold"><DollarSign size={14} /> Projected IRR: {slide.summaryIrr}</span>
          )}
        </div>
        <span className="text-slate-400">Pure Live DOM Financial Modeling</span>
      </div>
    </div>
  );
};
