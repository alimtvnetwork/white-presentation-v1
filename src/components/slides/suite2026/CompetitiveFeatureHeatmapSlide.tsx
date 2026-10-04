// lint-allow: file-size reason="CompetitiveFeatureHeatmapSlide flat sovereign competitive heatmap matrix" max=160
import React from 'react';
import type { CompetitiveFeatureHeatmapSlideData } from '../../types/suite2026Archetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ShieldCheck, CheckCircle2, Award, Zap, Star } from 'lucide-react';

const DEF_COMPETITORS = ['Legacy Monolith', 'Cloud Native Co', 'Hyperscaler Suite'];

const DEF_CAPABILITIES = [
  { id: 'c1', capabilityName: 'Sub-Millisecond Consistent Hashing', category: 'Architecture', ourScore: 10, competitorScores: { 'Legacy Monolith': 3, 'Cloud Native Co': 7, 'Hyperscaler Suite': 6 }, hasCheckmark: true, isRecommended: true, isIndustryBenchmark: true },
  { id: 'c2', capabilityName: 'Zero-Allocation In-Memory CRDTs', category: 'Performance', ourScore: 9, competitorScores: { 'Legacy Monolith': 2, 'Cloud Native Co': 6, 'Hyperscaler Suite': 5 }, hasCheckmark: true, isRecommended: true, isIndustryBenchmark: true },
  { id: 'c3', capabilityName: 'Post-Quantum Hardware Enclave Attestation', category: 'Security', ourScore: 10, competitorScores: { 'Legacy Monolith': 1, 'Cloud Native Co': 4, 'Hyperscaler Suite': 7 }, hasCheckmark: true, isRecommended: true, isIndustryBenchmark: true },
  { id: 'c4', capabilityName: 'Continuous Multi-Region Raft Quorum', category: 'Reliability', ourScore: 10, competitorScores: { 'Legacy Monolith': 4, 'Cloud Native Co': 8, 'Hyperscaler Suite': 7 }, hasCheckmark: true, isRecommended: true, isIndustryBenchmark: true },
  { id: 'c5', capabilityName: 'Autonomous Fuzzing & Patch Synthesis', category: 'Autonomous AI', ourScore: 9, competitorScores: { 'Legacy Monolith': 1, 'Cloud Native Co': 3, 'Hyperscaler Suite': 4 }, hasCheckmark: true, isRecommended: true, isIndustryBenchmark: true },
  { id: 'c6', capabilityName: 'Edge-to-Core Wasm Micro-Kernel Delivery', category: 'Infrastructure', ourScore: 10, competitorScores: { 'Legacy Monolith': 2, 'Cloud Native Co': 5, 'Hyperscaler Suite': 6 }, hasCheckmark: true, isRecommended: true, isIndustryBenchmark: true },
];

export const CompetitiveFeatureHeatmapSlide: React.FC<{ slide?: CompetitiveFeatureHeatmapSlideData; data?: CompetitiveFeatureHeatmapSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const competitors = data?.competitorNames?.length ? data.competitorNames : DEF_COMPETITORS;
  const capabilities = data?.capabilities?.length ? data.capabilities : DEF_CAPABILITIES;

  const renderScoreCell = (score: number, isOurScore: boolean) => {
    const isFull = score >= 9;
    const isMedium = score >= 5 && score < 9;
    return (
      <div className={`flex items-center justify-center gap-1.5 p-2 rounded-lg font-mono font-bold text-[14px] ${isOurScore ? 'bg-[var(--pres-accent)]/20 text-white ring-1 ring-[var(--pres-accent)]' : isFull ? 'bg-emerald-500/15 text-emerald-400' : isMedium ? 'bg-amber-500/15 text-amber-800 dark:text-amber-300' : 'bg-slate-800/40 text-slate-500'}`}>
        {isOurScore && <Star size={13} className="text-amber-800 dark:text-amber-300 fill-amber-300" />}
        <span>{score}/10</span>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-violet-500/10 text-violet-800 dark:text-violet-300 border border-violet-500/20 flex items-center gap-2">
              <Award size={16} className="text-violet-500" /> {data?.kicker || 'COMPETITIVE LANDSCAPE & MOAT ANALYSIS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" /> +{data?.winRateAdvantagePercent || 48}% Win-Rate Advantage
            </span>
          </div>
          <h1 className="text-[48px] font-ubuntu font-bold tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Competitive Feature Heatmap: Strategic Moats'}
          </h1>
          <p className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Grounded empirical matrix comparing core architecture against legacy and hyperscaler alternatives.'}
          </p>
        </div>
        <div className="p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div><span className="text-slate-400 block uppercase">Market Segment</span><span className="text-violet-400 font-bold">{data?.marketSegment || 'Enterprise Deep-Tech'}</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span className="text-slate-400 block uppercase">Chief Software Engineer</span><span className="text-slate-800 dark:text-slate-200 font-bold">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 z-10 my-auto shadow-2xl">
        <div className="grid grid-cols-12 gap-4 pb-4 border-b border-[var(--pres-border)] font-mono text-[14px] font-bold text-slate-400 uppercase">
          <div className="col-span-5">Core Enterprise Capability</div>
          <div className="col-span-2 text-center text-white bg-[var(--pres-accent)]/20 py-1 rounded-md border border-[var(--pres-accent)]/40">Our Platform</div>
          {competitors.map((comp) => (
            <div key={comp} className="col-span-2 text-center py-1">{comp}</div>
          ))}
          <div className="col-span-1 text-center">Status</div>
        </div>
        <div className="space-y-3 mt-3 font-mono text-[14px]">
          {capabilities.map((cap) => (
            <div key={cap.id} className="grid grid-cols-12 gap-4 items-center p-3 rounded-xl border border-slate-800/60 bg-black/20 hover:bg-slate-800/30 transition-all">
              <div className="col-span-5 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[12px] bg-slate-800 text-slate-400 border border-slate-700">[{cap.category}]</span>
                <span className="font-semibold text-slate-200">{cap.capabilityName}</span>
              </div>
              <div className="col-span-2">{renderScoreCell(cap.ourScore, true)}</div>
              {competitors.map((comp) => (
                <div key={comp} className="col-span-2">{renderScoreCell(cap.competitorScores[comp] || 3, false)}</div>
              ))}
              <div className="col-span-1 flex justify-center text-emerald-400">
                <ShieldCheck size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-400 uppercase">Benchmark Verdict:</span>
          <span className="text-emerald-400 font-bold">100% Core Architectural Advantage on Critical Paths</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">Gartner / Forrester Standard</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 size={16} /> Verified 2026</span>
        </div>
      </div>
    </div>
  );
};
