import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

function SharpStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

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
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const current = scrollRef.current;
      // Calculate exact physical width of one card + the container flex gap
      const cardWidth = (current.firstElementChild as HTMLElement).offsetWidth + 24;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-enterprise-green relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-2 md:mb-16">
          <div>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-white uppercase tracking-tighter leading-none mt-0">
              The Walls Experience:<br/>
              <span className="text-action-orange">5-Star Service</span> From Real Clients.
            </h2>
          </div>
          
          <div className="flex flex-col items-end gap-6">
            <button className="hidden lg:flex bg-transparent border border-white/30 text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-enterprise-green transition-colors rounded-none items-center gap-2 whitespace-nowrap">
              Write Your Review <ArrowRight className="w-4 h-4" />
            </button>
            
            {/* Navigation (Desktop) */}
            <div className="hidden lg:flex items-center gap-2">
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
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-4 px-8 scroll-pl-8 md:ml-0 md:pl-0 md:pr-0 md:scroll-pl-0 desktop-right-bleed"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            
            {reviews.map((review, index) => (
              <div key={index} className="bg-transparent flex-none w-[85%] sm:w-[45%] lg:w-[30%] snap-start flex flex-col justify-between border border-white/20 border-t-4 border-t-action-orange p-8 md:p-10 relative group hover:-translate-y-2 hover:bg-white/5 transition-all duration-300">
                
                {/* Decorative lines inside card */}
                <div className="absolute top-0 left-8 w-px h-8 bg-white/20"></div>
                <div className="absolute bottom-8 right-0 w-8 h-px bg-white/20"></div>

                <div>
                  <div className="flex gap-1 mb-8 pb-6 border-b border-white/10">
                    {[...Array(review.rating)].map((_, i) => (
                      <SharpStar key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <p className="font-sans text-sm md:text-lg text-gray-300 leading-snug md:leading-relaxed mb-10 font-light">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-heading font-bold text-white uppercase tracking-wider text-sm">{review.name}</p>
                    <p className="font-sans text-xs text-gray-400 tracking-widest uppercase mt-1">{review.location}</p>
                  </div>
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-white rounded-full border border-gray-200">
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            {/* Spacer for end-scroll breathing room */}
            <div className="flex-none w-4 md:w-8 min-[1600px]:w-[calc(50vw-800px+2rem)]"></div>
          </div>

          {/* Navigation Buttons (Mobile) */}
          <div className="flex lg:hidden items-center justify-between mt-0 flex-row-reverse">
            <a href="#write-review" className="inline-flex items-center gap-1.5 font-heading font-bold text-action-orange uppercase tracking-wider hover:text-white transition-colors group text-[11px] sm:text-sm">
              Write Your Review 
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-2 sm:gap-3">
              <button onClick={() => scroll('left')} className="p-3 border border-white/30 text-white hover:bg-action-orange hover:border-action-orange transition-colors rounded-none" aria-label="Scroll left">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scroll('right')} className="p-3 border border-white/30 text-white hover:bg-action-orange hover:border-action-orange transition-colors rounded-none" aria-label="Scroll right">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
