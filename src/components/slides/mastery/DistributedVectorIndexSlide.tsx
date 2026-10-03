// lint-allow: file-size reason="DistributedVectorIndexSlide sovereign telemetry overview" max=120
import React from 'react';
import type { DistributedVectorIndexShardingSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createDistributedVectorIndexSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Database, CheckCircle2, ShieldCheck, HardDrive, Cpu } from 'lucide-react';

export const DistributedVectorIndexSlide: React.FC<{ slide?: DistributedVectorIndexShardingSlideData; data?: DistributedVectorIndexShardingSlideData }> = ({ slide, data: pData }) => {
  const fallback = createDistributedVectorIndexSlide('default-distributed-vector-index');
  const data = slide || pData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const cluster = data.clusterSpec || fallback.clusterSpec;
  const shards = data.shards?.length ? data.shards : fallback.shards;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Database size={15} className="text-violet-500" />
              {data.kicker || 'VECTOR SEARCH ARCHITECTURE'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {cluster.clusterName} • {cluster.totalVectorsIndexed.toLocaleString()} Vectors
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Distributed Vector Index Sharding: Sub-4ms Retrieval Over 500M Embeddings'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Memory-mapped NVMe partitions, Voronoi centroid routing, and HNSW graphs maintaining 99.4% recall'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Vector Dim</span><span className="text-lg font-bold text-slate-900 dark:text-sky-300">{cluster.vectorDimensionality}-d</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Total Storage</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{cluster.totalIndexStorageTb} TB</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-slate-800 z-10 flex items-center justify-between font-mono text-xs my-2">
        <div className="flex items-center gap-3">
          <span className="text-sky-400 font-bold flex items-center gap-1.5"><Cpu size={15} /> CENTROID ROUTER:</span>
          <span className="text-slate-200 font-bold">{data.routingAlgorithm}</span>
        </div>
        <div className="flex items-center gap-5 text-slate-400">
          <span>Centroid Count: <strong className="text-emerald-400">16,384 Cells</strong></span>
          <span>Dispatch Latency: <strong className="text-emerald-400">0.35ms P99</strong></span>
          <span>Routing Strategy: <strong className="text-sky-300">gRPC Multi-Node Parallel</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[460px] items-stretch">
        {shards.map((shard, idx) => (
          <div key={shard.shardId} className="plane-2-elevated p-5 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
              <span className="font-mono text-xs font-bold text-sky-400 flex items-center gap-1.5">
                <HardDrive size={14} /> SHARD 0{idx + 1} {shard.isLeader ? '(LEADER)' : '(FOLLOWER)'}
              </span>
              <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${shard.isLeader ? 'bg-sky-500/15 text-sky-300 border-sky-500/30' : 'bg-slate-800 text-slate-300 border-slate-700'}`}>
                {shard.memoryTier}
              </span>
            </div>
            <div className="my-3 space-y-2.5 font-mono text-xs">
              <div className="flex justify-between text-slate-400 text-[11px]"><span>Capacity</span><span className="text-slate-200 font-bold">{shard.vectorCapacityFormatted}</span></div>
              <div className="flex justify-between text-slate-400 text-[11px]"><span>Graph Index</span><span className="text-sky-300 font-bold">{shard.indexType}</span></div>
              <div className="flex justify-between text-slate-400 text-[11px]"><span>P99 Retrieval</span><span className="text-emerald-400 font-bold">{shard.p99LatencyMs} ms</span></div>
              <div className="flex justify-between text-slate-400 text-[11px]"><span>Recall Score</span><span className="text-emerald-400 font-bold">{shard.recallAccuracyPercent}%</span></div>
              <div className="p-2.5 rounded-lg bg-black/30 border border-slate-800 text-[10px] text-slate-400">
                Host: {shard.nodeHost}
              </div>
            </div>
            <div className="pt-2.5 border-t border-slate-700/40 flex items-center justify-between font-mono text-[10px] text-slate-400">
              <span>Shard Health:</span>
              <span className="text-emerald-400 font-bold">100% HEALTHY</span>
            </div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> NVMe Direct I/O Active</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Throughput: <strong className="text-slate-200">14,800 QPS (Sub-4ms P99)</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Average Recall Accuracy: <strong className="text-emerald-400">99.45%</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Sovereign Telemetry Overview</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
