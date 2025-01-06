import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="bg-gray-900 py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Contactez-nous
        </h2>
        {/* Contenu à venir */}
      </div>
    </section>
  );
} 