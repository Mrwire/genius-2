import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { motion } from 'framer-motion';

export default function Ambition() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8 font-monument"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            NOTRE GRANDE AMBITION
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: isIntersecting ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Devenir la référence qualité au Maroc et en Afrique
          </motion.p>

          <motion.div
            className="w-32 h-1 mx-auto bg-gradient-to-r from-gold to-purple-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isIntersecting ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
} 