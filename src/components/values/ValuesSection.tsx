import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { MOTS_ORDRE } from './constants';
import LetterBox from './LetterBox';

export default function ValuesSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-white pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Section Title */}
          <h2 className={`
            text-5xl font-black text-center mb-20 text-white
            transition-all duration-700
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            NOS MOTS D'ORDRE
          </h2>

          {/* Letters Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
            {MOTS_ORDRE.map((item, index) => (
              <LetterBox
                key={item.letter}
                letter={item.letter}
                word={item.word}
                isInView={isIntersecting}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Tagline */}
          <div className={`
            text-center p-6 mt-20
            transition-all duration-700 delay-1000
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            <p className="text-xl font-medium text-white">
              TOUS NOS CLIENTS & PARTENAIRES PEUVENT EN TÉMOIGNER
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}