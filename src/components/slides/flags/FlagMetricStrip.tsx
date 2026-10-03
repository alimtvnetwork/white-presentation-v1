import React from 'react';
import { ToggleRight, ShieldCheck, Users, Radio } from 'lucide-react';
import type { FeatureFlagRolloutTreeSlideData } from '../../../types/sovereignOperationsArchetypes';

interface FlagMetricStripProps {
  slide: FeatureFlagRolloutTreeSlideData;
}

export const FlagMetricStrip: React.FC<FlagMetricStripProps> = ({ slide }) => {
  const rings = slide.rolloutRings || [];
  const audience = slide.totalAudienceCoveredPercent || 100;
  const isKillSwitchActive = slide.isInstantKillSwitchActive;

  return (
    <div className="z-10 grid grid-cols-4 gap-4">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Target Audience
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {audience}% <span className="text-sm font-normal font-mono text-teal-400">Covered</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
          <Users size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Deployment Rings
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {rings.length} <span className="text-sm font-normal font-mono text-cyan-400">Rings</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <ToggleRight size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Release Target
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {slide.targetReleaseVersion || 'v3.2.0'}
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Radio size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Automated Protection
          </div>
          <div className="text-sm font-bold font-mono text-teal-400 flex items-center gap-1.5 mt-1">
            <span>{isKillSwitchActive ? 'Kill-Switch Armed' : 'Telemetry Guard'}</span>
            <span style={{ color: 'var(--pres-text-muted)' }}>•</span>
            <span>Zero-Downtime</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
          <ShieldCheck size={20} />
        </div>
      </div>
    </div>
  );
};
