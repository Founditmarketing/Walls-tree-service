import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    title: "Professional Tree Removal",
    description: "Safely removing large, hazardous, or complex trees with precision and heavy-duty equipment.",
    image: "/wallstreegallery4.jpg",
    linkText: "Learn Removal Process"
  },
  {
    title: "Expert Pruning & Trimming",
    description: "Enhancing tree structure, health, and appearance with certified arborist expertise and specialized gear.",
    image: "/wallstreegallery12.jpg",
    linkText: "See Pruning Results"
  },
  {
    title: "24/7 Emergency Response",
    description: "Immediate deployment for storm damage and critical danger tree situations to secure your property.",
    image: "/wallstreegallery14.jpg",
    linkText: "Emergency Protocol"
  },
  {
    title: "Cabling & Bracing",
    description: "Providing structural support to weak branches and multi-trunk trees to prevent failure and extend lifespan.",
    image: "/wallstreebefore.jpg",
    linkText: "View Support Options"
  },
  {
    title: "Stump Grinding",
    description: "Complete removal of unsightly stumps to restore your landscape and prevent pest infestations.",
    image: "/wallstreegalleryafter.jpg",
    linkText: "Explore Grinding"
  }
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const current = scrollRef.current;
      // Calculate exact physical width of one card + the container flex gap
      const cardWidth = (current.firstElementChild as HTMLElement).offsetWidth + 24; 
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Geometric Background Element */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gray-50 transform -skew-x-12 translate-x-20 z-0"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          
          {/* Left: Intro Block */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left">
            <div>
              <h2 className="font-heading font-light text-5xl md:text-7xl text-enterprise-black uppercase tracking-tighter leading-none mb-4">
                Service<br/>Excellence.
              </h2>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-enterprise-green uppercase tracking-tight mb-8">
                Our Arborists Do It All.
              </h3>
              <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed mb-0 lg:mb-10 max-w-md">
                From complex large-tree removals and precision pruning to 24/7 emergency response and structural tree support, our enterprise-level crews handle your needs with power and care.
              </p>
              
              {/* Navigation Buttons (Desktop) */}
              <div className="hidden lg:flex items-center gap-4 mb-8">
                <button onClick={() => scroll('left')} className="p-4 bg-enterprise-black text-white hover:bg-action-orange transition-colors rounded-none" aria-label="Scroll left">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={() => scroll('right')} className="p-4 bg-enterprise-black text-white hover:bg-action-orange transition-colors rounded-none" aria-label="Scroll right">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <a href="#all-services" className="hidden lg:inline-flex items-center gap-2 font-heading font-bold text-action-orange uppercase tracking-widest hover:text-enterprise-black transition-colors group">
                See Complete Service Menu 
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Horizontal Carousel */}
          <div className="lg:col-span-8 relative">
            {/* Fade edges for carousel effect */}
            
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-4 px-8 scroll-pl-8 md:ml-0 md:pl-0 md:pr-0 md:scroll-pl-0 desktop-right-bleed"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`
                .overflow-x-auto::-webkit-scrollbar {
                  display: none;
                }
                @media (min-width: 768px) {
                  .desktop-right-bleed {
                    margin-right: calc(-1 * max(2rem, 50vw - 800px + 2rem));
                  }
                }
              `}</style>
              {services.map((service, index) => (
                <div key={index} className="group relative bg-enterprise-black overflow-hidden rounded-none flex-none w-[85%] sm:w-[60%] lg:w-[45%] snap-start shadow-xl border border-white/20 border-t-4 border-t-action-orange hover:border-white/40 transition-colors">
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Decorative lines inside card */}
                  <div className="absolute top-0 left-8 w-px h-12 bg-white/30 z-20"></div>
                  <div className="absolute bottom-8 right-0 w-12 h-px bg-white/30 z-20"></div>

                  <div className="relative z-10 p-8 flex flex-col h-full min-h-[420px] justify-end">
                    <div className="pb-6 border-b border-white/20 mb-6">
                      <h4 className="font-heading font-light text-3xl text-white uppercase tracking-tight mb-4">
                        {service.title}
                      </h4>
                      <p className="font-sans text-base text-gray-300 line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="#" className="inline-flex items-center gap-2 font-heading font-bold text-action-orange uppercase tracking-widest hover:text-white transition-colors w-fit text-sm">
                        {service.linkText}
                        <ArrowRight className="w-4 h-4 hidden md:block" />
                      </a>
                      <div className="w-8 h-8 border border-white/20 flex items-center justify-center rotate-45 group-hover:border-action-orange transition-colors">
                        <div className="w-1 h-1 bg-action-orange rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Spacer for end-scroll breathing room */}
              <div className="flex-none w-4 md:w-8 min-[1600px]:w-[calc(50vw-800px+2rem)]"></div>
            </div>

            {/* Navigation Buttons (Mobile) */}
            <div className="flex lg:hidden items-center justify-between mt-4 flex-row-reverse">
              <a href="#all-services" className="inline-flex items-center gap-1.5 font-heading font-bold text-action-orange uppercase tracking-wider hover:text-enterprise-black transition-colors group text-[11px] sm:text-sm">
                See Complete Service Menu 
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-2 sm:gap-3">
                <button onClick={() => scroll('left')} className="p-3 bg-enterprise-black text-white hover:bg-action-orange transition-colors rounded-none" aria-label="Scroll left">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => scroll('right')} className="p-3 bg-enterprise-black text-white hover:bg-action-orange transition-colors rounded-none" aria-label="Scroll right">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
