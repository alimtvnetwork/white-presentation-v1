import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { ArrowRight, Database, GitCommit, Radio, RefreshCw, Zap } from 'lucide-react';

interface CqrsStage {
  stageName: string;
  subhead: string;
  engine: string;
  throughput: string;
  latency: string;
}

const DEFAULT_STAGES: CqrsStage[] = [
  { stageName: 'Command Ingestion', subhead: 'gRPC Command Gateway', engine: 'Envoy / Rust Ingest', throughput: '450k cmd/s', latency: '0.4ms' },
  { stageName: 'Immutable Event Store', subhead: 'Append-Only Ledger', engine: 'Raft ScyllaDB Engine', throughput: '420k evt/s', latency: '1.1ms' },
  { stageName: 'Event Streaming Mesh', subhead: 'Partitioned Log Fabric', engine: 'Apache Pulsar / Kafka', throughput: '1.2M msg/s', latency: '0.8ms' },
  { stageName: 'Materialized Read Views', subhead: 'Sub-Millisecond Projections', engine: 'Redis / ClickHouse', throughput: '800k qry/s', latency: '0.3ms' },
];

export const DistributedCqrsEventMeshSlide: React.FC<{ slide: BaseSlide & { stages?: CqrsStage[]; leadArchitect?: string; } }> = ({ slide }) => {
  const stages = slide.stages || DEFAULT_STAGES;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'DISTRIBUTED SYSTEMS ARCHITECTURE'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Decoupled CQRS Event-Driven Pub/Sub Streaming Fabric'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'High-throughput command ingestion, immutable event ledger persistence, and sub-millisecond materialized read projections.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Radio size={14} className="text-cyan-400" /> Event Sourced</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Zap size={14} className="text-amber-400" /> Sub-2ms Projection Lag</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4 my-auto">
        {stages.map((st, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between hover:border-indigo-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-xs">
                <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">Step 0{idx + 1}</span>
                <span className="text-emerald-400 font-semibold">{st.latency}</span>
              </div>
              <h2 className="font-ubuntu text-lg font-bold text-white mb-1">{st.stageName}</h2>
              <p className="font-poppins text-xs text-slate-400 mb-4">{st.subhead}</p>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/60 font-mono text-xs space-y-1.5">
                <div className="text-slate-400">Engine: <span className="text-slate-200 font-bold">{st.engine}</span></div>
                <div className="text-slate-400">Scale: <span className="text-cyan-300 font-bold">{st.throughput}</span></div>
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-900 flex items-center justify-between font-mono text-[11px] text-slate-500">
              <span>{idx === 0 ? 'Write Path' : idx === 3 ? 'Read Path' : 'Event Stream'}</span>
              {idx < stages.length - 1 && <ArrowRight size={13} className="text-indigo-400" />}
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2"><GitCommit size={14} className="text-cyan-400" /> Event Log Integrity: Zero event drop with distributed Raft quorum state persistence across 3 regions</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
