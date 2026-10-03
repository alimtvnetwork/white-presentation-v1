import React from 'react';
import type { MultiTierSaasPackagingTableSlideData, PackagingPricingTier } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, Check, Sparkles, Zap, Building2 } from 'lucide-react';

const DEFAULT_TIERS: PackagingPricingTier[] = [
  { tierId: 'starter', tierName: 'Developer Cloud', monthlyPriceFormatted: '$49', annualPriceFormatted: '$39', targetAudience: 'Early-stage agile pods', entitlements: ['5 Cluster Nodes', '99.9% Uptime SLA', 'Shared KMS Keyring', 'Community Support'], ctaLabel: 'Deploy Starter', isPopularTier: false, hasCustomPricing: false, hasPrioritySupport: false, hasDedicatedAccountManager: false },
  { tierId: 'pro', tierName: 'Enterprise Growth', badgeLabel: 'MOST POPULAR', monthlyPriceFormatted: '$299', annualPriceFormatted: '$249', targetAudience: 'Scaling production systems', entitlements: ['50 Dedicated Pods', '99.99% Uptime SLA', 'Dedicated Customer KMS', '24/7 Priority Support'], ctaLabel: 'Start Free Trial', isPopularTier: true, hasCustomPricing: false, hasPrioritySupport: true, hasDedicatedAccountManager: false },
  { tierId: 'sovereign', tierName: 'Sovereign Fleet', badgeLabel: 'AIR-GAPPED', monthlyPriceFormatted: 'Custom', annualPriceFormatted: 'Custom', targetAudience: 'Regulated banking & defense', entitlements: ['Unlimited Bare-Metal', '99.999% Financial SLA', 'FIPS 140-3 L4 HSM', 'Principal Architect'], ctaLabel: 'Engage Sales', isPopularTier: false, hasCustomPricing: true, hasPrioritySupport: true, hasDedicatedAccountManager: true },
];

const Header: React.FC<{ slide: MultiTierSaasPackagingTableSlideData; isEditMode: boolean; onEdit: (v: string) => void }> = ({ slide, isEditMode, onEdit }) => (
  <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
    <div>
      <span className="kicker-pill-badge mb-2">{slide.kicker || 'COMMERCIAL GTM & PACKAGING'}</span>
      <h1 className="font-ubuntu text-4xl font-black tracking-tight" style={{ color: 'var(--pres-text)' }} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => onEdit(e.currentTarget.textContent || '')}>{slide.title || 'Multi-Tier SaaS Packaging & Monetization Table'}</h1>
      <p className="font-poppins text-base mt-1" style={{ color: 'var(--pres-text-muted)' }}>{slide.subtitle || `Transparent, predictable cloud economics • Save ${slide.annualDiscountPercentage || 20}% with annual commitments`}</p>
    </div>
    <div className="flex items-center gap-3 font-mono text-xs">
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-950/30 text-violet-300 font-bold"><Zap size={14} /> Mode: {slide.billingMode || 'annual'}</span>
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 font-bold"><ShieldCheck size={14} /> Currency: {slide.currencyCode || 'USD'}</span>
    </div>
  </div>
);

const TierCard: React.FC<{ tier: PackagingPricingTier; billingMode: string }> = ({ tier, billingMode }) => (
  <div style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: tier.isPopularTier ? 'var(--pres-accent)' : 'var(--pres-border)' }} className={`p-7 rounded-2xl border flex flex-col justify-between shadow-2xl relative transition-all duration-300 hover:scale-[1.01] ${tier.isPopularTier ? 'ring-2 ring-violet-500/50 shadow-violet-950/40' : ''}`}>
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs uppercase font-bold text-slate-400">{tier.tierName}</span>
        {tier.badgeLabel && <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-violet-600 text-white shadow-sm flex items-center gap-1"><Sparkles size={10} /> {tier.badgeLabel}</span>}
      </div>
      <div className="my-2"><span className="font-mono text-4xl font-black text-white">{billingMode === 'monthly' ? tier.monthlyPriceFormatted : tier.annualPriceFormatted}</span><span className="font-mono text-xs text-slate-400 ml-1">{tier.hasCustomPricing ? '' : '/month'}</span></div>
      <p className="font-poppins text-xs text-slate-400 mb-5">{tier.targetAudience}</p>
      <div className="space-y-2.5 border-t border-slate-800/80 pt-4">
        {tier.entitlements.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 font-poppins text-xs text-slate-300"><Check size={14} className={tier.isPopularTier ? 'text-emerald-400' : 'text-cyan-400'} /><span>{item}</span></div>
        ))}
      </div>
    </div>
    <button type="button" className={`mt-6 w-full py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all ${tier.isPopularTier ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'}`}>{tier.ctaLabel}</button>
  </div>
);

const Footer: React.FC<{ lead: string; hasVolume: boolean; hasGuarantee: boolean }> = ({ lead, hasVolume, hasGuarantee }) => (
  <div className="z-10 flex items-center justify-between font-mono text-xs border-t border-slate-800/80 pt-3" style={{ color: 'var(--pres-text-muted)' }}>
    <div className="flex items-center gap-4 text-emerald-400 font-bold">
      <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> {hasGuarantee ? '30-Day Money-Back Guarantee' : 'Deterministic SLA'}</span>
      {hasVolume && <span className="text-cyan-400 flex items-center gap-1"><Building2 size={13} /> Volume Discounts Active</span>}
    </div>
    <span className="text-cyan-400 font-semibold">{lead}</span>
  </div>
);

export const MultiTierSaasPackagingTableSlide: React.FC<{ slide: MultiTierSaasPackagingTableSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const tiers = slide.pricingTiers || DEFAULT_TIERS;
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;
  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <Header slide={slide} isEditMode={isEditMode} onEdit={(val) => applyEdit((s) => ({ ...s, title: val }))} />
      <div className="grid grid-cols-3 gap-8 my-auto z-10">{tiers.map((tier) => <TierCard key={tier.tierId} tier={tier} billingMode={slide.billingMode || 'annual'} />)}</div>
      <Footer lead={lead} hasVolume={Boolean(slide.hasVolumeDiscounts)} hasGuarantee={Boolean(slide.hasMoneyBackGuarantee)} />
    </div>
  );
};
