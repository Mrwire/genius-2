import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { Player } from '@lottiefiles/react-lottie-player';
import ConnectingLines from './ConnectingLines';

const spiritValues = [
  {
    letter: 'E',
    word: 'ÉQUIPES',
    description: 'Des experts passionnés et créatifs',
    animation: '/animations/team-spirit.json'
  },
  {
    letter: 'S',
    word: 'SUR-MESURE',
    description: 'Solutions adaptées à vos besoins',
    animation: '/animations/custom-solution.json'
  },
  {
    letter: 'P',
    word: 'PASSION',
    description: 'L\'amour du travail bien fait',
    animation: '/animations/passion-heart.json'
  },
  {
    letter: 'R',
    word: 'RESPECT',
    description: 'Des valeurs et engagements forts',
    animation: '/animations/respect-handshake.json'
  },
  {
    letter: 'I',
    word: 'INNOVATION',
    description: 'Toujours à la pointe',
    animation: '/animations/innovation-bulb.json'
  },
  {
    letter: 'T',
    word: 'TECHNOLOGIE',
    description: 'Les meilleurs outils du marché',
    animation: '/animations/tech-gear.json'
  }
];

export default function Spirit() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-gold text-lg tracking-[0.2em] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isIntersecting ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              NOS VALEURS
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-monument">
              NOS MOTS D'ORDRE
            </h2>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-gold to-purple-500 animate-gradient" />
          </motion.div>

          {/* SPIRIT Grid with Connecting Lines */}
          <div className="relative">
            <ConnectingLines isVisible={isIntersecting} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spiritValues.map((value, index) => (
                <motion.div
                  key={value.letter}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="
                    p-8 rounded-2xl
                    bg-white/5 backdrop-blur-sm
                    border border-white/10
                    hover:bg-white/10
                    group-hover:border-gold/50
                    transition-all duration-300
                  ">
                    {/* Animation Container */}
                    <div className="
                      h-16 mb-6
                      opacity-50 group-hover:opacity-100
                      transition-opacity duration-300
                    ">
                      <Player
                        src={value.animation}
                        className="w-16 h-16"
                        autoplay={isIntersecting}
                        loop
                        speed={0.7}
                      />
                    </div>

                    {/* Letter */}
                    <div className="
                      text-6xl font-bold text-gold mb-4
                      font-monument
                      group-hover:scale-110
                      transition-transform duration-300
                      relative
                    ">
                      {value.letter}
                      <div className="
                        absolute -inset-2
                        bg-gold/20
                        rounded-full
                        blur-xl
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        -z-10
                      " />
                    </div>

                    {/* Word */}
                    <h3 className="
                      text-2xl font-bold text-white mb-2
                      group-hover:text-gold
                      transition-colors duration-300
                    ">
                      {value.word}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Hover Effect Line */}
                    <div className="
                      absolute bottom-0 left-0 w-full h-1
                      bg-gradient-to-r from-gold to-purple-500
                      transform scale-x-0 group-hover:scale-x-100
                      transition-transform duration-300
                    " />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 