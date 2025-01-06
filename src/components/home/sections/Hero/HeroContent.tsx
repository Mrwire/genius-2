import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function HeroContent() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 md:px-[5vw]" ref={ref}>
      <h1 className={`
        relative font-montserrat text-[clamp(2.5rem,8vw,5rem)] font-extrabold
        text-white leading-[1.1] mb-8 uppercase tracking-[-1px]
        transition-all duration-700
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>
        <div className="absolute left-[-2rem] top-1/2 w-[5px] h-0 bg-white -translate-y-1/2" />
        AGENCE DE<br className="hidden sm:block" />
        COMMUNICATION ET<br className="hidden sm:block" />
        PRODUCTION
      </h1>

      <div className={`
        relative pl-[calc(5px+2rem)] md:pl-[calc(5px+2rem)]
        transition-all duration-700 delay-300
        ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
      `}>
        <div className="absolute left-0 top-1/2 w-5 h-px bg-white/30 -translate-y-1/2" />
        <p className="font-montserrat text-[clamp(1rem,1.5vw,1.2rem)] font-medium text-white/80">
          ÉVÉNEMENTIEL CORPORATE ET GRAND PUBLIC - MARKETING ALTERNATIF - ROADSHOW ET ACTIVATIONS
        </p>
      </div>

      <a 
        href="#contact"
        className={`
          inline-flex items-center gap-2 mt-8 px-8 py-3
          bg-white text-black rounded-lg
          hover:bg-white/90 transition-all duration-300
          ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
        style={{ transitionDelay: '600ms' }}
      >
        <span>Commencer le projet</span>
        <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
}