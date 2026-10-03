import React from 'react';
import type { CampaignCreativeAssetItem } from '../../../types/flatGlobalSuiteTypes';
import { X, Play } from 'lucide-react';

export interface CampaignLightboxModalProps {
  creative: CampaignCreativeAssetItem;
  onClose: () => void;
}

export const CampaignLightboxModal: React.FC<CampaignLightboxModalProps> = ({
  creative,
  onClose,
}) => {
  return (
    <div className="absolute inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-16">
      <div className="plane-2-floating bg-slate-950 border border-indigo-500/60 rounded-3xl p-8 max-w-[1100px] w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
        >
          <X size={20} />
        </button>
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          LIGHTBOX ASSET INSPECTOR • {creative.conversionRatePercentage}% CONVERSION
        </span>
        <h2 className="font-ubuntu text-2xl font-bold text-white mt-4 mb-4">{creative.creativeTitle}</h2>
        <div className="h-[360px] rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center relative overflow-hidden mb-4">
          <img src={creative.mediaAssetUrl} alt="" className="w-full h-full object-cover" />
          <div className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center z-10 shadow-2xl">
            <Play size={32} className="ml-1 fill-white" />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold"
          >
            Close Lightbox
          </button>
        </div>
      </div>
    </div>
  );
};
