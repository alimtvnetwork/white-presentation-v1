import React from 'react';
import type { CanaryStageItem } from '../../../types/kineticSuiteArchetypes';
import { Gauge, ShieldCheck, Activity } from 'lucide-react';

export interface CanaryGaugeVisualizerProps {
  activeStage?: CanaryStageItem;
  releaseVersion: string;
  targetEnvironment: string;
  isAutomatedRollbackEnabled: boolean;
}

export const CanaryGaugeVisualizer: React.FC<CanaryGaugeVisualizerProps> = ({
  activeStage,
  releaseVersion,
  targetEnvironment,
  isAutomatedRollbackEnabled,
}) => {
  const traffic = activeStage?.trafficPercentage ?? 0;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (traffic / 100) * circumference;

  return (
    <div className="plane-1-raised rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col items-center justify-between h-full">
      <div className="w-full flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs">
        <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
          <Gauge size={14} /> Traffic Graduation Gauge
        </span>
        <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px]">
          {releaseVersion}
        </span>
      </div>

      <div className="relative my-4 flex items-center justify-center">
        <svg className="w-56 h-56 -rotate-90" viewBox="0 0 220 220">
          <circle cx="110" cy="110" r={radius} fill="none" stroke="#1e293b" strokeWidth="14" />
          <circle
            cx="110"
            cy="110"
            r={radius}
            fill="none"
            stroke="url(#canary-gauge-gradient)"
            strokeWidth="14"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
          <defs>
            <linearGradient id="canary-gauge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-ubuntu text-4xl font-black text-white tracking-tight">
            {traffic}%
          </span>
          <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-1">
            {activeStage?.stageName || 'Graduation'}
          </span>
        </div>
      </div>

      <div className="w-full space-y-2 font-mono text-xs border-t border-slate-800 pt-3">
        <div className="flex items-center justify-between text-slate-300">
          <span className="text-slate-400">Target Env:</span>
          <span className="text-white font-bold">{targetEnvironment}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Rollback Guard:</span>
          <span className={`font-bold flex items-center gap-1 ${isAutomatedRollbackEnabled ? 'text-emerald-400' : 'text-slate-400'}`}>
            <ShieldCheck size={12} /> {isAutomatedRollbackEnabled ? 'Automated Active' : 'Manual'}
          </span>
        </div>
      </div>
    </div>
  );
};
