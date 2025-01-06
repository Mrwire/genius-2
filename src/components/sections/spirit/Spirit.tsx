import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

const spiritValues = [
  {
    letter: 'E',
    word: 'ÉQUIPES',
    description: 'Des experts passionnés et créatifs'
  },
  {
    letter: 'S',
    word: 'SUR-MESURE',
    description: 'Solutions adaptées à vos besoins'
  },
  {
    letter: 'P',
    word: 'PASSION',
    description: 'L\'amour du travail bien fait'
  },
  {
    letter: 'R',
    word: 'RESPECT',
    description: 'Des valeurs et engagements forts'
  },
  {
    letter: 'I',
    word: 'INNOVATION',
    description: 'Toujours à la pointe'
  },
  {
    letter: 'T',
    word: 'TECHNOLOGIE',
    description: 'Les meilleurs outils du marché'
  }
];

export default function Spirit() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-monument">
              NOS MOTS D'ORDRE
            </h2>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-gold to-purple-500" />
          </motion.div>

          {/* SPIRIT Grid */}
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
                  transition-all duration-300
                ">
                  {/* Letter */}
                  <div className="
                    text-6xl font-bold text-gold mb-4
                    font-monument
                    group-hover:scale-110
                    transition-transform duration-300
                  ">
                    {value.letter}
                  </div>

                  {/* Word */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {value.word}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400">
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
    </section>
  );
} 