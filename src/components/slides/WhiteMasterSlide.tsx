import React from 'react';
import { WhiteMasterSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Heart, Users, MessageCircle } from 'lucide-react';
import { WhiteMasterHeroPlate } from './white-master/WhiteMasterHeroPlate';

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
      <div className={`absolute top-[60px] right-[100px] z-20 ${getSelectClass('logo')}`} onClick={(e) => { if (isEditMode) { e.stopPropagation(); selectElement('logo'); } }}>
        <img src={slide.logo.src} alt={slide.logo.alt} className="h-[46px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="absolute top-[120px] left-[140px] w-[920px] z-20 flex flex-col">
        {slide.kicker && (
          <div className={`text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 mb-4 font-mono ${getSelectClass('kicker')}`} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
            {slide.kicker}
          </div>
        )}
        <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className={`font-ubuntu text-[68px] font-extrabold tracking-tight leading-[1.08] mb-6 slide-up-anim ${getSelectClass('headline')}`} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'white-master' ? { ...s, headline: e.currentTarget.textContent || '', title: e.currentTarget.textContent || '' } : { ...s, title: e.currentTarget.textContent || '' }))}>
          {slide.headline}
        </h1>
        <p style={{ color: theme.subtextColor }} className={`font-poppins text-[24px] leading-[1.45] mb-10 max-w-[840px] font-normal slide-up-anim stagger-1 ${getSelectClass('subtitle')}`} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
          {slide.subtitle}
        </p>

        <div className={`flex flex-col gap-5 mt-2 slide-up-anim stagger-2 ${getSelectClass('bullets')}`}>
          {slide.bulletPoints.map((item, index) => (
            <div key={item.id} className="relative flex items-start gap-5 group">
              <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="relative z-10 w-[50px] h-[50px] rounded-full border flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                {getIcon(item.icon)}
              </div>
              {index < slide.bulletPoints.length - 1 && (
                <div style={{ background: `linear-gradient(to bottom, ${theme.accentColor}, transparent)` }} className="absolute top-[50px] left-[24px] w-[2px] h-[36px] z-0 opacity-40" />
              )}
              <div className="flex flex-col pt-0.5">
                <h3 style={{ color: theme.textColor }} className="font-ubuntu text-[20px] font-bold leading-snug mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'white-master' ? { ...s, bulletPoints: s.bulletPoints.map((bp) => bp.id === item.id ? { ...bp, title: e.currentTarget.textContent || '' } : bp) } : s))}>
                  {item.title}
                </h3>
                <p style={{ color: theme.subtextColor }} className="font-poppins text-[16px] leading-[1.35] max-w-[760px]" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => (s.type === 'white-master' ? { ...s, bulletPoints: s.bulletPoints.map((bp) => bp.id === item.id ? { ...bp, description: e.currentTarget.textContent || '' } : bp) } : s))}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhiteMasterHeroPlate slide={slide} theme={theme} isEditMode={isEditMode} selectClass={getSelectClass('heroImage')} onSelectHero={(e) => { if (isEditMode) { e.stopPropagation(); selectElement('heroImage'); } }} />
    </div>
  );
};
