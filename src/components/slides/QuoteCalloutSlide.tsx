import React from 'react';
import { QuoteCalloutSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { CheckCircle2, Quote } from 'lucide-react';

export const QuoteCalloutSlide: React.FC<{ slide: QuoteCalloutSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';

  const authorObj = typeof slide.author === 'object' && slide.author !== null ? slide.author : null;
  const authorName: string = authorObj ? authorObj.name : (typeof slide.author === 'string' ? slide.author : 'Alim Ul Karim');
  const rawRole: string = authorObj ? authorObj.role : (typeof (slide as any).role === 'string' ? (slide as any).role : 'Chief Software Engineer');
  const authorRole: string = authorName.toLowerCase().includes('alim') ? 'Chief Software Engineer' : rawRole;
  const company: string = authorObj ? authorObj.company : (typeof (slide as any).company === 'string' ? (slide as any).company : 'Enterprise Systems & Autonomous Runtimes');
  const avatarUrl: string = authorObj?.avatarUrl || (typeof (slide as any).avatarUrl === 'string' ? (slide as any).avatarUrl : '/assets/screenshots/hero-speaker-clean.png');
  const badge: string = slide.contextBadge || (typeof (slide as any).badge === 'string' ? (slide as any).badge : 'Architecture Keynote');

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[110px] flex flex-col justify-between animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
          {slide.kicker || 'EXECUTIVE KEYNOTE TESTIMONY'}
        </div>
        <img src={logoSrc} alt="Logo" className="h-[42px] w-auto object-contain filter contrast-125" />
      </div>

      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="my-auto z-20 w-full max-w-[1550px] mx-auto p-14 rounded-3xl border shadow-2xl backdrop-blur-md flex flex-col justify-between gap-10 slide-up-anim"
      >
        <div className="flex items-start gap-8">
          <div style={{ color: theme.accentColor }} className="shrink-0 opacity-40">
            <Quote size={64} className="rotate-180" />
          </div>
          <blockquote
            style={{ color: theme.textColor, textShadow: theme.headerShadow }}
            className="font-ubuntu text-[36px] font-bold tracking-tight leading-[1.4] italic"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, quote: e.currentTarget.textContent || '' }))}
          >
            "{slide.quote}"
          </blockquote>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center gap-5">
            <img src={avatarUrl} alt={authorName} className="w-20 h-20 rounded-2xl object-cover border-2 border-violet-500/50 shadow-md" />
            <div>
              <div className="flex items-center gap-3">
                <span style={{ color: theme.textColor }} className="font-ubuntu text-2xl font-black">{authorName}</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase">
                  <CheckCircle2 size={12} /> Verified
                </span>
              </div>
              <div style={{ color: theme.accentColor }} className="font-poppins text-base font-semibold mt-0.5">
                {authorRole} • <span style={{ color: theme.subtextColor }}>{company}</span>
              </div>
            </div>
          </div>

          <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase border bg-violet-500/10 text-violet-400 border-violet-500/30">
            {badge}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between z-20 font-mono text-[13px]" style={{ color: theme.subtextColor }}>
        <span>{slide.footnote || 'Architectural Authority • High-Conviction Executive Pull-Quote'}</span>
        <span className="opacity-75">1080p Pure DOM Pull-Quote Canvas</span>
      </div>
    </div>
  );
};
