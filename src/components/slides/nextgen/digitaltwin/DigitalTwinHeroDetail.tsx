import React from 'react';
import type { LogisticsCorridorNode } from '../../../../types/nextGenArchetypes';
import { Navigation, CheckCircle2, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

interface DigitalTwinHeroDetailProps {
  corridor: LogisticsCorridorNode;
  stepIndex: number;
}

export const DigitalTwinHeroDetail: React.FC<DigitalTwinHeroDetailProps> = ({ corridor, stepIndex }) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border-hover)', color: 'var(--pres-text)' }}
      className="col-span-7 plane-1-raised rounded-3xl p-7 border flex flex-col justify-between h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5 relative overflow-hidden"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-cyan-600/20 text-slate-900 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-2">
            <Navigation size={16} className="text-cyan-400" />
            Active Corridor Lattice 0{stepIndex + 1}
          </span>
          <span className={`font-mono text-sm px-3 py-1 rounded-full border flex items-center gap-1.5 font-bold ${
            corridor.isCorridorOperational
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : 'bg-amber-500/10 text-amber-900 dark:text-amber-400 dark:text-amber-400 border-amber-500/20'
          }`}>
            <CheckCircle2 size={15} /> {corridor.isCorridorOperational ? 'Nominal Transit' : 'Dynamic Reroute Active'}
          </span>
        </div>

        <h2 className="text-4xl lg:text-[42px] font-black font-ubuntu leading-tight tracking-tight mb-2 text-slate-900 dark:text-white">
          {corridor.originNode.split('(')[0]} → {corridor.destinationNode.split('(')[0]}
        </h2>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-sm mb-6 flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-black/20 dark:bg-white/5 border border-white/5 font-semibold text-cyan-300">
            {corridor.corridorId}
          </span>
          <span>Modal Engine: {corridor.transitMode} Multi-Modal</span>
        </p>

        <div className="p-5 rounded-2xl bg-black/20 dark:bg-black/40 border border-white/10 mb-6 flex items-center justify-between">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Average Transit Time
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-emerald-400">
              {corridor.averageTransitDays} Days
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Disruption Risk Index
            </span>
            <div className={`text-5xl lg:text-6xl font-black font-mono tracking-tight ${corridor.disruptionRiskScorePercent > 50 ? 'text-amber-900 dark:text-amber-400 dark:text-amber-400' : 'text-slate-900 dark:text-sky-400'}`}>
              {corridor.disruptionRiskScorePercent}%
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Simulation Sync
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-cyan-400">
              Realtime
            </div>
          </div>
        </div>

        <div className="space-y-3 font-mono">
          <div className="p-3.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-white/5">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs uppercase tracking-wider block mb-1">
              Origin & Destination Terminals
            </span>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">
              {corridor.originNode} ➔ {corridor.destinationNode}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between font-mono text-sm">
        <span className="flex items-center gap-2 text-slate-700 dark:text-emerald-400">
          <ShieldCheck size={16} /> Continuous Telemetry & Vessel Tracking Mesh
        </span>
        <span className="flex items-center gap-2 text-slate-700 dark:text-sky-400">
          <Zap size={16} /> Autonomous Contingency Dispatch Armed
        </span>
      </div>
    </div>
  );
};
