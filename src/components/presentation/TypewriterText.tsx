import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const text = "L'agence globale, filiale d'un groupe de sociétés spécialisées dans les métiers de la communication.";

export default function TypewriterText() {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-xl text-gray-300 max-w-3xl mx-auto"
    >
      {displayText}
      <span className="animate-blink">|</span>
    </motion.p>
  );
}