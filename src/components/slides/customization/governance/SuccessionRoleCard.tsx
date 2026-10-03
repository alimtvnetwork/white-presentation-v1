import React from 'react';
import { UserCheck, Users, ShieldCheck, Award, Clock } from 'lucide-react';
import type { ExecutiveSuccessionRoleItem } from '../../../../types/customization/sovereignTelemetryTypes';

interface SuccessionRoleCardProps {
  role: ExecutiveSuccessionRoleItem;
  index: number;
  isStepActive: boolean;
}

export const SuccessionRoleCard: React.FC<SuccessionRoleCardProps> = ({
  role,
  index: _index,
  isStepActive,
}) => {
  const isReady = role.isSuccessorReady;
  const hasRetention = role.hasRetentionIncentive;
  const isAlim = role.incumbentName.includes('Alim Ul Karim');
  const roleTitle = isAlim ? 'Chief Software Engineer' : role.executiveRole;

  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isStepActive ? 'var(--pres-accent)' : 'var(--pres-border)',
      }}
      className={`plane-1-raised rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
        isStepActive ? 'ring-2 ring-emerald-500/40 shadow-xl' : 'opacity-85'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
            {role.id}
          </span>
          <span className="font-mono text-xs flex items-center gap-1 font-bold text-sky-700 dark:text-sky-400">
            <Clock size={12} /> {role.readinessHorizonMonths === 0 ? 'Ready Now' : `${role.readinessHorizonMonths}m Horizon`}
          </span>
        </div>

        <h3 className="font-ubuntu text-base font-bold leading-snug mb-1" style={{ color: 'var(--pres-text)' }}>
          {roleTitle}
        </h3>
        <div className="text-xs font-mono mb-4 text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
          <UserCheck size={13} /> Incumbent: {role.incumbentName}
        </div>

        <div className="space-y-2 mb-4">
          <div className="p-2.5 rounded-lg bg-[var(--pres-surface-muted)]">
            <div className="text-[10px] font-mono uppercase mb-0.5" style={{ color: 'var(--pres-text-muted)' }}>
              Primary Successor
            </div>
            <div className="font-bold text-sm text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
              <Award size={14} className="text-indigo-500" /> {role.readyNowCandidateName}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <Users size={13} className="text-sky-500" /> Bench Depth
            </span>
            <span className="font-bold text-sky-700 dark:text-sky-400">
              {role.benchDepthCount} Candidates
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between">
        <span
          className={`font-mono text-[11px] px-2 py-0.5 rounded-full border flex items-center gap-1 ${
            isReady
              ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30 font-bold'
              : 'bg-amber-500/10 text-amber-900 dark:text-amber-400 border-amber-300 dark:border-amber-500/30'
          }`}
        >
          <CheckCircle2Icon isReady={isReady} /> {isReady ? 'Successor Ready' : 'Pipeline Training'}
        </span>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30 flex items-center gap-1">
          <ShieldCheck size={11} /> {hasRetention ? 'Retention Granted' : 'Standard'}
        </span>
      </div>
    </div>
  );
};

const CheckCircle2Icon: React.FC<{ isReady: boolean }> = ({ isReady: _isReady }) => (
  <ShieldCheck size={11} />
);
