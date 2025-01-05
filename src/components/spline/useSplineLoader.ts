import { useState, useCallback } from 'react';

export function useSplineLoader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
    setRetryCount(0);
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error('Spline scene failed to load:', error);
    
    if (retryCount < MAX_RETRIES) {
      // Increment retry count and attempt reload
      setRetryCount(prev => prev + 1);
      setIsLoaded(false);
      setHasError(false);
    } else {
      setHasError(true);
      setIsLoaded(false);
    }
  }, [retryCount]);

  return {
    isLoaded,
    hasError,
    handleLoad,
    handleError
  };
}