import React from 'react';
import type { SaaSPricingTiersSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Check, Minus, Star, Award } from 'lucide-react';

export const SaaSPricingTiersSlide: React.FC<{ slide: SaaSPricingTiersSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const tiers = slide.tiers || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
              {slide.kicker || 'TRANSPARENT LICENSING'}
            </span>
            <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Predictable Tiers</span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {slide.title || 'Predictable Enterprise Tiering'}
          </h1>
        </div>
        <div className="px-4 py-2 rounded-full font-mono text-xs font-bold bg-violet-500/10 text-violet-300 border border-violet-500/30">
          {slide.billingCadence}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 z-10 my-auto items-center">
        {tiers.map((tier, idx) => {
          const isRec = Boolean(tier.isRecommended);
          return (
            <div
              key={tier.id || idx}
              className={`p-7 rounded-3xl border flex flex-col justify-between transition-all ${isRec ? 'plane-2-elevated border-violet-500/60 bg-violet-500/10 shadow-2xl scale-[1.04] z-20' : 'plane-1-raised bg-slate-900/40 border-slate-800'}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-ubuntu text-xl font-bold text-slate-100">{tier.tierName}</h3>
                  {isRec && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-violet-300 bg-violet-500/20 px-2 py-0.5 rounded-full border border-violet-500/40">
                      <Star size={10} /> {tier.badgeText || 'RECOMMENDED'}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="font-ubuntu text-4xl font-black text-slate-100">{tier.price}</span>
                  <span className="font-mono text-xs text-slate-400">{tier.billingPeriod}</span>
                </div>
                <p className="font-poppins text-xs text-slate-400 mb-6">{tier.description}</p>
                <div className="space-y-3 mb-8 pt-4 border-t border-slate-800">
                  {(tier.features || []).map((f) => {
                    const isInc = Boolean(f.isIncluded);
                    return (
                      <div key={f.id} className="flex items-center gap-2 text-xs">
                        {isInc ? (
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><Check size={10} /></div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center"><Minus size={10} /></div>
                        )}
                        <span className={isInc ? 'text-slate-200' : 'text-slate-500'}>{f.featureName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button className={isRec ? 'btn-primary-accent w-full py-3 text-xs' : 'btn-secondary-glass w-full py-2.5 text-xs'}>
                {tier.ctaText}
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <span className="flex items-center gap-2 text-violet-400 font-bold"><Award size={14} /> Full Source Ownership & Zero Marginal Seat Fees</span>
        <span>{slide.disclaimerNote || '100% Perpetual IP Transfer'}</span>
      </div>
    </div>
  );
};
