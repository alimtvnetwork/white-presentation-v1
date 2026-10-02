import React from 'react';
import type { UspStrikethroughSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ShieldCheck, Cpu, Zap, CheckCircle2, Sparkles } from 'lucide-react';

const ICONS: Record<string, React.FC<{ size?: number }>> = { ShieldCheck, Cpu, Zap };

export const UspStrikethroughSlide: React.FC<{ slide: UspStrikethroughSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const proofCards = slide.proofCards || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_120px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'THE SOVEREIGN ADVANTAGE'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Typographical Hook</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[36px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Autonomy Over Proprietary Lock-In'}
        </h1>
      </div>

      <div className="z-10 my-auto">
        <div className="font-ubuntu font-black italic text-[72px] leading-[1.1] max-w-[1550px] mb-12">
          <span>{slide.prefixText}</span>
          <span className="text-violet-400 underline decoration-violet-500/60 decoration-wavy underline-offset-8">
            {slide.affirmationText}
          </span>
          <span>{slide.rejectionPrefixText}</span>
          <span className="line-through decoration-rose-500 decoration-[6px] text-slate-500">
            {slide.strikethroughText}
          </span>
          <span>{slide.suffixText || '.'}</span>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {proofCards.map((card, idx) => {
            const Icon = ICONS[card.icon] || ShieldCheck;
            const hasVerify = Boolean(card.hasVerificationBadge);
            return (
              <div
                key={card.id || idx}
                className="plane-2-elevated p-8 rounded-3xl border border-violet-500/20 bg-slate-900/40 hover:border-violet-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                      <Icon size={24} />
                    </div>
                    {hasVerify && (
                      <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        <CheckCircle2 size={12} /> {card.badgeText}
                      </span>
                    )}
                  </div>
                  <h3 className="font-ubuntu text-xl font-bold mb-2 text-slate-100">{card.headline}</h3>
                  <p className="font-poppins text-sm text-slate-300 leading-relaxed">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <span className="flex items-center gap-2 text-violet-400 font-bold"><Sparkles size={14} /> Editorial Strikethrough Typographical Anchor</span>
        <span>Deterministic Value Affirmation</span>
      </div>
    </div>
  );
};
