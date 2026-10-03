import React from 'react';
import { Globe2, ShieldCheck } from 'lucide-react';
import type { FailoverTelemetry } from '../../../../types/nextGenArchetypes';

interface FailoverHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  isEditMode?: boolean;
  onEditTitle?: (val: string) => void;
  onEditSubtitle?: (val: string) => void;
  failover: FailoverTelemetry;
}

export const FailoverHeader: React.FC<FailoverHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isEditMode,
  onEditTitle,
  onEditSubtitle,
  failover,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
          <Globe2 size={16} className="text-violet-500" />
          {kicker || 'HYBRID MULTI-CLOUD RESILIENCY'}
        </span>
        <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
          <ShieldCheck size={14} className="text-emerald-500" />
          Disaster Recovery Posture: Continuous Active-Active
        </span>
      </div>

      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditTitle?.(e.currentTarget.textContent || '')}
      >
        {title || 'Multi-Cloud Disaster Recovery Failover & Storage Mesh'}
      </h1>

      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-base max-w-5xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditSubtitle?.(e.currentTarget.textContent || '')}
      >
        {subtitle ||
          'Zero-downtime cross-cloud failover mesh spanning AWS, GCP, Azure and Sovereign On-Prem with synchronous data replication and sub-10 second autonomous recovery.'}
      </p>
    </div>

    <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-sm">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Observed RTO
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
          {failover.rtoSecondsObserved}s
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Observed RPO
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-sky-400">
          {failover.rpoSecondsObserved}s (Zero Loss)
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Failover State
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
          {failover.isFailoverArmed ? 'ARMED' : 'STANDBY'}
        </span>
      </div>
    </div>
  </div>
);
