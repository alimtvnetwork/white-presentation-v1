import React from 'react';
import type { CampaignChannelMetricItem } from '../../../types/flatGlobalSuiteTypes';
import { TrendingUp, DollarSign } from 'lucide-react';

export interface CampaignMetricCardProps {
  channel: CampaignChannelMetricItem;
  index: number;
}

export const CampaignMetricCard: React.FC<CampaignMetricCardProps> = ({ channel, index }) => {
  return (
    <div className="plane-1-raised rounded-2xl p-5 border border-slate-800 bg-slate-950/70 flex flex-col justify-between h-[150px] shadow-lg">
      <div className="flex items-center justify-between">
        <span className="font-ubuntu text-sm font-bold text-slate-200">{channel.channelName}</span>
        {channel.isTopPerformer && (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
            <TrendingUp size={11} /> TOP ROAS
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 font-mono text-xs">
        <div>
          <span className="text-[10px] text-slate-400 block">BUDGET</span>
          <span className="text-slate-200 font-bold flex items-center">
            <DollarSign size={12} className="text-indigo-400" />
            {channel.budgetAllocation.replace('$', '')}
          </span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">CONVERSIONS</span>
          <span className="text-cyan-400 font-bold">{channel.conversionsCount.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">ROAS MULTIPLIER</span>
          <span className="text-emerald-400 font-bold">{channel.roasMultiplier}</span>
        </div>
      </div>
    </div>
  );
};
