import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SERVICES } from './constants';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-[#191C1F]" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={ref}
          className={`
            text-center mb-24
            transition-all duration-700
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
        >
          {/* Pre-title */}
          <div className="text-sm font-semibold text-blue-600 tracking-[0.2em] mb-4">
            EXPERTISE & SAVOIR-FAIRE
          </div>

          {/* Main Title */}
          <h2 className="
            text-5xl font-bold mb-6
            font-space-grotesk tracking-tight
            bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent
          ">
            NOS MÉTIERS
          </h2>

          {/* Subtitle */}
          <div className="text-xl tracking-[0.1em] text-gray-600 mb-8 font-light">
            AGENCE MULTIDISCIPLINAIRE
          </div>

          {/* Decorative Line */}
          <div className="relative">
            <div className="
              w-32 h-1 mx-auto
              bg-gradient-to-r from-blue-500 to-purple-500
              animate-gradient-x
            " />
            <div className="
              absolute -bottom-1 left-1/2 -translate-x-1/2
              w-16 h-1 mx-auto
              bg-gradient-to-r from-purple-500 to-blue-500
              animate-gradient-x opacity-50
            " />
          </div>
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