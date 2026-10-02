import React from 'react';
import { CostComparisonSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Check, DollarSign } from 'lucide-react';

export const CostComparisonSlide: React.FC<{ slide: CostComparisonSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const columns = slide.columns || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30">
            {slide.kicker || 'CAPITAL ALLOCATION'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• 3-Model Financial Comparison</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'How Much Will You Lose If You Do Not Scale?'}
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-8 my-auto z-10">
        {columns.map((col, idx) => {
          const isFeatured = Boolean(col.isFeatured);
          return (
            <div
              key={col.id || idx}
              style={{
                backgroundColor: 'var(--pres-bg-card)',
                borderColor: isFeatured ? 'var(--pres-accent)' : 'var(--pres-border)',
              }}
              className={`p-8 rounded-3xl border shadow-xl flex flex-col justify-between relative transition-all duration-300 ${
                isFeatured ? 'ring-2 ring-violet-500/50 scale-[1.03] bento-glow-pulse' : 'opacity-85'
              }`}
            >
              {col.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono font-bold uppercase bg-violet-600 text-white shadow-lg">
                  {col.badge}
                </span>
              )}
              <div>
                <h3 style={{ color: 'var(--pres-text)' }} className="font-ubuntu text-2xl font-bold mb-2">{col.name}</h3>
                <div className="flex items-baseline gap-1.5 my-3">
                  <span className={`font-ubuntu text-5xl font-black ${isFeatured ? 'text-emerald-400' : 'text-slate-300'}`}>{col.annualCost}</span>
                  <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-sm">{col.billingCadence}</span>
                </div>
                <div className="space-y-3 mt-6 pt-4 border-t border-slate-700/20">
                  {(col.bulletPoints || []).map((bp, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--pres-text-muted)' }}>
                      <Check size={16} className={isFeatured ? 'text-emerald-400' : 'text-slate-500'} />
                      <span className="font-poppins text-xs leading-relaxed">{bp}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-700/20 font-mono text-xs font-bold text-center" style={{ color: isFeatured ? 'var(--pres-accent)' : 'var(--pres-text-muted)' }}>
                {col.verdict}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <DollarSign size={15} /> {slide.annualSavingsSummary || '$612,000 Annual Savings with 10x Delivery Velocity'}
        </span>
        <span className="opacity-70">Deterministic ROI Capital Model</span>
      </div>
    </div>
  );
};
