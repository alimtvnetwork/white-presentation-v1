import React from 'react';
import type { PhonemeToken } from '../../../types/kineticSuiteArchetypes';
import { AlignLeft, Sparkles } from 'lucide-react';

export interface PhonemeTimelineRailProps {
  phonemes?: PhonemeToken[];
  isActive: boolean;
}

export const PhonemeTimelineRail: React.FC<PhonemeTimelineRailProps> = ({
  phonemes,
  isActive,
}) => {
  const tokens = phonemes && phonemes.length > 0 ? phonemes : [
    { phonemeSymbol: '/aI/', startTimestampMs: 0, endTimestampMs: 110, confidenceScore: 0.99 },
    { phonemeSymbol: '/m/', startTimestampMs: 110, endTimestampMs: 190, confidenceScore: 0.98 },
    { phonemeSymbol: '/p/', startTimestampMs: 190, endTimestampMs: 270, confidenceScore: 0.97 },
    { phonemeSymbol: '/l/', startTimestampMs: 270, endTimestampMs: 360, confidenceScore: 0.99 },
    { phonemeSymbol: '/e/', startTimestampMs: 360, endTimestampMs: 440, confidenceScore: 0.96 },
    { phonemeSymbol: '/m/', startTimestampMs: 440, endTimestampMs: 520, confidenceScore: 0.98 },
    { phonemeSymbol: '/e/', startTimestampMs: 520, endTimestampMs: 600, confidenceScore: 0.95 },
    { phonemeSymbol: '/n/', startTimestampMs: 600, endTimestampMs: 690, confidenceScore: 0.99 },
    { phonemeSymbol: '/t/', startTimestampMs: 690, endTimestampMs: 780, confidenceScore: 0.97 },
  ];

  return (
    <div className="p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col gap-2 font-mono text-xs">
      <div className="flex items-center justify-between text-slate-400">
        <span className="flex items-center gap-1.5 font-bold text-slate-300">
          <AlignLeft size={13} className="text-amber-600 dark:text-amber-400" />
          Phonetic Alignment Rail
        </span>
        <span className="flex items-center gap-1 text-[11px] text-amber-800 dark:text-amber-300">
          <Sparkles size={11} /> Neural Vocoder Sub-Token Stream
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto py-1">
        {tokens.map((token, idx) => (
          <div
            key={idx}
            className={`flex-1 min-w-[72px] p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${
              isActive
                ? 'bg-amber-500/10 border-amber-500/30'
                : 'bg-slate-950/60 border-slate-800 text-slate-500'
            }`}
          >
            <span className="text-sm font-ubuntu font-bold text-amber-800 dark:text-amber-300">
              {token.phonemeSymbol}
            </span>
            <span className="text-[10px] text-slate-400">
              {token.startTimestampMs}-{token.endTimestampMs}ms
            </span>
            <span className="text-[9px] font-bold text-emerald-400">
              {Math.round(token.confidenceScore * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
