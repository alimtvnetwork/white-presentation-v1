import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { ArrowRight, Fingerprint, KeyRound, Lock, ShieldCheck } from 'lucide-react';

interface PolicyNode {
  stepNumber: number;
  layerTitle: string;
  technology: string;
  inspectionLatency: string;
  verificationRule: string;
  hasHardwareRoot?: boolean;
}

const DEFAULT_NODES: PolicyNode[] = [
  { stepNumber: 1, layerTitle: 'Planetary Ingress Envoy', technology: 'eBPF / Envoy v1.32', inspectionLatency: '0.3ms', verificationRule: 'DDoS Scrubber & TLS 1.3 Termination' },
  { stepNumber: 2, layerTitle: 'Identity & SPIFFE PDP', technology: 'OIDC / SPIRE Server', inspectionLatency: '0.4ms', verificationRule: 'Cryptographic Workload Attestation' },
  { stepNumber: 3, layerTitle: 'Microsegmented Enclave', technology: 'Cilium / WireGuard', inspectionLatency: '0.3ms', verificationRule: 'Strict L7 Service Identity Authorization' },
  { stepNumber: 4, layerTitle: 'Sovereign Key Vault', technology: 'FIPS 140-3 Hardware HSM', inspectionLatency: '0.2ms', verificationRule: 'Ephemeral Token Issuance & Secret Unsealing', hasHardwareRoot: true },
];

export const ZeroTrustPolicyGraphSlide: React.FC<{ slide: BaseSlide & { nodes?: PolicyNode[]; leadArchitect?: string; } }> = ({ slide }) => {
  const nodes = slide.nodes || DEFAULT_NODES;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'SECURITY ARCHITECTURE & IDENTITY'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Continuous Zero-Trust Ingress & Microsegmentation Mesh'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Dynamic SPIFFE/SPIRE identity attestation, mutual TLS enforcement, and ephemeral cryptographic authorization.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Fingerprint size={14} className="text-cyan-400" /> Continuous SPIFFE</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><KeyRound size={14} className="text-amber-400" /> Ephemeral Certs (5m)</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4 my-auto relative">
        {nodes.map((node, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between relative group hover:border-cyan-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-700/60 font-mono text-xs font-bold text-cyan-300 flex items-center justify-center">
                  0{node.stepNumber}
                </span>
                <span className="font-mono text-xs text-emerald-400 font-semibold">{node.inspectionLatency}</span>
              </div>
              <h2 className="font-ubuntu text-lg font-bold text-white mb-2">{node.layerTitle}</h2>
              <span className="inline-block font-mono text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-indigo-300 mb-3">{node.technology}</span>
              <p className="font-poppins text-xs text-slate-400 leading-relaxed">{node.verificationRule}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span className="flex items-center gap-1">{node.hasHardwareRoot ? <ShieldCheck size={13} className="text-amber-400" /> : <Lock size={13} className="text-emerald-400" />} Verified</span>
              {idx < nodes.length - 1 && <ArrowRight size={13} className="text-slate-600 hidden group-hover:block" />}
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span>Zero-Trust Invariant: Every service-to-service RPC verified against cryptographic identity roots within 1.2ms budget</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
