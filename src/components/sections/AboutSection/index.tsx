import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import AnimatedText from './components/AnimatedText';

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background avec transition fluide */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#191C1F] to-black" />
      
      {/* Motif de grille */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, 
              rgba(255,255,255,0.1) 0px,
              rgba(255,255,255,0.1) 1px,
              transparent 1px,
              transparent 30px
            ),
            repeating-linear-gradient(0deg,
              rgba(255,255,255,0.1) 0px,
              rgba(255,255,255,0.1) 1px,
              transparent 1px,
              transparent 30px
            )
          `
        }}
      />

      {/* Effets décoratifs */}
      <div className="absolute inset-0">
        <div className="
          absolute top-0 right-1/4 
          w-[500px] h-[500px] 
          bg-gradient-to-r from-blue-500/5 to-purple-500/5 
          rounded-full blur-3xl 
          animate-pulse-slow
        " />
        <div className="
          absolute bottom-0 left-1/4 
          w-[500px] h-[500px] 
          bg-gradient-to-r from-purple-500/5 to-blue-500/5 
          rounded-full blur-3xl 
          animate-pulse-slow
          animation-delay-2000
        " />
      </div>

      {/* Contenu principal */}
      <div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* En-tête */}
        <div className="text-center mb-20">
          <AnimatedText
            text="Notre Histoire"
            isInView={isIntersecting}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk"
          />
          <AnimatedText
            text="Une aventure entrepreneuriale guidée par la passion et l'innovation"
            isInView={isIntersecting}
            delay={0.2}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          />
        </div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Colonne de gauche - Texte */}
          <div className="space-y-8">
            <AnimatedText
              text="Depuis notre création, nous nous sommes engagés à repousser les limites de la créativité et de l'innovation dans le domaine de la communication."
              isInView={isIntersecting}
              delay={0.4}
              className="text-gray-300 leading-relaxed"
            />
            <AnimatedText
              text="Notre approche unique combine expertise technique, vision artistique et compréhension approfondie des besoins de nos clients pour créer des expériences mémorables."
              isInView={isIntersecting}
              delay={0.6}
              className="text-gray-300 leading-relaxed"
            />
          </div>

          {/* Colonne de droite - Image/Animation */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl" />
            <img
              src="/images/about-illustration.jpg" // Ajoutez votre image ici
              alt="Notre histoire"
              className="relative z-10 w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Transition vers la section suivante */}
      <div className="
        absolute bottom-0 left-0 right-0 h-48
        bg-gradient-to-t from-black via-black to-transparent
      " />
    </section>
  );
}