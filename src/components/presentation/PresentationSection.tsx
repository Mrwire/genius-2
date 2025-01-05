import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import GlitchLogo from './GlitchLogo';
import TypewriterText from './TypewriterText';
import ManifestoBlock from './ManifestoBlock';
import { useParallax } from '../../hooks/useParallax';

export default function PresentationSection() {
  const { ref } = useParallax();

  return (
    <section 
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GlitchLogo />
          <TypewriterText />
        </motion.div>

        <ManifestoBlock />
      </div>
    </section>
  );
}