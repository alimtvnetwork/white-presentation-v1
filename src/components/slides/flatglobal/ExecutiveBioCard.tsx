import React from 'react';
import type { ExecutiveRosterMemberItem } from '../../../types/flatGlobalSuiteTypes';
import { Award, UserCheck, Shield } from 'lucide-react';

interface ExecutiveBioCardProps {
  member: ExecutiveRosterMemberItem;
  isActive: boolean;
  onSelect: () => void;
}

export const ExecutiveBioCard: React.FC<ExecutiveBioCardProps> = ({
  member,
  isActive,
  onSelect,
}) => {
  const activeClass = isActive
    ? 'border-amber-500/80 dark:border-amber-400 bg-amber-500/10 shadow-[0_0_24px_rgba(245,158,11,0.2)] scale-[1.02]'
    : 'border-slate-700/60 hover:border-slate-500/60 bg-slate-900/40 opacity-80 hover:opacity-100';

  return (
    <div
      onClick={onSelect}
      className={`plane-1-raised relative flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${activeClass}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-lg text-amber-900 dark:text-amber-300">
            {member.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-ubuntu font-bold text-lg text-slate-100">{member.name}</h3>
              {member.isLeadPersona && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1">
                  <UserCheck size={10} /> LEAD
                </span>
              )}
            </div>
            <p className="font-mono text-xs text-amber-900 dark:text-amber-300 font-semibold">{member.executiveTitle}</p>
          </div>
        </div>
        <span className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 font-mono text-xs font-black flex items-center justify-center text-slate-200">
          {member.keypadIndex}
        </span>
      </div>

      <p className="font-poppins text-xs text-slate-300 leading-relaxed mb-3 line-clamp-3">
        {member.bioSynopsis}
      </p>

      <div className="flex flex-col gap-2 pt-2 border-t border-slate-800/80">
        <div className="text-[10px] font-mono text-cyan-400 truncate flex items-center gap-1">
          <Shield size={10} /> {member.divisionScope}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {member.executiveCredentials.map((cred, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-300 border border-slate-700/60 flex items-center gap-1"
            >
              <Award size={9} className="text-amber-400" /> {cred}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
