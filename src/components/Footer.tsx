export default function Footer() {
  return (
    <footer id="contact" className="bg-enterprise-black pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-heading font-light text-2xl text-white leading-none tracking-tighter uppercase">
                Walls
              </span>
              <span className="font-sans font-bold text-[0.65rem] text-action-orange tracking-[0.2em] uppercase mt-1">
                Tree Service
              </span>
            </div>
            <p className="font-sans text-gray-400 text-sm leading-relaxed">
              The Professional Enterprise.<br />
              Your Danger Tree & Emergency Experts.
            </p>
            <div className="space-y-2 pt-4">
              <p className="font-sans text-sm text-gray-400">123 Industrial Parkway, Suite 100<br />Seattle, WA 98101</p>
              <p className="font-heading font-bold text-action-orange text-lg">Emergency: 555-0198</p>
              <p className="font-sans text-sm text-gray-400">Office: 555-0199</p>
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
