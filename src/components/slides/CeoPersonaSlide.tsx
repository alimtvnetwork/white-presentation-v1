import React from 'react';
import { PersonaSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { shadeTextByCharacter } from '../../themes/gradientTokens';
import { CheckCircle2 } from 'lucide-react';

interface CeoPersonaSlideProps {
  slide: PersonaSlideData;
}

export const CeoPersonaSlide: React.FC<CeoPersonaSlideProps> = ({ slide }) => {
  const { activeThemeId } = useDeckStore();
  const shadedName = shadeTextByCharacter(slide.name, activeThemeId, 5, 9);

  return (
    <div className="relative w-[1920px] h-[1080px] bg-white overflow-hidden text-slate-900 select-none flex">
      {/* Left Column: Bio, Shaded Name & Proof Pills (58% width) */}
      <div className="w-[1100px] h-full p-[120px] pr-[60px] flex flex-col justify-between z-20">
        <div>
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-600" />
            <span className="text-[14px] font-bold tracking-[0.2em] uppercase text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-200">
              EXECUTIVE LEADERSHIP
            </span>
          </div>

          {/* Character-Level Shaded Name */}
          <h1 className="font-ubuntu text-[72px] font-black tracking-tight leading-none mb-3">
            {shadedName.map((item, idx) => (
              <span key={idx} style={{ color: item.hex }}>
                {item.char}
              </span>
            ))}
          </h1>

          {/* Role */}
          <p className="font-poppins text-[24px] text-slate-600 font-medium mb-8">
            {slide.role}
          </p>

          {/* Founder Quote */}
          {slide.quote && (
            <div className="p-6 bg-slate-50 border-l-4 border-violet-600 rounded-r-xl mb-10 shadow-sm">
              <p className="font-poppins text-[22px] italic text-slate-800 leading-[1.45]">
                "{slide.quote}"
              </p>
            </div>
          )}

          {/* Quantitative Metric Pills */}
          <div className="grid grid-cols-2 gap-5 mb-10">
            {slide.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="font-ubuntu text-[44px] font-extrabold text-violet-700 leading-none mb-1">
                  {metric.value}
                </div>
                <div className="font-poppins text-[15px] font-medium text-slate-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bulleted Achievements */}
          <div className="flex flex-col gap-3">
            {slide.bioBullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                <span className="font-poppins text-[17px] text-slate-700 leading-relaxed">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Full-Height Asymmetric Portrait Plate with Feathered Mask */}
      <div className="w-[820px] h-full relative overflow-hidden z-10">
        <img
          src={slide.avatarUrl}
          alt={slide.name}
          className="w-full h-full object-cover object-top"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 15%, black 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 15%, black 100%)',
          }}
        />

        {/* Ambient Top Logo */}
        <div className="absolute top-[60px] right-[80px] z-30">
          <img
            src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png"
            alt="Riseup Asia Logo"
            className="h-[44px] w-auto object-contain filter contrast-125"
          />
        </div>
      </div>
    </div>
  );
};
