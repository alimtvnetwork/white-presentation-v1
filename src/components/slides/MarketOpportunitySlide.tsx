import React from 'react';
import { MarketOpportunitySlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { TrendingUp, Target } from 'lucide-react';

export const MarketOpportunitySlide: React.FC<{ slide: MarketOpportunitySlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';
  const tiers = slide.tiers || [];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[100px] flex flex-col justify-between animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 mb-2 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
            {slide.kicker || 'TOTAL ADDRESSABLE MARKET SIZING'}
          </div>
          <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[52px] font-extrabold tracking-tight leading-tight slide-up-anim" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p style={{ color: theme.subtextColor }} className="font-poppins text-[18px] max-w-[1000px] mt-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
              {slide.subtitle}
            </p>
          )}
        </div>
        <img src={logoSrc} alt="Logo" className="h-[42px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="flex flex-col gap-6 my-auto z-20 w-full max-w-[1500px] mx-auto">
        {tiers.map((t, idx) => {
          const tierTag = t.tier || (t as any).tierLabel || `TIER 0${idx + 1}`;
          const val = t.value || (t as any).marketSize || '';
          const cagr = t.growthRate || (t as any).cagr;
          const isSom = tierTag.toUpperCase().includes('SOM') || Boolean((t as any).isFocusTier);

          return (
            <div
              key={idx}
              style={{
                backgroundColor: isSom ? `${theme.accentColor}15` : theme.cardBg,
                borderColor: isSom ? theme.accentColor : theme.cardBorder,
              }}
              className={`p-7 rounded-2xl border-2 backdrop-blur-md shadow-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.01] slide-up-anim stagger-${idx + 1} ${isSom ? 'bento-glow-pulse' : ''}`}
            >
              <div className="flex items-center gap-6">
                <div style={{ backgroundColor: isSom ? theme.accentColor : 'rgba(124,58,237,0.15)' }} className="w-16 h-16 rounded-2xl flex items-center justify-center font-mono font-black text-xl text-white shadow-md">
                  {tierTag}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span style={{ color: theme.textColor }} className="font-ubuntu text-2xl font-bold">{t.label || t.description}</span>
                    {isSom && <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-violet-600 text-white uppercase"><Target size={12} /> Target Capture</span>}
                  </div>
                  {t.label && t.description && (
                    <p style={{ color: theme.subtextColor }} className="font-poppins text-base mt-1 max-w-[850px]">{t.description}</p>
                  )}
                </div>
              </div>

              <div className="text-right shrink-0">
                <div style={{ color: isSom ? theme.accentColor : theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[50px] font-black tracking-tight leading-none">
                  {val}
                </div>
                {cagr && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold mt-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <TrendingUp size={13} /> {cagr}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-20 font-mono text-[13px]" style={{ color: theme.subtextColor }}>
        <span>{slide.methodology || (slide as any).cagrHeadline || 'Gartner & PitchBook Verified Market Synthesis'}</span>
        <span className="opacity-75">Concentric Market Model • 1080p Pure DOM</span>
      </div>
    </div>
  );
};
