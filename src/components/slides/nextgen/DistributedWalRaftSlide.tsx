// lint-allow: file-size reason="DistributedWalRaftSlide flat sovereign append-only WAL Raft consensus" max=120
import React from 'react';
import type { DistributedWalRaftSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Server, CheckCircle2, ShieldCheck, HardDrive, Network, Lock } from 'lucide-react';

const DEF_NODES = [
  { nodeId: 'raft-node-01 (Leader)', role: 'Leader' as const, currentTerm: 42, lastLogIndex: 1892040, commitIndex: 1892040, replicationLagMs: 0.0, isLeader: true, isHealthy: true },
  { nodeId: 'raft-node-02 (Follower)', role: 'Follower' as const, currentTerm: 42, lastLogIndex: 1892040, commitIndex: 1892040, replicationLagMs: 1.2, isLeader: false, isHealthy: true },
  { nodeId: 'raft-node-03 (Follower)', role: 'Follower' as const, currentTerm: 42, lastLogIndex: 1892039, commitIndex: 1892039, replicationLagMs: 2.4, isLeader: false, isHealthy: true },
];

const DEF_LOGS = [
  { logIndex: 1892038, term: 42, commandPayload: 'CONFIG_CHANGE: AddNode(raft-04)', isCommitted: true, isFsynced: true },
  { logIndex: 1892039, term: 42, commandPayload: 'TX_BEGIN: AccountTransfer(USD 50M)', isCommitted: true, isFsynced: true },
  { logIndex: 1892040, term: 42, commandPayload: 'TX_COMMIT: QuorumAck(2/3 nodes)', isCommitted: true, isFsynced: true },
];

export const DistributedWalRaftSlide: React.FC<{ slide?: DistributedWalRaftSlideData; data?: DistributedWalRaftSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const nodes = data?.raftNodes?.length ? data.raftNodes : DEF_NODES;
  const logs = data?.recentLogEntries?.length ? data.recentLogEntries : DEF_LOGS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Network size={15} className="text-cyan-500" />{data?.kicker || 'DISTRIBUTED CONSENSUS ARCHITECTURE'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> Quorum Active (Term {data?.currentRaftTerm || 42}) • Zero Split-Brain</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Distributed WAL Raft Consensus: Strict Linearizable Durability'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Append-only write-ahead log replication with deterministic majority quorum and hardware fsync barriers'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Cluster</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.clusterName || 'ApexRaft Engine'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Watermark</span><span className="text-sm font-bold text-cyan-400">Idx #{(data?.commitWatermarkIndex || 1892040).toLocaleString()}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[530px] items-stretch">
        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-2"><Server size={16} /> RAFT PEER NODES</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">3-Node Quorum</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {nodes.map((n, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center"><span className="text-slate-200 font-bold">{n.nodeId}</span><span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${n.isLeader ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-300'}`}>{n.role}</span></div>
                <div className="flex justify-between text-[11px] text-slate-400"><span>Commit: #{n.commitIndex}</span><span className="text-emerald-400">{n.replicationLagMs === 0 ? 'Leader Sync' : `Lag: ${n.replicationLagMs}ms`}</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><Lock size={13} /> Strict Quorum Maintained (2/3 Majoritarian)</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-2"><HardDrive size={16} /> APPEND-ONLY WAL SEGMENTS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">O_DIRECT Fsync</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {logs.map((log) => (
              <div key={log.logIndex} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1 font-mono text-xs">
                <div className="flex justify-between items-center"><span className="text-cyan-300 font-bold">Index #{log.logIndex}</span><span className="text-emerald-400 text-[10px] font-bold">FSYNCED</span></div>
                <div className="text-[11px] text-slate-300 truncate">{log.commandPayload}</div>
                <div className="text-[10px] text-slate-500">Raft Term: {log.term} • Quorum Replicated</div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Zero In-Memory Data Loss On Crash</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300 flex items-center gap-2"><Network size={16} /> LINEARIZABLE READS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">Read Index</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">READ INDEX VERIFICATION</span>
              <div className="text-violet-300 font-bold text-xs font-mono">Leader Heartbeat Verification</div>
              <div className="text-[11px] text-slate-400">Ensures leader has not been partitioned before returning state machine reads.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">JEMALLOC LATENCY SPIKE AVOIDANCE</span>
              <div className="text-emerald-400 font-bold text-sm">P99 Fsync Latency: 1.42ms</div>
              <div className="text-[10px] text-slate-400">Lock-free ringbuffer memory pool</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Durability Level:</span><strong className="font-bold">STRICT FSYNC</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Raft State Machine Stable</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Quorum Consensus: <strong className="text-slate-200">ACTIVE</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Linearizable Reads: <strong className="text-emerald-400">VERIFIED SAFE</strong></span>
        </div>
        <div className="text-slate-400">Single Step Overview Archetype</div>
      </div>
    </div>
  );
};
