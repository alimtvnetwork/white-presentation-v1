import React from 'react';
import { RevealGridSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Grid, Eye } from 'lucide-react';

export const RevealGridSlide: React.FC<{ slide: RevealGridSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit, activeStep, jumpToStep } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const headerShadow = theme.headerShadow || (isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px');
  const items = slide.items || [];
  const currentStep = Math.min(items.length - 1, Math.max(0, activeStep));

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {slide.kicker || 'SEQUENTIAL REVEAL MATRIX'}
          </span>
          <span style={{ color: theme.subtextColor }} className="font-mono text-xs">• Revealed {Math.min(items.length, currentStep + 1)} of {items.length}</span>
        </div>
        <h1
          style={{ color: theme.textColor, textShadow: headerShadow }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Dynamic Bento Feature Reveal Matrix'}
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-6 my-auto z-10">
        {items.map((it, idx) => {
          const isRevealed = idx <= currentStep;
          const isFocused = idx === currentStep;

          return (
            <div
              key={it.id || idx}
              onClick={() => jumpToStep(idx)}
              style={{
                backgroundColor: theme.cardBg,
                borderColor: isFocused ? theme.accentColor : theme.cardBorder,
                opacity: isRevealed ? 1 : 0.25,
                transform: isRevealed ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
                transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              className={`p-7 rounded-3xl border shadow-lg flex flex-col justify-between cursor-pointer ${
                isFocused ? 'ring-2 ring-cyan-500/50 scale-[1.02]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase bg-cyan-500/10 text-cyan-400">
                    {it.badge || `MODULE 0${idx + 1}`}
                  </span>
                  <span className="font-mono text-xs text-slate-500">#{idx + 1}</span>
                </div>
                <h3 style={{ color: theme.textColor }} className="font-ubuntu text-xl font-bold mb-2">{it.title}</h3>
                <p style={{ color: theme.subtextColor }} className="font-poppins text-sm leading-relaxed">{it.description}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-700/20 font-mono text-xs flex items-center justify-between" style={{ color: theme.subtextColor }}>
                <span>{it.tag || 'Interactive Component'}</span>
                {isRevealed && <span className="text-cyan-400 font-bold">Active</span>}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: theme.subtextColor }}>
        <span className="flex items-center gap-2 text-cyan-400 font-bold"><Grid size={14} /> Step-by-Step Spring Bento Reveal</span>
        <span className="opacity-70 flex items-center gap-1.5"><Eye size={13} /> Click Card or Press Next to Unveil</span>
      </div>
    </div>
  );
};
