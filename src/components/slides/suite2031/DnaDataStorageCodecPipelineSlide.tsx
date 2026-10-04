// lint-allow: file-size reason="DnaDataStorageCodecPipelineSlide kinetic 4-step workflow" max=450
import React from 'react';
import type {
  DnaDataStorageCodecPipelineSlideData,
  DnaCodecStage,
  DnaOligoBlock,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  Dna,
  Database,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Binary,
  Microscope,
  HardDrive,
} from 'lucide-react';

const DEF_STAGES: DnaCodecStage[] = [
  {
    stepIndex: 0,
    stageName: 'Quaternary Binary Mapping',
    stageSubtitle: 'Base-4 translation of binary bits into canonical A/C/G/T quaternary nucleotide alphabet',
    encodingDensityPetabytesPerGram: 180.0,
    synthesisThroughputKbps: 120.0,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Reed-Solomon Fountain Sharding',
    stageSubtitle: 'Luby transform droplet parity generation with homopolymer run-length suppression',
    encodingDensityPetabytesPerGram: 215.4,
    synthesisThroughputKbps: 145.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Enzymatic Oligo Synthesis',
    stageSubtitle: 'TdT polymerase template-free chemical assembly in parallel microfluidic flow cells',
    encodingDensityPetabytesPerGram: 215.4,
    synthesisThroughputKbps: 185.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Nanopore Sequencing Readback',
    stageSubtitle: 'Ionic current modulation decoding, consensus alignment, and zero-loss payload reconstruction',
    encodingDensityPetabytesPerGram: 215.4,
    synthesisThroughputKbps: 220.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_OLIGOS: DnaOligoBlock[] = [
  {
    id: 'oligo-01',
    oligoIndex: 1,
    sequenceTag: 'ATCG-5912',
    nucleotideLength: 150,
    gcContentPercentage: 49.2,
    isSynthesized: true,
    hasErrorCorrectionVerified: true,
  },
  {
    id: 'oligo-02',
    oligoIndex: 2,
    sequenceTag: 'TACG-8821',
    nucleotideLength: 150,
    gcContentPercentage: 51.0,
    isSynthesized: true,
    hasErrorCorrectionVerified: true,
  },
  {
    id: 'oligo-03',
    oligoIndex: 3,
    sequenceTag: 'CGAT-1044',
    nucleotideLength: 150,
    gcContentPercentage: 48.7,
    isSynthesized: true,
    hasErrorCorrectionVerified: false,
  },
  {
    id: 'oligo-04',
    oligoIndex: 4,
    sequenceTag: 'GCAT-9031',
    nucleotideLength: 150,
    gcContentPercentage: 52.4,
    isSynthesized: false,
    hasErrorCorrectionVerified: false,
  },
];

export const DnaDataStorageCodecPipelineSlide: React.FC<{
  slide?: DnaDataStorageCodecPipelineSlideData;
  data?: DnaDataStorageCodecPipelineSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.codecStages?.length ? data.codecStages : DEF_STAGES;
  const oligos = data?.oligoBlocks?.length ? data.oligoBlocks : DEF_OLIGOS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isPipelineActive = data?.isCodecPipelineActive ?? true;
  const hasEnzymatic = data?.hasEnzymaticSynthesisActive ?? true;
  const hasHomopolymerSuppressed = data?.hasHomopolymerRunSuppressed ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.0rem)' }}
              className="font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"
            >
              <Dna size={16} className="text-emerald-500" />
              {data?.kicker || 'MOLECULAR ARCHIVAL STORAGE & DNA CODEC'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <HardDrive size={14} /> Codec: {data?.codecIdentifier || 'DNA-FOUNTAIN-EXA-01'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Database size={14} className="text-cyan-500" />
              Density: {data?.dataDensityPetabytesPerGram ?? 215.4} PB/gram
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Binary size={14} className="text-purple-500" />
              Payload: {data?.rawPayloadMegabytes ?? 1024.0} MB
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'DNA Molecular Data Storage Codec Pipeline'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Exascale quaternary nucleotide synthesis, Luby transform fountain sharding, and enzymatic chemical assembly.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Storage Density</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.encodingDensityPetabytesPerGram.toFixed(1)} PB/g
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Throughput</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.synthesisThroughputKbps.toFixed(1)} kbps
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Kinetic 4-Step Nav Rail */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;
          const lifecycleStyle = getStepLifecycleStyle(
            isActive ? 'active' : isCompleted ? 'completed' : 'future',
            'var(--pres-accent)',
            'var(--pres-border)'
          );

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              style={lifecycleStyle}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 opacity-75'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-[0.38] text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    isActive
                      ? 'bg-[var(--pres-accent)] text-white'
                      : isCompleted
                      ? 'bg-emerald-500 text-white dark:text-slate-900'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <div>
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[14px] opacity-75 font-normal">
                    {st.encodingDensityPetabytesPerGram} PB/g | {st.synthesisThroughputKbps} kbps
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                Step {idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Oligo Array & Nucleotide Base Pairs */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Microscope size={16} className="text-[var(--pres-accent)]" /> Nucleotide Oligo Array & Parity Matrix
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {oligos.map((oligo, oIdx) => {
                const isCurrentOligo = oIdx === currentStep || (currentStep >= 2 && oIdx >= 2);
                const isDone = oligo.isSynthesized;
                return (
                  <div
                    key={oligo.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentOligo
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Dna size={16} className={isDone ? 'text-emerald-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          Oligo #{oligo.oligoIndex.toString().padStart(2, '0')}: {oligo.sequenceTag}
                        </span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isDone
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isDone ? 'Synthesized' : 'Queued in Buffer'}
                        </span>
                        {oligo.hasErrorCorrectionVerified && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> RS Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Len: {oligo.nucleotideLength} nt
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>GC: {oligo.gcContentPercentage.toFixed(1)}%</span>
                          <ArrowRight size={12} />
                          <span className={oligo.gcContentPercentage >= 45 && oligo.gcContentPercentage <= 55 ? 'text-emerald-500' : 'text-purple-500'}>
                            {oligo.gcContentPercentage >= 45 && oligo.gcContentPercentage <= 55 ? 'OPTIMAL' : 'BALANCED'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isDone ? 'bg-emerald-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${Math.min(100, oligo.gcContentPercentage * 1.8)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Error Rate: &lt; 10^-9 (Reed-Solomon Fountain Protected)</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Quaternary Base-4 Encoded
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Binary size={16} className="text-emerald-500" />
              Exascale Quaternary Density: 215.4 Petabytes / gram archival substrate
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              10,000+ Year Data Stability Guarantee
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-emerald-500" /> Stage {currentStep + 1} Molecular Mechanics
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
                Phase {currentStep + 1} Active
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[14px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Encoding Density</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.encodingDensityPetabytesPerGram.toFixed(1)} PB/g
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Throughput</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.synthesisThroughputKbps.toFixed(1)} kbps
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Codec Pipeline Status</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isPipelineActive ? 'Online & Streaming' : 'Standby'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Enzymatic Synthesis Array</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasEnzymatic ? 'TdT Polymerase Engaged' : 'Phosphoramidite Chemical'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Homopolymer Run Suppression</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {hasHomopolymerSuppressed ? 'Max-3 Repeat Clamped' : 'Unconstrained'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Molecular data codec processes exascale quaternary strands.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div
        style={{ backdropFilter: 'blur(14px)' }}
        className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-[14px] z-10"
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Codec Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Enzymatic Array Active | Reed-Solomon Fountain Parity Verified | 10,000+ Year Shelf-Life
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Molecular Codec
          </span>
        </div>
      </div>
    </div>
  );
};

export default DnaDataStorageCodecPipelineSlide;
