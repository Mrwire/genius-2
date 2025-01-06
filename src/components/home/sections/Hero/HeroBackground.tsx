import { type ReactNode } from 'react';

interface HeroBackgroundProps {
  children: React.ReactNode;
}

export default function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0">
      {children}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
    </div>
  );
}