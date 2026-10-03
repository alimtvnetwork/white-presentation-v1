import React from 'react';
import type { SemanticCacheHitSlideData } from '../../../types/kineticRevolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Database, Zap, ShieldCheck, Search } from 'lucide-react';

export const SemanticCacheHitSlide: React.FC<{ slide: SemanticCacheHitSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const clusters = slide.clusters || [];
  const thresholds = slide.thresholds || [];
  const cards = slide.telemetryCards || [];
  const lead = 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'EDGE INFERENCE OPTIMIZATION'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title || 'Semantic Cache Hit Topology: Vector Similarity Offload'}
          </h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Exact-match L1 and cosine ANN vector clustering reducing generative AI inference compute costs and P95 latency.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 rounded-full border border-violet-700/60 bg-violet-950/40 text-violet-300 font-bold flex items-center gap-1.5"><Database size={14} /> {slide.vectorStoreEngine || 'Vector ANN'}</span>
          <span className="px-3 py-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/40 text-emerald-300 font-bold flex items-center gap-1.5"><Zap size={14} /> Hit Rate: {slide.globalCacheHitRatio || '85.4%'}</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4">
        {cards.slice(0, 4).map((c) => (
          <div key={c.id} className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 plane-1-raised">
            <span className="font-mono text-xs text-slate-400 block mb-1">{c.metricTitle}</span>
            <div className="font-ubuntu text-2xl font-bold text-white flex items-baseline justify-between">
              <span>{c.displayValue}</span>
              <span className="text-xs font-mono font-bold text-emerald-400">{c.bandwidthSavedFormatted}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-12 gap-6 my-auto">
        <div className="col-span-7 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Semantic Embedding Clusters</span>
          <div className="grid grid-cols-2 gap-3">
            {clusters.slice(0, 4).map((cl) => (
              <div key={cl.id} className={`p-4 rounded-xl border transition-all ${cl.hasNearExactMatch ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg' : 'bg-slate-950/70 border-slate-800/80'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white truncate max-w-[150px]">{cl.clusterLabel}</h4>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800/40">{cl.hitRatePercent}% HIT</span>
                </div>
                <p className="font-mono text-[11px] text-slate-400 mb-2 truncate">Ex: "{cl.sampleQueries?.[0] || 'Domain query'}"</p>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  <span>Dim: {cl.embeddingDimension}</span>
                  <span className="text-cyan-300 font-bold">Dist: {cl.centroidDistance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-1.5"><Search size={14} className="text-cyan-400" /> Cosine Similarity Tiers</span>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 font-mono text-xs space-y-2.5">
            {thresholds.slice(0, 3).map((t) => (
              <div key={t.id} className="flex items-center justify-between py-1.5 border-b border-slate-900/90 last:border-0">
                <div>
                  <span className="font-bold text-white">Threshold: {t.cosineThreshold}</span>
                  <span className="text-slate-400 text-[11px] ml-2">Ratio: {t.recallPrecisionRatio}</span>
                </div>
                <span className="text-slate-400 text-[11px]">FP: {t.falsePositiveRatePercent}%</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${t.isRecommendedThreshold ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/40' : 'bg-slate-900 text-slate-500'}`}>
                  {t.isRecommendedThreshold ? 'OPT' : 'TIER'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Lookup Latency: {slide.medianLookupLatencyMs || 3.2}ms | Embedding: {slide.embeddingModel || 'Text-Embedding-3'} | Exact Bypass Active</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
