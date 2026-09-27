import React from 'react';
import { WhiteMasterSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Heart, Users, MessageCircle } from 'lucide-react';

export const WhiteMasterSlide: React.FC<{ slide: WhiteMasterSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode, selectedElementId, selectElement } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'heart': return <Heart className="w-6 h-6 text-violet-500" fill="currentColor" />;
      case 'users': return <Users className="w-6 h-6 text-violet-500" />;
      case 'chat': return <MessageCircle className="w-6 h-6 text-violet-500" />;
      default: return <Heart className="w-6 h-6 text-violet-500" />;
    }
  };

  const getSelectClass = (elementId: string) => {
    if (!isEditMode) return '';

    return selectedElementId === elementId
      ? 'ring-2 ring-violet-500 ring-offset-4 cursor-pointer rounded-lg'
      : 'hover:ring-1 hover:ring-violet-300 hover:ring-offset-2 cursor-pointer';
  };

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
      onClick={() => isEditMode && selectElement(null)}
    >
      <svg className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-20" viewBox="0 0 600 600" fill="none">
        <circle cx="100" cy="100" r="280" stroke={theme.accentColor} strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="100" cy="100" r="380" stroke={theme.accentColor} strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="100" cy="100" r="480" stroke={theme.accentColor} strokeWidth="0.75" strokeDasharray="12 12" />
      </svg>

      <div
        className={`absolute top-[60px] right-[100px] z-20 ${getSelectClass('logo')}`}
        onClick={(e) => { if (isEditMode) { e.stopPropagation(); selectElement('logo'); } }}
      >
        <img src={slide.logo.src} alt={slide.logo.alt} className="h-[46px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="absolute top-[120px] left-[140px] w-[920px] z-20 flex flex-col">
        {slide.kicker && (
          <div
            className={`text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 mb-4 font-mono ${getSelectClass('kicker')}`}
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => {
              const val = e.currentTarget.textContent || '';
              applyEdit((s) => ({ ...s, kicker: val }));
            }}
          >
            {slide.kicker}
          </div>
        )}

        <h1
          style={{ color: theme.textColor }}
          className={`font-ubuntu text-[68px] font-extrabold tracking-tight leading-[1.08] mb-6 slide-up-anim ${getSelectClass('headline')}`}
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => {
            const val = e.currentTarget.textContent || '';
            applyEdit((s) => (s.type === 'white-master' ? { ...s, headline: val, title: val } : { ...s, title: val }));
          }}
        >
          {slide.headline}
        </h1>

        <p
          style={{ color: theme.subtextColor }}
          className={`font-poppins text-[24px] leading-[1.45] mb-12 max-w-[840px] font-normal slide-up-anim stagger-1 ${getSelectClass('subtitle')}`}
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => {
            const val = e.currentTarget.textContent || '';
            applyEdit((s) => ({ ...s, subtitle: val }));
          }}
        >
          {slide.subtitle}
        </p>

        <div className={`flex flex-col gap-6 mt-2 slide-up-anim stagger-2 ${getSelectClass('bullets')}`}>
          {slide.bulletPoints.map((item, index) => (
            <div key={item.id} className="relative flex items-start gap-6 group">
              <div
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="relative z-10 w-[54px] h-[54px] rounded-full border flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105"
              >
                {getIcon(item.icon)}
              </div>
              {index < slide.bulletPoints.length - 1 && (
                <div
                  style={{ background: `linear-gradient(to bottom, ${theme.accentColor}, transparent)` }}
                  className="absolute top-[54px] left-[26px] w-[2px] h-[40px] z-0 opacity-40"
                />
              )}
              <div className="flex flex-col pt-1">
                <h3
                  style={{ color: theme.textColor }}
                  className="font-ubuntu text-[22px] font-bold leading-snug mb-1"
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const val = e.currentTarget.textContent || '';
                    applyEdit((s) => {
                      if (s.type !== 'white-master') return s;
                      const next = s.bulletPoints.map((bp) => (bp.id === item.id ? { ...bp, title: val } : bp));

                      return { ...s, bulletPoints: next };
                    });
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{ color: theme.subtextColor }}
                  className="font-poppins text-[17px] leading-[1.4] max-w-[760px]"
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const val = e.currentTarget.textContent || '';
                    applyEdit((s) => {
                      if (s.type !== 'white-master') return s;
                      const next = s.bulletPoints.map((bp) => (bp.id === item.id ? { ...bp, description: val } : bp));

                      return { ...s, bulletPoints: next };
                    });
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 w-[960px] h-[1080px] z-10 overflow-hidden ${getSelectClass('heroImage')}`}
        onClick={(e) => { if (isEditMode) { e.stopPropagation(); selectElement('heroImage'); } }}
      >
        <img
          src={slide.heroImage.src}
          alt={slide.heroImage.alt}
          className="w-full h-full object-cover object-center"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 15%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 15%, black 100%)',
          }}
        />

        <div
          className="absolute top-[44%] left-[48%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ filter: `drop-shadow(0 0 16px ${slide.neonGlow.color}) drop-shadow(0 0 32px ${slide.neonGlow.color}66)` }}
        >
          <svg className="w-[180px] h-[180px] neon-pulse-anim" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="#F43F5E" strokeWidth="2.5" fill="rgba(244, 63, 94, 0.15)"
            />
            <path
              d="M12 18.5l-1.1-1.01C6.2 13.2 3.5 10.8 3.5 8 3.5 5.8 5.3 4 7.5 4c1.4 0 2.8.7 3.6 1.7L12 6.8l.9-1.1C13.7 4.7 15.1 4 16.5 4 18.7 4 20.5 5.8 20.5 8c0 2.8-2.7 5.2-7.4 9.5L12 18.5z"
              stroke="#FFF" strokeWidth="1.2" fill="rgba(255, 255, 255, 0.2)"
            />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[180px] z-15 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 180" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="whiteSlideWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={theme.stops[6].hex} />
              <stop offset="50%" stopColor={theme.stops[5].hex} />
              <stop offset="100%" stopColor={theme.stops[7].hex} />
            </linearGradient>
          </defs>
          <path d="M0,110 C480,160 960,80 1440,130 C1680,155 1820,135 1920,120 L1920,180 L0,180 Z" fill="#0F172A" opacity="0.9" />
          <path d="M0,135 C380,85 840,165 1320,105 C1580,75 1780,125 1920,115 L1920,180 L0,180 Z" fill="url(#whiteSlideWaveGrad)" opacity="0.95" />
        </svg>
      </div>
    </div>
  );
};
