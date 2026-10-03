import React from 'react';
import { Play, Activity, Mic2, ShieldCheck, Zap } from 'lucide-react';

export interface AudioPlaybackConsoleProps {
  audioCodec: string;
  synthesisLatencyMs: number;
  hasLivePlayback: boolean;
  activeTrackName?: string;
}

export const AudioPlaybackConsole: React.FC<AudioPlaybackConsoleProps> = ({
  audioCodec,
  synthesisLatencyMs,
  hasLivePlayback,
  activeTrackName,
}) => {
  return (
    <div className="grid grid-cols-12 gap-5 font-mono text-xs">
      <div className="col-span-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Play size={18} className={hasLivePlayback ? 'animate-pulse' : ''} />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-slate-200">
              {activeTrackName || 'Neural Vocoder Output'}
            </span>
            <span className="text-[11px] text-slate-400">
              Codec: {audioCodec} | Real-Time Diffusion
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col items-center">
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Zap size={11} className="text-amber-600 dark:text-amber-400" /> Latency
            </span>
            <span className="text-sm font-bold text-amber-800 dark:text-amber-300">
              {synthesisLatencyMs}ms
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col items-center">
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Activity size={11} className="text-emerald-400" /> Buffer
            </span>
            <span className="text-sm font-bold text-emerald-400">
              0 Underrun
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Mic2 size={18} />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-slate-200">Speaker Diarization</span>
            <span className="text-[11px] text-cyan-300">99.4% Match | Neutral Pitch</span>
          </div>
        </div>
        <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <ShieldCheck size={16} />
        </span>
      </div>
    </div>
  );
};
