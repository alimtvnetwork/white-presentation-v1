import React from 'react';
import { FileText, ShieldCheck } from 'lucide-react';
import type { RegulatoryAuditSummary } from '../../../../types/modern/transformationTypes';

interface LineageHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  isEditMode?: boolean;
  onEditTitle?: (val: string) => void;
  onEditSubtitle?: (val: string) => void;
  dataProtectionOfficer?: string;
  auditSummary: RegulatoryAuditSummary;
}

export const LineageHeader: React.FC<LineageHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isEditMode,
  onEditTitle,
  onEditSubtitle,
  dataProtectionOfficer,
  auditSummary,
}) => {
  const dpoTitle = dataProtectionOfficer?.includes('Chief Software Engineer')
    ? dataProtectionOfficer
    : 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <FileText size={16} className="text-amber-500" />
            {kicker || 'DATA PRIVACY & SOVEREIGN GOVERNANCE'}
          </span>
          <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-amber-500/10 text-slate-900 dark:text-amber-300 border border-amber-500/20 flex items-center gap-1.5 font-bold">
            <ShieldCheck size={14} className="text-amber-500" />
            {auditSummary.complianceFramework}
          </span>
        </div>

        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onEditTitle?.(e.currentTarget.textContent || '')}
        >
          {title || 'Regulatory GDPR Data Lineage & Sovereignty Pipeline'}
        </h1>

        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-5xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onEditSubtitle?.(e.currentTarget.textContent || '')}
        >
          {subtitle || 'Cryptographically verifiable PII data provenance, tokenization boundaries, and right-to-erasure workflows'}
        </p>
      </div>

      <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-sm">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            DPO
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-amber-300">
            {dpoTitle}
          </span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Data Subjects
          </span>
          <span className="text-2xl font-bold text-slate-900 dark:text-sky-400">
            {auditSummary.activeDataSubjectsCount}
          </span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Erasure SLA
          </span>
          <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
            {auditSummary.erasureSlaSeconds}s
          </span>
        </div>
      </div>
    </div>
  );
};
