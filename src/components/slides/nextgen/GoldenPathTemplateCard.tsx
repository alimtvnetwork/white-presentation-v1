import React from 'react';
import type { GoldenPathTemplate } from '../../../types/nextGenArchetypes';
import { Box, Clock, Code2, CheckCircle2, ShieldCheck } from 'lucide-react';

interface GoldenPathTemplateCardProps {
  template: GoldenPathTemplate;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onHover: (index: number | null) => void;
}

export const GoldenPathTemplateCard: React.FC<GoldenPathTemplateCardProps> = ({
  template,
  index,
  isActive,
  isCompleted,
  onHover,
}) => {
  const stepPhaseClass = isActive
    ? 'step-phase-active ring-2 ring-violet-500/60 shadow-2xl opacity-100'
    : isCompleted ? 'step-phase-past opacity-75' : 'step-phase-future opacity-40';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${stepPhaseClass} bg-gradient-to-b from-violet-500/10 to-indigo-500/5`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30 flex items-center gap-1.5">
            <Box size={13} className="text-violet-400" />
            GOLDEN PATH 0{index + 1}
          </span>
          <span className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-black/10 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-slate-700/40 flex items-center gap-1">
            <Clock size={12} className="text-sky-400" />
            ~{template.estimatedSetupMinutes}m
          </span>
        </div>

        <h3 className="text-2xl font-bold font-ubuntu tracking-tight leading-snug mb-1">{template.name}</h3>
        <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-4 text-violet-400">{template.templateId}</p>

        <div className="p-3.5 rounded-2xl bg-black/15 dark:bg-black/35 border border-white/5 font-mono space-y-2 mb-4">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase tracking-wider">Language Runtime</span>
            <span className="text-sm font-bold text-slate-900 dark:text-emerald-400 flex items-center gap-1.5">
              <Code2 size={13} /> {template.language}
            </span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase tracking-wider">Scaffold Architecture</span>
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-2">{template.framework}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/5 border border-white/5 font-mono text-center mb-4">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase tracking-wider">Active Repos</span>
            <span className="text-base font-bold text-slate-900 dark:text-sky-400">{template.usageCount}</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase tracking-wider">Success SLA</span>
            <span className="text-base font-bold text-slate-900 dark:text-emerald-400">99.9%</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="flex items-center gap-1.5 text-slate-700 dark:text-emerald-400">
          <CheckCircle2 size={14} className="text-emerald-400" />
          {template.isProductionReady ? 'Production Ready' : 'In Validation'}
        </span>
        <span className="flex items-center gap-1.5 text-slate-700 dark:text-sky-400">
          <ShieldCheck size={14} className="text-sky-400" />
          {template.isSecurityApproved ? 'SecOps Attested' : 'Review Pending'}
        </span>
      </div>
    </div>
  );
};
