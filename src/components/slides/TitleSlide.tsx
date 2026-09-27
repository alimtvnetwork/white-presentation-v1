import React from 'react';
import { TitleSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';

interface TitleSlideProps {
  slide: TitleSlideData;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ slide }) => {
  const { activeThemeId } = useDeckStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];

  return (
    <div className="relative w-[1920px] h-[1080px] bg-slate-50 overflow-hidden text-slate-900 select-none flex flex-col justify-between p-[140px]">
      {/* Top Header Row */}
      <div className="flex items-center justify-between z-20">
        <div className="inline-flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-violet-600 animate-ping" />
          <span className="text-[16px] font-bold tracking-[0.2em] uppercase text-violet-700 bg-violet-100/70 px-4 py-1.5 rounded-full border border-violet-200">
            {slide.kicker || 'EXECUTIVE KEYNOTE'}
          </span>
        </div>
        <img
          src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png"
          alt="Riseup Asia Logo"
          className="h-[48px] w-auto object-contain"
        />
      </div>

      {/* Center Editorial Title */}
      <div className="max-w-[1400px] z-20 my-auto">
        <h1 className="font-ubuntu text-[82px] font-black tracking-tight leading-[1.05] text-slate-900 mb-8">
          {slide.title}
        </h1>
        <p className="font-poppins text-[28px] text-slate-600 leading-[1.4] max-w-[1050px] font-normal">
          {slide.subtitle}
        </p>
      </div>

      {/* Bottom Presenter Credentials */}
      <div className="flex items-center justify-between z-20 pt-8 border-t border-slate-200/80">
        <div className="flex items-center gap-5">
          <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-ubuntu text-2xl font-bold shadow-md">
            {slide.presenter.name.charAt(0)}
          </div>
          <div>
            <div className="font-ubuntu text-[22px] font-bold text-slate-900">
              {slide.presenter.name}
            </div>
            <div className="font-poppins text-[16px] text-slate-500">
              {slide.presenter.role} • {slide.presenter.company}
            </div>
          </div>
        </div>

        {slide.date && (
          <div className="font-mono text-[16px] text-slate-400 font-semibold tracking-wide">
            {slide.date}
          </div>
        )}
      </div>

      {/* Bottom Organic Wave Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[140px] pointer-events-none z-10 opacity-70">
        <svg className="w-full h-full" viewBox="0 0 1920 140" preserveAspectRatio="none" fill="none">
          <path
            d="M0,80 C400,20 800,120 1200,60 C1500,10 1750,90 1920,70 L1920,140 L0,140 Z"
            fill={theme.stops[6].hex}
            opacity="0.3"
          />
          <path
            d="M0,100 C500,40 950,130 1400,80 C1650,40 1800,110 1920,90 L1920,140 L0,140 Z"
            fill={theme.stops[7].hex}
            opacity="0.85"
          />
        </svg>
      </div>
    </div>
  );
};
