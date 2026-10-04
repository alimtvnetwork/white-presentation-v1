// lint-allow: file-size reason="ActiveActiveShardingSlide kinetic 4-stage active-active consensus mesh" max=120
import React from 'react';
import type { ActiveActiveShardingSlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Database, CheckCircle2, Globe, GitFork, Server, Activity, ShieldCheck } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Shard Geo-Routing', stageSubtitle: 'Consistent hash ring routing to nearest physical availability zone', consensusProtocol: 'Consistent Hash vnodes', commitLatencyTargetMs: 0.8, unanimousQuorumNodesCount: 5, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'Raft Consensus Log', stageSubtitle: 'Multi-region log replication reaching cryptographic quorum', consensusProtocol: 'Optimized Multi-Raft v3', commitLatencyTargetMs: 4.5, unanimousQuorumNodesCount: 5, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'CRDT Delta Merge', stageSubtitle: 'State-based commutative delta evaluation using Hybrid Logical Clocks', consensusProtocol: 'State-based PN-Counter / ORSet', commitLatencyTargetMs: 1.2, unanimousQuorumNodesCount: 5, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Global Barrier Commit', stageSubtitle: 'Cross-region read barrier broadcast and verifiable attestation seal', consensusProtocol: 'Synchronous Memory Barrier', commitLatencyTargetMs: 2.4, unanimousQuorumNodesCount: 5, isActive: false, isCompleted: false },
];

const DEF_SHARDS = [
  { id: 'sh1', shardIndex: 1, regionCode: 'us-east-1', assignedVnodesCount: 256, writeThroughputQps: 54200, replicationLagMilliseconds: 1.2, isLeaderNode: true, hasQuorumAchieved: true, isCrdtMergeActive: true },
  { id: 'sh2', shardIndex: 2, regionCode: 'eu-central-1', assignedVnodesCount: 256, writeThroughputQps: 48100, replicationLagMilliseconds: 2.1, isLeaderNode: false, hasQuorumAchieved: true, isCrdtMergeActive: true },
  { id: 'sh3', shardIndex: 3, regionCode: 'ap-southeast-1', assignedVnodesCount: 256, writeThroughputQps: 42900, replicationLagMilliseconds: 3.4, isLeaderNode: false, hasQuorumAchieved: true, isCrdtMergeActive: true },
  { id: 'sh4', shardIndex: 4, regionCode: 'sa-east-1', assignedVnodesCount: 256, writeThroughputQps: 39800, replicationLagMilliseconds: 2.9, isLeaderNode: false, hasQuorumAchieved: true, isCrdtMergeActive: true },
];

export const ActiveActiveShardingSlide: React.FC<{ slide?: ActiveActiveShardingSlideData; data?: ActiveActiveShardingSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.consensusStages?.length ? data.consensusStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const shards = data?.shards?.length ? data.shards : DEF_SHARDS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Database size={16} className="text-violet-500" />{data?.kicker || 'HIGH-AVAILABILITY DISTRIBUTED STORAGE'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {(data?.globalTransactionTps || 185000).toLocaleString()} TPS Active</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Active-Active Sharding Consensus Mesh: Planetary CRDT State Machine'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Globally distributed multi-region database sharding fabric with sub-millisecond consistent hashing and lock-free CRDT resolution'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Replication Lag</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.meanReplicationLagMs || 2.4}ms Mean</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Data Loss Gate</span><span className="text-sm font-bold text-emerald-500">ZERO TOLERANCE</span></div>
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
            <span className="text-sm opacity-75">{st.commitLatencyTargetMs}ms SLA</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[480px] items-stretch">
        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-violet-400">PLANETARY SHARD TOPOLOGY</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">4 Regions</span></div>
          <div className="space-y-3 font-mono text-sm my-3">
            {shards.map((sh) => (
              <div key={sh.id} className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <div className="flex justify-between items-center"><span className="font-bold text-slate-200">{sh.regionCode}</span><span className={`text-sm font-bold ${sh.isLeaderNode ? 'text-violet-400' : 'text-sky-300'}`}>{sh.isLeaderNode ? 'RAFT LEADER' : 'FOLLOWER'}</span></div>
                <div className="flex justify-between text-sm text-slate-400"><span>QPS: {sh.writeThroughputQps.toLocaleString()}</span><span className="text-emerald-400">{sh.replicationLagMilliseconds}ms lag</span></div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Globe size={16} /> 5-Region Geographic Quorum Established</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-sky-300">CONSENSUS & REPLICATION</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Step {currentStep + 1} of 4</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Protocol Engine</span>
              <div className="text-sky-300 font-bold text-base">{stages[currentStep]?.consensusProtocol}</div>
              <div className="text-sm text-slate-300 leading-relaxed font-poppins">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <div className="flex justify-between text-sm"><span className="text-slate-400">Target Commit Latency:</span><span className="text-emerald-400 font-bold">{stages[currentStep]?.commitLatencyTargetMs}ms</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-400">Quorum Nodes:</span><span className="text-slate-200 font-bold">{stages[currentStep]?.unanimousQuorumNodesCount} Regions Required</span></div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-sky-400 flex items-center gap-2"><GitFork size={16} /> Hybrid Logical Clocks Synchronized (&lt;120ns drift)</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'ring-2 ring-emerald-500 shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-emerald-400">SYNCHRONOUS COMMIT BARRIER</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Guaranteed</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Throughput Capacity</span>
              <div className="text-emerald-400 font-bold text-3xl font-mono">185,000 TPS</div>
              <div className="text-sm text-slate-400">Continuous Partition Tolerance (CAP AP/CP hybrid)</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Conflict Resolution</span>
              <div className="text-sky-300 font-bold text-base">Lock-Free CRDT Convergence</div>
              <div className="text-sm text-slate-400">Mathematically verified commutative delta state</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><ShieldCheck size={16} /> Zero-Data-Loss RPO=0 / RTO &lt; 1s</div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-4"><span className="text-sm uppercase text-slate-400">Cluster Status:</span><span className="text-emerald-400 font-bold">ACTIVE-ACTIVE MULTI-REGION MESH IN SYNC</span></div>
        <div className="flex items-center gap-6"><span className="text-sm text-slate-400">Active Step: <strong className="text-slate-200">{currentStep + 1} / 4</strong></span><span className="text-sm text-slate-400">Replication State: <strong className="text-emerald-400">CONVERGED</strong></span></div>
      </div>
    </div>
  );
};
