import React from 'react';
import type { InteractivePollSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { PollOptionBar } from './poll/PollOptionBar';
import { isBooleanTrue } from '../../utils/booleanGuards';
import { BarChart3, Users, QrCode, Radio, CheckCircle2 } from 'lucide-react';

export const InteractivePollSlide: React.FC<{ slide: InteractivePollSlideData }> = ({ slide }) => {
  const currentStep = useDeckStore((s) => s.activeStep);
  const options = slide.options || [];
  const isPolling = isBooleanTrue(slide.isPollingActive);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'AUDIENCE TELEMETRY'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs flex items-center gap-1">
            <BarChart3 size={12} /> Live Audience Polling Engine
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
        >
          {slide.title || 'Live Audience Poll: Enterprise Modernization'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Real-time audience telemetry and preference distribution collected via live WebSockets.'}
        </p>
      </div>

      <div className="plane-1-raised p-5 rounded-2xl border border-violet-500/30 bg-slate-900/60 z-10 flex items-center justify-between">
        <span className="font-ubuntu text-xl font-bold text-white max-w-4xl leading-snug">
          "{slide.questionPrompt}"
        </span>
        <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
          <div className="flex items-center gap-1.5 text-cyan-300">
            <Users size={16} />
            <span className="font-bold text-sm">{slide.totalVotesReceived}</span> Votes
          </div>
          {isPolling && (
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1.5 animate-pulse">
              <Radio size={12} /> Live Stream
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto items-center">
        <div className="col-span-8 space-y-4">
          {options.map((option, idx) => (
            <PollOptionBar
              key={option.id || idx}
              option={option}
              index={idx}
              currentStep={currentStep}
              accentColor="var(--pres-accent, #8b5cf6)"
            />
          ))}
        </div>

        <div className="col-span-4 plane-1-raised p-6 rounded-3xl border border-slate-800 bg-slate-900/40 flex flex-col items-center text-center justify-between h-[420px]">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mx-auto mb-4">
              <QrCode size={36} />
            </div>
            <h4 className="font-ubuntu text-lg font-bold text-white mb-2">Scan & Cast Vote</h4>
            <p className="font-poppins text-xs text-slate-400 leading-relaxed mb-4">
              Attendees can point device cameras to submit responses with sub-16ms WebSocket broadcast.
            </p>
          </div>
          <div className="w-full p-3 rounded-xl bg-slate-950/70 border border-slate-800 font-mono text-xs text-violet-300 break-all">
            {slide.qrCodeTargetUrl || 'https://vote.enterprise.internal/session-842'}
          </div>
          <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
            <CheckCircle2 size={12} className="text-emerald-400" /> Cryptographic Ballot Validation
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="text-violet-400 font-bold flex items-center gap-2">
          <Radio size={14} /> WebSocket Broadcast Protocol
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Damping Spring: k=420, zeta=0.85 • Zero Latency Drift
        </span>
      </div>
    </div>
  );
};
