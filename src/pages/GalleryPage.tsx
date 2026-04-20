import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactBar from '../components/FloatingContactBar';
import { Play } from 'lucide-react';
import { useState } from 'react';

const PHOTOS = [
  '/wallstreegallery1.jpeg',
  '/wallstreegallery2.jpeg',
  '/wallstreegallery3.jpeg',
  '/wallstreegallery4.jpeg',
  '/wallstreegallery5.jpeg',
  '/wallstreegallery6.jpeg',
  '/stump-grinding.jpg',
  '/drought-care-tyler.jpg',
  '/rapides-parish-pro-tree-service.jpg',
  '/pine-trees-trim-louisiana.jpg',
  '/tree-inspection-safety.jpg',
  '/january-tree-care.jpg',
];

const VIDEOS = [
  {
    src: '/Walls-Tree-Service-Video.mp4',
    thumb: '/emergency-tree-care-thumb.jpg',
    label: 'Emergency Tree Care',
  },
  {
    src: '/Stump-Grinding-Slideshow-WTS.mp4',
    thumb: '/stump-grinding-thumb.jpg',
    label: 'Stump Grinding Services',
  },
];

type Filter = 'all' | 'photos' | 'videos';

function VideoCard({ video }: { video: typeof VIDEOS[0] }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video bg-enterprise-black overflow-hidden group">
      {playing ? (
        <video
          src={video.src}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          <img
            src={video.thumb}
            alt={video.label}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-enterprise-black/40 group-hover:bg-enterprise-black/20 transition-colors" />
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          >
            <div className="w-16 h-16 rounded-full bg-action-orange/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </div>
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              {video.label}
            </span>
          </button>
        </>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>('all');

  return (
    <div className="min-h-screen bg-enterprise-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-44 pb-16 md:pt-52 md:pb-24 bg-enterprise-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/wallstreegallery4.jpeg" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-enterprise-green/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
          <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">Our Work</p>
          <h1 className="font-heading font-light text-5xl md:text-8xl text-white uppercase tracking-tighter leading-[0.9]">
            Photo &amp; Video <span className="font-bold text-action-orange">Gallery</span>
          </h1>
          <p className="font-sans text-white/50 text-base md:text-lg max-w-xl mt-5">
            Real jobs. Real results. See the Walls Tree Service crew in action across Central Louisiana.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="bg-enterprise-black border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex gap-0">
          {(['all', 'photos', 'videos'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-heading font-bold text-xs uppercase tracking-widest px-8 py-5 border-b-2 transition-colors ${
                filter === f
                  ? 'border-action-orange text-action-orange'
                  : 'border-transparent text-white/40 hover:text-white/70'
              }`}
            >
              {f === 'all' ? 'All Media' : f === 'photos' ? 'Photos' : 'Videos'}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20 bg-[#f7f7f5]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 space-y-12">

          {/* Videos */}
          {(filter === 'all' || filter === 'videos') && (
            <div>
              {filter === 'all' && (
                <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-enterprise-black mb-6 flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-action-orange inline-block" /> Videos
                </h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
                {VIDEOS.map((v) => (
                  <VideoCard key={v.src} video={v} />
                ))}
              </div>
            </div>
          )}

          {/* Photos */}
          {(filter === 'all' || filter === 'photos') && (
            <div>
              {filter === 'all' && (
                <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-enterprise-black mb-6 flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-action-orange inline-block" /> Photos
                </h2>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200">
                {PHOTOS.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden bg-enterprise-black group">
                    <img
                      src={src}
                      alt={`Walls Tree Service job ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-enterprise-black border-t-4 border-action-orange py-14">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-light text-3xl md:text-4xl text-white uppercase tracking-tighter">
              Ready for results like these?
            </h2>
            <p className="font-sans text-gray-400 mt-1">Free estimates. No obligation. Fast response.</p>
          </div>
          <a
            href="/contact"
            className="group flex-shrink-0 bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-10 py-5 hover:bg-white hover:text-action-orange transition-colors flex items-center gap-3"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
