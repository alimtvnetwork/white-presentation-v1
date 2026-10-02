import React from 'react';
import type { AvoidCommoditySlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { XCircle, CheckCircle2, Crosshair, Star } from 'lucide-react';

export const AvoidCommoditySlide: React.FC<{ slide: AvoidCommoditySlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const comparisons = slide.comparisons || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'STRATEGIC DIFFERENTIATION'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Sovereign Architecture</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[42px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'The Commodity Trap vs Sovereign Architecture'}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8 z-10 my-auto items-stretch">
        <div className="plane-1-raised p-7 rounded-3xl border border-rose-500/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <XCircle size={16} /> {slide.commodityTitle}
            </div>
            <p className="font-poppins text-xs mb-6 text-slate-400">{slide.commoditySubtitle}</p>
            <div className="space-y-4">
              {comparisons.map((c, idx) => (
                <div key={c.id || idx} className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                  <div className="text-xs font-mono font-bold text-rose-400 mb-1">{c.dimension}</div>
                  <div className="text-sm font-poppins text-slate-300">{c.commodityPitfall}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="plane-2-elevated p-7 rounded-3xl border border-violet-500/30 bg-violet-500/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Star size={16} /> {slide.sovereignTitle}
              </div>
              {Boolean(slide.sovereignBadgeText) && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/40">
                  {slide.sovereignBadgeText}
                </span>
              )}
            </div>
            <p className="font-poppins text-xs mb-6 text-slate-300">{slide.sovereignSubtitle}</p>
            <div className="space-y-4">
              {comparisons.map((c, idx) => {
                const isKey = Boolean(c.isKeyDifferentiator);
                return (
                  <div key={c.id || idx} className={`p-4 rounded-xl border ${isKey ? 'bg-violet-500/10 border-violet-500/30' : 'bg-slate-800/20 border-slate-700/30'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-violet-300">{c.dimension}</span>
                      {isKey && <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 size={12} /> Key Advantage</span>}
                    </div>
                    <div className="text-sm font-poppins text-slate-100 font-medium">{c.sovereignAdvantage}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border font-mono text-xs">
        <span className="flex items-center gap-2 text-violet-400 font-bold">
          <Crosshair size={14} /> {slide.summaryNote || 'Sovereign infrastructure guarantees perpetual control with zero third-party licensing penalties.'}
        </span>
        <span className="opacity-70">100% Owned Source Architecture</span>
      </div>
    </div>
  );
};
