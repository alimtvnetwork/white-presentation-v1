import React from 'react';
import type { CloudMigrationWaveStepperSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { Cloud, CheckCircle2, Sparkles, Server, ArrowRight, ShieldCheck } from 'lucide-react';

export const CloudMigrationWaveStepperSlide: React.FC<{
  slide: CloudMigrationWaveStepperSlideData;
  activeStep?: number;
}> = ({ slide, activeStep }) => {
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = slide?.migrationWaves || [];
  const currentStep = Math.min(Math.max(0, (activeStep !== undefined ? activeStep : storeStep) || 0), stages.length - 1);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Cloud size={18} /> {slide?.kicker || 'ENTERPRISE CLOUD MIGRATION STEPPER'}
            </span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)] flex items-center gap-2">
              <Server size={16} /> {slide?.sourceDatacenterLocation || 'On-Premises Core DC'} <ArrowRight size={14} /> {slide?.destinationCloudRegion || 'Sovereign Cloud us-east-1'}
            </span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5"><ShieldCheck size={16} /> Security Gate Passed</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2"><span className="text-[var(--pres-text-muted)]">Migration Wave:</span><span className="font-bold text-[16px] text-[var(--pres-accent)]">{currentStep + 1} of {stages.length}</span></div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Architect: Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto z-10 h-[520px]">
        {stages.map((w, idx) => {
          const phase = resolveStepPhase(idx, currentStep);
          const isCurrent = phase === 'active';
          const isDone = phase === 'completed';
          return (
            <div key={w.stepIndex} onClick={() => jumpToStep(idx)} style={getStepLifecycleStyle(phase)} className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between cursor-pointer transition-all ${isCurrent ? 'bg-[var(--pres-bg-card)] border-[var(--pres-accent)] ring-2 ring-[var(--pres-accent)]/40 shadow-xl animate-pipeline-flow' : 'bg-[var(--pres-bg-card)] border-[var(--pres-border)]'}`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[16px] font-bold text-[var(--pres-accent)]">WAVE 0{w.waveNumber} • {w.migrationPattern}</span>
                  {isDone ? <span className="font-mono text-[16px] text-emerald-700 dark:text-emerald-300 flex items-center gap-1"><CheckCircle2 size={18} /> Cutover</span> : isCurrent ? <span className="font-mono text-[16px] text-[var(--pres-accent)] flex items-center gap-1"><Sparkles size={18} /> In Flight</span> : <span className="font-mono text-[16px] text-[var(--pres-text-muted)]">Planned</span>}
                </div>
                <h3 className="text-[22px] font-bold text-[var(--pres-text)] mt-4 mb-2">{w.waveTitle}</h3>
                <p className="text-[15px] text-[var(--pres-text-muted)] leading-relaxed mb-4">{w.waveDeliverableSummary}</p>
                <div className="space-y-2 font-mono text-[14px]">
                  <div className="p-2 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] flex justify-between">
                    <span className="text-[var(--pres-text-muted)]">Target Region</span>
                    <span className="text-[var(--pres-text)] font-bold">{w.targetCloudRegion}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] flex justify-between">
                    <span className="text-[var(--pres-text-muted)]">Cutover Window</span>
                    <span className="text-emerald-700 dark:text-emerald-300 font-bold">&lt; {w.cutoverDowntimeMinutes}m</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--pres-border)] flex items-center justify-between font-mono">
                <div><div className="text-[14px] text-[var(--pres-text-muted)]">Servers</div><div className="text-[18px] font-bold text-[var(--pres-text)]">{w.serverCountMigrated} VMs</div></div>
                <div className="text-right"><div className="text-[14px] text-[var(--pres-text-muted)]">DB Storage</div><div className="text-[18px] font-bold text-[var(--pres-accent)]">{w.databaseStorageTerabytes} TB</div></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text-muted)]"><Server size={18} className="text-[var(--pres-accent)]" /> Workload Inventory:</div>
          {(slide?.workloadInventory || []).slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] font-mono text-[14px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-bold text-[var(--pres-text)]">{item.workloadName}</span>
              <span className="text-[var(--pres-text-muted)]">({item.criticalityTier} • {item.sourceVirtualMachinesCount} VMs)</span>
            </div>
          ))}
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Scope: <span className="text-[16px] font-bold text-[var(--pres-accent)]">{slide?.totalServersInScope || 0} Servers / {slide?.totalStoragePetabytes || 0} PB</span> • Lead: <span className="font-bold text-[var(--pres-text)]">Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>
    </div>
  );
};
