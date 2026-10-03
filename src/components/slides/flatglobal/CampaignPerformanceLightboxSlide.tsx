import React, { useState } from 'react';
import type { CampaignPerformanceLightboxSlideData, CampaignCreativeAssetItem } from '../../../types/flatGlobalSuiteTypes';
import { CampaignMetricCard } from './CampaignMetricCard';
import { CampaignCreativeCard } from './CampaignCreativeCard';
import { Megaphone, X, Play, DollarSign } from 'lucide-react';

export const CampaignPerformanceLightboxSlide: React.FC<{
  slide: CampaignPerformanceLightboxSlideData;
}> = ({ slide }) => {
  const [activeCreative, setActiveCreative] = useState<CampaignCreativeAssetItem | null>(null);
  const channels = slide.performanceChannels || [];
  const creatives = slide.lightboxCreatives || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_80px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <span className="kicker-pill-badge mb-1">{slide.kicker || 'COMMERCIAL ACCELERATION'}</span>
          <h1 className="font-ubuntu text-3xl font-black text-white tracking-tight">
            {slide.title || 'Global Go-To-Market Campaign & Acquisition Lightbox'}
          </h1>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-slate-300">
          <span className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-bold flex items-center gap-1.5">
            <Megaphone size={14} /> {slide.campaignName || 'Q3 Enterprise Launch'}
          </span>
          <span className="text-slate-400">Duration: {slide.campaignDuration || '90-Day Global Ingress'}</span>
        </div>
      </div>

      <div className="z-10 space-y-4 my-auto">
        <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-8 font-mono text-xs">
            <div>
              <span className="text-[10px] text-slate-400 block">TOTAL AD SPEND</span>
              <span className="text-rose-400 font-bold text-base flex items-center">{slide.totalAdSpend || '$480,000'}</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="text-[10px] text-slate-400 block">GENERATED REVENUE</span>
              <span className="text-emerald-400 font-bold text-base flex items-center">{slide.totalGeneratedRevenue || '$3,840,000'}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 flex-1 max-w-[1050px] ml-8">
            {channels.map((ch, idx) => (
              <CampaignMetricCard key={ch.id || idx} channel={ch} index={idx} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {creatives.map((cr, idx) => (
            <CampaignCreativeCard
              key={cr.id || idx}
              creative={cr}
              index={idx}
              onPreview={(item) => setActiveCreative(item)}
            />
          ))}
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-2.5">
        <span className="text-emerald-400">Omnichannel ROAS Multiplier: 8.0x aggregate blended return</span>
        <span>Click creative cards to inspect high-resolution video frame lightbox</span>
      </div>

      {activeCreative && (
        <div className="absolute inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-16">
          <div className="plane-2-floating bg-slate-950 border border-indigo-500/60 rounded-3xl p-8 max-w-[1100px] w-full shadow-2xl relative">
            <button
              onClick={() => setActiveCreative(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
            >
              <X size={20} />
            </button>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              LIGHTBOX ASSET INSPECTOR • {activeCreative.conversionRatePercentage}% CONVERSION
            </span>
            <h2 className="font-ubuntu text-2xl font-bold text-white mt-4 mb-4">{activeCreative.creativeTitle}</h2>
            <div className="h-[360px] rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center relative overflow-hidden mb-4">
              <img src={activeCreative.mediaAssetUrl} alt="" className="w-full h-full object-cover" />
              <div className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center z-10 shadow-2xl">
                <Play size={32} className="ml-1 fill-white" />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveCreative(null)}
                className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold"
              >
                Close Lightbox
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
