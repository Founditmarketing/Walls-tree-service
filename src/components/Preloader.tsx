import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Abort loading sequence entirely if the user has already visited in this session
    if (sessionStorage.getItem('walls_preloader_complete')) {
      setLoading(false);
      return;
    }

    // Initiate the fade out animation after an initial read period
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1800);

    // Fully unmount the preloader and stamp the session
    const unmountTimer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('walls_preloader_complete', 'true');
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <>
      <style>{`
        @keyframes shimmer-sweep {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        .animate-shimmer-fast {
          animation: shimmer-sweep 0.8s ease-in-out 0.3s 1 forwards;
        }
        @keyframes load-progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: load-progress 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
      
      <div 
        className={`fixed inset-0 z-[9999] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-[800ms] ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="relative overflow-hidden w-32 md:w-40 py-2 px-2 flex justify-center">
          {/* Base Logo */}
          <img 
            src="/wallstreelogo.png" 
            alt="Walls Tree Service" 
            className="w-full h-auto drop-shadow-xl opacity-[0.85]"
          />
          
          {/* Dynamic Shimmer Blade */}
          <div className="absolute top-0 bottom-0 left-0 w-[80%] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20 animate-shimmer-fast mix-blend-screen pointer-events-none"></div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-32 md:w-40 mt-6 h-[2px] bg-gray-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-action-orange animate-progress"></div>
        </div>
      </div>
    </>
  );
}
