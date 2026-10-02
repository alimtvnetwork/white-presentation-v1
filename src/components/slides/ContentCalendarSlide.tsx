import React from 'react';
import { ContentCalendarSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Calendar, Radio, CheckCircle2 } from 'lucide-react';

export const ContentCalendarSlide: React.FC<{ slide: ContentCalendarSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const headerShadow = theme.headerShadow || (isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px');
  const days = slide.scheduleDays || [];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            {slide.kicker || 'EDITORIAL CADENCE'}
          </span>
          <span style={{ color: theme.subtextColor }} className="font-mono text-xs">• 5-Day Multi-Channel Pipeline</span>
        </div>
        <h1
          style={{ color: theme.textColor, textShadow: headerShadow }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Weekly Multi-Channel Distribution Pipeline'}
        </h1>
      </div>

      <div className="grid grid-cols-5 gap-5 z-10 my-auto">
        {days.map((item, idx) => {
          const isItemLive = Boolean(item.isLive);
          return (
            <div
              key={idx}
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className={`p-6 rounded-3xl border shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/40 slide-up-anim stagger-${Math.min(5, idx + 1)}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider">{item.day}</span>
                  {isItemLive ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <Radio size={10} className="animate-pulse" /> LIVE
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-800 text-slate-400">
                      SCHEDULED
                    </span>
                  )}
                </div>
                <div className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 inline-block mb-3">
                  {item.channel}
                </div>
                <h3 style={{ color: theme.textColor }} className="font-ubuntu text-lg font-bold leading-snug mb-3">
                  {item.topic}
                </h3>
              </div>
              <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between font-mono text-[11px]" style={{ color: theme.subtextColor }}>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-indigo-400" /> {item.format}
                </span>
                <span className="opacity-60">Day 0{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: theme.subtextColor }}>
        <span className="flex items-center gap-2 text-indigo-400 font-bold">
          <Calendar size={14} /> {slide.monthlyCadence || '24 High-Impact Releases & Case Studies Every Month'}
        </span>
        <span className="opacity-70">Deterministic Live DOM Editorial Pipeline</span>
      </div>
    </div>
  );
};
