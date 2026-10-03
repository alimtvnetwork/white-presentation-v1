import React, { useState, useEffect } from 'react';
import type { ExecutiveRosterKeypadSlideData } from '../../../types/flatGlobalSuiteTypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ExecutiveBioCard } from './ExecutiveBioCard';
import { Users, Keyboard, Sparkles } from 'lucide-react';

export const ExecutiveRosterKeypadSlide: React.FC<{
  slide: ExecutiveRosterKeypadSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const members = slide.rosterMembers || [];
  const [selectedIndex, setSelectedIndex] = useState(slide.activeMemberIndex || 0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = ['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName);
      if (isInput) return;
      const num = parseInt(e.key, 10);
      const isValidKey = !isNaN(num) && num >= 1 && num <= members.length;
      if (isValidKey) setSelectedIndex(num - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [members.length]);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <Users size={13} /> {slide.kicker || 'EXECUTIVE GOVERNANCE'}
            </span>
            <span className="font-mono text-xs text-amber-900 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 flex items-center gap-1">
              <Keyboard size={11} /> Numeric Keys [1..{members.length}] Active
            </span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)' }}
            className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Executive Engineering Leadership Roster'}</h1>
          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-4xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >{slide.subtitle || 'Direct keypad access to executive bios, domain ownership, and technical credentials'}</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[500px] items-stretch">
        {members.map((member, idx) => (
          <ExecutiveBioCard
            key={member.id || idx}
            member={member}
            isActive={idx === selectedIndex}
            onSelect={() => setSelectedIndex(idx)}
          />
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5">
            <Sparkles size={14} /> Active Persona:
          </span>
          <span className="text-slate-100 font-bold">{members[selectedIndex]?.name}</span>
          <span className="text-cyan-400">{members[selectedIndex]?.executiveTitle}</span>
          <span className="text-slate-400">{members[selectedIndex]?.divisionScope}</span>
        </div>
        <span className="text-slate-400 text-xs">Keypad Direct Select: Press 1..{members.length}</span>
      </div>
    </div>
  );
};
