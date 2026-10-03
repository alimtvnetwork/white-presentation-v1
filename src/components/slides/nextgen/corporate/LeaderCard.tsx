import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { LeaderProfile } from '../../../../types/nextGenArchetypes';

interface LeaderCardProps {
  leader: LeaderProfile;
  roleTag: 'ALPHA' | 'BETA';
  isDark?: boolean;
}

export const LeaderCard: React.FC<LeaderCardProps> = ({ leader, roleTag, isDark }) => (
  <div className="plane-1-raised p-6 rounded-2xl border border-slate-700/60 flex flex-col justify-between h-full bg-slate-900/30">
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 font-bold uppercase tracking-wider">
          Leader {roleTag}
        </span>
        {leader.hasKeynoteRole ? (
          <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 flex items-center gap-1">
            <Award size={12} /> Keynote Lead
          </span>
        ) : null}
      </div>

      <h2 className="font-ubuntu text-2xl font-bold text-slate-900 dark:text-white mb-1">
        {leader.name}
      </h2>
      <p className="font-mono text-xs font-semibold text-violet-700 dark:text-violet-300 mb-1">
        {leader.title}
      </p>
      <p className="font-poppins text-xs text-slate-600 dark:text-slate-400 mb-4">
        {leader.organization} — {leader.personaRole}
      </p>

      <div className="mb-4">
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-bold">
          Core Focus Vectors
        </span>
        <div className="space-y-1.5">
          {leader.focusAreas.map((area, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-poppins text-slate-800 dark:text-slate-200">
              <CheckCircle2 size={13} className="text-violet-500 shrink-0" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between">
      <div className="flex items-center gap-1.5 text-xs font-poppins text-slate-600 dark:text-slate-400">
        <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
        <span>{leader.credentials[0] || 'Verified'}</span>
      </div>
      <span className={`font-mono text-xs font-bold ${isDark ? 'text-violet-300' : 'text-violet-800'}`}>
        {leader.metricImpact}
      </span>
    </div>
  </div>
);
