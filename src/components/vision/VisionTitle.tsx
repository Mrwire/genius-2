import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { type VisionProps } from './types';

export default function VisionTitle({ title, subtitle }: VisionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div ref={ref} className="text-center mb-16">
      <h2 className={`
        text-4xl md:text-5xl font-bold text-white mb-8
        transition-all duration-700
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>
        {title}
      </h2>
      
      <div className={`
        w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8
        transition-all duration-700 delay-300
        ${isIntersecting ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
      `} />
      
      {subtitle && (
        <p className={`
          text-2xl text-gray-300 mb-4
          transition-all duration-700 delay-500
          ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          {subtitle}
        </p>
      )}
    </div>
  );
}