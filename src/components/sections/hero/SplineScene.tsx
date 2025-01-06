import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  return (
    <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
      <div className="absolute inset-0 opacity-50">
        <Spline
          scene="https://prod.spline.design/your-scene-id/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </Suspense>
  );
} 