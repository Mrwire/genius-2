import { useState } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { COMPANIES } from '../constants';
import CompanyGrid from './CompanyGrid';
import CompanyModal from './CompanyModal';
import GroupHeader from './GroupHeader';
import GroupTagline from './GroupTagline';
import { ArrowRight } from 'lucide-react';
import { WhatsApp as WhatsAppIcon } from 'lucide-react';

export default function GroupSection() {
  const [selectedCompany, setSelectedCompany] = useState<typeof COMPANIES[number] | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background avec transition fluide */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#191C1F] via-black to-black" />
      
      {/* Motif de grille amélioré */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, 
              rgba(255,255,255,0.1) 0px,
              rgba(255,255,255,0.1) 1px,
              transparent 1px,
              transparent 30px
            ),
            repeating-linear-gradient(0deg,
              rgba(255,255,255,0.1) 0px,
              rgba(255,255,255,0.1) 1px,
              transparent 1px,
              transparent 30px
            )
          `
        }}
      />
      
      {/* Effets décoratifs améliorés */}
      <div className="absolute inset-0">
        <div className="
          absolute top-0 left-1/4 
          w-[600px] h-[600px] 
          bg-gradient-to-r from-blue-500/5 to-purple-500/5 
          rounded-full blur-3xl 
          animate-pulse-slow
        " />
        <div className="
          absolute bottom-0 right-1/4 
          w-[600px] h-[600px] 
          bg-gradient-to-r from-purple-500/5 to-blue-500/5 
          rounded-full blur-3xl 
          animate-pulse-slow
          animation-delay-2000
        " />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GroupHeader ref={ref} isIntersecting={isIntersecting} />

        <CompanyGrid 
          companies={COMPANIES}
          onSelect={setSelectedCompany}
          isInView={isIntersecting}
        />

        <GroupTagline isIntersecting={isIntersecting} />

        {/* Boutons d'action */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => setSelectedCompany(COMPANIES[0])}
            className="
              group relative
              px-8 py-4
              bg-gradient-to-r from-blue-500 to-purple-500
              hover:from-blue-600 hover:to-purple-600
              rounded-full
              text-white font-semibold
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
              overflow-hidden
            "
          >
            <span className="relative z-10 flex items-center">
              En savoir plus
              <ArrowRight className="
                ml-2 w-4 h-4
                transform group-hover:translate-x-1
                transition-all duration-300
              " />
            </span>
            <div className="
              absolute inset-0 -z-10
              bg-gradient-to-r from-blue-600 to-purple-600
              translate-y-full
              group-hover:translate-y-0
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
              flex items-center
            "
          >
            <WhatsAppIcon className="
              mr-2 w-5 h-5
              transform group-hover:rotate-12
              transition-transform duration-300
            " />
            <span className="relative">
              Nous contacter
              <span className="
                absolute -bottom-1 left-0
                w-full h-0.5
                bg-[#25D366]
                scale-x-0 group-hover:scale-x-100
                transition-transform duration-300
                origin-left
              " />
            </span>
          </a>
        </div>
      </div>

      {/* Transition fluide vers la section suivante */}
      <div className="
        absolute bottom-0 left-0 right-0 h-48
        bg-gradient-to-t from-black via-black to-transparent
      " />

      {/* Modal amélioré */}
      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </section>
  );
}