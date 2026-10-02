import React from 'react';
import type { NextStepsSprintSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Flag, CheckCircle2, User } from 'lucide-react';

export const NextStepsSprintSlide: React.FC<{ slide: NextStepsSprintSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const sprints = slide.sprints || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_90px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            {slide.kicker || 'ACTIONABLE ONBOARDING PLAN'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• {slide.sprintTimelineTitle}</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[42px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || '30-Day Sovereign Implementation Sprint'}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto items-stretch">
        {sprints.map((sp, idx) => {
          const isCurrent = Boolean(sp.isCurrentSprint);
          return (
            <div
              key={sp.id || idx}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${isCurrent ? 'plane-2-elevated border-indigo-500/50 bg-indigo-500/10 shadow-xl' : 'plane-1-raised bg-slate-900/40 border-slate-800'}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider">PHASE {sp.phaseNumber}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">{sp.timeframe}</span>
                </div>
                <h3 className="font-ubuntu text-lg font-bold mb-2 text-slate-100">{sp.title}</h3>
                <p className="font-poppins text-xs text-slate-400 mb-4">{sp.objective}</p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-violet-300 mb-4 bg-slate-800/40 p-2 rounded">
                  <User size={12} /> <span>Lead: {sp.leadOwner}</span>
                </div>
                <div className="space-y-1.5 mb-4">
                  {(sp.deliverables || []).map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <span className="text-indigo-400 font-bold">•</span> <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-emerald-400 font-bold mb-1">
                  <CheckCircle2 size={12} /> Exit Gate:
                </div>
                <div className="text-xs font-poppins text-slate-300">{sp.exitCriteria}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <span className="flex items-center gap-2 text-indigo-400 font-bold"><Flag size={14} /> Production Readiness Guarantee</span>
        <span>Deterministic Multi-Phase Roadmap</span>
      </div>
    </div>
  );
};
