import React from 'react';
import { Cpu, ShieldCheck, Key, CheckCircle2, Lock } from 'lucide-react';
import type { ConfidentialEnclaveMetricItem } from '../../../../types/customization/sovereignTelemetryTypes';

interface EnclaveSiliconCardProps {
  enclave: ConfidentialEnclaveMetricItem;
  index: number;
  isStepActive: boolean;
}

export const EnclaveSiliconCard: React.FC<EnclaveSiliconCardProps> = ({
  enclave,
  index: _index,
  isStepActive,
}) => {
  const isEnclaveActive = enclave.isEnclaveActive;
  const isProtected = enclave.isHardwareProtected;

  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isStepActive ? 'var(--pres-accent)' : 'var(--pres-border)',
      }}
      className={`plane-1-raised rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
        isStepActive ? 'ring-2 ring-emerald-500/40 shadow-xl' : 'opacity-85'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <Cpu size={12} /> {enclave.isolationProtocol}
          </span>
          <span className="font-mono text-xs font-bold text-sky-700 dark:text-sky-400">
            {enclave.cpuOverheadPercentage}% Overhead
          </span>
        </div>

        <h3 className="font-ubuntu text-base font-bold leading-snug mb-3" style={{ color: 'var(--pres-text)' }}>
          {enclave.enclaveName}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <Lock size={13} className="text-emerald-500" /> Encrypted Memory
            </span>
            <span className="font-bold text-base text-emerald-700 dark:text-emerald-400">
              {enclave.memoryEncryptedGb} GB
            </span>
          </div>

          <div className="p-2 rounded-lg bg-[var(--pres-surface-muted)]">
            <div className="text-[10px] font-mono uppercase mb-0.5 flex items-center gap-1" style={{ color: 'var(--pres-text-muted)' }}>
              <Key size={11} className="text-sky-500" /> PKI Attestation Hash
            </div>
            <div className="font-mono text-[11px] text-sky-700 dark:text-sky-400 truncate">
              {enclave.pkiAttestationHash}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between">
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1">
          <CheckCircle2 size={11} /> {isEnclaveActive ? 'Enclave Active' : 'Warm Standby'}
        </span>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30 flex items-center gap-1">
          <ShieldCheck size={11} /> {isProtected ? 'Hardware Root' : 'TEE Inactive'}
        </span>
      </div>
    </div>
  );
};
