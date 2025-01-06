import { motion } from 'framer-motion';
import type { Company } from '../types';

interface CompanyGridProps {
  companies: Company[];
  onSelect: (company: Company) => void;
  isInView: boolean;
}

export default function CompanyGrid({ companies, onSelect, isInView }: CompanyGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
      {/* Connection Lines */}
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M100,50 L300,50 M300,150 L500,150"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-dash"
          />
        </svg>
      </div>

      {companies.map((company, index) => (
        <motion.div
          key={company.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <button
            onClick={() => onSelect(company)}
            className="
              w-full p-8
              bg-white/5 backdrop-blur-sm
              hover:bg-white/10
              border border-white/10
              hover:border-white/20
              rounded-2xl
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
              transform hover:scale-[1.02]
            "
          >
            {/* Logo Container */}
            <div className="
              h-24 mb-6
              flex items-center justify-center
              relative
            ">
              <div className="
                absolute inset-0
                bg-gradient-to-br from-blue-500/5 to-purple-500/5
                rounded-xl
                transform group-hover:scale-110
                transition-transform duration-300
              " />
              <img
                src={company.logo}
                alt={company.name}
                className="
                  h-16 w-auto
                  relative z-10
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>

            {/* Company Name */}
            <h3 className="
              text-xl font-bold text-white mb-3
              font-space-grotesk
            ">
              {company.name}
            </h3>

            {/* Short Description */}
            <p className="
              text-sm text-gray-400
              line-clamp-3
              group-hover:text-gray-300
              transition-colors duration-300
            ">
              {company.shortDescription}
            </p>

            {/* Learn More */}
            <div className="
              mt-6
              inline-flex items-center
              text-blue-400
              group-hover:text-blue-300
              transition-colors duration-300
            ">
              En savoir plus
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                →
              </motion.span>
            </div>
          </button>
        </motion.div>
      ))}
    </div>
  );
}