import React from 'react';
import { CreditCard, CheckCircle2 } from 'lucide-react';

interface FintechHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  isEditMode?: boolean;
  onEditTitle?: (val: string) => void;
  onEditSubtitle?: (val: string) => void;
  telemetry: {
    settledTps: number;
    dailyVolumeMillionUsd: number;
    isLedgerImmutabilityVerified?: boolean;
    ledgerImmutabilityVerified?: boolean;
  };
}

export const FintechHeader: React.FC<FintechHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isEditMode,
  onEditTitle,
  onEditSubtitle,
  telemetry,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
          <CreditCard size={16} className="text-violet-500" />
          {kicker || 'INSTANT FINANCIAL CLEARING PIPELINE'}
        </span>
        <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
          <CheckCircle2 size={14} className="text-emerald-500" />
          ISO 20022 Compliant | SWIFT CBPR+ Ready
        </span>
      </div>

      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditTitle?.(e.currentTarget.textContent || '')}
      >
        {title || 'FinTech Payment Clearing Engine & Realtime Settlement'}
      </h1>

      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-base max-w-5xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditSubtitle?.(e.currentTarget.textContent || '')}
      >
        {subtitle ||
          'Sub-50ms deterministic payment pipeline executing ISO 20022 XML parsing, zero-tolerance sanctions screening, and atomic finality.'}
      </p>
    </div>

    <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-sm">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Settled TPS
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
          {telemetry.settledTps.toLocaleString()} TPS
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Daily Volume
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-sky-400">
          ${telemetry.dailyVolumeMillionUsd}M
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Immutability
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-violet-400">
          {telemetry.isLedgerImmutabilityVerified ?? telemetry.ledgerImmutabilityVerified ? 'Attested' : 'Pending'}
        </span>
      </div>
    </div>
  </div>
);
