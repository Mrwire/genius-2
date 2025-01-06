import { Suspense } from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';
import SplineScene from './SplineScene';

export default function Hero() {
  return (
    <section className="hero-section">
      <HeroBackground>
        <Suspense fallback={<div className="absolute inset-0 bg-[#191C1F]" />}>
          <SplineScene />
        </Suspense>
      </HeroBackground>
      
      <HeroContent />
      <ScrollIndicator />
    </section>
  );
}