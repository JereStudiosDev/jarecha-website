import React, { useState } from 'react';
import { 
  Pickaxe, 
  HeartPulse, 
  GraduationCap, 
  Landmark, 
  Briefcase, 
  Factory, 
  Building,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { INDUSTRIES } from '../data/companyData';
import { Industry } from '../types';

interface IndustriesSectionProps {
  onSelectIndustry?: (industry: Industry) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIndustryIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'Pickaxe': return <Pickaxe {...props} />;
      case 'HeartPulse': return <HeartPulse {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Landmark': return <Landmark {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Factory': return <Factory {...props} />;
      case 'Building': return <Building {...props} />;
      default: return <Building {...props} />;
    }
  };

  return (
    <section id="industries" className="py-32 sm:py-44 bg-[#071A2F] text-[#F7F8FA] relative overflow-hidden">
      {/* Subtle atmospheric navy-light glow */}
      <div 
        className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-[#0D2945]/50 rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D2945] border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5C400] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
            <span>Multi-Sector Deployment</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-6">
            SUPPORTING ORGANIZATIONS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F7F8FA] to-[#9AA4B2]">
              ACROSS MULTIPLE SECTORS.
            </span>
          </h2>
          <p className="text-lg text-[#9AA4B2] font-normal leading-relaxed">
            From demanding extractive environments to critical provincial hospitals and municipal institutions, Jarecha tailors engineering and technology delivery to industry-specific operational realities.
          </p>
        </div>

        {/* Interactive Industry Rows / Grid */}
        <div 
          className="border-t border-white/10 divide-y divide-white/10"
          onMouseLeave={() => setHoveredId(null)}
        >
          {INDUSTRIES.map((ind, index) => {
            const isHovered = hoveredId === ind.id;
            const isAnyHovered = hoveredId !== null;
            const isDimmed = isAnyHovered && !isHovered;

            return (
              <div
                key={ind.id}
                onMouseEnter={() => setHoveredId(ind.id)}
                className={`py-8 sm:py-10 px-4 sm:px-6 transition-all duration-300 relative cursor-pointer group ${
                  isHovered 
                    ? 'bg-[#0D2945]/70 translate-x-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]' 
                    : isDimmed 
                    ? 'opacity-40' 
                    : 'opacity-100 hover:bg-[#0D2945]/20'
                }`}
              >
                {/* Yellow accent line on hover */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#F5C400] transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Left: Sector Index & Icon & Name */}
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <span className="text-xs font-mono text-[#F5C400] w-6">
                      0{index + 1}
                    </span>
                    <div className={`p-2.5 rounded-lg border transition-all duration-300 ${
                      isHovered ? 'bg-[#071A2F] border-[#F5C400]/50 text-[#F5C400]' : 'bg-[#0D2945]/50 border-white/10 text-[#9AA4B2]'
                    }`}>
                      {getIndustryIcon(ind.iconName)}
                    </div>
                    <h3 className={`font-display text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-200 ${
                      isHovered ? 'text-[#F5C400]' : 'text-white'
                    }`}>
                      {ind.name}
                    </h3>
                  </div>

                  {/* Middle: Industry Specific Capabilities */}
                  <div className="lg:col-span-6">
                    <p className={`text-sm sm:text-base transition-colors duration-200 leading-relaxed ${
                      isHovered ? 'text-white' : 'text-[#9AA4B2]'
                    }`}>
                      {ind.description}
                    </p>
                    <span className="inline-block mt-2 text-xs font-mono text-[#9AA4B2]/80">
                      Scope: {ind.scope}
                    </span>
                  </div>

                  {/* Right: Arrow reveal */}
                  <div className="lg:col-span-2 flex justify-end">
                    <div className={`flex items-center gap-2 text-sm font-semibold tracking-wider transition-all duration-300 ${
                      isHovered ? 'text-[#F5C400] translate-x-1' : 'text-[#9AA4B2] opacity-50'
                    }`}>
                      <span className={`text-xs uppercase tracking-wider transition-opacity duration-200 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}>
                        Active
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
