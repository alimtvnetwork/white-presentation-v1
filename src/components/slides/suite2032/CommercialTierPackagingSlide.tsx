import React from 'react';
import type { CommercialTierPackagingSlideData } from '../../../types/suite2032Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Package, ShieldCheck, Check, Sparkles, ArrowRight, Zap } from 'lucide-react';

export const CommercialTierPackagingSlide: React.FC<{
  slide: CommercialTierPackagingSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const allTiers = slide?.pricingTiers || [];
  // 3-column pricing: Starter, Scale/Enterprise (Plane 2 elevation), Sovereign
  const tiers = allTiers.length >= 3 ? [allTiers[0], allTiers.find((t) => t.isRecommendedTier) || allTiers[1], allTiers[allTiers.length - 1]] : allTiers;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-2">
              <Package size={16} /> {slide?.kicker || 'PACKAGING & MONETIZATION ARCHITECTURE'}
            </span>
            <span className="font-mono text-[14px] px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-bold">
              <Sparkles size={14} /> Annual Billing (Save {slide?.annualDiscountPercentage || 20}%)
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">{slide?.pricingModel || 'Capacity Packaging'}</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-slate-400 mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="font-mono text-[14px] bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-emerald-400 flex items-center gap-2">
          <ShieldCheck size={14} /> 3-Year Price Lock Guaranteed
        </div>
      </div>

      {/* 3-Column Pricing Cards */}
      <div className="grid grid-cols-3 gap-8 my-auto z-10 h-[590px] items-stretch">
        {tiers.map((tier) => {
          const isElevated = tier.isRecommendedTier;
          return (
            <div key={tier.id} className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${isElevated ? 'plane-2-floating bg-[var(--pres-card-bg)] border-2 border-[var(--pres-accent)] shadow-[0_0_40px_rgba(124,58,237,0.25)] -translate-y-2' : 'plane-1-raised bg-slate-900/50 border border-slate-800'}`}>
              {isElevated && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--pres-accent)] text-white text-[14px] font-mono font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles size={14} /> RECOMMENDED ARCHITECTURE
                </div>
              )}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-[26px] font-bold text-slate-100">{tier.tierName}</h3>
                  <span className="text-[14px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">{tier.slaUptimePercentage}% SLA</span>
                </div>
                <p className="text-[15px] text-slate-400 mt-2 mb-4 line-clamp-2">{tier.tagline}</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-[44px] font-mono font-bold text-slate-100">${tier.monthlyPriceUsd}</span>
                  <span className="text-[15px] font-mono text-slate-400">/ mo ({tier.billingFrequency})</span>
                </div>
                <div className="space-y-2.5">
                  {(tier.featuresList || []).slice(0, 5).map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[15px] text-slate-200">
                      <span className="mt-1 p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0"><Check size={14} /></span>
                      <span className="line-clamp-1">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-slate-800/80">
                <button className={`w-full py-3.5 rounded-xl font-mono text-[15px] font-bold flex items-center justify-center gap-2 transition-all ${isElevated ? 'bg-[var(--pres-accent)] text-white hover:opacity-95 shadow-md' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}`}>
                  <span>{isElevated ? 'Deploy Enterprise Fabric' : 'Select Plan'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised px-6 py-3.5 rounded-2xl border border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-[14px] text-slate-300">
        <div className="flex items-center gap-6">
          <span className="text-cyan-400 font-bold flex items-center gap-1.5"><Zap size={14} /> Modular Add-Ons:</span>
          {(slide?.addOnModules || []).map((m) => (
            <span key={m.id} className="text-slate-400">{m.moduleName} (<strong className="text-slate-200">+${m.monthlyPriceUsd}/mo</strong>)</span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-bold"><ShieldCheck size={14} /> Custom Enterprise Contract Ready</div>
      </div>
    </div>
  );
};
