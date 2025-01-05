import { TextHighlightProps } from '../types';

export default function TextHighlight({ children, className = '' }: TextHighlightProps) {
  return (
    <span className={`font-black text-black ${className}`}>
      {children}
    </span>
  );
}