import React from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';

interface IdpHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  platformArchitect?: string;
  isPlatformStandardized?: boolean;
}

export const IdpHeader: React.FC<IdpHeaderProps> = ({
  kicker = 'INTERNAL DEVELOPER PLATFORM',
  title = 'Internal Developer Platform Service Catalog & Golden Path Mesh',
  subtitle = 'Unified registry of 148 microservices, gRPC interfaces, and automated golden path scaffolding',
  platformArchitect = 'Alim Ul Karim, Chief Software Engineer',
  isPlatformStandardized = true,
}) => (
  <header className="z-10 flex items-start justify-between gap-6 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
          <Terminal size={14} className="text-indigo-500" />
          {kicker}
        </span>
        {isPlatformStandardized ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle2 size={13} className="text-emerald-500" />
            Standardized Architecture
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
      <div className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold">Platform Lead</div>
      <div className="font-mono text-xs text-indigo-300 font-bold">{platformArchitect}</div>
    </div>
  </header>
);
