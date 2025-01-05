import { useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { Circle, Cpu, Zap } from 'lucide-react';

export default function GlassmorphicPanel() {
  const panelRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (!panelRef.current || !x || !y) return;
    
    const rect = panelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const moveX = (x - centerX) / 25;
    const moveY = (y - centerY) / 25;
    
    panelRef.current.style.transform = `
      perspective(1000px)
      rotateY(${moveX}deg)
      rotateX(${-moveY}deg)
      translateZ(10px)
    `;
  }, [x, y]);

  return (
    <div className="absolute top-1/2 right-[10%] -translate-y-1/2 z-10">
      <div
        ref={panelRef}
        className="
          relative w-[500px] h-[600px]
          rounded-2xl overflow-hidden
          transition-all duration-300 ease-out
          transform-gpu
        "
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
          boxShadow: `
            0 0 40px rgba(0,0,0,0.1),
            inset 0 0 0 1px rgba(255,255,255,0.1)
          `,
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Floating elements */}
        <div className="absolute top-10 left-10 animate-float">
          <Circle className="w-16 h-16 text-white/10" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <Cpu className="w-12 h-12 text-white/10" />
        </div>
        <div className="absolute top-1/2 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <Zap className="w-20 h-20 text-white/10" />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

        {/* Animated border */}
        <div className="absolute inset-0 border border-white/10 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] animate-gradient-x bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] animate-gradient-x bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}