import React from 'react';
import { TalentFunnelSlideData } from '../../types/presentation';

interface TalentFunnelSlideProps {
  slide: TalentFunnelSlideData;
}

export const TalentFunnelSlide: React.FC<TalentFunnelSlideProps> = ({ slide }) => {
  return (
    <div className="relative w-[1920px] h-[1080px] bg-white overflow-hidden text-slate-900 select-none p-[120px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-600" />
            <span className="text-[14px] font-bold tracking-[0.2em] uppercase text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-200">
              {slide.kicker || 'TALENT RIGOR'}
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

      {/* 4-Tier Funnel Stages */}
      <div className="flex flex-col items-center gap-4 my-auto z-20 max-w-[1400px] mx-auto w-full">
        {slide.stages.map((stage, idx) => {
          // Shrink width progressively: 100% -> 85% -> 70% -> 55%
          const widthPercent = 100 - idx * 15;
          const isFinal = idx === slide.stages.length - 1;

          return (
            <div
              key={stage.stageNumber}
              style={{ width: `${widthPercent}%` }}
              className={`p-6 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] ${
                isFinal
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-700 text-white shadow-xl shadow-violet-600/20 border-none'
                  : 'bg-slate-50 border border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-ubuntu text-xl font-bold ${
                    isFinal ? 'bg-white/20 text-white' : 'bg-violet-100 text-violet-700'
                  }`}
                >
                  {stage.stageNumber}
                </div>
                <div>
                  <h3
                    className={`font-ubuntu text-[22px] font-bold ${
                      isFinal ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className={`font-poppins text-[15px] ${
                      isFinal ? 'text-violet-100' : 'text-slate-500'
                    }`}
                  >
                    {stage.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 pr-4">
                <div className="text-right">
                  <div
                    className={`font-ubuntu text-[24px] font-extrabold ${
                      isFinal ? 'text-white' : 'text-violet-700'
                    }`}
                  >
                    {stage.metric}
                  </div>
                  <div
                    className={`font-poppins text-[13px] uppercase tracking-wider ${
                      isFinal ? 'text-violet-200' : 'text-slate-400'
                    }`}
                  >
                    {stage.conversionRate}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-right text-slate-400 font-mono text-[14px]">
        Top 1% Global Engineering Craftsmanship Standard
      </div>
    </div>
  );
};
