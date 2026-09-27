import React from 'react';
import { BaseSlide } from '../../types/presentation';
import { Layers, Cpu, ShieldCheck } from 'lucide-react';

export interface KeyPlayerSlideData extends BaseSlide {
  type: 'key-player';
  name: string;
  role: string;
  avatarUrl: string;
  skills: string[];
  pillars: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

interface KeyPlayerSlideProps {
  slide: KeyPlayerSlideData;
}

export const KeyPlayerSlide: React.FC<KeyPlayerSlideProps> = ({ slide }) => {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'cloud':
        return <Cpu className="w-6 h-6 text-violet-600" />;
      case 'security':
        return <ShieldCheck className="w-6 h-6 text-violet-600" />;
      default:
        return <Layers className="w-6 h-6 text-violet-600" />;
    }
  };

  return (
    <div className="relative w-[1920px] h-[1080px] bg-slate-50 overflow-hidden text-slate-900 select-none p-[120px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-600" />
            <span className="text-[14px] font-bold tracking-[0.2em] uppercase text-violet-700 bg-violet-100/70 px-3.5 py-1 rounded-full border border-violet-200">
              {slide.kicker || 'TECHNICAL LEADERSHIP'}
            </span>
          </div>
          <h1 className="font-ubuntu text-[56px] font-extrabold text-slate-900 tracking-tight leading-tight">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="font-poppins text-[20px] text-slate-500 max-w-[1000px] mt-1">
              {slide.subtitle}
            </p>
          )}
        </div>

        <img
          src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png"
          alt="Riseup Asia Logo"
          className="h-[44px] w-auto object-contain"
        />
      </div>

      {/* Main Two-Column Layout */}
      <div className="flex items-center gap-14 my-auto z-20">
        {/* Left Column: Portrait Card & Tech Badges */}
        <div className="flex flex-col gap-6 shrink-0 w-[440px]">
          <div className="w-[440px] h-[520px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-white relative">
            <img
              src={slide.avatarUrl}
              alt={slide.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950/80 to-transparent text-white">
              <h3 className="font-ubuntu text-[26px] font-bold leading-tight">{slide.name}</h3>
              <p className="font-poppins text-[15px] text-slate-300">{slide.role}</p>
            </div>
          </div>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-2">
            {slide.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: 3 Pillar Cards */}
        <div className="flex-1 flex flex-col gap-6">
          {slide.pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
                {getPillarIcon(pillar.icon)}
              </div>
              <div>
                <h4 className="font-ubuntu text-[22px] font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h4>
                <p className="font-poppins text-[17px] text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-right text-slate-400 font-mono text-[14px]">
        Deep Technical Domain Specialization
      </div>
    </div>
  );
};
