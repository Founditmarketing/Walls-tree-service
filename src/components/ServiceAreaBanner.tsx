import { useState, useEffect } from 'react';
import { AlertTriangle, PhoneCall, Wind, TreePine, ShieldAlert, ArrowLeft, ArrowRight } from 'lucide-react';

type EmergencyType = 'storm' | 'fallen' | 'risk' | null;

export default function ServiceAreaBanner() {
  const [activeType, setActiveType] = useState<EmergencyType>(null);
  
  // By initializing with real content, we trick the CSS Grid into factoring this text 
  // into the parent height calculation even when State 2 is totally invisible.
  const [renderedDetails, setRenderedDetails] = useState({ 
    title: "Hazard Risk Assessment", 
    desc: "Immediate arborist evaluation on leaning or severely structurally compromised trees." 
  });

  useEffect(() => {
    switch(activeType) {
      case 'storm': setRenderedDetails({ title: "Storm Damage Clean-Up", desc: "Rapid response to clear shattered branches and debris before further property damage occurs." }); break;
      case 'fallen': setRenderedDetails({ title: "Fallen Tree Removal", desc: "Heavy equipment routing for catastrophic structural trunk failures and blockages." }); break;
      case 'risk': setRenderedDetails({ title: "Hazard Risk Assessment", desc: "Immediate arborist evaluation on leaning or severely structurally compromised trees." }); break;
    }
  }, [activeType]);

  return (
    <section className="bg-enterprise-green py-8 md:py-12 border-y-4 border-action-orange relative overflow-hidden transition-all duration-700 min-h-[140px] flex items-center">
      {/* Subtle organic texture to give depth without being aggressive */}
      <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
      
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10 grid transition-all duration-500">
        
        {/* State 1: Selection Phase */}
        <div className={`[grid-area:1/1] flex flex-col lg:flex-row items-start sm:items-center justify-center lg:justify-between gap-6 md:gap-8 w-full transition-all duration-500 transform ${activeType !== null ? 'opacity-0 scale-95 pointer-events-none z-0' : 'opacity-100 scale-100 z-10'}`}>
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="bg-white/10 p-3 rounded-full animate-pulse flex-shrink-0 border border-white/20">
              <AlertTriangle className="w-8 h-8 text-action-orange" />
            </div>
            <div>
              <h3 className="font-heading font-light text-white text-2xl md:text-3xl uppercase tracking-widest leading-none mb-1">
                24/7 Emergency Dispatch
              </h3>
              <p className="font-sans text-green-50 text-base opacity-90 max-w-md">
                Select your specific emergency below for priority operational routing.
              </p>
            </div>
          </div>

          <div className="flex w-full lg:w-auto gap-2 sm:gap-4 justify-between sm:justify-start">
            <button onClick={() => setActiveType('storm')} className="flex-1 sm:flex-none flex flex-col items-center justify-center gap-2 p-3 sm:p-5 bg-black/20 hover:bg-action-orange border border-white/10 hover:border-action-orange shadow-lg hover:shadow-xl group transition-all duration-300 min-w-[100px] sm:min-w-[140px]">
              <Wind className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 group-hover:text-white transition-colors group-hover:-translate-y-1 duration-300" />
              <span className="font-heading font-bold uppercase text-[9px] sm:text-xs tracking-widest text-white mt-1 text-center">Storm<br className="sm:hidden"/> Damage</span>
            </button>
            <button onClick={() => setActiveType('fallen')} className="flex-1 sm:flex-none flex flex-col items-center justify-center gap-2 p-3 sm:p-5 bg-black/20 hover:bg-action-orange border border-white/10 hover:border-action-orange shadow-lg hover:shadow-xl group transition-all duration-300 min-w-[100px] sm:min-w-[140px]">
              <TreePine className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 group-hover:text-white transition-colors group-hover:-translate-y-1 duration-300" />
              <span className="font-heading font-bold uppercase text-[9px] sm:text-xs tracking-widest text-white mt-1 text-center">Fallen<br className="sm:hidden"/> Tree</span>
            </button>
            <button onClick={() => setActiveType('risk')} className="flex-1 sm:flex-none flex flex-col items-center justify-center gap-2 p-3 sm:p-5 bg-black/20 hover:bg-action-orange border border-white/10 hover:border-action-orange shadow-lg hover:shadow-xl group transition-all duration-300 min-w-[100px] sm:min-w-[140px]">
              <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 group-hover:text-white transition-colors group-hover:-translate-y-1 duration-300" />
              <span className="font-heading font-bold uppercase text-[9px] sm:text-xs tracking-widest text-white mt-1 text-center">Risk<br className="sm:hidden"/> Assessment</span>
            </button>
          </div>
        </div>

        {/* State 2: Active Dispatch Phase */}
        <div className={`[grid-area:1/1] flex flex-col lg:flex-row items-start sm:items-center justify-center lg:justify-between gap-6 md:gap-8 w-full transition-all duration-700 transform ${activeType === null ? 'opacity-0 scale-95 pointer-events-none z-0' : 'opacity-100 scale-100 z-10'}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full lg:w-auto">
             <button 
               onClick={() => setActiveType(null)} 
               className="bg-transparent text-gray-300 hover:text-white p-3 border border-white/20 hover:border-action-orange transition-colors group"
             >
               <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
             </button>
             <div>
               <div className="inline-block bg-action-orange text-white font-bold text-[10px] tracking-widest uppercase px-3 py-1 mb-3 animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_15px_rgba(255,107,0,0.5)]">
                 Priority Protocol Selected
               </div>
               <h3 className="font-heading font-light text-white text-3xl md:text-4xl uppercase tracking-widest leading-none mb-2">
                 {renderedDetails.title}
               </h3>
               <p className="font-sans text-green-50 text-sm md:text-base opacity-90 max-w-xl">
                 {renderedDetails.desc}
               </p>
             </div>
          </div>
          
          <a 
            href="tel:3188806075"
            className="w-full lg:w-auto bg-white text-enterprise-black font-heading font-bold uppercase tracking-widest text-sm md:text-base px-8 py-6 hover:bg-gray-200 transition-all flex items-center justify-center gap-3 shadow-2xl group border-l-4 border-transparent hover:border-action-orange"
          >
            <PhoneCall className="w-6 h-6 group-hover:scale-110 group-hover:text-action-orange transition-transform" /> 
            Dispatch Arborist Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
