import React from 'react';
import type { ClientWallSocialProofGridSlideData, ClientLogoEntry } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, Building, Landmark, Activity, Cloud, Lock } from 'lucide-react';

const DEFAULT_CLIENTS: ClientLogoEntry[] = [
  { clientId: 'c1', clientName: 'Apex Morgan Capital', industryCategory: 'banking', contractTenureYears: 6, deploymentScope: 'Core Liquidity Clearing Mesh', isFortune500: true, isPublicReferenceable: true, hasCaseStudyAvailable: true, isFeaturedClient: true },
  { clientId: 'c2', clientName: 'Sovereign HealthNet', industryCategory: 'healthtech', contractTenureYears: 4, deploymentScope: 'HIPAA Cryptographic Enclaves', isFortune500: true, isPublicReferenceable: true, hasCaseStudyAvailable: true, isFeaturedClient: false },
  { clientId: 'c3', clientName: 'Orbital Cloud Fabric', industryCategory: 'hyperscaler', contractTenureYears: 5, deploymentScope: 'Global Edge Anycast Routing', isFortune500: true, isPublicReferenceable: true, hasCaseStudyAvailable: true, isFeaturedClient: true },
  { clientId: 'c4', clientName: 'Aegis Defense Systems', industryCategory: 'defense-gov', contractTenureYears: 7, deploymentScope: 'Air-Gapped Hardware Attestation', isFortune500: false, isPublicReferenceable: true, hasCaseStudyAvailable: false, isFeaturedClient: false },
  { clientId: 'c5', clientName: 'Nordic Clearpay Group', industryCategory: 'banking', contractTenureYears: 3, deploymentScope: 'Real-Time Payment Settlement', isFortune500: true, isPublicReferenceable: true, hasCaseStudyAvailable: true, isFeaturedClient: false },
  { clientId: 'c6', clientName: 'Helios Genomic Data', industryCategory: 'healthtech', contractTenureYears: 4, deploymentScope: 'Petabyte Sharded Analytics DAG', isFortune500: false, isPublicReferenceable: true, hasCaseStudyAvailable: true, isFeaturedClient: true },
];

const Header: React.FC<{ slide: ClientWallSocialProofGridSlideData; isEditMode: boolean; onEdit: (v: string) => void }> = ({ slide, isEditMode, onEdit }) => (
  <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
    <div>
      <span className="kicker-pill-badge mb-2">{slide.kicker || 'OPERATIONAL EVIDENCE & SOCIAL PROOF'}</span>
      <h1 className="font-ubuntu text-4xl font-black tracking-tight" style={{ color: 'var(--pres-text)' }} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => onEdit(e.currentTarget.textContent || '')}>{slide.title || 'Global Enterprise Client Portfolio & Social Proof'}</h1>
      <p className="font-poppins text-base mt-1" style={{ color: 'var(--pres-text-muted)' }}>{slide.subtitle || `${slide.totalEnterpriseClientsCount || 420}+ Global Enterprises • ${slide.totalAssetsProtectedFormatted || '$18.4B'} Assets Protected Under SLA`}</p>
    </div>
    <div className="flex items-center gap-3 font-mono text-xs">
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 font-bold"><ShieldCheck size={14} /> F500 Endorsed</span>
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-950/30 text-violet-300 font-bold"><Lock size={14} /> NDA Compliant</span>
    </div>
  </div>
);

const getIndustryIcon = (cat: string) => {
  if (cat === 'banking') return <Landmark size={14} className="text-emerald-400" />;
  if (cat === 'healthtech') return <Activity size={14} className="text-rose-400" />;
  if (cat === 'hyperscaler') return <Cloud size={14} className="text-cyan-400" />;
  return <Building size={14} className="text-violet-400" />;
};

const ClientCard: React.FC<{ client: ClientLogoEntry }> = ({ client }) => (
  <div style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: client.isFeaturedClient ? 'var(--pres-accent)' : 'var(--pres-border)' }} className={`p-6 rounded-2xl border flex flex-col justify-between shadow-xl relative transition-all duration-300 hover:scale-[1.01] ${client.isFeaturedClient ? 'ring-1 ring-violet-500/50' : ''}`}>
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-1.5 font-mono text-xs uppercase text-slate-400 font-semibold">{getIndustryIcon(client.industryCategory)} {client.industryCategory}</span>
        {client.isFortune500 && <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">FORTUNE 500</span>}
      </div>
      <h3 className="font-ubuntu text-xl font-bold text-white mb-2">{client.clientName}</h3>
      <p className="font-poppins text-xs text-slate-300 leading-relaxed mb-4">{client.deploymentScope}</p>
    </div>
    <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between font-mono text-xs text-slate-400">
      <span>{client.contractTenureYears}+ Years Tenure</span>
      {client.hasCaseStudyAvailable && <span className="text-cyan-400 font-bold">Case Study Available</span>}
    </div>
  </div>
);

const Footer: React.FC<{ lead: string; hasAudits: boolean; hasNda: boolean }> = ({ lead, hasAudits, hasNda }) => (
  <div className="z-10 flex items-center justify-between font-mono text-xs border-t border-slate-800/80 pt-3" style={{ color: 'var(--pres-text-muted)' }}>
    <div className="flex items-center gap-4 text-emerald-400 font-bold">
      <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> {hasAudits ? '100% Contract Audit Attestation' : 'Verified Deployments'}</span>
      {hasNda && <span className="text-cyan-400 flex items-center gap-1"><Lock size={12} /> Confidential NDA Sanitized</span>}
    </div>
    <span className="text-cyan-400 font-semibold">{lead}</span>
  </div>
);

export const ClientWallSocialProofGridSlide: React.FC<{ slide: ClientWallSocialProofGridSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const clients = slide.clients || DEFAULT_CLIENTS;
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;
  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <Header slide={slide} isEditMode={isEditMode} onEdit={(val) => applyEdit((s) => ({ ...s, title: val }))} />
      <div className="grid grid-cols-3 gap-6 my-auto z-10">{clients.slice(0, 6).map((c) => <ClientCard key={c.clientId} client={c} />)}</div>
      <Footer lead={lead} hasAudits={Boolean(slide.hasVerifiedContractAudits)} hasNda={Boolean(slide.hasNdaCompliantLogos)} />
    </div>
  );
};
