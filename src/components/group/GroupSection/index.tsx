import { useState } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { COMPANIES } from '../constants';
import CompanyGrid from './CompanyGrid';
import CompanyModal from './CompanyModal';
import GroupHeader from './GroupHeader';
import GroupTagline from './GroupTagline';
import { ArrowRight, WhatsApp } from 'lucide-react';

export default function GroupSection() {
  const [selectedCompany, setSelectedCompany] = useState<typeof COMPANIES[number] | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 overflow-hidden bg-[#191C1F]">
      {/* Luxury Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#191C1F] via-[#1a1d20] to-black" />
      
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
            NOS ENTITÉS
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
            SYNERGIE & EXCELLENCE
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
        <CompanyGrid 
          companies={COMPANIES}
          onSelect={setSelectedCompany}
          isInView={isIntersecting}
        />

        {/* Tagline */}
        <GroupTagline isIntersecting={isIntersecting} />

        {/* Contact Button */}
        <div className="mt-16 flex justify-center gap-4">
          <button className="
            group
            px-8 py-4
            bg-gradient-to-r from-blue-500 to-purple-500
            hover:from-blue-600 hover:to-purple-600
            rounded-full
            text-white font-semibold
            transition-all duration-300
            hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
          ">
            En savoir plus
            <ArrowRight className="
              inline-block ml-2 w-4 h-4
              transform group-hover:translate-x-1
              transition-transform duration-300
            " />
          </button>

          <a 
            href="https://wa.me/+212xxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              px-8 py-4
              bg-[#25D366]/10
              hover:bg-[#25D366]/20
              border border-[#25D366]/30
              rounded-full
              text-[#25D366]
              font-semibold
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]
            "
          >
            <WhatsApp className="
              inline-block mr-2 w-4 h-4
              transform group-hover:scale-110
              transition-transform duration-300
            " />
            Nous contacter
          </a>
        </div>
      </div>

      {/* Bottom Gradient for smooth transition */}
      <div className="
        absolute bottom-0 left-0 right-0 h-32
        bg-gradient-to-t from-black to-transparent
      " />

      {/* Modal */}
      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </section>
  );
}