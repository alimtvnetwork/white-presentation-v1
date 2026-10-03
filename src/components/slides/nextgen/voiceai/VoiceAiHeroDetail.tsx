import React from 'react';
import type { VoicePipelineStage } from '../../../../types/nextGenArchetypes';
import { CheckCircle2, Zap, AudioWaveform, User, Bot, ShieldCheck } from 'lucide-react';

interface VoiceAiHeroDetailProps {
  stage: VoicePipelineStage;
  stepIndex: number;
  userTranscript: string;
  agentTranscript: string;
}

export const VoiceAiHeroDetail: React.FC<VoiceAiHeroDetailProps> = ({ stage, stepIndex, userTranscript, agentTranscript }) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border-hover)', color: 'var(--pres-text)' }}
      className="col-span-7 plane-1-raised rounded-3xl p-7 border flex flex-col justify-between h-full bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/5 relative overflow-hidden"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-indigo-600/20 text-slate-900 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-2">
            <AudioWaveform size={16} className="text-indigo-400" />
            Active Mesh Pipeline Stage 0{stepIndex + 1}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle2 size={15} /> Streaming: {stage.isStreamingActive ? 'LIVE' : 'BUFFERING'}
          </span>
        </div>

        <h2 className="text-4xl lg:text-[42px] font-black font-ubuntu leading-tight tracking-tight mb-2 text-slate-900 dark:text-white">
          {stage.stageName}
        </h2>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-sm mb-6 flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-black/20 dark:bg-white/5 border border-white/5 font-semibold text-indigo-300">
            {stage.modelName}
          </span>
          <span>Budget: {stage.budgetLatencyMs}ms Target</span>
        </p>

        <div className="p-5 rounded-2xl bg-black/20 dark:bg-black/40 border border-white/10 mb-6 flex items-center justify-between">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Observed Stage Latency
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-emerald-400">
              {stage.actualLatencyMs}ms
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              SLA Headroom
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-sky-400">
              +{stage.budgetLatencyMs - stage.actualLatencyMs}ms
            </div>
          </div>
          <div className="w-[1px] h-16 bg-slate-700/50" />
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider block mb-1">
              Throughput
            </span>
            <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-indigo-400">
              {stage.throughputTokensOrAudioPerSec > 1000 ? `${(stage.throughputTokensOrAudioPerSec/1000).toFixed(0)}k` : stage.throughputTokensOrAudioPerSec}/s
            </div>
          </div>
        </div>

        <div className="space-y-2.5 font-mono text-xs">
          <div className="p-3 rounded-xl bg-black/10 dark:bg-white/5 border border-white/5 flex items-start gap-2.5">
            <User size={14} className="text-sky-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-slate-400 uppercase tracking-wider text-[10px] block">Caller Audio Stream</span>
              <p className="text-slate-800 dark:text-slate-200 font-semibold">{userTranscript}</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-start gap-2.5">
            <Bot size={14} className="text-indigo-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-indigo-300 uppercase tracking-wider text-[10px] block">Synthesized Response</span>
              <p className="text-slate-800 dark:text-slate-200 font-semibold">{agentTranscript}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between font-mono text-sm">
        <span className="flex items-center gap-2 text-slate-700 dark:text-emerald-400">
          <ShieldCheck size={16} /> WebRTC DataChannel + Opus 48kHz Stereo Mesh
        </span>
        <span className="flex items-center gap-2 text-slate-700 dark:text-sky-400">
          <Zap size={16} /> Instant Acoustic Cancellation & Speculative Prefetch
        </span>
      </div>
    </div>
  );
};
