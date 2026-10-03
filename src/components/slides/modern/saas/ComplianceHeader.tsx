import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

interface ComplianceHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  merkleRootHash?: string;
  hasCryptographicSeal?: boolean;
}

export const ComplianceHeader: React.FC<ComplianceHeaderProps> = ({
  kicker = 'CONTINUOUS AUDIT & COMPLIANCE',
  title = 'Continuous Compliance Posture & Automated Drift Telemetry',
  subtitle = 'Real-time compliance monitoring engine running 482 hourly tests across SOC 2, ISO 27001, HIPAA, and PCI-DSS',
  merkleRootHash = '0x9b4a3c1f88e7d2105a41c3098e94fa8211b742e9ca4f09d2e731802bcde0f721',
  hasCryptographicSeal = true,
}) => (
  <header className="z-10 flex items-start justify-between gap-6 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
          <ShieldCheck size={14} className="text-emerald-500" />
          {kicker}
        </span>
        {hasCryptographicSeal ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-1.5 font-bold">
            <Lock size={12} className="text-indigo-500" />
            Cryptographic Seal Active
          </span>
        ) : null}
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-black leading-tight tracking-tight mb-2"
      >
        {title}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle}
      </p>
    </div>
    <div className="hidden xl:block text-right">
      <div className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold">Merkle Root</div>
      <div className="font-mono text-xs text-slate-400 max-w-[280px] truncate">{merkleRootHash}</div>
    </div>
  </header>
);
