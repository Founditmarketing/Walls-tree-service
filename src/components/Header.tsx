import { Facebook, Instagram, Youtube, Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Layer 1: Main Header (Now on top, orange background) */}
      <div className="bg-action-orange border-b-4 border-enterprise-green shadow-sm transition-all duration-300">
        <div className={`w-full px-4 md:px-8 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}>
          {/* Logo Overlapping Menu & Bar */}
          <div className={`z-[60] h-full flex items-center transition-all duration-300 ${isScrolled ? 'w-[65px] md:w-[75px]' : 'w-[80px] md:w-[90px]'}`}>
            <img 
              src="/wallstreelogo.png" 
              alt="Walls Tree Service Logo"
              className={`absolute top-1/2 -translate-y-1/2 left-4 md:left-8 h-auto drop-shadow-lg opacity-90 transition-all duration-300 ${isScrolled ? 'w-[65px] md:w-[75px]' : 'w-[80px] md:w-[90px]'}`}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8">
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
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden md:block bg-enterprise-black text-white font-heading font-bold uppercase tracking-wider text-sm px-6 py-2.5 hover:bg-gray-900 transition-colors rounded-none">
              Get a Free Quote
            </button>
            <div className="md:hidden flex items-center gap-2.5 mr-2">
              <a href="https://www.facebook.com/wallstreeservice" target="_blank" rel="noreferrer" className="text-enterprise-black hover:text-white transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/walls_tree_service/" target="_blank" rel="noreferrer" className="text-enterprise-black hover:text-white transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.tiktok.com/@wallstreeservice" target="_blank" rel="noreferrer" className="text-enterprise-black hover:text-white transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://www.youtube.com/@wallstreesvc" target="_blank" rel="noreferrer" className="text-enterprise-black hover:text-white transition-colors" aria-label="YouTube"><Youtube className="w-4 h-4" /></a>
            </div>
            <button 
              className="lg:hidden p-2 bg-black/10 text-enterprise-black hover:bg-black/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Layer 2: Info Bar (Now underneath, centered) */}
      <div className="bg-enterprise-green text-white py-2 px-4 md:px-8 text-[10px] md:text-sm font-semibold tracking-wider flex justify-end md:justify-center items-center gap-4 md:gap-8 flex-wrap text-right md:text-center shadow-md">
        <div className="flex items-center justify-end md:justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-2">
            <Phone className="w-3 h-3 md:w-4 md:h-4 text-action-orange" />
            24/7 EMERGENCY: CALL NOW! (318) 880-6075
          </span>
          <span className="hidden md:inline-block text-white/60">|</span>
          <span className="hidden md:inline-block">ISA CERTIFIED</span>
          <span className="hidden md:inline-block text-white/60">|</span>
        </div>
        <div className="flex items-center justify-end md:justify-center gap-6 flex-wrap">
          <div className="hidden md:flex items-center gap-3">
            <a href="https://www.facebook.com/wallstreeservice" target="_blank" rel="noreferrer" className="hover:text-action-orange transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/walls_tree_service/" target="_blank" rel="noreferrer" className="hover:text-action-orange transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
            <a href="https://www.tiktok.com/@wallstreeservice" target="_blank" rel="noreferrer" className="hover:text-action-orange transition-colors" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a href="https://www.youtube.com/@wallstreesvc" target="_blank" rel="noreferrer" className="hover:text-action-orange transition-colors" aria-label="YouTube"><Youtube className="w-4 h-4" /></a>
          </div>
          <a href="#" className="hidden md:block hover:text-action-orange transition-colors uppercase">Careers</a>
        </div>
      </div>

      {/* Mobile Menu Overlay Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-Out Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] sm:w-[400px] bg-enterprise-white z-[100] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col shadow-2xl border-l-[6px] border-action-orange ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <img src="/wallstreelogo.png" alt="Walls Tree Service" className="w-[50px] opacity-90" />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 bg-gray-100 text-enterprise-black hover:bg-action-orange hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-8 gap-6 overflow-y-auto flex-grow">
          {['Services', 'Emergency', 'Reviews', 'Process', 'About', 'Contact'].map((item, index) => (
            <div key={item} className="overflow-hidden -mx-2 px-2">
              <a 
                href={`#${item.toLowerCase()}`}
                className={`block font-heading font-bold text-2xl uppercase tracking-widest text-enterprise-black hover:text-action-orange transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 75}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            </div>
          ))}
          
          <div className={`mt-auto pt-8 border-t border-gray-200 flex flex-col gap-6 transition-all duration-700 delay-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
             <button className="bg-action-orange text-white font-heading font-bold uppercase tracking-wider text-sm px-6 py-5 hover:bg-enterprise-black transition-colors rounded-none w-full shadow-lg">
                Get a Free Quote
              </button>
              <div className="flex items-center justify-center gap-6 pb-4">
                <a href="https://www.facebook.com/wallstreeservice" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors"><Facebook className="w-6 h-6" /></a>
                <a href="https://www.instagram.com/walls_tree_service/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="https://www.tiktok.com/@wallstreeservice" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
                <a href="https://www.youtube.com/@wallstreesvc" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors"><Youtube className="w-6 h-6" /></a>
              </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
