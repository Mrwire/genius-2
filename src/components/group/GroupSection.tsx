import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { COMPANIES } from './constants';

export default function GroupSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 overflow-hidden bg-[#191C1F]">
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
            text-sm font-semibold text-blue-400 tracking-[0.2em]
            border border-blue-500/20
          ">
            SYNERGIE & EXCELLENCE
          </div>

          {/* Main Title */}
          <h2 className="
            text-6xl font-bold mb-6
            font-space-grotesk tracking-tight
            bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent
          ">
            LE GROUPE
          </h2>

          {/* Subtitle */}
          <div className="
            text-xl tracking-[0.1em] text-gray-400 mb-8
            font-light max-w-2xl mx-auto
          ">
            UN ÉCOSYSTÈME D'EXPERTISE
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

        {/* Companies Grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12
          relative
        ">
          {/* Background Glow */}
          <div className="
            absolute inset-0 -z-10
            bg-gradient-to-b from-blue-500/5 to-transparent
            blur-3xl opacity-30
          " />

          {COMPANIES.map((company, index) => (
            <div
              key={company.id}
              className={`
                group relative
                bg-white/5 backdrop-blur-sm
                rounded-2xl overflow-hidden
                transition-all duration-500
                hover:bg-white/10
                ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Company Content */}
              <div className="p-8">
                <h3 className="
                  text-3xl font-bold text-white mb-4
                  font-space-grotesk relative inline-block
                ">
                  {company.name}
                  <div className="
                    absolute -bottom-2 left-0 right-0
                    h-0.5 bg-gradient-to-r from-blue-500 to-purple-500
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300
                  " />
                </h3>
                <p className="text-gray-400 mb-6">{company.description}</p>
                <ul className="space-y-3">
                  {company.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="
                        flex items-center text-gray-300
                        transform group-hover:translate-x-1
                        transition-transform duration-300
                        hover:text-white
                      "
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <div className="
                        w-1.5 h-1.5 rounded-full
                        bg-gradient-to-r from-blue-500 to-purple-500
                        mr-3 flex-shrink-0
                      " />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className={`
          text-center mt-24 text-xl text-gray-400
          transition-all duration-1000 delay-500
          ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}>
          "En bref, ce que <span className="text-blue-400">GENIUS</span> crée, 
          <span className="text-purple-400">MPS</span> produit et 
          <span className="text-green-400">LABRIG'Ad</span> déploie"
        </div>
      </div>

      {/* Bottom Gradient for smooth transition */}
      <div className="
        absolute bottom-0 left-0 right-0 h-32
        bg-gradient-to-t from-black to-transparent
      " />
    </section>
  );
}