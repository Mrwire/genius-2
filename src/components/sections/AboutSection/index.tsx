import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import AnimatedText from './components/AnimatedText';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background amélioré avec effet de particules */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#191C1F] to-black">
        <div className="absolute inset-0 opacity-20">
          <Player
            src="https://lottie.host/2b7e0e1e-a6e8-4575-a40d-a863d94c2e0d/vRqQjcFgdf.json"
            className="w-full h-full"
            loop
            autoplay
          />
        </div>
      </div>
      
      {/* Motif de grille futuriste */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Effets décoratifs améliorés */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-1/4 w-[600px] h-[600px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        </motion.div>
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Contenu principal */}
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* En-tête avec effet glitch */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <AnimatedText
              text="Notre Histoire"
              isInView={isIntersecting}
              className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk relative z-10"
            />
            <div className="absolute inset-0 bg-blue-500/20 blur-xl -z-10 animate-pulse" />
          </div>
          <AnimatedText
            text="Une aventure entrepreneuriale guidée par la passion et l'innovation"
            isInView={isIntersecting}
            delay={0.2}
            className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
          />
        </div>

        {/* Contenu principal avec effet de parallaxe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Colonne de gauche - Texte */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isIntersecting ? 1 : 0, x: isIntersecting ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <AnimatedText
                text="Depuis notre création, nous nous sommes engagés à repousser les limites de la créativité et de l'innovation dans le domaine de la communication."
                isInView={isIntersecting}
                delay={0.4}
                className="text-gray-300 leading-relaxed"
              />
              <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
            </div>
            <div className="relative p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <AnimatedText
                text="Notre approche unique combine expertise technique, vision artistique et compréhension approfondie des besoins de nos clients pour créer des expériences mémorables."
                isInView={isIntersecting}
                delay={0.6}
                className="text-gray-300 leading-relaxed"
              />
              <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full animate-ping" />
            </div>
          </motion.div>

          {/* Colonne de droite - Visualisation 3D/Animation */}
          <motion.div 
            className="relative aspect-square"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isIntersecting ? 1 : 0, x: isIntersecting ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm" />
            <Player
              src="https://lottie.host/b8d9849c-c8d8-4f5f-a156-4d96f9c7a2b6/xpF2HxYEYm.json"
              className="w-full h-full"
              loop
              autoplay
            />
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </motion.div>

      {/* Transition améliorée vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black to-transparent">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}