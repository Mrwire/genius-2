import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface GroupHeaderProps {
  isIntersecting: boolean;
}

const GroupHeader = forwardRef<HTMLDivElement, GroupHeaderProps>(
  function GroupHeader({ isIntersecting }, ref) {
    return (
      <div 
        ref={ref}
        className="text-center mb-24"
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="
            inline-block px-6 py-2 mb-6
            bg-gradient-to-r from-blue-500/10 to-purple-500/10
            rounded-full backdrop-blur-sm
            text-sm font-semibold text-blue-400 tracking-[0.2em]
            border border-blue-500/20
          "
        >
          DÉCOUVREZ NOS ENTITÉS
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            text-6xl font-bold mb-6
            font-space-grotesk tracking-tight
            bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent
          "
        >
          LE GROUPE
        </motion.h2>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="
            text-xl tracking-[0.1em] text-gray-400 mb-8
            font-light max-w-2xl mx-auto
          "
        >
          SYNERGIE & EXCELLENCE
        </motion.div>

        {/* Decorative Lines */}
        <div className="relative flex justify-center items-center gap-2">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isIntersecting ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent origin-left"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={isIntersecting ? { scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="
              w-32 h-1
              bg-gradient-to-r from-blue-500 to-purple-500
              animate-gradient-x rounded-full
            "
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isIntersecting ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-16 h-0.5 bg-gradient-to-l from-purple-500 to-transparent origin-right"
          />
        </div>
      </div>
    );
  }
);

export default GroupHeader;