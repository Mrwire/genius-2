import { Building, Users, Globe, Award } from 'lucide-react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

const stats = [
  {
    icon: Building,
    value: '15+',
    label: 'Années d\'expérience',
    description: 'Dans la communication et l\'événementiel'
  },
  {
    icon: Users,
    value: '50+',
    label: 'Experts passionnés',
    description: 'Une équipe multidisciplinaire'
  },
  {
    icon: Globe,
    value: '3',
    label: 'Bureaux',
    description: 'Casablanca, Rabat, Tanger'
  },
  {
    icon: Award,
    value: '150+',
    label: 'Projets réussis',
    description: 'Pour des clients de renom'
  }
];

export default function AboutStats() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                p-8 bg-white/5 rounded-xl backdrop-blur-sm
                border border-white/10
                transition-all duration-700
                ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-12 h-12 text-blue-400 mb-6" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}