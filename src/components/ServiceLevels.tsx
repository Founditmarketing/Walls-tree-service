import { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const TIERS = [
  {
    id: 0,
    slug: '$',
    label: 'Basic Care',
    sub: 'Routine Maintenance',
    image: '/wallstreegallery6.jpeg',
    services: [
      'Tree trimming & shaping',
      'Crown cleaning & deadwood removal',
      'Basic debris cleanup',
      'Property walk-through assessment',
    ],
  },
  {
    id: 1,
    slug: '$$',
    label: 'Standard',
    sub: 'Full Tree Care',
    image: '/stump-grinding.jpg',
    services: [
      'Full tree removal & haul-away',
      'Stump grinding',
      'Structural cabling & bracing',
      'ISA-certified arborist consult',
      'Complete debris removal',
    ],
  },
  {
    id: 2,
    slug: '$$$',
    label: 'Premium',
    sub: 'Emergency + Enterprise',
    image: '/wallstreegallery13.jpg',
    services: [
      '24/7 emergency response',
      'Danger tree takdowns & crane work',
      'Commercial & large-scale jobs',
      'Storm damage coordination',
      'Priority scheduling & follow-up',
    ],
  },
];

function BudgetSlider({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [localPct, setLocalPct] = useState((value / 2) * 100);

  useEffect(() => {
    if (!isDragging) {
      setLocalPct((value / 2) * 100);
    }
  }, [value, isDragging]);

  const getPctFromX = useCallback((clientX: number) => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return pct * 100;
  }, []);

  const handleDrag = useCallback((clientX: number) => {
    const pct = getPctFromX(clientX);
    setLocalPct(pct);
    const closestTier = Math.round((pct / 100) * 2);
    onChange(closestTier);
  }, [getPctFromX, onChange]);

  const start = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleDrag(e.clientX);
  }, [handleDrag]);

  const move = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    handleDrag(e.clientX);
  }, [handleDrag, isDragging]);

  const end = useCallback((e: React.PointerEvent) => { 
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  }, []);

  return (
    <div className="select-none w-full">
      {/* Track */}
      <div
        ref={trackRef}
        className="relative h-[3px] bg-white/20 cursor-pointer touch-none"
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={end}
        onPointerCancel={end}
      >
        {/* Fill */}
        <div
          className={`absolute top-0 left-0 h-full bg-action-orange ${!isDragging ? 'transition-all duration-300' : ''}`}
          style={{ width: `${localPct}%` }}
        />
        {/* Thumb */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 ${!isDragging ? 'transition-all duration-300' : ''}`}
          style={{ left: `${localPct}%` }}
        >
          <div className="relative flex flex-col items-center">
            <span className="absolute -top-7 bg-action-orange text-white font-heading font-bold text-[8px] uppercase tracking-widest px-2 py-0.5 whitespace-nowrap">
              DRAG ME
            </span>
            <div className="w-4 h-4 rounded-full bg-action-orange ring-2 ring-white/30 shadow-lg" />
          </div>
        </div>
      </div>

      {/* Tier labels */}
      <div className="flex justify-between mt-6">
        {TIERS.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className="flex flex-col items-center gap-1 group"
          >
            <span className={`font-heading font-bold text-xl uppercase tracking-widest transition-colors duration-200 ${value === t.id ? 'text-action-orange' : 'text-white/30 group-hover:text-white/60'}`}>
              {t.slug}
            </span>
            <span className={`font-sans text-[9px] uppercase tracking-widest transition-colors duration-200 ${value === t.id ? 'text-white/70' : 'text-white/20'}`}>
              {t.sub}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ServiceLevels() {
  const [active, setActive] = useState(1);
  const tier = TIERS[active];

  return (
    <section className="bg-enterprise-green overflow-hidden">

      {/* ── Top bar: heading + slider ── */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">

          {/* Heading */}
          <div className="flex-shrink-0">
            <p className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-action-orange mb-3">
              Transparent Pricing
            </p>
            <h2 className="font-heading font-light text-4xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
              Choose Your<br />
              <span className="font-bold text-action-orange">Service Level</span>
            </h2>
          </div>

          {/* Slider — grows to fill remaining space */}
          <div className="flex-1 pb-1">
            <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-8">
              Your Budget
            </p>
            <BudgetSlider value={active} onChange={setActive} />
          </div>
        </div>
      </div>

      {/* ── Active tier panel ── */}
      <div className="border-t border-white/10 grid grid-cols-1 lg:grid-cols-2">

        {/* Image */}
        <div className="relative min-h-[280px] lg:min-h-[380px] overflow-hidden order-2 lg:order-1 border-t lg:border-t-0 border-white/10">
          {TIERS.map((t) => (
            <img
              key={t.id}
              src={t.image}
              alt={t.label}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${t.id === active ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          {/* Your choice label */}
          <div className="absolute bottom-6 left-6 z-10">
            <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1 drop-shadow-md">Your Choice</p>
            <p className="font-heading font-bold text-2xl md:text-3xl text-white uppercase tracking-tight drop-shadow-lg">{tier.label}</p>
          </div>
        </div>

        {/* Details */}
        <div className="lg:border-l border-white/10 border-l-4 border-l-action-orange grid items-center px-8 md:px-12 py-10 order-1 lg:order-2">
          {TIERS.map((t) => (
            <div
              key={t.id}
              className={`col-start-1 row-start-1 transition-all duration-500 ${t.id === active ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0'}`}
            >
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white uppercase tracking-tight">{t.label}</h3>
                <span className="font-heading font-bold text-lg text-action-orange">{t.slug}</span>
              </div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-white/40 mb-6">{t.sub}</p>

              <div className="w-10 h-0.5 bg-action-orange mb-7" />

              <ul className="space-y-3 mb-8">
                {t.services.map((s) => (
                  <li key={s} className="flex items-start gap-3 font-sans text-sm text-white/70">
                    <Check className="w-3.5 h-3.5 text-action-orange flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-action-orange transition-colors self-start"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
