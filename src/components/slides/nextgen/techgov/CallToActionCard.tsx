import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, KeyRound } from 'lucide-react';
import type { StrategicCallToAction, VerificationSeal } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface CallToActionCardProps {
  cta: StrategicCallToAction;
  seal: VerificationSeal;
}

export const CallToActionCard: React.FC<CallToActionCardProps> = ({ cta, seal }) => (
  <div
    style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
    className="plane-1-raised rounded-3xl p-6 border flex flex-col justify-between h-full"
  >
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          STRATEGIC MANDATE
        </span>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
          <CheckCircle2 size={12} />
          {cta.isActionApproved ? 'BOARD RATIFICATION PENDING' : 'IN REVIEW'}
        </span>
      </div>

      <h3 className="text-2xl font-ubuntu font-bold text-slate-900 dark:text-slate-100 mb-3">
        {cta.headline}
      </h3>
      <p style={{ color: 'var(--pres-text-muted)' }} className="text-sm font-mono leading-relaxed mb-6">
        {cta.primaryRequest}
      </p>

      <div className="p-4 rounded-2xl bg-violet-500/5 dark:bg-violet-950/20 border border-violet-500/20 font-mono mb-6">
        <span className="text-[11px] uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold block mb-1">
          48-Hour Next Step
        </span>
        <p className="text-xs text-slate-900 dark:text-slate-100 font-medium flex items-start gap-2">
          <ArrowRight size={14} className="text-violet-600 dark:text-violet-400 mt-0.5 shrink-0" />
          {cta.immediateNextStep}
        </p>
      </div>
    </div>

    <div className="pt-4 border-t border-black/10 dark:border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between mb-1.5">
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase flex items-center gap-1">
          <KeyRound size={11} /> Cryptographic Seal Authority
        </span>
        <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
          <ShieldCheck size={11} /> {seal.sealAuthority}
        </span>
      </div>
      <p className="text-[10px] text-slate-500 truncate">
        SHA-256: {seal.cryptographicHash}
      </p>
    </div>
  </div>
);
