import React from 'react';
import { FeatureGridSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Sparkles, Layers, Palette, LayoutGrid, Edit3, Camera, ShieldCheck, Cpu, Zap, Box } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Layers, Palette, LayoutGrid, Edit3, Camera, ShieldCheck, Cpu, Zap, Sparkles, Box,
};

export const FeatureGridSlide: React.FC<{ slide: FeatureGridSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';
  const list = slide.features || (slide as any).cards || [];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[100px] flex flex-col justify-between animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 mb-2 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
            {slide.kicker || 'CORE PLATFORM CAPABILITIES'}
          </div>
          <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[52px] font-extrabold tracking-tight leading-tight slide-up-anim" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p style={{ color: theme.subtextColor }} className="font-poppins text-[18px] max-w-[1000px] mt-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
              {slide.subtitle}
            </p>
          )}
        </div>
        <img src={logoSrc} alt="Logo" className="h-[42px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="grid grid-cols-3 gap-6 my-auto z-20 w-full">
        {list.slice(0, 6).map((item: any, idx: number) => {
          const IconComponent = ICON_MAP[item.icon] || Sparkles;
          const isHighlight = Boolean(item.isHighlight || item.hasFeaturedGlow);

          return (
            <div
              key={item.id || idx}
              style={{
                backgroundColor: isHighlight ? `${theme.accentColor}12` : theme.cardBg,
                borderColor: isHighlight ? theme.accentColor : theme.cardBorder,
              }}
              className={`p-7 rounded-2xl border-2 backdrop-blur-md shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 slide-up-anim stagger-${idx + 1} ${isHighlight ? 'bento-glow-pulse' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div style={{ backgroundColor: `${theme.accentColor}20`, color: theme.accentColor }} className="w-12 h-12 rounded-xl flex items-center justify-center shadow-inner">
                    <IconComponent size={24} />
                  </div>
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase border bg-violet-500/10 text-violet-400 border-violet-500/30">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 style={{ color: theme.textColor }} className="font-ubuntu text-xl font-bold mb-2">{item.title}</h3>
                <p style={{ color: theme.subtextColor }} className="font-poppins text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] uppercase tracking-wider text-right" style={{ color: theme.subtextColor }}>
                Feature 0{idx + 1}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-20 font-mono text-[13px]" style={{ color: theme.subtextColor }}>
        <span>6-Card Bento Feature Matrix • Modular Capabilities</span>
        <span className="opacity-75">1080p Pure DOM Responsive Grid</span>
      </div>
    </div>
  );
};
