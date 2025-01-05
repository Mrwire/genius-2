import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  services: string[];
  animation: string;
  icon: LucideIcon;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
  isInView: boolean;
}

export interface ServicesGridProps {
  isInView: boolean;
}

export interface ServicesHeaderProps {
  isInView: boolean;
}