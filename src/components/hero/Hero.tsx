import { Suspense, lazy } from 'react';
import HeroContent from './HeroContent';
const SplineScene = lazy(() => import('../spline/SplineScene'));
const SplineContainer = lazy(() => import('../spline/SplineContainer'));

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-black">
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <SplineContainer>
          <SplineScene />
        </SplineContainer>
      </Suspense>
      <HeroContent />
    </section>
  );
}