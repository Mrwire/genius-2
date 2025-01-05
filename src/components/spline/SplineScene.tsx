import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { useSplineLoader } from '../../hooks/useSplineLoader';
import SplineFallback from './SplineFallback';

export default function SplineScene() {
  const { isLoaded, hasError, handleLoad, handleError } = useSplineLoader();

  if (hasError) {
    return <SplineFallback />;
  }

  return (
    <>
      {!isLoaded && <SplineFallback />}
      <div className={`
        absolute inset-0 
        transition-opacity duration-1000
        ${isLoaded ? 'opacity-100' : 'opacity-0'}
      `}>
        <Spline
          scene="https://prod.spline.design/xwQ54QP-pzwYvjPQ/scene.splinecode"
          onLoad={handleLoad}
          onError={handleError}
          className="w-full h-full"
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </>
  );
}