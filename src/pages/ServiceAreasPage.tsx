import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactBar from '../components/FloatingContactBar';

const AREAS = [
  {
    city: 'Alexandria',
    state: 'LA',
    description: 'Our home base. We serve the entire Alexandria metro, including downtown, suburbs, and surrounding rural properties.',
    zip: '71301–71360',
  },
  {
    city: 'Pineville',
    state: 'LA',
    description: 'Directly across the Red River from Alexandria, we handle residential and commercial tree work throughout Pineville.',
    zip: '71360',
  },
  {
    city: 'Natchitoches',
    state: 'LA',
    description: 'Louisiana\'s oldest city. We provide full tree care services to Natchitoches homeowners and businesses.',
    zip: '71457',
  },
  {
    city: 'Marksville',
    state: 'LA',
    description: 'Serving Marksville and the Avoyelles Parish area with expert tree removal, trimming, and emergency response.',
    zip: '71351',
  },
  {
    city: 'Bunkie',
    state: 'LA',
    description: 'From routine maintenance to storm damage cleanup, we\'re your trusted tree service in Bunkie and surrounding areas.',
    zip: '71322',
  },
  {
    city: 'Jena',
    state: 'LA',
    description: 'Covering La Salle Parish, we bring ISA-certified expertise to Jena and nearby communities.',
    zip: '71342',
  },
  {
    city: 'Leesville',
    state: 'LA',
    description: 'Serving Vernon Parish with professional tree care. We handle everything from pruning to full emergency takedowns.',
    zip: '71446',
  },
  {
    city: 'Central Louisiana',
    state: 'LA',
    description: 'We travel throughout the Central Louisiana region. Don\'t see your city? Call us — we likely serve your area.',
    zip: 'All Parishes',
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-enterprise-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-44 pb-16 md:pt-52 md:pb-24 bg-enterprise-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/wallstreegallery6.jpeg" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-enterprise-green/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
          <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">Where We Work</p>
          <h1 className="font-heading font-light text-5xl md:text-8xl text-white uppercase tracking-tighter leading-[0.9]">
            Service <span className="font-bold text-action-orange">Areas</span>
          </h1>
          <p className="font-sans text-white/50 text-base md:text-lg max-w-xl mt-5">
            Walls Tree Service proudly serves communities across Central Louisiana — from Alexandria to the surrounding parishes.
          </p>
        </div>
      </section>

      {/* Area Cards */}
      <section className="py-16 md:py-24 bg-[#f7f7f5]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-gray-200">
            {AREAS.map((area) => (
              <div
                key={area.city}
                className="group bg-white hover:bg-enterprise-black transition-colors duration-300 p-8 flex flex-col gap-4 border-t-2 border-action-orange"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-action-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="font-heading font-bold text-lg uppercase tracking-tight text-enterprise-black group-hover:text-white transition-colors">
                      {area.city}
                    </h2>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-white/40 transition-colors">
                      {area.state} · {area.zip}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-0.5 bg-action-orange group-hover:w-14 transition-all duration-300" />
                <p className="font-sans text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors flex-1">
                  {area.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-action-orange group-hover:gap-3 transition-all duration-200 mt-2"
                >
                  Request Service <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="bg-enterprise-black">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 pb-0">
          <div className="pt-12 pb-6">
            <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-3">Find Us</p>
            <h2 className="font-heading font-light text-3xl md:text-5xl text-white uppercase tracking-tighter">
              Our <span className="font-bold text-action-orange">Location</span>
            </h2>
          </div>
        </div>
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe
            title="Walls Tree Service Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.5!2d-92.5398991!3d31.2814292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863ab75ca69d38b5%3A0x4247560a5bf954fe!2sWalls%20Tree%20Service!5e0!3m2!1sen!2sus!4v1680000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(40%) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-enterprise-black border-t-4 border-action-orange py-14">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-light text-3xl md:text-4xl text-white uppercase tracking-tighter">
              Don't see your city?
            </h2>
            <p className="font-sans text-gray-400 mt-1">Call us — we likely serve your area. Free estimates always.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="tel:3188806075"
              className="group bg-white text-enterprise-black font-heading font-bold uppercase tracking-widest text-sm px-10 py-5 hover:bg-action-orange hover:text-white transition-colors flex items-center gap-3"
            >
              <Phone className="w-4 h-4" /> (318) 880-6075
            </a>
            <Link
              to="/contact"
              className="group bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-10 py-5 hover:bg-white hover:text-action-orange transition-colors flex items-center gap-3"
            >
              Free Estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
