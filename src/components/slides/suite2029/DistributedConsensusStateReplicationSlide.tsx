// lint-allow: file-size reason="DistributedConsensusStateReplicationSlide kinetic 4-step workflow" max=440
import React from 'react';
import type {
  DistributedConsensusStateReplicationSlideData,
  ReplicationStage,
  ReplicatedRaftNode,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Server,
  ShieldCheck,
  CheckCircle2,
  GitCommit,
  Sparkles,
  Activity,
  Globe,
  Radio,
  Layers,
  ArrowRight,
  Database,
  Crown,
} from 'lucide-react';

const DEF_STAGES: ReplicationStage[] = [
  {
    stepIndex: 0,
    stageName: 'Log Entry Ingestion & AppendEntries RPC',
    stageSubtitle: 'Raft cluster leader serializes atomic state transition and initiates AppendEntries RPC',
    replicationLatencyMs: 2.1,
    majorityNodesConfirmed: 1,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Geo-Distributed WAN Transmission & Quorum Acks',
    stageSubtitle: 'Log deltas stream across multi-region datacenters awaiting quorum acknowledgments',
    replicationLatencyMs: 14.5,
    majorityNodesConfirmed: 3,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'ZK State Snapshot & Commit Index Advancement',
    stageSubtitle: 'Majority quorum locks commit index with verifiable zero-knowledge state proof',
    replicationLatencyMs: 3.8,
    majorityNodesConfirmed: 5,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'State Machine Application & Linearizable Read Lease',
    stageSubtitle: 'Committed log entries applied to finite state machines with sub-millisecond lease renewals',
    replicationLatencyMs: 1.1,
    majorityNodesConfirmed: 5,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: ReplicatedRaftNode[] = [
  {
    id: 'raft-node-01',
    nodeName: 'us-east-primary-01',
    nodeRole: 'leader',
    currentTerm: 42,
    lastLogIndex: 1845209,
    commitIndex: 1845209,
    isQuorumParticipant: true,
    hasHeartbeatGlow: true,
  },
  {
    id: 'raft-node-02',
    nodeName: 'eu-central-replica-02',
    nodeRole: 'follower',
    currentTerm: 42,
    lastLogIndex: 1845209,
    commitIndex: 1845209,
    isQuorumParticipant: true,
    hasHeartbeatGlow: true,
  },
  {
    id: 'raft-node-03',
    nodeName: 'ap-southeast-replica-03',
    nodeRole: 'follower',
    currentTerm: 42,
    lastLogIndex: 1845208,
    commitIndex: 1845208,
    isQuorumParticipant: true,
    hasHeartbeatGlow: true,
  },
  {
    id: 'raft-node-04',
    nodeName: 'sa-east-replica-04',
    nodeRole: 'follower',
    currentTerm: 42,
    lastLogIndex: 1845208,
    commitIndex: 1845208,
    isQuorumParticipant: true,
    hasHeartbeatGlow: false,
  },
];

export const DistributedConsensusStateReplicationSlide: React.FC<{
  slide?: DistributedConsensusStateReplicationSlideData;
  data?: DistributedConsensusStateReplicationSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.replicationStages?.length ? data.replicationStages : DEF_STAGES;
  const nodes = data?.clusterNodes?.length ? data.clusterNodes : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isLeaderReady = data?.isLeaderElected ?? true;
  const hasQuorum = data?.hasQuorumAcks ?? true;
  const hasSplitBrainGuards = data?.hasSplitBrainPrevention ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Server size={16} className="text-cyan-500" />
              {data?.kicker || 'DISTRIBUTED STATE MACHINES & GEO-REPLICATION'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Database size={14} /> Cluster: {data?.clusterIdentifier || 'raft-geo-mesh-v5'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Radio size={14} className="text-emerald-500" />
              Protocol: {data?.consensusProtocol || 'Raft + ZK Linearizable Snapshot'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Crown size={14} className="text-indigo-500" />
              Term: {data?.activeTerm ?? 42} (Leader Locked)
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Distributed Consensus State Replication'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Geo-distributed Raft multi-region consensus, zero-knowledge state snapshots, and linearizable read leases.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Replication RTT</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.replicationLatencyMs.toFixed(1)} ms
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Majority Acks</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.majorityNodesConfirmed} of 5 Quorum
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Kinetic 4-Step Nav Rail */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-75'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-[0.38] blur-[1.25px] text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    isActive
                      ? 'bg-[var(--pres-accent)] text-white'
                      : isCompleted
                      ? 'bg-emerald-500 text-white dark:text-slate-900'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <div>
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[14px] opacity-75 font-normal">
                    {st.replicationLatencyMs}ms RTT | {st.majorityNodesConfirmed}/5 acks
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                Step {idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Geo-Distributed Raft Cluster Nodes */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Globe size={16} className="text-[var(--pres-accent)]" /> Geo-Distributed Raft Nodes & Log Commit Indices
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((node, nIdx) => {
                const isCurrentLayer = nIdx === currentStep || (currentStep >= 2 && nIdx >= 2);
                const isLeader = node.nodeRole === 'leader';
                return (
                  <div
                    key={node.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Server size={16} className={isLeader ? 'text-amber-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{node.nodeName}</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isLeader
                              ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30'
                              : 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30'
                          }`}
                        >
                          {node.nodeRole}
                        </span>
                        {node.isQuorumParticipant && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Quorum Ack
                          </span>
                        )}
                        {node.hasHeartbeatGlow && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <Radio size={12} /> Heartbeat OK
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Term: {node.currentTerm}
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>Log: {node.lastLogIndex.toLocaleString()}</span>
                          <ArrowRight size={12} />
                          <span>Commit: {node.commitIndex.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isLeader ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${Math.min(100, (node.commitIndex / 1845210) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Linearizability: Enforced (ReadIndex Lease)</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Split-Brain Guard Active
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <GitCommit size={16} className="text-cyan-500" />
              Geo-Mesh Topology: Cross-Region Raft Cluster with ZK State Snapshotting
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Sub-15ms Cross-Region Quorum Ack Floor
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} State Pipeline
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
                Phase {currentStep + 1} Active
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[14px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Round Trip Time</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.replicationLatencyMs.toFixed(1)} ms
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Confirmed Acks</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.majorityNodesConfirmed} / 5
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Leader Elected & Stable</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isLeaderReady ? 'Single Stable Leader' : 'Election in Progress'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Quorum Acks Verified</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasQuorum ? 'Strict Majority Acknowledged' : 'Waiting on Quorum'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Split-Brain Prevention</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <Layers size={16} /> {hasSplitBrainGuards ? 'Fencing Tokens Active' : 'Unprotected'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Geo-distributed replication achieves zero data loss (RPO=0, RTO&lt;100ms).
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Linearizable State Replication Verified | Strict Quorum Achieved | Zero-Knowledge Snapshot Committed
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2029 Consensus Engine
          </span>
        </div>
      </div>
    </div>
  );
};

export default DistributedConsensusStateReplicationSlide;
