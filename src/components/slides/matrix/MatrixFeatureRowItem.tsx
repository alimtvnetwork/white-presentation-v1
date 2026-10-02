import React from 'react';
import type { MatrixComparisonFeature, MatrixComparisonColumn } from '../../../types/enterpriseArchetypes';
import { Check, X } from 'lucide-react';

const ValueCell: React.FC<{ val: string | boolean | undefined; isLeader: boolean }> = ({ val, isLeader }) => {
  const isBool = typeof val === 'boolean';
  return (
    <td className={`p-3.5 text-xs font-mono ${isLeader ? 'bg-indigo-500/10 border-x border-indigo-500/30' : ''}`}>
      {isBool ? (
        Boolean(val) ? (
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold"><Check size={14} /> Yes</span>
        ) : (
          <span className="flex items-center gap-1.5 text-slate-500"><X size={14} /> No</span>
        )
      ) : (
        <span className={isLeader ? 'text-indigo-200 font-bold' : 'text-slate-300'}>{String(val ?? '-')}</span>
      )}
    </td>
  );
};

export const MatrixFeatureRowItem: React.FC<{
  feat: MatrixComparisonFeature;
  columns: MatrixComparisonColumn[];
}> = ({ feat, columns }) => {
  const isKey = Boolean(feat.isKeyDifferentiator);
  return (
    <tr className={isKey ? 'bg-indigo-500/5' : ''}>
      <td className="p-3.5 pl-6 font-poppins text-xs font-medium text-slate-200">
        <div className="flex items-center gap-2">
          <span>{feat.featureName}</span>
          {isKey && <span className="text-[10px] font-mono px-1.5 py-0.2 bg-indigo-500/20 text-indigo-300 rounded">Key Differentiator</span>}
        </div>
      </td>
      {columns.map((col) => (
        <ValueCell key={col.id} val={feat.values[col.id]} isLeader={Boolean(col.isLeader)} />
      ))}
    </tr>
  );
};
