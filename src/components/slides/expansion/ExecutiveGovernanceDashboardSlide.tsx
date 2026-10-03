import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { Award, CheckCircle, FileText, Scale, ShieldAlert } from 'lucide-react';

interface CompliancePillar {
  standard: string;
  scope: string;
  statusText: string;
  scorePct: number;
  auditBody: string;
  hasPassed?: boolean;
}

const DEFAULT_PILLARS: CompliancePillar[] = [
  { standard: 'SOC 2 Type II', scope: 'Security, Availability & Confidentiality', statusText: 'Clean Unqualified Opinion', scorePct: 100, auditBody: 'Deloitte & Touche', hasPassed: true },
  { standard: 'ISO/IEC 27001:2022', scope: 'Global ISMS & Cloud Infrastructure', statusText: 'Certified with Zero Findings', scorePct: 100, auditBody: 'BSI Group', hasPassed: true },
  { standard: 'FedRAMP High', scope: 'Federal Boundary & Cryptographic Mesh', statusText: 'Continuous Attestation Ready', scorePct: 99.4, auditBody: 'Coalfire 3PAO', hasPassed: true },
  { standard: 'GDPR / Sovereign Mesh', scope: 'Zero Cross-Border Data Ingress', statusText: 'Statutory Verification Complete', scorePct: 100, auditBody: 'EU Supervisory Board', hasPassed: true },
];

export const ExecutiveGovernanceDashboardSlide: React.FC<{ slide: BaseSlide & { pillars?: CompliancePillar[]; leadArchitect?: string; } }> = ({ slide }) => {
  const pillars = slide.pillars || DEFAULT_PILLARS;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'FIDUCIARY MANDATES & AUDIT READINESS'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Supervisory Board Governance & Regulatory Compliance Cockpit'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Executive board-level compliance indicators, regulatory posture, and statutory certification readiness.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Scale size={14} className="text-amber-400" /> Fiduciary Quorum</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Award size={14} className="text-emerald-400" /> 100% Attestation</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-6 my-auto">
        {pillars.map((p, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 flex items-center gap-1.5">
                  <CheckCircle size={13} /> {p.statusText}
                </span>
                <span className="font-mono text-sm font-bold text-white">{p.scorePct}%</span>
              </div>
              <h2 className="font-ubuntu text-xl font-bold text-white mb-1">{p.standard}</h2>
              <p className="font-poppins text-xs text-slate-400 mb-4">{p.scope}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/60 font-mono text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-400"><FileText size={12} className="text-indigo-400" /> Auditor</span>
              <span className="font-bold text-slate-200">{p.auditBody}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2"><ShieldAlert size={14} className="text-emerald-400" /> Statutory Audit Complete: Zero critical vulnerabilities across 482 evaluated security controls</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
