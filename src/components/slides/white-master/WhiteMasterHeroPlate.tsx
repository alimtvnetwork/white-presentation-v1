import React from 'react';
import { WhiteMasterSlideData } from '../../../types/presentation';
import { ThemePalette } from '../../../types/presentation';

interface HeroPlateProps {
  slide: WhiteMasterSlideData;
  theme: ThemePalette;
  isEditMode: boolean;
  onSelectHero: (e: React.MouseEvent) => void;
  selectClass: string;
}

export const WhiteMasterHeroPlate: React.FC<HeroPlateProps> = ({
  slide,
  theme,
  onSelectHero,
  selectClass,
}) => {
  return (
    <>
      <div
        className={`absolute top-0 right-0 w-[960px] h-[1080px] z-10 overflow-hidden ${selectClass}`}
        onClick={onSelectHero}
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
        {slide.neonGlow?.enabled && (
          <div
            className="absolute top-[44%] left-[48%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ filter: `drop-shadow(0 0 16px ${slide.neonGlow.color})` }}
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[180px] z-15 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 180" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="whiteSlideWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={theme.stops[6]?.hex || '#7C3AED'} />
              <stop offset="50%" stopColor={theme.stops[5]?.hex || '#6366F1'} />
              <stop offset="100%" stopColor={theme.stops[7]?.hex || '#8B5CF6'} />
            </linearGradient>
          </defs>
          <path d="M0,110 C480,160 960,80 1440,130 C1680,155 1820,135 1920,120 L1920,180 L0,180 Z" fill="#0F172A" opacity="0.9" />
          <path d="M0,135 C380,85 840,165 1320,105 C1580,75 1780,125 1920,115 L1920,180 L0,180 Z" fill="url(#whiteSlideWaveGrad)" opacity="0.95" />
        </svg>
      </div>
    </>
  );
};
