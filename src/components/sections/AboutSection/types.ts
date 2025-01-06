export interface AboutSectionProps {
  className?: string;
}

export interface AnimatedSectionProps {
  isInView: boolean;
  children: React.ReactNode;
  delay?: number;
}

export interface AnimatedTextProps {
  text: string;
  isInView: boolean;
  delay?: number;
}

export interface HighlightedTextProps {
  text: string;
  highlights: string[];
}

export interface TextHighlightProps {
  children: React.ReactNode;
  color?: string;
}