import React from 'react';
import { Globe, Lock } from 'lucide-react';
import type { BrowserChromeHeader } from '../../../../types/nextGenArchetypes';

interface ShowcaseHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  header?: BrowserChromeHeader;
}

export const ShowcaseHeader: React.FC<ShowcaseHeaderProps> = ({
  kicker,
  title,
  subtitle,
  header,
}) => (
  <div className="z-10 flex items-start justify-between gap-8 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <Globe size={13} className="text-violet-500" />
          {kicker || 'LIVE APP WORKSPACE'}
        </span>
        {header && header.hasSslEncryption ? (
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1 font-bold">
            <Lock size={12} /> {header.sslCertificateIssuer}
          </span>
        ) : null}
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
      >
        {title || 'Simulated Browser Application Showcase'}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle || 'Interactive high-fidelity application sandbox demonstrating low latency micro-frontends'}
      </p>
    </div>
  </div>
);
