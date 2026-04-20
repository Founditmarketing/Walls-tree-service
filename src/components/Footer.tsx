import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-enterprise-black pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <Link to="/" className="inline-block w-20 md:w-24">
              <img
                src="/wallstreelogo.png"
                alt="Walls Tree Service"
                className="w-full h-auto opacity-90 drop-shadow-lg"
              />
            </Link>
            <p className="font-sans text-gray-400 text-sm leading-relaxed">
              The Professional Enterprise.<br />
              Your Danger Tree &amp; Emergency Experts.
            </p>
            <div className="space-y-2 pt-4">
              <p className="font-sans text-sm text-gray-400">749 McKeithen Dr.<br />Alexandria, LA 71303</p>
              <a href="tel:3188806075" className="font-heading font-bold text-action-orange text-lg block hover:text-white transition-colors">Phone: (318) 880-6075</a>
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
              <li><Link to="/services/tree-removal" className="hover:text-action-orange transition-colors">Professional Tree Removal</Link></li>
              <li><Link to="/services/tree-pruning-trimming" className="hover:text-action-orange transition-colors">Expert Pruning &amp; Trimming</Link></li>
              <li><Link to="/services/emergency" className="hover:text-action-orange transition-colors">24/7 Emergency Response</Link></li>
              <li><Link to="/services/cabling-bracing" className="hover:text-action-orange transition-colors">Structural Cabling &amp; Bracing</Link></li>
              <li><Link to="/services/danger-tree-removal" className="hover:text-action-orange transition-colors">Danger Tree Removal</Link></li>
              <li><Link to="/services/tree-inspection" className="hover:text-action-orange transition-colors">Arborist Inspections</Link></li>
            </ul>
          </div>

          {/* Column 3: Areas */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6 border-b border-gray-800 pb-4">
              Service Areas
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-400">
              <li>Alexandria, LA</li>
              <li>Pineville, LA</li>
              <li>Natchitoches, LA</li>
              <li>Leesville, LA</li>
              <li>Marksville, LA</li>
              <li>Central Louisiana</li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6 border-b border-gray-800 pb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-action-orange transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-action-orange transition-colors">Gallery</Link></li>
              <li><Link to="/our-work" className="hover:text-action-orange transition-colors">Our Work</Link></li>
              <li><Link to="/service-areas" className="hover:text-action-orange transition-colors">Service Areas</Link></li>
              <li><Link to="/reviews" className="hover:text-action-orange transition-colors">Client Reviews</Link></li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Walls+Tree+Service/@31.2814292,-92.5398991,17z/data=!4m8!3m7!1s0x863ab75ca69d38b5:0x4247560a5bf954fe!8m2!3d31.2814292!4d-92.5398991!9m1!1b1!16s%2Fg%2F11rd92mb0_?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-action-orange transition-colors"
                >
                  Leave a Review ↗
                </a>
              </li>
              <li><Link to="/careers" className="hover:text-action-orange transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-action-orange transition-colors">Contact</Link></li>
              <li><a href="tel:3188806075" className="hover:text-action-orange transition-colors">Call Now</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Walls Tree Service. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans font-bold text-xs text-gray-400 uppercase tracking-widest">Fully Licensed &amp; Insured</span>
            <span className="font-sans font-bold text-xs text-gray-400 uppercase tracking-widest">ISA Certified</span>
          </div>
          <div className="flex gap-4">
            <span className="font-sans text-xs text-gray-600">Privacy Policy</span>
            <span className="font-sans text-xs text-gray-600">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
