import React from 'react';
import { Activity, ShieldAlert, Cpu, Layers } from 'lucide-react';
import type { ZeroTrustPacketInspectionSlideData } from '../../../types/sovereignOperationsArchetypes';

interface PacketMetricStripProps {
  slide: ZeroTrustPacketInspectionSlideData;
}

export const PacketMetricStrip: React.FC<PacketMetricStripProps> = ({ slide }) => {
  const stages = slide.inspectionStages || [];
  const totalRules = stages.reduce((acc, s) => acc + (s.ruleChecks?.length || 0), 0);
  const throughput = slide.packetThroughputGbps || 100;
  const isAirGapActive = slide.isAirGapEnforced;
  const isMtlsActive = slide.isStrictMtlsActive;

  return (
    <div className="z-10 grid grid-cols-4 gap-4">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Total Throughput
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {throughput} <span className="text-sm font-normal font-mono text-cyan-400">Gbps</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Activity size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Inspection Stages
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {stages.length} <span className="text-sm font-normal font-mono text-sky-400">Tiers</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
          <Layers size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Enforced Rules
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {totalRules} <span className="text-sm font-normal font-mono text-amber-600 dark:text-amber-400">Signoffs</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20">
          <Cpu size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Sovereign Security
          </div>
          <div className="text-sm font-bold font-mono text-emerald-400 flex items-center gap-1.5 mt-1">
            <span>{isAirGapActive ? 'Air-Gap Enforced' : 'Segment Isolated'}</span>
            <span style={{ color: 'var(--pres-text-muted)' }}>•</span>
            <span>{isMtlsActive ? 'mTLS Strict' : 'TLS 1.3'}</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <ShieldAlert size={20} />
        </div>
      </div>
    </div>
  );
};
