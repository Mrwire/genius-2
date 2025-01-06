import { useState } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import CompanyCard from './CompanyCard';
import CompanyModal from './CompanyModal';
import CompanyArrows from './CompanyArrows';

const COMPANIES = [
  {
    id: 'genius',
    name: 'GENIUS AD DISTRICT',
    description: 'L\'agence de communication',
    logo: '/logos/genius.png',
    longDescription: 'Genius Ad District est une agence de communication globale spécialisée dans la création de stratégies innovantes et la production de contenu créatif.'
  },
  {
    id: 'mps',
    name: 'MPS',
    description: 'L\'atelier de production',
    logo: '/logos/mps.png',
    longDescription: 'Moroccan Perfect Store (MPS) est notre atelier de production spécialisé dans l\'impression numérique et offset.'
  },
  {
    id: 'labrigad',
    name: 'LABRIG\'AD',
    description: 'L\'agence BTL',
    logo: '/logos/labrigad.png',
    longDescription: 'LABRIG\'AD est notre agence BTL spécialisée dans l\'activation de marque et l\'événementiel.'
  },
  {
    id: 'gamius',
    name: 'GAMIUS GROUP',
    description: 'L\'agence E-sport',
    logo: '/logos/gamius.png',
    longDescription: 'GAMIUS GROUP est notre division dédiée au gaming et à l\'e-sport.'
  }
];

export default function GroupSection() {
  const [selectedCompany, setSelectedCompany] = useState<typeof COMPANIES[number] | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-monument">
              LE GROUPE
            </h2>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-gold to-purple-500 animate-gradient" />
          </motion.div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Connecting Arrows */}
          <CompanyArrows isInView={isIntersecting} />

          {/* Tagline */}
          <div className="mt-20 text-center">
            <p className="text-xl text-gray-300">
              En bref, ce que <span className="text-white font-bold">GENIUS</span> crée,{' '}
              <span className="text-white font-bold">MPS</span> produit et{' '}
              <span className="text-white font-bold">LABRIG'AD</span> déploie
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </section>
  );
} 