
import React from 'react';

const benefitItems = [
  "Founders who are currently the 'bottleneck' for operations",
  "Sales leaders tired of managing sloppy CRM data",
  "Operations managers looking for consistency in delivery",
  "Finance teams wanting to automate the quote-to-cash cycle",
  "Marketing teams needing to prove revenue contribution"
];

const sectorItems = [
  "B2B service providers with complex sales cycles",
  "E-commerce brands needing sophisticated retention",
  "SaaS companies scaling their lead-to-onboarding flow",
  "High-ticket agencies managing multiple client pipelines",
  "Professional firms looking to modernize client interaction"
];

export const AudienceSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 space-y-16 sm:space-y-32 px-4" id="audience">
      <div className="reveal flex flex-col items-start gap-4">
        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-purple-600">Strategic Alignment</span>
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-lander font-black text-white tracking-tighter leading-[1.1] sm:leading-none">Who This System Is For</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
        {/* Left Column: Benefits */}
        <div className="reveal reveal-delay-1 space-y-12">
          <div className="flex items-center gap-6">
            <div className="w-12 h-[1px] bg-purple-500/30"></div>
            <h3 className="text-[14px] font-brand font-black uppercase tracking-[0.3em] text-[#8b5cf6]">System Benefits</h3>
          </div>
          <div className="space-y-4">
            {benefitItems.map((p, i) => (
              <div key={i} className="glass-panel p-6 group hover:translate-x-4 transition-all duration-500 cursor-default">
                <div className="flex items-center gap-6">
                  <span className="text-[#8b5cf6] font-bold text-xl group-hover:rotate-12 transition-transform">→</span>
                  <p className="text-[18px] text-[#94a3b8] font-sodo group-hover:text-white transition-colors">{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sectors */}
        <div className="reveal reveal-delay-2 space-y-12">
          <div className="flex items-center gap-6">
            <div className="w-12 h-[1px] bg-purple-500/30"></div>
            <h3 className="text-[14px] font-brand font-black uppercase tracking-[0.3em] text-[#8b5cf6]">Core Sectors</h3>
          </div>
          <div className="space-y-4">
            {sectorItems.map((p, i) => (
              <div key={i} className="glass-panel p-6 group hover:translate-x-4 transition-all duration-500 cursor-default">
                <div className="flex items-center gap-6">
                  <span className="text-[#8b5cf6] font-bold text-xl group-hover:-rotate-12 transition-transform">→</span>
                  <p className="text-[18px] text-[#94a3b8] font-sodo group-hover:text-white transition-colors">{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
