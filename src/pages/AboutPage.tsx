import { ArrowRight, ShieldCheck, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactBar from '../components/FloatingContactBar';

// ─── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

// ─── Page-level data (easy to swap per service page) ─────────────────────────
const PAGE = {
  label: 'Who We Are',
  title: 'About',
  titleAccent: 'Walls',
  subtitle: 'Family-Owned Passion. Enterprise-Level Results.',
  heroImage: '/wallstree_about_4.png',
  heroImageAlt: 'Walls Tree Service owner and crew',
};

const STATS = [
  { numeric: 20, suffix: '+', label: 'Years in Business' },
  { numeric: 5000, suffix: '+', label: 'Jobs Completed', format: (n: number) => n >= 1000 ? `${Math.floor(n/1000)},${String(n % 1000).padStart(3,'0')}` : String(n) },
  { numeric: 100, suffix: '%', label: 'Licensed & Insured' },
  { numeric: null, display: '24/7', label: 'Emergency Response' },
];

const CREDENTIALS = [
  { icon: ShieldCheck, title: 'ISA Certified Arborists', body: 'Every arborist on our team holds an ISA certification, ensuring your trees receive care grounded in science and safety.' },
  { icon: Award, title: 'Fully Licensed & Insured', body: "We carry full liability and workers' compensation insurance so you're never exposed to risk on your property." },
  { icon: Users, title: 'Locally Owned & Operated', body: "We've served Central Louisiana for over 20 years. Our reputation is built one job at a time, right here in the community." },
  { icon: Clock, title: '24/7 Emergency Response', body: "Storms don't keep business hours. Neither do we. Our emergency crews are on standby around the clock, every day of the year." },
];
// ─────────────────────────────────────────────────────────────────────────────

// ─── Stats Banner (with count-up) ────────────────────────────────────────────
function StatItem({ numeric, suffix, label, display, format }: {
  numeric: number | null; suffix?: string; label: string;
  display?: string; format?: (n: number) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const count = useCountUp(numeric ?? 0, 1800, triggered && numeric !== null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); }}, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const displayed = display ?? (numeric !== null ? `${format ? format(count) : count}${suffix ?? ''}` : '—');

  return (
    <div ref={ref} className="px-3 py-5 md:px-6 md:py-5 text-center bg-action-orange">
      <p className="font-heading font-bold text-2xl md:text-5xl text-white mb-1 tabular-nums">{displayed}</p>
      <p className="font-sans text-[9px] md:text-xs uppercase tracking-widest text-white/70">{label}</p>
    </div>
  );
}

function StatsBanner() {
  return (
    <section className="bg-action-orange border-b border-black/10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/20">
          {STATS.map((s) => <StatItem key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-enterprise-white">
      <Header />

      {/* ── Hero Banner ──────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-12 md:pt-48 md:pb-28 bg-enterprise-black overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/wallstreegallery6.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-enterprise-green/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
          <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">
            {PAGE.label}
          </p>
          <h1 className="font-heading font-light text-4xl md:text-8xl text-white uppercase tracking-tighter leading-[0.9]">
            {PAGE.title} <span className="font-bold text-action-orange">{PAGE.titleAccent}</span>
          </h1>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <StatsBanner />

      {/* ── Main Content: Text + Image ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-enterprise-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <h2 className="font-heading font-light text-4xl md:text-5xl text-enterprise-black uppercase tracking-tighter leading-[0.95] mb-4">
                {PAGE.subtitle}
              </h2>
              <div className="w-12 h-1 bg-action-orange mb-8" />

              <div className="space-y-5 font-sans text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                  We don't just cut trees — we engineer solutions. Walls Tree Service has grown into the region's premier enterprise-level tree care provider, built on absolute safety and cutting-edge arboriculture.
                </p>
                <p>
                  Equipped with high-capacity machinery and specialized rigging gear, we safely execute the hazardous jobs others turn away — all while maintaining the meticulous care of a family-owned operation.
                </p>
                <p>
                  Our ISA-certified arborists assess every situation with precision before a single cut is made. That commitment to planning and craftsmanship is why thousands of Louisiana property owners trust Walls Tree Service year after year.
                </p>
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
                  Call (318) 880-6075
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img
                src="/wallsabout1.png"
                alt={PAGE.heroImageAlt}
                className="w-full h-[520px] object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-10 left-6 bg-enterprise-green border-l-4 border-action-orange px-6 py-4">
                <p className="font-heading font-bold text-3xl text-white leading-none">20+</p>
                <p className="font-sans text-xs uppercase tracking-widest text-action-orange mt-1">Years of Excellence</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Credentials Grid ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="mb-12">
            <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-3">Why Choose Us</p>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-enterprise-black uppercase tracking-tighter">
              Built on <span className="font-bold">Trust</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {CREDENTIALS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white p-8 flex flex-col gap-4 group hover:bg-enterprise-black transition-colors duration-300">
                <div className="w-12 h-12 bg-action-orange/10 flex items-center justify-center group-hover:bg-action-orange/20 transition-colors">
                  <Icon className="w-5 h-5 text-action-orange" />
                </div>
                <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-enterprise-black group-hover:text-white transition-colors">{title}</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA Strip ──────────────────────────────────────────────── */}
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
