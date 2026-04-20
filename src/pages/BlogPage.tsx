import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactBar from '../components/FloatingContactBar';
import EmailSubscribe from '../components/EmailSubscribe';
import { BLOG_POSTS } from '../data/blog';

function PostCard({ post }: { post: typeof BLOG_POSTS[0] }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative flex flex-col justify-between bg-white hover:bg-enterprise-black transition-colors duration-300 overflow-hidden border-t-2 border-action-orange p-8"
    >
      <div className="flex flex-col gap-4">
        {/* Category + Date */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-action-orange/10 text-action-orange">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-white/40 transition-colors">
            <Calendar className="w-3 h-3" /> {post.formattedDate}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-heading font-bold text-lg md:text-xl uppercase tracking-tight text-enterprise-black group-hover:text-white transition-colors duration-300 leading-snug">
          {post.title}
        </h2>

        {/* Divider */}
        <div className="w-8 h-0.5 bg-action-orange group-hover:w-14 transition-all duration-300" />

        {/* Excerpt */}
        <p className="font-sans text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
          {post.excerpt}
        </p>
      </div>

      {/* CTA */}
      <span className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-action-orange group-hover:gap-3 transition-all duration-200 mt-6">
        Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-[#f7f7f5]">
      <Header />

      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-16 md:pt-52 md:pb-28 bg-enterprise-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/wallstreegallery6.jpeg" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-enterprise-green/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
          <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">
            Knowledge &amp; Tips
          </p>
          <h1 className="font-heading font-light text-5xl md:text-8xl text-white uppercase tracking-tighter leading-[0.9]">
            Tree Care <span className="font-bold text-action-orange">Blog</span>
          </h1>
          <p className="font-sans text-white/50 text-base md:text-lg max-w-xl mt-5">
            Expert advice from the ISA-certified arborists at Walls Tree Service — serving Central Louisiana.
          </p>
        </div>
      </section>

      {/* ── Post Grid ───────────────────────────────────────────────── */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-8 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-gray-200">
          {sorted.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <EmailSubscribe />

      {/* ── CTA Strip ───────────────────────────────────────────────── */}
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
