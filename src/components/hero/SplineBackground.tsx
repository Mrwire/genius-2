import { Suspense } from 'react';
import SplineScene from './SplineScene';
import SplineFallback from './SplineFallback';

export default function SplineBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={<SplineFallback />}>
        <SplineScene />
      </Suspense>
    </div>
  );
}