import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const reviews = [
  {
    name: "Robert M.",
    location: "Seattle, WA",
    text: "Incredible precision. They brought in a massive crane to remove a dying oak hanging over our roof. The crew was professional, safe, and left the yard cleaner than they found it. True enterprise-level operation.",
    rating: 5
  },
  {
    name: "Sarah L.",
    location: "Bellevue, WA",
    text: "Called them at 2 AM after a storm dropped a branch on our driveway. They were here within the hour with heavy equipment. Fast, efficient, and incredibly reassuring during a stressful situation.",
    rating: 5
  },
  {
    name: "David K.",
    location: "Redmond, WA",
    text: "The arborists at Walls really know their stuff. They didn't just want to cut; they explained the structural issues with our pines and cabled them perfectly. Top-tier service.",
    rating: 5
  },
  {
    name: "Elena G.",
    location: "Kirkland, WA",
    text: "Outstanding work on a very difficult stump grinding job near our foundation. The team was meticulous and ensured no damage to our property. Highly recommend their expertise.",
    rating: 5
  },
  {
    name: "Marcus T.",
    location: "Issaquah, WA",
    text: "We manage a large commercial property and Walls Tree Service is our go-to. Their enterprise approach means they handle our large-scale pruning with zero disruption to our tenants.",
    rating: 5
  },
  {
    name: "Jennifer W.",
    location: "Woodinville, WA",
    text: "Safety is clearly their top priority. Watching them dismantle a 100-foot fir tree piece by piece was impressive. Every crew member knew exactly what to do.",
    rating: 5
  }
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 1.2 : current.offsetWidth / 1.2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-enterprise-green relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-white uppercase tracking-tighter leading-none mb-4">
              The Walls Experience:<br/>
              <span className="text-action-orange">5-Star Service</span> From Real Clients.
            </h2>
            <div className="flex items-center gap-4 bg-white/5 w-fit px-6 py-3 border-l-4 border-action-orange">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-action-orange text-action-orange" />
                ))}
              </div>
              <span className="font-sans font-bold text-white tracking-widest uppercase text-sm">
                5/5 Google Rating <span className="text-gray-400 normal-case ml-1">(based on 142 reviews)</span>
              </span>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-6">
            <button className="bg-transparent border border-white/30 text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-enterprise-green transition-colors rounded-none flex items-center gap-2 whitespace-nowrap">
              Write Your Review <ArrowRight className="w-4 h-4" />
            </button>
            
            {/* Navigation */}
            <div className="flex items-center gap-2">
              <button onClick={() => scroll('left')} className="p-3 border border-white/30 text-white hover:bg-action-orange hover:border-action-orange transition-colors rounded-none" aria-label="Scroll left">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scroll('right')} className="p-3 border border-white/30 text-white hover:bg-action-orange hover:border-action-orange transition-colors rounded-none" aria-label="Scroll right">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Review Cards Carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-enterprise-green to-transparent z-20 pointer-events-none hidden md:block"></div>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {reviews.map((review, index) => (
              <div key={index} className="bg-transparent flex-none w-[85%] sm:w-[45%] lg:w-[30%] snap-start flex flex-col justify-between border border-white/20 border-t-4 border-t-action-orange p-8 md:p-10 relative group hover:border-white/40 transition-colors">
                
                {/* Decorative lines inside card */}
                <div className="absolute top-0 left-8 w-px h-8 bg-white/20"></div>
                <div className="absolute bottom-8 right-0 w-8 h-px bg-white/20"></div>

                <div>
                  <div className="flex gap-1 mb-8 pb-6 border-b border-white/10">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-action-orange text-action-orange" />
                    ))}
                  </div>
                  <p className="font-sans text-lg text-gray-300 leading-relaxed mb-10 font-light">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-heading font-bold text-white uppercase tracking-wider text-sm">{review.name}</p>
                    <p className="font-sans text-xs text-gray-400 tracking-widest uppercase mt-1">{review.location}</p>
                  </div>
                  <div className="w-8 h-8 border border-white/20 flex items-center justify-center rotate-45 group-hover:border-action-orange transition-colors">
                    <div className="w-1 h-1 bg-action-orange rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
