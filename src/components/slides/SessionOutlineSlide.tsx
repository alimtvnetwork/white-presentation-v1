import React from 'react';
import { SessionOutlineSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Clock, BookOpen, Star } from 'lucide-react';

export const SessionOutlineSlide: React.FC<{ slide: SessionOutlineSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const headerShadow = theme.headerShadow || (isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px');
  const modules = slide.modules || [];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-sky-500/10 text-sky-400 border border-sky-500/30">
            {slide.kicker || 'WORKSHOP ROADMAP'}
          </span>
          <span style={{ color: theme.subtextColor }} className="font-mono text-xs">• 4 Executive Modules</span>
        </div>
        <h1
          style={{ color: theme.textColor, textShadow: headerShadow }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Keynote & Executive Briefing Agenda'}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto">
        {modules.map((mod, idx) => {
          const isKeyFocus = Boolean(mod.isKeyFocus);
          return (
            <div
              key={idx}
              style={{ backgroundColor: theme.cardBg, borderColor: isKeyFocus ? theme.accentColor : theme.cardBorder }}
              className={`p-7 rounded-3xl border shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] slide-up-anim stagger-${Math.min(4, idx + 1)} ${
                isKeyFocus ? 'ring-2 ring-sky-500/30' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">
                    MODULE 0{mod.moduleNumber || idx + 1}
                  </span>
                  {isKeyFocus ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      <Star size={10} className="fill-amber-300" /> KEY FOCUS
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-800 text-slate-400 flex items-center gap-1">
                      <Clock size={10} /> {mod.duration}
                    </span>
                  )}
                </div>

                <h3 style={{ color: theme.textColor }} className="font-ubuntu text-xl font-bold mb-3 leading-snug">
                  {mod.title}
                </h3>

                <div className="space-y-2.5 pt-4 border-t border-slate-700/30">
                  {(mod.topics || []).map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-sm" style={{ color: theme.subtextColor }}>
                      <span className="text-sky-400 text-xs mt-1">▸</span>
                      <span className="font-poppins text-xs leading-relaxed">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-700/30 flex items-center justify-between font-mono text-xs" style={{ color: theme.subtextColor }}>
                <span className="flex items-center gap-1.5"><Clock size={12} className="text-sky-400" /> {mod.duration}</span>
                <span className="opacity-70">Phase 0{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: theme.subtextColor }}>
        <span className="flex items-center gap-2 text-sky-400 font-bold">
          <BookOpen size={14} /> {slide.targetAudience || 'Designed for CTOs, Principal Architects, and Engineering Leaders'}
        </span>
        <span className="opacity-70">Deterministic Live DOM Session Agenda</span>
      </div>
    </div>
  );
};
