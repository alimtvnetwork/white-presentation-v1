import React from 'react';
import type { SentenceStackCardItem } from '../../../types/flatGlobalSuiteTypes';
import { Quote, UserCheck, Sparkles } from 'lucide-react';

interface DepthSentenceCardProps {
  card: SentenceStackCardItem;
  index: number;
  activeStep: number;
}

export const DepthSentenceCard: React.FC<DepthSentenceCardProps> = ({
  card,
  index,
  activeStep,
}) => {
  const delta = index - activeStep;
  const isActive = delta === 0;

  const transformStyle: React.CSSProperties = {
    transform: isActive
      ? 'translateZ(0px) translateY(0px) scale(1)'
      : `translateZ(${Math.max(delta * -50, -150)}px) translateY(${delta * 35}px) scale(${Math.max(1 - Math.abs(delta) * 0.06, 0.85)})`,
    opacity: isActive ? 1 : Math.max(0.4 - Math.abs(delta) * 0.1, 0.2),
    zIndex: 20 - Math.abs(delta),
  };

  const cardBorderClass = isActive
    ? 'border-amber-500/80 bg-slate-900/90 shadow-[0_0_36px_rgba(245,158,11,0.2)]'
    : 'border-slate-800 bg-slate-950/60 pointer-events-none';

  return (
    <div
      style={transformStyle}
      className={`plane-1-raised absolute inset-x-12 top-6 bottom-6 flex flex-col justify-between p-10 rounded-3xl border transition-all duration-500 ease-out ${cardBorderClass}`}
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/30 font-mono text-sm font-black flex items-center justify-center">
              0{card.cardIndex || index + 1}
            </span>
            <span className="font-mono text-xs text-amber-900 dark:text-amber-300 font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={12} /> Tenet Statement
            </span>
          </div>
          <Quote size={28} className="text-amber-500/40" />
        </div>

        <h2 className="font-ubuntu text-3xl font-black text-slate-100 mb-6 leading-tight">
          "{card.coreSentence}"
        </h2>

        <p className="font-poppins text-base text-slate-300 leading-relaxed max-w-4xl">
          {card.contextNarrative}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
          <UserCheck size={14} /> {card.authorSignature || 'Alim Ul Karim, Chief Software Engineer'}
        </span>
        <span>Tenet {index + 1} Focus</span>
      </div>
    </div>
  );
};
