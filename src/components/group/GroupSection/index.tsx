import { useState } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { COMPANIES } from '../constants';
import CompanyGrid from './CompanyGrid';
import CompanyModal from './CompanyModal';
import GroupHeader from './GroupHeader';
import GroupTagline from './GroupTagline';
import BackgroundEffects from '../../backgrounds/BackgroundEffects';

export default function GroupSection() {
  const [selectedCompany, setSelectedCompany] = useState<typeof COMPANIES[number] | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      <BackgroundEffects variant="subtle" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GroupHeader ref={ref} isIntersecting={isIntersecting} />
        <CompanyGrid 
          companies={COMPANIES}
          onSelect={setSelectedCompany}
          isInView={isIntersecting}
        />
        <GroupTagline isIntersecting={isIntersecting} />
      </div>

      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </section>
  );
}