// lint-allow: file-size reason="CustomerConversionFunnelSlide descending conversion funnel stepper" max=120
import React from 'react';
import type { CustomerConversionFunnelSlideData } from '../../../types/suite2032Archetypes';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { TrendingDown, Users, DollarSign, Sparkles } from 'lucide-react';

const TIER_WIDTHS = ['w-full', 'w-[85%]', 'w-[70%]', 'w-[55%]'];

export const CustomerConversionFunnelSlide: React.FC<{
  slide: CustomerConversionFunnelSlideData;
  activeStep?: number;
}> = ({ slide, activeStep = 0 }) => {
  const stages = slide.funnelStages || [];
  const channels = slide.channels || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg, #0b0f19)', color: 'var(--pres-text, #f8fafc)' }}
      className="relative w-[1920px] h-[1080px] p-[56px_72px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-base font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[var(--pres-accent,#6366f1)]/10 text-[var(--pres-accent,#818cf8)] border border-[var(--pres-accent,#6366f1)]/30 flex items-center gap-2">
              <Sparkles size={16} />
              {slide.kicker || 'GO-TO-MARKET VELOCITY & FUNNEL METRICS'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">{slide.funnelTimeWindow}</span>
          </div>
          <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-2">{slide.title}</h1>
          <p className="text-base text-slate-400 max-w-[1200px] leading-relaxed">{slide.subtitle}</p>
        </div>
        <div className="p-4 px-6 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-4 shrink-0">
          <Users className="w-10 h-10 text-[var(--pres-accent,#818cf8)]" />
          <div>
            <div className="text-sm font-semibold text-slate-400">Total Pipeline Conversion</div>
            <div className="text-3xl font-bold font-mono text-emerald-400">{slide.overallConversionPercentage}%</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 my-auto w-full max-w-[1400px] mx-auto">
        {stages.map((stage, idx) => {
          const phase = resolveStepPhase(idx, activeStep);
          const style = getStepLifecycleStyle(phase);
          const widthClass = TIER_WIDTHS[idx] || 'w-full';
          return (
            <div
              key={stage.stepIndex}
              style={style}
              className={`${widthClass} p-4 px-6 rounded-2xl bg-[var(--pres-card-bg,rgba(255,255,255,0.03))] border border-white/10 flex items-center justify-between transition-all duration-300 backdrop-blur-md`}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-base font-bold text-[var(--pres-accent,#818cf8)] px-2.5 py-1 rounded bg-[var(--pres-accent,#6366f1)]/20 border border-[var(--pres-accent,#6366f1)]/30">
                  STAGE 0{stage.stepIndex + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{stage.stageName}</h3>
                  <div className="text-sm text-slate-300">{stage.optimizationLever}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-sm font-mono uppercase text-slate-400">Volume</div>
                  <div className="text-xl font-bold font-mono text-white">{stage.visitorCount.toLocaleString()}</div>
                </div>
                <div className="font-mono text-sm font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  {stage.conversionRatePercentage}% Pass
                </div>
                {stage.dropoffRatePercentage > 0 && (
                  <div className="font-mono text-sm font-bold text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20 flex items-center gap-1">
                    <TrendingDown size={14} /> {stage.dropoffRatePercentage}% Drop
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-4 gap-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
        {channels.map((chan) => (
          <div key={chan.id} className="flex items-center justify-between px-3">
            <div className="truncate mr-2">
              <div className="text-sm font-semibold text-white truncate">{chan.channelName}</div>
              <div className="text-sm font-mono text-slate-400">{chan.leadVolume.toLocaleString()} Leads</div>
            </div>
            <span className="font-mono text-sm font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[var(--pres-accent,#818cf8)] flex items-center shrink-0">
              <DollarSign size={14} /> {chan.cacUsd} CAC
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
