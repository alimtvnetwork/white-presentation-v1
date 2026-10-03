import React from 'react';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Calendar } from 'lucide-react';

interface CadenceHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

export const CadenceHeader: React.FC<CadenceHeaderProps> = ({ kicker, title, subtitle }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  return (
    <div className="z-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
          <Calendar size={13} />
          {kicker || 'REMOTE CULTURE'}
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">
          • Sun–Thu Operating Rhythm
        </span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-1.5"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
      >
        {title}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm leading-relaxed max-w-4xl">
        {subtitle || 'High-efficiency operating rhythm designed for maximum deep-work velocity and zero burnout'}
      </p>
    </div>
  );
};
