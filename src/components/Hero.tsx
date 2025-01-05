import { useRef } from 'react';
import SplineBackground from './hero/SplineBackground';
import HeroContent from './hero/HeroContent';
import BackgroundEffects from './hero/BackgroundEffects';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen w-full overflow-hidden flex items-center bg-black"
    >
      <SplineBackground />
      <BackgroundEffects />
      <HeroContent />
    </section>
  );
}