
import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-24 px-4" id="challenge">
      <div className="reveal">
        <span className="text-[10px] sm:text-[11px] font-black text-black/30 uppercase tracking-[0.25em] mb-4 block">Challenge Assessment</span>
        <h2 className="text-[32px] sm:text-[44px] md:text-[64px] font-lander font-black text-black tracking-tighter leading-[1.1] sm:leading-[0.95] mb-8">
          The Problem
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-24 text-left">
        <div className="reveal reveal-delay-1 lg:col-span-5">
          <h3 className="text-[24px] sm:text-[28px] md:text-[34px] font-lander font-bold text-black mb-6 sm:mb-8 tracking-tighter leading-tight">What problem do businesses face today?</h3>
          <p className="text-xl text-slate-500 leading-relaxed font-sodo">
            Most businesses operate as a collection of disconnected software islands. Data remains trapped in individual tools,
            forcing employees to act as manual bridges. This creates a ceiling on growth where success increases administrative
            burden rather than scalability.
          </p>
        </div>

        <div className="lg:col-span-7 grid md:grid-cols-2 gap-12">
          <div className="reveal reveal-delay-2 space-y-8">
            <h4 className="text-[12px] font-brand font-black text-black uppercase tracking-widest opacity-40 border-b border-black/5 pb-2">Technical Friction</h4>
            <ul className="space-y-6">
              {[
                "Closed data ecosystems designed to prevent easy exports",
                "Inconsistent API standards requiring high-cost custom integration",
                "Fragmented tool acquisition across different departments",
                "Lack of cross-platform state awareness for customer journeys",
                "Manual updates in one system that fail to sync with others"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] text-slate-500 group transition-colors hover:text-black">
                  <span className="text-purple-600 font-bold transition-transform group-hover:translate-x-1">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-delay-3 space-y-8">
            <h4 className="text-[12px] font-brand font-black text-black uppercase tracking-widest opacity-40 border-b border-black/5 pb-2">Operational Leakage</h4>
            <ul className="space-y-6">
              {[
                "Lead response times exceed the 5-minute critical window",
                "High human error rate in CRM data entry and billing",
                "Sales reps spend 4 hours per day on administrative tasks",
                "Invoices are issued late, directly affecting cash flow",
                "Customer support lacks visibility into the sales context",
                "Executive reporting is delayed by manual consolidation"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] text-slate-500 group transition-colors hover:text-black">
                  <span className="text-purple-600 font-bold transition-transform group-hover:translate-x-1">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
