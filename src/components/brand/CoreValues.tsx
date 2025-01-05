import { Award, Lightbulb, Heart, Cpu, Star } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const values = [
  { icon: Award, label: 'SAVOIR-FAIRE' },
  { icon: Cpu, label: 'TECHNOLOGIE' },
  { icon: Lightbulb, label: 'INNOVATION' },
  { icon: Star, label: 'CRÉATIVITÉ' },
  { icon: Heart, label: 'PASSION' }
];

export default function CoreValues() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div className="py-16 bg-gradient-to-b from-[#191C1F] to-[#1E2328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-white text-center mb-12 animate-fade-in">
          NOS VALEURS
        </h3>
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {values.map(({ icon: Icon, label }, index) => (
            <div 
              key={label}
              className="flex flex-col items-center group"
              style={{
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
              className={`
                flex flex-col items-center group
                ${isIntersecting ? 'animate-fade-in-up' : ''}
              `}
            >
              <div className="
                w-16 h-16 rounded-full 
                bg-white/5 flex items-center justify-center mb-4
                transition-all duration-500 ease-out
                group-hover:bg-blue-500/20 group-hover:scale-110
                animate-float
              ">
                <Icon className="
                  w-8 h-8 text-blue-400
                  transition-all duration-500
                  group-hover:text-blue-300 group-hover:rotate-12
                " />
              </div>
              <span className="
                text-sm font-semibold text-white text-center
                transition-all duration-300
                group-hover:text-blue-300
              ">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}