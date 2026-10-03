import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, Zap } from 'lucide-react';
import type { RegulatoryAuditSummary } from '../../../../types/modern/transformationTypes';

interface AuditTrailFooterProps {
  auditSummary: RegulatoryAuditSummary;
  hasCryptographicAuditTrail: boolean;
  activeNodeTitle: string;
}

export const AuditTrailFooter: React.FC<AuditTrailFooterProps> = ({
  auditSummary,
  hasCryptographicAuditTrail,
  activeNodeTitle,
}) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm z-10">
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Lock size={14} className="text-amber-400" />
        <span className="text-xs uppercase tracking-wider text-slate-400">Encryption Guard</span>
        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30">
          {auditSummary.encryptionStandard}
        </span>
      </div>

      <div className="w-[1px] h-6 bg-slate-700/50" />

      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-wider text-slate-400">Auditing Node</span>
        <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-400 font-bold border border-sky-500/30">
          {activeNodeTitle || 'Explicit Consent Gate'}
        </span>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2 text-emerald-400">
        <Zap size={16} />
        <span className="text-xs uppercase tracking-wider text-slate-400">Erasure SLA:</span>
        <span className="font-bold text-emerald-400">&lt; {auditSummary.erasureSlaSeconds}s Distributed Eviction</span>
      </div>

      <div className="w-[1px] h-6 bg-slate-700/50" />

      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold">
        {hasCryptographicAuditTrail ? <CheckCircle2 size={16} /> : <ShieldCheck size={16} />}
        <span>{hasCryptographicAuditTrail ? 'MERKLE CHAIN ATTESTED' : 'AUDIT PENDING'}</span>
      </div>
    </div>
  </div>
);
