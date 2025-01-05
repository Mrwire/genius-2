import { type HighlightedTextProps } from '../types';

export default function HighlightedText({ text, highlights }: HighlightedTextProps) {
  const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'g'));

  return (
    <p className="text-lg md:text-xl leading-relaxed text-gray-800">
      {parts.map((part, index) => (
        highlights.includes(part) ? (
          <span
            key={index}
            className="font-black text-black relative group"
          >
            {part}
            <span className="
              absolute -inset-1 -z-10 rounded
              bg-gradient-to-r from-blue-100 to-purple-100
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            " />
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      ))}
    </p>
  );
}