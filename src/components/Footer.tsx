import React from 'react';
import { COMPANY_INFO, SERVICE_GROUPS } from '../data/companyData';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './ContactSection';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] text-[#F7F8FA] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                JARECHA
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F5C400]" />
            </div>
            <p className="text-sm font-semibold text-[#F5C400] mb-3">
              Jarecha Investments Limited
            </p>
            <p className="text-sm text-[#9AA4B2] leading-relaxed max-w-sm mb-6">
              A multi-disciplinary corporate partner delivering technology, engineering, security, digital transformation and business solutions across Zambia.
            </p>
            <div className="text-xs font-mono text-[#9AA4B2]/70 space-y-1">
              <p>Registration: PACRA Certified Entity</p>
              <p>Engineering: EIZ Registered Practice</p>
              <p>Procurement: ZPPA Supplier Listed</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5C400] font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#9AA4B2]">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('intro')} className="hover:text-white transition-colors">
                  About Jarecha
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('why-us')} className="hover:text-white transition-colors">
                  Why Jarecha
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-white transition-colors">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('clients')} className="hover:text-white transition-colors">
                  Clients & Partners
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('compliance')} className="hover:text-white transition-colors">
                  Compliance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Core Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5C400] font-semibold mb-5">
              Divisions
            </h4>
            <ul className="space-y-3 text-sm text-[#9AA4B2]">
              {SERVICE_GROUPS.map((group) => (
                <li key={group.number}>
                  <button 
                    onClick={() => onNavigate('services')}
                    className="hover:text-white text-left transition-colors"
                  >
                    <span className="text-[#F5C400] font-mono mr-1.5 text-xs">{group.number}</span>
                    {group.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5C400] font-semibold mb-5">
              Direct Contact
            </h4>
            <ul className="space-y-4 text-sm text-[#9AA4B2]">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5C400] shrink-0" />
                <a href="tel:0977325804" className="hover:text-white font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F5C400] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white break-all">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5C400] shrink-0 mt-0.5" />
                <span>Lusaka, Copperbelt & Nationwide, Zambia</span>
              </li>
              <li className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#071A2F] border border-white/10 hover:border-[#F5C400]/40 text-xs font-semibold text-white transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Live Line</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9AA4B2]">
          <p>
            © 2026 Jarecha Investments Limited. All Rights Reserved. Republic of Zambia.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#F5C400] hover:text-[#FFD83D] transition-colors focus:outline-none font-semibold uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
