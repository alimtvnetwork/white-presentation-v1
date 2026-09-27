import React from 'react';
import { StepsChainSlideData } from '../../types/presentation';
import { CheckCircle2 } from 'lucide-react';

interface StepsChainSlideProps {
  slide: StepsChainSlideData;
}

export const StepsChainSlide: React.FC<StepsChainSlideProps> = ({ slide }) => {
  return (
    <div className="relative w-[1920px] h-[1080px] bg-white overflow-hidden text-slate-900 select-none p-[120px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-600" />
            <span className="text-[14px] font-bold tracking-[0.2em] uppercase text-violet-700 bg-violet-50 px-3.5 py-1 rounded-full border border-violet-200">
              {slide.kicker || 'PROCESS & TIMELINE'}
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

      {/* Connected 4-Step Chain Grid */}
      <div className="relative my-auto z-20 w-full max-w-[1640px] mx-auto">
        {/* Connecting Horizon Line */}
        <div className="absolute top-[28px] left-[180px] right-[180px] h-[3px] bg-slate-200 z-0" />

        <div className="grid grid-cols-4 gap-8 relative z-10">
          {slide.steps.map((step) => (
            <div key={step.stepNumber} className="flex flex-col items-center">
              {/* Step Circle Badge */}
              <div className="w-14 h-14 rounded-full bg-violet-600 text-white font-ubuntu text-xl font-bold flex items-center justify-center shadow-lg shadow-violet-600/30 border-4 border-white mb-6">
                {step.stepNumber}
              </div>

              {/* Step Card */}
              <div className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow min-h-[360px]">
                <div>
                  <div className="inline-block bg-violet-100/70 text-violet-700 text-xs font-mono font-bold px-3 py-1 rounded-full mb-3">
                    {step.duration}
                  </div>
                  <h3 className="font-ubuntu text-[20px] font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {step.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-violet-600 shrink-0 mt-0.5" />
                        <span className="font-poppins text-[14px] text-slate-600 leading-snug">
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-right text-[11px] font-mono text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-200/60">
                  Phase {step.stepNumber} of 4
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-right text-slate-400 font-mono text-[14px]">
        Continuous Velocity • Predictable Milestone Deliveries
      </div>
    </div>
  );
};
