// lint-allow: file-size reason="SupplyChainCarbonCbamSlide sovereign EU carbon ledger overview" max=120
import React from 'react';
import type { SupplyChainCarbonLedgerCbamSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createSupplyChainCarbonCbamSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Leaf, CheckCircle2, ShieldCheck, Factory, Award } from 'lucide-react';

export const SupplyChainCarbonCbamSlide: React.FC<{ slide?: SupplyChainCarbonLedgerCbamSlideData; data?: SupplyChainCarbonLedgerCbamSlideData }> = ({ slide, data: pData }) => {
  const fallback = createSupplyChainCarbonCbamSlide('default-supply-chain-carbon-cbam');
  const data = slide || pData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const tiers = data.tierItems?.length ? data.tierItems : fallback.tierItems;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Leaf size={15} className="text-emerald-500" />
              {data.kicker || 'SUSTAINABILITY & INTERNATIONAL TRADE'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {data.reportingFiscalQuarter || 'Q4 2026 CBAM Filing'} • EU ETS Registry Connected
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Supply Chain Carbon Ledger CBAM: EU Regulatory Tariff Audit'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Scope 1, 2, and 3 embedded emissions tracking across tiered suppliers with cryptographic certification'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Scope 1-3 Total</span><span className="text-lg font-bold text-slate-900 dark:text-sky-300">{(data.totalEmbeddedEmissionsTonnesCo2e || 142800).toLocaleString()} tCO2e</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Tariff Exposure</span><span className="text-lg font-bold text-slate-900 dark:text-amber-400">{data.totalEstimatedTariffExposureEur || '€4.82M'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-slate-800 z-10 flex items-center justify-between font-mono text-xs my-2">
        <div className="flex items-center gap-4">
          <span className="text-emerald-400 font-bold flex items-center gap-1.5"><Award size={15} /> REGULATORY COMPLIANCE:</span>
          <span className="text-slate-200">EU Carbon Border Adjustment Mechanism (CBAM Regulation 2023/956)</span>
        </div>
        <div className="flex items-center gap-5 text-slate-400">
          <span>EU ETS Carbon Price: <strong className="text-emerald-400">€84.50/tCO2e</strong></span>
          <span>Cryptographic Certificates: <strong className="text-emerald-400">100% Attested</strong></span>
          <span>Audit Status: <strong className="text-sky-300">Unanimous Compliance</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[460px] items-stretch">
        {tiers.map((tier) => (
          <div key={tier.tierNumber} className={`plane-2-elevated p-5 rounded-2xl border transition-all flex flex-col justify-between ${tier.isCompliantWithEuThreshold ? 'border-emerald-500/50' : 'border-slate-800'}`}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
              <span className="font-mono text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Factory size={14} className="text-emerald-400" /> TIER {tier.tierNumber}: {tier.countryOriginIso}
              </span>
              <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${tier.isCompliantWithEuThreshold ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 font-bold' : 'bg-amber-500/15 text-amber-300 border-amber-500/30'}`}>
                {tier.isCompliantWithEuThreshold ? 'TARIFF EXEMPT' : 'TARIFF APPLIED'}
              </span>
            </div>
            <div className="space-y-3 font-mono text-xs my-3">
              <div className="text-slate-100 font-bold text-sm">{tier.supplierName}</div>
              <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-2">
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Embedded Emissions:</span>
                  <strong className={tier.isCompliantWithEuThreshold ? 'text-emerald-400' : 'text-amber-400'}>
                    {tier.embeddedEmissionsKgCo2ePerTon} kgCO2e/t
                  </strong>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>EU Benchmark:</span>
                  <span className="text-slate-300">{tier.cbamBenchmarkKgCo2ePerTon} kgCO2e/t</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Tariff Liability:</span>
                  <strong className={tier.isCompliantWithEuThreshold ? 'text-emerald-400' : 'text-rose-400'}>
                    €{tier.tariffLiabilityPerTonEur.toFixed(2)}/ton
                  </strong>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 flex justify-between">
                <span>Cryptographic Cert:</span>
                <span className="text-emerald-400 font-bold">VERIFIED ON-CHAIN</span>
              </div>
            </div>
            <div className="pt-2.5 border-t border-slate-700/40 flex items-center justify-between font-mono text-[10px] text-slate-400">
              <span>Threshold Status:</span>
              <span className={`font-bold ${tier.isCompliantWithEuThreshold ? 'text-emerald-400' : 'text-amber-400'}`}>
                {tier.isCompliantWithEuThreshold ? 'BELOW EU CEILING' : 'EXCEEDS BENCHMARK'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> EU Registry Connected</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Scope 3 Telemetry: <strong className="text-slate-200">100% AUDITED</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Cryptographic Certs: <strong className="text-emerald-400">VALIDATED ON-CHAIN</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Sovereign Telemetry Overview</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
