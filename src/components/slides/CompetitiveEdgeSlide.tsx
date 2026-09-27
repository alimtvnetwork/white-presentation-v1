import React from 'react';
import { CompetitiveEdgeSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Check, X } from 'lucide-react';

export const CompetitiveEdgeSlide: React.FC<{ slide: CompetitiveEdgeSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = theme.isDark;

  const logoSrc = isDark
    ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png'
    : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';

  const borderClass = isDark ? 'border-slate-700/60' : 'border-slate-200/90';
  const divideClass = isDark ? 'divide-slate-800/80' : 'divide-slate-200/70';
  const headerBgClass = isDark ? 'bg-white/[0.04]' : 'bg-slate-50/80';
  const rowHoverClass = isDark ? 'hover:bg-violet-500/15' : 'hover:bg-violet-50/90';

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
            {slide.kicker || 'COMPETITIVE BENCHMARK'}
          </div>
          <h1
            style={{ color: theme.textColor, textShadow: theme.headerShadow }}
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
        <img src={logoSrc} alt="Logo" className="h-[42px] w-auto object-contain filter contrast-125" />
      </div>

      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="my-auto z-20 w-full rounded-2xl border overflow-hidden shadow-2xl backdrop-blur-md"
      >
        <div className={`grid grid-cols-12 px-8 py-5 border-b ${borderClass} ${headerBgClass} font-ubuntu font-bold text-sm tracking-wider uppercase`}>
          <div className={`col-span-5 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{slide.headers[0] || 'Feature & Capability'}</div>
          <div className={`col-span-3 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{slide.headers[1] || 'Traditional Model'}</div>
          <div style={{ color: theme.accentColor }} className="col-span-4 text-center font-extrabold">{slide.headers[2] || 'Riseup Sovereign Platform'}</div>
        </div>
        <div className={`flex flex-col divide-y ${divideClass} font-poppins text-[16px]`}>
          {slide.rows.map((row, idx) => (
            <div key={idx} className={`grid grid-cols-12 px-8 py-5 items-center transition-all duration-150 cursor-pointer ${rowHoverClass}`}>
              <div className={`col-span-5 font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{row.feature}</div>
              <div className={`col-span-3 flex items-center justify-center gap-2 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <X size={17} className={isDark ? 'text-rose-400 shrink-0' : 'text-rose-600 shrink-0'} />
                <span>{row.competitor}</span>
              </div>
              <div style={{ color: theme.accentColor }} className="col-span-4 flex items-center justify-center gap-2 text-center font-bold">
                <Check size={17} className={isDark ? 'text-emerald-400 shrink-0' : 'text-emerald-600 shrink-0'} />
                <span>{row.us}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ color: theme.subtextColor }} className="text-right font-mono text-[13px] opacity-75">Sovereign Architecture Benchmark • Zero Compromise</div>
    </div>
  );
};
