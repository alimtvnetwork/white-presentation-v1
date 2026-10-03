import React, { useState } from 'react';
import type { AudienceDecisionForkMatrixSlideData, DecisionPathway } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, CheckCircle2, Sparkles, Compass, AlertCircle } from 'lucide-react';

const DEFAULT_PATHWAYS: DecisionPathway[] = [
  { pathwayKey: 'A', pathwayTitle: 'Conservative Cloud Retainer', strategicHeadline: 'Gradual migration with legacy cloud wrappers', capExRequirementFormatted: '$1.2M', opExAnnualFormatted: '$3.4M/yr', timeToProduction: '9 Months', riskProfile: 'low', coreAdvantages: ['Zero architectural disruption', 'Existing vendor approvals'], strategicTradeoffs: ['High compute waste'], isRecommended: false },
  { pathwayKey: 'B', pathwayTitle: 'Sovereign Mesh Accelerated', strategicHeadline: 'Event-driven cell mesh with cryptographic enclaves', capExRequirementFormatted: '$3.8M', opExAnnualFormatted: '$1.1M/yr', timeToProduction: '4 Months', riskProfile: 'moderate', coreAdvantages: ['68% OpEx reduction', 'Deterministic sub-ms SLAs'], strategicTradeoffs: ['Requires modernization'], isRecommended: true },
  { pathwayKey: 'C', pathwayTitle: 'Full Bare-Metal In-House', strategicHeadline: 'Private datacenter rollout with custom silicon', capExRequirementFormatted: '$8.5M', opExAnnualFormatted: '$4.2M/yr', timeToProduction: '18 Months', riskProfile: 'high', coreAdvantages: ['Total sovereignty', 'No vendor lock-in'], strategicTradeoffs: ['Extreme CapEx overhead'], isRecommended: false },
];

const Header: React.FC<{ slide: AudienceDecisionForkMatrixSlideData; isEditMode: boolean; onEdit: (v: string) => void }> = ({ slide, isEditMode, onEdit }) => (
  <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
    <div>
      <span className="kicker-pill-badge mb-2">{slide.kicker || 'EXECUTIVE DIALOGUE & STRATEGIC FORK'}</span>
      <h1 className="font-ubuntu text-4xl font-black tracking-tight" style={{ color: 'var(--pres-text)' }} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => onEdit(e.currentTarget.textContent || '')}>{slide.title || 'Audience Decision Fork & Strategy Matrix'}</h1>
      <p className="font-poppins text-base mt-1" style={{ color: 'var(--pres-text-muted)' }}>{slide.subtitle || `Decision Context: ${slide.decisionContextPrompt || 'Select planetary cloud expansion pathway'} • Session: ${slide.votingSessionId || 'QUORUM-2026'}`}</p>
    </div>
    <div className="flex items-center gap-3 font-mono text-xs">
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-950/30 text-violet-300 font-bold"><Compass size={14} /> 3 Strategic Forks</span>
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 font-bold"><ShieldCheck size={14} /> Fiduciary Gate</span>
    </div>
  </div>
);

const getRiskColor = (risk: string) => {
  if (risk === 'low') return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40';
  if (risk === 'moderate') return 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40';
  return 'text-amber-900 dark:text-amber-300 border-amber-500/30 bg-amber-950/40';
};

const PathwayCard: React.FC<{ p: DecisionPathway; isSelected: boolean; onSelect: () => void }> = ({ p, isSelected, onSelect }) => (
  <div onClick={onSelect} style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: isSelected ? 'var(--pres-accent)' : 'var(--pres-border)' }} className={`p-6 rounded-2xl border flex flex-col justify-between shadow-2xl cursor-pointer transition-all duration-300 hover:scale-[1.01] ${isSelected ? 'ring-2 ring-violet-500/60 shadow-violet-950/40' : ''}`}>
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs uppercase font-bold text-slate-400">Pathway {p.pathwayKey}</span>
        {p.isRecommended && <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-600 text-white flex items-center gap-1"><Sparkles size={10} /> RECOMMENDED</span>}
      </div>
      <h3 className="font-ubuntu text-lg font-bold text-white mb-1">{p.pathwayTitle}</h3>
      <p className="font-poppins text-xs text-slate-300 leading-relaxed mb-4">{p.strategicHeadline}</p>
      <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 font-mono text-xs">
        <div><span className="text-[10px] text-slate-400 block uppercase">CapEx</span><strong className="text-white">{p.capExRequirementFormatted}</strong></div>
        <div><span className="text-[10px] text-slate-400 block uppercase">OpEx</span><strong className="text-emerald-400">{p.opExAnnualFormatted}</strong></div>
        <div><span className="text-[10px] text-slate-400 block uppercase">Time</span><strong className="text-cyan-400">{p.timeToProduction}</strong></div>
      </div>
      <div className="mt-4 space-y-1.5">{p.coreAdvantages.map((adv, idx) => (
        <div key={idx} className="flex items-center gap-2 font-poppins text-xs text-slate-300"><CheckCircle2 size={13} className="text-emerald-400 shrink-0" /><span>{adv}</span></div>
      ))}</div>
    </div>
    <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase flex items-center gap-1 ${getRiskColor(p.riskProfile)}`}><AlertCircle size={10} /> {p.riskProfile} Risk</span>
      <span className={isSelected ? 'text-violet-400 font-bold' : 'text-slate-400'}>{isSelected ? 'Selected Strategy' : 'Click to Select'}</span>
    </div>
  </div>
);

export const AudienceDecisionForkMatrixSlide: React.FC<{ slide: AudienceDecisionForkMatrixSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const [selectedKey, setSelectedKey] = useState<string>(slide.activePathwayKey || 'B');
  const pathways = slide.pathways || DEFAULT_PATHWAYS;
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;
  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <Header slide={slide} isEditMode={isEditMode} onEdit={(val) => applyEdit((s) => ({ ...s, title: val }))} />
      <div className="grid grid-cols-3 gap-6 my-auto z-10">{pathways.map((p) => <PathwayCard key={p.pathwayKey} p={p} isSelected={selectedKey === p.pathwayKey} onSelect={() => setSelectedKey(p.pathwayKey)} />)}</div>
      <div className="z-10 flex items-center justify-between font-mono text-xs border-t border-slate-800/80 pt-3" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="text-emerald-400 font-bold"><ShieldCheck size={14} className="inline mr-1.5" /> Fiduciary Committee Signoff Active • Real-Time Quorum Polling</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
