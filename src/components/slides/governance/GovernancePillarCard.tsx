import React from 'react';
import { ShieldCheck, UserCheck, Clock, CheckCircle } from 'lucide-react';
import type { GovernancePillarItem } from '../../../types/globalPptArchetypes';
import { GovernanceResolutionItem } from './GovernanceResolutionItem';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface GovernancePillarCardProps {
  pillar: GovernancePillarItem;
  isActivePillar: boolean;
  isCompletedPillar: boolean;
}

export const GovernancePillarCard: React.FC<GovernancePillarCardProps> = ({
  pillar,
  isActivePillar,
  isCompletedPillar,
}) => {
  const isQuorumAchieved = isBooleanTrue(pillar.isQuorumAchieved);
  const isAuditVerified = isBooleanTrue(pillar.isAuditVerified);

  const containerStyle = isActivePillar
    ? 'plane-2-elevated border-amber-500/80 bg-slate-900/90 ring-2 ring-amber-500/30 shadow-xl opacity-100 scale-[1.01]'
    : isCompletedPillar
    ? 'plane-1-raised border-slate-700/80 bg-slate-900/60 opacity-80'
    : 'plane-1-raised border-slate-800/60 bg-slate-950/40 opacity-45';

  return (
    <div className={`p-4 rounded-xl border flex flex-col justify-between transition-all duration-300 ${containerStyle}`}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800 text-amber-800 dark:text-amber-300 font-bold">
            {pillar.committeeCode}
          </span>
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <span className="text-slate-400">Health:</span>
            <span className="text-emerald-400 font-bold">{pillar.complianceHealthPercent}%</span>
          </div>
        </div>

        <div>
          <h2 className="font-ubuntu text-base font-bold text-white tracking-tight">
            {pillar.pillarName}
          </h2>
          <p className="text-xs text-slate-400 font-poppins">{pillar.oversightDomain}</p>
        </div>

        <div className="flex items-center justify-between text-xs font-mono py-1 px-2 rounded bg-slate-950/60 border border-slate-800">
          <span className="flex items-center gap-1 text-slate-300">
            <UserCheck size={12} className="text-amber-600 dark:text-amber-400" /> {pillar.chairPerson}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock size={11} /> {pillar.meetingCadence}
          </span>
        </div>

        <div className="flex flex-col gap-2 mt-1">
          {pillar.resolutions.map((res) => (
            <GovernanceResolutionItem key={res.id} resolution={res} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[11px] font-mono mt-2">
        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
          {isQuorumAchieved && <CheckCircle size={12} />}
          <span>Quorum {isQuorumAchieved ? '100% Met' : 'Pending'}</span>
        </span>
        <span className="flex items-center gap-1 text-cyan-400">
          {isAuditVerified && <ShieldCheck size={12} />}
          <span>{isAuditVerified ? 'Audit Verified' : 'In Review'}</span>
        </span>
      </div>
    </div>
  );
};
