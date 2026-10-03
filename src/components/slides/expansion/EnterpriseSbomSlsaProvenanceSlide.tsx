import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { ArrowRight, Binary, CheckCheck, FileCheck, Lock, ShieldCheck } from 'lucide-react';

interface SbomGate {
  step: string;
  gateName: string;
  tooling: string;
  attestationStandard: string;
  hasPassed?: boolean;
}

const DEFAULT_GATES: SbomGate[] = [
  { step: 'Gate 01', gateName: 'Source Commit Attestation', tooling: 'Git GPG Sign / Sigstore', attestationStandard: 'SLSA Level 1: Verified Git Origin', hasPassed: true },
  { step: 'Gate 02', gateName: 'Hermetic Build Container', tooling: 'Bazel / Chainguard Wolfi', attestationStandard: 'SLSA Level 2: Ephemeral Build Isolation', hasPassed: true },
  { step: 'Gate 03', gateName: 'Cryptographic In-Toto Seal', tooling: 'in-toto v1.0 Attestation', attestationStandard: 'SLSA Level 3: Non-Falsifiable Provenance', hasPassed: true },
  { step: 'Gate 04', gateName: 'Admission Controller Cosign', tooling: 'Kubernetes Kyverno / Sigstore', attestationStandard: 'SLSA Level 4: Two-Party Verified Deploy', hasPassed: true },
];

export const EnterpriseSbomSlsaProvenanceSlide: React.FC<{ slide: BaseSlide & { gates?: SbomGate[]; leadArchitect?: string; } }> = ({ slide }) => {
  const gates = slide.gates || DEFAULT_GATES;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'CYBERSECURITY & SOFTWARE PROVENANCE'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Enterprise SBOM & SLSA Level 4 Supply Chain Provenance'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Cryptographic build attestations, zero vulnerable dependency guarantees, and hermetic pipeline enforcement.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><ShieldCheck size={14} className="text-emerald-400" /> SLSA Level 4</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><FileCheck size={14} className="text-cyan-400" /> CycloneDX / SPDX</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {gates.map((g, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 font-bold">{g.step}</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold"><CheckCheck size={13} /> Verified</span>
              </div>
              <h2 className="font-ubuntu text-lg font-bold text-white mb-2">{g.gateName}</h2>
              <span className="inline-block font-mono text-xs px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 mb-3">{g.tooling}</span>
              <p className="font-poppins text-xs text-slate-400 leading-relaxed">{g.attestationStandard}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-xs text-slate-500">
              <span className="flex items-center gap-1"><Lock size={12} className="text-cyan-400" /> Hermetic</span>
              {idx < gates.length - 1 && <ArrowRight size={13} className="text-slate-600" />}
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2"><Binary size={14} className="text-emerald-400" /> Supply Chain Invariant: 100% of production binaries cryptographically traced to audited source repositories</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
