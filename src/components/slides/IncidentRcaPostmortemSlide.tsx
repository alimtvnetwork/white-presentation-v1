import React from 'react';
import type { IncidentRcaPostmortemSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { RcaHeaderBadge } from './postmortem/RcaHeaderBadge';
import { RcaPillarCard } from './postmortem/RcaPillarCard';
import { IncidentTimelineRail } from './postmortem/IncidentTimelineRail';
import { FileSpreadsheet, ShieldCheck, Activity } from 'lucide-react';

export const IncidentRcaPostmortemSlide: React.FC<{ slide: IncidentRcaPostmortemSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const pillars = slide.pillars || slide.rcaPhases || [];
  const timeline = slide.timeline || [];
  const currentPillarIndex = Math.min(activeStep, Math.max(0, pillars.length - 1));
  const activePillar = pillars[currentPillarIndex];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
            <FileSpreadsheet size={12} /> {slide.kicker || 'ROOT CAUSE ANALYSIS'}
          </span>
          <span className="font-mono text-xs text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
            Pillar 0{currentPillarIndex + 1} of {Math.max(pillars.length, 1)}: {activePillar?.pillarTitle || 'Root Cause'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.title || 'Incident Postmortem: Root Cause Analysis'}</h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Blameless engineering postmortem examining timeline, core vulnerability, and preventative actions.'}
        </p>
      </div>

      <RcaHeaderBadge
        incidentId={slide.incidentId || 'INC-2026-0819'}
        severityLevel={slide.severityLevel || 'SEV-1'}
        downtimeMinutes={slide.downtimeMinutes ?? 4.2}
        isBlamelessPostmortem={slide.isBlamelessPostmortem ?? true}
      />

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {pillars.map((pillar, idx) => (
          <RcaPillarCard
            key={pillar.id || idx}
            pillar={pillar}
            index={idx}
            activeStep={activeStep}
            accentColor="var(--pres-accent, #f43f5e)"
          />
        ))}
      </div>

      {timeline.length > 0 && <IncidentTimelineRail timeline={timeline} />}

      <div className="plane-1-raised p-3 rounded-2xl border border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="flex items-center gap-1.5 text-rose-400 font-bold">
            <Activity size={14} /> Audit Trail Immutable
          </span>
          <span className="text-slate-400">Total Pillars: <strong className="text-white">{pillars.length}</strong></span>
          <span className="text-slate-400">Mitigation Steps: <strong className="text-white">{timeline.length}</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]">
            <ShieldCheck size={14} /> Postmortem Sign-Off Verified
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Pillar Step: {activeStep}</span>
        </div>
      </div>
    </div>
  );
};
