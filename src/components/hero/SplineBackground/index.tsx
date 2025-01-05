import { lazy, Suspense } from 'react';
import AnimatedBackground from './AnimatedBackground';
import SplineLoader from './SplineLoader';

const SplineScene = lazy(() => import('./SplineScene'));

export default function SplineBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <AnimatedBackground />
      <Suspense fallback={<SplineLoader />}>
        <SplineScene />
      </Suspense>
    </div>
  );
}