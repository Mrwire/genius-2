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
    <section className="min-h-screen py-24 relative overflow-hidden">
      {/* Spline Scene Background */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={<BackgroundEffects variant="subtle" />}>
          <SplineScene />
        </Suspense>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`
            text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-white text-center mb-20
            transition-all duration-700
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          LE GROUPE
        </h2>
        
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