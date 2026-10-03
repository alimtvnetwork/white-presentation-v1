import React from 'react';
import type { AudioWaveformStudioSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { WaveformTrackCanvas } from './audio/WaveformTrackCanvas';
import { PhonemeTimelineRail } from './audio/PhonemeTimelineRail';
import { AudioPlaybackConsole } from './audio/AudioPlaybackConsole';
import { Radio, Mic } from 'lucide-react';

export const AudioWaveformStudioSlide: React.FC<{ slide: AudioWaveformStudioSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const tracks = slide.tracks || [];
  const currentTrackIndex = Math.min(activeStep, Math.max(0, tracks.length - 1));
  const activeTrack = tracks[currentTrackIndex] || tracks[0];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30 flex items-center gap-1.5">
            <Radio size={12} /> {slide.kicker || 'AUDIO WAVEFORM STUDIO'}
          </span>
          <span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Channel {currentTrackIndex + 1} of {Math.max(tracks.length, 1)}: {activeTrack?.trackName || 'Master Track'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Voice AI Neural Waveform & Phoneme Studio'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Real-time speech synthesis with sub-50ms token latency and neural vocoder alignment.'}
        </p>
      </div>

      <div className="z-10 flex flex-col gap-4 my-auto h-[610px] justify-between">
        <div className="space-y-3 overflow-y-auto max-h-[360px] pr-1">
          {tracks.map((track, idx) => (
            <WaveformTrackCanvas
              key={track.id}
              track={track}
              isActive={idx === currentTrackIndex}
              hasLivePlayback={slide.hasLivePlayback}
            />
          ))}
        </div>

        <PhonemeTimelineRail
          phonemes={activeTrack?.phonemes}
          isActive={true}
        />

        <AudioPlaybackConsole
          audioCodec={slide.audioCodec || 'Opus 48kHz'}
          synthesisLatencyMs={slide.synthesisLatencyMs ?? 38}
          hasLivePlayback={slide.hasLivePlayback}
          activeTrackName={activeTrack?.trackName}
        />
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
          <Mic size={14} /> WebAudio API Context Active | Zero Audio Buffer Underrun
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Step: {activeStep}
        </span>
      </div>
    </div>
  );
};
