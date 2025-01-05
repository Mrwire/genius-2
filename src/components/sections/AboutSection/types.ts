export interface AboutSectionProps {
  className?: string;
}

export interface AnimatedTextProps {
  text: string;
  variant: 'glitch' | 'gradient' | 'emphasis';
  delay?: number;
}

export interface HighlightedTextProps {
  text: string;
  highlights: string[];
}