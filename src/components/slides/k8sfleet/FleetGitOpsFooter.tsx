import React from 'react';
import { GitBranch, ShieldCheck, Terminal } from 'lucide-react';

interface FleetGitOpsFooterProps {
  leadFleetOrchestrator: string;
  orchestratorTitle: string;
  isZeroDriftEnforced: boolean;
}

export const FleetGitOpsFooter: React.FC<FleetGitOpsFooterProps> = ({
  leadFleetOrchestrator,
  orchestratorTitle,
  isZeroDriftEnforced,
}) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-3 text-slate-300">
        <span className="flex items-center gap-1.5 text-sky-400 font-bold">
          <GitBranch size={14} /> GitOps ArgoCD & Flux Engine
        </span>
        <span className="text-slate-600">&bull;</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <ShieldCheck size={12} />
          {isZeroDriftEnforced ? 'Zero-Drift Auto-Sync Enforced' : 'Manual Sync Mode'}
        </span>
        <span className="text-slate-600">&bull;</span>
        <span className="text-slate-400">100% Declarative Kubernetes Manifests</span>
      </div>

      <div className="flex items-center gap-2 text-slate-400">
        <Terminal size={12} />
        <span>
          Fleet Lead: <strong className="text-slate-200">{leadFleetOrchestrator}</strong> ({orchestratorTitle})
        </span>
      </div>
    </div>
  );
};
