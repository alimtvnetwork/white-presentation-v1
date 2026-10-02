import React from 'react';
import type { CompetitorMatrixSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Check, X, Crown, Columns3 } from 'lucide-react';

export const CompetitorMatrixSlide: React.FC<{ slide: CompetitorMatrixSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const capabilities = slide.capabilities || [];
  const competitors = slide.competitorNames || ['Legacy Office Suite', 'Commercial Cloud SaaS'];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'COMPETITIVE BENCHMARK MATRIX'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Platform Capability Comparison</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Platform Capability Comparison'}
        </h1>
      </div>

      <div className="plane-1-raised rounded-3xl border border-slate-800 overflow-hidden z-10 my-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/60 font-mono text-xs">
              <th className="p-4 pl-6 text-slate-400 w-[35%] uppercase">Capability Evaluation</th>
              <th className="p-4 text-violet-300 bg-violet-500/10 border-x border-violet-500/30 w-[30%]">
                <div className="flex items-center gap-2 font-bold uppercase"><Crown size={14} className="text-amber-400" /> {slide.ourPlatformName}</div>
              </th>
              <th className="p-4 text-slate-400 w-[17%] uppercase">{competitors[0] || 'Competitor A'}</th>
              <th className="p-4 text-slate-400 w-[18%] uppercase">{competitors[1] || 'Competitor B'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {capabilities.slice(0, 5).map((row, idx) => {
              const isKey = Boolean(row.isKeyDifferentiator);
              return (
                <tr key={row.id || idx} className={isKey ? 'bg-violet-500/5' : ''}>
                  <td className="p-3.5 pl-6 font-poppins text-xs font-medium text-slate-200">
                    <div className="flex items-center gap-2">
                      <span>{row.capabilityName}</span>
                      {isKey && <span className="text-[10px] font-mono px-1.5 py-0.2 bg-violet-500/20 text-violet-300 rounded">Key</span>}
                    </div>
                  </td>
                  <td className="p-3.5 bg-violet-500/10 border-x border-violet-500/30">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center"><Check size={12} /></div>
                      <span>{row.ourPlatformNote || '100% Supported'}</span>
                    </div>
                  </td>
                  <td className="p-3.5">
                    {Boolean(row.competitorASupport) ? (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400"><Check size={14} /> Supported</span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500"><X size={14} /> Unsupported</span>
                    )}
                  </td>
                  <td className="p-3.5">
                    {Boolean(row.competitorBSupport) ? (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400"><Check size={14} /> Supported</span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500"><X size={14} /> Unsupported</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-violet-400 font-bold"><Columns3 size={14} /> {slide.summaryNote || 'Sovereign Platform meets 100% of enterprise architectural evaluation criteria.'}</span>
        <span className="text-slate-400">Deterministic Feature Matrix</span>
      </div>
    </div>
  );
};
