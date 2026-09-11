import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceFeatureSpotlight } from './components/ServiceFeatureSpotlight';
import { WhyJarecha } from './components/WhyJarecha';
import { IndustriesSection } from './components/IndustriesSection';
import { ClientsSection } from './components/ClientsSection';
import { ComplianceSection } from './components/ComplianceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedService, setSelectedService] = useState<{
    service: ServiceItem;
    groupTitle: string;
  } | null>(null);

  // Scroll spy to update active section in Navbar
  useEffect(() => {
    const sections = ['hero', 'intro', 'services', 'why-us', 'industries', 'clients', 'compliance', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem, groupTitle: string) => {
    setSelectedService({ service, groupTitle });
  };

  const handleInquireFromModal = (serviceTitle: string) => {
    handleNavigate('contact');
    // Pre-fill service field if available
    const serviceSelect = document.getElementById('service') as HTMLSelectElement | null;
    if (serviceSelect) {
      serviceSelect.value = serviceTitle;
    }
  };

  return (
    <div className="min-h-screen bg-[#050608] text-[#F7F8FA] flex flex-col selection:bg-[#F5C400] selection:text-[#050608]">
      {/* 1. Global Navigation Bar with Scroll Progress & Mobile Drawer */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Main Content Sections with alternating visual rhythm */}
      <main className="flex-1">
        {/* 1. HERO — BLACK / NAVY (Cinematic full viewport, line reveals, realistic commercial photo, clamp typography) */}
        <Hero 
          onExploreServices={() => handleNavigate('services')}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* 2. INTRO — LIGHT (#F7F8FA) (High-contrast editorial introduction, single accountability) */}
        <IntroSection 
          onLearnMore={() => handleNavigate('why-us')}
        />

        {/* 3. SERVICES — NAVY (#071A2F) (4 major groups, alternating layouts, hover interactions with yellow indicators) */}
        <ServicesSection 
          onSelectService={handleSelectService}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* 4. SERVICE FEATURE SPOTLIGHT — LIGHT (#F7F8FA) (High-precision execution, enterprise standards) */}
        <ServiceFeatureSpotlight 
          onContactClick={() => handleNavigate('contact')}
        />

        {/* 5. WHY JARECHA — BLACK (#050608) (Large horizontal principles, yellow numbers, navy lines) */}
        <WhyJarecha 
          onContactClick={() => handleNavigate('contact')}
        />

        {/* 6. INDUSTRIES — NAVY (#071A2F) (Interactive list/grid with spotlight glow and dimming of other items) */}
        <IndustriesSection />

        {/* 7. CLIENTS & PARTNERS — LIGHT (#F7F8FA) (8 authentic Zambian clients, clean architectural layout) */}
        <ClientsSection />

        {/* 8. COMPLIANCE — NAVY (#071A2F) (PACRA, Workers Comp, NAPSA, EIZ, ZPPA, ZRA with line icons) */}
        <ComplianceSection 
          onContactClick={() => handleNavigate('contact')}
        />

        {/* 9. FINAL CTA & FORM — BLACK (#050608) (LET'S BUILD SOMETHING BETTER, dark navy inputs, inline success state) */}
        <ContactSection />
      </main>

      {/* 10. FOOTER — BLACK (#050608) (Clean architectural footer) */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Persistent WhatsApp CTA (Requirement 18) */}
      <FloatingWhatsApp />

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService.service}
          groupTitle={selectedService.groupTitle}
          onClose={() => setSelectedService(null)}
          onInquire={handleInquireFromModal}
        />
      )}
    </div>
  );
}
