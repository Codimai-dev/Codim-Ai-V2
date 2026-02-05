import React, { useEffect, useState, useRef } from 'react';
import { Monitor, ArrowRight, Cpu, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookDemo?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-wispr-cream flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden text-center z-10">

      {/* Immersive Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}>
        <div className="absolute top-[-10%] left-1/4 w-[70vw] h-[70vw] bg-wispr-purple/10 blur-[200px] rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] right-1/4 w-[60vw] h-[60vw] bg-wispr-purple/5 blur-[180px] rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative px-4 flex flex-col items-center">

        {/* Animated Badge */}
        <div className="reveal-advanced active mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-3 bg-wispr-dark text-wispr-cream rounded-full font-brand text-[10px] font-black tracking-[0.4em] uppercase shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/5 group overflow-hidden cursor-default">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Sparkles size={16} className="text-wispr-purple animate-pulse" />
            <span className="relative">Integrated Pipeline Hub v2.5</span>
          </div>
        </div>

        {/* High-End Staged Typography */}
        <div className="reveal-advanced active mb-12 sm:mb-20 px-4">
          <h1 className="font-lander tracking-tighter select-none perspective-xl leading-[0.9] sm:leading-none">
            <div className="text-mask-reveal block mb-2 sm:mb-4">
              <span className="lux-span text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-light text-slate-400 italic inline-block" style={{ animationDelay: '0.2s' }}>
                One system,
              </span>
            </div>
            <br className="hidden sm:block" />
            <div className="text-mask-reveal block">
              <span className="lux-span text-[4rem] sm:text-[6.5rem] md:text-[9rem] lg:text-[12rem] font-black text-wispr-dark inline-block" style={{ animationDelay: '0.5s' }}>
                just growth.
              </span>
            </div>
          </h1>
        </div>

        {/* Interactive Staged Sub-copy */}
        <div className="reveal-advanced active max-w-3xl mx-auto mb-16 sm:mb-24 px-4" style={{ transitionDelay: '0.8s' }}>
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-500 font-medium leading-relaxed font-sodo">
            The unified sales layer that bridges the gap between<br className="hidden md:block" />
            <span className="inline-flex items-center gap-2 sm:gap-3 text-wispr-dark font-black hover:text-wispr-purple transition-all hover:scale-110 cursor-help">
              <Zap size={20} className="text-wispr-purple sm:w-6 sm:h-6" /> visibility
            </span>
            <span className="mx-2 sm:mx-5 text-slate-200">/</span>
            <span className="inline-flex items-center gap-2 sm:gap-3 text-wispr-dark font-black hover:text-wispr-purple transition-all hover:scale-110 cursor-help">
              <Cpu size={20} className="text-wispr-purple sm:w-6 sm:h-6" /> prospecting
            </span>
            <span className="mx-2 sm:mx-5 text-slate-200">/</span>
            <span className="inline-flex items-center gap-2 sm:gap-3 text-wispr-dark font-black hover:text-wispr-purple transition-all hover:scale-110 cursor-help">
              closing.
            </span>
          </p>
        </div>

        {/* Enhanced Call to Action */}
        <div className="reveal-advanced active w-full flex flex-col items-center px-4" style={{ transitionDelay: '1.2s' }}>
          <button
            type="button"
            onClick={onBookDemo}
            className="bg-wispr-dark text-white px-6 sm:pl-8 sm:pr-12 py-4 sm:py-6 rounded-2xl sm:rounded-[2.5rem] text-lg sm:text-xl font-black flex items-center gap-4 sm:gap-6 shadow-[0_30px_60px_rgba(0,0,0,0.2)] font-sodo group relative overflow-hidden transition-all duration-300 hover:scale-[1.05] hover:shadow-wispr-purple/20 active:scale-95 border border-white/10 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-wispr-purple/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-wispr-purple text-wispr-dark rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:rotate-[-12deg] group-hover:scale-110 transition-transform shadow-xl">
              <Monitor className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
            </div>
            <span>Audit My Pipeline</span>
            <ArrowRight strokeWidth={3} className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-4 transition-transform opacity-70 group-hover:opacity-100" />
          </button>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 font-brand text-[10px] md:text-[11px] text-slate-400 font-black uppercase tracking-[0.4em] md:tracking-[0.5em] opacity-40 text-center">
            <div className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <span>Sync Node Active</span>
            </div>
            <div className="hidden md:block w-[1.5px] h-5 bg-slate-300"></div>
            <span>Engine v2.5 Stable</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;