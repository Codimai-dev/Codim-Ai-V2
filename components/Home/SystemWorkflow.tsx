
import React from 'react';

const workflowItems = [
  {
    title: "Inbound Normalization",
    text: "Raw interaction data is captured from any source—ads, forms, or APIs. The system immediately standardizes this data, stripping out noise and preparing it for the logic engine."
  },
  {
    title: "State-Based Triggers",
    text: "Move beyond simple notifications. Our engine listens for state changes (e.g., Payment Confirmed) and instantly triggers the next logical action—billing, delivery, or onboarding."
  },
  {
    title: "Operational Ledger",
    text: "Every automated event is logged into a unified operational ledger. This creates absolute transparency, allowing you to track the exact lifecycle of any transaction in real-time."
  }
];

export const SystemWorkflow: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 space-y-12 sm:space-y-20 bg-white relative overflow-hidden" id="operations">
      <div className="absolute inset-0 grid-bg-light opacity-30"></div>

      <div className="reveal flex flex-col items-center text-center gap-6 sm:gap-8 relative z-10 px-4">
        <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-purple-600 bg-purple-50 px-4 sm:px-6 py-2 rounded-full border border-purple-100">Mechanism of Action</span>
        <h2 className="text-[32px] sm:text-[54px] md:text-[90px] font-lander font-black text-[#030303] tracking-tighter leading-[1.1] sm:leading-none max-w-4xl">
          System <br className="hidden md:block" /> Operations
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto z-10 px-6">
        {/* Central Vertical Spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-slate-100 -translate-x-1/2 hidden md:block overflow-hidden rounded-full">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-[flow_3s_linear_infinite]" style={{ backgroundSize: '100% 50%' }}></div>
        </div>

        <div className="space-y-24 sm:space-y-40">
          {workflowItems.map((item, idx) => (
            <div key={idx} className={`reveal flex flex-col md:flex-row items-center gap-10 md:gap-32 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 space-y-6 sm:space-y-8 group text-center md:text-left">
                <div className={`flex items-center gap-4 sm:gap-6 justify-center ${idx % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <h3 className="text-[13px] sm:text-[15px] font-brand font-black uppercase tracking-[0.4em] text-purple-600 group-hover:tracking-[0.6em] transition-all duration-500">{item.title}</h3>
                </div>
                <p className={`text-lg sm:text-[22px] text-slate-500 leading-normal sm:leading-tight font-sodo font-light ${idx % 2 === 1 ? 'md:text-right' : ''}`}>
                  {item.text}
                </p>
              </div>

              {/* Data Node Point */}
              <div className="relative z-20 shrink-0">
                <div className="w-20 h-20 rounded-3xl bg-white border-2 border-slate-100 flex items-center justify-center shadow-2xl group cursor-default hover:border-purple-500 hover:rotate-45 transition-all duration-700">
                  <div className="w-4 h-4 rounded-full bg-purple-600 group-hover:scale-150 transition-transform duration-500 -rotate-45"></div>
                  <div className="absolute inset-0 rounded-3xl border border-purple-500/20 group-hover:animate-ping -z-10"></div>
                </div>
              </div>

              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};
