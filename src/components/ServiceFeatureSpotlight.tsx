import React from 'react';
import { Check, Shield, Cpu, Activity, ArrowRight } from 'lucide-react';

interface ServiceFeatureSpotlightProps {
  onContactClick: () => void;
}

export const ServiceFeatureSpotlight: React.FC<ServiceFeatureSpotlightProps> = ({ onContactClick }) => {
  return (
    <section className="py-28 sm:py-36 bg-[#F7F8FA] text-[#071A2F] relative overflow-hidden border-y border-[#071A2F]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Engineering Standard */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#071A2F]/5 border border-[#071A2F]/10 text-xs font-bold uppercase tracking-[0.2em] text-[#071A2F] mb-6">
              <span>Operational Rigor</span>
            </div>

            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-extrabold uppercase tracking-tight text-[#071A2F] leading-[0.98] mb-6">
              ENGINEERED FOR<br />
              <span className="text-[#0D2945]">UNINTERRUPTED UPTIME.</span>
            </h2>

            <p className="text-lg text-[#071A2F]/80 leading-relaxed mb-8">
              Modern enterprises cannot afford fragmented delivery or unreliable infrastructure. Jarecha adheres to strict engineering methodologies, zero-trust cybersecurity protocols, and certified quality standards across every implementation.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded bg-[#071A2F] text-[#F5C400] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#071A2F]">End-to-End Project Accountability</h4>
                  <p className="text-xs text-[#071A2F]/70 mt-0.5">Direct oversight from design phase through commissioning, handover, and ongoing SLA maintenance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded bg-[#071A2F] text-[#F5C400] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#071A2F]">Standardized Institutional Specifications</h4>
                  <p className="text-xs text-[#071A2F]/70 mt-0.5">Enterprise hardware, shielded Cat6A/fiber optic backbones, and tested industrial components.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded bg-[#071A2F] text-[#F5C400] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#071A2F]">Full Regulatory Compliance</h4>
                  <p className="text-xs text-[#071A2F]/70 mt-0.5">Adherence to EIZ engineering guidelines, ZRA fiscal documentation, and ZPPA procurement standards.</p>
                </div>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#071A2F] hover:bg-[#0D2945] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
            >
              <span>Consult Our Engineering Team</span>
              <ArrowRight className="w-4 h-4 text-[#F5C400]" />
            </button>
          </div>

          {/* Right Column: Architectural Execution Matrix */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-white border border-[#071A2F]/10 shadow-[0_4px_20px_rgba(7,26,47,0.04)]">
                <div className="w-10 h-10 rounded-lg bg-[#071A2F]/5 text-[#071A2F] flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-[#071A2F] mb-1">Defense-in-Depth</h4>
                <p className="text-xs text-[#071A2F]/70 leading-relaxed">
                  Cybersecurity and physical access control synchronized for perimeter and network integrity.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#071A2F]/10 shadow-[0_4px_20px_rgba(7,26,47,0.04)]">
                <div className="w-10 h-10 rounded-lg bg-[#071A2F]/5 text-[#071A2F] flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-[#071A2F] mb-1">Smart Facilities</h4>
                <p className="text-xs text-[#071A2F]/70 leading-relaxed">
                  Automated lighting, IoT climate monitoring, and automated boardrooms reducing operational cost.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#071A2F]/10 shadow-[0_4px_20px_rgba(7,26,47,0.04)]">
                <div className="w-10 h-10 rounded-lg bg-[#071A2F]/5 text-[#071A2F] flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-[#071A2F] mb-1">Continuous Monitoring</h4>
                <p className="text-xs text-[#071A2F]/70 leading-relaxed">
                  Proactive network diagnostics, backup health checks, and preventive maintenance agreements.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#071A2F] text-white border border-[#071A2F] shadow-[0_4px_20px_rgba(7,26,47,0.15)] flex flex-col justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#F5C400] font-bold mb-2">
                    Institutional Standard
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Ready For Tenders & Large Deployments
                  </h4>
                  <p className="text-xs text-[#9AA4B2] leading-relaxed">
                    Complete statutory tax and corporate credentials available for formal RFP submissions.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 text-xs font-mono text-[#F5C400]">
                  ZPPA • PACRA • EIZ • ZRA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
