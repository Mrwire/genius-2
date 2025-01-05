import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import BackgroundEffects from '../BackgroundEffects';

export default function SplineScene() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    console.error('Failed to load Spline scene');
    setHasError(true);
  };

  // If there's an error, show the fallback
  if (hasError) {
    return <BackgroundEffects />;
  }

  return (
    <>
      {!isLoaded && <BackgroundEffects />}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Spline
          scene="https://prod.spline.design/mXvhMd4rZHeh807S/scene.splinecode"
          className="w-full h-full"
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </>
  );
}