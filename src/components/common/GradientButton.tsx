import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  href: string;
  text: string;
  external?: boolean;
  className?: string;
}

export default function GradientButton({ href, text, external = false, className = '' }: GradientButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        group
        inline-flex items-center
        px-8 py-4
        bg-gradient-to-r from-blue-600/10 to-purple-600/10
        hover:from-blue-600 hover:to-purple-600
        border border-blue-500/20
        rounded-full
        text-white font-semibold
        transition-all duration-300
        hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
        overflow-hidden
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center">
        {text}
        <motion.div
          className="ml-2"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </span>
    </motion.a>
  );
} 