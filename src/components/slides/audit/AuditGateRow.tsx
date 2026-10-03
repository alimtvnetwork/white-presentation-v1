import React from 'react';
import type { CryptographicEvidenceItem } from '../../../types/kineticSuiteArchetypes';
import { CryptographicBadge } from './CryptographicBadge';
import { Hash, UserCheck, Shield } from 'lucide-react';

export interface AuditGateRowProps {
  gate: CryptographicEvidenceItem;
  isActiveGate: boolean;
  isCompletedGate: boolean;
}

export const AuditGateRow: React.FC<AuditGateRowProps> = ({
  gate,
  isActiveGate,
  isCompletedGate,
}) => {
  const attestor = gate.attestorIdentity.includes('Alim')
    ? 'Alim Ul Karim (Chief Software Engineer)'
    : gate.attestorIdentity;

  return (
    <div
      className={`p-3.5 rounded-xl border transition-all duration-300 font-mono text-xs flex items-center justify-between gap-4 ${
        isActiveGate
          ? 'bg-cyan-500/10 border-cyan-500/40 ring-1 ring-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
          : isCompletedGate
          ? 'bg-slate-900/70 border-slate-800/90 text-slate-300'
          : 'bg-slate-950/40 border-slate-800/50 text-slate-500'
      }`}
    >
      <div className="flex items-center gap-3 min-w-[280px]">
        <span
          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
            isActiveGate
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-slate-800 text-slate-400'
          }`}
        >
          GATE 0{gate.gateIndex + 1}
        </span>
        <div className="flex items-center gap-2">
          <Shield size={14} className={isActiveGate ? 'text-cyan-400' : 'text-slate-500'} />
          <span className={`font-bold ${isActiveGate ? 'text-slate-100' : 'text-slate-300'}`}>
            {gate.gateName}
          </span>
        </div>
      </div>

      <CryptographicBadge
        evidenceType={gate.evidenceType}
        isVerified={gate.isVerified}
        hasAuditGap={gate.hasAuditGap}
      />

      <div className="flex items-center gap-4 text-[11px] text-slate-400">
        <span className="flex items-center gap-1 font-mono bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
          <Hash size={11} className="text-cyan-400" />
          {gate.cryptographicHash.slice(0, 14)}...
        </span>
        <span className="flex items-center gap-1 text-slate-300">
          <UserCheck size={12} className="text-emerald-400" />
          {attestor}
        </span>
      </div>
    </div>
  );
};
