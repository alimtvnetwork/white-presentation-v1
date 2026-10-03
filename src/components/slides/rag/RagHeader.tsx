import React from 'react';
import { Sparkles, Database, UserCheck, Cpu } from 'lucide-react';
import type { RagPipelineTopologySlideData } from '../../../types/globalPptArchetypes';

interface RagHeaderProps {
  slide: RagPipelineTopologySlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const RagHeader: React.FC<RagHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center gap-1.5">
          <Sparkles size={13} /> {slide.kicker || 'GENERATIVE AI'}
        </span>
        <span className="font-mono text-xs text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20 flex items-center gap-1">
          <Database size={11} /> Index: {slide.vectorIndexName || 'enterprise-corpus-v4-hsnw'}
        </span>
        <span className="font-mono text-xs text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1">
          <UserCheck size={11} className="text-purple-400" />
          <span>Lead Architect: {slide.leadArchitect || 'Alim Ul Karim'}</span>
          <span className="text-slate-400">({slide.leadRole || 'Chief Software Engineer'})</span>
        </span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
      >
        {slide.title || 'Enterprise RAG Pipeline Architecture & Semantic Search DAG'}
      </h1>
      <p style={{ color: 'var(--pres-subtext, var(--pres-text-muted))' }} className="font-poppins text-base max-w-4xl leading-relaxed">
        {slide.subtitle || 'Hybrid Vector Ingestion, Cross-Encoder Reranking & Sub-Second Latency Bounds'}
      </p>
    </div>

    <div className="flex items-center gap-3 font-mono">
      <div className="plane-1-raised px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center gap-2.5">
        <Cpu size={16} className="text-purple-400" />
        <div>
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Context Budget</div>
          <div className="text-sm font-bold text-white">{(slide.contextWindowBudgetTokens || 128000).toLocaleString()} Tok</div>
        </div>
      </div>
      <div className="plane-1-raised px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center gap-2.5">
        <div>
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Corpus Docs</div>
          <div className="text-sm font-bold text-cyan-400">{(slide.corpusDocumentCount || 12500000).toLocaleString()}</div>
        </div>
      </div>
    </div>
  </div>
);
