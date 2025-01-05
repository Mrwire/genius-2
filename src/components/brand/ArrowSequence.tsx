import { useEffect, useState } from 'react';

const ARROWS = ['→', '↗', '↑', '↖', '←', '↙', '↓', '↘'] as const;
const SEQUENCE = ['→', '↗', '↑', '↗', '→'] as const;

export default function ArrowSequence() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SEQUENCE.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4">
      {SEQUENCE.map((arrow, index) => (
        <span
          key={index}
          className={`
            text-3xl font-bold transition-all duration-300
            ${index === activeIndex ? 'text-blue-400 scale-125' : 'text-white/50'}
          `}
        >
          {arrow}
        </span>
      ))}
    </div>
  );
}