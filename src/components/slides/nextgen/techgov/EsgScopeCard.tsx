import React from 'react';
import { CheckCircle2, TrendingDown } from 'lucide-react';
import type { EmissionScope } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface EsgScopeCardProps {
  scope: EmissionScope;
}

export const EsgScopeCard: React.FC<EsgScopeCardProps> = ({ scope }) => (
  <div
    style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
    className="plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1"
  >
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
          {scope.scopeId}
        </span>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 flex items-center gap-1">
          <CheckCircle2 size={12} />
          {scope.isSbtiValidated ? 'SBTI VERIFIED' : 'PENDING'}
        </span>
      </div>

      <h3 className="text-lg font-ubuntu font-bold text-slate-900 dark:text-slate-100 mb-1 leading-snug">
        {scope.scopeName}
      </h3>
      <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-3 line-clamp-2">
        {scope.emissionSource}
      </p>
    </div>

    <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase block">
          Current Emissions
        </span>
        <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
          {scope.currentMtCo2e.toLocaleString()} MT CO2e
        </span>
      </div>

      <div className="text-right">
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase block">
          Reduction Target
        </span>
        <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 justify-end">
          <TrendingDown size={14} />
          -{scope.targetReductionPercent}%
        </span>
      </div>
    </div>
  </div>
);
