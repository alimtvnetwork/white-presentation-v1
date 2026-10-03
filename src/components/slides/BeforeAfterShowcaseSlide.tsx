import React, { useState } from 'react';
import { BeforeAfterShowcaseSlideData, BeforeAfterFeature } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { XCircle, CheckCircle, ArrowRight, Zap } from 'lucide-react';

export const BeforeAfterShowcaseSlide: React.FC<{ slide: BeforeAfterShowcaseSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const [isAfterOnly, setIsAfterOnly] = useState(false);
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const headerShadow = theme.headerShadow || (isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px');
  const features = slide.features || [];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30">
            {slide.kicker || 'TRANSFORMATION SHOWCASE'}
          </span>
          <span style={{ color: theme.subtextColor }} className="font-mono text-xs">• Bilateral Contrast</span>
        </div>
        <h1
          style={{ color: theme.textColor, textShadow: headerShadow }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode} suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Architectural Modernization: Before vs After'}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8 my-auto z-10">
        {!isAfterOnly && (
          <div style={{ backgroundColor: theme.cardBg, borderColor: 'rgba(244,63,94,0.3)' }} className="p-8 rounded-3xl border-2 shadow-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30">
                {slide.beforeHeader || 'LEGACY ARCHITECTURE'}
              </span>
              <div className="space-y-4 mt-6">
                {features.map((f: BeforeAfterFeature, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/10">
                    <XCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-ubuntu text-sm font-bold text-rose-300">{f.aspect}</div>
                      <div style={{ color: theme.subtextColor }} className="font-poppins text-xs mt-0.5">{f.beforeState}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-rose-500/20 font-mono text-xs text-rose-400 font-bold">High Friction • High Overhead</div>
          </div>
        )}

        <div style={{ backgroundColor: theme.cardBg, borderColor: 'rgba(16,185,129,0.4)' }} className={`p-8 rounded-3xl border-2 shadow-2xl flex flex-col justify-between bento-glow-pulse ${isAfterOnly ? 'col-span-2' : ''}`}>
          <div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {slide.afterHeader || 'SOVEREIGN SYSTEM STANDARD'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-600 text-white shadow-lg flex items-center gap-1">
                <Zap size={13} /> {slide.multiplierBadge || '10x Acceleration'}
              </span>
            </div>
            <div className="space-y-4 mt-6">
              {features.map((f: BeforeAfterFeature, i: number) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-ubuntu text-sm font-bold text-emerald-300">{f.aspect}</div>
                    <div style={{ color: theme.subtextColor }} className="font-poppins text-xs mt-0.5">{f.afterState}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-emerald-500/20 font-mono text-xs text-emerald-400 font-bold">Autonomous Zero-Defect Delivery</div>
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: theme.subtextColor }}>
        <button onClick={() => setIsAfterOnly(!isAfterOnly)} className="text-amber-600 dark:text-amber-400 font-bold cursor-pointer hover:underline">
          {isAfterOnly ? 'Show Full Bilateral Comparison' : 'Focus Sovereign Transformation'}
        </button>
        <span className="opacity-70 flex items-center gap-1.5">Pure DOM Vector Typography <ArrowRight size={12} /></span>
      </div>
    </div>
  );
};
