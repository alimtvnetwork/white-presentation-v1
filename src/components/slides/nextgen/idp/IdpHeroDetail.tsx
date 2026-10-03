import React from 'react';
import type { GoldenPathTemplate } from '../../../../types/nextGenArchetypes';
import { Box, Code2, ShieldCheck, CheckCircle2, Zap, Clock, Sparkles } from 'lucide-react';

interface IdpHeroDetailProps {
  template: GoldenPathTemplate;
  stepIndex: number;
}

export const IdpHeroDetail: React.FC<IdpHeroDetailProps> = ({ template, stepIndex }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: 'var(--pres-border-hover)',
        color: 'var(--pres-text)',
      }}
      className="col-span-7 plane-1-raised rounded-3xl p-7 border flex flex-col justify-between h-full bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/5 relative overflow-hidden"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-violet-600/20 text-slate-900 dark:text-violet-300 border border-violet-500/30 flex items-center gap-2">
            <Box size={16} className="text-violet-400" />
            Active Golden Path Specification 0{stepIndex + 1}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle2 size={15} /> Production Approved
          </span>
        </div>

        <h2 className="text-4xl lg:text-[42px] font-black font-ubuntu leading-tight tracking-tight mb-2 text-slate-900 dark:text-white">
          {template.name}
        </h2>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-sm mb-6 flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-black/20 dark:bg-white/5 border border-white/5 font-semibold text-violet-300">
            {template.templateId}
          </span>
          <span>Runtime: {template.language}</span>
        </p>

        {/* Hero KPI Stat Banner */}
        <div className="p-5 rounded-2xl bg-black/20 dark:bg-black/40 border border-white/10 mb-6 flex items-center justify-between">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Automated Provisioning Time
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-emerald-400">
              ~{template.estimatedSetupMinutes * 60}s
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Active Repositories
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-sky-400">
              {template.usageCount}
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Availability SLA
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-violet-400">
              99.9%
            </div>
          </div>
        </div>

        {/* Scaffold Framework & Architecture */}
        <div className="p-4 rounded-2xl bg-black/10 dark:bg-white/5 border border-white/5 font-mono mb-4">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs uppercase tracking-wider block mb-1">
            Certified Scaffold & Toolchain Components
          </span>
          <p className="text-base font-semibold text-slate-900 dark:text-slate-200">
            {template.framework}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between font-mono text-sm">
        <span className="flex items-center gap-2 text-slate-700 dark:text-emerald-400">
          <ShieldCheck size={16} /> Security Baseline: Signed Artifact Provenance & SBOM
        </span>
        <span className="flex items-center gap-2 text-slate-700 dark:text-sky-400">
          <Zap size={16} /> Zero-Manual Touch Infrastructure as Code
        </span>
      </div>
    </div>
  );
};
