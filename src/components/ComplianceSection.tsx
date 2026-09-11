import React, { useState } from 'react';
import { 
  FileCheck, 
  Shield, 
  Award, 
  Landmark, 
  Scale, 
  FileText,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { COMPLIANCE_ITEMS } from '../data/companyData';
import { ComplianceBody } from '../types';

interface ComplianceSectionProps {
  onContactClick: () => void;
}

export const ComplianceSection: React.FC<ComplianceSectionProps> = ({ onContactClick }) => {
  const [activeItem, setActiveItem] = useState<ComplianceBody | null>(null);

  const getComplianceIcon = (id: string, isHovered: boolean) => {
    const props = {
      className: `w-6 h-6 transition-all duration-300 ${
        isHovered ? 'text-[#F5C400] scale-110' : 'text-[#9AA4B2]'
      }`
    };

    switch (id) {
      case 'pacra': return <Landmark {...props} />;
      case 'workers-comp': return <Shield {...props} />;
      case 'napsa': return <Award {...props} />;
      case 'eiz': return <Scale {...props} />;
      case 'zppa': return <FileCheck {...props} />;
      case 'zra': return <FileText {...props} />;
      default: return <FileCheck {...props} />;
    }
  };

  return (
    <section id="compliance" className="py-32 sm:py-44 bg-[#071A2F] text-[#F7F8FA] relative overflow-hidden">
      {/* Deep navy atmospheric lighting */}
      <div 
        className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#0D2945]/40 rounded-full blur-[180px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D2945] border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5C400] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
            <span>Statutory Governance & Credentials</span>
          </div>

          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-6">
            PROFESSIONAL.<br />
            COMPLIANT.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C400] to-[#FFD83D]">
              ACCOUNTABLE.
            </span>
          </h2>

          <p className="text-lg text-[#9AA4B2] font-normal leading-relaxed">
            Jarecha Investments Limited maintains all active registrations, tax filings, and institutional certifications mandated to execute public and private contracts responsibly in the Republic of Zambia.
          </p>
        </div>

        {/* Minimal Line-Based Compliance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPLIANCE_ITEMS.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group p-8 rounded-xl bg-[#0D2945]/30 hover:bg-[#0D2945]/80 border border-white/10 hover:border-[#F5C400]/40 transition-all duration-300 relative flex flex-col justify-between cursor-pointer"
              >
                {/* Yellow Accent Line on Top */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-[#F5C400] transition-colors duration-300" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-[#071A2F] border border-white/10 group-hover:border-[#F5C400]/30 transition-colors">
                      {getComplianceIcon(item.id, true)}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#F5C400] bg-[#071A2F] px-2.5 py-1 rounded border border-white/5">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#F5C400] transition-colors mb-2">
                    {item.acronym}
                  </h3>
                  <h4 className="text-xs font-semibold text-[#9AA4B2] mb-3 leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-sm text-[#9AA4B2] leading-relaxed group-hover:text-white/80 transition-colors">
                    {item.scope}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#9AA4B2] group-hover:text-[#F5C400]">
                  <span>Verification on Request</span>
                  <div className="flex items-center gap-1">
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on official documents */}
        <div className="mt-12 p-6 rounded-xl bg-[#0D2945]/20 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9AA4B2]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#F5C400]" />
            <span>Certified copies of registrations & Tax Clearance Certificates are provided upon formal tender and commercial engagement.</span>
          </div>
          <button
            onClick={onContactClick}
            className="text-xs font-bold text-[#F5C400] hover:text-[#FFD83D] flex items-center gap-1 uppercase tracking-wider shrink-0"
          >
            <span>Request Documentation Pack</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
