import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Cpu, ChevronDown } from 'lucide-react';
import { HERO_IMAGE, COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onExploreServices: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onContactClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-[#050608] flex flex-col justify-between pt-28 pb-16 overflow-hidden"
    >
      {/* Deep Navy Atmospheric Lighting & Vignette */}
      <div 
        className="absolute top-0 right-0 w-[65vw] h-[65vh] bg-gradient-to-b from-[#0D2945]/30 to-[#071A2F]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/4" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[45vw] h-[45vh] bg-[#071A2F]/25 rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />
      {/* Subtle engineered grid line */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 my-auto">
        {/* Top Status & Label */}
        <div 
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#071A2F]/80 border border-[#0D2945] mb-6 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F5C400] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#9AA4B2]">
              Jarecha Investments Limited • Multi-Sector Delivery
            </span>
          </div>
        </div>

        {/* Large Editorial Headline - Staggered Line Reveal */}
        <div className="overflow-hidden mb-6 sm:mb-8">
          <h1 className="font-display font-extrabold uppercase text-[#F7F8FA] tracking-[-0.035em] leading-[0.92] text-[clamp(2.75rem,8.5vw,7.8rem)]">
            <span 
              className={`block transition-all duration-700 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              SOLUTIONS
            </span>
            <span 
              className={`block transition-all duration-700 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              THAT MOVE
            </span>
            <span 
              className={`block transition-all duration-700 delay-450 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <span className="text-[#F7F8FA]">BUSINESS </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C400] via-[#FFD83D] to-[#F5C400]">
                FORWARD.
              </span>
            </span>
          </h1>
        </div>

        {/* Supporting Copy & Two Refined CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div 
            className={`lg:col-span-7 transition-all duration-700 delay-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-lg sm:text-xl text-[#9AA4B2] font-normal leading-relaxed max-w-2xl">
              Technology, engineering, security and business solutions engineered to empower modern organizations, commercial facilities, and industrial enterprises across Zambia.
            </p>
          </div>

          <div 
            className={`lg:col-span-5 flex flex-wrap sm:flex-nowrap gap-4 lg:justify-end transition-all duration-700 delay-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto px-7 py-4 bg-[#F5C400] hover:bg-[#FFD83D] text-[#050608] font-bold text-sm tracking-wider uppercase rounded transition-all duration-200 flex items-center justify-center gap-2 group shadow-[0_4px_20px_rgba(245,196,0,0.25)] hover:shadow-[0_8px_30px_rgba(245,196,0,0.4)]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-7 py-4 bg-[#071A2F]/80 hover:bg-[#0D2945] text-[#F7F8FA] hover:text-white font-medium text-sm tracking-wider uppercase rounded border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2 group backdrop-blur-sm"
            >
              <span>Talk to Jarecha</span>
              <ArrowRight className="w-4 h-4 text-[#F5C400] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Large Cinematic Hero Visual - Masked/Clip-path reveal */}
        <div 
          className={`relative rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.04]'
          }`}
        >
          <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full max-h-[580px] bg-[#071A2F] overflow-hidden">
            {/* The Cinematic Image with subtle Dark Navy Overlay */}
            <img
              src={HERO_IMAGE}
              alt="Jarecha Investments technological and engineering capabilities"
              className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-1000 ease-out"
              loading="eager"
            />
            {/* Navy & Black cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#071A2F]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/70 via-transparent to-[#071A2F]/60 pointer-events-none" />

            {/* Subtle Yellow accent line across bottom edge */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#F5C400] via-[#071A2F] to-transparent" />

            {/* Interactive Telemetry Overlay Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-[#F7F8FA]/90 bg-[#050608]/85 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#F5C400]" />
                <span className="font-semibold tracking-wide">Enterprise Infrastructure</span>
              </div>
              <span className="hidden sm:inline text-white/30">•</span>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#F5C400]" />
                <span className="text-[#9AA4B2]">Full Lifecycle Engineering</span>
              </div>
              <span className="hidden md:inline text-white/30">•</span>
              <span className="hidden md:inline text-[#9AA4B2] font-mono">EST. ZAMBIA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Prompt */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full mt-8 flex justify-between items-center text-xs text-[#9AA4B2]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
          <span>Multi-Disciplinary Operational Partner</span>
        </div>
        <button 
          onClick={onExploreServices}
          className="flex items-center gap-1.5 hover:text-[#F5C400] transition-colors focus:outline-none"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
