import React from 'react';
import { PricingSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Check } from 'lucide-react';

export const PricingProofSlide: React.FC<{ slide: PricingSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[100px] flex flex-col justify-between animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div>
          <div
            className="text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 mb-2 font-mono"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}
          >
            {slide.kicker || 'COMMERCIAL PARTNERSHIP'}
          </div>
          <h1
            style={{ color: theme.textColor }}
            className="font-ubuntu text-[52px] font-extrabold tracking-tight leading-tight slide-up-anim"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p
              style={{ color: theme.subtextColor }}
              className="font-poppins text-[18px] max-w-[1000px] mt-1"
              contentEditable={isEditMode}
              suppressContentEditableWarning
              onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
            >
              {slide.subtitle}
            </p>
          )}
        </div>
        <img src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png" alt="Logo" className="h-[42px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="grid grid-cols-3 gap-8 my-auto z-20 max-w-[1640px] w-full mx-auto">
        {slide.tiers.map((tier, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: theme.cardBg,
              borderColor: tier.isFeatured ? theme.accentColor : theme.cardBorder,
              boxShadow: tier.isFeatured ? `0 20px 40px ${theme.accentColor}25` : undefined
            }}
            className={`relative rounded-3xl p-10 flex flex-col justify-between transition-all border-2 ${tier.isFeatured ? 'scale-[1.03] z-10' : ''}`}
          >
            {tier.badge && (
              <div style={{ backgroundColor: theme.accentColor }} className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white font-mono text-[11px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                {tier.badge}
              </div>
            )}
            <div>
              <h3 style={{ color: theme.textColor }} className="font-ubuntu text-[24px] font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-white/10">
                <span style={{ color: theme.textColor }} className="font-ubuntu text-[52px] font-black leading-none">{tier.price}</span>
                <span style={{ color: theme.subtextColor }} className="font-poppins text-[16px] font-medium">{tier.cadence}</span>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                {tier.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div style={{ backgroundColor: `${theme.accentColor}20`, color: theme.accentColor }} className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ color: theme.textColor }} className="font-poppins text-[16px] leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              style={{ backgroundColor: tier.isFeatured ? theme.accentColor : theme.cardBorder, color: tier.isFeatured ? '#ffffff' : theme.textColor }}
              className="w-full py-4 rounded-xl font-ubuntu text-[16px] font-bold tracking-wide transition-all shadow-md"
            >
              {tier.ctaLabel}
            </button>
          </div>
        ))}
      </div>
      <div style={{ color: theme.subtextColor }} className="text-right font-mono text-[13px] opacity-75">Predictable Engagement • Guaranteed Velocity & Zero Debt</div>
    </div>
  );
};
