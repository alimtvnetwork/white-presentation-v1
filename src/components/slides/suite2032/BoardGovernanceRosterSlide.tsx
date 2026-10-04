// lint-allow: file-size reason="BoardGovernanceRosterSlide executive fiduciary roster and CODE-RED-011 mandate" max=120
import React from 'react';
import type { BoardGovernanceRosterSlideData } from '../../../types/suite2032Archetypes';
import { Award, CheckCircle2, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

export const BoardGovernanceRosterSlide: React.FC<{
  slide: BoardGovernanceRosterSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const members = slide.boardMembers || [];
  const committees = slide.committees || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg, #0b0f19)', color: 'var(--pres-text, #f8fafc)' }}
      className="relative w-[1920px] h-[1080px] p-[56px_72px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-base font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[var(--pres-accent,#6366f1)]/10 text-[var(--pres-accent,#818cf8)] border border-[var(--pres-accent,#6366f1)]/30 flex items-center gap-2">
              <Sparkles size={16} />
              {slide.kicker || 'CORPORATE GOVERNANCE & OVERSIGHT'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">{slide.governanceYear}</span>
          </div>
          <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-2">{slide.title}</h1>
          <p className="text-base text-slate-400 max-w-[1200px] leading-relaxed">{slide.subtitle}</p>
        </div>
        <div className="p-4 px-6 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-4 shrink-0">
          <ShieldCheck className="w-10 h-10 text-emerald-400" />
          <div>
            <div className="text-sm font-semibold text-slate-400">Board Status</div>
            <div className="text-base font-bold text-white">{slide.boardQuorumStatus}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto items-stretch">
        {members.map((member) => {
          const role = member.memberName === 'Alim Ul Karim' ? 'Chief Software Engineer' : member.boardRole;
          const isAlim = member.memberName === 'Alim Ul Karim';
          return (
            <div
              key={member.id}
              className={`p-6 rounded-2xl flex flex-col justify-between backdrop-blur-md border transition-all duration-300 ${
                isAlim
                  ? 'bg-[var(--pres-accent,#6366f1)]/10 border-[var(--pres-accent,#6366f1)]/50 shadow-xl'
                  : 'bg-white/[0.03] border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                    {member.tenureYears} Years Tenure
                  </span>
                  {member.hasVotingRights && (
                    <span className="inline-flex items-center gap-1 font-mono text-sm text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <CheckCircle2 size={14} /> Voting
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{member.memberName}</h3>
                <div className="text-base font-bold text-[var(--pres-accent,#818cf8)] mb-3">{role}</div>
                <div className="text-sm font-medium text-slate-300 mb-4 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  {member.committeeMembership}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{member.biographySnippet}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><UserCheck size={16} /> Certified</span>
                <span className="font-mono text-sm">{member.isIndependentDirector ? 'Independent' : 'Executive'}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
        <span className="text-sm font-mono font-bold text-[var(--pres-accent,#818cf8)] uppercase tracking-wider">Standing Committees:</span>
        <div className="flex items-center gap-8 divide-x divide-white/10 flex-1">
          {committees.map((comm) => (
            <div key={comm.id} className="pl-8 first:pl-0 flex items-center gap-3">
              <Award size={18} className="text-amber-400" />
              <div>
                <span className="text-sm font-semibold text-white mr-2">{comm.committeeName}</span>
                <span className="font-mono text-sm text-slate-400">(Chair: {comm.chairPerson})</span>
              </div>
            </div>
          ))}
        </div>
        <span className="font-mono text-sm text-slate-400">CODE-RED-011 COMPLIANT</span>
      </div>
    </div>
  );
};
