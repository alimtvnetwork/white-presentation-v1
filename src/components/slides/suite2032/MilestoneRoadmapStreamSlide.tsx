// lint-allow: file-size reason="MilestoneRoadmapStreamSlide horizontal execution roadmap rail" max=120
import React from 'react';
import type { MilestoneRoadmapStreamSlideData } from '../../../types/suite2032Archetypes';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { Calendar, CheckCircle2, GitCommit, Sparkles } from 'lucide-react';

export const MilestoneRoadmapStreamSlide: React.FC<{
  slide: MilestoneRoadmapStreamSlideData;
  activeStep?: number;
}> = ({ slide, activeStep = 0 }) => {
  const stages = slide.roadmapStages || [];
  const tracks = slide.streamTracks || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg, #0b0f19)', color: 'var(--pres-text, #f8fafc)' }}
      className="relative w-[1920px] h-[1080px] p-[56px_72px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-base font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[var(--pres-accent,#6366f1)]/10 text-[var(--pres-accent,#818cf8)] border border-[var(--pres-accent,#6366f1)]/30 flex items-center gap-2">
              <Sparkles size={16} />
              {slide.kicker || 'EXECUTION CADENCE & ROADMAP'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">{slide.strategicInitiative}</span>
          </div>
          <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-2">{slide.title}</h1>
          <p className="text-base text-slate-400 max-w-[1200px] leading-relaxed">{slide.subtitle}</p>
        </div>
        <div className="p-4 px-6 rounded-2xl bg-white/[0.04] border border-white/10 text-right shrink-0">
          <div className="text-sm font-semibold text-slate-400">Program Lead</div>
          <div className="text-lg font-bold text-white">{slide.programLead || 'Alim Ul Karim'}</div>
        </div>
      </div>

      <div className="relative my-auto">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--pres-accent,#6366f1)] via-purple-500 to-emerald-400 -translate-y-1/2 z-0 opacity-40" />
        <div className="grid grid-cols-4 gap-6 relative z-10">
          {stages.map((stage, idx) => {
            const phase = resolveStepPhase(idx, activeStep);
            const style = getStepLifecycleStyle(phase);
            return (
              <div
                key={stage.stepIndex}
                style={style}
                className="p-6 rounded-2xl bg-[var(--pres-card-bg,rgba(255,255,255,0.03))] border border-white/10 flex flex-col justify-between transition-all duration-300 backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-base font-bold text-[var(--pres-accent,#818cf8)] px-3 py-1 rounded-full bg-[var(--pres-accent,#6366f1)]/20 border border-[var(--pres-accent,#6366f1)]/30">
                      {stage.timeQuarter}
                    </span>
                    <span className="font-mono text-sm text-slate-400 flex items-center gap-1.5"><Calendar size={14} /> {stage.targetReleaseDate}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">{stage.milestoneTitle}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{stage.deliverableSummary}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
                    <span>Progress</span>
                    <span className="font-mono font-bold text-white">{stage.completionPercentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-3">
                    <div className="h-full bg-gradient-to-r from-[var(--pres-accent,#6366f1)] to-emerald-400" style={{ width: `${stage.completionPercentage}%` }} />
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-emerald-400"><CheckCircle2 size={16} /> Attestation Signed</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
        {tracks.map((track) => (
          <div key={track.id} className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <GitCommit size={18} className="text-[var(--pres-accent,#818cf8)]" />
              <div>
                <div className="text-sm font-semibold text-white">{track.trackName}</div>
                <div className="text-sm text-slate-400">{track.ownerRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">{track.headcount} FTE</span>
              {track.isCriticalPath && (
                <span className="font-mono text-sm font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">CRITICAL</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
