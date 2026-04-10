import { ShieldCheck } from 'lucide-react';

export default function TrustBanner() {
  return (
    <section className="bg-enterprise-black py-12 border-y-4 border-action-orange">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <ShieldCheck className="w-12 h-12 text-action-orange flex-shrink-0" />
          <h2 className="font-heading font-light text-white text-xl md:text-2xl lg:text-3xl uppercase tracking-widest leading-snug">
            Your Peace of Mind: <span className="text-action-orange">Fully Licensed & Insured</span> <span className="hidden lg:inline mx-4 text-gray-600">|</span><br className="lg:hidden" /> ISA Certified Arborists <span className="hidden lg:inline mx-4 text-gray-600">|</span><br className="lg:hidden" /> 24/7 Emergency Response
          </h2>
        </div>
      </div>
    </section>
  );
}
