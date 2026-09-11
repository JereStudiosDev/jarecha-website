import React from 'react';
import { Layers, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

interface IntroSectionProps {
  onLearnMore: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="intro" className="py-28 sm:py-36 bg-[#F7F8FA] text-[#071A2F] relative overflow-hidden">
      {/* Subtle architectural background divider */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,26,47,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(7,26,47,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow / Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded bg-[#071A2F]/5 border border-[#071A2F]/10 text-[#071A2F] text-xs font-bold uppercase tracking-[0.18em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#071A2F]" />
            <span>Jarecha Investments Limited</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold uppercase tracking-tight text-[#071A2F] leading-[0.98] mb-8">
            ONE PARTNER.<br />
            <span className="text-[#0D2945]">MULTIPLE SOLUTIONS.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-[#071A2F]/80 font-normal leading-relaxed mb-10 max-w-3xl">
            Jarecha Investments Limited is a multi-disciplinary enterprise partner delivering technology infrastructure, engineering systems, facility security, digital transformation, and business solutions designed around the operational demands of modern organizations.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#071A2F]/10 mt-12">
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#071A2F] text-[#F5C400] flex items-center justify-center mb-5 shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#071A2F] mb-3">
                Single Point of Accountability
              </h3>
              <p className="text-sm text-[#071A2F]/70 leading-relaxed">
                By bringing technology, engineering, and administrative competencies under one roof, we eliminate multi-vendor friction and consolidate project ownership.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#071A2F] text-[#F5C400] flex items-center justify-center mb-5 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#071A2F] mb-3">
                Institutional Reliability
              </h3>
              <p className="text-sm text-[#071A2F]/70 leading-relaxed">
                We engineer systems for uptime and long-term durability. From structured network cabling to industrial engineering, every deployment is rigorously tested.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#071A2F] text-[#F5C400] flex items-center justify-center mb-5 shadow-sm">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#071A2F] mb-3">
                Zambian Operational Depth
              </h3>
              <p className="text-sm text-[#071A2F]/70 leading-relaxed">
                Serving mining firms, hospitals, municipal councils, and commercial corporations across Zambia with active compliance and regional ground experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
