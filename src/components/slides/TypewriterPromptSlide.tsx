import React from 'react';
import { TypewriterPromptSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export const TypewriterPromptSlide: React.FC<{ slide: TypewriterPromptSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const headerShadow = theme.headerShadow || (isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px');
  const blocks = slide.outputBlocks || [];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-teal-500/10 text-teal-400 border border-teal-500/30">
            {slide.kicker || 'INTERACTIVE AGENT CLI'}
          </span>
          <span style={{ color: theme.subtextColor }} className="font-mono text-xs">• Sovereign Natural Language Synthesis</span>
        </div>
        <h1
          style={{ color: theme.textColor, textShadow: headerShadow }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Natural Language Slide Synthesis Console'}
        </h1>
      </div>

      <div className="z-10 my-auto max-w-[1500px] w-full mx-auto rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden">
        <div className="px-6 py-4 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
              <Terminal size={12} className="text-teal-400" /> bash — riseup-agent
            </span>
          </div>
          <span className="font-mono text-xs text-teal-400 font-bold">{slide.systemPersona || 'Riseup Sovereign Agent v2.4'}</span>
        </div>

        <div className="p-8 space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
            <span className="font-mono text-teal-400 font-bold text-lg select-none">&gt;</span>
            <p className="font-mono text-slate-200 text-lg leading-relaxed flex-1">
              {slide.promptQuery}
              <span className="inline-block w-2.5 h-5 ml-1 bg-teal-400 animate-pulse align-middle" />
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {blocks.map((block, idx) => {
              const isBlockHighlighted = Boolean(block.isHighlighted);
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all slide-up-anim stagger-${Math.min(3, idx + 1)} ${
                    isBlockHighlighted ? 'bg-teal-950/20 border-teal-500/40 ring-1 ring-teal-500/20' : 'bg-slate-900/50 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-teal-400 uppercase tracking-wider">
                    <CheckCircle2 size={12} /> {block.title}
                  </div>
                  <div className="font-mono text-xs text-slate-300 leading-relaxed font-normal bg-black/40 p-3 rounded-lg border border-slate-800/80">
                    {block.codeOrText}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: theme.subtextColor }}>
        <span className="flex items-center gap-2 text-teal-400 font-bold">
          <Sparkles size={14} /> Deterministic Compiler Active • Sub-12ms Latency
        </span>
        <span className="opacity-70">1920x1080 Viewport Locked @ 60fps GPU Acceleration</span>
      </div>
    </div>
  );
};
