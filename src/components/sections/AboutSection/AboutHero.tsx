import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

export default function AboutHero() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`
            max-w-3xl mx-auto text-center space-y-8
            transition-all duration-700
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Une Vision Audacieuse,<br />
            <span className="text-blue-400">Des Résultats Exceptionnels</span>
          </h2>
          
          <p className="text-xl text-gray-300">
            Depuis 2008, nous repoussons les limites de la créativité et de l'innovation 
            pour offrir des solutions de communication qui transforment les marques et 
            créent des connexions durables.
          </p>
        </div>
      </div>
    </div>
  );
}