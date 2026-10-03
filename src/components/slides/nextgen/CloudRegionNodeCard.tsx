import React from 'react';
import type { CloudRegionNode } from '../../../types/nextGenArchetypes';
import { Cloud, CheckCircle2 } from 'lucide-react';

interface CloudRegionNodeCardProps {
  regions: CloudRegionNode[];
}

export const CloudRegionNodeCard: React.FC<CloudRegionNodeCardProps> = ({ regions }) => {
  return (
    <div className="col-span-8 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <Cloud size={16} className="text-violet-400" />
          Active-Active Multi-Cloud Mesh ({regions.length} Sovereign Nodes)
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">
          BGP Anycast Dynamic Routing Engine
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {regions.map((reg) => {
          const providerColor =
            reg.provider === 'AWS'
              ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/30'
              : reg.provider === 'GCP'
                ? 'bg-blue-500/20 text-slate-900 dark:text-blue-300 border-blue-500/30'
                : reg.provider === 'AZURE'
                  ? 'bg-sky-500/20 text-slate-900 dark:text-sky-300 border-sky-500/30'
                  : 'bg-emerald-500/20 text-slate-900 dark:text-emerald-300 border-emerald-500/30';

          return (
            <div
              key={reg.regionId}
              style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
              className="plane-1-raised rounded-2xl p-4 border flex flex-col justify-between hover:border-violet-500/50 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`px-2.5 py-0.5 rounded-full font-mono text-xs font-bold border ${providerColor}`}>
                    {reg.provider}
                  </span>
                  {reg.isPrimary && (
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-violet-500/20 text-slate-900 dark:text-violet-300 border border-violet-500/30">
                      PRIMARY LEADER
                    </span>
                  )}
                </div>
                <h4 className="text-xl font-bold font-ubuntu text-slate-900 dark:text-slate-100 mb-1">{reg.location}</h4>
                <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-2.5">Node: {reg.regionId}</p>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-2.5">
                  <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
                    <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Weight</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-sky-400">{reg.trafficWeightPercent}% Global</span>
                  </div>
                  <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
                    <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Health Score</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-emerald-400">{reg.healthScorePercent}%</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px]">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> {reg.isHealthy ? 'HEALTHY' : 'IMPAIRED'}
                </span>
                <span className="text-slate-700 dark:text-slate-400">
                  Drain: <strong className="text-slate-900 dark:text-slate-200">{reg.isDraining ? 'DRAINING' : 'ACTIVE'}</strong>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
