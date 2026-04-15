import { useState, useEffect } from 'react';
import { Phone, Mail, X, Send } from 'lucide-react';

export default function FloatingContactBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Floating Bar */}
      <div className="fixed bottom-6 lg:bottom-10 right-4 lg:right-8 z-[100] w-max group">
        <div className="bg-enterprise-black/90 backdrop-blur-md p-1.5 shadow-2xl flex flex-col items-center gap-1.5 border border-white/20 rounded-full">
          <a 
            href="tel:3188806075" 
            className="flex items-center justify-center bg-action-orange hover:bg-white hover:text-action-orange text-white p-2.5 md:p-3 rounded-full transition-all duration-300 shadow-lg"
            title="Call Us"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <div className="w-5 h-px bg-white/20"></div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white p-2.5 md:p-3 rounded-full transition-all duration-300"
            title="Email Us"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-enterprise-black/60 backdrop-blur-xl w-full max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 border-t-4 border-t-action-orange z-[120] flex flex-col hide-scrollbar">
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-enterprise-black/50 rounded-full p-1 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-6 md:p-10 pt-10 md:pt-10">
              <h3 className="font-heading text-2xl md:text-3xl font-light text-white uppercase tracking-wider mb-2">
                Request Service
              </h3>
              <p className="text-gray-400 font-sans text-xs md:text-sm mb-6 md:mb-8 leading-relaxed pr-6">
                Connect with our certified arborists today. We respond to all inquiries within hours.
              </p>
              
              <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">First & Last Name</label>
                    <input type="text" id="name" className="w-full bg-white/5 border border-white/10 text-white px-4 py-2.5 md:py-3 focus:outline-none focus:border-action-orange transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-white/5 border border-white/10 text-white px-4 py-2.5 md:py-3 focus:outline-none focus:border-action-orange transition-colors" placeholder="(555) 000-0000" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Email Address</label>
                  <input type="email" id="email" className="w-full bg-white/5 border border-white/10 text-white px-4 py-2.5 md:py-3 focus:outline-none focus:border-action-orange transition-colors" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Job Description</label>
                  <textarea id="message" rows={3} className="w-full bg-white/5 border border-white/10 text-white px-4 py-2.5 md:py-3 focus:outline-none focus:border-action-orange transition-colors resize-none" placeholder="Describe the tree care or removal services you need..."></textarea>
                </div>

                <button type="submit" className="w-full bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm py-4 mt-2 hover:bg-white hover:text-enterprise-black transition-colors flex items-center justify-center gap-2">
                  Send Request <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
