import React from 'react';
import type { RapidFeedbackSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { FeedbackCycleNode } from './feedback/FeedbackCycleNode';
import { RefreshCw, Zap, Gauge, AlertCircle, Compass } from 'lucide-react';

export const RapidFeedbackSlide: React.FC<{ slide: RapidFeedbackSlideData }> = ({ slide }) => {
  const currentStep = useDeckStore((s) => s.activeStep);
  const stages = slide.loopStages || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {slide.kicker || 'SPRINT VELOCITY'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs flex items-center gap-1">
            <RefreshCw size={12} /> Elite DORA Metrics Cadence
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
        >
          {slide.title || 'Continuous Rapid Feedback & Sprint Loop Velocity'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Sub-hour iteration loop achieving elite operational telemetry and zero regression.'}
        </p>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-900/40 z-10 grid grid-cols-3 gap-6 font-mono text-xs">
        <div className="flex items-center gap-3">
          <Zap size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
          <div>
            <div className="text-slate-400 text-[11px]">Deploy Frequency</div>
            <div className="text-amber-800 dark:text-amber-300 font-bold text-sm">{slide.dailyDeployFrequency} Deploys / Day</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Gauge size={18} className="text-cyan-400 shrink-0" />
          <div>
            <div className="text-slate-400 text-[11px]">Lead Time to Prod</div>
            <div className="text-cyan-300 font-bold text-sm">{slide.leadTimeToProductionMinutes} Minutes</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <AlertCircle size={18} className="text-emerald-400 shrink-0" />
          <div>
            <div className="text-slate-400 text-[11px]">Change Failure Rate</div>
            <div className="text-emerald-300 font-bold text-sm">&lt; {slide.changeFailureRatePct}%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[530px]">
        {stages.map((stage, idx) => (
          <FeedbackCycleNode
            key={stage.id || idx}
            stage={stage}
            index={idx}
            currentStep={currentStep}
            accentColor="var(--pres-accent, #06b6d4)"
          />
        ))}
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-cyan-400 font-bold">
          <Compass size={14} /> Culture Directives
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs truncate max-w-4xl">
          {(slide.cultureDirectives || []).join(' • ') || 'Instrument telemetry before authoring logic. Canary deployments verify real user load at 5% traffic.'}
        </span>
      </div>
    </div>
  );
};
