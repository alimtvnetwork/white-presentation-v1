import React from 'react';
import { ShieldAlert, AlertTriangle, Lock, UserCheck } from 'lucide-react';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface SocSeverityHeroBarProps {
  incidentIdentifier: string;
  cvssSeverityScore: number;
  severityGrade: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  isQuarantineActive: boolean;
  incidentCommander: string;
  commanderRole: string;
}

export const SocSeverityHeroBar: React.FC<SocSeverityHeroBarProps> = ({
  incidentIdentifier,
  cvssSeverityScore,
  severityGrade,
  isQuarantineActive,
  incidentCommander,
  commanderRole,
}) => {
  const isQuarantineEnabled = isBooleanTrue(isQuarantineActive);
  const isCritical = severityGrade === 'CRITICAL';

  return (
    <div className="plane-1-raised p-4 rounded-2xl border border-rose-500/30 bg-rose-950/20 flex items-center justify-between font-mono text-xs">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
          <ShieldAlert size={14} className="text-rose-400" />
          INCIDENT {incidentIdentifier}
        </span>
        <span
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold border ${
            isCritical
              ? 'bg-red-500/20 text-red-300 border-red-500/40 animate-pulse'
              : 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40'
          }`}
        >
          <AlertTriangle size={14} />
          CVSS {cvssSeverityScore.toFixed(1)} {severityGrade}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold border ${
            isQuarantineEnabled
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
              : 'bg-slate-800 text-slate-400 border-slate-700'
          }`}
        >
          <Lock size={12} />
          {isQuarantineEnabled ? 'ZERO-TRUST QUARANTINE: ACTIVE' : 'QUARANTINE: STANDBY'}
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <UserCheck size={14} className="text-emerald-400" />
          Commander: <strong className="text-slate-100">{incidentCommander}</strong> ({commanderRole})
        </span>
      </div>
    </div>
  );
};
