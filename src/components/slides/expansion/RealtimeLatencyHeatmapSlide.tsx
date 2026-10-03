import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { Activity, Globe, Wifi, Zap, CheckCircle2 } from 'lucide-react';

interface PopTelemetry {
  region: string;
  location: string;
  p50Ms: number;
  p95Ms: number;
  p99Ms: number;
  jitterMs: number;
  lossPct: number;
  isHealthy?: boolean;
}

const DEFAULT_POPS: PopTelemetry[] = [
  { region: 'US-East', location: 'N. Virginia (IAD)', p50Ms: 1.2, p95Ms: 3.4, p99Ms: 4.8, jitterMs: 0.1, lossPct: 0.0001, isHealthy: true },
  { region: 'EU-Central', location: 'Frankfurt (FRA)', p50Ms: 2.1, p95Ms: 4.2, p99Ms: 5.6, jitterMs: 0.2, lossPct: 0.0001, isHealthy: true },
  { region: 'APAC-South', location: 'Singapore (SIN)', p50Ms: 3.4, p95Ms: 6.1, p99Ms: 8.2, jitterMs: 0.3, lossPct: 0.0002, isHealthy: true },
  { region: 'APAC-East', location: 'Tokyo (NRT)', p50Ms: 2.8, p95Ms: 5.4, p99Ms: 7.1, jitterMs: 0.2, lossPct: 0.0001, isHealthy: true },
  { region: 'ME-East', location: 'Dubai (DXB)', p50Ms: 4.5, p95Ms: 8.2, p99Ms: 11.4, jitterMs: 0.4, lossPct: 0.0003, isHealthy: true },
  { region: 'LATAM', location: 'São Paulo (GRU)', p50Ms: 5.1, p95Ms: 9.6, p99Ms: 13.8, jitterMs: 0.5, lossPct: 0.0004, isHealthy: true },
];

export const RealtimeLatencyHeatmapSlide: React.FC<{ slide: BaseSlide & { pops?: PopTelemetry[]; leadArchitect?: string; } }> = ({ slide }) => {
  const pops = slide.pops || DEFAULT_POPS;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'DISTRIBUTED NETWORKING & TELEMETRY'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Planetary Real-Time Latency & Edge PoP Telemetry'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Global edge PoP percentiles across tier-1 hubs with automated jitter variance and sub-15ms p99 SLA guarantees.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Activity size={14} className="text-emerald-400" /> Live Telemetry Feed</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Wifi size={14} className="text-cyan-400" /> BGP Multi-Homed</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-3 gap-6 my-auto">
        {pops.map((pop, idx) => (
          <div key={idx} className="p-5 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-lg hover:border-slate-700 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 flex items-center gap-1.5">
                <Globe size={13} className="text-indigo-400" /> {pop.region}
              </span>
              <span className="flex items-center gap-1 font-mono text-xs text-emerald-400 font-semibold">
                <CheckCircle2 size={13} /> SLA Active
              </span>
            </div>
            <h2 className="font-ubuntu text-lg font-bold text-white mb-3">{pop.location}</h2>
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800/60 text-center font-mono">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">p50</span>
                <span className="text-sm font-bold text-emerald-300">{pop.p50Ms}ms</span>
              </div>
              <div className="border-x border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">p95</span>
                <span className="text-sm font-bold text-cyan-300">{pop.p95Ms}ms</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">p99</span>
                <span className="text-sm font-bold text-amber-300">{pop.p99Ms}ms</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-xs text-slate-400 mt-3 pt-2 border-t border-slate-900">
              <span className="flex items-center gap-1"><Zap size={11} className="text-amber-400" /> Jitter: {pop.jitterMs}ms</span>
              <span>Loss: {pop.lossPct}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span>Global Anycast BGP Health: 42 Tier-1 transit connections actively balancing planetary ingress</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
