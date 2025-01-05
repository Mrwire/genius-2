import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

const team = [
  {
    name: 'Sarah Martin',
    role: 'Directrice Créative',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    name: 'David Chen',
    role: 'Directeur Technique',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    name: 'Emma Thompson',
    role: 'Directrice Events',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e'
  }
];

export default function AboutTeam() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="py-24 bg-[#0A0A0A]">
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
            Notre Équipe
          </h2>
          <p className={`
            text-xl text-gray-300
            transition-all duration-700 delay-200
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            Des experts passionnés qui donnent vie à vos projets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`
                group relative overflow-hidden rounded-xl
                transition-all duration-700
                ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="
                absolute inset-0 flex flex-col justify-end
                bg-gradient-to-t from-black/80 to-transparent
                p-6
              ">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}