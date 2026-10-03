import React from 'react';
import { Filter, Activity } from 'lucide-react';
import type { GatewayTrafficTelemetry } from '../../../../types/nextGenArchetypes';

interface GatewayHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  isEditMode?: boolean;
  onEditTitle?: (val: string) => void;
  onEditSubtitle?: (val: string) => void;
  telemetry: GatewayTrafficTelemetry;
  circuitState: 'CLOSED' | 'HALF_OPEN' | 'OPEN';
}

export const GatewayHeader: React.FC<GatewayHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isEditMode,
  onEditTitle,
  onEditSubtitle,
  telemetry,
  circuitState,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
          <Filter size={16} className="text-violet-500" />
          {kicker || 'HIGH-THROUGHPUT API EDGE RESILIENCY'}
        </span>
        <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
          <Activity size={14} className="text-emerald-500" />
          Edge Circuit: {circuitState} (0% Packet Drop)
        </span>
      </div>

      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditTitle?.(e.currentTarget.textContent || '')}
      >
        {title || 'Distributed API Rate Limit Gateway & Token Bucket Mesh'}
      </h1>

      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-base max-w-5xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onEditSubtitle?.(e.currentTarget.textContent || '')}
      >
        {subtitle ||
          'Multi-tenant edge token bucket enforcement synchronized via globally consistent Redis clusters, dynamic 429 backpressure, and zero-downtime circuit trip isolation.'}
      </p>
    </div>

    <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-sm">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Total Ingress
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400">
          {(telemetry.totalRequestsPerSecond / 1000).toFixed(1)}k RPS
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Throttled (429)
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-rose-400">
          {telemetry.throttled429PerSecond}/sec
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Cache Hit Rate
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-sky-400">
          {telemetry.cacheHitRatePercent}%
        </span>
      </div>
    </div>
  </div>
);
