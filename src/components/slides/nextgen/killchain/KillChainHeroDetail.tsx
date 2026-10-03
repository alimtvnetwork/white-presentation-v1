import React from 'react';
import type { KillChainStageDetail } from '../../../../types/nextGenArchetypes';
import { ShieldCheck, ShieldAlert, CheckCircle2, Zap } from 'lucide-react';

interface KillChainHeroDetailProps {
  stage: KillChainStageDetail;
  stepIndex: number;
}

export const KillChainHeroDetail: React.FC<KillChainHeroDetailProps> = ({ stage, stepIndex }) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border-hover)', color: 'var(--pres-text)' }}
      className="col-span-7 plane-1-raised rounded-3xl p-7 border flex flex-col justify-between h-full bg-gradient-to-br from-rose-500/10 via-transparent to-red-500/5 relative overflow-hidden"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-rose-600/20 text-slate-900 dark:text-rose-300 border border-rose-500/30 flex items-center gap-2">
            <ShieldAlert size={16} className="text-rose-400" />
            Tactical Kill Chain Phase 0{stepIndex + 1}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle2 size={15} /> Playbook: {stage.isAutomatedPlaybookTriggered ? 'ACTIVE' : 'STANDBY'}
          </span>
        </div>

        <h2 className="text-4xl lg:text-[42px] font-black font-ubuntu leading-tight tracking-tight mb-2 text-slate-900 dark:text-white">
          {stage.stageName}
        </h2>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-sm mb-6 flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-black/20 dark:bg-white/5 border border-white/5 font-semibold text-rose-300">
            {stage.mitreTacticId}
          </span>
          <span>Status: {stage.containmentStatus}</span>
        </p>

        <div className="p-5 rounded-2xl bg-black/20 dark:bg-black/40 border border-white/10 mb-6 flex items-center justify-between">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Mean Time to Detect (MTTD)
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-emerald-400">
              {stage.mttdMinutes}m
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Defense Status
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-sky-400">
              {stage.isDefended ? 'DEFENDED' : 'TRIAGED'}
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              SOAR Automation
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-violet-400">
              100%
            </div>
          </div>
        </div>

        <div className="space-y-3 font-mono">
          <div className="p-3.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-white/5">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs uppercase tracking-wider block mb-1">
              Primary Threat Vector
            </span>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">{stage.primaryThreatVector}</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-white/5">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs uppercase tracking-wider block mb-1">
              Active Defense Control
            </span>
            <p className="text-sm font-semibold text-slate-900 dark:text-emerald-300">{stage.activeDefenseControl}</p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between font-mono text-sm">
        <span className="flex items-center gap-2 text-slate-700 dark:text-emerald-400">
          <ShieldCheck size={16} /> Kernel eBPF Telemetry Active
        </span>
        <span className="flex items-center gap-2 text-slate-700 dark:text-sky-400">
          <Zap size={16} /> Automated Playbook Dispatched
        </span>
      </div>
    </div>
  );
};
