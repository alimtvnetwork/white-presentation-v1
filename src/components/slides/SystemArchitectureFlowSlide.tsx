import React from 'react';
import type { SystemArchitectureSlideData, ArchitectureConnection } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ArrowRight, ArrowLeftRight, Layers } from 'lucide-react';
import { ArchitectureTierColumn } from './architecture/ArchitectureTierColumn';
import { getStepPhase, getStepPhaseStyle } from '../../utils/stepProgression';

const ArchitectureHeader: React.FC<{ kicker?: string; title?: string }> = ({ kicker, title }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  return (
    <div className="z-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
          {kicker || 'SYSTEM ARCHITECTURE'}
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Tier Topology & Data Flow</span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
      >
        {title || 'Enterprise Distributed Architecture Flow'}
      </h1>
    </div>
  );
};

const ConnectionArrow: React.FC<{ connection?: ArchitectureConnection }> = ({ connection }) => {
  const hasBi = Boolean(connection?.hasBiDirectional);
  const hasLabel = Boolean(connection?.label);
  return (
    <div className="flex flex-col items-center justify-center px-1 text-cyan-400 shrink-0">
      {hasBi ? <ArrowLeftRight size={20} className="animate-pulse" /> : <ArrowRight size={20} className="animate-pulse" />}
      {hasLabel && <span className="font-mono text-[9px] text-cyan-300 mt-1 uppercase max-w-[60px] text-center">{connection?.label}</span>}
    </div>
  );
};

export const SystemArchitectureFlowSlide: React.FC<{ slide: SystemArchitectureSlideData }> = ({ slide }) => {
  const activeStep = useDeckStore((s) => s.activeStep);
  const layers = slide.layers || [];
  const connections = slide.connections || [];
  const isVertical = slide.flowDirection === 'vertical';

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <ArchitectureHeader kicker={slide.kicker} title={slide.title} />

      <div className={`z-10 my-auto flex gap-4 items-stretch ${isVertical ? 'flex-col' : 'flex-row'}`}>
        {layers.map((layer, idx) => {
          const phase = getStepPhase(idx, activeStep);
          const phaseStyle = getStepPhaseStyle(phase, '#06b6d4');
          const isCurrentLayer = idx === activeStep;
          const hasNextArrow = idx < layers.length - 1;
          return (
            <React.Fragment key={layer.id || idx}>
              <div style={phaseStyle} className="flex-1 flex flex-col">
                <ArchitectureTierColumn layer={{ ...layer, isHighlighted: isCurrentLayer }} layerIndex={idx} />
              </div>
              {hasNextArrow && <ConnectionArrow connection={connections[idx]} />}
            </React.Fragment>
          );
        })}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-cyan-400 font-bold">
          <Layers size={14} /> End-to-End Fault-Tolerant Infrastructure Mesh
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Low-Latency Service Topology</span>
      </div>
    </div>
  );
};
