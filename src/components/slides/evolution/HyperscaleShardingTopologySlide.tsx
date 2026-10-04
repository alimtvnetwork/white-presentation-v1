// lint-allow: file-size reason="HyperscaleShardingTopologySlide flat sovereign hyperscale database sharding topology" max=120
import React from 'react';
import type { HyperscaleShardingTopologySlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { HardDrive, CheckCircle2, Server, Database, GitFork, ShieldCheck, Activity } from 'lucide-react';

const DEF_PARTITIONS = [
  { partitionId: 'p1', partitionIndex: 1, hashRingTokenRange: '0x00000000 - 0x3FFFFFFF', primaryStorageNode: 'storage-node-us-east-01', dataVolumeTerabytes: 2100, activeReadWriteQps: 640000, replicationLagMs: 1.2, isPartitionBalanced: true, hasReplicaLagWithinSla: true, isPrimaryOnline: true },
  { partitionId: 'p2', partitionIndex: 2, hashRingTokenRange: '0x40000000 - 0x7FFFFFFF', primaryStorageNode: 'storage-node-eu-central-02', dataVolumeTerabytes: 2200, activeReadWriteQps: 580000, replicationLagMs: 1.4, isPartitionBalanced: true, hasReplicaLagWithinSla: true, isPrimaryOnline: true },
  { partitionId: 'p3', partitionIndex: 3, hashRingTokenRange: '0x80000000 - 0xBFFFFFFF', primaryStorageNode: 'storage-node-ap-east-03', dataVolumeTerabytes: 2000, activeReadWriteQps: 610000, replicationLagMs: 1.8, isPartitionBalanced: true, hasReplicaLagWithinSla: true, isPrimaryOnline: true },
  { partitionId: 'p4', partitionIndex: 4, hashRingTokenRange: '0xC0000000 - 0xFFFFFFFF', primaryStorageNode: 'storage-node-sa-east-04', dataVolumeTerabytes: 2100, activeReadWriteQps: 570000, replicationLagMs: 2.1, isPartitionBalanced: true, hasReplicaLagWithinSla: true, isPrimaryOnline: true },
];

export const HyperscaleShardingTopologySlide: React.FC<{ slide?: HyperscaleShardingTopologySlideData; data?: HyperscaleShardingTopologySlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const partitions = data?.partitions?.length ? data.partitions : DEF_PARTITIONS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><HardDrive size={16} className="text-violet-500" />{data?.kicker || 'HYPERSCALE DATABASE STORAGE ARCHITECTURE'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {data?.totalClusterStoragePetabytes || 8.4} PB Storage Mesh</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Hyperscale Database Sharding Topology: 8.4 PB Consistent Hash Ring'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Distributed database storage topology managing 8.4 petabytes across 128 NVMe storage nodes with automated zero-downtime shard rebalancing'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Peak QPS</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{((data?.peakThroughputQps || 2400000) / 1000000).toFixed(1)}M QPS Peak</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Rebalancing</span><span className="text-sm font-bold text-emerald-500">ZERO DOWNTIME</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[550px] items-stretch">
        {partitions.map((pt) => (
          <div key={pt.partitionId} className="plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between transition-all hover:scale-[1.01]">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-sm font-bold text-violet-400">PARTITION 0{pt.partitionIndex}</span>
              <span className="font-mono text-sm px-2.5 py-1 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">{((pt.dataVolumeTerabytes) / 1000).toFixed(1)} PB</span>
            </div>
            <div className="space-y-4 font-mono text-sm my-3">
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <span className="text-sm text-slate-400 block uppercase">Token Hash Range</span>
                <span className="font-bold text-slate-200 text-sm block truncate">{pt.hashRingTokenRange}</span>
                <span className="text-sm text-slate-400 block uppercase mt-2">Primary Node</span>
                <span className="font-bold text-sky-300 text-sm">{pt.primaryStorageNode}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Throughput:</span><span className="font-bold text-emerald-400 text-sm">{(pt.activeReadWriteQps / 1000).toFixed(0)}K QPS</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Replica Lag:</span><span className="font-bold text-sky-300 text-sm">{pt.replicationLagMs}ms</span></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Server size={16} /> NVMe Direct Attached Storage</div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-6"><span className="text-sm uppercase text-slate-400">Physical Nodes:</span><span className="text-emerald-400 font-bold text-base">128 NVMe</span><span className="text-sm uppercase text-slate-400">Virtual Tokens:</span><span className="text-sky-300 font-bold text-base">4,096 vnodes</span><span className="text-sm uppercase text-slate-400">Write Amplification:</span><span className="text-violet-400 font-bold text-base">1.14x</span></div>
        <div className="flex items-center gap-4"><span className="text-sm text-slate-400">Ring Balance: <strong className="text-emerald-400">OPTIMAL</strong></span></div>
      </div>
    </div>
  );
};
