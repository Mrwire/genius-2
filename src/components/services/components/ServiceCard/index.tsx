import { type ServiceCardProps } from '../../types';
import FeatureList from './FeatureList';

export default function ServiceCard({ service, isInView, delay = 0 }: ServiceCardProps) {
  const { icon: Icon, title, description, features } = service;

  return (
    <div className={`
      group relative p-8
      bg-white/5 backdrop-blur-sm rounded-xl
      border border-white/10
      transition-all duration-700
      hover:bg-white/10
      ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
    `}
    style={{ transitionDelay: `${delay}ms` }}>
      <Icon className="w-12 h-12 text-blue-400 mb-6" />
      
      <h3 className="text-xl font-bold text-white mb-3">
        {title}
      </h3>
      
      <p className="text-gray-400 mb-6">
        {description}
      </p>
      
      <FeatureList features={features} />

      <div className="
        absolute bottom-0 left-0 w-full h-1
        bg-gradient-to-r from-blue-500 to-purple-500
        transform scale-x-0 group-hover:scale-x-100
        transition-transform duration-300
      " />
    </div>
  );
}