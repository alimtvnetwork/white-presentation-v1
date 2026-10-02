import React from 'react';
import type { ComplianceCertification } from '../../../types/enterpriseArchetypes';
import { ShieldCheck, Award, CheckCircle2, Clock } from 'lucide-react';

interface ComplianceCardProps {
  cert: ComplianceCertification;
}

export const ComplianceCard: React.FC<ComplianceCardProps> = ({ cert }) => {
  const hasPassed = Boolean(cert.hasFullAuditPassed);
  const isCertified = cert.status === 'certified';
  const isInReview = cert.status === 'in-review';

  return (
    <div
      className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
        hasPassed
          ? 'plane-2-elevated bg-emerald-500/10 border-emerald-500/40 shadow-emerald-950/20'
          : 'plane-1-raised bg-slate-900/50 border-slate-800'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            hasPassed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
          }`}
        >
          {isCertified ? <ShieldCheck size={20} /> : isInReview ? <Clock size={20} /> : <Award size={20} />}
        </div>
        <div>
          <h4 className="font-ubuntu text-sm font-bold text-slate-100">{cert.name}</h4>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-[11px] block">
            {cert.issuingBody}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span
          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase ${
            isCertified
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
              : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
          }`}
        >
          {cert.status}
        </span>
        {hasPassed && (
          <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
            <CheckCircle2 size={10} /> Audit Verified
          </span>
        )}
      </div>
    </div>
  );
};
