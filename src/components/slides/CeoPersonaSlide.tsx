import React from 'react';
import { PersonaSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES, shadeTextByCharacter } from '../../themes/gradientTokens';
import { CheckCircle2 } from 'lucide-react';

export const CeoPersonaSlide: React.FC<{ slide: PersonaSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const shadedName = shadeTextByCharacter(slide.name, activeThemeId, 5, 9);

  return (
    <div style={{ backgroundColor: theme.canvasBg, color: theme.textColor }} className="relative w-[1920px] h-[1080px] overflow-hidden select-none flex animate__animated animate__fadeIn">
      <div className="w-[1100px] h-full p-[100px] pr-[60px] flex flex-col justify-between z-20">
        <div>
          <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 mb-3 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title || 'TECHNICAL LEADERSHIP'}
          </div>
          <h1 className="font-ubuntu text-[68px] font-black tracking-tight leading-none mb-3 slide-up-anim">
            {shadedName.map((item, idx) => (<span key={idx} style={{ color: item.hex }}>{item.char}</span>))}
          </h1>
          <p style={{ color: theme.subtextColor }} className="font-poppins text-[22px] font-medium mb-6" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'persona' ? { ...s, role: e.currentTarget.textContent || '' } : s))}>
            {slide.role}
          </p>
          {slide.quote && (
            <div style={{ backgroundColor: theme.cardBg, borderColor: theme.accentColor }} className="p-5 border-l-4 rounded-r-xl mb-8 shadow-sm">
              <p style={{ color: theme.textColor }} className="font-poppins text-[20px] italic leading-[1.4]" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'persona' ? { ...s, quote: e.currentTarget.textContent?.replace(/^"|"$/g, '') || '' } : s))}>
                "{slide.quote}"
              </p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-5 mb-8">
            {slide.metrics.map((metric, i) => (
              <div key={i} style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="border p-5 rounded-2xl shadow-sm flex flex-col glass-card-interactive">
                <div style={{ color: theme.accentColor }} className="font-ubuntu text-[40px] font-extrabold leading-none mb-1">{metric.value}</div>
                <div style={{ color: theme.subtextColor }} className="font-poppins text-[14px] font-medium uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {slide.bioBullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 style={{ color: theme.accentColor }} className="w-5 h-5 shrink-0 mt-0.5" />
                <span
                  style={{ color: theme.textColor }}
                  className="font-poppins text-[16px] leading-relaxed"
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  onBlur={(e) => applyEdit((s) => {
                    if (s.type !== 'persona') return s;
                    const next = [...s.bioBullets];
                    next[i] = e.currentTarget.textContent || '';

                    return { ...s, bioBullets: next };
                  })}
                >
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[820px] h-full relative overflow-hidden z-10">
        <img
          src={slide.avatarUrl}
          alt={slide.name}
          className="w-full h-full object-cover object-top"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 15%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 15%, black 100%)',
          }}
        />
        <div className="absolute top-[60px] right-[80px] z-30">
          <img src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png" alt="Riseup Asia Logo" className="h-[44px] w-auto object-contain filter contrast-125" />
        </div>
      </div>
    </div>
  );
};
