import React from 'react';
import { TechStackSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Cpu, Terminal, Shield, Zap } from 'lucide-react';

export const TechStackSlide: React.FC<{ slide: TechStackSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];

  const getCategoryIcon = (icon: string) => {
    const props = { className: "w-5 h-5", style: { color: theme.accentColor } };
    if (icon === 'terminal') return <Terminal {...props} />;
    if (icon === 'shield') return <Shield {...props} />;
    if (icon === 'zap') return <Zap {...props} />;

    return <Cpu {...props} />;
  };

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
            {slide.kicker || 'SYSTEM ARCHITECTURE'}
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

      <div className="grid grid-cols-4 gap-6 my-auto z-20 max-w-[1640px] w-full mx-auto">
        {slide.categories.map((cat, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
            className="border rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div style={{ backgroundColor: `${theme.accentColor}20` }} className="w-10 h-10 rounded-xl flex items-center justify-center">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 style={{ color: theme.textColor }} className="font-ubuntu text-[18px] font-bold">{cat.name}</h3>
              </div>
              <div className="flex flex-col gap-3">
                {cat.technologies.map((tech, tIdx) => (
                  <div key={tIdx} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span style={{ color: theme.textColor }} className="font-poppins text-[15px] font-medium">{tech.name}</span>
                    <span style={{ color: theme.accentColor, borderColor: `${theme.accentColor}40` }} className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border">
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ color: theme.subtextColor }} className="text-right font-mono text-[13px] opacity-75">Production Grade Engineering Stack • Zero External Debt</div>
    </div>
  );
};
