import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { AlertCircle, Box, CheckCircle2, Cpu, HardDrive, ShieldCheck } from 'lucide-react';

interface ResilienceVector {
  componentCategory: string;
  primarySupplier: string;
  secondarySupplier: string;
  resilienceScorePct: number;
  bufferDays: number;
  hasDualSourceActive?: boolean;
}

const DEFAULT_VECTORS: ResilienceVector[] = [
  { componentCategory: 'AI Silicon Accelerators', primarySupplier: 'TSMC N4P Fab (Direct)', secondarySupplier: 'Intel Foundry IFS 18A', resilienceScorePct: 94, bufferDays: 180, hasDualSourceActive: true },
  { componentCategory: '800G Optical Transceivers', primarySupplier: 'Broadcom Silicon Photonics', secondarySupplier: 'Coherent Corp Fab', resilienceScorePct: 92, bufferDays: 120, hasDualSourceActive: true },
  { componentCategory: 'Planetary Cloud Transit', primarySupplier: 'Arelion / Lumen Backbone', secondarySupplier: 'NTT Comms / Telia Global', resilienceScorePct: 98, bufferDays: 365, hasDualSourceActive: true },
  { componentCategory: 'Sovereign HSM Enclaves', primarySupplier: 'Thales Luna PCIe HSM', secondarySupplier: 'Yubico HSM Enterprise', resilienceScorePct: 96, bufferDays: 240, hasDualSourceActive: true },
];

export const SupplyChainResilienceIndexSlide: React.FC<{ slide: BaseSlide & { vectors?: ResilienceVector[]; leadArchitect?: string; } }> = ({ slide }) => {
  const vectors = slide.vectors || DEFAULT_VECTORS;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'OPERATIONAL RESILIENCE & RISK'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Multi-Tier Hardware & Cloud Supply Chain Resilience Index'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Vendor risk concentration heat maps, verified dual-sourcing ratios, and geopolitical buffer inventories.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><ShieldCheck size={14} className="text-emerald-400" /> 100% Dual-Sourced</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Box size={14} className="text-amber-400" /> 180+ Day Buffer</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {vectors.map((vec, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40">
                  {vec.resilienceScorePct}% Resilient
                </span>
                <span className="font-mono text-xs text-slate-400 font-bold">{vec.bufferDays}d Buffer</span>
              </div>
              <h2 className="font-ubuntu text-lg font-bold text-white mb-2">{vec.componentCategory}</h2>
              <div className="space-y-2 mt-3 font-mono text-xs">
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                  <span className="text-[10px] text-slate-500 block uppercase">Primary</span>
                  {vec.primarySupplier}
                </div>
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-emerald-400">
                  <span className="text-[10px] text-slate-500 block uppercase">Secondary Backup</span>
                  {vec.secondarySupplier}
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-xs text-slate-500">
              <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 size={13} /> Active Failover</span>
              <span>Zero Sole-Source</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span>Resilience Standard: Zero single points of failure across silicon fabrication, networking optics, and cloud transit</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
