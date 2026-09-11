import React, { useState } from 'react';
import { PRINCIPLES } from '../data/companyData';
import { ArrowUpRight, ShieldCheck, Check } from 'lucide-react';

interface WhyJarechaProps {
  onContactClick: () => void;
}

export const WhyJarecha: React.FC<WhyJarechaProps> = ({ onContactClick }) => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  return (
    <section id="why-us" className="py-32 sm:py-44 bg-[#050608] text-[#F7F8FA] relative overflow-hidden">
      {/* Subtle navy background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#071A2F]/30 rounded-full blur-[180px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header with Large Typography */}
        <div className="mb-24 sm:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#071A2F] border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5C400] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
            <span>Why Organizations Choose Jarecha</span>
          </div>

          <h2 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold uppercase tracking-tight text-white leading-[0.92] max-w-4xl">
            BUILT FOR<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F7F8FA] to-[#9AA4B2]">
              REAL-WORLD NEEDS.
            </span>
          </h2>
        </div>

        {/* Large Horizontal Principles - Engineered rows with yellow numbers and subtle navy lines */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {PRINCIPLES.map((principle, index) => {
            const isActive = activePrinciple === index;

            return (
              <div
                key={principle.number}
                onMouseEnter={() => setActivePrinciple(index)}
                onClick={() => setActivePrinciple(index)}
                className={`py-10 sm:py-14 transition-all duration-300 cursor-pointer group relative ${
                  isActive ? 'bg-[#071A2F]/40' : 'hover:bg-[#071A2F]/15'
                }`}
              >
                {/* Active yellow accent bar on left */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-[#F5C400] transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-baseline px-4 sm:px-6">
                  {/* Yellow Large Number */}
                  <div className="md:col-span-2">
                    <span className="font-display text-4xl sm:text-6xl font-light text-[#F5C400] tracking-tighter">
                      {principle.number}
                    </span>
                  </div>

                  {/* Principle Title */}
                  <div className="md:col-span-4">
                    <h3 className={`font-display text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-[#F7F8FA] group-hover:text-white'
                    }`}>
                      {principle.title}
                    </h3>
                  </div>

                  {/* Description & Expanded Detail */}
                  <div className="md:col-span-6 flex flex-col justify-between">
                    <p className="text-base sm:text-lg text-[#F7F8FA]/90 font-medium leading-relaxed">
                      {principle.description}
                    </p>
                    <p className="text-sm text-[#9AA4B2] leading-relaxed mt-2">
                      {principle.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credibility Summary Footer */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-[#9AA4B2]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F5C400]" />
            <span>Strict engineering specifications • Zero compromise on durability</span>
          </div>
          <button
            onClick={onContactClick}
            className="text-xs font-semibold text-[#F5C400] hover:text-[#FFD83D] flex items-center gap-1 uppercase tracking-wider"
          >
            <span>Discuss your project with an engineer</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
