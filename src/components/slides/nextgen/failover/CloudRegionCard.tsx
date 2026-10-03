import React from 'react';
import { Cloud, CheckCircle2, ShieldCheck, RefreshCw } from 'lucide-react';
import type { CloudRegionNode } from '../../../../types/nextGenArchetypes';

interface CloudRegionCardProps {
  region: CloudRegionNode;
}

export const CloudRegionCard: React.FC<CloudRegionCardProps> = ({ region }) => {
  const providerBadgeClass =
    region.provider === 'AWS'
      ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/30'
      : region.provider === 'GCP'
        ? 'bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-500/30'
        : region.provider === 'AZURE'
          ? 'bg-sky-500/20 text-sky-800 dark:text-sky-300 border-sky-500/30'
          : 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/30';

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised rounded-2xl p-4 border flex flex-col justify-between hover:border-violet-500/50 hover:shadow-lg transition-all"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2.5 py-0.5 rounded-full font-mono text-xs font-bold border ${providerBadgeClass}`}>
            {region.provider}
          </span>
          <span className="font-mono text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1">
            <Cloud size={13} className="text-violet-400" />
            {region.location}
          </span>
        </div>

        <h4 className="text-lg font-bold font-ubuntu text-slate-900 dark:text-slate-100 mb-2">
          {region.regionId}
        </h4>

        <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-2">
          <div className="p-2.5 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
              Traffic Weight
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-emerald-400">
              {region.trafficWeightPercent}%
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
              Health Score
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-sky-300">
              {region.healthScorePercent}%
            </span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px]">
        <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
          {region.isHealthy ? <CheckCircle2 size={12} /> : <RefreshCw size={12} className="animate-spin text-amber-900 dark:text-amber-400" />}
          {region.isHealthy ? 'HEALTHY ROUTE' : 'DRAINING'}
        </span>
        <span className="text-slate-700 dark:text-slate-400 flex items-center gap-1">
          <ShieldCheck size={12} className="text-violet-400" />
          {region.isPrimary ? 'PRIMARY ACTIVE' : 'REPLICA HOT'}
        </span>
      </div>
    </div>
  );
};
