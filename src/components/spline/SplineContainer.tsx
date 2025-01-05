import { type ReactNode } from 'react';

interface SplineContainerProps {
  children: ReactNode;
}

export default function SplineContainer({ children }: SplineContainerProps) {
  return (
    <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
      {children}
    </div>
  );
}