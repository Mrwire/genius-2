import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';

export default function Services() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="bg-gray-50 py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Nos Services
        </h2>
        {/* Contenu à venir */}
      </div>
    </section>
  );
} 