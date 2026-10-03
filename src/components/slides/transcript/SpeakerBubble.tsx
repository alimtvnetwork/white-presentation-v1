import React from 'react';
import type { SpeakerTurnItem } from '../../../types/extendedArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Clock, MessageSquareQuote } from 'lucide-react';

interface SpeakerBubbleProps {
  turn: SpeakerTurnItem;
  isActive: boolean;
  isPast: boolean;
  isFuture: boolean;
}

export const SpeakerBubble: React.FC<SpeakerBubbleProps> = ({
  turn,
  isActive,
  isPast,
  isFuture,
}) => {
  const hasHighlight = isBooleanTrue(turn.hasAccentHighlight);
  const initials = turn.speakerName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div
      style={{
        backgroundColor: isActive ? 'var(--pres-card-bg, rgba(255, 255, 255, 0.08))' : 'var(--pres-card-bg, rgba(255, 255, 255, 0.04))',
        borderColor: isActive ? 'var(--pres-accent)' : 'var(--pres-card-border, rgba(255, 255, 255, 0.1))',
        opacity: isFuture ? 0.4 : isPast ? 0.75 : 1,
        filter: isFuture ? 'blur(1.25px)' : 'none',
        boxShadow: isActive ? '0 0 24px -2px var(--pres-accent)' : 'none',
        transform: isActive ? 'scale(1.02)' : 'none',
      }}
      className="p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            style={{ backgroundColor: turn.speakerColor || '#6366F1' }}
            className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs shadow-md shrink-0"
          >
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-ubuntu font-bold text-base" style={{ color: 'var(--pres-text)' }}>
                {turn.speakerName}
              </span>
              {hasHighlight && (
                <span className="px-2 py-0.2 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30">
                  KEY TAKEAWAY
                </span>
              )}
            </div>
            <div className="text-xs font-mono" style={{ color: 'var(--pres-text-muted)' }}>
              {turn.speakerRole}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-500/10 text-slate-300 border border-slate-500/20">
            {turn.sentimentTag}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono" style={{ color: 'var(--pres-text-muted)' }}>
            <Clock size={12} /> {turn.timestamp}
          </span>
        </div>
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <MessageSquareQuote size={18} className="text-violet-400 shrink-0 mt-0.5 opacity-80" />
        <p className="font-poppins text-sm leading-relaxed" style={{ color: 'var(--pres-text)' }}>
          "{turn.utterance}"
        </p>
      </div>
    </div>
  );
};
