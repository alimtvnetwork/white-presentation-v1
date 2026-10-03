import React from 'react';
import type { DataPipelineLineageDagSlideData } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Activity, Database, ShieldCheck, Zap } from 'lucide-react';

export const DataPipelineLineageDagSlide: React.FC<{ slide: DataPipelineLineageDagSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const nodes = slide.dagNodes || [];
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;

  const layers = [
    { key: 'ingestion', label: '1. Ingestion Layer' },
    { key: 'transformation', label: '2. Transformation' },
    { key: 'storage-lake', label: '3. Medallion Lake' },
    { key: 'analytics-serving', label: '4. Serving Engines' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'DATA PLATFORM ARCHITECTURE'}</span>
          <h1
            className="font-ubuntu text-4xl font-black text-white tracking-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Data Pipeline Lineage DAG: Real-Time Streaming & Medallion Storage'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Architectural lineage tracking from raw Kafka edge ingestion through Flink transformations to ClickHouse serving.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-cyan-300 font-bold">
            <Zap size={14} className="text-cyan-400" /> Daily: {slide.totalDailyVolumeFormatted || '4.8B Events'}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-emerald-300 font-bold">
            <Activity size={14} className="text-emerald-400" /> SLA: {slide.endToEndP99SlaFormatted || '< 120ms P99'}
          </span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {layers.map((layer) => {
          const layerNodes = nodes.filter((n) => n.nodeLayer === layer.key);
          return (
            <div key={layer.key} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col h-[520px]">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
                <Database size={15} className="text-cyan-400" />
                <h3 className="font-ubuntu text-sm font-bold text-white uppercase tracking-wider">{layer.label}</h3>
              </div>
              <div className="space-y-3 overflow-hidden flex-1 flex flex-col justify-between">
                {layerNodes.map((node) => (
                  <div key={node.nodeId} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-md flex flex-col justify-between flex-1">
                    <div>
                      <span className="font-mono text-[11px] font-bold text-cyan-400 block mb-1">{node.technology}</span>
                      <h4 className="font-ubuntu text-sm font-bold text-white">{node.nodeName}</h4>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2 font-mono text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block">THROUGHPUT</span>
                        <span className="text-emerald-400 font-bold">{node.throughputEventsSecFormatted}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">P99 LATENCY</span>
                        <span className="text-cyan-300 font-bold">{node.p99LatencyMsFormatted}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Automated Great Expectations Schema Gate Active | Schema Registry Strict Enforcement</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
