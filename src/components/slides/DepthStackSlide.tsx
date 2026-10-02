import React from 'react';
import { DepthStackSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { getStepPhase, getStepHaloStyle } from '../../utils/stepProgression';
import { Layers, ChevronRight, ChevronLeft } from 'lucide-react';

export const DepthStackSlide: React.FC<{ slide: DepthStackSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit, activeStep, jumpToStep } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const headerShadow = theme.headerShadow || (isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px');
  const cards = slide.cards || [];
  const currentStep = Math.min(cards.length - 1, Math.max(0, activeStep));
  const isPreviousAllowed = currentStep > 0;
  const isNextAllowed = currentStep < cards.length - 1;

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span style={{ color: theme.accentColor, borderColor: `${theme.accentColor}40`, backgroundColor: `${theme.accentColor}18` }} className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase border">
            {slide.kicker || '3D DEPTH PERSPECTIVE'}
          </span>
          <span style={{ color: theme.subtextColor }} className="font-mono text-xs">• Card {currentStep + 1} of {cards.length}</span>
        </div>
        <h1 style={{ color: theme.textColor, textShadow: headerShadow }} className="font-ubuntu text-[48px] font-black tracking-tight leading-none" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
          {slide.title || 'Multi-Layer Depth Stack Architecture'}
        </h1>
      </div>

      <div className="relative w-full h-[520px] my-auto flex items-center justify-center [perspective:1400px] z-10">
        {cards.map((card, idx) => {
          const delta = idx - currentStep;
          const phase = getStepPhase(idx, currentStep);
          const isCurrent = phase === 'active';
          const isPast = phase === 'past';
          const zOffset = isCurrent ? 0 : isPast ? 90 : -delta * 70;
          const yOffset = isPast ? -130 * Math.abs(delta) : delta * 24;
          const rotateX = isCurrent ? 0 : isPast ? -4 : Math.min(10, delta * 3);
          const scale = isCurrent ? 1 : isPast ? 0.95 : 1 - delta * 0.05;
          const opacity = isPast ? 0.25 : Math.max(0.15, 1 - delta * 0.25);
          const halo = getStepHaloStyle(isCurrent, theme.accentColor);

          return (
            <div
              key={card.id || idx}
              onClick={() => jumpToStep(idx)}
              style={{
                backgroundColor: theme.cardBg,
                borderColor: isCurrent ? theme.accentColor : theme.cardBorder,
                transform: `translate3d(0px, ${yOffset}px, ${zOffset}px) rotateX(${rotateX}deg) scale(${scale})`,
                opacity,
                zIndex: isCurrent ? 30 : 20 - Math.abs(delta),
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                ...halo,
              }}
              className="absolute w-[860px] p-10 rounded-3xl border-2 shadow-2xl backdrop-blur-md cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span style={{ color: theme.accentColor, backgroundColor: `${theme.accentColor}18` }} className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase">
                    {card.pill || `LAYER 0${idx + 1}`}
                  </span>
                  <span className="font-mono text-xs text-slate-400">#{idx + 1}</span>
                </div>
                <h2 style={{ color: theme.textColor }} className="font-ubuntu text-3xl font-extrabold mb-4">{card.headline}</h2>
                <p style={{ color: theme.subtextColor }} className="font-poppins text-lg leading-relaxed">{card.body}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-700/20 flex items-center justify-between font-mono text-xs" style={{ color: theme.accentColor }}>
                <span>{card.accentTag || 'Interactive Depth Component'}</span>
                <span>Click to Focus</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: theme.subtextColor }}>
        <span className="flex items-center gap-2 font-bold" style={{ color: theme.accentColor }}><Layers size={14} /> Kinetic 3D Peel-Away Stack</span>
        <div className="flex items-center gap-3">
          <button onClick={() => { if (isPreviousAllowed) jumpToStep(currentStep - 1); }} aria-disabled={!isPreviousAllowed} className={`p-2 rounded-lg border border-slate-700 transition-all ${isPreviousAllowed ? 'hover:bg-slate-800 cursor-pointer' : 'opacity-30 cursor-not-allowed'}`} title="Previous Card"><ChevronLeft size={16} /></button>
          <button onClick={() => { if (isNextAllowed) jumpToStep(currentStep + 1); }} aria-disabled={!isNextAllowed} className={`p-2 rounded-lg border border-slate-700 transition-all ${isNextAllowed ? 'hover:bg-slate-800 cursor-pointer' : 'opacity-30 cursor-not-allowed'}`} title="Next Card"><ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  );
};
