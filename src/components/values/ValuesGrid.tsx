import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { VALUES } from './constants';
import ValueLetter from './ValueLetter';
import type { ValuesGridProps } from './types';

export default function ValuesGrid({ activeValue, onValueHover }: ValuesGridProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
    >
      {VALUES.map((value, index) => (
        <ValueLetter
          key={value.letter}
          value={value}
          isActive={activeValue === value.word}
          onHover={onValueHover}
          isInView={isIntersecting}
          delay={index * 100}
        />
      ))}
    </div>
  );
}