import React from 'react';
import type { LlmBenchmarkModelItem } from '../../../types/extendedArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Sparkles, Shield, Zap, Terminal } from 'lucide-react';

interface ModelScorecardProps {
  model: LlmBenchmarkModelItem;
  isActive: boolean;
  isPast: boolean;
  isFuture: boolean;
}

export const ModelScorecard: React.FC<ModelScorecardProps> = ({
  model,
  isActive,
  isPast,
  isFuture,
}) => {
  const isLeader = isBooleanTrue(model.isLeader);
  const isPrivate = isBooleanTrue(model.isPrivateOnDevice);

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
      className="p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs font-bold text-violet-400">{model.provider}</span>
          <div className="flex items-center gap-1.5">
            {isLeader && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30 flex items-center gap-1">
                <Sparkles size={10} /> ARENA LEADER
              </span>
            )}
            {isPrivate && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <Shield size={10} /> SOVEREIGN
              </span>
            )}
          </div>
        </div>

        <h3 className="font-ubuntu text-2xl font-bold mb-4" style={{ color: 'var(--pres-text)' }}>
          {model.modelName}
        </h3>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-black/20 border border-white/5">
            <div className="text-[11px] font-mono" style={{ color: 'var(--pres-text-muted)' }}>Latency (TTFT)</div>
            <div className="font-mono text-lg font-bold text-emerald-400">{model.timeToFirstTokenMs} ms</div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-white/5">
            <div className="text-[11px] font-mono" style={{ color: 'var(--pres-text-muted)' }}>Throughput</div>
            <div className="font-mono text-lg font-bold text-cyan-400">{model.tokensPerSec} tok/s</div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-white/5">
            <div className="text-[11px] font-mono" style={{ color: 'var(--pres-text-muted)' }}>Context Window</div>
            <div className="font-mono text-lg font-bold text-violet-400">{model.contextWindow}</div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-white/5">
            <div className="text-[11px] font-mono" style={{ color: 'var(--pres-text-muted)' }}>Accuracy Score</div>
            <div className="font-mono text-lg font-bold text-amber-600 dark:text-amber-400">{model.evaluationScorePct}%</div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-black/30 border border-white/5 font-mono text-xs">
        <div className="flex items-center gap-1.5 text-slate-400 mb-1.5 text-[10px] uppercase tracking-wider">
          <Terminal size={12} className="text-violet-400" /> Live Stream Token Stream
        </div>
        <p className="text-slate-300 italic text-[11px] leading-relaxed line-clamp-2">
          "{model.sampleStreamChunk}"
        </p>
      </div>
    </div>
  );
};
