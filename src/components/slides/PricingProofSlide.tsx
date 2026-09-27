import React from 'react';
import { PricingSlideData } from '../../types/presentation';
import { Check } from 'lucide-react';

interface PricingProofSlideProps {
  slide: PricingSlideData;
}

export const PricingProofSlide: React.FC<PricingProofSlideProps> = ({ slide }) => {
  return (
    <div className="relative w-[1920px] h-[1080px] bg-slate-50 overflow-hidden text-slate-900 select-none p-[120px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-600" />
            <span className="text-[14px] font-bold tracking-[0.2em] uppercase text-violet-700 bg-violet-100/70 px-3.5 py-1 rounded-full border border-violet-200">
              {slide.kicker || 'COMMERCIAL PARTNERSHIP'}
            </span>
          </div>
          <h1 className="font-ubuntu text-[56px] font-extrabold text-slate-900 tracking-tight leading-tight">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="font-poppins text-[20px] text-slate-500 max-w-[1000px] mt-1">
              {slide.subtitle}
            </p>
          )}
        </div>

        <img
          src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png"
          alt="Riseup Asia Logo"
          className="h-[44px] w-auto object-contain"
        />
      </div>

      {/* 3 Pricing Tier Cards */}
      <div className="grid grid-cols-3 gap-8 my-auto z-20 max-w-[1640px] w-full mx-auto">
        {slide.tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl p-10 flex flex-col justify-between transition-all ${
              tier.isFeatured
                ? 'bg-white border-2 border-violet-600 shadow-2xl shadow-violet-500/15 scale-[1.03] z-10'
                : 'bg-white border border-slate-200 shadow-sm'
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-violet-600 text-white font-mono text-[12px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                {tier.badge}
              </div>
            )}

            <div>
              <h3 className="font-ubuntu text-[24px] font-bold text-slate-900 mb-2">
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-slate-100">
                <span className="font-ubuntu text-[52px] font-black text-slate-900 leading-none">
                  {tier.price}
                </span>
                <span className="font-poppins text-[16px] text-slate-400 font-medium">
                  {tier.cadence}
                </span>
              </div>

              {/* Feature Inclusions */}
              <div className="flex flex-col gap-4 mb-8">
                {tier.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        tier.isFeatured
                          ? 'bg-violet-100 text-violet-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="font-poppins text-[16px] text-slate-600 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`w-full py-4 rounded-xl font-ubuntu text-[16px] font-bold tracking-wide transition-all ${
                tier.isFeatured
                  ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              {tier.ctaLabel}
            </button>
          </div>
        ))}
      </div>

      <div className="text-right text-slate-400 font-mono text-[14px]">
        Predictable Engagement • Guaranteed Velocity & Zero Debt
      </div>
    </div>
  );
};
