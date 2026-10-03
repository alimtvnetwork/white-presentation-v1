import React from 'react';
import type { SocIncidentWarRoomSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { SocSeverityHeroBar } from './soc/SocSeverityHeroBar';
import { SocPhasesPipeline } from './soc/SocPhasesPipeline';
import { SocKillChainCard } from './soc/SocKillChainCard';
import { Shield, Radio, Terminal } from 'lucide-react';

export const SocIncidentWarRoomSlide: React.FC<{ slide: SocIncidentWarRoomSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const phases = slide.incidentPhases || [];
  const vectors = slide.attackVectors || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
            <Shield size={12} /> {slide.kicker || 'CYBER DEFENSE WAR ROOM'}
          </span>
          <span className="font-mono text-xs text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
            Phase {activeStep + 1} of {Math.max(phases.length, 1)} Active
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'SOC Incident War Room: Rapid Threat Containment'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Real-time Threat Neutralization, MITRE ATT&CK Defense & Zero-Trust Quarantine'}
        </p>
      </div>

      <div className="z-10 flex flex-col gap-5 my-auto">
        <SocSeverityHeroBar
          incidentIdentifier={slide.incidentIdentifier || 'INC-2026-092'}
          cvssSeverityScore={slide.cvssSeverityScore ?? 9.8}
          severityGrade={slide.severityGrade || 'CRITICAL'}
          isQuarantineActive={slide.isQuarantineActive ?? true}
          incidentCommander={slide.incidentCommander || 'Alim Ul Karim'}
          commanderRole={slide.commanderRole || 'Chief Software Engineer'}
        />

        <div className="grid grid-cols-12 gap-6 items-stretch h-[500px]">
          <div className="col-span-7 h-full">
            <SocPhasesPipeline phases={phases} activeStep={activeStep} />
          </div>
          <div className="col-span-5 h-full">
            <SocKillChainCard attackVectors={vectors} />
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-rose-400 font-bold">
          <Radio size={14} className="animate-pulse" />
          Live SOC War Room Channel Active | Zero-Trust Egress Blocked
        </span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <Terminal size={12} />
          Commander: {slide.incidentCommander || 'Alim Ul Karim'} ({slide.commanderRole || 'Chief Software Engineer'})
        </span>
      </div>
    </div>
  );
};
