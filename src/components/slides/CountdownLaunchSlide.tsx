import React from 'react';
import type { CountdownLaunchSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { LaunchGatePill } from './countdown/LaunchGatePill';
import { Rocket, ShieldCheck, Timer, AlertOctagon, UserCheck } from 'lucide-react';

export const CountdownLaunchSlide: React.FC<{ slide: CountdownLaunchSlideData }> = ({ slide }) => {
  const currentStep = useDeckStore((s) => s.activeStep);
  const gates = slide.launchGates || [];
  const urgencyColors: Record<string, string> = {
    normal: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    impending: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    critical: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30">
            {slide.kicker || 'COUNTDOWN PROTOCOL'}
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase border ${urgencyColors[slide.urgencyState] || urgencyColors.impending}`}>
            Urgency: {slide.urgencyState || 'Impending'}
          </span>
        </div>
        <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2">
          {slide.title || 'Production Launch T-Minus Countdown Protocol'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Mission control deployment gates and global DNS traffic cutover synchronization.'}
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto items-stretch h-[600px]">
        <div className="col-span-8 flex flex-col justify-between space-y-4">
          <div className="plane-2-elevated p-6 rounded-3xl border border-amber-500/30 bg-slate-900/80 flex flex-col items-center justify-center">
            <span className="font-mono text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
              <Timer size={14} /> T-Minus Countdown Clock
            </span>
            <div className="font-mono text-6xl font-black text-white tracking-widest my-2">T - 02 : 14 : 38 : 45</div>
            <div className="flex items-center gap-12 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <span>Days</span><span>Hours</span><span>Mins</span><span>Secs</span>
            </div>
          </div>
          <div className="space-y-3 flex-1 overflow-hidden">
            {gates.map((gate, idx) => (
              <LaunchGatePill key={gate.id || idx} gate={gate} index={idx} currentStep={currentStep} accentColor="var(--pres-accent, #f59e0b)" />
            ))}
          </div>
        </div>

        <div className="col-span-4 plane-1-raised p-6 rounded-3xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400"><Rocket size={24} /></div>
              <div>
                <h4 className="font-ubuntu text-base font-bold text-white">Mission Control</h4>
                <p className="font-mono text-xs text-amber-800 dark:text-amber-300">{slide.launchStageName || 'Stage 4: Cutover'}</p>
              </div>
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-slate-400 text-[11px] mb-1 flex items-center gap-1.5"><UserCheck size={12} className="text-amber-600 dark:text-amber-400" /> Launch Authority</div>
                <div className="text-white font-bold text-sm">{slide.launchDirectorName || 'Alim Ul Karim'}</div>
                <div className="text-slate-400 text-[11px]">{slide.launchDirectorTitle || 'Chief Software Engineer'}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-slate-400 text-[11px] mb-1">Target Cutover Timestamp</div>
                <div className="text-cyan-300 font-bold">{slide.targetIsoTimestamp || '2026-10-04T04:00:00Z'}</div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold flex items-center justify-center gap-1.5">
              <ShieldCheck size={14} /> Mission Status: GO FOR LAUNCH
            </div>
            <p className="font-poppins text-xs text-slate-300 mt-1">All 12 Quality Gates Verified</p>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-2"><AlertOctagon size={14} /> Deployment Gate Protocol</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Rollback Abort Armed • Canary Traffic: 5% Routed • Zero Downtime Guaranteed</span>
      </div>
    </div>
  );
};
