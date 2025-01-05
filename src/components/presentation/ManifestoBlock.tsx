import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

const highlights = [
  {
    word: 'PERFECTION',
    animation: 'https://lottie.host/embed/perfectionism/stars-sparkle.json'
  },
  {
    word: 'PREMIUM',
    animation: 'https://lottie.host/embed/premium-badge/badge.json'
  },
  {
    word: 'WOW EFFECT',
    animation: 'https://lottie.host/embed/explosion-wow/explosion.json'
  }
];

export default function ManifestoBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="relative max-w-4xl mx-auto"
    >
      <div className="
        p-12 rounded-2xl
        bg-white/5 backdrop-blur-md
        border border-white/10
        shadow-[0_0_50px_rgba(255,215,0,0.1)]
        hover:shadow-[0_0_100px_rgba(255,215,0,0.2)]
        transition-all duration-500
      ">
        <p className="text-2xl text-gray-300 leading-relaxed">
          Dans une quête continuelle de la{' '}
          <HighlightedWord word="PERFECTION" animation={highlights[0].animation} />,
          Genius se dote des meilleurs outils technologiques, et devient au fil du temps,
          l'agence dite{' '}
          <HighlightedWord word="PREMIUM" animation={highlights[1].animation} />,
          offrant le{' '}
          <HighlightedWord word="WOW EFFECT" animation={highlights[2].animation} />{' '}
          garanti.
        </p>
      </div>
    </motion.div>
  );
}

function HighlightedWord({ word, animation }: { word: string; animation: string }) {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10 font-black text-[#FFD700]">{word}</span>
      <div className="absolute -top-6 -right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
        <Player
          src={animation}
          className="w-full h-full"
          autoplay
          loop
        />
      </div>
    </span>
  );
}