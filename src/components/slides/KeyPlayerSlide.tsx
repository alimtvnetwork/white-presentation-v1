import React from 'react';
import { BaseSlide } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Layers, Cpu, ShieldCheck } from 'lucide-react';

export interface KeyPlayerSlideData extends BaseSlide {
  type: 'key-player'; name: string; role: string; avatarUrl: string; skills: string[]; pillars: Array<{ title: string; description: string; icon: string; }>;
}

export const KeyPlayerSlide: React.FC<{ slide: KeyPlayerSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];

  const getPillarIcon = (icon: string) => {
    const props = { className: "w-6 h-6", style: { color: theme.accentColor } };

    return icon === 'cloud' ? <Cpu {...props} /> : icon === 'security' ? <ShieldCheck {...props} /> : <Layers {...props} />;
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
            {slide.kicker || 'TECHNICAL LEADERSHIP'}
          </div>
          <h1
            style={{ color: theme.textColor, textShadow: theme.headerShadow }}
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

      <div className="flex items-center gap-12 my-auto z-20">
        <div className="flex flex-col gap-6 shrink-0 w-[420px]">
          <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="w-[420px] h-[480px] rounded-3xl overflow-hidden border shadow-xl relative">
            <img src={slide.avatarUrl} alt={slide.name} className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="font-ubuntu text-[24px] font-bold">{slide.name}</h3>
              <p className="font-poppins text-[15px] opacity-80">{slide.role}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {slide.skills.map((skill, i) => (
              <span key={i} style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textColor }} className="border px-3 py-1 rounded-full text-xs font-mono font-medium shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          {slide.pillars.map((pillar, i) => (
            <div key={i} style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="border p-7 rounded-2xl shadow-sm flex items-start gap-5">
              <div style={{ backgroundColor: `${theme.accentColor}18`, borderColor: `${theme.accentColor}30` }} className="w-12 h-12 rounded-xl border flex items-center justify-center shrink-0">
                {getPillarIcon(pillar.icon)}
              </div>
              <div>
                <h4 style={{ color: theme.textColor }} className="font-ubuntu text-[20px] font-bold mb-1">{pillar.title}</h4>
                <p style={{ color: theme.subtextColor }} className="font-poppins text-[16px] leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ color: theme.subtextColor }} className="text-right font-mono text-[13px] opacity-75">Deep Technical Domain Specialization</div>
    </div>
  );
};
