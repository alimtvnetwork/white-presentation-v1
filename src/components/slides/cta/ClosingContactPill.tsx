import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ClosingContactPillProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

export const ClosingContactPill: React.FC<ClosingContactPillProps> = ({ icon, label, value, href }) => {
  const hasLink = Boolean(href);

  const content = (
    <div className="flex items-center justify-between p-3.5 rounded-xl plane-1-raised bg-slate-900/50 border border-slate-800 transition-all hover:border-violet-500/40 hover:bg-slate-900/80">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
          {icon}
        </div>
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-[10px] uppercase block">
            {label}
          </span>
          <span className="font-poppins text-xs font-semibold text-slate-200">{value}</span>
        </div>
      </div>
      {hasLink && <ExternalLink size={14} className="text-slate-500" />}
    </div>
  );

  if (hasLink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block text-inherit no-underline">
        {content}
      </a>
    );
  }

  return content;
};
