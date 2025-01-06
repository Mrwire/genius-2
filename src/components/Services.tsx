import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ServicesHeader from './services/ServicesHeader';
import ServicesGrid from './services/ServicesGrid';

export default function Services() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-24 bg-[#191C1F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ServicesHeader isInView={isIntersecting} />
        <ServicesGrid isInView={isIntersecting} />
      </div>
    </section>
  );
}