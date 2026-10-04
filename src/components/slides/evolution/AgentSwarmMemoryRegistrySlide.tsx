// lint-allow: file-size reason="AgentSwarmMemoryRegistrySlide flat sovereign agent swarm memory registry" max=120
import React from 'react';
import type { AgentSwarmMemoryRegistrySlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Database, CheckCircle2, Cpu, Layers, GitFork, ShieldCheck, Activity } from 'lucide-react';

const DEF_SHARDS = [
  { shardId: 'sv1', shardIndex: 1, agentRoleAffinity: 'Reasoning Agents', vectorDimensions: 1536, storedVectorsTotal: 8200000, quantizationMode: 'FP8_SCALAR_QUANTIZED', cacheHitRatePercent: 99.2, isShardOnline: true, hasVectorQuantizationActive: true, isCacheWarmed: true },
  { shardId: 'sv2', shardIndex: 2, agentRoleAffinity: 'Code Generation Agents', vectorDimensions: 1536, storedVectorsTotal: 6400000, quantizationMode: 'FP8_SCALAR_QUANTIZED', cacheHitRatePercent: 98.6, isShardOnline: true, hasVectorQuantizationActive: true, isCacheWarmed: true },
  { shardId: 'sv3', shardIndex: 3, agentRoleAffinity: 'Critic Evaluator Agents', vectorDimensions: 1536, storedVectorsTotal: 5800000, quantizationMode: 'FP8_SCALAR_QUANTIZED', cacheHitRatePercent: 99.1, isShardOnline: true, hasVectorQuantizationActive: true, isCacheWarmed: true },
  { shardId: 'sv4', shardIndex: 4, agentRoleAffinity: 'Executive Planner Agents', vectorDimensions: 1536, storedVectorsTotal: 4400000, quantizationMode: 'FP8_SCALAR_QUANTIZED', cacheHitRatePercent: 99.7, isShardOnline: true, hasVectorQuantizationActive: true, isCacheWarmed: true },
];

export const AgentSwarmMemoryRegistrySlide: React.FC<{ slide?: AgentSwarmMemoryRegistrySlideData; data?: AgentSwarmMemoryRegistrySlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const shards = data?.memoryShards?.length ? data.memoryShards : DEF_SHARDS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Database size={16} className="text-violet-500" />{data?.kicker || 'AUTONOMOUS AGENT VECTOR MEMORY'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {((data?.totalIndexedVectors || 24800000) / 1000000).toFixed(1)}M Vectors Indexed</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Agent Swarm Memory Registry: 24.8M Embeddings HNSW Cluster'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Distributed vector memory registry providing low-latency episodic recall, FP8 quantization, and cross-agent semantic search'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Cluster Engine</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">Qdrant Cluster v1.11</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Quantization</span><span className="text-sm font-bold text-emerald-500">FP8 SCALAR (75% RAM)</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[550px] items-stretch">
        {shards.map((sh) => (
          <div key={sh.shardId} className="plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between transition-all hover:scale-[1.01]">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-sm font-bold text-violet-400">POOL 0{sh.shardIndex}</span>
              <span className="font-mono text-sm px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">{sh.vectorDimensions} Dims</span>
            </div>
            <div className="space-y-4 font-mono text-sm my-3">
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <span className="text-sm text-slate-400 block uppercase">Agent Role Affinity</span>
                <span className="font-bold text-slate-200 text-sm block">{sh.agentRoleAffinity}</span>
                <span className="text-sm text-emerald-400 font-bold mt-2 block">{((sh.storedVectorsTotal) / 1000000).toFixed(1)}M Embeddings</span>
              </div>
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Cache Hit Rate:</span><span className="font-bold text-emerald-400 text-sm">{sh.cacheHitRatePercent}%</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Mode:</span><span className="font-bold text-sky-300 text-sm">FP8 QUANTIZED</span></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Cpu size={16} /> GPU Distance Warmed</div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-6"><span className="text-sm uppercase text-slate-400">HNSW Graph:</span><span className="text-emerald-400 font-bold text-base">ef=200, M=32</span><span className="text-sm uppercase text-slate-400">Recall@10:</span><span className="text-sky-300 font-bold text-base">99.4%</span><span className="text-sm uppercase text-slate-400">Total Vectors:</span><span className="text-violet-400 font-bold text-base">24,800,000</span></div>
        <div className="flex items-center gap-4"><span className="text-sm text-slate-400">Memory Integrity: <strong className="text-emerald-400">CONSOLIDATED</strong></span></div>
      </div>
    </div>
  );
};
