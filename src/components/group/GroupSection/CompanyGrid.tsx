import CompanyCard from '../CompanyCard';
import CompanyArrows from '../CompanyArrows';
import type { Company } from '../types';

interface CompanyGridProps {
  companies: readonly Company[];
  onSelect: (company: Company) => void;
  isInView: boolean;
}

export default function CompanyGrid({ companies, onSelect, isInView }: CompanyGridProps) {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {companies.map((company, index) => (
          <CompanyCard
            key={company.id}
            company={company}
            onClick={() => onSelect(company)}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
      
      <CompanyArrows isInView={isInView} />
    </div>
  );
}