import React from 'react';
import type { FleetPolicyItem } from '../../../types/sovereignOperationsArchetypes';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

interface WorkloadSummaryListProps {
  fleetPolicies: FleetPolicyItem[];
}

export const WorkloadSummaryList: React.FC<WorkloadSummaryListProps> = ({ fleetPolicies }) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-sky-400 font-bold">
          <ShieldCheck size={14} /> Fleet Admission Policies:
        </span>
        <div className="flex items-center gap-3 text-slate-300">
          {fleetPolicies.map((pol) => (
            <span
              key={pol.id}
              className="bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800 text-[11px] flex items-center gap-2"
            >
              <span className="text-slate-200">{pol.policyName}</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 size={11} /> {pol.complianceRatePercent}%
              </span>
              {pol.isEnforcedGlobally && (
                <span className="text-[10px] text-sky-400 font-mono bg-sky-500/10 px-1 py-0.2 rounded border border-sky-500/20">
                  Global
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-emerald-400 font-semibold">
        <Lock size={12} /> Kyverno / Gatekeeper Zero-Trust Policy
      </div>
    </div>
  );
};
