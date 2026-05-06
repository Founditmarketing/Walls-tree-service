import { useState, useEffect, useRef } from 'react';
import { X, Play } from 'lucide-react';

export default function SubmissionVideoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleFormSubmit = () => {
      setIsOpen(true);
      setIsPlaying(false);
    };
    window.addEventListener('formSubmitted', handleFormSubmit);
    return () => {
      window.removeEventListener('formSubmitted', handleFormSubmit);
    };
  }, []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      <button 
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
      <div className="relative w-[90vw] max-w-[420px] aspect-[9/16] bg-black shadow-2xl overflow-hidden rounded-none border-2 border-action-orange">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls={isPlaying}
          playsInline
          onEnded={() => setIsOpen(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        >
          <source src="/contactformsubmissionvideo.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button 
            onClick={handlePlayClick}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-colors group"
          >
            <div className="w-20 h-20 bg-action-orange text-white rounded-full flex items-center justify-center pl-1.5 shadow-[0_0_30px_rgba(255,107,0,0.5)] group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
