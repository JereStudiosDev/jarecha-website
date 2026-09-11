import React, { useState } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Globe, 
  Mail, 
  Workflow, 
  Cpu, 
  Building2, 
  Video, 
  GraduationCap, 
  FileSpreadsheet,
  ArrowRight,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICE_GROUPS } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem, groupTitle: string) => void;
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onContactClick }) => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const renderIcon = (iconName: string, isHovered: boolean) => {
    const props = { 
      className: `w-5 h-5 transition-all duration-300 ${isHovered ? 'text-[#F5C400] scale-110' : 'text-[#9AA4B2]'}` 
    };
    switch (iconName) {
      case 'Server': return <Server {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Mail': return <Mail {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Video': return <Video {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} />;
      default: return <Server {...props} />;
    }
  };

  return (
    <section id="services" className="py-32 sm:py-40 bg-[#071A2F] text-[#F7F8FA] relative overflow-hidden">
      {/* Deep structural navy glow & ambient styling */}
      <div 
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#0D2945]/40 rounded-full blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-[#050608]/60 rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-24 sm:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D2945] border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5C400] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
            <span>Core Capabilities & Infrastructure</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-6">
            BUILT AROUND<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C400] to-[#FFD83D]">
              YOUR NEEDS.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#9AA4B2] font-normal leading-relaxed">
            We reject siloed delivery. Every service group represents an integrated institutional offering designed for continuous operations, high security, and long-term performance.
          </p>
        </div>

        {/* 4 Major Service Groups - Alternating Layouts */}
        <div className="space-y-32 sm:space-y-44">
          {SERVICE_GROUPS.map((group, index) => {
            const isEven = index % 2 === 1; // 0: text left / image right; 1: image left / text right; etc.

            return (
              <div
                key={group.number}
                className="pt-10 border-t border-white/10 transition-all duration-500"
              >
                {/* Group Metadata Bar */}
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl sm:text-5xl font-light text-[#F5C400] tracking-tighter">
                      {group.number}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#9AA4B2] font-mono">
                    {group.services.length} Specialized {group.services.length === 1 ? 'Solution' : 'Solutions'}
                  </span>
                </div>

                {/* Alternating 2-Column Presentation */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${
                  isEven ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                }`}>
                  {/* Left (or Right) Content Column: Headline & Interactive Services List */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div className="mb-8">
                      <h4 className="text-2xl sm:text-3xl font-display font-semibold text-[#F7F8FA] mb-4 leading-tight">
                        {group.headline}
                      </h4>
                      <p className="text-base text-[#9AA4B2] leading-relaxed max-w-2xl">
                        {group.description}
                      </p>
                    </div>

                    {/* Interactive Service Items */}
                    <div className="space-y-3">
                      {group.services.map((service) => {
                        const isHovered = hoveredServiceId === service.id;

                        return (
                          <div
                            key={service.id}
                            onMouseEnter={() => setHoveredServiceId(service.id)}
                            onMouseLeave={() => setHoveredServiceId(null)}
                            onClick={() => onSelectService(service, group.title)}
                            className={`group relative p-5 sm:p-6 rounded-lg transition-all duration-300 cursor-pointer border ${
                              isHovered
                                ? 'bg-[#0D2945]/90 border-[#F5C400]/60 translate-x-1 shadow-[0_10px_25px_rgba(0,0,0,0.4)]'
                                : 'bg-[#0D2945]/30 border-white/5 hover:border-white/15'
                            }`}
                          >
                            {/* Subtle Yellow indicator bar on hover */}
                            <div 
                              className={`absolute left-0 top-0 bottom-0 w-1 bg-[#F5C400] rounded-l transition-opacity duration-300 ${
                                isHovered ? 'opacity-100' : 'opacity-0'
                              }`} 
                            />

                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-4">
                                <div className="mt-0.5 p-2 rounded bg-[#071A2F] border border-white/10">
                                  {renderIcon(service.iconName, isHovered)}
                                </div>

                                <div>
                                  <div className="flex items-center gap-2">
                                    <h5 className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                                      isHovered ? 'text-[#F5C400]' : 'text-[#F7F8FA]'
                                    }`}>
                                      {service.title}
                                    </h5>
                                  </div>
                                  <p className="text-xs sm:text-sm text-[#9AA4B2] mt-1 line-clamp-2 leading-relaxed">
                                    {service.shortDesc}
                                  </p>

                                  {/* Fast capabilities badges when hovered */}
                                  {isHovered && (
                                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10 animate-in fade-in duration-200">
                                      {service.capabilities.slice(0, 2).map((cap, i) => (
                                        <span key={i} className="text-[11px] text-[#F7F8FA]/90 bg-[#071A2F] px-2.5 py-1 rounded border border-white/10 flex items-center gap-1">
                                          <CheckCircle2 className="w-3 h-3 text-[#F5C400]" />
                                          <span>{cap}</span>
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Arrow shift: on hover changes from → to → → */}
                              <div className="flex items-center text-sm font-semibold tracking-wider transition-all duration-200 shrink-0 text-[#9AA4B2] group-hover:text-[#F5C400]">
                                <span className="text-xs mr-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  Details
                                </span>
                                <div className="flex items-center">
                                  <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                                    isHovered ? 'translate-x-1 text-[#F5C400]' : ''
                                  }`} />
                                  {isHovered && (
                                    <ArrowRight className="w-3.5 h-3.5 -ml-1 text-[#F5C400] animate-in fade-in slide-in-from-left-1 duration-200" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right (or Left) Column: Large Editorial Feature Image */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group">
                      <div className="aspect-[4/3] sm:aspect-[16/11] bg-[#050608] overflow-hidden">
                        <img
                          src={group.image}
                          alt={group.imageAlt}
                          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Deep Navy Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/30 to-transparent pointer-events-none" />
                      
                      {/* Image Badge / Label */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-[#071A2F]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#F5C400]">
                            Division {group.number}
                          </p>
                          <p className="text-xs font-semibold text-white mt-0.5">
                            {group.title}
                          </p>
                        </div>
                        <button
                          onClick={() => onSelectService(group.services[0], group.title)}
                          className="text-xs font-semibold text-[#F5C400] hover:text-[#FFD83D] flex items-center gap-1 focus:outline-none"
                        >
                          <span>Explore</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA within Services */}
        <div className="mt-28 p-8 sm:p-12 rounded-xl bg-[#0D2945]/50 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Have a tailored technical requirement?
            </h4>
            <p className="text-sm sm:text-base text-[#9AA4B2] max-w-xl">
              From full corporate network overhauls to industrial engineering projects and statutory audits, we design around your exact organizational scope.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="w-full md:w-auto px-8 py-4 bg-[#F5C400] hover:bg-[#FFD83D] text-[#050608] font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2 shrink-0 shadow-[0_4px_16px_rgba(245,196,0,0.3)]"
          >
            <span>Request Technical Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
