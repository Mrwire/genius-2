import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ServicesHeader from './components/ServicesHeader';
import ServicesGrid from './components/ServicesGrid';
import BackgroundEffects from '../backgrounds/BackgroundEffects';

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative py-24 bg-[#191C1F] overflow-hidden">
      <BackgroundEffects variant="subtle" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader isInView={isIntersecting} />
        <ServicesGrid isInView={isIntersecting} />
      </div>
    </section>
  );
}