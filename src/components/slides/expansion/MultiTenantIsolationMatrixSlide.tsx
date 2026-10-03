import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { ShieldCheck, Lock, Server, Cpu, Database, Network } from 'lucide-react';

interface TierRow {
  tierName: string;
  compute: string;
  storageKms: string;
  network: string;
  sla: string;
  isSovereign?: boolean;
}

const DEFAULT_TIERS: TierRow[] = [
  { tierName: 'Tier 1: Multi-Tenant Pool', compute: 'Namespaced cgroups', storageKms: 'Shared Keyring (AES-256)', network: 'VPC Overlay eBPF', sla: '99.9% Uptime' },
  { tierName: 'Tier 2: Dedicated Namespace', compute: 'Isolated Worker Nodes', storageKms: 'Customer-Managed KMS', network: 'WireGuard Tunneling', sla: '99.95% Uptime' },
  { tierName: 'Tier 3: Dedicated Bare Metal', compute: 'Physical Host Isolation', storageKms: 'Hardware HSM Partition', network: 'Dedicated VLAN / Calico', sla: '99.99% Uptime' },
  { tierName: 'Tier 4: Sovereign Hardware Enclave', compute: 'AMD SEV-SNP / Intel SGX', storageKms: 'FIPS 140-3 Level 4 HSM', network: 'Air-Gapped Cryptographic Mesh', sla: '99.999% SLA', isSovereign: true },
];

export const MultiTenantIsolationMatrixSlide: React.FC<{ slide: BaseSlide & { tiers?: TierRow[]; leadArchitect?: string; } }> = ({ slide }) => {
  const tiers = slide.tiers || DEFAULT_TIERS;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'CLOUD INFRASTRUCTURE & CELL ISOLATION'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Multi-Tenant Cryptographic Isolation Matrix'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Cell boundaries, blast radius containment, and cryptographic tenant partitioning across hyperscale tiers.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><ShieldCheck size={14} className="text-emerald-400" /> FIPS 140-3 L4</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Lock size={14} className="text-cyan-400" /> Zero Cross-Talk</span>
        </div>
      </div>

      <div className="z-10 my-auto bg-slate-950/70 border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-5 p-4 bg-slate-900/90 border-b border-slate-800 font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
          <span className="flex items-center gap-2"><Server size={14} className="text-indigo-400" /> Tenancy Tier</span>
          <span className="flex items-center gap-2"><Cpu size={14} className="text-amber-400" /> Compute Isolation</span>
          <span className="flex items-center gap-2"><Database size={14} className="text-emerald-400" /> Storage & KMS</span>
          <span className="flex items-center gap-2"><Network size={14} className="text-cyan-400" /> Network Boundary</span>
          <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-rose-400" /> Guarantee SLA</span>
        </div>
        <div className="divide-y divide-slate-800/60 font-poppins text-sm">
          {tiers.map((row, idx) => (
            <div key={idx} className={`grid grid-cols-5 p-4 items-center transition-colors ${row.isSovereign ? 'bg-amber-950/20 border-l-4 border-amber-400' : 'hover:bg-slate-900/40'}`}>
              <span className="font-semibold text-white">{row.tierName}</span>
              <span className="text-slate-300 font-mono text-xs">{row.compute}</span>
              <span className="text-slate-300 font-mono text-xs">{row.storageKms}</span>
              <span className="text-slate-300 font-mono text-xs">{row.network}</span>
              <span className={`font-mono text-xs font-bold ${row.isSovereign ? 'text-amber-400' : 'text-emerald-400'}`}>{row.sla}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span>Architectural Attestation: Verified zero cross-tenant memory leakage under hardware attestation</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
