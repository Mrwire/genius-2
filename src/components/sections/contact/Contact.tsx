import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isIntersecting ? 1 : 0, x: isIntersecting ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Parlons de vos projets et donnons vie à vos idées
            </p>

            <div className="space-y-8">
              {/* Contact details... */}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isIntersecting ? 1 : 0, x: isIntersecting ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Form fields... */}
          </motion.form>
        </div>
      </div>
    </section>
  );
} 