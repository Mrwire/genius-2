import { useEffect, useRef, useState } from 'react';

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
  const [DotLottie, setDotLottie] = useState<any>(null);

  useEffect(() => {
    // Chargement dynamique de la bibliothèque
    import('@lottiefiles/dotlottie-web')
      .then((module) => {
        setDotLottie(module.DotLottie);
      })
      .catch((error) => {
        console.error('Failed to load DotLottie:', error);
      });
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !DotLottie) return;

    const initLottie = async () => {
      const animation = new DotLottie({
        autoplay,
        loop,
        canvas: canvasRef.current,
        src,
      });

      animation.addEventListener('ready', () => {
        onLoad?.();
      });

      return animation;
    };

    const animationPromise = initLottie();

    return () => {
      animationPromise.then(animation => animation?.destroy());
    };
  }, [src, autoplay, loop, DotLottie]);

  return (
    <canvas 
      ref={canvasRef}
      className={`w-full h-full ${className}`}
    />
  );
} 