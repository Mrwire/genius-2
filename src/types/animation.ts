export interface ParticleConfig {
  count: number;
  size: { min: number; max: number };
  speed: { min: number; max: number };
  opacity: { min: number; max: number };
  color: string;
}

export interface AnimationScene {
  id: string;
  url: string;
  fallback?: string;
}

export interface LottieAnimation {
  id: string;
  path: string;
  loop?: boolean;
  autoplay?: boolean;
} 