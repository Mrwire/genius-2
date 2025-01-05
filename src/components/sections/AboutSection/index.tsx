import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import './styles.css';

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen bg-white py-24 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`
            grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
            transition-all duration-700
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
        >
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </section>
  );
}