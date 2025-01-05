import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ArrowRight } from 'lucide-react';

export default function HeroContent() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12">
      <div className="max-w-4xl">
        <h1 className={`
          font-montserrat text-[clamp(2.5rem,6vw,4.5rem)]
          font-extrabold text-white leading-[1.1] mb-8
          transition-all duration-700
          ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}>
          AGENCE DE<br />
          COMMUNICATION ET<br />
          PRODUCTION
        </h1>
        
        <div className={`
          space-y-8
          transition-all duration-700 delay-300
          ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
        `}>
          <p className="text-xl text-white/70 max-w-2xl">
            ÉVÉNEMENTIEL CORPORATE ET GRAND PUBLIC - MARKETING ALTERNATIF - ROADSHOW ET ACTIVATIONS
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="
              px-8 py-4 bg-white text-black rounded-lg
              hover:bg-white/90 transition-colors
              flex items-center gap-2 group
            ">
              Découvrir nos services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}