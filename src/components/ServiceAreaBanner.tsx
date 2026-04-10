import { MapPin, ArrowRight } from 'lucide-react';

export default function ServiceAreaBanner() {
  return (
    <section className="bg-enterprise-green py-8 border-y-4 border-action-orange">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <MapPin className="w-8 h-8 text-action-orange flex-shrink-0" />
            <div>
              <h3 className="font-heading font-light text-white text-xl md:text-2xl uppercase tracking-widest leading-none mb-1">
                Do We Serve Your Area?
              </h3>
              <p className="font-sans text-gray-300 text-sm">
                Enter your zip code to check our enterprise dispatch availability.
              </p>
            </div>
          </div>

          <form 
            className="flex w-full md:w-auto shadow-xl" 
            onSubmit={(e) => { e.preventDefault(); alert("Service area check initiated."); }}
          >
            <input 
              type="text" 
              placeholder="Enter Zip Code" 
              className="w-full md:w-64 p-4 bg-white border-none font-sans text-enterprise-black focus:outline-none focus:ring-2 focus:ring-action-orange focus:ring-inset rounded-none"
              maxLength={5}
              required
            />
            <button 
              type="submit" 
              className="bg-action-orange text-white font-heading font-medium uppercase tracking-widest text-sm px-8 py-4 hover:bg-orange-600 transition-colors rounded-none flex items-center gap-2 whitespace-nowrap"
            >
              Check Availability <ArrowRight className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
