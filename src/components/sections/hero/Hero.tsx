import { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplineScene from './SplineScene';
import ScrollIndicator from './ScrollIndicator';
import TypewriterEffect from '../../shared/TypewriterEffect';
import ParticlesBackground from './ParticlesBackground';

const heroTexts = {
  main: {
    title1: "GENIUS",
    title2: "AD DISTRICT",
    subtitle: "L'AGENCE GLOBALE DE COMMUNICATION",
  },
  highlights: [
    "CRÉATIVITÉ SANS LIMITES",
    "EXPERTISE RECONNUE",
    "INNOVATION CONSTANTE"
  ]
};

export default function Hero() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  // Change highlight text every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % heroTexts.highlights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      <ParticlesBackground />
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <SplineScene />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold font-monument tracking-tighter mb-4">
            <span className="
              inline-block
              bg-gradient-to-r from-gold via-yellow-500 to-gold
              bg-clip-text text-transparent
              animate-gradient
            ">
              {heroTexts.main.title1}
            </span>
            <br />
            <span className="
              inline-block
              glitch-text text-white
              mt-2
            ">
              {heroTexts.main.title2}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-12"
        >
          <TypewriterEffect 
            text={heroTexts.main.subtitle}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-space-grotesk tracking-wide"
          />
        </motion.div>

        {/* Rotating Highlights */}
        <div className="h-8 mb-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentHighlight}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-gold/80 font-light tracking-widest"
            >
              {heroTexts.highlights[currentHighlight]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir nos services
          </motion.button>

          <motion.button
            className="
              px-8 py-4 text-lg
              bg-transparent
              border border-white/30
              rounded-full
              text-white/90
              hover:border-white/60
              hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
              transition-all duration-300
              backdrop-blur-sm
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactez-nous
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
} 