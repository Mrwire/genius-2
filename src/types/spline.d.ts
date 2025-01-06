declare module '@splinetool/react-spline' {
  interface SplineProps {
    scene: string;
    className?: string;
    onLoad?: () => void;
    onError?: (error: Error) => void;
    style?: React.CSSProperties;
  }

  const Spline: React.FC<SplineProps>;
  export default Spline;
} 