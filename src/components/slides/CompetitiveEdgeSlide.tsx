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

      <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="my-auto z-20 max-w-[1640px] w-full mx-auto rounded-3xl border overflow-hidden shadow-xl">
        <div className="grid grid-cols-12 p-6 border-b border-white/10 font-ubuntu font-bold text-sm tracking-wider uppercase opacity-80">
          <div className="col-span-5">{slide.headers[0] || 'Feature & Capability'}</div>
          <div className="col-span-3 text-center">{slide.headers[1] || 'Traditional Model'}</div>
          <div style={{ color: theme.accentColor }} className="col-span-4 text-center font-extrabold">{slide.headers[2] || 'Riseup Sovereign Platform'}</div>
        </div>
        <div className="flex flex-col divide-y divide-white/5 font-poppins text-[16px]">
          {slide.rows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-12 p-5 items-center hover:bg-white/[0.02] transition-colors">
              <div style={{ color: theme.textColor }} className="col-span-5 font-medium">{row.feature}</div>
              <div style={{ color: theme.subtextColor }} className="col-span-3 flex items-center justify-center gap-2 text-center opacity-75">
                <X size={16} className="text-rose-400 shrink-0" />
                <span>{row.competitor}</span>
              </div>
              <div style={{ color: theme.accentColor }} className="col-span-4 flex items-center justify-center gap-2 text-center font-semibold">
                <Check size={16} className="text-emerald-400 shrink-0" />
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
