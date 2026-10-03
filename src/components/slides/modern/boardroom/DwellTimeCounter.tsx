import React from 'react';
import type { CyberDefenseTelemetryHeader } from '../../../../types/modern/boardroomStrategyTypes';
import { ShieldCheck, Crosshair, Clock, AlertOctagon, Radio } from 'lucide-react';

interface DwellTimeCounterProps {
  header: CyberDefenseTelemetryHeader;
}

export const DwellTimeCounter: React.FC<DwellTimeCounterProps> = ({ header }) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/50 flex items-center justify-between gap-6 z-10 font-mono text-sm">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
        <ShieldCheck size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Defense Status</div>
        <div className="text-base font-ubuntu font-bold text-red-400">{header.activeDefenseStatus}</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
        <Crosshair size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">MITRE Coverage</div>
        <div className="text-xl font-ubuntu font-black text-purple-400">{header.mitreCoveragePercentage}%</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <Clock size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Mean Containment</div>
        <div className="text-xl font-ubuntu font-black text-emerald-400">{header.meanTimeToContainSeconds} s</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        <AlertOctagon size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Quarantined Probes</div>
        <div className="text-xl font-ubuntu font-black text-cyan-400">
          {header.dailyQuarantinedProbes.toLocaleString()} / Day
        </div>
      </div>
    </div>

    {header.isAirGapActive ? (
      <div className="px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
        <Radio size={13} className="text-red-400 animate-pulse" />
        Air Gap Active
      </div>
    ) : null}
  </div>
);
