import React from 'react';
import type { GovernanceRuleItem } from '../../../types/sovereignOperationsArchetypes';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

interface LakehouseTierMatrixProps {
  governanceRules: GovernanceRuleItem[];
}

export const LakehouseTierMatrix: React.FC<LakehouseTierMatrixProps> = ({ governanceRules }) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-teal-400 font-bold">
          <ShieldCheck size={14} /> Catalog Governance Rules:
        </span>
        <div className="flex items-center gap-3 text-slate-300">
          {governanceRules.map((rule) => (
            <span
              key={rule.id}
              className="bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800 text-[11px] flex items-center gap-2"
            >
              <span className="text-slate-200">{rule.ruleName}</span>
              <span className="text-slate-500">({rule.enforcementMode})</span>
              {rule.isPassed && (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={11} /> Pass
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-emerald-400 font-semibold">
        <Lock size={12} /> 100% Deterministic RBAC Policy
      </div>
    </div>
  );
};
