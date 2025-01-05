import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Building, Users, Globe, Award } from 'lucide-react';

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
  }
];

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`
            space-y-12
            transition-all duration-700
            ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
          `}>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 relative">
                Notre Histoire
                <div className="absolute -bottom-3 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Depuis 2008, nous façonnons l'avenir de la communication au Maroc. 
                Notre passion pour l'innovation et notre engagement envers l'excellence 
                nous ont permis de devenir un acteur majeur dans le secteur.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                Notre Mission
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transformer vos idées en expériences mémorables. Nous combinons 
                créativité, technologie et stratégie pour donner vie à des projets 
                qui dépassent les attentes.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  group flex items-start gap-6 p-8
                  bg-white rounded-xl
                  shadow-[0_0_50px_rgba(0,0,0,0.1)]
                  hover:shadow-[0_0_50px_rgba(0,0,0,0.15)]
                  transition-all duration-500
                  ${isIntersecting 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                  }
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="
                  w-16 h-16 rounded-lg
                  bg-gradient-to-br from-blue-500/10 to-purple-500/10
                  flex items-center justify-center
                  group-hover:scale-110 transition-transform duration-300
                ">
                  <stat.icon className="w-8 h-8 text-blue-500" />
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}