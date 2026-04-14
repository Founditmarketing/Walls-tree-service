import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactBar from '../components/FloatingContactBar';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-enterprise-white">
      <Header />

      {/* Hero — solid dark, no image */}
      <section className="pt-36 pb-16 bg-enterprise-green">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-action-orange mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading font-light text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.9]">
            Contact <span className="font-bold text-action-orange">Us</span>
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-enterprise-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col gap-4 py-16 border-l-4 border-action-orange pl-8">
                  <h2 className="font-heading font-bold text-3xl text-enterprise-black uppercase tracking-tight">Request Received!</h2>
                  <p className="font-sans text-gray-600">We'll be in touch shortly. For urgent needs, call <strong>(318) 880-6075</strong>.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-2 font-sans text-sm text-action-orange underline underline-offset-4 self-start">Submit another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-heading font-light text-3xl text-enterprise-black uppercase tracking-tight mb-8">
                    Free <span className="font-bold">Estimate</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Full Name *</label>
                      <input required type="text" placeholder="John Doe" className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Phone *</label>
                      <input required type="tel" placeholder="(555) 000-0000" className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Email *</label>
                    <input required type="email" placeholder="john@example.com" className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Service Needed</label>
                    <select className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black focus:border-action-orange focus:outline-none rounded-none appearance-none transition-colors cursor-pointer">
                      <option value="">Select a service…</option>
                      <option>Tree Removal</option>
                      <option>Pruning &amp; Trimming</option>
                      <option>Emergency Service</option>
                      <option>Stump Grinding</option>
                      <option>Cabling &amp; Bracing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans font-bold text-xs text-gray-500 uppercase tracking-widest">Message</label>
                    <textarea rows={4} placeholder="Tell us about your project…" className="w-full p-4 bg-gray-50 border-2 border-gray-200 font-sans text-enterprise-black placeholder:text-gray-400 focus:border-action-orange focus:outline-none rounded-none resize-none transition-colors" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button type="submit" className="group bg-action-orange text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-enterprise-black transition-colors flex items-center justify-center gap-2 flex-1">
                      Send Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a href="tel:3188806075" className="bg-enterprise-black text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-enterprise-green transition-colors flex items-center justify-center gap-2 flex-1">
                      <Phone className="w-4 h-4" /> (318) 880-6075
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col gap-8 lg:pl-8 lg:border-l border-gray-200">
              <div>
                <h2 className="font-heading font-light text-3xl text-enterprise-black uppercase tracking-tight mb-8">
                  Contact <span className="font-bold">Info</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: Phone, label: 'Phone', value: '(318) 880-6075' },
                    { icon: Mail, label: 'Email', value: 'info@wallstreeservice.com' },
                    { icon: MapPin, label: 'Address', value: '749 McKeithen Dr., Alexandria, LA 71303' },
                    { icon: Clock, label: 'Hours', value: 'Open 24/7 — Including Emergencies' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-action-orange/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-action-orange" />
                      </div>
                      <div>
                        <p className="font-sans font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                        <p className="font-sans text-enterprise-black font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency callout */}
              <div className="bg-action-orange p-8 mt-4">
                <h3 className="font-heading font-bold text-xl text-white uppercase tracking-tight mb-2">Need Help Now?</h3>
                <p className="font-sans text-sm text-white/80 mb-5">We respond 24/7 for storm damage, fallen trees, and hazardous limbs.</p>
                <a href="tel:3188806075" className="block bg-white text-action-orange font-heading font-bold uppercase tracking-widest text-sm px-6 py-3 text-center hover:bg-enterprise-black hover:text-white transition-colors">
                  Call Now — Free
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
