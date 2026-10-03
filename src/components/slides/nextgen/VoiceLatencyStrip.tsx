import React from 'react';
import type { VoiceAiConversationalMeshSlideData } from '../../../types/nextGenArchetypes';
import { Radio, User, Bot, Sparkles, Volume2, Activity } from 'lucide-react';

interface VoiceLatencyStripProps {
  variant: 'header' | 'footer';
  metrics?: VoiceAiConversationalMeshSlideData['turnTakingMetrics'];
  session?: VoiceAiConversationalMeshSlideData['activeSession'];
  acoustic?: VoiceAiConversationalMeshSlideData['acousticModel'];
}

export const VoiceLatencyStrip: React.FC<VoiceLatencyStripProps> = ({
  variant,
  metrics,
  session,
  acoustic,
}) => {
  if (variant === 'header') {
    const m = metrics || { endToEndLatencyMs: 196, p99LatencyMs: 242, interruptionLatencyMs: 28 };
    return (
      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">End-to-End Latency</span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{m.endToEndLatencyMs}ms</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">P99 Turn-Taking</span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">{m.p99LatencyMs}ms</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">Barge-In Latency</span>
          <span className="text-xl font-bold text-slate-900 dark:text-violet-400">{m.interruptionLatencyMs}ms</span>
        </div>
      </div>
    );
  }

  const s = session || { sessionId: 'sess-voice-9821-opus', audioCodec: 'OPUS', sampleRateKhz: 48, userTranscript: 'Please verify our active multi-cloud disaster recovery quorum status.', agentResponseTranscript: 'All three cloud regions are reporting healthy Raft consensus with zero replication lag.' };
  const ac = acoustic || { naturalnessMosScore: 4.82, voiceId: 'Aura-Executive-Neural-v3' };

  return (
    <div className="z-10 space-y-3 font-mono text-xs">
      <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-2">
            <Radio size={14} className="text-violet-400 animate-pulse" />
            Live Full-Duplex Session: {s.sessionId} ({s.audioCodec} {s.sampleRateKhz}kHz)
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 text-[10px] font-bold">
            Zero Barge-In Clipping
          </span>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-3 rounded-xl bg-black/15 dark:bg-black/35 border border-white/5 flex items-start gap-3">
            <User size={16} className="text-sky-400 mt-0.5 shrink-0" />
            <div>
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase block mb-0.5">Human Speaker</span>
              <p className="text-xs text-slate-800 dark:text-slate-200 font-sans italic">&ldquo;{s.userTranscript}&rdquo;</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-start gap-3">
            <Bot size={16} className="text-violet-400 mt-0.5 shrink-0" />
            <div>
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase block mb-0.5">Autonomous Agent Voice</span>
              <p className="text-xs text-slate-800 dark:text-slate-200 font-sans italic">&ldquo;{s.agentResponseTranscript}&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised rounded-2xl p-3.5 px-6 border border-slate-700/60 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-violet-400" />
            <span style={{ color: 'var(--pres-text-muted)' }}>Naturalness MOS:</span>
            <span className="font-bold text-slate-900 dark:text-emerald-400">{ac.naturalnessMosScore} / 5.0</span>
          </div>
          <div className="w-[1px] h-4 bg-slate-700/50" />
          <div className="flex items-center gap-2">
            <Volume2 size={14} className="text-sky-400" />
            <span style={{ color: 'var(--pres-text-muted)' }}>Neural Synthesizer:</span>
            <span className="font-bold text-slate-900 dark:text-slate-200">{ac.voiceId} (Prosody Active)</span>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
          <Activity size={13} className="text-emerald-400" /> Sub-300ms SLA Verified
        </span>
      </div>
    </div>
  );
};
