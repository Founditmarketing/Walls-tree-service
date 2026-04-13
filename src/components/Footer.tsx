import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-enterprise-black pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <div className="w-24 md:w-28">
              <img 
                src="/wallstreelogo.png" 
                alt="Walls Tree Service" 
                className="w-full h-auto opacity-90 drop-shadow-lg"
              />
            </div>
            <p className="font-sans text-gray-400 text-sm leading-relaxed">
              The Professional Enterprise.<br />
              Your Danger Tree & Emergency Experts.
            </p>
            <div className="space-y-2 pt-4">
              <p className="font-sans text-sm text-gray-400">749 McKeithen Dr.<br />Alexandria, LA 71303</p>
              <p className="font-heading font-bold text-action-orange text-lg">Phone: (318) 880-6075</p>
              <p className="font-sans text-sm text-gray-400">Hours: OPEN 24/7</p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-5 pt-4">
              <a href="https://www.facebook.com/wallstreeservice" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/walls_tree_service/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.tiktok.com/@wallstreeservice" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://www.youtube.com/@wallstreesvc" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-action-orange transition-colors" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6 border-b border-gray-800 pb-4">
              Services
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-400">
              <li><a href="#" className="hover:text-action-orange transition-colors">Professional Tree Removal</a></li>
              <li><a href="#" className="hover:text-action-orange transition-colors">Expert Pruning & Trimming</a></li>
              <li><a href="#" className="hover:text-action-orange transition-colors">24/7 Emergency Response</a></li>
              <li><a href="#" className="hover:text-action-orange transition-colors">Structural Cabling & Bracing</a></li>
              <li><a href="#" className="hover:text-action-orange transition-colors">Stump Grinding</a></li>
              <li><a href="#" className="hover:text-action-orange transition-colors">Arborist Consultations</a></li>
            </ul>
          </div>

          {/* Column 3: Areas */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6 border-b border-gray-800 pb-4">
              Service Areas
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-400">
              <li>Seattle Metro</li>
              <li>Bellevue & Eastside</li>
              <li>Redmond</li>
              <li>Kirkland</li>
              <li>Issaquah</li>
              <li>Renton</li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6 border-b border-gray-800 pb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-400">
              <li><a href="#about" className="hover:text-action-orange transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-action-orange transition-colors">Our Process</a></li>
              <li><a href="#reviews" className="hover:text-action-orange transition-colors">Client Reviews</a></li>
              <li><a href="#" className="hover:text-action-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-action-orange transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-action-orange transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Walls Tree Service. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans font-bold text-xs text-gray-400 uppercase tracking-widest">Fully Licensed & Insured</span>
            <span className="font-sans font-bold text-xs text-gray-400 uppercase tracking-widest">ISA Certified</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="font-sans text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
