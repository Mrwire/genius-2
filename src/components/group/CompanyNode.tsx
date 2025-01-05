import { type Company } from './types';

interface CompanyNodeProps {
  company: Company;
  isMain?: boolean;
}

export default function CompanyNode({ company, isMain = false }: CompanyNodeProps) {
  return (
    <div className={`
      relative group cursor-pointer
      transition-all duration-300
      hover:transform hover:scale-105
    `}>
      {/* Logo Container */}
      <div className={`
        relative p-6 rounded-2xl
        bg-black/30 backdrop-blur-sm
        border border-white/10
        transition-all duration-300
        group-hover:border-white/20
        ${isMain ? 'w-48 h-48' : 'w-32 h-32'}
      `}>
        <img
          src={company.logo}
          alt={company.name}
          className={`
            w-full h-full object-contain
            filter brightness-0 invert opacity-80
            transition-all duration-300
            group-hover:opacity-100
          `}
        />
        
        {/* Glow Effect */}
        <div className="
          absolute inset-0 rounded-2xl
          bg-gradient-to-b from-white/5 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        " />
      </div>

      {/* Company Name */}
      <div className="
        absolute -bottom-8 left-1/2 -translate-x-1/2
        text-center whitespace-nowrap
      ">
        <h3 className="text-sm font-medium text-white/80">
          {company.name}
        </h3>
        <p className="text-xs text-white/60 mt-1">
          {company.description}
        </p>
      </div>
    </div>
  );
}