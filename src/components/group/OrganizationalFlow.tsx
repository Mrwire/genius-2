import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { type Company } from './types';
import FlowArrow from './FlowArrow';
import CompanyNode from './CompanyNode';

interface OrganizationalFlowProps {
  companies: Company[];
}

export default function OrganizationalFlow({ companies }: OrganizationalFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  const mainCompany = companies.find(c => c.isMain);
  const subsidiaries = companies.filter(c => !c.isMain);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateArrows = () => {
      const arrows = containerRef.current?.querySelectorAll('.flow-arrow');
      arrows?.forEach(arrow => {
        const parent = arrow.parentElement;
        if (!parent) return;
        
        const rect = parent.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        arrow.setAttribute('style', `
          --arrow-start-x: ${centerX}px;
          --arrow-start-y: ${centerY}px;
        `);
      });
    };

    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[600px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Main Company Node */}
      <div 
        ref={ref}
        className={`
          absolute left-1/2 top-0 -translate-x-1/2
          transition-all duration-700
          ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}
        `}
      >
        {mainCompany && (
          <CompanyNode company={mainCompany} isMain />
        )}
      </div>

      {/* Subsidiary Nodes */}
      <div className="absolute inset-x-0 top-[300px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {subsidiaries.map((company, index) => (
            <div
              key={company.id}
              className={`
                relative transition-all duration-700
                ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <CompanyNode company={company} />
              <FlowArrow from="main" to={company.id} isVisible={isIntersecting} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}