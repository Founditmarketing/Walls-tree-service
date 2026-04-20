import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50">
      <style>{`
        @media (min-width: 768px) {
          .desktop-right-bleed {
            margin-right: calc(-1 * max(2rem, 50vw - 800px + 2rem));
          }
        }
      `}</style>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:items-stretch">

          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-heading font-light text-4xl md:text-6xl text-enterprise-black uppercase tracking-tighter leading-none mb-4">
              Meet The Experts<br />At Walls.
            </h2>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-enterprise-green uppercase tracking-tight mb-8 border-l-4 border-action-orange pl-4">
              Family-Owned Passion,<br />Enterprise-Level Results.
            </h3>

            <div className="font-sans text-lg text-gray-600 leading-relaxed space-y-6 mb-8">
              <p>
                We don't just cut trees; we engineer solutions. Walls Tree Service has grown into the region's premier enterprise-level tree care provider, built on absolute safety and cutting-edge arboriculture.
              </p>
              <p>
                Equipped with high-capacity machinery and specialized rigging gear, we safely execute the hazardous jobs others turn away—all while maintaining the meticulous care of a family-owned operation.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-heading font-bold text-enterprise-black uppercase tracking-wider text-sm mt-8">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-action-orange"></span> ISA Certified Arborists</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-action-orange"></span> Zero-Incident Safety Record</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-action-orange"></span> 24/7 Emergency Dispatch</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-action-orange"></span> Fully Licensed & Insured</li>
              </ul>
            </div>

            <Link to="/about" className="bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-5 hover:bg-enterprise-black transition-colors rounded-none flex items-center gap-2 w-fit">
              Meet Your Arborist <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Modern Bleeding Image with Overlaid Badge */}
          <div className="relative mt-10 md:mt-12 lg:mt-0">

            {/* Clean Hero Portrait */}
            <div className="relative h-[450px] md:h-[500px] lg:h-auto -mb-24 md:-mb-32 lg:mb-0 lg:absolute lg:-top-32 lg:-bottom-32 lg:left-0 lg:right-0 overflow-hidden group desktop-right-bleed">
              <img
                src="/wallstree_about_3.png"
                alt="Walls Tree Service Crew"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Floating Badge Over Image */}
              <div className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 z-30 bg-enterprise-green border-4 border-action-orange py-3 px-8 md:py-4 md:px-14 shadow-2xl transition-transform duration-500 w-max min-w-[280px] sm:min-w-[380px]">
                <div className="flex items-center justify-center gap-5 md:gap-8">
                  <div className="flex items-start">
                    <span className="font-heading font-bold text-5xl md:text-6xl text-white leading-none">20</span>
                    <span className="font-heading font-bold text-4xl text-action-orange leading-none ml-1">+</span>
                  </div>
                  <div className="h-12 w-px bg-white/20 hidden sm:block"></div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-action-orange uppercase tracking-widest text-sm mb-1">Years</span>
                    <p className="font-sans font-bold text-[10px] md:text-xs text-gray-300 uppercase tracking-widest leading-relaxed">
                      Of Trusted<br />Excellence
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
