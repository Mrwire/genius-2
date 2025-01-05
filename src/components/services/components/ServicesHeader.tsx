import { motion } from 'framer-motion';
import type { ServicesHeaderProps } from '../types';

export default function ServicesHeader({ isInView }: ServicesHeaderProps) {
  return (
    <div className="text-center mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        NOS MÉTIERS
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl text-gray-600 tracking-[2px]"
      >
        AGENCE MULTIDISCIPLINAIRE
      </motion.p>
    </div>
  );
}