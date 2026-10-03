import React from 'react';
import type { BeforeAfterShowcasePanSlideData } from '../../../types/flatGlobalSuiteTypes';
import { BeforeAfterCard } from './BeforeAfterCard';
import { SlidersHorizontal, Cpu } from 'lucide-react';

export const BeforeAfterShowcasePanSlide: React.FC<{
  slide: BeforeAfterShowcasePanSlideData;
}> = ({ slide }) => {
  const panItems = slide.panItems || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'TRANSFORMATION COMPARISON'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">
            {slide.title || 'Architecture Evolution: Legacy Monolith vs Sovereign Mesh'}
          </h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">
            {slide.subtitle || 'Direct operational telemetry comparing synchronous locks with distributed event fabric.'}
          </p>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">
            <SlidersHorizontal size={14} className="text-cyan-400" /> Split: {slide.splitPercentage ?? 50}%
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">
            <Cpu size={14} className="text-emerald-400" /> Telemetry Live
          </span>
        </div>
      </div>

      <div className="z-10 flex items-center justify-center gap-10 my-auto">
        <BeforeAfterCard
          mode="before"
          headline={slide.beforeHeadline || 'Synchronous Legacy Bottleneck'}
          metricSummary={slide.beforeMetricSummary || '1,420ms p99 Latency | 34% Cascade Failure'}
          items={panItems}
          hasLivePanControl={slide.hasLivePanControl ?? true}
        />
        <BeforeAfterCard
          mode="after"
          headline={slide.afterHeadline || 'Autonomous Event Mesh'}
          metricSummary={slide.afterMetricSummary || '4.2ms p99 Latency | 99.999% Containment'}
          items={panItems}
          hasLivePanControl={slide.hasLivePanControl ?? true}
        />
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span>Hover over either panel to trigger automated hairline scroll pan (`.ba-scroll-pan-anim`)</span>
        <span>Feature dimensions compared: {panItems.length} metrics</span>
      </div>
    </div>
  );
};
