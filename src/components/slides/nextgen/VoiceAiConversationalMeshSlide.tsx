import React, { useState } from 'react';
import type { VoiceAiConversationalMeshSlideData, VoicePipelineStage } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Headphones } from 'lucide-react';
import { VadPipelineStageCard } from './VadPipelineStageCard';
import { VoiceLatencyStrip } from './VoiceLatencyStrip';

interface VoiceAiConversationalMeshSlideProps {
  slide?: VoiceAiConversationalMeshSlideData;
  data?: VoiceAiConversationalMeshSlideData;
}

const DEFAULT_STAGES: VoicePipelineStage[] = [
  { stageIndex: 1, stageName: 'Voice Activity Detection (VAD)', modelName: 'Silero VAD v5 / WebRTC Native', budgetLatencyMs: 15, actualLatencyMs: 8, throughputTokensOrAudioPerSec: 48000, isWithinBudget: true, isStreamingActive: true },
  { stageIndex: 2, stageName: 'Streaming Speech-to-Text (ASR)', modelName: 'Conformer CTC Emformer Fastpath', budgetLatencyMs: 75, actualLatencyMs: 54, throughputTokensOrAudioPerSec: 240, isWithinBudget: true, isStreamingActive: true },
  { stageIndex: 3, stageName: 'Speculative Reasoning LLM', modelName: 'Gemini 1.5 Flash / Claude 3.5 Haiku', budgetLatencyMs: 120, actualLatencyMs: 92, throughputTokensOrAudioPerSec: 120, isWithinBudget: true, isStreamingActive: true },
  { stageIndex: 4, stageName: 'Neural Streaming TTS', modelName: 'Flow-Matching Acoustic Synthesizer', budgetLatencyMs: 60, actualLatencyMs: 42, throughputTokensOrAudioPerSec: 48000, isWithinBudget: true, isStreamingActive: true },
];

export const VoiceAiConversationalMeshSlide: React.FC<VoiceAiConversationalMeshSlideProps> = ({ slide, data: propsData }) => {
  const data = slide || propsData || ({} as VoiceAiConversationalMeshSlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const stages = data.pipelineStages && data.pipelineStages.length > 0 ? data.pipelineStages : DEFAULT_STAGES;
  const metrics = data.turnTakingMetrics;
  const session = data.activeSession;
  const acoustic = data.acousticModel;
  const currentStep = hoveredStep !== null ? hoveredStep : Math.min(deckActiveStep, Math.max(0, stages.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Headphones size={15} className="text-violet-500" />
              {data.kicker || 'REAL-TIME NEURAL SPEECH & CONVERSATIONAL MESH'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20">
              Sub-300ms Full-Duplex Audio Rails
            </span>
          </div>

          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data.title || 'Sub-300ms Real-Time Conversational Voice AI Mesh'}
          </h1>

          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data.subtitle || 'Full-Duplex Voice Activity Detection, Streaming ASR, Speculative LLM Reasoning and Neural TTS'}
          </p>
        </div>

        <VoiceLatencyStrip variant="header" metrics={metrics} />
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[460px] items-stretch">
        {stages.map((stage, idx) => (
          <VadPipelineStageCard
            key={stage.stageIndex || idx}
            stage={stage}
            index={idx}
            isActive={idx === currentStep}
            isCompleted={idx < currentStep}
            onHover={setHoveredStep}
          />
        ))}
      </div>

      <VoiceLatencyStrip variant="footer" session={session} acoustic={acoustic} />
    </div>
  );
};
