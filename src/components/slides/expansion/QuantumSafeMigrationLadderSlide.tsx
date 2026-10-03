import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { CheckCircle2, Cpu, Key, Lock, Shield, Sparkles } from 'lucide-react';

interface MigrationPhase {
  phaseNumber: number;
  phaseTitle: string;
  algorithms: string;
  targetTimeline: string;
  implementationDetail: string;
  isCompleted?: boolean;
  isActive?: boolean;
}

const DEFAULT_PHASES: MigrationPhase[] = [
  { phaseNumber: 1, phaseTitle: 'Cryptographic Discovery', algorithms: 'Automated CBOM / eBPF Scan', targetTimeline: 'Q4 2025 (Done)', implementationDetail: '100% of internal TLS cipher suites and RSA/ECC keyrings inventoried', isCompleted: true },
  { phaseNumber: 2, phaseTitle: 'Hybrid TLS 1.3 Key Exchange', algorithms: 'X25519 + ML-KEM-768 (Kyber)', targetTimeline: 'Q2 2026 (Live)', implementationDetail: 'Zero latency degradation on dual-algorithm post-quantum handshake', isActive: true },
  { phaseNumber: 3, phaseTitle: 'PQC Digital Signatures', algorithms: 'ML-DSA-65 + SLH-DSA', targetTimeline: 'Q4 2026 (Staging)', implementationDetail: 'Supply chain artifact signing and internal CA certificates upgraded' },
  { phaseNumber: 4, phaseTitle: 'Quantum-Safe Root of Trust', algorithms: 'Stateful Hash-Based XMSS', targetTimeline: 'Q2 2027 (GA)', implementationDetail: 'FIPS 203/204/205 hardware attestation and sovereign HSM unsealing' },
];

export const QuantumSafeMigrationLadderSlide: React.FC<{ slide: BaseSlide & { phases?: MigrationPhase[]; leadArchitect?: string; } }> = ({ slide }) => {
  const phases = slide.phases || DEFAULT_PHASES;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'POST-QUANTUM CRYPTOGRAPHY (PQC)'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'NIST Post-Quantum Cryptography (PQC) Migration Ladder'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Systematic modernization to NIST FIPS 203/204 algorithms (ML-KEM, ML-DSA) and hybrid TLS handshakes.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Sparkles size={14} className="text-amber-400" /> FIPS 203 / 204</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Shield size={14} className="text-cyan-400" /> Hybrid TLS Active</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {phases.map((ph, idx) => (
          <div key={idx} className={`p-6 rounded-2xl border shadow-xl flex flex-col justify-between transition-all ${ph.isActive ? 'border-cyan-500/60 bg-cyan-950/20 shadow-cyan-950/40' : 'border-slate-800 bg-slate-950/70'}`}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`w-8 h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center ${ph.isCompleted ? 'bg-emerald-950 text-emerald-400 border border-emerald-700' : ph.isActive ? 'bg-cyan-950 text-cyan-300 border border-cyan-500' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}>
                  0{ph.phaseNumber}
                </span>
                <span className="font-mono text-xs text-slate-400 font-semibold">{ph.targetTimeline}</span>
              </div>
              <h2 className="font-ubuntu text-lg font-bold text-white mb-2">{ph.phaseTitle}</h2>
              <span className="inline-block font-mono text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-indigo-300 mb-3">{ph.algorithms}</span>
              <p className="font-poppins text-xs text-slate-400 leading-relaxed">{ph.implementationDetail}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-500">Status</span>
              <span className={`font-bold ${ph.isCompleted ? 'text-emerald-400' : ph.isActive ? 'text-cyan-300' : 'text-slate-500'}`}>{ph.isCompleted ? 'Completed' : ph.isActive ? 'Live In Production' : 'Scheduled'}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span>Quantum Threat Model: Harvest-Now-Decrypt-Later (HNDL) attacks neutralized across 100% of encrypted transport</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
