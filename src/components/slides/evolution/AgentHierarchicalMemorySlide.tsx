// lint-allow: file-size reason="AgentHierarchicalMemorySlide kinetic 4-stage swarm cognition memory pipeline" max=120
import React from 'react';
import type { AgentHierarchicalMemorySlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Cpu, CheckCircle2, Database, Layers, GitFork, Activity, ShieldCheck } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Scratchpad Ingestion', stageSubtitle: 'Sub-millisecond token parsing and working session buffer tokenization', storageEngine: 'Redis Enterprise NVRAM', throughputEventsPerSec: 45000, retrievalAccuracyPercent: 99.9, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'Episodic HNSW Indexing', stageSubtitle: 'High-dimensional vector embedding with recency decay factors', storageEngine: 'Qdrant HNSW Cluster', throughputEventsPerSec: 18500, retrievalAccuracyPercent: 98.8, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'Semantic Graph Linking', stageSubtitle: 'Cross-agent entity linking and property graph triple extraction', storageEngine: 'Neo4j Enterprise Graph', throughputEventsPerSec: 6200, retrievalAccuracyPercent: 99.4, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Archival Merkle Seal', stageSubtitle: 'Long-term cold ledger persistence with verifiable Merkle tree proofs', storageEngine: 'Apache Iceberg on S3', throughputEventsPerSec: 1200, retrievalAccuracyPercent: 100.0, isActive: false, isCompleted: false },
];

const DEF_SEGMENTS = [
  { id: 's1', segmentIndex: 1, memoryTierName: 'Volatile Scratchpad', latencyTargetMs: 0.5, capacityMegabytes: 128, retentionWindowHours: 2, isMemoryTierActive: true, hasHardwareGpuAcceleration: false, isEvictionProtected: false },
  { id: 's2', segmentIndex: 2, memoryTierName: 'Episodic Vector Store', latencyTargetMs: 4.2, capacityMegabytes: 65536, retentionWindowHours: 720, isMemoryTierActive: true, hasHardwareGpuAcceleration: true, isEvictionProtected: true },
  { id: 's3', segmentIndex: 3, memoryTierName: 'Semantic Knowledge Graph', latencyTargetMs: 12.0, capacityMegabytes: 524288, retentionWindowHours: 8760, isMemoryTierActive: true, hasHardwareGpuAcceleration: true, isEvictionProtected: true },
  { id: 's4', segmentIndex: 4, memoryTierName: 'Cold Archival Ledger', latencyTargetMs: 45.0, capacityMegabytes: 10485760, retentionWindowHours: 87600, isMemoryTierActive: true, hasHardwareGpuAcceleration: false, isEvictionProtected: true },
];

export const AgentHierarchicalMemorySlide: React.FC<{ slide?: AgentHierarchicalMemorySlideData; data?: AgentHierarchicalMemorySlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.pipelineStages?.length ? data.pipelineStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const segments = data?.memorySegments?.length ? data.memorySegments : DEF_SEGMENTS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Cpu size={16} className="text-violet-500" />{data?.kicker || 'AUTONOMOUS AGENT MEMORY SYSTEMS'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {data?.memoryConsolidationRatePercent || 99.2}% Consolidation Rate</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Agent Hierarchical Memory Pipeline: Multi-Tier Swarm Cognition'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Four-tier dynamic cognitive memory architecture unifying working context, episodic vectors, and declarative knowledge graphs'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Swarm Swarm</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.swarmName || 'HiveMind-X9'}</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">KG Triples</span><span className="text-sm font-bold text-violet-400">14.85M Triples</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`step-interactive text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-sm flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-white scale-[1.02] animate-active-beacon' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-sm opacity-75">{st.retrievalAccuracyPercent}% acc</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[480px] items-stretch">
        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-violet-400">MEMORY TIER HIERARCHY</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">4 Tiers</span></div>
          <div className="space-y-3 font-mono text-sm my-3">
            {segments.map((seg) => (
              <div key={seg.id} className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <div className="flex justify-between items-center"><span className="font-bold text-slate-200">{seg.memoryTierName}</span><span className="text-sm text-emerald-400 font-bold">{seg.latencyTargetMs}ms Latency</span></div>
                <div className="flex justify-between text-sm text-slate-400"><span>Cap: {(seg.capacityMegabytes / 1024).toFixed(1)} GB</span><span className="text-sky-300">Retention: {seg.retentionWindowHours}h</span></div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Layers size={16} /> Hierarchical HNSW Vector Quantization</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-sky-300">PIPELINE EXECUTION STAGE</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Step {currentStep + 1} of 4</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Active Stage Name</span>
              <div className="text-sky-300 font-bold text-base">{stages[currentStep]?.stageName}</div>
              <div className="text-sm text-slate-300 leading-relaxed font-poppins">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <div className="flex justify-between text-sm"><span className="text-slate-400">Storage Engine:</span><span className="text-slate-200 font-bold">{stages[currentStep]?.storageEngine}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-400">Throughput:</span><span className="text-emerald-400 font-bold">{stages[currentStep]?.throughputEventsPerSec.toLocaleString()} events/s</span></div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-sky-400 flex items-center gap-2"><Database size={16} /> Semantic Knowledge Graph Triples Linked</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'ring-2 ring-emerald-500 shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-emerald-400">PROVENANCE & MERKLE SEAL</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Verified</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Consolidation Rate</span>
              <div className="text-emerald-400 font-bold text-3xl font-mono">{data?.memoryConsolidationRatePercent || 99.2}%</div>
              <div className="text-sm text-slate-400">Zero Attention Decay Drift</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Merkle Attestation</span>
              <div className="text-sky-300 font-bold text-base">Cryptographic Proof Sealed</div>
              <div className="text-sm text-slate-400">Tamper-evident cold archival history</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><ShieldCheck size={16} /> 100% Verifiable Cognition History</div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-4"><span className="text-sm uppercase text-slate-400">Memory State:</span><span className="text-emerald-400 font-bold">SYNCHRONIZED MULTI-AGENT SWARM</span></div>
        <div className="flex items-center gap-6"><span className="text-sm text-slate-400">Active Step: <strong className="text-slate-200">{currentStep + 1} / 4</strong></span><span className="text-sm text-slate-400">Recall Accuracy: <strong className="text-emerald-400">99.4%</strong></span></div>
      </div>
    </div>
  );
};
