import { type ReactNode } from 'react';

interface BackgroundEffectsProps {
  children?: ReactNode;
  variant?: 'default' | 'intense' | 'subtle';
}

export default function BackgroundEffects({ children, variant = 'default' }: BackgroundEffectsProps) {
  return (
    <div className="relative w-full h-full">
      {/* Base Background */}
      <div className="bg-futuristic absolute inset-0" />
      
      {/* Geometric Patterns */}
      <div className="geometric-grid" />
      <div className="geometric-lines" />
      
      {/* Glow Effects */}
      <div className={`
        glow-overlay
        ${variant === 'intense' ? 'opacity-20' : ''}
        ${variant === 'subtle' ? 'opacity-5' : ''}
      `} />
      
      {/* Depth Layer */}
      <div className="depth-layer" />
      
      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}