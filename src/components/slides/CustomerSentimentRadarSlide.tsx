import React from 'react';
import type { CustomerSentimentRadarSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { SentimentHeader } from './sentiment/SentimentHeader';
import { SentimentRadarChart } from './sentiment/SentimentRadarChart';
import { SentimentScorecard } from './sentiment/SentimentScorecard';
import { SentimentQuoteCard } from './sentiment/SentimentQuoteCard';
import { ShieldCheck, MessageSquare } from 'lucide-react';

export const CustomerSentimentRadarSlide: React.FC<{
  slide: CustomerSentimentRadarSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const axes = slide.radarAxes || [];
  const quotes = slide.quotes || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <SentimentHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="grid grid-cols-12 gap-8 z-10 my-auto h-[640px] items-center">
        <div className="col-span-5 flex flex-col items-center justify-center">
          <SentimentRadarChart axes={axes} />
        </div>

        <div className="col-span-7 flex flex-col justify-between h-full py-2">
          <div>
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>Multidimensional Attribute Breakdown</span>
            </div>
            <SentimentScorecard axes={axes} />
          </div>

          <div className="mt-4">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MessageSquare size={12} className="text-cyan-400" /> Verified Executive Verbatims
            </div>
            <div className="grid grid-cols-2 gap-4">
              {quotes.map((q) => (
                <SentimentQuoteCard key={q.id} quote={q} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-rose-400 font-bold">
          <ShieldCheck size={14} /> Voice of Customer Validated | Zero Sample Distortion | Live Telemetry Polling
        </span>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Survey Sample: {slide.surveySampleSize || 1420} Accounts</span>
          <span className="text-slate-200">CSAT: {slide.customerSatisfactionScore || 96.2}%</span>
        </div>
      </div>
    </div>
  );
};
