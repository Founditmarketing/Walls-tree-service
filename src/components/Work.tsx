import { ArrowRight } from 'lucide-react';

const projects = [
  {
    image: "/wallstreegallery10.jpg",
    title: "Precision Rope Rigging",
    category: "Controlled Removal",
    className: "min-h-[200px] lg:min-h-[220px]"
  },
  {
    image: "/wallstreegallery7.jpg",
    title: "High Canopy Access",
    category: "Bucket Truck Ops",
    className: "min-h-[200px] lg:min-h-[220px]"
  },
  {
    image: "/wallstreegallery11.jpg",
    title: "Large-Scale Trunk Felling",
    category: "Complete Removal",
    className: "min-h-[200px] lg:min-h-[220px]"
  },
  {
    image: "/wallstreegallery13.jpg",
    title: "Heavy Brush Clearing",
    category: "Fleet Operations",
    className: "min-h-[200px] lg:min-h-[220px]"
  }
];

export default function Work() {
  return (
    <section id="process" className="py-2 bg-white">
      <div className="w-full px-2">
        


        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-0">
          {projects.map((project, index) => (
            <div key={index} className={`group relative overflow-hidden bg-enterprise-black border border-gray-200/50 hover:border-action-orange transition-colors ${project.className}`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-enterprise-black/90 via-enterprise-black/20 to-transparent flex flex-col justify-end p-5 md:p-6">
                
                {/* Decorative lines inside card */}
                <div className="absolute top-0 left-6 w-px h-8 bg-white/30 z-20 transition-all duration-500 group-hover:h-16 group-hover:bg-action-orange"></div>
                <div className="absolute bottom-6 right-0 w-8 h-px bg-white/30 z-20 transition-all duration-500 group-hover:w-16 group-hover:bg-action-orange"></div>

                <div className="relative z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-sans font-bold text-action-orange text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.category}
                  </p>
                  
                  <div className="w-full flex items-end justify-between border-t border-white/20 pt-4">
                    <h3 className="font-heading font-light text-white uppercase tracking-widest text-lg md:text-xl pr-4">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 md:w-10 md:h-10 border border-white/20 flex items-center justify-center rotate-45 group-hover:border-action-orange group-hover:rotate-90 transition-all duration-500 flex-shrink-0 bg-white/5 backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 bg-action-orange rounded-full"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
