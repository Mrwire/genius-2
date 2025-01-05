import ServiceCard from './ServiceCard';
import { SERVICES } from './constants';

interface ServicesGridProps {
  isInView: boolean;
}

export default function ServicesGrid({ isInView }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          isInView={isInView}
          delay={index * 100}
        />
      ))}
    </div>
  );
}