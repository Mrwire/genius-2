import { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
            <span className="bg-gradient-to-r from-gold via-yellow-500 to-gold bg-clip-text text-transparent animate-gradient">
              {heroTexts.main.title1}
            </span>
            <br />
            <span className="glitch-text text-white mt-2">
              {heroTexts.main.title2}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <TypewriterEffect 
          text={heroTexts.main.subtitle}
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

      <ScrollIndicator />
    </section>
  );
} 