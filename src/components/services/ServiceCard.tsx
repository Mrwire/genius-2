import { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import type { ServiceCardProps } from './types';

export default function ServiceCard({ service, isInView, delay = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`
        group relative
        w-full h-[380px]
        bg-white rounded-2xl
        shadow-sm hover:shadow-lg
        transform hover:scale-[1.02]
        transition-all duration-300
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animation Container */}
      <div className="h-32 flex items-center justify-center p-6 relative">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <Player
          src={service.animation}
          className={`w-24 h-24 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoplay={isHovered}
          loop={true}
          keepLastFrame={true}
          onEvent={event => {
            if (event === 'load') setIsLoaded(true);
          }}
        />
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        <h3 className="
          text-xl font-bold text-gray-900 mb-4
          font-space-grotesk
        ">
          {service.title}
        </h3>

        <ul className="space-y-2">
          {service.services.map((item, index) => (
            <li 
              key={index}
              className="flex items-center text-gray-600"
            >
              <div className="
                w-1.5 h-1.5 rounded-full
                bg-gradient-to-r from-blue-500 to-purple-500
                mr-3
              " />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}