import React from 'react';
import type { Soc2LadderStep, TrustCriteriaScore } from '../../../../types/nextGenArchetypes';
import { ShieldCheck, CheckCircle2, FileText, Zap } from 'lucide-react';

interface Soc2HeroDetailProps {
  step: Soc2LadderStep;
  stepIndex: number;
  criteria: TrustCriteriaScore[];
}

export const Soc2HeroDetail: React.FC<Soc2HeroDetailProps> = ({ step, stepIndex, criteria }) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border-hover)', color: 'var(--pres-text)' }}
      className="col-span-7 plane-1-raised rounded-3xl p-7 border flex flex-col justify-between h-full bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5 relative overflow-hidden"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-emerald-600/20 text-slate-900 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-400" />
            Active Readiness Stage 0{stepIndex + 1}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle2 size={15} /> Auditor Signoff: {step.isAuditorSignedOff ? 'APPROVED' : 'IN AUDIT'}
          </span>
        </div>

        <h2 className="text-4xl lg:text-[42px] font-black font-ubuntu leading-tight tracking-tight mb-2 text-slate-900 dark:text-white">
          {step.title}
        </h2>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-sm mb-6 flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-black/20 dark:bg-white/5 border border-white/5 font-semibold text-emerald-300">
            {step.timeframe}
          </span>
          <span>Status: {step.status}</span>
        </p>

        <div className="p-5 rounded-2xl bg-black/20 dark:bg-black/40 border border-white/10 mb-5 flex items-center justify-between">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Control Pass Ratio
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-emerald-400">
              {step.controlPassRatioPercent}%
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Monitored Controls
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-sky-400">
              {step.totalControlsMonitored}
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Stage Gate
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-violet-400">
              {step.isStepCompleted ? 'CLEARED' : 'PENDING'}
            </div>
          </div>
        </div>

        {/* 5 Trust Criteria Pills */}
        <div className="space-y-2 font-mono">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs uppercase tracking-wider block mb-1">
            Trust Services Criteria Status
          </span>
          <div className="grid grid-cols-5 gap-2 text-center text-xs">
            {criteria.map((c) => (
              <div key={c.criteriaName} className="p-2 rounded-xl bg-black/10 dark:bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block truncate">{c.criteriaName.replace('_', ' ')}</span>
                <span className="font-bold text-emerald-400">{c.passedControlsCount}/{c.totalControlsCount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between font-mono text-sm">
        <span className="flex items-center gap-2 text-slate-700 dark:text-emerald-400">
          <FileText size={16} /> Artifact: {step.primaryEvidenceArtifact}
        </span>
        <span className="flex items-center gap-2 text-slate-700 dark:text-sky-400">
          <Zap size={16} /> Automated Evidence Ingestion Active
        </span>
      </div>
    </div>
  );
};
