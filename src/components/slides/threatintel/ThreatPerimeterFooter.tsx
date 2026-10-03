import React from 'react';
import { ShieldCheck, Terminal, Radio } from 'lucide-react';

interface ThreatPerimeterFooterProps {
  socCommander: string;
  commanderTitle: string;
  isAutomatedMitigationActive: boolean;
}

export const ThreatPerimeterFooter: React.FC<ThreatPerimeterFooterProps> = ({
  socCommander,
  commanderTitle,
  isAutomatedMitigationActive,
}) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-rose-400 font-bold">
          <Radio size={14} className="animate-pulse" /> SOC Containment Status:
        </span>
        <span className="text-slate-300">
          {isAutomatedMitigationActive ? 'Automated WAF & Kernel TC Rules Active' : 'Manual Review Mode'}
        </span>
        <span className="text-slate-600">&bull;</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <ShieldCheck size={12} /> Zero-Trust Egress Isolation Verified
        </span>
      </div>

      <div className="flex items-center gap-2 text-slate-400">
        <Terminal size={12} />
        <span>
          SOC Commander: <strong className="text-slate-200">{socCommander}</strong> ({commanderTitle})
        </span>
      </div>
    </div>
  );
};
