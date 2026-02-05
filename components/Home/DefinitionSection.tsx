
import React from 'react';

export const DefinitionSection: React.FC = () => {
  return (
    <div className="space-y-40 py-20" id="concept">
      <div className="reveal flex flex-col items-center text-center gap-4 sm:gap-6 px-4">
        <span className="text-[10px] sm:text-[12px] font-black text-purple-500 uppercase tracking-[0.5em]">The Concept</span>
        <h2 className="text-[32px] sm:text-[48px] md:text-[84px] font-lander font-black text-white tracking-tighter leading-[1.1] sm:leading-none max-w-5xl">
          What is a <span className="text-reveal">Unified Platform?</span>
        </h2>
      </div>

      <div className="reveal stagger-1 relative group px-4">
        {/* Outer glow */}
        <div className="absolute -inset-1 rounded-[30px] sm:rounded-[40px] blur opacity-20 
                  group-hover:opacity-40 transition duration-1000 
                  group-hover:duration-200 z-0"></div>

        {/* Glass container */}
        <div className="relative glass-morphism p-8 sm:p-14 md:p-24 
                  overflow-hidden rounded-[30px] sm:rounded-[40px] border-white/10">

          {/* Top gradient line (FIXED) */}
          <div className="absolute top-0 left-0 w-full h-[2px]
                    bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500
                    shadow-[0_0_20px_rgba(139,92,246,0.8)]
                    z-20">
          </div>

          <p className="relative z-10 text-xl sm:text-3xl md:text-[54px] font-bold text-white 
                  leading-[1.2] sm:leading-[1.1] tracking-tighter max-w-6xl">
            A system where data flows{" "}
            <span className="italic text-purple-400">automatically</span> from lead
            capture through sales, payment, and delivery—with{" "}
            <span className="bg-white text-black px-2 sm:px-4 py-1 rounded-sm rotate-1 inline-block">
              zero manual handoffs.
            </span>
          </p>

          {/* Decorative scanner effect */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="w-full h-[2px] bg-purple-500/20
                      shadow-[0_0_20px_rgba(139,92,246,0.5)]
                      top-0 animate-[scan_8s_linear_infinite]">
            </div>
          </div>
        </div>
      </div>


      <div className="grid md:grid-cols-3 gap-10 md:gap-16 lg:gap-20 px-6 sm:px-4">
        {[
          {
            title: "Core Infrastructure",
            text: "Every business stage shares data automatically. When a lead is captured, the system enriches it and routes it instantly without human intervention."
          },
          {
            title: "Integrated Nodes",
            list: [
              "Autonomous Lead Enrichment",
              "Event-Driven Communication",
              "Real-time Pipeline State Sync",
              "Automated Revenue Reconciliation",
              "Systemic Delivery Tracking"
            ]
          },
          {
            title: "The Scale Factor",
            text: "Disconnected tools create administrative ceilings. A unified platform turns your operations into an asset that grows without adding headcount."
          }
        ].map((item, idx) => (
          <div key={idx} className={`reveal stagger-${idx + 1} space-y-10 group`}>
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-purple-500 group-hover:w-16 transition-all duration-500"></div>
              <h3 className="text-[13px] font-brand font-black text-white uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">{item.title}</h3>
            </div>
            {item.text && <p className="text-[19px] text-slate-400 leading-relaxed font-sodo font-light">{item.text}</p>}
            {item.list && (
              <ul className="space-y-6">
                {item.list.map((stage, i) => (
                  <li key={i} className="flex items-center gap-5 text-[18px] text-slate-400 font-sodo font-light hover:text-white transition-colors cursor-default">
                    <div className="w-2 h-2 rounded-full border border-purple-500 group-hover:bg-purple-500 transition-all"></div>
                    {stage}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};
