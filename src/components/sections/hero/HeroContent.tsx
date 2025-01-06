import { motion } from 'framer-motion';
import TypewriterEffect from '../../shared/TypewriterEffect';

interface HeroContentProps {
  title1: string;
  title2: string;
  subtitle: string;
}

export default function HeroContent({ title1, title2, subtitle }: HeroContentProps) {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold font-monument tracking-tighter mb-4">
          <span className="bg-gradient-to-r from-gold via-yellow-500 to-gold bg-clip-text text-transparent animate-gradient">
            {title1}
          </span>
          <br />
          <span className="glitch-text text-white mt-2">
            {title2}
          </span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <TypewriterEffect 
        text={subtitle}
        className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-space-grotesk tracking-wide mb-12"
      />

      {/* CTA Button */}
      <motion.button
        className="
          px-8 py-4 text-lg
          bg-gradient-to-r from-gold/20 to-purple-500/20
          border border-gold/50
          rounded-full
          text-gold
          hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]
          hover:border-gold
          transition-all duration-300
          backdrop-blur-sm
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Découvrir
      </motion.button>
    </div>
  );
} 