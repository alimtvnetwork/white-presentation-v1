import React from 'react';
import type { MeshTrafficEdgeItem } from '../../../types/sovereignOperationsArchetypes';
import { GitCommit, Lock, CheckCircle2 } from 'lucide-react';

interface MeshCircuitBreakerFooterProps {
  trafficEdges: MeshTrafficEdgeItem[];
  meshArchitect: string;
  architectTitle: string;
}

export const MeshCircuitBreakerFooter: React.FC<MeshCircuitBreakerFooterProps> = ({
  trafficEdges,
  meshArchitect,
  architectTitle,
}) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-indigo-400 font-bold">
          <GitCommit size={14} /> Active Mesh Edges:
        </span>
        <div className="flex items-center gap-3 text-slate-300">
          {trafficEdges.slice(0, 3).map((edge) => (
            <span
              key={edge.id}
              className="bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800 text-[11px] flex items-center gap-1.5"
            >
              <span className="text-slate-400 truncate max-w-[140px]">{edge.fromService}</span>
              <span className="text-slate-600">&rarr;</span>
              <span className="text-slate-200 truncate max-w-[140px]">{edge.toService}</span>
              <span className="text-emerald-400 font-bold">{edge.successRatePercent}%</span>
              {edge.isEncrypted && <Lock size={10} className="text-purple-400" />}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 text-slate-400">
        <span className="flex items-center gap-1 text-emerald-400">
          <CheckCircle2 size={13} /> Circuit Breakers Armed
        </span>
        <span className="text-slate-500">|</span>
        <span>
          Architect: <strong className="text-slate-200">{meshArchitect}</strong> ({architectTitle})
        </span>
      </div>
    </div>
  );
};
