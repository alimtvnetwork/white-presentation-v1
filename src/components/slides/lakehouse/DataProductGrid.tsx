import React from 'react';
import type { LakehouseDomainItem } from '../../../types/sovereignOperationsArchetypes';
import { Database, ShieldCheck, Lock, Activity } from 'lucide-react';

interface DataProductGridProps {
  dataDomains: LakehouseDomainItem[];
}

export const DataProductGrid: React.FC<DataProductGridProps> = ({ dataDomains }) => {
  return (
    <div className="grid grid-cols-4 gap-4 z-10 my-auto">
      {dataDomains.map((dom) => (
        <div
          key={dom.id}
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="p-4 rounded-xl border flex flex-col justify-between h-[360px] shadow-sm hover:border-teal-500/50 transition-colors"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 truncate max-w-[200px]">
                {dom.domainName}
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {dom.complianceHealthPercent}% Health
              </span>
            </div>

            <div className="text-xs text-slate-400 mt-1">{dom.tableFormat}</div>
            <div className="flex items-center gap-3 text-xs text-slate-300 mt-2 font-mono">
              <span>Size: <strong className="text-teal-400">{dom.storagePetabytes} PB</strong></span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">{dom.dailyQueryCount}</span>
            </div>
          </div>

          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 space-y-2 my-2">
            <div className="text-[11px] font-mono uppercase text-slate-400 flex items-center justify-between">
              <span>Security & Masking</span>
              <span className="text-teal-400 font-bold">Casbin RBAC</span>
            </div>
            <div className="space-y-1 text-xs font-mono text-slate-300">
              <div className="flex items-center justify-between">
                <span>Column Masking:</span>
                <span className="text-emerald-400 font-semibold">
                  {dom.isColumnLevelMasked ? 'Enforced' : 'Unmasked'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>GDPR Erasure:</span>
                <span className="text-emerald-400 font-semibold">
                  {dom.isGdprCompliant ? 'Automated' : 'Manual'}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1 text-indigo-400">
              <Lock size={11} /> Field Encryption
            </span>
            <span className="text-emerald-400 flex items-center gap-1 font-medium">
              <ShieldCheck size={11} />
              {dom.hasAuditProvenance ? 'Immutable Audit' : 'Standard'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
