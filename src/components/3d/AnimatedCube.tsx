import { useEffect, useRef } from 'react';

export default function AnimatedCube() {
  const cubeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      cube.style.transform = `
        rotateX(${Date.now() * 0.05}deg)
        rotateY(${Date.now() * 0.05}deg)
      `;
    };
    
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="w-32 h-32 relative preserve-3d" ref={cubeRef}>
      {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
        <div
          key={face}
          className={`
            absolute w-full h-full bg-white/5
            border border-white/10 backdrop-blur-sm
            transition-all duration-500
            ${face}-face
          `}
        />
      ))}
    </div>
  );
}