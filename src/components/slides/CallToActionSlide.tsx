import React from 'react';
import { CallToActionSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { ArrowRight, Mail, Globe, ShieldCheck, MapPin } from 'lucide-react';

export const CallToActionSlide: React.FC<{ slide: CallToActionSlideData }> = ({ slide }) => {
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
          {slide.kicker || 'NEXT STEPS & ENGAGEMENT'}
        </div>
        <img src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png" alt="Logo" className="h-[40px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="z-20 my-auto text-center max-w-[1300px] mx-auto flex flex-col items-center">
        <h1
          style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[54px] font-black tracking-tight leading-tight mb-4"
          contentEditable={isEditMode} suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => (s.type === 'call-to-action' ? { ...s, headline: e.currentTarget.textContent || '' } : s))}
        >
          {slide.headline || slide.title}
        </h1>
        <p
          style={{ color: theme.subtextColor }} className="font-poppins text-[22px] leading-relaxed max-w-[950px] mb-8"
          contentEditable={isEditMode} suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => (s.type === 'call-to-action' ? { ...s, body: e.currentTarget.textContent || '' } : s))}
        >
          {slide.body || slide.subtitle}
        </p>

        <div className="flex items-center gap-5 mb-10">
          <button style={{ backgroundColor: theme.accentColor }} className="px-8 py-4 rounded-xl text-white font-ubuntu font-bold text-[18px] shadow-lg flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
            <span>{slide.primaryAction.label}</span>
            <ArrowRight size={20} />
          </button>
          {slide.secondaryAction && (
            <button style={{ borderColor: theme.cardBorder, backgroundColor: theme.cardBg, color: theme.textColor }} className="px-8 py-4 rounded-xl border font-ubuntu font-bold text-[18px] shadow-md hover:scale-105 transition-transform cursor-pointer">
              {slide.secondaryAction.label}
            </button>
          )}
        </div>

        <div className="grid grid-cols-3 gap-6 w-full max-w-[1100px] mb-8">
          <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-4 rounded-xl border shadow-sm flex items-center gap-3">
            <Mail size={20} style={{ color: theme.accentColor }} />
            <div className="text-left font-mono text-[14px]">
              <div style={{ color: theme.subtextColor }} className="text-[11px] uppercase">Email Desk</div>
              <div style={{ color: theme.textColor }} className="font-bold">{slide.contactInfo.email}</div>
            </div>
          </div>
          <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-4 rounded-xl border shadow-sm flex items-center gap-3">
            <Globe size={20} style={{ color: theme.accentColor }} />
            <div className="text-left font-mono text-[14px]">
              <div style={{ color: theme.subtextColor }} className="text-[11px] uppercase">Web Portal</div>
              <div style={{ color: theme.textColor }} className="font-bold">{slide.contactInfo.website}</div>
            </div>
          </div>
          <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="p-4 rounded-xl border shadow-sm flex items-center gap-3">
            <MapPin size={20} style={{ color: theme.accentColor }} />
            <div className="text-left font-mono text-[14px]">
              <div style={{ color: theme.subtextColor }} className="text-[11px] uppercase">Locations</div>
              <div style={{ color: theme.textColor }} className="font-bold">{slide.contactInfo.location || 'Singapore • Global'}</div>
            </div>
          </div>
        </div>

        {slide.guaranteePill && (
          <div style={{ borderColor: theme.cardBorder, backgroundColor: theme.cardBg, color: theme.subtextColor }} className="px-6 py-2 rounded-full border text-[13px] font-mono flex items-center gap-2">
            <ShieldCheck size={16} style={{ color: theme.accentColor }} />
            <span>{slide.guaranteePill}</span>
          </div>
        )}
      </div>

      <div style={{ borderColor: theme.cardBorder }} className="flex items-center justify-between z-20 pt-4 border-t">
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px]">Alim Ul Karim • Chief Software Engineer • Enterprise Runtimes</div>
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px]">WHITE SOVEREIGN ENGINE</div>
      </div>
    </div>
  );
};
