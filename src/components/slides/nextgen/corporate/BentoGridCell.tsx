import React from 'react';
import { CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import type { HeroCapability, PrimaryPillar } from '../../../../types/nextGenArchetypes';

interface BentoGridCellProps {
  hero: HeroCapability;
  pillar: PrimaryPillar;
  isDark?: boolean;
}

export const BentoGridCell: React.FC<BentoGridCellProps> = ({ hero, pillar, isDark }) => (
  <div className="grid grid-cols-3 gap-6 h-[460px]">
    <div className="col-span-2 plane-1-raised p-8 rounded-3xl border border-violet-500/30 bg-violet-950/20 flex flex-col justify-between relative overflow-hidden">
      {hero.hasDotMatrix ? (
        <div className="absolute inset-0 opacity-10 pointer-events-none [background-image:var(--pres-dot-matrix)] [background-size:24px_24px]" />
      ) : null}

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs px-3 py-1 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 font-bold flex items-center gap-1.5 uppercase">
            <Cpu size={14} className="text-violet-500" />
            Core Sovereign Engine
          </span>
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
            {hero.id}
          </span>
        </div>

        <h2 className="font-ubuntu text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {hero.title}
        </h2>
        <p className="font-poppins text-sm text-violet-700 dark:text-violet-300 font-medium mb-3">
          {hero.subtitle}
        </p>
        <p className="font-poppins text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
          {hero.description}
        </p>
      </div>

      <div className="relative z-10 pt-6 border-t border-violet-500/20 flex items-center gap-8">
        <div>
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400 block uppercase">
            {hero.kpiLabel}
          </span>
          <span className={`font-mono text-3xl font-bold ${isDark ? 'text-violet-300' : 'text-violet-800'}`}>
            {hero.telemetryKpi}
          </span>
        </div>
      </div>
    </div>

    <div className="plane-1-raised p-6 rounded-3xl border border-slate-700/60 bg-slate-900/30 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-700/40 text-slate-300 font-bold">
            {pillar.statusBadge}
          </span>
          {pillar.isPillarHealthy ? (
            <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
              <ShieldCheck size={13} /> Healthy
            </span>
          ) : null}
        </div>

        <h3 className="font-ubuntu text-xl font-bold text-slate-900 dark:text-white mb-1">
          {pillar.title}
        </h3>
        <p className="font-poppins text-xs text-violet-700 dark:text-violet-300 font-medium mb-4">
          {pillar.subtitle}
        </p>

        <div className="space-y-2">
          {pillar.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-poppins text-slate-800 dark:text-slate-200">
              <CheckCircle2 size={13} className="text-violet-500 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
