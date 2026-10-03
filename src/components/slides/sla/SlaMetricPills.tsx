import React from 'react';
import { Activity, Clock, Zap, ShieldCheck } from 'lucide-react';

export interface SlaMetricPillsProps {
  overallUptimePercent: number;
  meanTimeToDetectSeconds: number;
  meanTimeToRecoverMinutes: number;
  incidentFreeDaysCount: number;
  hasExternalAuditorVerification: boolean;
}

export const SlaMetricPills: React.FC<SlaMetricPillsProps> = ({
  overallUptimePercent,
  meanTimeToDetectSeconds,
  meanTimeToRecoverMinutes,
  incidentFreeDaysCount,
  hasExternalAuditorVerification,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-between font-mono">
        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">System Availability</span>
          <span className="font-ubuntu text-2xl font-black text-emerald-400 tracking-tight">
            {overallUptimePercent.toFixed(3)}%
          </span>
        </div>
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <Activity size={18} />
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-between font-mono">
        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Mean Time to Detect</span>
          <span className="font-ubuntu text-2xl font-black text-cyan-300 tracking-tight">
            {meanTimeToDetectSeconds}s
          </span>
        </div>
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-center">
          <Clock size={18} />
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-between font-mono">
        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Mean Time to Recover</span>
          <span className="font-ubuntu text-2xl font-black text-amber-800 dark:text-amber-300 tracking-tight">
            {meanTimeToRecoverMinutes}m
          </span>
        </div>
        <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 flex items-center justify-center">
          <Zap size={18} />
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-between font-mono">
        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Incident-Free Run</span>
          <span className="font-ubuntu text-2xl font-black text-purple-300 tracking-tight">
            {incidentFreeDaysCount} Days
          </span>
        </div>
        <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center">
          <ShieldCheck size={18} />
        </div>
      </div>
    </div>
  );
};
