import React from 'react';
import type { LiveQaSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { QaQuestionCard } from './qa/QaQuestionCard';
import { HelpCircle, ShieldCheck, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';

export const LiveQaSlide: React.FC<{ slide: LiveQaSlideData }> = ({ slide }) => {
  const currentStep = useDeckStore((s) => s.activeStep);
  const questions = slide.questions || [];
  const activeQuestion = questions[Math.min(currentStep, Math.max(0, questions.length - 1))];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {slide.kicker || 'LIVE Q&A'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs flex items-center gap-1">
            <HelpCircle size={12} /> {slide.totalQuestionsSubmitted || 84} Inquiries Submitted
          </span>
        </div>
        <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2">
          {slide.title || 'Keynote Live Q&A & Curated Audience Inquiries'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Community-upvoted inquiries streamed live with real-time speaker answer synthesis.'}
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto items-stretch h-[600px]">
        <div className="col-span-7 space-y-3 overflow-hidden flex flex-col justify-center">
          {questions.map((q, idx) => (
            <QaQuestionCard key={q.id || idx} question={q} index={idx} currentStep={currentStep} accentColor="var(--pres-accent, #06b6d4)" />
          ))}
        </div>

        <div className="col-span-5 plane-2-elevated p-6 rounded-3xl border border-cyan-500/40 bg-slate-900/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                <Sparkles size={14} /> Speaker Answer Spotlight
              </span>
              <span className="font-mono text-xs text-slate-400">{activeQuestion ? `${activeQuestion.upvotesCount} Upvotes` : 'Queue'}</span>
            </div>
            {activeQuestion ? (
              <div>
                <div className="text-xs font-mono text-slate-400 mb-1">{activeQuestion.submitterName} • {activeQuestion.submitterCompany}</div>
                <h3 className="font-ubuntu text-lg font-bold text-white mb-4 leading-snug">"{activeQuestion.questionText}"</h3>
                <div className="space-y-2.5">
                  <div className="font-mono text-xs text-cyan-300 font-semibold mb-2">Key Takeaways & Answers:</div>
                  {(activeQuestion.answerBullets || []).map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs font-poppins text-slate-200 leading-relaxed p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : <div className="text-slate-500 text-sm font-poppins">Select a question to spotlight</div>}
          </div>
          <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-emerald-400" /> AI Moderation Verified</span>
            <span>Sub-16ms Delivery</span>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="text-cyan-400 font-bold flex items-center gap-2"><MessageSquare size={14} /> Moderation Status</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>{slide.moderationStatusText || 'Real-time AI Moderation & Spam Filter Active'}</span>
      </div>
    </div>
  );
};
