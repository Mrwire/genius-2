import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function ValuesTagline() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`
        mt-20 text-center p-6
        bg-white/5 backdrop-blur-sm rounded-xl
        border border-white/10
        transition-all duration-700 delay-1000
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <p className="text-xl text-white/80">
        TOUS NOS CLIENTS & PARTENAIRES PEUVENT EN TÉMOIGNER
      </p>
    </div>
  );
}