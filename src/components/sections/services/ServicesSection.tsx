import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { SERVICES } from './constants';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={ref}
          className={`
            text-center mb-20
            transition-all duration-700
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
        >
          <h2 className="
            text-4xl font-bold text-white mb-4
            font-space-grotesk tracking-tight
          ">
            NOS MÉTIERS
          </h2>
          <div className="text-lg tracking-[2px] text-gray-600 mb-6">
            AGENCE MULTIDISCIPLINAIRE
          </div>
          <div className="
            w-32 h-1 mx-auto
            bg-gradient-to-r from-blue-500 to-purple-500
            animate-gradient-x
          " />
        </div>

        {/* Services Grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          gap-8 lg:gap-12
        ">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isInView={isIntersecting}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 