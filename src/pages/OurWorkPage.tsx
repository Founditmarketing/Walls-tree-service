import { useState, useEffect } from 'react';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactBar from '../components/FloatingContactBar';

// ─── Gallery Data ─────────────────────────────────────────────────────────────
type Category = 'All' | 'Tree Removal' | 'Pruning' | 'Emergency' | 'Before & After' | 'Crew & Equipment';

interface GalleryItem {
  src: string;
  afterSrc?: string;
  alt: string;
  category: Category;
}

const GALLERY: GalleryItem[] = [
  { src: '/wallstreebefore1.jpg',       afterSrc: '/wallstreafter1.jpeg',      alt: 'Tree removal transformation 1',          category: 'Before & After' },
  { src: '/wallstreebefore2.jpeg',      afterSrc: '/wallstreeafter2.jpeg',     alt: 'Tree removal transformation 2',          category: 'Before & After' },
  { src: '/wallstreebefore3.jpeg',      afterSrc: '/wallstreeafter3.jpeg',     alt: 'Tree removal transformation 3',          category: 'Before & After' },
  { src: '/wallstreebefore.jpg',        afterSrc: '/wallstreegalleryafter.jpg', alt: 'Property cleanup transformation',       category: 'Before & After' },
  { src: '/tree-removal-nwi.png',       alt: 'Professional tree removal',             category: 'Tree Removal' },
  { src: '/tree-pruning-nwi.png',       alt: 'Expert tree pruning',                   category: 'Pruning' },
  { src: '/clean-up-2.png',             alt: 'Emergency tree cleanup',                category: 'Emergency' },
  { src: '/wallsabout1.png',            alt: 'Walls Tree Service team',               category: 'Crew & Equipment' },
  { src: '/wallstreeimage.png',         alt: 'Expert arborists on site',              category: 'Crew & Equipment' },
  { src: '/wallstreeimage2.png',        alt: 'Crew and equipment',                    category: 'Crew & Equipment' },
  { src: '/wallstreegallery4.jpg',      alt: 'Large tree removal with crane',         category: 'Tree Removal' },
  { src: '/wallstreegallery7.jpg',      alt: 'Tree dismantling in progress',          category: 'Tree Removal' },
  { src: '/wallstreegallery11.jpg',     alt: 'Danger tree removal operation',         category: 'Tree Removal' },
  { src: '/wallstreegallery14.jpg',     alt: 'Storm tree removal',                    category: 'Tree Removal' },
  { src: '/wallstreegallery13.jpg',     alt: 'Large tree section removal',            category: 'Tree Removal' },
  { src: '/wallstreegallery8.jpg',      alt: 'Expert tree pruning',                   category: 'Pruning' },
  { src: '/wallstreegallery12.jpg',     alt: 'Crown trimming service',                category: 'Pruning' },
  { src: '/wallstreegallery3.jpeg',     alt: 'Branch trimming close-up',              category: 'Pruning' },
  { src: '/wallstreegallery5.jpeg',     alt: '24/7 emergency storm response',         category: 'Emergency' },
  { src: '/wallstreegallery2.jpeg',     alt: 'Post-storm tree clearing',              category: 'Emergency' },
  { src: '/wallstreegallery6.jpeg',     alt: 'Emergency crew on site',               category: 'Emergency' },
  { src: '/wallstree_about_1.png', alt: 'Walls Tree Service crew and equipment', category: 'Crew & Equipment' },
  { src: '/wallstree_about_2.png',         alt: 'Walls Tree Service team on job site',                     category: 'Crew & Equipment' },
  { src: '/wallstree_about_3.png',        alt: 'Crew in the field',                 category: 'Crew & Equipment' },
  { src: '/wallstreegallery9.jpg',      alt: 'Tree inspection walkthrough',           category: 'Crew & Equipment' },
  { src: '/wallstreegallery10.jpg',     alt: 'Heavy equipment on site',               category: 'Crew & Equipment' },
];

const CATEGORIES: Category[] = ['All', 'Tree Removal', 'Pruning', 'Emergency', 'Before & After', 'Crew & Equipment'];
// ─────────────────────────────────────────────────────────────────────────────

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ items, index, onClose }: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);
  const [showAfter, setShowAfter] = useState(false);

  const prev = () => {
    setCurrent(i => (i - 1 + items.length) % items.length);
    setShowAfter(false);
  };
  const next = () => {
    setCurrent(i => (i + 1) % items.length);
    setShowAfter(false);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10"
        aria-label="Close"
      >
        <X className="w-7 h-7" />
      </button>

      {/* Counter */}
      <p className="absolute top-6 left-1/2 -translate-x-1/2 font-sans text-xs uppercase tracking-widest text-white/40">
        {current + 1} / {items.length}
      </p>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 md:left-8 p-3 border border-white/20 text-white hover:bg-action-orange hover:border-action-orange transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <div className="px-20 md:px-32 max-h-[85vh] flex flex-col items-center gap-4 relative" onClick={e => e.stopPropagation()}>
        <img
          src={showAfter && items[current].afterSrc ? items[current].afterSrc : items[current].src}
          alt={items[current].alt}
          className="max-h-[78vh] max-w-full object-contain"
        />
        {items[current].afterSrc && (
          <button 
            onClick={(e) => { e.stopPropagation(); setShowAfter(!showAfter); }}
            className="mt-2 bg-action-orange text-white px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-enterprise-black transition-colors shadow-lg"
          >
            {showAfter ? 'Show Before' : 'Show After'}
          </button>
        )}
        <p className="font-sans text-xs text-white/50 uppercase tracking-widest text-center mt-2">
          {items[current].alt}
        </p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 md:right-8 p-3 border border-white/20 text-white hover:bg-action-orange hover:border-action-orange transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

// ─── GalleryCard ───────────────────────────────────────────────────────────────
function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div
      className="break-inside-avoid group relative overflow-hidden cursor-pointer border-t-2 border-t-transparent hover:border-t-action-orange transition-all duration-300"
      onClick={onClick}
    >
      <img
        src={showAfter && item.afterSrc ? item.afterSrc : item.src}
        alt={item.alt}
        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      
      {item.afterSrc && (
        <button 
          onClick={(e) => { e.stopPropagation(); setShowAfter(!showAfter); }}
          className="absolute top-4 right-4 z-20 bg-action-orange text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-lg hover:bg-enterprise-black transition-colors"
        >
          {showAfter ? 'Show Before' : 'Show After'}
        </button>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-enterprise-black/0 group-hover:bg-enterprise-black/50 transition-all duration-300 flex items-end pointer-events-none">
        <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-action-orange">
            {item.category}
          </span>
          <p className="font-heading font-bold text-sm text-white uppercase tracking-wide mt-1">
            {item.alt}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-enterprise-white">
      <Header />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-12 md:pt-48 md:pb-28 bg-enterprise-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/wallstreegallery4.jpg" alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-enterprise-green/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
          <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">
            Portfolio
          </p>
          <h1 className="font-heading font-light text-4xl md:text-8xl text-white uppercase tracking-tighter leading-[0.9]">
            Our <span className="font-bold text-action-orange">Work</span>
          </h1>
        </div>
      </section>

      {/* ── Filter Bar ────────────────────────────────────────────────────── */}
      <section className="bg-enterprise-black border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">

          {/* Mobile: 2-col wrap grid */}
          <div className="grid grid-cols-2 gap-px bg-white/10 md:hidden">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-3 px-3 font-sans font-bold text-[10px] uppercase tracking-widest transition-colors text-center bg-enterprise-black ${
                  activeCategory === cat
                    ? 'text-action-orange border-b-2 border-action-orange'
                    : 'text-white/50 hover:text-white border-b-2 border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Desktop: horizontal strip */}
          <div className="hidden md:flex items-center gap-0">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-4 font-sans font-bold text-xs uppercase tracking-widest border-b-2 transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'border-action-orange text-action-orange'
                    : 'border-transparent text-white/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto flex-shrink-0 font-sans text-xs uppercase tracking-widest text-white/30 px-5 py-4">
              {filtered.length} photo{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

        </div>
      </section>

      {/* ── Masonry Gallery ───────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-enterprise-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
            {filtered.map((item, i) => (
              <GalleryCard key={item.src} item={item} onClick={() => setLightboxIndex(i)} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-sans text-gray-400 uppercase tracking-widest text-sm">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Strip ─────────────────────────────────────────────────────── */}
      <section className="bg-enterprise-black border-t-4 border-action-orange py-14">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-light text-3xl md:text-4xl text-white uppercase tracking-tighter">
              Like what you see?
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
