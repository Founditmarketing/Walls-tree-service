import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-heading font-light text-4xl md:text-6xl text-enterprise-black uppercase tracking-tighter leading-none mb-4">
              Meet The Experts<br/>At Walls.
            </h2>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-enterprise-green uppercase tracking-tight mb-8 border-l-4 border-action-orange pl-4">
              Family-Owned Passion,<br/>Enterprise-Level Results.
            </h3>
            
            <div className="font-sans text-lg text-gray-600 leading-relaxed space-y-6 mb-10">
              <p>
                We don't just cut trees; we engineer solutions. Founded on a deep respect for arboriculture and a commitment to absolute safety, Walls Tree Service has grown into the region's premier enterprise-level tree care provider.
              </p>
              <p>
                Our crews are equipped with state-of-the-art machinery—from high-capacity cranes to specialized rigging gear—allowing us to handle the most complex and hazardous jobs that others turn away. Yet, despite our scale, we maintain the meticulous care and personal accountability of a family-owned business.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-heading font-bold text-enterprise-black uppercase tracking-wider text-sm mt-8">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-action-orange"></span> ISA Certified Arborists</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-action-orange"></span> Zero-Incident Safety Record</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-action-orange"></span> 24/7 Emergency Dispatch</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-action-orange"></span> Fully Licensed & Insured</li>
              </ul>
            </div>

            <button className="bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-5 hover:bg-enterprise-black transition-colors rounded-none flex items-center gap-2">
              Meet Your Arborist <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Image Composition */}
          <div className="order-1 lg:order-2 relative h-[450px] md:h-[650px] w-full mt-4 lg:mt-0">
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] z-10 group">
              <div className="absolute inset-0 bg-enterprise-green transform translate-x-4 -translate-y-4 z-0 transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2940&auto=format&fit=crop" 
                alt="Walls Tree Service Crew" 
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Secondary Overlapping Image */}
            <div className="absolute bottom-16 left-0 w-[55%] h-[45%] z-20 border-[8px] md:border-[12px] border-gray-50 shadow-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=2874&auto=format&fit=crop" 
                alt="Tree Care Detail" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-[10%] md:right-8 z-30 bg-white p-6 border border-gray-100 border-b-4 border-b-action-orange shadow-2xl flex items-center gap-4 group hover:-translate-y-2 transition-transform duration-500">
              <p className="font-heading font-light text-5xl text-enterprise-black leading-none">20<span className="text-action-orange font-bold">+</span></p>
              <div className="w-px h-10 bg-gray-200"></div>
              <p className="font-sans font-bold text-[10px] text-gray-500 uppercase tracking-widest w-[100px] leading-relaxed">Years of Excellence</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
