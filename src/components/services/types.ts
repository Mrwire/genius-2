import { LottiePlayer } from '@lottiefiles/react-lottie-player';

export interface Service {
  id: string;
  title: string;
  animation: string;
  services: string[];
  description?: string;
  features?: string[];
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ServiceCardProps {
  service: Service;
  isInView: boolean;
  delay?: number;
  index?: number;
}

export interface ServicesGridProps {
  isInView: boolean;
}

export interface ServicesHeaderProps {
  isInView: boolean;
}