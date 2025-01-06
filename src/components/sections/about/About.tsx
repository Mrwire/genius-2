import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { Building, Users, Globe, Award } from 'lucide-react';
import Timeline from './Timeline';

const stats = [
  {
    icon: Building,
    value: '15+',
    label: 'Années d\'expérience',
    description: 'Dans la communication et l\'événementiel'
  },
  {
    icon: Users,
    value: '50+',
    label: 'Experts passionnés',
    description: 'Une équipe multidisciplinaire'
  },
  {
    icon: Globe,
    value: '3',
    label: 'Bureaux',
    description: 'Casablanca, Rabat, Tanger'
  }
];

const expertise = [
  "Stratégies de communication",
  "Métiers graphiques 2D et 3D",
  "Industrie publicitaire",
  "Événementiel corporate et grand public",
  "Design d'intérieur et aménagements",
  "Production audiovisuelle",
  "Marketing Digital et Développement"
];

const values = [
  "SAVOIR-FAIRE",
  "TECHNOLOGIE",
  "INNOVATION",
  "CRÉATIVITÉ",
  "PASSION"
];

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black to-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isIntersecting ? 1 : 0, x: isIntersecting ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            {/* Notre Histoire */}
            <div>
              <motion.h2 
                className="text-5xl font-bold text-white mb-8 font-monument"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
                transition={{ duration: 0.6 }}
              >
                Notre Histoire
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: isIntersecting ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Genius Ad District est l'agence globale, filiale d'un groupe de sociétés 
                spécialisées dans les métiers de la communication. Dans une quête continuelle 
                de la <span className="text-gold font-semibold">PERFECTION</span>, Genius se dote 
                des meilleurs outils technologiques, et devient au fil du temps, l'agence dite 
                <span className="text-gold font-semibold"> PREMIUM</span>, offrant le 
                <span className="text-gold font-semibold"> WOW EFFECT</span> garanti.
              </motion.p>
            </div>

            {/* 40+ ans d'expertise */}
            <div>
              <motion.h3 
                className="text-4xl font-bold text-gold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                40+ ans d'expertise
              </motion.h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isIntersecting ? 1 : 0, x: isIntersecting ? 0 : -20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Values */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isIntersecting ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="
                    px-6 py-3
                    bg-gradient-to-r from-gold/10 to-purple-500/10
                    border border-gold/20
                    rounded-full
                    text-gold
                    backdrop-blur-sm
                    hover:border-gold/50
                    transition-all duration-300
                  "
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isIntersecting ? 1 : 0, scale: isIntersecting ? 1 : 0.9 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {value}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div 
            className="grid grid-cols-1 gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isIntersecting ? 1 : 0, x: isIntersecting ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="
                  group relative
                  p-8 rounded-2xl
                  bg-white/5 backdrop-blur-sm
                  border border-white/10
                  hover:bg-white/10
                  transition-all duration-300
                "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              >
                <div className="flex items-start gap-6">
                  <div className="
                    w-16 h-16 rounded-xl
                    bg-gradient-to-br from-gold/20 to-purple-500/20
                    flex items-center justify-center
                    group-hover:scale-110
                    transition-transform duration-300
                  ">
                    <stat.icon className="w-8 h-8 text-gold" />
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-300 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Section */}
        <Timeline isInView={isIntersecting} />
      </div>
    </section>
  );
} 