import { motion } from 'framer-motion';

interface ConnectingLinesProps {
  isVisible: boolean;
}

export default function ConnectingLines({ isVisible }: ConnectingLinesProps) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Lignes de connexion animées */}
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={i}
          d={`M ${50 + i * 200} 100 Q ${150 + i * 200} ${150 + i * 50} ${250 + i * 200} 200`}
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isVisible ? 1 : 0,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            duration: 1.5,
            delay: 0.5 + i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  );
} 