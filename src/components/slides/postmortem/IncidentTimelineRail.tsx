import React from 'react';
import type { IncidentTimelineEvent } from '../../../types/kineticSuiteArchetypes';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export interface IncidentTimelineRailProps {
  timeline: IncidentTimelineEvent[];
}

export const IncidentTimelineRail: React.FC<IncidentTimelineRailProps> = ({ timeline }) => {
  return (
    <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col gap-2 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <span className="flex items-center gap-2 font-bold text-slate-300">
          <Clock size={13} className="text-cyan-400" /> Chronological Mitigation Timeline
        </span>
        <span className="text-[11px] text-slate-400">{timeline.length} Milestones Logged</span>
      </div>

      <div className="grid grid-cols-4 gap-3 pt-1">
        {timeline.map((event, idx) => {
          const isMitigation = event.isMitigationPoint;
          return (
            <div
              key={idx}
              className={`p-2.5 rounded-xl border flex flex-col justify-between gap-1.5 transition-all ${
                isMitigation
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-[11px]">{event.timeOffset}</span>
                {isMitigation ? (
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-0.5">
                    <CheckCircle2 size={11} /> Mitigated
                  </span>
                ) : (
                  <span className="text-[10px] text-rose-400 flex items-center gap-0.5">
                    <AlertCircle size={11} /> Event
                  </span>
                )}
              </div>
              <p className="text-[10px] leading-tight line-clamp-2 text-slate-300">
                {event.eventDescription}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
