import { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const words = ["Precision.", "Safety.", "Power."];

const BackgroundVideo = memo(() => {
  return (
    <div className="absolute inset-0 w-full h-full bg-enterprise-black">
      <video
        ref={(el) => {
          if (el) {
            el.defaultMuted = true;
            el.muted = true;
            el.playsInline = true;
            
            // Try playing synchronously as soon as the DOM element exists
            const p = el.play();
            if (p !== undefined) {
              p.catch(() => {
                // If iOS strictly blocks it, fallback to the very first time the user touches the screen
                document.addEventListener('touchstart', () => {
                  el.play().catch(() => {});
                }, { once: true, passive: true });
              });
            }
          }
        }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/wallstreeservicesherovid.mp4" type="video/mp4" />
      </video>
    </div>
  );
});

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('walls_preloader_complete')) {
      setIsFirstLoad(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28">
      <style>{`
        @keyframes hero-fade-left {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero-fade-right {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-hero-left {
          animation: hero-fade-left 1.6s cubic-bezier(0.16, 1, 0.3, 1) 2.2s forwards;
        }
        .animate-hero-right {
          animation: hero-fade-right 1.6s cubic-bezier(0.16, 1, 0.3, 1) 2.2s forwards;
        }
      `}</style>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-enterprise-green/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-enterprise-black/60 via-enterprise-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 w-full pb-20 md:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div className={`max-w-3xl ${isFirstLoad ? 'opacity-0 animate-hero-left' : 'opacity-100'}`}>
            <h1 className="flex flex-col gap-2 md:gap-4">
              <span className="font-heading font-light text-action-orange text-lg md:text-xl lg:text-2xl uppercase tracking-tight leading-none">
                The Professional Enterprise.
              </span>
              <span className="font-heading font-light text-white text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[1.1] mt-2 md:mt-4 block">
                Delivering Enterprise Tree Care With Absolute
              </span>
              <span className="font-heading font-bold text-5xl md:text-7xl lg:text-[90px] uppercase tracking-tighter leading-[0.9] block -mt-0 md:-mt-2 lg:-mt-4">
                <span className="inline-grid overflow-hidden align-bottom">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={index}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="text-action-orange [grid-area:1/1]"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>

            <div className="mt-12 flex flex-col items-start gap-4">
              <Link to="/contact" className="bg-action-orange text-white font-heading font-light uppercase tracking-widest text-sm sm:text-base md:text-xl px-4 sm:px-6 md:px-10 py-4 md:py-6 whitespace-nowrap hover:bg-white hover:text-action-orange transition-colors duration-300 rounded-none border-2 border-action-orange">
                Get Started - Free Inspection
              </Link>
              <p className="font-sans font-bold text-white/80 text-[11px] sm:text-xs md:text-base tracking-widest uppercase">
                Fully Licensed &amp; Insured <span className="text-action-orange mx-1 md:mx-2">|</span> ISA Certified
              </p>
            </div>
          </div>

          {/* Right: Transparent Lead Form */}
          <div className={`w-full max-w-md mx-auto lg:ml-auto xl:mr-8 hidden md:block ${isFirstLoad ? 'opacity-0 animate-hero-right' : 'opacity-100'}`}>
            <div className="bg-white/5 backdrop-blur-xl p-8 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.5)] relative">
              <div className="absolute top-0 right-0 w-16 h-1 border-t-4 border-action-orange"></div>
              
              <h3 className="font-heading font-light text-2xl text-white uppercase tracking-tight mb-2">
                Rapid Intake
              </h3>
              <p className="font-sans text-sm text-gray-300 mb-6">Request priority dispatch or an estimate.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); window.dispatchEvent(new Event('formSubmitted')); }} className="space-y-4">
                <input required type="text" placeholder="Full Name" className="w-full p-4 bg-black/40 border border-white/10 font-sans text-white placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none text-sm" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone" className="w-full p-4 bg-black/40 border border-white/10 font-sans text-white placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none text-sm" />
                  <input type="text" placeholder="Zip Code" className="w-full p-4 bg-black/40 border border-white/10 font-sans text-white placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none text-sm" />
                </div>
                <select className="w-full p-4 bg-black/40 border border-white/10 font-sans text-white focus:border-action-orange focus:outline-none rounded-none appearance-none text-sm [&>option]:bg-enterprise-black">
                  <option>Emergency Service</option>
                  <option>Tree Removal</option>
                  <option>Pruning & Maintenance</option>
                </select>
                <button type="submit" className="w-full bg-enterprise-white text-enterprise-black font-heading font-bold uppercase tracking-widest text-sm px-6 py-4 hover:bg-action-orange hover:text-white transition-colors mt-2">
                  Send Request
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Cycling Trust Banner */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/10 py-3 z-20 flex pointer-events-none">
        <motion.div
           initial={{ x: 0 }}
           animate={{ x: "-50%" }}
           transition={{ duration: 40, ease: "linear", repeat: Infinity }}
           className="flex whitespace-nowrap w-max"
        >
          {[...Array(2)].map((_, i) => (
             <div key={i} className="flex items-center space-x-8 md:space-x-12 px-4 md:px-6 font-sans font-bold text-white/70 text-[10px] md:text-xs tracking-[0.2em] uppercase">
               <span>Fully Insured & Licensed</span>
               <span className="text-action-orange/60">/</span>
               <span>ISA Certified Arborists</span>
               <span className="text-action-orange/60">/</span>
               <span>24/7 Emergency Response</span>
               <span className="text-action-orange/60">/</span>
               <span>5-Star Rated Service</span>
               <span className="text-action-orange/60">/</span>
               <span>Top Tier Equipment</span>
               <span className="text-action-orange/60">/</span>
               <span>Zero Impact Removal</span>
               <span className="text-action-orange/60">/</span>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
