import { Suspense, lazy, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { COMPANIES } from './constants';
import CompanyCard from './CompanyCard';
import CompanyModal from './CompanyModal';
import CompanyArrows from './CompanyArrows';
import BackgroundEffects from '../backgrounds/BackgroundEffects';

const SplineScene = lazy(() => import('./SplineScene'));

export default function GroupSection() {
  const [selectedCompany, setSelectedCompany] = useState<typeof COMPANIES[number] | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
      
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
            STRUCTURE & ORGANISATION
          </div>

          {/* Main Title */}
          <h2 className="
            text-6xl font-bold mb-6
            font-space-grotesk tracking-tight
            bg-gradient-to-b from-white via-gray-300 to-gray-500 bg-clip-text text-transparent
          ">
            LE GROUPE
          </h2>

          {/* Subtitle */}
          <div className="
            text-xl tracking-[0.1em] text-gray-400 mb-8
            font-light max-w-2xl mx-auto
          ">
            UNE SYNERGIE D'ENTREPRISES COMPLÉMENTAIRES
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

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {COMPANIES.map((company, index) => (
              <CompanyCard
                key={company.id}
                company={company}
                onClick={() => setSelectedCompany(company)}
                index={index}
                isInView={isIntersecting}
              />
            ))}
          </div>
          
          <CompanyArrows isInView={isIntersecting} />
        </div>

        <div 
          className={`
            mt-20 text-center
            transition-all duration-700 delay-1000
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <p className="text-xl text-gray-300">
            En bref, ce que <span className="text-white font-bold">GENIUS</span> crée,{' '}
            <span className="text-white font-bold">MPS</span> produit et{' '}
            <span className="text-white font-bold">LABRIG'AD</span> déploie
          </p>
        </div>
      </div>

      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </section>
  );
}