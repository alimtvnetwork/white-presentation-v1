import React from 'react';
import { Database, Activity } from 'lucide-react';

interface ShardingHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  hashAlgorithm?: string;
  isShardTopologyHealthy?: boolean;
}

export const ShardingHeader: React.FC<ShardingHeaderProps> = ({
  kicker = 'DISTRIBUTED STORAGE ARCHITECTURE',
  title = 'Multi-Tenant Database Sharding & Distributed Consensus',
  subtitle = 'Split-database isolation architecture combining consistent hash routing, tenant sharding, and sub-10ms replication',
  hashAlgorithm = 'MurmurHash3 Virtual Ring (1024 V-Nodes)',
  isShardTopologyHealthy = true,
}) => (
  <header className="z-10 flex items-start justify-between gap-6 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
          <Database size={14} className="text-blue-500" />
          {kicker}
        </span>
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20 font-bold">
          {hashAlgorithm}
        </span>
        {isShardTopologyHealthy ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <Activity size={13} className="text-emerald-500" />
            Topology Healthy
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
  </header>
);
