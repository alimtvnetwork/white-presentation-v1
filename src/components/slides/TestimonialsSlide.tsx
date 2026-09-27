import React from 'react';
import { TestimonialsSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Quote } from 'lucide-react';

export const TestimonialsSlide: React.FC<{ slide: TestimonialsSlideData }> = ({ slide }) => {
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
            {slide.kicker || 'EXECUTIVE VALIDATION'}
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
        <img src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png" alt="Logo" className="h-[42px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="grid grid-cols-2 gap-10 my-auto z-20 max-w-[1640px] w-full mx-auto">
        {slide.testimonials.map((t, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
            className="border rounded-3xl p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
          >
            <Quote style={{ color: `${theme.accentColor}30` }} className="w-12 h-12 absolute top-8 right-8 pointer-events-none" />
            <p style={{ color: theme.textColor }} className="font-poppins text-[22px] italic leading-[1.5] mb-8 pr-12">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div style={{ backgroundColor: `${theme.accentColor}20`, color: theme.accentColor }} className="w-14 h-14 rounded-full font-ubuntu font-bold text-xl flex items-center justify-center">
                {t.author.charAt(0)}
              </div>
              <div>
                <h4 style={{ color: theme.textColor }} className="font-ubuntu text-[20px] font-bold">{t.author}</h4>
                <p style={{ color: theme.subtextColor }} className="font-poppins text-[15px]">
                  {t.title} • <span style={{ color: theme.accentColor }} className="font-semibold">{t.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ color: theme.subtextColor }} className="text-right font-mono text-[13px] opacity-75">Enterprise Trust & Proven Commercial Outcomes</div>
    </div>
  );
};
