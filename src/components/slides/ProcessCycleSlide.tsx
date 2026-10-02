import React from 'react';
import { ProcessCycleSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { RotateCw, ArrowRight } from 'lucide-react';

export const ProcessCycleSlide: React.FC<{ slide: ProcessCycleSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none flex flex-col justify-between p-[80px] animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div
          className="text-[14px] font-bold tracking-[0.25em] uppercase font-mono px-3 py-1 rounded border"
          style={{ color: theme.accentColor, borderColor: theme.cardBorder, backgroundColor: theme.cardBg }}
          contentEditable={isEditMode} suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}
        >
          {slide.kicker || 'OPERATIONAL FLYWHEEL'}
        </div>
        <img src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png" alt="Logo" className="h-[40px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="z-20 mb-2">
        <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[42px] font-black tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
          {slide.title}
        </h1>
        <p style={{ color: theme.subtextColor }} className="font-poppins text-[19px] max-w-[1300px]" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
          {slide.subtitle}
        </p>
      </div>

      <div className="relative z-20 my-auto flex items-center justify-center">
        <div className="grid grid-cols-2 gap-x-48 gap-y-12 w-[1400px]">
          {slide.stages.slice(0, 4).map((stage, idx) => (
            <div key={idx} style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-6 rounded-2xl border shadow-lg flex flex-col justify-between relative hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between mb-3">
                <span style={{ backgroundColor: theme.accentColor }} className="px-3 py-1 rounded-full text-[12px] font-mono font-bold text-white">
                  STAGE 0{stage.step || idx + 1}
                </span>
                {stage.metricBadge && (
                  <span style={{ borderColor: theme.cardBorder, color: theme.accentColor }} className="px-2.5 py-0.5 rounded-md text-[12px] font-mono border font-semibold">
                    {stage.metricBadge}
                  </span>
                )}
              </div>
              <div style={{ color: theme.textColor }} className="font-ubuntu text-[22px] font-bold mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => {
                if (s.type !== 'process-cycle') return s;
                const stages = [...s.stages]; stages[idx] = { ...stages[idx], title: e.currentTarget.textContent || '' };
                return { ...s, stages };
              })}>{stage.title}</div>
              <p style={{ color: theme.subtextColor }} className="font-poppins text-[15px] leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => {
                if (s.type !== 'process-cycle') return s;
                const stages = [...s.stages]; stages[idx] = { ...stages[idx], description: e.currentTarget.textContent || '' };
                return { ...s, stages };
              })}>{stage.description}</p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: theme.canvasBg, borderColor: theme.accentColor, boxShadow: `0 0 40px ${theme.accentColor}30` }} className="absolute w-[240px] h-[240px] rounded-full border-4 flex flex-col items-center justify-center p-4 text-center z-30 shadow-2xl">
          <RotateCw size={32} style={{ color: theme.accentColor }} className="animate-spin-slow mb-2" />
          <div style={{ color: theme.textColor }} className="font-ubuntu text-[20px] font-black leading-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'process-cycle' ? { ...s, centerHubTitle: e.currentTarget.textContent || '' } : s))}>
            {slide.centerHubTitle}
          </div>
          {slide.centerHubSubtitle && (
            <div style={{ color: theme.subtextColor }} className="font-poppins text-[12px] mt-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'process-cycle' ? { ...s, centerHubSubtitle: e.currentTarget.textContent || '' } : s))}>
              {slide.centerHubSubtitle}
            </div>
          )}
        </div>
      </div>

      <div style={{ borderColor: theme.cardBorder }} className="flex items-center justify-between z-20 pt-4 border-t">
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px] flex items-center gap-2">
          <ArrowRight size={16} style={{ color: theme.accentColor }} />
          {slide.flywheelOutcome || 'Compounding platform velocity with every presentation cycle'}
        </div>
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px]">WHITE SOVEREIGN ENGINE</div>
      </div>
    </div>
  );
};
