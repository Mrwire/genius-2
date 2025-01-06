import { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const animations = {
  branding: "https://lottie.host/3404a858-e80e-45ff-a6be-4055a2c851be/qFEbXjwJQw.lottie",
  media: "https://lottie.host/53369c34-82ca-4181-837a-8117a953bd93/Lx5VFwoP42.lottie",
  marketing: "https://lottie.host/024284e7-5993-4d54-a30e-278b59eaa93b/3f7fIrpWF3.lottie",
  digital: "https://lottie.host/e57b7d1e-3932-4bde-8516-afc279fd2ded/UtDN5QiMsF.lottie",
  web: "https://lottie.host/bda8fe50-c1ce-4036-94f0-2c5f1110a34e/qnVwyzxnE7.lottie"
};

export default function SplineScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer pour le lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const player = entry.target as HTMLElement;
            player.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observer chaque animation
    const players = containerRef.current?.querySelectorAll('.lottie-player');
    players?.forEach((player) => {
      observerRef.current?.observe(player);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
    >
      {/* Grid Layout pour les animations */}
      <div className="
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
        gap-4 p-8
        w-full h-full
        opacity-20
      ">
        {Object.entries(animations).map(([key, url], index) => (
          <div 
            key={key}
            className="
              relative
              lottie-player
              opacity-0 transition-opacity duration-1000
              hover:opacity-100
            "
            style={{ 
              transitionDelay: `${index * 200}ms`,
              transform: `scale(${0.8 + Math.random() * 0.4})`
            }}
          >
            <Player
              src={url}
              className="w-full h-full"
              loop
              autoplay={false}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice',
                clearCanvas: true,
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlay gradient pour adoucir les animations */}
      <div className="
        absolute inset-0
        bg-gradient-radial from-transparent via-black/50 to-black
        pointer-events-none
      " />
    </div>
  );
} 