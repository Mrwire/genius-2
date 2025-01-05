import { type ReactNode } from 'react';

interface HeroBackgroundProps {
  children?: ReactNode;
}

export default function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <div className="hero-background">
      <div className="hero-grid" />
      {children}
    </div>
  );
}