import React from 'react';
import { ShieldAlert, Activity } from 'lucide-react';

interface KillChainHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  activeAlerts: number;
  mttcMinutes: number;
  containmentRatePct: number;
  isEditMode: boolean;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

export const KillChainHeader: React.FC<KillChainHeaderProps> = ({
  kicker,
  title,
  subtitle,
  activeAlerts,
  mttcMinutes,
  containmentRatePct,
  isEditMode,
  onTitleChange,
  onSubtitleChange,
}) => {
  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <ShieldAlert size={16} className="text-rose-500" />
            {kicker || 'CYBER THREAT INTELLIGENCE & SOAR'}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-rose-500/10 text-slate-900 dark:text-rose-300 border border-rose-500/20 flex items-center gap-1.5">
            <Activity size={15} className="text-rose-400" />
            7-Stage Kill Chain Defense & Automated Mitigation
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onTitleChange(e.currentTarget.textContent || '')}
        >
          {title || 'MITRE ATT&CK Threat Kill Chain Matrix'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-4xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onSubtitleChange(e.currentTarget.textContent || '')}
        >
          {subtitle || 'Zero-Trust Lateral Containment, eBPF Kernel Telemetry, and Sub-Minute SOAR Playbook Execution'}
        </p>
      </div>

      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Active Alerts
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{activeAlerts} Triaged</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            MTTC SLA
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">{mttcMinutes}m Mean</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Auto-Contained
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{containmentRatePct}%</span>
        </div>
      </div>
    </div>
  );
};
