import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../constants';
import type { ServicesGridProps } from '../types';

export default function ServicesGrid({ isInView }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {SERVICES.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
}