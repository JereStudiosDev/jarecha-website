import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle2, Clock, MapPin, Send } from 'lucide-react';
import { COMPANY_INFO, SERVICE_GROUPS } from '../data/companyData';

export const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-32 sm:py-44 bg-[#050608] text-[#F7F8FA] relative overflow-hidden">
      {/* Navy atmospheric back-glow */}
      <div 
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#071A2F]/40 rounded-full blur-[200px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left Column: Direct Contact Details & Editorial Headline */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#071A2F] border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5C400] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400]" />
              <span>Direct Engagement</span>
            </div>

            <h2 className="font-display text-[clamp(2.75rem,6.5vw,6rem)] font-extrabold uppercase tracking-tight text-white leading-[0.92] mb-8">
              LET’S BUILD<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C400] to-[#FFD83D]">
                SOMETHING BETTER.
              </span>
            </h2>

            <p className="text-lg text-[#9AA4B2] font-normal leading-relaxed mb-10 max-w-xl">
              Have a technology infrastructure requirement, engineering challenge, security setup, or institutional procurement mandate? Talk directly with our senior operations team.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-12">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-[#F5C400] hover:bg-[#FFD83D] text-[#050608] font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(245,196,0,0.3)] hover:shadow-[0_6px_28px_rgba(245,196,0,0.45)] group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#050608]" />
                <span>WhatsApp Jarecha</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="w-full sm:w-auto px-7 py-4 bg-[#071A2F] hover:bg-[#0D2945] text-white font-semibold text-xs uppercase tracking-wider rounded border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-[#F5C400]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Structured Contact Data Card */}
            <div className="p-8 rounded-xl bg-[#071A2F]/40 border border-white/10 space-y-6 max-w-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#071A2F] border border-white/10 text-[#F5C400] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#9AA4B2] font-semibold">
                    Phone & WhatsApp Inquiries
                  </h4>
                  <p className="text-lg font-bold text-white mt-0.5">
                    {COMPANY_INFO.phone}
                  </p>
                  <p className="text-xs text-[#9AA4B2]">Available during standard corporate business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-white/5">
                <div className="p-3 rounded-lg bg-[#071A2F] border border-white/10 text-[#F5C400] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#9AA4B2] font-semibold">
                    Official Corporate Email
                  </h4>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="text-base sm:text-lg font-bold text-white hover:text-[#F5C400] transition-colors mt-0.5 block break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-[#9AA4B2]">Technical specifications, RFP notices, tender documents</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-white/5">
                <div className="p-3 rounded-lg bg-[#071A2F] border border-white/10 text-[#F5C400] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#9AA4B2] font-semibold">
                    Geographic Operations
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Lusaka, Copperbelt & Regional Hubs, Zambia
                  </p>
                  <p className="text-xs text-[#9AA4B2]">Nationwide on-site project execution capability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form with Dark Navy Background & Inline Success State */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#071A2F] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  Request an Institutional Consultation
                </h3>
                <p className="text-sm text-[#9AA4B2]">
                  Fill in your project requirements. Our technical directors review and respond promptly.
                </p>
              </div>

              {submitted ? (
                /* Requirement 19: Elegant inline success state (NO alert()!) */
                <div className="py-12 px-6 rounded-xl bg-[#0D2945]/60 border border-[#F5C400]/40 text-center animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#F5C400]/15 border-2 border-[#F5C400] text-[#F5C400] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F5C400] block mb-2">
                    Confirmation
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                    Message Received.
                  </h4>
                  <p className="text-base text-[#F7F8FA]/90 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you for contacting <span className="font-semibold text-white">Jarecha Investments Limited</span>. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        company: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-[#F5C400] hover:text-[#FFD83D] underline underline-offset-4 focus:outline-none"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#9AA4B2] font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Mwansa Chilufya"
                        className="w-full px-4 py-3.5 rounded bg-[#0D2945]/50 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-1 focus:ring-[#F5C400] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs uppercase tracking-wider text-[#9AA4B2] font-semibold mb-2">
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Enterprise / Mine / Hospital"
                        className="w-full px-4 py-3.5 rounded bg-[#0D2945]/50 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-1 focus:ring-[#F5C400] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#9AA4B2] font-semibold mb-2">
                        Official Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full px-4 py-3.5 rounded bg-[#0D2945]/50 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-1 focus:ring-[#F5C400] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#9AA4B2] font-semibold mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="097X XXX XXX"
                        className="w-full px-4 py-3.5 rounded bg-[#0D2945]/50 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-1 focus:ring-[#F5C400] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs uppercase tracking-wider text-[#9AA4B2] font-semibold mb-2">
                      Primary Service Requirement *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded bg-[#0D2945] border border-white/10 text-white text-sm focus:outline-none focus:border-[#F5C400] focus:ring-1 focus:ring-[#F5C400] transition-colors"
                    >
                      <option value="" disabled>Select service domain...</option>
                      {SERVICE_GROUPS.map((group) => (
                        <optgroup key={group.number} label={`${group.number} — ${group.title}`}>
                          {group.services.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      <option value="Multi-disciplinary Consultation">Multi-disciplinary Project Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#9AA4B2] font-semibold mb-2">
                      Project Scope & Details *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your timeline, facility site, hardware/software specifications, or tender requirements..."
                      className="w-full px-4 py-3.5 rounded bg-[#0D2945]/50 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#F5C400] focus:ring-1 focus:ring-[#F5C400] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-[#F5C400] hover:bg-[#FFD83D] disabled:opacity-50 text-[#050608] font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(245,196,0,0.25)] hover:shadow-[0_8px_24px_rgba(245,196,0,0.4)] cursor-pointer mt-4"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry to Jarecha</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#9AA4B2] pt-2">
                    Your details are securely treated in compliance with corporate privacy standards.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
