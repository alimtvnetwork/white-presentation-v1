import React from 'react';
import { BeforeAfterSlideData } from '../../types/presentation';
import { XCircle, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSlideProps {
  slide: BeforeAfterSlideData;
}

export const BeforeAfterSlide: React.FC<BeforeAfterSlideProps> = ({ slide }) => {
  return (
    <div className="relative w-[1920px] h-[1080px] bg-slate-50 overflow-hidden text-slate-900 select-none p-[120px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-600" />
            <span className="text-[14px] font-bold tracking-[0.2em] uppercase text-violet-700 bg-violet-100/70 px-3.5 py-1 rounded-full border border-violet-200">
              {slide.kicker || 'TRANSFORMATION'}
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

      {/* Dual Side-by-Side Comparison Cards */}
      <div className="grid grid-cols-2 gap-10 my-auto z-20">
        {/* Left Card: Before / Legacy */}
        <div className="bg-rose-50/50 border-2 border-rose-200 rounded-3xl p-10 flex flex-col justify-between shadow-sm">
          <div>
            <div className="inline-block text-[13px] font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full mb-6">
              {slide.before.tag || 'BEFORE'}
            </div>
            <h3 className="font-ubuntu text-[30px] font-bold text-slate-800 mb-8">
              {slide.before.title}
            </h3>
            <div className="flex flex-col gap-5">
              {slide.before.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
                  <span className="font-poppins text-[18px] text-slate-700 leading-relaxed">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card: After / Standard */}
        <div className="bg-white border-2 border-violet-500 rounded-3xl p-10 flex flex-col justify-between shadow-xl shadow-violet-500/10">
          <div>
            <div className="inline-block text-[13px] font-mono font-bold uppercase tracking-wider text-white bg-violet-600 px-3 py-1 rounded-full mb-6 shadow-sm">
              {slide.after.tag || 'AFTER TRANSFORMATION'}
            </div>
            <h3 className="font-ubuntu text-[30px] font-bold text-slate-900 mb-8">
              {slide.after.title}
            </h3>
            <div className="flex flex-col gap-5">
              {slide.after.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-poppins text-[18px] text-slate-800 leading-relaxed font-medium">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-right text-slate-400 font-mono text-[14px]">
        White Presentation Architecture • Transformation Analysis
      </div>
    </div>
  );
};
