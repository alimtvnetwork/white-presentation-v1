import React from 'react';
import { Globe, ShieldCheck } from 'lucide-react';
import type { GlobalMeshSummary } from '../../../../types/nextGenArchetypes';

interface MeshHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  summary?: GlobalMeshSummary;
}

export const MeshHeader: React.FC<MeshHeaderProps> = ({ kicker, title, subtitle, summary }) => (
  <div className="z-10 flex items-start justify-between gap-8 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <Globe size={13} className="text-violet-500" />
          {kicker || 'GLOBAL EDGE TOPOLOGY'}
        </span>
        {summary && summary.isMeshResilient ? (
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1 font-bold">
            <ShieldCheck size={12} /> BGP Anycast Auto-Healing
          </span>
        ) : null}
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
      >
        {title || 'Global Edge Anycast Mesh & CDN Ingress'}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle || 'Sub-20ms global edge ingress network with automated DDoS mitigation and anycast routing'}
      </p>
    </div>
  </div>
);
