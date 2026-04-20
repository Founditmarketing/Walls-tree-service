import { Facebook, Instagram, Youtube, Menu, Phone, X, ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_NAV } from '../data/services';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

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
    <header ref={dropdownRef} className="fixed top-0 w-full z-50">

      {/* ── Mega-menu panel — rendered at header level, outside any CSS transform ── */}
      {servicesOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-4 border-t-action-orange z-50 overflow-hidden"
          onMouseEnter={() => {
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
            setServicesOpen(true);
          }}
          onMouseLeave={() => {
            hoverTimeout.current = setTimeout(() => setServicesOpen(false), 150);
          }}
        >
          <div className="flex w-full">

            {/* Left: Brand Panel */}
            <div className="w-72 xl:w-96 flex-shrink-0 bg-enterprise-green p-8 flex flex-col justify-between">
              <div>
                <p className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-action-orange mb-3">Our Services</p>
                <h3 className="font-heading font-light text-2xl xl:text-3xl text-white uppercase tracking-tighter leading-tight mb-6">
                  ISA Certified<br /><span className="font-bold">Tree Care</span>
                </h3>
                <div className="space-y-2.5 mb-6">
                  {[
                    '20+ Years Experience',
                    'ISA Certified Arborists',
                    '24/7 Emergency Response',
                    'Licensed & Fully Insured',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 bg-action-orange rounded-full flex-shrink-0" />
                      <p className="font-sans text-[11px] text-white/60 uppercase tracking-wider">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="tel:3188806075"
                className="block text-center bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-xs px-4 py-3 hover:bg-white hover:text-action-orange transition-colors"
              >
                Call (318) 880-6075
              </a>
            </div>

            {/* Right: Services grid */}
            <div className="flex-1 grid grid-cols-2 divide-x divide-y divide-gray-100 border-l border-gray-100">
              {SERVICE_NAV.map(({ label, slug, navDesc }) => (
                <Link
                  key={slug}
                  to={`/services/${slug}`}
                  onClick={() => setServicesOpen(false)}
                  className="group flex items-center justify-between px-6 py-5 hover:bg-orange-50 transition-colors"
                >
                  <div>
                    <p className="font-heading font-bold text-xs uppercase tracking-widest text-enterprise-black group-hover:text-action-orange transition-colors mb-1">
                      {label}
                    </p>
                    <p className="font-sans text-[10px] text-gray-400 leading-snug group-hover:text-gray-500 transition-colors">
                      {navDesc}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-200 group-hover:text-action-orange group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                </Link>
              ))}

              {/* CTA tile */}
              <Link
                to="/contact"
                onClick={() => setServicesOpen(false)}
                className="group flex items-center justify-between px-6 py-5 bg-enterprise-black hover:bg-action-orange transition-colors"
              >
                <div>
                  <p className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-1">Free Estimate</p>
                  <p className="font-sans text-[10px] text-gray-400 group-hover:text-white/70 transition-colors">No obligation · Fast response</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-action-orange group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* Layer 1: Main Header */}
      <div className="bg-action-orange transition-all duration-300">
        <div className={`w-full px-4 md:px-8 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}>
          {/* Logo */}
          <div className={`z-[60] h-full flex items-center transition-all duration-300 ${isScrolled ? 'w-[65px] md:w-[75px]' : 'w-[80px] md:w-[90px]'}`}>
            <Link to="/">
              <img
                src="/wallstreelogo.png"
                alt="Walls Tree Service Logo"
                className={`absolute top-1/2 -translate-y-1/2 left-4 md:left-8 h-auto drop-shadow-lg opacity-90 transition-all duration-300 ${isScrolled ? 'w-[65px] md:w-[75px]' : 'w-[80px] md:w-[90px]'}`}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8">
            <Link to="/" className="font-sans font-bold text-sm uppercase tracking-widest text-enterprise-black hover:text-white transition-colors">
              Home
            </Link>

            {/* Services button only — panel is lifted to header level above */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => {
                if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                hoverTimeout.current = setTimeout(() => setServicesOpen(false), 150);
              }}
              className="flex items-center gap-1 font-sans font-bold text-sm uppercase tracking-widest text-enterprise-black hover:text-white transition-colors"
            >
              Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <Link to="/reviews" className="font-sans font-bold text-sm uppercase tracking-widest text-enterprise-black hover:text-white transition-colors">Reviews</Link>
            <Link to="/our-work" className="font-sans font-bold text-sm uppercase tracking-widest text-enterprise-black hover:text-white transition-colors">Our Work</Link>
            <Link to="/about" className="font-sans font-bold text-sm uppercase tracking-widest text-enterprise-black hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="font-sans font-bold text-sm uppercase tracking-widest text-enterprise-black hover:text-white transition-colors">Contact</Link>
            <Link to="/blog" className="font-sans font-bold text-sm uppercase tracking-widest text-enterprise-black hover:text-white transition-colors">Blog</Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/contact" className="hidden md:block bg-enterprise-black text-white font-heading font-bold uppercase tracking-wider text-sm px-6 py-2.5 hover:bg-gray-900 transition-colors rounded-none">
              Get a Free Quote
            </Link>
            <div className="md:hidden flex items-center gap-2.5 mr-2">
              <a href="https://www.facebook.com/wallstreeservice" target="_blank" rel="noreferrer" className="text-enterprise-black hover:text-white transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/walls_tree_service/" target="_blank" rel="noreferrer" className="text-enterprise-black hover:text-white transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.tiktok.com/@wallstreeservice" target="_blank" rel="noreferrer" className="text-enterprise-black hover:text-white transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
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
      <div className="bg-enterprise-green border-b border-black/10 text-white py-1 md:py-2 pl-4 pr-1 sm:pr-2 md:px-8 text-[10px] md:text-sm font-semibold tracking-wider flex justify-end md:justify-center items-center gap-4 md:gap-8 flex-wrap text-right md:text-center w-full">
        <div className="flex items-center justify-end md:justify-center gap-4 flex-wrap w-full md:w-auto">
          <span className="flex items-center gap-1.5 md:gap-2 justify-end w-full md:w-auto">
            <Phone className="w-3 h-3 md:w-4 md:h-4 text-action-orange" />
            24/7 EMERGENCY: CALL NOW! (318) 880-6075
          </span>
          <span className="hidden md:inline-block text-white/60">|</span>
          <span className="hidden md:inline-block">ISA CERTIFIED</span>
          <span className="hidden md:inline-block text-white/60">|</span>
        </div>
        <div className="hidden md:flex items-center justify-center gap-6 flex-wrap">
          <a href="https://www.facebook.com/wallstreeservice" target="_blank" rel="noreferrer" className="hover:text-action-orange transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
          <a href="https://www.instagram.com/walls_tree_service/" target="_blank" rel="noreferrer" className="hover:text-action-orange transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
          <a href="https://www.tiktok.com/@wallstreeservice" target="_blank" rel="noreferrer" className="hover:text-action-orange transition-colors" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
          </a>
          <a href="https://www.youtube.com/@wallstreesvc" target="_blank" rel="noreferrer" className="hover:text-action-orange transition-colors" aria-label="YouTube"><Youtube className="w-4 h-4" /></a>
        </div>
      </div>

      {/* Mobile Menu Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-Out Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] sm:w-[400px] bg-enterprise-white z-[120] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col shadow-2xl border-l-[6px] border-action-orange ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
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
          {/* Home */}
          <div>
            <Link
              to="/"
              className={`block font-heading font-bold text-2xl uppercase tracking-widest text-enterprise-black hover:text-action-orange transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '0ms' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </div>

          {/* Services expandable */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between font-heading font-bold text-2xl uppercase tracking-widest text-enterprise-black hover:text-action-orange transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '75ms' }}
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-action-orange' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 ml-2 flex flex-col gap-2 border-l-2 border-action-orange pl-4">
                {SERVICE_NAV.map(({ label, slug }) => (
                  <Link
                    key={slug}
                    to={`/services/${slug}`}
                    className="font-sans font-bold text-sm uppercase tracking-widest text-gray-600 hover:text-action-orange transition-colors py-1"
                    onClick={() => { setIsMobileMenuOpen(false); setMobileServicesOpen(false); }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Reviews */}
          <div>
            <Link
              to="/reviews"
              className={`block font-heading font-bold text-2xl uppercase tracking-widest text-enterprise-black hover:text-action-orange transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${2 * 75}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </Link>
          </div>
          <div>
            <Link
              to="/our-work"
              className={`block font-heading font-bold text-2xl uppercase tracking-widest text-enterprise-black hover:text-action-orange transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${3 * 75}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Work
            </Link>
          </div>
          <div>
            <Link
              to="/about"
              className={`block font-heading font-bold text-2xl uppercase tracking-widest text-enterprise-black hover:text-action-orange transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${4 * 75}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="/contact"
              className={`block font-heading font-bold text-2xl uppercase tracking-widest text-enterprise-black hover:text-action-orange transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${5 * 75}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div>
            <Link
              to="/blog"
              className={`block font-heading font-bold text-2xl uppercase tracking-widest text-enterprise-black hover:text-action-orange transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${6 * 75}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>

          <div className={`mt-auto pt-8 border-t border-gray-200 flex flex-col gap-6 transition-all duration-700 delay-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center bg-action-orange text-white font-heading font-bold uppercase tracking-wider text-sm px-6 py-5 hover:bg-enterprise-black transition-colors rounded-none w-full shadow-lg"
            >
              Get a Free Quote
            </Link>
            <div className="flex items-center justify-center gap-6 pb-4">
              <a href="https://www.facebook.com/wallstreeservice" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="https://www.instagram.com/walls_tree_service/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="https://www.tiktok.com/@wallstreeservice" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
              </a>
              <a href="https://www.youtube.com/@wallstreesvc" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
