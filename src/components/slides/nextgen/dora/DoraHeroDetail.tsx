import React from 'react';
import type { FlywheelQuadrant } from '../../../../types/nextGenArchetypes';
import { Rocket, RotateCw, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

interface DoraHeroDetailProps {
  quadrant: FlywheelQuadrant;
  stepIndex: number;
  flowVelocity: number;
  flowEfficiency: number;
}

export const DoraHeroDetail: React.FC<DoraHeroDetailProps> = ({ quadrant, stepIndex, flowVelocity, flowEfficiency }) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border-hover)', color: 'var(--pres-text)' }}
      className="col-span-7 plane-1-raised rounded-3xl p-7 border flex flex-col justify-between h-full bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/5 relative overflow-hidden"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-600/20 text-slate-900 dark:text-amber-300 border border-amber-500/30 flex items-center gap-2">
            <RotateCw size={16} className="text-amber-900 dark:text-amber-400" />
            Active Flywheel Acceleration 0{stepIndex + 1}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle2 size={15} /> Status: {quadrant.status}
          </span>
        </div>

        <h2 className="text-4xl lg:text-[42px] font-black font-ubuntu leading-tight tracking-tight mb-2 text-slate-900 dark:text-white">
          {quadrant.name}
        </h2>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-sm mb-6 flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-black/20 dark:bg-white/5 border border-white/5 font-semibold text-amber-900 dark:text-amber-300">
            {quadrant.keyMetric}
          </span>
          <span>Flywheel Vector: Continuous Feedback Loop</span>
        </p>

        <div className="p-5 rounded-2xl bg-black/20 dark:bg-black/40 border border-white/10 mb-6 flex items-center justify-between">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Flow Velocity
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-emerald-400">
              {flowVelocity} Items
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Flow Efficiency
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-sky-400">
              {flowEfficiency}%
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              DORA State
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-amber-400">
              ELITE
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-black/10 dark:bg-white/5 border border-white/5 font-mono mb-4">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs uppercase tracking-wider block mb-1">
            Value Stream Quadrant Narrative
          </span>
          <p className="text-base font-semibold text-slate-900 dark:text-slate-200">
            {quadrant.description}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between font-mono text-sm">
        <span className="flex items-center gap-2 text-slate-700 dark:text-emerald-400">
          <ShieldCheck size={16} /> Continuous Telemetry & DORA Elite SLA Verified
        </span>
        <span className="flex items-center gap-2 text-slate-700 dark:text-sky-400">
          <Zap size={16} /> Autonomous Micro-Batch Deployment Engine Active
        </span>
      </div>
    </div>
  );
};
