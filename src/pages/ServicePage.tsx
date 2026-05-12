import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactBar from '../components/FloatingContactBar';
import { SERVICES } from '../data/services';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-enterprise-white">
      <Header />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-12 md:pt-48 md:pb-28 bg-enterprise-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.heroImage} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-enterprise-green/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
          <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">
            {service.label}
          </p>
          <h1 className="font-heading font-light text-4xl md:text-8xl text-white uppercase tracking-tighter leading-[0.9] mb-4">
            {service.title} <span className="font-bold text-action-orange">{service.titleAccent}</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-white/60 uppercase tracking-widest">{service.tagline}</p>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────────── */}
      <section className="bg-action-orange border-b border-black/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/20">
            {service.stats.map(({ display, label }) => (
              <div key={label} className="px-3 py-5 md:px-6 md:py-5 text-center bg-action-orange">
                <p className="font-heading font-bold text-2xl md:text-5xl text-white mb-1">{display}</p>
                <p className="font-sans text-[9px] md:text-xs uppercase tracking-widest text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content: Text + Image ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-enterprise-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <h2 className="font-heading font-light text-4xl md:text-5xl text-enterprise-black uppercase tracking-tighter leading-[0.95] mb-4">
                {service.title} <span className="font-bold text-enterprise-green">{service.titleAccent}</span>
              </h2>
              <div className="w-12 h-1 bg-action-orange mb-8" />
              <div className="space-y-5 font-sans text-lg text-gray-600 leading-relaxed mb-10">
                {service.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-enterprise-black transition-colors flex items-center justify-center gap-2"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:3188806075"
                  className="bg-enterprise-black text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-enterprise-green transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> (318) 880-6075
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img
                src={service.bodyImage}
                alt={`${service.title} ${service.titleAccent}`}
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-10 left-6 bg-enterprise-green border-l-4 border-action-orange px-6 py-4">
                <p className="font-sans text-xs uppercase tracking-widest text-action-orange mb-1">Walls Tree Service</p>
                <p className="font-heading font-bold text-lg text-white uppercase tracking-tight">ISA Certified</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-enterprise-green">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Checklist */}
            <div>
              <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">Ready to Get Started?</p>
              <h2 className="font-heading font-light text-4xl md:text-5xl text-white uppercase tracking-tighter leading-[0.95] mb-8">
                {service.ctaHeading}
              </h2>
              <ul className="space-y-4 mb-10">
                {service.ctaPoints.map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-action-orange flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-base text-white/80 leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-action-orange transition-colors flex items-center justify-center gap-2"
                >
                  Request a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:3188806075"
                  className="border-2 border-white/40 text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:border-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>

            {/* Right: Callout card */}
            <div className="border border-white/20 border-t-4 border-t-action-orange p-10 bg-enterprise-black/30">
              <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-6">Why Walls Tree Service?</p>
              <div className="space-y-5">
                {[
                  { stat: '20+', text: 'Years serving Central Louisiana' },
                  { stat: '5.0★', text: '280+ verified Google reviews' },
                  { stat: 'ISA', text: 'Certified arborists on every job' },
                  { stat: '24/7', text: 'Emergency crews on standby' },
                ].map(({ stat, text }) => (
                  <div key={stat} className="flex items-center gap-5 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                    <p className="font-heading font-bold text-2xl text-action-orange w-16 flex-shrink-0">{stat}</p>
                    <p className="font-sans text-sm text-white/70 leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Final CTA Strip ─────────────────────────────────────────────── */}
      <section className="bg-enterprise-black border-t-4 border-action-orange py-14">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-light text-3xl md:text-4xl text-white uppercase tracking-tighter">
              Ready to get started?
            </h2>
            <p className="font-sans text-gray-400 mt-1">Free estimates. No obligation. Fast response.</p>
          </div>
          <Link
            to="/contact"
            className="group flex-shrink-0 bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-10 py-5 hover:bg-white hover:text-action-orange transition-colors flex items-center gap-3"
          >
            Request a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
