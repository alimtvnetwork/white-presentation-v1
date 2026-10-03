import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { Award, CheckCircle2, FileSignature, Landmark, Scale, ShieldCheck } from 'lucide-react';

interface SlaCommitment {
  title: string;
  targetMetric: string;
  legalGuarantee: string;
  penaltyClause: string;
}

const DEFAULT_COMMITMENTS: SlaCommitment[] = [
  { title: 'Planetary Availability', targetMetric: '99.999% SLA', legalGuarantee: 'Contractually bounded multi-region failover uptime', penaltyClause: '100% Service Credit upon single SLA infraction' },
  { title: 'Severity-1 Incident Response', targetMetric: '< 15 Mins', legalGuarantee: 'Direct 24/7 escalation to Core Engineering Fleet', penaltyClause: 'Executive War Room convened within 30 minutes' },
  { title: 'Cryptographic Sovereignty', targetMetric: 'Zero Leakage', legalGuarantee: 'Hardware-enforced tenant isolation and zero data egress', penaltyClause: 'Unconditional immediate contractual termination right' },
  { title: 'Regulatory Attestation', targetMetric: '100% Passed', legalGuarantee: 'Annual SOC 2 Type II, ISO 27001 & FedRAMP certifications', penaltyClause: 'Complete third-party audit transparency log release' },
];

export const ExecutiveCommitmentSignoffSlide: React.FC<{ slide: BaseSlide & { commitments?: SlaCommitment[]; leadArchitect?: string; } }> = ({ slide }) => {
  const commitments = slide.commitments || DEFAULT_COMMITMENTS;
  const lead = slide.leadArchitect || 'Alim Ul Karim';
  const role = 'Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'BOARDROOM RATIFICATION & SLAS'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Executive Fiduciary Commitment & Delivery Guarantee Signoff'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Mutual service level agreements, binding financial delivery penalties, and executive architectural attestation.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Scale size={14} className="text-amber-400" /> Legally Binding</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><ShieldCheck size={14} className="text-emerald-400" /> 99.999% SLA</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {commitments.map((c, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40">
                  Guarantee 0{idx + 1}
                </span>
                <span className="text-emerald-400 font-mono text-xs font-bold">{c.targetMetric}</span>
              </div>
              <h2 className="font-ubuntu text-lg font-bold text-white mb-2">{c.title}</h2>
              <p className="font-poppins text-xs text-slate-300 mb-3">{c.legalGuarantee}</p>
              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-rose-300">
                <span className="text-slate-500 block uppercase text-[10px]">Penalty Remedy</span>
                {c.penaltyClause}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-xs text-slate-500">
              <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 size={13} /> Ratified</span>
              <span>Statutory Term</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/80 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <FileSignature size={18} className="text-cyan-400" />
          <span>Fiduciary Execution Stamp: Approved & Guaranteed by Architectural Directorate</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white font-bold">{lead}</span>
          <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold">{role}</span>
        </div>
      </div>
    </div>
  );
};
