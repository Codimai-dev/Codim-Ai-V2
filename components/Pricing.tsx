
import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const PLANS = [
  {
    name: "Growth",
    price: "997",
    desc: "For solo founders scaling fast.",
    features: ["500 Leads / month", "Clay Enrichment", "AI Email Sequences", "Direct CRM Integration"]
  },
  {
    name: "Revenue Engine",
    price: "2,497",
    desc: "The complete automated layer.",
    features: ["2.5k Leads / month", "Omni-Nurturing", "Custom CRM Sync", "Priority Engineering Hub", "GEO Optimization"],
    primary: true
  },
  {
    name: "Powerhouse",
    price: "Custom",
    desc: "High-volume sales engineering.",
    features: ["Unlimited Prospecting", "Custom API Nodes", "White-glove Build", "Dedicated Architect", "Infinite GEO Signals"]
  }
];

interface PricingProps {
  theme?: 'light' | 'dark';
  onBookDemo?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ theme = 'light', onBookDemo }) => {
  const isDark = theme === 'dark';

  return (
    <section id="pricing" className={`py-24 sm:py-32 px-6 transition-colors duration-1000 relative overflow-hidden ${isDark ? 'bg-wispr-dark' : 'bg-wispr-cream'}`}>
      {/* Background Shimmer Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-wispr-purple to-transparent opacity-20 animate-shimmer"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-40 reveal-advanced active">
          <span className="font-pike font-black uppercase text-[12px] mb-8 block tracking-[0.5em] text-wispr-purple bg-wispr-purple/10 w-fit mx-auto px-6 py-2 rounded-full">INVESTMENT ARCHITECTURE</span>
          <h2 className={`font-lander text-7xl md:text-[11rem] font-bold leading-[0.8] tracking-tighter ${isDark ? 'text-wispr-cream' : 'text-wispr-dark'}`}>
            One fee.<br />
            <span className="text-slate-400">One engine.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start font-sodo perspective-xl">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`reveal-advanced active p-16 rounded-[4.5rem] flex flex-col relative transition-all duration-700 transform-gpu hover:-translate-y-8 hover:shadow-[0_80px_160px_rgba(0,0,0,0.15)] border group overflow-hidden ${isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10 text-wispr-cream'
                : 'bg-white border-wispr-dark/10 text-wispr-dark'
                } ${plan.primary ? (isDark ? 'ring-4 ring-wispr-purple/20' : 'ring-4 ring-wispr-purple/10 shadow-2xl') : ''}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Internal Glass Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[2000ms] pointer-events-none"></div>

              {plan.primary && (
                <div className={`font-pike absolute -top-0 left-1/2 -translate-x-1/2 text-[11px] font-black px-8 py-3 rounded-b-3xl uppercase tracking-[0.3em] shadow-xl ${isDark ? 'bg-wispr-purple text-wispr-dark' : 'bg-wispr-dark text-white'
                  }`}>
                  <div className="flex items-center gap-2">
                    <Zap size={12} fill="currentColor" /> MOST EFFICIENT
                  </div>
                </div>
              )}

              <div className="mb-14 pt-4">
                <h3 className={`text-4xl font-bold mb-4 tracking-tighter ${isDark ? 'text-wispr-cream' : 'text-wispr-dark'}`}>{plan.name}</h3>
                <p className={`text-lg font-bold opacity-40 transition-opacity group-hover:opacity-80`}>{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-16 group-hover:scale-110 transition-transform duration-700 origin-left">
                <span className={`text-7xl font-bold tracking-tighter ${isDark ? 'text-wispr-cream' : 'text-wispr-dark'}`}>
                  {plan.price !== "Custom" ? `$${plan.price}` : "Custom"}
                </span>
                {plan.price !== "Custom" && <span className={`font-black text-2xl opacity-20`}>/mo</span>}
              </div>

              <div className="space-y-7 mb-20 flex-1">
                {plan.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-5 transition-transform duration-500 hover:translate-x-2 group/feature">
                    <div className={`w-8 h-8 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${isDark ? 'bg-white/5 group-hover/feature:bg-wispr-purple' : 'bg-wispr-cream group-hover/feature:bg-wispr-purple'
                      }`}>
                      <Check size={18} className={`transition-colors ${isDark ? 'text-wispr-purple group-hover/feature:text-wispr-dark' : 'text-wispr-dark group-hover/feature:text-wispr-dark'}`} />
                    </div>
                    <span className={`text-lg font-bold transition-all ${isDark ? 'text-white/60 group-hover/feature:text-white' : 'text-slate-600 group-hover/feature:text-wispr-dark'}`}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onBookDemo}
                className={`w-full py-8 rounded-[2.5rem] font-black text-xl transition-all flex items-center justify-center gap-4 relative overflow-hidden group/btn active:scale-95 ${plan.primary
                  ? 'bg-wispr-purple text-wispr-dark shadow-[0_30px_60px_rgba(216,180,254,0.3)]'
                  : (isDark ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10' : 'bg-wispr-dark text-white shadow-xl hover:bg-black')
                  }`}>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-3">
                  {plan.price === "Custom" ? "Talk to Architect" : "Activate Engine"}
                  <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform" />
                </span>
              </button>

              <div className="mt-8 flex items-center justify-center gap-3 opacity-20 group-hover:opacity-60 transition-opacity">
                <ShieldCheck size={14} />
                <span className="font-pike text-[10px] font-black tracking-widest uppercase">SECURE STACK</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 p-12 bg-white/5 border border-white/10 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left reveal-advanced active">
          <div>
            <h4 className={`text-2xl font-bold mb-2 ${isDark ? 'text-wispr-cream' : 'text-wispr-dark'}`}>Need a white-glove migration?</h4>
            <p className="opacity-40 font-bold">Our engineering team can handle the total stack transfer in 72 hours.</p>
          </div>
          <button
            onClick={onBookDemo}
            className={`px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border transition-all hover:scale-105 ${isDark ? 'border-white/20 text-white hover:bg-white hover:text-wispr-dark' : 'border-wispr-dark/20 text-wispr-dark hover:bg-wispr-dark hover:text-white'
              }`}>
            Contact Engineering
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
