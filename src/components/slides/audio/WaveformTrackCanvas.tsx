import React from 'react';
import type { AudioTrackChannel } from '../../../types/kineticSuiteArchetypes';
import { Volume2, Radio } from 'lucide-react';

export interface WaveformTrackCanvasProps {
  track: AudioTrackChannel;
  isActive: boolean;
  hasLivePlayback: boolean;
}

export const WaveformTrackCanvas: React.FC<WaveformTrackCanvasProps> = ({
  track,
  isActive,
  hasLivePlayback,
}) => {
  const amplitudes = track.waveformAmplitudes.length > 0
    ? track.waveformAmplitudes
    : [0.15, 0.4, 0.7, 0.9, 0.6, 0.3, 0.8, 0.5, 0.2];

  return (
    <div
      className={`p-4 rounded-2xl border transition-all duration-300 font-mono text-xs flex flex-col gap-3 ${
        isActive
          ? 'bg-amber-500/10 border-amber-500/40 ring-1 ring-amber-500/30'
          : 'bg-slate-900/60 border-slate-800 text-slate-400'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Volume2 size={15} className={isActive ? 'text-amber-700 dark:text-amber-400' : 'text-slate-500'} />
          <span className={`font-bold ${isActive ? 'text-slate-100' : 'text-slate-400'}`}>
            {track.trackName}
          </span>
          {isActive && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40 flex items-center gap-1">
              <Radio size={10} className={hasLivePlayback ? 'animate-pulse' : ''} />
              ACTIVE CHANNEL
            </span>
          )}
        </div>
        <span className="text-[11px] text-slate-400">
          {track.samplingRateKhz} kHz Lossless
        </span>
      </div>

      <div className="h-16 flex items-center gap-1.5 px-3 py-2 bg-slate-950/80 rounded-xl border border-slate-800/80 overflow-hidden">
        {amplitudes.map((amp, idx) => {
          const heightPercent = Math.max(12, Math.round(amp * 100));
          return (
            <div
              key={idx}
              className="flex-1 flex items-center justify-center h-full"
            >
              <div
                style={{ height: `${heightPercent}%` }}
                className={`w-full rounded-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-t from-amber-500/60 to-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.4)]'
                    : 'bg-slate-700/60'
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
