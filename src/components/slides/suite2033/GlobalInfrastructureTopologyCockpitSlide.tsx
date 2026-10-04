import React from 'react';
import type { GlobalInfrastructureTopologyCockpitSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Globe, Server, Activity, ShieldCheck, Cpu, ArrowRightLeft } from 'lucide-react';

export const GlobalInfrastructureTopologyCockpitSlide: React.FC<{
  slide: GlobalInfrastructureTopologyCockpitSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const clusters = slide?.regionalClusters || [];
  const links = slide?.backboneLinks || [];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Globe size={18} /> {slide?.kicker || 'GLOBAL INFRASTRUCTURE TOPOLOGY COCKPIT'}
            </span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)]">SLA: {slide?.globalAvailabilitySlaPercentage || 99.999}%</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-beacon-pulse inline-block" />
              <ShieldCheck size={16} /> Edge Failover Armed
            </span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-[var(--pres-accent)]/40 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[var(--pres-accent)]/60 animate-radar-sweep origin-center" />
            </div>
            <span className="text-[var(--pres-text-muted)]">Global Capacity:</span>
            <span className="font-bold text-[16px] text-[var(--pres-accent)]">{slide?.totalGlobalTrafficTbps || 128} Tbps</span>
          </div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Operator: {slide?.cockpitOperatorRole || 'Alim Ul Karim, Chief Software Engineer'}</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto z-10 h-[520px]">
        {clusters.map((c) => (
          <div key={c.id} className="plane-1-raised rounded-3xl p-6 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                <span className="font-mono text-[16px] font-bold text-[var(--pres-accent)]">{c.regionCode}</span>
                <span className="font-mono text-[16px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon-pulse" />
                  <Activity size={16} /> {c.availabilityUptimePercentage}%
                </span>
              </div>
              <h3 className="text-[22px] font-bold text-[var(--pres-text)] mt-4 mb-2">{c.regionName}</h3>
              <div className="space-y-3 mt-4">
                <div className="p-3 rounded-2xl bg-[var(--pres-bg-card)] border border-[var(--pres-border)] flex items-center justify-between">
                  <span className="text-[14px] text-[var(--pres-text-muted)] flex items-center gap-2"><Server size={16} /> Active Datacenters</span>
                  <span className="font-mono text-[16px] font-bold text-[var(--pres-text)]">{c.activeDatacenterCount} Facilities</span>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--pres-bg-card)] border border-[var(--pres-border)] flex items-center justify-between">
                  <span className="text-[14px] text-[var(--pres-text-muted)] flex items-center gap-2"><Activity size={16} /> p99 Latency</span>
                  <span className="font-mono text-[16px] font-bold text-emerald-600 dark:text-emerald-400">{c.p99LatencyMilliseconds} ms</span>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--pres-bg-card)] border border-[var(--pres-border)] flex items-center justify-between">
                  <span className="text-[14px] text-[var(--pres-text-muted)] flex items-center gap-2"><Cpu size={16} /> Throughput</span>
                  <span className="font-mono text-[16px] font-bold text-[var(--pres-accent)]">{c.trafficThroughputTbps} Tbps</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"><ShieldCheck size={16} /> HSM Enforced</span>
              <span className="px-2.5 py-1 rounded-lg bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] font-bold">Failover Ready</span>
            </div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text-muted)]"><ArrowRightLeft size={18} className="text-[var(--pres-accent)]" /> Inter-Region Backbone:</div>
          {links.slice(0, 3).map((link) => (
            <div key={link.id} className="flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-[var(--pres-bg-card)] border border-[var(--pres-border)] font-mono text-[14px]">
              <span className="text-[var(--pres-text)] font-bold">{link.originRegionCode} ↔ {link.destinationRegionCode}</span>
              <span className="text-[var(--pres-accent)] font-bold animate-sparkline-trace">{link.bandwidthCapacityTbps} Tbps</span>
              <span className="text-[var(--pres-text-muted)]">({link.utilizationPercentage}% util)</span>
            </div>
          ))}
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Cockpit Oversight: <span className="font-bold text-[var(--pres-text)]">Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>
    </div>
  );
};
