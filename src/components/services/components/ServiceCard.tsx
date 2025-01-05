import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import type { ServiceCardProps } from '../types';

export default function ServiceCard({ service, index, isInView }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="
        w-full h-[380px] p-8
        bg-white rounded-2xl
        shadow-lg hover:shadow-xl
        transform hover:scale-[1.02]
        transition-all duration-300
      ">
        <div className="h-[120px] mb-6 flex items-center justify-center">
          <Player
            src={service.animation}
            className="w-[120px] h-[120px]"
            hover
            keepLastFrame
          />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {service.title}
        </h3>

        <ul className="space-y-3">
          {service.services.map((item, i) => (
            <li key={i} className="flex items-center text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}