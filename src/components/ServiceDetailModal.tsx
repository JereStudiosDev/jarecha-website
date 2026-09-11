import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { WhatsAppIcon } from './ContactSection';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  groupTitle: string;
  onClose: () => void;
  onInquire: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  groupTitle,
  onClose,
  onInquire,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-[#050608]/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200" 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#071A2F] border border-white/15 rounded-2xl p-6 sm:p-10 text-white shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#0D2945] hover:bg-[#0D2945]/80 text-[#9AA4B2] hover:text-white transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Group tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D2945] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#F5C400] mb-4">
          <span>{groupTitle}</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
          {service.title}
        </h3>

        <p className="text-base text-[#9AA4B2] leading-relaxed mb-8">
          {service.fullDesc}
        </p>

        {/* Capabilities Checklist */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-white/70 font-semibold mb-4">
            Key Scope & Technical Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.capabilities.map((cap, i) => (
              <div 
                key={i} 
                className="p-3.5 rounded-lg bg-[#0D2945]/40 border border-white/10 flex items-start gap-3 text-sm text-[#F7F8FA]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F5C400] shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action CTAs */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={`https://wa.me/260977325804?text=Hello%20Jarecha%20Investments,%20I%20am%20inquiring%20about%20${encodeURIComponent(service.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 bg-[#F5C400] hover:bg-[#FFD83D] text-[#050608] font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#050608]" />
            <span>WhatsApp Inquire</span>
          </a>

          <button
            onClick={() => {
              onInquire(service.title);
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-3 bg-[#0D2945] hover:bg-[#0D2945]/80 text-white font-semibold text-xs uppercase tracking-wider rounded border border-white/10 flex items-center justify-center gap-2 transition-colors"
          >
            <span>Open Consultation Form</span>
            <ArrowRight className="w-4 h-4 text-[#F5C400]" />
          </button>
        </div>
      </div>
    </div>
  );
};
