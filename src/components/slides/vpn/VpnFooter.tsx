import React from 'react';
import { Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface VpnFooterProps {
  totalServersCount?: number;
  totalCountriesCount?: number;
  networkSummaryNotes?: string;
}

export const VpnFooter: React.FC<VpnFooterProps> = ({
  totalServersCount = 320,
  totalCountriesCount = 29,
  networkSummaryNotes,
}) => {
  return (
    <div className="z-10 flex items-center justify-between p-3.5 px-6 rounded-xl bg-slate-900/50 border border-slate-800 text-xs font-mono text-slate-400">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-slate-200">
          <Globe2 size={14} className="text-sky-400" />
          <span><strong>{totalServersCount}+</strong> Sovereign Edge Nodes</span>
        </div>
        <div className="flex items-center gap-2 text-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span><strong>{totalCountriesCount}</strong> Independent Jurisdictions</span>
        </div>
        <div className="flex items-center gap-2 text-amber-400">
          <ShieldCheck size={14} />
          <span>Zero Log Persistence Audit</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-slate-400">
        <CheckCircle2 size={12} className="text-emerald-400" />
        <span>{networkSummaryNotes || 'Strict RAM-only nodes with ephemeral cryptographic storage'}</span>
      </div>
    </div>
  );
};
