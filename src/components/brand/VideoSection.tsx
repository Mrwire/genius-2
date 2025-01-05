import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative h-screen bg-[#191C1F]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-6xl aspect-video bg-black/50 rounded-lg overflow-hidden">
          {!isPlaying && (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 opacity-30 rounded-full scale-150 group-hover:scale-[2] transition-transform duration-500" />
                <Play className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h2 className="absolute bottom-12 left-12 text-4xl font-bold text-white">
                Genius, <span className="text-blue-400">it's not just a word</span>
              </h2>
            </div>
          )}
          {isPlaying && (
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              controls
              src="https://your-video-url.mp4"
            />
          )}
        </div>
      </div>
    </section>
  );
}