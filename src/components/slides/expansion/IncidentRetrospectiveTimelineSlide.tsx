import React from 'react';
import type { IncidentRetrospectiveTimelineSlideData, IncidentEvent } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, AlertCircle, Clock, CheckCircle2, Wrench } from 'lucide-react';

const DEFAULT_EVENTS: IncidentEvent[] = [
  { eventId: 'e1', timestampUtc: '14:22:04 UTC', eventType: 'detection', eventTitle: 'Telemetry Drift Detected', descriptionProse: 'eBPF probe registered 12ms jitter anomaly on Region 1 egress.', actor: 'Autonomous SRE Agent', actorRole: 'Core Telemetry Guard', isResolved: true, hasActionItemAssigned: true },
  { eventId: 'e2', timestampUtc: '14:23:10 UTC', eventType: 'investigation', eventTitle: 'Root Cause Pinpointed', descriptionProse: 'Upstream BGP flap induced asymmetric packet drops on router mesh.', actor: 'Alim Ul Karim', actorRole: 'Chief Software Engineer', isResolved: true, hasActionItemAssigned: true },
  { eventId: 'e3', timestampUtc: '14:26:45 UTC', eventType: 'mitigation', eventTitle: 'Deterministic Circuit Trip', descriptionProse: 'Automated Anycast reroute shifted 100% tenant traffic to Region 2.', actor: 'Mesh Controller', actorRole: 'Automated Control Plane', isResolved: true, hasActionItemAssigned: true },
  { eventId: 'e4', timestampUtc: '14:30:18 UTC', eventType: 'resolution', eventTitle: 'Steady State Restored', descriptionProse: 'Zero transactions dropped; zero data loss; full audit attestation.', actor: 'Incident Commander', actorRole: 'Chief Software Engineer', isResolved: true, hasActionItemAssigned: false },
];

const Header: React.FC<{ slide: IncidentRetrospectiveTimelineSlideData; isEditMode: boolean; onEdit: (v: string) => void }> = ({ slide, isEditMode, onEdit }) => (
  <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
    <div>
      <span className="kicker-pill-badge mb-2">{slide.kicker || 'INCIDENT COMMAND & RELIABILITY GOVERNANCE'}</span>
      <h1 className="font-ubuntu text-4xl font-black tracking-tight" style={{ color: 'var(--pres-text)' }} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => onEdit(e.currentTarget.textContent || '')}>{slide.title || 'Incident Retrospective & Resolution Timeline'}</h1>
      <p className="font-poppins text-base mt-1" style={{ color: 'var(--pres-text-muted)' }}>{slide.subtitle || `Incident: ${slide.incidentIdentifier || 'INC-2026-10-88'} • Severity: ${slide.severityLevel || 'SEV-1'} • TTD: ${slide.timeToDetectFormatted || '42s'} • TTM: ${slide.timeToMitigateFormatted || '8m 14s'}`}</p>
    </div>
    <div className="flex items-center gap-3 font-mono text-xs">
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-rose-500/40 bg-rose-950/30 text-rose-300 font-bold"><AlertCircle size={14} /> {slide.severityLevel || 'SEV-1'}</span>
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 font-bold"><Clock size={14} /> TTM {slide.timeToMitigateFormatted || '8m 14s'}</span>
    </div>
  </div>
);

const EventCard: React.FC<{ event: IncidentEvent }> = ({ event }) => (
  <div style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }} className="p-5 rounded-2xl border flex flex-col justify-between shadow-xl relative transition-all duration-300 hover:scale-[1.01]">
    <div>
      <div className="flex items-center justify-between mb-2 font-mono text-xs">
        <span className="text-cyan-400 font-semibold">{event.timestampUtc}</span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-800 text-slate-300">{event.eventType}</span>
      </div>
      <h3 className="font-ubuntu text-base font-bold text-white mb-2">{event.eventTitle}</h3>
      <p className="font-poppins text-xs text-slate-300 leading-relaxed mb-3">{event.descriptionProse}</p>
    </div>
    <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px] text-slate-400">
      <span>{event.actor}</span>
      <span className="text-emerald-400 flex items-center gap-1 font-bold"><CheckCircle2 size={12} /> Resolved</span>
    </div>
  </div>
);

const RootCauseBar: React.FC<{ rootCause?: string }> = ({ rootCause }) => (
  <div style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }} className="p-4 rounded-xl border shadow-lg z-10 flex items-center justify-between font-mono text-xs">
    <div className="flex items-center gap-4 text-slate-300"><span className="text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5"><Wrench size={14} /> Root Cause:</span><span>{rootCause || 'Upstream ISP transit convergence anomaly.'}</span></div>
    <span className="text-emerald-400 flex items-center gap-1 font-bold"><ShieldCheck size={13} /> Regression Test Active</span>
  </div>
);

export const IncidentRetrospectiveTimelineSlide: React.FC<{ slide: IncidentRetrospectiveTimelineSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const events = slide.timelineEvents || DEFAULT_EVENTS;
  const lead = `${slide.leadIncidentCommander || 'Alim Ul Karim'}, ${slide.commanderRole || 'Chief Software Engineer'}`;
  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <Header slide={slide} isEditMode={isEditMode} onEdit={(val) => applyEdit((s) => ({ ...s, title: val }))} />
      <div className="grid grid-cols-4 gap-5 my-auto z-10">{events.map((e) => <EventCard key={e.eventId} event={e} />)}</div>
      <RootCauseBar rootCause={slide.rootCauseSummary} />
      <div className="z-10 flex items-center justify-between font-mono text-xs border-t border-slate-800/80 pt-3" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="text-emerald-400 font-bold"><ShieldCheck size={14} className="inline mr-1.5" /> Blameless Postmortem Completed • 100% RCA Signed Off</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
