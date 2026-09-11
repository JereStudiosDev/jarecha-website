import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { WhatsAppIcon } from './ContactSection';
import { X, ArrowRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[990] flex flex-col items-end pointer-events-auto">
      {/* Desktop Floating Tooltip Card on Hover */}
      {showTooltip && (
        <div className="hidden sm:flex flex-col mb-3 p-4 bg-[#071A2F] border border-white/15 text-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] w-72 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5C400]">
                Direct WhatsApp Line
              </span>
            </div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-[#9AA4B2] hover:text-white p-0.5 focus:outline-none"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-[#9AA4B2] mb-3 leading-relaxed">
            Connect directly with Jarecha Investments for immediate project inquiries or service requests.
          </p>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 bg-[#25D366] hover:bg-[#20ba59] text-[#050608] font-bold text-xs rounded flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Start WhatsApp Chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Button */}
      <div className="flex items-center gap-2">
        {/* Mobile Compact Label */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden flex items-center gap-2 bg-[#071A2F]/95 backdrop-blur-md border border-white/10 px-3.5 py-2.5 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.5)] active:scale-95 transition-transform"
          aria-label="WhatsApp Jarecha"
        >
          <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white">
            <WhatsAppIcon className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-white tracking-wide">
            Chat on WhatsApp
          </span>
        </a>

        {/* Desktop Circular CTA */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="hidden sm:flex relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Contact"
        >
          {/* Subtle Ambient Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
          <WhatsAppIcon className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
        </a>
      </div>
    </div>
  );
};
