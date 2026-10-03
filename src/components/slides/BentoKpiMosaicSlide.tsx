import React from 'react';
import type { BentoKpiMosaicSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { BentoHeaderBar } from './bento/BentoHeaderBar';
import { BentoKpiCard } from './bento/BentoKpiCard';
import { ShieldCheck, Sparkles, Activity } from 'lucide-react';

export const BentoKpiMosaicSlide: React.FC<{ slide: BentoKpiMosaicSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const cards = slide.cards || [];
  const hasLiveSparklines = slide.hasLiveSparklines ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <BentoHeaderBar
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="grid grid-cols-4 grid-rows-3 gap-6 z-10 my-auto h-[620px]">
        {cards.map((card) => (
          <BentoKpiCard
            key={card.id}
            card={card}
            hasLiveSparklines={hasLiveSparklines}
          />
        ))}
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl border border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
            <Activity size={14} /> Telemetry Live Ingestion Active
          </span>
          <span className="text-slate-400">Quarter: <strong className="text-slate-200">{slide.reportingQuarter || 'Q3 2026'}</strong></span>
          <span className="text-slate-400">Total Gauges: <strong className="text-slate-200">{cards.length}</strong></span>
          {hasLiveSparklines && (
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Sparkles size={12} /> Real-Time Micro-Sparklines Synced
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
          <ShieldCheck size={14} />
          <span>Sovereign Executive Mosaic Verified</span>
        </div>
      </div>
    </div>
  );
};
