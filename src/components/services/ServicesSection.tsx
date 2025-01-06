import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SERVICES } from './constants';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Luxury Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-100 to-[#191C1F]" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={ref}
          className={`
            text-center mb-24
            transition-all duration-1000
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
        >
          {/* Pre-title */}
          <div className="
            inline-block px-6 py-2 mb-6
            bg-gradient-to-r from-blue-500/10 to-purple-500/10
            rounded-full backdrop-blur-sm
            text-sm font-semibold text-blue-600 tracking-[0.2em]
            border border-blue-500/20
          ">
            EXPERTISE & SAVOIR-FAIRE
          </div>

          {/* Main Title */}
          <h2 className="
            text-6xl font-bold mb-6
            font-space-grotesk tracking-tight
            bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent
          ">
            NOS MÉTIERS
          </h2>

          {/* Subtitle */}
          <div className="
            text-xl tracking-[0.1em] text-gray-600 mb-8
            font-light max-w-2xl mx-auto
          ">
            AGENCE MULTIDISCIPLINAIRE D'EXCELLENCE
          </div>

          {/* Decorative Lines */}
          <div className="relative flex justify-center items-center gap-2">
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
            <div className="
              w-32 h-1
              bg-gradient-to-r from-blue-500 to-purple-500
              animate-gradient-x rounded-full
            " />
            <div className="w-16 h-0.5 bg-gradient-to-l from-purple-500 to-transparent" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          gap-8 lg:gap-12
          relative
        ">
          {/* Background Glow */}
          <div className="
            absolute inset-0 -z-10
            bg-gradient-to-b from-white/50 to-transparent
            blur-3xl opacity-50
          " />

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

      {/* Bottom Gradient for smooth transition to next section */}
      <div className="
        absolute bottom-0 left-0 right-0 h-32
        bg-gradient-to-t from-[#191C1F] to-transparent
      " />
    </section>
  );
}