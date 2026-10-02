import React, { useState } from 'react';
import { StepsChainSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { soundEngine } from '../../audio/soundEngine';
import { Volume2, VolumeX, Play, RotateCcw } from 'lucide-react';

export const StepsChainSlide: React.FC<{ slide: StepsChainSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit, isSoundEnabled, toggleSound } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';
  const [activeStepIdx, setActiveStepIdx] = useState(slide.steps.length);

  const stepForward = (idx: number) => {
    setActiveStepIdx(idx);
    if (isSoundEnabled) soundEngine.playStepClick();
  };

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[100px] flex flex-col justify-between animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
          {slide.kicker || 'PROCESS & TIMELINE'}
        </div>
        <img src={logoSrc} alt="Logo" className="h-[42px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="flex items-center gap-14 my-auto z-20">
        <div className="w-[480px] shrink-0 flex flex-col gap-6">
          <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[50px] font-black tracking-tight leading-tight slide-up-anim" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p style={{ color: theme.subtextColor }} className="font-poppins text-[18px] leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
              {slide.subtitle}
            </p>
          )}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <button onClick={() => stepForward(Math.min(slide.steps.length, activeStepIdx + 1))} className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-ubuntu font-bold text-xs rounded-xl flex items-center gap-2 shadow-md cursor-pointer transition-all">
              <Play size={13} fill="white" /> <span>Next Step</span>
            </button>
            <button onClick={() => { setActiveStepIdx(1); if (isSoundEnabled) soundEngine.playSlideWhoosh('prev'); }} className="p-2 border border-white/15 hover:bg-white/5 rounded-xl cursor-pointer" title="Reset Steps">
              <RotateCcw size={15} style={{ color: theme.subtextColor }} />
            </button>
            <button onClick={toggleSound} className="flex items-center gap-1.5 px-3 py-2 border border-white/15 hover:bg-white/5 rounded-xl text-xs font-mono font-medium cursor-pointer" style={{ color: theme.subtextColor }}>
              {isSoundEnabled ? <Volume2 size={15} className="text-emerald-400" /> : <VolumeX size={15} className="text-slate-500" />}
              <span>{isSoundEnabled ? 'Audio On' : 'Muted'}</span>
            </button>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {slide.steps.map((step, idx) => {
            const isVisible = idx < activeStepIdx;

            return (
              <div
                key={step.stepNumber}
                onClick={() => stepForward(idx + 1)}
                style={{
                  backgroundColor: theme.cardBg, borderColor: isVisible ? theme.accentColor : theme.cardBorder,
                  opacity: isVisible ? 1 : 0.25, transform: isVisible ? 'translateY(0)' : 'translateY(16px)'
                }}
                className="border-2 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer shadow-md hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ backgroundColor: theme.accentColor }} className="w-8 h-8 rounded-lg text-white font-ubuntu font-bold text-sm flex items-center justify-center shadow">
                      {step.stepNumber}
                    </span>
                    <span style={{ color: theme.accentColor }} className="text-xs font-mono font-bold uppercase">{step.duration || `Stage 0${step.stepNumber}`}</span>
                  </div>
                  <h3 style={{ color: theme.textColor }} className="font-ubuntu text-[20px] font-bold mb-2">{step.title}</h3>
                  <p style={{ color: theme.subtextColor }} className="font-poppins text-[15px] leading-relaxed">{step.description}</p>
                </div>
                <div style={{ color: theme.subtextColor }} className="text-right text-[11px] font-mono uppercase tracking-widest pt-3 border-t border-white/10">Step {step.stepNumber} of {slide.steps.length}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ color: theme.subtextColor }} className="text-right font-mono text-[13px] opacity-75">Interactive Step Chain • Synchronized Audio Triggers</div>
    </div>
  );
};
