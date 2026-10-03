import React, { useState } from 'react';
import type { CampaignPerformanceLightboxSlideData, CampaignCreativeAssetItem } from '../../../types/flatGlobalSuiteTypes';
import { CampaignMetricCard } from './CampaignMetricCard';
import { CampaignCreativeCard } from './CampaignCreativeCard';
import { CampaignLightboxModal } from './CampaignLightboxModal';
import { Megaphone } from 'lucide-react';

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
              <span className="text-rose-400 font-bold text-base">{slide.totalAdSpend || '$480,000'}</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="text-[10px] text-slate-400 block">GENERATED REVENUE</span>
              <span className="text-emerald-400 font-bold text-base">{slide.totalGeneratedRevenue || '$3,840,000'}</span>
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
        <CampaignLightboxModal
          creative={activeCreative}
          onClose={() => setActiveCreative(null)}
        />
      )}
    </div>
  );
};
