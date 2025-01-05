import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function ValuesHeader() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`
        text-center mb-20
        transition-all duration-700
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-white">
        NOS VALEURS
      </h2>
    </div>
  );
}