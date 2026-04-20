import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactBar from '../components/FloatingContactBar';
import EmailSubscribe from '../components/EmailSubscribe';
import { BLOG_POSTS } from '../data/blog';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Scroll to top on every new post
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const sortedIndex = sorted.findIndex((p) => p.slug === slug);
  const prev = sorted[sortedIndex + 1] ?? null;
  const next = sorted[sortedIndex - 1] ?? null;

  return (
    <div className="min-h-screen bg-enterprise-white">
      <Header />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-12 md:pt-52 md:pb-20 bg-enterprise-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/wallstreegallery6.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-enterprise-green/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-sans font-bold text-[10px] uppercase tracking-widest text-action-orange hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" /> Back to Blog
          </Link>

          {/* Category + Date */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-action-orange/20 text-action-orange">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-widest text-white/40">
              <Calendar className="w-3 h-3" /> {post.formattedDate}
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl xl:text-6xl text-white uppercase tracking-tighter leading-[1] mb-4">
            {post.title}
          </h1>
          <div className="w-16 h-1 bg-action-orange mt-6" />
        </div>
      </section>

      {/* ── Article Body ──────────────────────────────────────────────── */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-enterprise-white">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">

          {/* Post hero image */}
          {post.image && (
            <div className="mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Video — top position */}
          {post.video && post.videoPosition === 'top' && (
            <div className="mb-12">
              <div className="relative bg-enterprise-black">
                <video
                  src={post.video}
                  controls
                  playsInline
                  poster={post.videoThumb}
                  className="w-full max-h-[540px] object-contain"
                />
              </div>
              <div className="bg-enterprise-green px-6 py-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-action-orange flex-shrink-0" />
                <p className="font-sans font-bold text-[10px] uppercase tracking-widest text-white/70">
                  Walls Tree Service — Emergency Tree Care
                </p>
              </div>
            </div>
          )}

          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-enterprise-black mb-3 border-l-4 border-action-orange pl-4">
                    {section.heading}
                  </h2>
                )}
                {section.body.split('\n\n').map((para, j) => (
                  <p key={j} className="font-sans text-base md:text-lg text-gray-600 leading-relaxed mb-3 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* CTA callout */}
          {post.cta && (
            <div className="mt-14 border-l-4 border-action-orange bg-gray-50 px-8 py-6">
              <p className="font-sans text-base text-gray-700 leading-relaxed italic">{post.cta}</p>
              <a
                href="tel:3188806075"
                className="mt-4 inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-widest text-action-orange hover:text-enterprise-black transition-colors"
              >
                Call (318) 880-6075 <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Post video — bottom of article */}
          {post.video && post.videoPosition !== 'top' && (
            <div className="mt-14">
              <div className="relative bg-enterprise-black">
                <video
                  src={post.video}
                  controls
                  playsInline
                  poster={post.videoThumb}
                  className="w-full max-h-[540px] object-contain"
                />
              </div>
              <div className="bg-enterprise-green px-6 py-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-action-orange flex-shrink-0" />
                <p className="font-sans font-bold text-[10px] uppercase tracking-widest text-white/70">
                  Stump Grinding &amp; Tree Removal — Alexandria, LA
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Post Navigation ───────────────────────────────────────────── */}
      <section className="border-t border-gray-200 bg-gray-50 py-10">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between gap-6">
          {prev ? (
            <Link to={`/blog/${prev.slug}`} className="group flex items-center gap-4 text-left">
              <ArrowLeft className="w-5 h-5 text-action-orange flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-1">Previous</p>
                <p className="font-heading font-bold text-sm uppercase tracking-tight text-enterprise-black group-hover:text-action-orange transition-colors line-clamp-2">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link to={`/blog/${next.slug}`} className="group flex items-center gap-4 text-right sm:justify-end">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-1">Next</p>
                <p className="font-heading font-bold text-sm uppercase tracking-tight text-enterprise-black group-hover:text-action-orange transition-colors line-clamp-2">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-action-orange flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* ── More Posts ────────────────────────────────────────────────── */}
      <section className="py-16 bg-enterprise-white border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-10">
            <p className="font-heading font-bold text-2xl uppercase tracking-tight text-enterprise-black">
              More <span className="text-action-orange">Articles</span>
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest text-action-orange hover:text-enterprise-black transition-colors"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-gray-200">
            {sorted
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group bg-white hover:bg-enterprise-black transition-colors duration-300 p-8 flex flex-col gap-4 border-t-2 border-action-orange"
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-action-orange/10 text-action-orange">
                      {p.category}
                    </span>
                    <span className="font-sans text-[10px] text-gray-400 group-hover:text-white/40 uppercase tracking-widest transition-colors">
                      {p.formattedDate}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-tight text-enterprise-black group-hover:text-white transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <div className="w-6 h-0.5 bg-action-orange group-hover:w-12 transition-all duration-300" />
                  <span className="inline-flex items-center gap-1.5 font-heading font-bold text-xs uppercase tracking-widest text-action-orange">
                    Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <EmailSubscribe />

      {/* ── CTA Strip ─────────────────────────────────────────────────── */}
      <section className="bg-enterprise-black border-t-4 border-action-orange py-14">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-light text-3xl md:text-4xl text-white uppercase tracking-tighter">
              Need a tree inspection?
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
