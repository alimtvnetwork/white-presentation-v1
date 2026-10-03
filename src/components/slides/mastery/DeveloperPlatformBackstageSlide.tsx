// lint-allow: file-size reason="DeveloperPlatformBackstageSlide kinetic 4-step IDP golden path orchestration" max=120
import React from 'react';
import type { DeveloperPlatformBackstagePortalSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createDeveloperPlatformBackstageSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Terminal, CheckCircle2, ShieldCheck, Activity, Award } from 'lucide-react';

export const DeveloperPlatformBackstageSlide: React.FC<{ slide?: DeveloperPlatformBackstagePortalSlideData; data?: DeveloperPlatformBackstagePortalSlideData }> = ({ slide, data: pData }) => {
  const fallback = createDeveloperPlatformBackstageSlide('default-developer-platform-backstage');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data.portalStages?.length ? data.portalStages : fallback.portalStages;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const templates = data.goldenPathTemplates?.length ? data.goldenPathTemplates : fallback.goldenPathTemplates;
  const scorecards = data.scorecardMetrics?.length ? data.scorecardMetrics : fallback.scorecardMetrics;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Terminal size={15} className="text-violet-500" />{data.kicker || 'PLATFORM ENGINEERING & DX'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {data.portalName || 'Apex Internal Developer Portal'} • {data.catalogServiceCount || 348} Catalog Services
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Developer Platform Backstage Portal: Golden Path Automation'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Scaffolding enterprise-grade microservices from template selection to production scorecard'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Time-to-1st-Commit</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.timeToFirstCommitMinutes || 6.2} Mins</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Legacy Baseline</span><span className="text-lg font-bold text-slate-900 dark:text-rose-400">14 Days</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-[10px] opacity-75 truncate max-w-[120px]">{st.automationEngine}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-400 block mb-1">01. TEMPLATES</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">Standardized Scaffolds</h3></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {templates.map((tmpl) => (
              <div key={tmpl.templateId} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="text-slate-200 font-bold">{tmpl.templateName}</div>
                <div className="text-[11px] text-sky-300">{tmpl.stackRuntime}</div>
                <div className="flex justify-between text-[10px] text-slate-400 pt-1"><span>{tmpl.provisioningDurationSeconds}s Provision</span><span className="text-emerald-400 font-bold">100% SECURE</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-slate-400">Backstage Scaffolder v1.8</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 block mb-1">02. TERRAFORM IAC</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">Automated Cloud Infra</h3></div>
          <div className="space-y-2 font-mono text-xs my-3">
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800"><span className="text-slate-400 text-[10px] block">VPC & NETWORK</span><span className="text-emerald-300 text-[11px] font-bold">Multi-AZ Subnets & NAT</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800"><span className="text-slate-400 text-[10px] block">DATABASE</span><span className="text-emerald-300 text-[11px] font-bold">RDS Aurora Serverless v2</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800"><span className="text-slate-400 text-[10px] block">K8S COMPUTE</span><span className="text-emerald-300 text-[11px] font-bold">EKS Namespace & IRSA</span></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-slate-400">Terraform Cloud Pipeline</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-400 block mb-1">03. CI/CD PIPELINE</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">Golden Path Delivery</h3></div>
          <div className="space-y-2 font-mono text-xs my-3">
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-300">GitHub Actions Matrix</span><span className="text-emerald-400 font-bold">SYNTHESIZED</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-300">Trivy & SonarQube SAST</span><span className="text-emerald-400 font-bold">ZERO FINDINGS</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-300">ArgoCD GitOps Sync</span><span className="text-sky-300 font-bold">ATTACHED</span></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-slate-400">GitHub Actions + ArgoCD</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 block mb-1">04. SCORECARD</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">DORA Elite Maturity</h3></div>
          <div className="space-y-2 font-mono text-xs my-3">
            {scorecards.map((sc, idx) => (
              <div key={idx} className="p-2 rounded-lg bg-black/30 border border-slate-800">
                <span className="text-slate-400 text-[10px] block">{sc.metricName}</span>
                <div className="flex justify-between text-[11px] font-bold"><span className="text-emerald-300">{sc.currentScoreFormatted}</span><span className="text-slate-400">{sc.targetThresholdFormatted}</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-emerald-400 flex items-center justify-between"><span>Production Seal:</span><span className="font-bold flex items-center gap-1"><Award size={12} /> CERTIFIED</span></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Golden Path Enforced by Policy</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Lead Time for Changes: <strong className="text-slate-200">42 Mins</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Change Failure Rate: <strong className="text-emerald-400">0.8% (Elite Tier)</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span>
          <span>Step {currentStep + 1} of {stages.length}</span>
        </div>
      </div>
    </div>
  );
};
