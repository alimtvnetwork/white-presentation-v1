import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

interface Soc2HeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  auditFirm: string;
  observationMonths: number;
  isUnqualified: boolean;
  isEditMode: boolean;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

export const Soc2Header: React.FC<Soc2HeaderProps> = ({
  kicker,
  title,
  subtitle,
  auditFirm,
  observationMonths,
  isUnqualified,
  isEditMode,
  onTitleChange,
  onSubtitleChange,
}) => {
  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-500" />
            {kicker || 'COMPLIANCE AUDIT & CONTINUOUS ATTESTATION'}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
            <Award size={15} className="text-emerald-400" />
            SOC 2 Type II Continuous 5-Stage Readiness Ladder
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onTitleChange(e.currentTarget.textContent || '')}
        >
          {title || 'SOC 2 Type II Compliance & Trust Services Ladder'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-4xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onSubtitleChange(e.currentTarget.textContent || '')}
        >
          {subtitle || 'Automated Evidence Ingestion Across Security, Availability, Confidentiality, Processing Integrity, and Privacy'}
        </p>
      </div>

      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Audit Partner
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{auditFirm.split('/')[0].trim()}</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Observation
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">{observationMonths} Months</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Opinion Expectation
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{isUnqualified ? 'Unqualified' : 'Qualified'}</span>
        </div>
      </div>
    </div>
  );
};
