import React from 'react';
import { Activity, Zap } from 'lucide-react';
import type { TelemetryStrip, BentoMicroMetric } from '../../../../types/nextGenArchetypes';

interface BentoTelemetryBarProps {
  telemetry: TelemetryStrip;
  microMetrics: BentoMicroMetric[];
  isDark?: boolean;
}

export const BentoTelemetryBar: React.FC<BentoTelemetryBarProps> = ({
  telemetry,
  microMetrics,
  isDark,
}) => (
  <div className="z-10 grid grid-cols-4 gap-6">
    <div className="plane-1-raised p-4 rounded-2xl border border-slate-700/60 bg-slate-900/40 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Activity size={18} className="text-violet-500" />
        <div>
          <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 block uppercase">
            {telemetry.title}
          </span>
          <span className="font-mono text-base font-bold text-slate-900 dark:text-white">
            {telemetry.liveThroughput}
          </span>
        </div>
      </div>
      <div className="text-right font-mono text-xs">
        <span className="text-slate-500 block text-[10px]">Error Rate</span>
        <span className="text-emerald-400 font-bold">{telemetry.errorRate}</span>
      </div>
    </div>

    {microMetrics.slice(0, 3).map((metric) => (
      <div
        key={metric.id}
        className="plane-1-raised p-4 rounded-2xl border border-slate-700/60 bg-slate-900/40 flex items-center justify-between font-mono"
      >
        <div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase">
            {metric.label}
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            {metric.value}
          </span>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded bg-violet-500/10 flex items-center gap-1 ${
          isDark ? 'text-violet-300' : 'text-violet-800'
        }`}>
          <Zap size={11} />
          {metric.delta}
        </span>
      </div>
    ))}
  </div>
);
