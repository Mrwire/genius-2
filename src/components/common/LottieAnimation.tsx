import { useEffect, useRef } from 'react';
import { DotLottie } from '@lottiefiles/dotlottie-web';

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lottieRef = useRef<DotLottie | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const initLottie = async () => {
      lottieRef.current = new DotLottie({
        autoplay,
        loop,
        canvas: canvasRef.current,
        src,
      });

      lottieRef.current.addEventListener('ready', () => {
        onLoad?.();
      });
    };

    initLottie();

    return () => {
      lottieRef.current?.destroy();
    };
  }, [src, autoplay, loop]);

  return (
    <canvas 
      ref={canvasRef}
      className={`w-full h-full ${className}`}
    />
  );
} 