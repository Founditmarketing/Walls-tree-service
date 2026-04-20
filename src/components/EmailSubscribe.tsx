import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function EmailSubscribe() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: `url('/bark-texture.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-enterprise-green/90" />
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="flex-1">
            <p className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-action-orange mb-2">
              Stay Informed
            </p>
            <h2 className="font-heading font-light text-2xl md:text-4xl text-white uppercase tracking-tighter leading-tight">
              Tree Care Tips <span className="font-bold text-action-orange">In Your Inbox</span>
            </h2>
            <p className="font-sans text-white/50 text-sm mt-2">
              Seasonal advice, service updates, and expert insights — free from Walls Tree Service.
            </p>
          </div>

          <div className="flex-1 w-full">
            {done ? (
              <div className="flex items-center gap-3 bg-enterprise-black/40 border border-action-orange/30 px-6 py-5">
                <div className="w-2 h-2 rounded-full bg-action-orange flex-shrink-0" />
                <p className="font-heading font-bold text-sm uppercase tracking-widest text-white">
                  You're subscribed — thank you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 p-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-sans text-sm focus:outline-none focus:border-action-orange transition-colors"
                />
                <button
                  type="submit"
                  className="group flex-shrink-0 bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-white hover:text-action-orange transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
