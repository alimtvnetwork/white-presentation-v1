import React from 'react';
import { TalentFunnelSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';

export const TalentFunnelSlide: React.FC<{ slide: TalentFunnelSlideData }> = ({ slide }) => {
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
            {slide.kicker || 'TALENT RIGOR'}
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

      <div className="flex flex-col items-center gap-4 my-auto z-20 max-w-[1400px] mx-auto w-full">
        {slide.stages.map((stage, idx) => {
          const widthPercent = 100 - idx * 15;
          const isFinal = idx === slide.stages.length - 1;

          return (
            <div
              key={stage.stageNumber}
              style={{
                width: `${widthPercent}%`,
                backgroundColor: isFinal ? theme.accentColor : theme.cardBg,
                borderColor: isFinal ? theme.accentColor : theme.cardBorder,
                color: isFinal ? '#ffffff' : theme.textColor
              }}
              className="p-6 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] border shadow-sm"
            >
              <div className="flex items-center gap-5">
                <div
                  style={{ backgroundColor: isFinal ? 'rgba(255,255,255,0.2)' : `${theme.accentColor}20`, color: isFinal ? '#ffffff' : theme.accentColor }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-ubuntu text-xl font-bold"
                >
                  {stage.stageNumber}
                </div>
                <div>
                  <h3 className="font-ubuntu text-[22px] font-bold">{stage.title}</h3>
                  <p style={{ color: isFinal ? 'rgba(255,255,255,0.85)' : theme.subtextColor }} className="font-poppins text-[15px]">{stage.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-8 pr-4">
                <div className="text-right">
                  <div style={{ color: isFinal ? '#ffffff' : theme.accentColor }} className="font-ubuntu text-[24px] font-extrabold">{stage.metric}</div>
                  <div style={{ color: isFinal ? 'rgba(255,255,255,0.7)' : theme.subtextColor }} className="font-poppins text-[13px] uppercase tracking-wider">{stage.conversionRate}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ color: theme.subtextColor }} className="text-right font-mono text-[13px] opacity-75">Top 1% Global Engineering Craftsmanship Standard</div>
    </div>
  );
};
