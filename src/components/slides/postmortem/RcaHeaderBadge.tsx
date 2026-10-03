import React from 'react';
import { AlertOctagon, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export interface RcaHeaderBadgeProps {
  incidentId: string;
  severityLevel: 'SEV-1' | 'SEV-2' | 'SEV-3';
  downtimeMinutes: number;
  isBlamelessPostmortem: boolean;
}

export const RcaHeaderBadge: React.FC<RcaHeaderBadgeProps> = ({
  incidentId,
  severityLevel,
  downtimeMinutes,
  isBlamelessPostmortem,
}) => {
  const isSev1 = severityLevel === 'SEV-1';
  const isSev2 = severityLevel === 'SEV-2';

  return (
    <div className="plane-1-raised p-3 rounded-2xl border border-slate-800 bg-slate-900/60 z-10 flex items-center justify-between font-mono text-xs">
      <div className="flex items-center gap-4 text-slate-300">
        <div className="flex items-center gap-2">
          <AlertOctagon size={15} className={isSev1 ? 'text-rose-400' : isSev2 ? 'text-amber-700 dark:text-amber-400' : 'text-amber-900 dark:text-yellow-400'} />
          <span className="text-slate-400">Incident:</span>
          <span className="text-white font-bold">{incidentId}</span>
        </div>
        <span
          className={`px-2.5 py-0.5 rounded-full font-bold uppercase text-[11px] border ${
            isSev1
              ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
              : isSev2
              ? 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30'
              : 'bg-yellow-500/10 text-amber-900 dark:text-yellow-400 border-yellow-500/30'
          }`}
        >
          {severityLevel}
        </span>
        <div className="flex items-center gap-1.5 text-slate-400">
          <Clock size={13} className="text-slate-300" />
          <span>Downtime:</span>
          <strong className="text-rose-300 font-bold">{downtimeMinutes} min</strong>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {isBlamelessPostmortem && (
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 text-[11px]">
            <HeartHandshake size={13} /> Blameless Culture Verified
          </span>
        )}
        <span className="flex items-center gap-1 text-cyan-400 font-bold text-[11px]">
          <ShieldCheck size={13} /> RCA Retrospective Complete
        </span>
      </div>
    </div>
  );
};
