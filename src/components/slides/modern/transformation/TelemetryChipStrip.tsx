import React from 'react';
import { RefreshCw, TrendingUp, CheckCircle2, Zap } from 'lucide-react';
import type { FlywheelAccelerationBanner } from '../../../../types/modern/transformationTypes';

interface TelemetryChipStripProps {
  telemetry: FlywheelAccelerationBanner;
  isLoopClosed: boolean;
  activeStageName: string;
}

export const TelemetryChipStrip: React.FC<TelemetryChipStripProps> = ({
  telemetry,
  isLoopClosed,
  activeStageName,
}) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm z-10">
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <RefreshCw size={14} className="text-violet-400 animate-spin" style={{ animationDuration: '8s' }} />
        <span className="text-xs uppercase tracking-wider text-slate-400">Flywheel Velocity</span>
        <span className="px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-400 font-bold border border-violet-500/30 flex items-center gap-1">
          <TrendingUp size={12} />
          {telemetry.isFlywheelAccelerating ? 'ACCELERATING' : 'STEADY STATE'}
        </span>
      </div>

      <div className="w-[1px] h-6 bg-slate-700/50" />

      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-wider text-slate-400">Active Node</span>
        <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-400 font-bold border border-sky-500/30">
          {activeStageName || 'Data Harvesting'}
        </span>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2 text-emerald-400">
        <Zap size={16} />
        <span className="text-xs uppercase tracking-wider text-slate-400">Feedback Conversion:</span>
        <span className="font-bold text-emerald-400">{telemetry.feedbackConversionRate}</span>
      </div>

      <div className="w-[1px] h-6 bg-slate-700/50" />

      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-violet-500/15 border border-violet-500/30 text-violet-300 font-bold">
        <CheckCircle2 size={16} />
        <span>{isLoopClosed ? 'CLOSED LOOP ATTESTED' : 'OPEN FEEDBACK'}</span>
      </div>
    </div>
  </div>
);
