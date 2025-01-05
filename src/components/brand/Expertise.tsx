import { useEffect, useRef } from 'react';

const expertiseAreas = [
  'Création de stratégies de communication',
  'Métiers graphiques 2D et 3D',
  'Industrie publicitaire',
  'Événementiel corporate et grand public',
  'Design d\'intérieur et aménagements',
  'Production audiovisuelle',
  'Marketing Digital et développement web'
];

export default function Expertise() {
  const counterRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && counterRef.current) {
          let count = 0;
          const target = 40;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const animate = () => {
            if (count < target && counterRef.current) {
              count += increment;
              counterRef.current.textContent = Math.min(Math.floor(count), target).toString();
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#1E2328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="text-3xl font-bold text-white mb-4">
            <span ref={counterRef}>0</span>
            <span className="text-blue-400">+</span>
            <span className="text-2xl ml-2">ans d'expertise cumulée</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <p className="text-gray-300">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}