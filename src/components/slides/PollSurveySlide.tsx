import React from 'react';
import { PollSurveySlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { BarChart3, Users, Award, HelpCircle } from 'lucide-react';

export const PollSurveySlide: React.FC<{ slide: PollSurveySlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const headerShadow = theme.headerShadow || (isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px');
  const options = slide.options || [];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30">
            {slide.kicker || 'AUDIENCE PULSE'}
          </span>
          <span style={{ color: theme.subtextColor }} className="font-mono text-xs">• Real-Time Sentiment</span>
        </div>
        <h1
          style={{ color: theme.textColor, textShadow: headerShadow }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Real-Time Enterprise Architecture Survey'}
        </h1>
      </div>

      <div className="z-10 my-auto max-w-[1300px] w-full mx-auto space-y-6">
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <HelpCircle size={28} className="text-rose-400 shrink-0 mt-1" />
          <p className="font-ubuntu text-2xl font-bold leading-relaxed" style={{ color: theme.textColor }}>
            {slide.question}
          </p>
        </div>

        <div className="space-y-4">
          {options.map((opt, idx) => {
            const isOptionWinner = Boolean(opt.isWinner);
            return (
              <div
                key={idx}
                style={{ backgroundColor: theme.cardBg, borderColor: isOptionWinner ? theme.accentColor : theme.cardBorder }}
                className={`p-5 rounded-2xl border shadow-lg transition-all duration-300 slide-up-anim stagger-${Math.min(4, idx + 1)} ${
                  isOptionWinner ? 'ring-2 ring-rose-500/30' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400">0{idx + 1}</span>
                    <span className="font-ubuntu text-lg font-bold" style={{ color: theme.textColor }}>{opt.label}</span>
                    {isOptionWinner && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/15 text-rose-300 border border-rose-500/30 flex items-center gap-1">
                        <Award size={10} /> PRIMARY BOTTLENECK
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-400">{opt.votesCount}</span>
                    <span className="font-mono text-xl font-black text-rose-400">{opt.percentage}%</span>
                  </div>
                </div>

                <div className="w-full h-3 rounded-full bg-slate-800/80 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      isOptionWinner ? 'bg-gradient-to-r from-rose-500 to-amber-500' : 'bg-slate-600'
                    }`}
                    style={{ width: `${opt.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: theme.subtextColor }}>
        <span className="flex items-center gap-2 text-rose-400 font-bold">
          <Users size={14} /> {slide.totalVotes || '1,420 Enterprise Leaders Polled'}
        </span>
        <span className="opacity-70 flex items-center gap-1"><BarChart3 size={12} /> Live DOM Audience Telemetry</span>
      </div>
    </div>
  );
};
