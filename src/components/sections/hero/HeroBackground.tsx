import { Suspense } from 'react';
import SplineScene from './SplineScene';
import ParticlesBackground from './ParticlesBackground';

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      <ParticlesBackground />
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <SplineScene />
      </Suspense>
    </>
  );
} 