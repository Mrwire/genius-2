import type { ValueLetterProps } from './types';

export default function ValueLetter({ 
  value, 
  isActive, 
  onHover, 
  isInView, 
  delay 
}: ValueLetterProps) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onHover(value.word)}
      onMouseLeave={() => onHover(null)}
    >
      <div 
        className={`
          aspect-square p-8
          flex items-center justify-center
          bg-white/5 backdrop-blur-sm rounded-xl
          border border-white/10
          transition-all duration-500 ease-out
          group hover:bg-white/10
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <span className={`
          text-[clamp(2.5rem,5vw,4rem)] font-extrabold
          transition-all duration-300
          ${isActive ? 'text-white scale-110' : 'text-white/80'}
          group-hover:text-white group-hover:scale-110
        `}>
          {value.letter}
        </span>
      </div>

      {/* Word tooltip */}
      <div className={`
        absolute -bottom-8 left-1/2 -translate-x-1/2
        transition-all duration-300
        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}>
        <span className="
          px-4 py-1.5 rounded-full
          text-sm font-medium text-white/80
          bg-white/5 backdrop-blur-sm
          whitespace-nowrap
        ">
          {value.word}
        </span>
      </div>
    </div>
  );
}