import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import type { ServiceCardProps } from './types';

export default function ServiceCard({ service, isInView, delay = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`
        group relative
        w-full h-[420px]
        bg-white/80 backdrop-blur-sm
        rounded-2xl
        shadow-[0_0_50px_rgba(0,0,0,0.1)]
        hover:shadow-[0_0_50px_rgba(0,0,0,0.15)]
        transform hover:scale-[1.02] hover:-translate-y-1
        transition-all duration-500
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animation Container */}
      <div className="h-40 flex items-center justify-center p-6 relative">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <div className={`
          w-32 h-32
          transition-all duration-500
          ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          ${isHovered ? 'scale-110' : 'scale-100'}
        `}>
          <DotLottieReact
            src={service.animation}
            autoplay={isHovered}
            loop
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pb-8">
        <h3 className="
          text-2xl font-bold text-gray-900 mb-4
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
            <li 
              key={index}
              className="
                flex items-center text-gray-600
                transform group-hover:translate-x-1
                transition-transform duration-300
                hover:text-gray-900
              "
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="
                w-1.5 h-1.5 rounded-full
                bg-gradient-to-r from-blue-500 to-purple-500
                mr-3 flex-shrink-0
              " />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}