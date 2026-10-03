import React from 'react';
import { Terminal, ShieldCheck } from 'lucide-react';

interface IdpHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  totalServices: number;
  compliancePct: number;
  avgSetupSec: number;
  isEditMode: boolean;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

export const IdpHeader: React.FC<IdpHeaderProps> = ({
  kicker,
  title,
  subtitle,
  totalServices,
  compliancePct,
  avgSetupSec,
  isEditMode,
  onTitleChange,
  onSubtitleChange,
}) => {
  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <Terminal size={16} className="text-violet-500" />
            {kicker || 'INTERNAL DEVELOPER PLATFORM (IDP)'}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20 flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-violet-400" />
            CNCF Golden Paths & Backstage Service Catalog
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onTitleChange(e.currentTarget.textContent || '')}
        >
          {title || 'Internal Developer Platform (IDP) Hub'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-4xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onSubtitleChange(e.currentTarget.textContent || '')}
        >
          {subtitle || 'Self-Service Golden Paths, Automated Software Catalog Governance, and 42s Onboarding'}
        </p>
      </div>

      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Services Tracked
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{totalServices}</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Compliance
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">{compliancePct}%</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Avg Setup
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-violet-400">{avgSetupSec}s</span>
        </div>
      </div>
    </div>
  );
};
