
import React from 'react';

export const ContrastSection: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-24 px-4" id="comparison">
      <div className="reveal">
        <span className="text-[10px] sm:text-[11px] font-black text-black/30 uppercase tracking-[0.25em] mb-4 block">Direct Comparison</span>
        <h2 className="text-[32px] sm:text-[44px] md:text-[64px] font-lander font-black text-black tracking-tighter leading-[1.1] sm:leading-[0.95]">The Automation Difference</h2>
      </div>

      <div className="reveal reveal-delay-1 grid md:grid-cols-2 gap-px bg-black/10 rounded-[30px] sm:rounded-[40px] overflow-hidden border border-black/10 shadow-2xl">
        <div className="bg-[#ffffff] p-8 sm:p-12 md:p-16 space-y-8 sm:space-y-12">
          <h4 className="text-[11px] sm:text-[12px] font-brand font-black uppercase tracking-[0.3em] text-black/40 border-b border-black/5 pb-4">Manual Operations</h4>
          <ul className="space-y-7">
            {[
              "Sales reps manually enter lead data into CRM",
              "Proposals are created from scratch for each customer",
              "Payment follow-up requires manual tracking",
              "Delivery updates are sent individually by support teams",
              "Upsell opportunities are noticed too late or missed entirely",
              "Reports require hours of data collection and work",
              "Customers experience delays at every handoff point",
              "Teams spend time on admin instead of strategic work"
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-5 text-[17px] text-slate-500 font-sodo font-light group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 transition-colors group-hover:bg-red-400"></span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#fcfcfd] p-8 sm:p-12 md:p-16 space-y-8 sm:space-y-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 blur-[120px] pointer-events-none"></div>
          <h4 className="text-[11px] sm:text-[12px] font-brand font-black uppercase tracking-[0.3em] text-purple-600 border-b border-purple-100 pb-4">Automated Operations</h4>
          <ul className="space-y-7">
            {[
              "Leads are captured, enriched, and routed automatically",
              "Proposals are generated instantly with accurate pricing",
              "Payments are collected without manual follow-up",
              "Delivery updates are sent automatically at every stage",
              "Upsell offers are triggered at optimal moments",
              "Reports are generated in real time with no manual work",
              "Customers receive immediate responses and updates",
              "Teams focus on closing deals and improving experience"
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-5 text-[17px] text-black font-sodo font-semibold group">
                <span className="text-purple-600 mt-0.5 transition-transform group-hover:translate-x-1">→</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
