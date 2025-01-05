import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ServicesHeader from './components/ServicesHeader';
import ServicesGrid from './components/ServicesGrid';
import CyberGrid from './components/CyberGrid';

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-32 bg-white overflow-hidden" ref={ref}>
      <CyberGrid />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader isInView={isIntersecting} />
        <ServicesGrid isInView={isIntersecting} />
      </div>
    </section>
  );
}