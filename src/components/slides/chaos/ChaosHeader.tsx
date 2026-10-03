import React from 'react';
import { Flame, UserCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';
import type { ChaosEngineeringMatrixSlideData } from '../../../types/sovereignOperationsArchetypes';

interface ChaosHeaderProps {
  slide: ChaosEngineeringMatrixSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const ChaosHeader: React.FC<ChaosHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  const architectName = slide.leadResilienceArchitect || 'Alim Ul Karim';
  const architectRole = slide.architectTitle || 'Chief Software Engineer';
  const isSafe = slide.isProductionSafeExecution;

  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
            <Flame size={13} /> {slide.kicker || 'CHAOS ENGINEERING MATRIX'}
          </span>
          <span className="font-mono text-xs text-amber-900 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Cluster: {slide.targetCluster || 'Global Edge Mesh'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
            <UserCheck size={11} /> {architectName} ({architectRole})
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
        >
          {slide.title || 'Resilience Injection & MTTR Verification Matrix'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Simulated Partitioning, Corrupted RPC Packets & Automated Steady-State Recovery'}
        </p>
      </div>

      <div className="flex items-center gap-3 font-mono">
        <div
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="plane-1-raised px-4 py-2.5 rounded-xl border flex items-center gap-3"
        >
          <div className="flex items-center gap-2 text-rose-400">
            {isSafe ? <CheckCircle2 size={22} className="text-emerald-400" /> : <ShieldAlert size={22} />}
            <div>
              <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider">
                Blast Radius Safety
              </div>
              <div style={{ color: isSafe ? '#34d399' : '#fb7185' }} className="text-sm font-bold">
                {isSafe ? 'PROD-ISOLATED EXECUTION' : 'ACTIVE DRILL'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
