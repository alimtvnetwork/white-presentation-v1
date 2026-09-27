import React from 'react';
import { StepsChainSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { CheckCircle2 } from 'lucide-react';

export const StepsChainSlide: React.FC<{ slide: StepsChainSlideData }> = ({ slide }) => {
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
            {slide.kicker || 'PROCESS & TIMELINE'}
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

      <div className="relative my-auto z-20 w-full max-w-[1640px] mx-auto">
        <div style={{ backgroundColor: theme.cardBorder }} className="absolute top-[28px] left-[180px] right-[180px] h-[3px] z-0" />
        <div className="grid grid-cols-4 gap-8 relative z-10">
          {slide.steps.map((step, idx) => (
            <div key={step.stepNumber} className={`flex flex-col items-center slide-up-anim stagger-${idx + 1}`}>
              <div
                style={{ backgroundColor: theme.accentColor }}
                className="w-14 h-14 rounded-full text-white font-ubuntu text-xl font-bold flex items-center justify-center shadow-lg border-4 border-slate-900 mb-6 neon-pulse-anim"
              >
                {step.stepNumber}
              </div>
              <div
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="w-full border rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[340px] glass-card-interactive"
              >
                <div>
                  <div style={{ color: theme.accentColor }} className="text-xs font-mono font-bold uppercase mb-2">
                    {step.duration || `Phase 0${step.stepNumber}`}
                  </div>
                  <h3
                    style={{ color: theme.textColor }}
                    className="font-ubuntu text-[19px] font-bold mb-3"
                    contentEditable={isEditMode}
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const val = e.currentTarget.textContent || '';
                      applyEdit((s) => (s.type === 'steps-chain' ? { ...s, steps: s.steps.map((st) => (st.stepNumber === step.stepNumber ? { ...st, title: val } : st)) } : s));
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: theme.subtextColor }} className="font-poppins text-[14px] leading-snug">
                    {step.description}
                  </p>
                </div>
                <div style={{ color: theme.subtextColor }} className="text-right text-[11px] font-mono uppercase tracking-widest pt-4 border-t border-slate-800">
                  Step {step.stepNumber} of {slide.steps.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ color: theme.subtextColor }} className="text-right font-mono text-[13px]">
        Continuous Velocity • Predictable Milestone Deliveries
      </div>
    </div>
  );
};
