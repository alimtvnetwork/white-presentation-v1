import React from 'react';
import { Cloud, CheckCircle2 } from 'lucide-react';
import type { MigrationTelemetrySummary } from '../../../../types/modern/transformationTypes';

interface MigrationHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  isEditMode?: boolean;
  onEditTitle?: (val: string) => void;
  onEditSubtitle?: (val: string) => void;
  summary: MigrationTelemetrySummary;
  cutoverDeadline?: string;
}

export const MigrationHeader: React.FC<MigrationHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isEditMode,
  onEditTitle,
  onEditSubtitle,
  summary,
  cutoverDeadline,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
          <Cloud size={16} className="text-sky-500" />
          {kicker || 'CLOUD INFRASTRUCTURE TRANSFORMATION'}
        </span>
        <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
          <CheckCircle2 size={14} className="text-emerald-500" />
          Target: {summary.targetCloudProvider}
        </span>
      </div>

      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditTitle?.(e.currentTarget.textContent || '')}
      >
        {title || 'Enterprise Cloud Migration & Workload Modernization Funnel'}
      </h1>

      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-base max-w-5xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditSubtitle?.(e.currentTarget.textContent || '')}
      >
        {subtitle || 'Systematic 4-phase transformation from legacy on-premises to autonomous cloud infrastructure'}
      </p>
    </div>

    <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-sm">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Total Workloads
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-sky-400">
          {summary.totalWorkloads.toLocaleString()}
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Completed
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
          {summary.completedWorkloads.toLocaleString()}
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Deadline
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-violet-400">
          {cutoverDeadline || '2026-Q4'}
        </span>
      </div>
    </div>
  </div>
);
