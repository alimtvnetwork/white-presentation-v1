import React from 'react';
import type { FlywheelGrowthMomentumOrbitSlideData, FlywheelNode } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { RotateCw, ShieldCheck, Zap, Activity, Cpu } from 'lucide-react';

const DEFAULT_NODES: FlywheelNode[] = [
  { nodeId: 'product', nodeTitle: 'Zero-Defect Core', subtext: 'Sub-millisecond contracts & deterministic state guarantees', orbitAngleDeg: 0, rotationalVelocityRpm: 120, metricMultiplier: '3.4x Velocity', isCoreEngine: true, hasPositiveFeedbackLoop: true, isActive: true },
  { nodeId: 'adoption', nodeTitle: 'Enterprise Adoption', subtext: 'Rapid developer on-boarding & frictionless CI/CD velocity', orbitAngleDeg: 90, rotationalVelocityRpm: 150, metricMultiplier: '2.8x Expansion', isCoreEngine: false, hasPositiveFeedbackLoop: true, isActive: true },
  { nodeId: 'telemetry', nodeTitle: 'Data Moat & Telemetry', subtext: 'High-frequency telemetry stream refining machine learning models', orbitAngleDeg: 180, rotationalVelocityRpm: 190, metricMultiplier: '4.5x Retention', isCoreEngine: false, hasPositiveFeedbackLoop: true, isActive: true },
  { nodeId: 'capital', nodeTitle: 'Capital Efficiency', subtext: 'Compounding margin reinvested into core algorithmic differentiation', orbitAngleDeg: 270, rotationalVelocityRpm: 240, metricMultiplier: '5.2x ROI', isCoreEngine: false, hasPositiveFeedbackLoop: true, isActive: true },
];

const Header: React.FC<{ slide: FlywheelGrowthMomentumOrbitSlideData; isEditMode: boolean; onEdit: (v: string) => void }> = ({ slide, isEditMode, onEdit }) => (
  <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
    <div>
      <span className="kicker-pill-badge mb-2">{slide.kicker || 'GROWTH MECHANICS & REINFORCING LOOPS'}</span>
      <h1 className="font-ubuntu text-4xl font-black tracking-tight" style={{ color: 'var(--pres-text)' }} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => onEdit(e.currentTarget.textContent || '')}>{slide.title || 'Flywheel Growth Momentum & Orbit Acceleration'}</h1>
      <p className="font-poppins text-base mt-1" style={{ color: 'var(--pres-text-muted)' }}>{slide.subtitle || `Compounding Velocity Ratio: ${slide.compoundingVelocityRatio || '4.2x Exponential'} • ${slide.flywheelName || 'Planetary System Flywheel'}`}</p>
    </div>
    <div className="flex items-center gap-3 font-mono text-xs">
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-950/30 text-violet-300 font-bold"><RotateCw size={14} className="animate-spin" /> Self-Sustaining</span>
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 font-bold"><Zap size={14} /> Multiplier: {slide.compoundingVelocityRatio || '4.2x'}</span>
    </div>
  </div>
);

const NodeCard: React.FC<{ node: FlywheelNode }> = ({ node }) => (
  <div style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: node.isCoreEngine ? 'var(--pres-accent)' : 'var(--pres-border)' }} className={`p-6 rounded-2xl border flex flex-col justify-between shadow-xl relative transition-all duration-300 hover:scale-[1.02] ${node.isCoreEngine ? 'ring-2 ring-violet-500/60 shadow-violet-900/30' : ''}`}>
    <div>
      <div className="flex items-center justify-between mb-3 font-mono text-xs">
        <span className="flex items-center gap-1.5 text-cyan-400 font-bold"><Activity size={12} /> {node.rotationalVelocityRpm} RPM</span>
        <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase ${node.isCoreEngine ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300'}`}>{node.metricMultiplier}</span>
      </div>
      <h3 className="font-ubuntu text-lg font-bold text-white mb-2 flex items-center gap-2">{node.isCoreEngine && <Cpu size={16} className="text-violet-400" />}{node.nodeTitle}</h3>
      <p className="font-poppins text-xs text-slate-300 leading-relaxed">{node.subtext}</p>
    </div>
    <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px] text-slate-400">
      <span>Angle {node.orbitAngleDeg}°</span>
      {node.hasPositiveFeedbackLoop && <span className="text-emerald-400 font-semibold flex items-center gap-1"><ShieldCheck size={12} /> Positive Loop</span>}
    </div>
  </div>
);

const Footer: React.FC<{ lead: string; hasMomentum: boolean; hasAcceleration: boolean }> = ({ lead, hasMomentum, hasAcceleration }) => (
  <div className="z-10 flex items-center justify-between font-mono text-xs border-t border-slate-800/80 pt-3" style={{ color: 'var(--pres-text-muted)' }}>
    <div className="flex items-center gap-4 text-emerald-400 font-bold">
      <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> {hasMomentum ? 'Perpetual Reinforcing Flywheel Dynamics' : 'Momentum Active'}</span>
      {hasAcceleration && <span className="text-cyan-400 flex items-center gap-1"><Zap size={13} /> Centrifugal Acceleration Engaged</span>}
    </div>
    <span className="text-cyan-400 font-semibold">{lead}</span>
  </div>
);

export const FlywheelGrowthMomentumOrbitSlide: React.FC<{ slide: FlywheelGrowthMomentumOrbitSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const nodes = slide.orbitNodes || DEFAULT_NODES;
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;
  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <Header slide={slide} isEditMode={isEditMode} onEdit={(val) => applyEdit((s) => ({ ...s, title: val }))} />
      <div className="grid grid-cols-4 gap-6 my-auto z-10">{nodes.map((node) => <NodeCard key={node.nodeId} node={node} />)}</div>
      <Footer lead={lead} hasMomentum={Boolean(slide.hasSelfSustainingMomentum)} hasAcceleration={Boolean(slide.hasCentrifugalAccelerationActive)} />
    </div>
  );
};
