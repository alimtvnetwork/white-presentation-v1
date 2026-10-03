import React from 'react';
import { Shield, Lock } from 'lucide-react';

interface ThreatMatrixHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  securityAuditor?: string;
  isPerimeterHardened?: boolean;
}

export const ThreatMatrixHeader: React.FC<ThreatMatrixHeaderProps> = ({
  kicker = 'MISSION-CRITICAL CYBER DEFENSE',
  title = 'Asymmetric Threat Defense Matrix & Zero-Day Isolation',
  subtitle = 'Continuous mapping of hostile cyber vectors against autonomous eBPF containment and SLSA Level 4 provenance',
  securityAuditor = 'Alim Ul Karim, Chief Software Engineer',
  isPerimeterHardened = true,
}) => (
  <header className="z-10 flex items-start justify-between gap-6 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/20">
          <Shield size={14} className="text-red-500" />
          {kicker}
        </span>
        {isPerimeterHardened ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <Lock size={12} className="text-emerald-500" />
            Perimeter Hardened
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
      <div className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold">Security Auditor</div>
      <div className="font-mono text-xs text-red-300 font-bold">{securityAuditor}</div>
    </div>
  </header>
);
