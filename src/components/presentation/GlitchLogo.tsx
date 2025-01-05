import { motion } from 'framer-motion';

export default function GlitchLogo() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mb-8"
    >
      <h1 className="text-6xl font-black text-white glitch-text" data-text="GENIUS AD DISTRICT">
        GENIUS AD DISTRICT
      </h1>
      <div className="absolute inset-0 animate-glitch-skew">
        <div className="absolute inset-0 text-[#FFD700] opacity-50">
          GENIUS AD DISTRICT
        </div>
      </div>
    </motion.div>
  );
}