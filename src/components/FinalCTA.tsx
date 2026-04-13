import { Phone, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-enterprise-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/wallstreegallery6.jpeg" 
          alt="Tree service at dusk" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-enterprise-green/70 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <div>
            <h2 className="font-heading font-light text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.9] mb-6">
              Ready For<br/>Professional<br/>Tree Care?
            </h2>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-action-orange uppercase tracking-tight mb-6">
              Get Your Free Estimate.
            </h3>
            <p className="font-sans text-xl text-gray-200 leading-relaxed max-w-lg">
              Secure your property and improve tree health with expert arborists. Fill out the form or call now for immediate assistance.
            </p>
          </div>

          {/* Right: Form Mockup */}
          <div className="bg-enterprise-black/20 backdrop-blur-2xl p-6 md:p-10 border border-white/20 border-t-4 border-t-action-orange relative">
            {/* Decorative lines inside card */}
            <div className="absolute top-0 left-8 w-px h-12 bg-white/20 z-20"></div>
            <div className="absolute bottom-8 right-0 w-12 h-px bg-white/20 z-20"></div>

            <div className="pb-6 border-b border-white/20 mb-8">
              <h4 className="font-heading font-light text-2xl text-white uppercase tracking-tight">
                Start Your Request
              </h4>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans font-bold text-xs text-gray-300 uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 bg-white/5 border-2 border-white/20 font-sans text-white placeholder:text-gray-500 focus:border-action-orange focus:outline-none rounded-none" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans font-bold text-xs text-gray-300 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 bg-white/5 border-2 border-white/20 font-sans text-white placeholder:text-gray-500 focus:border-action-orange focus:outline-none rounded-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans font-bold text-xs text-gray-300 uppercase tracking-widest">What service do you need?</label>
                <select className="w-full p-4 bg-transparent border-2 border-white/20 font-sans text-white focus:border-action-orange focus:outline-none rounded-none appearance-none [&>option]:bg-enterprise-black">
                  <option>Tree Removal</option>
                  <option>Pruning & Trimming</option>
                  <option>Emergency Service</option>
                  <option>Cabling & Bracing</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans font-bold text-xs text-gray-300 uppercase tracking-widest">Zip Code</label>
                  <input type="text" placeholder="Enter Zip" className="w-full p-4 bg-white/5 border-2 border-white/20 font-sans text-white placeholder:text-gray-500 focus:border-action-orange focus:outline-none rounded-none" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans font-bold text-xs text-gray-300 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" placeholder="(555) 000-0000" className="w-full p-4 bg-white/5 border-2 border-white/20 font-sans text-white placeholder:text-gray-500 focus:border-action-orange focus:outline-none rounded-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans font-bold text-xs text-gray-300 uppercase tracking-widest">Project Details</label>
                <textarea rows={3} placeholder="Tell us about the trees or property..." className="w-full p-4 bg-white/5 border-2 border-white/20 font-sans text-white placeholder:text-gray-500 focus:border-action-orange focus:outline-none rounded-none resize-none"></textarea>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button type="button" className="bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-6 py-5 hover:bg-white hover:text-action-orange transition-colors rounded-none flex items-center justify-center gap-2 w-full border-2 border-action-orange">
                  Submit Request <ArrowRight className="w-4 h-4" />
                </button>
                <button type="button" className="bg-transparent border-2 border-white/40 text-white font-heading font-bold uppercase tracking-widest text-sm px-6 py-5 hover:bg-white hover:text-enterprise-black transition-colors rounded-none flex items-center justify-center gap-2 w-full">
                  <Phone className="w-4 h-4" /> Call (318) 880-6075
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
