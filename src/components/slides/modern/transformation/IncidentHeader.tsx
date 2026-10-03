import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import type { WarRoomTelemetryHeader } from '../../../../types/modern/transformationTypes';

interface IncidentHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  isEditMode?: boolean;
  onEditTitle?: (val: string) => void;
  onEditSubtitle?: (val: string) => void;
  commandHeader: WarRoomTelemetryHeader;
}

export const IncidentHeader: React.FC<IncidentHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isEditMode,
  onEditTitle,
  onEditSubtitle,
  commandHeader,
}) => {
  const commander = commandHeader.incidentCommander.includes('Chief Software Engineer')
    ? commandHeader.incidentCommander
    : `${commandHeader.incidentCommander}, Chief Software Engineer`;

  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <AlertTriangle size={16} className="text-rose-500" />
            {kicker || 'MISSION-CRITICAL SRE RESILIENCE'}
          </span>
          <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center gap-1.5 font-bold">
            {commandHeader.severityLevel} ACTIVE | {commandHeader.incidentId}
          </span>
        </div>

        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onEditTitle?.(e.currentTarget.textContent || '')}
        >
          {title || 'Incident Command War Room & High-Resilience Response'}
        </h1>

        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-5xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onEditSubtitle?.(e.currentTarget.textContent || '')}
        >
          {subtitle || 'Deterministic 4-phase incident resolution lifecycle minimizing blast radius and restoring SLA'}
        </p>
      </div>

      <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-sm">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Commander
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-sky-300">
            {commander}
          </span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            MTTA
          </span>
          <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
            {commandHeader.meanTimeToAcknowledgeSeconds}s
          </span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            MTTR
          </span>
          <span className="text-2xl font-bold text-slate-900 dark:text-violet-400">
            {commandHeader.meanTimeToResolutionMinutes}m
          </span>
        </div>
      </div>
    </div>
  );
};
