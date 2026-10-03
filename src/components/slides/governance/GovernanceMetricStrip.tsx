import React from 'react';
import { CheckCircle2, ShieldAlert, Award, FileCheck } from 'lucide-react';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface GovernanceMetricStripProps {
  overallComplianceScore: number;
  chiefGovernanceOfficer: string;
  cgoTitle: string;
  isRegulatoryAuditPassed: boolean;
  totalResolutions: number;
}

export const GovernanceMetricStrip: React.FC<GovernanceMetricStripProps> = ({
  overallComplianceScore,
  chiefGovernanceOfficer,
  cgoTitle,
  isRegulatoryAuditPassed,
  totalResolutions,
}) => {
  const isAuditPassed = isBooleanTrue(isRegulatoryAuditPassed);

  return (
    <div className="plane-1-raised px-5 py-3 rounded-xl border border-slate-800 bg-slate-900/60 z-10 flex items-center justify-between font-mono text-xs">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Compliance Index:</span>
          <span className="text-emerald-400 font-bold text-sm">{overallComplianceScore}%</span>
        </div>
        <div className="h-4 w-px bg-slate-800" />
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Charter Resolutions:</span>
          <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">{totalResolutions} Verified</span>
        </div>
        <div className="h-4 w-px bg-slate-800" />
        <div className="flex items-center gap-2 text-slate-300">
          <Award size={13} className="text-amber-600 dark:text-amber-400" />
          <span>Oversight Lead:</span>
          <strong className="text-slate-100">{chiefGovernanceOfficer}</strong>
          <span className="text-slate-400">({cgoTitle})</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {isAuditPassed ? (
          <span className="text-emerald-400 font-bold flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <CheckCircle2 size={13} />
            <span>Regulatory Audit Passed</span>
          </span>
        ) : (
          <span className="text-rose-400 font-bold flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30">
            <ShieldAlert size={13} />
            <span>Audit Pending</span>
          </span>
        )}
      </div>
    </div>
  );
};
