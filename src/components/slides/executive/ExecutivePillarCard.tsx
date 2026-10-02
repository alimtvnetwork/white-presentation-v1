import React from 'react';
import type { ExecutivePillarItem } from '../../../types/enterpriseArchetypes';
import { Shield, Compass, Target, Sparkles, Zap, TrendingUp } from 'lucide-react';

const PILLAR_ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Shield, Compass, Target, Sparkles, Zap, TrendingUp,
};

interface PillarCardProps {
  pillar: ExecutivePillarItem & {
    category?: string;
    targetKpi?: string;
    kpiLabel?: string;
    hasHighlight?: boolean;
    isActivePillar?: boolean;
  };
  index?: number;
}

export const ExecutivePillarCard: React.FC<PillarCardProps> = ({ pillar, index = 0 }) => {
  const hasAccent = Boolean(pillar.hasAccent || pillar.hasHighlight);
  const isActive = Boolean(pillar.isActivePillar);
  const IconComponent = (pillar.icon && PILLAR_ICONS[pillar.icon]) || Sparkles;

  return (
    <div
      className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
        hasAccent || isActive
          ? 'plane-2-elevated border-violet-500/40 bg-violet-500/10 shadow-lg shadow-violet-950/20'
          : 'plane-1-raised border-slate-800 bg-slate-900/40'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
            <IconComponent size={18} />
          </div>
          {pillar.category && (
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">
              {pillar.category}
            </span>
          )}
        </div>
        <h4 className="font-ubuntu text-base font-bold text-slate-100 mb-1">{pillar.title}</h4>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs leading-relaxed">
          {pillar.description}
        </p>
      </div>

      {pillar.targetKpi && (
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-[10px] uppercase">
            {pillar.kpiLabel || 'Target KPI'}
          </span>
          <span className="font-mono text-xs font-bold text-violet-300">{pillar.targetKpi}</span>
        </div>
      )}
    </div>
  );
};
