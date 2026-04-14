import { Star, ArrowRight, ExternalLink } from 'lucide-react';
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

// ─── Page data ────────────────────────────────────────────────────────────────
const PAGE = {
  label: 'What Our Clients Say',
  title: 'Client',
  titleAccent: 'Reviews',
  heroImage: '/wallstreegallery6.jpeg',
};

const STATS = [
  { numeric: 283, suffix: '+', label: 'Google Reviews' },
  { numeric: null, display: '5.0★', label: 'Average Rating' },
  { numeric: null, display: '5/5', label: 'Facebook Rating' },
  { numeric: 20, suffix: '+', label: 'Years Serving LA' },
];

const REVIEWS = [
  { name: 'Robert M.', location: 'Alexandria, LA', rating: 5, text: "Incredible precision. They brought in a massive crane to remove a dying oak hanging over our roof. The crew was professional, safe, and left the yard cleaner than they found it. True enterprise-level operation." },
  { name: 'Sarah L.', location: 'Pineville, LA', rating: 5, text: "Called them at 2 AM after a storm dropped a branch on our driveway. They were here within the hour with heavy equipment. Fast, efficient, and incredibly reassuring during a stressful situation." },
  { name: 'David K.', location: 'Leesville, LA', rating: 5, text: "The arborists at Walls really know their stuff. They didn't just want to cut — they explained the structural issues with our pines and cabled them perfectly. Top-tier service." },
  { name: 'Elena G.', location: 'Natchitoches, LA', rating: 5, text: "Outstanding work on a very difficult stump grinding job near our foundation. The team was meticulous and ensured no damage to our property. Highly recommend their expertise." },
  { name: 'Marcus T.', location: 'Monroe, LA', rating: 5, text: "We manage a large commercial property and Walls Tree Service is our go-to. Their enterprise approach means they handle our large-scale pruning with zero disruption to our tenants." },
  { name: 'Jennifer W.', location: 'Baton Rouge, LA', rating: 5, text: "Safety is clearly their top priority. Watching them dismantle a 100-foot fir tree piece by piece was impressive. Every crew member knew exactly what to do." },
  { name: 'Chris P.', location: 'Shreveport, LA', rating: 5, text: "Fair pricing, fantastic communication, and flawless execution. They showed up on time, worked quickly, and cleaned up everything. Exactly what you want from a tree service." },
  { name: 'Donna R.', location: 'Ruston, LA', rating: 5, text: "After a hurricane, we had three trees down on our property. Walls had our yard cleared in one day. I genuinely can't recommend them highly enough." },
];


// ─────────────────────────────────────────────────────────────────────────────

// ─── Stats Banner ─────────────────────────────────────────────────────────────
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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } }, { threshold: 0.5 });
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

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-action-orange text-action-orange" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-enterprise-white">
      <Header />

      {/* ── Hero Banner ───────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-12 md:pt-48 md:pb-28 bg-enterprise-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={PAGE.heroImage} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-enterprise-green/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
          <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">{PAGE.label}</p>
          <h1 className="font-heading font-light text-4xl md:text-8xl text-white uppercase tracking-tighter leading-[0.9]">
            {PAGE.title} <span className="font-bold text-action-orange">{PAGE.titleAccent}</span>
          </h1>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────────── */}
      <section className="bg-action-orange border-b border-black/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/20">
            {STATS.map((s) => <StatItem key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── Reviews Grid ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-enterprise-green">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="mb-12">
            <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-3">Verified Clients</p>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-white uppercase tracking-tighter">
              Real Words from <span className="font-bold text-action-orange">Real People</span>
            </h2>
          </div>

          <div className="border border-white/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-enterprise-green p-8 flex flex-col justify-between border-t-2 border-t-action-orange group hover:bg-enterprise-black/30 transition-colors duration-300">
                <div>
                  <div className="mb-6 pb-5 border-b border-white/10">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="font-sans text-sm text-gray-300 leading-relaxed mb-8">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <div>
                    <p className="font-heading font-bold text-white uppercase tracking-wider text-sm">{review.name}</p>
                    <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mt-1">{review.location}</p>
                  </div>
                  <div className="w-7 h-7 border border-white/20 flex items-center justify-center rotate-45 group-hover:border-action-orange transition-colors">
                    <div className="w-1 h-1 bg-action-orange rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leave a Review CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-enterprise-white border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Copy */}
            <div>
              <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">Share Your Experience</p>
              <h2 className="font-heading font-light text-4xl md:text-5xl text-enterprise-black uppercase tracking-tighter leading-[0.95] mb-4">
                Had a great <span className="font-bold">experience?</span>
              </h2>
              <div className="w-12 h-1 bg-action-orange mb-8" />
              <p className="font-sans text-lg text-gray-600 leading-relaxed mb-8">
                Your review helps other homeowners find trusted tree care — and means the world to our team. It only takes 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.google.com/search?q=Walls+Tree+Service+Alexandria+LA"
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-enterprise-black transition-colors flex items-center justify-center gap-2"
                >
                  Review on Google <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/wallstreeservice"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-enterprise-black text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-enterprise-green transition-colors flex items-center justify-center gap-2"
                >
                  Review on Facebook <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Stars display */}
            <div className="bg-gray-50 border border-gray-200 border-t-4 border-t-action-orange p-10 flex flex-col items-center text-center gap-6">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-10 h-10 fill-action-orange text-action-orange" />
                ))}
              </div>
              <p className="font-heading font-bold text-5xl text-enterprise-black">5.0</p>
              <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">Average Rating Across All Platforms</p>
              <div className="w-full border-t border-gray-200 pt-6 flex justify-around">
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-enterprise-black">283</p>
                  <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mt-1">Google Reviews</p>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-enterprise-black">44</p>
                  <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mt-1">Facebook Reviews</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Final CTA Strip ───────────────────────────────────────────────── */}
      <section className="bg-enterprise-black border-t-4 border-action-orange py-14">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-light text-3xl md:text-4xl text-white uppercase tracking-tighter">
              Ready to join our satisfied clients?
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
