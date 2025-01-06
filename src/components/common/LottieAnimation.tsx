import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  url: string;
  className?: string;
}

export default function LottieAnimation({ url, className = '' }: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(err => {
        console.error('Error loading Lottie animation:', err);
        setError(true);
      });
  }, [url]);

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-gray-400">Animation non disponible</div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className={className}
    />
  );
} 