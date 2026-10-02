import React from 'react';
import type { TeamHierarchySlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Network } from 'lucide-react';
import { OrgNodeCard, RootLeaderCard } from './team/OrgNodeCard';

const OrgHeader: React.FC<{ kicker?: string; title?: string }> = ({ kicker, title }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  return (
    <div className="z-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-teal-500/10 text-teal-400 border border-teal-500/30">
          {kicker || 'ORGANIZATIONAL STRUCTURE'}
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Governance & Leadership Mesh</span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
      >
        {title || 'Leadership Governance & Department Matrix'}
      </h1>
    </div>
  );
};

export const TeamHierarchyOrgSlide: React.FC<{ slide: TeamHierarchySlideData }> = ({ slide }) => {
  const departments = slide.departments || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <OrgHeader kicker={slide.kicker} title={slide.title} />

      <div className="z-10 my-auto flex flex-col items-center gap-6">
        <RootLeaderCard role={slide.rootRole} name={slide.rootName} />
        <div className="w-full flex gap-5 items-stretch">
          {departments.map((dept) => (
            <OrgNodeCard key={dept.id} dept={dept} />
          ))}
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-teal-400 font-bold">
          <Network size={14} /> Scalable Engineering & Operational Accountability
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Enterprise Team Topology</span>
      </div>
    </div>
  );
};
