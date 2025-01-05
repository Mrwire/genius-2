import { Lightbulb, Cpu, Star, Heart, Award } from 'lucide-react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

const values = [
  { icon: Award, title: 'Expertise', description: 'Excellence dans chaque projet' },
  { icon: Cpu, title: 'Technologie', description: 'Innovation constante' },
  { icon: Star, title: 'Créativité', description: 'Solutions uniques' },
  { icon: Heart, title: 'Passion', description: 'Engagement total' },
  { icon: Lightbulb, title: 'Innovation', description: 'Toujours à l\'avant-garde' }
];

export default function AboutValues() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className={`
            text-4xl font-bold text-white mb-6
            transition-all duration-700
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            Nos Valeurs
          </h2>
          <p className={`
            text-xl text-gray-300
            transition-all duration-700 delay-200
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            Les principes qui guident chacune de nos actions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`
                group text-center p-8
                transition-all duration-700
                ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="
                w-16 h-16 mx-auto mb-6
                bg-white/5 rounded-xl
                flex items-center justify-center
                group-hover:bg-blue-500/10 transition-colors
              ">
                <value.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}