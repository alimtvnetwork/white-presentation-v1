import React from 'react';
import { Layers, Activity } from 'lucide-react';

interface BentoHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  hasLiveTelemetry?: boolean;
}

export const BentoHeader: React.FC<BentoHeaderProps> = ({
  kicker,
  title,
  subtitle,
  hasLiveTelemetry,
}) => (
  <div className="z-10 flex items-start justify-between gap-8 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <Layers size={13} className="text-violet-500" />
          {kicker || 'CAPABILITIES MATRIX'}
        </span>
        {hasLiveTelemetry ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <Activity size={13} className="text-emerald-500 animate-pulse" />
            Live Telemetry Attached
          </span>
        ) : null}
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
      >
        {title || 'Enterprise Capabilities Bento Grid'}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle || 'Decoupled systems architecture with real-time throughput metrics and SLA verification'}
      </p>
    </div>
  </div>
);
