import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function MadeInMorocco() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div ref={ref} className="text-center">
      <div className={`
        inline-block bg-white/5 backdrop-blur-sm px-8 py-4 rounded-lg mb-8
        transition-all duration-700 delay-700
        ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          "100% MADE IN MOROCCO"
        </span>
      </div>
      
      <p className={`
        text-xl text-gray-300
        transition-all duration-700 delay-1000
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}>
        POUR LE <span className="font-bold text-white">MAROC</span> ET POUR<br />
        <span className="font-bold text-white">L'AFRIQUE</span>
      </p>
    </div>
  );
}