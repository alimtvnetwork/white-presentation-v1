import React from 'react';
import type { CampaignCreativeAssetItem } from '../../../types/flatGlobalSuiteTypes';
import { Play, ZoomIn, Star, Sparkles } from 'lucide-react';

export interface CampaignCreativeCardProps {
  creative: CampaignCreativeAssetItem;
  index: number;
  onPreview: (creative: CampaignCreativeAssetItem) => void;
}

export const CampaignCreativeCard: React.FC<CampaignCreativeCardProps> = ({
  creative,
  index,
  onPreview,
}) => {
  const isFeatured = creative.isFeaturedAsset;

  return (
    <div
      onClick={() => onPreview(creative)}
      className="plane-1-raised rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden group cursor-pointer hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between h-[360px] shadow-xl hover:scale-[1.01]"
    >
      <div className="relative h-[220px] bg-slate-900 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
        <img
          src={creative.mediaAssetUrl}
          alt={creative.creativeTitle}
          onError={(e) => {
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="w-14 h-14 rounded-full bg-indigo-600/90 text-white flex items-center justify-center z-20 shadow-xl group-hover:scale-110 transition-transform">
          <Play size={22} className="ml-1 fill-white" />
        </div>
        {isFeatured && (
          <span className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
            <Star size={11} className="fill-amber-300" /> FEATURED CREATIVE
          </span>
        )}
      </div>

      <div className="p-5 z-20 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-xs text-slate-400">Creative 0{index + 1}</span>
            <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              <Sparkles size={11} /> {creative.conversionRatePercentage}% CVR
            </span>
          </div>
          <h4 className="font-ubuntu text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
            {creative.creativeTitle}
          </h4>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs font-mono text-indigo-400">
          <span>Click to Inspect Lightbox</span>
          <ZoomIn size={14} className="group-hover:scale-110 transition-transform" />
        </div>
      </div>
    </div>
  );
};
