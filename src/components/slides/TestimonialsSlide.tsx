import React from 'react';
import { TestimonialsSlideData } from '../../types/presentation';
import { Quote } from 'lucide-react';

interface TestimonialsSlideProps {
  slide: TestimonialsSlideData;
}

export const TestimonialsSlide: React.FC<TestimonialsSlideProps> = ({ slide }) => {
  return (
    <div className="relative w-[1920px] h-[1080px] bg-slate-50 overflow-hidden text-slate-900 select-none p-[120px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-600" />
            <span className="text-[14px] font-bold tracking-[0.2em] uppercase text-violet-700 bg-violet-100/70 px-3.5 py-1 rounded-full border border-violet-200">
              {slide.kicker || 'EXECUTIVE VALIDATION'}
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

      {/* Testimonials Grid */}
      <div className="grid grid-cols-2 gap-10 my-auto z-20 max-w-[1640px] w-full mx-auto">
        {slide.testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/90 rounded-3xl p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
          >
            <Quote className="w-12 h-12 text-violet-200 absolute top-8 right-8 pointer-events-none" />

            <p className="font-poppins text-[24px] italic text-slate-800 leading-[1.5] mb-8 pr-12">
              "{t.quote}"
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-700 font-ubuntu font-bold text-xl flex items-center justify-center">
                {t.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-ubuntu text-[20px] font-bold text-slate-900">{t.author}</h4>
                <p className="font-poppins text-[15px] text-slate-500">
                  {t.title} • <span className="font-semibold text-slate-700">{t.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right text-slate-400 font-mono text-[14px]">
        Enterprise Trust & Proven Commercial Outcomes
      </div>
    </div>
  );
};
