import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        GENIUS GROUP
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-xl md:text-2xl text-gray-300 max-w-2xl"
      >
        Votre partenaire digital pour une transformation numérique réussie
      </motion.p>
    </div>
  );
}