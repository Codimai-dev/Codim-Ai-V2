
import React from 'react';

const stages = [
  { title: "Visibility", happens: "The system tracks every visitor interaction and traffic source automatically.", exists: "It establishes the baseline data needed for all downstream decisions.", outcome: "A clear map of which channels are driving actual interest." },
  { title: "Lead Generation", happens: "Forms, chatbots, and ad pixels capture contact information instantly.", exists: "It ensures no potential customer goes unrecorded due to manual delay.", outcome: "A constant, automated influx of potential business." },
  { title: "Lead Enrichment", happens: "The system automatically appends company size, industry, and role data to leads.", exists: "It provides sales teams with context without requiring manual research.", outcome: "Context-rich lead profiles ready for targeted outreach." },
  { title: "B2B Email Automation", happens: "Personalized, multi-step email sequences are triggered based on lead behavior.", exists: "It maintains professional relationships at a scale impossible for humans.", outcome: "High-volume outreach with individual-level personalization." },
  { title: "WhatsApp Automation (B2C)", happens: "Direct messaging sequences handle inquiries and engagement on mobile.", exists: "It meets consumers where they are most active with instant responses.", outcome: "Significantly higher open rates and faster consumer conversions." },
  { title: "Meeting Scheduling", happens: "Leads book time directly on synced calendars based on availability rules.", exists: "It removes the 'back-and-forth' email friction from the sales process.", outcome: "A full calendar of qualified sales appointments." },
  { title: "Proposal Creation", happens: "The system generates dynamic quotes based on lead data and product selections.", exists: "It ensures accuracy in pricing and professional presentation every time.", outcome: "Error-free proposals delivered in minutes, not days." },
  { title: "Deal Management", happens: "Pipelines update automatically as prospects interact with proposals.", exists: "It provides sales managers with real-time forecasting accuracy.", outcome: "Clear visibility into current revenue potential." },
  { title: "Payment Collection", happens: "Invoices are issued and payment follow-ups are automated until settled.", exists: "It protects cash flow by removing the manual billing bottleneck.", outcome: "Faster payment cycles and reduced accounts receivable." },
  { title: "Delivery Tracking", happens: "Operations tasks are assigned and tracked as soon as payment is confirmed.", exists: "It ensures the promise made in sales is fulfilled by the delivery team.", outcome: "Standardized service quality and predictable fulfillment times." },
  { title: "Feedback System", happens: "Surveys are automatically sent at specific project milestones.", exists: "It captures the voice of the customer while the experience is fresh.", outcome: "Quantifiable satisfaction metrics and early warning of issues." },
  { title: "Upsell & Retention", happens: "System triggers outreach for renewals or complementary services based on usage.", exists: "It maximizes the lifetime value of every customer acquired.", outcome: "Increased recurring revenue and lower churn rates." },
  { title: "Analytics Dashboard", happens: "All data from stages 1-12 is aggregated into real-time visual reports.", exists: "It allows leadership to make data-driven strategic adjustments.", outcome: "Full-spectrum insight into business health and ROI." }
];

export const LifecycleSection: React.FC = () => {
  return (
    <div className="space-y-32 py-20 relative" id="lifecycle">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1200 1200" className="hidden lg:block">
          <path d="M 100,200 Q 600,0 1100,200 T 1100,600 T 100,800 T 100,1100" fill="none" stroke="url(#line-grad)" strokeWidth="2" className="drawing-line opacity-50" />
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#d8b4fe" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="reveal flex flex-col items-center text-center gap-4 sm:gap-6 px-4">
        <span className="text-[10px] sm:text-[12px] font-black text-purple-500 uppercase tracking-[0.4em] bg-purple-500/5 px-4 py-1.5 rounded-full">System Architecture</span>
        <h2 className="text-[32px] sm:text-[48px] md:text-[80px] font-lander font-black text-white tracking-tighter leading-[1.1] sm:leading-[0.9] max-w-4xl">
          The Automation <br className="hidden md:block" /> Lifecycle
        </h2>
        <p className="text-slate-400 max-w-2xl text-base sm:text-[20px] font-sodo font-light leading-relaxed">
          Thirteen precise architectural stages designed to eliminate manual chaos and establish a unified revenue engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 px-4">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="reveal glass-panel p-8 sm:p-12 flex flex-col gap-8 sm:gap-12 group cursor-default hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-700 hover:scale-[1.02]"
            style={{ transitionDelay: `${(index % 3) * 0.15}s` }}
          >
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white font-black text-[18px] group-hover:bg-purple-600 group-hover:border-purple-500 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-[0_0_15px_rgba(139,92,246,0)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="h-[2px] bg-gradient-to-r from-purple-500/20 to-transparent flex-grow ml-8 group-hover:from-purple-500/50 transition-all duration-500"></div>
            </div>

            <div className="space-y-10">
              <h4 className="text-3xl font-lander font-black text-white tracking-tight group-hover:text-purple-400 transition-colors duration-500">{stage.title}</h4>
              <div className="space-y-8">
                <div className="relative pl-6 border-l border-white/5 group-hover:border-purple-500/20 transition-colors">
                  <span className="text-[11px] font-brand font-black uppercase text-white/20 tracking-[0.25em] block mb-3 group-hover:text-purple-500/50 transition-colors">Operational Logic</span>
                  <p className="text-[17px] text-slate-400 leading-relaxed font-sodo font-light group-hover:text-slate-200 transition-colors">{stage.happens}</p>
                </div>
                <div className="relative pl-6 border-l border-white/5 group-hover:border-purple-500/20 transition-colors">
                  <span className="text-[11px] font-brand font-black uppercase text-white/20 tracking-[0.25em] block mb-3 group-hover:text-purple-500/50 transition-colors">Strategic Value</span>
                  <p className="text-[17px] text-slate-400 leading-relaxed font-sodo font-light group-hover:text-slate-200 transition-colors">{stage.exists}</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10 mt-auto relative overflow-hidden">
              <div className="text-[11px] font-brand font-black uppercase text-purple-500 tracking-[0.25em] mb-3 group-hover:translate-x-2 transition-transform duration-500">Target Outcome</div>
              <p className="text-[20px] text-white font-sodo font-extrabold leading-snug tracking-tight group-hover:text-purple-100 transition-colors duration-500">{stage.outcome}</p>

              {/* Subtle card interior glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
