import { Phone, Mail } from 'lucide-react';

export default function FloatingContactBar() {
  return (
    <div className="fixed bottom-6 lg:bottom-10 right-4 lg:right-8 z-[100] w-max group">
      <div className="bg-enterprise-black/90 backdrop-blur-md p-2 shadow-2xl flex flex-col items-center gap-2 border border-white/20 rounded-full">
        <a 
          href="tel:555-0198" 
          className="flex items-center justify-center bg-action-orange hover:bg-white hover:text-action-orange text-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg"
          title="Call Us"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <div className="w-6 h-px bg-white/20"></div>
        <a 
          href="mailto:contact@wallstreeservice.com" 
          className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white p-3 md:p-4 rounded-full transition-all duration-300"
          title="Email Us"
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </div>
  );
}
