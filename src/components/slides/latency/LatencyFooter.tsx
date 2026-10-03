import React from 'react';
import type { BackboneTransitLinkItem } from '../../../types/sovereignOperationsArchetypes';
import { ShieldCheck, Network, Lock } from 'lucide-react';

interface LatencyFooterProps {
  transitLinks: BackboneTransitLinkItem[];
  networkDirector: string;
  directorTitle: string;
}

export const LatencyFooter: React.FC<LatencyFooterProps> = ({
  transitLinks,
  networkDirector,
  directorTitle,
}) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
          <Network size={14} /> Backbone Fiber Mesh:
        </span>
        <div className="flex items-center gap-3 text-slate-300">
          {transitLinks.slice(0, 4).map((link) => (
            <span key={link.id} className="bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800 text-[11px] flex items-center gap-1">
              <span className="text-slate-400">{link.sourcePop} &rarr; {link.destPop}</span>
              <span className="text-emerald-400 font-bold">{link.rttLatencyMs}ms</span>
              {link.isEncrypted && <Lock size={10} className="text-indigo-400" />}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 text-slate-400">
        <span className="flex items-center gap-1 text-emerald-400">
          <ShieldCheck size={13} /> 100% WireGuard Encrypted
        </span>
        <span className="text-slate-500">|</span>
        <span>
          Director: <strong className="text-slate-200">{networkDirector}</strong> ({directorTitle})
        </span>
      </div>
    </div>
  );
};
