import React from 'react';
import type { BoardQuorumResolutionLedgerSlideData } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { CheckCircle2, FileCheck, ShieldCheck, Users } from 'lucide-react';

export const BoardQuorumResolutionLedgerSlide: React.FC<{ slide: BoardQuorumResolutionLedgerSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const resolutions = slide.resolutions || [];
  const signatories = slide.signatories || [];
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'STATUTORY GOVERNANCE & RESOLUTIONS'}</span>
          <h1
            className="font-ubuntu text-4xl font-black text-white tracking-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Board of Directors: Official Quorum Resolution Ledger'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Statutory boardroom quorum verification, voting breakdown on critical resolutions, and corporate signatory seals.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-cyan-300">
            <FileCheck size={14} className="text-cyan-400" /> Ref: {slide.meetingReference || 'BOD-2026-10-Q4'}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/50 text-emerald-300 font-bold">
            <ShieldCheck size={14} className="text-emerald-400" /> Quorum: {slide.quorumPercentageFormatted || '98.42%'}
          </span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4 p-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl font-mono text-xs">
        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-slate-400 block mb-1">TOTAL SHARES REPRESENTED</span>
          <span className="text-lg font-bold text-white">{slide.totalSharesRepresentedFormatted || '124,500,000'}</span>
        </div>
        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-slate-400 block mb-1">QUORUM RATIO</span>
          <span className="text-lg font-bold text-emerald-400">{slide.quorumPercentageFormatted || '98.42%'}</span>
        </div>
        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-slate-400 block mb-1">RESOLUTIONS TABLED</span>
          <span className="text-lg font-bold text-cyan-300">{resolutions.length} Measures</span>
        </div>
        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-slate-400 block mb-1">SUPERVISORY STATUS</span>
          <span className="text-lg font-bold text-indigo-300">{slide.isQuorumEstablished ? 'CONSTITUTED & LEGAL' : 'PENDING'}</span>
        </div>
      </div>

      <div className="z-10 my-auto bg-slate-950/70 border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-12 p-3.5 bg-slate-900/90 border-b border-slate-800 font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
          <span className="col-span-2">Statutory Code</span>
          <span className="col-span-5">Resolution Title & Clause</span>
          <span className="col-span-2 text-right">Votes For</span>
          <span className="col-span-1 text-right">Pass %</span>
          <span className="col-span-2 text-right pr-2">Legal Status</span>
        </div>
        <div className="divide-y divide-slate-800/60 font-poppins text-xs">
          {resolutions.map((res, idx) => (
            <div key={res.resolutionId || idx} className="grid grid-cols-12 p-3.5 items-center hover:bg-slate-900/40 transition-colors">
              <span className="col-span-2 font-mono font-bold text-cyan-400">{res.statutoryCode}</span>
              <div className="col-span-5 pr-4">
                <span className="font-semibold text-white block">{res.resolutionTitle}</span>
                <span className="text-slate-400 text-[11px] truncate block">{res.summaryClause}</span>
              </div>
              <span className="col-span-2 text-right font-mono text-slate-200">{res.votesFor.toLocaleString()}</span>
              <span className="col-span-1 text-right font-mono font-bold text-emerald-400">{res.passPercentage}%</span>
              <div className="col-span-2 text-right pr-2 font-mono">
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${res.isPassed ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-700/50' : 'bg-slate-800 text-slate-300'}`}>
                  <CheckCircle2 size={12} /> {res.isPassed ? 'PASSED & FILED' : 'TABLED'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="z-10 p-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl flex items-center justify-between font-mono text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span className="text-slate-300 font-bold flex items-center gap-1.5"><Users size={14} className="text-cyan-400" /> Signatories:</span>
          {signatories.map((sig, idx) => (
            <span key={idx} className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 size={12} className="text-emerald-400" /> {sig.signatoryName} ({sig.signatoryTitle})
            </span>
          ))}
        </div>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
