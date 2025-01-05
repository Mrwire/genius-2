import { type ValueCardProps } from './types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function ValueCard({ value, index, isActive, onHover }: ValueCardProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="relative group"
      onMouseEnter={() => onHover(value.word)}
      onMouseLeave={() => onHover(null)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`
        aspect-square rounded-lg
        bg-white/5 backdrop-blur-sm
        flex items-center justify-center
        transition-all duration-500
        group-hover:bg-white/10 group-hover:scale-105
        ${isIntersecting ? 'animate-scale' : 'opacity-0 scale-90'}
      `}>
        <span className="
          text-4xl font-bold text-white
          transition-transform duration-300
          group-hover:scale-110
        ">
          {value.letter}
        </span>

        {/* Tooltip */}
        <div className={`
          absolute -bottom-8 left-1/2 -translate-x-1/2
          transition-all duration-300 origin-top
          ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}>
          <span className="
            text-sm font-medium text-gray-400
            whitespace-nowrap px-3 py-1 rounded-full
            bg-white/5
          ">
            {value.word}
          </span>
        </div>
      </div>
    </div>
  );
}