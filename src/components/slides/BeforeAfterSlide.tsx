import React from 'react';
import { BeforeAfterSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlide: React.FC<{ slide: BeforeAfterSlideData }> = ({ slide }) => {
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
            {slide.kicker || 'TRANSFORMATION'}
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

      <div className="grid grid-cols-2 gap-10 my-auto z-20">
        <div className="bg-rose-950/30 border-2 border-rose-500/50 rounded-3xl p-10 flex flex-col justify-between shadow-lg">
          <div>
            <div className="inline-block text-[12px] font-mono font-bold uppercase tracking-wider text-rose-300 bg-rose-900/60 px-3 py-1 rounded-full mb-6">
              {slide.before.tag || 'BEFORE'}
            </div>
            <h3 style={{ color: theme.textColor }} className="font-ubuntu text-[28px] font-bold mb-6">{slide.before.title}</h3>
            <div className="flex flex-col gap-4">
              {slide.before.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span style={{ color: theme.subtextColor }} className="font-poppins text-[17px] leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: theme.cardBg, borderColor: theme.accentColor }} className="border-2 rounded-3xl p-10 flex flex-col justify-between shadow-2xl">
          <div>
            <div style={{ backgroundColor: theme.accentColor }} className="inline-block text-[12px] font-mono font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full mb-6 shadow-sm">
              {slide.after.tag || 'AFTER TRANSFORMATION'}
            </div>
            <h3 style={{ color: theme.textColor }} className="font-ubuntu text-[28px] font-bold mb-6">{slide.after.title}</h3>
            <div className="flex flex-col gap-4">
              {slide.after.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span style={{ color: theme.textColor }} className="font-poppins text-[17px] leading-relaxed font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ color: theme.subtextColor }} className="text-right font-mono text-[13px]">
        White Presentation Architecture • Transformation Analysis
      </div>
    </div>
  );
};
