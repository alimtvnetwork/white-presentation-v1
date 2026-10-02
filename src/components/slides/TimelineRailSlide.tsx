import React from 'react';
import type { TimelineRailSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { TimelineRailNode } from './rail/TimelineRailNode';
import { MilestoneDetailCard } from './rail/MilestoneDetailCard';
import { GitCommit, Activity } from 'lucide-react';

export const TimelineRailSlide: React.FC<{ slide: TimelineRailSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const jumpToStep = useDeckStore((s) => s.jumpToStep);

  const railNodes = slide.railNodes || [];
  const hasNodes = railNodes.length > 0;
  const clampedStep = hasNodes ? Math.min(railNodes.length - 1, Math.max(0, activeStep)) : 0;
  const activeNode = hasNodes ? railNodes[clampedStep] : undefined;

  const progressPercent = hasNodes && railNodes.length > 1
    ? (clampedStep / (railNodes.length - 1)) * 100
    : 0;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/30">
            {slide.kicker || 'EXECUTION LIFECYCLE RAIL'}
          </span>
          <span className="font-mono text-xs text-blue-300 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 flex items-center gap-1.5">
            <Activity size={12} /> Stage {clampedStep + 1} of {railNodes.length}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Deterministic Delivery & Milestones Rail'}
        </h1>
        {slide.subtitle && (
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm mt-2">
            {slide.subtitle}
          </p>
        )}
      </div>

      <div className="z-10 my-4 flex flex-col gap-8">
        <div className="relative px-8">
          <div className="absolute top-7 left-14 right-14 h-1 bg-slate-800 rounded-full -z-0">
            <div
              style={{ width: `${progressPercent}%` }}
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
            />
          </div>

          <div className="flex justify-between items-start relative z-10">
            {railNodes.map((node, idx) => (
              <TimelineRailNode
                key={node.id || idx}
                node={node}
                nodeIndex={idx}
                activeStep={clampedStep}
                onSelectStep={jumpToStep}
              />
            ))}
          </div>
        </div>

        <MilestoneDetailCard node={activeNode} />
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-blue-400 font-bold">
          <GitCommit size={14} /> Kinetic Timeline Rail with Deterministic State Advancing
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Tactile step progression active (Phase {clampedStep + 1} of {railNodes.length})
        </span>
      </div>
    </div>
  );
};
