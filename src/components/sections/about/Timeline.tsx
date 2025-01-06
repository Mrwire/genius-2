import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

const timelineEvents = [
  {
    year: '2008',
    title: 'Création de Genius',
    description: 'Naissance de l\'agence avec une vision innovante',
    animation: '/animations/rocket-launch.json'
  },
  {
    year: '2012',
    title: 'Expansion Nationale',
    description: 'Ouverture des bureaux de Rabat et Tanger',
    animation: '/animations/growth.json'
  },
  {
    year: '2015',
    title: 'Innovation Digitale',
    description: 'Intégration des dernières technologies',
    animation: '/animations/digital-innovation.json'
  },
  {
    year: '2023',
    title: 'Leader du Marché',
    description: 'Excellence reconnue dans le secteur',
    animation: '/animations/trophy.json'
  }
];

interface TimelineProps {
  isInView: boolean;
}

export default function Timeline({ isInView }: TimelineProps) {
  return (
    <div className="mt-24">
      <motion.h3
        className="text-4xl font-bold text-white mb-12 text-center font-monument"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        Notre Parcours
      </motion.h3>

      <div className="relative">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-gold/50 via-gold/30 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        />

        {/* Timeline Events */}
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`
                relative flex items-center
                ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
                mb-16 last:mb-0
              `}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (index % 2 === 0 ? -50 : 50) }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <motion.div
                  className="
                    p-6 rounded-2xl
                    bg-white/5 backdrop-blur-sm
                    border border-white/10
                    hover:bg-white/10
                    transition-all duration-300
                    group
                  "
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-gold text-2xl font-bold mb-2">{event.year}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{event.title}</h4>
                  <p className="text-gray-400">{event.description}</p>
                </motion.div>
              </div>

              {/* Center Point */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <motion.div
                  className="
                    w-16 h-16 -mt-8
                    bg-black
                    rounded-full border-2 border-gold
                    flex items-center justify-center
                    overflow-hidden
                  "
                  whileHover={{ scale: 1.2 }}
                >
                  <Player
                    src={event.animation}
                    className="w-10 h-10"
                    autoplay={isInView}
                    loop
                    speed={0.7}
                  />
                </motion.div>
              </div>

              {/* Empty space for opposite side */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 