import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';
import SplineLoader from './SplineLoader';

export default function SplineScene() {
  return (
    <Suspense fallback={<SplineLoader />}>
      <Spline
        scene="https://prod.spline.design/srlUt8NOkvmdEcUr/scene.splinecode"
        className="w-full h-full"
      />
    </Suspense>
  );
}