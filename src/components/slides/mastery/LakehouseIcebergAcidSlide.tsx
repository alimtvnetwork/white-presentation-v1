// lint-allow: file-size reason="LakehouseIcebergAcidSlide sovereign metadata hierarchy overview" max=120
import React from 'react';
import type { LakehouseIcebergAcidLineageSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createLakehouseIcebergAcidSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Layers, CheckCircle2, ShieldCheck, GitBranch, Database } from 'lucide-react';

export const LakehouseIcebergAcidSlide: React.FC<{ slide?: LakehouseIcebergAcidLineageSlideData; data?: LakehouseIcebergAcidLineageSlideData }> = ({ slide, data: pData }) => {
  const fallback = createLakehouseIcebergAcidSlide('default-lakehouse-iceberg-acid');
  const data = slide || pData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const snapshots = data.snapshots?.length ? data.snapshots : fallback.snapshots;
  const manifests = data.manifests?.length ? data.manifests : fallback.manifests;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Layers size={15} className="text-violet-500" />{data.kicker || 'ENTERPRISE DATA ARCHITECTURE'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data.tableName} • {data.lakehouseStorageFormat || 'Apache Iceberg v2 Format'}</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data.title || 'Lakehouse Iceberg ACID Lineage: Snapshot Metadata Hierarchy'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data.subtitle || 'Immutable manifest tree, file-level pruning, and zero-copy branching on commodity object storage'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Storage Size</span><span className="text-lg font-bold text-slate-900 dark:text-sky-300">{data.totalTableSizeBytes || '14.8 TB'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">ACID Engine</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">Iceberg v2</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-slate-800 z-10 flex items-center justify-between font-mono text-xs my-2">
        <div className="flex items-center gap-4"><span className="text-sky-400 font-bold flex items-center gap-1.5"><Database size={15} /> METADATA:</span><span className="text-slate-200">Table Metadata v4 → Manifest List → Manifest Files → Parquet</span></div>
        <div className="flex items-center gap-5 text-slate-400"><span>Branches: <strong className="text-emerald-400">8 Active</strong></span><span>Time-Travel: <strong className="text-emerald-400">AS OF Replay</strong></span><span>Isolation: <strong className="text-sky-300">Serializable Snapshot</strong></span></div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[460px] items-stretch">
        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-sky-400">SNAPSHOT LINEAGE</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">Avro Pointers</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            {snapshots.map((snap) => (
              <div key={snap.snapshotId} className={`p-3 rounded-xl border ${snap.isCurrentSnapshot ? 'bg-emerald-950/40 border-emerald-500/40' : 'bg-black/30 border-slate-800'}`}>
                <div className="flex justify-between items-center text-slate-200 font-bold text-xs mb-1"><span>{snap.snapshotId}</span><span className={`text-[10px] ${snap.isCurrentSnapshot ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>{snap.isCurrentSnapshot ? 'CURRENT LIVE' : 'HISTORICAL'}</span></div>
                <div className="flex justify-between text-[11px] text-slate-300"><span>Op: {snap.operationType}</span><span className="text-emerald-300 font-bold">{snap.addedRecordsFormatted}</span></div>
                <div className="text-[10px] text-slate-400 pt-1">Total: {snap.totalRecordsFormatted}</div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-slate-400">Storage Engine: S3 WORM Object Storage</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-emerald-400">MANIFEST LIST & PRUNING</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">File Pushdown</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            {manifests.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1.5">
                <span className="text-slate-400 text-[10px] block truncate">{m.manifestPath}</span>
                <div className="text-emerald-300 text-xs font-bold">{m.partitionRangeFormatted}</div>
                <div className="flex justify-between text-slate-300 text-[11px]"><span>Data: <strong className="text-slate-100">{m.dataFileCount} Parquet</strong></span><span>Size: <strong className="text-slate-100">{m.fileSizeBytesFormatted}</strong></span></div>
              </div>
            ))}
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
              Min/max metadata bounds evaluate before disk I/O, pruning 94% of scanned bytes on timestamp queries.
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><CheckCircle2 size={13} /> Zero-Copy Pushdown Pruning Verified</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-violet-400">TIME-TRAVEL & BRANCHING</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">Git-for-Data</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1.5">
              <span className="text-[10px] text-slate-400 block">AS OF TIMESTAMP REPLAY</span>
              <div className="text-xs font-mono text-violet-300">SELECT * FROM events FOR SYSTEM_TIME AS OF '2026-10-01'</div>
              <div className="text-[11px] text-slate-400">Guarantees 100% reproducible historical financial audits.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">WRITE CONCURRENCY</span>
              <div className="flex justify-between text-slate-200 text-[11px]"><span>Optimistic Concurrency Control:</span><strong className="text-emerald-400">ACTIVE</strong></div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center justify-between">
            <span>Branch Isolation:</span>
            <strong className="font-bold flex items-center gap-1"><GitBranch size={13} /> SERIALIZABLE</strong>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> ACID Isolation Certified</span>
          <span className="text-slate-600">|</span><span style={{ color: 'var(--pres-text-muted)' }}>Metadata Format: <strong className="text-slate-200">Apache Iceberg v2</strong></span>
          <span className="text-slate-600">|</span><span style={{ color: 'var(--pres-text-muted)' }}>Storage Overhead: <strong className="text-emerald-400">&lt; 0.1% Footprint</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400"><span>Sovereign Telemetry Overview</span><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /></div>
      </div>
    </div>
  );
};
