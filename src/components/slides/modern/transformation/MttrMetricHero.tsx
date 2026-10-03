import React from 'react';
import { ShieldCheck, CheckCircle2, Activity, Zap } from 'lucide-react';
import type { WarRoomTelemetryHeader } from '../../../../types/modern/transformationTypes';

interface MttrMetricHeroProps {
  commandHeader: WarRoomTelemetryHeader;
  postMortemSignoffRole: string;
  hasPostMortemSignoff: boolean;
  activePhaseName: string;
}

export const MttrMetricHero: React.FC<MttrMetricHeroProps> = ({
  commandHeader,
  postMortemSignoffRole,
  hasPostMortemSignoff,
  activePhaseName,
}) => {
  const roleTitle = postMortemSignoffRole.includes('Chief Software Engineer')
    ? postMortemSignoffRole
    : 'Chief Software Engineer';

  return (
    <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm z-10">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-rose-400" />
          <span className="text-xs uppercase tracking-wider text-slate-400">Containment</span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30 flex items-center gap-1">
            <Activity size={12} />
            {commandHeader.isIncidentContained ? 'CONTAINED & STABILIZED' : 'CONTAINING'}
          </span>
        </div>

        <div className="w-[1px] h-6 bg-slate-700/50" />

        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-slate-400">Current Phase</span>
          <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-400 font-bold border border-sky-500/30">
            {activePhaseName || 'P0 Alert & Triage'}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-xs uppercase tracking-wider text-slate-400">Signoff Role:</span>
          <span className="font-bold text-sky-300">{roleTitle}</span>
        </div>

        <div className="w-[1px] h-6 bg-slate-700/50" />

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold">
          {hasPostMortemSignoff ? <CheckCircle2 size={16} /> : <ShieldCheck size={16} />}
          <span>{hasPostMortemSignoff ? '4-PART RCA SIGNED OFF' : 'POST-MORTEM PENDING'}</span>
        </div>
      </div>
    </div>
  );
};
