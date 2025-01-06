import { useState } from 'react';
import { motion } from 'framer-motion';
import LottieAnimation from '../common/LottieAnimation';
import type { ServiceCardProps } from './types';

export default function ServiceCard({ service, isInView, delay = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div
        className={`
          relative
          w-full aspect-[4/5]
          bg-white/80 backdrop-blur-sm
          rounded-2xl
          shadow-[0_0_50px_rgba(0,0,0,0.1)]
          hover:shadow-[0_0_50px_rgba(0,0,0,0.15)]
          transform hover:scale-[1.02] hover:-translate-y-1
          transition-all duration-500
          overflow-hidden
          p-8
          sm:p-6 lg:p-8
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animation Container */}
        <div className="
          relative
          h-32 sm:h-28 lg:h-32
          flex items-center justify-center
          mb-6
        ">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <div className={`
            w-32 h-32 sm:w-28 sm:h-28 lg:w-32 lg:h-32
            transition-all duration-500
            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}>
            <LottieAnimation
              src={service.animation}
              autoplay={isHovered}
              loop={true}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="
            text-xl sm:text-lg lg:text-xl
            font-bold text-gray-900
            font-space-grotesk tracking-tight
            relative
          ">
            {service.title}
            <div className="
              absolute -bottom-2 left-0
              w-12 h-0.5
              bg-gradient-to-r from-blue-500 to-purple-500
              transform scale-x-0 group-hover:scale-x-100
              transition-transform duration-300
            " />
          </h3>

          <ul className="space-y-3">
            {service.services.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: delay + (index * 0.1) }}
                className="
                  flex items-center text-gray-600
                  text-sm sm:text-xs lg:text-sm
                  transform group-hover:translate-x-1
                  transition-transform duration-300
                  hover:text-gray-900
                "
              >
                <div className="
                  w-1.5 h-1.5 rounded-full
                  bg-gradient-to-r from-blue-500 to-purple-500
                  mr-3 flex-shrink-0
                " />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}