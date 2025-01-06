import { motion } from 'framer-motion';
import type { Company } from './types';

interface CompanyCardProps {
  company: Company;
  onClick: () => void;
  index: number;
  isInView: boolean;
}

export default function CompanyCard({ company, onClick, index, isInView }: CompanyCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative group text-left w-full
        transition-all duration-700
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
        {/* Logo Container */}
        <div className="h-20 mb-6 flex items-center justify-center">
          <img 
            src={company.logo} 
            alt={company.name} 
            className="
              h-full w-auto object-contain
              filter brightness-0 invert opacity-80
              group-hover:opacity-100 transition-all duration-300
              group-hover:transform group-hover:scale-110
            "
          />
        </div>

        {/* Text Content */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-white">
            {company.name}
          </h3>
          <p className="text-gray-400">
            {company.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
} 