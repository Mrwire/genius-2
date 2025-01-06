import { LottiePlayer } from '@lottiefiles/react-lottie-player';

export interface Service {
  id: string;
  title: string;
  animation: string;
  services: string[];
}

export interface ServiceCardProps {
  service: Service;
  isInView: boolean;
  delay?: number;
}

export interface ServicesGridProps {
  isInView: boolean;
}

export interface ServicesHeaderProps {
  isInView: boolean;
}