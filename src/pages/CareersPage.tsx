import { ArrowRight, HardHat, Drill, Truck, TreePine } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactBar from '../components/FloatingContactBar';
import { useState } from 'react';

const POSITIONS = [
  {
    icon: TreePine,
    title: 'Certified Arborist / Tree Climber',
    type: 'Full-Time',
    description: 'We\'re looking for experienced climbers with ISA certification (or willingness to obtain). You\'ll lead tree removals, pruning, and emergency operations across Central Louisiana.',
    requirements: [
      'ISA Certification preferred',
      '2+ years climbing experience',
      'Clean driving record',
      'Ability to work at heights',
    ],
  },
  {
    icon: Drill,
    title: 'Ground Crew Member',
    type: 'Full-Time / Part-Time',
    description: 'Join our ground crew assisting with debris removal, equipment handling, and site cleanup. Great entry-level opportunity to learn the tree care industry.',
    requirements: [
      'Physical fitness required',
      'Team player attitude',
      'Reliable transportation',
      'No experience necessary — we train',
    ],
  },
  {
    icon: Truck,
    title: 'Equipment Operator',
    type: 'Full-Time',
    description: 'Operate our crane, bucket truck, and stump grinder safely and efficiently on job sites throughout the region.',
    requirements: [
      'CDL preferred',
      'Heavy equipment experience',
      'Safety-first mindset',
      'Ability to travel locally',
    ],
  },
  {
    icon: HardHat,
    title: 'Foreman / Crew Lead',
    type: 'Full-Time',
    description: 'Lead a team of 3–5 crew members on daily job sites. You\'ll coordinate schedules, ensure safety compliance, and deliver the Walls standard of excellence.',
    requirements: [
      '5+ years tree care experience',
      'Leadership experience',
      'ISA certification a plus',
      'Strong communication skills',
    ],
  },
];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-enterprise-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-44 pb-16 md:pt-52 md:pb-24 bg-enterprise-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/rapides-parish-pro-tree-service.jpg" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-enterprise-green/75 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
          <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">Join Our Crew</p>
          <h1 className="font-heading font-light text-5xl md:text-8xl text-white uppercase tracking-tighter leading-[0.9]">
            Work With <span className="font-bold text-action-orange">Walls</span>
          </h1>
          <p className="font-sans text-white/50 text-base md:text-lg max-w-xl mt-5">
            We're building Central Louisiana's most trusted tree service team. If you take pride in hard work and safety, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section
        className="relative py-16 md:py-20 overflow-hidden"
        style={{ backgroundImage: `url('/bark-texture.png')`, backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-enterprise-green/90" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              { label: 'Competitive Pay', body: 'We pay above-market rates because great people deserve great wages.' },
              { label: 'Year-Round Work', body: 'Central Louisiana\'s climate means consistent, steady work all 12 months.' },
              { label: 'Room to Grow', body: 'We sponsor ISA certifications and promote from within. Grow with us.' },
            ].map((item) => (
              <div key={item.label} className="bg-enterprise-black/50 p-8 md:p-10">
                <div className="w-8 h-0.5 bg-action-orange mb-5" />
                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-tight mb-3">{item.label}</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 bg-[#f7f7f5]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="mb-12">
            <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-3">Now Hiring</p>
            <h2 className="font-heading font-light text-4xl md:text-6xl text-enterprise-black uppercase tracking-tighter">
              Open <span className="font-bold">Positions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {POSITIONS.map((pos) => (
              <div key={pos.title} className="group bg-white hover:bg-enterprise-black transition-colors duration-300 p-8 md:p-10 border-t-2 border-action-orange">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 bg-action-orange/10 group-hover:bg-action-orange/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <pos.icon className="w-5 h-5 text-action-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-enterprise-black group-hover:text-white transition-colors">{pos.title}</h3>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-white/40 transition-colors">{pos.type}</span>
                  </div>
                </div>
                <div className="w-8 h-0.5 bg-action-orange group-hover:w-14 transition-all duration-300 mb-5" />
                <p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed mb-6 transition-colors">{pos.description}</p>
                <ul className="space-y-2 mb-6">
                  {pos.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 font-sans text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                      <span className="text-action-orange mt-0.5">—</span> {r}
                    </li>
                  ))}
                </ul>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-action-orange group-hover:gap-3 transition-all duration-200"
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 md:py-24 bg-enterprise-white border-t border-gray-100">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <div className="mb-10">
            <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-3">Apply Today</p>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-enterprise-black uppercase tracking-tighter">
              Send Us Your <span className="font-bold">Application</span>
            </h2>
          </div>

          {submitted ? (
            <div className="border-l-4 border-action-orange bg-gray-50 px-8 py-8">
              <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-enterprise-black mb-2">Application Received!</h3>
              <p className="font-sans text-gray-600">Thank you for your interest in joining Walls Tree Service. We'll be in touch soon.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 font-sans text-sm text-action-orange underline underline-offset-4">Submit another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Full Name *</label>
                  <input required type="text" placeholder="John Doe" className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Phone *</label>
                  <input required type="tel" placeholder="(318) 000-0000" className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Email *</label>
                <input required type="email" placeholder="john@example.com" className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Position Interested In</label>
                <select className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black focus:border-action-orange focus:outline-none rounded-none appearance-none transition-colors cursor-pointer">
                  <option value="">Select a position…</option>
                  {POSITIONS.map((p) => <option key={p.title}>{p.title}</option>)}
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Years of Experience</label>
                <select className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black focus:border-action-orange focus:outline-none rounded-none appearance-none transition-colors cursor-pointer">
                  <option value="">Select…</option>
                  <option>No experience (entry-level)</option>
                  <option>1–2 years</option>
                  <option>3–5 years</option>
                  <option>5–10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Tell Us About Yourself</label>
                <textarea rows={5} placeholder="Share your experience, certifications, and why you want to join the Walls crew…" className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none resize-none transition-colors" />
              </div>
              <button type="submit" className="group bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-10 py-5 hover:bg-enterprise-black transition-colors flex items-center gap-3">
                Submit Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
