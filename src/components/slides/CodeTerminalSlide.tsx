import React from 'react';
import { CodeTerminalSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Terminal, Copy } from 'lucide-react';

export const CodeTerminalSlide: React.FC<{ slide: CodeTerminalSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const tabs = slide.tabs || ['build-output.log', 'archetypes.json'];

  const getLineColor = (type?: string) => {
    switch (type) {
      case 'command': return '#A78BFA';
      case 'comment': return '#64748B';
      case 'success': return '#34D399';
      case 'warning': return '#FBBF24';
      case 'error': return '#F87171';
      default: return '#E2E8F0';
    }
  };

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none flex flex-col justify-between p-[80px] animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div
          className="text-[14px] font-bold tracking-[0.25em] uppercase font-mono px-3 py-1 rounded border"
          style={{ color: theme.accentColor, borderColor: theme.cardBorder, backgroundColor: theme.cardBg }}
          contentEditable={isEditMode} suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}
        >
          {slide.kicker || 'DEVELOPER INTERFACE'}
        </div>
        <img src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png" alt="Logo" className="h-[40px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="z-20 mb-3">
        <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[42px] font-black tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
          {slide.title}
        </h1>
        <p style={{ color: theme.subtextColor }} className="font-poppins text-[19px] max-w-[1300px]" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
          {slide.subtitle}
        </p>
      </div>

      <div className="z-20 my-auto w-[1500px] mx-auto rounded-2xl overflow-hidden border shadow-2xl bg-slate-950 border-slate-800">
        <div className="bg-slate-900/90 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-rose-500 inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-4 font-mono text-[13px] text-slate-400">{slide.terminalTitle || 'terminal@white-engine: ~'}</span>
          </div>
          <div className="flex items-center gap-2">
            {tabs.map((tab, idx) => (
              <span key={idx} className={`px-3 py-1 rounded text-[12px] font-mono ${tab === (slide.activeTab || tabs[0]) ? 'bg-slate-800 text-violet-300 font-bold border border-slate-700' : 'text-slate-500'}`}>{tab}</span>
            ))}
            <button className="text-slate-500 hover:text-slate-300 ml-3 p-1"><Copy size={14} /></button>
          </div>
        </div>

        <div className="p-6 font-mono text-[16px] leading-[1.8] overflow-x-auto space-y-1">
          {slide.lines.map((line, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className="text-slate-600 select-none w-8 text-right text-[13px]">{line.lineNumber || idx + 1}</span>
              <span
                style={{ color: getLineColor(line.type) }}
                contentEditable={isEditMode} suppressContentEditableWarning
                onBlur={(e) => applyEdit((s) => {
                  if (s.type !== 'code-terminal') return s;
                  const lines = [...s.lines]; lines[idx] = { ...lines[idx], text: e.currentTarget.textContent || '' };
                  return { ...s, lines };
                })}
              >
                {line.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderColor: theme.cardBorder }} className="flex items-center justify-between z-20 pt-4 border-t">
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px] flex items-center gap-2">
          <Terminal size={16} style={{ color: theme.accentColor }} />
          {slide.footnoteNote || 'Pure DOM compilation executed in sub-10ms without external dependencies'}
        </div>
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px]">WHITE SOVEREIGN ENGINE</div>
      </div>
    </div>
  );
};
