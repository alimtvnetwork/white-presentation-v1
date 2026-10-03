import React from 'react';
import type { MeetingTranscriptSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { SpeakerBubble } from './transcript/SpeakerBubble';
import { Radio, Laptop, Smartphone, Tablet, AudioWaveform } from 'lucide-react';

export const MeetingTranscriptSlide: React.FC<{ slide: MeetingTranscriptSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const turns = slide.speakerTurns || slide.transcriptSegments || [];
  const devices = slide.syncedDevices || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
            <Radio size={12} className="animate-pulse" /> {slide.kicker || 'AUDIO INTELLIGENCE'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">
            • {slide.meetingTitle || 'Architecture Sync'} ({slide.durationFormatted || '00:45:18'})
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Real-Time Meeting Diarization & Sync Fabric'}
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto z-10 items-stretch">
        <div className="col-span-8 flex flex-col gap-4">
          {turns.map((turn, idx) => (
            <SpeakerBubble
              key={turn.id || idx}
              turn={turn}
              isActive={idx === activeStep}
              isPast={idx < activeStep}
              isFuture={idx > activeStep}
            />
          ))}
        </div>

        <div
          style={{
            backgroundColor: 'var(--pres-card-bg, rgba(255, 255, 255, 0.05))',
            borderColor: 'var(--pres-card-border, rgba(255, 255, 255, 0.1))',
          }}
          className="col-span-4 p-6 rounded-3xl border flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">3-Device Fan-Out Sync</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                CRDT Lock Active
              </span>
            </div>
            <div className="space-y-3 font-mono">
              {devices.map((device, dIdx) => (
                <div key={device.id || dIdx} className="p-4 rounded-2xl bg-black/20 border border-white/5 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-bold text-slate-200">
                      {device.deviceType === 'desktop' && <Laptop size={16} className="text-violet-400" />}
                      {device.deviceType === 'phone' && <Smartphone size={16} className="text-emerald-400" />}
                      {device.deviceType === 'tablet' && <Tablet size={16} className="text-cyan-400" />}
                      {device.deviceName}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">{device.latencyMs}ms</span>
                  </div>
                  <span className="text-xs" style={{ color: 'var(--pres-text-muted)' }}>{device.syncState}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 font-mono text-xs flex items-center justify-between">
            <span className="text-violet-300 font-bold flex items-center gap-1.5"><AudioWaveform size={14} /> WebRTC Data Fabric</span>
            <span className="text-emerald-400 font-bold">Sub-16ms Sync</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="text-emerald-400 font-bold">48kHz Lossless FLAC Ingestion • Real-Time Diarization Engine</span>
        <span className="opacity-80">Alim Ul Karim, Chief Software Engineer</span>
      </div>
    </div>
  );
};
