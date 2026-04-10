import { Facebook, Instagram, Linkedin, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Layer 1: Main Header (Now on top, orange background) */}
      <div className="bg-action-orange border-b-4 border-enterprise-green shadow-sm">
        <div className="w-full px-4 md:px-8 h-20 flex justify-between items-center">
          {/* Logo Overlapping Menu & Bar */}
          <div className="relative z-[60] w-[80px] md:w-[110px] h-full flex items-start">
            <img 
              src="/wallstreelogo.png" 
              alt="Walls Tree Service Logo"
              className="absolute top-[55px] md:top-[58px] -translate-y-1/2 left-0 w-full h-auto drop-shadow-lg opacity-90"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Services', 'Emergency', 'Reviews', 'Process', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-sans font-bold text-sm uppercase tracking-widest text-enterprise-black hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-enterprise-black text-white font-heading font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-gray-900 transition-colors rounded-none">
              Get a Free Quote
            </button>
            <button 
              className="lg:hidden p-2 text-enterprise-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Layer 2: Info Bar (Now underneath, centered) */}
      <div className="bg-enterprise-green text-white py-2 px-4 md:px-8 text-xs md:text-sm font-semibold tracking-wider flex justify-center items-center gap-4 md:gap-8 flex-wrap text-center shadow-md">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-action-orange" />
            24/7 EMERGENCY: CALL NOW! 555-0198
          </span>
          <span className="hidden md:inline-block text-white/60">|</span>
          <span className="hidden md:inline-block">ISA CERTIFIED</span>
          <span className="hidden md:inline-block text-white/60">|</span>
        </div>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="hover:text-action-orange transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-action-orange transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-action-orange transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
          <a href="#" className="hover:text-action-orange transition-colors uppercase">Careers</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-action-orange border-b-4 border-enterprise-green absolute w-full">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {['Services', 'Emergency', 'Reviews', 'Process', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-sans font-bold text-lg uppercase tracking-widest text-enterprise-black hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-enterprise-black text-white font-heading font-bold uppercase tracking-wider text-sm px-8 py-4 mt-4 hover:bg-gray-900 transition-colors rounded-none w-full">
              Get a Free Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
