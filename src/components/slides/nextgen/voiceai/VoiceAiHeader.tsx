import React from 'react';
import { Mic, Radio } from 'lucide-react';

interface VoiceAiHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  e2eLatencyMs: number;
  p99LatencyMs: number;
  interruptionLatencyMs: number;
  isEditMode: boolean;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

export const VoiceAiHeader: React.FC<VoiceAiHeaderProps> = ({
  kicker,
  title,
  subtitle,
  e2eLatencyMs,
  p99LatencyMs,
  interruptionLatencyMs,
  isEditMode,
  onTitleChange,
  onSubtitleChange,
}) => {
  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <Mic size={16} className="text-indigo-500" />
            {kicker || 'REALTIME CONVERSATIONAL AUDIO MESH'}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-indigo-500/10 text-slate-900 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-1.5">
            <Radio size={15} className="text-indigo-400" />
            Sub-300ms Full-Duplex VAD / ASR / LLM / TTS Pipeline
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onTitleChange(e.currentTarget.textContent || '')}
        >
          {title || 'Voice AI Realtime Conversational Mesh'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-4xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onSubtitleChange(e.currentTarget.textContent || '')}
        >
          {subtitle || 'Zero-Jitter WebRTC Transport, Streaming Acoustic Flow Matching, and Instant Barge-In Interruption'}
        </p>
      </div>

      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            E2E Turn-Taking
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{e2eLatencyMs}ms SLA</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            P99 Latency
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">{p99LatencyMs}ms</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Barge-In Trip
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-indigo-400">{interruptionLatencyMs}ms</span>
        </div>
      </div>
    </div>
  );
};
