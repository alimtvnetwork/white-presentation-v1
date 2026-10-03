import React, { useState } from 'react';
import type { InteractiveFaqTabbedDeckSlideData, FaqCategoryTab, InteractiveFaqItem } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, HelpCircle, CheckCircle2, Code2, BookOpen } from 'lucide-react';

const DEFAULT_CATEGORIES: FaqCategoryTab[] = [
  { categoryKey: 'security', categoryLabel: 'Zero-Trust Security', itemCount: 3, isActive: true },
  { categoryKey: 'architecture', categoryLabel: 'Cloud Architecture', itemCount: 4, isActive: false },
  { categoryKey: 'commercial', categoryLabel: 'Commercial & TCO', itemCount: 3, isActive: false },
  { categoryKey: 'sla', categoryLabel: 'Enterprise SLAs', itemCount: 2, isActive: false },
];

const DEFAULT_FAQS: InteractiveFaqItem[] = [
  { faqId: 'f1', category: 'security', question: 'How is cross-tenant cryptographic memory isolation enforced?', answerSummary: 'Hardware attestation with AMD SEV-SNP enclaves and per-tenant AES-256-GCM KMS keys.', answerDeepDiveProse: 'Hypervisors cannot inspect enclave memory. Memory encryption keys are negotiated directly via TPM 2.0 with customer-controlled HSMs.', isExpandedByDefault: true, hasCodeSnippet: true, isVerifiedAnswer: true },
  { faqId: 'f2', category: 'security', question: 'What is the blast radius of an unmitigated node failure?', answerSummary: 'Cell-based architecture bounds all failures to a single isolated tenant pod.', answerDeepDiveProse: 'Failures trigger automated Anycast rerouting within 120ms with linearizable consensus guarantees preserved.', isExpandedByDefault: false, hasCodeSnippet: false, isVerifiedAnswer: true },
  { faqId: 'f3', category: 'architecture', question: 'Does the Raft consensus engine support cross-region replication?', answerSummary: 'Yes, multi-region quorum with pipelined append entries and lock-free rings.', answerDeepDiveProse: 'Evaluated at sub-20ms WAN transit with zero state divergence across planetary fleet nodes.', isExpandedByDefault: true, hasCodeSnippet: true, isVerifiedAnswer: true },
  { faqId: 'f4', category: 'commercial', question: 'What financial penalties back the 99.999% SLA commitment?', answerSummary: 'Contractual 100% bill credit penalty backed by audited escrow guarantees.', answerDeepDiveProse: 'Telemetry metrics are streamed to a verifiable tamper-proof audit ledger for real-time compliance.', isExpandedByDefault: true, hasCodeSnippet: false, isVerifiedAnswer: true },
];

const Header: React.FC<{ slide: InteractiveFaqTabbedDeckSlideData; isEditMode: boolean; onEdit: (v: string) => void }> = ({ slide, isEditMode, onEdit }) => (
  <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
    <div>
      <span className="kicker-pill-badge mb-2">{slide.kicker || 'INTERACTIVE DIALOGUE & KNOWLEDGE BASE'}</span>
      <h1 className="font-ubuntu text-4xl font-black tracking-tight" style={{ color: 'var(--pres-text)' }} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => onEdit(e.currentTarget.textContent || '')}>{slide.title || 'Architectural & Strategic FAQ Knowledge Base'}</h1>
      <p className="font-poppins text-base mt-1" style={{ color: 'var(--pres-text-muted)' }}>{slide.subtitle || 'Verified answers for zero-trust security, distributed consensus, commercial terms, and SLAs.'}</p>
    </div>
    <div className="flex items-center gap-3 font-mono text-xs">
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 font-bold"><ShieldCheck size={14} /> Fiduciary Verified</span>
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-950/30 text-violet-300 font-bold"><BookOpen size={14} /> Live Docs Active</span>
    </div>
  </div>
);

const CategoryTabs: React.FC<{ categories: FaqCategoryTab[]; selected: string; onSelect: (k: any) => void }> = ({ categories, selected, onSelect }) => (
  <div className="z-10 flex items-center gap-3">
    {categories.map((cat) => (
      <button key={cat.categoryKey} type="button" onClick={() => onSelect(cat.categoryKey)} className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${selected === cat.categoryKey ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30' : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'}`}>
        <span>{cat.categoryLabel}</span>
        <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px] text-cyan-300">{cat.itemCount}</span>
      </button>
    ))}
  </div>
);

const FaqCard: React.FC<{ faq: InteractiveFaqItem }> = ({ faq }) => (
  <div style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }} className="p-6 rounded-2xl border shadow-xl flex flex-col justify-between">
    <div>
      <div className="flex items-start gap-2.5 mb-2">
        <HelpCircle size={18} className="text-violet-400 shrink-0 mt-0.5" />
        <h3 className="font-ubuntu text-base font-bold text-white">{faq.question}</h3>
      </div>
      <p className="font-poppins text-xs font-semibold text-cyan-300 mb-2 pl-7">{faq.answerSummary}</p>
      <p className="font-poppins text-xs text-slate-300 leading-relaxed pl-7">{faq.answerDeepDiveProse}</p>
    </div>
    <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px] text-slate-400 pl-7">
      <span className="flex items-center gap-1 text-emerald-400 font-bold"><CheckCircle2 size={12} /> Verified Answer</span>
      {faq.hasCodeSnippet && <span className="text-cyan-400 flex items-center gap-1"><Code2 size={12} /> Code Snippet</span>}
    </div>
  </div>
);

export const InteractiveFaqTabbedDeckSlide: React.FC<{ slide: InteractiveFaqTabbedDeckSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const [selectedKey, setSelectedKey] = useState<string>(slide.activeCategoryKey || 'security');
  const allFaqs = slide.faqItems || DEFAULT_FAQS;
  const filtered = allFaqs.filter((f) => f.category === selectedKey);
  const activeFaqs = filtered.length > 0 ? filtered : allFaqs.slice(0, 2);
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;
  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <Header slide={slide} isEditMode={isEditMode} onEdit={(val) => applyEdit((s) => ({ ...s, title: val }))} />
      <CategoryTabs categories={slide.categories || DEFAULT_CATEGORIES} selected={selectedKey} onSelect={setSelectedKey} />
      <div className="grid grid-cols-2 gap-6 my-auto z-10">{activeFaqs.slice(0, 2).map((faq) => <FaqCard key={faq.faqId} faq={faq} />)}</div>
      <div className="z-10 flex items-center justify-between font-mono text-xs border-t border-slate-800/80 pt-3" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="text-emerald-400 font-bold"><ShieldCheck size={14} className="inline mr-1.5" /> Interactive Knowledge Base • Synchronized Telemetry</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
