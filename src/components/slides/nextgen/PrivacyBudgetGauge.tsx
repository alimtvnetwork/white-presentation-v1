import React from 'react';
import type { DifferentialPrivacyBudget } from '../../../types/nextGenArchetypes';
import { Cpu, ShieldCheck, EyeOff, CheckCircle2 } from 'lucide-react';

interface Props {
  enclave: {
    enclaveType: string;
    attestationHash: string;
    isMemoryEncrypted: boolean;
    isZeroEgressEnforced: boolean;
  };
  privacy: DifferentialPrivacyBudget;
  outputs: {
    matchedAudienceMillion: number;
    overlapPercentage: number;
    piiLeaksDetectedCount: number;
    isExportAuthorized: boolean;
  };
  currentStep: number;
}

export const PrivacyBudgetGauge: React.FC<Props> = ({ enclave, privacy, outputs, currentStep }) => {
  return (
    <div className="col-span-5 flex flex-col justify-between gap-5 flex-1">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: currentStep === 1 ? 'var(--pres-border-hover)' : 'var(--pres-border)' }}
        className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${currentStep === 1 ? 'step-phase-active ring-2 ring-violet-500/50' : 'step-phase-past opacity-85'}`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/20 text-slate-900 dark:text-violet-300 border border-violet-500/30 flex items-center gap-1.5">
              <Cpu size={14} className="text-violet-400" /> CONFIDENTIAL ENCLAVE
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">{enclave.enclaveType}</span>
          </div>
          <h3 className="text-xl font-ubuntu font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-100">Hardware Root of Trust</h3>
          <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-1.5">PCR Hash: <span className="text-sky-300 truncate">{enclave.attestationHash}</span></p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Encryption</span>
              <span className="text-sm font-bold text-slate-900 dark:text-emerald-400">{enclave.isMemoryEncrypted ? 'AES-256' : 'PLAIN'}</span>
            </div>
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Zero-Egress</span>
              <span className="text-sm font-bold text-slate-900 dark:text-sky-300">{enclave.isZeroEgressEnforced ? 'ENFORCED' : 'OPEN'}</span>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><ShieldCheck size={12} className="text-emerald-500" /> Host Isolation</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% AIR-GAPPED</span>
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: currentStep === 2 ? 'var(--pres-border-hover)' : 'var(--pres-border)' }}
        className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${currentStep === 2 ? 'step-phase-active ring-2 ring-violet-500/50' : 'step-phase-past opacity-85'}`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <EyeOff size={14} className="text-amber-800 dark:text-amber-300" /> DIFFERENTIAL PRIVACY
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">{privacy.isBudgetCompliant ? 'COMPLIANT' : 'DEPLETED'}</span>
          </div>
          <div className="mb-2">
            <div className="flex items-center justify-between font-mono text-xs mb-1">
              <span style={{ color: 'var(--pres-text-muted)' }}>Epsilon (ε) Budget</span>
              <span className="text-slate-900 dark:text-slate-200 font-bold">ε = {privacy.epsilonUsed} / {privacy.epsilonBudget}</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div style={{ width: `${(privacy.epsilonUsed / privacy.epsilonBudget) * 100}%` }} className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Delta (δ)</span>
              <span className="text-xs font-bold text-slate-900 dark:text-emerald-400">{privacy.delta}</span>
            </div>
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">k-Anonymity</span>
              <span className="text-xs font-bold text-slate-900 dark:text-sky-300">&gt;= {privacy.kAnonymityThreshold}</span>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-500" /> Export Clearance</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{outputs.isExportAuthorized ? 'AUTHORIZED' : 'LOCKED'}</span>
        </div>
      </div>
    </div>
  );
};
