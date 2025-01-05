import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import BackgroundEffects from '../backgrounds/BackgroundEffects';

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
    return <BackgroundEffects variant="subtle" />;
  }

  return (
    <>
      {/* Show loading state */}
      {!isLoaded && <BackgroundEffects variant="subtle" />}
      
      {/* Spline Scene */}
      <div className={`
        absolute inset-0 
        transition-opacity duration-1000
        ${isLoaded ? 'opacity-100' : 'opacity-0'}
      `}>
        <Spline
          scene="https://prod.spline.design/da50375d-0ffe-46bd-a6ce-9a153e978267/scene.splinecode"
          onLoad={handleLoad}
          onError={handleError}
          className="w-full h-full"
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </>
  );
}