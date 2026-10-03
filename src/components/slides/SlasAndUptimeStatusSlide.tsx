import React from 'react';
import type { SlasAndUptimeStatusSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { SlaMetricPills } from './sla/SlaMetricPills';
import { ServiceComponentRow } from './sla/ServiceComponentRow';
import { ShieldCheck, Activity, Award } from 'lucide-react';

export const SlasAndUptimeStatusSlide: React.FC<{ slide: SlasAndUptimeStatusSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const services = slide.services || [];
  const hasAuditor = slide.hasExternalAuditorVerification ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <Activity size={12} /> {slide.kicker || 'SERVICE LEVEL AGREEMENTS'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            {slide.overallUptimePercent ?? 99.999}% Verified Uptime &bull; Tier-1 High Availability
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.title || 'Enterprise Public Status & Service Health'}</h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || '99.999% verified operational availability across mission-critical service tiers.'}
        </p>
      </div>

      <SlaMetricPills
        overallUptimePercent={slide.overallUptimePercent ?? 99.999}
        meanTimeToDetectSeconds={slide.meanTimeToDetectSeconds ?? 42}
        meanTimeToRecoverMinutes={slide.meanTimeToRecoverMinutes ?? 2.8}
        incidentFreeDaysCount={slide.incidentFreeDaysCount ?? 314}
        hasExternalAuditorVerification={hasAuditor}
      />

      <div className="space-y-3 z-10 my-auto h-[480px] overflow-y-auto pr-1">
        {services.map((service) => (
          <ServiceComponentRow key={service.id} service={service} />
        ))}
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl border border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <ShieldCheck size={14} /> Real-Time Canary Health Probe Synced
          </span>
          <span className="text-slate-400">Total Services Monitored: <strong className="text-white">{services.length}</strong></span>
          <span className="text-slate-400">Historical Window: <strong className="text-white">Trailing 90 Days</strong></span>
        </div>
        <div className="flex items-center gap-3">
          {hasAuditor && (
            <span className="text-cyan-400 flex items-center gap-1 font-bold text-[11px] bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
              <Award size={13} /> External SOC2 Auditor Verified
            </span>
          )}
          <span style={{ color: 'var(--pres-text-muted)' }}>Status: Operational</span>
        </div>
      </div>
    </div>
  );
};
