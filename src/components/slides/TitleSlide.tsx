import React from 'react';
import { TitleSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';

export const TitleSlide: React.FC<{ slide: TitleSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';
  const presenterName = slide.presenter?.name || 'Alim Ul Karim';
  const rawRole = slide.presenter?.role || 'Chief Software Engineer';
  const presenterRole = presenterName.toLowerCase().includes('alim') ? 'Chief Software Engineer' : rawRole;

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none flex flex-col justify-between p-[120px] animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div className="text-[14px] font-bold tracking-[0.25em] uppercase text-violet-500 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
          {slide.kicker || 'KEYNOTE PRESENTATION'}
        </div>
        <img src={logoSrc} alt="Logo" className="h-[46px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="max-w-[1400px] z-20 my-auto">
        <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[82px] font-black tracking-tight leading-[1.05] mb-8 slide-up-anim" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
          {slide.title}
        </h1>
        <p style={{ color: theme.subtextColor }} className="font-poppins text-[26px] leading-[1.4] max-w-[1050px] font-normal slide-up-anim stagger-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
          {slide.subtitle}
        </p>
      </div>

      <div style={{ borderColor: theme.cardBorder }} className="flex items-center justify-between z-20 pt-8 border-t">
        <div className="flex items-center gap-5">
          <div style={{ background: `linear-gradient(135deg, ${theme.accentColor}, #4F46E5)` }} className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-ubuntu text-2xl font-bold shadow-md">
            {presenterName.charAt(0)}
          </div>
          <div>
            <div style={{ color: theme.textColor }} className="font-ubuntu text-[22px] font-bold" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'title' ? { ...s, presenter: { ...s.presenter, name: e.currentTarget.textContent || '' } } : s))}>
              {presenterName}
            </div>
            <div style={{ color: theme.subtextColor }} className="font-poppins text-[16px]">
              <span contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'title' ? { ...s, presenter: { ...s.presenter, role: e.currentTarget.textContent || '' } } : s))}>
                {presenterRole}
              </span>
              {' • '}
              <span contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'title' ? { ...s, presenter: { ...s.presenter, company: e.currentTarget.textContent || '' } } : s))}>
                {slide.presenter?.company}
              </span>
            </div>
          </div>
        </div>
        {slide.date && <div style={{ color: theme.subtextColor }} className="font-mono text-[16px] font-semibold">{slide.date}</div>}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[140px] pointer-events-none z-10 opacity-70">
        <svg className="w-full h-full" viewBox="0 0 1920 140" preserveAspectRatio="none" fill="none">
          <path d="M0,80 C400,20 800,120 1200,60 C1500,10 1750,90 1920,70 L1920,140 L0,140 Z" fill={theme.stops[6].hex} opacity="0.3" />
          <path d="M0,100 C500,40 950,130 1400,80 C1650,40 1800,110 1920,90 L1920,140 L0,140 Z" fill={theme.stops[7].hex} opacity="0.85" />
        </svg>
      </div>
    </div>
  );
};
