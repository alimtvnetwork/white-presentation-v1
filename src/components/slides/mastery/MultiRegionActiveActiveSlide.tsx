// lint-allow: file-size reason="MultiRegionActiveActiveSlide sovereign global Raft consensus overview" max=120
import React from 'react';
import type { MultiRegionActiveActiveCockroachSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createMultiRegionActiveActiveSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Globe, CheckCircle2, ShieldCheck, Server, ArrowLeftRight } from 'lucide-react';

export const MultiRegionActiveActiveSlide: React.FC<{ slide?: MultiRegionActiveActiveCockroachSlideData; data?: MultiRegionActiveActiveCockroachSlideData }> = ({ slide, data: pData }) => {
  const fallback = createMultiRegionActiveActiveSlide('default-multi-region-active-active');
  const data = slide || pData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const regions = data.regionNodes?.length ? data.regionNodes : fallback.regionNodes;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Globe size={15} className="text-violet-500" />
              {data.kicker || 'DISTRIBUTED SYSTEMS ARCHITECTURE'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {data.clusterDatabaseName} • RPO: 0 (Zero Data Loss)
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Multi-Region Active-Active Cockroach: Global Relational Consensus'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Distributed Raft consensus, local read leases across 3 continents, and zero RPO recovery'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Consensus MTTR</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.mttrFailoverSeconds}s</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Read Leases</span><span className="text-lg font-bold text-slate-900 dark:text-sky-300">&lt; 2.5ms Local</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-slate-800 z-10 flex items-center justify-between font-mono text-xs my-2">
        <div className="flex items-center gap-4">
          <span className="text-sky-400 font-bold flex items-center gap-1.5"><Globe size={15} /> GLOBAL TOPOLOGY:</span>
          <span className="text-slate-200">3 Continents • 18 Storage Nodes • Multi-Raft Partition Ranges</span>
        </div>
        <div className="flex items-center gap-5 text-slate-400">
          <span>Clock Synchronization: <strong className="text-emerald-400">Hybrid Logical Clocks (HLC)</strong></span>
          <span>Survival Goal: <strong className="text-emerald-400">Region Failure Tolerant</strong></span>
          <span>Isolation Level: <strong className="text-sky-300">Strict Serializable (SSI)</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[460px] items-stretch">
        {regions.map((reg, idx) => (
          <div key={reg.regionCode} className={`plane-2-elevated p-5 rounded-2xl border transition-all flex flex-col justify-between ${reg.isLeaseholder ? 'border-sky-500/60 ring-1 ring-sky-500/30' : 'border-slate-800'}`}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
              <span className="font-mono text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Server size={14} className="text-sky-400" /> REGION 0{idx + 1}: {reg.regionCode}
              </span>
              <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${reg.isLeaseholder ? 'bg-sky-500/15 text-sky-300 border-sky-500/30 font-bold' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                {reg.isLeaseholder ? 'PRIMARY LEASEHOLDER' : 'RAFT FOLLOWER'}
              </span>
            </div>
            <div className="space-y-3 font-mono text-xs my-3">
              <div className="text-slate-100 font-bold text-sm">{reg.datacenterCity}</div>
              <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-2">
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Local Read Latency:</span>
                  <span className="text-emerald-400 font-bold">{reg.localReadLatencyMs} ms</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Cross-Region HLC Write:</span>
                  <span className="text-sky-300 font-bold">{reg.crossRegionWriteLatencyMs} ms</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Active Read Leases:</span>
                  <span className="text-slate-200 font-bold">{reg.readLeaseCount.toLocaleString()} Ranges</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                <span>Node Fleet:</span>
                <span className="text-slate-100 font-bold">{reg.nodeCount} Bare-Metal NVMe Nodes</span>
              </div>
            </div>
            <div className="pt-2.5 border-t border-slate-700/40 flex items-center justify-between font-mono text-[10px] text-slate-400">
              <span>Quorum State:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1"><ArrowLeftRight size={12} /> 100% QUORUM ACHIEVED</span>
            </div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Five-Nines High Availability (99.999%)</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Zero RPO Guarantee: <strong className="text-slate-200">SYNCHRONOUS MULTI-RAFT REPLICATION</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Automatic Re-balancing: <strong className="text-emerald-400">ACTIVE</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Sovereign Telemetry Overview</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
