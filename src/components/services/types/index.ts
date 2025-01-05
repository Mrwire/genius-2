import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface AnimatedProps {
  isInView: boolean;
  delay?: number;
}

export interface ServiceCardProps extends AnimatedProps {
  service: Service;
}

export interface ServicesGridProps extends AnimatedProps {}
export interface ServicesHeaderProps extends AnimatedProps {}