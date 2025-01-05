export interface Value {
  letter: string;
  word: string;
  description: string;
}

export interface ValueLetterProps {
  value: Value;
  isActive: boolean;
  onHover: (word: string | null) => void;
  isInView: boolean;
  delay: number;
}

export interface ValuesGridProps {
  activeValue: string | null;
  onValueHover: (value: string | null) => void;
}