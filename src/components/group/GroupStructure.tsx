import { useState } from 'react';
import CompanyCard from './CompanyCard';
import CompanyModal from './CompanyModal';
import CompanyArrows from './CompanyArrows';
import { type Company } from './types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import BackgroundEffects from '../hero/BackgroundEffects';

const companies: Company[] = [
  {
    id: 'genius',
    name: 'GENIUS AD DISTRICT',
    description: 'L\'agence de communication',
    longDescription: 'Genius Ad District est une agence de communication globale spécialisée dans la création de stratégies innovantes et la production de contenu créatif.',
    logo: 'https://jzarqkgallfcoormlljw.supabase.co/storage/v1/object/sign/image/logo/geniusaddistrict.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9sb2dvL2dlbml1c2FkZGlzdHJpY3QucG5nIiwiaWF0IjoxNzM0OTk3Mjk3LCJleHAiOjE4OTI2NzcyOTd9.CSn9pk3swpdxZu1gZLU6XBmf72DiRYHhhZzhXO8G5Do&t=2024-12-23T23%3A41%3A38.740Z',
    isMain: true
  },
  {
    id: 'mps',
    name: 'MPS',
    description: 'L\'atelier de production',
    longDescription: 'Moroccan Perfect Store (MPS) est notre atelier de production spécialisé dans l\'impression numérique et offset.',
    logo: 'https://jzarqkgallfcoormlljw.supabase.co/storage/v1/object/sign/image/logo/MPS.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9sb2dvL01QUy5wbmciLCJpYXQiOjE3MzQ5OTc0MTksImV4cCI6MTg5MjY3NzQxOX0.6RsM_f709v3e0kiX9ZKJEPR4QlUe-ToKAnzc0vy7nVI&t=2024-12-23T23%3A43%3A40.312Z',
    isMain: false
  },
  {
    id: 'labrigad',
    name: 'LABRIG\'AD',
    description: 'L\'agence BTL',
    longDescription: 'LABRIG\'AD est notre agence BTL spécialisée dans l\'activation de marque et l\'événementiel.',
    logo: 'https://jzarqkgallfcoormlljw.supabase.co/storage/v1/object/sign/image/logo/labrigad.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9sb2dvL2xhYnJpZ2FkLnBuZyIsImlhdCI6MTczNDk5NzIwNCwiZXhwIjoxODkyNjc3MjA0fQ.5ZkBUJUyUfo_Wccnkwh983b_56BVU1lJuRdDBCcmi7c&t=2024-12-23T23%3A40%3A05.285Z',
    isMain: false
  },
  {
    id: 'gamius',
    name: 'GAMIUS GROUP',
    description: 'L\'agence E-sport',
    longDescription: 'GAMIUS GROUP est notre division dédiée au gaming et à l\'e-sport.',
    logo: 'https://jzarqkgallfcoormlljw.supabase.co/storage/v1/object/sign/image/logo/gamiusgroup.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9sb2dvL2dhbWl1c2dyb3VwLnBuZyIsImlhdCI6MTczNDk5NzI1NiwiZXhwIjoxODkyNjc3MjU2fQ.3FtMkzAYMCC0uxy6E9ikU-8bzDe1CRb2NtLsRPBZvIQ&t=2024-12-23T23%3A40%3A57.218Z',
    isMain: false
  }
];

export default function GroupStructure() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`
            text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-white text-center mb-20
            transition-all duration-700 transform
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          LE GROUPE
        </h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {companies.map((company, index) => (
              <CompanyCard
                key={company.id}
                {...company}
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
            mt-20 text-center transition-all duration-700 delay-1000
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