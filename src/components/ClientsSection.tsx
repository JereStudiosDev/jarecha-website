import React from 'react';
import { CLIENTS } from '../data/companyData';
import { Building2, ArrowUpRight } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="py-28 sm:py-36 bg-[#F7F8FA] text-[#071A2F] relative overflow-hidden border-y border-[#071A2F]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#071A2F]/5 border border-[#071A2F]/10 text-xs font-bold uppercase tracking-[0.2em] text-[#071A2F] mb-6">
            <span>Client & Institutional Portfolio</span>
          </div>

          <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold uppercase tracking-tight text-[#071A2F] leading-[0.98] mb-6">
            TRUSTED BY ORGANIZATIONS<br />
            <span className="text-[#0D2945]">ACROSS ZAMBIA.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#071A2F]/75 leading-relaxed">
            Delivering technology systems, engineering infrastructure, surveillance, and business services to mining enterprises, provincial referral hospitals, civic municipal councils, and commercial companies.
          </p>
        </div>

        {/* Client Grid - Professional Architectural Text Placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CLIENTS.map((client, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white border border-[#071A2F]/10 hover:border-[#071A2F]/30 hover:shadow-[0_12px_30px_rgba(7,26,47,0.08)] transition-all duration-300 flex flex-col justify-between group min-h-[160px] relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-[#F5C400] transition-colors duration-300" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#071A2F]/50">
                    Institutional Partner 0{index + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-[#071A2F]/60 bg-[#071A2F]/5 px-2 py-0.5 rounded">
                    {client.location}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-[#071A2F] group-hover:text-[#0D2945] transition-colors leading-snug">
                  {client.name}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-[#071A2F]/5 flex items-center justify-between text-xs text-[#071A2F]/70">
                <span>{client.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#071A2F]/30 group-hover:bg-[#F5C400] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#071A2F]/60 font-mono">
            Direct operational partner • Engaged across Lusaka, Copperbelt, and regional hubs
          </p>
        </div>
      </div>
    </section>
  );
};
