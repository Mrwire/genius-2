import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`
      fixed inset-0 z-50 bg-black
      flex flex-col items-center justify-center
      transition-opacity duration-500
      ${progress === 100 ? 'opacity-0' : 'opacity-100'}
    `}>
      <div className="w-24 h-24 mb-8 relative">
        <div className="absolute inset-0 border-2 border-t-white border-r-white border-transparent rounded-full animate-spin" />
      </div>
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="font-montserrat text-white/80 text-sm mt-4">
        {progress}%
      </span>
    </div>
  );
}