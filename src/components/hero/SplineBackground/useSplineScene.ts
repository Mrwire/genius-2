import { useState, useCallback } from 'react';

export function useSplineScene() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
  }, []);

  const handleError = useCallback(() => {
    console.error('Failed to load Spline scene');
    setHasError(true);
    setIsLoaded(false);
  }, []);

  return {
    isLoaded,
    hasError,
    handleLoad,
    handleError
  };
}