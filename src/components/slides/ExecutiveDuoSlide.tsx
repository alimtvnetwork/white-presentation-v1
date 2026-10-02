import React from 'react';
import { ExecutiveDuoSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Users2, Award, Quote } from 'lucide-react';

export const ExecutiveDuoSlide: React.FC<{ slide: ExecutiveDuoSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const leaders = slide.leaders || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            {slide.kicker || 'EXECUTIVE LEADERSHIP'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Complementary Technical Synergy</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Technical & Operational Leadership Guild'}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-10 my-auto z-10">
        {leaders.map((leader, idx) => {
          const isPrimary = Boolean(leader.isPrimary);
          const isAlim = leader.name.toLowerCase().includes('alim');
          const standardizedRole = isAlim ? 'Chief Software Engineer' : leader.role;

          return (
            <div
              key={idx}
              style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: isPrimary ? 'var(--pres-accent)' : 'var(--pres-border)' }}
              className={`p-10 rounded-3xl border shadow-xl flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.01] ${isPrimary ? 'ring-2 ring-violet-500/50 bento-glow-pulse' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-widest">
                    {isPrimary ? 'PRINCIPAL ARCHITECT' : 'EXECUTIVE CO-PILOT'}
                  </span>
                  {isPrimary && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-violet-500/20 text-violet-300 border border-violet-500/40">LEAD</span>
                  )}
                </div>
                <h3 style={{ color: 'var(--pres-text)' }} className="font-ubuntu text-3xl font-black">{leader.name}</h3>
                <div className="font-mono text-sm font-bold text-violet-400 mt-1 mb-4">{standardizedRole}</div>
                <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm leading-relaxed mb-6">{leader.bio}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {(leader.highlightPills || []).map((pill, pIdx) => (
                    <span key={pIdx} style={{ borderColor: 'var(--pres-border)' }} className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800/60 text-slate-300 border">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {leader.quote && (
                <div className="pt-4 border-t border-slate-700/20 flex items-start gap-2.5" style={{ color: 'var(--pres-text-muted)' }}>
                  <Quote size={16} className="text-violet-400 shrink-0 mt-0.5" />
                  <span className="font-poppins text-xs italic leading-relaxed">{leader.quote}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-2 text-indigo-400 font-bold">
          <Users2 size={14} /> {slide.partnershipContext || 'Complementary Leadership: Deep Engineering Rigor & Scalable Operations'}
        </span>
        <span className="opacity-70 flex items-center gap-1.5"><Award size={12} /> Pure Live DOM Executive Profiles</span>
      </div>
    </div>
  );
};
