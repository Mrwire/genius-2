import { motion } from 'framer-motion';

interface CompanyArrowsProps {
  isInView: boolean;
}

export default function CompanyArrows({ isInView }: CompanyArrowsProps) {
  return (
    <>
      {/* Desktop Arrows */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-gold/30 to-purple-500/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-2 h-2 border-t border-r border-purple-500/30 rotate-45" />
          </div>
        </motion.div>
      </div>

      {/* Mobile Arrows */}
      <div className="lg:hidden absolute inset-x-0 pointer-events-none">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 h-12 w-px bg-gradient-to-b from-gold/30 to-purple-500/30"
            style={{ top: `${25 + index * 25}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="w-2 h-2 border-r border-b border-purple-500/30 rotate-45" />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
} 