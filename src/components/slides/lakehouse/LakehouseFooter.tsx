import React from 'react';
import { ShieldCheck, Terminal, Layers } from 'lucide-react';

interface LakehouseFooterProps {
  lakehouseArchitect: string;
  architectTitle: string;
  isCasbinRbacEnforced: boolean;
}

export const LakehouseFooter: React.FC<LakehouseFooterProps> = ({
  lakehouseArchitect,
  architectTitle,
  isCasbinRbacEnforced,
}) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-3 text-slate-300">
        <span className="flex items-center gap-1.5 text-teal-400 font-bold">
          <Layers size={14} /> Apache Iceberg Spec v2
        </span>
        <span className="text-slate-600">&bull;</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <ShieldCheck size={12} />
          {isCasbinRbacEnforced ? 'Casbin RBAC Matrix Fully Enforced' : 'Advisory Policy'}
        </span>
        <span className="text-slate-600">&bull;</span>
        <span className="text-slate-400">Zero In-Memory Leakage</span>
      </div>

      <div className="flex items-center gap-2 text-slate-400">
        <Terminal size={12} />
        <span>
          Lakehouse Architect: <strong className="text-slate-200">{lakehouseArchitect}</strong> ({architectTitle})
        </span>
      </div>
    </div>
  );
};
