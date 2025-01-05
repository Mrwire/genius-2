import { useState } from 'react';

interface LetterBoxProps {
  letter: string;
  word: string;
  isInView: boolean;
  delay: number;
}

export default function LetterBox({ letter, word, isInView, delay }: LetterBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative group
        transition-all duration-700
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="
        aspect-square rounded-2xl p-8
        bg-[#000000]
        border border-white/10
        shadow-[0_0_30px_rgba(255,255,255,0.05)]
        flex items-center justify-center
        group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]
        transition-all duration-300
      ">
        <span className="
          text-6xl font-black text-white/90
          group-hover:scale-110
          transition-all duration-300
        ">
          {letter}
        </span>
      </div>

      <div className={`
        absolute -bottom-12 left-1/2 -translate-x-1/2 w-full
        transition-all duration-300
        ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}>
        <div className="text-center">
          <div className="font-bold text-white">{word}</div>
        </div>
      </div>
    </div>
  );
}