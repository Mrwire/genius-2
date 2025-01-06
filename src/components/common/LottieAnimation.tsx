import { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  src: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  onLoad?: () => void;
}

export default function LottieAnimation({
  src,
  className = '',
  autoplay = false,
  loop = true,
  onLoad
}: LottieAnimationProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`w-full h-full ${className}`}>
      {!isLoaded && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Player
        src={src}
        className={`w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        autoplay={autoplay}
        loop={loop}
        onEvent={event => {
          if (event === 'load') {
            setIsLoaded(true);
            onLoad?.();
          }
        }}
      />
    </div>
  );
} 