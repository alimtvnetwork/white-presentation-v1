// lint-allow: file-size reason="FrontierMultimodalAlignmentMatrixSlide flat sovereign multimodal alignment matrix" max=420
import React from 'react';
import type {
  FrontierMultimodalAlignmentMatrixSlideData,
  MultimodalAlignmentVectorNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Eye,
  Volume2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  Activity,
  Layers,
} from 'lucide-react';

const DEF_VECTORS: MultimodalAlignmentVectorNode[] = [
  {
    id: 'vec-01',
    modalityCombination: 'Vision + Text (Visual Jailbreaks)',
    attackVectorType: 'Steganographic Typographic Perturbation',
    adversarialRobustnessScorePercentage: 99.1,
    falsePositiveRefusalPercentage: 0.8,
    isSafetyBoundaryCalibrated: true,
    hasCrossModalJailbreakBlocked: true,
  },
  {
    id: 'vec-02',
    modalityCombination: 'Audio + Language (Inaudible Commands)',
    attackVectorType: 'Ultrasound Frequency Pitch Injection',
    adversarialRobustnessScorePercentage: 98.4,
    falsePositiveRefusalPercentage: 1.2,
    isSafetyBoundaryCalibrated: true,
    hasCrossModalJailbreakBlocked: true,
  },
  {
    id: 'vec-03',
    modalityCombination: 'Embodied Action + Sensor Telemetry',
    attackVectorType: 'Actuator Saturation Exploitation',
    adversarialRobustnessScorePercentage: 99.4,
    falsePositiveRefusalPercentage: 0.4,
    isSafetyBoundaryCalibrated: true,
    hasCrossModalJailbreakBlocked: true,
  },
];

export const FrontierMultimodalAlignmentMatrixSlide: React.FC<{
  slide?: FrontierMultimodalAlignmentMatrixSlideData;
  data?: FrontierMultimodalAlignmentMatrixSlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const vectors = data?.alignmentVectors?.length ? data.alignmentVectors : DEF_VECTORS;
  const robustness = data?.blendedAdversarialRobustnessPercentage ?? 98.8;
  const attackCount = data?.redTeamAttackScenariosCount ?? 50000;
  const matrixId = data?.matrixIdentifier || 'MULTIMODAL-ALIGN-MATRIX-2030';
  const hasGlow = data?.hasTelemetryGlow ?? true;

  const getModalityIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Eye size={18} className="text-cyan-600 dark:text-cyan-400" />;
      case 1:
        return <Volume2 size={18} className="text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Cpu size={18} className="text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_76px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[clamp(0.875rem,1.2vw,1.0rem)] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-2">
              <ShieldCheck size={16} className="text-cyan-600 dark:text-cyan-400" />
              {data?.kicker || 'FRONTIER AI SAFETY & ALIGNMENT RESEARCH'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Layers size={14} /> Matrix: {matrixId}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400" />
              Boundary: CALIBRATED
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-2">
              <Zap size={14} className="text-indigo-600 dark:text-indigo-400" />
              Probes: {attackCount.toLocaleString()} Scenarios
            </span>
          </div>

          <h1
            className="text-[clamp(2.0rem,2.8vw,2.75rem)] font-ubuntu font-bold tracking-tight mb-2 leading-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Frontier Multimodal AI Alignment Matrix'}
          </h1>
          <p
            className="font-poppins text-[clamp(1.0rem,1.4vw,1.125rem)] text-slate-700 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Cross-modal adversarial robustness and refusal boundary calibration across vision, audio, and language.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center gap-6 font-mono">
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Blended Robustness</span>
            <span className="text-[clamp(2.75rem,5.0vw,4.5rem)] font-bold leading-none text-emerald-700 dark:text-emerald-400">
              {robustness.toFixed(1)}%
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Attack Scenarios</span>
            <span className="text-indigo-700 dark:text-indigo-400 font-bold text-[24px]">
              {(attackCount / 1000).toFixed(0)}k Probes
            </span>
            <span className="block text-[14px] text-slate-500 dark:text-slate-400">
              Refusal Drift: &lt; 0.2%
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Lead Architect</span>
            <span className="text-slate-900 dark:text-slate-100 font-bold text-[16px] block">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
            <span className="text-[14px] text-[var(--pres-accent)] font-semibold">
              {data?.leadRole || 'Chief Software Engineer'}
            </span>
          </div>
        </div>
      </div>

      {/* Main 3-Sector Multimodal Alignment Bento Grid */}
      <div className="grid grid-cols-3 gap-6 z-10 my-auto items-stretch h-[540px]">
        {vectors.map((vec, idx) => {
          return (
            <div
              key={vec.id}
              className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] p-6 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    {getModalityIcon(idx)} Modality Vector 0{idx + 1}
                  </span>
                  <span className="font-mono text-[14px] px-3 py-1 rounded-full font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                    JAILBREAKS BLOCKED
                  </span>
                </div>

                <div className="mt-4">
                  <div className="font-ubuntu font-bold text-[18px] text-slate-900 dark:text-slate-100 leading-tight mb-2">
                    {vec.modalityCombination}
                  </div>
                  <div className="font-mono text-[14px] text-slate-600 dark:text-slate-400">
                    Adversarial Threat: <strong className="text-slate-800 dark:text-slate-200">{vec.attackVectorType}</strong>
                  </div>
                </div>

                {/* Robustness Metric Box */}
                <div className="mt-5 p-4 rounded-xl bg-[var(--pres-bg)]/80 border border-[var(--pres-border)] font-mono">
                  <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Robustness Score</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-[34px] font-bold text-emerald-700 dark:text-emerald-400 leading-none">
                      {vec.adversarialRobustnessScorePercentage.toFixed(1)}%
                    </span>
                    <span className="text-[14px] text-emerald-600 dark:text-emerald-400 font-semibold">Immunity Rate</span>
                  </div>

                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${vec.adversarialRobustnessScorePercentage}%` }}
                    />
                  </div>
                </div>

                {/* False Refusal Rate Box */}
                <div className="mt-4 p-4 rounded-xl bg-[var(--pres-bg)]/80 border border-[var(--pres-border)] font-mono">
                  <div className="flex justify-between items-center text-[14px]">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Activity size={14} className="text-cyan-600 dark:text-cyan-400" /> False Positive Refusal
                    </span>
                    <span className="font-bold text-cyan-700 dark:text-cyan-400">
                      {vec.falsePositiveRefusalPercentage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: `${vec.falsePositiveRefusalPercentage * 20}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 size={15} /> Safety Boundary Calibrated
                </span>
                <span>Active 0% Leakage</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 2 Telemetry Footer */}
      <div className={`plane-1-raised z-10 px-6 py-3.5 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center justify-between font-mono text-[14px] text-slate-700 dark:text-slate-300 shadow-md ${hasGlow ? 'shadow-emerald-500/10' : ''}`}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            SAFETY STATUS: CROSS-MODAL IMMUNITY VERIFIED
          </span>
          <span>Cross-Modal Indirect Injection: <strong className="text-emerald-700 dark:text-emerald-400">0% BREACH</strong></span>
          <span>Universal Perturbations: <strong className="text-[var(--pres-accent)]">PRUNED</strong></span>
        </div>
        <div className="flex items-center gap-6">
          <span>Lead Architect: <strong>{data?.leadArchitect || 'Alim Ul Karim'}</strong>, <span className="text-[var(--pres-accent)]">{data?.leadRole || 'Chief Software Engineer'}</span></span>
          <span className="text-slate-500 dark:text-slate-400">16:9 4K Precision DOM Standard</span>
        </div>
      </div>
    </div>
  );
};

export default FrontierMultimodalAlignmentMatrixSlide;
