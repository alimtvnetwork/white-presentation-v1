import React from 'react';
import type { SwotAnalysisSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ShieldCheck, AlertTriangle, TrendingUp, ShieldAlert } from 'lucide-react';

const ICONS: Record<string, React.FC<{ size?: number }>> = {
  ShieldCheck, AlertTriangle, TrendingUp, ShieldAlert,
};

const QUADRANT_STYLES: Record<string, { border: string; bg: string; text: string; label: string }> = {
  strengths: { border: 'border-emerald-500/40', bg: 'bg-emerald-500/5', text: 'text-emerald-400', label: 'STRENGTHS (INTERNAL)' },
  weaknesses: { border: 'border-amber-500/40', bg: 'bg-amber-500/5', text: 'text-amber-700 dark:text-amber-400', label: 'WEAKNESSES (INTERNAL)' },
  opportunities: { border: 'border-indigo-500/40', bg: 'bg-indigo-500/5', text: 'text-indigo-400', label: 'OPPORTUNITIES (EXTERNAL)' },
  threats: { border: 'border-rose-500/40', bg: 'bg-rose-500/5', text: 'text-rose-400', label: 'THREATS (EXTERNAL)' },
};

export const SwotAnalysisSlide: React.FC<{ slide: SwotAnalysisSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const quadrants = slide.quadrants || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'STRATEGIC SITUATIONAL ANALYSIS'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• 2x2 Bento Matrix</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Enterprise Architecture SWOT Matrix'}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-6 z-10 my-auto">
        {quadrants.map((q, idx) => {
          const style = QUADRANT_STYLES[q.quadrantType] || QUADRANT_STYLES.strengths;
          const Icon = ICONS[q.icon] || ShieldCheck;
          return (
            <div
              key={q.id || idx}
              className={`plane-2-elevated p-6 rounded-3xl border ${style.border} ${style.bg} flex flex-col justify-between transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${style.text}`}>
                    <Icon size={16} /> {style.label}
                  </span>
                  <span className={`font-ubuntu font-black text-xl ${style.text}`}>
                    {q.quadrantType[0].toUpperCase()}
                  </span>
                </div>
                <h3 className="font-ubuntu text-lg font-bold text-slate-100 mb-3">{q.title}</h3>
                <div className="space-y-2">
                  {(q.items || []).map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs font-poppins text-slate-300">
                      <span className={`${style.text} font-bold mt-0.5`}>▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <span className="text-violet-400 font-bold">Rigorous Strategic Framework</span>
        <span>{slide.strategicContext || 'Internal Capabilities vs External Market Forces'}</span>
      </div>
    </div>
  );
};
