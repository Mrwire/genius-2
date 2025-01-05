import { AnimatedSectionProps } from '../types';

export default function AnimatedSection({ 
  children, 
  isInView, 
  delay = 0 
}: AnimatedSectionProps & { children: React.ReactNode }) {
  return (
    <div className={`
      transition-all duration-700
      ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
    `}
    style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}