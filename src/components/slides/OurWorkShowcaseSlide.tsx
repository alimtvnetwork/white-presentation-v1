import React from 'react';
import { OurWorkShowcaseSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { FolderGit2, Sparkles, ExternalLink } from 'lucide-react';

export const OurWorkShowcaseSlide: React.FC<{ slide: OurWorkShowcaseSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const projects = slide.projects || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'PROVEN PORTFOLIO'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Enterprise Production Deliveries</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Selected Production Case Studies & Architecture'}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto z-10">
        {projects.map((proj, idx) => {
          const isFeatured = Boolean(proj.isFeatured);
          return (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--pres-bg-card)',
                borderColor: isFeatured ? 'var(--pres-accent)' : 'var(--pres-border)',
              }}
              className={`p-7 rounded-3xl border shadow-xl flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02] ${
                isFeatured ? 'ring-2 ring-violet-500/50 bento-glow-pulse' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-violet-500/10 text-violet-400 border border-violet-500/30">
                    {proj.category}
                  </span>
                  {isFeatured && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      FEATURED
                    </span>
                  )}
                </div>
                <div style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                  {proj.client}
                </div>
                <h3 style={{ color: 'var(--pres-text)' }} className="font-ubuntu text-xl font-bold mb-3">{proj.title}</h3>
                <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs leading-relaxed mb-4">{proj.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-700/20 flex flex-col gap-1">
                <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-[10px] uppercase tracking-wider">Impact Outcome</span>
                <span className="font-ubuntu text-2xl font-black text-emerald-400 flex items-center justify-between">
                  {proj.metrics}
                  <ExternalLink size={14} className="opacity-40" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-2 text-violet-400 font-bold">
          <FolderGit2 size={14} /> {slide.summaryTag || '100% Production Verification & Zero Rollback History'}
        </span>
        <span className="opacity-70 flex items-center gap-1.5"><Sparkles size={12} /> Pure Live DOM Portfolio Engine</span>
      </div>
    </div>
  );
};
