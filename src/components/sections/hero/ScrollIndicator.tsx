import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        className="w-8 h-14 border-2 border-gold/30 rounded-full p-2"
        animate={{
          boxShadow: [
            "0 0 0 rgba(255,215,0,0)",
            "0 0 20px rgba(255,215,0,0.2)",
            "0 0 0 rgba(255,215,0,0)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-1 h-3 bg-gold/50 rounded-full mx-auto"
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
      <motion.p
        className="mt-4 text-gold/50 text-sm uppercase tracking-widest"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
      </motion.p>
    </motion.div>
  );
} 