import React from 'react';
import type { ThreatFeedItem } from '../../../types/sovereignOperationsArchetypes';
import { ShieldCheck, Flame, Radio, Crosshair } from 'lucide-react';

interface ThreatActorListProps {
  threatFeed: ThreatFeedItem[];
}

export const ThreatActorList: React.FC<ThreatActorListProps> = ({ threatFeed }) => {
  const severityBadge = (sev: string) => {
    switch (sev) {
      case 'CRITICAL':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
      case 'HIGH':
        return 'text-amber-800 dark:text-amber-300 bg-amber-500/10 border-amber-500/30';
      case 'MEDIUM':
        return 'text-amber-900 dark:text-amber-400 bg-yellow-500/10 border-yellow-500/30';
      default:
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    }
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-4 rounded-xl border flex flex-col justify-between h-[360px] shadow-sm"
    >
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <span className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <Crosshair size={13} className="text-rose-400" /> Active Threat Ingress Feed ({threatFeed.length})
        </span>
        <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
          <Radio size={10} className="animate-pulse" /> Real-Time BPF Filter
        </span>
      </div>

      <div className="space-y-2.5 my-2 overflow-y-auto pr-1">
        {threatFeed.map((threat) => (
          <div
            key={threat.id}
            className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-100">{threat.threatActor}</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono font-semibold border ${severityBadge(threat.severity)}`}>
                  {threat.severity}
                </span>
                {threat.isZeroDaySignature && (
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30">
                    Zero-Day
                  </span>
                )}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {threat.threatCategory} &bull; <span className="font-mono text-slate-500">{threat.mitreTactic}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-right font-mono">
              <div>
                <div className="text-[10px] text-slate-400 uppercase">CVSS v3.1</div>
                <div className="text-xs font-bold text-rose-400">{threat.cvssScore.toFixed(1)}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase">Impact</div>
                <div className="text-xs font-bold text-slate-200">{threat.affectedAssetsCount} Hosts</div>
              </div>
              {threat.isContained && (
                <div className="text-emerald-400 p-1 bg-emerald-500/10 rounded border border-emerald-500/20" title="Contained">
                  <ShieldCheck size={14} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span>MITRE ATT&CK Matrix v14 Compliant</span>
        <span className="text-emerald-400 flex items-center gap-1 font-semibold">
          <ShieldCheck size={12} /> 100% Contained
        </span>
      </div>
    </div>
  );
};
