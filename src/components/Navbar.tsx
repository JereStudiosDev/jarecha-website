import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / winHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'intro', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Jarecha' },
    { id: 'industries', label: 'Industries' },
    { id: 'clients', label: 'Clients' },
    { id: 'compliance', label: 'Compliance' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar (Requirement 12: Thin yellow line at top that scales with scroll) */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#F5C400] z-[1001] transition-all duration-100 ease-out shadow-[0_0_8px_#F5C400]"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Navbar Container */}
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'bg-[#050608]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3.5'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-1.5 text-left group focus:outline-none"
            aria-label="Jarecha Investments Limited Home"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F7F8FA] group-hover:text-white transition-colors">
              JARECHA
            </span>
            <span className="w-2 h-2 rounded-full bg-[#F5C400] group-hover:scale-125 transition-transform" />
            <span className="hidden lg:inline-block ml-3 pl-3 border-l border-white/15 text-[11px] font-medium uppercase tracking-widest text-[#9AA4B2]">
              Investments Limited
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-sm font-medium transition-all duration-200 relative py-1 focus:outline-none ${
                    isActive ? 'text-[#F5C400]' : 'text-[#9AA4B2] hover:text-[#F7F8FA]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F5C400] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0977325804"
              className="text-xs font-semibold tracking-wider text-[#9AA4B2] hover:text-[#F7F8FA] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F5C400]" />
              <span>0977 325 804</span>
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-[#F5C400] hover:bg-[#FFD83D] text-[#050608] font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded transition-all duration-200 flex items-center gap-1.5 shadow-[0_2px_12px_rgba(245,196,0,0.25)] hover:shadow-[0_4px_16px_rgba(245,196,0,0.4)] active:scale-[0.98]"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F7F8FA] hover:text-[#F5C400] focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#050608] flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-widest text-[#F5C400] font-semibold">
              Navigation Menu
            </p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-2xl font-display font-semibold text-left text-[#F7F8FA] hover:text-[#F5C400] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-5 h-5 text-[#9AA4B2]" />
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-[#9AA4B2]">
              <Phone className="w-4 h-4 text-[#F5C400]" />
              <span>0977 325 804</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#9AA4B2]">
              <MessageSquare className="w-4 h-4 text-[#F5C400]" />
              <span>{COMPANY_INFO.email}</span>
            </div>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full bg-[#F5C400] text-[#050608] font-bold text-sm uppercase tracking-wider py-3.5 rounded flex items-center justify-center gap-2 mt-2"
            >
              <span>Speak to Jarecha</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
