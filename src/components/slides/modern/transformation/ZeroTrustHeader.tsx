import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import type { ZeroTrustTelemetryBanner } from '../../../../types/modern/transformationTypes';

interface ZeroTrustHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  isEditMode?: boolean;
  onEditTitle?: (val: string) => void;
  onEditSubtitle?: (val: string) => void;
  complianceStandard?: string;
  telemetry: ZeroTrustTelemetryBanner;
}

export const ZeroTrustHeader: React.FC<ZeroTrustHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isEditMode,
  onEditTitle,
  onEditSubtitle,
  complianceStandard,
  telemetry,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-500" />
          {kicker || 'ZERO TRUST ENTERPRISE ARCHITECTURE'}
        </span>
        <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
          <Lock size={14} className="text-emerald-500" />
          {complianceStandard || 'NIST SP 800-207 Zero Trust'}
        </span>
      </div>

      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditTitle?.(e.currentTarget.textContent || '')}
      >
        {title || 'Autonomous Zero-Trust Identity & Access Perimeter'}
      </h1>

      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-base max-w-5xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditSubtitle?.(e.currentTarget.textContent || '')}
      >
        {subtitle || 'Hardware-attested authentication and micro-segmented workload authorization across sovereign boundaries'}
      </p>
    </div>

    <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-sm">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Active Sessions
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
          {telemetry.activeSessionsCount.toLocaleString()}
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Avg Trust Score
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-sky-400">
          {telemetry.averageTrustScore}%
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Auth Latency
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-violet-400">
          {telemetry.authLatencyMs}ms
        </span>
      </div>
    </div>
  </div>
);
