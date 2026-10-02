import React from 'react';
import type { MatrixComparisonSlideData, MatrixComparisonColumn } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Crown, LayoutGrid } from 'lucide-react';
import { MatrixFeatureRowItem } from './matrix/MatrixFeatureRowItem';

const MatrixHeader: React.FC<{ kicker?: string; title?: string }> = ({ kicker, title }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  return (
    <div className="z-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
          {kicker || 'COMPETITIVE CAPABILITY MATRIX'}
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Architectural Benchmark</span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
      >
        {title || 'Enterprise Capability Benchmark Matrix'}
      </h1>
    </div>
  );
};

const ColumnHeaderCell: React.FC<{ col: MatrixComparisonColumn }> = ({ col }) => {
  const isLeader = Boolean(col.isLeader);
  return (
    <th className={`p-4 text-xs font-mono uppercase tracking-wider ${isLeader ? 'bg-indigo-500/15 border-x border-indigo-500/40 text-indigo-300' : 'text-slate-400'}`}>
      <div className="flex items-center gap-2">
        {isLeader && <Crown size={14} className="text-amber-400" />}
        <span className="font-bold">{col.title}</span>
        {col.badge && <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 ml-auto">{col.badge}</span>}
      </div>
    </th>
  );
};

export const MatrixComparisonGridSlide: React.FC<{ slide: MatrixComparisonSlideData }> = ({ slide }) => {
  const columns = slide.columns || [];
  const features = slide.features || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <MatrixHeader kicker={slide.kicker} title={slide.title} />

      <div className="plane-1-raised rounded-3xl border border-slate-800 overflow-hidden z-10 my-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/70 font-mono text-xs">
              <th className="p-4 pl-6 text-slate-400 uppercase w-[30%]">Capability / Requirement</th>
              {columns.map((col) => (
                <ColumnHeaderCell key={col.id} col={col} />
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {features.map((feat) => (
              <MatrixFeatureRowItem key={feat.id} feat={feat} columns={columns} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-indigo-400 font-bold">
          <LayoutGrid size={14} /> Full Comparative Feature Coverage Matrix
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Deterministic Evaluation Criteria</span>
      </div>
    </div>
  );
};
