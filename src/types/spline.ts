export interface SplineScene {
  id: string;
  url: string;
  loading?: boolean;
  error?: Error | null;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}