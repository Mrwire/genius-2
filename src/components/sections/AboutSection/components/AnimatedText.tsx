import { useEffect, useRef } from 'react';
import { type AnimatedTextProps } from '../types';

export default function AnimatedText({ text, variant, delay = 0 }: AnimatedTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    if (variant === 'glitch') {
      element.setAttribute('data-text', text);
    }
  }, [text, variant]);

  return (
    <span
      ref={textRef}
      className={`
        inline-block
        transition-all duration-700
        ${variant === 'glitch' && 'glitch-text'}
        ${variant === 'gradient' && 'gradient-text animate-gradient'}
        ${variant === 'emphasis' && 'font-black text-black'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </span>
  );
}